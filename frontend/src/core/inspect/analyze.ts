import { msg, raw, type AiSignal, type AnalysisReport, type CheckItem, type ImageFormat, type MetadataField, type Msg } from '../../types';
import { bufferSource, readDimensions } from '../dimensions';
import { FORMAT_LABEL } from '../formats';
import { AI_TEXT_KEYWORDS, aiSignature } from './aiSignatures';
import { inspectC2pa } from './c2pa';
import { parseExif } from './exif';
import { extract } from './extract';
import { iccColorSpace, iccDescription } from './icc';
import { parsePhotoshopIrb } from './iptc';
import { parseXmp } from './xmp';

const sameMsg = (a: Msg, b: Msg) => a.key === b.key && JSON.stringify(a.params) === JSON.stringify(b.params);

/** Phân tích toàn bộ metadata của một tệp ảnh — chạy trong Web Worker. */
export async function analyzeImage(data: Uint8Array, format: ImageFormat): Promise<AnalysisReport> {
  const ex = await extract(data, format);
  const { width, height } = await readDimensions(bufferSource(data), format).catch(() => ({ width: 0, height: 0 }));

  const fields: MetadataField[] = [];
  for (const tiff of ex.exif) fields.push(...parseExif(tiff));
  for (const xml of ex.xmp) fields.push(...parseXmp(xml));
  for (const irb of ex.photoshopIrb) fields.push(...parsePhotoshopIrb(irb));
  for (const t of ex.texts) {
    const kw = t.keyword.toLowerCase();
    const category = AI_TEXT_KEYWORDS[kw]
      ? 'ai'
      : /author|copyright|description|comment|title|source|disclaimer/.test(kw)
        ? 'personal'
        : /time|date/.test(kw)
          ? 'time'
          : 'technical';
    fields.push({ group: `PNG · ${t.chunk}`, name: t.keyword, value: t.value, category });
  }
  for (const c of ex.comments) if (c) fields.push({ group: 'Comment', name: 'Comment', value: c, category: 'personal' });
  fields.push(...ex.extraFields);

  if (ex.icc) {
    const desc = iccDescription(ex.icc);
    const space = iccColorSpace(ex.icc);
    if (desc) fields.push({ group: 'ICC Profile', name: 'Description', value: desc, category: 'technical' });
    if (space) fields.push({ group: 'ICC Profile', name: 'ColorSpace', value: space, category: 'technical' });
  }

  const signals: AiSignal[] = [];
  const addSignal = (s: AiSignal) => {
    if (!signals.some((x) => sameMsg(x.label, s.label) && sameMsg(x.detail, s.detail))) signals.push(s);
  };

  ex.c2pa.forEach((payload) => {
    const c2pa = inspectC2pa(payload);
    if (c2pa.generator) fields.push({ group: 'C2PA', name: 'ClaimGenerator', value: c2pa.generator, category: 'ai' });
    if (c2pa.actions.length) fields.push({ group: 'C2PA', name: 'Actions', value: c2pa.actions.join(', '), category: 'ai' });
    if (c2pa.aiSourceType) {
      fields.push({ group: 'C2PA', name: 'DigitalSourceType', value: c2pa.aiSourceType, category: 'ai' });
      addSignal({ label: msg('sigC2paAi'), detail: raw(`C2PA · ${c2pa.aiSourceType}`), strong: true });
    }
    addSignal({
      label: msg('sigC2pa'),
      detail: c2pa.generator ? msg('sigGenerator', { name: c2pa.generator }) : msg('sigManifest'),
      strong: Boolean(c2pa.generator && aiSignature(c2pa.generator)),
    });
  });

  // Mọi trường có chữ ký công cụ AI đều được nâng thành nhóm "ai".
  for (const f of fields) {
    const keyword = f.group.startsWith('PNG') ? AI_TEXT_KEYWORDS[f.name.toLowerCase()] : undefined;
    const sig = keyword ?? aiSignature(f.value);
    if (sig) {
      if (f.category !== 'location' && f.category !== 'time') f.category = 'ai';
      addSignal({ label: sig, detail: raw(`${f.group} › ${f.name}`), strong: true });
    }
  }

  const strong = signals.some((s) => s.strong);
  const verdict = strong ? 'detected' : signals.length ? 'review' : 'none';

  return {
    formatLabel: FORMAT_LABEL[format],
    width,
    height,
    fileSize: data.length,
    encoding: ex.encoding,
    structure: ex.structure,
    blocks: ex.blocks,
    fields,
    ai: { verdict, signals },
    checks: buildChecks(format, ex.structure, ex.blocks, fields, signals),
  };
}

function buildChecks(
  format: ImageFormat,
  structure: Msg,
  blocks: AnalysisReport['blocks'],
  fields: MetadataField[],
  signals: AiSignal[],
): CheckItem[] {
  const count = (pred: (f: MetadataField) => boolean) => fields.filter(pred).length;
  const has = (kind: string) => blocks.some((b) => b.kind === kind);
  const found = (label: Msg, n: number, result: Msg): CheckItem =>
    n ? { label, result, status: 'warn' } : { label, result: msg('resNone'), status: 'pass' };

  const exifCount = count((f) => f.group.startsWith('EXIF'));
  const xmpCount = count((f) => f.group.startsWith('XMP'));
  const iptcCount = count((f) => f.group === 'IPTC');
  const gpsCount = count((f) => f.category === 'location');
  const promptCount = count((f) => (f.group.startsWith('PNG') || f.name === 'UserComment') && f.category === 'ai');

  return [
    { label: msg('chkSignature'), result: msg('resValidFormat', { format: FORMAT_LABEL[format] }), status: 'pass' },
    { label: msg('chkLimits'), result: msg('resWithinLimits'), status: 'pass' },
    { label: msg('chkStructure'), result: msg('resScanned', { structure, blocks: blocks.length }), status: 'pass' },
    exifCount
      ? { label: msg('chkExif'), result: msg('resFields', { count: exifCount }), status: 'warn' }
      : { label: msg('chkExif'), result: msg(has('exif') ? 'resEmptyBlock' : 'resNone'), status: 'pass' },
    found(msg('chkGps'), gpsCount, msg('resLocation', { count: gpsCount })),
    found(msg('chkXmp'), xmpCount, msg('resProperties', { count: xmpCount })),
    found(msg('chkIptc'), iptcCount || (has('iptc') ? 1 : 0), msg('resFields', { count: iptcCount })),
    found(msg('chkC2pa'), has('c2pa') ? 1 : 0, msg('resManifest')),
    found(msg('chkPrompt'), promptCount, msg('resItems', { count: promptCount })),
    signals.length
      ? { label: msg('chkAiSig'), result: msg('resSignals', { count: signals.length }), status: 'warn' }
      : { label: msg('chkAiSig'), result: msg('resNotDetected'), status: 'pass' },
    { label: msg('chkIcc'), result: msg(has('icc') ? 'resIccPresent' : 'resNone'), status: 'info' },
    { label: msg('chkWatermark'), result: msg('resWatermark'), status: 'info' },
    { label: msg('chkWhere'), result: msg('resLocal'), status: 'info' },
  ];
}
