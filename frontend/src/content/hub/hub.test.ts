import { describe, expect, it } from 'vitest';
import { LANGUAGES } from '../../i18n/languages';
import { GUIDE_GROUPS, GUIDE_SLUGS, hasFullArticle } from '../seo';
import type { GuidesHubContent } from './types';

const modules = import.meta.glob<{ default: GuidesHubContent }>(['./*.ts', '!./types.ts', '!./*.test.ts'], { eager: true });
const hubFor = (code: string) => modules[`./${code}.ts`]?.default;

describe('Văn bản trang tổng hợp /guides/', () => {
  it('có đúng ở các ngôn ngữ có bài chuyên sâu (trang tổng hợp được lập chỉ mục)', () => {
    for (const { code } of LANGUAGES) {
      const full = GUIDE_SLUGS.some((s) => hasFullArticle(s, code));
      expect(Boolean(hubFor(code)), code).toBe(full);
    }
  });

  it('đủ mọi nhóm, không chuỗi rỗng, không khóa thừa', () => {
    const ids = GUIDE_GROUPS.map((g) => g.id).sort();
    for (const [file, { default: hub }] of Object.entries(modules)) {
      expect(hub.more.trim(), file).not.toBe('');
      expect(Object.keys(hub.groups).sort(), file).toEqual(ids);
      for (const id of ids) {
        expect(hub.groups[id].title.trim(), `${file} ${id}`).not.toBe('');
        expect(hub.groups[id].text.trim(), `${file} ${id}`).not.toBe('');
      }
    }
  });
});
