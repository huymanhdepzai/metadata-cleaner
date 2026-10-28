import { collectArticles } from './collect';
import type { ArticleMeta } from './types';

/** Bài viết tiếng Tây Ban Nha: mỗi bài một tệp trong ./es/<slug>.ts (tên tệp = slug). Chỉ gom phần meta — xem en.ts. */
export default collectArticles(import.meta.glob<ArticleMeta>('./es/*.ts', { eager: true, query: '?meta', import: 'default' }));
