import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Việt: mỗi bài một tệp trong ./vi/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./vi/*.ts', { eager: true, query: '?meta', import: 'default' }));
