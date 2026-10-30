import { describe, expect, it } from 'vitest';
import { LANGUAGES } from '../../i18n/languages';
import { FEATURED_TOOL_CARD, FULL_CONTENT_LANGS, TOOL_CARDS, TOOL_GROUPS, TOOL_SLUGS } from '../seo';
import en from './en';
import { toolFaq, type ToolPageContent, type ToolsContent } from './types';

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
    const full = FULL_CONTENT_LANGS.includes(code);
    it(`${code}: cùng cấu trúc với tiếng Anh, tiêu đề và mô tả vừa độ dài`, () => {
      const content = modules[`./${code}.ts`]!.default;
      const errors: string[] = [];
      // Ngôn ngữ đầy đủ: so cả mục guide; ngôn ngữ khác: không được có guide (trang chỉ có khung cơ bản).
      compare(full ? en : withoutGuides(en), content, code, errors);
      expect(errors).toEqual([]);
      for (const page of [content.hub, ...TOOL_SLUGS.map((s) => content.tools[s])]) {
        expect(page.title.length, `${code} title: ${page.title}`).toBeLessThanOrEqual(70);
        expect(page.description.length, `${code} description`).toBeGreaterThanOrEqual(40);
        expect(page.description.length, `${code} description`).toBeLessThanOrEqual(200);
      }
    });

    if (full) {
      it(`${code}: mục guide đủ dài và không lặp lại giữa các công cụ (tránh trang mỏng / trùng mẫu)`, () => {
        const content = modules[`./${code}.ts`]!.default;
        const seen = new Set<string>();
        for (const slug of TOOL_SLUGS) {
          const page = content.tools[slug];
          const texts = guideTexts(page);
          expect(words(code, [page.intro, ...page.steps, ...toolFaq(page).flatMap((f) => [f.q, f.a]), ...texts].join(' ')), `${code}/${slug}`).toBeGreaterThanOrEqual(550);
          expect(toolFaq(page).length, `${code}/${slug} faq`).toBeGreaterThanOrEqual(6);
          for (const text of texts) {
            expect(seen.has(text), `${code}/${slug} lặp đoạn: ${text.slice(0, 60)}`).toBe(false);
            seen.add(text);
          }
        }
      });
    }
  }
});

function withoutGuides(content: ToolsContent): ToolsContent {
  const tools = Object.fromEntries(Object.entries(content.tools).map(([slug, { guide: _, ...page }]) => [slug, page]));
  return { ...content, tools: tools as ToolsContent['tools'] };
}

const guideTexts = (page: ToolPageContent) =>
  (page.guide?.sections ?? []).flatMap((s) => [s.text, ...(s.items ?? []).map((i) => i.text)]);

/** Số từ; tiếng Nhật không có khoảng trắng → đếm từ bằng Intl.Segmenter (giống test bài viết). */
function words(lang: string, text: string): number {
  const segmenter = new Intl.Segmenter(lang, { granularity: 'word' });
  return [...segmenter.segment(text)].filter((s) => s.isWordLike).length;
}
