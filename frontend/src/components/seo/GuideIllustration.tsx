import type { ReactNode } from 'react';
import type { GuideSlug } from '../../content/seo';

/**
 * Ảnh minh họa SVG cho từng bài hướng dẫn: một "bức ảnh" bên trái và các khối metadata bị gạch bỏ bên phải.
 * Vẽ bằng biến màu của bảng màu (var(--color-…)) nên tự đổi theo chế độ Sáng/Tối, không cần tải ảnh ngoài.
 * Chữ trong hình là thuật ngữ kỹ thuật, giống nhau ở mọi ngôn ngữ.
 */
type Hue = 'indigo' | 'rose' | 'amber' | 'emerald' | 'sky' | 'violet';

interface ChipSpec {
  text: string;
  /** Khối được giữ lại (tô xanh) thay vì bị gạch bỏ. */
  kept?: boolean;
}

const SCENES: Record<
  GuideSlug,
  {
    hue: Hue;
    chips: ChipSpec[];
    badge: 'ai' | 'eye' | 'pin' | 'cr' | 'text' | 'stack' | 'search' | 'dots' | 'ext';
    /** Nhãn đuôi tệp cho badge 'ext'. */
    ext?: string;
  }
> = {
  'made-with-ai-label': {
    hue: 'rose',
    badge: 'ai',
    chips: [{ text: 'DigitalSourceType' }, { text: 'compositeWithTrained…' }, { text: 'c2pa.actions' }],
  },
  'remove-stable-diffusion-comfyui-metadata': {
    hue: 'violet',
    badge: 'text',
    chips: [{ text: 'parameters' }, { text: 'Steps: 30, Seed: 42' }, { text: 'workflow { … }' }],
  },
  'hide-midjourney-dalle-prompts': {
    hue: 'indigo',
    badge: 'eye',
    chips: [{ text: 'prompt: a cat in…' }, { text: 'Job ID: 7f3c…' }, { text: 'trainedAlgorithmic…' }],
  },
  'what-is-c2pa-content-credentials': {
    hue: 'sky',
    badge: 'cr',
    chips: [{ text: 'claim_generator' }, { text: 'c2pa.created' }, { text: 'signature ✓' }],
  },
  'remove-gps-location-from-photos': {
    hue: 'emerald',
    badge: 'pin',
    chips: [{ text: 'GPSLatitude 21.0285' }, { text: 'GPSLongitude 105.85' }, { text: 'DateTimeOriginal' }],
  },
  'batch-remove-metadata': {
    hue: 'amber',
    badge: 'stack',
    chips: [{ text: 'IMG_0001.HEIC' }, { text: 'IMG_0002.JPG' }, { text: 'metadata-cleared.zip', kept: true }],
  },
  // Bài kiểm tra: các khối được tìm thấy (tô xanh) thay vì bị gạch.
  'how-to-check-if-image-is-ai-generated': {
    hue: 'indigo',
    badge: 'search',
    chips: [
      { text: 'c2pa.created', kept: true },
      { text: 'trainedAlgorithmic…', kept: true },
      { text: 'CreatorTool', kept: true },
    ],
  },
  'which-platforms-label-ai-images': {
    hue: 'amber',
    badge: 'ai',
    chips: [{ text: 'C2PA manifest' }, { text: 'IPTC SourceType' }, { text: 'Self-disclosure', kept: true }],
  },
  'what-metadata-ai-image-generators-add': {
    hue: 'violet',
    badge: 'cr',
    chips: [{ text: 'claim_generator' }, { text: 'DigitalSourceType' }, { text: 'parameters' }],
  },
  // Thủy ấn trong điểm ảnh không bị xóa cùng metadata → khối "SynthID" giữ lại.
  'synthid-invisible-ai-watermarks': {
    hue: 'rose',
    badge: 'dots',
    chips: [{ text: 'C2PA' }, { text: 'XMP / IPTC' }, { text: 'SynthID (pixels)', kept: true }],
  },
  'turn-off-content-credentials-photoshop-lightroom': {
    hue: 'sky',
    badge: 'cr',
    chips: [{ text: 'Content Credentials' }, { text: 'c2pa.edited' }, { text: 'Generative Fill' }],
  },
  'which-platforms-strip-photo-metadata': {
    hue: 'emerald',
    badge: 'stack',
    chips: [{ text: 'Feed upload: EXIF' }, { text: 'Chat photo: EXIF' }, { text: 'Sent as file', kept: true }],
  },
  'view-remove-metadata-iphone-android': {
    hue: 'indigo',
    badge: 'pin',
    chips: [{ text: 'GPSLatitude' }, { text: 'Model: iPhone 15' }, { text: 'DateTimeOriginal' }],
  },
  'what-is-exif-data': {
    hue: 'sky',
    badge: 'text',
    chips: [{ text: 'Make: Canon' }, { text: 'ExposureTime 1/250' }, { text: 'ISO 100' }],
  },
  // Landing page theo việc cần làm: khối cuối (giữ lại) cho thấy ảnh không bị nén lại.
  'remove-c2pa': {
    hue: 'sky',
    badge: 'cr',
    chips: [{ text: 'C2PA manifest' }, { text: 'c2pa.actions' }, { text: 'Pixels: byte-identical', kept: true }],
  },
  'remove-exif': {
    hue: 'emerald',
    badge: 'pin',
    chips: [{ text: 'GPSLatitude' }, { text: 'Make · Model · Serial' }, { text: 'Orientation · ICC', kept: true }],
  },
  // Landing page theo định dạng: nhãn đuôi tệp trên ảnh, khối cuối (giữ lại) cho thấy chất lượng không đổi.
  'remove-metadata-from-jpg': {
    hue: 'amber',
    badge: 'ext',
    ext: 'JPG',
    chips: [{ text: 'APP1 EXIF · GPS' }, { text: 'APP11 C2PA' }, { text: 'Pixels: byte-identical', kept: true }],
  },
  'remove-metadata-from-png': {
    hue: 'violet',
    badge: 'ext',
    ext: 'PNG',
    chips: [{ text: 'tEXt parameters' }, { text: 'iTXt XMP · caBX' }, { text: 'IDAT · iCCP', kept: true }],
  },
  'remove-metadata-from-heic': {
    hue: 'emerald',
    badge: 'ext',
    ext: 'HEIC',
    chips: [{ text: 'Exif item · GPS' }, { text: 'uuid C2PA / XMP' }, { text: 'mdat HEVC', kept: true }],
  },
  'remove-metadata-from-webp': {
    hue: 'sky',
    badge: 'ext',
    ext: 'WebP',
    chips: [{ text: 'EXIF chunk' }, { text: 'XMP chunk' }, { text: 'VP8 · ICCP · ANIM', kept: true }],
  },
};

const c = (name: string) => `var(--color-${name})`;
const CHAR_W = 6.2;

function Chip({ x, y, spec }: { x: number; y: number; spec: ChipSpec }) {
  const w = 22 + spec.text.length * CHAR_W;
  const removed = !spec.kept;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={26} rx={8} fill={c(removed ? 'rose-50' : 'emerald-50')} stroke={c(removed ? 'rose-200' : 'emerald-200')} />
      <text x={11} y={17} fontSize={10.5} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fill={c(removed ? 'rose-700' : 'emerald-700')}>
        {spec.text}
      </text>
      {removed && <line x1={8} y1={13} x2={w - 8} y2={13} stroke={c('rose-700')} strokeWidth={1.5} opacity={0.7} />}
    </g>
  );
}

function Photo({ hue, x, y, children }: { hue: Hue; x: number; y: number; children?: ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={160} height={150} rx={14} fill={c('surface')} stroke={c('slate-200')} />
      <rect x={10} y={10} width={140} height={98} rx={8} fill={c(`${hue}-200`)} />
      <circle cx={112} cy={38} r={12} fill={c(`${hue}-400`)} opacity={0.85} />
      <path d="M10 108 L58 56 L88 86 L106 68 L150 108 Z" fill={c(`${hue}-500`)} opacity={0.8} />
      <rect x={10} y={120} width={96} height={8} rx={4} fill={c('slate-200')} />
      <rect x={10} y={134} width={64} height={7} rx={3.5} fill={c('slate-100')} />
      {children}
    </g>
  );
}

function Badge({ kind, ext = '' }: { kind: (typeof SCENES)[GuideSlug]['badge']; ext?: string }) {
  switch (kind) {
    case 'ext':
      return (
        <g transform="translate(16 16)">
          <rect width={16 + ext.length * 9} height={24} rx={7} fill={c('slate-900')} opacity={0.85} />
          <text x={8} y={17} fontSize={13} fontWeight={800} fill="#fff" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
            {ext}
          </text>
        </g>
      );
    case 'ai':
      return (
        <g transform="translate(16 16)">
          <rect width={58} height={20} rx={10} fill={c('slate-900')} opacity={0.85} />
          <text x={10} y={14} fontSize={10} fontWeight={700} fill="#fff">
            AI info
          </text>
          <line x1={4} y1={10} x2={54} y2={10} stroke={c('rose-500')} strokeWidth={2.5} />
        </g>
      );
    case 'eye':
      return (
        <g transform="translate(18 18)" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
          <circle cx={13} cy={13} r={15} fill={c('slate-900')} stroke="none" opacity={0.75} />
          <path d="M3 13 C7 6 19 6 23 13 C19 20 7 20 3 13 Z" />
          <circle cx={13} cy={13} r={3} />
          <line x1={4} y1={22} x2={22} y2={4} />
        </g>
      );
    case 'pin':
      return (
        <g transform="translate(60 28)">
          <path d="M14 0 C6 0 0 6 0 14 C0 24 14 38 14 38 C14 38 28 24 28 14 C28 6 22 0 14 0 Z" fill={c('rose-500')} />
          <circle cx={14} cy={14} r={5} fill="#fff" />
        </g>
      );
    case 'cr':
      return (
        <g transform="translate(16 16)">
          <path d="M16 0 L30 6 V16 C30 25 24 31 16 34 C8 31 2 25 2 16 V6 Z" fill={c('slate-900')} opacity={0.85} />
          <text x={7} y={22} fontSize={11} fontWeight={800} fill="#fff">
            CR
          </text>
        </g>
      );
    case 'text':
      return (
        <g transform="translate(18 18)">
          <rect width={64} height={46} rx={6} fill={c('slate-900')} opacity={0.75} />
          {[10, 20, 30].map((ty, i) => (
            <rect key={ty} x={8} y={ty} width={i === 2 ? 30 : 48} height={4} rx={2} fill="#fff" opacity={0.85} />
          ))}
          <text x={8} y={42} fontSize={7} fill="#fff" fontFamily="ui-monospace, monospace">
            tEXt
          </text>
        </g>
      );
    case 'search':
      return (
        <g transform="translate(16 16)" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round">
          <circle cx={18} cy={18} r={20} fill={c('slate-900')} stroke="none" opacity={0.75} />
          <circle cx={16} cy={16} r={7} />
          <line x1={21} y1={21} x2={27} y2={27} />
        </g>
      );
    case 'dots':
      // Hoa văn chấm mờ phủ ảnh: tượng trưng thủy ấn vô hình nằm trong điểm ảnh.
      return (
        <g opacity={0.55}>
          {Array.from({ length: 6 }, (_, row) =>
            Array.from({ length: 9 }, (_, col) => (
              <circle key={`${row}-${col}`} cx={18 + col * 16} cy={20 + row * 16} r={2} fill="#fff" />
            )),
          )}
        </g>
      );
    case 'stack':
      return null;
  }
}

export function GuideIllustration({ slug, className = '' }: { slug: GuideSlug; className?: string }) {
  const scene = SCENES[slug];
  const { hue } = scene;
  return (
    <svg viewBox="0 0 400 225" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <rect width={400} height={225} fill={c(`${hue}-100`)} />
      <circle cx={360} cy={20} r={70} fill={c(`${hue}-200`)} opacity={0.6} />
      <circle cx={30} cy={215} r={50} fill={c(`${hue}-200`)} opacity={0.5} />

      {scene.badge === 'stack' && (
        <>
          <rect x={44} y={22} width={160} height={150} rx={14} fill={c('surface')} stroke={c('slate-200')} opacity={0.6} />
          <rect x={38} y={30} width={160} height={150} rx={14} fill={c('surface')} stroke={c('slate-200')} opacity={0.8} />
        </>
      )}
      <Photo hue={hue} x={32} y={scene.badge === 'stack' ? 40 : 38}>
        <Badge kind={scene.badge} ext={scene.ext} />
      </Photo>

      {/* Mũi tên "làm sạch" từ ảnh sang các khối metadata */}
      <path d="M200 113 h14" stroke={c('slate-400')} strokeWidth={2} strokeLinecap="round" strokeDasharray="2 5" />

      {scene.chips.map((chip, i) => (
        <Chip key={chip.text} x={222} y={58 + i * 38} spec={chip} />
      ))}
    </svg>
  );
}
