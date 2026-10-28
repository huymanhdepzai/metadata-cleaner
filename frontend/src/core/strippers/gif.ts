import type { RemovedSegment, StripOptions, StripResult } from '../../types';
import { ascii, concat, ParseError } from '../bytes';

/** Application Extension cần giữ: vòng lặp animation (NETSCAPE/ANIMEXTS). */
const LOOP_EXTENSIONS = new Set(['NETSCAPE2.0', 'ANIMEXTS1.0']);

/**
 * GIF Stripper — chuỗi khối (Block sequence).
 * Xóa Application Extension chứa metadata (XMP, ...), Comment Extension và dữ liệu thừa sau Trailer.
 * Giữ nguyên Image Descriptor, Graphic Control Extension và dữ liệu điểm ảnh LZW.
 */
export function stripGif(src: Uint8Array, opts: StripOptions): StripResult {
  if (src.length < 13) throw new ParseError('Truncated GIF header');
  const packed = src[10];
  let off = 13 + (packed & 0x80 ? 3 * (1 << ((packed & 0x07) + 1)) : 0);
  if (off > src.length) throw new ParseError('Truncated global color table');

  const kept: Uint8Array[] = [src.subarray(0, off)];
  const removed: RemovedSegment[] = [];

  const skipSubBlocks = (o: number): number => {
    for (;;) {
      if (o >= src.length) throw new ParseError('Truncated GIF sub-block');
      const n = src[o];
      o += 1 + n;
      if (n === 0) return o;
    }
  };

  while (off < src.length) {
    const start = off;
    const introducer = src[off];

    if (introducer === 0x3b) {
      kept.push(src.subarray(off, off + 1));
      if (off + 1 < src.length) removed.push({ name: 'Data after trailer', bytes: src.length - off - 1 });
      return { data: concat(kept), removed };
    }

    if (introducer === 0x2c) {
      const flags = src[off + 9];
      off += 10;
      if (flags & 0x80) off += 3 * (1 << ((flags & 0x07) + 1));
      off = skipSubBlocks(off + 1); // +1: LZW minimum code size
      kept.push(src.subarray(start, off));
      continue;
    }

    if (introducer === 0x21) {
      const label = src[off + 1];
      off = skipSubBlocks(off + 2);
      let name: string | null = null;

      if (label === 0xff) {
        const appId = ascii(src, start + 3, 11);
        if (appId === 'ICCRGBG1012') name = opts.keepIccProfile ? null : 'ICC Profile';
        else if (appId === 'XMP DataXMP') name = 'XMP';
        else if (!LOOP_EXTENSIONS.has(appId)) name = `Application Extension (${appId.trim()})`;
      } else if (label === 0xfe) {
        name = 'Comment';
      }

      if (name) removed.push({ name, bytes: off - start });
      else kept.push(src.subarray(start, off));
      continue;
    }

    throw new ParseError(`Unknown GIF block (0x${introducer.toString(16)})`);
  }

  // File thiếu Trailer: bổ sung để tệp đầu ra hợp lệ.
  kept.push(new Uint8Array([0x3b]));
  return { data: concat(kept), removed };
}
