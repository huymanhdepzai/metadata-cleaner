import { StaticPage } from '../components/seo/StaticPage';
import type { PageProps } from '../pageLoader';

export default function Page({ route }: PageProps) {
  return route.name === 'page' ? <StaticPage key={route.slug} slug={route.slug} /> : null;
}
