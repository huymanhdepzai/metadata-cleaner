import type { Article } from '../types';

const article: Article = {
  title: 'Nền tảng nào gắn nhãn ảnh AI? Instagram, Facebook, TikTok, YouTube và hơn nữa',
  summary: [
    'Các nền tảng lớn ngày càng hiển thị nhãn như “Thông tin AI” trên ảnh và video. Phần lớn đọc cùng một nhóm tín hiệu chuẩn ngành nhúng trong tệp — Content Credentials (C2PA) và metadata IPTC — rồi kết hợp với những gì người đăng tự khai báo.',
    'Dưới đây là cách gắn nhãn thường hoạt động trên các nền tảng lớn, điều gì kích hoạt nhãn, và ý nghĩa với ảnh thật chỉ được chỉnh sửa nhẹ.',
  ],
  seoTitle: 'Nền tảng nào gắn nhãn ảnh AI? Instagram, TikTok, YouTube',
  description:
    'Instagram, Facebook, Threads, TikTok, YouTube, Pinterest và LinkedIn gắn nhãn ảnh AI thế nào, metadata nào kích hoạt nhãn và ảnh hưởng gì tới ảnh đã chỉnh sửa.',
  answer:
    'Instagram, Facebook và Threads (“Thông tin AI”), TikTok, YouTube và Pinterest đều gắn nhãn nội dung AI, còn LinkedIn hiển thị biểu tượng Content Credentials. Phần lớn nhãn tự động được kích hoạt bởi Content Credentials (C2PA) hoặc trường IPTC DigitalSourceType trong tệp tải lên, kết hợp với việc người đăng tự khai báo. Chỉ một chỉnh sửa tạo sinh nhỏ cũng đủ khiến ảnh thật bị gắn nhãn.',
  sections: [
    {
      heading: 'Tổng quan nhãn AI theo từng nền tảng',
      paragraphs: ['Chính sách thay đổi thường xuyên, nhưng bức tranh chung như sau:'],
      table: {
        head: ['Nền tảng', 'Người xem thấy gì', 'Tác nhân chính'],
        rows: [
          ['Instagram, Facebook, Threads', 'Nhãn “Thông tin AI” (trước là “Made with AI”)', 'C2PA, metadata IPTC, nút tự khai báo'],
          ['TikTok', 'Nhãn “AI-generated”', 'Tự khai báo, Content Credentials (C2PA)'],
          ['YouTube', 'Nhãn nội dung bị thay đổi hoặc tổng hợp', 'Người đăng khai báo khi tải lên'],
          ['Pinterest', 'Nhãn “AI-modified”', 'Metadata và bộ phân loại riêng'],
          ['LinkedIn', 'Biểu tượng Content Credentials “CR”', 'Dữ liệu C2PA trong ảnh'],
        ],
      },
    },
    {
      heading: 'Các tín hiệu nền tảng dựa vào',
      paragraphs: ['Nhãn tự động thường dựa trên một nhóm nhỏ tín hiệu dùng chung:'],
      bullets: [
        'Content Credentials (C2PA) khai báo nội dung do AI tạo hoặc chỉnh sửa.',
        'Trường IPTC DigitalSourceType, ví dụ trainedAlgorithmicMedia hoặc compositeWithTrainedAlgorithmicMedia.',
        'Thủy ấn vô hình từ một số nhà cung cấp AI, khi nền tảng có công cụ phát hiện.',
        'Người đăng tự khai báo — nút bật hoặc ô đánh dấu khi đăng nội dung AI trông như thật.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook và Threads (Meta)',
      paragraphs: [
        'Meta hiển thị nhãn “Thông tin AI” (tên cũ là “Made with AI” cho tới năm 2024) khi phát hiện tín hiệu AI theo chuẩn ngành hoặc khi người đăng khai báo nội dung AI. Sau khi nhiều nhiếp ảnh gia phàn nàn rằng ảnh chỉ chỉnh sửa nhẹ cũng bị gắn nhãn, Meta chuyển nhãn cho nội dung chỉnh bằng AI vào menu bài đăng, còn nội dung phần lớn do AI tạo được gắn nhãn rõ ràng hơn.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTok yêu cầu người đăng gắn nhãn nội dung AI trông như thật và cho biết sẽ tự động gắn nhãn nội dung có Content Credentials (C2PA) xác định là do AI tạo. TikTok cũng gắn Content Credentials vào một số nội dung tạo bằng hiệu ứng AI của chính họ.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTube yêu cầu người đăng khai báo nội dung bị thay đổi hoặc tổng hợp trông như thật khi tải lên và hiển thị nhãn cho người xem, nổi bật hơn với chủ đề nhạy cảm. YouTube cũng hỗ trợ C2PA cho trường hợp ngược lại: chỉ báo “quay bằng máy ảnh” cho nội dung có thông tin xác thực lúc ghi hình.',
      ],
    },
    {
      heading: 'Pinterest và LinkedIn',
      paragraphs: [
        'Pinterest gắn nhãn cho ảnh được xác định là do AI tạo hoặc chỉnh sửa bằng AI, dựa trên metadata và bộ phân loại riêng. LinkedIn hiển thị biểu tượng Content Credentials trên ảnh có dữ liệu C2PA, cho phép người xem xem nguồn và các chỉnh sửa.',
        'Chính sách của mọi nền tảng thay đổi thường xuyên, nên hãy xem trung tâm trợ giúp hiện tại của nền tảng trước khi dựa vào một cách xử lý cụ thể.',
      ],
    },
    {
      heading: 'Vì sao ảnh thật bị gắn nhãn',
      paragraphs: [
        'Chỉ một chỉnh sửa có AI hỗ trợ — xóa vật thể bằng công cụ tạo sinh, nới rộng nền hay dùng công cụ tẩy AI trên điện thoại — cũng có thể đánh dấu cả bức ảnh là nội dung ghép có AI trong metadata. Nền tảng đọc khai báo đó mà không đánh giá chỉnh sửa lớn hay nhỏ.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Cách kiểm tra ảnh trước khi đăng',
      paragraphs: [],
      steps: [
        'Thả đúng tệp bạn định tải lên vào công cụ kiểm tra ở đầu trang.',
        'Xem mục “AI và nguồn gốc” để biết trường nào sẽ kích hoạt nhãn.',
        'Nếu nhãn sẽ bị gắn sai, hãy xóa metadata khỏi một bản sao và đăng bản đã làm sạch.',
        'Nếu ảnh phần lớn do AI tạo, hãy công khai — nhãn tồn tại để người xem nắm được thông tin.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Hỏi đáp về nhãn AI trên mạng xã hội',
  faq: [
    {
      q: 'Vì sao ảnh bị gắn nhãn AI khi tôi chỉ xóa một vật nhỏ?',
      a: 'Nhiều trình chỉnh sửa ghi chỉnh sửa tạo sinh vào metadata C2PA hoặc IPTC dưới dạng “ghép có AI”. Nền tảng đọc khai báo đó mà không đánh giá chỉnh sửa lớn hay nhỏ.',
    },
    {
      q: 'Nền tảng có giữ metadata sau khi tôi đăng không?',
      a: 'Phần lớn nền tảng đọc metadata lúc tải lên rồi xóa khỏi bản đã đăng, nên tải lại chính bài của bạn hiếm khi còn các trường gốc.',
    },
    {
      q: 'Ảnh đã làm sạch có tránh được mọi nhãn không?',
      a: 'Không hẳn. Làm sạch xóa các tín hiệu lưu trong tệp, nhưng nền tảng còn có thể dùng phát hiện thủy ấn, bộ phân loại hoặc yêu cầu bạn khai báo nội dung AI.',
    },
    {
      q: 'X (Twitter) có gắn nhãn ảnh AI không?',
      a: 'X chủ yếu dựa vào chính sách về nội dung tổng hợp và bị chỉnh sửa cùng Community Notes, thay vì nhãn tự động dựa trên metadata. Hãy xem chính sách hiện hành để biết chi tiết.',
    },
    {
      q: 'Tôi có bắt buộc phải công khai ảnh AI không?',
      a: 'Hầu hết nền tảng yêu cầu công khai nội dung AI trông như thật, nhất là về người hoặc sự kiện có thật. Quy định khác nhau, nên hãy xem chính sách của từng nền tảng.',
    },
    {
      q: 'Có kiểm tra trước được ảnh của tôi có bị gắn nhãn không?',
      a: 'Được. Thả ảnh vào công cụ: nếu báo cáo có C2PA hoặc DigitalSourceType AI, các nền tảng đọc tín hiệu đó nhiều khả năng sẽ gắn nhãn.',
    },
  ],
};

export default article;
