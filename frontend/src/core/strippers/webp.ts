import type { RemovedSegment, StripOptions, StripResult } from '../../types';
import { ascii, concat, matches, ParseError, u32le, writeU32le } from '../bytes';
import { buildOrientationTiff, readExifOrientation } from './jpeg';

// Cờ trong byte đầu của chunk VP8X.
const FLAG_ICC = 0x20;
const FLAG_EXIF = 0x08;
const FLAG_XMP = 0x04;

/**
 * WebP Stripper — container RIFF.
 * Xóa chunk EXIF, "XMP " (có dấu cách), C2PA; giữ VP8/VP8L/ALPH, ICCP và hoạt ảnh (ANIM, ANMF).
 * Hướng xoay trong EXIF được ghi lại bằng chunk EXIF tối giản. Cập nhật cờ VP8X và kích thước RIFF.
 */
export function stripWebp(src: Uint8Array, opts: StripOptions): StripResult {
  if (!matches(src, 0, 'RIFF') || !matches(src, 8, 'WEBP')) throw new ParseError('Not a RIFF/WEBP container');

  const kept: Uint8Array[] = [];
  const removed: RemovedSegment[] = [];
  let vp8x: Uint8Array | null = null;
  let clearFlags = 0;
  let keptOrientation = false;
  const riffEnd = Math.min(src.length, 8 + u32le(src, 4));
  let off = 12;

  while (off + 8 <= riffEnd) {
    const fourcc = ascii(src, off, 4);
    const size = u32le(src, off + 4);
    const end = Math.min(riffEnd, off + 8 + size + (size & 1));
    if (off + 8 + size > riffEnd) throw new ParseError(`Truncated ${fourcc} chunk`);

    let name: string | null = null;
    if (fourcc === 'EXIF') {
      name = 'EXIF';
      const orientation = opts.keepOrientation ? readExifOrientation(src.subarray(off + 8, off + 8 + size)) : undefined;
      if (orientation !== undefined && orientation !== 1 && !keptOrientation) {
        kept.push(riffChunk('EXIF', buildOrientationTiff(orientation)));
        keptOrientation = true;
      }
    } else if (fourcc === 'XMP ') {
      name = 'XMP';
      clearFlags |= FLAG_XMP;
    } else if (fourcc === 'C2PA') {
      name = 'C2PA';
    } else if (fourcc === 'ICCP' && !opts.keepIccProfile) {
      name = 'ICC Profile';
      clearFlags |= FLAG_ICC;
    }

    if (name) {
      removed.push({ name, bytes: end - off });
    } else if (fourcc === 'VP8X') {
      vp8x = src.slice(off, end);
      kept.push(vp8x);
    } else {
      kept.push(src.subarray(off, end));
    }
    off = end;
  }

  if (!keptOrientation) clearFlags |= FLAG_EXIF;
  if (vp8x && vp8x.length > 8) vp8x[8] &= ~clearFlags;

  const body = concat(kept);
  const header = new Uint8Array(12);
  header.set(src.subarray(0, 12));
  writeU32le(header, 4, body.length + 4);
  return { data: concat([header, body]), removed };
}

function riffChunk(fourcc: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(8 + data.length + (data.length & 1));
  for (let i = 0; i < 4; i++) out[i] = fourcc.charCodeAt(i);
  writeU32le(out, 4, data.length);
  out.set(data, 8);
  return out;
}
