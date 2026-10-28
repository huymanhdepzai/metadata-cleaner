import type { Article } from '../types';

const article: Article = {
  description:
    'Stable Diffusion và ComfyUI giấu prompt, seed, model và cả workflow trong tệp PNG. Xem chính xác dữ liệu được lưu và xóa không mất chất lượng ngay trên trình duyệt.',
  answer:
    'Các giao diện Stable Diffusion như AUTOMATIC1111 và Forge lưu prompt, seed, sampler và model trong chunk văn bản PNG tên “parameters”, còn ComfyUI nhúng nguyên JSON “prompt” và “workflow”. Để xóa, hãy thả tệp PNG vào công cụ làm sạch metadata không nén lại ảnh — ảnh giữ nguyên từng điểm ảnh, nhưng không ai đọc hay nạp lại được thiết lập của bạn.',
  sections: [
    {
      heading: 'Stable Diffusion và ComfyUI lưu gì trong ảnh của bạn',
      paragraphs: [
        'Công cụ tạo ảnh chạy trên máy lưu thiết lập dưới dạng văn bản ngay trong tệp để có thể tạo lại ảnh sau này. Với PNG, văn bản này nằm trong các chunk tEXt, zTXt hoặc iTXt cạnh dữ liệu ảnh. Thường gặp:',
      ],
      table: {
        head: ['Công cụ', 'Vị trí', 'Nội dung'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'Chunk văn bản PNG “parameters”', 'Prompt, negative prompt, steps, sampler, CFG scale, seed, kích thước, tên và hash model, LoRA, thiết lập extension'],
          ['ComfyUI', 'Chunk văn bản PNG “prompt” và “workflow”', 'Đồ thị node đã chạy và toàn bộ bố cục editor dạng JSON'],
          ['InvokeAI, NovelAI, Fooocus và các công cụ khác', 'Khóa văn bản PNG riêng', 'Thiết lập tạo ảnh tương tự dưới tên riêng của từng công cụ'],
          ['Xuất sang JPEG hoặc WebP', 'EXIF UserComment hoặc XMP', 'Cùng chuỗi parameters, tùy công cụ'],
        ],
      },
    },
    {
      heading: 'Vì sao workflow ComfyUI đặc biệt dễ lộ',
      paragraphs: [
        'Workflow ComfyUI không chỉ là prompt — đó là toàn bộ quy trình của bạn. Ai kéo tệp PNG của bạn vào ComfyUI sẽ có ngay mọi node, model, LoRA, upscaler, ControlNet và thiết lập, sẵn sàng để chạy. Workflow còn có thể chứa đường dẫn tệp trên máy, tên thư mục hoặc tên người dùng, và các đồ thị lớn làm mỗi ảnh nặng thêm hàng chục kilobyte.',
      ],
    },
    {
      heading: 'Có nên xóa dữ liệu tạo ảnh không?',
      paragraphs: [
        'Dữ liệu tạo ảnh là một “công thức”. Xóa nó hợp lý khi bạn bán hay đăng tác phẩm hoàn chỉnh, giao ảnh cho khách hàng, hoặc đơn giản không muốn người khác sao chép đúng phong cách của mình. Cũng có lý do để giữ: các trang chia sẻ model đọc parameters để hiển thị thông tin tạo ảnh, và cộng sự có thể cần workflow.',
        'Bạn không cần đoán — báo cáo cho thấy chính xác mỗi tệp chứa gì trước khi xóa bất cứ thứ gì, nên có thể quyết định riêng cho từng ảnh.',
      ],
    },
    {
      heading: 'Cách xem prompt và workflow trong tệp PNG',
      paragraphs: [],
      steps: [
        'Thả tệp PNG vào công cụ ở đầu trang.',
        'Mở mục “AI và nguồn gốc”: các chunk được đánh dấu là “Stable Diffusion prompt” hoặc “ComfyUI workflow”.',
        'Mở “Toàn bộ metadata và chi tiết file” để đọc từng chunk văn bản kèm khóa (parameters, prompt, workflow) và giá trị đầy đủ. Chunk nén zTXt và iTXt được giải nén ngay trên trình duyệt để bạn đọc được.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Cách xóa metadata Stable Diffusion và ComfyUI',
      paragraphs: [],
      steps: [
        'Thả một tệp PNG hoặc cả loạt ảnh xuất ra vào công cụ (tối đa 50 tệp mỗi lượt).',
        'Bấm “Xóa metadata AI”. Các chunk văn bản, XMP, EXIF và C2PA bị xóa nguyên khối.',
        'Kiểm tra bảng kết quả để chắc chắn không còn trường AI, rồi tải từng tệp hoặc tải ZIP.',
      ],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'Những gì còn lại trong tệp PNG đã làm sạch',
      paragraphs: [
        'IHDR, IDAT, bảng màu, độ trong suốt, các chunk gamma và màu, cùng chunk hoạt ảnh APNG được giữ. Vì chunk bị xóa nguyên khối, mã kiểm tra của các chunk còn lại vẫn hợp lệ và tệp mở được ở mọi nơi.',
      ],
    },
    {
      heading: 'Ngừng lưu metadata vào ảnh mới',
      paragraphs: ['Nếu không bao giờ muốn dữ liệu tạo ảnh nằm trong tệp, hãy tắt ngay từ nguồn — chỉ áp dụng cho ảnh mới:'],
      bullets: [
        'ComfyUI: chạy với tùy chọn dòng lệnh --disable-metadata, hoặc dùng node lưu ảnh không nhúng workflow.',
        'AUTOMATIC1111 và Forge: trong Settings, tìm các tùy chọn lưu thông số tạo ảnh vào thông tin PNG và tắt đi.',
        'Giao diện khác: kiểm tra thiết lập lưu ảnh để tìm tùy chọn ghi prompt hoặc parameters vào tệp.',
      ],
    },
    {
      heading: 'Làm sạch không mất dữ liệu và lưu lại ảnh',
      paragraphs: [
        'Mở ảnh trong trình chỉnh sửa rồi lưu lại cũng làm mất phần văn bản, nhưng ảnh bị nén lại và có thể mất hồ sơ màu hoặc bị giảm từ 16-bit xuống 8-bit. Xóa ở mức byte giữ nguyên dữ liệu IDAT như công cụ tạo ảnh đã ghi, nên PNG đã làm sạch giống hệt bản gốc tới từng điểm ảnh.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về metadata Stable Diffusion và ComfyUI',
  faq: [
    {
      q: 'ComfyUI còn nạp được workflow từ PNG đã làm sạch không?',
      a: 'Không. Chunk “prompt” và “workflow” đã bị xóa, nên kéo tệp đã làm sạch vào ComfyUI sẽ không khôi phục đồ thị. Hãy giữ một bản gốc nếu sau này cần workflow.',
    },
    {
      q: 'Chất lượng ảnh có bị ảnh hưởng không?',
      a: 'Không. Các chunk IDAT chứa dữ liệu ảnh nén được chép nguyên, nên PNG đã làm sạch giống hệt bản gốc tới từng điểm ảnh.',
    },
    {
      q: 'Có dùng được với ảnh JPEG và WebP xuất từ Stable Diffusion không?',
      a: 'Có. Prompt lưu trong EXIF UserComment hoặc XMP cũng được phát hiện và xóa khỏi tệp JPEG và WebP.',
    },
    {
      q: 'Làm sao xem prompt của một ảnh Stable Diffusion?',
      a: 'Thả tệp PNG vào công cụ và mở “Toàn bộ metadata và chi tiết file”. Chunk “parameters” hiển thị đầy đủ prompt, negative prompt, seed và model.',
    },
    {
      q: 'Ảnh của tôi có bị tải lên máy chủ không?',
      a: 'Không. Tệp được phân tích và làm sạch ngay trên trình duyệt, nên prompt và workflow không rời khỏi thiết bị của bạn.',
    },
    {
      q: 'Có làm sạch hàng trăm ảnh cùng lúc được không?',
      a: 'Được, theo từng lượt tối đa 50 tệp. Xóa danh sách giữa các lượt và tải mỗi lượt dưới dạng ZIP.',
    },
  ],
};

export default article;
