import { availableGuides, guideGroups } from '../../content/seo';
import { useI18n, useT } from '../../i18n';
import { HOME, useHref } from '../../router';
import { Link } from '../Link';
import { GuideCard } from './SeoSections';

/**
 * Trang tổng hợp bài viết /guides/: một trang duy nhất (không phân trang), bài chia theo nhóm chủ đề
 * (GUIDE_GROUPS), mỗi nhóm có tiêu đề H2 và đoạn mô tả riêng — nội dung không lặp lại trên trang chủ.
 * Ngôn ngữ chưa có văn bản nhóm (không có bài chuyên sâu, trang bị noindex) hiện lưới thẻ không chia nhóm.
 */
export function GuidesIndexPage() {
  const t = useT();
  const { guides } = t.seo;
  const home = useHref(HOME);
  const lang = useI18n((s) => s.lang);
  const hub = useI18n((s) => s.hub);

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
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{guides.intro}</p>
          {hub && <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{hub.more}</p>}
        </div>
      </div>

      {hub ? (
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-12">
          {guideGroups(lang).map((g) => (
            <section key={g.id} aria-labelledby={`group-${g.id}`}>
              <h2 id={`group-${g.id}`} className="text-2xl font-bold tracking-tight text-slate-900">
                {hub.groups[g.id].title}
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">{hub.groups[g.id].text}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.slugs.map((slug) => (
                  <GuideCard key={slug} slug={slug} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableGuides(lang).map((slug) => (
              <GuideCard key={slug} slug={slug} level={2} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
