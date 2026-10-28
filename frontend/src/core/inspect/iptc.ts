import type { FieldCategory, MetadataField } from '../../types';
import { ascii, u16be, u32be } from '../bytes';
import { clean, decode } from './text';

const DATASETS: Record<number, [string, FieldCategory]> = {
  5: ['ObjectName', 'personal'],
  25: ['Keywords', 'personal'],
  55: ['DateCreated', 'time'],
  60: ['TimeCreated', 'time'],
  62: ['DigitalCreationDate', 'time'],
  63: ['DigitalCreationTime', 'time'],
  80: ['By-line', 'personal'],
  85: ['By-lineTitle', 'personal'],
  90: ['City', 'location'],
  92: ['Sub-location', 'location'],
  95: ['Province-State', 'location'],
  100: ['Country-PrimaryLocationCode', 'location'],
  101: ['Country-PrimaryLocationName', 'location'],
  105: ['Headline', 'personal'],
  110: ['Credit', 'personal'],
  115: ['Source', 'personal'],
  116: ['CopyrightNotice', 'personal'],
  120: ['Caption-Abstract', 'personal'],
  122: ['Writer-Editor', 'personal'],
};

const IPTC_RESOURCE = 0x0404;

/** Photoshop Image Resource Blocks (APP13) → bản ghi IPTC-IIM (resource 0x0404). */
export function parsePhotoshopIrb(irb: Uint8Array): MetadataField[] {
  const fields: MetadataField[] = [];
  let o = 0;
  while (o + 12 <= irb.length && ascii(irb, o, 4) === '8BIM') {
    const id = u16be(irb, o + 4);
    const nameLen = irb[o + 6];
    const p = o + 6 + ((nameLen + 2) & ~1);
    if (p + 4 > irb.length) break;
    const size = u32be(irb, p);
    const data = p + 4;
    if (data + size > irb.length) break;
    if (id === IPTC_RESOURCE) fields.push(...parseIim(irb.subarray(data, data + size)));
    o = data + size + (size & 1);
  }
  return fields;
}

function parseIim(b: Uint8Array): MetadataField[] {
  const fields: MetadataField[] = [];
  let o = 0;
  while (o + 5 <= b.length && b[o] === 0x1c) {
    const record = b[o + 1];
    const dataset = b[o + 2];
    const size = u16be(b, o + 3);
    if (size & 0x8000) break; // extended dataset — hiếm gặp, bỏ qua
    const def = DATASETS[dataset];
    if (record === 2 && def) {
      const value = clean(decode(b.subarray(o + 5, o + 5 + size)));
      if (value) fields.push({ group: 'IPTC', name: def[0], value, category: def[1] });
    }
    o += 5 + size;
  }
  return fields;
}
