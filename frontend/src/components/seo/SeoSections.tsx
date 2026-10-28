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
import { Link } from '../Link';
import { Icon } from '../ui';
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

export function Features() {
  const { features } = useT().seo;
  return (
    <section id={HOME_SECTIONS.features} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} />
        <div data-reveal="group" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              {/* Tiêu đề kiểu "editorial": serif nghiêng đậm, gạch nhấn gradient bên dưới thay cho ô icon. */}
              <h3 className="font-display text-xl leading-snug font-medium tracking-[0.01em] text-slate-800 italic sm:text-[1.35rem]">{f.title}</h3>
              <span aria-hidden="true" className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportMark({ value, labels }: { value: Support; labels: Record<Support, string> }) {
  const style = {
    yes: 'bg-emerald-100 text-emerald-700',
    partial: 'bg-amber-100 text-amber-700',
    no: 'bg-rose-100 text-rose-700',
  }[value];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>
      {value === 'yes' ? (
        <Icon name="tick" className="h-3.5 w-3.5" />
      ) : value === 'no' ? (
        <span aria-hidden="true" className="text-sm leading-none">✕</span>
      ) : (
        <span aria-hidden="true" className="text-sm leading-none">~</span>
      )}
      {labels[value]}
    </span>
  );
}

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
        <div data-reveal className="sm:overflow-x-auto sm:rounded-2xl sm:border sm:border-slate-200 sm:bg-surface sm:shadow-sm">
          <table className="w-full text-start text-sm sm:min-w-[640px]">
            <thead className="bg-slate-50 text-slate-700 max-sm:sr-only">
              <tr>
                <th scope="col" className="px-5 py-4 text-start font-semibold">
                  {why.columns.feature}
                </th>
                <th scope="col" className="bg-indigo-50 px-5 py-4 text-center font-bold text-indigo-700">
                  {SITE.name}
                </th>
                <th scope="col" className="px-5 py-4 text-center font-semibold">
                  {why.columns.online}
                </th>
                <th scope="col" className="px-5 py-4 text-center font-semibold">
                  {why.columns.screenshot}
                </th>
              </tr>
            </thead>
            <tbody className="max-sm:block max-sm:space-y-3 sm:divide-y sm:divide-slate-200">
              {WHY_ROWS.map((cells, i) => (
                <tr key={i} className="max-sm:block max-sm:rounded-2xl max-sm:border max-sm:border-slate-200 max-sm:bg-surface max-sm:p-4 max-sm:shadow-sm">
                  <th scope="row" className="text-start font-medium text-slate-800 max-sm:mb-3 max-sm:block max-sm:font-semibold max-sm:text-slate-900 sm:px-5 sm:py-3.5">
                    {why.rows[i]}
                  </th>
                  {cells.map((value, c) => (
                    <td
                      key={c}
                      data-label={[SITE.name, why.columns.online, why.columns.screenshot][c]}
                      className={`max-sm:mt-2 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-3 max-sm:rounded-lg max-sm:px-3 max-sm:py-2 max-sm:before:min-w-0 max-sm:before:content-[attr(data-label)] sm:px-5 sm:py-3.5 sm:text-center ${
                        c === 0 ? 'bg-indigo-50/60 max-sm:bg-indigo-50 max-sm:font-semibold max-sm:text-indigo-700' : 'max-sm:text-slate-600'
                      }`}
                    >
                      <SupportMark value={value} labels={why.legend} />
                    </td>
                  ))}
                </tr>
              ))}
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

export function FormatTable() {
  const { formats } = useT().seo;
  return (
    <section id={HOME_SECTIONS.formats} className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={formats.eyebrow} title={formats.title} text={formats.text} />
        {/*
          Một bảng duy nhất (không lặp nội dung trong HTML). Điện thoại/máy tính bảng dọc: mỗi định dạng hiển thị thành
          một thẻ, tên cột lấy từ data-label qua CSS; màn hình rộng: bảng đầy đủ.
        */}
        <div data-reveal className="lg:overflow-x-auto lg:rounded-2xl lg:border lg:border-slate-200">
          <table className="w-full text-start text-sm lg:min-w-[720px]">
            <thead className="bg-slate-50 text-slate-700 max-lg:sr-only">
              <tr>
                <th className="px-4 py-3 text-start font-semibold">{formats.colFormat}</th>
                <th className="px-4 py-3 text-start font-semibold">{formats.colStructure}</th>
                <th className="px-4 py-3 text-start font-semibold">{formats.colRemoved}</th>
                <th className="px-4 py-3 text-start font-semibold">{formats.colKept}</th>
              </tr>
            </thead>
            <tbody className="max-lg:grid max-lg:gap-3 sm:max-lg:grid-cols-2 lg:divide-y lg:divide-slate-100" dir="ltr">
              {FORMAT_ROWS.map((r) => (
                <tr
                  key={r.format}
                  className="max-lg:flex max-lg:flex-wrap max-lg:items-baseline max-lg:justify-between max-lg:gap-x-3 max-lg:gap-y-1 max-lg:rounded-2xl max-lg:border max-lg:border-slate-200 max-lg:bg-surface max-lg:p-4"
                >
                  <td className="font-semibold whitespace-nowrap text-slate-900 max-lg:font-bold lg:px-4 lg:py-3">
                    <FormatName row={r} />
                  </td>
                  <td className="text-slate-600 max-lg:text-xs max-lg:text-slate-500 lg:px-4 lg:py-3">{r.structure}</td>
                  {[
                    [formats.colRemoved, r.removed, 'text-rose-700 max-lg:mt-2'],
                    [formats.colKept, r.kept, 'text-emerald-700 max-lg:mt-1'],
                  ].map(([label, value, tone]) => (
                    <td
                      key={label}
                      data-label={label}
                      className={`${tone} max-lg:w-full max-lg:break-words max-lg:before:mb-0.5 max-lg:before:block max-lg:before:text-xs max-lg:before:font-semibold max-lg:before:tracking-wide max-lg:before:text-slate-500 max-lg:before:uppercase max-lg:before:content-[attr(data-label)] lg:px-4 lg:py-3`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
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
  const { faq } = useT().seo;
  return (
    <section id={HOME_SECTIONS.faq} className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div data-reveal className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faq.items.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-900">
                <h3>{f.q}</h3>
                <Icon name="chevron" className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Tuyên bố miễn trừ trách nhiệm": công cụ làm được gì, không làm được gì, và trách nhiệm khi sử dụng. */
export function Disclaimer() {
  const { disclaimer } = useT().seo;
  const groups = [
    { ...disclaimer.does, marker: 'bg-emerald-500' },
    { ...disclaimer.cannot, marker: 'bg-rose-500' },
    { ...disclaimer.liability, marker: 'bg-amber-500' },
  ];
  return (
    <section id={HOME_SECTIONS.disclaimer} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow={disclaimer.eyebrow} title={disclaimer.title} />
        <div data-reveal className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-surface shadow-sm">
          {groups.map((g) => (
            <div key={g.title} className="p-6">
              <h3 className="font-semibold text-slate-900">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${g.marker}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
