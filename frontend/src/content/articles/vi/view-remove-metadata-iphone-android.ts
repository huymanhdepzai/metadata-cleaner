import type { Article } from '../types';

const article: Article = {
  title: 'Cách xem và xóa metadata ảnh trên iPhone và Android',
  summary: [
    'Điện thoại ghi lại nơi và lúc chụp từng bức ảnh, cùng tên thiết bị. Cả iOS và Android đều cho phép xem thông tin này và xóa vị trí trước khi chia sẻ.',
    'Dưới đây là các tùy chọn có sẵn, giới hạn của chúng, và cách xóa toàn bộ metadata nhận dạng — kể cả ảnh HEIC của iPhone — ngay trên trình duyệt mà không cần cài ứng dụng.',
  ],
  description:
    'Xem metadata ảnh trên iPhone và Android, xóa vị trí trước khi chia sẻ và xóa toàn bộ EXIF — kể cả ảnh HEIC — ngay trên trình duyệt mà không cần cài ứng dụng.',
  answer:
    'Trên iPhone, mở ảnh rồi vuốt lên để xem ngày chụp, máy ảnh và vị trí; trên Android, mở ảnh trong Google Photos rồi vuốt lên. Cả hai đều cho phép xóa hoặc ẩn vị trí, nhưng tên thiết bị, thời gian chụp và các trường EXIF khác thường vẫn còn. Để xóa toàn bộ metadata, hãy mở công cụ làm sạch trên trình duyệt điện thoại, chọn ảnh và tải các bản đã làm sạch — không cần cài ứng dụng.',
  sections: [
    {
      heading: 'Cách xem metadata ảnh trên iPhone',
      paragraphs: [],
      steps: [
        'Mở ảnh trong ứng dụng Ảnh.',
        'Vuốt lên, hoặc chạm nút thông tin (i).',
        'Bạn sẽ thấy ngày giờ, máy ảnh và ống kính, thông số phơi sáng và — nếu đã bật vị trí — một bản đồ.',
        'Chạm Điều chỉnh cạnh ngày chụp để đổi ngày, giờ hoặc vị trí của ảnh đó.',
      ],
    },
    {
      heading: 'Cách bỏ vị trí khi chia sẻ từ iPhone',
      paragraphs: ['Hai tùy chọn có sẵn giúp bạn:'],
      bullets: [
        'Trong bảng chia sẻ, chạm Tùy chọn ở trên cùng và tắt Vị trí trước khi gửi.',
        'Để không ghi vị trí cho ảnh mới, vào Cài đặt › Quyền riêng tư & Bảo mật › Dịch vụ định vị › Camera và chọn Không bao giờ.',
      ],
    },
    {
      heading: 'Cách xem và xóa metadata trên Android',
      paragraphs: [
        'Trong Google Photos, mở ảnh và vuốt lên để xem chi tiết như ngày, thiết bị và vị trí; tùy phiên bản, bạn có thể sửa hoặc xóa vị trí ngay tại đó. Thư viện của Samsung và các ứng dụng thư viện khác hiển thị thông tin tương tự. Để không gắn vị trí cho ảnh mới, tắt tùy chọn vị trí trong cài đặt ứng dụng camera — tên và vị trí tùy chọn khác nhau theo hãng điện thoại.',
      ],
    },
    {
      heading: 'Những gì tùy chọn có sẵn không xóa được',
      paragraphs: [
        'Thiết lập điện thoại tập trung vào vị trí. Tên thiết bị, thời gian chụp, thông tin ống kính, phần mềm chỉnh sửa và ảnh xem trước nhúng thường vẫn còn, và thiết lập chỉ áp dụng cho ảnh mới hoặc một lần chia sẻ. Tệp chép sang máy tính hoặc gửi qua ứng dụng khác vẫn giữ mọi thứ.',
      ],
      table: {
        head: ['Cách làm', 'Vị trí', 'Thiết bị và thời gian', 'Nhiều ảnh cùng lúc'],
        rows: [
          ['iPhone: Tùy chọn › tắt Vị trí khi chia sẻ', 'Bỏ cho lần chia sẻ đó', 'Vẫn còn', 'Từng lần chia sẻ'],
          ['Tắt định vị cho camera', 'Không ghi vào ảnh mới', 'Vẫn còn', 'Chỉ ảnh mới'],
          ['Google Photos: xóa vị trí', 'Xóa trong ứng dụng', 'Vẫn còn', 'Từng ảnh'],
          ['Công cụ làm sạch trên trình duyệt', 'Xóa', 'Xóa', 'Tối đa 50 ảnh mỗi lượt'],
        ],
      },
    },
    {
      heading: 'Xóa toàn bộ metadata ngay trên điện thoại — không cần ứng dụng',
      paragraphs: [],
      steps: [
        'Mở trang này bằng Safari, Chrome hoặc bất kỳ trình duyệt di động nào.',
        'Chạm “Chọn ảnh từ máy” và chọn các ảnh muốn chia sẻ.',
        'Xem báo cáo, rồi chạm “Xóa metadata AI”.',
        'Lưu các ảnh đã làm sạch, hoặc tải tất cả dưới dạng ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
    {
      heading: 'Ảnh HEIC của iPhone vẫn là HEIC',
      paragraphs: [
        'iPhone mặc định lưu ảnh dạng HEIC. Nhiều công cụ chuyển sang JPEG để làm sạch, tức là nén lại ảnh. Công cụ này xóa metadata ngay bên trong tệp HEIC, giữ hướng xoay và màu sắc, và không đụng tới dữ liệu ảnh.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Hỏi đáp về metadata ảnh trên điện thoại',
  faq: [
    {
      q: 'Tắt định vị có xóa vị trí khỏi ảnh đã chụp không?',
      a: 'Không. Chỉ ảnh hưởng ảnh mới. Ảnh cũ vẫn giữ vị trí cho tới khi bạn xóa.',
    },
    {
      q: 'Có hỗ trợ ảnh HEIC của iPhone không?',
      a: 'Có. Tệp HEIC được làm sạch trực tiếp, không chuyển sang JPEG và không mã hóa lại hình ảnh.',
    },
    {
      q: 'Tùy chọn chia sẻ của iPhone có xóa hết metadata không?',
      a: 'Chủ yếu là vị trí. Những thông tin khác như tên thiết bị và thời gian chụp vẫn có thể còn trong tệp được chia sẻ.',
    },
    {
      q: 'Có cần cài ứng dụng để xóa metadata không?',
      a: 'Không. Công cụ chạy trên trình duyệt di động, và ảnh được xử lý ngay trên điện thoại mà không tải lên.',
    },
    {
      q: 'Làm sao xem vị trí GPS của một bức ảnh?',
      a: 'Trên iPhone, vuốt lên trên ảnh để thấy bản đồ. Trên mọi thiết bị, thả ảnh vào công cụ kiểm tra để xem tọa độ đã giải mã trong “Chi tiết riêng tư”.',
    },
    {
      q: 'Ảnh đã làm sạch có còn đúng thứ tự trong thư viện không?',
      a: 'Ngày chụp đã bị xóa, nên thư viện có thể sắp xếp bản sạch theo thời điểm lưu. Hãy giữ ảnh gốc cho thư viện của riêng bạn.',
    },
  ],
};

export default article;
