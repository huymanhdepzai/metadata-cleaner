import { fmt, tr, useT } from '../i18n';
import { useJobStore } from '../store/useJobStore';
import { Icon } from './ui';

export function RejectionList() {
  const t = useT();
  const rejections = useJobStore((s) => s.rejections);
  const dismiss = useJobStore((s) => s.dismissRejection);
  const clear = useJobStore((s) => s.clearRejections);

  if (rejections.length === 0) return null;

  return (
    <section className="rounded-2xl border border-rose-200 bg-rose-50 p-4" role="alert">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-rose-800">
          <Icon name="alert" className="h-4 w-4" />
          {fmt(t.rejections.title, { count: rejections.length })}
        </h2>
        <button onClick={clear} className="text-xs font-medium text-rose-700 hover:underline">
          {t.rejections.hideAll}
        </button>
      </div>
      <ul className="space-y-1">
        {rejections.map((r) => (
          <li key={r.id} className="flex items-start justify-between gap-3 text-sm text-rose-700">
            <span className="min-w-0">
              <bdi className="font-medium break-all">{r.name}</bdi> — {tr(t, r.reason)}
            </span>
            <button onClick={() => dismiss(r.id)} className="shrink-0 text-rose-400 hover:text-rose-700" aria-label={t.rejections.hide}>
              <Icon name="x" className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
