import { msg, raw, type ImageFormat, type InfoItem, type MetadataBlock, type MetadataField, type Msg } from '../../types';
import { ascii, concat, cString, matches, toHex, u16be, u32be, u32le } from '../bytes';
import {
  boxVersion,
  childBoxes,
  findChild,
  fullBoxBody,
  itemRanges,
  metaChildren,
  parseIinf,
  parseIloc,
  type Box,
} from '../isobmff';
import { C2PA_UUID, classifyItem, XMP_UUID } from '../strippers/isobmff';
import { findJpegEnd } from '../strippers/jpeg';
import { clean, decode, inflate } from './text';

/** Dữ liệu metadata thô được bóc ra từ cấu trúc tệp, chưa giải nghĩa. */
export interface Extracted {
  blocks: MetadataBlock[];
  exif: Uint8Array[];
  xmp: string[];
  photoshopIrb: Uint8Array[];
  icc: Uint8Array | null;
  c2pa: Uint8Array[];
  texts: { chunk: string; keyword: string; value: string }[];
  comments: string[];
  encoding: InfoItem[];
  structure: Msg;
  extraFields: MetadataField[];
}

const empty = (): Extracted => ({
  blocks: [],
  exif: [],
  xmp: [],
  photoshopIrb: [],
  icc: null,
  c2pa: [],
  texts: [],
  comments: [],
  encoding: [],
  structure: raw(''),
  extraFields: [],
});

const info = (label: Msg, value: Msg): InfoItem => ({ label, value });
const block = (name: Msg | string, kind: MetadataBlock['kind'], bytes: number): MetadataBlock => ({
  name: typeof name === 'string' ? raw(name) : name,
  kind,
  bytes,
});

export async function extract(data: Uint8Array, format: ImageFormat): Promise<Extracted> {
  switch (format) {
    case 'jpeg':
      return extractJpeg(data);
    case 'png':
      return extractPng(data);
    case 'webp':
      return extractWebp(data);
    case 'gif':
      return extractGif(data);
    case 'heif':
    case 'avif':
      return extractIsobmff(data);
  }
}

// ---------------- JPEG ----------------

const SOF_NAMES: Record<number, string> = {
  0xc0: 'Baseline DCT',
  0xc1: 'Extended sequential DCT',
  0xc2: 'Progressive DCT',
  0xc3: 'Lossless',
  0xc9: 'Extended sequential (arithmetic)',
  0xca: 'Progressive (arithmetic)',
};

function extractJpeg(src: Uint8Array): Extracted {
  const ex = empty();
  const iccChunks: { seq: number; data: Uint8Array }[] = [];
  let segments = 0;
  let off = 2;

  while (off + 4 <= src.length) {
    if (src[off] !== 0xff) break;
    const marker = src[off + 1];
    if (marker === 0xff) {
      off++;
      continue;
    }
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd8)) {
      off += 2;
      continue;
    }
    if (marker === 0xda || marker === 0xd9) {
      const end = marker === 0xda ? findJpegEnd(src, off) : off + 2;
      if (end < src.length) ex.blocks.push(block(msg('blkAfterEoi'), 'other', src.length - end));
      break;
    }

    const length = u16be(src, off + 2);
    const end = off + 2 + length;
    if (length < 2 || end > src.length) break;
    segments++;
    const p = off + 4;
    const payload = src.subarray(p, end);
    const bytes = end - off;
    const id = ascii(src, p, Math.min(length - 2, 40));

    if (marker === 0xe0 && id.startsWith('JFIF\0')) {
      ex.encoding.push(info(raw('JFIF'), raw(`v${src[p + 5]}.${String(src[p + 6]).padStart(2, '0')}`)));
      if (length >= 16 && src[p + 12] * src[p + 13] > 0) ex.blocks.push(block(msg('blkJfifThumb'), 'other', bytes - 18));
    } else if (marker === 0xe0 && id.startsWith('JFXX\0')) {
      ex.blocks.push(block(msg('blkJfxx'), 'other', bytes));
    } else if (marker === 0xe1 && id.startsWith('Exif\0')) {
      ex.exif.push(payload.subarray(6));
      ex.blocks.push(block('EXIF (APP1)', 'exif', bytes));
    } else if (marker === 0xe1 && id.startsWith('http://ns.adobe.com/xap/1.0/')) {
      ex.xmp.push(decode(payload.subarray(29)));
      ex.blocks.push(block('XMP (APP1)', 'xmp', bytes));
    } else if (marker === 0xe1 && id.startsWith('http://ns.adobe.com/xmp/extension/')) {
      ex.xmp.push(decode(payload.subarray(75)));
      ex.blocks.push(block(msg('blkXmpExtended'), 'xmp', bytes));
    } else if (marker === 0xe2 && id.startsWith('ICC_PROFILE\0')) {
      iccChunks.push({ seq: src[p + 12], data: payload.subarray(14) });
      ex.blocks.push(block('ICC Profile (APP2)', 'icc', bytes));
    } else if (marker === 0xeb) {
      ex.c2pa.push(payload);
      ex.blocks.push(block('C2PA / JUMBF (APP11)', 'c2pa', bytes));
    } else if (marker === 0xed) {
      if (id.startsWith('Photoshop 3.0\0')) ex.photoshopIrb.push(payload.subarray(14));
      ex.blocks.push(block('IPTC / Photoshop (APP13)', 'iptc', bytes));
    } else if (marker === 0xfe) {
      ex.comments.push(clean(decode(payload)));
      ex.blocks.push(block('Comment (COM)', 'comment', bytes));
    } else if (marker === 0xee) {
      ex.encoding.push(info(raw('Adobe APP14'), msg('valAdobeKept')));
    } else if (marker >= 0xe1 && marker <= 0xef) {
      const label = id.split('\0')[0].slice(0, 20) || `APP${marker - 0xe0}`;
      ex.blocks.push(block(`${label} (APP${marker - 0xe0})`, 'other', bytes));
    } else if (SOF_NAMES[marker] && end - p >= 6) {
      const components = src[p + 5];
      ex.encoding.push(info(msg('encCompression'), raw(`JPEG ${SOF_NAMES[marker]}`)));
      ex.encoding.push(info(msg('encBitDepth'), msg('valBitsPerChannel', { bits: src[p] })));
      ex.encoding.push(
        info(msg('encColorSpace'), raw(components === 1 ? 'Grayscale' : components === 4 ? 'CMYK / YCCK' : 'YCbCr')),
      );
      if (components === 3 && end - p >= 6 + 9) {
        const h = src[p + 7] >> 4;
        const v = src[p + 7] & 0x0f;
        const sub = h === 2 && v === 2 ? '4:2:0' : h === 2 && v === 1 ? '4:2:2' : h === 1 && v === 1 ? '4:4:4' : `${h}×${v}`;
        ex.encoding.push(info(msg('encSubsampling'), raw(sub)));
      }
    }
    off = end;
  }

  if (iccChunks.length) ex.icc = concat(iccChunks.sort((a, b) => a.seq - b.seq).map((c) => c.data));
  ex.structure = msg('structSegments', { count: segments });
  return ex;
}

// ---------------- PNG ----------------

const PNG_COLOR: Record<number, Msg> = {
  0: raw('Grayscale'),
  2: raw('RGB'),
  3: msg('valIndexed'),
  4: raw('Grayscale + Alpha'),
  6: raw('RGBA'),
};

async function extractPng(src: Uint8Array): Promise<Extracted> {
  const ex = empty();
  let chunks = 0;
  let idat = 0;
  let off = 8;

  while (off + 12 <= src.length) {
    const length = u32be(src, off);
    const type = ascii(src, off + 4, 4);
    const end = off + 12 + length;
    if (end > src.length) break;
    chunks++;
    const d = src.subarray(off + 8, off + 8 + length);
    const bytes = end - off;

    if (type === 'IHDR' && length >= 13) {
      ex.encoding.push(info(msg('encCompression'), msg('valPngLossless')));
      ex.encoding.push(info(msg('encBitDepth'), msg('valBitsPerChannel', { bits: d[8] })));
      ex.encoding.push(info(msg('encColorType'), PNG_COLOR[d[9]] ?? raw(String(d[9]))));
      ex.encoding.push(info(msg('encInterlace'), d[12] === 1 ? raw('Adam7') : msg('valNo')));
    } else if (type === 'IDAT') {
      idat++;
    } else if (type === 'acTL' && length >= 8) {
      ex.encoding.push(info(msg('encAnimation'), raw(`APNG · ${u32be(d, 0)}`)));
    } else if (type === 'tEXt' || type === 'zTXt' || type === 'iTXt') {
      const { keyword, value } = await decodePngText(type, d);
      if (keyword === 'XML:com.adobe.xmp') {
        ex.xmp.push(value);
        ex.blocks.push(block(`XMP (${type})`, 'xmp', bytes));
      } else {
        ex.texts.push({ chunk: type, keyword, value });
        ex.blocks.push(block(`${type}: ${keyword}`, 'text', bytes));
      }
    } else if (type === 'eXIf') {
      ex.exif.push(d);
      ex.blocks.push(block('EXIF (eXIf)', 'exif', bytes));
    } else if (type === 'caBX') {
      ex.c2pa.push(d);
      ex.blocks.push(block('C2PA (caBX)', 'c2pa', bytes));
    } else if (type === 'iCCP') {
      const name = cString(d, 0, 80);
      ex.icc = await inflate(d.subarray(name.next + 1));
      ex.blocks.push(block(`ICC Profile (iCCP: ${name.value})`, 'icc', bytes));
    } else if (type === 'tIME' && length >= 7) {
      const t = `${u16be(d, 0)}-${pad(d[2])}-${pad(d[3])} ${pad(d[4])}:${pad(d[5])}:${pad(d[6])} UTC`;
      ex.extraFields.push({ group: 'PNG · tIME', name: 'LastModified', value: t, category: 'time' });
      ex.blocks.push(block(msg('blkTime'), 'other', bytes));
    } else if (type === 'dSIG') {
      ex.blocks.push(block(msg('blkSignature'), 'other', bytes));
    }
    off = end;
    if (type === 'IEND') break;
  }

  ex.encoding.push(info(msg('encImageData'), msg('valIdat', { count: idat })));
  ex.structure = msg('structChunks', { count: chunks });
  return ex;
}

const pad = (n: number) => String(n).padStart(2, '0');

async function decodePngText(type: string, d: Uint8Array): Promise<{ keyword: string; value: string }> {
  const kw = cString(d, 0, 80);
  if (type === 'tEXt') return { keyword: kw.value, value: clean(decode(d.subarray(kw.next), 'latin1')) };
  if (type === 'zTXt') {
    const inflated = await inflate(d.subarray(kw.next + 1));
    return { keyword: kw.value, value: inflated ? clean(decode(inflated, 'latin1')) : '[compressed]' };
  }
  // iTXt: keyword \0 flag method lang \0 translated \0 text
  const compressed = d[kw.next] === 1;
  const lang = cString(d, kw.next + 2, d.length);
  const translated = cString(d, lang.next, d.length);
  const body = d.subarray(translated.next);
  const text = compressed ? await inflate(body) : body;
  return { keyword: kw.value, value: text ? clean(decode(text)) : '[compressed]' };
}

// ---------------- WebP ----------------

function extractWebp(src: Uint8Array): Extracted {
  const ex = empty();
  const riffEnd = Math.min(src.length, 8 + u32le(src, 4));
  let chunks = 0;
  let frames = 0;
  let off = 12;

  while (off + 8 <= riffEnd) {
    const fourcc = ascii(src, off, 4);
    const size = u32le(src, off + 4);
    const end = Math.min(riffEnd, off + 8 + size + (size & 1));
    const d = src.subarray(off + 8, Math.min(riffEnd, off + 8 + size));
    const bytes = end - off;
    chunks++;

    if (fourcc === 'VP8X' && d.length >= 1) {
      const features = [d[0] & 0x10 && 'Alpha', d[0] & 0x02 && 'ANIM'].filter(Boolean).join(' · ');
      ex.encoding.push(info(msg('encExtended'), features ? raw(features) : msg('valYes')));
    } else if (fourcc === 'VP8 ') {
      ex.encoding.push(info(msg('encCompression'), msg('valWebpLossy')));
    } else if (fourcc === 'VP8L') {
      ex.encoding.push(info(msg('encCompression'), msg('valWebpLossless')));
    } else if (fourcc === 'ANMF') {
      frames++;
    } else if (fourcc === 'EXIF') {
      ex.exif.push(matches(d, 0, 'Exif\0\0') ? d.subarray(6) : d);
      ex.blocks.push(block('EXIF', 'exif', bytes));
    } else if (fourcc === 'XMP ') {
      ex.xmp.push(decode(d));
      ex.blocks.push(block('XMP', 'xmp', bytes));
    } else if (fourcc === 'ICCP') {
      ex.icc = d;
      ex.blocks.push(block('ICC Profile (ICCP)', 'icc', bytes));
    } else if (fourcc === 'C2PA') {
      ex.c2pa.push(d);
      ex.blocks.push(block('C2PA', 'c2pa', bytes));
    }
    off = end;
  }

  if (frames) ex.encoding.push(info(msg('encAnimation'), raw(String(frames))));
  ex.structure = msg('structChunks', { count: chunks });
  return ex;
}

// ---------------- GIF ----------------

function extractGif(src: Uint8Array): Extracted {
  const ex = empty();
  ex.encoding.push(info(msg('encVersion'), raw(ascii(src, 0, 6))));
  ex.encoding.push(info(msg('encCompression'), msg('valGifLzw')));

  const packed = src[10];
  let off = 13 + (packed & 0x80 ? 3 * (1 << ((packed & 0x07) + 1)) : 0);
  let frames = 0;
  let blocks = 0;

  const subBlocks = (o: number): { end: number; data: Uint8Array } => {
    const parts: Uint8Array[] = [];
    while (o < src.length) {
      const n = src[o];
      if (n === 0) return { end: o + 1, data: concat(parts) };
      parts.push(src.subarray(o + 1, o + 1 + n));
      o += 1 + n;
    }
    return { end: src.length, data: concat(parts) };
  };

  while (off < src.length) {
    const start = off;
    const introducer = src[off];
    blocks++;
    if (introducer === 0x3b) break;
    if (introducer === 0x2c) {
      frames++;
      const flags = src[off + 9];
      off += 10;
      if (flags & 0x80) off += 3 * (1 << ((flags & 0x07) + 1));
      off = subBlocks(off + 1).end;
      continue;
    }
    if (introducer !== 0x21) break;

    const label = src[off + 1];
    if (label === 0xff) {
      const appId = ascii(src, start + 3, 11);
      const { end, data } = subBlocks(start + 14);
      off = end;
      if (appId === 'NETSCAPE2.0' || appId === 'ANIMEXTS1.0') {
        ex.encoding.push(info(msg('encLoop'), raw(appId)));
      } else if (appId === 'XMP DataXMP') {
        // XMP trong GIF ghi liền khối, byte độ dài sub-block chính là ký tự XMP.
        ex.xmp.push(decode(src.subarray(start + 14, end)));
        ex.blocks.push(block('XMP (Application Extension)', 'xmp', end - start));
      } else if (appId === 'ICCRGBG1012') {
        ex.icc = data;
        ex.blocks.push(block('ICC Profile (Application Extension)', 'icc', end - start));
      } else {
        ex.blocks.push(block(`Application Extension (${appId.trim()})`, 'other', end - start));
      }
    } else {
      const { end, data } = subBlocks(off + 2);
      off = end;
      if (label === 0xfe) {
        ex.comments.push(clean(decode(data, 'latin1')));
        ex.blocks.push(block('Comment Extension', 'comment', end - start));
      }
    }
  }

  ex.encoding.push(info(msg('encAnimation'), raw(String(frames))));
  ex.structure = msg('structBlocks', { count: blocks });
  return ex;
}

// ---------------- HEIC / HEIF / AVIF ----------------

const ITEM_CODEC: Record<string, Msg> = {
  hvc1: raw('HEVC (H.265)'),
  av01: raw('AV1'),
  grid: msg('valGrid'),
  jpeg: raw('JPEG'),
  avc1: raw('AVC (H.264)'),
};

function extractIsobmff(src: Uint8Array): Extracted {
  const ex = empty();
  let topBoxes = 0;

  for (const box of childBoxes(src, 0, src.length)) {
    topBoxes++;
    const bytes = box.end - box.start;
    if (box.type === 'ftyp') {
      const brands = [ascii(src, box.start + 8, 4)];
      for (let o = box.start + 16; o + 4 <= box.end; o += 4) brands.push(ascii(src, o, 4));
      ex.encoding.push(info(msg('encBrand'), msg('valBrand', { major: brands[0], list: brands.slice(1).join(', ') })));
    } else if (box.type === 'uuid') {
      const id = toHex(src.subarray(box.start + box.sizeFieldBytes, box.start + box.headerSize));
      const body = src.subarray(box.start + box.headerSize, box.end);
      if (id === C2PA_UUID) {
        ex.c2pa.push(body);
        ex.blocks.push(block('C2PA Manifest (uuid)', 'c2pa', bytes));
      } else if (id === XMP_UUID) {
        ex.xmp.push(decode(body));
        ex.blocks.push(block('XMP (uuid)', 'xmp', bytes));
      } else {
        ex.blocks.push(block(`uuid ${id.slice(0, 8)}…`, 'other', bytes));
      }
    } else if (box.type === 'meta') {
      inspectMeta(src, box, ex);
    } else if (box.type === 'moov') {
      inspectMovie(src, box, ex);
    }
  }

  ex.structure = msg('structBoxes', { count: topBoxes });
  return ex;
}

function inspectMeta(src: Uint8Array, meta: Box, ex: Extracted): void {
  const { iinf, iloc, idat, pitm, iprp } = metaChildren(src, meta);
  const items = iinf ? parseIinf(src, iinf) : [];
  const locations = iloc ? parseIloc(src, iloc) : [];

  if (pitm) {
    const p = fullBoxBody(pitm);
    const primaryId = boxVersion(src, pitm) === 0 ? u16be(src, p) : u32be(src, p);
    const primary = items.find((i) => i.id === primaryId);
    if (primary) ex.encoding.push(info(msg('encPrimaryCodec'), ITEM_CODEC[primary.type] ?? raw(primary.type)));
  }
  if (items.length) ex.encoding.push(info(msg('encItems'), raw(String(items.length))));

  if (iprp) {
    const ipco = findChild(src, iprp.start + iprp.headerSize, iprp.end, 'ipco');
    if (ipco) {
      for (const prop of childBoxes(src, ipco.start + ipco.headerSize, ipco.end)) {
        if (prop.type === 'pixi') {
          const p = fullBoxBody(prop);
          ex.encoding.push(info(msg('encBitDepth'), msg('valBitsChannels', { bits: src[p + 1], channels: src[p] })));
        } else if (prop.type === 'colr') {
          const kind = ascii(src, prop.start + prop.headerSize, 4);
          if ((kind === 'prof' || kind === 'rICC') && !ex.icc) ex.icc = src.subarray(prop.start + prop.headerSize + 4, prop.end);
        }
      }
    }
  }

  for (const item of items) {
    const kind = classifyItem(item);
    if (!kind) continue;
    const loc = locations.find((l) => l.itemId === item.id);
    if (!loc) continue;
    const payload = concat(itemRanges(loc, idat, src.length).map(([s, e]) => src.subarray(s, e)));
    if (payload.length === 0) continue;
    if (kind === 'EXIF' && payload.length > 4) {
      const tiffOffset = u32be(payload, 0);
      ex.exif.push(payload.subarray(4 + tiffOffset));
      ex.blocks.push(block(`EXIF (item #${item.id})`, 'exif', payload.length));
    } else if (kind === 'XMP') {
      ex.xmp.push(decode(payload));
      ex.blocks.push(block(`XMP (item #${item.id})`, 'xmp', payload.length));
    } else if (kind === 'C2PA') {
      ex.c2pa.push(payload);
      ex.blocks.push(block(`C2PA (item #${item.id})`, 'c2pa', payload.length));
    }
  }
}

/** Giây kể từ 1904-01-01 (epoch của ISOBMFF) → chuỗi thời gian UTC. */
const MAC_EPOCH_OFFSET = 2082844800;

function inspectMovie(src: Uint8Array, container: Box, ex: Extracted): void {
  for (const box of childBoxes(src, container.start + container.headerSize, container.end)) {
    if (box.type === 'mvhd') {
      const p = box.start + box.headerSize;
      const created = src[p] === 1 ? u32be(src, p + 4) * 0x100000000 + u32be(src, p + 8) : u32be(src, p + 4);
      if (created > MAC_EPOCH_OFFSET) {
        const iso = new Date((created - MAC_EPOCH_OFFSET) * 1000).toISOString().replace('T', ' ').slice(0, 19);
        ex.extraFields.push({ group: 'ISOBMFF · mvhd', name: 'CreationTime', value: `${iso} UTC`, category: 'time' });
      }
    } else if (box.type === 'udta' || box.type === 'meta') {
      ex.blocks.push(block(msg('blkMovieMeta', { box: box.type }), 'other', box.end - box.start));
    } else if (box.type === 'trak' || box.type === 'mdia') {
      inspectMovie(src, box, ex);
    }
  }
}
