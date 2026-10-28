import type { Article } from '../types';

const article: Article = {
  title: 'Xóa metadata ảnh PNG — prompt, workflow, XMP và C2PA',
  summary: [
    'Tệp PNG lưu metadata trong các chunk văn bản, và công cụ AI dùng chúng rất nhiều: Stable Diffusion ghi prompt và thông số, ComfyUI nhúng cả workflow, còn phần mềm chỉnh sửa thêm XMP hoặc C2PA.',
    'Dùng công cụ trên trang này để xem từng chunk và xóa metadata, trong khi hình ảnh, độ trong suốt, màu sắc và hoạt ảnh được giữ nguyên.',
  ],
  description:
    'Xóa prompt, workflow ComfyUI, XMP, EXIF và C2PA khỏi ảnh PNG ngay trên trình duyệt. Giữ độ trong suốt, hồ sơ màu và hoạt ảnh APNG. Miễn phí, không tải lên.',
  answer:
    'Để xóa metadata ảnh PNG, hãy thả tệp vào công cụ trên trang này và bấm “Xóa metadata AI”. Các chunk văn bản (tEXt, zTXt, iTXt) chứa prompt, workflow ComfyUI và XMP bị xóa cùng chunk eXIf, caBX (C2PA), tIME và dSIG. Dữ liệu ảnh, độ trong suốt, hồ sơ màu và hoạt ảnh APNG được chép nguyên, nên PNG giống hệt bản gốc tới từng điểm ảnh.',
  sections: [
    {
      heading: 'Metadata của PNG nằm ở đâu',
      paragraphs: ['PNG là một danh sách các chunk. Dữ liệu ảnh nằm trong chunk IDAT; metadata nằm trong các chunk riêng:'],
      table: {
        head: ['Chunk', 'Nội dung'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Văn bản tự do: “parameters” của Stable Diffusion, JSON “prompt” và “workflow” của ComfyUI, XMP'],
          ['eXIf', 'Dữ liệu EXIF như thiết bị, thời gian và GPS'],
          ['caBX', 'Content Credentials (C2PA)'],
          ['tIME, dSIG', 'Thời gian sửa đổi cuối và chữ ký số'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cách xóa metadata ảnh PNG trong ba bước',
      paragraphs: [],
      steps: [
        'Thả các tệp PNG vào công cụ phía trên — xử lý nhiều tệp cùng lúc được.',
        'Mở báo cáo để xem prompt, workflow và các trường khác đã tìm thấy.',
        'Bấm “Xóa metadata AI” và tải các tệp đã làm sạch, từng tệp hoặc gộp trong ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Những gì được giữ lại trong ảnh PNG',
      paragraphs: [
        'Chỉ các chunk metadata bị xóa. Mọi thứ ảnh hưởng tới hình ảnh đều được giữ: header, bảng màu, dữ liệu ảnh, độ trong suốt (tRNS), gamma và sắc độ, hồ sơ màu sRGB hoặc ICC, và các chunk hoạt ảnh APNG. Nếu tệp có khai báo hướng xoay, nó được ghi lại trong một chunk eXIf tối thiểu với mã kiểm tra hợp lệ.',
      ],
    },
    {
      heading: 'Vì sao không chỉ đơn giản lưu lại PNG?',
      paragraphs: [
        'Nén PNG không mất dữ liệu, nhưng lưu lại vẫn làm thay đổi tệp. Vẽ lại PNG qua canvas của trình duyệt — cách nhiều công cụ online đang làm — có thể làm mất hồ sơ màu, thay đổi viền trong suốt và giảm ảnh 16-bit xuống 8-bit. Cắt chunk tránh được tất cả: dữ liệu IDAT giữ đúng như công cụ tạo ảnh hoặc trình chỉnh sửa đã ghi.',
      ],
    },
    {
      heading: 'Ngăn metadata PNG từ lần sau',
      paragraphs: [
        'Nếu không muốn dữ liệu tạo ảnh nằm trong tệp, hãy kiểm tra thiết lập của công cụ tạo ảnh: ComfyUI có thể chạy với tùy chọn --disable-metadata, và nhiều giao diện Stable Diffusion có tùy chọn không lưu thông số tạo ảnh. Với các tệp đã có, làm sạch tại đây là cách nhanh nhất.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Hỏi đáp về làm sạch ảnh PNG',
  faq: [
    {
      q: 'Ảnh PNG có bị giảm chất lượng không?',
      a: 'Không. Các chunk dữ liệu ảnh được chép nguyên từng byte, nên hình ảnh giống hệt bản gốc tới từng điểm ảnh.',
    },
    {
      q: 'Người khác có khôi phục được workflow ComfyUI sau khi làm sạch không?',
      a: 'Không thể từ tệp đã làm sạch — chunk prompt và workflow bị xóa hoàn toàn. Các bản bạn đã chia sẻ trước đó vẫn còn chứa chúng.',
    },
    {
      q: 'Độ trong suốt có được giữ không?',
      a: 'Có. Kênh alpha và chunk tRNS được giữ nguyên như cũ.',
    },
    {
      q: 'Có hỗ trợ PNG động (APNG) không?',
      a: 'Có. Các chunk hoạt ảnh APNG được giữ, nên hoạt ảnh chạy y như trước.',
    },
    {
      q: 'Tệp PNG có nhẹ hơn sau khi làm sạch không?',
      a: 'Thường là có — nhất là ảnh từ ComfyUI, nơi workflow nhúng có thể chiếm hàng chục kilobyte.',
    },
    {
      q: 'Ảnh PNG có bị tải lên không?',
      a: 'Không. Mọi thứ được xử lý trên trình duyệt và không rời khỏi thiết bị của bạn.',
    },
  ],
};

export default article;
