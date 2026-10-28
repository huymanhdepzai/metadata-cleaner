import { describe, expect, it } from 'vitest';
import { LANGUAGES } from '../../i18n/languages';
import { PAGE_SLUGS } from '../seo';
import en from './en';
import type { Pages } from './types';

const modules = import.meta.glob<{ default: Pages }>(['./*.ts', '!./types.ts', '!./*.test.ts'], { eager: true });

/** So sánh cấu trúc với bản tiếng Anh: cùng số mục, đoạn và gạch đầu dòng; không chuỗi rỗng. */
function compare(ref: unknown, value: unknown, path: string, errors: string[]): void {
  if (typeof ref === 'string') {
    if (typeof value !== 'string' || value.trim() === '') errors.push(`${path}: empty or not a string`);
    return;
  }
  if (Array.isArray(ref)) {
    if (!Array.isArray(value)) return void errors.push(`${path}: expected array`);
    if (value.length !== ref.length) errors.push(`${path}: length ${value.length} ≠ ${ref.length}`);
    value.forEach((v, i) => compare(ref[i], v, `${path}[${i}]`, errors));
    return;
  }
  if (ref && typeof ref === 'object') {
    if (!value || typeof value !== 'object') return void errors.push(`${path}: expected object`);
    for (const key of Object.keys(ref)) compare((ref as never)[key], (value as never)[key], `${path}.${key}`, errors);
    for (const key of Object.keys(value)) if (!(key in ref)) errors.push(`${path}.${key}: unknown key`);
  }
}

describe('Trang thông tin (About, Privacy, Terms, Contact)', () => {
  it('có đủ tệp cho mọi ngôn ngữ', () => {
    const files = Object.keys(modules).map((p) => p.replace('./', '').replace('.ts', '')).sort();
    expect(files).toEqual(LANGUAGES.map((l) => l.code).sort());
  });

  for (const { code } of LANGUAGES) {
    it(`${code}: cùng cấu trúc với tiếng Anh, meta description vừa độ dài`, () => {
      const pages = modules[`./${code}.ts`]!.default;
      const errors: string[] = [];
      compare(en, pages, code, errors);
      expect(errors).toEqual([]);
      for (const slug of PAGE_SLUGS) {
        const d = pages[slug].description.length;
        expect(d, `${code}/${slug} description`).toBeGreaterThanOrEqual(40);
        expect(d, `${code}/${slug} description`).toBeLessThanOrEqual(200);
      }
    });
  }
});
