import type { Article } from '../types';

const article: Article = {
  description:
    'Ảnh chụp bằng điện thoại có thể làm lộ vị trí, thiết bị và thời gian chụp. Xem trường EXIF nào nguy hiểm, bị lộ ở đâu và cách xóa vị trí GPS không giảm chất lượng.',
  answer:
    'Phần lớn ảnh chụp bằng điện thoại lưu tọa độ GPS trong metadata EXIF, thường chính xác tới vài mét, cùng thời gian chụp và tên thiết bị. Để xóa vị trí, hãy thả ảnh vào công cụ làm sạch metadata giúp bỏ GPS và các trường EXIF nhận dạng khác mà vẫn giữ hướng xoay và màu sắc, rồi chia sẻ bản đã làm sạch. Tắt định vị cho camera chỉ áp dụng cho ảnh mới.',
  sections: [
    {
      heading: 'Điện thoại ghi gì vào mỗi bức ảnh',
      paragraphs: ['Khi bật quyền vị trí, một bức ảnh điện thoại thông thường chứa:'],
      bullets: [
        'Vĩ độ, kinh độ và độ cao GPS — thường chính xác tới vài mét — cùng dấu thời gian GPS và đôi khi hướng máy ảnh.',
        'Ngày giờ chụp và lần chỉnh sửa cuối, thường kèm múi giờ.',
        'Hãng và đời thiết bị, thông tin ống kính, đôi khi cả số sê-ri hoặc tên chủ máy.',
        'Ảnh xem trước nhúng và ảnh phụ (ví dụ ảnh MPF hoặc bản đồ độ sâu) có thể chứa bản sao riêng của cùng dữ liệu EXIF.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Vì sao vị trí trong ảnh là rủi ro riêng tư',
      paragraphs: [
        'Một bức ảnh chụp ở nhà có thể tiết lộ địa chỉ của bạn. Một loạt ảnh có thể tiết lộ thói quen — giờ bạn đi làm, nơi con bạn học, chỗ bạn hay đến cuối tuần. Với người bán hàng online, người gửi ảnh cho người lạ hoặc đăng ảnh từ nơi nhạy cảm, metadata vị trí là kiểu rò rỉ vô tình phổ biến nhất.',
      ],
    },
    {
      heading: 'Vị trí bị lộ qua những đường nào',
      paragraphs: ['Nhiều mạng xã hội lớn xóa EXIF khi đăng ảnh, nhưng rất nhiều kênh vẫn gửi nguyên tệp gốc:'],
      bullets: [
        'Gửi ảnh “dưới dạng tệp” hoặc tài liệu trong ứng dụng nhắn tin.',
        'Tệp đính kèm email và liên kết chia sẻ trên đám mây.',
        'Diễn đàn, chợ online, trang rao vặt và trang portfolio giữ nguyên ảnh gốc.',
        'AirDrop, Bluetooth và chép qua cáp USB giữa các thiết bị.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Cách kiểm tra ảnh có vị trí GPS không',
      paragraphs: [],
      steps: [
        'Thả ảnh vào công cụ ở đầu trang — ảnh được phân tích tại máy và không bao giờ bị tải lên.',
        'Mục “Chi tiết riêng tư” cho biết ngay có trường vị trí, cá nhân hoặc thời gian không, kèm vị trí GPS đã giải mã dạng tọa độ thập phân.',
        '“Toàn bộ metadata và chi tiết file” liệt kê mọi trường, nhóm theo EXIF IFD0, Exif và GPS.',
      ],
    },
    {
      heading: 'Cách xóa vị trí GPS khỏi ảnh',
      paragraphs: [],
      steps: [
        'Thả một hoặc nhiều ảnh vào công cụ.',
        'Bấm “Xóa metadata AI”. Các trường GPS, ngày giờ, máy ảnh, tác giả và phần mềm bị xóa, cùng ảnh thu nhỏ nhúng và ảnh phụ MPF vốn giữ một bản sao ẩn.',
        'Xem bảng kết quả màu xanh để chắc chắn không còn dữ liệu vị trí, rồi tải ảnh hoặc tải ZIP cả loạt.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Xóa vị trí mà không làm xoay hay nén lại ảnh',
      paragraphs: [
        'Xóa EXIF một cách máy móc có thể khiến ảnh dọc bị xoay ngang, vì hướng xoay được lưu bằng một thẻ EXIF. Công cụ ghi lại hướng xoay trong một khối EXIF tối thiểu, giữ hồ sơ màu để màu chính xác và chép nguyên dữ liệu ảnh. Ảnh HEIC của iPhone được làm sạch tại chỗ, không chuyển sang JPEG.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Ngừng ghi vị trí vào ảnh mới',
      paragraphs: ['Bạn cũng có thể chặn việc gắn vị trí ngay từ đầu:'],
      bullets: [
        'iPhone: Cài đặt › Quyền riêng tư & Bảo mật › Dịch vụ định vị › Camera › Không bao giờ. Khi chia sẻ một ảnh, chạm Tùy chọn trong bảng chia sẻ và tắt Vị trí.',
        'Android: tắt tùy chọn vị trí trong cài đặt ứng dụng camera — tên và vị trí tùy chọn khác nhau theo hãng.',
      ],
      table: {
        head: ['Cách làm', 'Xóa GPS', 'Xóa thiết bị và thời gian', 'Áp dụng cho ảnh cũ'],
        rows: [
          ['Tắt định vị cho camera', 'Với ảnh mới', 'Không', 'Không'],
          ['Tắt “Vị trí” khi chia sẻ', 'Cho lần chia sẻ đó', 'Không', 'Có, từng lần'],
          ['Công cụ làm sạch metadata', 'Có', 'Có', 'Có'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Hỏi đáp về GPS và quyền riêng tư của ảnh',
  faq: [
    {
      q: 'Mạng xã hội có tự xóa dữ liệu GPS không?',
      a: 'Nhiều nền tảng lớn xóa EXIF khỏi ảnh đã đăng, nhưng tệp gửi dạng đính kèm, tài liệu hoặc liên kết đám mây thường vẫn giữ metadata gốc.',
    },
    {
      q: 'Người khác có tìm ra vị trí của tôi từ ảnh không?',
      a: 'Nếu ảnh vẫn còn GPS trong EXIF thì có — bất kỳ trình xem metadata nào cũng hiển thị tọa độ trên bản đồ. Khi không còn metadata, chỉ nội dung nhìn thấy trong ảnh mới có thể là manh mối.',
    },
    {
      q: 'Ảnh có bị xoay sau khi làm sạch không?',
      a: 'Không. Thẻ hướng xoay được giữ, nên ảnh hiển thị như trước.',
    },
    {
      q: 'Có dùng được với ảnh HEIC của iPhone không?',
      a: 'Có. Tệp HEIC và HEIF được làm sạch tại chỗ, không chuyển đổi và không mã hóa lại ảnh.',
    },
    {
      q: 'Tắt định vị có xóa vị trí khỏi ảnh đã chụp không?',
      a: 'Không. Chỉ ảnh hưởng ảnh mới. Ảnh cũ vẫn giữ vị trí cho tới khi bạn xóa.',
    },
    {
      q: 'Ảnh có bị tải lên khi xóa vị trí không?',
      a: 'Không. Mọi thứ diễn ra trên trình duyệt; ảnh không rời khỏi thiết bị của bạn.',
    },
  ],
};

export default article;
