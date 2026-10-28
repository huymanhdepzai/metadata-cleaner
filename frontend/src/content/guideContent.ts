import type { LanguageBundle } from '../i18n';
import { useI18n } from '../i18n';
import { baseGuideIndex, type GuideSlug } from './seo';

export interface GuideContent {
  title: string;
  summary: string[];
}

/**
 * Tiêu đề + tóm tắt của một bài ở ngôn ngữ hiện tại:
 * bài nền tảng lấy từ tệp ngôn ngữ, bài mở rộng lấy từ tệp bài viết (src/content/articles/<mã>.ts).
 */
export function guideContent({ m, articles }: Pick<LanguageBundle, 'm' | 'articles'>, slug: GuideSlug): GuideContent | null {
  const i = baseGuideIndex(slug);
  if (i >= 0) {
    const item = m.seo.guides.items[i];
    return { title: item.title, summary: item.paragraphs };
  }
  const article = articles?.[slug];
  return article?.title && article.summary ? { title: article.title, summary: article.summary } : null;
}

export function useGuideContent(slug: GuideSlug): GuideContent | null {
  const m = useI18n((s) => s.m);
  const articles = useI18n((s) => s.articles);
  return guideContent({ m, articles }, slug);
}
