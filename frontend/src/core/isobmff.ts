import { ascii, cString, ParseError, u16be, u32be, uintBE } from './bytes';

/** Một "hộp" (Box/Atom) của chuẩn ISO Base Media File Format (HEIC/HEIF/AVIF). */
export interface Box {
  type: string;
  start: number;
  /** Độ dài header, đã gồm largesize (nếu có) và usertype 16 byte của box `uuid`. */
  headerSize: number;
  /** Số byte của trường kích thước + kiểu (8, hoặc 16 khi dùng largesize). */
  sizeFieldBytes: number;
  end: number;
}

export function readBox(b: Uint8Array, off: number, limit: number): Box | null {
  if (off + 8 > limit) return null;
  let size = u32be(b, off);
  const type = ascii(b, off + 4, 4);
  let sizeFieldBytes = 8;
  if (size === 1) {
    if (off + 16 > limit) throw new ParseError(`Truncated ${type} box`);
    size = uintBE(b, off + 8, 8);
    sizeFieldBytes = 16;
  } else if (size === 0) {
    size = limit - off;
  }
  const headerSize = sizeFieldBytes + (type === 'uuid' ? 16 : 0);
  if (size < headerSize || off + size > limit) throw new ParseError(`Invalid ${type} box size`);
  return { type, start: off, headerSize, sizeFieldBytes, end: off + size };
}

export function* childBoxes(b: Uint8Array, start: number, end: number): Generator<Box> {
  let o = start;
  while (o < end) {
    const box = readBox(b, o, end);
    if (!box) return;
    yield box;
    o = box.end;
  }
}

/** Vị trí bắt đầu nội dung con của một FullBox (bỏ qua 4 byte version + flags). */
export const fullBoxBody = (box: Box) => box.start + box.headerSize + 4;
export const boxVersion = (b: Uint8Array, box: Box) => b[box.start + box.headerSize];

export function findChild(b: Uint8Array, start: number, end: number, type: string): Box | undefined {
  for (const box of childBoxes(b, start, end)) if (box.type === type) return box;
  return undefined;
}

export interface ItemInfo {
  id: number;
  type: string;
  contentType: string;
}

export interface ItemLocation {
  itemId: number;
  constructionMethod: number;
  baseOffset: number;
  extents: { offset: number; length: number }[];
}

export function parseIinf(b: Uint8Array, box: Box): ItemInfo[] {
  let p = fullBoxBody(box);
  p += boxVersion(b, box) === 0 ? 2 : 4;

  const items: ItemInfo[] = [];
  for (const infe of childBoxes(b, p, box.end)) {
    if (infe.type !== 'infe') continue;
    const v = boxVersion(b, infe);
    let q = fullBoxBody(infe);
    if (v >= 2) {
      const id = v === 2 ? u16be(b, q) : u32be(b, q);
      q += (v === 2 ? 2 : 4) + 2; // + item_protection_index
      const type = ascii(b, q, 4);
      q = cString(b, q + 4, infe.end - q - 4).next; // item_name
      const contentType = type === 'mime' && q < infe.end ? cString(b, q, infe.end - q).value : '';
      items.push({ id, type, contentType });
    } else {
      const id = u16be(b, q);
      q = cString(b, q + 4, infe.end - q - 4).next;
      const contentType = q < infe.end ? cString(b, q, infe.end - q).value : '';
      items.push({ id, type: 'mime', contentType });
    }
  }
  return items;
}

export function parseIloc(b: Uint8Array, box: Box): ItemLocation[] {
  const version = boxVersion(b, box);
  let p = fullBoxBody(box);
  const offsetSize = b[p] >> 4;
  const lengthSize = b[p] & 0x0f;
  const baseOffsetSize = b[p + 1] >> 4;
  const indexSize = version === 1 || version === 2 ? b[p + 1] & 0x0f : 0;
  p += 2;
  const count = version < 2 ? u16be(b, p) : u32be(b, p);
  p += version < 2 ? 2 : 4;

  const locations: ItemLocation[] = [];
  for (let i = 0; i < count && p < box.end; i++) {
    const itemId = version < 2 ? u16be(b, p) : u32be(b, p);
    p += version < 2 ? 2 : 4;
    let constructionMethod = 0;
    if (version === 1 || version === 2) {
      constructionMethod = u16be(b, p) & 0x0f;
      p += 2;
    }
    p += 2; // data_reference_index
    const baseOffset = uintBE(b, p, baseOffsetSize);
    p += baseOffsetSize;
    const extentCount = u16be(b, p);
    p += 2;

    const extents: ItemLocation['extents'] = [];
    for (let j = 0; j < extentCount; j++) {
      p += indexSize;
      const offset = uintBE(b, p, offsetSize);
      p += offsetSize;
      const length = uintBE(b, p, lengthSize);
      p += lengthSize;
      extents.push({ offset, length });
    }
    if (p > box.end) break;
    locations.push({ itemId, constructionMethod, baseOffset, extents });
  }
  return locations;
}

/**
 * Vùng byte tuyệt đối của một item: construction_method 0 = offset trong file,
 * 1 = offset trong box `idat`. Phương thức khác (tham chiếu item) không hỗ trợ → [].
 */
export function itemRanges(loc: ItemLocation, idat: Box | undefined, fileLength: number): [number, number][] {
  let base: number;
  if (loc.constructionMethod === 0) base = 0;
  else if (loc.constructionMethod === 1 && idat) base = idat.start + idat.headerSize;
  else return [];

  const ranges: [number, number][] = [];
  for (const ext of loc.extents) {
    const start = base + loc.baseOffset + ext.offset;
    const end = start + ext.length;
    if (ext.length > 0 && end <= fileLength) ranges.push([start, end]);
  }
  return ranges;
}

/** Các box con quan trọng của `meta` cấp cao nhất. */
export function metaChildren(b: Uint8Array, meta: Box) {
  const body = fullBoxBody(meta);
  return {
    iinf: findChild(b, body, meta.end, 'iinf'),
    iloc: findChild(b, body, meta.end, 'iloc'),
    idat: findChild(b, body, meta.end, 'idat'),
    pitm: findChild(b, body, meta.end, 'pitm'),
    iprp: findChild(b, body, meta.end, 'iprp'),
  };
}
