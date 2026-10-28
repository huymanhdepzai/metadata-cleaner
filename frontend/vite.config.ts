/// <reference types="vitest/config" />
import { readFile } from 'node:fs/promises';
import { defineConfig, transformWithEsbuild, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ARTICLE_META_KEYS } from './src/content/articles/types';

/**
 * `src/content/articles/<mã>/<slug>.ts?meta` → module chỉ chứa phần meta của bài (tiêu đề, tóm tắt, seoTitle,
 * description). Nhờ vậy danh sách bài trên mọi trang chỉ tải vài KB, còn nội dung đầy đủ của từng bài là chunk riêng
 * tải khi mở bài — mà bài viết vẫn nằm trong một tệp duy nhất. Tệp bài chỉ được có `import type` (không import giá trị).
 */
function articleMeta(): Plugin {
  return {
    name: 'article-meta',
    enforce: 'pre',
    async load(id) {
      const [file, query] = id.split('?');
      if (query !== 'meta') return null;
      this.addWatchFile(file);
      const { code } = await transformWithEsbuild(await readFile(file, 'utf8'), file, { loader: 'ts', format: 'esm' });
      const { default: article } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
      const meta = Object.fromEntries(ARTICLE_META_KEYS.filter((k) => article[k] !== undefined).map((k) => [k, article[k]]));
      return `export default ${JSON.stringify(meta)};`;
    },
  };
}

export default defineConfig({
  plugins: [articleMeta(), react(), tailwindcss()],
  worker: {
    format: 'es',
  },
  // Bản build SSR chỉ dùng để prerender HTML lúc build → gói kèm mọi thư viện để chạy độc lập trong Node.
  ssr: {
    noExternal: true,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
