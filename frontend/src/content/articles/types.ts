import type { GuideSlug } from '../seo';

/**
 * Bài viết chuyên sâu cho trang hướng dẫn. Chỉ có ở các ngôn ngữ thị trường chính;
 * ngôn ngữ khác hiển thị phần tóm tắt trong `seo.guides.items` của tệp ngôn ngữ (và trang bị noindex).
 * Mỗi bài là một tệp src/content/articles/<mã-ngôn-ngữ>/<slug>.ts.
 */
export interface ArticleSection {
  /** Tiêu đề H2 — nên chứa biến thể của truy vấn người dùng hay tìm (hiện trong mục lục). */
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Các bước có thứ tự (danh sách đánh số) — dùng cho phần hướng dẫn thao tác. */
  steps?: string[];
  /** Bảng so sánh ngắn; mọi hàng có cùng số cột với `head`. */
  table?: { head: string[]; rows: string[][] };
  /** Liên kết nội bộ theo ngữ cảnh ("Xem thêm") tới các bài liên quan. */
  related?: GuideSlug[];
}

export interface Article {
  /**
   * Tiêu đề + tóm tắt: bắt buộc với bài mở rộng (EXTRA_GUIDE_SLUGS) vì chúng không có trong tệp ngôn ngữ;
   * với bài nền tảng, tiêu đề/tóm tắt lấy từ `seo.guides.items`.
   */
  title?: string;
  summary?: string[];
  /**
   * Tiêu đề ngắn cho thẻ <title> / og:title (≤ 60 ký tự, từ khóa chính đứng đầu) khi tiêu đề H1 quá dài —
   * Google thường cắt tiêu đề sau khoảng 60 ký tự. Không đặt thì dùng tiêu đề H1.
   */
  seoTitle?: string;
  /** Meta description riêng cho trang (≈150 ký tự). */
  description: string;
  /**
   * Câu trả lời ngắn (40–70 từ) cho câu hỏi chính của bài, hiển thị nổi bật ở đầu bài —
   * nhắm featured snippet và câu trả lời của AI Overviews / trợ lý AI.
   */
  answer: string;
  sections: ArticleSection[];
  faqHeading: string;
  faq: { q: string; a: string }[];
}

export type Articles = Partial<Record<GuideSlug, Article>>;

/**
 * Phần nhỏ của bài dùng ở mọi trang (thẻ bài, tiêu đề, <title>, meta description), tách khỏi nội dung đầy đủ
 * lúc build bằng `<slug>.ts?meta` (plugin `article-meta` trong vite.config.ts) để trang chủ không phải tải mọi bài.
 */
export const ARTICLE_META_KEYS = ['title', 'summary', 'seoTitle', 'description'] as const;
export type ArticleMeta = Pick<Article, (typeof ARTICLE_META_KEYS)[number]>;
export type ArticleMetas = Partial<Record<GuideSlug, ArticleMeta>>;
