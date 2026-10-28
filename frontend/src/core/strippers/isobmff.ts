import type { RemovedSegment, StripResult } from '../../types';
import { toHex } from '../bytes';
import { childBoxes, itemRanges, metaChildren, parseIinf, parseIloc, type Box, type ItemInfo } from '../isobmff';

export const C2PA_UUID = 'd8fec3d61b0e483c92975828877ec481';
export const XMP_UUID = 'be7acfcb97a942e89c71999491e3afac';

/**
 * ISOBMFF Stripper — HEIC / HEIF / AVIF.
 *
 * Box `iloc` lưu vị trí tuyệt đối (file offset) của dữ liệu ảnh trong `mdat`, nên nếu cắt bỏ byte
 * sẽ làm lệch toàn bộ offset và hỏng ảnh. Vì vậy stripper xử lý "tại chỗ", giữ nguyên kích thước file:
 *  - Box `uuid` cấp cao nhất (C2PA Manifest Store, XMP) → đổi thành box `free` và xóa trắng nội dung.
 *  - Item metadata trong `meta` (Exif, XMP mime, C2PA) → ghi đè vùng dữ liệu bằng payload rỗng hợp lệ.
 * Box `ftyp`, `mdat` (dòng HEVC/AV1) và cấu trúc item ảnh được giữ nguyên.
 */
export function stripIsobmff(src: Uint8Array): StripResult {
  const out = src.slice();
  const removed: RemovedSegment[] = [];

  for (const box of childBoxes(src, 0, src.length)) {
    if (box.type === 'uuid') {
      const id = toHex(src.subarray(box.start + box.sizeFieldBytes, box.start + box.headerSize));
      const name = id === C2PA_UUID ? 'C2PA (uuid)' : id === XMP_UUID ? 'XMP (uuid)' : 'uuid';
      neutralizeBox(out, box);
      removed.push({ name, bytes: box.end - box.start, detail: id });
    } else if (box.type === 'meta') {
      removed.push(...scrubMetadataItems(src, out, box));
    } else if (box.type === 'moov') {
      scrubMovie(src, out, box, removed);
    }
  }

  return { data: out, removed };
}

const TIME_BOXES = new Set(['mvhd', 'tkhd', 'mdhd']);
const MOVIE_CONTAINERS = new Set(['moov', 'trak', 'mdia']);

/**
 * Chuỗi ảnh (AVIF động, HEIC sequence) có box `moov` như video: xóa thời gian tạo/sửa trong
 * mvhd/tkhd/mdhd (ghi 0, giữ nguyên kích thước) và vô hiệu hóa `udta`/`meta` (vị trí, tác giả, phần mềm).
 * Timescale, thời lượng và dữ liệu khung hình (hoạt ảnh) được giữ nguyên.
 */
function scrubMovie(src: Uint8Array, out: Uint8Array, container: Box, removed: RemovedSegment[]): void {
  for (const box of childBoxes(src, container.start + container.headerSize, container.end)) {
    if (TIME_BOXES.has(box.type)) {
      const p = box.start + box.headerSize;
      const span = src[p] === 1 ? 16 : 8; // version 1: 2 × u64, version 0: 2 × u32
      if (p + 4 + span <= box.end) {
        out.fill(0, p + 4, p + 4 + span);
        removed.push({ name: `Timestamps (${box.type})`, bytes: span });
      }
    } else if (box.type === 'udta' || box.type === 'meta') {
      neutralizeBox(out, box);
      removed.push({ name: `Sequence metadata (${box.type})`, bytes: box.end - box.start });
    } else if (MOVIE_CONTAINERS.has(box.type)) {
      scrubMovie(src, out, box, removed);
    }
  }
}

function neutralizeBox(out: Uint8Array, box: Box): void {
  out.set([0x66, 0x72, 0x65, 0x65], box.start + 4); // 'free'
  out.fill(0, box.start + box.sizeFieldBytes, box.end);
}

export type MetadataItemKind = 'EXIF' | 'XMP' | 'C2PA';

export function classifyItem(item: ItemInfo): MetadataItemKind | null {
  const ct = item.contentType.toLowerCase();
  if (item.type === 'Exif') return 'EXIF';
  if (item.type === 'c2pa' || item.type === 'jumb' || ct.includes('c2pa') || ct.includes('jumbf')) return 'C2PA';
  if (item.type === 'mime' && (ct.includes('rdf+xml') || ct.includes('xmp'))) return 'XMP';
  return null;
}

function scrubMetadataItems(src: Uint8Array, out: Uint8Array, meta: Box): RemovedSegment[] {
  const { iinf, iloc, idat } = metaChildren(src, meta);
  if (!iinf || !iloc) return [];

  const targets = new Map<number, MetadataItemKind>();
  for (const item of parseIinf(src, iinf)) {
    const kind = classifyItem(item);
    if (kind) targets.set(item.id, kind);
  }
  if (targets.size === 0) return [];

  const removed: RemovedSegment[] = [];
  for (const loc of parseIloc(src, iloc)) {
    const kind = targets.get(loc.itemId);
    if (!kind) continue;
    const ranges = itemRanges(loc, idat, out.length);
    const total = ranges.reduce((n, [s, e]) => n + e - s, 0);
    if (total === 0) continue;

    writeAcrossRanges(out, ranges, placeholderFor(kind, total));
    removed.push({ name: kind, bytes: total, detail: `item #${loc.itemId}` });
  }
  return removed;
}

/** Payload thay thế có cấu trúc hợp lệ để trình đọc metadata không báo lỗi file hỏng. */
function placeholderFor(kind: MetadataItemKind, length: number): Uint8Array {
  const buf = new Uint8Array(length);
  if (kind === 'EXIF') {
    // exif_tiff_header_offset = 0, TIFF big-endian với IFD0 rỗng.
    const emptyTiff = [0, 0, 0, 0, 0x4d, 0x4d, 0, 0x2a, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0];
    if (length >= emptyTiff.length) buf.set(emptyTiff);
  } else if (kind === 'XMP') {
    buf.fill(0x20);
    const packet = "<?xpacket begin='' id='W5M0MpCehiHzreSzNTczkc9d'?><x:xmpmeta xmlns:x='adobe:ns:meta/'/><?xpacket end='w'?>";
    if (length >= packet.length) for (let i = 0; i < packet.length; i++) buf[i] = packet.charCodeAt(i);
  }
  return buf;
}

function writeAcrossRanges(out: Uint8Array, ranges: [number, number][], data: Uint8Array): void {
  let p = 0;
  for (const [start, end] of ranges) {
    out.set(data.subarray(p, p + (end - start)), start);
    p += end - start;
  }
}
