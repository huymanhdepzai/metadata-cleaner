import type { Article } from '../types';

const article: Article = {
  title: 'Xóa metadata ảnh JPG online — không giảm chất lượng',
  summary: [
    'Mỗi ảnh JPG từ máy ảnh, điện thoại hay công cụ tạo ảnh AI đều có thể chứa EXIF (thiết bị, thời gian, GPS), XMP, IPTC và Content Credentials (C2PA). Thả ảnh JPG vào công cụ trên trang này để xem chính xác bên trong có gì và xóa chỉ với một cú nhấp.',
    'Công cụ cắt các đoạn metadata ở mức byte, nên dữ liệu ảnh nén được giữ nguyên — không lưu lại, không giảm chất lượng và không tải gì lên máy chủ.',
  ],
  description:
    'Xóa EXIF, GPS, XMP, IPTC và C2PA khỏi ảnh JPG/JPEG ngay trên trình duyệt. Không nén lại: dữ liệu ảnh giữ nguyên từng byte. Miễn phí, không tải lên, xử lý hàng loạt.',
  answer:
    'Để xóa metadata ảnh JPG online mà không giảm chất lượng, hãy thả tệp vào công cụ trên trang này và bấm “Xóa metadata AI”. EXIF (kể cả GPS), XMP, IPTC, C2PA và chú thích bị cắt bỏ ở mức byte, còn dữ liệu ảnh nén được chép nguyên, nên ảnh trông y hệt. Mọi thứ chạy trên trình duyệt — tệp không bao giờ bị tải lên.',
  sections: [
    {
      heading: 'Ảnh JPG có thể chứa những gì',
      paragraphs: ['JPEG là một chuỗi các đoạn (marker segment). Ngoài hình ảnh, tệp thường có:'],
      table: {
        head: ['Đoạn', 'Có thể chứa'],
        rows: [
          ['APP1 EXIF', 'Tên máy ảnh hoặc điện thoại, thời gian chụp, thông số phơi sáng, tọa độ GPS, ảnh thu nhỏ nhúng'],
          ['APP1 XMP', 'Lịch sử chỉnh sửa, tác giả, từ khóa, trường AI như IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Chú thích, nguồn, thông tin bản quyền'],
          ['APP11 JUMBF', 'Content Credentials (C2PA) — bản ghi có chữ ký về cách ảnh được tạo'],
          ['COM, APP2 MPF, dữ liệu sau EOI', 'Chú thích, ảnh xem trước, phần video của ảnh chuyển động'],
        ],
      },
      related: ['remove-exif', 'what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Cách xóa metadata ảnh JPG trong ba bước',
      paragraphs: [],
      steps: [
        'Thả một hoặc nhiều ảnh JPG vào công cụ phía trên, hoặc chạm “Chọn ảnh từ máy”.',
        'Xem báo cáo: chi tiết riêng tư, tín hiệu AI và nguồn gốc, cùng toàn bộ metadata tìm thấy trong từng tệp.',
        'Bấm “Xóa metadata AI”, rồi tải từng tệp hoặc tải tất cả trong một tệp ZIP. Tệp đã làm sạch được phân tích lại để bạn xác nhận không còn thông tin nhận dạng.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Vì sao “không nén lại” quan trọng với JPG',
      paragraphs: [
        'JPEG là định dạng nén mất dữ liệu: mỗi lần ảnh được giải mã rồi lưu lại, nó bị nén thêm một lần và mất bớt chi tiết. Nhiều công cụ “xóa metadata” vẽ lại ảnh rồi xuất JPEG mới — metadata mất nhưng chất lượng cũng giảm và màu có thể thay đổi.',
        'Công cụ này không bao giờ giải mã ảnh. Nó bỏ các đoạn metadata và chép nguyên dữ liệu ảnh nén, nên ảnh trông y hệt bản gốc và tệp thường nhẹ hơn.',
      ],
      table: {
        head: ['Cách làm', 'Xóa metadata', 'Chất lượng', 'Giữ hồ sơ màu'],
        rows: [
          ['Làm sạch ở mức byte (công cụ này)', 'Có', 'Không đổi', 'Có'],
          ['Lưu lại hoặc vẽ lại qua canvas', 'Có', 'Bị nén lại', 'Thường không'],
          ['Chụp màn hình', 'Có', 'Giảm, đổi kích thước', 'Không'],
        ],
      },
    },
    {
      heading: 'Những gì được giữ lại trong ảnh JPG',
      paragraphs: [
        'Xóa hết một cách máy móc có thể làm ảnh hiển thị sai. Công cụ giữ các phần ảnh hưởng tới hình ảnh: header JFIF, hồ sơ màu ICC, đoạn chuyển đổi màu của Adobe và hướng xoay — được ghi lại trong một khối EXIF tối thiểu để ảnh luôn đúng chiều. Kích thước và dữ liệu ảnh không bao giờ bị thay đổi.',
      ],
    },
    {
      heading: 'Khi nào nên làm sạch ảnh JPG',
      paragraphs: [],
      bullets: [
        'Xóa GPS trước khi đăng ảnh lên chợ online, diễn đàn hoặc gửi qua ứng dụng nhắn tin.',
        'Xóa số sê-ri máy, tên tác giả và lịch sử chỉnh sửa trước khi giao ảnh cho khách hàng.',
        'Xóa C2PA hoặc trường AI khiến ảnh thật bị gắn nhãn “Thông tin AI”.',
        'Xóa prompt và thông tin công cụ tạo ảnh khỏi ảnh JPEG do AI tạo.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Hỏi đáp về làm sạch ảnh JPG',
  faq: [
    {
      q: 'JPG và JPEG có khác nhau không?',
      a: 'Không. .jpg, .jpeg và .jfif là cùng một định dạng, và cả ba đều được hỗ trợ.',
    },
    {
      q: 'Xóa metadata có làm giảm chất lượng ảnh JPG không?',
      a: 'Không. Dữ liệu ảnh nén được chép nguyên từng byte; chỉ các đoạn metadata bị xóa.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên đâu không?',
      a: 'Không. Tệp được đọc và làm sạch ngay trong trình duyệt, không rời khỏi thiết bị của bạn.',
    },
    {
      q: 'Ảnh có bị xoay sau khi làm sạch không?',
      a: 'Không. Hướng xoay được ghi lại trong một khối EXIF tối thiểu, nên ảnh hiển thị như cũ.',
    },
    {
      q: 'Ảnh chuyển động (motion photo) thì sao?',
      a: 'Một số điện thoại gắn một đoạn video ngắn phía sau ảnh JPEG. Phần dữ liệu đó bị xóa cùng metadata, nên kết quả là một ảnh tĩnh bình thường.',
    },
    {
      q: 'Có giới hạn dung lượng không?',
      a: 'Mỗi ảnh JPG tối đa 25 MB và 40 megapixel, và bạn có thể làm sạch tối đa 50 tệp mỗi lượt.',
    },
  ],
};

export default article;
