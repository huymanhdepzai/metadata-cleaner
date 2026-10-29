import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Xóa metadata ảnh hàng loạt — miễn phí, không tải lên',
  description:
    'Xóa metadata hàng loạt tối đa 50 ảnh cùng lúc ngay trên trình duyệt — JPG, PNG, WebP, GIF, HEIC, AVIF — rồi tải một tệp ZIP. Không mất chất lượng, miễn phí.',
  answer:
    'Để xóa metadata nhiều ảnh cùng lúc, hãy thả tối đa 50 tệp JPG, PNG, WebP, GIF, HEIC hoặc AVIF vào công cụ, xem báo cáo, bấm “Xóa metadata AI” một lần và tải tất cả trong một tệp ZIP. Việc xử lý chạy song song ngay trên trình duyệt, nên không có gì bị tải lên và không ảnh nào bị nén lại.',
  sections: [
    {
      heading: 'Xóa metadata hàng loạt trong bốn bước',
      paragraphs: [],
      steps: [
        'Thả tối đa 50 ảnh vào trang — JPG, PNG, WebP, GIF, HEIC hoặc AVIF, mỗi ảnh tối đa 25 MB và 40 megapixel. Có thể trộn nhiều định dạng.',
        'Mỗi ảnh được phân tích tự động; mở báo cáo bất kỳ để xem những gì sẽ bị xóa.',
        'Bấm “Xóa metadata AI” một lần để làm sạch mọi ảnh đã phân tích.',
        'Tải từng ảnh hoặc bấm “Tải tất cả (.zip)” để nhận tệp metadata-cleared.zip.',
      ],
    },
    {
      heading: 'Khi nào nên làm sạch hàng loạt',
      paragraphs: [],
      bullets: [
        'Nhiếp ảnh gia giao bộ ảnh cho khách mà không kèm số sê-ri máy, vị trí hay lịch sử chỉnh sửa.',
        'Người bán đăng nhiều ảnh sản phẩm lên chợ online vốn giữ nguyên tệp gốc.',
        'Người làm ảnh AI đăng một loạt ảnh mà không kèm prompt hay workflow ComfyUI.',
        'Nhóm chuẩn bị ảnh cho website, bộ tài liệu báo chí hoặc bộ dữ liệu công khai.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Vì sao vẫn nhanh dù không có máy chủ',
      paragraphs: [
        'Công việc được chia cho nhiều Web Worker — các luồng chạy nền trong trình duyệt — với số lượng theo số nhân CPU của thiết bị. Mỗi worker đọc một tệp, phân tích cấu trúc và trả về dữ liệu đã làm sạch, nên trang vẫn mượt kể cả với ảnh HEIC dung lượng lớn.',
        'Tệp ZIP được tạo bằng phương thức “store” vì ảnh vốn đã được nén: đóng gói nhanh và không làm giảm chất lượng.',
      ],
    },
    {
      heading: 'Kiểm tra từng tệp trước khi chia sẻ',
      paragraphs: [
        'Sau khi làm sạch, mọi tệp đầu ra được phân tích lại. Bảng kết quả màu xanh xác nhận các trường vị trí, cá nhân, thời gian và AI đã biến mất hay chưa. Các tệp trùng tên được tự đổi tên trong ZIP để không ghi đè lên nhau.',
      ],
    },
    {
      heading: 'Những gì bị xóa và những gì được giữ',
      paragraphs: ['Mọi tệp trong lượt xử lý đều theo cùng quy tắc:'],
      table: {
        head: ['Bị xóa', 'Được giữ'],
        rows: [
          ['Vị trí GPS, ngày giờ chụp', 'Dữ liệu ảnh, nguyên từng byte'],
          ['Máy ảnh, ống kính, số sê-ri, phần mềm', 'Kích thước và hướng xoay'],
          ['Tác giả, bản quyền, mô tả', 'Hồ sơ màu ICC'],
          ['XMP, IPTC, Content Credentials (C2PA)', 'Độ trong suốt và hoạt ảnh'],
          ['Prompt AI, workflow, ảnh thu nhỏ nhúng', 'Tên tệp gốc'],
        ],
      },
    },
    {
      heading: 'Mẹo cho số lượng ảnh lớn',
      paragraphs: [],
      bullets: [
        'Với hàng trăm ảnh, hãy chia thành từng lượt 50 ảnh và xóa danh sách giữa các lượt để giải phóng bộ nhớ.',
        'Trên điện thoại ít RAM, hãy đóng bớt các tab nặng trước.',
        'Vì xử lý tại máy, bạn có thể ngắt mạng sau khi trang đã tải xong.',
      ],
    },
    {
      heading: 'Riêng tư ngay từ thiết kế',
      paragraphs: [
        'Không ảnh nào bị tải lên, lưu trữ hay ghi log. Lưu lượng mạng duy nhất là tải chính trang web. Nhờ vậy, làm sạch hàng loạt phù hợp với ảnh của khách hàng, ảnh chưa công bố và mọi tệp bạn không thể gửi cho máy chủ bên thứ ba.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về xử lý hàng loạt',
  faq: [
    {
      q: 'Vì sao giới hạn 50 ảnh?',
      a: 'Mọi thứ chạy trên thiết bị của bạn. Giới hạn giúp bộ nhớ an toàn trên điện thoại và máy tính cũ; bạn có thể chạy bao nhiêu lượt tùy ý.',
    },
    {
      q: 'Có trộn JPG, PNG và HEIC trong một lượt được không?',
      a: 'Được. Mỗi tệp được nhận diện theo nội dung và làm sạch bằng cách tương ứng, và mọi tệp giữ nguyên định dạng gốc.',
    },
    {
      q: 'Tên tệp có bị đổi không?',
      a: 'Không. Tệp đã làm sạch giữ tên gốc. Chỉ các tệp trùng tên hoàn toàn trong ZIP mới được thêm số thứ tự.',
    },
    {
      q: 'Có dùng ngoại tuyến được không?',
      a: 'Được. Sau khi trang tải xong, việc làm sạch hoạt động không cần internet vì không có gì được gửi tới máy chủ.',
    },
    {
      q: 'Tệp ZIP có nén thêm ảnh không?',
      a: 'Không. Ảnh được lưu nguyên trạng, nên ZIP tạo nhanh và không ảnh nào bị giảm chất lượng.',
    },
    {
      q: 'Làm sạch hàng loạt có miễn phí không?',
      a: 'Có. Không cần tài khoản, không watermark và không giới hạn số lượt.',
    },
  ],
};

export default article;
