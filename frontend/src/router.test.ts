import { describe, expect, it } from 'vitest';
import { ARTICLE_META_KEYS, type Article, type ArticleMetas } from './content/articles/types';
import type { Messages } from './i18n/locales/en';
import {
  activePages,
  ARTICLE_LANGS,
  availableGuides,
  GUIDE_DATES,
  PAGE_SLUGS,
  PAGE_UPDATED,
  SITE,
  TOOL_SLUGS,
  TOOLS_UPDATED,
  BASE_GUIDE_SLUGS,
  baseGuideIndex,
  EXTRA_GUIDE_SLUGS,
  GUIDE_SLUGS,
  guidePageCount,
  guidesOnPage,
  type GuideSlug,
} from './content/seo';
import { LANGUAGES } from './i18n/languages';
import {
  allRoutes,
  contentNeeds,
  GUIDES_INDEX,
  HOME,
  indexPageCount,
  isIndexable,
  languagesFor,
  lastModified,
  localizeRoute,
  parsePath,
  pathFor,
  TOOLS_INDEX,
} from './router';

const localeModules = import.meta.glob<{ default: Messages }>(['./i18n/locales/*.ts', '!./i18n/locales/*.test.ts'], { eager: true });

const isExtra = (slug: GuideSlug) => baseGuideIndex(slug) < 0;

/** Nội dung đầy đủ: ./content/articles/<mã>/<slug>.ts. */
const bodyModules = import.meta.glob<{ default: Article }>('./content/articles/*/*.ts', { eager: true });
const body = (lang: string, slug: string) => bodyModules[`./content/articles/${lang}/${slug}.ts`]?.default;
/** Meta (qua plugin article-meta): ./content/articles/<mã>.ts. */
const metaModules = import.meta.glob<{ default: ArticleMetas }>(
  ['./content/articles/*.ts', '!./content/articles/types.ts', '!./content/articles/collect.ts'],
  { eager: true },
);

describe('Phân trang bài viết', () => {
  it('chia đúng số trang và bài trên từng trang', () => {
    const items = Array.from({ length: 14 }, (_, i) => i + 1);
    expect(guidePageCount(14, 6)).toBe(3);
    expect(guidePageCount(6, 6)).toBe(1);
    expect(guidePageCount(0, 6)).toBe(1);
    expect(guidesOnPage(1, items, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(guidesOnPage(3, items, 6)).toEqual([13, 14]);
  });

  it('mỗi ngôn ngữ có đủ bài nền tảng; bài mở rộng chỉ ở ngôn ngữ đã khai báo', () => {
    expect(availableGuides('ko')).toEqual([...BASE_GUIDE_SLUGS]);
    expect(availableGuides('en')).toHaveLength(BASE_GUIDE_SLUGS.length + EXTRA_GUIDE_SLUGS.length);
    expect(availableGuides('vi')).toHaveLength(BASE_GUIDE_SLUGS.length + EXTRA_GUIDE_SLUGS.length);
  });
});

describe('Bài viết chuyên sâu', () => {
  for (const slug of GUIDE_SLUGS) {
    for (const lang of ARTICLE_LANGS[slug]) {
      it(`${lang}/${slug}: có nội dung${isExtra(slug) ? ', tiêu đề và tóm tắt' : ''}`, () => {
        const article = body(lang, slug);
        expect(article?.sections.length).toBeGreaterThan(0);
        expect(article?.description.length).toBeGreaterThan(50);
        if (isExtra(slug)) {
          expect(article?.title?.trim()).toBeTruthy();
          expect(article?.summary?.length).toBeGreaterThan(0);
        }
      });

      // Chuẩn tối thiểu cho SEO: câu trả lời nhanh, đủ mục H2, đủ hỏi đáp, meta description vừa độ dài hiển thị.
      it(`${lang}/${slug}: đạt chuẩn SEO tối thiểu`, () => {
        const article = body(lang, slug)!;
        // Tiếng Nhật không có khoảng trắng giữa các từ → đếm từ bằng Intl.Segmenter; meta description tính theo
        // ký tự toàn chiều rộng nên ngắn hơn (Google hiển thị khoảng 80–120 ký tự).
        const cjk = lang === 'ja';
        const words = cjk
          ? [...new Intl.Segmenter(lang, { granularity: 'word' }).segment(article.answer)].filter((s) => s.isWordLike).length
          : article.answer.split(/\s+/).length;
        const [minWords, maxWords] = cjk ? [40, 130] : [40, 90];
        expect(words, `answer: ${minWords}–${maxWords} từ`).toBeGreaterThanOrEqual(minWords);
        expect(words, `answer: ${minWords}–${maxWords} từ`).toBeLessThanOrEqual(maxWords);
        expect(article.sections.length).toBeGreaterThanOrEqual(4);
        expect(article.faq.length).toBeGreaterThanOrEqual(5);
        const [minDesc, maxDesc] = cjk ? [60, 125] : [110, 170];
        expect(article.description.length, `description: ${minDesc}–${maxDesc} ký tự`).toBeGreaterThanOrEqual(minDesc);
        expect(article.description.length, `description: ${minDesc}–${maxDesc} ký tự`).toBeLessThanOrEqual(maxDesc);
        const i = baseGuideIndex(slug);
        const shownTitle = article.seoTitle ?? article.title ?? localeModules[`./i18n/locales/${lang}.ts`]!.default.seo.guides.items[i].title;
        expect(shownTitle.length, `<title> ≤ 60 ký tự (đặt seoTitle): ${shownTitle}`).toBeLessThanOrEqual(60);
        for (const s of article.sections) {
          for (const r of s.related ?? []) expect(r, `${s.heading}: không tự liên kết`).not.toBe(slug);
          for (const row of s.table?.rows ?? []) expect(row, s.heading).toHaveLength(s.table!.head.length);
        }
      });
    }
  }

  it('mọi bài trong src/content/articles/<mã>/*.ts đều được khai báo trong ARTICLE_LANGS', () => {
    for (const file of Object.keys(bodyModules)) {
      const [, lang, slug] = file.match(/\/([^/]+)\/([^/]+)\.ts$/)!;
      expect(ARTICLE_LANGS[slug as GuideSlug], `${lang}/${slug}`).toContain(lang);
    }
  });

  it('meta tách lúc build (plugin article-meta) khớp với bài và không kèm nội dung', () => {
    for (const [file, mod] of Object.entries(metaModules)) {
      const lang = file.match(/\/([^/]+)\.ts$/)![1];
      for (const [slug, meta] of Object.entries(mod.default)) {
        const full = body(lang, slug)!;
        const expected = Object.fromEntries(ARTICLE_META_KEYS.filter((k) => full[k] !== undefined).map((k) => [k, full[k]]));
        expect(meta, `${lang}/${slug}`).toEqual(expected);
        expect(meta).not.toHaveProperty('sections');
      }
      expect(Object.keys(mod.default).sort(), lang).toEqual(
        Object.keys(bodyModules).filter((f) => f.includes(`/articles/${lang}/`)).map((f) => f.match(/([^/]+)\.ts$/)![1]).sort(),
      );
    }
  });
});

describe('Lập chỉ mục (noindex trang mỏng)', () => {
  const base = { name: 'guide', slug: BASE_GUIDE_SLUGS[0] } as const;

  it('trang chủ luôn index; bài chỉ có tóm tắt và trang tổng hợp không có bài chuyên sâu thì noindex', () => {
    expect(isIndexable('ja', HOME)).toBe(true);
    expect(isIndexable('en', base)).toBe(true);
    expect(isIndexable('vi', base)).toBe(true);
    expect(isIndexable('ko', base)).toBe(false);
    expect(isIndexable('en', GUIDES_INDEX)).toBe(true);
    expect(isIndexable('ko', GUIDES_INDEX)).toBe(false);
  });

  it('hreflang chỉ gồm các bản được index', () => {
    expect(languagesFor(base).map((l) => l.code)).toEqual(LANGUAGES.map((l) => l.code).filter((c) => ARTICLE_LANGS[base.slug].includes(c)));
    expect(languagesFor(HOME)).toHaveLength(LANGUAGES.length);
  });

  it('trang noindex vẫn được prerender nhưng không vào sitemap', () => {
    const ko = allRoutes().find((r) => r.path === `/ko/guides/${BASE_GUIDE_SLUGS[0]}/`);
    expect(ko).toMatchObject({ indexable: false });
  });
});

describe('Đường dẫn trang tổng hợp và bài viết', () => {
  it('tạo URL theo ngôn ngữ và số trang', () => {
    expect(pathFor('en', { name: 'guides', page: 1 })).toBe('/guides/');
    expect(pathFor('vi', { name: 'guides', page: 1 })).toBe('/vi/guides/');
    expect(pathFor('pt-BR', { name: 'guides', page: 2 })).toBe('/pt-br/guides/page/2/');
  });

  it('đọc URL trang tổng hợp, bài viết và trang không hợp lệ', () => {
    expect(parsePath('/vi/guides/')).toMatchObject({ lang: 'vi', route: { name: 'guides', page: 1 }, known: true });
    expect(parsePath(`/ja/guides/${BASE_GUIDE_SLUGS[0]}/`)).toMatchObject({ lang: 'ja', route: { name: 'guide' }, known: true });
    expect(parsePath('/guides/page/1/')).toMatchObject({ route: { name: 'guides', page: 1 }, known: false });
    expect(parsePath(`/vi/guides/page/${indexPageCount('vi') + 1}/`)).toMatchObject({ route: { name: 'guides', page: 1 }, known: false });
  });

  it('bài chưa có bản dịch → chuyển về trang tổng hợp của ngôn ngữ đó', () => {
    const extra = { name: 'guide', slug: EXTRA_GUIDE_SLUGS[0] } as const;
    expect(parsePath(`/ko/guides/${EXTRA_GUIDE_SLUGS[0]}/`)).toMatchObject({ lang: 'ko', route: GUIDES_INDEX, known: false });
    expect(localizeRoute('ko', extra)).toEqual(GUIDES_INDEX);
    expect(localizeRoute('vi', extra)).toEqual(extra);
    expect(languagesFor(extra).map((l) => l.code)).toEqual(LANGUAGES.map((l) => l.code).filter((c) => ARTICLE_LANGS[extra.slug].includes(c)));
    expect(localizeRoute('ko', { name: 'guides', page: 3 })).toEqual({ name: 'guides', page: indexPageCount('ko') });
  });

  it('prerender đúng số trang cho từng ngôn ngữ', () => {
    const routes = allRoutes();
    for (const { code } of LANGUAGES) {
      const own = routes.filter((r) => r.lang === code);
      const guides = availableGuides(code).length;
      expect(own).toHaveLength(1 + indexPageCount(code) + guides + 1 + TOOL_SLUGS.length + activePages().length);
    }
    expect(routes.map((r) => r.path)).toContain('/vi/guides/page/2/');
    expect(routes.map((r) => r.path)).not.toContain(`/ko/guides/${EXTRA_GUIDE_SLUGS[0]}/`);
  });
});

describe('Trang công cụ', () => {
  it('tạo và đọc URL theo ngôn ngữ; slug lạ → trang tổng hợp công cụ', () => {
    expect(pathFor('en', TOOLS_INDEX)).toBe('/tools/');
    expect(pathFor('vi', { name: 'tool', slug: 'privacy-check' })).toBe('/vi/tools/privacy-check/');
    expect(parsePath('/ja/tools/')).toMatchObject({ lang: 'ja', route: TOOLS_INDEX, known: true });
    expect(parsePath('/tools/metadata-size/')).toMatchObject({ route: { name: 'tool', slug: 'metadata-size' }, known: true });
    expect(parsePath('/tools/no-such-tool/')).toMatchObject({ route: TOOLS_INDEX, known: false });
  });

  it('có ở mọi ngôn ngữ, được index và nạp văn bản công cụ', () => {
    const tool = { name: 'tool', slug: 'view-metadata' } as const;
    expect(isIndexable('ja', tool)).toBe(true);
    expect(languagesFor(TOOLS_INDEX)).toHaveLength(LANGUAGES.length);
    expect(contentNeeds('ja', tool)).toEqual({ tools: true });
    expect(lastModified('en', tool)).toBe(TOOLS_UPDATED);
  });
});

describe('Trang thông tin', () => {
  it('tạo và đọc URL theo ngôn ngữ', () => {
    expect(pathFor('en', { name: 'page', slug: 'privacy' })).toBe('/privacy/');
    expect(pathFor('pt-BR', { name: 'page', slug: 'about' })).toBe('/pt-br/about/');
    expect(parsePath('/vi/terms/')).toMatchObject({ lang: 'vi', route: { name: 'page', slug: 'terms' }, known: true });
    expect(parsePath('/no-such-page/')).toMatchObject({ route: HOME, known: false });
  });

  it('có ở mọi ngôn ngữ và được index', () => {
    const about = { name: 'page', slug: 'about' } as const;
    expect(isIndexable('ja', about)).toBe(true);
    expect(languagesFor(about)).toHaveLength(LANGUAGES.length);
    expect(localizeRoute('ja', about)).toEqual(about);
  });

  it('Contact chỉ tồn tại khi đã có email liên hệ', () => {
    expect(activePages().includes('contact')).toBe(SITE.contactEmail !== '');
    expect(parsePath('/contact/').known).toBe(SITE.contactEmail !== '');
  });
});

describe('Ngày sửa nội dung (lastmod)', () => {
  const ISO = /^\d{4}-\d{2}-\d{2}$/;

  it('mỗi bài có ngày hợp lệ, published ≤ updated', () => {
    for (const [slug, d] of Object.entries(GUIDE_DATES)) {
      expect(d.published, slug).toMatch(ISO);
      expect(d.updated, slug).toMatch(ISO);
      expect(d.published <= d.updated, slug).toBe(true);
    }
    for (const slug of PAGE_SLUGS) expect(PAGE_UPDATED[slug]).toMatch(ISO);
  });

  it('bài dùng ngày riêng; trang tổng hợp lấy bài mới sửa nhất trên trang đó', () => {
    const slug = EXTRA_GUIDE_SLUGS[0];
    expect(lastModified('en', { name: 'guide', slug })).toBe(GUIDE_DATES[slug].updated);
    const onFirstPage = availableGuides('en').slice(0, 6).map((s) => GUIDE_DATES[s].updated);
    expect(lastModified('en', GUIDES_INDEX)).toBe([...onFirstPage].sort().at(-1));
    expect(lastModified('en', { name: 'page', slug: 'privacy' })).toBe(PAGE_UPDATED.privacy);
  });
});
