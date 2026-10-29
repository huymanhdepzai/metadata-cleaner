import { availableGuides, guidePageCount, guidesOnPage } from '../../content/seo';
import { useI18n, useT } from '../../i18n';
import { HOME, useHref, type Route } from '../../router';
import { Link } from '../Link';
import { Icon } from '../ui';
import { GuideCard } from './SeoSections';

/** Trang tổng hợp bài viết (/guides/, /guides/page/2/…): lưới thẻ blog, mỗi trang GUIDES_PER_PAGE bài. */
export function GuidesIndexPage({ page }: { page: number }) {
  const t = useT();
  const { guides } = t.seo;
  const home = useHref(HOME);
  const lang = useI18n((s) => s.lang);
  const all = availableGuides(lang);
  const total = guidePageCount(all.length);
  const slugs = guidesOnPage(page, all);

  return (
    <main>
      <div className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:pt-12">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5 [&>li+li]:before:me-1.5 [&>li+li]:before:text-slate-400 [&>li+li]:before:content-['/']">
              <li>
                <Link to={home} className="hover:text-indigo-600">
                  {guides.home}
                </Link>
              </li>
              <li aria-current="page" className="text-slate-700">
                {guides.eyebrow}
              </li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase">{guides.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{guides.title}</h1>
          {/* Đoạn giới thiệu chỉ ở trang 1 — các trang sau không lặp lại cùng một đoạn văn. */}
          {page === 1 && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{guides.intro}</p>}
          {total > 1 && (
            <p className="mt-2 text-sm text-slate-500">
              {page} / {total}
            </p>
          )}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slugs.map((slug) => (
            <GuideCard key={slug} slug={slug} level={2} />
          ))}
        </div>
        {total > 1 && <Pagination page={page} total={total} />}
      </section>
    </main>
  );
}

function PageLink({ page, children, label, current }: { page: number; children: React.ReactNode; label?: string; current?: boolean }) {
  const route: Route = { name: 'guides', page };
  const href = useHref(route);
  return (
    <Link
      to={href}
      aria-label={label}
      aria-current={current ? 'page' : undefined}
      className={`inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-lg border px-3 text-sm font-medium transition-colors ${
        current
          ? 'border-indigo-600 bg-indigo-600 text-white'
          : 'border-slate-200 bg-surface text-slate-700 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      {children}
    </Link>
  );
}

/** Phân trang: Trang trước · 1 2 3 … · Trang sau (các nút là liên kết thật để crawler đi qua mọi trang). */
export function Pagination({ page, total }: { page: number; total: number }) {
  const { guides } = useT().seo;
  return (
    <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <PageLink page={page - 1} label={guides.prevPage}>
          <Icon name="chevron" className="h-4 w-4 rotate-90 rtl:-rotate-90" />
          <span className="hidden sm:inline">{guides.prevPage}</span>
        </PageLink>
      )}
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <PageLink key={n} page={n} current={n === page}>
          {n}
        </PageLink>
      ))}
      {page < total && (
        <PageLink page={page + 1} label={guides.nextPage}>
          <span className="hidden sm:inline">{guides.nextPage}</span>
          <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
        </PageLink>
      )}
    </nav>
  );
}
