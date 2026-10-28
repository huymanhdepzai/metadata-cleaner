import type { Article } from '../types';

const article: Article = {
  title: 'Cách kiểm soát Content Credentials trong Photoshop và Lightroom (và làm sạch ảnh xuất)',
  summary: [
    'Ứng dụng Adobe có thể gắn Content Credentials vào ảnh xuất — bản ghi có chữ ký về các chỉnh sửa, kể cả mọi tính năng AI tạo sinh bạn đã dùng. Điều này hữu ích để chứng minh tác phẩm, nhưng cũng có thể khiến ảnh chỉ được chỉnh sửa bị gắn nhãn AI.',
    'Dưới đây là nguồn gốc của Content Credentials trong Photoshop và Lightroom, cách kiểm tra ảnh xuất có chứa chúng không, và cách xóa khỏi bản sao khi cần.',
  ],
  seoTitle: 'Tắt Content Credentials trong Photoshop và Lightroom',
  description:
    'Content Credentials trong Photoshop và Lightroom đến từ đâu, cách tắt, cách kiểm tra ảnh xuất có C2PA không và cách xóa khỏi bản sao mà không giảm chất lượng.',
  answer:
    'Photoshop và Lightroom gắn Content Credentials (C2PA) vào ảnh xuất khi bạn bật tính năng này, và Adobe cũng gắn chúng vào nội dung tạo bằng tính năng AI như Generative Fill. Tắt thiết lập có thể không ngăn được Content Credentials cho chỉnh sửa tạo sinh, nên hãy kiểm tra từng ảnh xuất: nếu có khối C2PA không mong muốn, hãy xóa khỏi bản sao bằng công cụ làm sạch không mất chất lượng trước khi đăng.',
  sections: [
    {
      heading: 'Content Credentials trong ứng dụng Adobe đến từ đâu',
      paragraphs: ['Ảnh xuất có thể mang Content Credentials vì hai lý do khác nhau:'],
      bullets: [
        'Bạn tự bật Content Credentials, nên ứng dụng gắn danh tính và lịch sử chỉnh sửa của bạn khi xuất.',
        'Bạn đã dùng tính năng AI tạo sinh như Generative Fill hay Generative Expand — Adobe gắn Content Credentials vào nội dung tạo bằng tính năng tạo sinh, mô tả là đã chỉnh bằng AI.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Vì sao cần quan tâm trước khi đăng',
      paragraphs: [
        'Các nền tảng như Instagram, Facebook, Threads và TikTok đọc Content Credentials lúc tải lên. Một bức ảnh chỉ có một chỉnh sửa tạo sinh cũng có thể bị gắn nhãn nội dung AI, dù phần còn lại là ảnh chụp thật.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Cách tắt Content Credentials trong Photoshop và Lightroom',
      paragraphs: ['Adobe đang đưa Content Credentials vào các ứng dụng của mình, và vị trí thiết lập thay đổi theo phiên bản. Ở các phiên bản gần đây:'],
      bullets: [
        'Photoshop: tìm bảng Content Credentials (trong menu Window) và các tùy chọn Content Credentials trong hộp thoại xuất.',
        'Lightroom Classic và Lightroom: tìm mục Content Credentials trong thiết lập xuất ảnh.',
        'Xem trang trợ giúp của Adobe cho đúng phiên bản bạn dùng — tên và vị trí có thể thay đổi.',
      ],
    },
    {
      heading: 'Tắt thiết lập có thể chưa đủ',
      paragraphs: [
        'Adobe gắn Content Credentials cho nội dung AI tạo sinh bất kể lựa chọn cá nhân của bạn, nên ảnh xuất có dùng Generative Fill vẫn có thể mang bản kê khai. Hãy luôn kiểm tra tệp đã xuất thay vì chỉ dựa vào thiết lập.',
      ],
    },
    {
      heading: 'Cách kiểm tra ảnh xuất có Content Credentials không',
      paragraphs: [],
      steps: [
        'Thả tệp JPEG, PNG hoặc tệp khác đã xuất vào công cụ ở đầu trang.',
        'Trong “AI và nguồn gốc”, tìm khối C2PA, claim generator (ví dụ Adobe Photoshop), các thao tác c2pa.* và loại nguồn “ghép có AI”.',
        'Nếu có các mục này, nền tảng đọc Content Credentials có thể gắn nhãn cho ảnh.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Cách xóa Content Credentials khỏi bản sao',
      paragraphs: [],
      steps: [
        'Giữ bản xuất gốc có Content Credentials làm bản lưu trữ.',
        'Thả một bản sao vào công cụ và bấm “Xóa metadata AI”. Bản kê khai bị cắt ở mức byte; điểm ảnh, kích thước, hướng xoay và hồ sơ màu được giữ.',
        'Xác nhận trong bảng kết quả rằng không còn khối C2PA, rồi tải tệp sạch để gửi cổng khách hàng, chợ ảnh hoặc mạng xã hội.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Giữ bản gốc làm bằng chứng',
      paragraphs: [
        'Content Credentials có thể là bằng chứng giá trị về quyền tác giả và cách ảnh được chỉnh sửa. Hãy lưu bản xuất gốc kèm Content Credentials, và chỉ chia sẻ bản đã làm sạch khi metadata có thể gây hiểu lầm hoặc tiết lộ nhiều hơn bạn muốn.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về Content Credentials trong ứng dụng Adobe',
  faq: [
    {
      q: 'Tắt Content Credentials rồi, chỉnh sửa tạo sinh có còn bị ghi lại không?',
      a: 'Có thể vẫn còn. Adobe gắn Content Credentials cho nội dung AI tạo sinh, nên hãy luôn kiểm tra tệp đã xuất thay vì chỉ dựa vào thiết lập.',
    },
    {
      q: 'Vì sao Instagram gắn nhãn AI cho ảnh tôi chỉnh bằng Photoshop?',
      a: 'Tính năng tạo sinh ghi khai báo “ghép có AI” vào Content Credentials hoặc XMP của ảnh xuất, và Meta đọc khai báo đó khi bạn tải lên.',
    },
    {
      q: 'Xóa Content Credentials có làm mất các chỉnh sửa không?',
      a: 'Không. Chỉ khối metadata bị xóa; điểm ảnh đã chỉnh sửa được chép nguyên.',
    },
    {
      q: 'Có thêm lại Content Credentials sau này được không?',
      a: 'Không thêm được vào bản đã làm sạch, nhưng bạn có thể xuất lại từ tệp gốc với Content Credentials đang bật.',
    },
    {
      q: '“Save for Web” có xóa Content Credentials không?',
      a: 'Nó có thể bỏ phần lớn metadata, nhưng tùy phiên bản và thiết lập, và ảnh bị nén lại. Hãy kiểm tra kết quả, hoặc làm sạch bản xuất gốc mà không mất chất lượng.',
    },
    {
      q: 'Có làm sạch cả một buổi chụp cùng lúc được không?',
      a: 'Được. Thả tối đa 50 ảnh xuất, làm sạch bằng một cú nhấp và tải về dạng ZIP.',
    },
  ],
};

export default article;
