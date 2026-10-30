import type { LangCode } from '../i18n/languages';
import interCyrillic from '@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2?url';
import interGreek from '@fontsource-variable/inter/files/inter-greek-wght-normal.woff2?url';
import interLatinExt from '@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2?url';
import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import interVietnamese from '@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2?url';

/**
 * Preload phần Inter mà phần đầu trang chắc chắn dùng (H1, đoạn mô tả), theo ngôn ngữ của trang.
 * Không có preload, trình duyệt chỉ biết tới font sau khi tải và phân tích xong CSS → font về muộn, chữ đổi font
 * và xuống dòng lại giữa chừng (làm tăng Speed Index và CLS). Cùng tệp với src/fonts.css (cùng nội dung → cùng mã băm).
 * Latin luôn cần (tên thương hiệu, C2PA, EXIF… có ở mọi ngôn ngữ); CJK, Ả Rập, Thái… dùng font hệ thống.
 */
const EXTRA: Partial<Record<LangCode, string>> = {
  vi: interVietnamese,
  ru: interCyrillic,
  uk: interCyrillic,
  el: interGreek,
  cs: interLatinExt,
  sk: interLatinExt,
  pl: interLatinExt,
  hu: interLatinExt,
  ro: interLatinExt,
  hr: interLatinExt,
  tr: interLatinExt,
};

export function fontPreloadHtml(lang: LangCode): string {
  return [interLatin, EXTRA[lang]]
    .filter(Boolean)
    .map((href) => `<link rel="preload" href="${href}" as="font" type="font/woff2" crossorigin />`)
    .join('\n    ');
}
