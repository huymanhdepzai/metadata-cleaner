import { useEffect, useRef, useState, type ReactNode } from 'react';
import { fmt, useT } from '../../i18n';
import { HOME_SECTIONS, SITE } from '../../content/seo';
import { BrandMark } from '../BrandMark';
import { Badge, Icon, Spinner } from '../ui';

/**
 * "Video" hướng dẫn ở mục Cách hoạt động: dựng lại giao diện công cụ và diễn hoạt theo kịch bản (con trỏ di chuyển,
 * camera zoom vào nút trước khi bấm) trong khung MacBook — thay cho tệp video thật để chữ luôn theo ngôn ngữ
 * đang xem, theo chế độ Sáng/Tối và gần như không tốn dung lượng. Bốn chương ứng với bốn bước trong `seo.how.steps`.
 */

/** Kích thước logic của màn hình (16:10); cả màn hình được thu phóng cho vừa khung. */
const W = 960;
const H = 600;
const DURATION = 18500;
/** Thời điểm bắt đầu của từng chương (bước). */
const CHAPTERS = [0, 3600, 7000, 11000];

type Ui = 'empty' | 'analyzing' | 'ready' | 'cleaning' | 'cleaned';
type Target = 'choose' | 'report' | 'strip' | 'zip';
type Point = { x: number; y: number };
interface Scene {
  ui: Ui;
  cursor: Target | Point;
  focus: { target: Target; scale: number } | null;
  press: Target | null;
  toast: boolean;
  /** Màn kết (cũng là ảnh bìa trước khi video chạy). */
  end: boolean;
}

const REST: Point = { x: 820, y: 540 };
const EVENTS: [at: number, change: Partial<Scene>][] = [
  [0, { ui: 'empty', cursor: REST, focus: null, press: null, toast: false, end: false }],
  [500, { cursor: 'choose' }],
  [1200, { focus: { target: 'choose', scale: 2.1 } }],
  [2000, { press: 'choose' }],
  [2300, { press: null }],
  [2700, { ui: 'analyzing', focus: null, cursor: { x: 760, y: 520 } }],
  [3600, { ui: 'ready' }],
  // Chỉ zoom ở hai cú bấm chính (Chọn ảnh, Xóa metadata AI) — zoom nhiều dễ gây rối mắt.
  [4300, { cursor: 'report' }],
  [7000, { cursor: 'strip' }],
  [7700, { focus: { target: 'strip', scale: 2.1 } }],
  [8400, { press: 'strip' }],
  [8700, { press: null, ui: 'cleaning' }],
  [9500, { focus: null }],
  [10200, { ui: 'cleaned' }],
  [11000, { cursor: 'zip' }],
  [12000, { press: 'zip' }],
  [12300, { press: null, toast: true }],
  [13600, { cursor: REST }],
  [14200, { end: true }],
];
const SCENES: Scene[] = EVENTS.reduce<Scene[]>((acc, [, change], i) => {
  acc.push({ ...(i > 0 ? acc[i - 1] : ({} as Scene)), ...change });
  return acc;
}, []);

const eventAt = (t: number) => EVENTS.reduce((found, [at], i) => (at <= t ? i : found), 0);
const chapterAt = (t: number) => CHAPTERS.reduce((found, at, i) => (at <= t ? i : found), 0);
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/** Tâm của phần tử trong hệ tọa độ của `root` (offset* không bị ảnh hưởng bởi transform của camera). */
function centerIn(el: HTMLElement, root: HTMLElement): Point {
  let x = el.offsetWidth / 2;
  let y = el.offsetHeight / 2;
  for (let n: HTMLElement | null = el; n && n !== root; n = n.offsetParent as HTMLElement | null) {
    x += n.offsetLeft;
    y += n.offsetTop;
  }
  return { x, y };
}

const FILES = [
  { name: 'midjourney-portrait.png', meta: 'PNG · 1024×1024 · 1.9 MB', out: '1.4 MB', thumb: 'from-fuchsia-400 to-indigo-500', flags: ['ai'] },
  { name: 'IMG_4821.HEIC', meta: 'HEIC · 4032×3024 · 2.6 MB', out: '2.5 MB', thumb: 'from-sky-400 to-emerald-400', flags: ['location', 'time'] },
  { name: 'firefly-poster.jpg', meta: 'JPEG · 2048×1365 · 1.2 MB', out: '0.9 MB', thumb: 'from-amber-300 to-rose-400', flags: ['personal', 'ai'] },
] as const;

export function HowItWorksDemo() {
  const t = useT();
  const { how } = t.seo;

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [k, setK] = useState(0.8);
  const [geo, setGeo] = useState<{ cursor: Point; cam: { x: number; y: number; s: number } }>({
    cursor: REST,
    cam: { x: 0, y: 0, s: 1 },
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const targets = useRef<Partial<Record<Target, HTMLElement | null>>>({});
  const reg = (name: Target) => (el: HTMLElement | null) => {
    targets.current[name] = el;
  };

  const scene = SCENES[idx];
  const chapter = chapterAt(EVENTS[idx][0]);

  const paintProgress = () => {
    CHAPTERS.forEach((start, c) => {
      const end = CHAPTERS[c + 1] ?? DURATION;
      const el = fillRefs.current[c];
      if (el) el.style.transform = `scaleX(${clamp((timeRef.current - start) / (end - start), 0, 1)})`;
    });
  };

  // Tự phát khi cuộn tới (trừ khi người dùng bật "giảm chuyển động"), dừng khi ra khỏi màn hình.
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(true);
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    io.observe(root);
    return () => io.disconnect();
  }, []);

  // Thu phóng màn hình 960×600 cho vừa khung.
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;
    const ro = new ResizeObserver(() => setK(screen.clientWidth / W));
    ro.observe(screen);
    return () => ro.disconnect();
  }, []);

  // Đồng hồ: chỉ đổi state khi sang sự kiện mới; thanh tiến độ được vẽ thẳng vào DOM.
  useEffect(() => {
    if (!playing || !visible) return;
    let raf = 0;
    let last = performance.now();
    setStarted(true);
    const tick = (now: number) => {
      timeRef.current = (timeRef.current + Math.min(now - last, 100)) % DURATION;
      last = now;
      paintProgress();
      setIdx(eventAt(timeRef.current));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, visible]);

  // Vị trí con trỏ và camera theo phần tử đích (đo lại khi đổi cảnh hoặc ngôn ngữ vì độ dài chữ thay đổi).
  useEffect(() => {
    const root = cameraRef.current;
    if (!root) return;
    const at = (c: Target | Point): Point => {
      if (typeof c !== 'string') return c;
      const el = targets.current[c];
      return el ? centerIn(el, root) : REST;
    };
    const cursor = at(scene.cursor);
    let cam = { x: 0, y: 0, s: 1 };
    if (scene.focus) {
      const f = at(scene.focus.target);
      const s = scene.focus.scale;
      cam = { x: clamp(W / 2 - f.x * s, W - W * s, 0), y: clamp(H / 2 - f.y * s, H - H * s, 0), s };
    }
    setGeo({ cursor, cam });
  }, [idx, t]);

  const seek = (c: number) => {
    timeRef.current = CHAPTERS[c];
    setIdx(eventAt(CHAPTERS[c]));
    paintProgress();
    setPlaying(true);
  };

  const press = (name: Target) => (scene.press === name ? 'scale-90 brightness-90' : '');
  const ui = scene.ui;
  const hasFiles = ui !== 'empty';
  const analyzed = hasFiles && ui !== 'analyzing';
  const cleaned = ui === 'cleaned';
  const showEnd = !started || scene.end;

  return (
    <div ref={rootRef}>
      {/* ---------- Khung MacBook ---------- */}
      <div className="mx-auto max-w-4xl">
        <div className="relative mx-auto w-[88%] rounded-t-[1.4rem] rounded-b-md bg-neutral-900 p-[1.4%] pb-[2%] shadow-2xl ring-1 shadow-indigo-900/25 ring-neutral-700">
          <span aria-hidden="true" className="absolute top-[0.55%] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-neutral-600 sm:h-1.5 sm:w-1.5" />
          <div ref={screenRef} className="relative aspect-[16/10] overflow-hidden rounded-[0.35rem] bg-slate-50">
            <div aria-hidden="true" style={{ width: W, height: H, transform: `scale(${k})`, transformOrigin: '0 0' }}>
              <div
                ref={cameraRef}
                className="relative overflow-hidden bg-slate-50 transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{
                  width: W,
                  height: H,
                  transform: `translate(${geo.cam.x}px, ${geo.cam.y}px) scale(${geo.cam.s})`,
                  transformOrigin: '0 0',
                }}
              >
                {/* Thanh trình duyệt */}
                <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-100 px-4" dir="ltr">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="mx-auto flex items-center gap-1.5 rounded-md bg-surface px-24 py-1 text-xs text-slate-500 ring-1 ring-slate-200">
                    <Icon name="lock" className="h-3 w-3" /> {SITE.origin.replace(/^https:\/\//, '')}
                  </span>
                  <span className="w-[52px]" />
                </div>

                {/* Header trang */}
                <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-surface px-6">
                  <BrandMark className="h-6 w-6" gradientId="demo-brand" />
                  <span className="font-brand text-sm font-extrabold text-slate-900">{SITE.name}</span>
                  <span className="ms-auto flex gap-3">
                    {[48, 64, 40, 56].map((w) => (
                      <span key={w} className="h-2 rounded-full bg-slate-200" style={{ width: w }} />
                    ))}
                  </span>
                </div>

                <div className="px-8 pt-5">
                  {!hasFiles ? (
                    <>
                      <p className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
                        {t.hero.title} <span className="text-indigo-600">{t.hero.titleAccent}</span>
                      </p>
                      <p className="mx-auto mt-2 line-clamp-2 max-w-2xl text-center text-sm text-slate-600">{t.hero.subtitle}</p>
                      <div className="mx-auto mt-6 max-w-2xl rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 px-6 py-9 text-center">
                        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
                          <Icon name="upload" className="h-6 w-6" />
                        </span>
                        <p className="mt-3 font-semibold text-slate-900">{t.dropzone.drop}</p>
                        <p className="mt-1 text-sm text-slate-500">{t.dropzone.or}</p>
                        <span
                          ref={reg('choose')}
                          className={`mt-2 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition ${press('choose')}`}
                        >
                          <Icon name="photo" className="h-4 w-4" /> {t.dropzone.choose}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-xl font-extrabold tracking-tight text-slate-900">
                        {t.hero.title} <span className="text-indigo-600">{t.hero.titleAccent}</span>
                      </p>
                      {/* Thanh công cụ */}
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-surface p-3 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0 text-sm">
                            <p className="truncate font-semibold text-slate-900">
                              {fmt(t.workspace.images, { count: 3 })}
                              <span className="font-normal text-slate-500">
                                {' · '}
                                {ui === 'analyzing'
                                  ? fmt(t.workspace.analyzing, { count: 3 })
                                  : cleaned
                                    ? fmt(t.workspace.completed, { count: 3 })
                                    : fmt(t.workspace.pending, { count: 3 })}
                              </span>
                            </p>
                            {cleaned && <p className="text-xs text-slate-500">{fmt(t.workspace.totalRemoved, { size: '1.9 MB' })}</p>}
                          </div>
                          <div className="flex shrink-0 items-center gap-2 text-sm">
                            <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-slate-600">
                              <Icon name="trash" className="h-4 w-4" /> {t.workspace.clearList}
                            </span>
                            <span
                              ref={reg('zip')}
                              className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700 transition ${
                                cleaned ? '' : 'opacity-50'
                              } ${press('zip')}`}
                            >
                              <Icon name="download" className="h-4 w-4" /> {t.workspace.downloadZip}
                            </span>
                            <span
                              ref={reg('strip')}
                              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-bold tracking-wide text-white shadow-sm transition ${
                                ui === 'ready' || ui === 'cleaning' ? 'bg-indigo-600' : 'bg-indigo-300'
                              } ${press('strip')}`}
                            >
                              {ui === 'cleaning' ? <Spinner /> : <Icon name="sparkles" className="h-4 w-4" />}
                              {t.workspace.strip}
                              {ui === 'ready' && ' (3)'}
                            </span>
                          </div>
                        </div>
                        {(ui === 'cleaning' || cleaned) && (
                          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-indigo-500 transition-all duration-[1400ms] ease-out"
                              style={{ width: cleaned ? '100%' : '45%' }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Danh sách ảnh */}
                      <div className="mt-3 space-y-2.5">
                        {FILES.map((f, i) => (
                          <div key={f.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-sm">
                            <div className="flex items-center gap-3 p-3">
                              <span className={`h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br ring-1 ring-slate-200 ${f.thumb}`} />
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-semibold text-slate-900" dir="ltr">
                                  {f.name}
                                </p>
                                <p className="text-xs text-slate-500" dir="ltr">
                                  {f.meta}
                                  {cleaned && <> → {f.out}</>}
                                </p>
                                {analyzed && !cleaned && (
                                  <div className="mt-1 flex gap-1.5">
                                    {f.flags.map((flag) =>
                                      flag === 'ai' ? (
                                        <Badge key={flag} tone="danger" icon="sparkles">
                                          {t.panel.verdict.detected.label}
                                        </Badge>
                                      ) : (
                                        <Badge key={flag} tone="warning" icon={flag === 'location' ? 'mapPin' : flag === 'time' ? 'clock' : 'user'}>
                                          {t.panel[flag]}
                                        </Badge>
                                      ),
                                    )}
                                  </div>
                                )}
                              </div>
                              <DemoStatus ui={ui} />
                            </div>
                            {i === 0 && analyzed && (
                              <div className="grid grid-cols-3 gap-2.5 border-t border-slate-100 bg-slate-50/60 p-3 text-xs">
                                <Panel title={t.panel.privacyTitle} innerRef={reg('report')}>
                                  {(['location', 'personal', 'time'] as const).map((key, r) => (
                                    <Row key={key} label={t.panel[key]}>
                                      {cleaned || r > 0 ? (
                                        <span className="text-emerald-700">{t.panel.notFound}</span>
                                      ) : (
                                        <span className="font-semibold text-amber-700">{fmt(t.panel.found, { count: 4 })}</span>
                                      )}
                                    </Row>
                                  ))}
                                </Panel>
                                <Panel title={t.panel.aiTitle}>
                                  <Badge tone={cleaned ? 'success' : 'danger'} icon="sparkles">
                                    {cleaned ? t.panel.verdict.none.label : t.panel.verdict.detected.label}
                                  </Badge>
                                  <p className={`mt-1.5 truncate ${cleaned ? 'text-slate-400 line-through' : 'text-slate-600'}`}>{t.report.sigC2pa}</p>
                                  <p className={`truncate ${cleaned ? 'text-slate-400 line-through' : 'text-slate-600'}`}>
                                    {fmt(t.report.sigGenerator, { name: 'Midjourney' })}
                                  </p>
                                </Panel>
                                <Panel title={t.panel.fileTitle}>
                                  <Row label={t.panel.dimensions}>1024×1024</Row>
                                  <Row label={t.panel.fileSize}>{cleaned ? '1.4 MB' : '1.9 MB'}</Row>
                                  <p className="mt-1 truncate font-medium text-emerald-700">✓ {t.panel.encodingKept}</p>
                                </Panel>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thông báo tải về kiểu macOS */}
                <div
                  className={`absolute top-12 end-4 flex w-64 items-center gap-3 rounded-xl bg-surface p-3 shadow-xl ring-1 ring-slate-200 transition duration-500 ${
                    scene.toast ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                  }`}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Icon name="download" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-900" dir="ltr">
                      metadata-cleared.zip
                    </span>
                    <span className="mt-1 block h-1 overflow-hidden rounded-full bg-slate-100">
                      <span
                        className={`block h-full rounded-full bg-emerald-500 transition-all duration-700 ${scene.toast ? 'w-full' : 'w-0'}`}
                      />
                    </span>
                  </span>
                </div>

                {/* Con trỏ chuột + gợn sóng khi bấm */}
                <div
                  className="pointer-events-none absolute top-0 left-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: `translate(${geo.cursor.x}px, ${geo.cursor.y}px)` }}
                >
                  {scene.press && (
                    <span className="absolute -top-5 -left-5 h-10 w-10 animate-[demo-ripple_600ms_ease-out_forwards] rounded-full bg-indigo-400/50 ring-2 ring-indigo-500" />
                  )}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className={`-translate-x-[3px] -translate-y-[2px] drop-shadow-md transition-transform ${scene.press ? 'scale-90' : ''}`}
                  >
                    <path d="M4 2.5v17.2l4.6-4.4 2.9 6.6 3-1.3-2.9-6.5h6.3z" fill="#111827" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Màn kết: thương hiệu + từ khóa chính + nút dùng thử. Hiện cả trước khi video chạy (ảnh bìa, có sẵn trong HTML prerender). */}
            <div
              aria-hidden={!showEnd}
              className={`absolute inset-0 z-10 transition duration-700 ${showEnd ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
              <div style={{ width: W, height: H, transform: `scale(${k})`, transformOrigin: '0 0' }}>
                <EndCard visible={showEnd} />
              </div>
            </div>

            {/* Nút phát/tạm dừng (bấm vào màn hình cũng được; trên màn kết chỉ là nút nhỏ ở góc để không che nút dùng thử) */}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? how.pause : how.play}
              title={playing ? how.pause : how.play}
              className={`group absolute z-20 flex items-end justify-end ${showEnd ? 'end-2 bottom-2 sm:end-3 sm:bottom-3' : 'inset-0 p-2 sm:p-3'}`}
            >
              {!playing && !showEnd && <span className="absolute inset-0 bg-slate-900/20" />}
              <span
                className={`relative grid place-items-center rounded-full bg-slate-900/70 text-white shadow-lg ring-1 ring-white/20 backdrop-blur transition ${
                  playing || showEnd
                    ? `h-8 w-8 ${playing && !showEnd ? 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100' : ''}`
                    : 'm-auto h-14 w-14 sm:h-16 sm:w-16'
                }`}
              >
                <svg viewBox="0 0 24 24" className={playing || showEnd ? 'h-4 w-4' : 'h-7 w-7 translate-x-0.5'} fill="currentColor" aria-hidden="true">
                  {playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5.5v13l10.5-6.5z" />}
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Đế máy */}
        <div aria-hidden="true" className="relative h-2.5 rounded-b-2xl bg-gradient-to-b from-neutral-300 to-neutral-400 shadow-md sm:h-4">
          <span className="absolute top-0 left-1/2 h-1/2 w-[14%] -translate-x-1/2 rounded-b-lg bg-neutral-500/40" />
        </div>
      </div>

      {/* ---------- Bốn chương = bốn bước ---------- */}
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {how.steps.map((step, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => seek(i)}
              aria-current={chapter === i ? 'step' : undefined}
              className={`flex h-full w-full flex-col items-start rounded-2xl border p-5 text-start transition ${
                chapter === i ? 'border-indigo-300 bg-indigo-50/60 shadow-sm' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span className="block h-1 w-full overflow-hidden rounded-full bg-slate-200">
                {/* Tiến độ ghi thẳng vào style.transform (không dùng lớp scale-* vì Tailwind v4 đặt thuộc tính `scale` riêng). */}
                <span
                  ref={(el) => {
                    fillRefs.current[i] = el;
                  }}
                  style={{ transform: 'scaleX(0)' }}
                  className="block h-full origin-left rounded-full bg-indigo-600 rtl:origin-right"
                />
              </span>
              <span
                className={`mt-4 grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${
                  chapter === i ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Từ khóa chính của trang (tiếng Anh ở mọi ngôn ngữ — là cụm tìm kiếm/thương hiệu). */
const END_KEYWORDS = ['AI Metadata Cleaner', 'AI Tag Remover'];
const END_FORMATS = 'C2PA · EXIF · GPS · XMP · IPTC · Midjourney · Stable Diffusion · ComfyUI';

function EndCard({ visible }: { visible: boolean }) {
  const t = useT();
  const trust = t.hero.trust;
  // Từng dòng trượt lên lần lượt khi màn kết xuất hiện.
  const rise = (i: number, className: string) => ({
    className: `${className} transition duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
    style: { transitionDelay: visible ? `${150 + i * 120}ms` : '0ms' },
  });
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#4f46e5] via-[#5b3fe0] to-[#7c3aed] px-16 text-center text-white">
      <span aria-hidden="true" className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <span aria-hidden="true" className="absolute -right-24 -bottom-48 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/25 blur-3xl" />

      <div {...rise(0, 'relative flex items-center justify-center gap-3')}>
        <BrandMark className="h-12 w-12 rounded-xl ring-2 ring-white/30" gradientId="end-brand" />
        <span className="font-brand text-2xl font-extrabold tracking-tight">{SITE.name}</span>
      </div>
      <p {...rise(1, 'relative mt-7 text-6xl font-extrabold tracking-tight')}>Free Metadata Cleaner</p>
      <p {...rise(2, 'relative mt-3 text-3xl font-semibold text-[#e0e7ff]')}>{END_KEYWORDS.join(' · ')}</p>
      <ul {...rise(3, 'relative mt-8 flex flex-wrap justify-center gap-2.5')}>
        {[trust.free, trust.noUpload, trust.lossless, trust.batch].map((item) => (
          <li key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-base font-medium ring-1 ring-white/25">
            <Icon name="tick" className="h-4 w-4" /> {item}
          </li>
        ))}
      </ul>
      <p {...rise(4, 'relative mt-5 text-sm tracking-wide text-[#c7d2fe]')} dir="ltr">
        {END_FORMATS}
      </p>
      <div {...rise(5, 'relative mt-8 flex flex-col items-center gap-3')}>
        <a
          href={`#${HOME_SECTIONS.tool}`}
          tabIndex={visible ? undefined : -1}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-lg font-bold text-[#4338ca] shadow-xl shadow-indigo-950/30 transition-transform hover:scale-105"
        >
          <Icon name="sparkles" className="h-5 w-5" /> {t.dropzone.choose}
        </a>
        <span className="text-base font-semibold text-white/80" dir="ltr">
          {SITE.origin.replace(/^https:\/\//, '')}
        </span>
      </div>
    </div>
  );
}

function DemoStatus({ ui }: { ui: Ui }) {
  const t = useT();
  if (ui === 'analyzing' || ui === 'cleaning')
    return (
      <Badge tone="info">
        <Spinner className="h-3 w-3" /> {ui === 'analyzing' ? t.status.analyzing : t.status.processing}
      </Badge>
    );
  if (ui === 'cleaned')
    return (
      <span className="flex items-center gap-2">
        <Badge tone="success">{t.status.completed}</Badge>
        <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
          <Icon name="download" className="h-4 w-4" /> {t.file.download}
        </span>
      </span>
    );
  return <Badge tone="brand">{t.status.pending}</Badge>;
}

function Panel({ title, children, innerRef }: { title: string; children: ReactNode; innerRef?: (el: HTMLElement | null) => void }) {
  return (
    <div ref={innerRef} className="min-w-0 rounded-xl border border-slate-200 bg-surface p-3">
      <p className="mb-2 truncate font-semibold text-slate-900">{title}</p>
      {children}
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="flex justify-between gap-2 py-0.5">
      <span className="truncate text-slate-500">{label}</span>
      <span className="shrink-0 text-slate-700">{children}</span>
    </p>
  );
}
