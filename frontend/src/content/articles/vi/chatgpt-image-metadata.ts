import type { Article } from '../types';

const article: Article = {
  title: 'Ảnh tạo bằng ChatGPT có metadata không? Cách xem và xóa',
  summary: [
    'Ảnh tạo bằng ChatGPT và các mô hình tạo ảnh của OpenAI có kèm C2PA Content Credentials: metadata có chữ ký số cho biết OpenAI là nguồn tạo ra ảnh.',
    'Bài này giải thích metadata đó chứa gì, hiện ra ở đâu, cách tự kiểm tra tệp của bạn và cách xóa khỏi bản sao mà không giảm chất lượng — cùng những điều mà việc xóa metadata không thay đổi được.',
  ],
  description:
    'Có — ảnh ChatGPT chứa C2PA Content Credentials ghi OpenAI là nguồn tạo. Xem metadata gồm những gì, cách kiểm tra và cách xóa mà không giảm chất lượng.',
  answer:
    'Có. Ảnh tạo trong ChatGPT và qua API tạo ảnh của OpenAI đều kèm C2PA Content Credentials — một manifest có chữ ký số ghi lại rằng ảnh được tạo bởi mô hình của OpenAI. Instagram, Facebook hay LinkedIn có thể đọc manifest này và gắn nhãn AI. Bạn có thể xem manifest bằng công cụ xem metadata và xóa nó khỏi bản sao mà không thay đổi điểm ảnh.',
  sections: [
    {
      heading: 'ChatGPT thêm metadata gì vào ảnh',
      paragraphs: [
        'OpenAI gắn manifest C2PA vào ảnh do các mô hình tạo ảnh của mình tạo ra trong ChatGPT và qua API. Manifest có chữ ký số nên trình xem biết được nó có bị sửa hay không. Thông thường manifest ghi lại:',
      ],
      bullets: [
        'Đơn vị phát hành và công cụ tạo ảnh, cho biết đó là OpenAI và ChatGPT hoặc API.',
        'Hành động “tạo ảnh” với loại nguồn số “trainedAlgorithmicMedia” — mã chuẩn cho nội dung hoàn toàn do AI tạo.',
        'Thời điểm tạo và chứng thư dùng để ký manifest.',
        'Với ảnh chỉnh sửa trong ChatGPT: các mục mô tả thao tác chỉnh sửa và ảnh gốc được dùng làm đầu vào.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Ảnh ChatGPT có chứa prompt của tôi không?',
      paragraphs: [
        'Manifest C2PA được thiết kế để ghi nguồn gốc — công cụ nào tạo ảnh và vào lúc nào — chứ không phải nội dung cuộc trò chuyện. Khác với Stable Diffusion hay ComfyUI vốn ghi toàn bộ prompt vào các đoạn văn bản trong PNG, tệp của OpenAI không xoay quanh việc lưu prompt. Tuy vậy, nội dung manifest có thể thay đổi theo thời gian, nên cách chắc chắn nhất là mở chính tệp của bạn trong trình xem để kiểm tra.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cách kiểm tra metadata của ảnh ChatGPT',
      paragraphs: [],
      steps: [
        'Tải ảnh từ ChatGPT về. Tệp thường được lưu dưới dạng PNG.',
        'Thả tệp vừa tải vào công cụ kiểm tra ở đầu trang này.',
        'Mở mục “AI và nguồn gốc”: bạn sẽ thấy manifest C2PA, đơn vị phát hành và loại nguồn số.',
        'So sánh với bản bạn đã chia sẻ hoặc lưu lại — nhiều ứng dụng làm mất manifest, số khác thì giữ.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Metadata của ảnh ChatGPT hiện ra ở đâu',
      paragraphs: [
        'Các nền tảng và công cụ hỗ trợ C2PA tự động đọc manifest. Meta hiện nhãn “Thông tin AI” trên Instagram, Facebook và Threads, LinkedIn hiện biểu tượng Content Credentials, còn các trang xác minh như contentcredentials.org hiện toàn bộ lịch sử. Nền tảng xóa metadata khi tải lên sẽ gỡ manifest khỏi bản đăng công khai, nhưng có thể đã đọc nó trước đó.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'Cách xóa metadata khỏi ảnh ChatGPT',
      paragraphs: [
        'Xóa manifest hữu ích khi bạn muốn tệp gọn hơn, không muốn chia sẻ thông tin công cụ và tài khoản, hoặc đăng ảnh ở nơi bạn tự ghi rõ ảnh do AI tạo.',
      ],
      steps: [
        'Thả một hoặc nhiều ảnh ChatGPT vào công cụ ở đầu trang này.',
        'Bấm “Xóa metadata AI”. Khối C2PA và các metadata khác được cắt bỏ ở cấp byte.',
        'Tải ảnh PNG đã làm sạch — điểm ảnh, độ trong suốt và kích thước giống hệt bản gốc.',
        'Giữ lại bản tải gốc nếu sau này bạn cần chứng minh nguồn gốc của ảnh.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'Những gì việc xóa metadata không thay đổi',
      paragraphs: [
        'Metadata chỉ là một lớp. OpenAI cho biết họ còn dùng công cụ nội bộ để nhận diện ảnh của chính mình, các nền tảng có thể chạy bộ phân loại riêng, và nhiều dịch vụ yêu cầu bạn khai báo nội dung do AI tạo bất kể trong tệp có gì. Xóa manifest chỉ làm sạch tệp; nó không thay đổi nguồn gốc của ảnh hay nghĩa vụ khai báo của bạn.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Hỏi đáp về metadata của ảnh ChatGPT',
  faq: [
    {
      q: 'Mọi ảnh ChatGPT đều có metadata C2PA?',
      a: 'Ảnh do mô hình tạo ảnh của OpenAI tạo ra trong ChatGPT và qua API đều được gắn C2PA Content Credentials. Bản đã chụp màn hình hoặc được ứng dụng khác lưu lại có thể đã mất manifest.',
    },
    {
      q: 'Người khác có biết ảnh được tạo bằng ChatGPT không?',
      a: 'Nếu manifest vẫn còn trong tệp thì có: mọi trình xem C2PA đều hiện OpenAI là nguồn. Khi không còn metadata, người xem phải dựa vào dấu hiệu hình ảnh hoặc công cụ phát hiện, vốn không phải lúc nào cũng chính xác.',
    },
    {
      q: 'Xóa metadata có làm giảm chất lượng ảnh không?',
      a: 'Không. Công cụ chỉ cắt các khối metadata và sao chép nguyên từng byte dữ liệu ảnh, nên ảnh PNG trông giống hệt bản gốc.',
    },
    {
      q: 'Chụp màn hình ảnh ChatGPT có giữ metadata không?',
      a: 'Thường là không. Ảnh chụp màn hình là tệp mới không chứa manifest gốc, nhưng độ phân giải thấp hơn và có metadata riêng của ảnh chụp màn hình.',
    },
    {
      q: 'Instagram có còn gắn nhãn ảnh ChatGPT đã làm sạch không?',
      a: 'Nhãn dựa trên metadata cần có metadata, nên bản đã làm sạch ít bị gắn nhãn hơn. Nền tảng vẫn có thể dùng tín hiệu khác, và quy định của họ có thể yêu cầu bạn tự gắn nhãn nội dung AI.',
    },
    {
      q: 'Ảnh có bị tải lên khi kiểm tra hoặc làm sạch không?',
      a: 'Không. Mọi thao tác chạy trong trình duyệt, và ảnh không bao giờ rời khỏi thiết bị của bạn.',
    },
  ],
};

export default article;
