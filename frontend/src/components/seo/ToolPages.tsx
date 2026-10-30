import type { ReactNode } from 'react';
import {
  FEATURED_TOOL_CARD,
  HOME_SECTIONS,
  isGuideAvailable,
  TOOL_CARDS,
  TOOL_GROUPS,
  type ToolCardId, type ToolCardTarget, type ToolSlug } from '../../content/seo';
import { toolFaq } from '../../content/tools/types';
import { fmt, tr, useI18n, useT } from '../../i18n';
import type { LangCode } from '../../i18n/languages';
import { HOME, pathFor, TOOLS_INDEX, useHref } from '../../router';
import { useJobStore } from '../../store/useJobStore';
import type { Job } from '../../types';
import { formatBytes } from '../../utils/format';
import { gpsCoordinates, isKeptBlock, metadataSize, openStreetMapUrl, privacyRisk, RISK_TONE } from '../../utils/report';
import { Dropzone } from '../Dropzone';
import { FileCard, Thumbnail } from '../FileCard';
import { Link } from '../Link';
import { PrivacyPanel } from '../report/ReportPanels';
import { RejectionList } from '../RejectionList';
import { Badge, Icon, Spinner } from '../ui';

/** Đích của một thẻ công cụ ở ngôn ngữ `lang` (bài chưa có ở ngôn ngữ này → công cụ trên trang chủ). */
function cardHref(lang: LangCode, to: ToolCardTarget): string {
  if (to !== 'home' && 'tool' in to) return pathFor(lang, { name: 'tool', slug: to.tool });
  if (to !== 'home' && isGuideAvailable(to.guide, lang)) return pathFor(lang, { name: 'guide', slug: to.guide });
  return `${pathFor(lang, HOME)}#${HOME_SECTIONS.tool}`;
}

const CARD_BY_ID = new Map(TOOL_CARDS.map((c) => [c.id as ToolCardId, c]));

/**
 * Một công cụ dạng hàng ngang: biểu tượng · tên + mô tả · mũi tên. Cả hàng bấm được (link phủ bằng `after:`).
 * `framed`: hàng có viền riêng (lưới "Công cụ khác"); không thì hàng nằm trong danh sách có đường kẻ chung.
 * `detailed`: thêm câu mô tả chi tiết (trang tổng hợp /tools/); lưới "Công cụ khác" chỉ cần câu ngắn.
 */
function ToolRow({ id, framed = false, detailed = false }: { id: ToolCardId; framed?: boolean; detailed?: boolean }) {
  const lang = useI18n((s) => s.lang);
  const text = useI18n((s) => s.tools?.cards[id]);
  const card = CARD_BY_ID.get(id)!;
  if (!text) return null;
  return (
    <div
      className={`group relative flex h-full items-center gap-4 p-4 transition-colors hover:bg-indigo-50/60 sm:p-5 ${
        framed ? 'rounded-2xl border border-slate-200 bg-surface shadow-sm hover:border-indigo-300' : ''
      }`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
        <Icon name={card.icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-slate-900">
          <Link to={cardHref(lang, card.to)} className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-indigo-600">
            {text.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {text.text}
          {detailed && <> {text.detail}</>}
        </p>
      </div>
      <Icon
        name="chevron"
        className="h-5 w-5 shrink-0 -rotate-90 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-600 rtl:rotate-90 rtl:group-hover:-translate-x-0.5"
      />
    </div>
  );
}

/** Thẻ nổi bật đầu trang tổng hợp: công cụ làm sạch chính trên trang chủ. */
function FeaturedTool() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const text = useI18n((s) => s.tools?.cards[FEATURED_TOOL_CARD]);
  const card = CARD_BY_ID.get(FEATURED_TOOL_CARD)!;
  if (!text) return null;
  return (
    <div className="theme-fixed group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8">
      <div aria-hidden="true" className="absolute -end-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <Icon name={card.icon} className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold sm:text-2xl">
            <Link to={cardHref(lang, card.to)} className="after:absolute after:inset-0 after:rounded-3xl">
              {text.name}
            </Link>
          </h2>
          <p className="mt-1.5 max-w-2xl text-white/85">
            {text.text} {text.detail}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition group-hover:shadow-md sm:self-auto">
          {t.seo.guides.tryTool}
          <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
        </span>
      </div>
    </div>
  );
}

/** Mục "Công cụ khác" cuối trang công cụ: mọi công cụ còn lại, lưới 2 cột các hàng có viền. */
function MoreTools({ exclude }: { exclude: ToolCardId }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {TOOL_CARDS.filter((c) => c.id !== exclude).map((c) => (
        <li key={c.id}>
          <ToolRow id={c.id} framed />
        </li>
      ))}
    </ul>
  );
}

function Breadcrumb({ current }: { current?: string }) {
  const t = useT();
  const home = useHref(HOME);
  const toolsIndex = useHref(TOOLS_INDEX);
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5 [&>li+li]:before:me-1.5 [&>li+li]:before:text-slate-400 [&>li+li]:before:content-['/']">
        <li>
          <Link to={home} className="hover:text-indigo-600">
            {t.seo.guides.home}
          </Link>
        </li>
        <li aria-current={current ? undefined : 'page'}>
          {current ? (
            <Link to={toolsIndex} className="hover:text-indigo-600">
              {t.tools.crumb}
            </Link>
          ) : (
            t.tools.crumb
          )}
        </li>
        {current && <li aria-current="page">{current}</li>}
      </ol>
    </nav>
  );
}

/** Trang tổng hợp /tools/: mọi công cụ của trang, mỗi thẻ dẫn tới trang công cụ hoặc bài có công cụ nhúng. */
export function ToolsIndexPage() {
  const t = useT();
  const hub = useI18n((s) => s.tools?.hub);
  const groups = useI18n((s) => s.tools?.groups);
  if (!hub || !groups) return null;
  return (
    <main>
      <div className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:pt-12">
          <Breadcrumb />
          <p className="mt-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase">{t.tools.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{hub.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{hub.intro}</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <FeaturedTool />
        {TOOL_GROUPS.map((g) => (
          <section key={g.id} aria-labelledby={`group-${g.id}`} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 id={`group-${g.id}`} className="text-2xl font-bold tracking-tight text-slate-900">
                {groups[g.id].title}
              </h2>
              <p className="mt-2 leading-relaxed text-slate-600">{groups[g.id].text}</p>
            </div>
            <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-sm lg:col-span-8">
              {g.cards.map((id) => (
                <li key={id}>
                  <ToolRow id={id} detailed />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

// ---------- Kết quả theo từng công cụ ----------

/** Khung chung cho một ảnh trong công cụ: tên, kích thước, trạng thái phân tích, nút bỏ khỏi danh sách. */
function JobShell({ job, aside, children }: { job: Job; aside?: ReactNode; children?: ReactNode }) {
  const t = useT();
  const removeJob = useJobStore((s) => s.removeJob);
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-sm">
      <div className="flex flex-wrap items-center gap-4 p-4">
        <Thumbnail job={job} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-slate-900" title={job.name}>
            <bdi>{job.name}</bdi>
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            <bdi>
              {job.format.toUpperCase()} · {job.width}×{job.height} · {formatBytes(job.size)}
            </bdi>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {job.status === 'analyzing' ? (
            <Badge tone="info">
              <Spinner className="h-3 w-3" /> {t.status.analyzing}
            </Badge>
          ) : (
            aside
          )}
          <button
            onClick={() => removeJob(job.id)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label={fmt(t.file.removeFromList, { name: job.name })}
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        </div>
      </div>
      {job.status === 'failed' && job.error && (
        <p className="border-t border-rose-100 bg-rose-50 px-4 py-2 text-xs text-rose-700">{fmt(t.report.errProcessing, { detail: job.error })}</p>
      )}
      {job.report && children && <div className="border-t border-slate-100 bg-slate-50/60 p-4">{children}</div>}
    </article>
  );
}

function PrivacyResult({ job }: { job: Job }) {
  const t = useT();
  const report = job.report;
  const risk = report ? privacyRisk(report) : null;
  const gps = report ? gpsCoordinates(report) : null;
  return (
    <JobShell job={job} aside={risk && <Badge tone={RISK_TONE[risk]}>{`${t.tools.riskTitle}: ${t.tools.risk[risk]}`}</Badge>}>
      {report && risk && (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">{t.tools.riskText[risk]}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <PrivacyPanel report={report} />
            <section className="rounded-xl border border-slate-200 bg-surface p-4 text-sm">
              <h4 className="flex items-center gap-2 font-semibold text-slate-900">
                <Icon name="mapPin" className="h-4 w-4 text-slate-500" /> {t.tools.gpsTitle}
              </h4>
              {gps ? (
                <>
                  <p className="mt-3 font-mono text-base text-slate-900" dir="ltr">
                    {gps.lat.toFixed(6)}, {gps.lon.toFixed(6)}
                  </p>
                  <a
                    href={openStreetMapUrl(gps)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
                  >
                    <Icon name="external" className="h-4 w-4" /> {t.tools.openMap}
                  </a>
                  <p className="mt-2 text-xs text-slate-500">{t.tools.mapNote}</p>
                </>
              ) : (
                <p className="mt-3 flex items-center gap-2 text-slate-600">
                  <Icon name="check" className="h-4 w-4 text-emerald-500" /> {t.tools.gpsNone}
                </p>
              )}
            </section>
          </div>
        </div>
      )}
    </JobShell>
  );
}

function SizeResult({ job }: { job: Job }) {
  const t = useT();
  const report = job.report;
  const size = report ? metadataSize(report) : null;
  const risk = report ? privacyRisk(report) : null;
  const blocks = report ? [...report.blocks].sort((a, b) => b.bytes - a.bytes) : [];
  const largest = blocks[0]?.bytes ?? 0;
  return (
    <JobShell job={job} aside={risk && <Badge tone={RISK_TONE[risk]}>{`${t.tools.riskTitle}: ${t.tools.risk[risk]}`}</Badge>}>
      {report && size && (
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-slate-900">
              {fmt(t.tools.sizeShare, { size: formatBytes(size.bytes), percent: size.percent < 0.1 && size.bytes > 0 ? '< 0.1' : size.percent.toFixed(1) })}
            </p>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
              <div className="h-full rounded-full bg-amber-500" style={{ width: `${Math.min(100, Math.max(size.bytes > 0 ? 1 : 0, size.percent))}%` }} />
            </div>
          </div>
          {blocks.length > 0 ? (
            <ul className="space-y-2">
              {blocks.map((b, i) => (
                <li key={i}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="min-w-0 truncate text-slate-700">
                      <bdi>{tr(t, b.name)}</bdi>
                      {isKeptBlock(b) && <span className="ms-2 text-xs text-emerald-700">({t.tools.kept})</span>}
                    </span>
                    <span className="shrink-0 font-medium text-slate-900">{formatBytes(b.bytes)}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                    <div
                      className={`h-full rounded-full ${isKeptBlock(b) ? 'bg-emerald-400' : 'bg-indigo-500'}`}
                      style={{ width: `${largest ? Math.max(2, (b.bytes / largest) * 100) : 0}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="flex items-center gap-2 text-slate-600">
              <Icon name="check" className="h-4 w-4 text-emerald-500" /> {t.tools.sizeNone}
            </p>
          )}
        </div>
      )}
    </JobShell>
  );
}

function ToolResults({ slug }: { slug: ToolSlug }) {
  const t = useT();
  const jobs = useJobStore((s) => s.jobs);
  const clearAll = useJobStore((s) => s.clearAll);
  const home = useHref(HOME);
  if (jobs.length === 0) return <RejectionList />;
  return (
    <div className="space-y-4">
      <RejectionList />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900">{fmt(t.workspace.images, { count: jobs.length })}</p>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={clearAll} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100">
            <Icon name="trash" className="h-4 w-4" /> {t.workspace.clearList}
          </button>
          {/* Ảnh vẫn nằm trong danh sách → trình làm sạch trên trang chủ mở với đúng các ảnh này. */}
          <Link
            to={`${home}#${HOME_SECTIONS.tool}`}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
          >
            <Icon name="sparkles" className="h-4 w-4" /> {t.tools.cleanCta}
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        {jobs.map((job, i) =>
          slug === 'view-metadata' ? (
            <FileCard key={job.id} job={job} defaultOpen={i === 0} readOnly />
          ) : slug === 'privacy-check' ? (
            <PrivacyResult key={job.id} job={job} />
          ) : (
            <SizeResult key={job.id} job={job} />
          ),
        )}
      </div>
    </div>
  );
}

/** Trang một công cụ: tiêu đề, công cụ (thả ảnh → kết quả), cách dùng, hỏi đáp và các công cụ khác. */
export function ToolPage({ slug }: { slug: ToolSlug }) {
  const t = useT();
  const content = useI18n((s) => s.tools?.tools[slug]);
  if (!content) return null;
  return (
    <main>
      <div className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 pt-8 pb-8 sm:pt-12">
          <Breadcrumb current={content.title} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">{content.intro}</p>
          <div className="mt-8 rounded-3xl bg-surface p-3 shadow-lg ring-1 ring-slate-200">
            <Dropzone compact />
          </div>
        </div>
      </div>

      <section aria-label={content.title} className="mx-auto max-w-4xl px-4 py-8">
        <ToolResults slug={slug} />
      </section>

      <section aria-labelledby="how" className="mx-auto max-w-4xl px-4 py-8">
        <h2 id="how" className="text-2xl font-bold tracking-tight text-slate-900">
          {t.tools.howTitle}
        </h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-3">
          {content.steps.map((step, i) => (
            <li key={i} className="rounded-2xl border border-slate-200 bg-surface p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">{i + 1}</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {content.guide?.sections.map((s, i) => (
        <section key={i} aria-labelledby={`guide-${i}`} className="mx-auto max-w-4xl px-4 py-8">
          <h2 id={`guide-${i}`} className="text-2xl font-bold tracking-tight text-slate-900">
            {s.title}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">{s.text}</p>
          {s.items && (
            <dl className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-surface">
              {s.items.map((item) => (
                <div key={item.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-slate-900">{item.term}</dt>
                  <dd className="text-sm leading-relaxed text-slate-600">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}

      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-4 py-8">
        <h2 id="faq" className="text-2xl font-bold tracking-tight text-slate-900">
          {t.tools.faqTitle}
        </h2>
        <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-surface">
          {toolFaq(content).map((f) => (
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

      <section aria-labelledby="more-tools" className="mx-auto max-w-4xl px-4 py-12">
        <h2 id="more-tools" className="mb-5 text-2xl font-bold tracking-tight text-slate-900">
          {t.tools.more}
        </h2>
        <MoreTools exclude={slug} />
      </section>
    </main>
  );
}
