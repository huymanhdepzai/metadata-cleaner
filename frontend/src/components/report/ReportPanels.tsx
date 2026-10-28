import { useMemo, useState, type ReactNode } from 'react';
import { fmt, tr, useT } from '../../i18n';
import type { AnalysisReport, CheckStatus, Job, MetadataField } from '../../types';
import { formatBytes, formatMegapixels } from '../../utils/format';
import { groupFields, privacySummary, VERDICT_TONE } from '../../utils/report';
import { Badge, Icon, type IconName } from '../ui';

interface PanelProps {
  icon: IconName;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  /** Truyền vào để panel có nút mở/đóng; `summary` hiển thị khi đang đóng. */
  collapse?: { open: boolean; onToggle: () => void; summary?: ReactNode };
}

function Panel({ icon, title, aside, children, collapse }: PanelProps) {
  const open = collapse ? collapse.open : true;
  return (
    <section className="flex flex-col rounded-xl border border-slate-200 bg-surface p-4">
      <header className={`flex flex-wrap items-center justify-between gap-2 ${open ? 'mb-3' : ''}`}>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-100 text-slate-600">
            <Icon name={icon} className="h-4 w-4" />
          </span>
          {title}
        </h3>
        <div className="ms-auto flex shrink-0 items-center gap-1.5 [&>*]:whitespace-nowrap">
          {aside}
          {collapse && (
            <button
              type="button"
              onClick={collapse.onToggle}
              aria-expanded={open}
              aria-label={title}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <Icon name="chevron" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </header>
      {open ? (
        <div className="flex-1 text-sm">{children}</div>
      ) : (
        collapse?.summary && <div className="mt-2 text-xs text-slate-500">{collapse.summary}</div>
      )}
    </section>
  );
}

// ---------- 1. Chi tiết riêng tư ----------

const PRIVACY_ROWS: { key: 'location' | 'personal' | 'time'; icon: IconName }[] = [
  { key: 'location', icon: 'mapPin' },
  { key: 'personal', icon: 'user' },
  { key: 'time', icon: 'clock' },
];

export function PrivacyPanel({ report }: { report: AnalysisReport }) {
  const t = useT();
  const summary = useMemo(() => privacySummary(report), [report]);
  const exposed = PRIVACY_ROWS.filter((r) => summary[r.key].length > 0).length;

  return (
    <Panel
      icon="shield"
      title={t.panel.privacyTitle}
      aside={<Badge tone={exposed ? 'warning' : 'success'}>{exposed ? fmt(t.panel.exposedGroups, { count: exposed }) : t.panel.safe}</Badge>}
    >
      <p className="mb-3 text-xs text-slate-500">{t.panel.privacyQuestion}</p>
      <ul className="space-y-3">
        {PRIVACY_ROWS.map(({ key, icon }) => {
          const items = summary[key];
          return (
            <li key={key}>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 font-medium text-slate-700">
                  <Icon name={icon} className="h-4 w-4 text-slate-400" />
                  {t.panel[key]}
                </span>
                {items.length ? (
                  <Badge tone="warning">{fmt(t.panel.found, { count: items.length })}</Badge>
                ) : (
                  <Badge tone="success">{t.panel.notFound}</Badge>
                )}
              </div>
              {items.length > 0 && (
                <ul className="mt-1.5 space-y-0.5 ps-6 text-xs text-slate-600">
                  {items.slice(0, 3).map((f, i) => (
                    <li key={i} className="truncate" title={`${f.name}: ${f.value}`}>
                      <span className="text-slate-400">{f.name}:</span> <bdi>{f.value}</bdi>
                    </li>
                  ))}
                  {items.length > 3 && <li className="text-slate-400">{fmt(t.panel.more, { count: items.length - 3 })}</li>}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}

// ---------- 2. AI và nguồn gốc ----------

export function AiPanel({ report }: { report: AnalysisReport }) {
  const t = useT();
  const verdict = t.panel.verdict[report.ai.verdict];
  return (
    <Panel icon="sparkles" title={t.panel.aiTitle} aside={<Badge tone={VERDICT_TONE[report.ai.verdict]}>{verdict.label}</Badge>}>
      <p className="mb-3 text-xs text-slate-500">{verdict.description}</p>
      {report.ai.signals.length > 0 ? (
        <ul className="space-y-2">
          {report.ai.signals.map((s, i) => (
            <li key={i} className="flex gap-2">
              <Icon name={s.strong ? 'alert' : 'info'} className={`mt-0.5 h-4 w-4 shrink-0 ${s.strong ? 'text-rose-500' : 'text-amber-500'}`} />
              <span className="min-w-0">
                <span className="block font-medium text-slate-800">{tr(t, s.label)}</span>
                <bdi className="block truncate text-xs text-slate-500" title={tr(t, s.detail)}>
                  {tr(t, s.detail)}
                </bdi>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex items-center gap-2 text-slate-600">
          <Icon name="check" className="h-4 w-4 text-emerald-500" /> {t.panel.noAiSignals}
        </p>
      )}
    </Panel>
  );
}

// ---------- 3. Ảnh và tệp ----------

export function FilePanel({ job, report }: { job: Job; report: AnalysisReport }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const fileSize =
    job.outputSize !== undefined ? `${formatBytes(job.size)} → ${formatBytes(job.outputSize)}` : formatBytes(job.size);
  const rows: [string, string][] = [
    [t.panel.dimensions, `${report.width} × ${report.height} px (${formatMegapixels(report.width, report.height)})`],
    [t.panel.format, `${report.formatLabel} · ${job.mime}`],
    [t.panel.fileSize, fileSize],
    ...report.encoding.map((e): [string, string] => [tr(t, e.label), tr(t, e.value)]),
  ];
  return (
    <Panel
      icon="photo"
      title={t.panel.fileTitle}
      aside={<Badge tone="brand">{t.panel.encodingKept}</Badge>}
      collapse={{
        open,
        onToggle: () => setOpen((v) => !v),
        summary: <bdi>{`${report.width} × ${report.height} px · ${report.formatLabel} · ${fileSize}`}</bdi>,
      }}
    >
      <dl className="space-y-1.5">
        {rows.map(([k, v], i) => (
          <div key={i} className="flex justify-between gap-3">
            <dt className="shrink-0 text-slate-500">{k}</dt>
            <dd className="min-w-0 truncate text-end font-medium text-slate-800">
              <bdi>{v}</bdi>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 rounded-lg bg-indigo-50 px-3 py-2 text-xs text-indigo-800">{t.panel.losslessNote}</p>
    </Panel>
  );
}

// ---------- 4. Toàn bộ metadata ----------

const CATEGORY_CLASS: Record<MetadataField['category'], string> = {
  location: 'text-amber-700',
  personal: 'text-amber-700',
  time: 'text-amber-700',
  ai: 'text-rose-700',
  technical: '',
};

export function MetadataTable({ report }: { report: AnalysisReport }) {
  const t = useT();
  const [query, setQuery] = useState('');
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const fields = q ? report.fields.filter((f) => `${f.group} ${f.name} ${f.value}`.toLowerCase().includes(q)) : report.fields;
    return groupFields(fields);
  }, [report, query]);

  return (
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">{t.panel.blocksTitle}</h4>
        {report.blocks.length ? (
          <div className="flex flex-wrap gap-1.5">
            {report.blocks.map((b, i) => (
              <span key={i} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">
                <bdi>{tr(t, b.name)}</bdi> <span className="text-slate-400">· {formatBytes(b.bytes)}</span>
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">{t.panel.noBlocks}</p>
        )}
      </div>

      {report.fields.length > 0 && (
        <div>
          <div className="relative mb-2 max-w-xs">
            <Icon name="search" className="pointer-events-none absolute start-2.5 top-2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={fmt(t.panel.search, { count: report.fields.length })}
              className="w-full rounded-lg border border-slate-300 bg-surface py-1.5 ps-8 pe-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="max-h-96 overflow-auto rounded-lg border border-slate-200">
            <table className="w-full text-start text-xs">
              <tbody>
                {groups.map(([group, fields]) => (
                  <GroupRows key={group} group={group} fields={fields} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupRows({ group, fields }: { group: string; fields: MetadataField[] }) {
  const t = useT();
  return (
    <>
      <tr className="sticky top-0 bg-slate-50">
        <th colSpan={3} className="px-3 py-1.5 text-start font-semibold text-slate-700">
          {group} <span className="font-normal text-slate-400">({fields.length})</span>
        </th>
      </tr>
      {fields.map((f, i) => (
        <tr key={i} className="border-t border-slate-100 align-top">
          <td className="w-48 px-3 py-1.5 font-mono text-slate-600" dir="ltr">
            {f.name}
          </td>
          <td className="px-3 py-1.5 break-all whitespace-pre-wrap text-slate-800">
            <bdi>{f.value}</bdi>
          </td>
          <td className={`w-20 px-3 py-1.5 text-end font-medium ${CATEGORY_CLASS[f.category]}`}>
            {f.category === 'technical' ? '' : t.panel.category[f.category]}
          </td>
        </tr>
      ))}
    </>
  );
}

// ---------- 5. Những gì trình duyệt đã kiểm tra ----------

const CHECK_ICON: Record<CheckStatus, { icon: IconName; className: string }> = {
  pass: { icon: 'check', className: 'text-emerald-500' },
  warn: { icon: 'alert', className: 'text-amber-500' },
  info: { icon: 'info', className: 'text-sky-500' },
};

export function ChecksList({ report }: { report: AnalysisReport }) {
  const t = useT();
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {report.checks.map((c, i) => (
        <li key={i} className="flex gap-2 text-sm">
          <Icon name={CHECK_ICON[c.status].icon} className={`mt-0.5 h-4 w-4 shrink-0 ${CHECK_ICON[c.status].className}`} />
          <span>
            <span className="font-medium text-slate-800">{tr(t, c.label)}</span>
            <span className="block text-xs text-slate-500">{tr(t, c.result)}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

// ---------- Kết quả sau khi xóa ----------

export function ResultBanner({ job }: { job: Job }) {
  const t = useT();
  if (!job.after || !job.removed) return null;
  const after = privacySummary(job.after);
  const removedBytes = job.removed.reduce((n, r) => n + r.bytes, 0);
  const checks: [string, boolean][] = [
    [t.panel.location, after.location.length === 0],
    [t.panel.personal, after.personal.length === 0],
    [t.panel.time, after.time.length === 0],
    [t.panel.aiSignals, job.after.ai.verdict === 'none'],
  ];
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
        <Icon name="check" className="h-5 w-5 shrink-0" />
        {fmt(t.panel.resultTitle, { count: job.removed.length, size: formatBytes(removedBytes) })}
      </p>
      <div className="mt-2 flex flex-wrap gap-2 ps-7">
        {checks.map(([label, clean]) => (
          <Badge key={label} tone={clean ? 'success' : 'warning'} icon={clean ? 'check' : 'alert'}>
            {label}: {clean ? t.panel.clean : t.panel.remaining}
          </Badge>
        ))}
      </div>
    </div>
  );
}
