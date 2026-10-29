import type { ToolCardId, ToolGroupId, ToolSlug } from '../seo';

/**
 * Văn bản trang tổng hợp công cụ /tools/ và các trang công cụ riêng cho một ngôn ngữ — tệp src/content/tools/<mã>.ts.
 * Mọi ngôn ngữ có cùng cấu trúc với bản tiếng Anh (có test kiểm tra). Nhãn giao diện dùng chung nằm trong `tools`
 * của tệp ngôn ngữ (src/i18n/locales).
 */
export interface ToolPageContent {
  /** Tiêu đề H1 và <title> (≤ 60 ký tự). */
  title: string;
  /** Meta description (≈ 110–170 ký tự). */
  description: string;
  /** Đoạn mở đầu dưới tiêu đề. */
  intro: string;
  /** Ba bước dùng công cụ. */
  steps: string[];
  faq: { q: string; a: string }[];
}

export interface ToolsContent {
  hub: { title: string; description: string; intro: string };
  /** Tên, mô tả ngắn và một câu chi tiết (chỉ hiện trên trang tổng hợp /tools/) của từng thẻ. */
  cards: Record<ToolCardId, { name: string; text: string; detail: string }>;
  /** Tiêu đề và một câu mô tả cho từng nhóm thẻ trên trang tổng hợp. */
  groups: Record<ToolGroupId, { title: string; text: string }>;
  tools: Record<ToolSlug, ToolPageContent>;
}
