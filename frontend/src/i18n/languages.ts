/** Danh sách ngôn ngữ hỗ trợ, theo thứ tự hiển thị trong bộ chọn ngôn ngữ. */
export const LANGUAGES = [
  { code: 'en', name: 'English', og: 'en_US' },
  { code: 'ja', name: '日本語', og: 'ja_JP' },
  { code: 'es', name: 'Español', og: 'es_ES' },
  { code: 'de', name: 'Deutsch', og: 'de_DE' },
  { code: 'fr', name: 'Français', og: 'fr_FR' },
  { code: 'pt-BR', name: 'Português', og: 'pt_BR' },
  { code: 'it', name: 'Italiano', og: 'it_IT' },
  { code: 'zh-CN', name: '中文', og: 'zh_CN' },
  { code: 'ar', name: 'العربية', og: 'ar_AR', rtl: true },
  { code: 'hi', name: 'हिंदी', og: 'hi_IN' },
  { code: 'id', name: 'Bahasa Indonesia', og: 'id_ID' },
  { code: 'ko', name: '한국어', og: 'ko_KR' },
  { code: 'nl', name: 'Nederlands', og: 'nl_NL' },
  { code: 'pl', name: 'Polski', og: 'pl_PL' },
  { code: 'ru', name: 'Русский', og: 'ru_RU' },
  { code: 'sv', name: 'Svenska', og: 'sv_SE' },
  { code: 'th', name: 'ไทย', og: 'th_TH' },
  { code: 'tr', name: 'Türkçe', og: 'tr_TR' },
  { code: 'vi', name: 'Tiếng Việt', og: 'vi_VN' },
  { code: 'zh-TW', name: '繁體中文', og: 'zh_TW' },
  { code: 'uk', name: 'Українська', og: 'uk_UA' },
  { code: 'he', name: 'עברית', og: 'he_IL', rtl: true },
  { code: 'cs', name: 'Čeština', og: 'cs_CZ' },
  { code: 'fi', name: 'Suomi', og: 'fi_FI' },
  { code: 'sk', name: 'Slovenčina', og: 'sk_SK' },
  { code: 'ca', name: 'Català', og: 'ca_ES' },
  { code: 'hr', name: 'Hrvatski', og: 'hr_HR' },
  { code: 'da', name: 'Dansk', og: 'da_DK' },
  { code: 'hu', name: 'Magyar', og: 'hu_HU' },
  { code: 'pt-PT', name: 'Português (PT)', og: 'pt_PT' },
  { code: 'el', name: 'Ελληνικά', og: 'el_GR' },
  { code: 'ro', name: 'Română', og: 'ro_RO' },
] as const satisfies readonly { code: string; name: string; og: string; rtl?: boolean }[];

export type LangCode = (typeof LANGUAGES)[number]['code'];
export type Language = (typeof LANGUAGES)[number] & { rtl?: boolean };

export const DEFAULT_LANG: LangCode = 'en';

export const findLanguage = (code: string): Language | undefined =>
  LANGUAGES.find((l) => l.code.toLowerCase() === code.toLowerCase());

/** Khớp thẻ ngôn ngữ của trình duyệt (vd. "pt-PT", "zh-Hant-HK", "nb") với danh sách hỗ trợ. */
export function matchLanguage(tag: string): LangCode | null {
  const t = tag.toLowerCase();
  const exact = findLanguage(t);
  if (exact) return exact.code;
  if (t.startsWith('zh')) return /hant|tw|hk|mo/.test(t) ? 'zh-TW' : 'zh-CN';
  if (t.startsWith('pt')) return t === 'pt-pt' || t.startsWith('pt-pt') ? 'pt-PT' : 'pt-BR';
  const base = t.split('-')[0];
  // Mã cũ vẫn gặp trên một số trình duyệt Android (iw-IL, in-ID).
  if (base === 'iw') return 'he';
  if (base === 'in') return 'id';
  return LANGUAGES.find((l) => l.code === base)?.code ?? null;
}
