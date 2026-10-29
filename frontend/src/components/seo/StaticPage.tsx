import { activePages, PAGE_UPDATED, SITE, type PageSlug } from '../../content/seo';
import { fmt, formatDate, useI18n, useT } from '../../i18n';
import { HOME, pathFor, useHref } from '../../router';
import { Link } from '../Link';

/**
 * Trang thông tin (About, Privacy, Terms, Contact): breadcrumb, H1, ngày cập nhật, các mục nội dung,
 * ô email trên trang Contact và liên kết sang các trang thông tin khác.
 */
export function StaticPage({ slug }: { slug: PageSlug }) {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const page = useI18n((s) => s.pages?.[slug]);
  const home = useHref(HOME);
  if (!page) return null;
  const others = activePages().filter((s) => s !== slug);

  return (
    <main>
      <div className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="mx-auto max-w-3xl px-4 pt-8 pb-10 sm:pt-12">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5 [&>li+li]:before:me-1.5 [&>li+li]:before:text-slate-400 [&>li+li]:before:content-['/']">
              <li>
                <Link to={home} className="hover:text-indigo-600">
                  {t.seo.guides.home}
                </Link>
              </li>
              <li aria-current="page">{t.pages[slug]}</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">
            <time dateTime={PAGE_UPDATED[slug]}>{fmt(t.pages.updated, { date: formatDate(PAGE_UPDATED[slug], lang) })}</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">{page.intro}</p>
          {slug === 'contact' && SITE.contactEmail && (
            <p className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-indigo-200 bg-surface px-5 py-4 shadow-sm">
              <span className="text-sm font-semibold tracking-wide text-indigo-700 uppercase">{t.pages.email}</span>
              <a href={`mailto:${SITE.contactEmail}`} className="font-semibold text-slate-900 underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-600" dir="ltr">
                {SITE.contactEmail}
              </a>
            </p>
          )}
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {page.sections.map((s) => (
          <section key={s.heading} className="mt-10 first:mt-0">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-slate-700 marker:text-indigo-500">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <nav aria-label={t.pages.heading} className="mt-14 border-t border-slate-200 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {others.map((s) => (
              <li key={s}>
                <Link to={pathFor(lang, { name: 'page', slug: s })} className="text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-600">
                  {t.pages[s]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
