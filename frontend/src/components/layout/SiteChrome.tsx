import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from 'react';
import { useGuideContent } from '../../content/guideContent';
import { activePages, availableGuides, HOME_SECTIONS, NAV, SITE, TRUST_ICONS, type GuideSlug, type NavTarget } from '../../content/seo';
import { fmt, rememberLanguage, useI18n, useT } from '../../i18n';
import { LANGUAGES } from '../../i18n/languages';
import { GUIDES_INDEX, HOME, localizeRoute, pathFor, TOOLS_INDEX, useHref, useRouter } from '../../router';
import { BrandMark } from '../BrandMark';
import { Dropzone } from '../Dropzone';
import { Letter3DSwap } from '../Letter3DSwap';
import { Link } from '../Link';
import { Icon, type IconName } from '../ui';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePopover } from './usePopover';

/** Logo; `inverted` dùng trên nền tối (footer). */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const home = useHref(HOME);
  return (
    <Link to={home} className="group flex shrink-0 items-center gap-2" aria-label={SITE.name} dir="ltr">
      <BrandMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105" />
      <span
        className={`font-brand text-[1.15rem] font-extrabold tracking-[-0.02em] ${inverted ? 'text-white' : 'hidden text-slate-900 sm:inline'}`}
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

/** Icon cho từng mục menu (dùng trong menu điện thoại). */
const NAV_ICONS: Record<NavTarget, IconName> = {
  tool: 'upload',
  tools: 'layers',
  how: 'bolt',
  features: 'sparkles',
  why: 'check',
  formats: 'photo',
  guides: 'document',
  faq: 'info',
  disclaimer: 'shield',
};

/**
 * Mục menu đang được xem: theo trang hiện tại (trang công cụ → "Công cụ khác", bài viết → "Hướng dẫn"); trên trang
 * chủ thì theo phần đang nằm giữa màn hình (scroll-spy). Trước khi mount trả về theo trang để HTML prerender khớp.
 */
function useActiveNav(): NavTarget | null {
  const route = useRouter((s) => s.route);
  const [section, setSection] = useState<NavTarget | null>(null);
  const onHome = route.name === 'home';

  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === 'undefined') return;
    const targets = NAV.map((n) => n.section).filter((s): s is keyof typeof HOME_SECTIONS => s in HOME_SECTIONS);
    const els = targets.map((s) => document.getElementById(HOME_SECTIONS[s])).filter((el): el is HTMLElement => !!el);
    const visible = new Set<string>();
    // Vùng theo dõi là dải mỏng giữa màn hình → mỗi lúc chỉ một phần "đang xem".
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id);
        setSection(targets.find((s) => visible.has(HOME_SECTIONS[s])) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      setSection(null);
    };
  }, [onHome]);

  if (route.name === 'tools' || route.name === 'tool') return 'tools';
  if (route.name === 'guides' || route.name === 'guide') return 'guides';
  return section;
}

/** Đã cuộn khỏi đầu trang hay chưa + thanh tiến độ cuộn (cập nhật thẳng vào DOM, không render lại). */
function useScrollState(progressRef: RefObject<HTMLDivElement | null>) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [progressRef]);
  return scrolled;
}

/** Mục menu có công cụ mới ra mắt → gắn nhãn "Mới". */
const NAV_NEW: ReadonlySet<NavTarget> = new Set(['tools']);

/**
 * Nhãn "Mới" dạng lá cờ đuôi én (chỉ có vải cờ), phấp phới nhẹ (CSS `.new-flag` trong index.css).
 * Đặt nổi ở góc trên bên phải tên mục menu: vị trí truyền qua `className`, phần tử cha cần `relative`.
 */
function NewTag({ className = '' }: { className?: string }) {
  const t = useT();
  return (
    <span className={`new-flag theme-fixed pointer-events-none absolute ${className}`}>
      <span className="new-flag__cloth">{t.header.new}</span>
    </span>
  );
}

/** Menu điều hướng cho màn hình < xl (điện thoại, tablet, laptop nhỏ): bảng thả xuống ngang màn hình, có icon và mục đang xem. */
function MobileNav({ active }: { active: NavTarget | null }) {
  const t = useT();
  const navHref = useNavHref();
  const { open, setOpen, ref } = usePopover<HTMLDivElement>();
  const panelId = useId();
  return (
    <div ref={ref} className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.header.menu}
        className={`grid h-10 w-10 place-items-center rounded-xl border text-slate-700 transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
          open ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-surface hover:bg-slate-50'
        }`}
      >
        <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
      </button>
      {open && (
        <nav
          id={panelId}
          aria-label={t.header.menu}
          className="header-sheet fixed inset-x-3 top-[calc(4.5rem+env(safe-area-inset-top,0px))] z-40 max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-surface p-2 shadow-2xl shadow-slate-900/15 sm:inset-x-auto sm:end-6 sm:w-80"
        >
          <ul className="space-y-0.5">
            {NAV.map((n) => {
              const on = n.section === active;
              return (
                <li key={n.section}>
                  <Link
                    to={navHref(n.section)}
                    onClick={() => setOpen(false)}
                    aria-current={on ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                      on ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${on ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon name={NAV_ICONS[n.section]} className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex-1">
                      <span className="relative">
                        {t.header.nav[n.label]}
                        {NAV_NEW.has(n.section) && <NewTag className="start-full -top-2.5 ms-0.5" />}
                      </span>
                    </span>
                    <Icon name="chevron" className="h-4 w-4 -rotate-90 text-slate-300 rtl:rotate-90" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

/**
 * Header dính trên cùng: trong suốt ở đầu trang, chuyển sang nền mờ có bóng khi cuộn; thanh tiến độ đọc ở cạnh dưới;
 * menu tự đánh dấu mục đang xem.
 */
export function SiteHeader() {
  const t = useT();
  const navHref = useNavHref();
  const progressRef = useRef<HTMLDivElement>(null);
  const scrolled = useScrollState(progressRef);
  const active = useActiveNav();
  return (
    <header
      className={`sticky top-0 z-30 border-b pt-[env(safe-area-inset-top,0px)] transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? 'border-slate-200/80 bg-surface/80 shadow-[0_8px_30px_-12px_rgb(15_23_42/0.18)] backdrop-blur-xl backdrop-saturate-150' : 'border-transparent bg-surface/40 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-3.5 rounded-2xl border border-slate-200/70 bg-surface/60 p-1 px-1.5 shadow-sm">
            {NAV.map((n) => {
              const on = n.section === active;
              return (
                <li key={n.section}>
                  <Link
                    to={navHref(n.section)}
                    aria-current={on ? 'page' : undefined}
                    className={`relative block rounded-xl px-3.5 py-2 text-[0.9375rem] font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
                      on ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {t.header.nav[n.label]}
                    {NAV_NEW.has(n.section) && <NewTag className="start-[calc(100%-0.875rem)] -top-1 z-10" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <MobileNav active={active} />
        </div>
      </div>
      {/* Tiến độ cuộn trang. */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 rtl:origin-right"
          style={{ transform: 'scaleX(0)' }}
        />
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
      <div className={`mx-auto max-w-4xl px-4 text-center ${hasJobs ? 'pt-8 pb-6' : 'pt-14 pb-12 sm:pt-20'}`}>
        {!hasJobs && (
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
            <Icon name="sparkles" className="h-3.5 w-3.5" /> {t.hero.eyebrow}
          </p>
        )}
        <Letter3DSwap
          className={`font-extrabold tracking-tight text-balance text-slate-900 ${hasJobs ? 'text-2xl' : 'text-3xl sm:text-5xl'}`}
          segments={[{ text: t.hero.title }, { text: t.hero.titleAccent, className: 'text-indigo-600' }]}
        />
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
