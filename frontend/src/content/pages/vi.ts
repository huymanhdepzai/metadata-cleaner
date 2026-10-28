import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Giới thiệu All Metadata Cleaner',
    description:
      'All Metadata Cleaner là công cụ miễn phí, ưu tiên quyền riêng tư, giúp kiểm tra và xóa EXIF, GPS, XMP, IPTC, C2PA và prompt AI khỏi ảnh ngay trên trình duyệt.',
    intro:
      'All Metadata Cleaner là công cụ web miễn phí để xem và xóa thông tin ẩn trong tệp ảnh — EXIF và vị trí GPS, XMP, IPTC, Content Credentials (C2PA) cùng prompt hoặc workflow mà công cụ tạo ảnh AI nhúng vào.',
    sections: [
      {
        heading: 'Vì sao chúng tôi làm công cụ này',
        paragraphs: [
          'Ảnh chụp và ảnh AI thường chứa nhiều hơn bạn nghĩ: nơi chụp, thiết bị chụp, ai đã chỉnh sửa, hay chính xác prompt tạo ra ảnh AI. Phần lớn công cụ xóa metadata hoặc tải tệp của bạn lên máy chủ, hoặc nén lại ảnh. Chúng tôi muốn một công cụ không làm cả hai điều đó.',
        ],
      },
      {
        heading: 'Cách hoạt động',
        paragraphs: ['Mọi thứ diễn ra trên chính thiết bị của bạn:'],
        bullets: [
          'Trình duyệt đọc từng tệp và phân tích cấu trúc — các đoạn JPEG, chunk PNG, box WebP và HEIC/AVIF.',
          'Các khối metadata bị cắt bỏ ở mức byte; dữ liệu ảnh được chép nguyên nên chất lượng giữ nguyên.',
          'Mỗi tệp đã làm sạch được phân tích lại để bạn kiểm tra những gì đã bị xóa.',
        ],
      },
      {
        heading: 'Nguyên tắc của chúng tôi',
        paragraphs: ['Một vài nguyên tắc định hướng mọi quyết định:'],
        bullets: [
          'Quyền riêng tư trước hết: ảnh không bao giờ được tải lên, lưu trữ hay để chúng tôi nhìn thấy.',
          'Trung thực: chúng tôi nói rõ những gì công cụ không làm được, chẳng hạn xóa watermark vô hình trong điểm ảnh.',
          'Miễn phí, không cần tài khoản, không watermark và không quảng cáo.',
        ],
      },
      {
        heading: 'Công cụ dành cho ai',
        paragraphs: [
          'Bất kỳ ai chia sẻ ảnh: người muốn giấu vị trí trước khi đăng ảnh, nhiếp ảnh gia giao ảnh cho khách, người sáng tạo muốn giữ kín prompt, và những ai có ảnh thật bị gắn nhầm nhãn AI. Chúng tôi đề nghị mọi người tuân thủ quy định của nền tảng về việc khai báo nội dung do AI tạo.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Chính sách quyền riêng tư',
    description:
      'Cách All Metadata Cleaner xử lý dữ liệu: ảnh được xử lý trong trình duyệt và không bao giờ bị tải lên. Không tài khoản, không theo dõi, không quảng cáo.',
    intro:
      'Chính sách này giải thích All Metadata Cleaner xử lý những dữ liệu nào khi bạn dùng trang web. Tóm lại: ảnh của bạn không rời khỏi thiết bị và chúng tôi không theo dõi bạn.',
    sections: [
      {
        heading: 'Ảnh của bạn ở lại trên thiết bị',
        paragraphs: [
          'Ảnh bạn thêm vào được chính trình duyệt của bạn đọc và xử lý bằng Web Worker. Ảnh không được tải lên bất kỳ máy chủ nào, và chúng tôi không bao giờ nhận, lưu trữ hay nhìn thấy chúng. Bạn thậm chí có thể ngắt mạng sau khi trang đã tải và công cụ vẫn hoạt động.',
        ],
      },
      {
        heading: 'Những gì chúng tôi không thu thập',
        paragraphs: ['Trang web được thiết kế để thu thập ít nhất có thể:'],
        bullets: [
          'Không cần tài khoản, đăng ký hay địa chỉ email.',
          'Không tải script phân tích, quảng cáo hay theo dõi mạng xã hội, và không gọi font hoặc script của bên thứ ba.',
          'Không gửi bất kỳ thông tin nào về nội dung hay metadata của ảnh đi đâu cả.',
        ],
      },
      {
        heading: 'Dữ liệu lưu trong trình duyệt',
        paragraphs: ['Trang web chỉ ghi nhớ hai lựa chọn, ngay trên thiết bị của bạn:'],
        bullets: [
          'Ngôn ngữ bạn chọn, lưu trong local storage và trong một cookie của chính trang để trang chủ mở đúng ngôn ngữ đó.',
          'Giao diện bạn chọn (sáng, tối hoặc theo hệ thống), lưu trong local storage.',
        ],
      },
      {
        heading: 'Lưu trữ web và nhật ký máy chủ',
        paragraphs: [
          'Trang web được phân phối từ máy chủ riêng của chúng tôi. Như mọi máy chủ web, máy chủ xử lý thông tin yêu cầu tiêu chuẩn như địa chỉ IP, loại trình duyệt và trang được yêu cầu để phân phối trang và chống lạm dụng. Ngôn ngữ của trình duyệt có thể được dùng để chọn ngôn ngữ mặc định. Chúng tôi không dùng các thông tin này để nhận dạng hay lập hồ sơ về bạn.',
        ],
      },
      {
        heading: 'Thay đổi chính sách',
        paragraphs: [
          'Nếu cách trang web xử lý dữ liệu thay đổi, chúng tôi sẽ cập nhật trang này và ngày ở đầu trang. Tiếp tục sử dụng trang web sau khi cập nhật nghĩa là bạn chấp nhận chính sách đã sửa đổi.',
        ],
      },
    ],
  },
  terms: {
    title: 'Điều khoản sử dụng',
    description:
      'Điều khoản sử dụng All Metadata Cleaner: công cụ miễn phí cung cấp nguyên trạng, trách nhiệm của bạn khi dùng ảnh đã làm sạch và giới hạn trách nhiệm của chúng tôi.',
    intro:
      'Khi sử dụng All Metadata Cleaner, bạn đồng ý với các điều khoản này. Hãy đọc kèm phần miễn trừ trách nhiệm trên trang chủ và Chính sách quyền riêng tư.',
    sections: [
      {
        heading: 'Dịch vụ',
        paragraphs: [
          'All Metadata Cleaner là công cụ web miễn phí giúp kiểm tra và xóa metadata khỏi tệp ảnh ngay trên thiết bị của bạn. Chúng tôi có thể thay đổi, cải tiến hoặc ngừng bất kỳ phần nào của công cụ vào bất kỳ lúc nào mà không cần báo trước.',
        ],
      },
      {
        heading: 'Sử dụng hợp lệ',
        paragraphs: ['Bạn chịu trách nhiệm về các tệp mình xử lý và cách sử dụng kết quả. Bạn đồng ý không dùng công cụ để:'],
        bullets: [
          'vi phạm pháp luật hoặc xâm phạm quyền của người khác, bao gồm bản quyền và quyền riêng tư;',
          'che giấu nội dung do AI tạo khi pháp luật hoặc quy định của nền tảng yêu cầu bạn khai báo;',
          'xóa thông tin bản quyền, giấy phép hoặc ghi công khỏi ảnh mà bạn không sở hữu hoặc không có quyền chỉnh sửa.',
        ],
      },
      {
        heading: 'Không bảo đảm',
        paragraphs: [
          'Công cụ được cung cấp “nguyên trạng” và “tùy khả năng sẵn có”, không kèm bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Chúng tôi không bảo đảm công cụ xóa được mọi loại metadata, kết quả không có lỗi, hay nền tảng sẽ xử lý ảnh đã làm sạch theo một cách cụ thể. Hãy luôn giữ một bản sao tệp gốc.',
        ],
      },
      {
        heading: 'Giới hạn trách nhiệm',
        paragraphs: [
          'Trong phạm vi tối đa pháp luật cho phép, chúng tôi không chịu trách nhiệm về bất kỳ tổn thất hay thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hệ quả nào — kể cả mất dữ liệu, tệp hoặc lợi nhuận — phát sinh từ việc sử dụng hoặc không thể sử dụng công cụ. Một số khu vực pháp lý không cho phép một số giới hạn nhất định; khi đó các giới hạn chỉ áp dụng trong phạm vi được phép.',
        ],
      },
      {
        heading: 'Thay đổi điều khoản',
        paragraphs: [
          'Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Ngày ở đầu trang cho biết phiên bản mới nhất. Tiếp tục sử dụng công cụ sau khi thay đổi nghĩa là bạn chấp nhận điều khoản đã cập nhật.',
        ],
      },
    ],
  },
  contact: {
    title: 'Liên hệ',
    description:
      'Liên hệ đội ngũ All Metadata Cleaner: báo lỗi, đề xuất tính năng hoặc hỏi về quyền riêng tư. Chúng tôi đọc mọi tin nhắn và phản hồi sớm nhất có thể.',
    intro:
      'Chúng tôi luôn sẵn lòng nhận câu hỏi, báo lỗi và ý tưởng. Hãy gửi email cho chúng tôi, chúng tôi sẽ phản hồi sớm nhất có thể.',
    sections: [
      {
        heading: 'Bạn có thể liên hệ về',
        paragraphs: ['Chúng tôi đặc biệt mong nhận được:'],
        bullets: [
          'Báo lỗi — tệp không làm sạch được, hoặc metadata không được phát hiện hay không bị xóa.',
          'Đề xuất tính năng — định dạng, tùy chọn hoặc ngôn ngữ mới bạn muốn có.',
          'Câu hỏi về quyền riêng tư hoặc pháp lý liên quan đến trang web.',
        ],
      },
      {
        heading: 'Trước khi gửi',
        paragraphs: [
          'Vui lòng không gửi ảnh riêng tư. Khi báo lỗi, hãy cho chúng tôi biết định dạng tệp, máy ảnh, điện thoại hoặc ứng dụng đã tạo ra tệp, trình duyệt bạn dùng và kết quả bạn mong đợi. Nếu cần tệp để tái hiện lỗi, hãy gửi một tệp không chứa thông tin nhạy cảm.',
        ],
      },
    ],
  },
};

export default pages;
