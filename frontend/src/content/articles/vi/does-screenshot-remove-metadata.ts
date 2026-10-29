import type { Article } from '../types';

const article: Article = {
  title: 'Chụp màn hình có xóa metadata ảnh không? Mất gì và còn gì',
  summary: [
    'Chụp màn hình là mẹo phổ biến để bỏ metadata của ảnh. Cách này đúng là bỏ được EXIF, GPS và C2PA gốc — nhưng ảnh chụp màn hình lại có metadata riêng và làm giảm chất lượng ảnh.',
    'Bài này giải thích chính xác chụp màn hình xóa được gì, giữ lại hoặc thêm vào gì, những gì nó không bao giờ xóa được, và một cách làm sạch giữ nguyên ảnh gốc.',
  ],
  description:
    'Chụp màn hình bỏ được EXIF, GPS và C2PA gốc, nhưng lại thêm metadata riêng, giảm chất lượng và giữ thủy ấn vô hình. Đây là cách xóa không giảm chất lượng.',
  answer:
    'Phần lớn là có. Ảnh chụp màn hình là một ảnh hoàn toàn mới, nên EXIF, vị trí GPS và C2PA Content Credentials của ảnh gốc không được sao chép sang. Nhưng ảnh chụp màn hình có metadata riêng như ngày chụp và thiết bị, độ phân giải bị giới hạn theo màn hình, còn thủy ấn vô hình và chi tiết hiện trong ảnh vẫn giữ nguyên. Xóa metadata trực tiếp khỏi tệp gốc sẽ tránh được những đánh đổi này.',
  sections: [
    {
      heading: 'Chụp màn hình xóa được gì',
      paragraphs: [
        'Ảnh chụp màn hình ghi lại các điểm ảnh đang hiện trên màn hình và lưu thành tệp mới. Không có metadata nào của tệp gốc được mang theo, nên các thông tin sau sẽ mất:',
      ],
      bullets: [
        'Tọa độ GPS, tên máy ảnh, ống kính và thời gian chụp gốc (EXIF).',
        'Tác giả, bản quyền và lịch sử chỉnh sửa (XMP và IPTC).',
        'C2PA Content Credentials và nhãn AI của IPTC do công cụ tạo ảnh AI hoặc ứng dụng chỉnh sửa thêm vào.',
        'Prompt, seed và workflow lưu trong tệp PNG do AI tạo.',
      ],
    },
    {
      heading: 'Ảnh chụp màn hình thêm vào hoặc giữ lại gì',
      paragraphs: [
        'Ảnh chụp màn hình không phải tệp sạch metadata. Tùy thiết bị, nó có thể ghi thời điểm chụp, thiết bị hoặc hệ điều hành, kích thước màn hình và đôi khi một ghi chú “Screenshot”. Trên một số thiết bị, chính ảnh chụp màn hình cũng có thể được gắn Content Credentials. Các trường này thường ít nhạy cảm hơn vị trí GPS gốc, nhưng vẫn tiết lộ phần nào về bạn.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Những gì chụp màn hình không bao giờ xóa được',
      paragraphs: [],
      bullets: [
        'Thủy ấn vô hình như SynthID của Google, nằm ngay trong điểm ảnh và được thiết kế để tồn tại qua ảnh chụp màn hình.',
        'Mọi thứ hiện trong ảnh: biển tên đường, số nhà, khuôn mặt, hình phản chiếu hay khung cảnh dễ nhận ra đều có thể lộ vị trí mà không cần metadata.',
        'Thông tin hiện trên màn hình quanh bức ảnh như thông báo, đồng hồ hay tên tài khoản, nếu bạn quên cắt bỏ.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'So sánh chụp màn hình và công cụ xóa metadata',
      paragraphs: [],
      table: {
        head: ['', 'Chụp màn hình', 'Công cụ xóa metadata'],
        rows: [
          ['EXIF, GPS và C2PA gốc', 'Không được sao chép', 'Bị xóa'],
          ['Thêm metadata mới', 'Có (ngày, thiết bị…)', 'Không'],
          ['Độ phân giải', 'Giới hạn theo màn hình', 'Như bản gốc'],
          ['Điểm ảnh', 'Chụp lại, có thể bị thu nhỏ', 'Giống hệt'],
          ['Hồ sơ màu và HDR', 'Thường bị thay đổi', 'Giữ nguyên'],
          ['Xử lý 50 ảnh', 'Từng ảnh một', 'Một cú nhấp'],
        ],
      },
    },
    {
      heading: 'Vì sao chụp màn hình không phải cách tốt để làm sạch ảnh',
      paragraphs: [
        'Trừ khi ảnh lấp đầy màn hình ở mức thu phóng 100%, ảnh chụp màn hình là bản bị thu nhỏ. Màu có thể lệch khi hệ thống chuyển đổi hồ sơ màu, vùng sáng HDR bị làm phẳng, và mỗi lần chụp lại hay tải lên ảnh lại bị nén thêm. Với những ảnh quan trọng — ảnh portfolio, ảnh sản phẩm, tranh AI — làm sạch tệp gốc cho kết quả tốt hơn.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'Cách tốt hơn: xóa metadata khỏi ảnh gốc',
      paragraphs: [],
      steps: [
        'Thả ảnh gốc vào công cụ ở đầu trang này — JPG, PNG, WebP, GIF, HEIC hoặc AVIF.',
        'Xem báo cáo để biết mỗi tệp chứa dữ liệu vị trí, cá nhân và AI nào.',
        'Bấm “Xóa metadata AI”. Chỉ các khối metadata bị xóa; dữ liệu ảnh được sao chép nguyên từng byte.',
        'Tải ảnh đã làm sạch ở độ phân giải gốc, từng ảnh hoặc cả tệp ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Hỏi đáp về chụp màn hình và metadata',
  faq: [
    {
      q: 'Chụp màn hình có xóa vị trí GPS của ảnh không?',
      a: 'Có. Tọa độ GPS gốc không được sao chép sang ảnh chụp màn hình. Tuy vậy, chi tiết hiện trong ảnh vẫn có thể cho biết ảnh được chụp ở đâu.',
    },
    {
      q: 'Ảnh chụp màn hình có metadata riêng không?',
      a: 'Có. Ảnh chụp màn hình thường chứa ngày chụp, thông tin thiết bị hoặc phần mềm, và đôi khi một ghi chú cho biết đó là ảnh chụp màn hình.',
    },
    {
      q: 'Chụp màn hình có xóa C2PA Content Credentials không?',
      a: 'Manifest gốc không được sao chép sang. Một số thiết bị và ứng dụng có thể gắn Content Credentials mới cho chính ảnh chụp màn hình, nên hãy kiểm tra lại kết quả.',
    },
    {
      q: 'Chụp màn hình có xóa SynthID hay thủy ấn vô hình không?',
      a: 'Không. Thủy ấn vô hình là một phần của điểm ảnh và được thiết kế để tồn tại qua chụp màn hình, cắt ảnh và nén ảnh.',
    },
    {
      q: 'Chụp màn hình có làm giảm chất lượng ảnh không?',
      a: 'Thường là có. Ảnh bị giới hạn theo độ phân giải màn hình, có thể bị thu nhỏ, và có thể mất hồ sơ màu gốc cùng thông tin HDR.',
    },
    {
      q: 'Cách tốt nhất để xóa metadata mà không giảm chất lượng là gì?',
      a: 'Xóa metadata khỏi tệp gốc bằng công cụ làm sạch không nén lại ảnh. Dữ liệu ảnh giữ nguyên và tệp giữ độ phân giải đầy đủ.',
    },
  ],
};

export default article;
