# SEO — All Metadata Cleaner

## 1. Đã triển khai

| Hạng mục | Chi tiết | Vị trí |
| --- | --- | --- |
| **HTML tĩnh (prerender)** | 386 trang: 32 ngôn ngữ × (trang chủ + trang tổng hợp + 6 hướng dẫn nền tảng + trang thông tin), riêng `en`, `vi`, `ja`, `es`, `de`, `fr`, `pt-BR` có thêm 14 bài mở rộng. Nội dung, `<title>`, description, robots, canonical, hreflang, Open Graph và JSON-LD có sẵn trong HTML — crawler không cần chạy JavaScript. | `src/entry-server.tsx`, `scripts/prerender.mjs` |
| **URL theo ngôn ngữ** | `/` (tiếng Anh, x-default), `/vi/`, `/ja/`, `/pt-br/`…; hướng dẫn tại `/{lang}/guides/{slug}/`. Liên kết cũ `?lang=xx` tự chuyển hướng. | `src/router.ts` |
| **Trang riêng cho mỗi hướng dẫn** | Breadcrumb, H1, bài viết, công cụ nhúng sẵn, hỏi đáp riêng, bài liên quan. Schema `Article` + `BreadcrumbList` (+ `FAQPage`). | `src/components/seo/GuidePage.tsx` |
| **Landing page theo định dạng** | `remove-metadata-from-{jpg,png,heic,webp}` (en, vi, ja, es, de, fr, pt-BR): nhắm truy vấn mang ý định dùng công cụ, công cụ nhúng sẵn, nêu rõ điểm khác biệt (không nén lại, giữ ICC/hướng xoay, HEIC giữ nguyên định dạng). Bảng định dạng trên trang chủ liên kết tới từng trang. | `src/content/articles/<mã>.ts`, `FormatTable` trong `SeoSections.tsx` |
| **Nội dung chuyên sâu** | 7 ngôn ngữ (en, vi, ja, es, de, fr, pt-BR — bổ sung ja/es/de/fr/pt-BR ngày 2026-10-21, nên nhờ người bản ngữ rà soát), mỗi bài một tệp: câu trả lời nhanh ở đầu bài (nhắm featured snippet / AI Overviews), mục lục, H2 theo biến thể truy vấn, bước đánh số, bảng so sánh, liên kết “Xem thêm” theo ngữ cảnh, 6 câu hỏi đáp (FAQPage), meta description riêng. Trung bình ~880 từ (en) / ~1.070 từ (vi). Ngôn ngữ khác: phần tóm tắt (noindex). Test `router.test.ts` chặn bài dưới chuẩn (thiếu câu trả lời nhanh, < 4 mục, < 5 hỏi đáp, description ngoài 110–170 ký tự; tiếng Nhật: 60–125 ký tự, đếm từ bằng Intl.Segmenter). | `src/content/articles/<mã>/<slug>.ts`, `GuidePage.tsx` |
| **Noindex trang mỏng** | Bài chỉ có phần tóm tắt và trang tổng hợp của ngôn ngữ chưa có bài chuyên sâu vẫn được prerender cho người dùng nhưng gắn `noindex, follow`, không có hreflang và không vào sitemap. Khai báo bài trong `ARTICLE_LANGS` → trang tự được index (test kiểm tra khớp với tệp bài viết). | `src/content/seo.ts`, `isIndexable()` trong `src/router.ts` |
| **Landing page theo việc cần làm** | `remove-c2pa`, `remove-exif` (en, vi, ja, es, de, fr, pt-BR): nhắm truy vấn “remove C2PA / Content Credentials”, “EXIF remover”; công cụ nhúng sẵn ở đầu trang. | `src/content/articles/<mã>/remove-{c2pa,exif}.ts` |
| **Trang công cụ** | `/tools/` (tổng hợp 9 công cụ, có trong menu) + 3 công cụ riêng ở cả 32 ngôn ngữ: `view-metadata` (chỉ xem), `privacy-check` (mức rủi ro, tọa độ GPS + nút mở OpenStreetMap — chỉ mở khi bấm), `metadata-size` (dung lượng từng khối, tỉ lệ so với tệp). Dùng chung engine và danh sách ảnh với trình làm sạch. Schema `WebApplication` + `FAQPage` + `BreadcrumbList`; trang tổng hợp `CollectionPage`. Thẻ dẫn tới bài có công cụ nhúng nếu ngôn ngữ có bài, không thì về công cụ trên trang chủ. | `src/components/seo/ToolPages.tsx`, `src/content/tools/<mã>.ts`, `TOOL_CARDS` trong `src/content/seo.ts` |
| **Trang thông tin (E-E-A-T)** | About, Privacy, Terms, Contact ở cả 32 ngôn ngữ, URL `/{lang?}/{about,privacy,terms,contact}/`, được index + hreflang. Nội dung tải riêng (chunk ~7 KB) chỉ khi mở trang. Schema `AboutPage`/`ContactPage`/`WebPage` + `BreadcrumbList`. Contact chỉ được tạo khi đã điền `SITE.contactEmail`. | `src/content/pages/<mã>.ts`, `StaticPage.tsx`, nhãn trong `pages` của tệp ngôn ngữ |
| **sitemap.xml** | Sinh khi build, chỉ gồm trang được index, mỗi URL kèm `xhtml:link` hreflang. `lastmod` theo từng trang: bài → `GUIDE_DATES[slug].updated`, trang tổng hợp → bài mới sửa nhất trên trang, trang thông tin → `PAGE_UPDATED`, trang chủ → `SITE.contentUpdated`. Cùng ngày đó dùng cho “Cập nhật” trên trang bài và `datePublished`/`dateModified` của schema Article. **Sửa bài nào thì đổi `updated` của bài đó.** | `src/content/seo.ts`, `lastModified()` trong `src/router.ts` |
| **URL chuẩn (301)** | Nginx chuyển hướng vĩnh viễn http → https, www → tên miền chính và thêm “/” cuối, tránh trùng lặp nội dung. 404 thật cho URL không tồn tại. | `src/seo/nginx.ts` → `deploy/nginx.conf` |
| **Tiêu đề ≤ 60 ký tự** | `seoTitle` trong bài viết cho thẻ `<title>`/og:title khi H1 dài; test chặn tiêu đề hiển thị > 60 ký tự. | `src/content/articles/types.ts`, `src/seo/head.ts` |
| **Font tự host** | Inter/Sora/Playfair từ @fontsource, cùng tên miền; thứ tự unicode-range tinh chỉnh (vietnamese sau latin-ext) và tên 32 ngôn ngữ dùng font hệ thống → trang vi tải ~73 KB font thay vì ~236 KB. Lighthouse mobile ~92 (trước 69–77). | `src/fonts.css`, `--font-system` trong `index.css` |
| **llms.txt** | Tóm tắt Markdown cho trợ lý AI: công cụ làm gì, giới hạn, danh sách bài hướng dẫn kèm mô tả. Sinh khi build. | `llmsTxt()` trong `src/entry-server.tsx` |
| **IndexNow (Bing, Yandex…)** | `npm run indexnow` gửi mọi URL trong sitemap; khóa là tệp `public/<khóa>.txt`. Không cần xác minh tên miền. | `scripts/indexnow.mjs` |
| Trang chủ | `FAQPage` + `HowTo`, schema `WebApplication` tĩnh. | `StructuredData.tsx`, `index.html` |

## 2. Sau mỗi lần deploy

1. `npm run indexnow` — báo URL mới/đổi cho Bing (cũng là nguồn của ChatGPT search, Copilot).
2. Lần đầu: gửi `<origin>/sitemap.xml` lên Google Search Console (xác minh kiểu Domain qua bản ghi DNS TXT) và
   Bing Webmaster Tools (có thể nhập từ Search Console).
3. Kiểm tra vài trang bằng Rich Results Test (Article, BreadcrumbList, FAQPage).

**Khi đổi tên miền:** đổi `SITE.origin` (`src/content/seo.ts`), URL trong `index.html` (schema WebApplication) và
`public/robots.txt`; build lại (sinh lại `deploy/nginx.conf`), cập nhật Nginx + chứng chỉ SSL, chạy lại `npm run indexnow`.

## 3. Bản đồ từ khóa → trang

| Trang (`/guides/…`) | Nhóm truy vấn mục tiêu |
| --- | --- |
| `remove-metadata-from-jpg` | remove metadata from JPG online, JPEG metadata remover, xóa metadata ảnh JPG (truy vấn “EXIF” → `remove-exif`) |
| `remove-metadata-from-png` | remove metadata from PNG, remove ComfyUI workflow from PNG, xóa metadata PNG |
| `remove-metadata-from-heic` | remove metadata from HEIC, HEIC/HEIF metadata remover, xóa metadata ảnh HEIC (truy vấn “location/GPS” → `remove-gps-location-from-photos`) |
| `remove-metadata-from-webp` | remove metadata from WebP, WebP EXIF remover |
| `made-with-ai-label` | remove “Made with AI” / “AI info” label, xóa nhãn Made with AI, false positive |
| `remove-stable-diffusion-comfyui-metadata` | remove Stable Diffusion metadata PNG, remove ComfyUI workflow, strip generation data |
| `hide-midjourney-dalle-prompts` | remove metadata from Midjourney / ChatGPT images, hide Midjourney prompt, xóa metadata ảnh ChatGPT |
| `/tools/view-metadata/` | view image metadata, EXIF viewer online, metadata viewer, xem metadata ảnh |
| `/tools/privacy-check/` | photo privacy check, check photo location, where was this photo taken, kiểm tra GPS ảnh |
| `/tools/metadata-size/` | metadata size, how much metadata in photo, image metadata analyzer |
| `remove-c2pa` | remove C2PA, C2PA remover, remove Content Credentials, xóa C2PA |
| `remove-exif` | EXIF remover, remove EXIF data online, remove EXIF from JPEG, delete EXIF, xóa EXIF ảnh |
| `what-is-c2pa-content-credentials` | what is C2PA, Content Credentials explained, C2PA là gì |
| `remove-gps-location-from-photos` | remove location from photo, remove GPS from photo, remove location from iPhone photo, xóa vị trí ảnh |
| `batch-remove-metadata` | bulk / batch remove metadata from photos, remove metadata from multiple images, xóa metadata hàng loạt |
| `made-with-ai-label` ↔ `which-platforms-label-ai-images` | “why real photos get labeled” thuộc `made-with-ai-label`; bài platforms chỉ tóm tắt một đoạn và dẫn link sang |
| `synthid-invisible-ai-watermarks` | what is SynthID, can SynthID be removed, remove AI watermark (trả lời trung thực: công cụ metadata không xóa được) |
| `view-remove-metadata-iphone-android` | view photo metadata on iPhone / Android, xem metadata ảnh trên điện thoại |
| `remove-metadata-windows-mac` (en, vi) | remove metadata from photos Windows 11 / Mac, remove EXIF Windows, Preview remove location, xóa metadata ảnh trên máy tính |
| `chatgpt-image-metadata` (en, vi) | does ChatGPT add metadata to images, ChatGPT image C2PA, remove metadata from ChatGPT image, ảnh ChatGPT có metadata không |
| `does-screenshot-remove-metadata` (en, vi) | does a screenshot remove metadata / EXIF / GPS, chụp màn hình có xóa metadata không |

**Mỗi truy vấn chỉ giao cho một trang** (tránh các trang tự cạnh tranh nhau); trang khác nhắc tới chủ đề đó thì dẫn link sang trang được giao.

Định hướng nội dung: quyền riêng tư, bảo vệ prompt và sửa nhãn AI gắn nhầm; luôn nêu rõ giới hạn
(nền tảng có tín hiệu khác, SynthID, Durable Content Credentials) và nghĩa vụ công khai ảnh do AI tạo.
Không nhắm các từ khóa kiểu “undetectable”, “bypass AI detection”; không sinh hàng loạt trang tag/từ khóa
(chính sách scaled content abuse của Google).

## 4. Việc nên làm tiếp

1. **Điền `SITE.contactEmail`** (`src/content/seo.ts`) để bật trang Contact và email trong schema Organization.
1. **Tên miền riêng**: allmetadatacleaner.com, thương hiệu All Metadata Cleaner. Từ khóa nhấn mạnh trong tiêu đề:
   Free Metadata Cleaner · AI Metadata Cleaner · AI Tag Remover. 301 từ www/http về tên miền chính đã có trong `deploy/nginx.conf`.
2. **Bài so sánh có kiểm chứng**: chạy thật nhiều công cụ trên cùng bộ ảnh, đo hash dữ liệu ảnh trước/sau, ICC,
   hướng xoay, C2PA còn sót — loại bài dễ được dẫn link nhất. Chỉ đăng số liệu đo được.
3. **Backlink**: mở mã engine lên GitHub/npm; Reddit (r/comfyui, r/StableDiffusion, r/privacy); Product Hunt,
   AlternativeTo; bài khách trên blog nhiếp ảnh/quyền riêng tư.
4. **Viết bài chuyên sâu cho thị trường kế tiếp** (tạo `src/content/articles/<mã>.ts` theo mẫu `en.ts`, thêm các tệp
   `src/content/articles/<mã>/<slug>.ts`, rồi thêm mã ngôn ngữ vào `ARTICLE_LANGS`). Ưu tiên theo dữ liệu Search Console; nhờ người bản ngữ biên tập thay vì dịch máy.
5. **Ảnh minh họa thật** trong bài (ảnh chụp báo cáo trước/sau).
6. **Theo dõi** truy vấn và CTR trong Search Console; viết lại title/description cho trang có hiển thị cao nhưng ít click.
7. ~~Tách tiêu đề/tóm tắt khỏi nội dung bài~~ — đã làm (plugin `article-meta` trong `vite.config.ts`): mọi trang chỉ
   tải meta bài (~4 KB gzip thay vì ~31 KB); nội dung đầy đủ của mỗi bài là chunk riêng (~2–5 KB) tải khi mở bài.
   Vùng thả ảnh tự viết thay cho react-dropzone (bundle chính 130 → 114 KB gzip).
