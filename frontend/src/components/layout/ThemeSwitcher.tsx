import { useEffect, useId, useState } from 'react';
import { useT } from '../../i18n';
import { useTheme, type ThemeMode } from '../../theme';
import { Icon, type IconName } from '../ui';
import { usePopover } from './usePopover';

const MODES: { mode: ThemeMode; icon: IconName }[] = [
  { mode: 'light', icon: 'sun' },
  { mode: 'dark', icon: 'moon' },
  { mode: 'system', icon: 'desktop' },
];

/** Nút chọn chế độ Sáng / Tối / Theo hệ thống, đặt cạnh bộ chọn ngôn ngữ. */
export function ThemeSwitcher() {
  const t = useT();
  const mode = useTheme((s) => s.mode);
  const setMode = useTheme((s) => s.setMode);
  const { open, setOpen, ref } = usePopover<HTMLDivElement>();
  const panelId = useId();
  // HTML prerender không biết lựa chọn đã lưu của người dùng → hiển thị biểu tượng thật sau khi mount để hydrate khớp.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = MODES.find((m) => m.mode === (mounted ? mode : 'system')) ?? MODES[2];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${t.header.theme.label}: ${t.header.theme[mode]}`}
        title={t.header.theme.label}
        className="inline-flex h-[34px] items-center justify-center rounded-lg border border-slate-200 bg-surface px-2 text-slate-600 hover:bg-slate-50"
      >
        <Icon name={current.icon} className="h-4.5 w-4.5" />
      </button>

      {open && (
        <div id={panelId} className="absolute end-0 top-full z-40 mt-2 w-48 rounded-2xl border border-slate-200 bg-surface p-2 shadow-xl">
          <p className="px-2 pt-1 pb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">{t.header.theme.label}</p>
          <ul className="space-y-0.5">
            {MODES.map(({ mode: m, icon }) => {
              const active = m === mode;
              return (
                <li key={m}>
                  <button
                    type="button"
                    onClick={() => {
                      setMode(m);
                      setOpen(false);
                    }}
                    aria-current={active ? 'true' : undefined}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-sm ${
                      active ? 'bg-indigo-50 font-semibold text-indigo-700' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon name={icon} className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{t.header.theme[m]}</span>
                    {active && <Icon name="tick" className="h-4 w-4 shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
