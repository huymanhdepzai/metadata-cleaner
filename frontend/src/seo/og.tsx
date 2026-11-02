import { renderToStaticMarkup } from 'react-dom/server';
import { BrandMark } from '../components/BrandMark';
import { GuideIllustration, guideHue, type Hue } from '../components/seo/GuideIllustration';
import { guideContent } from '../content/guideContent';
import { ARTICLE_LANGS, FULL_CONTENT_LANGS, GUIDE_SLUGS, GUIDE_TAGS, SITE, type GuideSlug } from '../content/seo';
import { loadBundle } from '../i18n';
import type { LangCode } from '../i18n/languages';
import type { Messages } from '../i18n/locales/en';
import { OG_SIZE, ogDir } from './head';

/**
 * Sinh ảnh chia sẻ mạng xã hội (Open Graph, 1200×630) — chỉ dùng lúc build (entry-server), không vào bundle client.
 * Mỗi bài một ảnh có tiêu đề bài + ảnh minh họa, và một ảnh mặc định (trang chủ, công cụ, trang thông tin) — sinh riêng
 * cho từng ngôn ngữ có nội dung đầy đủ (FULL_CONTENT_LANGS); ngôn ngữ khác dùng ảnh tiếng Anh (xem ogImagePath).
 * SVG được chuyển sang PNG trong scripts/prerender.mjs vì Facebook/X không nhận SVG. Font đi kèm dự án (prerender.mjs)
 * — Inter cho chữ Latin/tiếng Việt, Noto Sans JP cho tiếng Nhật, JetBrains Mono cho nhãn kỹ thuật.
 */

/** Bảng màu (hex) thay cho biến CSS var(--color-…): trình chuyển SVG→PNG không đọc được CSS của trang. */
const PALETTE: Record<string, string> = {
  surface: '#ffffff',
  'slate-100': '#f1f5f9', 'slate-200': '#e2e8f0', 'slate-400': '#94a3b8', 'slate-900': '#0f172a',
  'indigo-50': '#eef2ff', 'indigo-100': '#e0e7ff', 'indigo-200': '#c7d2fe', 'indigo-400': '#818cf8', 'indigo-500': '#6366f1', 'indigo-700': '#4338ca',
  'rose-50': '#fff1f2', 'rose-100': '#ffe4e6', 'rose-200': '#fecdd3', 'rose-400': '#fb7185', 'rose-500': '#f43f5e', 'rose-700': '#be123c',
  'amber-50': '#fffbeb', 'amber-100': '#fef3c7', 'amber-200': '#fde68a', 'amber-400': '#fbbf24', 'amber-500': '#f59e0b', 'amber-700': '#b45309',
  'emerald-50': '#ecfdf5', 'emerald-100': '#d1fae5', 'emerald-200': '#a7f3d0', 'emerald-400': '#34d399', 'emerald-500': '#10b981', 'emerald-700': '#047857',
  'sky-50': '#f0f9ff', 'sky-100': '#e0f2fe', 'sky-200': '#bae6fd', 'sky-400': '#38bdf8', 'sky-500': '#0ea5e9', 'sky-700': '#0369a1',
  'violet-50': '#f5f3ff', 'violet-100': '#ede9fe', 'violet-200': '#ddd6fe', 'violet-400': '#a78bfa', 'violet-500': '#8b5cf6', 'violet-700': '#6d28d9',
};

function resolveColors(svg: string): string {
  return svg.replace(/var\(--color-([a-z0-9-]+)\)/g, (_, name: string) => {
    const hex = PALETTE[name];
    if (!hex) throw new Error(`og: missing palette color ${name}`);
    return hex;
  });
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const FONT = "Inter, sans-serif";
const fontFor = (lang: LangCode) => (lang === 'ja' ? "'Noto Sans JP', Inter, sans-serif" : FONT);

/** SVG độc lập của biểu tượng thương hiệu — dùng cho favicon.svg và icon PNG (xem scripts/prerender.mjs). */
export const brandSvg = () => renderToStaticMarkup(<BrandMark gradientId="brand" />).replace(' aria-hidden="true"', '');

/** Biểu tượng thương hiệu đặt tại (x, y), cạnh = size. */
const mark = (x: number, y: number, size: number) =>
  brandSvg().replace('<svg ', `<svg x="${x}" y="${y}" width="${size}" height="${size}" `);

/** Màu nhấn theo màu chủ đạo của bài (thẻ chủ đề, dấu tích, quầng sáng). */
const ACCENT: Record<Hue, { glow: string; line: string; text: string }> = {
  indigo: { glow: '#6366f1', line: '#818cf8', text: '#c7d2fe' },
  rose: { glow: '#f43f5e', line: '#fb7185', text: '#fecdd3' },
  amber: { glow: '#f59e0b', line: '#fbbf24', text: '#fde68a' },
  emerald: { glow: '#10b981', line: '#34d399', text: '#a7f3d0' },
  sky: { glow: '#0ea5e9', line: '#38bdf8', text: '#bae6fd' },
  violet: { glow: '#8b5cf6', line: '#a78bfa', text: '#ddd6fe' },
};

// ---------- Ngắt dòng tiêu đề (SVG không tự xuống dòng) ----------

const WIDE = /[⺀-鿿가-힣豈-﫿＀-￯]/u;
/** Không ngắt dòng trước các ký tự này (dấu câu đóng, trường âm, kana nhỏ). */
const NO_BREAK_BEFORE = /^[、。，．」』）】〕ー・！？：；…ぁぃぅぇぉっゃゅょァィゥェォッャュョ)\]:;,.!?]/u;
/** Không ngắt dòng sau các ký tự này (dấu mở ngoặc). */
const NO_BREAK_AFTER = /[「『（【〔(\[]$/u;

/** Bề rộng ước tính (theo em) của chữ đậm Inter / Noto Sans JP — đủ chính xác để ngắt dòng, có chừa lề an toàn. */
function emWidth(text: string): number {
  let w = 0;
  for (const ch of text) {
    if (WIDE.test(ch)) w += 1;
    else if (ch === ' ') w += 0.27;
    else if (/[iljI.,:;'!|’·]/.test(ch)) w += 0.3;
    else if (/[ftr()\-]/.test(ch)) w += 0.4;
    else if (/[mwMW—]/.test(ch)) w += 0.96;
    else if (/[A-ZÀ-ÝĐ0-9]/.test(ch)) w += 0.72;
    else w += 0.62;
  }
  return w;
}

/** Từ Latin, khoảng trắng, hoặc từng ký tự CJK riêng lẻ (tiếng Nhật được ngắt giữa hai ký tự bất kỳ). */
const tokenize = (text: string) => text.match(/[^\s⺀-鿿가-힣豈-﫿＀-￯]+|\s+|./gu) ?? [];

/** Tiếng Nhật ngắt theo ranh giới từ (Intl.Segmenter) thay vì giữa hai ký tự bất kỳ — tránh "メタデー｜タ". */
const jaWords = new Intl.Segmenter('ja', { granularity: 'word' });
const tokensFor = (text: string, lang: LangCode) =>
  lang === 'ja' ? [...jaWords.segment(text)].map((s) => s.segment) : tokenize(text);

function wrap(text: string, size: number, maxWidth: number, lang: LangCode): string[] {
  const lines: string[] = [];
  let line = '';
  let space = false;
  for (const tok of tokensFor(text, lang)) {
    if (/^\s+$/.test(tok)) {
      space = line !== '';
      continue;
    }
    const candidate = line + (space ? ' ' : '') + tok;
    if (!line || emWidth(candidate) * size <= maxWidth || NO_BREAK_BEFORE.test(tok)) {
      line = candidate;
    } else {
      let carry = '';
      if (NO_BREAK_AFTER.test(line)) {
        carry = line.slice(-1);
        line = line.slice(0, -1);
      } else if (/\s\d{1,2}$/.test(line)) {
        // Số ngắn đi liền với từ sau nó ("8 Tools") — đưa xuống dòng mới cùng từ đó.
        carry = `${line.slice(line.lastIndexOf(' ') + 1)} `;
        line = line.slice(0, line.lastIndexOf(' '));
      }
      lines.push(line.trimEnd());
      line = carry + tok;
    }
    space = false;
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Cỡ chữ lớn nhất mà các phần tiêu đề (mỗi phần bắt đầu dòng mới) vừa `maxLines` dòng, không dòng nào tràn khung
 * (từ dài không ngắt được, vd. "ComfyUI-Metadaten") và không phần nào kết thúc bằng một dòng quá ngắn
 * (vd. một chữ Hán đứng riêng). Không cỡ nào đạt thì dùng cỡ nhỏ nhất và cắt bớt bằng "…".
 */
function fitParts(
  parts: string[],
  lang: LangCode,
  maxWidth: number,
  maxLines: number,
  sizes: number[],
): { size: number; parts: string[][] } {
  for (const size of sizes) {
    const wrapped = parts.map((p) => wrap(p, size, maxWidth, lang));
    const lines = wrapped.flat();
    const overflow = lines.some((l) => emWidth(l) * size > maxWidth);
    const orphan = wrapped.some((p) => p.length > 1 && emWidth(p[p.length - 1]) * size < maxWidth * 0.15);
    if (lines.length <= maxLines && !overflow && !orphan) return { size, parts: wrapped };
  }
  const size = sizes[sizes.length - 1];
  console.warn(`og: tiêu đề quá dài, bị cắt trong ảnh chia sẻ (${lang}): ${parts.join(' ')} — nên đặt seoTitle ngắn hơn`);
  let budget = maxLines;
  const wrapped = parts.map((p) => {
    const lines = wrap(p, size, maxWidth, lang);
    const kept = lines.slice(0, Math.max(0, budget));
    if (kept.length < lines.length && kept.length) kept[kept.length - 1] = `${kept[kept.length - 1].replace(/\s*\S$/u, '')}…`;
    budget -= kept.length;
    return kept;
  });
  return { size, parts: wrapped };
}

// ---------- Bố cục chung: chữ bên trái, ảnh minh họa bên phải ----------

const PAD = 72;
const TEXT_W = 590;
/** Khung ảnh minh họa: đúng tỉ lệ 16:9 của GuideIllustration (400×225) để không bị cắt nhãn ở mép. */
const CARD = { x: 700, y: 190, w: 448, h: 252 };

interface Layout {
  lang: LangCode;
  m: Messages;
  hue: Hue;
  tag: string;
  /** Các phần tiêu đề; phần thứ hai (nếu có) tô màu nhấn. */
  title: [string, string?];
  illustration: GuideSlug;
}

function card(slug: GuideSlug, accent: (typeof ACCENT)[Hue]): string {
  const { x, y, w, h } = CARD;
  const art = renderToStaticMarkup(<GuideIllustration slug={slug} />).replace(
    '<svg ',
    `<svg x="${x}" y="${y}" width="${w}" height="${h}" `,
  );
  const cx = x + w / 2;
  const cy = y + h / 2;
  return `
  <circle cx="${cx}" cy="${cy}" r="330" fill="url(#glow)"/>
  <g transform="rotate(-4 ${cx} ${cy})">
    <rect x="${x + 10}" y="${y + 22}" width="${w}" height="${h}" rx="28" fill="#000" opacity="0.45" filter="url(#shadow)"/>
    <g clip-path="url(#card)">${art}</g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="28" fill="none" stroke="${accent.line}" stroke-opacity="0.55" stroke-width="2"/>
  </g>`;
}

function trustRow(lang: LangCode, m: Messages, accent: (typeof ACCENT)[Hue], y: number): string {
  const size = 21;
  const items = [m.hero.trust.noUpload, m.hero.trust.lossless, m.hero.trust.free];
  let x = PAD;
  const out: string[] = [];
  for (const item of items) {
    // Chữ thường (không đậm): chữ Latin hẹp hơn ~10% so với ước tính chữ đậm; chữ toàn khổ vẫn rộng đúng 1em.
    const wide = [...item].filter((ch) => WIDE.test(ch)).length;
    const w = 30 + (wide + (emWidth(item) - wide) * 0.9) * size;
    if (x + w > OG_SIZE.width - PAD) break;
    out.push(`<g transform="translate(${x} ${y})">
      <circle cx="11" cy="-7" r="11" fill="${accent.glow}" fill-opacity="0.25" stroke="${accent.line}" stroke-width="1.5"/>
      <path d="M6 -7 l3.5 3.5 l6.5 -7" fill="none" stroke="${accent.text}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="30" y="0" font-family="${fontFor(lang)}" font-size="${size}" fill="#cbd5e1">${esc(item)}</text>
    </g>`);
    x += w + 26;
  }
  return out.join('');
}

function layoutSvg({ lang, m, hue, tag, title, illustration }: Layout): string {
  const { width, height } = OG_SIZE;
  const accent = ACCENT[hue];
  const font = fontFor(lang);

  // Thẻ chủ đề
  const tagSize = 17;
  const tagText = tag.toUpperCase();
  const tagW = emWidth(tagText) * tagSize + tagText.length * 1.6 + 40;

  // Tiêu đề: phần chính màu trắng, phần phụ màu nhấn; tối đa 4 dòng (3 nếu chỉ có một phần)
  // "＆" toàn khổ đầu dòng có khoảng trống bên trái → đổi sang "&" thường để chữ thẳng lề.
  const parts = title.filter((p): p is string => !!p).map((p) => p.replace(/^＆/u, '& '));
  const { size, parts: wrapped } = fitParts(parts, lang, TEXT_W, parts.length > 1 ? 4 : 3, [64, 58, 54, 50, 46, 42, 38]);
  const lineH = Math.round(size * 1.16);
  const top = 214 + size * 0.92;
  const titleEls = wrapped
    .flatMap((lines, i) => lines.map((l) => ({ l, fill: i === 0 ? '#ffffff' : 'url(#accentText)' })))
    .map(({ l, fill }, i) => `<text x="${PAD}" y="${top + i * lineH}" font-family="${font}" font-size="${size}" font-weight="700" fill="${fill}">${esc(l)}</text>`)
    .join('\n  ');

  return resolveColors(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="0.55" stop-color="#111827"/><stop offset="1" stop-color="#0b1020"/></linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="${accent.glow}" stop-opacity="0.55"/><stop offset="1" stop-color="${accent.glow}" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2"><stop offset="0" stop-color="#6366f1" stop-opacity="0.35"/><stop offset="1" stop-color="#6366f1" stop-opacity="0"/></radialGradient>
    <linearGradient id="accentText" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${accent.text}"/><stop offset="1" stop-color="${accent.line}"/></linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#ffffff" fill-opacity="0.07"/></pattern>
    <clipPath id="card"><rect x="${CARD.x}" y="${CARD.y}" width="${CARD.w}" height="${CARD.h}" rx="28"/></clipPath>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#dots)"/>
  <circle cx="60" cy="40" r="300" fill="url(#glow2)"/>
  ${card(illustration, accent)}

  ${mark(PAD, 62, 52)}
  <text x="${PAD + 68}" y="99" font-family="${FONT}" font-size="28" font-weight="700" fill="#ffffff">${esc(SITE.name)}</text>

  <rect x="${PAD}" y="148" width="${tagW}" height="38" rx="19" fill="${accent.glow}" fill-opacity="0.18" stroke="${accent.line}" stroke-opacity="0.6"/>
  <text x="${PAD + 20}" y="173" font-family="${FONT}" font-size="${tagSize}" font-weight="700" letter-spacing="1.6" fill="${accent.text}">${esc(tagText)}</text>

  ${titleEls}

  ${trustRow(lang, m, accent, 530)}
  <text x="${PAD}" y="584" font-family="${FONT}" font-size="21" font-weight="600" letter-spacing="0.4" fill="#a5b4fc">${esc(SITE.domain)}</text>
</svg>`);
}

/** Danh sách ảnh OG cần sinh: đường dẫn trong dist/og/ → mã SVG. */
export async function ogSvgs(): Promise<{ file: string; svg: string }[]> {
  const out: { file: string; svg: string }[] = [];
  for (const lang of FULL_CONTENT_LANGS) {
    const { m, articles } = await loadBundle(lang);
    const dir = ogDir(lang);
    out.push({
      file: `${dir}default.png`,
      svg: layoutSvg({
        lang,
        m,
        hue: 'indigo',
        tag: 'C2PA · EXIF · GPS · AI prompts',
        title: [m.hero.title, m.hero.titleAccent],
        illustration: 'what-metadata-ai-image-generators-add',
      }),
    });
    for (const slug of GUIDE_SLUGS) {
      if (!ARTICLE_LANGS[slug].includes(lang)) continue;
      const title = articles?.[slug]?.seoTitle ?? guideContent({ m, articles }, slug)?.title ?? SITE.name;
      out.push({
        file: `${dir}${slug}.png`,
        svg: layoutSvg({ lang, m, hue: guideHue(slug), tag: GUIDE_TAGS[slug], title: [title], illustration: slug }),
      });
    }
  }
  return out;
}
