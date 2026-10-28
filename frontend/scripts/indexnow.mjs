// IndexNow: báo cho Bing (và Yandex, Seznam, Naver…) các URL trong dist/sitemap.xml để được thu thập nhanh.
// Bing cũng cung cấp dữ liệu cho ChatGPT search và Copilot. Không cần xác minh tên miền: khóa được chứng minh
// bằng tệp public/<khóa>.txt đã deploy. Chạy SAU khi deploy: `npm run indexnow`.
// Đổi tên miền → không cần đổi gì ở đây (tên miền lấy từ sitemap); đổi khóa → đổi cả tên và nội dung tệp .txt.
import fs from 'node:fs/promises';
import path from 'node:path';

const KEY = 'ec5d7f9d3ff7c977a5e1a4307d111935';

const root = path.resolve(import.meta.dirname, '..');
const sitemap = await fs.readFile(path.join(root, 'dist', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) throw new Error('dist/sitemap.xml has no URLs — run `npm run build` first');

const { origin, host } = new URL(urls[0]);
const keyLocation = `${origin}/${KEY}.txt`;

const live = await fetch(keyLocation);
if (!live.ok || (await live.text()).trim() !== KEY) {
  throw new Error(`Key file is not live at ${keyLocation} — deploy first`);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: KEY, keyLocation, urlList: urls }),
});
// 200 = đã nhận, 202 = đã nhận và đang xác minh khóa.
console.log(`IndexNow: ${res.status} ${res.statusText} — submitted ${urls.length} URLs for ${host}`);
if (!res.ok) process.exitCode = 1;
