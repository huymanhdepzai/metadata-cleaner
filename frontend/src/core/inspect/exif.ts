import type { FieldCategory, MetadataField } from '../../types';
import { clean, decode, isMostlyPrintable } from './text';

type TagDef = [name: string, category: FieldCategory];

const IFD0_TAGS: Record<number, TagDef> = {
  0x010e: ['ImageDescription', 'personal'],
  0x010f: ['Make', 'personal'],
  0x0110: ['Model', 'personal'],
  0x0112: ['Orientation', 'technical'],
  0x011a: ['XResolution', 'technical'],
  0x011b: ['YResolution', 'technical'],
  0x0128: ['ResolutionUnit', 'technical'],
  0x0131: ['Software', 'technical'],
  0x0132: ['DateTime', 'time'],
  0x013b: ['Artist', 'personal'],
  0x0213: ['YCbCrPositioning', 'technical'],
  0x8298: ['Copyright', 'personal'],
  0x9c9b: ['XPTitle', 'personal'],
  0x9c9c: ['XPComment', 'personal'],
  0x9c9d: ['XPAuthor', 'personal'],
  0x9c9e: ['XPKeywords', 'personal'],
  0x9c9f: ['XPSubject', 'personal'],
};

const EXIF_TAGS: Record<number, TagDef> = {
  0x829a: ['ExposureTime', 'technical'],
  0x829d: ['FNumber', 'technical'],
  0x8822: ['ExposureProgram', 'technical'],
  0x8827: ['ISO', 'technical'],
  0x9000: ['ExifVersion', 'technical'],
  0x9003: ['DateTimeOriginal', 'time'],
  0x9004: ['DateTimeDigitized', 'time'],
  0x9010: ['OffsetTime', 'time'],
  0x9011: ['OffsetTimeOriginal', 'time'],
  0x9012: ['OffsetTimeDigitized', 'time'],
  0x9101: ['ComponentsConfiguration', 'technical'],
  0x9201: ['ShutterSpeedValue', 'technical'],
  0x9202: ['ApertureValue', 'technical'],
  0x9204: ['ExposureBiasValue', 'technical'],
  0x9207: ['MeteringMode', 'technical'],
  0x9209: ['Flash', 'technical'],
  0x920a: ['FocalLength', 'technical'],
  0x927c: ['MakerNote', 'personal'],
  0x9286: ['UserComment', 'personal'],
  0x9290: ['SubSecTime', 'time'],
  0x9291: ['SubSecTimeOriginal', 'time'],
  0x9292: ['SubSecTimeDigitized', 'time'],
  0xa000: ['FlashpixVersion', 'technical'],
  0xa001: ['ColorSpace', 'technical'],
  0xa002: ['PixelXDimension', 'technical'],
  0xa003: ['PixelYDimension', 'technical'],
  0xa402: ['ExposureMode', 'technical'],
  0xa403: ['WhiteBalance', 'technical'],
  0xa405: ['FocalLengthIn35mmFilm', 'technical'],
  0xa406: ['SceneCaptureType', 'technical'],
  0xa420: ['ImageUniqueID', 'personal'],
  0xa430: ['CameraOwnerName', 'personal'],
  0xa431: ['BodySerialNumber', 'personal'],
  0xa432: ['LensSpecification', 'technical'],
  0xa433: ['LensMake', 'personal'],
  0xa434: ['LensModel', 'personal'],
  0xa435: ['LensSerialNumber', 'personal'],
};

const GPS_TAGS: Record<number, TagDef> = {
  0x00: ['GPSVersionID', 'location'],
  0x01: ['GPSLatitudeRef', 'location'],
  0x02: ['GPSLatitude', 'location'],
  0x03: ['GPSLongitudeRef', 'location'],
  0x04: ['GPSLongitude', 'location'],
  0x05: ['GPSAltitudeRef', 'location'],
  0x06: ['GPSAltitude', 'location'],
  0x07: ['GPSTimeStamp', 'time'],
  0x0c: ['GPSSpeedRef', 'location'],
  0x0d: ['GPSSpeed', 'location'],
  0x10: ['GPSImgDirectionRef', 'location'],
  0x11: ['GPSImgDirection', 'location'],
  0x12: ['GPSMapDatum', 'location'],
  0x1b: ['GPSProcessingMethod', 'location'],
  0x1d: ['GPSDateStamp', 'time'],
  0x1f: ['GPSHPositioningError', 'location'],
};

const TYPE_SIZE = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8];
const EXIF_IFD_POINTER = 0x8769;
const GPS_IFD_POINTER = 0x8825;
const INTEROP_POINTER = 0xa005;
const MAX_VALUES = 16;

/** Đọc khối TIFF của EXIF (IFD0 → Exif IFD, GPS IFD) thành danh sách trường đã giải mã. */
export function parseExif(tiff: Uint8Array): MetadataField[] {
  if (tiff.length < 8) return [];
  const le = tiff[0] === 0x49 && tiff[1] === 0x49;
  if (!le && !(tiff[0] === 0x4d && tiff[1] === 0x4d)) return [];

  const view = new DataView(tiff.buffer, tiff.byteOffset, tiff.byteLength);
  const len = tiff.length;
  const u16 = (o: number) => view.getUint16(o, le);
  const u32 = (o: number) => view.getUint32(o, le);
  const fields: MetadataField[] = [];
  const visited = new Set<number>();

  const readNumber = (type: number, o: number): number => {
    switch (type) {
      case 1:
      case 7:
        return view.getUint8(o);
      case 6:
        return view.getInt8(o);
      case 3:
        return u16(o);
      case 8:
        return view.getInt16(o, le);
      case 4:
        return u32(o);
      case 9:
        return view.getInt32(o, le);
      case 5: {
        const d = u32(o + 4);
        return d === 0 ? 0 : u32(o) / d;
      }
      case 10: {
        const d = view.getInt32(o + 4, le);
        return d === 0 ? 0 : view.getInt32(o, le) / d;
      }
      case 11:
        return view.getFloat32(o, le);
      case 12:
        return view.getFloat64(o, le);
      default:
        return 0;
    }
  };

  const numbers = (type: number, count: number, o: number) => {
    const out: number[] = [];
    for (let i = 0; i < Math.min(count, MAX_VALUES); i++) out.push(readNumber(type, o + i * TYPE_SIZE[type]));
    return out;
  };

  const fmt = (v: number) => (Number.isInteger(v) ? String(v) : String(+v.toFixed(4)));

  const formatValue = (tag: number, type: number, count: number, o: number): string => {
    const raw = tiff.subarray(o, o + count * TYPE_SIZE[type]);
    if (type === 2) return clean(decode(raw));
    if (tag === 0x9286) return decodeUserComment(raw);
    if (tag >= 0x9c9b && tag <= 0x9c9f) return clean(decode(raw, 'utf-16le'));
    if (tag === 0x927c) return `[MakerNote · ${raw.length} B]`;
    if (tag === 0x9000 || tag === 0xa000) return clean(decode(raw, 'latin1'));
    if (type === 7 && count > 4) return isMostlyPrintable(raw) ? clean(decode(raw)) : `[binary · ${raw.length} B]`;

    const vals = numbers(type, count, o);
    if (tag === 0x829a && vals[0] > 0) return vals[0] < 1 ? `1/${Math.round(1 / vals[0])} s` : `${fmt(vals[0])} s`;
    if (tag === 0x829d) return `f/${fmt(vals[0])}`;
    if (tag === 0x920a) return `${fmt(vals[0])} mm`;
    return vals.map(fmt).join(', ') + (count > MAX_VALUES ? ' …' : '');
  };

  type Raw = { type: number; count: number; offset: number };

  const readIfd = (offset: number, defs: Record<number, TagDef>, group: string): Map<number, Raw> => {
    const raw = new Map<number, Raw>();
    if (visited.has(offset) || offset + 2 > len) return raw;
    visited.add(offset);

    const count = u16(offset);
    for (let i = 0; i < count; i++) {
      const e = offset + 2 + i * 12;
      if (e + 12 > len) break;
      const tag = u16(e);
      const type = u16(e + 2);
      const n = u32(e + 4);
      const size = TYPE_SIZE[type];
      if (!size) continue;
      const bytes = n * size;
      const dataOff = bytes <= 4 ? e + 8 : u32(e + 8);
      if (dataOff + bytes > len) continue;
      raw.set(tag, { type, count: n, offset: dataOff });
      if (tag === EXIF_IFD_POINTER || tag === GPS_IFD_POINTER || tag === INTEROP_POINTER) continue;

      const def = defs[tag];
      const value = formatValue(tag, type, n, dataOff);
      if (!value) continue;
      fields.push({
        group,
        name: def?.[0] ?? `Tag 0x${tag.toString(16).padStart(4, '0')}`,
        value,
        category: def?.[1] ?? 'technical',
      });
    }
    return raw;
  };

  const ifd0 = readIfd(u32(4), IFD0_TAGS, 'EXIF · IFD0');
  const exifPtr = ifd0.get(EXIF_IFD_POINTER);
  if (exifPtr) readIfd(u32(exifPtr.offset), EXIF_TAGS, 'EXIF · Exif');
  const gpsPtr = ifd0.get(GPS_IFD_POINTER);
  if (gpsPtr) {
    const gps = readIfd(u32(gpsPtr.offset), GPS_TAGS, 'EXIF · GPS');
    const position = gpsPosition(gps, (r) => numbers(r.type, r.count, r.offset), (r) => decode(tiff.subarray(r.offset, r.offset + 1), 'latin1'));
    if (position) fields.push({ group: 'EXIF · GPS', name: 'GPSPosition', value: position, category: 'location' });
  }

  return fields;
}

function gpsPosition<R>(gps: Map<number, R>, nums: (r: R) => number[], ref: (r: R) => string): string | null {
  const lat = gps.get(0x02);
  const lon = gps.get(0x04);
  if (!lat || !lon) return null;
  const toDeg = (v: number[]) => (v[0] ?? 0) + (v[1] ?? 0) / 60 + (v[2] ?? 0) / 3600;
  let la = toDeg(nums(lat));
  let lo = toDeg(nums(lon));
  const latRef = gps.get(0x01);
  const lonRef = gps.get(0x03);
  if (latRef && ref(latRef) === 'S') la = -la;
  if (lonRef && ref(lonRef) === 'W') lo = -lo;
  if (la === 0 && lo === 0) return null;
  return `${la.toFixed(6)}, ${lo.toFixed(6)}`;
}

/** UserComment: 8 byte mã bộ ký tự + nội dung (Stable Diffusion WebUI ghi prompt JPEG vào đây). */
function decodeUserComment(raw: Uint8Array): string {
  if (raw.length <= 8) return '';
  const code = decode(raw.subarray(0, 8), 'latin1');
  const body = raw.subarray(8);
  if (code.startsWith('UNICODE')) {
    const bigEndian = body.length > 1 && body[0] === 0 && body[1] !== 0;
    return clean(decode(body, bigEndian ? 'utf-16be' : 'utf-16le'));
  }
  if (code.startsWith('ASCII') || code === '\0\0\0\0\0\0\0\0') return clean(decode(body));
  return isMostlyPrintable(body) ? clean(decode(body)) : '';
}
