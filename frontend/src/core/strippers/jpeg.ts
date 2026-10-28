import type { RemovedSegment, StripOptions, StripResult } from '../../types';
import { ascii, concat, matches, ParseError, u16be, u32be } from '../bytes';

/**
 * JPEG Stripper — cấu trúc Marker Segment.
 * Xóa: APP1 (EXIF kèm ảnh thumbnail IFD1, XMP), APP2 (MPF, FlashPix), APP3–APP13 (IPTC, C2PA/JUMBF...),
 *      APP15, COM, ảnh xem trước JFIF/JFXX, và dữ liệu sau EOI (ảnh phụ MPF, ảnh xem trước, video Motion Photo).
 * Giữ: APP0 JFIF (không thumbnail), APP2 ICC, APP14 Adobe, bảng lượng tử/Huffman, SOF (kích thước),
 *      dữ liệu ảnh từ SOS đến EOI, và thẻ Orientation (APP1 tối giản).
 */
export function stripJpeg(src: Uint8Array, opts: StripOptions): StripResult {
  if (!matches(src, 0, [0xff, 0xd8])) throw new ParseError('Missing SOI marker');

  const kept: Uint8Array[] = [src.subarray(0, 2)];
  const removed: RemovedSegment[] = [];
  let orientation: number | undefined;
  let off = 2;

  while (off < src.length) {
    if (src[off] !== 0xff) throw new ParseError('Invalid JPEG marker structure');
    const marker = src[off + 1];
    if (marker === 0xff) {
      off += 1;
      continue;
    }
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      kept.push(src.subarray(off, off + 2));
      off += 2;
      continue;
    }
    if (marker === 0xda || marker === 0xd9) {
      // Dữ liệu ảnh nén: sao chép nguyên vẹn đến hết EOI của ảnh chính (lossless).
      const end = marker === 0xda ? findJpegEnd(src, off) : off + 2;
      kept.push(src.subarray(off, end));
      if (end < src.length) {
        removed.push({ name: 'Data after EOI (MPF / preview / Motion Photo)', bytes: src.length - end });
      }
      break;
    }

    if (off + 4 > src.length) throw new ParseError('Truncated JPEG segment');
    const length = u16be(src, off + 2);
    const end = off + 2 + length;
    if (length < 2 || end > src.length) throw new ParseError('Invalid JPEG segment length');

    if (marker === 0xe0) {
      const app0 = stripApp0Thumbnail(src, off, end);
      if (app0.kept) kept.push(app0.kept);
      if (app0.removed) removed.push(app0.removed);
      off = end;
      continue;
    }

    const verdict = classify(src, off, marker, length, opts);
    if (verdict) {
      removed.push({ name: verdict, bytes: end - off });
      if (verdict === 'EXIF' && opts.keepOrientation && orientation === undefined) {
        orientation = readExifOrientation(src.subarray(off + 10, end));
      }
    } else {
      kept.push(src.subarray(off, end));
    }
    off = end;
  }

  if (orientation !== undefined && orientation !== 1) {
    // APP1 phải đứng sát SOI, hoặc ngay sau APP0 (JFIF) nếu có.
    const insertAt = kept.length > 1 && kept[1][1] === 0xe0 ? 2 : 1;
    kept.splice(insertAt, 0, buildOrientationApp1(orientation));
  }

  return { data: concat(kept), removed };
}

/**
 * Vị trí ngay sau marker EOI của ảnh chính, bắt đầu từ SOS đầu tiên.
 * Bỏ qua byte nhồi (FF 00), marker RST và các segment xen giữa các scan của JPEG progressive.
 * Cấu trúc bất thường → trả về độ dài tệp (giữ nguyên phần còn lại, không cắt nhầm dữ liệu ảnh).
 */
export function findJpegEnd(src: Uint8Array, sos: number): number {
  let off = sos;
  while (off + 1 < src.length) {
    if (src[off] !== 0xff) return src.length;
    const marker = src[off + 1];
    if (marker === 0xff) {
      off++;
      continue;
    }
    if (marker === 0xd9) return off + 2;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      off += 2;
      continue;
    }
    if (off + 4 > src.length) return src.length;
    off += 2 + u16be(src, off + 2);
    if (marker !== 0xda) continue;

    // Dữ liệu entropy: chạy đến marker thật đầu tiên (FF không theo sau bởi 00 / RSTn / FF).
    for (;;) {
      off = src.indexOf(0xff, off);
      if (off < 0 || off + 1 >= src.length) return src.length;
      const next = src[off + 1];
      if (next === 0x00 || (next >= 0xd0 && next <= 0xd7)) off += 2;
      else if (next === 0xff) off += 1;
      else break;
    }
  }
  return src.length;
}

/** APP0: JFIF giữ lại nhưng bỏ ảnh thumbnail nhúng; JFXX (chỉ chứa thumbnail) bị xóa. */
function stripApp0Thumbnail(src: Uint8Array, off: number, end: number): { kept?: Uint8Array; removed?: RemovedSegment } {
  const p = off + 4;
  if (matches(src, p, 'JFXX\0')) return { removed: { name: 'Preview (JFXX)', bytes: end - off } };
  if (matches(src, p, 'JFIF\0') && end - p >= 14 && src[p + 12] * src[p + 13] > 0) {
    const app0 = src.slice(off, off + 18); // FF E0 + length + 14 byte JFIF
    app0[2] = 0;
    app0[3] = 16;
    app0[16] = 0;
    app0[17] = 0;
    return { kept: app0, removed: { name: 'Preview (JFIF thumbnail)', bytes: end - off - 18 } };
  }
  return { kept: src.subarray(off, end) };
}

function classify(src: Uint8Array, off: number, marker: number, length: number, opts: StripOptions): string | null {
  const payload = off + 4;
  const id = ascii(src, payload, Math.min(length - 2, 40));

  switch (marker) {
    case 0xe1:
      if (id.startsWith('Exif\0')) return 'EXIF';
      if (id.startsWith('http://ns.adobe.com/xap/1.0/')) return 'XMP';
      if (id.startsWith('http://ns.adobe.com/xmp/extension/')) return 'XMP (Extended)';
      return 'APP1';
    case 0xe2:
      if (id.startsWith('ICC_PROFILE\0')) return opts.keepIccProfile ? null : 'ICC Profile';
      if (id.startsWith('MPF\0')) return 'MPF';
      return 'APP2';
    case 0xeb:
      return id.startsWith('JP') ? 'C2PA / JUMBF' : 'APP11';
    case 0xed:
      return 'IPTC / Photoshop';
    case 0xfe:
      return 'Comment';
    case 0xee:
      return null;
    default:
      if (marker >= 0xe0 && marker <= 0xef) return `APP${marker - 0xe0}`;
      return null;
  }
}

/** Đọc thẻ Orientation (0x0112) trong IFD0 của khối TIFF bên trong EXIF. */
export function readExifOrientation(tiff: Uint8Array): number | undefined {
  if (matches(tiff, 0, 'Exif\0\0')) tiff = tiff.subarray(6);
  if (tiff.length < 8) return undefined;
  const le = matches(tiff, 0, 'II');
  if (!le && !matches(tiff, 0, 'MM')) return undefined;
  const r16 = (o: number) => (le ? tiff[o] | (tiff[o + 1] << 8) : u16be(tiff, o));
  const r32 = (o: number) =>
    le ? (tiff[o] | (tiff[o + 1] << 8) | (tiff[o + 2] << 16)) + tiff[o + 3] * 0x1000000 : u32be(tiff, o);

  const ifd = r32(4);
  if (ifd + 2 > tiff.length) return undefined;
  const count = r16(ifd);
  for (let i = 0; i < count; i++) {
    const entry = ifd + 2 + i * 12;
    if (entry + 12 > tiff.length) return undefined;
    if (r16(entry) === 0x0112) {
      const value = r16(entry + 8);
      return value >= 1 && value <= 8 ? value : undefined;
    }
  }
  return undefined;
}

/** Khối TIFF tối giản (big-endian) chỉ chứa thẻ Orientation — dùng chung cho JPEG, PNG, WebP. */
export function buildOrientationTiff(orientation: number): Uint8Array {
  // prettier-ignore
  return new Uint8Array([
    0x4d, 0x4d, 0x00, 0x2a, 0x00, 0x00, 0x00, 0x08, // TIFF header MM, IFD0 @ 8
    0x00, 0x01,                                     // 1 entry
    0x01, 0x12, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, // tag 0x0112, SHORT, count 1
    0x00, orientation, 0x00, 0x00,                  // value
    0x00, 0x00, 0x00, 0x00,                         // next IFD = 0
  ]);
}

/** APP1 EXIF tối giản chỉ chứa thẻ Orientation. */
export function buildOrientationApp1(orientation: number): Uint8Array {
  const tiff = buildOrientationTiff(orientation);
  const length = 2 + 6 + tiff.length;
  return concat([new Uint8Array([0xff, 0xe1, length >> 8, length & 0xff, 0x45, 0x78, 0x69, 0x66, 0, 0]), tiff]);
}
