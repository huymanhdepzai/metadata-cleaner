import type { Article } from '../types';

const article: Article = {
  title: 'Công cụ tạo ảnh AI thêm metadata gì? DALL·E, Firefly, Midjourney, Gemini và Stable Diffusion',
  summary: [
    'Gần như mọi công cụ tạo ảnh AI đều để lại dấu vết trong ảnh đầu ra — từ Content Credentials có chữ ký tới prompt dạng văn bản. Biết mỗi công cụ ghi gì giúp bạn bảo vệ prompt và hiểu vì sao nền tảng gắn nhãn một bức ảnh.',
    'Dưới đây là tổng quan metadata thường thấy trong ảnh từ các công cụ phổ biến, và cách xem chính xác bên trong tệp của bạn có gì.',
  ],
  seoTitle: 'Công cụ tạo ảnh AI thêm metadata gì vào ảnh?',
  description:
    'Metadata mà công cụ tạo ảnh AI nhúng vào — C2PA, IPTC DigitalSourceType, XMP, prompt và workflow — theo từng công cụ, và cách kiểm tra hoặc xóa khỏi tệp.',
  answer:
    'Dịch vụ AI trực tuyến như tạo ảnh trong ChatGPT và Adobe Firefly gắn Content Credentials (C2PA) có chữ ký; Google và Meta thêm thủy ấn vô hình và metadata IPTC; Midjourney có thể kèm prompt và loại nguồn AI; công cụ chạy trên máy như Stable Diffusion và ComfyUI lưu đầy đủ prompt, seed, model và workflow dạng văn bản PNG. Nội dung thay đổi theo phiên bản, nên hãy kiểm tra tệp thực tế.',
  sections: [
    {
      heading: 'Ba loại dấu vết AI',
      paragraphs: ['Metadata liên quan tới AI chia thành ba nhóm:'],
      bullets: [
        'Nguồn gốc có chữ ký — Content Credentials (C2PA) ghi tên công cụ tạo ảnh và các thao tác đã thực hiện.',
        'Metadata mô tả — các trường IPTC và XMP như DigitalSourceType, CreatorTool hoặc phần mô tả.',
        'Dữ liệu tạo ảnh — prompt, seed, model và thiết lập lưu dạng văn bản, chủ yếu ở công cụ chạy trên máy.',
      ],
    },
    {
      heading: 'Tổng quan metadata theo công cụ tạo ảnh',
      paragraphs: [],
      table: {
        head: ['Công cụ', 'C2PA', 'IPTC / XMP', 'Prompt trong tệp', 'Thủy ấn điểm ảnh'],
        rows: [
          ['Tạo ảnh trong ChatGPT, DALL·E', 'Có', 'Tùy trường hợp', 'Thường không', 'Tùy trường hợp'],
          ['Adobe Firefly, tính năng tạo sinh của Photoshop', 'Có', 'Có', 'Không', 'Tùy trường hợp'],
          ['Google Gemini, Imagen', 'Ở một số sản phẩm', 'Ở một số sản phẩm', 'Không', 'SynthID'],
          ['Meta AI', 'Tùy trường hợp', 'Có (IPTC)', 'Không', 'Có'],
          ['Midjourney', 'Tùy trường hợp', 'Có (loại nguồn)', 'Thường có', 'Chưa công bố'],
          ['Stable Diffusion, ComfyUI (chạy trên máy)', 'Không', 'Hiếm khi', 'Có, rất chi tiết', 'Mặc định không'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (tạo ảnh trong ChatGPT và DALL·E)',
      paragraphs: [
        'Ảnh tạo bằng tính năng tạo ảnh của OpenAI mang Content Credentials (C2PA) xác định OpenAI là nguồn, nên trình xem và nền tảng hỗ trợ C2PA nhận ra được. Bản kê khai có thể mất khi ảnh bị chụp màn hình hoặc lưu lại bằng ứng dụng không giữ nó.',
      ],
      related: ['chatgpt-image-metadata', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly và tính năng tạo sinh trong Photoshop',
      paragraphs: [
        'Adobe gắn Content Credentials vào nội dung tạo bằng các tính năng tạo sinh dùng Firefly, mô tả nội dung là do AI tạo hoặc chỉnh sửa. Vì vậy ảnh chỉnh bằng Generative Fill hay Generative Expand có thể mang khai báo “ghép có AI” dù phần lớn bức ảnh là ảnh chụp thật.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini và Imagen) và Meta AI',
      paragraphs: [
        'Google nhúng thủy ấn vô hình SynthID vào ảnh từ các model tạo sinh của họ và cũng dùng metadata để đánh dấu nội dung AI ở một số sản phẩm. Meta cho biết ảnh từ Meta AI có dấu hiệu nhìn thấy được, thủy ấn vô hình và metadata IPTC cho biết ảnh do AI tạo.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Ảnh tải từ Midjourney có thể chứa prompt và job ID trong trường mô tả hoặc chú thích, cùng giá trị IPTC đánh dấu ảnh do AI tạo. Nội dung xuất hiện tùy định dạng tải về và phiên bản dịch vụ hiện tại.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI và các công cụ chạy trên máy',
      paragraphs: [
        'Công cụ chạy trên máy không ký gì cả, nhưng thường lưu thông tin chi tiết nhất: AUTOMATIC1111 và Forge ghi chunk văn bản “parameters” gồm prompt, seed, sampler và model, còn ComfyUI nhúng toàn bộ đồ thị prompt và workflow dạng JSON. Các thiết lập này thường tắt được — nhưng chỉ áp dụng cho ảnh mới.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cách xem công cụ tạo ảnh đã thêm gì',
      paragraphs: ['Công cụ tạo ảnh thay đổi những gì chúng ghi qua mỗi phiên bản, nên cách đáng tin là kiểm tra chính tệp:'],
      steps: [
        'Thả ảnh vào công cụ ở đầu trang; ảnh được phân tích tại máy.',
        'Xem “AI và nguồn gốc” để thấy C2PA, loại nguồn, prompt và tên công cụ.',
        'Nếu không muốn chia sẻ chúng, bấm “Xóa metadata AI” và tải bản đã làm sạch.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Hỏi đáp về metadata của công cụ tạo ảnh AI',
  faq: [
    {
      q: 'Mọi công cụ tạo ảnh AI có thêm Content Credentials (C2PA) không?',
      a: 'Không. Các dịch vụ trực tuyến lớn ngày càng thêm, nhưng nhiều công cụ — nhất là loại chạy trên máy — chỉ ghi metadata dạng văn bản hoặc không ghi gì.',
    },
    {
      q: 'Xóa metadata có xóa luôn thủy ấn vô hình không?',
      a: 'Không. Thủy ấn như SynthID nằm trong điểm ảnh. Xóa metadata không thay đổi điểm ảnh.',
    },
    {
      q: 'Vì sao hai ảnh từ cùng một công cụ lại có metadata khác nhau?',
      a: 'Định dạng xuất, phiên bản ứng dụng, nơi bạn tải về và các chỉnh sửa sau đó đều có thể thêm hoặc bớt trường.',
    },
    {
      q: 'trainedAlgorithmicMedia nghĩa là gì?',
      a: 'Đó là giá trị IPTC DigitalSourceType cho nội dung do model AI tạo sinh tạo ra. compositeWithTrainedAlgorithmicMedia nghĩa là ảnh thật có phần do AI tạo.',
    },
    {
      q: 'Chụp màn hình có giữ metadata AI không?',
      a: 'Thường là không. Ảnh chụp màn hình là ảnh mới không có metadata gốc, dù thủy ấn trong điểm ảnh có thể vẫn còn.',
    },
    {
      q: 'Có giữ ảnh mà chỉ xóa prompt được không?',
      a: 'Được. Làm sạch xóa các khối metadata và chép nguyên dữ liệu ảnh, nên ảnh giống hệt nhưng không còn prompt.',
    },
  ],
};

export default article;
