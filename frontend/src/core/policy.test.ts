/**
 * Kiểm thử chấp nhận theo chính sách xóa metadata:
 *  - Vị trí; Ngày tháng & máy ảnh; Người tạo & chỉnh sửa (kể cả ảnh xem trước) → XÓA
 *  - Nhãn nguồn AI (IPTC DigitalSourceType, XMP, trình tạo, văn bản mô hình)   → XÓA
 *  - Content Credentials (vùng chứa C2PA, loại nguồn, thao tác, trình tạo, mô hình, bên ký) → XÓA
 *  - Dữ liệu hiển thị: kích thước, hướng xoay, thông tin màu, dữ liệu ảnh, hoạt ảnh → GIỮ
 */
import { describe, expect, it } from 'vitest';
import { RETENTION_POLICY } from '../store/useJobStore';
import {
  be16,
  be32,
  bytes,
  c2paManifest,
  containsText,
  FULL_XMP,
  fullExifTiff,
  le32,
} from '../test/fixtures';
import { ascii, crc32, u32be, u32le } from './bytes';
import { bufferSource, readDimensions } from './dimensions';
import { analyzeImage } from './inspect/analyze';
import { childBoxes } from './isobmff';
import { stripMetadata } from './strippers';
import { readExifOrientation } from './strippers/jpeg';
import type { AnalysisReport, ImageFormat } from '../types';

/** Chuỗi nhạy cảm đã nhúng vào các tệp mẫu — không chuỗi nào được phép còn lại sau khi xóa. */
const SENSITIVE = [
  'Nguyen Van A', 'iPhone 15 Pro', 'Ho Guom', 'Ha Noi', '2026:10:01', 'Firefly', 'History',
  'trainedAlgorithmicMedia', 'c2pa', 'Adobe Inc.', 'firefly-image-3', 'Made by Midjourney', 'SECRET',
];

function expectNoSensitive(data: Uint8Array) {
  for (const s of SENSITIVE) expect(containsText(data, s), `còn sót "${s}"`).toBe(false);
}

async function expectCleanReport(data: Uint8Array, format: ImageFormat): Promise<AnalysisReport> {
  const after = await analyzeImage(data, format);
  expect(after.ai.verdict).toBe('none');
  expect(after.fields.filter((f) => f.category !== 'technical')).toEqual([]);
  return after;
}

// ======================= JPEG =======================

const seg = (marker: number, payload: Uint8Array) => bytes([0xff, marker, ...be16(payload.length + 2)], payload);
const ICC = bytes('ICC_PROFILE\0', [1, 1], 'fake-icc-sRGB');
const ENTROPY = bytes([0x12, 0xff, 0x00, 0x34, 0xff, 0xd0, 0x56, 0x78]); // có byte nhồi FF00 và RST0

function makeJpeg() {
  const secondary = bytes([0xff, 0xd8], seg(0xe1, bytes('Exif\0\0', 'SECRET-GPS-OF-PREVIEW')), [0xff, 0xd9]);
  return bytes(
    [0xff, 0xd8],
    seg(0xe0, bytes('JFIF\0', [1, 2, 0, 0, 72, 0, 72, 2, 1], [9, 9, 9, 8, 8, 8])), // thumbnail 2×1
    seg(0xe1, bytes('Exif\0\0', fullExifTiff(6))),
    seg(0xe1, bytes('http://ns.adobe.com/xap/1.0/\0', FULL_XMP)),
    seg(0xe2, ICC),
    seg(0xe2, bytes('MPF\0', 'MM*')),
    seg(0xeb, bytes('JP', [0, 1], c2paManifest())),
    seg(0xed, bytes('Photoshop 3.0\0', '8BIM', [4, 4, 0, 0], be32(12), [0x1c, 2, 120, 0, 7], 'Ho Guom')),
    seg(0xee, bytes('Adobe', [0, 100, 0, 0, 0, 0, 1])),
    seg(0xfe, bytes('Made by Midjourney')),
    seg(0xdb, bytes([0, ...new Array(64).fill(1)])),
    seg(0xc0, bytes([8], be16(100), be16(200), [3, 1, 0x22, 0, 2, 0x11, 1, 3, 0x11, 1])),
    seg(0xda, bytes([1, 1, 0, 0, 0x3f, 0])),
    ENTROPY,
    [0xff, 0xd9],
    secondary, // ảnh phụ MPF sau EOI, có EXIF riêng
  );
}

describe('JPEG — chính sách xóa', () => {
  const src = makeJpeg();
  const { data, removed } = stripMetadata(src, 'jpeg', RETENTION_POLICY);

  it('xóa vị trí, ngày giờ, máy ảnh, tác giả, phần mềm, lịch sử, nhãn AI, C2PA, chú thích, bình luận', async () => {
    expectNoSensitive(data);
    await expectCleanReport(data, 'jpeg');
    expect(removed.map((r) => r.name)).toEqual(
      expect.arrayContaining(['EXIF', 'XMP', 'MPF', 'C2PA / JUMBF', 'IPTC / Photoshop', 'Comment']),
    );
  });

  it('xóa ảnh xem trước: thumbnail JFIF và ảnh phụ sau EOI', () => {
    expect(removed.map((r) => r.name)).toEqual(
      expect.arrayContaining(['Preview (JFIF thumbnail)', 'Data after EOI (MPF / preview / Motion Photo)']),
    );
    // APP0 JFIF còn lại có kích thước thumbnail = 0
    expect(ascii(data, 6, 5)).toBe('JFIF\0');
    expect([data[18], data[19]]).toEqual([0, 0]);
  });

  it('giữ kích thước, hướng xoay, thông tin màu và dữ liệu ảnh', async () => {
    expect(await readDimensions(bufferSource(data), 'jpeg')).toEqual({ width: 200, height: 100 });
    const app1 = data.indexOf(0xe1, 2) - 1;
    expect(readExifOrientation(data.subarray(app1 + 4))).toBe(6);
    expect(containsText(data, 'ICC_PROFILE')).toBe(true);
    expect(containsText(data, 'Adobe\0')).toBe(true); // APP14 — biến đổi màu
    // Dữ liệu ảnh từ SOS đến EOI giữ nguyên từng byte; tệp kết thúc tại EOI của ảnh chính.
    const sos = (d: Uint8Array) => d.findIndex((v, i) => v === 0xff && d[i + 1] === 0xda);
    const mainEnd = sos(src) + 10 + ENTROPY.length + 2; // SOS header (10) + entropy + EOI
    expect(data.subarray(sos(data))).toEqual(src.subarray(sos(src), mainEnd));
  });
});

// ======================= PNG =======================

const pngChunk = (type: string, data: Uint8Array) => {
  const body = bytes(type, data);
  return bytes(be32(data.length), body, be32(crc32(body)));
};

function makePng() {
  return bytes(
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    pngChunk('IHDR', bytes(be32(640), be32(480), [8, 6, 0, 0, 0])),
    pngChunk('iCCP', bytes('sRGB\0\0', [0x78, 0x9c, 0x03, 0x00, 0x00, 0x00, 0x00, 0x01])),
    pngChunk('gAMA', bytes(be32(45455))),
    pngChunk('eXIf', fullExifTiff(8)),
    pngChunk('tEXt', bytes('Author\0Nguyen Van A')),
    pngChunk('tEXt', bytes('Software\0Adobe Firefly')),
    pngChunk('tEXt', bytes('Comment\0Made by Midjourney')),
    pngChunk('tEXt', bytes('Creation Time\0', '2026:10:01')),
    pngChunk('iTXt', bytes('XML:com.adobe.xmp\0\0\0\0\0', FULL_XMP)),
    pngChunk('caBX', c2paManifest()),
    pngChunk('tIME', bytes(be16(2026), [10, 1, 8, 30, 0])),
    pngChunk('acTL', bytes(be32(2), be32(0))),
    pngChunk('fcTL', bytes(be32(0), be32(640), be32(480), new Array(14).fill(0))),
    pngChunk('IDAT', bytes([1, 2, 3, 4])),
    pngChunk('fdAT', bytes(be32(1), [5, 6, 7])),
    pngChunk('IEND', new Uint8Array()),
  );
}

function pngChunks(d: Uint8Array) {
  const list: { type: string; data: Uint8Array; crcOk: boolean }[] = [];
  for (let o = 8; o + 12 <= d.length; ) {
    const len = u32be(d, o);
    list.push({ type: ascii(d, o + 4, 4), data: d.subarray(o + 8, o + 8 + len), crcOk: crc32(d.subarray(o + 4, o + 8 + len)) === u32be(d, o + 8 + len) });
    o += 12 + len;
  }
  return list;
}

describe('PNG — chính sách xóa', () => {
  const { data } = stripMetadata(makePng(), 'png', RETENTION_POLICY);
  const chunks = pngChunks(data);

  it('xóa EXIF, văn bản, XMP, C2PA và thời gian', async () => {
    expectNoSensitive(data);
    await expectCleanReport(data, 'png');
    expect(chunks.map((c) => c.type)).not.toEqual(expect.arrayContaining(['tEXt', 'iTXt', 'caBX', 'tIME']));
  });

  it('giữ màu, hoạt ảnh APNG, dữ liệu ảnh và hướng xoay (eXIf tối giản, CRC hợp lệ)', () => {
    expect(chunks.map((c) => c.type)).toEqual(['IHDR', 'iCCP', 'gAMA', 'eXIf', 'acTL', 'fcTL', 'IDAT', 'fdAT', 'IEND']);
    expect(chunks.every((c) => c.crcOk)).toBe(true);
    expect(readExifOrientation(chunks.find((c) => c.type === 'eXIf')!.data)).toBe(8);
  });
});

// ======================= WebP =======================

const riff = (fourcc: string, data: Uint8Array) => bytes(fourcc, le32(data.length), data, data.length & 1 ? [0] : []);

function makeWebp() {
  const body = bytes(
    'WEBP',
    riff('VP8X', bytes([0x2e, 0, 0, 0], [0x3f, 0x01, 0x00], [0xef, 0x00, 0x00])), // ICC|EXIF|XMP|ANIM
    riff('ICCP', bytes('fake-icc')),
    riff('ANIM', bytes([0, 0, 0, 0, 0, 0])),
    riff('ANMF', bytes(new Array(20).fill(1))),
    riff('ANMF', bytes(new Array(20).fill(2))),
    riff('EXIF', fullExifTiff(3)),
    riff('XMP ', bytes(FULL_XMP)),
    riff('C2PA', c2paManifest()),
  );
  return bytes('RIFF', le32(body.length), body);
}

describe('WebP — chính sách xóa', () => {
  const { data } = stripMetadata(makeWebp(), 'webp', RETENTION_POLICY);

  it('xóa EXIF đầy đủ, XMP và C2PA', async () => {
    expectNoSensitive(data);
    await expectCleanReport(data, 'webp');
  });

  it('giữ ICC, hoạt ảnh, kích thước và hướng xoay; cờ VP8X và kích thước RIFF đúng', async () => {
    const fourccs: string[] = [];
    let exif: Uint8Array | null = null;
    for (let o = 12; o + 8 <= data.length; ) {
      const size = u32le(data, o + 4);
      fourccs.push(ascii(data, o, 4));
      if (ascii(data, o, 4) === 'EXIF') exif = data.subarray(o + 8, o + 8 + size);
      o += 8 + size + (size & 1);
    }
    expect(fourccs).toEqual(['VP8X', 'ICCP', 'ANIM', 'ANMF', 'ANMF', 'EXIF']);
    expect(readExifOrientation(exif!)).toBe(3);
    expect(data[20]).toBe(0x2a); // ICC + EXIF + ANIM, đã bỏ XMP
    expect(u32le(data, 4)).toBe(data.length - 8);
    expect(await readDimensions(bufferSource(data), 'webp')).toEqual({ width: 320, height: 240 });
  });
});

// ======================= AVIF / HEIC sequence =======================

const box = (type: string, ...payload: (number[] | string | Uint8Array)[]) => {
  const body = bytes(...payload);
  return bytes(be32(body.length + 8), type, body);
};
const T_CREATED = 0xe5000000; // ~2025, giây từ 1904

function makeAvifSequence() {
  return bytes(
    box('ftyp', 'avis', be32(0), 'avifmsf1'),
    box(
      'moov',
      box('mvhd', [0, 0, 0, 0], be32(T_CREATED), be32(T_CREATED + 60), be32(1000), be32(5000)),
      box(
        'trak',
        box('tkhd', [0, 0, 0, 3], be32(T_CREATED), be32(T_CREATED + 60), be32(1), be32(0), be32(5000)),
        box('mdia', box('mdhd', [0, 0, 0, 0], be32(T_CREATED), be32(T_CREATED + 60), be32(30), be32(150))),
      ),
      box('udta', box('loci', '+21.0285+105.8542/'), box('auth', 'Nguyen Van A')),
    ),
    box('mdat', [7, 7, 7, 7]),
  );
}

describe('AVIF động (ISOBMFF sequence) — chính sách xóa', () => {
  const src = makeAvifSequence();
  const { data } = stripMetadata(src, 'avif', RETENTION_POLICY);
  const moov = [...childBoxes(data, 0, data.length)].find((b) => b.type === 'moov')!;
  const kids = [...childBoxes(data, moov.start + 8, moov.end)];

  it('xóa thời gian tạo/sửa và metadata udta (vị trí, tác giả)', async () => {
    expectNoSensitive(data);
    expect(containsText(data, '+21.0285')).toBe(false);
    expect(kids.map((b) => b.type)).toEqual(['mvhd', 'trak', 'free']);
    const mvhd = kids[0].start + 8;
    expect(u32be(data, mvhd + 4)).toBe(0);
    expect(u32be(data, mvhd + 8)).toBe(0);
    await expectCleanReport(data, 'avif');
  });

  it('giữ timescale, thời lượng, dữ liệu khung hình và vị trí byte', () => {
    expect(data.length).toBe(src.length);
    const mvhd = kids[0].start + 8;
    expect(u32be(data, mvhd + 12)).toBe(1000);
    expect(u32be(data, mvhd + 16)).toBe(5000);
    expect(Array.from(data.subarray(data.length - 4))).toEqual([7, 7, 7, 7]);
  });
});
