import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { fmt, useT } from '../i18n';
import { useJobStore } from '../store/useJobStore';
import type { Job, JobStatus } from '../types';
import { formatBytes, formatMegapixels } from '../utils/format';
import { privacySummary, VERDICT_TONE } from '../utils/report';
import { AiPanel, ChecksList, FilePanel, MetadataTable, PrivacyPanel, ResultBanner } from './report/ReportPanels';
import { Badge, Icon, Spinner, type Tone } from './ui';

const STATUS_TONE: Record<JobStatus, Tone> = {
  analyzing: 'info',
  pending: 'brand',
  processing: 'info',
  completed: 'success',
  failed: 'danger',
};

/** Ảnh xem trước nhỏ — chỉ với ảnh trình duyệt giải mã được và không quá nặng, để tránh tốn RAM. */
const THUMB_FORMATS = new Set(['jpeg', 'png', 'webp', 'gif', 'avif']);
const THUMB_MAX_PIXELS = 16_000_000;

export function Thumbnail({ job }: { job: Job }) {
  const canPreview = THUMB_FORMATS.has(job.format) && job.width * job.height <= THUMB_MAX_PIXELS;
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!canPreview) return;
    const u = URL.createObjectURL(job.file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [job.file, canPreview]);

  return (
    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
      {url ? (
        <img src={url} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
      ) : (
        <span className="text-[10px] font-bold text-slate-500">{job.format.toUpperCase()}</span>
      )}
    </div>
  );
}

function Collapsible({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 select-none">
        <span>
          <span className="text-sm font-semibold text-slate-900">{title}</span>
          {subtitle && <span className="mt-0.5 block text-xs text-slate-500 sm:ms-2 sm:mt-0 sm:inline">{subtitle}</span>}
        </span>
        <Icon name="chevron" className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="border-t border-slate-100 px-4 py-4">{children}</div>
    </details>
  );
}

/** `readOnly`: chỉ xem báo cáo (công cụ Xem metadata) — ẩn nút xóa/tải về và trạng thái "Sẵn sàng làm sạch". */
export function FileCard({ job, defaultOpen, readOnly = false }: { job: Job; defaultOpen: boolean; readOnly?: boolean }) {
  const t = useT();
  const [open, setOpen] = useState(defaultOpen);
  const stripOne = useJobStore((s) => s.stripOne);
  const downloadOne = useJobStore((s) => s.downloadOne);
  const removeJob = useJobStore((s) => s.removeJob);
  const retry = useJobStore((s) => s.retry);

  const report = job.report;
  const privacy = useMemo(() => (report ? privacySummary(report) : null), [report]);
  const busy = job.status === 'analyzing' || job.status === 'processing';

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
              {job.format.toUpperCase()} · {job.width}×{job.height} ({formatMegapixels(job.width, job.height)}) · {formatBytes(job.size)}
              {job.outputSize !== undefined && <> → {formatBytes(job.outputSize)}</>}
            </bdi>
          </p>
          {report && privacy && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {privacy.location.length > 0 && <Badge tone="warning" icon="mapPin">{t.panel.location}</Badge>}
              {privacy.personal.length > 0 && <Badge tone="warning" icon="user">{t.panel.personal}</Badge>}
              {privacy.time.length > 0 && <Badge tone="warning" icon="clock">{t.panel.time}</Badge>}
              <Badge tone={VERDICT_TONE[report.ai.verdict]} icon="sparkles">
                {t.panel.verdict[report.ai.verdict].label}
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!(readOnly && job.status !== 'analyzing' && job.status !== 'failed') && (
            <Badge tone={STATUS_TONE[job.status]}>
              {busy && <Spinner className="h-3 w-3" />}
              {t.status[job.status]}
            </Badge>
          )}

          {!readOnly && job.status === 'pending' && (
            <button
              onClick={() => stripOne(job.id)}
              className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              {t.file.strip}
            </button>
          )}
          {!readOnly && job.status === 'completed' && (
            <button
              onClick={() => downloadOne(job.id)}
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              <Icon name="download" className="h-4 w-4" /> {t.file.download}
            </button>
          )}
          {job.status === 'failed' && (
            <button
              onClick={() => retry(job.id)}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Icon name="retry" className="h-4 w-4" /> {t.file.retry}
            </button>
          )}
          {report && (
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.file.hideReport : t.file.showReport}
              title={open ? t.file.hideReport : t.file.showReport}
              className="inline-flex items-center rounded-lg p-1.5 text-slate-600 hover:bg-slate-100"
            >
              <Icon name="chevron" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
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
        <p className="border-t border-rose-100 bg-rose-50 px-4 py-2 text-xs text-rose-700">
          {fmt(t.report.errProcessing, { detail: job.error })}
        </p>
      )}

      {open && report && (
        <div className="space-y-4 border-t border-slate-100 bg-slate-50/60 p-4">
          {!readOnly && job.status === 'completed' && <ResultBanner job={job} />}
          <div className="grid gap-4 lg:grid-cols-3">
            <PrivacyPanel report={report} />
            <AiPanel report={report} />
            <FilePanel job={job} report={report} />
          </div>
          <Collapsible
            title={t.panel.allMetadata}
            subtitle={fmt(t.panel.allMetadataSub, { fields: report.fields.length, blocks: report.blocks.length })}
          >
            <MetadataTable report={report} />
          </Collapsible>
          <Collapsible title={t.panel.checksTitle} subtitle={fmt(t.panel.checksSub, { count: report.checks.length })}>
            <ChecksList report={report} />
          </Collapsible>
        </div>
      )}
    </article>
  );
}
