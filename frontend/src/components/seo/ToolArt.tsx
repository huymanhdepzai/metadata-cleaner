import type { ReactNode } from 'react';
import type { ToolCardId } from '../../content/seo';

/**
 * Ảnh minh họa SVG riêng cho từng thẻ công cụ trên trang /tools/ (và lưới "Công cụ khác"): mỗi công cụ một cảnh theo
 * đúng việc nó làm — bảng EXIF dưới kính lúp, ghim GPS bị gạch, biểu đồ dung lượng, nút ComfyUI, tệp ZIP…
 * Vẽ bằng biến màu của bảng màu (var(--color-…)) nên tự đổi theo chế độ Sáng/Tối; chữ trong hình là thuật ngữ kỹ
 * thuật, giống nhau ở mọi ngôn ngữ. Thuần trang trí (aria-hidden) — tên và mô tả công cụ nằm ngay dưới ảnh.
 */
type Hue = 'indigo' | 'sky' | 'rose' | 'amber' | 'violet' | 'emerald';
type Shade = 50 | 100 | 200 | 400 | 500 | 700;
const c = (name: string) => `var(--color-${name})`;
const tone = (hue: Hue) => (shade: Shade) => c(`${hue}-${shade}`);

/** Màu cố định (không đổi theo chế độ Tối) cho thân máy ảnh, nút ComfyUI, huy hiệu "cr". */
const DARK = '#1e293b';
const DARKER = '#0f172a';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

// ---------- Thành phần dùng chung ----------

function Txt({
  x,
  y,
  size = 9,
  fill = c('slate-700'),
  weight,
  mono = true,
  anchor,
  children,
}: {
  x: number;
  y: number;
  size?: number;
  fill?: string;
  weight?: number;
  mono?: boolean;
  anchor?: 'middle' | 'end';
  children: ReactNode;
}) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fontFamily={mono ? MONO : undefined} textAnchor={anchor} fill={fill}>
      {children}
    </text>
  );
}

/** Thẻ nền trắng có bóng đổ nhẹ. */
function Card({ x, y, w, h, r = 10 }: { x: number; y: number; w: number; h: number; r?: number }) {
  return (
    <g>
      <rect x={x + 2} y={y + 4} width={w} height={h} rx={r} fill={c('slate-900')} opacity={0.06} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={c('surface')} stroke={c('slate-200')} />
    </g>
  );
}

/** "Bức ảnh" phong cảnh thu nhỏ (trời, mặt trời, núi). */
function Photo({ x, y, w, h: hh, k, r = 6 }: { x: number; y: number; w: number; h: number; k: (s: Shade) => string; r?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={hh} rx={r} fill={k(200)} />
      <circle cx={x + w * 0.72} cy={y + hh * 0.3} r={Math.min(w, hh) * 0.11} fill={k(400)} />
      <path d={`M${x} ${y + hh} L${x + w * 0.32} ${y + hh * 0.42} L${x + w * 0.52} ${y + hh * 0.68} L${x + w * 0.68} ${y + hh * 0.5} L${x + w} ${y + hh} Z`} fill={k(400)} opacity={0.75} />
      <path d={`M${x} ${y + hh} L${x + w * 0.2} ${y + hh * 0.7} L${x + w * 0.45} ${y + hh} Z`} fill={k(500)} opacity={0.6} />
    </g>
  );
}

/** Nhãn kỹ thuật dạng chip. `bad` = bị xóa (đỏ, gạch ngang), `good` = sạch/giữ lại (xanh). */
function Chip({ x, y, label, kind = 'bad', strike = false, opacity }: { x: number; y: number; label: string; kind?: 'bad' | 'good'; strike?: boolean; opacity?: number }) {
  const w = label.length * 5.6 + 12;
  const [bg, fg] = kind === 'bad' ? [c('rose-100'), c('rose-700')] : [c('emerald-100'), c('emerald-700')];
  return (
    <g opacity={opacity}>
      <rect x={x} y={y} width={w} height={15} rx={4} fill={bg} />
      <Txt x={x + 6} y={y + 10.5} size={8.5} fill={fg} weight={600}>
        {label}
      </Txt>
      {strike && <line x1={x + 3} y1={y + 7.5} x2={x + w - 3} y2={y + 7.5} stroke={fg} strokeWidth={1.4} />}
    </g>
  );
}

/** Huy hiệu tròn có dấu tích (đã sạch). */
function Check({ x, y, r = 11 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 2.5} fill={c('surface')} />
      <circle cx={x} cy={y} r={r} fill="#10b981" />
      <path d={`M${x - r * 0.42} ${y + r * 0.02} L${x - r * 0.1} ${y + r * 0.34} L${x + r * 0.45} ${y - r * 0.3}`} fill="none" stroke="#fff" strokeWidth={r * 0.22} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/** Huy hiệu tròn có dấu X (bị xóa / bị chặn). */
function Cross({ x, y, r = 11 }: { x: number; y: number; r?: number }) {
  const d = r * 0.36;
  return (
    <g>
      <circle cx={x} cy={y} r={r + 2.5} fill={c('surface')} />
      <circle cx={x} cy={y} r={r} fill="#f43f5e" />
      <path d={`M${x - d} ${y - d} L${x + d} ${y + d} M${x + d} ${y - d} L${x - d} ${y + d}`} stroke="#fff" strokeWidth={r * 0.22} strokeLinecap="round" />
    </g>
  );
}

/** Ngôi sao lấp lánh 4 cánh. */
function Sparkle({ x, y, s = 8, fill }: { x: number; y: number; s?: number; fill: string }) {
  const q = s * 0.28;
  return <path d={`M${x} ${y - s} Q${x + q} ${y - q} ${x + s} ${y} Q${x + q} ${y + q} ${x} ${y + s} Q${x - q} ${y + q} ${x - s} ${y} Q${x - q} ${y - q} ${x} ${y - s} Z`} fill={fill} />;
}

/** Ghim bản đồ. */
function Pin({ x, y, s = 1, fill = '#f43f5e' }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 16 C-4 10 -11 4 -11 -3 A11 11 0 1 1 11 -3 C11 4 4 10 0 16 Z" fill={fill} />
      <circle cx={0} cy={-3} r={4} fill="#fff" />
    </g>
  );
}

/** Nền: màu nhạt của tông + hai vòng tròn trang trí. */
function Backdrop({ k, children }: { k: (s: Shade) => string; children?: ReactNode }) {
  return (
    <g>
      <rect width={320} height={180} fill={k(50)} />
      <circle cx={286} cy={22} r={58} fill={k(100)} />
      <circle cx={26} cy={168} r={44} fill={k(100)} opacity={0.8} />
      {children}
    </g>
  );
}

// ---------- Từng cảnh ----------

const SCENES: Record<ToolCardId, () => ReactNode> = {
  /** Công cụ làm sạch: ảnh còn nhãn EXIF/C2PA → ảnh sạch có dấu tích. */
  cleaner: () => {
    const k = tone('indigo');
    return (
      <Backdrop k={k}>
        <Card x={26} y={34} w={106} h={114} />
        <Photo x={34} y={42} w={90} h={64} k={k} />
        <Chip x={34} y={114} label="EXIF" strike />
        <Chip x={76} y={114} label="C2PA" strike />
        <Chip x={34} y={130} label="prompt" strike />
        <Chip x={138} y={30} label="GPS" opacity={0.55} />
        <Chip x={142} y={140} label="XMP" opacity={0.4} />
        <path d="M142 91 H176" stroke={k(500)} strokeWidth={3} strokeLinecap="round" strokeDasharray="1 7" />
        <path d="M172 83 L182 91 L172 99" fill="none" stroke={k(500)} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <Sparkle x={160} y={68} s={8} fill={k(400)} />
        <Sparkle x={152} y={114} s={5} fill={k(400)} />
        <Card x={188} y={34} w={106} h={114} />
        <Photo x={196} y={42} w={90} h={64} k={k} />
        <Chip x={196} y={116} label="0 metadata" kind="good" />
        <Check x={290} y={38} r={12} />
      </Backdrop>
    );
  },

  /** Xem metadata: cửa sổ báo cáo, các dòng EXIF và kính lúp. */
  'view-metadata': () => {
    const k = tone('sky');
    const rows: [string, string][] = [
      ['Make', 'Canon'],
      ['Model', 'EOS R6'],
      ['GPS', '21.03,105.8'],
      ['Date', '2026:10:31'],
      ['C2PA', 'present'],
    ];
    return (
      <Backdrop k={k}>
        <Card x={22} y={22} w={276} h={140} r={12} />
        <rect x={22} y={22} width={276} height={20} rx={12} fill={c('slate-100')} />
        <rect x={22} y={34} width={276} height={8} fill={c('slate-100')} />
        {['#f87171', '#fbbf24', '#34d399'].map((f, i) => (
          <circle key={f} cx={36 + i * 11} cy={32} r={3.5} fill={f} />
        ))}
        <Photo x={34} y={52} w={90} h={98} k={k} />
        {rows.map(([key, val], i) => (
          <g key={key}>
            {i === 2 && <rect x={136} y={52 + i * 20} width={150} height={18} rx={4} fill={k(100)} />}
            <Txt x={142} y={64 + i * 20} fill={c('slate-500')}>
              {key}
            </Txt>
            <Txt x={180} y={64 + i * 20} fill={c('slate-900')} weight={600}>
              {val}
            </Txt>
          </g>
        ))}
        <circle cx={262} cy={126} r={19} fill={c('surface')} opacity={0.35} stroke={k(700)} strokeWidth={5} />
        <path d="M276 140 L289 153" stroke={k(700)} strokeWidth={8} strokeLinecap="round" />
        <circle cx={256} cy={120} r={5} fill="#fff" opacity={0.6} />
      </Backdrop>
    );
  },

  /** Kiểm tra quyền riêng tư: ảnh có ghim vị trí, khiên cảnh báo và danh sách rủi ro. */
  'privacy-check': () => {
    const k = tone('rose');
    const risks: [string, string][] = [
      ['GPS location', '#f43f5e'],
      ['Camera serial', '#f59e0b'],
      ['Author name', '#f59e0b'],
    ];
    return (
      <Backdrop k={k}>
        <Card x={24} y={28} w={124} h={124} />
        <Photo x={32} y={36} w={108} h={108} k={k} />
        <circle cx={104} cy={86} r={20} fill="#fff" opacity={0.35} />
        <Pin x={104} y={82} s={1.3} />
        <path d="M232 18 L262 29 V52 C262 70 249 80 232 86 C215 80 202 70 202 52 V29 Z" fill="#f43f5e" />
        <path d="M232 18 L262 29 V52 C262 70 249 80 232 86 Z" fill="#e11d48" />
        <rect x={229} y={36} width={6} height={22} rx={3} fill="#fff" />
        <circle cx={232} cy={68} r={3.5} fill="#fff" />
        {risks.map(([label, dot], i) => (
          <g key={label}>
            <Card x={166} y={98 + i * 22} w={130} h={18} r={6} />
            <circle cx={178} cy={107 + i * 22} r={4} fill={dot} />
            <Txt x={188} y={110.5 + i * 22} fill={c('slate-700')} weight={600}>
              {label}
            </Txt>
          </g>
        ))}
      </Backdrop>
    );
  },

  /** Dung lượng metadata: thanh tỉ lệ điểm ảnh / metadata, cột theo khối và vòng tròn phần trăm. */
  'metadata-size': () => {
    const k = tone('amber');
    const bars: [string, number][] = [
      ['EXIF', 30],
      ['XMP', 20],
      ['C2PA', 44],
      ['ICC', 12],
    ];
    const r = 24;
    const len = 2 * Math.PI * r;
    return (
      <Backdrop k={k}>
        <Card x={22} y={24} w={276} h={132} r={12} />
        <Txt x={36} y={46} fill={c('slate-900')} weight={700}>
          photo.jpg · 4.2 MB
        </Txt>
        <rect x={36} y={56} width={248} height={14} rx={7} fill="#7dd3fc" />
        <rect x={214} y={56} width={70} height={14} rx={7} fill="#f59e0b" />
        <rect x={214} y={56} width={10} height={14} fill="#f59e0b" />
        {bars.map(([label, h], i) => (
          <g key={label}>
            <rect x={40 + i * 34} y={136 - h} width={22} height={h} rx={4} fill={i === 2 ? '#f59e0b' : k(400)} opacity={i === 2 ? 1 : 0.75} />
            <Txt x={51 + i * 34} y={148} size={7.5} anchor="middle" fill={c('slate-500')}>
              {label}
            </Txt>
          </g>
        ))}
        <circle cx={236} cy={112} r={r} fill="none" stroke={k(100)} strokeWidth={10} />
        <circle cx={236} cy={112} r={r} fill="none" stroke="#f59e0b" strokeWidth={10} strokeDasharray={`${len * 0.28} ${len}`} strokeLinecap="round" transform="rotate(-90 236 112)" />
        <Txt x={236} y={115} size={9} anchor="middle" fill={c('slate-900')} weight={700}>
          28%
        </Txt>
      </Backdrop>
    );
  },

  /** Xóa EXIF: máy ảnh + bảng thẻ EXIF bị gạch. */
  'remove-exif': () => {
    const k = tone('violet');
    const tags = ['Make', 'Model', 'LensModel', 'ISO 400', 'BodySerial'];
    return (
      <Backdrop k={k}>
        <rect x={52} y={50} width={30} height={14} rx={4} fill={DARKER} />
        <rect x={30} y={60} width={118} height={78} rx={14} fill={DARK} />
        <rect x={30} y={78} width={118} height={8} fill={DARKER} opacity={0.6} />
        <circle cx={89} cy={99} r={28} fill="#334155" stroke={DARKER} strokeWidth={4} />
        <circle cx={89} cy={99} r={18} fill="#a78bfa" />
        <circle cx={89} cy={99} r={9} fill="#6d28d9" />
        <circle cx={83} cy={93} r={4} fill="#fff" opacity={0.7} />
        <circle cx={132} cy={72} r={4} fill="#f87171" />
        <Card x={168} y={26} w={126} h={130} />
        <rect x={180} y={36} width={34} height={15} rx={4} fill={k(100)} />
        <Txt x={186} y={46.5} size={8.5} fill={k(700)} weight={700}>
          EXIF
        </Txt>
        {tags.map((t, i) => (
          <g key={t}>
            <Txt x={182} y={70 + i * 18} fill={c('slate-500')}>
              {t}
            </Txt>
            <line x1={178} y1={67 + i * 18} x2={182 + t.length * 5.6 + 6} y2={67 + i * 18} stroke="#f43f5e" strokeWidth={1.6} />
          </g>
        ))}
        <Cross x={290} y={30} r={11} />
        <Sparkle x={156} y={44} s={7} fill={k(400)} />
      </Backdrop>
    );
  },

  /** Xóa GPS: bản đồ, ghim vị trí bị gạch, ảnh đã sạch. */
  'remove-gps': () => {
    const k = tone('emerald');
    return (
      <Backdrop k={k}>
        <rect x={18} y={18} width={284} height={144} rx={14} fill={k(100)} />
        <path d="M18 70 C90 60 140 110 302 92" stroke={c('surface')} strokeWidth={10} fill="none" />
        <path d="M120 18 C130 70 110 120 132 162" stroke={c('surface')} strokeWidth={8} fill="none" />
        <path d="M18 132 C80 120 200 150 302 128" stroke="#7dd3fc" strokeWidth={9} fill="none" opacity={0.7} />
        <rect x={150} y={28} width={40} height={30} rx={4} fill={k(200)} />
        <rect x={236} y={34} width={46} height={40} rx={4} fill={k(200)} />
        <rect x={34} y={86} width={52} height={28} rx={4} fill={k(200)} />
        <g opacity={0.45}>
          <Pin x={200} y={92} s={1.6} />
        </g>
        <circle cx={200} cy={92} r={30} fill="none" stroke="#e11d48" strokeWidth={5} />
        <line x1={179} y1={113} x2={221} y2={71} stroke="#e11d48" strokeWidth={5} strokeLinecap="round" />
        <Card x={34} y={30} w={74} h={68} r={8} />
        <Photo x={40} y={36} w={62} h={42} k={k} r={4} />
        <Chip x={40} y={81} label="GPS" strike />
        <Check x={104} y={34} r={9} />
      </Backdrop>
    );
  },

  /** Xóa C2PA: ảnh mang huy hiệu "cr", manifest Content Credentials bị cắt. */
  'remove-c2pa': () => {
    const k = tone('sky');
    const rows = ['claim', 'signature', 'ai_generated'];
    return (
      <Backdrop k={k}>
        <Card x={26} y={30} w={128} h={120} />
        <Photo x={34} y={38} w={112} h={104} k={k} />
        <circle cx={140} cy={48} r={15} fill={DARKER} stroke="#fff" strokeWidth={2.5} />
        <Txt x={140} y={52.5} size={12} anchor="middle" fill="#fff" weight={800} mono={false}>
          cr
        </Txt>
        <path d="M156 90 H170" stroke={k(700)} strokeWidth={2.5} strokeDasharray="4 4" />
        <path d="M184 90 H196" stroke={k(700)} strokeWidth={2.5} strokeDasharray="4 4" />
        <path d="M172 82 L182 98 M182 82 L172 98" stroke="#f43f5e" strokeWidth={2.5} strokeLinecap="round" />
        <Card x={198} y={40} w={96} h={100} />
        <rect x={198} y={40} width={96} height={22} rx={10} fill={k(100)} />
        <rect x={198} y={52} width={96} height={10} fill={k(100)} />
        <Txt x={210} y={55} size={9} fill={k(700)} weight={700}>
          C2PA
        </Txt>
        {rows.map((r, i) => (
          <g key={r}>
            <Txt x={208} y={82 + i * 18} size={8} fill={c('slate-500')}>
              {r}
            </Txt>
            <line x1={205} y1={79 + i * 18} x2={210 + r.length * 4.9 + 4} y2={79 + i * 18} stroke="#f43f5e" strokeWidth={1.5} />
          </g>
        ))}
        <Cross x={290} y={42} r={10} />
      </Backdrop>
    );
  },

  /** Xóa prompt AI: sơ đồ nút ComfyUI + khung prompt bị gạch. */
  'remove-prompts': () => {
    const k = tone('indigo');
    const node = (x: number, y: number, w: number, h: number, head: string, label: string) => (
      <g>
        <rect x={x} y={y} width={w} height={h} rx={6} fill={DARK} />
        <rect x={x} y={y} width={w} height={11} rx={6} fill={head} />
        <rect x={x} y={y + 6} width={w} height={5} fill={head} />
        <Txt x={x + 6} y={y + 24} size={7.5} fill="#cbd5e1">
          {label}
        </Txt>
        <rect x={x + 6} y={y + 30} width={w - 18} height={4} rx={2} fill="#475569" />
      </g>
    );
    const lines = ['masterpiece,', '8k, cinematic', 'seed: 1234567', 'steps: 30'];
    return (
      <Backdrop k={k}>
        <path d="M86 52 C104 52 100 84 116 84" stroke="#fbbf24" strokeWidth={2.5} fill="none" />
        <path d="M86 118 C104 118 100 96 116 96" stroke="#38bdf8" strokeWidth={2.5} fill="none" />
        {node(22, 34, 64, 42, '#8b5cf6', 'Checkpoint')}
        {node(22, 100, 64, 42, '#f59e0b', 'CLIP Text')}
        {node(116, 68, 66, 44, '#10b981', 'KSampler')}
        <Card x={196} y={26} w={104} h={98} />
        <Txt x={206} y={44} size={8} fill={k(700)} weight={700}>
          prompt
        </Txt>
        {lines.map((l, i) => (
          <g key={l}>
            <Txt x={206} y={62 + i * 15} size={8} fill={c('slate-500')}>
              {l}
            </Txt>
            <line x1={203} y1={59 + i * 15} x2={208 + l.length * 4.9} y2={59 + i * 15} stroke="#f43f5e" strokeWidth={1.4} />
          </g>
        ))}
        <Chip x={196} y={134} label="parameters" strike />
        <Chip x={116} y={134} label="workflow" strike />
        <Sparkle x={300} y={136} s={7} fill={k(400)} />
      </Backdrop>
    );
  },

  /** Xử lý hàng loạt: lưới ảnh đã sạch chảy vào tệp ZIP. */
  batch: () => {
    const k = tone('amber');
    return (
      <Backdrop k={k}>
        {[0, 1, 2].map((col) =>
          [0, 1].map((row) => {
            const x = 22 + col * 54;
            const y = 34 + row * 58;
            return (
              <g key={`${col}-${row}`}>
                <Card x={x} y={y} w={46} h={46} r={7} />
                <Photo x={x + 4} y={y + 4} w={38} h={38} k={col === 1 ? tone('sky') : k} r={4} />
                <Check x={x + 42} y={y + 4} r={6.5} />
              </g>
            );
          }),
        )}
        <path d="M186 90 H208" stroke={k(700)} strokeWidth={3} strokeLinecap="round" strokeDasharray="1 7" />
        <path d="M204 82 L213 90 L204 98" fill="none" stroke={k(700)} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M222 50 H252 L260 58 H298 V134 H222 Z" fill="#fbbf24" />
        <rect x={222} y={62} width={76} height={72} rx={4} fill="#f59e0b" />
        <path d="M260 62 V134" stroke={DARKER} strokeWidth={6} strokeDasharray="4 4" opacity={0.75} />
        <rect x={252} y={92} width={16} height={18} rx={3} fill={DARKER} />
        <Txt x={260} y={152} size={10} anchor="middle" fill={k(700)} weight={800}>
          .zip
        </Txt>
      </Backdrop>
    );
  },
};

export function ToolArt({ id, className = '' }: { id: ToolCardId; className?: string }) {
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true" focusable="false">
      {SCENES[id]()}
    </svg>
  );
}
