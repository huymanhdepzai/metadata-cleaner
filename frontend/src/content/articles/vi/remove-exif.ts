import type { Article } from '../types';

const article: Article = {
  title: 'Xóa EXIF khỏi ảnh online — GPS, máy ảnh, thời gian chụp',
  summary: [
    'Ảnh từ điện thoại và máy ảnh chứa dữ liệu EXIF: vị trí GPS, thời gian chụp, mẫu thiết bị và đôi khi cả số sê-ri. Bất kỳ ai có tệp gốc đều đọc được.',
    'Thả ảnh vào công cụ trên trang này để xem mọi trường EXIF và xóa chỉ với một cú nhấp — không nén lại ảnh, không làm ảnh bị xoay và không tải gì lên.',
  ],
  description:
    'Công cụ xóa EXIF online miễn phí: xóa GPS, thông tin máy ảnh, ngày giờ và số sê-ri khỏi ảnh JPG, HEIC, PNG, WebP ngay trên trình duyệt. Không giảm chất lượng.',
  answer:
    'Để xóa EXIF khỏi ảnh, thả ảnh vào công cụ trên trang này và bấm “Xóa metadata AI”. Tọa độ GPS, thời gian chụp, hãng, mẫu máy và số sê-ri bị xóa cùng XMP và IPTC, còn hướng xoay và hồ sơ màu được giữ để ảnh trông như cũ. Ảnh không bị nén lại và không rời khỏi trình duyệt.',
  sections: [
    {
      heading: 'Cách xóa EXIF trong ba bước',
      paragraphs: [],
      steps: [
        'Thả ảnh vào công cụ phía trên, hoặc chạm “Chọn ảnh từ máy”. Hỗ trợ JPG, HEIC, PNG, WebP, GIF và AVIF.',
        'Xem mục “Chi tiết riêng tư” để biết ảnh có lộ vị trí, thông tin cá nhân hay thời gian không, và mở “Toàn bộ metadata và chi tiết file” để xem mọi trường.',
        'Bấm “Xóa metadata AI” rồi tải từng ảnh hoặc tải tất cả dưới dạng ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Những trường EXIF nào bị xóa',
      paragraphs: [],
      table: {
        head: ['Nhóm', 'Ví dụ', 'Kết quả'],
        rows: [
          ['Vị trí', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Xóa'],
          ['Thiết bị', 'Make, Model, LensModel, BodySerialNumber', 'Xóa'],
          ['Thời gian', 'DateTimeOriginal, OffsetTime', 'Xóa'],
          ['Phần mềm và tác giả', 'Software, Artist, Copyright', 'Xóa'],
          ['Ảnh thu nhỏ', 'Ảnh xem trước nhúng trong tệp', 'Xóa'],
          ['Hiển thị', 'Orientation, hồ sơ màu ICC', 'Giữ'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Vì sao nên dùng công cụ xóa EXIF không giảm chất lượng',
      paragraphs: [
        'Nhiều công cụ xóa EXIF vẽ lại ảnh rồi lưu thành tệp mới. Cách đó xóa được EXIF nhưng cũng nén lại ảnh JPEG, có thể làm mất hồ sơ màu và đôi khi làm ảnh bị xoay vì mất thẻ hướng xoay.',
        'Công cụ này cắt các khối metadata ra khỏi tệp và chép nguyên dữ liệu ảnh. Hướng xoay được ghi lại trong một khối EXIF tối thiểu, nên ảnh luôn đúng chiều và giống hệt từng điểm ảnh.',
      ],
    },
    {
      heading: 'Khi nào nên xóa EXIF',
      paragraphs: [],
      bullets: [
        'Trước khi bán đồ online hoặc đăng ảnh chụp tại nhà.',
        'Trước khi gửi tệp gốc qua email, liên kết đám mây hoặc tùy chọn “gửi dạng tệp” trong ứng dụng nhắn tin — những cách này giữ nguyên EXIF.',
        'Trước khi giao ảnh cho khách hàng mà không muốn lộ số sê-ri máy ảnh hay lịch sử chỉnh sửa.',
        'Trước khi đăng ảnh trẻ em, sự kiện hoặc địa điểm mà bạn không muốn bị xác định vị trí.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'EXIF trong ảnh iPhone và Android',
      paragraphs: [
        'Ảnh iPhone thường là tệp HEIC với EXIF lưu thành một item riêng; ảnh Android thường là JPEG với EXIF trong đoạn APP1. Cả hai đều được làm sạch tại chỗ và giữ nguyên định dạng gốc — HEIC không bị chuyển sang JPG.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Hỏi đáp về xóa EXIF',
  faq: [
    {
      q: 'Xóa EXIF có làm giảm chất lượng ảnh không?',
      a: 'Không. Chỉ các khối metadata bị xóa; dữ liệu ảnh được chép nguyên từng byte.',
    },
    {
      q: 'Ảnh có bị xoay sau khi xóa EXIF không?',
      a: 'Không. Thẻ hướng xoay được ghi lại trong một khối EXIF tối thiểu nên ảnh hiển thị đúng chiều.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên máy chủ không?',
      a: 'Không. Mọi xử lý chạy trong trình duyệt và tệp không rời khỏi thiết bị của bạn.',
    },
    {
      q: 'Tôi có thể chỉ xóa vị trí GPS và giữ phần còn lại không?',
      a: 'Hiện chưa. Công cụ xóa toàn bộ metadata nhận dạng cùng lúc và chỉ giữ phần cần để ảnh hiển thị đúng.',
    },
    {
      q: 'Có giới hạn nào không?',
      a: 'Mỗi ảnh tối đa 25 MB và 40 megapixel, tối đa 50 ảnh mỗi lượt.',
    },
    {
      q: 'EXIF đã xóa có khôi phục được không?',
      a: 'Không thể khôi phục từ tệp đã làm sạch. Các bản bạn đã chia sẻ trước khi làm sạch vẫn còn EXIF.',
    },
  ],
};

export default article;
