import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { guideContent } from './content/guideContent';
import { SITE, type GuideSlug } from './content/seo';
import { loadBundle, useI18n } from './i18n';
import { DEFAULT_LANG, LANGUAGES } from './i18n/languages';
import { absoluteUrl, allRoutes, contentNeeds, HOME, languagesFor, lastModified, pathFor, useRouter } from './router';
import { fontPreloadHtml } from './seo/fontPreload';
import { buildHead, headToHtml } from './seo/head';

/**
 * Điểm vào prerender (chạy trong Node lúc build, xem scripts/prerender.mjs):
 * render từng trang × ngôn ngữ thành HTML tĩnh kèm <head> riêng, để công cụ tìm kiếm đọc được nội dung
 * mà không cần chạy JavaScript.
 */
export const paths = () => allRoutes().map((r) => r.path);
export { brandSvg, ogSvgs } from './seo/og';
export { nginxConf } from './seo/nginx';

export async function render(path: string): Promise<{ html: string; head: string; htmlAttrs: string }> {
  const entry = allRoutes().find((r) => r.path === path);
  if (!entry) throw new Error(`Unknown route: ${path}`);

  const bundle = await loadBundle(entry.lang, contentNeeds(entry.lang, entry.route));
  useI18n.setState(bundle);
  useRouter.setState({ route: entry.route });

  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  const head = buildHead(bundle, entry.route);
  return { html, head: `${fontPreloadHtml(entry.lang)}\n    ${headToHtml(head)}`, htmlAttrs: `lang="${head.lang}" dir="${head.dir}"` };
}

/**
 * /llms.txt (llmstxt.org): bản tóm tắt dạng Markdown cho trợ lý AI và công cụ tìm kiếm AI — công cụ làm gì,
 * giới hạn quan trọng và danh sách bài hướng dẫn (tiếng Anh) kèm mô tả, cùng các phiên bản ngôn ngữ có bài đầy đủ.
 */
export async function llmsTxt(): Promise<string> {
  const { m, articles, pages, tools } = await loadBundle(DEFAULT_LANG, { pages: true, tools: true });
  const enRoutes = allRoutes().filter((r) => r.lang === DEFAULT_LANG && r.indexable);
  const guideLine = (slug: GuideSlug, path: string) =>
    `- [${guideContent({ m, articles }, slug)?.title ?? slug}](${absoluteUrl(path)}): ${articles?.[slug]?.description ?? ''}`;
  // Landing page (có công cụ nhúng, nhắm việc cần làm) tách riêng khỏi bài giải thích để trợ lý AI chọn đúng trang.
  const isLanding = (slug: GuideSlug) => slug.startsWith('remove-');
  const guides = enRoutes.flatMap(({ route, path }) => (route.name === 'guide' && !isLanding(route.slug) ? [guideLine(route.slug, path)] : []));
  const landings = enRoutes.flatMap(({ route, path }) => (route.name === 'guide' && isLanding(route.slug) ? [guideLine(route.slug, path)] : []));
  const toolLines = enRoutes.flatMap(({ route, path }) => {
    const content = tools && (route.name === 'tools' ? tools.hub : route.name === 'tool' ? tools.tools[route.slug] : null);
    return content ? [`- [${content.title}](${absoluteUrl(path)}): ${content.description}`] : [];
  });
  const info = enRoutes.flatMap(({ route, path }) =>
    route.name === 'page' && pages ? [`- [${pages[route.slug].title}](${absoluteUrl(path)}): ${pages[route.slug].description}`] : [],
  );
  const langs = LANGUAGES.filter((l) => l.code !== DEFAULT_LANG);
  return [
    `# ${SITE.name}`,
    '',
    `> ${m.meta.description}`,
    '',
    'All Metadata Cleaner is a free web tool that inspects and removes metadata — EXIF (including GPS), XMP, IPTC, C2PA Content Credentials and AI prompts or workflows — from JPG, PNG, WebP, GIF, HEIC and AVIF images.',
    '',
    '- Runs entirely in the browser: images are never uploaded to a server.',
    '- Lossless: metadata blocks are removed at the byte level; image data is copied unchanged (no re-encoding). Orientation and ICC color profile are kept.',
    '- HEIC/AVIF are cleaned in place and stay in their original format.',
    '- Limits: 25 MB and 40 megapixels per image, up to 50 images per batch, ZIP download.',
    '- It removes metadata only. It does not remove invisible pixel watermarks such as SynthID.',
    '',
    '## Tool',
    '',
    `- [${SITE.name}](${absoluteUrl('/')}): ${m.meta.description}`,
    '',
    '## Tools',
    '',
    ...toolLines,
    '',
    '## Remove metadata by task or format',
    '',
    ...landings,
    '',
    '## Guides',
    '',
    ...guides,
    '',
    '## About this site',
    '',
    ...info,
    '',
    '## Other languages',
    '',
    // Trang chủ có ở mọi ngôn ngữ; bài viết đầy đủ chỉ ở ngôn ngữ có trong ARTICLE_LANGS.
    ...langs.map((l) => `- [${l.name}](${absoluteUrl(pathFor(l.code, HOME))})`),
    '',
  ].join('\n');
}

/** sitemap.xml kèm liên kết hreflang cho từng URL (Google hỗ trợ khai báo phiên bản ngôn ngữ trong sitemap). */
export function sitemapXml(): string {
  // Trang noindex (bài chỉ có tóm tắt) không đưa vào sitemap.
  const urls = allRoutes().filter((r) => r.indexable).map(({ lang, route }) => {
    // Chỉ khai báo các bản ngôn ngữ thật sự tồn tại của trang này.
    const langs = languagesFor(route);
    const alternates = [
      ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${absoluteUrl(pathFor(l.code, route))}" />`),
      ...(langs.some((l) => l.code === DEFAULT_LANG)
        ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(pathFor(DEFAULT_LANG, route))}" />`]
        : []),
    ].join('\n');
    const priority = { home: lang === DEFAULT_LANG ? '1.0' : '0.9', guides: '0.8', guide: '0.7', tools: '0.8', tool: '0.8', page: '0.3' }[route.name];
    return `  <url>\n    <loc>${absoluteUrl(pathFor(lang, route))}</loc>\n    <lastmod>${lastModified(lang, route)}</lastmod>\n    <priority>${priority}</priority>\n${alternates}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}
