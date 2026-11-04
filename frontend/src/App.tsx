import { DocumentHead } from './components/layout/DocumentHead';
import { SiteFooter, SiteHeader } from './components/layout/SiteChrome';
import { StructuredData } from './components/seo/StructuredData';
import { RoutePage } from './pageLoader';
import { useRouter } from './router';

export default function App() {
  const route = useRouter((s) => s.route);
  return (
    <>
      <DocumentHead />
      <StructuredData />
      <SiteHeader />
      {/* Nội dung từng loại trang là chunk riêng (src/pages/), router tải sẵn trước khi đổi route. */}
      <RoutePage route={route} />
      <SiteFooter />
    </>
  );
}
