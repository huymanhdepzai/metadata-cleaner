import type { GuideGroupId } from '../seo';

/**
 * Văn bản riêng của trang tổng hợp /guides/ — tệp src/content/hub/<mã>.ts, chỉ có ở ngôn ngữ có bài chuyên sâu
 * (cùng danh sách FULL trong src/content/seo.ts; có test kiểm tra). Tiêu đề H1 và đoạn mở đầu vẫn nằm trong
 * `seo.guides` của tệp ngôn ngữ. Nội dung ở đây không lặp lại trên trang chủ, để hai trang không gần trùng nhau.
 */
export interface GuidesHubContent {
  /** Đoạn văn thêm sau đoạn mở đầu: trang có gì, nên bắt đầu từ đâu. */
  more: string;
  /** Tiêu đề H2 và đoạn mô tả (2–3 câu) cho từng nhóm chủ đề. */
  groups: Record<GuideGroupId, { title: string; text: string }>;
}
