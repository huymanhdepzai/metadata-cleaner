import { DEFAULT_LANG, findLanguage, matchLanguage, type LangCode } from './languages';

/**
 * Chọn ngôn ngữ cho người mới vào trang gốc "/" (trên máy chủ, trước khi trang tải — cùng quy tắc được sinh thành
 * cấu hình Nginx trong src/seo/nginx.ts):
 *   1. Lựa chọn đã lưu (cookie "lang", đặt khi người dùng tự đổi ngôn ngữ) — luôn được tôn trọng.
 *   2. Ngôn ngữ đầu tiên của trình duyệt, nếu không phải tiếng Anh (người Nhật dùng trình duyệt tiếng Nhật → ja).
 *   3. Quốc gia theo IP (cần GeoIP trên máy chủ) — nhiều người Việt dùng trình duyệt tiếng Anh nhưng muốn đọc tiếng Việt.
 *   4. Các ngôn ngữ còn lại của trình duyệt, cuối cùng là tiếng Anh.
 */
export const LANG_COOKIE = 'lang';

/** Quốc gia (ISO 3166-1) → ngôn ngữ chính. Chỉ các nước có ngôn ngữ chính rõ ràng; nước đa ngôn ngữ để trình duyệt quyết định. */
export const COUNTRY_LANG: Record<string, LangCode> = {
  VN: 'vi', JP: 'ja', KR: 'ko', CN: 'zh-CN', TW: 'zh-TW', HK: 'zh-TW', MO: 'zh-TW', TH: 'th', ID: 'id',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es',
  DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es',
  DE: 'de', AT: 'de', LI: 'de', FR: 'fr', MC: 'fr', IT: 'it', SM: 'it', BR: 'pt-BR', PT: 'pt-PT', AO: 'pt-PT', MZ: 'pt-PT',
  NL: 'nl', PL: 'pl', RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'uk', SE: 'sv', FI: 'fi', DK: 'da', CZ: 'cs', SK: 'sk',
  HR: 'hr', HU: 'hu', GR: 'el', CY: 'el', RO: 'ro', MD: 'ro', TR: 'tr', IL: 'he', AD: 'ca',
  SA: 'ar', AE: 'ar', EG: 'ar', IQ: 'ar', JO: 'ar', KW: 'ar', QA: 'ar', BH: 'ar', OM: 'ar', YE: 'ar', LB: 'ar',
  SY: 'ar', LY: 'ar', TN: 'ar', DZ: 'ar', MA: 'ar', SD: 'ar',
};

/** Danh sách thẻ trong Accept-Language theo thứ tự ưu tiên (q giảm dần). */
export function parseAcceptLanguage(header: string | null | undefined): string[] {
  if (!header) return [];
  return header
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
      return { tag: tag.trim(), q: q ? Number(q.slice(2)) || 0 : 1, i };
    })
    .filter((x) => x.tag && x.tag !== '*' && x.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)
    .map((x) => x.tag);
}

export function readCookie(header: string | null | undefined, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

export function detectLanguage(input: { cookie?: string | null; acceptLanguage?: string | null; country?: string | null }): LangCode {
  const saved = readCookie(input.cookie, LANG_COOKIE);
  if (saved && findLanguage(saved)) return findLanguage(saved)!.code;

  const browser = parseAcceptLanguage(input.acceptLanguage)
    .map(matchLanguage)
    .filter((l): l is LangCode => l !== null);
  if (browser[0] && browser[0] !== DEFAULT_LANG) return browser[0];

  const byCountry = input.country ? COUNTRY_LANG[input.country.toUpperCase()] : undefined;
  if (byCountry) return byCountry;

  return browser[0] ?? DEFAULT_LANG;
}
