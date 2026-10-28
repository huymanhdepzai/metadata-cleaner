import { useId, type ReactNode } from 'react';
import { useGuideContent } from '../../content/guideContent';
import { activePages, availableGuides, HOME_SECTIONS, NAV, SITE, TRUST_ICONS, type GuideSlug, type NavTarget } from '../../content/seo';
import { fmt, rememberLanguage, useI18n, useT } from '../../i18n';
import { LANGUAGES } from '../../i18n/languages';
import { GUIDES_INDEX, HOME, localizeRoute, pathFor, TOOLS_INDEX, useHref, useRouter } from '../../router';
import { BrandMark } from '../BrandMark';
import { Dropzone } from '../Dropzone';
import { Link } from '../Link';
import { Icon } from '../ui';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePopover } from './usePopover';

/** Logo; `inverted` dùng trên nền tối (footer). */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const home = useHref(HOME);
  return (
    <Link to={home} className="flex shrink-0 items-center gap-2" aria-label={SITE.name} dir="ltr">
      <BrandMark className="h-8 w-8 shrink-0" />
      <span
        className={`font-brand text-[1.05rem] font-extrabold tracking-[-0.02em] ${inverted ? 'text-white' : 'hidden text-slate-900 sm:inline'}`}
      >
        All Metadata{' '}
        <span
          className={`bg-gradient-to-r bg-clip-text text-transparent ${
            inverted ? 'from-indigo-300 to-violet-300' : 'from-indigo-600 to-violet-600'
          }`}
        >
          Cleaner
        </span>
      </span>
    </Link>
  );
}

/**
 * Đích của mục menu: "Hướng dẫn" mở trang tổng hợp bài viết, "Công cụ khác" mở trang tổng hợp công cụ,
 * các mục khác cuộn tới phần tương ứng trên trang chủ.
 */
function useNavHref() {
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  const toolsIndex = useHref(TOOLS_INDEX);
  return (section: NavTarget) =>
    section === 'guides' ? guidesIndex : section === 'tools' ? toolsIndex : `${home}#${HOME_SECTIONS[section]}`;
}

/** Menu điều hướng cho màn hình < lg (điện thoại, tablet), nơi thanh menu ngang bị ẩn. */
function MobileNav() {
  const t = useT();
  const navHref = useNavHref();
  const { open, setOpen, ref } = usePopover<HTMLDivElement>();
  const panelId = useId();
  return (
    <div ref={ref} className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.header.menu}
        className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-surface text-slate-700 hover:bg-slate-50"
      >
        <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
      </button>
      {open && (
        <nav
          id={panelId}
          aria-label={t.header.menu}
          className="absolute end-0 top-full z-40 mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-surface p-2 shadow-xl"
        >
          <ul>
            {NAV.map((n) => (
              <li key={n.section}>
                <Link
                  to={navHref(n.section)}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {t.header.nav[n.label]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export function SiteHeader() {
  const t = useT();
  const navHref = useNavHref();
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-surface/90 pt-[env(safe-area-inset-top,0px)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.section}>
                <Link
                  to={navHref(n.section)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                >
                  {t.header.nav[n.label]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function Hero({ hasJobs }: { hasJobs: boolean }) {
  const t = useT();
  return (
    <section id={HOME_SECTIONS.tool} className="relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-surface to-slate-50" />
      <div
        aria-hidden="true"
        className="absolute top-[-10rem] left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl"
      />
      <div className={`mx-auto max-w-4xl px-4 text-center ${hasJobs ? 'pt-8 pb-6' : 'pt-14 pb-10 sm:pt-20'}`}>
        {!hasJobs && (
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
            <Icon name="sparkles" className="h-3.5 w-3.5" /> {t.hero.eyebrow}
          </p>
        )}
        <h1 className={`font-extrabold tracking-tight text-slate-900 ${hasJobs ? 'text-2xl' : 'text-3xl sm:text-5xl'}`}>
          {t.hero.title} <span className="text-indigo-600">{t.hero.titleAccent}</span>
        </h1>
        {!hasJobs && <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{t.hero.subtitle}</p>}

        <div className={`mx-auto rounded-3xl bg-surface p-3 shadow-xl ring-1 shadow-slate-200/60 ring-slate-200 ${hasJobs ? 'mt-5 max-w-3xl' : 'mt-8'}`}>
          <Dropzone compact={hasJobs} />
        </div>

        {!hasJobs && (
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {(Object.keys(TRUST_ICONS) as (keyof typeof TRUST_ICONS)[]).map((key) => (
              <li key={key} className="flex items-center gap-1.5">
                <Icon name={TRUST_ICONS[key]} className="h-4 w-4 text-emerald-600" /> {t.hero.trust[key]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

const FOOTER_LINK = 'text-sm text-slate-400 transition-colors hover:text-white';
/** Số bài hướng dẫn hiển thị ở footer; danh sách đầy đủ nằm ở mục Hướng dẫn trên trang chủ. */
const FOOTER_GUIDE_COUNT = 3;

function FooterGuideLink({ slug }: { slug: GuideSlug }) {
  const href = useHref({ name: 'guide', slug });
  const guide = useGuideContent(slug);
  if (!guide) return null;
  return (
    <Link to={href} className={FOOTER_LINK}>
      {guide.title}
    </Link>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold tracking-wider text-white uppercase">{children}</p>;
}

/** Liên kết tới cùng trang ở mọi ngôn ngữ — vừa tiện cho người dùng, vừa là liên kết nội bộ giữa các bản ngôn ngữ. */
function FooterLanguages() {
  const t = useT();
  const current = useI18n((s) => s.lang);
  const route = useRouter((s) => s.route);
  return (
    <nav aria-label={t.header.language}>
      <ul className="flex flex-wrap gap-x-4 gap-y-0.5 font-system">
        {LANGUAGES.map((l) => (
          <li key={l.code}>
            <Link
              to={pathFor(l.code, localizeRoute(l.code, route))}
              lang={l.code}
              hrefLang={l.code}
              onClick={() => rememberLanguage(l.code)}
              aria-current={l.code === current ? 'true' : undefined}
              className={`inline-block py-1 text-xs transition-colors ${l.code === current ? 'font-semibold text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  const t = useT();
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  const navHref = useNavHref();
  const lang = useI18n((s) => s.lang);
  const toolLinks = NAV;

  return (
    <footer className="theme-fixed bg-slate-900 pb-[env(safe-area-inset-bottom,0px)] text-slate-400">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo inverted />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{t.seo.footer.about}</p>
            <Link
              to={`${home}#${HOME_SECTIONS.tool}`}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              <Icon name="sparkles" className="h-4 w-4" />
              {t.seo.guides.tryTool}
            </Link>
          </div>

          <nav aria-label={t.header.nav.tool} className="lg:col-span-2">
            <FooterHeading>{t.header.nav.tool}</FooterHeading>
            <ul className="mt-4 space-y-3">
              {toolLinks.map((n) => (
                <li key={n.section}>
                  <Link to={navHref(n.section)} className={FOOTER_LINK}>
                    {t.header.nav[n.label]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.seo.footer.guides} className="lg:col-span-4">
            <FooterHeading>{t.seo.footer.guides}</FooterHeading>
            <ul className="mt-4 space-y-3">
              {availableGuides(lang).slice(0, FOOTER_GUIDE_COUNT).map((slug) => (
                <li key={slug}>
                  <FooterGuideLink slug={slug} />
                </li>
              ))}
              <li>
                <Link
                  to={guidesIndex}
                  className="inline-flex items-center gap-1 py-1 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  {t.seo.guides.viewAll}
                  <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t.pages.heading} className="lg:col-span-2">
            <FooterHeading>{t.pages.heading}</FooterHeading>
            <ul className="mt-4 space-y-3">
              {activePages().map((slug) => (
                <li key={slug}>
                  <Link to={pathFor(lang, { name: 'page', slug })} className={FOOTER_LINK}>
                    {t.pages[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <FooterLanguages />
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs sm:text-start">
          {fmt(t.seo.footer.copyright, { year: new Date().getFullYear(), name: SITE.name })}
        </p>
      </div>
    </footer>
  );
}
