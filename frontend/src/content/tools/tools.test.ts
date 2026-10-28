import { describe, expect, it } from 'vitest';
import { LANGUAGES } from '../../i18n/languages';
import { FEATURED_TOOL_CARD, TOOL_CARDS, TOOL_GROUPS, TOOL_SLUGS } from '../seo';
import en from './en';
import type { ToolsContent } from './types';

const modules = import.meta.glob<{ default: ToolsContent }>(['./*.ts', '!./types.ts', '!./*.test.ts'], { eager: true });

/** So sánh cấu trúc với bản tiếng Anh: cùng khóa, cùng số bước và câu hỏi; không chuỗi rỗng. */
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

describe('Trang công cụ', () => {
  it('bản tiếng Anh có đủ thẻ và công cụ', () => {
    expect(Object.keys(en.cards).sort()).toEqual(TOOL_CARDS.map((c) => c.id).sort());
    expect(Object.keys(en.tools).sort()).toEqual([...TOOL_SLUGS].sort());
  });

  it('trang tổng hợp hiển thị mỗi thẻ đúng một lần (thẻ nổi bật + các nhóm)', () => {
    const shown = [FEATURED_TOOL_CARD, ...TOOL_GROUPS.flatMap((g) => g.cards)];
    expect([...shown].sort()).toEqual(TOOL_CARDS.map((c) => c.id).sort());
    expect(Object.keys(en.groups).sort()).toEqual(TOOL_GROUPS.map((g) => g.id).sort());
  });

  it('có đủ tệp cho mọi ngôn ngữ', () => {
    const files = Object.keys(modules).map((p) => p.replace('./', '').replace('.ts', '')).sort();
    expect(files).toEqual(LANGUAGES.map((l) => l.code).sort());
  });

  for (const { code } of LANGUAGES) {
    it(`${code}: cùng cấu trúc với tiếng Anh, tiêu đề và mô tả vừa độ dài`, () => {
      const content = modules[`./${code}.ts`]!.default;
      const errors: string[] = [];
      compare(en, content, code, errors);
      expect(errors).toEqual([]);
      for (const page of [content.hub, ...TOOL_SLUGS.map((s) => content.tools[s])]) {
        expect(page.title.length, `${code} title: ${page.title}`).toBeLessThanOrEqual(70);
        expect(page.description.length, `${code} description`).toBeGreaterThanOrEqual(40);
        expect(page.description.length, `${code} description`).toBeLessThanOrEqual(200);
      }
    });
  }
});
