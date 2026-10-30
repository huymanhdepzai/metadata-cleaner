import type { IconName } from '../components/ui';
import type { LangCode } from '../i18n/languages';
import type { Messages } from '../i18n/locales/en';

/**
 * Phần nội dung trung lập ngôn ngữ (đường dẫn, biểu tượng, bảng kỹ thuật).
 * Văn bản hiển thị nằm trong src/i18n/locales/*.ts, bài viết chuyên sâu trong src/content/articles/*.ts.
 * Thay `origin` bằng tên miền thật trước khi triển khai (đồng bộ với public/robots.txt).
 */
export const SITE = {
  name: 'All Metadata Cleaner',
  origin: 'https://allmetadatacleaner.com',
  /** Ngày cập nhật nội dung trang chủ (lastmod trong sitemap). Ngày của từng bài nằm trong GUIDE_DATES. */
  contentUpdated: '2026-10-28',
  /**
   * Email liên hệ công khai (trang Contact, schema Organization). Để trống thì trang Contact không được tạo
   * và không có trong footer/sitemap — điền email thật (vd. contact@<tên-miền>) trước khi deploy.
   */
  contactEmail: '',
};

/**
 * Trang thông tin (About, Privacy, Terms, Contact): có ở mọi ngôn ngữ, đường dẫn /{lang?}/{slug}/.
 * Tên ngắn nằm trong `pages` của tệp ngôn ngữ, nội dung trong src/content/pages/<mã>.ts (chỉ tải khi mở trang).
 */
export const PAGE_SLUGS = ['about', 'privacy', 'terms', 'contact'] as const;
export type PageSlug = (typeof PAGE_SLUGS)[number];
export const isPageSlug = (s: string): s is PageSlug => (PAGE_SLUGS as readonly string[]).includes(s);

/**
 * Công cụ riêng (/{lang?}/tools/{slug}/): cùng engine phân tích trong trình duyệt, mỗi trang một nhu cầu.
 * Có ở mọi ngôn ngữ; văn bản trong src/content/tools/<mã>.ts (chỉ tải khi mở trang công cụ).
 */
export const TOOL_SLUGS = ['view-metadata', 'privacy-check', 'metadata-size'] as const;
export type ToolSlug = (typeof TOOL_SLUGS)[number];
export const isToolSlug = (s: string): s is ToolSlug => (TOOL_SLUGS as readonly string[]).includes(s);

/**
 * Thẻ trên trang tổng hợp công cụ /tools/, theo thứ tự hiển thị. `to`: công cụ riêng, bài có công cụ nhúng (nếu
 * ngôn ngữ hiện tại có bài đó — không thì về công cụ trên trang chủ), hoặc chính công cụ trên trang chủ.
 */
export type ToolCardTarget = { tool: ToolSlug } | { guide: GuideSlug } | 'home';
export const TOOL_CARDS = [
  { id: 'cleaner', icon: 'sparkles', to: 'home' },
  { id: 'view-metadata', icon: 'search', to: { tool: 'view-metadata' } },
  { id: 'privacy-check', icon: 'shield', to: { tool: 'privacy-check' } },
  { id: 'metadata-size', icon: 'chart', to: { tool: 'metadata-size' } },
  { id: 'remove-exif', icon: 'photo', to: { guide: 'remove-exif' } },
  { id: 'remove-gps', icon: 'mapPin', to: { guide: 'remove-gps-location-from-photos' } },
  { id: 'remove-c2pa', icon: 'layers', to: { guide: 'remove-c2pa' } },
  { id: 'remove-prompts', icon: 'sparkles', to: { guide: 'remove-stable-diffusion-comfyui-metadata' } },
  { id: 'batch', icon: 'bolt', to: { guide: 'batch-remove-metadata' } },
] as const satisfies readonly { id: string; icon: IconName; to: ToolCardTarget }[];
export type ToolCardId = (typeof TOOL_CARDS)[number]['id'];

/** Bố cục trang tổng hợp: thẻ nổi bật (công cụ làm sạch) rồi các nhóm thẻ theo thứ tự. */
export const FEATURED_TOOL_CARD = 'cleaner' satisfies ToolCardId;
export const TOOL_GROUPS = [
  { id: 'inspect', cards: ['view-metadata', 'privacy-check', 'metadata-size'] },
  { id: 'remove', cards: ['remove-exif', 'remove-gps', 'remove-c2pa', 'remove-prompts', 'batch'] },
] as const satisfies readonly { id: string; cards: readonly ToolCardId[] }[];
export type ToolGroupId = (typeof TOOL_GROUPS)[number]['id'];

/** Ngày sửa nội dung trang tổng hợp và các trang công cụ (lastmod). */
export const TOOLS_UPDATED = '2026-10-30';

/** Trang thông tin đang hoạt động (Contact cần SITE.contactEmail). */
export const activePages = (): PageSlug[] => PAGE_SLUGS.filter((s) => s !== 'contact' || SITE.contactEmail !== '');

/** Ngày sửa nội dung của từng trang thông tin — cập nhật khi đổi nội dung (lastmod, "Cập nhật lần cuối"). */
export const PAGE_UPDATED: Record<PageSlug, string> = {
  about: '2026-10-28',
  privacy: '2026-10-28',
  terms: '2026-10-28',
  contact: '2026-10-28',
};

/** Neo (anchor) các mục trên trang chủ — tiếng Anh trung lập, giống nhau ở mọi ngôn ngữ (như slug bài viết). */
/**
 * Bảng so sánh "Vì sao chọn…": mỗi hàng ứng với `seo.why.rows[i]`, ba cột là
 * [công cụ này, công cụ online thông thường, chụp màn hình / lưu lại].
 * "partial" = tùy công cụ/cách làm. Giữ trung thực: chụp màn hình cũng xóa hết metadata và miễn phí.
 */
export type Support = 'yes' | 'partial' | 'no';
export const WHY_ROWS: readonly (readonly [Support, Support, Support])[] = [
  ['yes', 'no', 'yes'], // ảnh không rời khỏi máy
  ['yes', 'partial', 'no'], // giữ nguyên chất lượng
  ['yes', 'partial', 'yes'], // xóa C2PA, nhãn AI, prompt
  ['yes', 'partial', 'partial'], // giữ hướng xoay, hồ sơ màu
  ['yes', 'partial', 'no'], // báo cáo trước/sau
  ['yes', 'partial', 'no'], // xử lý hàng loạt + ZIP
  ['yes', 'partial', 'yes'], // miễn phí, không đăng ký, không watermark
];

export const HOME_SECTIONS = {
  tool: 'tool',
  how: 'how-it-works',
  features: 'features',
  why: 'why-choose-us',
  formats: 'formats',
  guides: 'guides',
  faq: 'faq',
  disclaimer: 'disclaimer',
} as const;

/** Neo cũ (tiếng Việt) → neo mới, để các liên kết đã chia sẻ trước đây vẫn cuộn đúng mục. */
export const LEGACY_ANCHORS: Record<string, string> = {
  'cong-cu': HOME_SECTIONS.tool,
  'cach-hoat-dong': HOME_SECTIONS.how,
  'tinh-nang': HOME_SECTIONS.features,
  'dinh-dang': HOME_SECTIONS.formats,
  'huong-dan': HOME_SECTIONS.guides,
  'ket-qua': 'results',
};

/** Mục menu: một phần trên trang chủ, hoặc 'tools' (trang tổng hợp công cụ /tools/). */
export type NavTarget = keyof typeof HOME_SECTIONS | 'tools';
export const NAV: { section: NavTarget; label: keyof Messages['header']['nav'] }[] = [
  { section: 'tools', label: 'tools' },
  { section: 'how', label: 'how' },
  { section: 'formats', label: 'formats' },
  { section: 'guides', label: 'guides' },
  { section: 'faq', label: 'faq' },
];

export const TRUST_ICONS: Record<keyof Messages['hero']['trust'], IconName> = {
  noUpload: 'lock',
  lossless: 'photo',
  batch: 'bolt',
  free: 'shield',
};

/**
 * Bài viết nền tảng: có ở cả 32 ngôn ngữ. Tiêu đề + tóm tắt nằm trong `seo.guides.items` của tệp ngôn ngữ,
 * theo đúng thứ tự mảng này.
 */
export const BASE_GUIDE_SLUGS = [
  'made-with-ai-label',
  'remove-stable-diffusion-comfyui-metadata',
  'hide-midjourney-dalle-prompts',
  'what-is-c2pa-content-credentials',
  'remove-gps-location-from-photos',
  'batch-remove-metadata',
] as const;

/**
 * Bài viết mở rộng: chỉ có ở một số ngôn ngữ (xem ARTICLE_LANGS). Tiêu đề, tóm tắt và nội dung nằm trong
 * src/content/articles/<mã>.ts. Đặt bài mới nhất lên đầu.
 */
export const EXTRA_GUIDE_SLUGS = [
  // Khoảng trống từ khóa (2026-10-29): xóa metadata trên máy tính, metadata ảnh ChatGPT, chụp màn hình có xóa metadata không.
  'remove-metadata-windows-mac',
  'chatgpt-image-metadata',
  'does-screenshot-remove-metadata',
  // Landing page theo việc cần làm (truy vấn "remove C2PA", "EXIF remover"): công cụ nhúng sẵn ở đầu trang.
  'remove-c2pa',
  'remove-exif',
  // Landing page theo định dạng (truy vấn dạng "remove metadata from PNG"): có công cụ nhúng sẵn như mọi bài.
  'remove-metadata-from-jpg',
  'remove-metadata-from-png',
  'remove-metadata-from-heic',
  'remove-metadata-from-webp',
  'how-to-check-if-image-is-ai-generated',
  'which-platforms-label-ai-images',
  'what-metadata-ai-image-generators-add',
  'synthid-invisible-ai-watermarks',
  'turn-off-content-credentials-photoshop-lightroom',
  'which-platforms-strip-photo-metadata',
  'view-remove-metadata-iphone-android',
  'what-is-exif-data',
] as const;

/** Mọi bài viết, theo thứ tự hiển thị (mới nhất trước). Slug tiếng Anh dùng chung cho mọi ngôn ngữ. */
export const GUIDE_SLUGS = [...EXTRA_GUIDE_SLUGS, ...BASE_GUIDE_SLUGS] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];
export type ExtraGuideSlug = (typeof EXTRA_GUIDE_SLUGS)[number];

/**
 * Ngôn ngữ có bài viết chuyên sâu (src/content/articles/<mã>.ts) cho từng bài — có test kiểm tra hai chiều.
 * - Bài mở rộng chỉ tồn tại ở các ngôn ngữ này.
 * - Bài nền tảng có ở mọi ngôn ngữ, nhưng ở ngôn ngữ không có trong danh sách chỉ là phần tóm tắt ngắn
 *   → trang được prerender cho người dùng nhưng gắn noindex, không vào sitemap/hreflang (tránh trang mỏng).
 * Dịch thêm một bài sang ngôn ngữ mới: thêm bài vào tệp ngôn ngữ đó rồi thêm mã ngôn ngữ vào đây.
 */
const FULL: readonly LangCode[] = ['en', 'vi', 'ja', 'es', 'de', 'fr', 'pt-BR'];
/** Ngôn ngữ có nội dung chuyên sâu: bài nền tảng đầy đủ và mục `guide` của trang công cụ (src/content/tools). */
export const FULL_CONTENT_LANGS = FULL;
export const ARTICLE_LANGS: Record<GuideSlug, readonly LangCode[]> = {
  // Bài mới: en + vi trước, các ngôn ngữ còn lại thêm sau.
  'remove-metadata-windows-mac': ['en', 'vi'],
  'chatgpt-image-metadata': ['en', 'vi'],
  'does-screenshot-remove-metadata': ['en', 'vi'],
  'made-with-ai-label': FULL,
  'remove-stable-diffusion-comfyui-metadata': FULL,
  'hide-midjourney-dalle-prompts': FULL,
  'what-is-c2pa-content-credentials': FULL,
  'remove-gps-location-from-photos': FULL,
  'batch-remove-metadata': FULL,
  'remove-c2pa': FULL,
  'remove-exif': FULL,
  'remove-metadata-from-jpg': FULL,
  'remove-metadata-from-png': FULL,
  'remove-metadata-from-heic': FULL,
  'remove-metadata-from-webp': FULL,
  'how-to-check-if-image-is-ai-generated': FULL,
  'which-platforms-label-ai-images': FULL,
  'what-metadata-ai-image-generators-add': FULL,
  'synthid-invisible-ai-watermarks': FULL,
  'turn-off-content-credentials-photoshop-lightroom': FULL,
  'which-platforms-strip-photo-metadata': FULL,
  'view-remove-metadata-iphone-android': FULL,
  'what-is-exif-data': FULL,
};

/** Thẻ chủ đề (tag đỏ) trên thẻ bài viết — dùng tên riêng / thuật ngữ kỹ thuật nên giống nhau ở mọi ngôn ngữ. */
export const GUIDE_TAGS: Record<GuideSlug, string> = {
  'remove-metadata-windows-mac': 'Windows · macOS',
  'chatgpt-image-metadata': 'ChatGPT · C2PA',
  'does-screenshot-remove-metadata': 'Screenshot · EXIF',
  'made-with-ai-label': 'Facebook · Instagram',
  'remove-stable-diffusion-comfyui-metadata': 'Stable Diffusion · ComfyUI',
  'hide-midjourney-dalle-prompts': 'Midjourney · DALL·E',
  'what-is-c2pa-content-credentials': 'C2PA',
  'remove-gps-location-from-photos': 'GPS · EXIF',
  'batch-remove-metadata': 'JPG · PNG · HEIC · ZIP',
  'remove-c2pa': 'C2PA · Content Credentials',
  'remove-exif': 'EXIF · GPS',
  'remove-metadata-from-jpg': 'JPG · JPEG',
  'remove-metadata-from-png': 'PNG · APNG',
  'remove-metadata-from-heic': 'HEIC · HEIF · iPhone',
  'remove-metadata-from-webp': 'WebP',
  'how-to-check-if-image-is-ai-generated': 'C2PA · IPTC · AI check',
  'which-platforms-label-ai-images': 'Meta · TikTok · YouTube',
  'what-metadata-ai-image-generators-add': 'DALL·E · Firefly · Gemini',
  'synthid-invisible-ai-watermarks': 'SynthID · Watermark',
  'turn-off-content-credentials-photoshop-lightroom': 'Photoshop · Lightroom',
  'which-platforms-strip-photo-metadata': 'Instagram · WhatsApp · X',
  'view-remove-metadata-iphone-android': 'iPhone · Android',
  'what-is-exif-data': 'EXIF',
};

/**
 * Ngày đăng và ngày sửa nội dung của từng bài (YYYY-MM-DD), chung cho mọi ngôn ngữ của bài.
 * Dùng cho lastmod trong sitemap, "Cập nhật" trên trang bài và datePublished/dateModified của schema Article.
 * Sửa nội dung bài nào thì đổi `updated` của bài đó (test kiểm tra định dạng và published ≤ updated).
 */
const INITIAL = { published: '2026-10-16', updated: '2026-10-16' };
export const GUIDE_DATES: Record<GuideSlug, { published: string; updated: string }> = {
  'remove-metadata-windows-mac': { published: '2026-10-29', updated: '2026-10-29' },
  'chatgpt-image-metadata': { published: '2026-10-29', updated: '2026-10-29' },
  'does-screenshot-remove-metadata': { published: '2026-10-29', updated: '2026-10-29' },
  'remove-c2pa': { published: '2026-10-20', updated: '2026-10-20' },
  'remove-exif': { published: '2026-10-20', updated: '2026-10-20' },
  'remove-metadata-from-jpg': INITIAL,
  'remove-metadata-from-png': INITIAL,
  'remove-metadata-from-heic': INITIAL,
  'remove-metadata-from-webp': INITIAL,
  'how-to-check-if-image-is-ai-generated': INITIAL,
  'which-platforms-label-ai-images': INITIAL,
  'what-metadata-ai-image-generators-add': INITIAL,
  'synthid-invisible-ai-watermarks': INITIAL,
  'turn-off-content-credentials-photoshop-lightroom': INITIAL,
  'which-platforms-strip-photo-metadata': INITIAL,
  'view-remove-metadata-iphone-android': INITIAL,
  'what-is-exif-data': INITIAL,
  'made-with-ai-label': INITIAL,
  'remove-stable-diffusion-comfyui-metadata': INITIAL,
  'hide-midjourney-dalle-prompts': { published: '2026-10-16', updated: '2026-10-29' },
  'what-is-c2pa-content-credentials': { published: '2026-10-16', updated: '2026-10-29' },
  'remove-gps-location-from-photos': INITIAL,
  'batch-remove-metadata': INITIAL,
};

/** Ngày muộn nhất trong danh sách ngày ISO (so sánh chuỗi YYYY-MM-DD). */
export const latestDate = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), '');

export const isGuideSlug = (s: string): s is GuideSlug => (GUIDE_SLUGS as readonly string[]).includes(s);

/** Vị trí của bài nền tảng trong `seo.guides.items` (−1 nếu là bài mở rộng). */
export const baseGuideIndex = (slug: GuideSlug) => (BASE_GUIDE_SLUGS as readonly string[]).indexOf(slug);

/** Ngôn ngữ `lang` có bài chuyên sâu cho `slug` (không chỉ phần tóm tắt). */
export const hasFullArticle = (slug: GuideSlug, lang: LangCode) => ARTICLE_LANGS[slug].includes(lang);

export function isGuideAvailable(slug: GuideSlug, lang: LangCode): boolean {
  return baseGuideIndex(slug) >= 0 || hasFullArticle(slug, lang);
}

/** Bài viết có ở ngôn ngữ `lang`, theo thứ tự hiển thị. */
export const availableGuides = (lang: LangCode): GuideSlug[] => GUIDE_SLUGS.filter((s) => isGuideAvailable(s, lang));

/**
 * Số bài mới nhất hiển thị trên trang chủ. Giữ nhỏ: trang tổng hợp /guides/ hiện mọi bài, trang chủ hiện quá
 * nhiều thẻ thì hai trang gần trùng nội dung.
 */
export const HOME_GUIDE_COUNT = 6;

/**
 * Nhóm chủ đề trên trang tổng hợp /guides/ (một trang duy nhất, không phân trang). Mỗi bài thuộc đúng một nhóm
 * (có test kiểm tra); trong nhóm, bài xếp theo thứ tự GUIDE_SLUGS. Tiêu đề + đoạn mô tả nhóm nằm trong
 * src/content/hub/<mã>.ts — chỉ có ở ngôn ngữ có bài chuyên sâu; ngôn ngữ khác hiện lưới thẻ không chia nhóm.
 */
export const GUIDE_GROUPS = [
  {
    id: 'formats',
    guides: [
      'remove-metadata-from-jpg',
      'remove-metadata-from-png',
      'remove-metadata-from-heic',
      'remove-metadata-from-webp',
      'remove-metadata-windows-mac',
      'view-remove-metadata-iphone-android',
      'batch-remove-metadata',
    ],
  },
  {
    id: 'ai-labels',
    guides: [
      'made-with-ai-label',
      'what-is-c2pa-content-credentials',
      'remove-c2pa',
      'which-platforms-label-ai-images',
      'turn-off-content-credentials-photoshop-lightroom',
      'how-to-check-if-image-is-ai-generated',
      'synthid-invisible-ai-watermarks',
    ],
  },
  {
    id: 'ai-prompts',
    guides: ['chatgpt-image-metadata', 'what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
  },
  {
    id: 'privacy',
    guides: ['remove-exif', 'what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata', 'does-screenshot-remove-metadata'],
  },
] as const satisfies readonly { id: string; guides: readonly GuideSlug[] }[];
export type GuideGroupId = (typeof GUIDE_GROUPS)[number]['id'];

/** Các nhóm có bài ở ngôn ngữ `lang`, mỗi nhóm kèm bài có sẵn theo thứ tự hiển thị (bỏ nhóm rỗng). */
export function guideGroups(lang: LangCode): { id: GuideGroupId; slugs: GuideSlug[] }[] {
  const available = availableGuides(lang);
  return GUIDE_GROUPS.map((g) => ({
    id: g.id,
    slugs: available.filter((s) => (g.guides as readonly GuideSlug[]).includes(s)),
  })).filter((g) => g.slugs.length > 0);
}

/**
 * Bảng kỹ thuật (tên segment/chunk/box) — giữ nguyên ở mọi ngôn ngữ.
 * `guide`: landing page của định dạng; tên định dạng trong bảng thành liên kết ở ngôn ngữ có trang đó.
 */
export const FORMAT_ROWS: { format: string; structure: string; removed: string; kept: string; guide?: GuideSlug }[] = [
  { format: 'JPEG / JPG', guide: 'remove-metadata-from-jpg', structure: 'Marker segments', removed: 'APP1 (EXIF, XMP), APP11 (C2PA/JUMBF), APP13 (IPTC), COM, MPF, JFIF/JFXX thumbnail', kept: 'SOF, DQT/DHT, SOS → EOI, APP0, APP2 ICC, APP14, Orientation' },
  { format: 'PNG', guide: 'remove-metadata-from-png', structure: 'Chunks', removed: 'tEXt, zTXt, iTXt (prompt, workflow, XMP), eXIf, caBX (C2PA), tIME, dSIG', kept: 'IHDR, PLTE, IDAT, tRNS, gAMA, cHRM, sRGB, iCCP, acTL/fcTL/fdAT, Orientation' },
  { format: 'WebP', guide: 'remove-metadata-from-webp', structure: 'RIFF chunks', removed: 'EXIF, XMP, C2PA', kept: 'VP8 / VP8L / ALPH, ICCP, ANIM / ANMF, Orientation' },
  { format: 'GIF', structure: 'Block sequence', removed: 'XMP Application Extension, Comment Extension', kept: 'Image Descriptor, LZW, NETSCAPE2.0, ICCRGBG1' },
  { format: 'HEIC / HEIF', guide: 'remove-metadata-from-heic', structure: 'ISOBMFF boxes', removed: 'uuid (C2PA, XMP), Exif / XMP items, moov udta + timestamps', kept: 'ftyp, mdat (HEVC), ispe, irot/imir, colr' },
  { format: 'AVIF', structure: 'ISOBMFF boxes', removed: 'uuid (C2PA, XMP), Exif / XMP items, moov udta + timestamps', kept: 'ftyp, mdat (AV1), ispe, irot/imir, colr' },
];
