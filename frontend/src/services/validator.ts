import { MAX_FILE_BYTES, MAX_PIXELS } from '../config/limits';
import { blobSource, readDimensions } from '../core/dimensions';
import { detectFormat, SIGNATURE_BYTES } from '../core/formats';
import { msg, type ImageFormat, type Msg } from '../types';
import { formatBytes } from '../utils/format';

export type ValidationResult =
  | { ok: true; format: ImageFormat; width: number; height: number }
  | { ok: false; reason: Msg };


export async function validateFile(file: File): Promise<ValidationResult> {
  if (file.size === 0) return { ok: false, reason: msg('rejEmpty') };
  if (file.size > MAX_FILE_BYTES) {
    return { ok: false, reason: msg('rejTooLarge', { size: formatBytes(file.size), max: formatBytes(MAX_FILE_BYTES) }) };
  }

  const source = blobSource(file);
  const format = detectFormat(await source.read(0, SIGNATURE_BYTES));
  if (!format) return { ok: false, reason: msg('rejFormat') };

  try {
    const { width, height } = await readDimensions(source, format);
    if (width * height > MAX_PIXELS) {
      const mp = ((width * height) / 1_000_000).toFixed(1);
      return { ok: false, reason: msg('rejPixels', { width, height, mp }) };
    }
    return { ok: true, format, width, height };
  } catch (err) {
    return { ok: false, reason: msg('rejDimensions', { detail: err instanceof Error ? err.message : String(err) }) };
  }
}
