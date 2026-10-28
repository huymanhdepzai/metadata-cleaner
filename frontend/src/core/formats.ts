import type { ImageFormat } from '../types';
import { ascii, matches, u32be } from './bytes';

export const FORMAT_MIME: Record<ImageFormat, string> = {
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  heif: 'image/heic',
  avif: 'image/avif',
};

export const FORMAT_LABEL: Record<ImageFormat, string> = {
  jpeg: 'JPEG',
  png: 'PNG',
  webp: 'WebP',
  gif: 'GIF',
  heif: 'HEIC',
  avif: 'AVIF',
};

/** Số byte đầu file cần đọc để nhận diện định dạng. */
export const SIGNATURE_BYTES = 64;

const HEIF_BRANDS = new Set(['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs']);
const AVIF_BRANDS = new Set(['avif', 'avis']);
const GENERIC_BRANDS = new Set(['mif1', 'msf1', 'mif2']);

/** Nhận diện định dạng bằng Magic Bytes thay vì tin vào đuôi file / MIME. */
export function detectFormat(head: Uint8Array): ImageFormat | null {
  if (matches(head, 0, [0xff, 0xd8, 0xff])) return 'jpeg';
  if (matches(head, 0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return 'png';
  if (matches(head, 0, 'RIFF') && matches(head, 8, 'WEBP')) return 'webp';
  if (matches(head, 0, 'GIF87a') || matches(head, 0, 'GIF89a')) return 'gif';
  if (matches(head, 4, 'ftyp')) {
    const end = Math.min(u32be(head, 0), head.length);
    const major = ascii(head, 8, 4);
    if (AVIF_BRANDS.has(major)) return 'avif';
    if (HEIF_BRANDS.has(major)) return 'heif';
    const compatible: string[] = [];
    for (let o = 16; o + 4 <= end; o += 4) compatible.push(ascii(head, o, 4));
    if (compatible.some((b) => AVIF_BRANDS.has(b))) return 'avif';
    if (compatible.some((b) => HEIF_BRANDS.has(b))) return 'heif';
    if (GENERIC_BRANDS.has(major) || compatible.some((b) => GENERIC_BRANDS.has(b))) return 'heif';
  }
  return null;
}
