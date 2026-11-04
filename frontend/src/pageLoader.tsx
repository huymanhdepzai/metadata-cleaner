import type { ComponentType } from 'react';
import type { Route } from './router';

/**
 * Tách mã theo loại trang: mỗi nhóm trang (src/pages/<chunk>.tsx) là một chunk JS riêng, nên trang chủ không phải tải
 * mã của trang công cụ/bài viết và ngược lại.
 *
 * Không dùng React.lazy + Suspense: router tải xong chunk *trước* khi đổi route (`loadPage` trong `apply`), và lúc
 * khởi động thì trước khi hydrate → `<RoutePage>` luôn render đồng bộ, HTML khớp bản prerender, không nháy fallback.
 * Prerender chèn sẵn <link rel="modulepreload"> cho chunk của trang (scripts/prerender.mjs) để trình duyệt tải song
 * song với JS chính thay vì đợi JS chính chạy xong mới tải.
 */

export type PageProps = { route: Route };
export type PageChunk = 'home' | 'guide' | 'guides' | 'tools' | 'page';

export const PAGE_CHUNK: Record<Route['name'], PageChunk> = {
  home: 'home',
  guide: 'guide',
  guides: 'guides',
  tools: 'tools',
  tool: 'tools',
  page: 'page',
};

const loaders: Record<PageChunk, () => Promise<{ default: ComponentType<PageProps> }>> = {
  home: () => import('./pages/home'),
  guide: () => import('./pages/guide'),
  guides: () => import('./pages/guides'),
  tools: () => import('./pages/tools'),
  page: () => import('./pages/page'),
};

const loaded: Partial<Record<PageChunk, ComponentType<PageProps>>> = {};

/** Tải (một lần) mã của loại trang này. */
export async function loadPage(name: Route['name']): Promise<void> {
  const chunk = PAGE_CHUNK[name];
  loaded[chunk] ??= (await loaders[chunk]()).default;
}

/** Trang ứng với route hiện tại — chunk phải được tải trước bằng `loadPage`. */
export function RoutePage({ route }: PageProps) {
  const Page = loaded[PAGE_CHUNK[route.name]];
  if (!Page) throw new Error(`Page chunk for "${route.name}" was not loaded before render`);
  return <Page route={route} />;
}
