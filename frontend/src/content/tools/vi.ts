import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Công cụ metadata ảnh miễn phí',
    description:
      'Công cụ miễn phí ngay trên trình duyệt để xem, phân tích và xóa metadata ảnh: xem EXIF, kiểm tra quyền riêng tư, đo dung lượng metadata, xóa EXIF, GPS, C2PA.',
    intro:
      'Tất cả công cụ đều xử lý ngay trên trình duyệt của bạn: ảnh không được tải lên máy chủ và giữ nguyên chất lượng gốc. Hãy chọn công cụ phù hợp — xem metadata trong ảnh, kiểm tra thông tin riêng tư có thể bị lộ, hoặc xóa sạch metadata.',
  },
  cards: {
    cleaner: { name: 'Xóa metadata ảnh', text: 'Xóa EXIF, GPS, XMP, IPTC, C2PA và prompt AI chỉ với một cú nhấp, không giảm chất lượng.' },
    'view-metadata': { name: 'Xem metadata', text: 'Xem mọi trường ẩn trong ảnh: máy ảnh, ngày giờ, GPS, XMP, C2PA và prompt AI.' },
    'privacy-check': { name: 'Phân tích quyền riêng tư ảnh', text: 'Biết ảnh để lộ gì — vị trí trên bản đồ, thông tin cá nhân và thời gian chụp.' },
    'metadata-size': { name: 'Đo dung lượng metadata', text: 'Đo số byte metadata trong tệp và mức rủi ro của chúng.' },
    'remove-exif': { name: 'Xóa EXIF', text: 'Xóa thông tin máy ảnh, ngày giờ và số sê-ri, vẫn giữ hướng xoay và màu sắc.' },
    'remove-gps': { name: 'Xóa vị trí GPS', text: 'Gỡ tọa độ GPS khỏi ảnh điện thoại trước khi chia sẻ.' },
    'remove-c2pa': { name: 'Xóa C2PA', text: 'Gỡ manifest Content Credentials (C2PA) khỏi ảnh JPG, PNG, WebP và HEIC.' },
    'remove-prompts': { name: 'Xóa prompt AI', text: 'Xóa thông số Stable Diffusion và workflow ComfyUI khỏi tệp PNG.' },
    batch: { name: 'Làm sạch hàng loạt', text: 'Làm sạch tối đa 50 ảnh cùng lúc và tải về trong một tệp ZIP.' },
  },
  groups: {
    inspect: { title: 'Kiểm tra ảnh', text: 'Xem ảnh để lộ những gì trước khi chia sẻ — tệp chỉ được đọc, không bị thay đổi.' },
    remove: { title: 'Xóa metadata theo nhu cầu', text: 'Chọn định dạng hoặc việc cần làm — mỗi hướng dẫn đều có sẵn công cụ làm sạch.' },
  },
  tools: {
    'view-metadata': {
      title: 'Xem metadata ảnh online — EXIF, XMP, C2PA',
      description:
        'Công cụ xem metadata ảnh miễn phí: xem EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) và prompt AI trong JPG, PNG, WebP, HEIC ngay trên trình duyệt, không tải lên.',
      intro:
        'Thả ảnh vào để xem mọi thông tin ẩn bên trong — máy ảnh và ống kính, ngày chụp, vị trí GPS, phần mềm chỉnh sửa, Content Credentials và prompt AI — được nhóm theo nguồn. Không có gì bị thay đổi hay tải lên.',
      steps: [
        'Thả một hoặc nhiều ảnh vào khung phía trên, hoặc chạm “Chọn ảnh từ máy”.',
        'Mở từng tệp để xem tóm tắt riêng tư, tín hiệu AI và toàn bộ các trường metadata.',
        'Tìm kiếm trong các trường, rồi quyết định giữ nguyên tệp hay xóa metadata.',
      ],
      faq: [
        {
          q: 'Xem metadata có làm thay đổi tệp không?',
          a: 'Không. Tệp chỉ được đọc. Muốn xóa metadata, hãy dùng công cụ làm sạch — ảnh vẫn nằm trong danh sách nên bạn không cần thêm lại.',
        },
        {
          q: 'Tôi xem được những metadata nào?',
          a: 'EXIF (kể cả GPS), XMP, IPTC, ICC, Content Credentials (C2PA), các chunk văn bản PNG chứa prompt hay workflow ComfyUI, và các khối trong cấu trúc tệp.',
        },
        {
          q: 'Ảnh của tôi có bị tải lên không?',
          a: 'Không. Tệp được trình duyệt đọc và không bao giờ rời khỏi thiết bị của bạn.',
        },
      ],
    },
    'privacy-check': {
      title: 'Phân tích quyền riêng tư ảnh — tìm GPS và dữ liệu cá nhân',
      description:
        'Kiểm tra ảnh để lộ gì trước khi chia sẻ: vị trí GPS mở được trên bản đồ, tác giả, số sê-ri thiết bị, thời gian chụp và dữ liệu AI. Miễn phí, riêng tư, không tải lên.',
      intro:
        'Biết ảnh để lộ gì trước khi đăng. Công cụ cho biết ảnh có vị trí GPS không (và chỉ tới đâu), có thông tin cá nhân như tác giả hay số sê-ri thiết bị không, thời gian chụp và dữ liệu nguồn gốc AI — kèm mức rủi ro dễ hiểu.',
      steps: [
        'Thả những ảnh bạn định chia sẻ vào khung phía trên.',
        'Xem mức rủi ro cùng thông tin vị trí, cá nhân và thời gian tìm thấy trong từng tệp.',
        'Nếu có vị trí GPS, mở trên bản đồ để thấy chính xác điều người khác có thể thấy — rồi xóa nó.',
      ],
      faq: [
        {
          q: 'Mức rủi ro được xác định thế nào?',
          a: 'Cao nghĩa là ảnh có vị trí. Trung bình nghĩa là có thông tin cá nhân, thời gian hoặc AI nhưng không có vị trí. Thấp nghĩa là không tìm thấy các thông tin này trong metadata.',
        },
        {
          q: 'Bản đồ có tự tải không?',
          a: 'Không. Tọa độ chỉ hiển thị dạng chữ. OpenStreetMap chỉ mở trong thẻ mới khi bạn bấm nút, nên nếu không bấm, vị trí không bao giờ rời khỏi thiết bị.',
        },
        {
          q: 'Ảnh không có GPS có thể lộ vị trí không?',
          a: 'Metadata chỉ là một nguồn. Những gì nhìn thấy trong ảnh — biển tên đường, công trình, hình phản chiếu — cũng có thể để lộ địa điểm, và công cụ này không phát hiện được điều đó.',
        },
      ],
    },
    'metadata-size': {
      title: 'Đo dung lượng metadata — ảnh chứa bao nhiêu metadata?',
      description:
        'Đo lượng metadata trong ảnh: tổng số byte, tỉ lệ so với tệp, các khối EXIF, XMP, C2PA hay prompt lớn nhất và mức rủi ro riêng tư. Miễn phí, không tải lên.',
      intro:
        'Xem bao nhiêu phần của tệp là metadata chứ không phải hình ảnh. Công cụ liệt kê mọi khối metadata theo dung lượng — EXIF, XMP, C2PA, ảnh xem trước nhúng, prompt và workflow AI — cho biết tỉ lệ so với tệp và đánh giá rủi ro riêng tư.',
      steps: [
        'Thả một hoặc nhiều ảnh vào khung phía trên.',
        'So sánh dung lượng metadata và tỉ lệ của nó trong từng tệp, theo từng khối.',
        'Xóa metadata để tệp nhẹ hơn và an toàn hơn khi chia sẻ.',
      ],
      faq: [
        {
          q: 'Vì sao một số tệp chứa nhiều metadata đến vậy?',
          a: 'Ảnh xem trước nhúng, manifest C2PA kèm ảnh thu nhỏ và workflow ComfyUI có thể thêm hàng chục đến hàng trăm KB, trong khi EXIF cơ bản thường chỉ vài KB.',
        },
        {
          q: 'Vì sao hồ sơ màu được đánh dấu là giữ lại?',
          a: 'Hồ sơ màu ICC cần để hiển thị màu đúng nên công cụ làm sạch giữ lại. Nó không được tính vào tổng metadata.',
        },
        {
          q: 'Xóa metadata có làm thay đổi ảnh không?',
          a: 'Không. Chỉ các khối metadata bị xóa; dữ liệu ảnh được chép nguyên, nên tệp nhẹ hơn mà không giảm chất lượng.',
        },
      ],
    },
  },
};

export default tools;
