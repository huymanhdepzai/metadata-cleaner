import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Đức: mỗi bài một tệp trong ./de/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./de/*.ts', { eager: true, query: '?meta', import: 'default' }));
