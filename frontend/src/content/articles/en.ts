import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/**
 * Bài viết tiếng Anh: mỗi bài một tệp trong ./en/<slug>.ts (tên tệp = slug).
 * Tệp này chỉ gom phần meta (tiêu đề, tóm tắt, mô tả — xem plugin `article-meta` trong vite.config.ts);
 * nội dung đầy đủ của từng bài là chunk riêng, chỉ tải khi mở bài đó (src/i18n/index.ts).
 */
export default collectArticles(import.meta.glob<ArticleMeta>('./en/*.ts', { eager: true, query: '?meta', import: 'default' }));
