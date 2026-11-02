import type { ReactNode } from 'react';
import type { GuideSlug } from '../../content/seo';

/**
 * Ảnh minh họa SVG riêng cho từng bài hướng dẫn: mỗi bài một cảnh khác nhau theo nội dung (bục xếp hạng, cửa sổ
 * Windows/Mac, khung chat, bản đồ GPS, sơ đồ chunk PNG…) thay vì cùng một khuôn "ảnh + nhãn bị gạch".
 * Vẽ bằng biến màu của bảng màu (var(--color-…)) nên tự đổi theo chế độ Sáng/Tối, không cần tải ảnh ngoài.
 * Ảnh chia sẻ (seo/og.tsx) nhúng lại chính SVG này — chỉ dùng các màu có trong PALETTE ở đó, còn lại dùng mã hex.
 * Chữ trong hình là thuật ngữ kỹ thuật, giống nhau ở mọi ngôn ngữ.
 */
export type Hue = 'indigo' | 'rose' | 'amber' | 'emerald' | 'sky' | 'violet';

type Shade = 50 | 100 | 200 | 400 | 500 | 700;
interface Kit {
  hue: Hue;
  h: (shade: Shade) => string;
}
type Backdrop = 'blobs' | 'dots' | 'grid' | 'stripes' | 'dark' | 'plain';

const c = (name: string) => `var(--color-${name})`;
/** Màu cố định (không đổi theo chế độ Tối) cho thân máy, màn hình, cửa sổ ứng dụng tối. */
const DARK = '#0f172a';
const PANEL = '#1f2937';
const PANEL_DEEP = '#111827';
const MUTED = '#475569';
const SOFT = '#cbd5e1';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const CHAR_W = 6.2;

// ---------- Thành phần dùng chung ----------

function Txt({
  x,
  y,
  size = 10,
  fill = c('slate-900'),
  weight,
  mono,
  anchor,
  underline,
  opacity,
  children,
}: {
  x: number;
  y: number;
  size?: number;
  fill?: string;
  weight?: number;
  mono?: boolean;
  anchor?: 'middle' | 'end';
  underline?: boolean;
  opacity?: number;
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fontFamily={mono ? MONO : undefined}
      textAnchor={anchor}
      textDecoration={underline ? 'underline' : undefined}
      fill={fill}
      opacity={opacity}
    >
      {children}
    </text>
  );
}

/** Một "bức ảnh" phong cảnh thu nhỏ (trời, mặt trời, núi). `flip` đảo chiều để các ảnh cạnh nhau không giống hệt. */
function Pic({ x, y, w, h, k, flip = false, r = 5 }: { x: number; y: number; w: number; h: number; k: Kit; flip?: boolean; r?: number }) {
  const px = (f: number) => x + w * (flip ? 1 - f : f);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={k.h(200)} />
      <circle cx={px(0.74)} cy={y + h * 0.3} r={Math.min(w, h) * 0.11} fill={k.h(400)} opacity={0.9} />
      <path
        d={`M${px(0)} ${y + h} L${px(0.32)} ${y + h * 0.42} L${px(0.52)} ${y + h * 0.68} L${px(0.68)} ${y + h * 0.52} L${px(1)} ${y + h} Z`}
        fill={k.h(500)}
        opacity={0.8}
      />
    </g>
  );
}

type Tone = 'removed' | 'kept' | 'info';
const chipW = (text: string) => 22 + text.length * CHAR_W;

/** Khối metadata dạng mã: bị gạch (removed), được giữ (kept), hoặc trung tính theo màu bài (info). */
function Chip({ x, y, text, tone = 'removed', k }: { x: number; y: number; text: string; tone?: Tone; k?: Kit }) {
  const w = chipW(text);
  const [bg, line, fg] =
    tone === 'removed'
      ? [c('rose-50'), c('rose-200'), c('rose-700')]
      : tone === 'kept'
        ? [c('emerald-50'), c('emerald-200'), c('emerald-700')]
        : [k!.h(50), k!.h(200), k!.h(700)];
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={26} rx={8} fill={bg} stroke={line} />
      <text x={11} y={17} fontSize={10.5} fontFamily={MONO} fill={fg}>
        {text}
      </text>
      {tone === 'removed' && <line x1={8} y1={13} x2={w - 8} y2={13} stroke={c('rose-700')} strokeWidth={1.5} opacity={0.7} />}
    </g>
  );
}

/** Dấu tròn: có (xanh), không (đỏ), chưa rõ (vàng, dấu hỏi). */
function Mark({ cx, cy, r = 9, kind }: { cx: number; cy: number; r?: number; kind: 'yes' | 'no' | 'maybe' }) {
  const fill = kind === 'yes' ? c('emerald-500') : kind === 'no' ? c('rose-500') : c('amber-500');
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      {kind === 'yes' && (
        <path
          d={`M${cx - r * 0.45} ${cy} L${cx - r * 0.1} ${cy + r * 0.35} L${cx + r * 0.5} ${cy - r * 0.35}`}
          fill="none"
          stroke="#fff"
          strokeWidth={r * 0.24}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {kind === 'no' && (
        <path
          d={`M${cx - r * 0.38} ${cy - r * 0.38} L${cx + r * 0.38} ${cy + r * 0.38} M${cx + r * 0.38} ${cy - r * 0.38} L${cx - r * 0.38} ${cy + r * 0.38}`}
          stroke="#fff"
          strokeWidth={r * 0.24}
          strokeLinecap="round"
        />
      )}
      {kind === 'maybe' && (
        <Txt x={cx} y={cy + r * 0.42} size={r * 1.2} weight={800} fill="#fff" anchor="middle">
          ?
        </Txt>
      )}
    </g>
  );
}

/** Huy hiệu Content Credentials (khiên "CR"). */
function Shield({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M16 0 L30 6 V16 C30 25 24 31 16 34 C8 31 2 25 2 16 V6 Z" fill={DARK} opacity={0.9} />
      <Txt x={16} y={22} size={11} weight={800} fill="#fff" anchor="middle">
        CR
      </Txt>
    </g>
  );
}

/** Biểu tượng tệp có góc gấp và dải nhãn đuôi tệp. */
function FileIcon({ x, y, label, k }: { x: number; y: number; label: string; k: Kit }) {
  return (
    <g>
      <path d={`M${x} ${y} h56 l18 18 v76 h-74 z`} fill={c('surface')} stroke={c('slate-200')} strokeWidth={1.5} />
      <path d={`M${x + 56} ${y} v18 h18`} fill={c('slate-100')} stroke={c('slate-200')} strokeWidth={1.5} />
      {[30, 42, 54].map((dy, i) => (
        <rect key={dy} x={x + 12} y={y + dy} width={i === 2 ? 32 : 50} height={5} rx={2.5} fill={c('slate-200')} />
      ))}
      <rect x={x} y={y + 70} width={74} height={24} fill={k.h(500)} />
      <Txt x={x + 37} y={y + 87} size={12} weight={800} fill="#fff" anchor="middle">
        {label}
      </Txt>
    </g>
  );
}

/** Thanh tiêu đề bo hai góc trên của một cửa sổ. */
const topBar = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x} ${y + h} V${y + r} a${r} ${r} 0 0 1 ${r} ${-r} H${x + w - r} a${r} ${r} 0 0 1 ${r} ${r} V${y + h} Z`;

const star = (cx: number, cy: number, r: number) =>
  `${Array.from({ length: 10 }, (_, i) => {
    const a = ((-90 + i * 36) * Math.PI) / 180;
    const rr = i % 2 ? r * 0.45 : r;
    return `${i ? 'L' : 'M'}${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }).join(' ')} Z`;

/** Ngôi sao 4 cánh (biểu tượng AI). */
const sparkle = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r} Q${cx} ${cy} ${cx + r} ${cy} Q${cx} ${cy} ${cx} ${cy + r} Q${cx} ${cy} ${cx - r} ${cy} Q${cx} ${cy} ${cx} ${cy - r} Z`;

/** Đường gạch ngang một dòng chữ đơn cách cỡ `size`, bắt đầu tại x. */
const Strike = ({ x, y, text, size = 9 }: { x: number; y: number; text: string; size?: number }) => (
  <line x1={x - 2} y1={y - size * 0.32} x2={x + text.length * size * 0.6 + 2} y2={y - size * 0.32} stroke={c('rose-700')} strokeWidth={1.5} opacity={0.8} />
);

function Arrow({ x1, x2, y, color = c('slate-400'), dashed = false, width = 2 }: { x1: number; x2: number; y: number; color?: string; dashed?: boolean; width?: number }) {
  return (
    <g stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${x1} ${y} H${x2}`} strokeDasharray={dashed ? '2 5' : undefined} />
      <path d={`M${x2 - 6} ${y - 6} L${x2} ${y} L${x2 - 6} ${y + 6}`} />
    </g>
  );
}

function Backdrop({ kind, k }: { kind: Backdrop; k: Kit }) {
  if (kind === 'dark')
    return (
      <g>
        <rect width={400} height={225} fill={PANEL_DEEP} />
        {Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: 16 }, (_, col) => <circle key={`${row}-${col}`} cx={12 + col * 25} cy={12 + row * 25} r={1.2} fill="#fff" opacity={0.08} />),
        )}
      </g>
    );
  return (
    <g>
      <rect width={400} height={225} fill={k.h(100)} />
      {kind === 'blobs' && (
        <>
          <circle cx={360} cy={20} r={70} fill={k.h(200)} opacity={0.6} />
          <circle cx={30} cy={215} r={50} fill={k.h(200)} opacity={0.5} />
        </>
      )}
      {kind === 'dots' &&
        Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: 16 }, (_, col) => <circle key={`${row}-${col}`} cx={12 + col * 25} cy={12 + row * 25} r={1.6} fill={k.h(400)} opacity={0.35} />),
        )}
      {kind === 'grid' && (
        <g stroke={k.h(200)} strokeWidth={1}>
          {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={i * 25 + 12} y1={0} x2={i * 25 + 12} y2={225} />)}
          {Array.from({ length: 9 }, (_, i) => <line key={`h${i}`} x1={0} y1={i * 25 + 12} x2={400} y2={i * 25 + 12} />)}
        </g>
      )}
      {kind === 'stripes' && (
        <g stroke={k.h(200)} strokeWidth={10} opacity={0.45}>
          {Array.from({ length: 22 }, (_, i) => <line key={i} x1={i * 30 - 225} y1={225} x2={i * 30} y2={0} />)}
        </g>
      )}
    </g>
  );
}

// ---------- Cảnh riêng của từng bài ----------

interface Scene {
  hue: Hue;
  backdrop: Backdrop;
  draw: (k: Kit) => ReactNode;
}

const SCENES: Record<GuideSlug, Scene> = {
  // Bục xếp hạng 3 công cụ, sao đánh giá trên bục nhất.
  'best-metadata-remover-tools': {
    hue: 'violet',
    backdrop: 'dots',
    draw: (k) => (
      <>
        <rect x={56} y={198} width={288} height={5} rx={2.5} fill={c('slate-400')} opacity={0.5} />
        {[
          { x: 80, top: 146, n: '2', fill: k.h(400), ink: '#fff' },
          { x: 160, top: 118, n: '1', fill: k.h(500), ink: '#fff' },
          { x: 240, top: 162, n: '3', fill: k.h(200), ink: k.h(700) },
        ].map((p) => (
          <g key={p.n}>
            <rect x={p.x} y={p.top} width={80} height={198 - p.top} rx={6} fill={p.fill} />
            <Txt x={p.x + 40} y={p.top + (198 - p.top) / 2 + 9} size={24} weight={800} fill={p.ink} anchor="middle">
              {p.n}
            </Txt>
            <rect x={p.x + 18} y={p.top - 52} width={44} height={44} rx={11} fill={c('surface')} stroke={c('slate-200')} />
          </g>
        ))}
        {/* Biểu tượng 3 công cụ: ứng dụng web, dòng lệnh, ứng dụng máy tính */}
        <Pic x={184} y={72} w={32} h={32} k={k} r={6} />
        <rect x={104} y={100} width={32} height={32} rx={6} fill={DARK} />
        <Txt x={110} y={121} size={12} weight={700} mono fill={c('emerald-400')}>
          {'>_'}
        </Txt>
        <rect x={264} y={116} width={32} height={32} rx={6} fill={k.h(100)} />
        {[124, 132, 140].map((y, i) => (
          <rect key={y} x={270} y={y} width={i === 1 ? 14 : 20} height={4} rx={2} fill={k.h(400)} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={star(170 + i * 15, 52, 6.5)} fill={c('amber-400')} />
        ))}
      </>
    ),
  },

  // Hộp thoại Properties của Windows và Inspector của macOS Preview.
  'remove-metadata-windows-mac': {
    hue: 'sky',
    backdrop: 'grid',
    draw: (k) => (
      <>
        <rect x={24} y={30} width={206} height={150} rx={10} fill={c('surface')} stroke={c('slate-200')} />
        <path d={topBar(24, 30, 206, 22, 10)} fill={k.h(500)} />
        {[0, 1].map((r) =>
          [0, 1].map((col) => <rect key={`${r}${col}`} x={34 + col * 6.5} y={36 + r * 6.5} width={5.5} height={5.5} fill="#fff" />),
        )}
        <Txt x={54} y={45} size={9.5} weight={700} fill="#fff">
          Properties
        </Txt>
        <Txt x={36} y={70} size={9} fill={c('slate-400')}>
          General
        </Txt>
        <Txt x={84} y={70} size={9} weight={700} fill={k.h(700)}>
          Details
        </Txt>
        <line x1={83} y1={75} x2={118} y2={75} stroke={k.h(500)} strokeWidth={2} />
        {[
          ['GPS', '21.03, 105.85'],
          ['Camera', 'Canon EOS R6'],
          ['Taken', '2026:10:29'],
        ].map(([label, value], i) => (
          <g key={label}>
            <Txt x={36} y={96 + i * 20} size={9} fill={c('slate-400')}>
              {label}
            </Txt>
            <Txt x={96} y={96 + i * 20} size={9} mono>
              {value}
            </Txt>
            <Strike x={96} y={96 + i * 20} text={value} />
          </g>
        ))}
        <Txt x={36} y={168} size={9.5} weight={700} fill={k.h(700)} underline>
          Remove Properties…
        </Txt>

        <rect x={202} y={78} width={180} height={136} rx={10} fill={DARK} opacity={0.08} />
        <rect x={196} y={72} width={180} height={136} rx={10} fill={c('surface')} stroke={c('slate-200')} />
        <path d={topBar(196, 72, 180, 22, 10)} fill={c('slate-100')} />
        {['#ff5f57', '#febc2e', '#28c840'].map((fill, i) => (
          <circle key={fill} cx={208 + i * 12} cy={83} r={4} fill={fill} />
        ))}
        <Txt x={296} y={87} size={9} weight={700} anchor="middle">
          Inspector
        </Txt>
        <Pic x={206} y={104} w={74} h={56} k={k} />
        <Txt x={290} y={113} size={8.5} fill={c('slate-400')}>
          Location
        </Txt>
        <rect x={290} y={120} width={76} height={40} rx={5} fill={k.h(100)} stroke={k.h(200)} />
        <path d="M290 146 L366 132" stroke={c('surface')} strokeWidth={4} />
        <circle cx={326} cy={139} r={4.5} fill={c('rose-500')} />
        <rect x={206} y={172} width={160} height={24} rx={12} fill={k.h(500)} />
        <Txt x={286} y={188} size={9.5} weight={700} fill="#fff" anchor="middle">
          Remove Location
        </Txt>
      </>
    ),
  },

  // Khung chat: yêu cầu vẽ ảnh → ảnh trả về mang C2PA của OpenAI.
  'chatgpt-image-metadata': {
    hue: 'emerald',
    backdrop: 'blobs',
    draw: (k) => (
      <>
        <rect x={36} y={14} width={328} height={198} rx={16} fill={c('surface')} stroke={c('slate-200')} />
        <rect x={204} y={26} width={146} height={26} rx={13} fill={k.h(500)} />
        <Txt x={277} y={43} size={10} fill="#fff" anchor="middle">
          Draw a red fox at dawn
        </Txt>
        <circle cx={62} cy={80} r={13} fill={DARK} />
        <path d={sparkle(62, 80, 8)} fill="#fff" />
        <rect x={84} y={66} width={156} height={132} rx={12} fill={c('slate-100')} />
        <Pic x={92} y={74} w={140} h={96} k={k} />
        <Shield x={98} y={80} s={0.75} />
        <Txt x={92} y={187} size={8.5} fill={c('slate-400')}>
          Here is your image
        </Txt>
        <path d="M240 118 H250" stroke={c('slate-400')} strokeWidth={2} strokeDasharray="2 4" strokeLinecap="round" />
        <Chip x={252} y={88} text="C2PA: OpenAI" />
        <Chip x={252} y={124} text="Pixels intact" tone="kept" />
      </>
    ),
  },

  // Ảnh gốc (có GPS) → chụp màn hình trên điện thoại: mất EXIF/GPS, thủy ấn vô hình vẫn còn.
  'does-screenshot-remove-metadata': {
    hue: 'amber',
    backdrop: 'stripes',
    draw: (k) => (
      <>
        <rect x={28} y={40} width={140} height={120} rx={12} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={36} y={48} w={124} h={86} k={k} />
        <path d="M146 50 C140 50 136 54 136 60 C136 67 146 76 146 76 C146 76 156 67 156 60 C156 54 152 50 146 50 Z" fill={c('rose-500')} />
        <circle cx={146} cy={60} r={3.5} fill="#fff" />
        <Txt x={36} y={151} size={8} mono fill={c('slate-400')}>
          IMG_2041.HEIC
        </Txt>
        <Txt x={200} y={90} size={8} mono fill={c('slate-400')} anchor="middle">
          screenshot
        </Txt>
        <Arrow x1={176} x2={224} y={100} dashed />
        <rect x={232} y={12} width={112} height={200} rx={20} fill={DARK} />
        <rect x={238} y={20} width={100} height={184} rx={14} fill={c('surface')} />
        <rect x={272} y={25} width={32} height={7} rx={3.5} fill={DARK} />
        <Txt x={246} y={32} size={7} weight={700}>
          9:41
        </Txt>
        <Pic x={248} y={60} w={80} h={62} k={k} />
        <g stroke={k.h(500)} strokeWidth={3} fill="none" strokeLinecap="round">
          <path d="M242 66 V54 H254" />
          <path d="M322 54 H334 V66" />
          <path d="M334 116 V128 H322" />
          <path d="M254 128 H242 V116" />
        </g>
        <rect x={246} y={148} width={36} height={46} rx={5} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={249} y={151} w={30} h={26} k={k} r={3} />
        <Txt x={288} y={168} size={8} fill={c('slate-400')}>
          Saved
        </Txt>
        <Chip x={28} y={174} text="EXIF / GPS" />
        <Chip x={118} y={174} text="Watermark" tone="kept" />
      </>
    ),
  },

  // Bài đăng mạng xã hội gắn nhãn "AI info" cho ảnh thật.
  'made-with-ai-label': {
    hue: 'rose',
    backdrop: 'blobs',
    draw: (k) => (
      <>
        <rect x={120} y={10} width={170} height={206} rx={14} fill={c('surface')} stroke={c('slate-200')} />
        <circle cx={140} cy={30} r={10} fill={k.h(400)} />
        <circle cx={140} cy={30} r={7} fill="none" stroke={c('surface')} strokeWidth={2} />
        <rect x={156} y={21} width={58} height={6} rx={3} fill={c('slate-200')} />
        <rect x={156} y={31} width={48} height={14} rx={7} fill={c('rose-50')} stroke={c('rose-400')} />
        <Txt x={180} y={41} size={7.5} weight={700} fill={c('rose-700')} anchor="middle">
          AI info
        </Txt>
        <line x1={159} y1={38} x2={201} y2={38} stroke={c('rose-700')} strokeWidth={1.5} />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={266 + i * 5} cy={30} r={1.6} fill={c('slate-400')} />
        ))}
        <Pic x={130} y={52} w={150} h={112} k={k} r={4} />
        <path d="M140 188 C130 180 128 176 132 172 C135 169 139 171 140 174 C141 171 145 169 148 172 C152 176 150 180 140 188 Z" fill={c('rose-500')} />
        <circle cx={166} cy={179} r={7} fill="none" stroke={c('slate-400')} strokeWidth={1.8} />
        <path d="M184 172 L198 179 L184 186 Z" fill="none" stroke={c('slate-400')} strokeWidth={1.8} strokeLinejoin="round" />
        <rect x={130} y={196} width={120} height={5} rx={2.5} fill={c('slate-200')} />
        <rect x={130} y={205} width={80} height={5} rx={2.5} fill={c('slate-100')} />
        <rect x={14} y={70} width={92} height={44} rx={10} fill={DARK} />
        <path d="M106 84 L118 92 L106 100 Z" fill={DARK} />
        <Txt x={24} y={88} size={9} weight={700} fill="#fff">
          Real photo,
        </Txt>
        <Txt x={24} y={103} size={9} weight={700} fill="#fff">
          labeled AI?
        </Txt>
        <Chip x={298} y={120} text="Real photo" tone="kept" />
      </>
    ),
  },

  // Đồ thị nút ComfyUI (nền tối): prompt, KSampler, Save Image; workflow/parameters bị xóa.
  'remove-stable-diffusion-comfyui-metadata': {
    hue: 'violet',
    backdrop: 'dark',
    draw: (k) => {
      const node = (x: number, y: number, w: number, h: number, title: string) => (
        <g>
          <rect x={x} y={y} width={w} height={h} rx={8} fill={PANEL} stroke="#374151" />
          <path d={topBar(x, y, w, 18, 8)} fill={k.h(500)} opacity={0.9} />
          <Txt x={x + 8} y={y + 12.5} size={8.5} weight={700} fill="#fff">
            {title}
          </Txt>
        </g>
      );
      return (
        <>
          {node(18, 28, 112, 56, 'Load Checkpoint')}
          <Txt x={26} y={62} size={8} mono fill={SOFT}>
            sd_xl_base.safe…
          </Txt>
          {node(18, 106, 112, 82, 'CLIP Text Encode')}
          {['a cat in a hat,', 'golden hour, 35mm', '8k, detailed'].map((l, i) => (
            <Txt key={l} x={26} y={138 + i * 13} size={8} mono fill={SOFT}>
              {l}
            </Txt>
          ))}
          {node(156, 46, 104, 108, 'KSampler')}
          {['seed    42', 'steps   30', 'cfg     7.0', 'sampler euler'].map((l, i) => (
            <Txt key={l} x={164} y={84 + i * 16} size={8} mono fill={SOFT}>
              {l}
            </Txt>
          ))}
          {node(284, 40, 100, 104, 'Save Image')}
          <Pic x={292} y={66} w={84} h={66} k={k} />
          <g stroke={k.h(400)} strokeWidth={2} fill="none">
            <path d="M130 70 C143 70 143 80 156 80" />
            <path d="M130 148 C143 148 143 104 156 104" />
            <path d="M260 100 C272 100 272 80 284 80" />
          </g>
          {[
            [130, 70],
            [130, 148],
            [156, 80],
            [156, 104],
            [260, 100],
            [284, 80],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} fill={k.h(400)} />
          ))}
          <Chip x={156} y={176} text="parameters" />
          <Chip x={284} y={158} text="workflow {…}" />
        </>
      );
    },
  },

  // Lưới 4 ảnh kiểu Midjourney và thanh prompt bị bôi đen.
  'hide-midjourney-dalle-prompts': {
    hue: 'indigo',
    backdrop: 'dots',
    draw: (k) => (
      <>
        <rect x={98} y={6} width={204} height={156} rx={12} fill={c('surface')} stroke={c('slate-200')} />
        {[
          [106, 14],
          [204, 14],
          [106, 88],
          [204, 88],
        ].map(([x, y], i) => (
          <Pic key={i} x={x} y={y} w={90} h={66} k={k} flip={i === 1 || i === 2} />
        ))}
        <rect x={30} y={172} width={340} height={38} rx={19} fill={c('surface')} stroke={k.h(400)} strokeWidth={1.5} />
        <Txt x={48} y={195} size={11} weight={700} mono fill={k.h(700)}>
          /imagine
        </Txt>
        {[
          [114, 64],
          [184, 40],
          [230, 78],
        ].map(([x, w]) => (
          <rect key={x} x={x} y={184} width={w} height={13} rx={3} fill={DARK} />
        ))}
        <g stroke={c('slate-400')} fill="none" strokeWidth={1.8} strokeLinecap="round">
          <path d="M324 191 C328 184 344 184 348 191 C344 198 328 198 324 191 Z" />
          <circle cx={336} cy={191} r={3} />
          <line x1={326} y1={199} x2={346} y2={183} />
        </g>
      </>
    ),
  },

  // Chuỗi nguồn gốc C2PA: Chụp → Sửa → Đăng, nối bằng mắt xích, có chữ ký.
  'what-is-c2pa-content-credentials': {
    hue: 'sky',
    backdrop: 'grid',
    draw: (k) => (
      <>
        <rect x={124} y={14} width={152} height={30} rx={15} fill={k.h(500)} />
        <Mark cx={142} cy={29} r={8} kind="yes" />
        <Txt x={210} y={33} size={10.5} weight={700} fill="#fff" anchor="middle">
          Signed manifest
        </Txt>
        {[116, 136, 156, 236, 256, 276].map((x) => (
          <rect key={x} x={x} y={91} width={18} height={10} rx={5} fill="none" stroke={k.h(500)} strokeWidth={2.5} />
        ))}
        {[80, 200, 320].map((cx) => (
          <circle key={cx} cx={cx} cy={96} r={28} fill={c('surface')} stroke={k.h(400)} strokeWidth={2.5} />
        ))}
        {/* Máy ảnh */}
        <rect x={66} y={88} width={28} height={19} rx={4} fill={DARK} />
        <rect x={73} y={84} width={10} height={5} rx={1.5} fill={DARK} />
        <circle cx={80} cy={97.5} r={6} fill={k.h(400)} />
        <circle cx={80} cy={97.5} r={2.5} fill={DARK} />
        {/* Thanh chỉnh sửa */}
        <g stroke={DARK} strokeWidth={2.5} strokeLinecap="round">
          {[88, 96, 104].map((y) => (
            <line key={y} x1={186} y1={y} x2={214} y2={y} />
          ))}
        </g>
        {[
          [192, 88],
          [206, 96],
          [196, 104],
        ].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r={3.5} fill={k.h(500)} stroke={c('surface')} strokeWidth={1.5} />
        ))}
        {/* Quả địa cầu */}
        <g stroke={DARK} strokeWidth={2.2} fill="none">
          <circle cx={320} cy={96} r={13} />
          <ellipse cx={320} cy={96} rx={6} ry={13} />
          <line x1={307} y1={96} x2={333} y2={96} />
        </g>
        {[
          [80, 'Capture', 'c2pa.created'],
          [200, 'Edit', 'c2pa.edited'],
          [320, 'Publish', 'c2pa.published'],
        ].map(([cx, label, action]) => (
          <g key={label as string}>
            <Txt x={cx as number} y={144} size={10.5} weight={700} anchor="middle">
              {label}
            </Txt>
            <Chip x={(cx as number) - chipW(action as string) / 2} y={154} text={action as string} tone="info" k={k} />
          </g>
        ))}
      </>
    ),
  },

  // Bản đồ: ghim vị trí bị gạch, tọa độ GPS bị xóa.
  'remove-gps-location-from-photos': {
    hue: 'emerald',
    backdrop: 'plain',
    draw: (k) => (
      <>
        <rect width={400} height={225} fill={k.h(50)} />
        <ellipse cx={70} cy={175} rx={64} ry={42} fill={k.h(200)} />
        <ellipse cx={356} cy={36} rx={54} ry={34} fill={k.h(200)} />
        <path d="M0 122 C80 100 120 152 200 142 S330 92 400 112" stroke={c('sky-200')} strokeWidth={16} fill="none" />
        <g stroke={c('surface')} strokeWidth={8}>
          <line x1={0} y1={62} x2={400} y2={62} />
          <line x1={0} y1={196} x2={400} y2={196} />
          <line x1={150} y1={0} x2={150} y2={225} />
          <line x1={318} y1={0} x2={318} y2={225} />
        </g>
        <rect x={18} y={16} width={132} height={50} rx={10} fill={c('surface')} stroke={c('slate-200')} />
        <Txt x={30} y={36} size={10} mono>
          21.0285° N
        </Txt>
        <Strike x={30} y={36} text="21.0285° N" size={10} />
        <Txt x={30} y={55} size={10} mono>
          105.8542° E
        </Txt>
        <Strike x={30} y={55} text="105.8542° E" size={10} />
        <ellipse cx={238} cy={146} rx={18} ry={5} fill={DARK} opacity={0.2} />
        <path d="M238 144 C226 122 212 108 212 82 A26 26 0 0 1 264 82 C264 108 250 122 238 144 Z" fill={c('rose-500')} />
        <circle cx={238} cy={82} r={12} fill={c('surface')} />
        <path d="M229 89 L235 80 L239 85 L242 82 L247 89 Z" fill={k.h(500)} />
        <circle cx={238} cy={94} r={62} stroke={c('rose-700')} strokeWidth={6} fill="none" opacity={0.85} />
        <line x1={194} y1={50} x2={282} y2={138} stroke={c('rose-700')} strokeWidth={6} strokeLinecap="round" opacity={0.85} />
        <Chip x={296} y={184} text="GPS removed" tone="kept" />
      </>
    ),
  },

  // Lưới nhiều ảnh đã làm sạch → gom vào tệp ZIP, thanh tiến trình 24/24.
  'batch-remove-metadata': {
    hue: 'amber',
    backdrop: 'stripes',
    draw: (k) => (
      <>
        {Array.from({ length: 6 }, (_, i) => {
          const x = 26 + (i % 3) * 60;
          const y = 30 + Math.floor(i / 3) * 52;
          return (
            <g key={i}>
              <rect x={x} y={y} width={52} height={42} rx={6} fill={c('surface')} stroke={c('slate-200')} />
              <Pic x={x + 3} y={y + 3} w={46} h={36} k={k} flip={i % 2 === 1} r={4} />
              <circle cx={x + 50} cy={y + 2} r={8.5} fill={c('surface')} />
              <Mark cx={x + 50} cy={y + 2} r={7} kind="yes" />
            </g>
          );
        })}
        <Txt x={26} y={146} size={9} mono fill={c('slate-400')}>
          IMG_0001 … IMG_0024
        </Txt>
        <Arrow x1={212} x2={256} y={80} color={k.h(500)} width={4} />
        <path d="M270 50 h34 l8 10 h58 v10 h-100 z" fill={k.h(400)} />
        <rect x={270} y={60} width={100} height={78} rx={8} fill={k.h(500)} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={i % 2 ? 320 : 312} y={64 + i * 9} width={8} height={5} rx={1} fill="#fff" opacity={0.85} />
        ))}
        <Txt x={320} y={128} size={13} weight={800} fill="#fff" anchor="middle">
          ZIP
        </Txt>
        <Txt x={26} y={176} size={9.5} weight={700}>
          Cleaning 24 files
        </Txt>
        <Txt x={370} y={176} size={9} mono fill={k.h(700)} anchor="end">
          24 / 24
        </Txt>
        <rect x={26} y={184} width={344} height={10} rx={5} fill={k.h(500)} />
      </>
    ),
  },

  // Huy hiệu CR bị cắt khỏi tệp manifest bằng kéo; điểm ảnh giữ nguyên.
  'remove-c2pa': {
    hue: 'rose',
    backdrop: 'blobs',
    draw: (k) => (
      <>
        <rect x={30} y={34} width={160} height={142} rx={14} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={40} y={44} w={140} h={100} k={k} />
        <rect x={40} y={156} width={90} height={7} rx={3.5} fill={c('slate-200')} />
        <Shield x={160} y={16} s={1.3} />
        <path d="M262 34 h80 l24 24 v108 h-104 z" fill={c('surface')} stroke={c('slate-200')} strokeWidth={1.5} />
        <path d="M342 34 v24 h24" fill={c('slate-100')} stroke={c('slate-200')} strokeWidth={1.5} />
        <Txt x={274} y={56} size={9} weight={700} mono fill={k.h(700)}>
          c2pa
        </Txt>
        {[
          [70, 70],
          [84, 58],
          [98, 74],
          [112, 50],
        ].map(([y, w]) => (
          <rect key={y} x={274} y={y} width={w} height={6} rx={3} fill={c('slate-200')} />
        ))}
        <circle cx={314} cy={142} r={14} fill={k.h(500)} />
        <Mark cx={314} cy={142} r={9} kind="yes" />
        <rect x={204} y={44} width={20} height={10} rx={5} fill="none" stroke={k.h(500)} strokeWidth={2.5} />
        <rect x={244} y={50} width={20} height={10} rx={5} fill="none" stroke={k.h(500)} strokeWidth={2.5} />
        <g stroke={DARK} strokeWidth={2.2} fill="none" strokeLinecap="round">
          <circle cx={228} cy={70} r={4.5} />
          <circle cx={242} cy={70} r={4.5} />
          <line x1={231} y1={66} x2={243} y2={46} />
          <line x1={239} y1={66} x2={227} y2={46} />
        </g>
        <Chip x={262} y={176} text="C2PA manifest" />
        <Chip x={30} y={188} text="Pixels: byte-identical" tone="kept" />
      </>
    ),
  },

  // Máy ảnh và bảng EXIF: các dòng bị gạch, Orientation được giữ.
  'remove-exif': {
    hue: 'indigo',
    backdrop: 'dots',
    draw: (k) => (
      <>
        <rect x={40} y={54} width={34} height={16} rx={4} fill={DARK} />
        <rect x={118} y={58} width={20} height={10} rx={3} fill={k.h(400)} />
        <rect x={22} y={66} width={130} height={88} rx={14} fill={DARK} />
        <rect x={126} y={76} width={16} height={10} rx={2} fill={MUTED} />
        <circle cx={88} cy={110} r={34} fill="#334155" />
        <circle cx={88} cy={110} r={24} fill={k.h(500)} />
        <circle cx={88} cy={110} r={12} fill={DARK} />
        <circle cx={80} cy={102} r={4} fill="#fff" opacity={0.6} />
        <path d="M154 110 H168" stroke={c('slate-400')} strokeWidth={2} strokeDasharray="2 4" strokeLinecap="round" />
        <rect x={172} y={26} width={206} height={174} rx={12} fill={c('surface')} stroke={c('slate-200')} />
        <Txt x={186} y={48} size={11} weight={800} fill={k.h(700)}>
          EXIF
        </Txt>
        <Txt x={364} y={48} size={8} mono fill={c('slate-400')} anchor="end">
          IMG_0412.JPG
        </Txt>
        <line x1={172} y1={58} x2={378} y2={58} stroke={c('slate-200')} />
        {[
          ['Make', 'Canon'],
          ['Model', 'EOS R6'],
          ['GPS', '21.03, 105.85'],
          ['Serial', '0328…'],
          ['Orientation', '1', true],
        ].map(([label, value, kept], i) => {
          const y = 80 + i * 24;
          return (
            <g key={label as string}>
              <Txt x={186} y={y} size={9} fill={c('slate-400')}>
                {label}
              </Txt>
              <Txt x={256} y={y} size={9} mono>
                {value}
              </Txt>
              {kept ? <Mark cx={360} cy={y - 3} r={7} kind="yes" /> : <line x1={184} y1={y - 3} x2={258 + (value as string).length * 5.4} y2={y - 3} stroke={c('rose-700')} strokeWidth={1.5} opacity={0.8} />}
            </g>
          );
        })}
      </>
    ),
  },

  // Tệp JPG: mã hex và dải segment, APP1 (EXIF) và APP11 (C2PA) bị nhấc ra.
  'remove-metadata-from-jpg': {
    hue: 'emerald',
    backdrop: 'grid',
    draw: (k) => {
      const segs = [
        { t: 'SOI', w: 34 },
        { t: 'APP0', w: 44 },
        { t: 'APP1', w: 58, rm: true },
        { t: 'APP11', w: 62, rm: true },
        { t: 'DQT', w: 44 },
        { t: 'SOS', w: 82, px: true },
        { t: 'EOI', w: 36 },
      ];
      let x = 20;
      const placed = segs.map((s) => {
        const at = x;
        x += s.w;
        return { ...s, x: at };
      });
      return (
        <>
          <FileIcon x={24} y={18} label="JPG" k={k} />
          {[
            ['FF D8 FF E0 00 10 4A 46 49 46', false],
            ['FF E1 2A 1C 45 78 69 66 00 00', true],
            ['FF EB 00 2C 4A 50 00 0B 00 01', true],
            ['FF DB 00 43 00 08 06 06 07 06', false],
          ].map(([hex, rm], i) => (
            <g key={hex as string}>
              <Txt x={120} y={34 + i * 20} size={9.5} mono fill={rm ? c('rose-700') : c('slate-400')}>
                {hex}
              </Txt>
              {rm && <Strike x={120} y={34 + i * 20} text={hex as string} size={9.5} />}
            </g>
          ))}
          {placed.map((s) =>
            s.rm ? (
              <g key={s.t}>
                <rect x={s.x + 1} y={141} width={s.w - 2} height={28} rx={4} fill="none" stroke={c('rose-400')} strokeDasharray="3 3" />
                <g transform={`rotate(${s.t === 'APP1' ? -7 : 6} ${s.x + s.w / 2} 118)`}>
                  <rect x={s.x + 1} y={106} width={s.w - 2} height={26} rx={4} fill={c('rose-50')} stroke={c('rose-200')} />
                  <Txt x={s.x + s.w / 2} y={123} size={10} mono weight={700} fill={c('rose-700')} anchor="middle">
                    {s.t}
                  </Txt>
                  <line x1={s.x + 8} y1={119} x2={s.x + s.w - 8} y2={119} stroke={c('rose-700')} strokeWidth={1.5} />
                </g>
              </g>
            ) : (
              <g key={s.t}>
                <rect x={s.x + 1} y={141} width={s.w - 2} height={28} rx={4} fill={s.px ? k.h(500) : k.h(200)} />
                <Txt x={s.x + s.w / 2} y={159} size={10} mono weight={700} fill={s.px ? '#fff' : k.h(700)} anchor="middle">
                  {s.t}
                </Txt>
              </g>
            ),
          )}
          <Chip x={20} y={184} text="Pixels: byte-identical" tone="kept" />
        </>
      );
    },
  },

  // Chồng chunk PNG: tEXt (prompt) và iTXt (XMP) bị kéo ra thùng rác.
  'remove-metadata-from-png': {
    hue: 'violet',
    backdrop: 'stripes',
    draw: (k) => {
      const rows: { t: string; d: string; y: number; h?: number; rm?: boolean; px?: boolean; tilt?: number }[] = [
        { t: 'IHDR', d: '400×225', y: 18 },
        { t: 'tEXt', d: 'parameters', y: 48, rm: true, tilt: 4 },
        { t: 'iTXt', d: 'XMP · caBX', y: 78, rm: true, tilt: -3 },
        { t: 'iCCP', d: 'sRGB', y: 108 },
        { t: 'IDAT', d: 'pixels', y: 138, h: 40, px: true },
        { t: 'IEND', d: '', y: 184 },
      ];
      return (
        <>
          <FileIcon x={34} y={58} label="PNG" k={k} />
          {rows.map((r) => {
            const h = r.h ?? 24;
            if (r.rm)
              return (
                <g key={r.t}>
                  <rect x={150} y={r.y} width={150} height={h} rx={5} fill="none" stroke={c('rose-400')} strokeDasharray="3 3" />
                  <g transform={`rotate(${r.tilt} 271 ${r.y + 12})`}>
                    <rect x={196} y={r.y} width={150} height={h} rx={5} fill={c('rose-50')} stroke={c('rose-200')} />
                    <Txt x={206} y={r.y + 16} size={10} mono weight={700} fill={c('rose-700')}>
                      {r.t}
                    </Txt>
                    <Txt x={240} y={r.y + 16} size={9} mono fill={c('rose-700')}>
                      {r.d}
                    </Txt>
                    <line x1={202} y1={r.y + 12.5} x2={338} y2={r.y + 12.5} stroke={c('rose-700')} strokeWidth={1.5} opacity={0.8} />
                  </g>
                </g>
              );
            return (
              <g key={r.t}>
                <rect x={150} y={r.y} width={150} height={h} rx={5} fill={r.px ? k.h(500) : k.h(200)} />
                <Txt x={160} y={r.y + h / 2 + 4} size={10} mono weight={700} fill={r.px ? '#fff' : k.h(700)}>
                  {r.t}
                </Txt>
                <Txt x={290} y={r.y + h / 2 + 4} size={8.5} mono fill={r.px ? '#fff' : k.h(700)} anchor="end" opacity={0.8}>
                  {r.d}
                </Txt>
              </g>
            );
          })}
          <g stroke={c('slate-400')} strokeWidth={2} fill="none" strokeLinecap="round">
            <path d="M360 70 h24 l-2 26 h-20 z" />
            <line x1={356} y1={66} x2={388} y2={66} />
            <path d="M366 66 v-5 h12 v5" />
            <line x1={368} y1={74} x2={368} y2={90} />
            <line x1={376} y1={74} x2={376} y2={90} />
          </g>
        </>
      );
    },
  },

  // Hộp lồng hộp (ISO BMFF): ftyp, meta (Exif/XMP bị xóa, ICC giữ), mdat các ô ảnh HEVC.
  'remove-metadata-from-heic': {
    hue: 'sky',
    backdrop: 'blobs',
    draw: (k) => (
      <>
        <rect x={22} y={14} width={356} height={198} rx={14} fill={c('surface')} stroke={k.h(400)} strokeWidth={2} />
        <Txt x={36} y={36} size={11} weight={800} mono fill={k.h(700)}>
          HEIC
        </Txt>
        <Txt x={364} y={36} size={8.5} fill={c('slate-400')} anchor="end">
          ISO BMFF container
        </Txt>
        <rect x={36} y={48} width={70} height={74} rx={8} fill={k.h(100)} stroke={k.h(200)} />
        <Txt x={71} y={89} size={10} mono weight={700} fill={k.h(700)} anchor="middle">
          ftyp
        </Txt>
        <rect x={116} y={48} width={248} height={74} rx={8} fill={k.h(50)} stroke={k.h(200)} />
        <Txt x={126} y={63} size={9} mono weight={700} fill={k.h(700)}>
          meta
        </Txt>
        {[
          [126, 'Exif', false],
          [204, 'XMP·C2PA', false],
          [282, 'ICC', true],
        ].map(([x, label, kept]) => (
          <g key={label as string}>
            <rect
              x={x as number}
              y={70}
              width={72}
              height={44}
              rx={6}
              fill={kept ? c('emerald-50') : c('rose-50')}
              stroke={kept ? c('emerald-500') : c('rose-400')}
              strokeDasharray={kept ? undefined : '3 3'}
            />
            <Txt x={(x as number) + 36} y={96} size={9.5} mono weight={700} fill={kept ? c('emerald-700') : c('rose-700')} anchor="middle">
              {label}
            </Txt>
            {!kept && <line x1={(x as number) + 10} y1={93} x2={(x as number) + 62} y2={93} stroke={c('rose-700')} strokeWidth={1.5} />}
            <Mark cx={(x as number) + 66} cy={76} r={6.5} kind={kept ? 'yes' : 'no'} />
          </g>
        ))}
        <rect x={36} y={132} width={328} height={66} rx={8} fill={k.h(500)} />
        <Txt x={50} y={150} size={10} mono weight={700} fill="#fff">
          mdat
        </Txt>
        <Txt x={350} y={150} size={8.5} fill="#fff" anchor="end" opacity={0.85}>
          HEVC image tiles
        </Txt>
        {Array.from({ length: 2 }, (_, row) =>
          Array.from({ length: 12 }, (_, col) => (
            <rect key={`${row}-${col}`} x={50 + col * 25} y={158 + row * 17} width={22} height={14} rx={2} fill="#fff" opacity={(row + col) % 3 === 0 ? 0.32 : 0.16} />
          )),
        )}
      </>
    ),
  },

  // Đoàn tàu chunk RIFF/WebP: EXIF và XMP trật bánh khỏi đường ray.
  'remove-metadata-from-webp': {
    hue: 'amber',
    backdrop: 'dots',
    draw: (k) => {
      const cars = [
        { t: 'VP8X', x: 100 },
        { t: 'ICCP', x: 158 },
        { t: 'VP8', x: 216, px: true },
        { t: 'EXIF', x: 274, rm: true },
        { t: 'XMP', x: 332, rm: true },
      ];
      return (
        <>
          <line x1={10} y1={150} x2={392} y2={150} stroke={c('slate-400')} strokeWidth={2} />
          {Array.from({ length: 22 }, (_, i) => (
            <line key={i} x1={14 + i * 18} y1={146} x2={14 + i * 18} y2={156} stroke={c('slate-400')} strokeWidth={3} opacity={0.5} />
          ))}
          <rect x={16} y={72} width={76} height={64} rx={10} fill={DARK} />
          <Txt x={54} y={98} size={11} weight={800} mono fill="#fff" anchor="middle">
            RIFF
          </Txt>
          <Txt x={54} y={118} size={11} weight={800} mono fill={k.h(400)} anchor="middle">
            WEBP
          </Txt>
          {[30, 70].map((cx) => (
            <circle key={cx} cx={cx} cy={142} r={7} fill={DARK} stroke={c('slate-400')} strokeWidth={2} />
          ))}
          {cars.map((car, i) =>
            car.rm ? (
              <g key={car.t}>
                <rect x={car.x} y={88} width={52} height={48} rx={6} fill="none" stroke={c('rose-400')} strokeDasharray="3 3" />
                <g transform={`rotate(${i === 3 ? 14 : -12} ${car.x + 26} 150)`}>
                  <rect x={car.x} y={140} width={52} height={40} rx={6} fill={c('rose-50')} stroke={c('rose-400')} />
                  <Txt x={car.x + 26} y={164} size={10} mono weight={700} fill={c('rose-700')} anchor="middle">
                    {car.t}
                  </Txt>
                  <line x1={car.x + 10} y1={160.5} x2={car.x + 42} y2={160.5} stroke={c('rose-700')} strokeWidth={1.5} />
                </g>
              </g>
            ) : (
              <g key={car.t}>
                <rect x={car.x - 8} y={110} width={8} height={4} fill={c('slate-400')} />
                <rect x={car.x} y={88} width={52} height={48} rx={6} fill={car.px ? k.h(500) : k.h(200)} stroke={k.h(400)} />
                <Txt x={car.x + 26} y={116} size={10} mono weight={700} fill={car.px ? '#fff' : k.h(700)} anchor="middle">
                  {car.t}
                </Txt>
                {[14, 38].map((dx) => (
                  <circle key={dx} cx={car.x + dx} cy={142} r={6} fill={DARK} stroke={c('slate-400')} strokeWidth={2} />
                ))}
              </g>
            ),
          )}
          <Chip x={16} y={188} text="Image data intact" tone="kept" />
        </>
      );
    },
  },

  // Kính lúp soi ảnh và bảng tín hiệu: C2PA, IPTC, EXIF máy ảnh, thủy ấn điểm ảnh.
  'how-to-check-if-image-is-ai-generated': {
    hue: 'indigo',
    backdrop: 'blobs',
    draw: (k) => (
      <>
        <rect x={20} y={26} width={180} height={150} rx={14} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={30} y={36} w={160} h={110} k={k} />
        <rect x={30} y={156} width={80} height={6} rx={3} fill={c('slate-200')} />
        <circle cx={148} cy={110} r={36} fill={c('surface')} opacity={0.75} />
        <circle cx={148} cy={110} r={36} fill="none" stroke={DARK} strokeWidth={6} />
        <line x1={174} y1={136} x2={198} y2={160} stroke={DARK} strokeWidth={10} strokeLinecap="round" />
        <Txt x={148} y={108} size={10} weight={800} mono fill={k.h(700)} anchor="middle">
          C2PA
        </Txt>
        <Txt x={148} y={121} size={8} fill={k.h(700)} anchor="middle">
          found
        </Txt>
        <rect x={218} y={20} width={164} height={186} rx={12} fill={c('surface')} stroke={c('slate-200')} />
        <Txt x={232} y={42} size={11} weight={800}>
          Signals
        </Txt>
        {(
          [
            ['C2PA manifest', 'signed by OpenAI', 'yes'],
            ['IPTC SourceType', 'trainedAlgorithmic', 'yes'],
            ['Camera EXIF', 'missing', 'no'],
            ['Pixel watermark', 'needs a detector', 'maybe'],
          ] as const
        ).map(([title, note, kind], i) => (
          <g key={title}>
            <Mark cx={240} cy={66 + i * 34} kind={kind} />
            <Txt x={256} y={66 + i * 34} size={9.5} weight={700}>
              {title}
            </Txt>
            <Txt x={256} y={78 + i * 34} size={8} fill={c('slate-400')}>
              {note}
            </Txt>
          </g>
        ))}
      </>
    ),
  },

  // Cùng một ảnh trên 3 nền tảng: hai nơi gắn nhãn AI, một nơi không.
  'which-platforms-label-ai-images': {
    hue: 'emerald',
    backdrop: 'stripes',
    draw: (k) => (
      <>
        <Txt x={200} y={20} size={9.5} weight={700} fill={k.h(700)} anchor="middle">
          Same image · 3 platforms
        </Txt>
        {[22, 146, 270].map((x, i) => {
          const y = 30;
          const label = ['AI info', 'AI-generated', 'No label'][i];
          const pill = 14 + label.length * 5.2;
          const tinted = i < 2;
          return (
            <g key={x}>
              <rect x={x} y={y} width={108} height={170} rx={12} fill={c('surface')} stroke={c('slate-200')} />
              <rect x={x + 10} y={y + 10} width={20} height={20} rx={6} fill={[k.h(500), c('rose-500'), DARK][i]} />
              {i === 0 && <circle cx={x + 20} cy={y + 20} r={5} fill="none" stroke="#fff" strokeWidth={1.8} />}
              {i === 1 && <path d={`M${x + 17} ${y + 15} L${x + 25} ${y + 20} L${x + 17} ${y + 25} Z`} fill="#fff" />}
              {i === 2 && (
                <g fill="#fff">
                  <circle cx={x + 17} cy={y + 24} r={3} />
                  <rect x={x + 19} y={y + 13} width={2} height={11} />
                  <rect x={x + 19} y={y + 13} width={6} height={2.5} />
                </g>
              )}
              <rect x={x + 36} y={y + 14} width={46} height={5} rx={2.5} fill={c('slate-200')} />
              <rect x={x + 36} y={y + 23} width={30} height={4} rx={2} fill={c('slate-100')} />
              <Pic x={x + 10} y={y + 38} w={88} h={72} k={k} r={4} />
              <rect
                x={x + 10}
                y={y + 118}
                width={pill}
                height={16}
                rx={8}
                fill={tinted ? c('amber-50') : c('slate-100')}
                stroke={tinted ? c('amber-500') : c('slate-200')}
              />
              <Txt x={x + 10 + pill / 2} y={y + 129} size={8.5} weight={700} fill={tinted ? c('amber-700') : c('slate-400')} anchor="middle">
                {label}
              </Txt>
              <rect x={x + 10} y={y + 146} width={70} height={5} rx={2.5} fill={c('slate-200')} />
              <rect x={x + 10} y={y + 156} width={50} height={5} rx={2.5} fill={c('slate-100')} />
            </g>
          );
        })}
      </>
    ),
  },

  // "Máy tạo ảnh AI" nhả ra ảnh kèm các thẻ metadata treo bằng dây.
  'what-metadata-ai-image-generators-add': {
    hue: 'violet',
    backdrop: 'dots',
    draw: (k) => {
      const tag = (x: number, y: number, text: string) => {
        const w = 22 + text.length * 5.5;
        return (
          <g key={text}>
            <path d={`M${x + 10} ${y} H${x + w} a4 4 0 0 1 4 4 V${y + 18} a4 4 0 0 1 -4 4 H${x + 10} L${x} ${y + 11} Z`} fill={k.h(100)} stroke={k.h(400)} />
            <circle cx={x + 9} cy={y + 11} r={2.5} fill={c('surface')} stroke={k.h(400)} />
            <Txt x={x + 18} y={y + 15} size={9} mono fill={k.h(700)}>
              {text}
            </Txt>
          </g>
        );
      };
      return (
        <>
          <rect x={20} y={56} width={112} height={104} rx={16} fill={DARK} />
          <rect x={32} y={68} width={88} height={52} rx={8} fill={PANEL} />
          <path d={sparkle(76, 94, 18)} fill={k.h(400)} />
          <path d={sparkle(100, 78, 7)} fill={k.h(200)} />
          <rect x={32} y={130} width={88} height={18} rx={9} fill="#334155" />
          <Txt x={42} y={142} size={7.5} mono fill={SOFT}>
            a fox, dawn…
          </Txt>
          <Arrow x1={138} x2={162} y={84} color={k.h(500)} width={3} />
          <rect x={168} y={20} width={128} height={98} rx={10} fill={c('surface')} stroke={c('slate-200')} />
          <Pic x={174} y={26} w={116} h={86} k={k} />
          <g stroke={c('slate-400')} strokeWidth={1.2} fill="none">
            <path d="M232 118 L149 151" />
            <path d="M232 118 L271 145" />
            <path d="M232 118 L205 193" />
          </g>
          {tag(140, 140, 'claim_generator')}
          {tag(262, 134, 'DigitalSourceType')}
          {tag(196, 182, 'parameters')}
        </>
      );
    },
  },

  // Ống kính phóng to điểm ảnh: thủy ấn SynthID nằm trong pixel, C2PA/XMP thì bị xóa.
  'synthid-invisible-ai-watermarks': {
    hue: 'rose',
    backdrop: 'grid',
    draw: (k) => (
      <>
        <Chip x={22} y={12} text="C2PA · XMP" />
        <rect x={22} y={44} width={184} height={140} rx={14} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={32} y={54} w={164} h={120} k={k} />
        <rect x={150} y={92} width={26} height={26} fill="none" stroke={DARK} strokeWidth={2} />
        <g stroke={c('slate-400')} strokeWidth={1.5} strokeDasharray="3 3">
          <line x1={176} y1={92} x2={292} y2={39} />
          <line x1={176} y1={118} x2={292} y2={177} />
        </g>
        <circle cx={306} cy={108} r={70} fill={c('surface')} stroke={k.h(500)} strokeWidth={3} />
        {Array.from({ length: 8 }, (_, i) =>
          Array.from({ length: 8 }, (_, j) => {
            const x = 258 + j * 12;
            const y = 60 + i * 12;
            const mark = (i * 3 + j * 2) % 5 === 0;
            return (
              <g key={`${i}-${j}`}>
                <rect x={x} y={y} width={11} height={11} fill={(i + j) % 3 ? k.h(200) : k.h(400)} opacity={0.35 + ((i * 7 + j * 3) % 5) * 0.13} />
                {mark && <circle cx={x + 5.5} cy={y + 5.5} r={2.4} fill={k.h(700)} />}
              </g>
            );
          }),
        )}
        <Chip x={246} y={188} text="SynthID (pixels)" tone="kept" />
      </>
    ),
  },

  // Cửa sổ ứng dụng chỉnh ảnh (nền tối) với hộp Export: tắt Content Credentials và metadata.
  'turn-off-content-credentials-photoshop-lightroom': {
    hue: 'sky',
    backdrop: 'blobs',
    draw: (k) => {
      const toggle = (x: number, y: number) => (
        <g>
          <rect x={x} y={y} width={22} height={12} rx={6} fill={MUTED} />
          <circle cx={x + 6} cy={y + 6} r={4.5} fill="#fff" />
        </g>
      );
      return (
        <>
          <rect x={18} y={14} width={364} height={198} rx={12} fill={PANEL} />
          <path d={topBar(18, 14, 364, 20, 12)} fill={PANEL_DEEP} />
          <Txt x={30} y={28} size={8} fill="#94a3b8">
            File   Edit   Image   Layer   Window
          </Txt>
          <rect x={24} y={40} width={20} height={164} rx={6} fill={PANEL_DEEP} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={28} y={48 + i * 22} width={12} height={12} rx={3} fill={i === 0 ? k.h(500) : MUTED} />
          ))}
          <Pic x={54} y={44} w={178} h={156} k={k} r={3} />
          <rect x={242} y={40} width={132} height={164} rx={8} fill={PANEL_DEEP} />
          <Txt x={254} y={58} size={10} weight={700} fill="#fff">
            Export As
          </Txt>
          <Txt x={254} y={82} size={8.5} fill={SOFT}>
            Content Credentials
          </Txt>
          {toggle(344, 73)}
          <Txt x={254} y={104} size={8.5} fill={SOFT}>
            Include metadata
          </Txt>
          {toggle(344, 95)}
          <Txt x={254} y={126} size={8.5} fill={SOFT}>
            Quality
          </Txt>
          <rect x={254} y={134} width={108} height={4} rx={2} fill={MUTED} />
          <rect x={254} y={134} width={86} height={4} rx={2} fill={k.h(400)} />
          <circle cx={340} cy={136} r={5} fill="#fff" />
          <rect x={254} y={172} width={108} height={22} rx={11} fill={k.h(500)} />
          <Txt x={308} y={187} size={9.5} weight={700} fill="#fff" anchor="middle">
            Export
          </Txt>
        </>
      );
    },
  },

  // Ảnh tải lên nền tảng (đám mây) → đăng bài thì bị xóa EXIF, gửi dạng tệp thì GPS vẫn còn.
  'which-platforms-strip-photo-metadata': {
    hue: 'emerald',
    backdrop: 'grid',
    draw: (k) => (
      <>
        <Chip x={16} y={40} text="EXIF · GPS" tone="info" k={k} />
        <rect x={16} y={72} width={92} height={80} rx={10} fill={c('surface')} stroke={c('slate-200')} />
        <Pic x={22} y={78} w={80} h={58} k={k} />
        <Txt x={22} y={147} size={7.5} mono fill={c('slate-400')}>
          IMG_0412.JPG
        </Txt>
        <Arrow x1={112} x2={128} y={104} dashed />
        <path d="M150 120 h80 a22 22 0 0 0 0 -44 a30 30 0 0 0 -56 -10 a22 22 0 0 0 -24 54 z" fill={c('surface')} stroke={k.h(400)} strokeWidth={2} />
        <g stroke={k.h(500)} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1={190} y1={110} x2={190} y2={80} />
          <path d="M180 90 L190 80 L200 90" />
        </g>
        <Txt x={190} y={140} size={9} weight={700} anchor="middle">
          Platform
        </Txt>
        <g stroke={c('slate-400')} strokeWidth={1.8} fill="none" strokeDasharray="2 4" strokeLinecap="round">
          <path d="M254 92 C266 92 266 56 276 56" />
          <path d="M254 106 C266 106 266 160 276 160" />
        </g>
        {[
          [22, 'Feed post', 'Stripped', c('emerald-700')],
          [128, 'As a file', 'GPS kept', c('rose-700')],
        ].map(([y, title, status, color], i) => (
          <g key={title as string}>
            <rect x={278} y={y as number} width={104} height={66} rx={10} fill={c('surface')} stroke={c('slate-200')} />
            <Pic x={286} y={(y as number) + 8} w={40} h={32} k={k} flip={i === 1} r={4} />
            <Txt x={332} y={(y as number) + 20} size={8.5} weight={700}>
              {title}
            </Txt>
            <Txt x={332} y={(y as number) + 34} size={8} weight={700} fill={color as string}>
              {status}
            </Txt>
            <Mark cx={300} cy={(y as number) + 53} r={6.5} kind={i === 0 ? 'yes' : 'no'} />
            <rect x={312} y={(y as number) + 50} width={60} height={5} rx={2.5} fill={c('slate-100')} />
          </g>
        ))}
      </>
    ),
  },

  // Hai điện thoại: iPhone (thông tin ảnh + bản đồ) và Android (bảng chi tiết, nút xóa vị trí).
  'view-remove-metadata-iphone-android': {
    hue: 'indigo',
    backdrop: 'dots',
    draw: (k) => (
      <>
        <rect x={64} y={10} width={108} height={204} rx={20} fill={DARK} />
        <rect x={70} y={16} width={96} height={192} rx={15} fill={c('surface')} />
        <rect x={104} y={22} width={28} height={8} rx={4} fill={DARK} />
        <Pic x={76} y={38} w={84} h={62} k={k} r={4} />
        <Txt x={78} y={116} size={8} weight={700}>
          iPhone 15 Pro
        </Txt>
        <Txt x={78} y={128} size={7} mono fill={c('slate-400')}>
          f/1.8 · ISO 64
        </Txt>
        <rect x={76} y={136} width={84} height={40} rx={6} fill={k.h(100)} />
        <path d="M76 162 L160 146" stroke={c('surface')} strokeWidth={4} />
        <circle cx={118} cy={154} r={5} fill={c('rose-500')} />
        <circle cx={118} cy={154} r={2} fill="#fff" />
        <Txt x={118} y={194} size={8} weight={700} fill={k.h(700)} anchor="middle">
          Adjust location
        </Txt>

        <rect x={228} y={10} width={108} height={204} rx={14} fill={PANEL} />
        <rect x={234} y={16} width={96} height={192} rx={8} fill={c('surface')} />
        <circle cx={282} cy={24} r={3.5} fill={DARK} />
        <Pic x={240} y={34} w={84} h={62} k={k} flip r={4} />
        <rect x={234} y={106} width={96} height={102} rx={8} fill={c('slate-100')} />
        <Txt x={242} y={122} size={8} weight={700}>
          Details
        </Txt>
        {['Location', 'Camera'].map((label, i) => (
          <g key={label}>
            <Txt x={242} y={140 + i * 16} size={7.5} fill={c('slate-400')}>
              {label}
            </Txt>
            <rect x={302} y={133 + i * 16} width={20} height={10} rx={5} fill={c('slate-400')} />
            <circle cx={307} cy={138 + i * 16} r={3.5} fill="#fff" />
          </g>
        ))}
        <rect x={242} y={176} width={80} height={20} rx={10} fill={k.h(500)} />
        <Txt x={282} y={189.5} size={8} weight={700} fill="#fff" anchor="middle">
          Remove
        </Txt>
      </>
    ),
  },

  // Ống kính máy ảnh với chú thích thông số EXIF: khẩu độ, tốc độ, ISO, tiêu cự.
  'what-is-exif-data': {
    hue: 'violet',
    backdrop: 'stripes',
    draw: (k) => {
      const cx = 120;
      const cy = 112;
      const hex = (r: number, rot: number) =>
        `${Array.from({ length: 6 }, (_, i) => {
          const a = ((i * 60 + rot) * Math.PI) / 180;
          return `${i ? 'L' : 'M'}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
        }).join(' ')} Z`;
      const callouts = [
        { deg: -50, y: 40, key: 'Aperture', value: 'f/2.8' },
        { deg: -15, y: 86, key: 'Shutter', value: '1/250 s' },
        { deg: 20, y: 132, key: 'ISO', value: '100' },
        { deg: 55, y: 178, key: 'Focal', value: '35 mm' },
      ];
      return (
        <>
          <circle cx={cx} cy={cy} r={84} fill={DARK} />
          <circle cx={cx} cy={cy} r={68} fill={PANEL} />
          <path d={hex(52, 0)} fill={k.h(500)} />
          <path d={hex(22, 30)} fill={DARK} />
          <g stroke={k.h(400)} strokeWidth={1.5}>
            {Array.from({ length: 6 }, (_, i) => {
              const a = ((i * 60 + 30) * Math.PI) / 180;
              const b = ((i * 60 + 60) * Math.PI) / 180;
              return <line key={i} x1={cx + 22 * Math.cos(a)} y1={cy + 22 * Math.sin(a)} x2={cx + 52 * Math.cos(b)} y2={cy + 52 * Math.sin(b)} />;
            })}
          </g>
          <path d={`M${cx - 52} ${cy - 30} A60 60 0 0 1 ${cx - 10} ${cy - 59}`} stroke="#fff" strokeWidth={4} fill="none" opacity={0.35} strokeLinecap="round" />
          {callouts.map((o) => {
            const a = (o.deg * Math.PI) / 180;
            const px = cx + 84 * Math.cos(a);
            const py = cy + 84 * Math.sin(a);
            return (
              <g key={o.key}>
                <path d={`M${px} ${py} L${px + 14} ${o.y} H236`} stroke={k.h(400)} strokeWidth={1.5} fill="none" />
                <circle cx={px} cy={py} r={3} fill={k.h(400)} />
                <rect x={236} y={o.y - 12} width={140} height={24} rx={12} fill={c('surface')} stroke={k.h(200)} />
                <Txt x={250} y={o.y + 4} size={8.5} fill={c('slate-400')}>
                  {o.key}
                </Txt>
                <Txt x={364} y={o.y + 4} size={11} weight={700} mono fill={k.h(700)} anchor="end">
                  {o.value}
                </Txt>
              </g>
            );
          })}
        </>
      );
    },
  },
};

/** Màu chủ đạo của ảnh minh họa bài — ảnh chia sẻ (seo/og.tsx) dùng cùng màu cho thẻ chủ đề và quầng sáng. */
export const guideHue = (slug: GuideSlug): Hue => SCENES[slug].hue;

export function GuideIllustration({ slug, className = '' }: { slug: GuideSlug; className?: string }) {
  const scene = SCENES[slug];
  const k: Kit = { hue: scene.hue, h: (shade) => c(`${scene.hue}-${shade}`) };
  return (
    <svg viewBox="0 0 400 225" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <Backdrop kind={scene.backdrop} k={k} />
      {scene.draw(k)}
    </svg>
  );
}
