import { GuidePage } from '../components/seo/GuidePage';
import type { PageProps } from '../pageLoader';

export default function Guide({ route }: PageProps) {
  return route.name === 'guide' ? <GuidePage key={route.slug} slug={route.slug} /> : null;
}
