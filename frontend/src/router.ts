import { create } from './store/create';
import {
  activePages,
  availableGuides,
  GUIDE_DATES,
  guidePageCount,
  guidesOnPage,
  hasFullArticle,
  isGuideAvailable,
  isGuideSlug,
  isPageSlug,
  isToolSlug,
  latestDate,
  LEGACY_ANCHORS,
  PAGE_UPDATED,
  SITE,
  TOOL_SLUGS,
  TOOLS_UPDATED,
  type GuideSlug,
  type PageSlug,
  type ToolSlug,
} from './content/seo';
import { preferredLanguage, rememberLanguage, setLanguage, useI18n, type ContentNeeds } from './i18n';
import { DEFAULT_LANG, findLanguage, LANGUAGES, type LangCode } from './i18n/languages';

/**
 * Bộ định tuyến tối giản theo đường dẫn:
 *   /                          → trang chủ tiếng Anh (x-default)
 *   /{lang}/                   → trang chủ theo ngôn ngữ (vd. /vi/, /pt-br/)
 *   /{lang?}/guides/           → trang tổng hợp bài viết (trang 1)
 *   /{lang?}/guides/page/{n}/  → trang tổng hợp, trang n (n ≥ 2)
 *   /{lang?}/guides/{slug}/    → trang bài viết
 *   /{lang?}/tools/            → trang tổng hợp công cụ
 *   /{lang?}/tools/{slug}/     → trang công cụ riêng
 *   /{lang?}/{about|privacy|terms|contact}/ → trang thông tin
 * Mỗi đường dẫn được prerender thành HTML tĩnh (scripts/prerender.mjs).
 */
export type Route =
  | { name: 'home' }
  | { name: 'guides'; page: number }
  | { name: 'guide'; slug: GuideSlug }
  | { name: 'tools' }
  | { name: 'tool'; slug: ToolSlug }
  | { name: 'page'; slug: PageSlug };

export const HOME: Route = { name: 'home' };
export const GUIDES_INDEX: Route = { name: 'guides', page: 1 };
export const TOOLS_INDEX: Route = { name: 'tools' };

const langSegment = (lang: LangCode) => (lang === DEFAULT_LANG ? '' : `/${lang.toLowerCase()}`);

export function pathFor(lang: LangCode, route: Route): string {
  const prefix = langSegment(lang);
  switch (route.name) {
    case 'home':
      return `${prefix}/`;
    case 'guides':
      return route.page > 1 ? `${prefix}/guides/page/${route.page}/` : `${prefix}/guides/`;
    case 'guide':
      return `${prefix}/guides/${route.slug}/`;
    case 'tools':
      return `${prefix}/tools/`;
    case 'tool':
      return `${prefix}/tools/${route.slug}/`;
    case 'page':
      return `${prefix}/${route.slug}/`;
  }
}

export const absoluteUrl = (path: string) => `${SITE.origin}${path}`;

export function parsePath(pathname: string): { lang: LangCode; route: Route; explicitLang: boolean; known: boolean } {
  const segs = pathname.split('/').filter(Boolean);
  let lang: LangCode = DEFAULT_LANG;
  let explicitLang = false;
  const first = segs[0] ? findLanguage(segs[0]) : undefined;
  if (first) {
    lang = first.code;
    explicitLang = true;
    segs.shift();
  }
  if (segs.length === 0) return { lang, route: HOME, explicitLang, known: true };
  if (segs[0] === 'guides') {
    if (segs.length === 1) return { lang, route: GUIDES_INDEX, explicitLang, known: true };
    if (segs.length === 2 && isGuideSlug(segs[1])) {
      // Bài không có ở ngôn ngữ này → về trang tổng hợp của ngôn ngữ đó.
      const route = localizeRoute(lang, { name: 'guide', slug: segs[1] });
      return { lang, route, explicitLang, known: route.name === 'guide' };
    }
    if (segs.length === 3 && segs[1] === 'page' && /^\d+$/.test(segs[2])) {
      const page = Number(segs[2]);
      if (page >= 1 && page <= indexPageCount(lang)) return { lang, route: { name: 'guides', page }, explicitLang, known: page > 1 };
    }
    return { lang, route: GUIDES_INDEX, explicitLang, known: false };
  }
  if (segs[0] === 'tools') {
    if (segs.length === 1) return { lang, route: TOOLS_INDEX, explicitLang, known: true };
    if (segs.length === 2 && isToolSlug(segs[1])) return { lang, route: { name: 'tool', slug: segs[1] }, explicitLang, known: true };
    return { lang, route: TOOLS_INDEX, explicitLang, known: false };
  }
  if (segs.length === 1 && isPageSlug(segs[0]) && activePages().includes(segs[0])) {
    return { lang, route: { name: 'page', slug: segs[0] }, explicitLang, known: true };
  }
  return { lang, route: HOME, explicitLang, known: false };
}

/** Số trang tổng hợp ở ngôn ngữ `lang` (mỗi ngôn ngữ có thể có số bài khác nhau). */
export const indexPageCount = (lang: LangCode) => guidePageCount(availableGuides(lang).length);

/**
 * Trang tương ứng ở ngôn ngữ khác: giữ nguyên nếu tồn tại, nếu không thì về trang tổng hợp
 * (bài chưa có bản dịch) hoặc trang cuối (ngôn ngữ đích có ít trang hơn).
 */
export function localizeRoute(lang: LangCode, route: Route): Route {
  if (route.name === 'guide' && !isGuideAvailable(route.slug, lang)) return GUIDES_INDEX;
  if (route.name === 'guides' && route.page > indexPageCount(lang)) return { name: 'guides', page: indexPageCount(lang) };
  return route;
}

const sameRoute = (a: Route, b: Route) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Trang có nên được lập chỉ mục không. Bài chỉ có phần tóm tắt (ngôn ngữ chưa có bài chuyên sâu) là trang mỏng,
 * gần trùng nhau giữa các ngôn ngữ → noindex; trang tổng hợp của ngôn ngữ không có bài chuyên sâu nào cũng vậy.
 * Trang chủ, trang công cụ và trang thông tin (có bản dịch đầy đủ ở mọi ngôn ngữ) luôn được lập chỉ mục.
 */
export function isIndexable(lang: LangCode, route: Route): boolean {
  switch (route.name) {
    case 'home':
    case 'tools':
    case 'tool':
    case 'page':
      return true;
    case 'guides':
      return availableGuides(lang).some((slug) => hasFullArticle(slug, lang));
    case 'guide':
      return hasFullArticle(route.slug, lang);
  }
}

/** Ngôn ngữ có đúng trang `route` và trang đó được lập chỉ mục (dùng cho hreflang và sitemap). */
export const languagesFor = (route: Route) =>
  LANGUAGES.filter((l) => sameRoute(localizeRoute(l.code, route), route) && isIndexable(l.code, route));

/**
 * Ngày sửa nội dung của trang (lastmod trong sitemap): bài → ngày của bài; trang tổng hợp → bài mới sửa nhất
 * trên trang đó; trang thông tin → PAGE_UPDATED; trang chủ → SITE.contentUpdated.
 */
export function lastModified(lang: LangCode, route: Route): string {
  switch (route.name) {
    case 'home':
      return SITE.contentUpdated;
    case 'guides':
      return latestDate(guidesOnPage(route.page, availableGuides(lang)).map((slug) => GUIDE_DATES[slug].updated));
    case 'guide':
      return GUIDE_DATES[route.slug].updated;
    case 'tools':
    case 'tool':
      return TOOLS_UPDATED;
    case 'page':
      return PAGE_UPDATED[route.slug];
  }
}

/**
 * Mọi đường dẫn cần prerender: mỗi ngôn ngữ × (trang chủ + trang tổng hợp bài + bài có ở ngôn ngữ đó + trang công cụ
 * + trang thông tin).
 */
export function allRoutes(): { lang: LangCode; route: Route; path: string; indexable: boolean }[] {
  return LANGUAGES.flatMap((l) => {
    const indexPages = Array.from({ length: indexPageCount(l.code) }, (_, i): Route => ({ name: 'guides', page: i + 1 }));
    const guides = availableGuides(l.code).map((slug): Route => ({ name: 'guide', slug }));
    const tools = TOOL_SLUGS.map((slug): Route => ({ name: 'tool', slug }));
    const pages = activePages().map((slug): Route => ({ name: 'page', slug }));
    return [HOME, ...indexPages, ...guides, TOOLS_INDEX, ...tools, ...pages].map((route) => ({
      lang: l.code,
      route,
      path: pathFor(l.code, route),
      indexable: isIndexable(l.code, route),
    }));
  });
}

/**
 * Nội dung tải riêng mà trang cần trước khi hiển thị (để HTML khớp bản prerender khi hydrate): trang thông tin
 * cần nội dung trang; bài viết cần nội dung đầy đủ của đúng bài đó. Trang chủ và trang tổng hợp chỉ cần meta.
 */
export function contentNeeds(lang: LangCode, route: Route): ContentNeeds {
  if (route.name === 'page') return { pages: true };
  if (route.name === 'tools' || route.name === 'tool') return { tools: true };
  if (route.name === 'guide' && hasFullArticle(route.slug, lang)) return { guide: route.slug };
  return {};
}

interface RouterState {
  route: Route;
}

export const useRouter = create<RouterState>()(() => ({ route: HOME }));

/** Đường dẫn của trang hiện tại ở ngôn ngữ đang chọn. */
export const useHref = (route: Route) => pathFor(useI18n((s) => s.lang), route);

/** Đổi neo cũ (tiếng Việt, vd. #cach-hoat-dong) sang neo mới trung lập (#how-it-works). */
function normalizeHash(hash: string): string {
  const id = decodeURIComponent(hash.slice(1));
  return id && LEGACY_ANCHORS[id] ? `#${LEGACY_ANCHORS[id]}` : hash;
}

function scrollAfterRender(hash: string) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    }),
  );
}

async function apply(lang: LangCode, route: Route) {
  await setLanguage(lang, contentNeeds(lang, route));
  useRouter.setState({ route });
}

/** Điều hướng phía client (không tải lại trang). */
export async function navigate(to: string, opts: { replace?: boolean } = {}): Promise<void> {
  const url = new URL(to, window.location.href);
  const { lang, route } = parsePath(url.pathname);
  const hash = normalizeHash(url.hash);
  const target = pathFor(lang, route) + url.search + hash;
  window.history[opts.replace ? 'replaceState' : 'pushState'](null, '', target);
  await apply(lang, route);
  scrollAfterRender(hash);
}

/** Đổi ngôn ngữ, giữ nguyên trang đang xem. */
export async function switchLanguage(lang: LangCode): Promise<void> {
  rememberLanguage(lang);
  await navigate(pathFor(lang, localizeRoute(lang, useRouter.getState().route)) + window.location.hash);
}

/**
 * Khởi tạo khi tải trang. Trả về `redirected = true` nếu URL đã bị đổi (khi đó nội dung HTML prerender
 * không còn khớp và cần render lại thay vì hydrate).
 */
export async function bootstrapRouter(): Promise<{ redirected: boolean }> {
  const url = new URL(window.location.href);
  let { lang, route, explicitLang, known } = parsePath(url.pathname);
  let redirected = !known;

  // Liên kết cũ dạng ?lang=xx → chuyển sang đường dẫn theo ngôn ngữ.
  const legacy = url.searchParams.get('lang');
  if (legacy && findLanguage(legacy)) {
    lang = findLanguage(legacy)!.code;
    url.searchParams.delete('lang');
    redirected = true;
  } else if (!explicitLang && route.name === 'home') {
    // Chỉ trang gốc "/" mới tự chọn ngôn ngữ theo lựa chọn đã lưu / ngôn ngữ trình duyệt.
    const preferred = preferredLanguage();
    if (preferred !== lang) {
      lang = preferred;
      redirected = true;
    }
  }

  const canonical = pathFor(lang, route);
  if (canonical !== url.pathname) redirected = true;
  const hash = normalizeHash(url.hash);
  const hashChanged = hash !== url.hash;
  if (redirected || hashChanged) window.history.replaceState(null, '', canonical + url.search + hash);

  await apply(lang, route);
  if (hashChanged) scrollAfterRender(hash);

  window.addEventListener('popstate', () => {
    const p = parsePath(window.location.pathname);
    void apply(p.lang, p.route);
  });

  return { redirected };
}
