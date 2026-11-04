import { ToolPage, ToolsIndexPage } from '../components/seo/ToolPages';
import type { PageProps } from '../pageLoader';

/** Trang tổng hợp /tools/ và từng công cụ dùng chung một chunk (cùng thành phần, cùng ảnh minh họa). */
export default function Tools({ route }: PageProps) {
  return route.name === 'tool' ? <ToolPage key={route.slug} slug={route.slug} /> : <ToolsIndexPage />;
}
