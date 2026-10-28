import { renderToStaticMarkup } from 'react-dom/server';
import { BrandMark } from '../components/BrandMark';
import { GuideIllustration } from '../components/seo/GuideIllustration';
import { GUIDE_SLUGS, GUIDE_TAGS, SITE, type GuideSlug } from '../content/seo';
import { OG_SIZE } from './head';

/**
 * Sinh ảnh chia sẻ mạng xã hội (Open Graph, 1200×630) — chỉ dùng lúc build (entry-server), không vào bundle client.
 * Chữ trong ảnh là thuật ngữ kỹ thuật/tên thương hiệu nên dùng chung cho mọi ngôn ngữ: mỗi bài một ảnh (từ ảnh
 * minh họa của bài) + một ảnh mặc định cho trang chủ/tổng hợp. SVG được chuyển sang PNG trong scripts/prerender.mjs
 * vì Facebook/X không nhận SVG.
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
const FONT = "'Segoe UI', Arial, sans-serif";

/** SVG độc lập của biểu tượng thương hiệu — dùng cho favicon.svg và icon PNG (xem scripts/prerender.mjs). */
export const brandSvg = () => renderToStaticMarkup(<BrandMark gradientId="brand" />).replace(' aria-hidden="true"', '');

/** Biểu tượng thương hiệu đặt tại (x, y), cạnh = size. */
const mark = (x: number, y: number, size: number) =>
  brandSvg().replace('<svg ', `<svg x="${x}" y="${y}" width="${size}" height="${size}" `);

function guideSvg(slug: GuideSlug): string {
  const { width, height } = OG_SIZE;
  const bar = 100;
  const art = renderToStaticMarkup(<GuideIllustration slug={slug} />).replace(
    '<svg ',
    `<svg x="0" y="0" width="${width}" height="${height - bar}" `,
  );
  return resolveColors(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${art}
  <rect y="${height - bar}" width="${width}" height="${bar}" fill="#0f172a"/>
  ${mark(48, height - bar + 26, 48)}
  <text x="112" y="${height - bar + 62}" font-family="${FONT}" font-size="34" font-weight="800" fill="#ffffff">${esc(SITE.name)}</text>
  <text x="${width - 48}" y="${height - bar + 60}" text-anchor="end" font-family="${FONT}" font-size="26" font-weight="700" fill="#fb7185">${esc(GUIDE_TAGS[slug].toUpperCase())}</text>
</svg>`);
}

function defaultSvg(): string {
  const { width, height } = OG_SIZE;
  const chips = ['C2PA', 'EXIF', 'XMP', 'IPTC', 'Prompts', 'GPS'];
  let cx = 96;
  const chipEls = chips
    .map((c) => {
      const w = 36 + c.length * 17;
      const el = `<g transform="translate(${cx} 410)"><rect width="${w}" height="56" rx="14" fill="#ffffff" fill-opacity="0.14" stroke="#ffffff" stroke-opacity="0.35"/><text x="${w / 2}" y="37" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="600" fill="#ffffff">${c}</text></g>`;
      cx += w + 16;
      return el;
    })
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#312e81"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <circle cx="1080" cy="80" r="260" fill="#6366f1" opacity="0.25"/>
  <circle cx="120" cy="620" r="200" fill="#7c3aed" opacity="0.2"/>
  ${mark(96, 110, 112)}
  <text x="96" y="320" font-family="${FONT}" font-size="68" font-weight="800" fill="#ffffff">${esc(SITE.name)}</text>
  <text x="96" y="378" font-family="${FONT}" font-size="32" fill="#c7d2fe">Remove AI metadata from images — free, in your browser</text>
  ${chipEls}
  <text x="96" y="560" font-family="${FONT}" font-size="26" fill="#a5b4fc">JPG · PNG · WebP · GIF · HEIC · AVIF</text>
</svg>`;
}

/** Danh sách ảnh OG cần sinh: tên tệp (trong dist/og/) → mã SVG. */
export function ogSvgs(): { file: string; svg: string }[] {
  return [{ file: 'default.png', svg: defaultSvg() }, ...GUIDE_SLUGS.map((slug) => ({ file: `${slug}.png`, svg: guideSvg(slug) }))];
}
