import { guideContent, useGuideContent } from '../../content/guideContent';
import { availableGuides, GUIDE_DATES, GUIDE_TAGS, isGuideAvailable, SITE, type GuideSlug } from '../../content/seo';
import { fmt, formatDate, useI18n, useT } from '../../i18n';
import { GUIDES_INDEX, HOME, pathFor, useHref } from '../../router';
import { Dropzone } from '../Dropzone';
import { Link } from '../Link';
import { Icon } from '../ui';
import { Workspace } from '../Workspace';
import { GuideIllustration } from './GuideIllustration';
import { GuideCard } from './SeoSections';

const sectionId = (i: number) => `section-${i + 1}`;

/**
 * Bảng trong bài — một cấu trúc HTML duy nhất (không lặp nội dung). Màn hình hẹp (< sm): mỗi hàng hiển thị thành
 * một thẻ — cột đầu làm tiêu đề, các cột còn lại thành cặp nhãn/giá trị (nhãn lấy từ data-label qua CSS). Tránh bảng
 * nhiều cột bị ép chữ hoặc phải cuộn ngang mà người đọc không biết còn cột bị khuất.
 */
function ArticleTable({ table }: { table: { head: string[]; rows: string[][] } }) {
  return (
    <div className="mt-5 sm:overflow-x-auto sm:rounded-xl sm:border sm:border-slate-200">
      <table className="w-full text-start text-sm">
        <thead className="bg-slate-50 text-slate-700 max-sm:sr-only">
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col" className="px-4 py-2.5 text-start font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-700 max-sm:block max-sm:space-y-3 sm:divide-y sm:divide-slate-100">
          {table.rows.map((row, r) => (
            <tr key={r} className="max-sm:block max-sm:space-y-1.5 max-sm:rounded-xl max-sm:border max-sm:border-slate-200 max-sm:bg-surface max-sm:p-4">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="text-start font-medium text-slate-900 max-sm:mb-2 max-sm:block max-sm:font-semibold sm:px-4 sm:py-2.5">
                    {cell}
                  </th>
                ) : (
                  <td
                    key={c}
                    data-label={table.head[c]}
                    className="max-sm:flex max-sm:gap-3 max-sm:before:w-2/5 max-sm:before:shrink-0 max-sm:before:text-slate-500 max-sm:before:content-[attr(data-label)] sm:px-4 sm:py-2.5"
                  >
                    <span className="min-w-0">{cell}</span>
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Liên kết nội bộ theo ngữ cảnh ở cuối một mục ("Xem thêm: …"), chỉ tới bài có ở ngôn ngữ hiện tại. */
function SeeAlso({ slugs }: { slugs: GuideSlug[] }) {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const m = useI18n((s) => s.m);
  const articles = useI18n((s) => s.articles);
  const links = slugs
    .filter((slug) => isGuideAvailable(slug, lang))
    .map((slug) => ({ slug, title: guideContent({ m, articles }, slug)?.title }))
    .filter((l): l is { slug: GuideSlug; title: string } => Boolean(l.title));
  if (links.length === 0) return null;
  return (
    <p className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
      <span className="font-semibold text-slate-700">{t.seo.guides.seeAlso}:</span>{' '}
      {links.map((l, i) => (
        <span key={l.slug}>
          {i > 0 && ' · '}
          <Link to={pathFor(lang, { name: 'guide', slug: l.slug })} className="text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:decoration-indigo-600">
            {l.title}
          </Link>
        </span>
      ))}
    </p>
  );
}

/**
 * Trang riêng cho một bài hướng dẫn: breadcrumb, bài viết (bản chuyên sâu nếu ngôn ngữ có, nếu không thì
 * phần tóm tắt), công cụ nhúng sẵn để dùng ngay, hỏi đáp riêng và các bài liên quan.
 * Bài chuyên sâu có thêm: câu trả lời nhanh ở đầu, mục lục, bước đánh số, bảng và liên kết "Xem thêm".
 */
export function GuidePage({ slug }: { slug: GuideSlug }) {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const article = useI18n((s) => s.bodies[slug]);
  const home = useHref(HOME);
  const guidesIndex = useHref(GUIDES_INDEX);
  const guide = useGuideContent(slug);
  // 3 bài liên quan: các bài kế tiếp trong danh sách (vòng lại từ đầu), chỉ trong số bài có ở ngôn ngữ này.
  const list = availableGuides(lang);
  const at = list.indexOf(slug);
  const related = [1, 2, 3].map((k) => list[(at + k) % list.length]).filter((s) => s !== slug);
  if (!guide) return null;

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
              <li>
                <Link to={guidesIndex} className="hover:text-indigo-600">
                  {t.seo.guides.eyebrow}
                </Link>
              </li>
            </ol>
          </nav>
          <span className="mt-6 inline-block rounded-md bg-rose-50 px-2.5 py-1 text-xs font-bold tracking-wide text-rose-700 uppercase ring-1 ring-rose-200 ring-inset">
            {GUIDE_TAGS[slug]}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{guide.title}</h1>
          <p className="mt-3 text-sm text-slate-500">
            {SITE.name} · <time dateTime={GUIDE_DATES[slug].updated}>{fmt(t.seo.guides.updated, { date: formatDate(GUIDE_DATES[slug].updated, lang) })}</time>
          </p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            {guide.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {article?.answer && (
            <aside aria-labelledby="quick-answer" className="mt-6 rounded-2xl border border-indigo-200 bg-surface p-5 shadow-sm">
              <h2 id="quick-answer" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-indigo-700 uppercase">
                <Icon name="sparkles" className="h-4 w-4" />
                {t.seo.guides.quickAnswer}
              </h2>
              <p className="mt-2 leading-relaxed text-slate-800">{article.answer}</p>
            </aside>
          )}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <GuideIllustration slug={slug} className="block aspect-[16/9] w-full" />
          </figure>
        </div>
      </div>

      <section aria-labelledby="try-tool" className="mx-auto max-w-4xl px-4 py-10">
        <h2 id="try-tool" className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Icon name="sparkles" className="h-5 w-5 text-indigo-600" />
          {t.seo.guides.tryTool}
        </h2>
        <div className="rounded-3xl bg-surface p-3 shadow-lg ring-1 ring-slate-200">
          <Dropzone compact />
        </div>
        <div className="mt-4">
          <Workspace />
        </div>
      </section>

      {article && (
        <article className="mx-auto max-w-3xl px-4 pb-6">
          <nav aria-labelledby="toc" className="rounded-2xl border border-slate-200 bg-surface p-5">
            <h2 id="toc" className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
              {t.seo.guides.onThisPage}
            </h2>
            <ol className="mt-3 list-decimal space-y-1.5 ps-5 text-slate-700 marker:text-slate-400">
              {article.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${sectionId(i)}`} className="hover:text-indigo-600 hover:underline">
                    {s.heading}
                  </a>
                </li>
              ))}
              {article.faq.length > 0 && (
                <li>
                  <a href="#faq" className="hover:text-indigo-600 hover:underline">
                    {article.faqHeading}
                  </a>
                </li>
              )}
            </ol>
          </nav>

          {article.sections.map((s, i) => (
            <section key={s.heading} id={sectionId(i)} className="mt-12 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}
              {s.steps && (
                <ol className="mt-4 list-decimal space-y-2 ps-6 leading-relaxed text-slate-700 marker:font-semibold marker:text-indigo-600">
                  {s.steps.map((b, j) => (
                    <li key={j} className="ps-1">
                      {b}
                    </li>
                  ))}
                </ol>
              )}
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-2 ps-6 leading-relaxed text-slate-700 marker:text-indigo-500">
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {s.table && <ArticleTable table={s.table} />}
              {s.related && <SeeAlso slugs={s.related} />}
            </section>
          ))}

          {article.faq.length > 0 && (
            <section id="faq" className="mt-12 scroll-mt-20">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{article.faqHeading}</h2>
              <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-surface">
                {article.faq.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900">
                      <h3>{f.q}</h3>
                      <Icon name="chevron" className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>
      )}

      <section aria-labelledby="related" className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="related" className="mb-6 text-xl font-bold text-slate-900">
          {t.seo.guides.related}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <GuideCard key={s} slug={s} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
