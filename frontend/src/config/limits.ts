/** Giới hạn theo tài liệu System Architecture Design (UI & Pre-Validation Layer). */
export const MAX_FILE_BYTES = 25 * 1024 * 1024;
export const MAX_PIXELS = 40_000_000;
export const MAX_FILES_PER_SESSION = 50;
export const MAX_WORKERS = 6;

export const ZIP_FILENAME = 'metadata-cleared.zip';

/** Cấu hình accept cho Dropzone: MIME + đuôi file (Windows thường không gán MIME cho HEIC). */
export const ACCEPTED_TYPES: Record<string, string[]> = {
  'image/jpeg': ['.jpg', '.jpeg', '.jfif'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
  'image/gif': ['.gif'],
  'image/heic': ['.heic'],
  'image/heif': ['.heif'],
  'image/avif': ['.avif'],
};

/**
 * Số Web Worker dựa trên số nhân CPU (navigator.hardwareConcurrency),
 * chừa lại nhân cho Main Thread: máy 8 nhân → 6 workers, máy 4 nhân → 3 workers.
 */
export function getPoolSize(): number {
  const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
  return Math.min(MAX_WORKERS, Math.max(1, cores > 4 ? cores - 2 : cores - 1));
}
