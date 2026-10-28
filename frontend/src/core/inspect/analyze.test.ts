import { describe, expect, it } from 'vitest';
import type { AnalysisReport } from '../../types';
import { tr } from '../../i18n';
import en from '../../i18n/locales/en';
import { concat } from '../bytes';
import { stripMetadata } from '../strippers';
import { analyzeImage } from './analyze';

const enc = (s: string) => new TextEncoder().encode(s);
const bytes = (...parts: (number[] | string | Uint8Array)[]) =>
  concat(parts.map((p) => (typeof p === 'string' ? enc(p) : new Uint8Array(p))));
const be16 = (v: number) => [v >> 8, v & 0xff];
const be32 = (v: number) => [(v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff];

// ---------- Trình dựng TIFF (big-endian) cho EXIF thử nghiệm ----------
interface Entry {
  tag: number;
  type: number;
  count: number;
  data: number[];
}
const asciiEntry = (tag: number, s: string): Entry => ({ tag, type: 2, count: s.length + 1, data: [...enc(s), 0] });
const rationals = (tag: number, pairs: [number, number][]): Entry => ({
  tag,
  type: 5,
  count: pairs.length,
  data: pairs.flatMap(([n, d]) => [...be32(n), ...be32(d)]),
});

/** ifds[0] = IFD0, ifds[1] = Exif IFD, ifds[2] = GPS IFD (con trỏ được thêm tự động). */
function buildTiff(ifd0: Entry[], exif: Entry[], gps: Entry[]): Uint8Array {
  const ifdSize = (n: number) => 2 + n * 12 + 4;
  const ifd0Entries = [...ifd0, { tag: 0x8769, type: 4, count: 1, data: [] }, { tag: 0x8825, type: 4, count: 1, data: [] }];
  const exifAt = 8 + ifdSize(ifd0Entries.length);
  const gpsAt = exifAt + ifdSize(exif.length);
  let dataAt = gpsAt + ifdSize(gps.length);
  ifd0Entries[ifd0Entries.length - 2].data = be32(exifAt);
  ifd0Entries[ifd0Entries.length - 1].data = be32(gpsAt);

  const head: number[] = [0x4d, 0x4d, 0, 0x2a, ...be32(8)];
  const extra: number[] = [];
  const writeIfd = (entries: Entry[]) => {
    const out = [...be16(entries.length)];
    for (const e of entries) {
      out.push(...be16(e.tag), ...be16(e.type), ...be32(e.count));
      if (e.data.length <= 4) out.push(...e.data, ...new Array(4 - e.data.length).fill(0));
      else {
        out.push(...be32(dataAt));
        extra.push(...e.data);
        if (e.data.length & 1) extra.push(0);
        dataAt += e.data.length + (e.data.length & 1);
      }
    }
    out.push(...be32(0));
    return out;
  };
  const body = [...writeIfd(ifd0Entries), ...writeIfd(exif), ...writeIfd(gps)];
  return new Uint8Array([...head, ...body, ...extra]);
}

const jpegSegment = (marker: number, payload: Uint8Array) => bytes([0xff, marker, ...be16(payload.length + 2)], payload);
const jpegTail = () =>
  bytes(
    jpegSegment(0xc0, bytes([8], be16(100), be16(200), [3, 1, 0x22, 0, 2, 0x11, 1, 3, 0x11, 1])),
    jpegSegment(0xda, bytes([1, 1, 0, 0, 0x3f, 0])),
    [0x12, 0x34, 0xff, 0xd9],
  );

function makePhoneJpeg() {
  const tiff = buildTiff(
    [asciiEntry(0x010f, 'Apple'), asciiEntry(0x0110, 'iPhone 15'), asciiEntry(0x0131, 'Midjourney v6'), asciiEntry(0x013b, 'Nguyen Van A'), { tag: 0x0112, type: 3, count: 1, data: [0, 6] }],
    [asciiEntry(0x9003, '2026:10:01 08:30:00')],
    [
      asciiEntry(0x01, 'N'),
      rationals(0x02, [[21, 1], [1, 1], [4140, 100]]),
      asciiEntry(0x03, 'E'),
      rationals(0x04, [[105, 1], [51, 1], [0, 1]]),
    ],
  );
  return bytes([0xff, 0xd8], jpegSegment(0xe1, bytes('Exif\0\0', tiff)), jpegTail());
}

const labels = (r: AnalysisReport) => r.ai.signals.map((s) => tr(en, s.label));
const encoding = (r: AnalysisReport) => r.encoding.map((e) => `${tr(en, e.label)}=${tr(en, e.value)}`);
const names = (r: AnalysisReport, category: string) => r.fields.filter((f) => f.category === category).map((f) => f.name);

describe('Phân tích JPEG có EXIF đầy đủ', () => {
  it('phát hiện vị trí, cá nhân, thời gian và dấu hiệu AI', async () => {
    const report = await analyzeImage(makePhoneJpeg(), 'jpeg');

    expect(names(report, 'location')).toEqual(expect.arrayContaining(['GPSLatitude', 'GPSLongitude', 'GPSPosition']));
    expect(report.fields.find((f) => f.name === 'GPSPosition')?.value).toBe('21.028167, 105.850000');
    expect(names(report, 'personal')).toEqual(expect.arrayContaining(['Make', 'Model', 'Artist']));
    expect(names(report, 'time')).toContain('DateTimeOriginal');
    expect(report.ai.verdict).toBe('detected');
    expect(labels(report)).toContain('Midjourney');

    expect(report.width).toBe(200);
    expect(encoding(report)).toContain('Chroma subsampling=4:2:0');
    expect(report.checks.find((c) => c.label.key === 'chkGps')?.status).toBe('warn');
  });

  it('sau khi xóa (giữ Orientation) không còn trường riêng tư hay AI', async () => {
    const { data } = stripMetadata(makePhoneJpeg(), 'jpeg', { keepIccProfile: true, keepOrientation: true });
    const after = await analyzeImage(data, 'jpeg');
    expect(after.ai.verdict).toBe('none');
    expect(after.fields.filter((f) => f.category !== 'technical')).toEqual([]);
    expect(after.fields.map((f) => f.name)).toEqual(['Orientation']);
  });
});

describe('Phân tích PNG từ Stable Diffusion / ComfyUI', () => {
  const chunk = (type: string, data: Uint8Array) => bytes(be32(data.length), type, data, [0, 0, 0, 0]);
  const png = bytes(
    [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    chunk('IHDR', bytes(be32(512), be32(768), [8, 2, 0, 0, 0])),
    chunk('tEXt', bytes('parameters\0a cat\nNegative prompt: blurry\nSteps: 30, Sampler: Euler a, Seed: 42')),
    chunk('tEXt', bytes('workflow\0{"nodes":[{"class_type":"KSampler"}]}')),
    chunk('IDAT', bytes([1, 2, 3])),
    chunk('IEND', new Uint8Array()),
  );

  it('đọc prompt nguyên văn và kết luận có AI', async () => {
    const report = await analyzeImage(png, 'png');
    expect(report.ai.verdict).toBe('detected');
    expect(labels(report)).toEqual(
      expect.arrayContaining(['Stable Diffusion prompt (A1111 / Forge)', 'ComfyUI workflow']),
    );
    expect(report.fields.find((f) => f.name === 'parameters')?.value).toContain('Seed: 42');
    expect(encoding(report)).toContain('Color type=RGB');
  });
});

describe('Phân tích C2PA', () => {
  it('đọc claim generator và DigitalSourceType từ manifest JUMBF', async () => {
    const manifest = bytes('JP', [0, 1], 'jumb...c2pa.claim', [0x6f], 'claim_generator', [0x78, 23], 'OpenAI-API c2pa-rs/0.31', '..c2pa.actions..c2pa.created..digitalSourceType..http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia');
    const jpeg = bytes([0xff, 0xd8], jpegSegment(0xeb, manifest), jpegTail());
    const report = await analyzeImage(jpeg, 'jpeg');

    expect(report.ai.verdict).toBe('detected');
    expect(report.fields.find((f) => f.name === 'ClaimGenerator')?.value).toBe('OpenAI-API c2pa-rs/0.31');
    expect(report.fields.find((f) => f.name === 'Actions')?.value).toContain('c2pa.created');
    expect(report.checks.find((c) => c.label.key === 'chkC2pa')?.status).toBe('warn');
  });

  it('C2PA không khai báo AI → "Cần kiểm tra kỹ"', async () => {
    const manifest = bytes('JP', [0, 1], 'c2pa.claim', [0x6f], 'claim_generator', [0x6c], 'Camera App 1', 'c2pa.actions c2pa.opened');
    const report = await analyzeImage(bytes([0xff, 0xd8], jpegSegment(0xeb, manifest), jpegTail()), 'jpeg');
    expect(report.ai.verdict).toBe('review');
  });
});
