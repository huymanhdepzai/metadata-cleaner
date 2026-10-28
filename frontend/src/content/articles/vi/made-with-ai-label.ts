import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Cách gỡ nhãn “Made with AI” / “Thông tin AI” trên Instagram',
  description:
    'Vì sao ảnh thật bị gắn nhãn “Thông tin AI” (trước là “Made with AI”) trên Instagram, Facebook, Threads, metadata nào gây ra và cách sửa nhãn gắn nhầm.',
  answer:
    'Instagram, Facebook và Threads gắn nhãn “Thông tin AI” (trước đây là “Made with AI”) khi tệp tải lên có tín hiệu AI — thường là Content Credentials (C2PA) hoặc trường IPTC DigitalSourceType do phần mềm như Photoshop ghi vào. Để sửa nhãn gắn nhầm trên ảnh thật, hãy kiểm tra tệp, xóa các trường đó khỏi một bản sao mà không nén lại ảnh, rồi đăng bản đã làm sạch.',
  sections: [
    {
      heading: 'Nhãn “Thông tin AI” có nghĩa là gì',
      paragraphs: [
        'Meta hiển thị “Thông tin AI” (AI info) trên bài đăng Instagram, Facebook và Threads khi cho rằng ảnh hoặc video được tạo hay chỉnh sửa bằng AI tạo sinh. Nhãn này tên là “Made with AI” cho tới giữa năm 2024, khi Meta đổi tên sau rất nhiều phàn nàn từ nhiếp ảnh gia rằng ảnh chỉ chỉnh sửa thông thường cũng bị gắn nhãn là ảnh AI.',
        'Hiện nay, nội dung mà Meta coi là phần lớn do AI tạo sẽ có nhãn hiển thị rõ, còn nội dung chỉ được chỉnh bằng công cụ AI thường chỉ hiện thông tin trong menu của bài đăng. Dù hiển thị ở đâu, nhãn đều đến từ cùng một nguồn: tín hiệu phát hiện trong tệp hoặc do người đăng tự khai báo.',
      ],
    },
    {
      heading: 'Meta phát hiện AI trong ảnh như thế nào',
      paragraphs: ['Meta cho biết họ dựa vào các chỉ dấu theo chuẩn ngành cùng với việc người đăng tự khai báo. Trên thực tế có ba yếu tố:'],
      bullets: [
        'Content Credentials (C2PA) — bản kê khai có chữ ký ghi tên ứng dụng tạo tệp và các thao tác đã thực hiện, ví dụ “created” hay “edited with generative fill”.',
        'IPTC DigitalSourceType trong metadata XMP — các giá trị như trainedAlgorithmicMedia (tạo hoàn toàn bằng AI) hoặc compositeWithTrainedAlgorithmicMedia (ảnh thật có phần do AI tạo).',
        'Tự khai báo — nút gắn nhãn AI khi đăng bài, Meta yêu cầu người đăng dùng cho nội dung AI trông như thật.',
      ],
      table: {
        head: ['Tín hiệu trong tệp', 'Nguồn thường gặp', 'Kết quả thường thấy'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'Công cụ tạo ảnh AI', 'Nhãn AI hiển thị rõ'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Generative Fill, Generative Expand, tẩy vật thể bằng AI', 'Nhãn “Thông tin AI”, thường trong menu'],
          ['Bản kê khai C2PA có thao tác AI', 'Photoshop, Firefly, dịch vụ AI', 'Nhãn “Thông tin AI”'],
          ['Không có trường AI, không khai báo', 'Máy ảnh, điện thoại, chỉnh sửa không dùng AI', 'Thường không có nhãn'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Vì sao ảnh thật bị gắn nhầm nhãn “Made with AI”',
      paragraphs: [
        'Phần lớn trường hợp gắn nhầm đến từ phần mềm chỉnh sửa chứ không phải máy ảnh. Các trình chỉnh sửa hiện đại ghi dữ liệu nguồn gốc ngay khi một công cụ có AI chạm vào ảnh — dù chỉ thay đổi vài điểm ảnh:',
      ],
      bullets: [
        'Xóa một vật nhỏ, nới rộng nền hay xoay thẳng đường chân trời bằng tính năng tạo sinh trong Photoshop có thể đánh dấu cả tệp là ảnh ghép có AI.',
        'Xuất ảnh khi bật Content Credentials sẽ nhúng một bản kê khai có chữ ký liệt kê mọi chỉnh sửa đã ghi lại.',
        'Một số ứng dụng thư viện ảnh trên điện thoại thêm dấu chỉnh sửa AI sau khi dùng công cụ tẩy vật thể hoặc chỉnh sửa tạo sinh.',
        'Lưu lại hay chuyển định dạng thường giữ nguyên metadata cũ, nên nhãn có thể “đi theo” ảnh qua nhiều ứng dụng.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Cách tìm đúng trường gây ra nhãn',
      paragraphs: ['Trước khi thay đổi gì, hãy xác nhận tệp thực sự chứa gì:'],
      steps: [
        'Thả đúng tệp bạn định đăng vào công cụ ở đầu trang. Mọi xử lý diễn ra trên trình duyệt nên không có gì bị tải lên.',
        'Mở mục “AI và nguồn gốc”. Mỗi tín hiệu được liệt kê kèm nguồn, ví dụ “C2PA · compositeWithTrainedAlgorithmicMedia” hoặc “XMP · Iptc4xmpExt › DigitalSourceType”.',
        'Mở “Toàn bộ metadata và chi tiết file” để xem giá trị gốc, gồm claim generator (ứng dụng đã ký bản kê khai) và các thao tác c2pa.* đã ghi lại.',
        'Nếu kết luận là “Cần kiểm tra kỹ”, tệp có Content Credentials nhưng không khai báo AI rõ ràng. Nền tảng vẫn có thể đọc bản kê khai này, nên hãy xem kỹ trước khi đăng.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Cách xóa nhãn “Thông tin AI” khỏi ảnh thật',
      paragraphs: ['Nếu nhãn mô tả sai tác phẩm của bạn, hãy xử lý nguyên nhân trong tệp thay vì đối phó với nhãn sau khi đăng:'],
      steps: [
        'Giữ lại bản xuất gốc để lưu trữ — nó có thể hữu ích làm bằng chứng về cách bạn đã chỉnh ảnh.',
        'Trong công cụ phía trên, bấm “Xóa metadata AI”. Khối C2PA, XMP, IPTC và EXIF bị cắt bỏ ở mức byte; điểm ảnh, kích thước, hướng xoay và hồ sơ màu được giữ nguyên.',
        'Xem bảng kết quả màu xanh: tệp đã làm sạch được phân tích lại để bạn xác nhận không còn trường AI hay nguồn gốc nào.',
        'Đăng bản đã làm sạch thành bài mới. Sửa bài cũ không khiến tệp được đọc lại, nên nhãn đã gắn thường vẫn còn.',
      ],
    },
    {
      heading: 'Vì sao không chụp màn hình hoặc lưu lại thành JPEG?',
      paragraphs: [
        'Chụp màn hình và các mẹo “lưu cho web” cũng làm mất metadata, nhưng chúng nén lại ảnh, giảm độ phân giải và có thể làm lệch màu — mỗi lần làm là một lần giảm chất lượng. Làm sạch ở mức byte chỉ bỏ các khối metadata và chép nguyên dữ liệu ảnh nén, nên chất lượng không đổi chút nào.',
      ],
    },
    {
      heading: 'Nếu nhãn vẫn còn sau khi làm sạch',
      paragraphs: [
        'Metadata là nguyên nhân phổ biến nhất khiến ảnh đã chỉnh sửa bị gắn nhãn, nhưng không phải nguyên nhân duy nhất. Meta còn dùng các phương pháp phát hiện khác và việc tự khai báo. Nếu ảnh đã làm sạch vẫn bị gắn nhãn, hãy kiểm tra xem nút gắn nhãn AI có đang bật khi đăng không, và dùng tính năng phản hồi của nền tảng nếu bạn cho rằng nhãn sai.',
      ],
    },
    {
      heading: 'Khi nào nên giữ nhãn',
      paragraphs: [
        'Xóa metadata giúp sửa những nhãn mô tả sai tác phẩm của bạn. Nó không thay đổi bản chất của bức ảnh. Nếu ảnh được tạo hoàn toàn hoặc phần lớn bằng AI và trông như thật, quy định của nền tảng thường yêu cầu bạn công khai, và nhãn giúp người xem hiểu họ đang thấy gì. Hãy dùng công cụ để sửa nhầm lẫn và bảo vệ quyền riêng tư — không phải để biến ảnh AI thành ảnh chụp thật.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Hỏi đáp về nhãn “Thông tin AI”',
  faq: [
    {
      q: '“Made with AI” và “Thông tin AI” có giống nhau không?',
      a: 'Có. Năm 2024 Meta đổi tên nhãn “Made with AI” thành “AI info” (Thông tin AI) và chuyển nó vào menu bài đăng với nội dung chỉ được chỉnh sửa bằng công cụ AI.',
    },
    {
      q: 'Xóa metadata có chắc chắn làm mất nhãn không?',
      a: 'Không chắc chắn. Nó xóa các tín hiệu lưu trong tệp — nguyên nhân phổ biến nhất khiến ảnh đã chỉnh sửa bị gắn nhãn. Nền tảng vẫn có thể dùng phương pháp phát hiện khác hoặc yêu cầu bạn khai báo nội dung AI.',
    },
    {
      q: 'Có xóa được nhãn khỏi bài đã đăng không?',
      a: 'Thường không thể bằng cách sửa bài. Tệp được phân tích lúc tải lên, nên cách chắc chắn là làm sạch tệp rồi đăng lại.',
    },
    {
      q: 'Ảnh có trông khác đi sau khi làm sạch không?',
      a: 'Không. Chỉ các khối metadata bị xóa; dữ liệu ảnh được chép nguyên từng byte, hướng xoay và hồ sơ màu ICC được giữ.',
    },
    {
      q: 'Có thể chỉ xóa trường AI và giữ thông tin máy ảnh không?',
      a: 'Phiên bản hiện tại xóa toàn bộ metadata nhận dạng — vị trí, máy ảnh, tác giả và nguồn gốc AI — trong một bước, đây là mặc định an toàn nhất khi chia sẻ. Kích thước, hướng xoay, màu sắc và hoạt ảnh luôn được giữ.',
    },
    {
      q: 'Cách này có áp dụng cho Facebook và Threads không?',
      a: 'Có. Instagram, Facebook và Threads dùng chung hệ thống gắn nhãn của Meta, nên cùng các trường đó sẽ gây ra nhãn trên cả ba.',
    },
  ],
};

export default article;
