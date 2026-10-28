import type { ReportKey } from './i18n/locales/en';

export type ImageFormat = 'jpeg' | 'png' | 'webp' | 'gif' | 'heif' | 'avif';

/**
 * Thông điệp đa ngôn ngữ: lõi xử lý chỉ trả về khóa + tham số, giao diện dịch theo ngôn ngữ đang chọn.
 * Văn bản trung lập (tên kỹ thuật, tên riêng) dùng khóa `raw` với tham số `text`.
 */
export interface Msg {
  key: ReportKey;
  /** Tham số có thể là thông điệp lồng nhau, được dịch trước khi chèn. */
  params?: Record<string, string | number | Msg>;
}

export const msg = (key: ReportKey, params?: Msg['params']): Msg => ({ key, params });
export const raw = (text: string): Msg => ({ key: 'raw', params: { text } });

export interface StripOptions {
  /** Giữ ICC Profile để ảnh không bị lệch màu khi đăng tải. */
  keepIccProfile: boolean;
  /** JPEG: giữ lại riêng thẻ Orientation của EXIF để ảnh không bị xoay sai. */
  keepOrientation: boolean;
}

export interface RemovedSegment {
  name: string;
  bytes: number;
  detail?: string;
}

export interface StripResult {
  data: Uint8Array;
  removed: RemovedSegment[];
}

// ---------- Báo cáo phân tích metadata ----------

/** Nhóm rủi ro của một trường metadata, dùng cho mục "Chi tiết riêng tư" và "AI và nguồn gốc". */
export type FieldCategory = 'location' | 'personal' | 'time' | 'ai' | 'technical';

export interface MetadataField {
  /** Nguồn: "EXIF · GPS", "XMP · dc", "PNG · tEXt", ... */
  group: string;
  name: string;
  value: string;
  category: FieldCategory;
}

export type BlockKind = 'exif' | 'xmp' | 'iptc' | 'icc' | 'c2pa' | 'text' | 'comment' | 'other';

/** Một khối chứa metadata trong cấu trúc tệp (segment JPEG, chunk PNG/WebP, box HEIC...). */
export interface MetadataBlock {
  name: Msg;
  kind: BlockKind;
  bytes: number;
}

export interface InfoItem {
  label: Msg;
  value: Msg;
}

export type CheckStatus = 'pass' | 'warn' | 'info';

export interface CheckItem {
  label: Msg;
  result: Msg;
  status: CheckStatus;
}

export type AiVerdict = 'detected' | 'review' | 'none';

export interface AiSignal {
  label: Msg;
  detail: Msg;
  strong: boolean;
}

export interface AnalysisReport {
  formatLabel: string;
  width: number;
  height: number;
  fileSize: number;
  encoding: InfoItem[];
  structure: Msg;
  blocks: MetadataBlock[];
  fields: MetadataField[];
  ai: { verdict: AiVerdict; signals: AiSignal[] };
  checks: CheckItem[];
}

// ---------- Hàng đợi xử lý ----------

/**
 * analyzing → pending (đã phân tích, chờ người dùng bấm "Xóa metadata AI") → processing → completed | failed
 */
export type JobStatus = 'analyzing' | 'pending' | 'processing' | 'completed' | 'failed';

export interface Job {
  id: string;
  /** Chỉ giữ tham chiếu File — không giữ ArrayBuffer trong store để tránh đầy RAM. */
  file: File;
  name: string;
  size: number;
  format: ImageFormat;
  mime: string;
  width: number;
  height: number;
  status: JobStatus;
  error?: string;
  report?: AnalysisReport;
  result?: Blob;
  outputSize?: number;
  removed?: RemovedSegment[];
  /** Báo cáo phân tích lại tệp đầu ra — xác minh metadata đã thực sự bị gỡ. */
  after?: AnalysisReport;
}

export interface Rejection {
  id: string;
  name: string;
  reason: Msg;
}

// ---------- Giao thức Main Thread ↔ Web Worker ----------

export type WorkerRequest =
  | { kind: 'analyze'; jobId: string; file: File; format: ImageFormat }
  | { kind: 'strip'; jobId: string; file: File; format: ImageFormat; options: StripOptions };

export type WorkerSuccess =
  | { kind: 'analyze'; jobId: string; ok: true; report: AnalysisReport }
  | {
      kind: 'strip';
      jobId: string;
      ok: true;
      buffer: ArrayBuffer;
      removed: RemovedSegment[];
      after: AnalysisReport;
    };

export interface WorkerFailure {
  jobId: string;
  ok: false;
  error: string;
}

export type WorkerResponse = WorkerSuccess | WorkerFailure;
