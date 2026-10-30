import type { GuidesHubContent } from './types';

const vi: GuidesHubContent = {
  more: 'Mới tìm hiểu? Hãy bắt đầu với “Dữ liệu EXIF là gì?” để nắm kiến thức cơ bản về metadata ảnh, hoặc “C2PA là gì?” nếu ảnh của bạn do AI tạo hay được chỉnh bằng công cụ AI. Các bài được chia theo việc bạn cần làm: làm sạch một định dạng cụ thể, xử lý nhãn AI, ẩn prompt AI, hoặc bảo vệ vị trí và quyền riêng tư.',
  groups: {
    formats: {
      title: 'Xóa metadata theo định dạng và thiết bị',
      text: 'Mỗi định dạng giấu metadata ở một chỗ khác nhau: JPEG trong các marker segment, PNG trong text chunk, HEIC và WebP trong box và RIFF chunk. Các bài này cho biết mỗi định dạng lưu gì, phần nào xóa được an toàn, và cách làm sạch ảnh trên Windows, macOS, iPhone, Android — từng ảnh hoặc hàng loạt.',
    },
    'ai-labels': {
      title: 'Nhãn AI và Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok và YouTube đọc manifest C2PA và các trường IPTC để quyết định có gắn nhãn AI hay không. Tìm hiểu Content Credentials hoạt động thế nào, vì sao ảnh thật bị gắn nhãn nhầm, cách tự kiểm tra một ảnh, và việc xóa metadata làm được gì — không làm được gì — với watermark ẩn như SynthID.',
    },
    'ai-prompts': {
      title: 'Metadata và prompt của công cụ tạo ảnh AI',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion và ComfyUI để lại dấu vết khác nhau trong file ảnh — từ bản ghi C2PA có chữ ký số đến toàn bộ prompt, seed và workflow của bạn. Xem chính xác mỗi công cụ để lại gì và cách chia sẻ ảnh mà không kèm theo chúng.',
    },
    privacy: {
      title: 'EXIF, GPS và quyền riêng tư khi chia sẻ ảnh',
      text: 'Ảnh chụp bằng điện thoại chứa dòng máy, thời điểm chụp và thường cả tọa độ GPS chính xác tới vài mét. Tìm hiểu EXIF gồm những gì, ứng dụng và mạng xã hội nào tự xóa khi tải lên (và nơi nào giữ lại), chụp màn hình có đủ không, và cách xóa vị trí trước khi chia sẻ.',
    },
  },
};

export default vi;
