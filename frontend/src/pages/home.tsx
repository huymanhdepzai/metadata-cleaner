import { useRef } from 'react';
import { Hero } from '../components/layout/SiteChrome';
import { Disclaimer, Faq, Features, FormatTable, Guides, HowItWorks, WhyChoose } from '../components/seo/SeoSections';
import { useScrollReveal } from '../components/useScrollReveal';
import { Workspace } from '../components/Workspace';
import { useJobStore } from '../store/useJobStore';

export default function HomePage() {
  const hasJobs = useJobStore((s) => s.jobs.length > 0);
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);
  return (
    <main ref={mainRef}>
      <Hero hasJobs={hasJobs} />
      {/* Chưa có ảnh thì Workspace gần như trống → bỏ khoảng đệm dưới để Hero nối liền mục "Cách hoạt động". */}
      <div className={`mx-auto max-w-6xl px-4 ${hasJobs ? 'pb-12' : ''}`}>
        <Workspace />
      </div>
      <HowItWorks />
      <Features />
      <WhyChoose />
      <FormatTable />
      <Guides />
      <Faq />
      <Disclaimer />
    </main>
  );
}
