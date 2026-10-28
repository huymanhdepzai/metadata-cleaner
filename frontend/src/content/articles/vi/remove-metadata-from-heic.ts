import type { Article } from '../types';

const article: Article = {
  title: 'Xóa metadata ảnh HEIC iPhone — giữ nguyên định dạng HEIC',
  summary: [
    'iPhone lưu ảnh dưới dạng HEIC, và mỗi ảnh ghi lại tên thiết bị, thời gian chụp và — nếu bật định vị — chính xác nơi bạn đứng. Ảnh đã chỉnh sửa còn có thể chứa XMP và C2PA.',
    'Phần lớn công cụ online chuyển HEIC sang JPEG để làm sạch, tức là nén lại ảnh. Công cụ này xóa metadata ngay bên trong tệp HEIC, nên ảnh vẫn là HEIC với dữ liệu ảnh gốc.',
  ],
  description:
    'Xóa GPS, EXIF, XMP và C2PA khỏi ảnh HEIC/HEIF của iPhone ngay trên trình duyệt, không chuyển sang JPEG, không nén lại. Miễn phí, không tải lên, xử lý hàng loạt.',
  answer:
    'Để xóa metadata ảnh HEIC mà không chuyển định dạng, hãy thả tệp vào công cụ trên trang này và bấm “Xóa metadata AI”. Mục Exif và XMP được ghi đè bằng dữ liệu rỗng hợp lệ, hộp C2PA được biến thành vùng trống, nên GPS, thiết bị và thời gian biến mất trong khi tệp vẫn là HEIC với dữ liệu ảnh gốc. Không có gì bị tải lên.',
  sections: [
    {
      heading: 'Ảnh HEIC của iPhone chứa gì',
      paragraphs: ['HEIC dùng cùng kiểu cấu trúc hộp (box) như MP4. Bên cạnh ảnh nén, bạn thường thấy:'],
      bullets: [
        'Một mục Exif — tên thiết bị, ống kính, thời gian chụp, thông số phơi sáng và vị trí GPS.',
        'Một mục XMP — chi tiết chỉnh sửa và, với ảnh chỉnh bằng AI, các trường nguồn gốc.',
        'Các hộp uuid — dùng cho Content Credentials (C2PA) và một số dữ liệu XMP.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Vì sao HEIC cần xử lý đặc biệt',
      paragraphs: [
        'Bên trong tệp HEIC, một bảng chỉ mục (hộp iloc) trỏ tới dữ liệu ảnh bằng vị trí byte tuyệt đối. Nếu công cụ chỉ đơn giản cắt metadata ra, mọi vị trí phía sau bị lệch và ảnh không mở được nữa.',
        'Công cụ này xử lý tại chỗ: ghi đè các mục Exif và XMP bằng dữ liệu rỗng hợp lệ và biến hộp uuid C2PA thành vùng trống. Kích thước tệp giữ nguyên, mọi vị trí vẫn đúng và dữ liệu ảnh HEVC không bị đụng tới.',
      ],
    },
    {
      heading: 'Cách xóa metadata ảnh HEIC trong ba bước',
      paragraphs: [],
      steps: [
        'Mở trang này trên iPhone hoặc máy tính, thả hoặc chọn các ảnh HEIC.',
        'Xem báo cáo — mục riêng tư cho thấy vị trí, thời gian và thiết bị đã tìm thấy.',
        'Chạm “Xóa metadata AI” rồi lưu các ảnh đã làm sạch, hoặc tải tất cả trong một tệp ZIP.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'Làm sạch HEIC và chuyển sang JPG khác nhau thế nào',
      paragraphs: [],
      table: {
        head: ['', 'Làm sạch tại chỗ (công cụ này)', 'Chuyển sang JPG trước'],
        rows: [
          ['Định dạng sau khi làm sạch', 'HEIC', 'JPEG'],
          ['Chất lượng ảnh', 'Không đổi', 'Bị nén lại'],
          ['Dải màu rộng và hướng xoay', 'Được giữ', 'Có thể thay đổi'],
          ['Dung lượng tệp', 'Như cũ', 'Thường lớn hơn'],
        ],
      },
    },
    {
      heading: 'Những gì được giữ lại',
      paragraphs: [
        'Kích thước ảnh, hướng xoay và lật, thông tin màu và chính ảnh nén đều được giữ, nên ảnh trông và hoạt động y như bản gốc. Tệp HEIF và AVIF dùng cùng cấu trúc nên được làm sạch theo cách tương tự.',
      ],
    },
    {
      heading: 'Ngăn iPhone ghi vị trí vào ảnh',
      paragraphs: [
        'Để ảnh mới không có GPS, vào Cài đặt › Quyền riêng tư & Bảo mật › Dịch vụ định vị › Camera và chọn Không bao giờ. Với từng lần chia sẻ, chạm Tùy chọn trong bảng chia sẻ và tắt Vị trí. Ảnh đã chụp vẫn giữ metadata cho tới khi bạn làm sạch.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Hỏi đáp về làm sạch ảnh HEIC',
  faq: [
    {
      q: 'Có cần chuyển HEIC sang JPG trước không?',
      a: 'Không. Tệp HEIC được làm sạch trực tiếp và vẫn là HEIC, nên không có bước chuyển đổi và không giảm chất lượng.',
    },
    {
      q: 'Vì sao tệp sau khi làm sạch có cùng dung lượng?',
      a: 'Metadata được xóa trắng tại chỗ thay vì cắt ra, vì HEIC lưu vị trí tuyệt đối. Dữ liệu đã mất, chỉ còn lại khoảng trống nó từng chiếm.',
    },
    {
      q: 'Có dùng được với Live Photo không?',
      a: 'Ảnh tĩnh của Live Photo là tệp HEIC và có thể làm sạch. Đoạn video ngắn là một tệp riêng và không được xử lý ở đây.',
    },
    {
      q: 'Có làm trực tiếp trên iPhone được không?',
      a: 'Được. Mở trang bằng Safari, chọn ảnh từ thư viện, làm sạch rồi lưu kết quả — không cần cài ứng dụng.',
    },
    {
      q: 'Có hỗ trợ HEIF và AVIF không?',
      a: 'Có. Chúng dùng cùng cấu trúc và được làm sạch tại chỗ theo cùng cách.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên không?',
      a: 'Không. Ảnh được xử lý trên thiết bị của bạn và không bao giờ được gửi tới máy chủ.',
    },
  ],
};

export default article;
