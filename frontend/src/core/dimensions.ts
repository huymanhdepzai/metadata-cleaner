import type { ImageFormat } from '../types';
import { ascii, matches, ParseError, u16be, u16le, u24le, u32be, u32le, uintBE } from './bytes';
import { childBoxes, findChild, fullBoxBody } from './isobmff';

/**
 * Byte-level Dimension Checker: lấy Width × Height bằng cách đọc vài KB header,
 * không dùng Image() hay Canvas (tránh decode ảnh 40MP gây treo trình duyệt).
 */
export interface ByteSource {
  size: number;
  read(offset: number, length: number): Promise<Uint8Array>;
}

export interface Dimensions {
  width: number;
  height: number;
}

export const blobSource = (blob: Blob): ByteSource => ({
  size: blob.size,
  read: async (offset, length) => new Uint8Array(await blob.slice(offset, offset + length).arrayBuffer()),
});

export const bufferSource = (b: Uint8Array): ByteSource => ({
  size: b.length,
  read: async (offset, length) => b.subarray(offset, Math.min(b.length, offset + length)),
});

const MAX_META_BOX_BYTES = 16 * 1024 * 1024;

export async function readDimensions(src: ByteSource, format: ImageFormat): Promise<Dimensions> {
  switch (format) {
    case 'png':
      return pngDimensions(await src.read(0, 24));
    case 'gif':
      return gifDimensions(await src.read(0, 10));
    case 'webp':
      return webpDimensions(await src.read(0, 30));
    case 'jpeg':
      return jpegDimensions(src);
    case 'heif':
    case 'avif':
      return isobmffDimensions(src);
  }
}

function pngDimensions(h: Uint8Array): Dimensions {
  if (h.length < 24 || !matches(h, 12, 'IHDR')) throw new ParseError('Missing IHDR chunk');
  return { width: u32be(h, 16), height: u32be(h, 20) };
}

function gifDimensions(h: Uint8Array): Dimensions {
  if (h.length < 10) throw new ParseError('Truncated GIF header');
  return { width: u16le(h, 6), height: u16le(h, 8) };
}

function webpDimensions(h: Uint8Array): Dimensions {
  const chunk = ascii(h, 12, 4);
  if (chunk === 'VP8X' && h.length >= 30) {
    return { width: u24le(h, 24) + 1, height: u24le(h, 27) + 1 };
  }
  if (chunk === 'VP8 ' && h.length >= 30 && matches(h, 23, [0x9d, 0x01, 0x2a])) {
    return { width: u16le(h, 26) & 0x3fff, height: u16le(h, 28) & 0x3fff };
  }
  if (chunk === 'VP8L' && h.length >= 25 && h[20] === 0x2f) {
    const bits = u32le(h, 21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 };
  }
  throw new ParseError('Cannot read WebP dimensions');
}

/** Duyệt các marker JPEG đến khi gặp SOF (Start of Frame). */
async function jpegDimensions(src: ByteSource): Promise<Dimensions> {
  let off = 2;
  for (let guard = 0; guard < 10_000 && off + 4 <= src.size; guard++) {
    const h = await src.read(off, 10);
    if (h[0] !== 0xff) throw new ParseError('Invalid JPEG marker');
    const marker = h[1];
    if (marker === 0xff) {
      off += 1;
      continue;
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      off += 2;
      continue;
    }
    if (marker === 0xda || marker === 0xd9) break;
    const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSof) {
      if (h.length < 9) break;
      return { height: u16be(h, 5), width: u16be(h, 7) };
    }
    off += 2 + u16be(h, 2);
  }
  throw new ParseError('SOF marker not found');
}

/** HEIC/AVIF: tìm box `meta` ở cấp cao nhất, sau đó quét các box `ispe` (Image Spatial Extents). */
async function isobmffDimensions(src: ByteSource): Promise<Dimensions> {
  let off = 0;
  while (off + 8 <= src.size) {
    const h = await src.read(off, 16);
    let size = u32be(h, 0);
    const type = ascii(h, 4, 4);
    if (size === 1) size = uintBE(h, 8, 8);
    else if (size === 0) size = src.size - off;
    if (size < 8) throw new ParseError(`Invalid ${type} box size`);

    if (type === 'meta') {
      if (size > MAX_META_BOX_BYTES) throw new ParseError('meta box too large');
      const meta = await src.read(off, size);
      const dims = largestIspe(meta);
      if (dims) return dims;
      break;
    }
    off += size;
  }
  throw new ParseError('ispe box not found');
}

/**
 * Ảnh dạng lưới (grid) có nhiều ispe: ô con nhỏ, ảnh tổng lớn nhất.
 * Lấy ispe có diện tích lớn nhất là kiểm tra an toàn cho giới hạn megapixel.
 */
export function largestIspe(meta: Uint8Array): Dimensions | null {
  const metaBox = findChild(meta, 0, meta.length, 'meta');
  if (!metaBox) return null;
  const iprp = findChild(meta, fullBoxBody(metaBox), metaBox.end, 'iprp');
  if (!iprp) return null;
  const ipco = findChild(meta, iprp.start + iprp.headerSize, iprp.end, 'ipco');
  if (!ipco) return null;

  let best: Dimensions | null = null;
  for (const box of childBoxes(meta, ipco.start + ipco.headerSize, ipco.end)) {
    if (box.type !== 'ispe') continue;
    const p = fullBoxBody(box);
    if (p + 8 > box.end) continue;
    const dims = { width: u32be(meta, p), height: u32be(meta, p + 4) };
    if (!best || dims.width * dims.height > best.width * best.height) best = dims;
  }
  return best;
}
