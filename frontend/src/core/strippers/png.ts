import type { RemovedSegment, StripOptions, StripResult } from '../../types';
import { ascii, concat, crc32, cString, ParseError, u32be } from '../bytes';
import { buildOrientationTiff, readExifOrientation } from './jpeg';

const TEXT_CHUNKS = new Set(['tEXt', 'zTXt', 'iTXt']);
const METADATA_CHUNKS: Record<string, string> = {
  eXIf: 'EXIF',
  caBX: 'C2PA',
  tIME: 'Modification time',
  dSIG: 'Digital signature',
};

/**
 * PNG Stripper — cấu trúc Chunk.
 * Xóa tEXt/zTXt/iTXt (prompt Stable Diffusion, workflow ComfyUI, XMP, Author, Software...), eXIf,
 * caBX (C2PA), tIME, dSIG. Giữ IHDR, IDAT, PLTE, tRNS, các chunk màu (gAMA, cHRM, sRGB, cICP, iCCP),
 * pHYs và chunk hoạt ảnh APNG (acTL, fcTL, fdAT). Hướng xoay trong eXIf được ghi lại bằng eXIf tối giản.
 */
export function stripPng(src: Uint8Array, opts: StripOptions): StripResult {
  const kept: Uint8Array[] = [src.subarray(0, 8)];
  const removed: RemovedSegment[] = [];
  let off = 8;

  while (off + 12 <= src.length) {
    const length = u32be(src, off);
    const type = ascii(src, off + 4, 4);
    const end = off + 12 + length;
    if (end > src.length) throw new ParseError(`Truncated ${type} chunk`);

    const name = classify(type, opts);
    if (name) {
      const detail = TEXT_CHUNKS.has(type) ? cString(src, off + 8, Math.min(length, 79)).value : undefined;
      removed.push({ name, bytes: end - off, detail });
      if (type === 'eXIf' && opts.keepOrientation) {
        const orientation = readExifOrientation(src.subarray(off + 8, off + 8 + length));
        if (orientation !== undefined && orientation !== 1) kept.push(pngChunk('eXIf', buildOrientationTiff(orientation)));
      }
    } else {
      kept.push(src.subarray(off, end));
    }
    off = end;
    if (type === 'IEND') break;
  }

  return { data: concat(kept), removed };
}

function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const body = new Uint8Array(4 + data.length);
  for (let i = 0; i < 4; i++) body[i] = type.charCodeAt(i);
  body.set(data, 4);
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  out.set(body, 4);
  view.setUint32(8 + data.length, crc32(body));
  return out;
}

function classify(type: string, opts: StripOptions): string | null {
  if (TEXT_CHUNKS.has(type)) return `Text (${type})`;
  if (type === 'iCCP') return opts.keepIccProfile ? null : 'ICC Profile';
  return METADATA_CHUNKS[type] ?? null;
}
