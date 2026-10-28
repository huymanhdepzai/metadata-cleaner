import type { PageSlug } from '../seo';

/**
 * Nội dung trang thông tin (About, Privacy, Terms, Contact) cho một ngôn ngữ — tệp src/content/pages/<mã>.ts.
 * Mọi ngôn ngữ có cùng cấu trúc với bản tiếng Anh (cùng số mục, đoạn, gạch đầu dòng — có test kiểm tra).
 */
export interface PageSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PageContent {
  /** Tiêu đề H1 và <title>. */
  title: string;
  /** Meta description (≈ 110–170 ký tự). */
  description: string;
  /** Đoạn mở đầu dưới tiêu đề. */
  intro: string;
  sections: PageSection[];
}

export type Pages = Record<PageSlug, PageContent>;
