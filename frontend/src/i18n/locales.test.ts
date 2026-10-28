import { describe, expect, it } from 'vitest';
import { LANGUAGES } from './languages';
import en from './locales/en';

const modules = import.meta.glob<{ default: unknown }>('./locales/*.ts', { eager: true });

const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

/** So sánh cấu trúc với bản tiếng Anh: cùng khóa, cùng độ dài mảng, cùng tham số {…}, không chuỗi rỗng. */
function compare(ref: unknown, value: unknown, path: string, errors: string[]): void {
  if (typeof ref === 'string') {
    if (typeof value !== 'string') return void errors.push(`${path}: expected string`);
    if (ref.length > 0 && value.trim() === '') errors.push(`${path}: empty`);
    if (placeholders(ref).join() !== placeholders(value).join()) {
      errors.push(`${path}: placeholders ${placeholders(value)} ≠ ${placeholders(ref)}`);
    }
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

describe('Bản dịch', () => {
  it('có đủ tệp cho mọi ngôn ngữ trong danh sách', () => {
    const files = Object.keys(modules).map((p) => p.replace('./locales/', '').replace('.ts', '')).sort();
    expect(files).toEqual(LANGUAGES.map((l) => l.code).sort());
  });

  for (const { code } of LANGUAGES) {
    it(`${code}: cùng cấu trúc và tham số với tiếng Anh`, () => {
      const errors: string[] = [];
      compare(en, modules[`./locales/${code}.ts`]?.default, code, errors);
      expect(errors).toEqual([]);
    });

    it(`${code}: <title> trang chủ "All Metadata Cleaner – …" ≤ 62 ký tự, description ≤ 155 ký tự`, () => {
      const { meta } = (modules[`./locales/${code}.ts`]!.default as typeof en);
      // Thương hiệu đứng đầu, phần sau là từ khóa bản địa; Google cắt tiêu đề ~60 ký tự nên giữ ngắn để hiện trọn.
      expect(meta.title, meta.title).toMatch(/^All Metadata Cleaner – /);
      expect([...meta.title].length, meta.title).toBeLessThanOrEqual(62);
      expect([...meta.description].length, meta.description).toBeLessThanOrEqual(155);
    });
  }
});
