import { useRef } from 'react';
import { DocumentHead } from './components/layout/DocumentHead';
import { Hero, SiteFooter, SiteHeader } from './components/layout/SiteChrome';
import { GuidePage } from './components/seo/GuidePage';
import { GuidesIndexPage } from './components/seo/GuidesIndexPage';
import { Disclaimer, Faq, Features, FormatTable, Guides, HowItWorks, WhyChoose } from './components/seo/SeoSections';
import { StaticPage } from './components/seo/StaticPage';
import { StructuredData } from './components/seo/StructuredData';
import { ToolPage, ToolsIndexPage } from './components/seo/ToolPages';
import { useScrollReveal } from './components/useScrollReveal';
import { Workspace } from './components/Workspace';
import { useRouter } from './router';
import { useJobStore } from './store/useJobStore';

function HomePage() {
  const hasJobs = useJobStore((s) => s.jobs.length > 0);
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);
  return (
    <main ref={mainRef}>
      <Hero hasJobs={hasJobs} />
      <div className="mx-auto max-w-6xl px-4 pb-12">
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

export default function App() {
  const route = useRouter((s) => s.route);
  return (
    <>
      <DocumentHead />
      <StructuredData />
      <SiteHeader />
      {route.name === 'guide' ? (
        <GuidePage key={route.slug} slug={route.slug} />
      ) : route.name === 'tools' ? (
        <ToolsIndexPage />
      ) : route.name === 'tool' ? (
        <ToolPage key={route.slug} slug={route.slug} />
      ) : route.name === 'page' ? (
        <StaticPage key={route.slug} slug={route.slug} />
      ) : route.name === 'guides' ? (
        <GuidesIndexPage />
      ) : (
        <HomePage />
      )}
      <SiteFooter />
    </>
  );
}
