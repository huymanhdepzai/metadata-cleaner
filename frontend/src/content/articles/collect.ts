import { isGuideSlug, type GuideSlug } from '../seo';

/** Gom các tệp bài viết (./<mã>/<slug>.ts) thành bảng slug → giá trị; tên tệp sai slug sẽ báo lỗi ngay khi build. */
export function collectArticles<T>(modules: Record<string, T>): Partial<Record<GuideSlug, T>> {
  const articles: Partial<Record<GuideSlug, T>> = {};
  for (const [file, value] of Object.entries(modules)) {
    const slug = file.match(/([^/]+)\.ts(\?.*)?$/)![1];
    if (!isGuideSlug(slug)) throw new Error(`Unknown guide slug in article file name: ${file}`);
    articles[slug] = value;
  }
  return articles;
}
