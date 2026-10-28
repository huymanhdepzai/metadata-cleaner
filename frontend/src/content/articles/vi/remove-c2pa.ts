import type { Article } from '../types';

const article: Article = {
  title: 'Xóa C2PA (Content Credentials) khỏi ảnh — miễn phí, không tải lên',
  seoTitle: 'Xóa C2PA Content Credentials khỏi ảnh online',
  summary: [
    'Photoshop, Lightroom, Firefly, tính năng tạo ảnh của ChatGPT và một số máy ảnh gắn vào ảnh một manifest C2PA có chữ ký — Content Credentials — ghi lại ứng dụng hay mô hình AI nào đã tạo hoặc chỉnh sửa ảnh.',
    'Thả ảnh vào công cụ trên trang này để xem manifest ghi gì và xóa nó khỏi bản sao chỉ với một cú nhấp. Dữ liệu ảnh được chép nguyên và không có gì bị tải lên.',
  ],
  description:
    'Xóa C2PA Content Credentials khỏi ảnh JPG, PNG, WebP, HEIC, AVIF ngay trên trình duyệt. Xem manifest trước, rồi xóa không giảm chất lượng. Miễn phí, không tải lên.',
  answer:
    'Để xóa C2PA Content Credentials, thả ảnh vào công cụ trên trang này và bấm “Xóa metadata AI”. Manifest C2PA (APP11 trong JPEG, caBX trong PNG, chunk C2PA trong WebP, box uuid trong HEIC/AVIF) bị cắt bỏ cùng XMP, IPTC và EXIF, còn dữ liệu ảnh được chép nguyên từng byte. Tệp đã làm sạch được kiểm tra lại để bạn xác nhận không còn manifest.',
  sections: [
    {
      heading: 'Cách xóa Content Credentials trong ba bước',
      paragraphs: [],
      steps: [
        'Thả một hoặc nhiều ảnh vào công cụ phía trên — hỗ trợ JPG, PNG, WebP, GIF, HEIC và AVIF.',
        'Mở mục “AI và nguồn gốc” trong báo cáo để xem ảnh có manifest C2PA không, ứng dụng nào đã ký và những thao tác nào được ghi lại.',
        'Bấm “Xóa metadata AI” rồi tải từng tệp hoặc tải tất cả dưới dạng ZIP. Bảng kết quả xác nhận C2PA đã bị xóa.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Manifest C2PA nằm ở đâu trong tệp',
      paragraphs: ['Manifest nằm trong một khối riêng, tách khỏi dữ liệu ảnh, nên có thể xóa mà không cần mã hóa lại:'],
      table: {
        head: ['Định dạng', 'Khối C2PA', 'Cũng bị xóa'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, chú thích'],
          ['PNG', 'Chunk caBX', 'Chunk văn bản, eXIf, tIME'],
          ['WebP', 'Chunk C2PA', 'EXIF, XMP'],
          ['HEIC, AVIF', 'Box uuid', 'Item Exif và XMP'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Vì sao nhiều người xóa Content Credentials',
      paragraphs: [],
      bullets: [
        'Ảnh thật chỉ được chỉnh nhẹ bằng công cụ tạo sinh nhưng lại bị gắn nhãn “Thông tin AI” không đúng.',
        'Manifest để lộ phần mềm, tên tài khoản, lịch sử chỉnh sửa hoặc tệp nguồn mà bạn không muốn công khai.',
        'Khách hàng hoặc nền tảng cần tệp ảnh thuần, không kèm dữ liệu nguồn gốc.',
        'Bạn muốn biết ảnh đang khai báo gì trước khi quyết định có chia sẻ nguyên trạng hay không.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Xóa C2PA không làm được gì',
      paragraphs: [
        'Xóa manifest chỉ bỏ bản ghi được lưu trong bản sao tệp đó. Nó không xóa watermark vô hình trong điểm ảnh như SynthID, và không ảnh hưởng tới Content Credentials “bền vững” mà công cụ xác minh có thể tra cứu qua dấu vân tay hoặc kho dữ liệu trực tuyến.',
        'Nếu ảnh do AI tạo, nền tảng vẫn có thể yêu cầu bạn tự khai báo. Hãy tuân thủ quy định của từng nền tảng — xóa metadata không thay đổi cách ảnh được tạo ra.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Ngăn tệp mới bị gắn Content Credentials',
      paragraphs: [
        'Trong Photoshop và Lightroom, bạn có thể tắt Content Credentials trong phần cài đặt xuất tệp, dù một số tính năng tạo sinh vẫn tự gắn. Dịch vụ tạo ảnh AI thường gắn vào mọi ảnh đầu ra. Với tệp đã có, làm sạch một bản sao tại đây là cách nhanh nhất — hãy giữ bản gốc nếu sau này cần chứng minh nguồn gốc.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Hỏi đáp về xóa C2PA',
  faq: [
    {
      q: 'Xóa C2PA có làm giảm chất lượng ảnh không?',
      a: 'Không. Manifest là một khối riêng; dữ liệu ảnh nén được chép nguyên.',
    },
    {
      q: 'Tôi có xem được Content Credentials trước khi xóa không?',
      a: 'Có. Mục “AI và nguồn gốc” hiển thị ứng dụng tạo manifest, các thao tác được ghi lại và loại nguồn; mục “Toàn bộ metadata và chi tiết file” liệt kê mọi trường.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên không?',
      a: 'Không. Tệp được đọc và làm sạch trong trình duyệt, không rời khỏi thiết bị của bạn.',
    },
    {
      q: 'Instagram hay Facebook còn gắn nhãn ảnh không?',
      a: 'Nhãn dựa trên metadata C2PA hoặc IPTC sẽ mất căn cứ, nhưng nền tảng có thể dùng tín hiệu khác hoặc yêu cầu bạn tự khai báo nội dung AI.',
    },
    {
      q: 'Công cụ có xóa SynthID hay watermark vô hình khác không?',
      a: 'Không. Chúng được nhúng trong điểm ảnh, và công cụ này không bao giờ thay đổi điểm ảnh.',
    },
    {
      q: 'Có xóa C2PA cho nhiều ảnh cùng lúc được không?',
      a: 'Có. Thả tối đa 50 ảnh mỗi lượt và tải tất cả trong một tệp ZIP.',
    },
  ],
};

export default article;
