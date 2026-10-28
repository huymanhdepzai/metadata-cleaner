import { useId, useState } from 'react';
import { useI18n, useT } from '../../i18n';
import { findLanguage, LANGUAGES } from '../../i18n/languages';
import { switchLanguage } from '../../router';
import type { LangCode } from '../../i18n/languages';
import { Icon, Spinner } from '../ui';
import { FLAGS } from './flags';
import { usePopover } from './usePopover';

/** Cờ 4:3, viền mảnh để cờ nền trắng (Nhật, Phần Lan…) không lẫn vào nền. Trang trí thuần → alt rỗng. */
function Flag({ code, className = '' }: { code: LangCode; className?: string }) {
  return (
    <img
      src={FLAGS[code]}
      alt=""
      width={20}
      height={15}
      loading="lazy"
      decoding="async"
      className={`h-[15px] w-5 shrink-0 rounded-[3px] object-cover ring-1 ring-slate-900/10 ${className}`}
    />
  );
}

/** Bộ chọn ngôn ngữ: nút trên header mở bảng lưới 32 ngôn ngữ (tên viết bằng chính ngôn ngữ đó). */
export function LanguageSwitcher() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const { open, setOpen, ref: rootRef } = usePopover<HTMLDivElement>();
  const [loading, setLoading] = useState<string | null>(null);
  const panelId = useId();

  const choose = async (code: (typeof LANGUAGES)[number]['code']) => {
    setLoading(code);
    try {
      await switchLanguage(code);
    } finally {
      setLoading(null);
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.header.language}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-surface px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <Flag code={lang} />
        <span className="max-w-28 truncate">{findLanguage(lang)?.name}</span>
        <Icon name="chevron" className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          id={panelId}
          // Điện thoại: bám theo khung nhìn (cách mép 1rem) vì nút không nằm sát lề phải; màn hình lớn: thả xuống dưới nút.
          className="fixed inset-x-4 top-[calc(4.5rem+env(safe-area-inset-top,0px))] z-40 rounded-2xl border border-slate-200 bg-surface p-3 shadow-xl sm:absolute sm:inset-x-auto sm:end-0 sm:top-full sm:mt-2 sm:w-[min(36rem,calc(100vw-2rem))]"
        >
          <p className="px-2 pb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">{t.header.language}</p>
          <ul className="grid max-h-[70vh] grid-cols-2 gap-0.5 overflow-y-auto font-system sm:grid-cols-3">
            {LANGUAGES.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    lang={l.code}
                    onClick={() => void choose(l.code)}
                    aria-current={active ? 'true' : undefined}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-start text-sm ${
                      active ? 'bg-indigo-50 font-semibold text-indigo-700' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {/* Chỉ phần chữ mang hướng RTL; bố cục nút luôn theo hướng của trang để mọi ô thẳng hàng. */}
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Flag code={l.code} />
                      <bdi className="truncate" dir={'rtl' in l ? 'rtl' : 'ltr'}>
                        {l.name}
                      </bdi>
                    </span>
                    {loading === l.code ? (
                      <Spinner className="h-3.5 w-3.5" />
                    ) : (
                      active && <Icon name="tick" className="h-4 w-4 shrink-0" />
                    )}
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
