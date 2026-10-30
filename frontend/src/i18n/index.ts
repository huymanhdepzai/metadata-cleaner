import { create } from '../store/create';
import type { Article, ArticleMetas, Articles } from '../content/articles/types';
import type { GuideSlug } from '../content/seo';
import type { GuidesHubContent } from '../content/hub/types';
import type { Pages } from '../content/pages/types';
import type { ToolsContent } from '../content/tools/types';
import type { Msg } from '../types';
import { LANG_COOKIE } from './detect';
import { DEFAULT_LANG, findLanguage, LANGUAGES, matchLanguage, type LangCode } from './languages';
import en, { type Messages } from './locales/en';

export type { Messages };

/** Mỗi ngôn ngữ là một chunk riêng, chỉ tải khi cần (tiếng Anh nhúng sẵn làm dự phòng). */
const messageLoaders = import.meta.glob<{ default: Messages }>(['./locales/*.ts', '!./locales/en.ts', '!./locales/*.test.ts']);
/** Meta bài viết chuyên sâu (tiêu đề, tóm tắt, mô tả) — chỉ có ở một số ngôn ngữ, nhỏ, cần cho mọi trang. */
const articleLoaders = import.meta.glob<{ default: ArticleMetas }>([
  '../content/articles/*.ts',
  '!../content/articles/types.ts',
  '!../content/articles/collect.ts',
]);
/** Nội dung đầy đủ của từng bài — mỗi bài một chunk, chỉ tải khi mở trang bài đó. */
const bodyLoaders = import.meta.glob<{ default: Article }>('../content/articles/*/*.ts');
const bodyLoader = (lang: LangCode, slug: GuideSlug) => bodyLoaders[`../content/articles/${lang}/${slug}.ts`];
/** Nội dung trang thông tin (About, Privacy, Terms, Contact) — chỉ tải khi mở một trang như vậy. */
const pageLoaders = import.meta.glob<{ default: Pages }>([
  '../content/pages/*.ts',
  '!../content/pages/types.ts',
  '!../content/pages/*.test.ts',
]);

/** Văn bản trang công cụ (/tools/) — chỉ tải khi mở trang tổng hợp hoặc một công cụ. */
/** Văn bản riêng của trang tổng hợp /guides/ (nhóm chủ đề) — chỉ có ở ngôn ngữ có bài chuyên sâu, chỉ tải khi mở trang đó. */
const hubLoaders = import.meta.glob<{ default: GuidesHubContent }>(['../content/hub/*.ts', '!../content/hub/types.ts', '!../content/hub/*.test.ts']);
const toolLoaders = import.meta.glob<{ default: ToolsContent }>([
  '../content/tools/*.ts',
  '!../content/tools/types.ts',
  '!../content/tools/*.test.ts',
]);

const STORAGE_KEY = 'lang';

export interface LanguageBundle {
  lang: LangCode;
  m: Messages;
  /** Meta các bài chuyên sâu của ngôn ngữ này (null nếu ngôn ngữ chưa có bài chuyên sâu). */
  articles: ArticleMetas | null;
  /** Nội dung đầy đủ của các bài đã mở (chỉ nạp bài đang xem). */
  bodies: Articles;
  /** null khi chưa cần (trang hiện tại không phải trang thông tin). */
  pages: Pages | null;
  /** null khi chưa cần (trang hiện tại không phải trang công cụ). */
  tools: ToolsContent | null;
  /** null khi chưa cần hoặc ngôn ngữ không có bài chuyên sâu (trang tổng hợp hiện lưới thẻ không chia nhóm). */
  hub: GuidesHubContent | null;
}

/** Phần nội dung cần thêm cho trang sắp hiển thị: trang thông tin, trang công cụ, hoặc nội dung đầy đủ của một bài. */
export interface ContentNeeds {
  pages?: boolean;
  tools?: boolean;
  hub?: boolean;
  guide?: GuideSlug;
}

const loadPages = (lang: LangCode) => pageLoaders[`../content/pages/${lang}.ts`]?.().then((mod) => mod.default) ?? Promise.resolve(null);
const loadTools = (lang: LangCode) => toolLoaders[`../content/tools/${lang}.ts`]?.().then((mod) => mod.default) ?? Promise.resolve(null);
const loadHub = (lang: LangCode) => hubLoaders[`../content/hub/${lang}.ts`]?.().then((mod) => mod.default) ?? Promise.resolve(null);
const loadBody = (lang: LangCode, slug: GuideSlug) => bodyLoader(lang, slug)?.().then((mod) => mod.default) ?? Promise.resolve(null);

export async function loadBundle(lang: LangCode, needs: ContentNeeds = {}): Promise<LanguageBundle> {
  const msgLoader = messageLoaders[`./locales/${lang}.ts`];
  const artLoader = articleLoaders[`../content/articles/${lang}.ts`];
  const [m, articles, pages, tools, hub, body] = await Promise.all([
    lang === 'en' || !msgLoader ? en : msgLoader().then((mod) => mod.default),
    artLoader ? artLoader().then((mod) => mod.default) : null,
    needs.pages ? loadPages(lang) : null,
    needs.tools ? loadTools(lang) : null,
    needs.hub ? loadHub(lang) : null,
    needs.guide ? loadBody(lang, needs.guide) : null,
  ]);
  return { lang, m, articles, pages, tools, hub, bodies: body && needs.guide ? { [needs.guide]: body } : {} };
}

interface I18nState extends LanguageBundle {}

export const useI18n = create<I18nState>()(() => ({
  lang: DEFAULT_LANG,
  m: en,
  articles: null,
  bodies: {},
  pages: null,
  tools: null,
  hub: null,
}));

/** Hook lấy bộ thông điệp của ngôn ngữ hiện tại. */
export const useT = () => useI18n((s) => s.m);

let loadedLang: LangCode | null = null;

/**
 * Nạp ngôn ngữ `lang` cùng phần nội dung trang sắp hiển thị cần (`needs`). Cùng ngôn ngữ thì chỉ nạp thêm phần
 * còn thiếu; nội dung đã nạp được giữ lại khi chuyển trang trong cùng ngôn ngữ.
 */
export async function setLanguage(lang: LangCode, needs: ContentNeeds = {}): Promise<void> {
  if (loadedLang !== lang) {
    const bundle = await loadBundle(lang, needs);
    loadedLang = lang;
    useI18n.setState(bundle);
    return;
  }
  const s = useI18n.getState();
  const { guide } = needs;
  const [pages, tools, hub, body] = await Promise.all([
    needs.pages && !s.pages ? loadPages(lang) : null,
    needs.tools && !s.tools ? loadTools(lang) : null,
    needs.hub && !s.hub ? loadHub(lang) : null,
    guide && !s.bodies[guide] ? loadBody(lang, guide) : null,
  ]);
  if (loadedLang !== lang) return; // người dùng đã đổi ngôn ngữ trong lúc chờ
  if (pages) useI18n.setState({ pages });
  if (tools) useI18n.setState({ tools });
  if (hub) useI18n.setState({ hub });
  if (body && guide) useI18n.setState((st) => ({ bodies: { ...st.bodies, [guide]: body } }));
}

/** Ghi nhớ lựa chọn ngôn ngữ của người dùng (chỉ khi họ chủ động đổi). */
export function rememberLanguage(lang: LangCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* chế độ riêng tư / bị chặn lưu trữ */
  }
  // Cookie để máy chủ (Nginx, deploy/nginx.conf) biết lựa chọn này ngay khi người dùng vào lại trang gốc "/".
  document.cookie = `${LANG_COOKIE}=${encodeURIComponent(lang)}; path=/; max-age=31536000; SameSite=Lax; Secure`;
}

/** Ngôn ngữ ưu tiên cho trang gốc "/": lựa chọn đã lưu → ngôn ngữ trình duyệt → tiếng Anh. */
export function preferredLanguage(): LangCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && findLanguage(stored)) return findLanguage(stored)!.code;
  } catch {
    /* bỏ qua */
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const match = matchLanguage(tag);
    if (match) return match;
  }
  return DEFAULT_LANG;
}

/** Thay tham số {name} trong chuỗi. */
export function fmt(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in params ? String(params[key]) : match));
}

/** Dịch một thông điệp có khóa do bộ phân tích trả về (kể cả tham số lồng nhau). */
export function tr(m: Messages, msg: Msg): string {
  if (!msg.params) return m.report[msg.key];
  const params: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(msg.params)) params[k] = typeof v === 'object' ? tr(m, v) : v;
  return fmt(m.report[msg.key], params);
}

/** Định dạng số theo ngôn ngữ hiện tại (dấu thập phân, chữ số). */
export function formatNumber(value: number, fractionDigits = 0): string {
  return new Intl.NumberFormat(useI18n.getState().lang, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatDate(iso: string, lang: LangCode): string {
  return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
}

export const isRtl = (code: LangCode) => Boolean(LANGUAGES.find((l) => l.code === code && 'rtl' in l));
