import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Pháp: mỗi bài một tệp trong ./fr/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./fr/*.ts', { eager: true, query: '?meta', import: 'default' }));
