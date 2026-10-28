import type { Article } from '../types';

const article: Article = {
  title: 'Cách kiểm tra ảnh có phải do AI tạo không (metadata, C2PA và hơn thế)',
  summary: [
    'Bạn băn khoăn một bức ảnh có phải do AI tạo? Cách kiểm tra nhanh và đáng tin nhất là xem metadata của chính tệp: Content Credentials (C2PA), trường IPTC DigitalSourceType và văn bản của công cụ tạo ảnh thường ghi rõ công cụ nào đã tạo ra ảnh.',
    'Bài này chỉ ra những tín hiệu cần tìm, cách đọc chúng bằng công cụ kiểm tra miễn phí trên trình duyệt, nên làm gì khi không có metadata, và vì sao kết quả “sạch” không bao giờ chứng minh ảnh là thật.',
  ],
  seoTitle: 'Cách kiểm tra ảnh có phải do AI tạo không (miễn phí)',
  description:
    'Kiểm tra ảnh có phải AI tạo không: đọc Content Credentials (C2PA), IPTC DigitalSourceType và prompt miễn phí trên trình duyệt — và hiểu giới hạn của từng tín hiệu.',
  answer:
    'Để kiểm tra ảnh có phải do AI tạo, hãy xem metadata của tệp gốc: Content Credentials (C2PA) ghi tên một dịch vụ AI, IPTC DigitalSourceType là trainedAlgorithmicMedia, hoặc prompt nhúng trong tệp là bằng chứng mạnh. Nếu không có metadata, hãy tìm kiếm ngược hình ảnh, dùng công cụ kiểm tra thủy ấn của nhà cung cấp và xem bối cảnh — nhưng không phép thử nào chứng minh được ảnh là thật.',
  sections: [
    {
      heading: 'Bắt đầu từ tệp gốc',
      paragraphs: [
        'Metadata chỉ còn trong tệp vừa rời khỏi công cụ tạo ảnh hoặc máy ảnh. Ảnh chụp màn hình, bản lưu lại và ảnh tải từ mạng xã hội thường đã bị mã hóa lại nên mất gần hết hoặc toàn bộ metadata. Nếu được, hãy xin tệp gốc — tệp xuất từ ứng dụng hoặc gửi “dưới dạng tệp” thay vì ảnh nén.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Các tín hiệu metadata cho thấy ảnh do AI tạo',
      paragraphs: ['Từ mạnh tới yếu, đây là những tín hiệu nên kiểm tra:'],
      table: {
        head: ['Tín hiệu', 'Vị trí', 'Ý nghĩa'],
        rows: [
          ['Bản kê khai C2PA từ dịch vụ AI', 'APP11 (JPEG), caBX (PNG), uuid (HEIC)', 'Khẳng định có chữ ký về công cụ đã tạo hoặc chỉnh ảnh'],
          ['IPTC DigitalSourceType', 'Metadata XMP', 'Nguồn gốc được khai báo, ví dụ trainedAlgorithmicMedia'],
          ['Prompt và thông số', 'Chunk văn bản PNG, EXIF UserComment', 'Tạo bằng công cụ chạy trên máy như Stable Diffusion, ComfyUI'],
          ['Tên công cụ', 'XMP CreatorTool, EXIF Software', 'Ứng dụng đã tạo hoặc lưu tệp lần cuối'],
        ],
      },
    },
    {
      heading: 'Tín hiệu 1: Content Credentials (C2PA)',
      paragraphs: [
        'Content Credentials là bản ghi có chữ ký số do các công cụ hỗ trợ chuẩn C2PA gắn vào. Claim generator ghi tên ứng dụng hoặc dịch vụ đã tạo ảnh, danh sách c2pa.actions ghi các bước như “created” hay “edited”, và giá trị digitalSourceType có thể khai báo thẳng ảnh do AI tạo.',
        'Vì bản ghi có chữ ký, trình xác minh còn biết được ảnh có bị sửa sau khi ký hay không. Bản kê khai từ một dịch vụ AI là bằng chứng metadata mạnh nhất bạn có thể có.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Tín hiệu 2: IPTC DigitalSourceType',
      paragraphs: ['Nhiều công cụ tạo ảnh và trình chỉnh sửa ghi một trường IPTC chuẩn mô tả cách nội dung được tạo ra. Các giá trị hay gặp nhất:'],
      bullets: [
        'trainedAlgorithmicMedia — tạo bởi model AI tạo sinh.',
        'compositeWithTrainedAlgorithmicMedia — ảnh thật có phần được AI tạo hoặc thay thế (ví dụ Generative Fill).',
        'algorithmicMedia — tạo bằng thuật toán không dùng dữ liệu huấn luyện, như đồ họa thủ tục.',
        'digitalCapture — chụp bằng máy ảnh, không khai báo nội dung tạo sinh.',
      ],
    },
    {
      heading: 'Tín hiệu 3: Prompt, thông số và tên công cụ',
      paragraphs: [
        'Công cụ chạy trên máy như Stable Diffusion và ComfyUI lưu prompt, seed, model và workflow dạng văn bản trong tệp PNG. Các công cụ khác để lại tên trong XMP CreatorTool hoặc EXIF Software. Bất kỳ dấu hiệu nào trong số này cũng cho thấy rõ có AI tham gia — và cho biết chính xác ảnh được tạo ra như thế nào.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cách kiểm tra một bức ảnh trong vài giây',
      paragraphs: [],
      steps: [
        'Thả tệp vào công cụ ở đầu trang. Việc kiểm tra diễn ra hoàn toàn trên trình duyệt; ảnh không bao giờ bị tải lên.',
        'Đọc kết luận trong mục “AI và nguồn gốc”: “Phát hiện dấu hiệu AI”, “Cần kiểm tra kỹ” (có Content Credentials nhưng không khai báo AI rõ ràng) hoặc “Không thấy dấu hiệu AI”.',
        'Xem các tín hiệu được liệt kê cùng nguồn, rồi mở “Toàn bộ metadata và chi tiết file” để xem giá trị gốc.',
      ],
    },
    {
      heading: 'Nên làm gì khi ảnh không có metadata',
      paragraphs: ['Không có metadata không chứng minh điều gì — ứng dụng chỉnh sửa, ứng dụng nhắn tin và mạng xã hội xóa nó liên tục. Những cách kiểm tra khác:'],
      bullets: [
        'Tìm kiếm ngược hình ảnh để tìm bản sớm nhất và bối cảnh ban đầu.',
        'Dùng công cụ kiểm tra thủy ấn của chính nhà cung cấp — ví dụ công cụ của Google cho SynthID — nếu có.',
        'Quan sát bằng mắt: bàn tay, chữ viết, phản chiếu, họa tiết lặp và ánh sáng không nhất quán là điểm yếu thường gặp, dù model mới mắc ít lỗi hơn.',
        'Xem bối cảnh: ai đăng đầu tiên, nguồn tin đáng tin có xác nhận cảnh đó không, tài khoản có thường đăng nội dung AI không.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Công cụ phát hiện ảnh AI đáng tin đến đâu?',
      paragraphs: [
        'Công cụ phát hiện AI dựa trên điểm ảnh chỉ ước lượng xác suất; chúng không chứng minh được gì. Kết quả khác nhau giữa các công cụ, giảm độ chính xác sau khi ảnh bị nén hoặc đổi kích thước, và có thể gắn cờ nhầm ảnh thật là AI. Hãy coi đó là một trong nhiều yếu tố — và tin hơn vào nguồn gốc có chữ ký cùng bối cảnh ban đầu.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về kiểm tra ảnh AI',
  faq: [
    {
      q: '“Không thấy dấu hiệu AI” có nghĩa ảnh là thật không?',
      a: 'Không. Nó chỉ có nghĩa tệp không chứa metadata AI. Metadata rất dễ mất hoặc bị xóa, nên hãy coi kết quả sạch là “chưa rõ”, không phải bằng chứng ảnh thật.',
    },
    {
      q: 'Có kiểm tra được ảnh tải từ Instagram hay Facebook không?',
      a: 'Được, nhưng nền tảng thường xóa metadata khỏi bản đã đăng nên kết quả hay trống. Nhãn “Thông tin AI” của nền tảng, nếu có, là một tín hiệu riêng.',
    },
    {
      q: 'Metadata có làm giả được không?',
      a: 'Các trường EXIF và XMP thông thường sửa được bằng công cụ phổ biến. Bản kê khai C2PA có chữ ký nên phát hiện được nếu bị sửa — vì vậy đây là tín hiệu đáng tin hơn.',
    },
    {
      q: 'Làm sao biết ảnh được tạo bằng ChatGPT?',
      a: 'Ảnh từ tính năng tạo ảnh của OpenAI mang Content Credentials (C2PA) ghi tên OpenAI. Nếu tệp gốc vẫn còn, báo cáo sẽ hiển thị trong mục “AI và nguồn gốc”.',
    },
    {
      q: 'Có kiểm tra được ảnh Midjourney hay Stable Diffusion không?',
      a: 'Được. Ảnh tải từ Midjourney có thể chứa prompt và loại nguồn AI, còn PNG từ Stable Diffusion thường có chunk “parameters” — cả hai đều được đánh dấu trong báo cáo.',
    },
    {
      q: 'Công cụ kiểm tra có miễn phí và riêng tư không?',
      a: 'Có. Miễn phí, không cần tài khoản và phân tích tệp ngay trên trình duyệt mà không tải lên.',
    },
  ],
};

export default article;
