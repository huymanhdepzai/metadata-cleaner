import { describe, expect, it } from 'vitest';
import type { StripOptions } from '../types';
import { ascii, concat, u32le } from './bytes';
import { bufferSource, readDimensions } from './dimensions';
import { detectFormat } from './formats';
import { stripMetadata } from './strippers';
import { readExifOrientation } from './strippers/jpeg';

const KEEP: StripOptions = { keepIccProfile: true, keepOrientation: true };
const DROP: StripOptions = { keepIccProfile: false, keepOrientation: false };

const bytes = (...parts: (number[] | string | Uint8Array)[]) =>
  concat(parts.map((p) => (typeof p === 'string' ? new TextEncoder().encode(p) : new Uint8Array(p))));
const be16 = (v: number) => [v >> 8, v & 0xff];
const be32 = (v: number) => [(v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff];
const le32 = (v: number) => [v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff];
const contains = (hay: Uint8Array, needle: string) => ascii(hay, 0, hay.length).includes(needle);

// ---------- JPEG ----------
const jpegSegment = (marker: number, payload: Uint8Array) => bytes([0xff, marker, ...be16(payload.length + 2)], payload);

function makeJpeg() {
  const exifTiff = bytes('MM', [0, 0x2a], be32(8), be16(1), be16(0x0112), be16(3), be32(1), be16(6), [0, 0], be32(0));
  return bytes(
    [0xff, 0xd8],
    jpegSegment(0xe0, bytes('JFIF\0', [1, 1, 0, 0, 1, 0, 1, 0, 0])),
    jpegSegment(0xe1, bytes('Exif\0\0', exifTiff)),
    jpegSegment(0xe1, bytes('http://ns.adobe.com/xap/1.0/\0<x:xmpmeta>c2pa</x:xmpmeta>')),
    jpegSegment(0xe2, bytes('ICC_PROFILE\0', [1, 1, 9, 9])),
    jpegSegment(0xeb, bytes('JP', [0, 0], 'c2pa manifest')),
    jpegSegment(0xfe, bytes('Made with AI')),
    jpegSegment(0xdb, bytes([0, ...new Array(64).fill(1)])),
    jpegSegment(0xc0, bytes([8], be16(100), be16(200), [1, 1, 0x11, 0])),
    jpegSegment(0xda, bytes([1, 1, 0, 0, 0x3f, 0])),
    [0x12, 0x34, 0xff, 0x00, 0x56],
    [0xff, 0xd9],
  );
}

describe('JPEG', () => {
  it('nhận diện định dạng và đọc kích thước từ SOF', async () => {
    const src = makeJpeg();
    expect(detectFormat(src)).toBe('jpeg');
    expect(await readDimensions(bufferSource(src), 'jpeg')).toEqual({ width: 200, height: 100 });
  });

  it('gỡ EXIF/XMP/C2PA/Comment, giữ ICC + Orientation và dữ liệu ảnh', () => {
    const src = makeJpeg();
    const { data, removed } = stripMetadata(src, 'jpeg', KEEP);
    expect(removed.map((r) => r.name)).toEqual(['EXIF', 'XMP', 'C2PA / JUMBF', 'Comment']);
    expect(contains(data, 'xmpmeta')).toBe(false);
    expect(contains(data, 'Made with AI')).toBe(false);
    expect(contains(data, 'ICC_PROFILE')).toBe(true);
    // APP1 tối giản được chèn ngay sau APP0 và chứa orientation = 6.
    const app0Len = (data[4] << 8) | data[5];
    const app1 = 2 + 2 + app0Len;
    expect(data[app1 + 1]).toBe(0xe1);
    expect(readExifOrientation(data.subarray(app1 + 10, app1 + 36))).toBe(6);
    // Phần từ SOS đến EOI giữ nguyên từng byte.
    const sos = (d: Uint8Array) => d.subarray(d.findIndex((v, i) => v === 0xff && d[i + 1] === 0xda));
    expect(sos(data)).toEqual(sos(src));
  });

  it('xóa cả ICC và không chèn Orientation khi tắt tùy chọn', () => {
    const { data, removed } = stripMetadata(makeJpeg(), 'jpeg', DROP);
    expect(removed.map((r) => r.name)).toContain('ICC Profile');
    expect(contains(data, 'Exif')).toBe(false);
  });
});

// ---------- PNG ----------
const pngChunk = (type: string, data: Uint8Array) => bytes(be32(data.length), type, data, [0, 0, 0, 0]);

function makePng() {
  return bytes(
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    pngChunk('IHDR', bytes(be32(640), be32(480), [8, 6, 0, 0, 0])),
    pngChunk('tEXt', bytes('parameters\0masterpiece, Steps: 30, Seed: 42')),
    pngChunk('iTXt', bytes('workflow\0\0\0\0\0{"nodes":[]}')),
    pngChunk('iCCP', bytes('icc\0\0', [1, 2, 3])),
    pngChunk('caBX', bytes('jumbf')),
    pngChunk('IDAT', bytes([1, 2, 3, 4])),
    pngChunk('IEND', new Uint8Array()),
  );
}

describe('PNG', () => {
  it('đọc kích thước từ IHDR', async () => {
    expect(await readDimensions(bufferSource(makePng()), 'png')).toEqual({ width: 640, height: 480 });
  });

  it('gỡ prompt Stable Diffusion, workflow ComfyUI và C2PA', () => {
    const { data, removed } = stripMetadata(makePng(), 'png', KEEP);
    expect(removed.map((r) => `${r.name}:${r.detail ?? ''}`)).toEqual([
      'Text (tEXt):parameters',
      'Text (iTXt):workflow',
      'C2PA:',
    ]);
    expect(contains(data, 'Seed')).toBe(false);
    expect(contains(data, 'iCCP')).toBe(true);
    expect(contains(data, 'IDAT')).toBe(true);
    expect(contains(data, 'IEND')).toBe(true);
  });
});

// ---------- WebP ----------
const riffChunk = (fourcc: string, data: Uint8Array) =>
  bytes(fourcc, le32(data.length), data, data.length & 1 ? [0] : []);

function makeWebp() {
  const body = bytes(
    'WEBP',
    riffChunk('VP8X', bytes([0x2c, 0, 0, 0], [0x3f, 0x01, 0x00], [0xef, 0x00, 0x00])),
    riffChunk('ICCP', bytes([1, 2, 3])),
    riffChunk('VP8 ', bytes(new Array(10).fill(7))),
    riffChunk('EXIF', bytes('MM*exif')),
    riffChunk('XMP ', bytes('<x:xmpmeta/>')),
  );
  return bytes('RIFF', le32(body.length), body);
}

describe('WebP', () => {
  it('đọc kích thước canvas từ VP8X', async () => {
    expect(await readDimensions(bufferSource(makeWebp()), 'webp')).toEqual({ width: 320, height: 240 });
  });

  it('gỡ EXIF/XMP/ICCP, cập nhật cờ VP8X và kích thước RIFF', () => {
    const { data, removed } = stripMetadata(makeWebp(), 'webp', DROP);
    expect(removed.map((r) => r.name)).toEqual(['ICC Profile', 'EXIF', 'XMP']);
    expect(u32le(data, 4)).toBe(data.length - 8);
    expect(data[20]).toBe(0); // cờ VP8X đã được xóa
    expect(ascii(data, 30, 4)).toBe('VP8 ');
  });
});

// ---------- GIF ----------
function makeGif() {
  return bytes(
    'GIF89a',
    [10, 0, 5, 0, 0x80, 0, 0], // 10×5, có bảng màu toàn cục 2 màu
    [0, 0, 0, 255, 255, 255],
    [0x21, 0xff, 11], 'NETSCAPE2.0', [3, 1, 0, 0, 0],
    [0x21, 0xff, 11], 'XMP DataXMP', [5], '<x:x>', [0],
    [0x21, 0xfe, 4], 'AI!!', [0],
    [0x21, 0xf9, 4, 0, 0, 0, 0, 0],
    [0x2c, 0, 0, 0, 0, 10, 0, 5, 0, 0], [2, 2, 0x4c, 0x01, 0],
    [0x3b],
  );
}

describe('GIF', () => {
  it('đọc kích thước logical screen', async () => {
    expect(await readDimensions(bufferSource(makeGif()), 'gif')).toEqual({ width: 10, height: 5 });
  });

  it('gỡ XMP + Comment, giữ vòng lặp NETSCAPE và dữ liệu ảnh', () => {
    const src = makeGif();
    const { data, removed } = stripMetadata(src, 'gif', KEEP);
    expect(removed.map((r) => r.name)).toEqual(['XMP', 'Comment']);
    expect(contains(data, 'NETSCAPE2.0')).toBe(true);
    expect(contains(data, 'XMP')).toBe(false);
    expect(data[data.length - 1]).toBe(0x3b);
    expect(data.length).toBe(src.length - removed.reduce((n, r) => n + r.bytes, 0));
  });
});

// ---------- HEIC (ISOBMFF) ----------
const box = (type: string, ...payload: (number[] | string | Uint8Array)[]) => {
  const body = bytes(...payload);
  return bytes(be32(body.length + 8), type, body);
};
const fullBox = (type: string, version: number, ...payload: (number[] | string | Uint8Array)[]) =>
  box(type, [version, 0, 0, 0], ...payload);

const C2PA_UUID = [0xd8, 0xfe, 0xc3, 0xd6, 0x1b, 0x0e, 0x48, 0x3c, 0x92, 0x97, 0x58, 0x28, 0x87, 0x7e, 0xc4, 0x81];

function makeHeic() {
  const exifPayload = bytes(be32(0), 'MM', [0, 0x2a], be32(8), 'AI-GENERATOR');
  const build = (exifOffset: number) => {
    const ftyp = box('ftyp', 'heic', be32(0), 'mif1heic');
    const meta = fullBox(
      'meta', 0,
      fullBox('hdlr', 0, be32(0), 'pict', be32(0), be32(0), be32(0), [0]),
      fullBox('iinf', 0, be16(2),
        fullBox('infe', 2, be16(1), be16(0), 'hvc1', [0]),
        fullBox('infe', 2, be16(2), be16(0), 'Exif', [0]),
      ),
      fullBox('iloc', 0, [0x44, 0x00], be16(1), be16(2), be16(0), be16(1), be32(exifOffset), be32(exifPayload.length)),
      box('iprp', box('ipco', fullBox('ispe', 0, be32(4000), be32(3000)), fullBox('ispe', 0, be32(512), be32(512)))),
    );
    const uuid = box('uuid', C2PA_UUID, 'c2pa-manifest-store');
    const mdatHeaderAt = ftyp.length + meta.length + uuid.length;
    return { file: bytes(ftyp, meta, uuid, box('mdat', exifPayload, [9, 9, 9, 9])), exifAt: mdatHeaderAt + 8 };
  };
  const { exifAt } = build(0);
  return { ...build(exifAt), exifLength: exifPayload.length };
}

describe('HEIC (ISOBMFF)', () => {
  it('nhận diện brand và đọc kích thước lớn nhất từ ispe', async () => {
    const { file } = makeHeic();
    expect(detectFormat(file)).toBe('heif');
    expect(await readDimensions(bufferSource(file), 'heif')).toEqual({ width: 4000, height: 3000 });
  });

  it('vô hiệu hóa box uuid C2PA và item Exif mà không đổi offset', () => {
    const { file, exifAt, exifLength } = makeHeic();
    const { data, removed } = stripMetadata(file, 'heif', KEEP);
    expect(removed.map((r) => r.name)).toEqual(['EXIF', 'C2PA (uuid)']);
    expect(data.length).toBe(file.length);
    expect(contains(data, 'c2pa-manifest-store')).toBe(false);
    expect(contains(data, 'AI-GENERATOR')).toBe(false);
    expect(contains(data, 'free')).toBe(true);
    // Payload Exif được thay bằng TIFF rỗng hợp lệ.
    expect(ascii(data, exifAt + 4, 2)).toBe('MM');
    // Dữ liệu ảnh sau vùng Exif giữ nguyên.
    expect(Array.from(data.subarray(exifAt + exifLength))).toEqual([9, 9, 9, 9]);
  });
});
