import type { FieldCategory, MetadataField } from '../../types';
import { clean } from './text';

const SKIP_PREFIXES = new Set(['xmlns', 'rdf', 'x', 'xml']);
const MAX_FIELDS = 300;

const LOCATION = /^(gps|city|state|country|countrycode|location|sublocation|provincestate|worldregion|locationcreated|locationshown)/i;
const TIME = /date|^when$|^timecreated$|^subsectime/i;
const PERSONAL = new Set([
  'creator', 'rights', 'author', 'authorsposition', 'captionwriter', 'credit', 'owner', 'ownername',
  'cameraownername', 'serialnumber', 'bodyserialnumber', 'lensserialnumber', 'lens', 'lensmodel', 'make', 'model',
  'usageterms', 'webstatement', 'marked', 'ciemailwork', 'ciadrcity', 'ciadrctry', 'ciadrextadr', 'citelwork',
  'ciurlwork', 'contributor', 'publisher', 'artist', 'copyright', 'description', 'title', 'subject', 'imageuniqueid',
]);
const AI = new Set(['digitalsourcetype', 'prompt', 'negativeprompt', 'aigenerated', 'aisystemused', 'aipromptinformation']);

function categorize(prefix: string, name: string): FieldCategory {
  const n = name.toLowerCase();
  if (AI.has(n)) return 'ai';
  if (LOCATION.test(n) || (prefix === 'exif' && n.startsWith('gps'))) return n.includes('timestamp') ? 'time' : 'location';
  if (TIME.test(n)) return 'time';
  if (PERSONAL.has(n)) return 'personal';
  return 'technical';
}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

function unescapeXml(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e: string) => {
    if (e[0] === '#') {
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e] ?? m;
  });
}

/**
 * Trích thuộc tính XMP bằng biểu thức chính quy (Web Worker không có DOMParser):
 * dạng thuộc tính `ns:Prop="..."`, phần tử lá `<ns:Prop>...</ns:Prop>` và mảng `rdf:Seq/Bag/Alt`.
 */
export function parseXmp(xml: string): MetadataField[] {
  const fields: MetadataField[] = [];
  const seen = new Set<string>();

  const add = (prefix: string, name: string, raw: string) => {
    if (SKIP_PREFIXES.has(prefix) || fields.length >= MAX_FIELDS) return;
    const value = clean(unescapeXml(raw));
    if (!value) return;
    const key = `${prefix}:${name}=${value}`;
    if (seen.has(key)) return;
    seen.add(key);
    fields.push({ group: `XMP · ${prefix}`, name, value, category: categorize(prefix, name) });
  };

  for (const m of xml.matchAll(/\s([A-Za-z][\w-]*):([A-Za-z][\w.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    add(m[1], m[2], m[3] ?? m[4] ?? '');
  }

  const arrayRe = /<([A-Za-z][\w-]*):([A-Za-z][\w.-]*)(?:\s[^>]*)?>\s*<rdf:(?:Seq|Bag|Alt)[^>]*>([\s\S]*?)<\/rdf:(?:Seq|Bag|Alt)>/g;
  for (const m of xml.matchAll(arrayRe)) {
    const items = [...m[3].matchAll(/<rdf:li[^>]*>([^<]*)<\/rdf:li>/g)].map((li) => li[1].trim()).filter(Boolean);
    if (items.length) add(m[1], m[2], items.join('; '));
  }

  for (const m of xml.matchAll(/<([A-Za-z][\w-]*):([A-Za-z][\w.-]*)(?:\s[^>]*)?>([^<]+)<\/\1:\2>/g)) {
    add(m[1], m[2], m[3]);
  }

  return fields;
}
