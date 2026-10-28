import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Bồ Đào Nha (Brazil): mỗi bài một tệp trong ./pt-BR/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./pt-BR/*.ts', { eager: true, query: '?meta', import: 'default' }));
