import type { Article } from '../types';

const article: Article = {
  title: 'Ứng dụng và mạng xã hội nào xóa metadata ảnh? (Và khi nào GPS vẫn bị lộ)',
  summary: [
    'Nhiều người nghĩ mạng xã hội tự xóa vị trí khỏi ảnh. Thường là có — với bản được đăng. Nhưng tệp gốc vẫn có thể đi kèm đầy đủ EXIF qua ứng dụng nhắn tin, email, liên kết đám mây và trang chia sẻ tệp.',
    'Bài này giải thích những cách chia sẻ nào thường giữ hoặc xóa metadata, cách tự kiểm tra bất kỳ ứng dụng nào, và thói quen đáng tin duy nhất: tự làm sạch tệp trước khi nó rời khỏi thiết bị.',
  ],
  seoTitle: 'Ứng dụng nào xóa metadata ảnh? Khi nào GPS vẫn bị lộ',
  description:
    'Mạng xã hội và ứng dụng nhắn tin nào xóa metadata ảnh, cách chia sẻ nào vẫn giữ GPS và EXIF, và cách đảm bảo ảnh đã sạch trước khi gửi.',
  answer:
    'Các mạng xã hội lớn như Facebook, Instagram và X thường xóa EXIF — kể cả GPS — khỏi ảnh được đăng, và nhiều ứng dụng nhắn tin cũng làm vậy với ảnh nén. Ảnh gửi dưới dạng tệp hoặc tài liệu, tệp đính kèm email, liên kết đám mây, AirDrop và nhiều diễn đàn hay chợ online vẫn giữ metadata gốc. Cách chắc chắn là tự xóa metadata trước khi chia sẻ.',
  sections: [
    {
      heading: 'Bản được đăng và tệp gốc',
      paragraphs: [
        'Khi bạn đăng ảnh lên bảng tin, phần lớn nền tảng lớn mã hóa lại ảnh và xóa EXIF khỏi bản công khai. Điều đó giúp người xem không thấy vị trí GPS của bạn, nhưng chính nền tảng vẫn nhận tệp gốc lúc tải lên. Rủi ro lớn hơn nằm ở mọi nơi tệp gốc được chuyển tiếp nguyên vẹn.',
      ],
    },
    {
      heading: 'Có giữ metadata không? Các cách chia sẻ phổ biến',
      paragraphs: ['Cách xử lý thường gặp — hãy luôn tự kiểm tra với phiên bản ứng dụng của bạn:'],
      table: {
        head: ['Cách chia sẻ', 'GPS và EXIF', 'Ghi chú'],
        rows: [
          ['Bài đăng Facebook, Instagram, X', 'Thường bị xóa', 'Nền tảng vẫn nhận tệp gốc khi tải lên'],
          ['Ứng dụng nhắn tin, gửi dạng ảnh', 'Thường bị xóa', 'Ảnh cũng bị nén'],
          ['Ứng dụng nhắn tin, gửi dạng tệp hoặc tài liệu', 'Được giữ', 'WhatsApp và Telegram gửi nguyên tệp gốc'],
          ['Tệp đính kèm email', 'Được giữ', 'Tệp được gửi nguyên trạng'],
          ['Liên kết đám mây (Drive, Dropbox, iCloud)', 'Được giữ', 'Ai có liên kết đều nhận tệp gốc'],
          ['AirDrop, Bluetooth, USB', 'Được giữ', 'iPhone có thể bỏ vị trí qua Tùy chọn khi chia sẻ'],
          ['Diễn đàn, chợ online, trang portfolio', 'Thường được giữ', 'Tùy trang có mã hóa lại ảnh tải lên không'],
        ],
      },
    },
    {
      heading: 'Ứng dụng nhắn tin: gửi ảnh và gửi tệp',
      paragraphs: [
        'Phần lớn ứng dụng nhắn tin có hai cách gửi ảnh. Gửi dạng ảnh thông thường, ảnh bị nén và mất phần lớn metadata. Gửi dạng tệp hoặc tài liệu — thường được chọn để giữ chất lượng — tệp gốc được gửi kèm mọi trường EXIF, kể cả GPS. Nhiều người chuyển sang “gửi dạng tệp” để giữ nét mà không biết mình cũng đang gửi vị trí.',
      ],
    },
    {
      heading: 'Nền tảng cố ý hiển thị EXIF',
      paragraphs: [
        'Một số cộng đồng nhiếp ảnh và trang portfolio hiển thị thông số máy ảnh cạnh mỗi bức ảnh, và một số cho phép tải tệp gốc. Nếu bạn đăng ở đó, hãy coi metadata của mình là công khai trừ khi đã làm sạch trước.',
      ],
    },
    {
      heading: 'Cách tự kiểm tra bất kỳ ứng dụng nào',
      paragraphs: ['Các ứng dụng thường xuyên thay đổi cách xử lý ảnh. Để biết chắc:'],
      steps: [
        'Chụp một ảnh thử khi đang bật định vị.',
        'Gửi cho chính mình theo cách bạn vẫn thường chia sẻ ảnh.',
        'Tải tệp nhận được về và thả vào công cụ kiểm tra ở đầu trang.',
        'Mục “Chi tiết riêng tư” cho biết ngay dữ liệu vị trí, cá nhân hay thời gian có còn không.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Làm sạch trước khi chia sẻ',
      paragraphs: [
        'Thói quen an toàn nhất là xóa metadata trước khi ảnh rời khỏi thiết bị. Công cụ này xóa các trường GPS, ngày giờ, máy ảnh và tác giả cùng ảnh xem trước ẩn, giữ hướng xoay và màu sắc, và xử lý mọi thứ tại máy — rất phù hợp với ảnh bạn gửi cho người lạ, người mua hay khách hàng.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Hỏi đáp về nền tảng và metadata ảnh',
  faq: [
    {
      q: 'WhatsApp có xóa GPS khỏi ảnh không?',
      a: 'Ảnh gửi dạng ảnh thông thường bị nén và mất phần lớn metadata. Ảnh gửi dạng tài liệu giữ nguyên tệp gốc, kể cả GPS.',
    },
    {
      q: 'Zalo hay Messenger có giữ vị trí trong ảnh không?',
      a: 'Ảnh gửi dạng ảnh thường bị nén lại, còn ảnh gửi dạng tệp có thể giữ nguyên metadata. Cách xử lý thay đổi theo phiên bản, nên hãy tự kiểm tra bằng cách gửi cho chính mình.',
    },
    {
      q: 'Instagram có giữ vị trí của ảnh không?',
      a: 'Ảnh đã đăng bị xóa EXIF. Thẻ vị trí bạn tự thêm vào bài đăng là thông tin riêng và người xem nhìn thấy được.',
    },
    {
      q: 'Email có xóa metadata ảnh không?',
      a: 'Không. Tệp đính kèm được gửi nguyên trạng, nên GPS và các trường EXIF khác vẫn còn trừ khi ứng dụng thu nhỏ ảnh.',
    },
    {
      q: 'Chụp màn hình có phải cách tốt để xóa metadata không?',
      a: 'Nó xóa EXIF nhưng làm giảm chất lượng, đổi kích thước và có thể chụp cả những thứ khác trên màn hình. Làm sạch không mất dữ liệu giữ nguyên ảnh gốc.',
    },
    {
      q: 'Nền tảng đã xóa metadata thì vị trí của tôi có an toàn không?',
      a: 'Với người xem thì phần lớn là có — nhưng nền tảng đã nhận tệp gốc, và nội dung nhìn thấy trong ảnh vẫn có thể tiết lộ nơi chụp.',
    },
  ],
};

export default article;
