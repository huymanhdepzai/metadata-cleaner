# Hướng dẫn xây dựng All Metadata Cleaner từ đầu

Tài liệu này tổng hợp toàn bộ quá trình xây dựng web **All Metadata Cleaner**: công cụ xem và xóa metadata ảnh
(EXIF, GPS, XMP, IPTC, C2PA, prompt AI) chạy **100% trên trình duyệt**, có 32 ngôn ngữ, prerender HTML tĩnh
cho SEO và deploy lên VPS chạy Nginx. Đọc theo thứ tự từ trên xuống là có thể dựng lại một web tương tự.

> Tài liệu liên quan: [README.md](./README.md) (tổng quan + ánh xạ module), [SEO.md](./SEO.md) (chi tiết SEO,
> bản đồ từ khóa, việc nên làm tiếp).

---

## Mục lục

1. [Mục tiêu và nguyên tắc](#1-mục-tiêu-và-nguyên-tắc)
2. [Kiến trúc tổng thể](#2-kiến-trúc-tổng-thể)
3. [Bước 1 — Khởi tạo dự án](#3-bước-1--khởi-tạo-dự-án)
4. [Bước 2 — Engine xử lý ảnh (lõi)](#4-bước-2--engine-xử-lý-ảnh-lõi)
5. [Bước 3 — Web Worker, hàng đợi, xuất file](#5-bước-3--web-worker-hàng-đợi-xuất-file)
6. [Bước 4 — Giao diện](#6-bước-4--giao-diện)
7. [Bước 5 — Đa ngôn ngữ (32 ngôn ngữ)](#7-bước-5--đa-ngôn-ngữ-32-ngôn-ngữ)
8. [Bước 6 — Router và prerender HTML tĩnh](#8-bước-6--router-và-prerender-html-tĩnh)
9. [Bước 7 — SEO kỹ thuật](#9-bước-7--seo-kỹ-thuật)
10. [Bước 8 — Nội dung: bài viết, landing page, công cụ, trang thông tin](#10-bước-8--nội-dung)
11. [Bước 9 — Hiệu năng](#11-bước-9--hiệu-năng)
12. [Bước 10 — Deploy lên VPS (Nginx)](#12-bước-10--deploy-lên-vps-nginx)
13. [Công việc thường ngày (cookbook)](#13-công-việc-thường-ngày-cookbook)
14. [Kiểm thử](#14-kiểm-thử)
15. [Cạm bẫy đã gặp và cách tránh](#15-cạm-bẫy-đã-gặp-và-cách-tránh)
16. [Lộ trình SEO tiếp theo](#16-lộ-trình-seo-tiếp-theo)
17. [Bản đồ thư mục](#17-bản-đồ-thư-mục)

---

## 1. Mục tiêu và nguyên tắc

| Nguyên tắc | Hệ quả kỹ thuật |
| --- | --- |
| **Ảnh không rời khỏi máy** | Toàn bộ xử lý trong trình duyệt (Web Worker). Không có backend xử lý ảnh, không analytics, không script/font bên thứ ba. |
| **Không giảm chất lượng** | Không vẽ lại ảnh qua `<canvas>`. Chỉ cắt các khối metadata ở mức byte, dữ liệu ảnh nén được chép nguyên. |
| **Ảnh vẫn hiển thị đúng** | Luôn giữ kích thước, hướng xoay (Orientation), hồ sơ màu ICC, dữ liệu hoạt ảnh. |
| **Trung thực** | Nói rõ giới hạn: không xóa được watermark trong điểm ảnh (SynthID), nền tảng còn tín hiệu khác. |
| **SEO được từ đầu** | Mọi trang prerender thành HTML tĩnh; URL theo ngôn ngữ; nội dung chuyên sâu; trang mỏng gắn noindex. |

Giới hạn sản phẩm (trong `src/config/limits.ts`): 25 MB và 40 MP mỗi ảnh, 50 ảnh mỗi lượt, định dạng
JPEG, PNG, WebP, GIF, HEIC/HEIF, AVIF.

---

## 2. Kiến trúc tổng thể

```
Trình duyệt
 ├─ UI (React)  ── Dropzone → validator (dung lượng, magic bytes, kích thước đọc từ byte)
 │                 └─ useJobStore (Zustand): hàng đợi job, chỉ giữ tham chiếu File
 ├─ WorkerPool (n = số nhân CPU − 1/2)
 │     └─ parser.worker.ts: analyze() → báo cáo | stripMetadata() → file sạch + phân tích lại
 └─ exporter: tải từng file / ZIP (JSZip, tải lười)

Lúc build (Node)
 vite build (client) + vite build --ssr (entry-server.tsx)
   → scripts/prerender.mjs: render mọi route × ngôn ngữ thành HTML tĩnh,
     sinh sitemap.xml, llms.txt, 404.html, ảnh OG (SVG → PNG), icon

VPS — Nginx (deploy/nginx.conf: URL chuẩn 301, tự chọn ngôn ngữ ở "/") → dist/ tĩnh
```

Stack: **React 19 + TypeScript + Vite 6 · Tailwind CSS v4 · Zustand · JSZip · Web Workers · Vitest ·
Nginx trên VPS**. Font tự host qua `@fontsource`; cờ ngôn ngữ từ `flag-icons` (SVG).

---

## 3. Bước 1 — Khởi tạo dự án

```bash
npm create vite@latest frontend -- --template react-ts
cd frontend
npm i react react-dom zustand jszip flag-icons @fontsource-variable/inter @fontsource/sora @fontsource/playfair-display
npm i -D tailwindcss @tailwindcss/vite vitest @resvg/resvg-js typescript
```

Các tệp cấu hình chính:

- **`package.json` → scripts**
  ```json
  "build": "tsc --noEmit && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs",
  "test": "vitest run",
  "indexnow": "node scripts/indexnow.mjs"
  ```
- **`vite.config.ts`**: plugin React + Tailwind, `worker.format: 'es'`, `ssr.noExternal: true` (bản SSR chạy độc
  lập trong Node lúc prerender), cấu hình Vitest, và plugin `article-meta` (xem [mục 11](#11-bước-9--hiệu-năng)).
- **`tsconfig.json`**: `strict`, `noUnusedLocals`, `verbatimModuleSyntax`, `moduleResolution: bundler`.
- **`index.html`**: có chỗ đánh dấu `<!--app-head-->` (prerender chèn thẻ `<head>` theo trang) và
  `<div id="root"></div>`; script nhỏ đặt chế độ sáng/tối trước khi vẽ để tránh nháy; JSON-LD `WebApplication`.

---

## 4. Bước 2 — Engine xử lý ảnh (lõi)

Lõi (`src/core`) viết bằng TypeScript thuần trên `Uint8Array`, **không chứa văn bản hiển thị**: mọi thông điệp trả
về dạng `Msg { key, params }` để giao diện dịch (xem [mục 7](#7-bước-5--đa-ngôn-ngữ-32-ngôn-ngữ)).

### 4.1. Nhận diện và kiểm tra trước

| Việc | File | Ghi chú |
| --- | --- | --- |
| Nhận diện định dạng bằng magic bytes | `src/core/formats.ts` | Không tin đuôi file hay MIME. |
| Đọc kích thước từ byte (không dùng `Image`) | `src/core/dimensions.ts` | Chặn ảnh > 40 MP trước khi tốn RAM. |
| Kiểm tra trước khi nhận job | `src/services/validator.ts` | Rỗng, quá dung lượng, sai định dạng, quá điểm ảnh. |

### 4.2. Phân tích (báo cáo)

`src/core/inspect/`: `exif.ts` (IFD0, Exif IFD, GPS → thêm trường `GPSPosition` dạng `"lat, lon"`), `xmp.ts`,
`iptc.ts`, `icc.ts`, `c2pa.ts`, `text.ts` (chunk văn bản PNG), `aiSignatures.ts` (chữ ký công cụ AI),
`extract.ts` (tách khối theo định dạng), `analyze.ts` (ghép thành `AnalysisReport`).

Mỗi trường được phân loại `location | personal | time | ai | technical` → dùng cho panel "Chi tiết riêng tư",
"AI và nguồn gốc", mức rủi ro của công cụ phân tích.

### 4.3. Xóa metadata (strippers)

Điểm vào duy nhất: `stripMetadata(data, format, options)` trong `src/core/strippers/index.ts`.

| Định dạng | Xóa | Giữ |
| --- | --- | --- |
| JPEG | APP1 (EXIF + thumbnail, XMP), APP2 MPF, APP11 (C2PA/JUMBF), APP13 (IPTC), COM, APPn khác, thumbnail JFIF/JFXX, dữ liệu sau EOI | APP0, APP2 ICC, APP14 Adobe; Orientation ghi lại trong APP1 tối giản |
| PNG | tEXt/zTXt/iTXt (prompt, workflow, XMP), eXIf, caBX (C2PA), tIME, dSIG | IHDR, PLTE, IDAT, tRNS, gAMA, cHRM, sRGB, iCCP, APNG; Orientation ghi lại bằng eXIf tối giản (CRC đúng) |
| WebP | EXIF, XMP, C2PA | VP8/VP8L/ALPH, ICCP, ANIM/ANMF |
| GIF | XMP Application Extension, Comment | NETSCAPE2.0 (vòng lặp), dữ liệu ảnh |
| HEIC/AVIF | uuid (C2PA, XMP) → đổi thành `free`; item Exif/XMP ghi đè payload rỗng; thời gian trong moov = 0 | Mọi offset (xử lý **tại chỗ**, kích thước file không đổi) |

Chính sách cố định `RETENTION_POLICY` (`src/store/useJobStore.ts`) được kiểm thử trong `src/core/policy.test.ts`.
Sau khi xóa, file đầu ra được **phân tích lại** để chứng minh metadata đã hết (hiển thị trong `ResultBanner`).

---

## 5. Bước 3 — Web Worker, hàng đợi, xuất file

- **`src/workers/parser.worker.ts`**: nhận `{ kind: 'analyze' | 'strip', file, format }`, đọc `ArrayBuffer`,
  trả kết quả qua Transferable Objects (không sao chép buffer).
- **`src/services/workerPool.ts`**: số worker = `getPoolSize()` (máy 8 nhân → 6 worker), xếp hàng job.
- **`src/store/useJobStore.ts`** (Zustand): vòng đời job `analyzing → pending → processing → completed | failed`.
  Store **chỉ giữ tham chiếu `File`**, không giữ buffer, để không đầy RAM với 50 ảnh × 25 MB.
- **`src/services/exporter.ts`**: tải từng file (giữ MIME gốc) hoặc `metadata-cleared.zip`. JSZip được
  `import()` khi cần → không nằm trong bundle chính. Nhớ `URL.revokeObjectURL`.

Danh sách ảnh là **toàn cục**: ảnh thả ở trang công cụ vẫn còn khi sang trang chủ (nút "Xóa metadata khỏi các ảnh
này" tận dụng điều này).

---

## 6. Bước 4 — Giao diện

| Thành phần | File | Vai trò |
| --- | --- | --- |
| Khung thả ảnh | `src/components/Dropzone.tsx` | Tự viết (không dùng thư viện): bấm để chọn, kéo-thả cả thư mục (`webkitGetAsEntry`), lọc MIME/đuôi, chặn trình duyệt mở file khi thả trượt ra ngoài. |
| Khu làm việc | `src/components/Workspace.tsx` | Thanh tổng hợp + nút Xóa tất cả / ZIP. |
| Thẻ từng ảnh | `src/components/FileCard.tsx` | Badge rủi ro, nút xóa/tải; prop `readOnly` cho công cụ "Xem metadata". |
| Panel báo cáo | `src/components/report/ReportPanels.tsx` | Riêng tư, AI, Ảnh & tệp, Toàn bộ metadata (tìm kiếm), Các kiểm tra. |
| Header/Footer/Hero | `src/components/layout/SiteChrome.tsx` | Menu từ `NAV` (`src/content/seo.ts`), menu điện thoại, footer 4 cột, liên kết mọi ngôn ngữ. |
| Các mục trang chủ | `src/components/seo/SeoSections.tsx` | Cách hoạt động, Tính năng, Vì sao chọn, Bảng định dạng, Bài viết, FAQ, Miễn trừ trách nhiệm. |
| Trang bài viết | `src/components/seo/GuidePage.tsx` | Breadcrumb, câu trả lời nhanh, công cụ nhúng, mục lục, bảng, "Xem thêm", FAQ, bài liên quan. |
| Trang công cụ | `src/components/seo/ToolPages.tsx` | `/tools/` + 3 công cụ (xem metadata, phân tích quyền riêng tư, dung lượng metadata). |
| Trang thông tin | `src/components/seo/StaticPage.tsx` | About, Privacy, Terms, Contact. |

Quy ước giao diện: Tailwind v4 với **lớp logic** (`ps-`, `pe-`, `start-`, `text-end`) để hỗ trợ RTL; màu theo biến
`--color-*` để có chế độ sáng/tối (`src/theme.ts`, `ThemeSwitcher.tsx`); ảnh minh họa bài viết vẽ bằng SVG
(`GuideIllustration.tsx`) dùng biến màu nên tự đổi theo chế độ.

---

## 7. Bước 5 — Đa ngôn ngữ (32 ngôn ngữ)

- **Danh sách**: `src/i18n/languages.ts` (mã, tên, `og` locale, `rtl`). Mã mặc định `en` → URL không tiền tố.
- **Chuỗi giao diện**: `src/i18n/locales/<mã>.ts`. Kiểu `Messages` suy ra từ `en.ts`; TypeScript + `locales.test.ts`
  bắt thiếu khóa, sai số phần tử mảng, sai tham số `{...}`, chuỗi rỗng.
- **Tải lười theo chunk**: `src/i18n/index.ts` — `loadBundle(lang, needs)` nạp chuỗi giao diện + meta bài viết; nội
  dung nặng chỉ nạp khi trang cần (`ContentNeeds`: `pages`, `tools`, `guide`).
- **Lõi không chứa chữ**: lõi trả `msg('rejTooLarge', { size, max })`, giao diện gọi `tr(m, msg)`.
- **Chọn ngôn ngữ**: theo đường dẫn; riêng `/` thì Nginx chuyển hướng 302 theo cookie → `Accept-Language` →
  quốc gia; bot luôn nhận bản tiếng Anh (`src/seo/nginx.ts` → `deploy/nginx.conf`, `src/i18n/detect.ts`).
- **Mẹo khi thêm chuỗi cho 32 ngôn ngữ**: viết một script Node nhỏ chứa bảng dịch rồi chèn vào mọi tệp tại một
  "neo" duy nhất (vd. ngay trước `  seo: {`), kiểm tra neo xuất hiện đúng 1 lần, giữ nguyên kiểu xuống dòng
  CRLF/LF của tệp. Dùng dấu `’` thay cho `'` trong văn bản để khỏi phải escape.

---

## 8. Bước 6 — Router và prerender HTML tĩnh

### 8.1. Router (`src/router.ts`)

```
/                         trang chủ (x-default, tiếng Anh)
/{lang}/                  trang chủ theo ngôn ngữ (/vi/, /pt-br/)
/{lang?}/guides/          trang tổng hợp bài (phân trang /guides/page/{n}/)
/{lang?}/guides/{slug}/   bài viết
/{lang?}/tools/           trang tổng hợp công cụ
/{lang?}/tools/{slug}/    công cụ riêng
/{lang?}/{about|privacy|terms|contact}/  trang thông tin
```

Các hàm cốt lõi: `pathFor`, `parsePath`, `localizeRoute` (trang không có ở ngôn ngữ đích → về trang gần nhất),
`isIndexable`, `languagesFor` (cho hreflang), `lastModified` (cho sitemap), `allRoutes` (danh sách prerender),
`contentNeeds` (nội dung cần nạp trước khi hiển thị), `navigate` (điều hướng phía client), `bootstrapRouter`.

Thêm loại trang mới = thêm nhánh vào **mọi** `switch (route.name)` — TypeScript báo thiếu nhờ union `Route`.

### 8.2. Prerender

1. `vite build` → bundle client vào `dist/`.
2. `vite build --ssr src/entry-server.tsx` → `dist-ssr/entry-server.js`, xuất `paths()`, `render(path)`,
   `sitemapXml()`, `llmsTxt()`, `ogSvgs()`, `brandSvg()`.
3. `scripts/prerender.mjs`: với mỗi path → `render()` (nạp đúng nội dung trang cần, `renderToString`) → thay
   `<html>`, `<!--app-head-->`, `<div id="root">` trong template → ghi `dist/<path>/index.html`. Sau đó ghi
   `404.html` (noindex), `sitemap.xml`, `llms.txt`, ảnh OG PNG (resvg) và icon.
4. Trên trình duyệt, `src/main.tsx` gọi `bootstrapRouter()` (nạp đúng nội dung như lúc prerender) rồi
   `hydrateRoot` — nếu URL bị chuyển hướng thì render mới thay vì hydrate.

**Quy tắc vàng**: trước khi hydrate, client phải có đúng dữ liệu đã dùng để prerender (vd. nội dung bài, trang
công cụ). Đó là lý do `contentNeeds()` dùng chung cho cả `entry-server.tsx` và `router.apply()`.

---

## 9. Bước 7 — SEO kỹ thuật

| Hạng mục | Cách làm | File |
| --- | --- | --- |
| `<title>`, description, robots, canonical, hreflang, Open Graph, Twitter | `buildHead()` dùng chung cho prerender và client (`applyHead`). Tiêu đề ≤ 60 ký tự (tự bỏ hậu tố tên site khi dài). | `src/seo/head.ts`, `DocumentHead.tsx` |
| hreflang + x-default | Chỉ liệt kê ngôn ngữ thật sự có trang và được index. | `languagesFor()` |
| Noindex trang mỏng | Bài chỉ có tóm tắt (ngôn ngữ chưa có bài chuyên sâu) vẫn prerender cho người dùng nhưng `noindex, follow`, không vào sitemap/hreflang. | `isIndexable()` |
| sitemap.xml | Chỉ URL được index, kèm `xhtml:link` hreflang, `lastmod` riêng từng trang. | `sitemapXml()` |
| Dữ liệu có cấu trúc | Trang chủ: Organization, WebSite, FAQPage, HowTo. Bài: Article, BreadcrumbList, FAQPage. Công cụ: WebApplication, FAQPage, BreadcrumbList; tổng hợp: CollectionPage. Trang thông tin: AboutPage/ContactPage/WebPage. | `StructuredData.tsx` |
| Ảnh OG | Mỗi bài một ảnh 1200×630 từ SVG minh họa → PNG lúc build. | `src/seo/og.tsx` |
| URL chuẩn | Nginx 301: http → https, www → tên miền chính, thêm `/` cuối. | `src/seo/nginx.ts` → `deploy/nginx.conf` |
| 404 thật | `error_page 404 /404.html` trong cấu hình Nginx. | `deploy/nginx.conf` |
| llms.txt | Tóm tắt cho trợ lý AI: công cụ, landing page, bài, trang thông tin, ngôn ngữ. | `llmsTxt()` |
| IndexNow | `npm run indexnow` gửi mọi URL trong sitemap cho Bing/Yandex. | `scripts/indexnow.mjs` |
| robots.txt, header | Cache dài cho `/assets/*`, header bảo mật (Nginx). | `public/robots.txt`, `deploy/nginx.conf` |

Đổi tên miền: sửa `SITE.origin` (`src/content/seo.ts`), URL trong `index.html`, `public/robots.txt`.

---

## 10. Bước 8 — Nội dung

### 10.1. Bài viết (`src/content/articles/`)

- **Bài nền tảng** (`BASE_GUIDE_SLUGS`, 6 bài): có ở mọi ngôn ngữ; tiêu đề + tóm tắt nằm trong
  `seo.guides.items` của tệp ngôn ngữ.
- **Bài mở rộng** (`EXTRA_GUIDE_SLUGS`): chỉ có ở ngôn ngữ khai báo trong `ARTICLE_LANGS` (hiện `en`, `vi`).
- **Mỗi bài một tệp** `src/content/articles/<mã>/<slug>.ts` kiểu `Article`: `title`, `seoTitle?`, `summary`,
  `description` (110–170 ký tự), `answer` (40–90 từ — nhắm featured snippet / AI Overviews), `sections` (≥ 4, có
  `bullets` / `steps` / `table` / `related`), `faqHeading`, `faq` (≥ 5). Test chặn bài dưới chuẩn.
- **Landing page** cũng là bài mở rộng, có công cụ nhúng sẵn: `remove-metadata-from-{jpg,png,heic,webp}`,
  `remove-c2pa`, `remove-exif`.
- **Ngày của bài**: `GUIDE_DATES` trong `src/content/seo.ts` (`published`, `updated`) → sitemap `lastmod`, dòng
  "Cập nhật", `datePublished`/`dateModified`.
- Mỗi slug cần thêm: `GUIDE_TAGS` (thẻ đỏ), `SCENES` trong `GuideIllustration.tsx` (ảnh minh họa + ảnh OG).

### 10.2. Trang thông tin (`src/content/pages/<mã>.ts`)

About, Privacy, Terms, Contact ở cả 32 ngôn ngữ, cùng cấu trúc với bản tiếng Anh (test kiểm tra). Nhãn ngắn trong
`pages` của tệp ngôn ngữ. **Contact chỉ được tạo khi `SITE.contactEmail` khác rỗng.** Ngày sửa: `PAGE_UPDATED`.
Privacy phải mô tả đúng thực tế (localStorage `lang`/`theme`, cookie ngôn ngữ, máy chủ xử lý IP) — sửa nếu thêm
analytics.

### 10.3. Trang công cụ (`src/content/tools/<mã>.ts`)

`/tools/` liệt kê `TOOL_CARDS` (thẻ dẫn tới công cụ riêng, bài có công cụ nhúng nếu ngôn ngữ có bài, hoặc trang
chủ). Ba công cụ riêng dùng lại engine và danh sách ảnh:

| Công cụ | Hiển thị | Hàm hỗ trợ (`src/utils/report.ts`) |
| --- | --- | --- |
| `view-metadata` | `FileCard` chế độ `readOnly` | — |
| `privacy-check` | Mức rủi ro, `PrivacyPanel`, tọa độ GPS + nút mở OpenStreetMap (chỉ khi bấm) | `privacyRisk`, `gpsCoordinates`, `openStreetMapUrl` |
| `metadata-size` | Tổng byte metadata, % tệp, thanh từng khối (ICC "giữ lại") | `metadataSize`, `isKeptBlock` |

### 10.4. Trang chủ

Mục "Miễn trừ trách nhiệm" (`Disclaimer` trong `SeoSections.tsx`, chuỗi `seo.disclaimer`): công cụ làm gì, không
làm được gì, trách nhiệm người dùng và giới hạn trách nhiệm.

---

## 11. Bước 9 — Hiệu năng

| Kỹ thuật | Kết quả |
| --- | --- |
| Mỗi ngôn ngữ là một chunk riêng, tải lười | Trang tiếng Anh không tải 31 ngôn ngữ khác. |
| **Tách meta bài khỏi nội dung** bằng plugin `article-meta` (`vite.config.ts`): import `bài.ts?meta` chỉ lấy `title/summary/seoTitle/description` lúc build; nội dung đầy đủ của từng bài là chunk riêng | Dữ liệu bài trên mọi trang ~31 KB → ~4 KB gzip; vẫn viết bài trong một tệp duy nhất. |
| Nội dung trang thông tin / trang công cụ chỉ tải khi mở trang đó | Không làm nặng trang chủ. |
| Vùng kéo-thả tự viết thay react-dropzone | Bundle chính 130 → 114 KB gzip. |
| JSZip `import()` khi bấm tải ZIP | Không nằm trong bundle chính. |
| Font tự host, thứ tự `unicode-range` tinh chỉnh; tên 32 ngôn ngữ dùng font hệ thống | Bớt ~160 KB font cho trang tiếng Việt. |
| `/assets/*` cache 1 năm (`deploy/nginx.conf`) | Lần truy cập sau gần như không tải lại JS/CSS. |

Cách tìm thứ đang làm nặng bundle: build với `--sourcemap` vào thư mục tạm, rồi cộng độ dài `sourcesContent`
theo gói/tệp trong `index-*.js.map`.

---

## 12. Bước 10 — Deploy lên VPS (Nginx)

`npm run build` sinh `dist/` (trang tĩnh) và `deploy/nginx.conf` (từ `src/seo/nginx.ts`): 301 http → https,
www → tên miền chính, thêm `/` cuối; trang gốc `/` chuyển 302 sang ngôn ngữ theo cookie → Accept-Language →
quốc gia (nếu bật GeoIP2); cache 1 năm cho `/assets/*`, header bảo mật, gzip, 404 thật. Hướng dẫn cài đặt lần đầu
(certbot, sites-enabled) nằm ở đầu tệp `deploy/nginx.conf`.

```bash
npm run build
scp -r dist/* user@<ip-vps>:/var/www/allmetadatacleaner.com/   # chép trang lên VPS
# nếu deploy/nginx.conf đổi: chép lên /etc/nginx/sites-available/ rồi `sudo nginx -t && sudo systemctl reload nginx`
npm run indexnow       # báo URL mới cho Bing (sau mỗi lần deploy)
```

Sau khi deploy, mở trang và **Ctrl+F5** để không dùng bản cũ trong cache. Lỗi thường gặp: sửa code, thử trên
`npm run dev` thấy đúng nhưng trang thật không đổi → chưa build lại hoặc chưa chép `dist/` lên VPS.

Lần đầu: gửi `<origin>/sitemap.xml` lên Google Search Console và Bing Webmaster Tools; kiểm tra vài trang bằng
Rich Results Test.

---

## 13. Công việc thường ngày (cookbook)

### Thêm một bài viết mới (en + vi)
1. Thêm slug vào đầu `EXTRA_GUIDE_SLUGS`, khai báo `ARTICLE_LANGS`, `GUIDE_TAGS`, `GUIDE_DATES` (`src/content/seo.ts`).
2. Thêm cảnh minh họa vào `SCENES` (`GuideIllustration.tsx`).
3. Viết `src/content/articles/en/<slug>.ts` và `vi/<slug>.ts` (tệp chỉ được `import type`).
4. Thêm liên kết `related` từ 2–5 bài liên quan tới bài mới (liên kết nội bộ).
5. `npm test` → sửa đến khi đạt chuẩn SEO tối thiểu; `npm run build`.

### Dịch bài sang ngôn ngữ mới (vd. `es`)
1. Tạo `src/content/articles/es.ts` theo mẫu `en.ts` và thư mục `src/content/articles/es/`.
2. Viết các tệp bài, thêm `'es'` vào `ARTICLE_LANGS` của từng bài → bài tự được index, vào sitemap/hreflang.

### Sửa nội dung một bài
Sửa tệp bài và đổi `GUIDE_DATES[slug].updated` sang ngày hôm nay.

### Thêm chuỗi giao diện
Thêm vào `src/i18n/locales/en.ts` → TypeScript/`locales.test.ts` chỉ ra 31 tệp còn thiếu → thêm bằng script.

### Thêm một công cụ riêng
1. Thêm slug vào `TOOL_SLUGS` và thẻ vào `TOOL_CARDS` (`src/content/seo.ts`).
2. Thêm nội dung vào `tools` của cả 32 tệp `src/content/tools/<mã>.ts` (test kiểm tra cấu trúc).
3. Thêm nhánh hiển thị trong `ToolResults` (`ToolPages.tsx`), hàm phân tích vào `src/utils/report.ts` + test.

### Thêm một ngôn ngữ giao diện
Thêm vào `LANGUAGES` (`languages.ts`), cờ trong `flags.ts`, tạo `locales/<mã>.ts`, `pages/<mã>.ts`,
`tools/<mã>.ts`; cập nhật `inLanguage` trong `index.html`.

### Bật trang Contact
Điền `SITE.contactEmail` trong `src/content/seo.ts` → trang, link footer, sitemap và email trong schema tự bật.

---

## 14. Kiểm thử

```bash
npm test          # Vitest
npx tsc --noEmit  # typecheck
npm run build     # build + prerender (lỗi route/nội dung lộ ra ở đây)
npm run preview   # xem bản build tại http://localhost:4173
```

| Test | Kiểm tra |
| --- | --- |
| `src/core/engine.test.ts`, `policy.test.ts`, `inspect/analyze.test.ts` | Stripper từng định dạng, chính sách giữ/xóa, bộ phân tích. |
| `src/i18n/locales.test.ts` | 32 tệp ngôn ngữ cùng cấu trúc/tham số với tiếng Anh. |
| `src/router.test.ts` | URL, noindex, hreflang, số trang prerender, chuẩn SEO tối thiểu của bài, meta tách đúng, ngày `lastmod`, trang công cụ/thông tin. |
| `src/content/pages/pages.test.ts`, `src/content/tools/tools.test.ts` | Cấu trúc bản dịch, độ dài tiêu đề/description. |
| `src/utils/report.test.ts` | Mức rủi ro, đọc tọa độ GPS, dung lượng metadata. |
| `src/seo/brand.test.ts`, `nginx.test.ts` | Favicon khớp logo; cấu hình Nginx chọn ngôn ngữ giống mã nguồn. |

Kiểm thử giao diện thật (không cần cài thêm): chạy `npm run preview`, mở Edge/Chrome headless với
`--remote-debugging-port`, điều khiển qua Chrome DevTools Protocol bằng `WebSocket` có sẵn trong Node để bấm menu
và đọc DOM.

---

## 15. Cạm bẫy đã gặp và cách tránh

| Vấn đề | Cách xử lý |
| --- | --- |
| HEIC/AVIF: `iloc` lưu offset tuyệt đối → cắt byte làm hỏng ảnh | Xử lý tại chỗ: đổi box thành `free`, ghi đè payload, giữ nguyên kích thước file. |
| Xóa EXIF làm ảnh bị xoay | Ghi lại thẻ Orientation trong khối EXIF tối giản. |
| Vẽ lại qua canvas làm mất ICC, nén lại JPEG, hạ PNG 16-bit | Không bao giờ giải mã ảnh; chỉ cắt khối. |
| Windows không gán MIME cho HEIC | Lọc theo cả MIME lẫn đuôi tệp; định dạng thật kiểm bằng magic bytes. |
| `DataTransfer` chỉ đọc được trong lúc xử lý sự kiện drop | Lấy `webkitGetAsEntry()`/`files` ngay đầu handler, đọc thư mục sau. |
| `readEntries` chỉ trả từng đợt (≤ 100) | Gọi lặp tới khi trả mảng rỗng. |
| Hydration mismatch khi trang cần nội dung tải lười | `contentNeeds()` dùng chung cho prerender và client; nạp xong mới hydrate. |
| Một module vừa import tĩnh vừa động bị gộp cả vào chunk tĩnh | Không tách được một tệp thành 2 chunk → dùng truy vấn `?meta` qua plugin để sinh module riêng. |
| Script chèn dịch phá tệp CRLF / sai dấu nháy | Phát hiện `\r\n`, giữ nguyên; escape `'` hoặc dùng `’`. |
| Trang mỏng gần trùng giữa 30 ngôn ngữ | `noindex, follow`, loại khỏi sitemap/hreflang tới khi có bài dịch thật. |
| Bot bị chuyển hướng ngôn ngữ ở `/` | Nginx nhận diện bot và luôn trả bản tiếng Anh. |
| Soft 404 (URL lạ trả trang chủ mã 200) | `not_found_handling: "404-page"` + `404.html` có `noindex`. |
| Sửa xong nhưng trang thật không đổi | Chưa build + chép `dist/` lên VPS, hoặc trình duyệt dùng cache — Ctrl+F5. |

---

## 16. Lộ trình SEO tiếp theo

Chi tiết trong [SEO.md](./SEO.md). Tóm tắt thứ tự ưu tiên:

1. Điền `SITE.contactEmail`; tên miền riêng (allmetadatacleaner.com) đã trỏ về VPS; Search Console + Bing Webmaster.
2. Viết bài đầy đủ cho 4–6 ngôn ngữ lớn (es, pt-BR, de, fr, ja, id) — nhờ người bản ngữ biên tập.
3. Một bài so sánh có số liệu đo thật (hash dữ liệu ảnh trước/sau, ICC, C2PA còn sót) — dễ được dẫn link.
4. Backlink: Product Hunt, AlternativeTo, Reddit (trả lời thật), mở mã engine lên GitHub/npm.
5. Đều đặn 2–4 bài/tháng; theo dõi Search Console để viết lại title/description trang có CTR thấp.
6. Có thể mở rộng công cụ: xóa chọn lọc (chỉ EXIF/XMP/C2PA/GPS), chuyển HEIC → JPG (cần bộ giải mã wasm, tải lười).

Không nhắm từ khóa kiểu "undetectable", "bypass AI detection"; không sinh hàng loạt trang mỏng (chính sách
scaled content abuse của Google); luôn nhắc nghĩa vụ khai báo nội dung AI.

---

## 17. Bản đồ thư mục

```
frontend/
├─ index.html                 template (<!--app-head-->, #root, JSON-LD WebApplication)
├─ vite.config.ts             React, Tailwind, worker ES, SSR noExternal, Vitest, plugin article-meta
├─ deploy/nginx.conf         (sinh khi build) Nginx: 301 URL chuẩn, chọn ngôn ngữ ở "/", cache, 404
├─ scripts/
│  ├─ prerender.mjs           HTML tĩnh, 404, sitemap, llms.txt, ảnh OG, icon
│  └─ indexnow.mjs            gửi URL cho IndexNow
├─ public/                    robots.txt, favicon, manifest, khóa IndexNow
└─ src/
   ├─ main.tsx, App.tsx, entry-server.tsx, router.ts, theme.ts, types.ts
   ├─ config/limits.ts        giới hạn, định dạng nhận, số worker
   ├─ core/                   formats, dimensions, isobmff, bytes
   │  ├─ inspect/             exif, xmp, iptc, icc, c2pa, text, aiSignatures, extract, analyze
   │  └─ strippers/           jpeg, png, webp, gif, isobmff, index (stripMetadata)
   ├─ workers/parser.worker.ts
   ├─ services/               validator, workerPool, exporter
   ├─ store/                  useJobStore (RETENTION_POLICY), create
   ├─ utils/                  format, report (rủi ro, GPS, dung lượng)
   ├─ i18n/                   languages, detect, index (loadBundle/setLanguage), locales/<32 mã>.ts
   ├─ seo/                    head, og, nginx
   ├─ content/
   │  ├─ seo.ts               SITE, slug bài/công cụ/trang, ngày, NAV, bảng định dạng
   │  ├─ guideContent.ts
   │  ├─ articles/            types, collect, <mã>.ts (meta), <mã>/<slug>.ts (bài)
   │  ├─ pages/               types, <32 mã>.ts (About/Privacy/Terms/Contact)
   │  └─ tools/               types, <32 mã>.ts (trang công cụ)
   └─ components/
      ├─ Dropzone, Workspace, FileCard, RejectionList, Link, BrandMark, ui
      ├─ report/ReportPanels
      ├─ layout/               SiteChrome, DocumentHead, LanguageSwitcher, ThemeSwitcher, flags
      └─ seo/                  SeoSections, GuidePage, GuidesIndexPage, GuideCarousel, GuideIllustration,
                               ToolPages, StaticPage, StructuredData
```
