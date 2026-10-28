import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Nhật: mỗi bài một tệp trong ./ja/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./ja/*.ts', { eager: true, query: '?meta', import: 'default' }));
