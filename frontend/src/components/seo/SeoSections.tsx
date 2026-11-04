import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import {
  FORMAT_ROWS,
  availableGuides,
  GUIDE_TAGS,
  HOME_GUIDE_COUNT,
  HOME_SECTIONS,
  isGuideAvailable,
  SITE,
  WHY_ROWS,
  type GuideSlug,
  type Support,
} from '../../content/seo';
import { useGuideContent } from '../../content/guideContent';
import { fmt, useI18n, useT } from '../../i18n';
import { GUIDES_INDEX, pathFor, useHref } from '../../router';
import { BrandMark } from '../BrandMark';
import { Link } from '../Link';
import { Icon, type IconName } from '../ui';
import { CUBE_FACES, FeatureCube } from './FeatureCube';
import { GuideCarousel } from './GuideCarousel';
import { GuideIllustration } from './GuideIllustration';
import { HowItWorksDemo } from './HowItWorksDemo';

/**
 * Thẻ bài viết kiểu blog (tag đỏ → tiêu đề → tóm tắt → "Đọc hướng dẫn"), dẫn sang trang riêng của bài.
 * Dùng ở trang chủ và mục "Bài liên quan". Cả thẻ bấm được nhờ liên kết tiêu đề phủ toàn thẻ (stretched link).
 */
export function GuideCard({ slug, compact = false, level = 3 }: { slug: GuideSlug; compact?: boolean; level?: 2 | 3 }) {
  const guide = useGuideContent(slug);
  const href = useHref({ name: 'guide', slug });
  if (!guide) return null;
  // Cấp heading theo ngữ cảnh: trang tổng hợp bài (ngay dưới H1) dùng h2 để không nhảy cấp H1 → H3.
  const Heading = level === 2 ? 'h2' : 'h3';
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div className="aspect-[16/9] overflow-hidden border-b border-slate-200">
        <GuideIllustration slug={slug} className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="self-start rounded-md bg-rose-50 px-2.5 py-1 text-xs font-bold tracking-wide text-rose-700 uppercase ring-1 ring-rose-200 ring-inset">
          {GUIDE_TAGS[slug]}
        </span>
        <Heading className={`mt-4 leading-snug font-bold tracking-tight text-slate-900 ${compact ? 'text-lg' : 'text-xl'}`}>
          <Link to={href} className="transition-colors group-hover:text-indigo-600 after:absolute after:inset-0 after:rounded-2xl">
            {guide.title}
          </Link>
        </Heading>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{guide.summary[0]}</p>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div data-reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  );
}

export function HowItWorks() {
  const { how } = useT().seo;
  return (
    <section id={HOME_SECTIONS.how} className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={how.eyebrow} title={how.title} text={how.text} />
        <div data-reveal>
          <HowItWorksDemo />
        </div>
      </div>
    </section>
  );
}

/** Icon + màu cho nút chọn tính năng, theo đúng thứ tự `seo.features.items` ở mọi ngôn ngữ. */
const FEATURE_STYLES: { icon: IconName; tile: string }[] = [
  { icon: 'lock', tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100' },
  { icon: 'photo', tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
  { icon: 'sparkles', tile: 'bg-violet-50 text-violet-600 ring-violet-100' },
  { icon: 'shield', tile: 'bg-rose-50 text-rose-600 ring-rose-100' },
  { icon: 'layers', tile: 'bg-amber-50 text-amber-600 ring-amber-100' },
  { icon: 'desktop', tile: 'bg-sky-50 text-sky-600 ring-sky-100' },
];

/** Thời gian mỗi mặt được giữ khi hộp tự xoay (ms). */
const FEATURE_CYCLE_MS = 2500;

/**
 * Tính năng hiển thị trên sáu mặt của một hộp 3D (FeatureCube): bấm tên tính năng hoặc kéo hộp để xoay.
 * Hộp tự chuyển mặt khi đang nằm trong màn hình, dừng hẳn khi người dùng tự thao tác. Cả sáu mặt đều nằm sẵn
 * trong HTML prerender (h3 + đoạn mô tả), nên nội dung vẫn được index như các thẻ cũ.
 */
export function Features() {
  const { features } = useT().seo;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const count = Math.min(features.items.length, CUBE_FACES.length);

  useEffect(() => {
    const section = sectionRef.current;
    if (!auto || !section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.4 });
    observer.observe(section);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden) setActive((i) => (i + 1) % count);
    }, FEATURE_CYCLE_MS);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [auto, count]);

  const select = (index: number) => {
    setAuto(false);
    setActive(index);
  };

  const faces = features.items.slice(0, count).map((f) => (
    <div className="flex h-full flex-col justify-center overflow-hidden border border-slate-200 bg-surface p-6 shadow-xl shadow-slate-900/10 sm:p-7">
      <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{f.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
    </div>
  ));

  return (
    <section ref={sectionRef} id={HOME_SECTIONS.features} className="scroll-mt-20 overflow-x-clip py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} />
        <div data-reveal className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <FeatureCube
            faces={faces}
            active={active}
            onActiveChange={select}
            label={features.title}
            className="py-10 [--cube-scale:0.78] [--cube:18.5rem] sm:py-14 sm:[--cube-scale:1] sm:[--cube:21rem] lg:py-16"
          />
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {features.items.slice(0, count).map((f, i) => {
              const s = FEATURE_STYLES[i % FEATURE_STYLES.length];
              const on = i === active;
              return (
                <li key={i}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => select(i)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-start text-sm font-semibold transition ${
                      on
                        ? 'border-indigo-200 bg-surface text-slate-900 shadow-md ring-1 ring-indigo-100'
                        : 'border-transparent text-slate-600 hover:bg-surface hover:text-slate-900'
                    }`}
                  >
                    <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1 ${s.tile}`}>
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <span className="leading-snug">{f.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Ô đánh giá: vòng tròn biểu tượng + nhãn. `strong` = cột của chúng ta (vòng tròn đặc, nổi bật hơn). */
function SupportMark({ value, labels, strong = false }: { value: Support; labels: Record<Support, string>; strong?: boolean }) {
  const ring = {
    yes: strong ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/40' : 'bg-emerald-100 text-emerald-700',
    partial: 'bg-amber-100 text-amber-700',
    no: 'bg-rose-100 text-rose-700',
  }[value];
  const text = { yes: 'text-emerald-700', partial: 'text-amber-700', no: 'text-rose-700' }[value];
  return (
    <span className={`inline-flex items-center gap-2 text-sm ${strong ? 'font-bold' : 'font-medium'} ${text}`}>
      <span aria-hidden="true" className={`grid shrink-0 place-items-center rounded-full ${strong ? 'h-7 w-7' : 'h-6 w-6'} ${ring}`}>
        {value === 'yes' ? (
          <Icon name="tick" className={strong ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        ) : value === 'no' ? (
          <Icon name="x" className="h-3.5 w-3.5" />
        ) : (
          <span className="text-sm leading-none font-bold">~</span>
        )}
      </span>
      {labels[value]}
    </span>
  );
}

/** Biểu tượng cho từng tiêu chí của bảng "Vì sao chọn" (cùng thứ tự với WHY_ROWS). */
const WHY_ICONS = ['lock', 'photo', 'sparkles', 'layers', 'chart', 'download', 'bolt'] as const;

/** "Vì sao chọn …?": bảng so sánh với công cụ online thông thường và cách chụp màn hình / lưu lại. */
export function WhyChoose() {
  const { why } = useT().seo;
  return (
    <section id={HOME_SECTIONS.why} className="scroll-mt-20 bg-gradient-to-b from-indigo-50/70 to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow={why.eyebrow} title={fmt(why.title, { name: SITE.name })} text={why.text} />
        {/*
          Một bảng duy nhất (không lặp nội dung trong HTML). Điện thoại: mỗi hàng hiển thị thành một thẻ, ba cách làm
          xếp dọc; tên cột lấy từ data-label qua CSS. Màn hình rộng: bảng bình thường.
        */}
        <div
          data-reveal
          className="sm:overflow-x-auto sm:rounded-3xl sm:border sm:border-slate-200 sm:bg-surface sm:p-2 sm:shadow-xl sm:shadow-indigo-900/5"
        >
          <table className="w-full border-separate border-spacing-0 text-start text-sm sm:min-w-[680px]">
            <thead className="max-sm:sr-only">
              <tr>
                <th scope="col" className="px-5 pt-5 pb-4 text-start align-bottom text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  {why.columns.feature}
                </th>
                {/* Cột của chúng ta: đầu cột gradient + logo + điểm 7/7, cả cột có viền tím. */}
                <th scope="col" className="w-[21%] rounded-t-2xl bg-gradient-to-br from-indigo-600 to-violet-600 px-4 pt-5 pb-4 text-center text-white">
                  <span className="flex flex-col items-center gap-2">
                    <BrandMark className="h-9 w-9 rounded-xl ring-2 ring-white/30" gradientId="why-brand" />
                    <span className="font-brand text-sm leading-tight font-extrabold">{SITE.name}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-bold ring-1 ring-white/25">
                      <Icon name="tick" className="h-3 w-3" />
                      {WHY_ROWS.filter((r) => r[0] === 'yes').length}/{WHY_ROWS.length}
                    </span>
                  </span>
                </th>
                {[why.columns.online, why.columns.screenshot].map((label) => (
                  <th key={label} scope="col" className="w-[19%] px-4 pt-5 pb-4 text-center align-bottom text-sm font-semibold text-slate-600">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="max-sm:block max-sm:space-y-3">
              {WHY_ROWS.map((cells, i) => {
                const last = i === WHY_ROWS.length - 1;
                const line = last ? '' : 'sm:border-b sm:border-slate-100';
                return (
                  <tr
                    key={i}
                    className="group/row max-sm:block max-sm:rounded-2xl max-sm:border max-sm:border-slate-200 max-sm:bg-surface max-sm:p-4 max-sm:shadow-sm"
                  >
                    <th
                      scope="row"
                      className={`text-start font-medium text-slate-800 transition-colors max-sm:mb-3 max-sm:block max-sm:font-semibold max-sm:text-slate-900 sm:rounded-s-xl sm:px-5 sm:py-4 sm:group-hover/row:bg-slate-50 ${line}`}
                    >
                      <span className="flex items-center gap-3">
                        <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 ring-inset">
                          <Icon name={WHY_ICONS[i]} className="h-[18px] w-[18px]" />
                        </span>
                        {why.rows[i]}
                      </span>
                    </th>
                    {cells.map((value, c) => (
                      <td
                        key={c}
                        data-label={[SITE.name, why.columns.online, why.columns.screenshot][c]}
                        className={`max-sm:mt-2 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-3 max-sm:rounded-lg max-sm:px-3 max-sm:py-2 max-sm:before:min-w-0 max-sm:before:content-[attr(data-label)] sm:px-4 sm:py-4 sm:text-center ${
                          c === 0
                            ? `bg-indigo-50/70 max-sm:bg-indigo-50 max-sm:font-semibold max-sm:text-indigo-700 sm:border-x-2 sm:border-indigo-200 ${last ? 'sm:rounded-b-2xl sm:border-b-2' : 'sm:border-b sm:border-b-indigo-100'}`
                            : `max-sm:text-slate-600 sm:group-hover/row:bg-slate-50 ${c === 2 ? 'sm:rounded-e-xl' : ''} ${line}`
                        }`}
                      >
                        <SupportMark value={value} labels={why.legend} strong={c === 0} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** Tên định dạng: liên kết tới landing page của định dạng nếu ngôn ngữ hiện tại có trang đó (liên kết nội bộ cho SEO). */
function FormatName({ row }: { row: (typeof FORMAT_ROWS)[number] }) {
  const lang = useI18n((s) => s.lang);
  if (!row.guide || !isGuideAvailable(row.guide, lang)) return <>{row.format}</>;
  return (
    <Link to={pathFor(lang, { name: 'guide', slug: row.guide })} className="text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-600">
      {row.format}
    </Link>
  );
}

/** Màu huy hiệu cho từng định dạng (khóa = từ đầu của `format`). */
const FORMAT_BADGE: Record<string, string> = {
  JPEG: 'from-amber-400 to-orange-500',
  PNG: 'from-sky-400 to-indigo-500',
  WebP: 'from-emerald-400 to-teal-500',
  GIF: 'from-violet-400 to-fuchsia-500',
  HEIC: 'from-rose-400 to-orange-400',
  AVIF: 'from-indigo-500 to-violet-500',
};

/** Tách "APP1 (EXIF, XMP), APP13 (IPTC)" theo dấu phẩy nằm ngoài ngoặc → từng khối riêng. */
function splitBlocks(value: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of value) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      out.push(cur.trim());
      cur = '';
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

const CELL_LABEL =
  'max-lg:w-full max-lg:before:mb-1.5 max-lg:before:block max-lg:before:text-xs max-lg:before:font-semibold max-lg:before:tracking-wide max-lg:before:text-slate-500 max-lg:before:uppercase max-lg:before:content-[attr(data-label)]';

export function FormatTable() {
  const { formats } = useT().seo;
  return (
    <section id={HOME_SECTIONS.formats} className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={formats.eyebrow} title={formats.title} text={formats.text} />
        {/*
          Một bảng duy nhất (không lặp nội dung trong HTML). Điện thoại/máy tính bảng dọc: mỗi định dạng hiển thị thành
          một thẻ, tên cột lấy từ data-label qua CSS; màn hình rộng: bảng đầy đủ. Mỗi khối metadata là một "chip"
          (danh sách <ul>): đỏ = bị xóa, xanh = được giữ.
        */}
        <div data-reveal className="lg:overflow-x-auto lg:rounded-3xl lg:border lg:border-slate-200 lg:bg-surface lg:shadow-xl lg:shadow-slate-900/5">
          <table className="w-full text-start text-sm lg:min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs tracking-wide text-slate-500 uppercase max-lg:sr-only">
              <tr>
                <th className="w-[19%] px-5 py-3.5 text-start font-semibold">{formats.colFormat}</th>
                <th className="w-[13%] px-4 py-3.5 text-start font-semibold">{formats.colStructure}</th>
                <th className="px-4 py-3.5 text-start font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-rose-600">
                    <Icon name="trash" className="h-4 w-4" /> {formats.colRemoved}
                  </span>
                </th>
                <th className="px-4 py-3.5 text-start font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600">
                    <Icon name="check" className="h-4 w-4" /> {formats.colKept}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="max-lg:grid max-lg:gap-4 sm:max-lg:grid-cols-2 lg:divide-y lg:divide-slate-100" dir="ltr">
              {FORMAT_ROWS.map((r) => {
                const key = r.format.split(/[ /]/)[0];
                return (
                  <tr
                    key={r.format}
                    className="transition-colors max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:gap-x-3 max-lg:gap-y-3 max-lg:rounded-2xl max-lg:border max-lg:border-slate-200 max-lg:bg-surface max-lg:p-4 max-lg:shadow-sm lg:hover:bg-slate-50/70"
                  >
                    <td className="font-semibold whitespace-nowrap text-slate-900 lg:px-5 lg:py-4">
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-[10px] font-extrabold tracking-wide text-white uppercase shadow-sm ${FORMAT_BADGE[key] ?? 'from-slate-400 to-slate-500'}`}
                        >
                          {key}
                        </span>
                        <FormatName row={r} />
                      </span>
                    </td>
                    <td className="lg:px-4 lg:py-4">
                      <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-xs font-medium whitespace-nowrap text-slate-600">{r.structure}</span>
                    </td>
                    {[
                      [formats.colRemoved, r.removed, 'bg-rose-50 text-rose-700 ring-rose-200'],
                      [formats.colKept, r.kept, 'bg-emerald-50 text-emerald-700 ring-emerald-200'],
                    ].map(([label, value, tone]) => (
                      <td key={label} data-label={label} className={`${CELL_LABEL} lg:px-4 lg:py-4`}>
                        <ul className="flex flex-wrap gap-1.5">
                          {splitBlocks(value).map((block) => (
                            <li key={block} className={`rounded-md px-2 py-0.5 font-mono text-xs leading-5 ring-1 ring-inset ${tone}`}>
                              {block}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** Mục bài viết trên trang chủ: chỉ vài bài mới nhất + nút dẫn tới trang tổng hợp /guides/. */
export function Guides() {
  const { guides } = useT().seo;
  const indexHref = useHref(GUIDES_INDEX);
  const lang = useI18n((s) => s.lang);
  return (
    <section id={HOME_SECTIONS.guides} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={guides.eyebrow} title={guides.title} />
        <div data-reveal>
          <GuideCarousel slugs={availableGuides(lang).slice(0, HOME_GUIDE_COUNT)} />
        </div>
        <div data-reveal className="mt-8 text-center">
          <Link
            to={indexHref}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-surface px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-indigo-400 hover:text-indigo-600"
          >
            {guides.viewAll}
            <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { faq, guides } = useT().seo;
  const indexHref = useHref(GUIDES_INDEX);
  const home = useHref({ name: 'home' });
  return (
    <section id={HOME_SECTIONS.faq} className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mx-auto grid max-w-3xl gap-6 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-8">
          <div data-reveal className="space-y-3">
            {faq.items.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-surface transition-colors duration-300 open:border-indigo-200 open:bg-indigo-50/50 open:shadow-sm hover:border-slate-300 open:hover:border-indigo-300"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl px-4 py-4 font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:gap-4 sm:px-5 [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500 tabular-nums transition-colors group-open:bg-indigo-600 group-open:text-white"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="flex-1 text-start">{f.q}</h3>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition group-open:rotate-180 group-open:bg-surface group-open:text-indigo-600 group-open:shadow-sm"
                  >
                    <Icon name="chevron" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="-mt-1 px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:ps-[4.25rem]">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Khối gợi ý bên cạnh (màn hình rộng) / bên dưới (điện thoại): tìm hiểu thêm ở mục Hướng dẫn hoặc dùng thử. */}
          <aside
            data-reveal
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl shadow-indigo-600/20 lg:sticky lg:top-24"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-16 -end-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <span aria-hidden="true" className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <Icon name="document" className="h-6 w-6" />
            </span>
            <p className="relative mt-4 text-lg font-bold">{guides.title}</p>
            <p className="relative mt-2 line-clamp-5 text-sm leading-relaxed text-white/80">{guides.intro}</p>
            <div className="relative mt-5 flex flex-col gap-2.5">
              <Link
                to={indexHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#4338ca] shadow-sm transition hover:bg-white/90"
              >
                {guides.viewAll}
                <Icon name="chevron" className="h-4 w-4 -rotate-90 rtl:rotate-90" />
              </Link>
              <Link
                to={`${home}#${HOME_SECTIONS.tool}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10"
              >
                <Icon name="sparkles" className="h-4 w-4" />
                {guides.tryTool}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/** Ghi vị trí con trỏ trong thẻ vào biến CSS --x/--y cho hiệu ứng viền sáng + đèn rọi chạy theo chuột. */
function trackPointer(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
}

/**
 * "Tuyên bố miễn trừ trách nhiệm": ba thẻ cạnh nhau — công cụ làm được gì (xanh), không làm được gì (đỏ) và trách nhiệm
 * khi sử dụng (cam). Rê chuột: viền phát sáng và đèn rọi chạy theo con trỏ, thẻ nhấc lên, biểu tượng nền xoay về, vạch
 * chia chạy dài ra; từng ý sáng lên khi rê qua. Hiệu ứng chuyển động tắt khi người dùng bật "giảm chuyển động".
 */
export function Disclaimer() {
  const { disclaimer } = useT().seo;
  const groups: {
    title: string;
    items: string[];
    icon: IconName;
    bullet: IconName | null;
    /** rgb của màu nhấn — dùng cho gradient phát sáng (giống nhau ở cả chế độ Sáng/Tối). */
    rgb: string;
    tile: string;
    text: string;
    dot: string;
    row: string;
    line: string;
    shadow: string;
  }[] = [
    {
      ...disclaimer.does,
      icon: 'tick',
      bullet: 'tick',
      rgb: '16 185 129',
      tile: 'from-emerald-400 to-teal-500',
      text: 'text-emerald-600',
      dot: 'bg-emerald-100 text-emerald-600 group-hover/item:bg-emerald-500 group-hover/item:text-white',
      row: 'hover:bg-emerald-50/70',
      line: 'from-emerald-400',
      shadow: 'hover:shadow-emerald-500/10',
    },
    {
      ...disclaimer.cannot,
      icon: 'x',
      bullet: 'x',
      rgb: '244 63 94',
      tile: 'from-rose-400 to-pink-500',
      text: 'text-rose-600',
      dot: 'bg-rose-100 text-rose-600 group-hover/item:bg-rose-500 group-hover/item:text-white',
      row: 'hover:bg-rose-50/70',
      line: 'from-rose-400',
      shadow: 'hover:shadow-rose-500/10',
    },
    {
      ...disclaimer.liability,
      icon: 'alert',
      bullet: null,
      rgb: '245 158 11',
      tile: 'from-amber-400 to-orange-500',
      text: 'text-amber-600',
      dot: 'bg-amber-100 text-amber-600 group-hover/item:bg-amber-500 group-hover/item:text-white',
      row: 'hover:bg-amber-50/70',
      line: 'from-amber-400',
      shadow: 'hover:shadow-amber-500/10',
    },
  ];
  return (
    <section id={HOME_SECTIONS.disclaimer} className="relative isolate scroll-mt-20 overflow-hidden py-16 sm:py-20">
      {/* Hai quầng màu nhạt phía sau các thẻ. */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 -left-24 -z-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={disclaimer.eyebrow} title={disclaimer.title} />
        <div data-reveal="group" className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              onMouseMove={trackPointer}
              style={{ '--x': '50%', '--y': '0%' } as CSSProperties}
              className={`group relative rounded-3xl bg-slate-200 p-px shadow-sm transition duration-500 hover:shadow-2xl motion-safe:hover:-translate-y-1.5 ${g.shadow}`}
            >
              {/* Viền phát sáng theo con trỏ (lộ ra qua khe 1px giữa lớp ngoài và thẻ). */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(260px circle at var(--x) var(--y), rgb(${g.rgb}), transparent 70%)` }}
              />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface">
                {/* Đèn rọi mờ bên trong thẻ. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(420px circle at var(--x) var(--y), rgb(${g.rgb} / 0.09), transparent 60%)` }}
                />
                {/* Dải màu nhạt cố định ở đầu thẻ. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-36"
                  style={{ background: `linear-gradient(to bottom, rgb(${g.rgb} / 0.1), transparent)` }}
                />
                {/* Biểu tượng lớn chìm ở góc dưới, xoay thẳng lại khi rê chuột. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -end-10 -bottom-10 opacity-[0.06] transition duration-700 motion-safe:rotate-12 motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-0 group-hover:opacity-[0.12] ${g.text}`}
                >
                  <Icon name={g.icon} className="h-40 w-40" />
                </span>

                <div className="relative px-6 pt-7">
                  <div className="flex items-start justify-between">
                    <span className="relative">
                      {/* Quầng sáng sau ô biểu tượng. */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-40 blur-md transition duration-500 group-hover:opacity-80 group-hover:blur-lg ${g.tile}`}
                      />
                      <span
                        aria-hidden="true"
                        className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/30 transition-transform duration-500 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6 ${g.tile}`}
                      >
                        <Icon name={g.icon} className="h-6 w-6 stroke-[2.2]" />
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-brand text-3xl leading-none font-extrabold opacity-30 transition-opacity duration-500 group-hover:opacity-60 ${g.text}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{g.title}</h3>
                  {/* Vạch chia: ngắn → chạy hết chiều ngang khi rê chuột. */}
                  <span
                    aria-hidden="true"
                    className={`mt-4 block h-0.5 origin-left scale-x-[0.2] rounded-full bg-gradient-to-r to-transparent transition-transform duration-700 group-hover:scale-x-100 rtl:origin-right ${g.line}`}
                  />
                </div>

                <ul className="relative flex-1 space-y-1 px-3 pt-3 pb-6 text-sm leading-relaxed text-slate-600">
                  {g.items.map((item) => (
                    <li key={item} className={`group/item flex gap-3 rounded-xl px-3 py-2 transition-colors duration-300 ${g.row}`}>
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full transition duration-300 motion-safe:group-hover/item:scale-110 ${g.dot}`}
                      >
                        {g.bullet ? (
                          <Icon name={g.bullet} className="h-3 w-3 stroke-[2.75]" />
                        ) : (
                          <span className="text-[11px] leading-none font-extrabold">!</span>
                        )}
                      </span>
                      <span className="transition-colors duration-300 group-hover/item:text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
