import type { Article } from '../types';

const article: Article = {
  title: 'Dữ liệu EXIF là gì? Hướng dẫn dễ hiểu về metadata ảnh',
  summary: [
    'EXIF (Exchangeable Image File Format) là thông tin ẩn mà máy ảnh hoặc điện thoại ghi vào mỗi bức ảnh: thông số chụp, ngày giờ, tên thiết bị và thường cả vị trí GPS.',
    'Bài này giải thích EXIF chứa gì, khác XMP, IPTC và C2PA thế nào, vì sao quan trọng với quyền riêng tư, và cách xem hoặc xóa an toàn.',
  ],
  description:
    'Dữ liệu EXIF là gì, gồm những trường nào (máy ảnh, thời gian, GPS), khác XMP, IPTC và C2PA ra sao, và cách xem hoặc xóa mà không giảm chất lượng ảnh.',
  answer:
    'Dữ liệu EXIF là metadata mà máy ảnh và điện thoại lưu trong ảnh: hãng và đời thiết bị, thông số phơi sáng, ngày giờ, hướng xoay, một ảnh thu nhỏ và thường cả vị trí GPS. Nó không ảnh hưởng tới hình ảnh. Bạn có thể xem trong phần thông tin ảnh trên điện thoại hoặc bằng trình xem metadata, và xóa bằng công cụ làm sạch có giữ hướng xoay và hồ sơ màu.',
  sections: [
    {
      heading: 'EXIF là viết tắt của gì',
      paragraphs: [
        'EXIF là viết tắt của Exchangeable Image File Format, một chuẩn tạo ra cho máy ảnh số để mỗi bức ảnh mang theo thông tin về cách nó được chụp. Gần như mọi máy ảnh và điện thoại đều tự động ghi EXIF, và hầu hết ứng dụng ảnh đều đọc được.',
      ],
    },
    {
      heading: 'Dữ liệu EXIF chứa những gì',
      paragraphs: ['Một bức ảnh thông thường có thể gồm:'],
      table: {
        head: ['Nhóm', 'Ví dụ các trường'],
        rows: [
          ['Thiết bị', 'Make, Model, LensModel, đôi khi số sê-ri'],
          ['Phơi sáng', 'ISO, FNumber (khẩu độ), ExposureTime (tốc độ màn trập), FocalLength, Flash'],
          ['Ngày giờ', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Vị trí', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Hình ảnh', 'Orientation (hướng xoay), độ phân giải, ảnh thu nhỏ nhúng'],
          ['Phần mềm', 'Software, ứng dụng lưu tệp lần cuối'],
        ],
      },
    },
    {
      heading: 'EXIF nằm ở đâu trong tệp',
      paragraphs: [
        'Trong tệp JPEG, EXIF nằm trong một đoạn APP1 gần đầu tệp và được tổ chức thành các thư mục (IFD): IFD0 cho thông tin ảnh và thiết bị cơ bản, thư mục Exif cho thông số chụp, thư mục GPS cho vị trí và IFD1 cho ảnh thu nhỏ. Tệp HEIC, WebP và PNG cũng có thể chứa EXIF trong cấu trúc riêng của chúng.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF, XMP, IPTC và C2PA khác nhau thế nào',
      paragraphs: ['Ảnh thường mang nhiều loại metadata cùng lúc:'],
      table: {
        head: ['Chuẩn', 'Do ai ghi', 'Nội dung thường gặp'],
        rows: [
          ['EXIF', 'Máy ảnh và điện thoại', 'Thông số chụp, thời gian, GPS'],
          ['XMP', 'Phần mềm chỉnh sửa', 'Mô tả, từ khóa, lịch sử chỉnh sửa, trường AI'],
          ['IPTC', 'Tòa soạn, kho ảnh, trình chỉnh sửa', 'Chú thích, tác giả, bản quyền, DigitalSourceType'],
          ['C2PA', 'Máy ảnh, trình chỉnh sửa, dịch vụ AI', 'Content Credentials có chữ ký: nguồn gốc và chỉnh sửa'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Vì sao dữ liệu EXIF quan trọng với quyền riêng tư',
      paragraphs: [
        'Với nhiếp ảnh gia, EXIF là công cụ học hỏi và bản ghi về tác phẩm. Với những người khác, nó chủ yếu là rủi ro riêng tư: một bức ảnh có thể tiết lộ địa chỉ nhà, thiết bị bạn dùng và thời điểm bạn ở đâu đó. EXIF cũng rất dễ sửa, nên không bao giờ được coi là bằng chứng duy nhất.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Cách xem dữ liệu EXIF',
      paragraphs: [],
      bullets: [
        'Windows: chuột phải vào tệp › Properties (Thuộc tính) › Details (Chi tiết).',
        'Mac: mở ảnh bằng Preview › Tools › Show Inspector.',
        'iPhone và Android: mở ảnh rồi vuốt lên.',
        'Mọi thiết bị: thả ảnh vào công cụ ở đầu trang để giải mã mọi trường EXIF, XMP và IPTC, nhóm theo nguồn.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'Cách xóa dữ liệu EXIF an toàn',
      paragraphs: [
        'Khi xóa EXIF, hãy giữ thẻ hướng xoay để ảnh không bị xoay sai, giữ hồ sơ màu để màu chính xác, và tránh công cụ nén lại ảnh. Công cụ này tự động làm cả ba: bấm “Xóa metadata AI”, xem bảng kết quả và tải tệp đã làm sạch.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về dữ liệu EXIF',
  faq: [
    {
      q: 'EXIF có ảnh hưởng chất lượng ảnh không?',
      a: 'Không. EXIF được lưu tách khỏi dữ liệu ảnh, nên xóa nó không làm thay đổi hình ảnh.',
    },
    {
      q: 'Dữ liệu EXIF có làm giả được không?',
      a: 'Có. Các trường EXIF sửa được bằng công cụ phổ biến, nên chúng là manh mối hữu ích nhưng không bao giờ là bằng chứng duy nhất.',
    },
    {
      q: 'Hướng xoay có thuộc EXIF không, và có được giữ lại không?',
      a: 'Có, hướng xoay là một thẻ EXIF. Công cụ ghi lại nó trong một khối EXIF tối thiểu để ảnh vẫn hiển thị đúng chiều.',
    },
    {
      q: 'Ảnh chụp màn hình có EXIF không?',
      a: 'Ảnh chụp màn hình thường có ít EXIF, nhưng vẫn có thể chứa ngày giờ, thiết bị và phần mềm đã tạo ra nó.',
    },
    {
      q: 'Tệp PNG có EXIF không?',
      a: 'Có thể có, trong chunk eXIf, nhưng metadata của PNG thường được lưu dạng chunk văn bản — nơi các công cụ AI ghi prompt.',
    },
    {
      q: 'Xóa dữ liệu EXIF có hợp pháp không?',
      a: 'Xóa metadata khỏi ảnh của chính bạn nhìn chung không có vấn đề. Đừng xóa thông tin bản quyền hoặc ghi công khỏi ảnh không thuộc về bạn nếu giấy phép yêu cầu giữ lại.',
    },
  ],
};

export default article;
