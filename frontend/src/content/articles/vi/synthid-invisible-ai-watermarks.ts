import type { Article } from '../types';

const article: Article = {
  title: 'SynthID và thủy ấn AI vô hình: làm sạch metadata làm được gì và không làm được gì',
  summary: [
    'Một số ảnh AI mang hai loại dấu hiệu: metadata nằm cạnh ảnh, và thủy ấn vô hình được dệt vào chính điểm ảnh. SynthID của Google là ví dụ nổi tiếng nhất của loại thứ hai.',
    'Bài này giải thích thủy ấn vô hình khác C2PA và EXIF thế nào, được phát hiện ra sao, và vì sao không công cụ metadata trung thực nào có thể xóa chúng.',
  ],
  seoTitle: 'SynthID và thủy ấn AI vô hình là gì?',
  description:
    'SynthID và các thủy ấn AI vô hình là gì, khác metadata C2PA thế nào, được phát hiện ra sao và vì sao công cụ làm sạch metadata không thể xóa chúng.',
  answer:
    'SynthID là thủy ấn vô hình do Google DeepMind nhúng vào điểm ảnh của nội dung tạo bởi các model AI của Google. Khác với metadata C2PA hay EXIF, nó không phải một khối riêng trong tệp, vẫn tồn tại sau các chỉnh sửa phổ biến như cắt và nén, và chỉ đọc được bằng công cụ phát hiện của Google. Công cụ làm sạch metadata — kể cả công cụ này — không thay đổi điểm ảnh nên không thể xóa nó.',
  sections: [
    {
      heading: 'Hai lớp nguồn gốc AI',
      paragraphs: [
        'Metadata — EXIF, XMP, IPTC và C2PA — nằm trong các khối riêng của tệp. Nó dễ đọc và dễ xóa mà không đụng tới hình ảnh. Thủy ấn vô hình thì khác: đó là một mẫu tín hiệu tinh vi trải khắp các giá trị điểm ảnh, mắt thường không thấy nhưng công cụ phát hiện nhận ra được.',
      ],
      table: {
        head: ['', 'Metadata (C2PA, IPTC, EXIF)', 'Thủy ấn vô hình (vd. SynthID)'],
        rows: [
          ['Nằm ở đâu', 'Các khối riêng trong tệp', 'Trong giá trị điểm ảnh'],
          ['Ai đọc được', 'Mọi trình xem metadata', 'Chỉ công cụ của nhà cung cấp'],
          ['Còn sau khi chụp màn hình, lưu lại', 'Thường không', 'Được thiết kế để còn'],
          ['Bị công cụ làm sạch metadata xóa', 'Có', 'Không'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'SynthID là gì',
      paragraphs: [
        'SynthID là công nghệ thủy ấn do Google DeepMind phát triển cho nội dung tạo bởi các model AI của Google. Nó nhúng một tín hiệu không thể nhận thấy ngay trong quá trình tạo và được thiết kế để vẫn phát hiện được sau các thay đổi phổ biến như cắt, đổi kích thước, nén và chỉnh màu. Google dùng cùng họ kỹ thuật này cho ảnh, âm thanh, video và văn bản.',
      ],
    },
    {
      heading: 'Cách kiểm tra ảnh có SynthID không',
      paragraphs: [
        'Khác với metadata, thủy ấn không đọc được bằng trình xem thông thường — bạn cần công cụ phát hiện của nhà cung cấp. Google đã giới thiệu các cách kiểm tra nội dung có SynthID, như SynthID Detector và tính năng xác minh trong chính sản phẩm của họ. Các nhà cung cấp khác dùng phương pháp thủy ấn và phát hiện riêng.',
        'Báo cáo trên trang này chỉ hiển thị metadata. Vì vậy kết luận “Không thấy dấu hiệu AI” không bao giờ loại trừ được thủy ấn trong điểm ảnh.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Ảnh AI nào có thủy ấn vô hình?',
      paragraphs: [],
      bullets: [
        'Các model tạo ảnh của Google, như model dùng trong Gemini và Imagen, nhúng SynthID.',
        'Meta cho biết ảnh từ Meta AI có thủy ấn vô hình bên cạnh metadata.',
        'Các dịch vụ trực tuyến khác có thể dùng thủy ấn riêng; chính sách khác nhau và thay đổi theo thời gian.',
        'Công cụ chạy trên máy như Stable Diffusion thường mặc định không thêm thủy ấn.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Vì sao công cụ metadata không thể xóa thủy ấn',
      paragraphs: [
        'Công cụ làm sạch metadata không mất dữ liệu chép nguyên dữ liệu ảnh từng byte — chính điều đó đảm bảo chất lượng không đổi. Vì vậy thủy ấn trong điểm ảnh vẫn nằm nguyên chỗ cũ. Các công cụ hứa “xóa thủy ấn AI” hoặc không hiệu quả như quảng cáo, hoặc làm biến đổi ảnh rất nhiều, và việc cố vô hiệu hóa thủy ấn của nhà cung cấp có thể vi phạm điều khoản sử dụng của họ.',
      ],
    },
    {
      heading: 'Ý nghĩa trong thực tế',
      paragraphs: [
        'Làm sạch metadata là công cụ đúng cho quyền riêng tư và để xóa prompt, vị trí và dữ liệu nguồn gốc bạn không muốn chia sẻ. Nó không làm ảnh AI trở nên “không bị phát hiện”. Khi đăng nội dung AI trông như thật, hãy tuân theo quy định công khai của nền tảng bạn đăng.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
  ],
  faqHeading: 'Hỏi đáp về SynthID và thủy ấn AI',
  faq: [
    {
      q: 'Công cụ này có xóa SynthID không?',
      a: 'Không. Công cụ chỉ xóa metadata và không bao giờ sửa điểm ảnh, nên thủy ấn vô hình vẫn còn trong ảnh.',
    },
    {
      q: 'Làm sao biết ảnh có SynthID?',
      a: 'Chỉ bằng công cụ xác minh của Google. Báo cáo metadata trên trang này không thấy được thủy ấn bên trong điểm ảnh.',
    },
    {
      q: 'Mọi ảnh AI đều có thủy ấn vô hình?',
      a: 'Không. Một số nhà cung cấp gắn thủy ấn, nhiều nơi không, và ảnh từ công cụ chạy trên máy thường không có thủy ấn nào.',
    },
    {
      q: 'Chụp màn hình có làm mất SynthID không?',
      a: 'SynthID được thiết kế để không mất. Nó được xây dựng để tồn tại qua các biến đổi phổ biến như chụp màn hình, cắt và nén.',
    },
    {
      q: 'SynthID có giống Content Credentials không?',
      a: 'Không. Content Credentials là metadata có chữ ký nằm cạnh ảnh; SynthID là tín hiệu bên trong điểm ảnh. Một số hệ thống kết hợp cả hai.',
    },
    {
      q: 'Mạng xã hội có phát hiện được SynthID không?',
      a: 'Chỉ khi họ có công cụ phát hiện tương thích. Phần lớn nhãn trên nền tảng hiện nay dựa vào metadata và việc người đăng tự khai báo.',
    },
  ],
};

export default article;
