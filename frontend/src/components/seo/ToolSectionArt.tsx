import type { ReactNode } from 'react';
import type { ToolSlug } from '../../content/seo';
import { Backdrop, c, Card, Check, Chip, DARKER, Photo, Pin, Sparkle, tone, Txt } from './ToolArt';

/**
 * Ảnh minh họa cho từng phần hướng dẫn trên trang công cụ (/tools/{slug}/): mỗi trang 3 cảnh, theo đúng thứ tự
 * `guide.sections`, không cảnh nào trùng với cảnh khác hay với ảnh thẻ công cụ (ToolArt). Cùng quy ước với ToolArt:
 * khung 320×180, màu lấy từ biến bảng màu nên tự đổi theo Sáng/Tối, chữ trong hình là thuật ngữ kỹ thuật,
 * thuần trang trí (aria-hidden) vì nội dung nằm ở đoạn văn ngay cạnh.
 */

// ---------- Biểu tượng nhỏ ----------

function Clock({ x, y, r = 10, stroke }: { x: number; y: number; r?: number; stroke: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c('surface')} stroke={stroke} strokeWidth={2.2} />
      <path d={`M${x} ${y - r * 0.55} V${y} L${x + r * 0.45} ${y + r * 0.3}`} fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

function Envelope({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={1.8} strokeLinejoin="round">
      <rect x={x - 9} y={y - 6} width={18} height={12} rx={2} />
      <path d={`M${x - 9} ${y - 5} L${x} ${y + 1} L${x + 9} ${y - 5}`} />
    </g>
  );
}

function Cloud({ x, y, fill }: { x: number; y: number; fill: string }) {
  return <path d={`M${x - 8} ${y + 5} H${x + 8} A5 5 0 0 0 ${x + 7} ${y - 4} A7 7 0 0 0 ${x - 6} ${y - 3} A4.5 4.5 0 0 0 ${x - 8} ${y + 5} Z`} fill={fill} />;
}

function Doc({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={1.8} strokeLinejoin="round">
      <path d={`M${x - 6} ${y - 8} H${x + 2} L${x + 6} ${y - 4} V${y + 8} H${x - 6} Z`} />
      <path d={`M${x - 3} ${y} H${x + 3} M${x - 3} ${y + 4} H${x + 3}`} />
    </g>
  );
}

function Globe({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={1.6}>
      <circle cx={x} cy={y} r={8} />
      <ellipse cx={x} cy={y} rx={3.5} ry={8} />
      <path d={`M${x - 8} ${y} H${x + 8}`} />
    </g>
  );
}

function MiniCamera({ x, y, fill }: { x: number; y: number; fill: string }) {
  return (
    <g>
      <rect x={x - 11} y={y - 6} width={22} height={15} rx={3} fill={fill} />
      <rect x={x - 6} y={y - 9} width={8} height={4} rx={1.5} fill={fill} />
      <circle cx={x} cy={y + 1.5} r={4.5} fill={c('surface')} />
      <circle cx={x} cy={y + 1.5} r={2.2} fill={fill} />
    </g>
  );
}

/** Kính lúp nhỏ. */
function Lens({ x, y, r = 12, stroke }: { x: number; y: number; r?: number; stroke: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c('surface')} opacity={0.5} stroke={stroke} strokeWidth={r * 0.28} />
      <path d={`M${x + r * 0.72} ${y + r * 0.72} L${x + r * 1.45} ${y + r * 1.45}`} stroke={stroke} strokeWidth={r * 0.45} strokeLinecap="round" />
    </g>
  );
}

/** Thanh tiến độ: nền nhạt + phần đã đầy. */
function Bar({ x, y, w, h = 8, ratio, fill, track = c('slate-100') }: { x: number; y: number; w: number; h?: number; ratio: number; fill: string; track?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={track} />
      <rect x={x} y={y} width={Math.max(h, w * ratio)} height={h} rx={h / 2} fill={fill} />
    </g>
  );
}

/** Nhãn màu đặc chữ trắng. */
function Tag({ x, y, w, label, fill }: { x: number; y: number; w: number; label: string; fill: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={14} rx={4} fill={fill} />
      <Txt x={x + w / 2} y={y + 10} size={7.5} anchor="middle" fill="#fff" weight={700}>
        {label}
      </Txt>
    </g>
  );
}

// ---------- Xem metadata ----------

/** Các nhóm metadata: tệp ảnh "bung" thành từng lớp EXIF, GPS, XMP, IPTC, C2PA, PNG text, ICC. */
function ViewGroups() {
  const k = tone('violet');
  const layers: [string, string, string][] = [
    ['EXIF', '#6366f1', 'Canon · 2026:10:31'],
    ['GPS', '#f43f5e', '21.0285, 105.8542'],
    ['XMP', '#8b5cf6', 'Lightroom 13.2'],
    ['IPTC', '#0ea5e9', '© credit line'],
    ['C2PA', DARKER, 'signed manifest'],
    ['PNG txt', '#f59e0b', 'prompt · seed'],
    ['ICC', '#10b981', 'Display P3'],
  ];
  return (
    <Backdrop k={k}>
      <path d="M24 38 H76 L94 56 V146 H24 Z" fill={c('surface')} stroke={c('slate-200')} />
      <path d="M76 38 V56 H94" fill={k(100)} stroke={c('slate-200')} />
      <Photo x={32} y={64} w={54} h={46} k={k} r={4} />
      <Txt x={59} y={128} size={7.5} anchor="middle" fill={c('slate-500')}>
        IMG_0423
      </Txt>
      <Txt x={59} y={138} size={7.5} anchor="middle" fill={c('slate-500')}>
        .jpg
      </Txt>
      {layers.map(([label, fill, value], i) => {
        const y = 20 + i * 21;
        return (
          <g key={label}>
            <path d={`M96 ${92} C112 92 110 ${y + 9} 126 ${y + 9}`} stroke={k(400)} strokeWidth={1.2} fill="none" opacity={0.7} />
            <rect x={126} y={y} width={174} height={18} rx={5} fill={c('surface')} stroke={c('slate-200')} />
            <Tag x={129} y={y + 2} w={44} label={label} fill={fill} />
            <Txt x={180} y={y + 12} size={7.5} fill={c('slate-700')}>
              {value}
            </Txt>
          </g>
        );
      })}
    </Backdrop>
  );
}

/** Đọc báo cáo: ô tìm kiếm đang gõ "GPS", ba kết luận AI và tóm tắt quyền riêng tư. */
function ViewReport() {
  const k = tone('sky');
  const verdicts: [string, string, string][] = [
    ['AI signals detected', '#f43f5e', c('rose-50')],
    ['Needs a closer look', '#f59e0b', c('amber-50')],
    ['No AI signals', '#10b981', c('emerald-50')],
  ];
  const summary: [string, number, string][] = [
    ['Location', 2, '#f43f5e'],
    ['Personal', 3, '#f59e0b'],
    ['Time', 2, '#0ea5e9'],
  ];
  return (
    <Backdrop k={k}>
      <Card x={20} y={16} w={280} h={148} r={12} />
      <rect x={32} y={28} width={152} height={22} rx={11} fill={c('slate-100')} />
      <circle cx={46} cy={38.5} r={4.5} fill="none" stroke={c('slate-500')} strokeWidth={1.6} />
      <path d="M49.5 42 L53 45.5" stroke={c('slate-500')} strokeWidth={1.6} strokeLinecap="round" />
      <Txt x={60} y={42.5} size={9} fill={c('slate-900')} weight={700}>
        GPS
      </Txt>
      <rect x={80} y={33} width={1.5} height={11} fill={k(500)} />
      {verdicts.map(([label, dot, bg], i) => {
        const y = 62 + i * 30;
        const on = i === 0;
        return (
          <g key={label} opacity={on ? 1 : 0.5}>
            <rect x={32} y={y} width={152} height={22} rx={6} fill={bg} stroke={on ? dot : 'none'} strokeWidth={1.5} />
            <circle cx={44} cy={y + 11} r={4} fill={dot} />
            <Txt x={54} y={y + 14} size={8} fill={c('slate-800')} weight={600}>
              {label}
            </Txt>
          </g>
        );
      })}
      <rect x={196} y={28} width={92} height={124} rx={8} fill={k(50)} />
      <Txt x={206} y={44} size={7.5} fill={k(700)} weight={700}>
        PRIVACY
      </Txt>
      {summary.map(([label, n, fill], i) => (
        <g key={label}>
          <circle cx={211} cy={64 + i * 28} r={6} fill={fill} />
          <Txt x={222} y={67 + i * 28} size={8} fill={c('slate-700')} weight={600}>
            {label}
          </Txt>
          <rect x={266} y={57 + i * 28} width={14} height={14} rx={4} fill={c('surface')} />
          <Txt x={273} y={67 + i * 28} size={8} anchor="middle" fill={c('slate-900')} weight={700}>
            {n}
          </Txt>
        </g>
      ))}
    </Backdrop>
  );
}

/** Khi nào nên kiểm tra: ảnh nhận từ người lạ, ảnh sắp đăng, bản đã làm sạch được kiểm tra lại. */
function ViewWhen() {
  const k = tone('amber');
  return (
    <Backdrop k={k}>
      {/* Ảnh nhận được trong khung chat */}
      <Card x={20} y={30} w={86} h={120} />
      <circle cx={34} cy={44} r={7} fill={c('slate-200')} />
      <Txt x={34} y={47.5} size={9} anchor="middle" fill={c('slate-500')} weight={800} mono={false}>
        ?
      </Txt>
      <rect x={45} y={41} width={40} height={5} rx={2.5} fill={c('slate-200')} />
      <rect x={28} y={58} width={70} height={60} rx={10} fill={c('slate-100')} />
      <Photo x={33} y={63} w={60} h={50} k={k} r={6} />
      <rect x={28} y={126} width={48} height={14} rx={7} fill={c('slate-100')} />
      {/* Bài sắp đăng */}
      <Card x={117} y={22} w={86} h={136} />
      <circle cx={131} cy={36} r={7} fill={k(400)} />
      <rect x={142} y={33} width={44} height={5} rx={2.5} fill={c('slate-200')} />
      <Photo x={125} y={50} w={70} h={64} k={tone('sky')} r={4} />
      <rect x={125} y={122} width={70} height={4} rx={2} fill={c('slate-200')} />
      <rect x={125} y={130} width={46} height={4} rx={2} fill={c('slate-200')} />
      <rect x={161} y={139} width={34} height={13} rx={6.5} fill="#6366f1" />
      <Txt x={178} y={148.5} size={7.5} anchor="middle" fill="#fff" weight={700} mono={false}>
        Post
      </Txt>
      <Lens x={186} y={70} r={13} stroke={k(700)} />
      {/* Bản đã làm sạch */}
      <Card x={214} y={30} w={86} h={120} />
      <Photo x={222} y={38} w={70} h={62} k={tone('emerald')} r={4} />
      <Check x={292} y={36} r={10} />
      <Chip x={222} y={110} label="0 fields" kind="good" />
      <rect x={222} y={132} width={62} height={4} rx={2} fill={c('slate-200')} />
    </Backdrop>
  );
}

// ---------- Kiểm tra quyền riêng tư ----------

/** Bốn loại rủi ro quanh một bức ảnh: vị trí, thiết bị/cá nhân, thời gian, AI. */
function PrivacyKinds() {
  const k = tone('indigo');
  const tile = (x: number, y: number, icon: ReactNode, label: string, value: string) => (
    <g>
      <Card x={x} y={y} w={92} h={50} r={8} />
      {icon}
      <Txt x={x + 34} y={y + 21} size={8} fill={c('slate-900')} weight={700} mono={false}>
        {label}
      </Txt>
      <Txt x={x + 34} y={y + 35} size={7} fill={c('slate-500')}>
        {value}
      </Txt>
    </g>
  );
  return (
    <Backdrop k={k}>
      {[
        [112, 64, 70, 50],
        [208, 64, 230, 50],
        [112, 116, 70, 130],
        [208, 116, 230, 130],
      ].map(([x1, y1, x2, y2], i) => (
        <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={k(400)} strokeWidth={2} strokeDasharray="3 4" />
      ))}
      {tile(18, 22, <Pin x={34} y={44} s={0.85} />, 'Location', '21.03,105.8')}
      {tile(210, 22, <MiniCamera x={228} y={46} fill={DARKER} />, 'Device', 'SN 04231')}
      {tile(18, 108, <Clock x={34} y={133} stroke="#0ea5e9" />, 'Time', '+07:00')}
      {tile(210, 108, <Sparkle x={228} y={133} s={10} fill="#8b5cf6" />, 'AI', 'C2PA')}
      <Card x={114} y={44} w={92} h={92} r={10} />
      <Photo x={121} y={51} w={78} h={78} k={k} r={6} />
    </Backdrop>
  );
}

/** Mức rủi ro: đồng hồ ba vùng Low / Medium / High, kim chỉ vào High vì có GPS. */
function PrivacyLevels() {
  const k = tone('sky');
  const [cx, cy, r] = [160, 132, 80];
  const pt = (deg: number, rr = r) => [cx + rr * Math.cos((deg * Math.PI) / 180), cy + rr * Math.sin((deg * Math.PI) / 180)];
  const arc = (a1: number, a2: number) => {
    const [x1, y1] = pt(a1);
    const [x2, y2] = pt(a2);
    return `M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`;
  };
  const zones: [number, number, string, string][] = [
    [182, 238, '#10b981', 'LOW'],
    [242, 298, '#f59e0b', 'MED'],
    [302, 358, '#f43f5e', 'HIGH'],
  ];
  const [nx, ny] = pt(332, 62);
  return (
    <Backdrop k={k}>
      {zones.map(([a1, a2, fill, label]) => {
        const [lx, ly] = pt((a1 + a2) / 2, r + 22);
        return (
          <g key={label}>
            <path d={arc(a1, a2)} stroke={fill} strokeWidth={20} fill="none" />
            <Txt x={lx} y={ly + 3} size={8} anchor="middle" fill={c('slate-700')} weight={800}>
              {label}
            </Txt>
          </g>
        );
      })}
      <path d={`M${cx} ${cy} L${nx} ${ny}`} stroke={DARKER} strokeWidth={5} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={9} fill={DARKER} />
      <circle cx={cx} cy={cy} r={3.5} fill="#fff" />
      <Card x={18} y={140} w={88} h={26} r={8} />
      <Pin x={34} y={150} s={0.6} />
      <Txt x={46} y={157} size={8} fill={c('slate-900')} weight={700}>
        GPS found
      </Txt>
      <Card x={214} y={140} w={88} h={26} r={8} />
      <circle cx={228} cy={153} r={5} fill="#f43f5e" />
      <Txt x={238} y={157} size={8} fill={c('slate-900')} weight={700}>
        Remove it
      </Txt>
    </Backdrop>
  );
}

/** Metadata còn sót khi chia sẻ: email, liên kết đám mây, gửi dạng tệp vẫn giữ GPS; mạng xã hội thường xóa. */
function PrivacyChannels() {
  const k = tone('emerald');
  const stroke = c('slate-600');
  const channels: [ReactNode, string, boolean][] = [
    [<Envelope key="e" x={170} y={35} stroke={stroke} />, 'Email', true],
    [<Cloud key="c" x={170} y={71} fill={c('slate-400')} />, 'Cloud link', true],
    [<Doc key="d" x={170} y={107} stroke={stroke} />, 'Chat · file', true],
    [<Globe key="g" x={170} y={143} stroke={stroke} />, 'Social feed', false],
  ];
  return (
    <Backdrop k={k}>
      <Card x={18} y={50} w={84} h={84} r={10} />
      <Photo x={25} y={57} w={70} h={52} k={k} r={5} />
      <Chip x={25} y={114} label="GPS" />
      {channels.map(([icon, label, keeps], i) => {
        const y = 21 + i * 36;
        return (
          <g key={label}>
            <path d={`M102 92 C128 92 128 ${y + 14} 154 ${y + 14}`} stroke={keeps ? '#f43f5e' : '#10b981'} strokeWidth={1.8} fill="none" strokeDasharray="4 3" />
            <Card x={154} y={y} w={146} h={28} r={7} />
            {icon}
            <Txt x={186} y={y + 17.5} size={8} fill={c('slate-800')} weight={600} mono={false}>
              {label}
            </Txt>
            {keeps ? <Chip x={258} y={y + 6.5} label="GPS" /> : <Check x={286} y={y + 14} r={8} />}
          </g>
        );
      })}
    </Backdrop>
  );
}

// ---------- Dung lượng metadata ----------

/** Khối nào chiếm chỗ: cột ngang xếp từ nhỏ đến lớn, ICC giữ lại (xanh), dữ liệu sau ảnh dài nhất. */
function SizeBlocks() {
  const k = tone('emerald');
  const rows: [string, string, number, string][] = [
    ['ICC', '3 KB', 8, '#10b981'],
    ['EXIF', '18 KB', 22, '#6366f1'],
    ['XMP', '64 KB', 46, '#8b5cf6'],
    ['C2PA', '92 KB', 66, DARKER],
    ['Workflow', '180 KB', 98, '#f59e0b'],
    ['Trailer', '2.1 MB', 150, '#f43f5e'],
  ];
  return (
    <Backdrop k={k}>
      <Card x={20} y={16} w={280} h={148} r={12} />
      {rows.map(([label, size, w, fill], i) => {
        const y = 26 + i * 19.5;
        return (
          <g key={label}>
            <Txt x={32} y={y + 9} size={8} fill={c('slate-600')} weight={600}>
              {label}
            </Txt>
            <rect x={86} y={y} width={w} height={12} rx={4} fill={fill} opacity={i === 0 ? 1 : 0.9} />
            {i === rows.length - 1 && <path d={`M${86 + w - 26} ${y - 2} l5 8 l-5 8 M${86 + w - 20} ${y - 2} l5 8 l-5 8`} stroke={c('surface')} strokeWidth={2} fill="none" />}
            <Txt x={86 + w + 6} y={y + 9} size={7.5} fill={c('slate-900')} weight={700}>
              {size}
            </Txt>
          </g>
        );
      })}
      <Txt x={32} y={156} size={7} fill={c('emerald-700')} weight={700}>
        ICC = kept
      </Txt>
    </Backdrop>
  );
}

/** Vì sao dung lượng quan trọng: trang web nhiều ảnh × lượt xem → tiết kiệm cộng dồn. */
function SizeMatters() {
  const k = tone('rose');
  const lines: [string, string][] = [
    ['−48 KB', 'per image'],
    ['× 6', 'images'],
    ['× 10k', 'visits'],
  ];
  return (
    <Backdrop k={k}>
      <Card x={18} y={20} w={170} h={140} r={10} />
      <rect x={18} y={20} width={170} height={18} rx={10} fill={c('slate-100')} />
      <rect x={18} y={30} width={170} height={8} fill={c('slate-100')} />
      <rect x={52} y={25} width={102} height={8} rx={4} fill={c('surface')} />
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => {
          const x = 28 + col * 52;
          const y = 46 + row * 54;
          return (
            <g key={`${col}-${row}`}>
              <Photo x={x} y={y} w={46} h={46} k={(col + row) % 2 ? tone('sky') : k} r={4} />
              <rect x={x + 30} y={y + 32} width={14} height={12} rx={3} fill="#f59e0b" stroke={c('surface')} strokeWidth={1.5} />
              <path d={`M${x + 31} ${y + 33} L${x + 43} ${y + 43}`} stroke="#fff" strokeWidth={1.6} />
            </g>
          );
        }),
      )}
      {lines.map(([n, label], i) => (
        <g key={label}>
          <Txt x={204} y={46 + i * 26} size={12} fill={c('slate-900')} weight={800}>
            {n}
          </Txt>
          <Txt x={252} y={46 + i * 26} size={7.5} fill={c('slate-500')}>
            {label}
          </Txt>
        </g>
      ))}
      <path d="M204 112 H300" stroke={c('slate-300')} strokeWidth={1.5} />
      <rect x={200} y={120} width={100} height={34} rx={8} fill="#10b981" />
      <Txt x={250} y={142} size={13} anchor="middle" fill="#fff" weight={800}>
        2.9 GB
      </Txt>
    </Backdrop>
  );
}

/** Đọc kết quả: tổng metadata + tỉ lệ, các khối xếp từ lớn đến nhỏ, ICC "kept" màu xanh. */
function SizeResult() {
  const k = tone('indigo');
  const blocks: [string, string, number][] = [
    ['C2PA', '140 KB', 1],
    ['XMP', '96 KB', 0.69],
    ['EXIF', '52 KB', 0.37],
    ['Thumb', '24 KB', 0.17],
  ];
  return (
    <Backdrop k={k}>
      <Card x={20} y={14} w={280} h={152} r={12} />
      <Txt x={34} y={36} size={8} fill={c('slate-500')} weight={600} mono={false}>
        Metadata
      </Txt>
      <Txt x={34} y={54} size={16} fill={c('slate-900')} weight={800} mono={false}>
        312 KB
      </Txt>
      <rect x={232} y={28} width={56} height={22} rx={11} fill={c('amber-100')} />
      <Txt x={260} y={42.5} size={9} anchor="middle" fill={c('amber-700')} weight={800}>
        18%
      </Txt>
      <Bar x={34} y={62} w={254} h={9} ratio={0.18} fill="#f59e0b" track="#7dd3fc" />
      {blocks.map(([label, size, ratio], i) => {
        const y = 84 + i * 15;
        return (
          <g key={label}>
            <Txt x={34} y={y + 6.5} size={7.5} fill={c('slate-600')} weight={600}>
              {label}
            </Txt>
            <Bar x={74} y={y} w={168} h={7} ratio={ratio} fill={k(500)} />
            <Txt x={288} y={y + 6.5} size={7.5} anchor="end" fill={c('slate-900')} weight={700}>
              {size}
            </Txt>
          </g>
        );
      })}
      <rect x={30} y={143} width={260} height={16} rx={5} fill={c('emerald-50')} />
      <Txt x={36} y={154} size={7.5} fill={c('emerald-700')} weight={600}>
        ICC
      </Txt>
      <Bar x={74} y={147.5} w={168} h={7} ratio={0.04} fill="#10b981" track={c('emerald-100')} />
      <Txt x={286} y={154} size={7.5} anchor="end" fill={c('emerald-700')} weight={700}>
        kept
      </Txt>
    </Backdrop>
  );
}

const SCENES: Record<ToolSlug, (() => ReactNode)[]> = {
  'view-metadata': [ViewGroups, ViewReport, ViewWhen],
  'privacy-check': [PrivacyKinds, PrivacyLevels, PrivacyChannels],
  'metadata-size': [SizeBlocks, SizeMatters, SizeResult],
};

/** Ảnh cho phần hướng dẫn thứ `index` của công cụ; `null` nếu phần đó không có ảnh riêng. */
export function ToolSectionArt({ slug, index, className = '' }: { slug: ToolSlug; index: number; className?: string }) {
  const Scene = SCENES[slug][index];
  if (!Scene) return null;
  return (
    <svg viewBox="0 0 320 180" className={className} aria-hidden="true" focusable="false">
      <Scene />
    </svg>
  );
}
