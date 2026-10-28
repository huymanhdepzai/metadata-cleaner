// Prerender: dùng bản build SSR (dist-ssr) để sinh HTML tĩnh cho mọi trang × ngôn ngữ vào dist/,
// đồng thời tạo sitemap.xml, trang 404, ảnh chia sẻ Open Graph (PNG) và biểu tượng ứng dụng.
// Chạy sau `vite build` và `vite build --ssr` (xem script "build" trong package.json).
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';
import { Resvg } from '@resvg/resvg-js';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html template is missing <!--app-head--> or <div id="root"></div>');
}

const { paths, render, sitemapXml, llmsTxt, ogSvgs, brandSvg, nginxConf } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

async function renderPage(url) {
  const { html, head, htmlAttrs } = await render(url);
  return template
    .replace(/<html[^>]*>/, `<html ${htmlAttrs}>`)
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

let count = 0;
for (const url of paths()) {
  const file = path.join(dist, ...url.split('/').filter(Boolean), 'index.html');
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, await renderPage(url));
  count++;
}

// 404: máy chủ trả mã 404 thật cho URL không tồn tại (tránh "soft 404"); trình duyệt vẫn nhận nội dung trang chủ
// và router phía client tự chuyển về trang phù hợp. noindex để trang này không bao giờ vào kết quả tìm kiếm.
const notFound = (await renderPage('/')).replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex" />');
await fs.writeFile(path.join(dist, '404.html'), notFound);

await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemapXml());
await fs.writeFile(path.join(dist, 'llms.txt'), await llmsTxt());

// PNG từ SVG: ảnh OG theo bài + biểu tượng ứng dụng (apple-touch-icon, manifest, logo cho schema.org).
const toPng = (svg, width) =>
  new Resvg(svg, {
    fitTo: width ? { mode: 'width', value: width } : { mode: 'original' },
    font: { loadSystemFonts: true, defaultFontFamily: 'Arial', sansSerifFamily: 'Segoe UI', monospaceFamily: 'Consolas' },
  })
    .render()
    .asPng();

await fs.mkdir(path.join(dist, 'og'), { recursive: true });
const og = ogSvgs();
for (const { file, svg } of og) await fs.writeFile(path.join(dist, 'og', file), toPng(svg));

// Biểu tượng sinh từ src/components/BrandMark.tsx (public/favicon.svg là bản sao cho dev server, có test kiểm tra khớp).
const favicon = brandSvg();
await fs.writeFile(path.join(dist, 'favicon.svg'), favicon);
for (const [file, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await fs.writeFile(path.join(dist, file), toPng(favicon, size));
}

// Nén sẵn (gzip mức 9) cho Nginx gzip_static: HTML, CSS, JS, sitemap… ≥ 1 KB — giảm thời gian phản hồi máy chủ.
const compressible = /\.(html|css|js|mjs|json|xml|txt|svg|webmanifest)$/;
let gzipped = 0;
for (const entry of await fs.readdir(dist, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !compressible.test(entry.name)) continue;
  const file = path.join(entry.parentPath, entry.name);
  const data = await fs.readFile(file);
  if (data.length < 1024) continue;
  await fs.writeFile(`${file}.gz`, gzipSync(data, { level: 9 }));
  gzipped++;
}

// Cấu hình Nginx cho VPS (301, chọn ngôn ngữ ở "/", cache, 404) — nằm ngoài dist/ để không bị phục vụ công khai.
await fs.mkdir(path.join(root, 'deploy'), { recursive: true });
await fs.writeFile(path.join(root, 'deploy', 'nginx.conf'), nginxConf());

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${count} pages + 404.html + sitemap.xml + ${og.length} OG images + ${gzipped} .gz + deploy/nginx.conf`);
