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

// Chunk JS của từng loại trang (src/pages/<chunk>.tsx, xem src/pageLoader.tsx) cùng các chunk nó phụ thuộc
// → <link rel="modulepreload"> để trình duyệt tải song song với JS chính, không phải đợi JS chính chạy xong.
const manifestFile = path.join(dist, '.vite', 'manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
const pagePreloads = new Map();
function pagePreloadHtml(chunk) {
  if (pagePreloads.has(chunk)) return pagePreloads.get(chunk);
  const key = `src/pages/${chunk}.tsx`;
  if (!manifest[key]) throw new Error(`Không thấy ${key} trong manifest của Vite`);
  const files = new Set();
  const visit = (k) => {
    const e = manifest[k];
    if (!e || e.isEntry || files.has(e.file)) return; // chunk chính đã có sẵn thẻ <script> trong template
    files.add(e.file);
    for (const dep of e.imports ?? []) visit(dep);
  };
  visit(key);
  const html = [...files].map((f) => `<link rel="modulepreload" crossorigin href="/${f}" />`).join('\n    ');
  pagePreloads.set(chunk, html);
  return html;
}

async function renderPage(url) {
  const { html, head, htmlAttrs, pageChunk } = await render(url);
  return template
    .replace(/<html[^>]*>/, `<html ${htmlAttrs}>`)
    .replace('<!--app-head-->', `${head}\n    ${pagePreloadHtml(pageChunk)}`)
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
// Font đi kèm dự án (devDependencies @expo-google-fonts/*), KHÔNG dùng font hệ thống: build trên Windows, Linux hay
// VPS đều cho ảnh giống hệt nhau. (Trước đây dùng Segoe UI → build trên Linux ra ảnh không có chữ.)
const fontDir = path.join(root, 'node_modules', '@expo-google-fonts');
const fontFiles = [
  'inter/400Regular/Inter_400Regular.ttf',
  'inter/600SemiBold/Inter_600SemiBold.ttf',
  'inter/700Bold/Inter_700Bold.ttf',
  'noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf',
  'noto-sans-jp/700Bold/NotoSansJP_700Bold.ttf',
  'jetbrains-mono/400Regular/JetBrainsMono_400Regular.ttf',
  'jetbrains-mono/800ExtraBold/JetBrainsMono_800ExtraBold.ttf',
].map((f) => path.join(fontDir, f));
for (const f of fontFiles) {
  try {
    await fs.access(f);
  } catch {
    throw new Error(`Thiếu font cho ảnh OG: ${f} — chạy "npm install" (devDependencies @expo-google-fonts/*).`);
  }
}
const resvgOptions = (width) => ({
  fitTo: width ? { mode: 'width', value: width } : { mode: 'original' },
  font: { loadSystemFonts: false, fontFiles, defaultFontFamily: 'Inter', sansSerifFamily: 'Inter', monospaceFamily: 'JetBrains Mono' },
});
const toPng = (svg, width) => new Resvg(svg, resvgOptions(width)).render().asPng();

// Tự kiểm tra: mỗi font phải vẽ ra điểm ảnh. resvg bỏ qua chữ không có font mà không báo lỗi → ảnh trống chữ.
for (const [family, sample] of [['Inter', 'Ag'], ['Noto Sans JP', '日本'], ['JetBrains Mono', 'Ag']]) {
  const probe = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="40"><text x="4" y="30" font-family="${family}" font-size="28">${sample}</text></svg>`;
  const { pixels } = new Resvg(probe, resvgOptions()).render();
  if (!pixels.some((v, i) => i % 4 === 3 && v > 0)) throw new Error(`Font "${family}" không vẽ được chữ — ảnh OG sẽ trống chữ.`);
}

// Ảnh OG theo ngôn ngữ nằm trong thư mục con (dist/og/<mã>/…), tiếng Anh ở dist/og/.
const og = await ogSvgs();
for (const { file, svg } of og) {
  const out = path.join(dist, 'og', file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, toPng(svg));
}

// Biểu tượng sinh từ src/components/BrandMark.tsx (public/favicon.svg là bản sao cho dev server, có test kiểm tra khớp).
const favicon = brandSvg();
await fs.writeFile(path.join(dist, 'favicon.svg'), favicon);
for (const [file, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await fs.writeFile(path.join(dist, file), toPng(favicon, size));
}

// Manifest chỉ dùng lúc build, không đưa lên máy chủ.
await fs.rm(path.join(dist, '.vite'), { recursive: true, force: true });

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
