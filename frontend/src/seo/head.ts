import { guideContent } from '../content/guideContent';
import { availableGuides, guidePageCount, guidesOnPage, SITE } from '../content/seo';
import { isRtl, type LanguageBundle } from '../i18n';
import { DEFAULT_LANG, findLanguage } from '../i18n/languages';
import { absoluteUrl, isIndexable, languagesFor, pathFor, type Route } from '../router';

/** Toàn bộ thẻ <head> phụ thuộc trang + ngôn ngữ. Dùng chung cho prerender (chuỗi HTML) và client (cập nhật DOM). */
export interface HeadData {
  lang: string;
  dir: 'ltr' | 'rtl';
  title: string;
  description: string;
  /** Nội dung thẻ meta robots (noindex cho trang chỉ có tóm tắt, xem isIndexable). */
  robots: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogLocale: string;
  alternates: { hreflang: string; href: string }[];
  /** Ảnh chia sẻ (URL tuyệt đối) và mô tả thay thế. */
  image: string;
  imageAlt: string;
}

/** Ảnh Open Graph: mỗi bài một ảnh, các trang khác dùng ảnh mặc định (sinh lúc build, xem seo/og.tsx). */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const ogImagePath = (route: Route): string => (route.name === 'guide' ? `/og/${route.slug}.png` : '/og/default.png');

/**
 * Google thường cắt tiêu đề quá ~60 ký tự → bỏ hậu tố tên trang khi tiêu đề bài đã dài,
 * hoặc khi tiêu đề đã chứa tên trang (vd. "About All Metadata Cleaner") để không lặp lại.
 */
const TITLE_LIMIT = 62;
const withSiteName = (title: string) => {
  const full = title.includes(SITE.name) ? `${title} – Free AI Tag Remover` : `${title} | ${SITE.name}`;
  return full.length <= TITLE_LIMIT ? full : title;
};

const truncate = (s: string, max = 158) => (s.length <= max ? s : `${s.slice(0, max - 1).replace(/\s+\S*$/, '')}…`);

export function buildHead({ lang, m, articles, pages, tools }: Omit<LanguageBundle, 'bodies'>, route: Route): HeadData {
  let title = m.meta.title;
  let description = m.meta.description;
  if (route.name === 'tools' || route.name === 'tool') {
    const content = tools && (route.name === 'tools' ? tools.hub : tools.tools[route.slug]);
    title = withSiteName(content?.title ?? m.header.nav.tools);
    if (content) description = content.description;
  } else if (route.name === 'page') {
    const page = pages?.[route.slug];
    title = withSiteName(page?.title ?? m.pages[route.slug]);
    if (page) description = page.description;
  } else if (route.name === 'guide') {
    const guide = guideContent({ m, articles }, route.slug);
    if (guide) {
      title = withSiteName(articles?.[route.slug]?.seoTitle ?? guide.title);
      description = articles?.[route.slug]?.description ?? truncate(guide.summary[0]);
    }
  } else if (route.name === 'guides') {
    const slugs = availableGuides(lang);
    const total = guidePageCount(slugs.length);
    const pageSuffix = total > 1 ? ` (${route.page}/${total})` : '';
    title = withSiteName(`${m.seo.guides.title}${pageSuffix}`);
    const titles = guidesOnPage(route.page, slugs).map((slug) => guideContent({ m, articles }, slug)?.title ?? '');
    description = truncate(`${m.seo.guides.title}: ${titles.filter(Boolean).join(' · ')}`);
  }

  // hreflang chỉ liệt kê ngôn ngữ thật sự có trang này và được lập chỉ mục; trang noindex không tham gia nhóm hreflang.
  const indexable = isIndexable(lang, route);
  const langs = indexable ? languagesFor(route) : [];
  const guideTitle = route.name === 'guide' ? guideContent({ m, articles }, route.slug)?.title : undefined;
  return {
    lang,
    dir: isRtl(lang) ? 'rtl' : 'ltr',
    title,
    description,
    robots: indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    canonical: absoluteUrl(pathFor(lang, route)),
    ogType: route.name === 'guide' ? 'article' : 'website',
    ogLocale: findLanguage(lang)?.og ?? 'en_US',
    image: absoluteUrl(ogImagePath(route)),
    imageAlt: guideTitle ?? SITE.name,
    alternates: [
      ...langs.map((l) => ({ hreflang: l.code, href: absoluteUrl(pathFor(l.code, route)) })),
      ...(langs.some((l) => l.code === DEFAULT_LANG)
        ? [{ hreflang: 'x-default', href: absoluteUrl(pathFor(DEFAULT_LANG, route)) }]
        : []),
    ],
  };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Các thẻ meta theo cặp (selector thuộc tính → giá trị) để render và cập nhật thống nhất. */
function metaTags(h: HeadData): [attr: 'name' | 'property', key: string, value: string][] {
  return [
    ['name', 'robots', h.robots],
    ['name', 'description', h.description],
    ['property', 'og:type', h.ogType],
    ['property', 'og:site_name', SITE.name],
    ['property', 'og:locale', h.ogLocale],
    ['property', 'og:url', h.canonical],
    ['property', 'og:title', h.title],
    ['property', 'og:description', h.description],
    ['property', 'og:image', h.image],
    ['property', 'og:image:width', String(OG_SIZE.width)],
    ['property', 'og:image:height', String(OG_SIZE.height)],
    ['property', 'og:image:alt', h.imageAlt],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', h.title],
    ['name', 'twitter:description', h.description],
    ['name', 'twitter:image', h.image],
  ];
}

export function headToHtml(h: HeadData): string {
  return [
    `<title>${esc(h.title)}</title>`,
    ...metaTags(h).map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}" />`),
    `<link rel="canonical" href="${esc(h.canonical)}" />`,
    ...h.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" />`),
  ].join('\n    ');
}

/** Cập nhật <head> trên trình duyệt khi điều hướng / đổi ngôn ngữ (tạo thẻ nếu chưa có). */
export function applyHead(h: HeadData): void {
  const root = document.documentElement;
  root.lang = h.lang;
  root.dir = h.dir;
  document.title = h.title;

  const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  for (const [attr, key, value] of metaTags(h)) {
    upsert(`meta[${attr}="${key}"]`, () => createMeta(attr, key), 'content', value);
  }
  upsert('link[rel="canonical"]', () => createLink('canonical'), 'href', h.canonical);
  // Bỏ hreflang của trang trước mà trang này không có (vd. chuyển từ trang được index sang trang noindex).
  const keep = new Set(h.alternates.map((a) => a.hreflang));
  document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((el) => {
    if (!keep.has(el.getAttribute('hreflang') ?? '')) el.remove();
  });
  for (const a of h.alternates) {
    upsert(`link[rel="alternate"][hreflang="${a.hreflang}"]`, () => createLink('alternate', a.hreflang), 'href', a.href);
  }
}

function createMeta(attr: 'name' | 'property', key: string): HTMLMetaElement {
  const el = document.createElement('meta');
  el.setAttribute(attr, key);
  return el;
}

function createLink(rel: string, hreflang?: string): HTMLLinkElement {
  const el = document.createElement('link');
  el.rel = rel;
  if (hreflang) el.hreflang = hreflang;
  return el;
}
