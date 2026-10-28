import { formatNumber } from '../i18n';

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${formatNumber(bytes)} B`;
  if (bytes < 1024 * 1024) return `${formatNumber(bytes / 1024, 1)} KB`;
  return `${formatNumber(bytes / (1024 * 1024), 2)} MB`;
}

export function formatMegapixels(width: number, height: number): string {
  return `${formatNumber((width * height) / 1_000_000, 1)} MP`;
}
