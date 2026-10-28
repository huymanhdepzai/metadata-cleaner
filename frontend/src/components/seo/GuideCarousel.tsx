import { useCallback, useEffect, useRef, useState } from 'react';
import type { GuideSlug } from '../../content/seo';
import { useT } from '../../i18n';
import { Icon } from '../ui';
import { GuideCard } from './SeoSections';

/** Thời gian giữa hai lần tự trượt. */
const AUTOPLAY_MS = 5000;
/** Sau khi người dùng tự thao tác, tạm dừng tự trượt trong khoảng này. */
const RESUME_AFTER_MS = 10000;

/**
 * Băng chuyền bài viết ở trang chủ: vuốt/kéo ngang (CSS scroll-snap, mượt trên cảm ứng), nút trước/sau,
 * chấm vị trí và tự trượt vòng lại. Tự trượt dừng khi rê chuột/focus vào, khi tab bị ẩn, khi người dùng vừa
 * thao tác và khi hệ điều hành bật "giảm chuyển động". Mọi thẻ đều nằm sẵn trong HTML (prerender) nên
 * công cụ tìm kiếm vẫn thấy đủ liên kết tới các bài.
 */
export function GuideCarousel({ slugs }: { slugs: readonly GuideSlug[] }) {
  const { guides } = useT().seo;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedUntil = useRef(0);

  /** Thông số hiện tại của băng: bước trượt (1 thẻ + khoảng cách), hướng (RTL trượt về số âm), vị trí, giới hạn. */
  const metrics = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return null;
    const items = el.children as HTMLCollectionOf<HTMLElement>;
    const step = items.length > 1 ? Math.abs(items[1].offsetLeft - items[0].offsetLeft) : items[0].offsetWidth;
    const dir = getComputedStyle(el).direction === 'rtl' ? -1 : 1;
    const pos = Math.abs(el.scrollLeft);
    const max = el.scrollWidth - el.clientWidth;
    return { el, step, dir, pos, max };
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const m = metrics();
      if (!m) return;
      const target = Math.max(0, Math.min(i, slugs.length - 1));
      m.el.scrollTo({ left: m.dir * Math.min(target * m.step, m.max), behavior: 'smooth' });
    },
    [metrics, slugs.length],
  );

  const step = useCallback(
    (delta: 1 | -1) => {
      const m = metrics();
      if (!m) return;
      const atEnd = m.pos >= m.max - 4;
      const atStart = m.pos <= 4;
      // Vòng lại: hết bên phải → về đầu, đang ở đầu mà bấm lùi → tới cuối.
      if (delta === 1 && atEnd) goTo(0);
      else if (delta === -1 && atStart) goTo(slugs.length - 1);
      else goTo(Math.round(m.pos / m.step) + delta);
    },
    [goTo, metrics, slugs.length],
  );

  /** Người dùng tự thao tác → tạm dừng tự trượt một lúc. */
  const holdAutoplay = () => {
    pausedUntil.current = Date.now() + RESUME_AFTER_MS;
  };

  // Cập nhật chấm đang chọn theo vị trí cuộn (kể cả khi người dùng tự vuốt).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const m = metrics();
        if (!m) return;
        setIndex(m.pos >= m.max - 4 ? slugs.length - 1 : Math.round(m.pos / m.step));
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [metrics, slugs.length]);

  // Tự trượt.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() < pausedUntil.current) return;
      step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, step]);

  const arrow =
    'absolute top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-surface/95 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105 hover:text-indigo-600 sm:grid';

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={guides.title}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <ul
        ref={trackRef}
        onPointerDown={holdAutoplay}
        onWheel={holdAutoplay}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scroll-smooth px-4 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slugs.map((slug, i) => (
          <li
            key={slug}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slugs.length}`}
            className="flex shrink-0 basis-[85%] snap-start sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] [&>article]:w-full"
          >
            <GuideCard slug={slug} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          holdAutoplay();
          step(-1);
        }}
        aria-label={guides.prevPage}
        className={`${arrow} start-2 xl:-start-5`}
      >
        <Icon name="chevron" className="h-5 w-5 rotate-90 rtl:-rotate-90" />
      </button>
      <button
        type="button"
        onClick={() => {
          holdAutoplay();
          step(1);
        }}
        aria-label={guides.nextPage}
        className={`${arrow} end-2 xl:-end-5`}
      >
        <Icon name="chevron" className="h-5 w-5 -rotate-90 rtl:rotate-90" />
      </button>

      {/* Vùng bấm 24×24 px (chuẩn kích thước chạm), chấm hiển thị nhỏ nằm giữa. */}
      <div className="mt-2 flex justify-center">
        {slugs.map((slug, i) => (
          <button
            key={slug}
            type="button"
            onClick={() => {
              holdAutoplay();
              goTo(i);
            }}
            aria-label={`${i + 1} / ${slugs.length}`}
            aria-current={i === index ? 'true' : undefined}
            className="group grid h-6 min-w-6 place-items-center px-1"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-300 group-hover:bg-slate-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
