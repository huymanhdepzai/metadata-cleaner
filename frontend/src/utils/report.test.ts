import { describe, expect, it } from 'vitest';
import { raw, type AnalysisReport, type MetadataField } from '../types';
import { gpsCoordinates, metadataSize, openStreetMapUrl, privacyRisk } from './report';

const report = (fields: MetadataField[], extra: Partial<AnalysisReport> = {}): AnalysisReport => ({
  formatLabel: 'JPEG',
  width: 10,
  height: 10,
  fileSize: 1000,
  encoding: [],
  structure: raw(''),
  blocks: [],
  fields,
  ai: { verdict: 'none', signals: [] },
  checks: [],
  ...extra,
});

const field = (name: string, value: string, category: MetadataField['category'], group = 'EXIF · IFD0'): MetadataField => ({
  group,
  name,
  value,
  category,
});

describe('Công cụ phân tích', () => {
  it('mức rủi ro: vị trí → cao; cá nhân/thời gian/AI → trung bình; không có → thấp', () => {
    expect(privacyRisk(report([field('GPSLatitude', '21', 'location')]))).toBe('high');
    expect(privacyRisk(report([field('Artist', 'A', 'personal')]))).toBe('medium');
    expect(privacyRisk(report([], { ai: { verdict: 'detected', signals: [] } }))).toBe('medium');
    expect(privacyRisk(report([field('Make', 'Canon', 'technical')]))).toBe('low');
  });

  it('đọc tọa độ GPS và tạo liên kết OpenStreetMap', () => {
    const r = report([field('GPSPosition', '21.028500, -105.850000', 'location', 'EXIF · GPS')]);
    expect(gpsCoordinates(r)).toEqual({ lat: 21.0285, lon: -105.85 });
    expect(openStreetMapUrl({ lat: 21.0285, lon: -105.85 })).toBe(
      'https://www.openstreetmap.org/?mlat=21.0285&mlon=-105.85#map=16/21.0285/-105.85',
    );
    expect(gpsCoordinates(report([field('GPSPosition', '200, 10', 'location', 'EXIF · GPS')]))).toBeNull();
    expect(gpsCoordinates(report([]))).toBeNull();
  });

  it('dung lượng metadata không tính hồ sơ màu ICC (được giữ lại)', () => {
    const r = report([], {
      blocks: [
        { name: raw('APP1 EXIF'), kind: 'exif', bytes: 200 },
        { name: raw('APP2 ICC'), kind: 'icc', bytes: 500 },
        { name: raw('APP1 XMP'), kind: 'xmp', bytes: 50 },
      ],
    });
    expect(metadataSize(r)).toEqual({ bytes: 250, percent: 25 });
  });
});
