import { describe, expect, it } from 'vitest';
import { COUNTRY_LANG } from '../i18n/detect';
import { LANGUAGES, matchLanguage } from '../i18n/languages';
import { acceptLanguageRules, nginxConf } from './nginx';

/** Mô phỏng map $lang_browser của Nginx: quy tắc đầu tiên khớp (không phân biệt hoa thường) thắng. */
const nginxBrowserLang = (header: string) => acceptLanguageRules().find(([re]) => new RegExp(re, 'i').test(header))?.[1] ?? '';

describe('cấu hình Nginx', () => {
  it('chọn ngôn ngữ trình duyệt giống src/i18n/languages.ts', () => {
    const samples = [
      'vi-VN,vi;q=0.9,en;q=0.8', 'en-US,en;q=0.9', 'ja', 'zh-TW,zh;q=0.9', 'zh-Hant-HK', 'zh-CN', 'zh',
      'pt-PT,pt;q=0.9', 'pt-BR', 'pt', 'iw-IL', 'in-ID', 'id-ID', 'de-AT,de;q=0.9', 'ko-KR', 'nb-NO', 'fil-PH',
    ];
    for (const s of samples) expect(nginxBrowserLang(s), s).toBe(matchLanguage(s.split(/[,;]/)[0])?.toLowerCase() ?? '');
  });

  it('có đủ mọi ngôn ngữ (cookie) và quốc gia', () => {
    const conf = nginxConf();
    for (const l of LANGUAGES) expect(conf).toContain(`"~*^${l.code}$"`);
    for (const cc of Object.keys(COUNTRY_LANG)) expect(conf).toMatch(new RegExp(`^ {4}${cc} `, 'm'));
    expect(conf).not.toMatch(/undefined|workers\.dev/);
  });

  it('chuyển trang phân trang cũ /guides/page/N/ về /guides/ cùng ngôn ngữ', () => {
    const m = nginxConf().match(/rewrite "([^"]+)" \$1\/guides\/ permanent;/);
    expect(m).not.toBeNull();
    const re = new RegExp(m![1]);
    const target = (path: string) => path.replace(re, '$1/guides/');
    expect(target('/guides/page/2/')).toBe('/guides/');
    expect(target('/vi/guides/page/4/')).toBe('/vi/guides/');
    expect(target('/pt-br/guides/page/3')).toBe('/pt-br/guides/');
    for (const p of ['/guides/', '/vi/guides/remove-exif/', '/guides/page/']) expect(re.test(p), p).toBe(false);
  });
});
