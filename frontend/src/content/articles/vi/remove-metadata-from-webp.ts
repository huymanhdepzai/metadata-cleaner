import type { Article } from '../types';

const article: Article = {
  title: 'Xóa metadata ảnh WebP — EXIF, XMP và C2PA',
  summary: [
    'Ảnh WebP có thể chứa EXIF, XMP và C2PA giống như JPEG — kể cả các trường nguồn gốc AI do công cụ tạo ảnh và phần mềm chỉnh sửa thêm vào.',
    'Thả các tệp WebP vào công cụ trên trang này để kiểm tra và xóa metadata, trong khi WebP nén mất dữ liệu, không mất dữ liệu và WebP động đều được giữ nguyên.',
  ],
  description:
    'Xóa EXIF, XMP và C2PA khỏi ảnh WebP ngay trên trình duyệt. Giữ dữ liệu ảnh, độ trong suốt, hồ sơ màu và hoạt ảnh. Miễn phí, không tải lên, xử lý hàng loạt.',
  answer:
    'Để xóa metadata ảnh WebP, hãy thả tệp vào công cụ trên trang này và bấm “Xóa metadata AI”. Các chunk EXIF, XMP và C2PA bị xóa khỏi vùng chứa RIFF, còn dữ liệu ảnh VP8/VP8L, độ trong suốt, hồ sơ màu ICC và các khung hoạt ảnh được chép nguyên — nên WebP nén mất dữ liệu không giảm thêm chất lượng và WebP động giữ đủ mọi khung hình.',
  sections: [
    {
      heading: 'Metadata của WebP nằm ở đâu',
      paragraphs: [
        'Tệp WebP dùng cấu trúc RIFF gồm nhiều chunk. Ảnh nằm trong chunk VP8 (nén mất dữ liệu), VP8L (không mất dữ liệu) hoặc ALPH (độ trong suốt); metadata nằm trong các chunk riêng:',
      ],
      table: {
        head: ['Chunk', 'Vai trò', 'Sau khi làm sạch'],
        rows: [
          ['VP8, VP8L, ALPH', 'Dữ liệu ảnh và độ trong suốt', 'Giữ nguyên từng byte'],
          ['ICCP', 'Hồ sơ màu', 'Được giữ'],
          ['ANIM, ANMF', 'Thiết lập và khung hoạt ảnh', 'Được giữ'],
          ['EXIF', 'Thiết bị, thời gian, GPS, hướng xoay', 'Bị xóa (ghi lại hướng xoay)'],
          ['XMP', 'Lịch sử chỉnh sửa, tác giả, trường AI', 'Bị xóa'],
          ['C2PA', 'Content Credentials', 'Bị xóa'],
        ],
      },
    },
    {
      heading: 'Cách xóa metadata ảnh WebP trong ba bước',
      paragraphs: [],
      steps: [
        'Thả các tệp WebP vào công cụ phía trên.',
        'Xem báo cáo để thấy các trường EXIF, XMP và nguồn gốc trong từng tệp.',
        'Bấm “Xóa metadata AI” và tải ảnh đã làm sạch, từng tệp hoặc gộp trong ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Những gì được giữ lại',
      paragraphs: [
        'Các chunk ảnh, độ trong suốt, hồ sơ màu ICC và các khung hoạt ảnh được chép nguyên. Nếu tệp có khai báo hướng xoay, nó được ghi lại trong một chunk EXIF tối thiểu để ảnh vẫn hiển thị đúng.',
        'Vì không có bước giải mã và mã hóa lại, ảnh WebP nén mất dữ liệu không bị giảm thêm chất lượng, và WebP động giữ đủ mọi khung hình cùng thời gian hiển thị.',
      ],
    },
    {
      heading: 'Khi nào metadata của WebP đáng lo',
      paragraphs: [
        'Nhiều website và công cụ AI xuất WebP theo mặc định, và metadata đi theo tệp khi bạn tải về rồi chia sẻ lại. Làm sạch giúp xóa vị trí, thiết bị và thông tin nguồn gốc trước khi bạn đăng hoặc gửi ảnh.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Hỏi đáp về làm sạch ảnh WebP',
  faq: [
    {
      q: 'Có hỗ trợ WebP động không?',
      a: 'Có. Các chunk hoạt ảnh được giữ, nên khung hình và thời gian không đổi.',
    },
    {
      q: 'Ảnh có bị nén lại không?',
      a: 'Không. Chỉ các chunk metadata bị xóa; dữ liệu ảnh được chép nguyên từng byte.',
    },
    {
      q: 'Độ trong suốt có được giữ không?',
      a: 'Có. Dữ liệu alpha được giữ nguyên như cũ.',
    },
    {
      q: 'Có chuyển WebP sang JPG ở đây được không?',
      a: 'Không. Công cụ giữ mọi tệp ở định dạng gốc; nó chỉ xóa metadata.',
    },
    {
      q: 'Có giới hạn dung lượng không?',
      a: 'Mỗi tệp tối đa 25 MB và 40 megapixel, và bạn có thể làm sạch tối đa 50 tệp mỗi phiên.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên không?',
      a: 'Không. Tệp WebP được xử lý ngay trên trình duyệt.',
    },
  ],
};

export default article;
