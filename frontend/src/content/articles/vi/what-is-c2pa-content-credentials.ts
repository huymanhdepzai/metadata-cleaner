import type { Article } from '../types';

const article: Article = {
  description:
    'Giải thích C2PA và Content Credentials: bản kê khai có chữ ký chứa gì, nằm ở đâu trong JPEG, PNG, WebP, HEIC, cách kiểm tra và cách xóa khỏi ảnh.',
  answer:
    'C2PA là chuẩn mở để gắn một lịch sử có chữ ký, chống giả mạo vào tệp đa phương tiện; tên thân thiện với người dùng là Content Credentials. Bản kê khai C2PA ghi lại ứng dụng hay model AI nào đã tạo hoặc chỉnh sửa ảnh. Nó nằm trong một khối riêng của tệp, nên bạn có thể kiểm tra — và xóa khỏi bản sao — mà không đụng tới dữ liệu ảnh.',
  sections: [
    {
      heading: 'C2PA và Content Credentials là gì',
      paragraphs: [
        'Liên minh Nguồn gốc và Xác thực Nội dung (Coalition for Content Provenance and Authenticity — C2PA) là một nhóm ngành có các thành viên như Adobe, Microsoft, Google, OpenAI, các hãng máy ảnh và tổ chức tin tức. Nhóm này công bố một chuẩn kỹ thuật mở về nguồn gốc nội dung. “Content Credentials” là tên thân thiện dùng trong ứng dụng và trên website, thường hiển thị bằng biểu tượng “CR” nhỏ.',
        'Máy ảnh, phần mềm chỉnh sửa và công cụ tạo ảnh AI có thể thêm một bản ghi có chữ ký mô tả cách ảnh được tạo ra — chụp bằng máy ảnh, chỉnh trong ứng dụng hay tạo bởi model — và trình xác minh sau đó kiểm tra được tệp có bị thay đổi sau khi ký hay không.',
      ],
    },
    {
      heading: 'Bên trong bản kê khai C2PA có gì',
      paragraphs: ['Bản kê khai (manifest) là một gói dữ liệu nhỏ, có cấu trúc, gồm ba phần chính:'],
      bullets: [
        'Claim generator — ứng dụng hoặc dịch vụ đã tạo bản kê khai, ví dụ một trình chỉnh sửa hoặc dịch vụ tạo ảnh AI.',
        'Assertion — các khẳng định về nội dung, như c2pa.actions (created, edited, opened, resized…), digitalSourceType có thể khai báo ảnh do AI tạo, ảnh thu nhỏ và tham chiếu tới các tệp “thành phần” dùng khi chỉnh sửa.',
        'Chữ ký — chữ ký số kèm chứng chỉ xác định người ký, cùng một mã băm gắn bản kê khai với chính xác dữ liệu ảnh.',
      ],
    },
    {
      heading: 'Content Credentials nằm ở đâu trong từng định dạng',
      paragraphs: ['Bản kê khai được bọc trong vùng chứa JUMBF, và mỗi định dạng có một vị trí riêng:'],
      table: {
        head: ['Định dạng', 'Vị trí bản kê khai'],
        rows: [
          ['JPEG', 'Các đoạn APP11'],
          ['PNG', 'Chunk caBX'],
          ['WebP', 'Một chunk C2PA riêng trong vùng chứa RIFF'],
          ['HEIC, HEIF, AVIF', 'Một hộp uuid'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: 'Ai đang thêm Content Credentials',
      paragraphs: ['Mức độ áp dụng đang tăng nhanh. Các nguồn thường gặp:'],
      bullets: [
        'Dịch vụ tạo ảnh AI, như tính năng tạo ảnh của OpenAI và Adobe Firefly, đánh dấu ảnh đầu ra là do AI tạo.',
        'Ứng dụng chỉnh sửa như Photoshop và Lightroom, khi bạn bật Content Credentials hoặc khi dùng tính năng tạo sinh.',
        'Một số máy ảnh và điện thoại ký ảnh ngay lúc chụp để chứng minh ảnh đến từ thiết bị thật.',
        'Nền tảng và tòa soạn giữ lại hoặc hiển thị thông tin này, ví dụ bằng huy hiệu “CR”.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Cách xem Content Credentials của một bức ảnh',
      paragraphs: [],
      steps: [
        'Thả tệp vào công cụ ở đầu trang.',
        'Mục “AI và nguồn gốc” cho biết có khối C2PA hay không, cùng claim generator, các thao tác đã ghi và loại nguồn.',
        'Để xác minh đầy đủ chữ ký số, hãy dùng thêm công cụ kiểm tra Content Credentials chính thức.',
      ],
    },
    {
      heading: 'Cách xóa Content Credentials (C2PA)',
      paragraphs: [
        'Bấm “Xóa metadata AI” trong công cụ phía trên. Khối C2PA bị cắt bỏ ở mức byte — cùng với XMP, IPTC và EXIF — còn dữ liệu ảnh được chép nguyên. Tệp HEIC và AVIF được làm sạch tại chỗ để cấu trúc tệp vẫn hợp lệ. Tệp đã làm sạch được phân tích lại để bạn xác nhận không còn bản kê khai nào.',
      ],
    },
    {
      heading: 'Xóa bản kê khai làm được gì — và không làm được gì',
      paragraphs: [
        'Xóa bản kê khai nhúng trong tệp sẽ xóa bản ghi nguồn gốc khỏi bản sao đó. Mọi chỉnh sửa vốn đã phá vỡ liên kết mật mã — trình xác minh báo bản kê khai không còn khớp với ảnh là không hợp lệ — nên việc xóa chỉ bỏ đi một bản ghi lẽ ra sẽ đi theo tệp.',
        'Một số hệ thống dùng Content Credentials “bền vững”: thủy ấn vô hình hoặc dấu vân tay giúp trình xác minh tra lại bản kê khai từ kho lưu trữ trực tuyến, kể cả khi bản nhúng đã mất. Làm sạch metadata không ảnh hưởng tới các cơ chế đó, vì chúng nằm trong điểm ảnh hoặc trong cơ sở dữ liệu từ xa.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Nên giữ hay xóa Content Credentials?',
      paragraphs: [
        'Hãy giữ khi bạn muốn chứng minh nguồn gốc ảnh — trong báo chí, với ảnh chụp gốc của mình, hoặc khi khách hàng yêu cầu. Cân nhắc xóa khỏi bản chia sẻ khi nó làm lộ phần mềm, lịch sử chỉnh sửa hay danh tính mà bạn không muốn công khai, hoặc khi nó khiến ảnh chỉ chỉnh nhẹ bị gắn nhãn AI. Hãy kiểm tra trước, rồi quyết định cho từng ảnh.',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'Hỏi đáp về C2PA và Content Credentials',
  faq: [
    {
      q: 'C2PA là viết tắt của gì?',
      a: 'Coalition for Content Provenance and Authenticity — nhóm ngành duy trì chuẩn mở đứng sau Content Credentials.',
    },
    {
      q: 'C2PA có giống thủy ấn vô hình không?',
      a: 'Không. C2PA là metadata nằm cạnh dữ liệu ảnh. Thủy ấn vô hình như SynthID được nhúng trong điểm ảnh và không bị ảnh hưởng khi xóa metadata.',
    },
    {
      q: 'Content Credentials có làm giả được không?',
      a: 'Bản kê khai có chữ ký nên trình xác minh phát hiện được nếu bị sửa. Nhưng không có bản kê khai thì không chứng minh được gì, và chữ ký hợp lệ chỉ cho biết ai đã ký — không phải nội dung là thật.',
    },
    {
      q: 'Làm sao xác minh bản kê khai trước khi xóa?',
      a: 'Báo cáo liệt kê claim generator, các thao tác và loại nguồn. Để kiểm tra đầy đủ chữ ký, hãy dùng công cụ xác minh Content Credentials chính thức trước khi làm sạch tệp.',
    },
    {
      q: 'Xóa C2PA có làm giảm chất lượng ảnh không?',
      a: 'Không. Bản kê khai là một khối riêng; dữ liệu ảnh nén được chép nguyên.',
    },
    {
      q: 'Mạng xã hội có giữ Content Credentials không?',
      a: 'Một số đọc nó lúc tải lên để gắn nhãn rồi xóa khỏi bản đăng; một số khác hiển thị nó. Cách xử lý khác nhau theo nền tảng và thay đổi theo thời gian.',
    },
  ],
};

export default article;
