import type { Article } from '../types';

const article: Article = {
  description:
    'Ảnh từ Midjourney, ChatGPT/DALL·E và Firefly có thể chứa prompt, job ID và dữ liệu nguồn gốc AI. Xem những gì được nhúng và cách xóa trước khi chia sẻ.',
  answer:
    'Ảnh tải về từ dịch vụ tạo ảnh AI có thể chứa prompt của bạn, mã job hoặc mã lần tạo, tên công cụ và Content Credentials (C2PA). Bất kỳ ai cũng đọc được bằng một trình xem metadata miễn phí. Để giấu prompt, hãy mở tệp trong công cụ kiểm tra metadata, xác nhận các trường đang có, rồi xóa khỏi một bản sao bằng công cụ làm sạch không mất chất lượng trước khi đăng hoặc gửi ảnh.',
  sections: [
    {
      heading: 'Dịch vụ tạo ảnh AI nhúng gì vào ảnh tải về',
      paragraphs: [
        'Các dịch vụ tạo ảnh trực tuyến ngày càng thêm metadata vào mọi ảnh tải về — một phần vì minh bạch, một phần để hỗ trợ các chuẩn nguồn gốc. Nội dung cụ thể tùy dịch vụ, định dạng tải về và phiên bản hiện tại, nên hãy luôn kiểm tra tệp thực tế. Ví dụ thường gặp:',
      ],
      table: {
        head: ['Dịch vụ', 'Metadata thường có', 'Có thể làm lộ'],
        rows: [
          ['Midjourney', 'Văn bản mô tả/chú thích, IPTC DigitalSourceType', 'Prompt, job ID, việc ảnh do AI tạo'],
          ['Tạo ảnh trong ChatGPT, DALL·E', 'Content Credentials (C2PA)', 'Ảnh do OpenAI tạo, các thao tác đã ghi'],
          ['Adobe Firefly', 'Content Credentials (C2PA), XMP', 'Ảnh tạo bằng AI, ứng dụng đã dùng, lịch sử chỉnh sửa'],
          ['Nhiều công cụ khác', 'XMP CreatorTool, EXIF Software, ngày giờ', 'Tên công cụ, thời gian tạo, đôi khi mã liên quan tới tài khoản'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Vì sao prompt đáng được bảo vệ',
      paragraphs: [
        'Với họa sĩ minh họa, nhà thiết kế và người viết prompt, một prompt đã tinh chỉnh là kiến thức làm việc tích lũy qua nhiều lần thử. Ai tải ảnh của bạn về cũng có thể mở bằng trình xem metadata, sao chép prompt và tái tạo phong cách của bạn trong vài phút.',
        'Mã định danh và chi tiết liên quan tới tài khoản còn có thể liên kết một ảnh công khai với tài khoản của bạn hoặc với các ảnh khác bạn đã tạo. Nếu giao ảnh cho khách hàng, prompt nhúng sẵn có thể làm lộ quy trình và công cụ bạn dùng.',
      ],
    },
    {
      heading: 'Cách kiểm tra ảnh có chứa prompt không',
      paragraphs: [],
      steps: [
        'Thả tệp đã tải về vào công cụ ở đầu trang — xử lý tại máy nên prompt của bạn không bao giờ bị tải lên.',
        'Xem mục “AI và nguồn gốc” để thấy prompt, tên công cụ tạo ảnh và khai báo nguồn gốc.',
        'Xem mục “Chi tiết riêng tư” để thấy tác giả, mô tả, mã định danh và ngày giờ.',
        'Mở “Toàn bộ metadata và chi tiết file” nếu muốn đọc nguyên văn từng trường.',
      ],
    },
    {
      heading: 'Cách xóa prompt và metadata AI',
      paragraphs: [],
      steps: [
        'Bấm “Xóa metadata AI”. Văn bản prompt, mã định danh, khối XMP, IPTC, EXIF và C2PA bị xóa ở mức byte.',
        'Xem bảng kết quả màu xanh — tệp đã làm sạch được phân tích lại để bạn xác nhận không còn gì.',
        'Tải ảnh về, hoặc tải ZIP nếu bạn xử lý nhiều ảnh.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Midjourney có luôn nhúng prompt không?',
      paragraphs: [
        'Không hẳn. Nội dung xuất hiện tùy cách tải về (web app, Discord, đã upscale hay chưa), định dạng tệp và phiên bản dịch vụ — và thay đổi theo thời gian. Câu trả lời đáng tin duy nhất là kiểm tra chính tệp bạn đang có. Điều này cũng đúng với các dịch vụ khác: hai ảnh từ cùng một công cụ có thể chứa các trường khác nhau.',
      ],
    },
    {
      heading: 'Những gì xóa metadata không làm được',
      paragraphs: [
        'Một số nhà cung cấp còn thêm thủy ấn vô hình vào chính điểm ảnh, như SynthID của Google. Đó không phải metadata, và công cụ làm sạch không mất dữ liệu — vốn không bao giờ thay đổi điểm ảnh — không thể xóa chúng. Nếu bạn đăng ảnh AI trông như thật, quy định của nền tảng vẫn có thể yêu cầu bạn công khai. Xóa prompt bảo vệ quy trình của bạn; nó không thay đổi bản chất của bức ảnh.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Hỏi đáp về metadata Midjourney và DALL·E',
  faq: [
    {
      q: 'Người khác có xem được prompt Midjourney từ ảnh không?',
      a: 'Nếu prompt nằm trong metadata của tệp thì có — bất kỳ trình xem metadata nào cũng hiển thị. Hãy kiểm tra tệp và xóa các trường đó trước khi chia sẻ nếu muốn giữ kín prompt.',
    },
    {
      q: 'Midjourney có luôn nhúng prompt không?',
      a: 'Tùy định dạng tải về và thiết lập hiện tại của dịch vụ. Hãy kiểm tra tệp để biết chính xác có những trường nào trước khi quyết định.',
    },
    {
      q: 'Ảnh tạo bằng ChatGPT có chứa metadata không?',
      a: 'Ảnh từ tính năng tạo ảnh của OpenAI mang Content Credentials (C2PA) ghi OpenAI là nguồn. Báo cáo liệt kê chúng trong mục “AI và nguồn gốc”.',
    },
    {
      q: 'Làm sạch có xóa SynthID hay thủy ấn vô hình khác không?',
      a: 'Không. Thủy ấn vô hình là một phần của dữ liệu điểm ảnh. Công cụ chỉ xóa metadata và không bao giờ thay đổi điểm ảnh.',
    },
    {
      q: 'Xóa metadata có làm giảm chất lượng ảnh không?',
      a: 'Không. Các khối metadata bị cắt bỏ, còn dữ liệu ảnh nén được chép nguyên.',
    },
    {
      q: 'Có làm sạch nhiều ảnh cùng lúc được không?',
      a: 'Được. Thả tối đa 50 ảnh, xem báo cáo, rồi tải tất cả trong một tệp ZIP.',
    },
  ],
};

export default article;
