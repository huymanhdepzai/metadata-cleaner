import type { Tone } from '../components/ui';
import type { AiVerdict, AnalysisReport, MetadataBlock, MetadataField } from '../types';

export interface PrivacySummary {
  location: MetadataField[];
  personal: MetadataField[];
  time: MetadataField[];
}

export function privacySummary(report: AnalysisReport): PrivacySummary {
  return {
    location: report.fields.filter((f) => f.category === 'location'),
    personal: report.fields.filter((f) => f.category === 'personal'),
    time: report.fields.filter((f) => f.category === 'time'),
  };
}

/**
 * Mức rủi ro quyền riêng tư của ảnh (công cụ Phân tích quyền riêng tư / Dung lượng metadata):
 * high = lộ vị trí; medium = có thông tin cá nhân, thời gian hoặc tín hiệu AI; low = không có.
 */
export type PrivacyRisk = 'high' | 'medium' | 'low';

export function privacyRisk(report: AnalysisReport): PrivacyRisk {
  const s = privacySummary(report);
  if (s.location.length > 0) return 'high';
  if (s.personal.length > 0 || s.time.length > 0 || report.ai.verdict !== 'none') return 'medium';
  return 'low';
}

export const RISK_TONE: Record<PrivacyRisk, Tone> = { high: 'danger', medium: 'warning', low: 'success' };

/** Tọa độ GPS (độ thập phân) từ trường EXIF `GPSPosition` mà bộ phân tích tạo ra ("lat, lon"). */
export function gpsCoordinates(report: AnalysisReport): { lat: number; lon: number } | null {
  const field = report.fields.find((f) => f.group === 'EXIF · GPS' && f.name === 'GPSPosition');
  const m = field?.value.match(/^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/);
  if (!m) return null;
  const lat = Number(m[1]);
  const lon = Number(m[2]);
  return Math.abs(lat) <= 90 && Math.abs(lon) <= 180 ? { lat, lon } : null;
}

/** Liên kết mở vị trí trên OpenStreetMap — chỉ mở khi người dùng bấm (trang không tự gọi dịch vụ bản đồ). */
export const openStreetMapUrl = ({ lat, lon }: { lat: number; lon: number }) =>
  `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`;

/** Khối giữ lại khi làm sạch (hồ sơ màu) — không tính là metadata cần xóa. */
export const isKeptBlock = (block: MetadataBlock) => block.kind === 'icc';

/** Dung lượng metadata sẽ bị xóa và tỉ lệ so với cả tệp. */
export function metadataSize(report: AnalysisReport): { bytes: number; percent: number } {
  const bytes = report.blocks.filter((b) => !isKeptBlock(b)).reduce((n, b) => n + b.bytes, 0);
  return { bytes, percent: report.fileSize > 0 ? (bytes / report.fileSize) * 100 : 0 };
}

export const VERDICT_TONE: Record<AiVerdict, Tone> = {
  detected: 'danger',
  review: 'warning',
  none: 'success',
};

/** Nhóm trường theo nguồn (EXIF · GPS, XMP · dc, ...) để hiển thị bảng metadata đầy đủ. */
export function groupFields(fields: MetadataField[]): [string, MetadataField[]][] {
  const map = new Map<string, MetadataField[]>();
  for (const f of fields) {
    const list = map.get(f.group);
    if (list) list.push(f);
    else map.set(f.group, [f]);
  }
  return [...map.entries()];
}
