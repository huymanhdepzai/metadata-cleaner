import { useShallow } from 'zustand/react/shallow';
import { fmt, useT } from '../i18n';
import { useJobStore } from '../store/useJobStore';
import { formatBytes } from '../utils/format';
import { FileCard } from './FileCard';
import { RejectionList } from './RejectionList';
import { Icon, Spinner } from './ui';

export function Workspace() {
  const t = useT();
  const jobs = useJobStore((s) => s.jobs);
  const zipProgress = useJobStore((s) => s.zipProgress);
  const actions = useJobStore(
    useShallow((s) => ({ stripAll: s.stripAll, downloadZip: s.downloadZip, clearAll: s.clearAll })),
  );

  let analyzing = 0;
  let pending = 0;
  let processing = 0;
  let completed = 0;
  let failed = 0;
  let bytesRemoved = 0;
  for (const j of jobs) {
    if (j.status === 'analyzing') analyzing++;
    else if (j.status === 'pending') pending++;
    else if (j.status === 'processing') processing++;
    else if (j.status === 'failed') failed++;
    else if (j.status === 'completed') {
      completed++;
      bytesRemoved += j.removed?.reduce((n, r) => n + r.bytes, 0) ?? 0;
    }
  }

  if (jobs.length === 0) return <RejectionList />;

  const working = analyzing + processing > 0;
  const percent = Math.round(((completed + failed) / jobs.length) * 100);
  const counts = [
    analyzing > 0 && fmt(t.workspace.analyzing, { count: analyzing }),
    pending > 0 && fmt(t.workspace.pending, { count: pending }),
    completed > 0 && fmt(t.workspace.completed, { count: completed }),
    failed > 0 && fmt(t.workspace.failed, { count: failed }),
  ].filter(Boolean);

  return (
    <section id="results" className="space-y-4">
      <RejectionList />

      <div className="z-20 rounded-2xl sm:sticky sm:top-[calc(env(safe-area-inset-top,0px)+4.5rem)] border border-slate-200 bg-surface/95 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {fmt(t.workspace.images, { count: jobs.length })}
              {counts.length > 0 && <span className="font-normal text-slate-500"> · {counts.join(' · ')}</span>}
            </p>
            {completed > 0 && (
              <p className="text-xs text-slate-500">{fmt(t.workspace.totalRemoved, { size: formatBytes(bytesRemoved) })}</p>
            )}
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <button
              onClick={actions.clearAll}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-sm whitespace-nowrap sm:px-3 text-slate-600 hover:bg-slate-100 sm:flex-none"
            >
              <Icon name="trash" className="h-4 w-4" /> {t.workspace.clearList}
            </button>
            <button
              onClick={() => void actions.downloadZip()}
              disabled={completed === 0 || working || zipProgress !== null}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 px-2 py-2 text-sm whitespace-nowrap sm:px-3 font-medium sm:flex-none text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon name="download" className="h-4 w-4" />
              {zipProgress !== null ? fmt(t.workspace.zipping, { percent: Math.round(zipProgress) }) : t.workspace.downloadZip}
            </button>
            <button
              onClick={actions.stripAll}
              disabled={pending === 0}
              className="order-first inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 sm:order-none sm:w-auto sm:py-2 text-sm font-bold tracking-wide text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
            >
              {processing > 0 ? <Spinner /> : <Icon name="sparkles" className="h-4 w-4" />}
              {t.workspace.strip}
              {pending > 0 && ` (${pending})`}
            </button>
          </div>
        </div>

        {(processing > 0 || completed > 0) && (
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${percent}%` }} />
          </div>
        )}
      </div>

      <div className="space-y-3">
        {jobs.map((job, i) => (
          <FileCard key={job.id} job={job} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
