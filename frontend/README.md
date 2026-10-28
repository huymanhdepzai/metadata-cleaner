# All Metadata Cleaner — Frontend

Gỡ metadata AI (C2PA, EXIF, XMP, prompt Stable Diffusion / ComfyUI) khỏi ảnh **100% trên trình duyệt**,
không re-encode điểm ảnh. Triển khai theo tài liệu *System Architecture Design*.

```bash
npm install
npm run dev        # http://localhost:5173 (thử /vi/, /guides/what-is-c2pa-content-credentials/ …)
npm test           # unit test: Parsing Engine, chính sách xóa, bản dịch
npm run build      # typecheck + build client + build SSR + prerender toàn bộ trang HTML tĩnh vào dist/
npm run preview    # xem bản build (HTML đã prerender) tại http://localhost:4173
```

**Định tuyến & prerender:** `src/router.ts` quản lý URL theo ngôn ngữ (`/`, `/vi/`, `/{lang}/guides/{slug}/`).
Khi build, `src/entry-server.tsx` render mọi trang thành HTML tĩnh (kèm `<head>` riêng) và `scripts/prerender.mjs`
ghi vào `dist/` cùng `sitemap.xml`; trình duyệt hydrate lên HTML có sẵn. Bài viết chuyên sâu cho trang hướng dẫn
nằm ở `src/content/articles/<mã-ngôn-ngữ>.ts` (hiện có `en`, `vi`). Chi tiết SEO: [SEO.md](./SEO.md).

Stack: React 19 + TypeScript + Vite · Tailwind CSS v4 · Zustand · JSZip · Web Workers.

Hướng dẫn dựng lại toàn bộ web từ đầu: [README_TUTORIAL.md](./README_TUTORIAL.md).

## Luồng sử dụng

1. Tải ảnh lên → kiểm tra dung lượng / megapixel → **phân tích metadata** trong Web Worker.
2. Mỗi ảnh hiển thị báo cáo: *Chi tiết riêng tư* (vị trí, cá nhân, thời gian), *AI và nguồn gốc*,
   *Ảnh và tệp*, *Toàn bộ metadata và chi tiết file*, *Những gì trình duyệt này đã kiểm tra*.
3. Người dùng bấm **XÓA METADATA AI** → gỡ metadata → phân tích lại tệp đầu ra để xác minh → tải về / ZIP.

Bộ phân tích nằm ở `src/core/inspect/` (EXIF/GPS, XMP, IPTC, ICC, PNG text, C2PA, chữ ký công cụ AI).
Đề xuất SEO chi tiết xem [SEO.md](./SEO.md).

## Đa ngôn ngữ

- 32 ngôn ngữ, danh sách trong `src/i18n/languages.ts`; bộ chọn ngôn ngữ ở header.
- Mỗi ngôn ngữ là một tệp `src/i18n/locales/<mã>.ts` có kiểu `Messages` (suy ra từ `en.ts`) và được tải lười
  (lazy-load) thành chunk riêng. Ngôn ngữ lấy từ đường dẫn (`/vi/…`); riêng trang gốc `/` tự chuyển sang lựa chọn
  đã lưu hoặc ngôn ngữ trình duyệt (crawler không có lựa chọn đã lưu nên luôn thấy bản tiếng Anh).
- Lõi xử lý (`src/core`, `src/services`) không chứa văn bản hiển thị: chúng trả về `Msg { key, params }` và
  giao diện dịch bằng `tr()`. Khóa nằm trong nhánh `report` của `en.ts`.
- Thêm chuỗi mới: thêm vào `en.ts` → TypeScript và `locales.test.ts` sẽ chỉ ra mọi ngôn ngữ còn thiếu.
- Hỗ trợ RTL (العربية, עברית) bằng `dir="rtl"` và các lớp Tailwind logic (`ps-`, `pe-`, `start-`, `text-end`).

## Ánh xạ module thiết kế → mã nguồn

| Phân hệ | Module | File |
| --- | --- | --- |
| A. UI & Pre-Validation | Dropzone UI | `src/components/Dropzone.tsx` |
| | Quick Size Validator (≤ 25 MB) | `src/services/validator.ts` |
| | Byte-level Dimension Checker (≤ 40 MP, không dùng Image/Canvas) | `src/core/dimensions.ts` |
| | Nhận diện Magic Bytes | `src/core/formats.ts` |
| B. Concurrency Manager | Job Queue Store (chỉ giữ tham chiếu `File`) | `src/store/useJobStore.ts` |
| | Worker Pool (`navigator.hardwareConcurrency`) | `src/services/workerPool.ts`, `src/config/limits.ts` |
| | Memory Router (Transferable Objects) | `src/workers/parser.worker.ts` |
| C. Multi-format Parsing Engine | JPEG Stripper | `src/core/strippers/jpeg.ts` |
| | PNG / WebP Stripper | `src/core/strippers/png.ts`, `webp.ts` |
| | GIF Stripper | `src/core/strippers/gif.ts` |
| | ISOBMFF Stripper (HEIC/HEIF/AVIF) | `src/core/strippers/isobmff.ts` |
| D. Packaging | Blob Assembler (giữ MIME gốc) | `src/store/useJobStore.ts` |
| | Batch Exporter → `metadata-cleared.zip`, `revokeObjectURL` | `src/services/exporter.ts` |

## Ghi chú kỹ thuật

- **Chính sách cố định** (`RETENTION_POLICY`, kiểm thử trong `src/core/policy.test.ts`): xóa vị trí, ngày giờ &
  máy ảnh, người tạo/chỉnh sửa (kể cả ảnh xem trước), nhãn nguồn AI và Content Credentials; luôn giữ kích thước,
  hướng xoay, thông tin màu (ICC), dữ liệu ảnh và hoạt ảnh.
- **JPEG**: xóa APP1 (EXIF kèm thumbnail IFD1, XMP), APP2 MPF/FlashPix, APP11 (C2PA/JUMBF), APP13 (IPTC), COM,
  các APPn khác, thumbnail JFIF/JFXX và mọi dữ liệu sau EOI (ảnh phụ MPF, Motion Photo). Giữ APP0 JFIF, APP2 ICC,
  APP14 Adobe; thẻ Orientation được ghi lại trong một APP1 tối giản.
- **PNG / WebP**: hướng xoay trong eXIf / EXIF được ghi lại bằng chunk tối giản (PNG có CRC hợp lệ).
- **AVIF/HEIC động**: thời gian trong mvhd/tkhd/mdhd được ghi 0, `udta`/`meta` của `moov` bị vô hiệu hóa.
- **HEIC/AVIF**: box `iloc` lưu offset tuyệt đối, nên cắt byte sẽ làm hỏng ảnh. Stripper xử lý tại chỗ —
  đổi box `uuid` (C2PA) thành `free` và ghi đè item Exif/XMP bằng payload rỗng hợp lệ — kích thước file giữ nguyên.
- **GIF**: giữ `NETSCAPE2.0` (vòng lặp animation), xóa XMP Application Extension và Comment.
- Parser viết bằng TypeScript thuần (Uint8Array). Nếu sau này cần tăng tốc HEIC/AVIF có thể thay
  `src/core/strippers/isobmff.ts` bằng bản Rust → Wasm mà không đổi giao diện `stripMetadata()`.
