import type { ImageFormat, StripOptions, StripResult } from '../../types';
import { stripGif } from './gif';
import { stripIsobmff } from './isobmff';
import { stripJpeg } from './jpeg';
import { stripPng } from './png';
import { stripWebp } from './webp';

/** Điểm vào của Multi-format Parsing Engine: rẽ nhánh theo định dạng nhận diện từ Magic Bytes. */
export function stripMetadata(data: Uint8Array, format: ImageFormat, options: StripOptions): StripResult {
  switch (format) {
    case 'jpeg':
      return stripJpeg(data, options);
    case 'png':
      return stripPng(data, options);
    case 'webp':
      return stripWebp(data, options);
    case 'gif':
      return stripGif(data, options);
    case 'heif':
    case 'avif':
      return stripIsobmff(data);
  }
}
