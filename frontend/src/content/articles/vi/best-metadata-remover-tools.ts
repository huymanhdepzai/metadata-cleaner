import type { Article } from '../types';

const article: Article = {
  title: 'Top 8 công cụ xóa metadata ảnh tốt nhất 2026: so sánh chi tiết',
  seoTitle: 'Top công cụ xóa metadata ảnh tốt nhất 2026',
  summary: [
    'Mỗi bức ảnh có thể mang theo dữ liệu ẩn: vị trí GPS, thời gian chụp, số sê-ri thiết bị, và với ảnh AI là C2PA (Content Credentials) hoặc nguyên cả prompt. Có hàng chục công cụ hứa hẹn xóa chúng, nhưng chúng khác nhau ở chỗ xóa được những gì, có nén lại ảnh không, và ảnh có rời khỏi máy bạn không.',
    'Dưới đây là 8 công cụ xóa metadata đáng biết trong năm 2026, từ công cụ chạy trên trình duyệt, ExifTool đến các tùy chọn có sẵn trong Windows, macOS và điện thoại, kèm những gì mỗi công cụ xóa được và hạn chế của nó.',
  ],
  description:
    'So sánh các công cụ xóa metadata ảnh tốt nhất 2026: All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, điện thoại — xóa được gì và hạn chế ra sao.',
  answer:
    'Công cụ xóa metadata tốt nhất tùy vào cách bạn làm việc. Để xóa nhanh và riêng tư metadata ảnh JPG, PNG, WebP, HEIC và ảnh AI, công cụ chạy trên trình duyệt như All Metadata Cleaner xóa EXIF, GPS, C2PA và prompt mà không tải ảnh lên, không nén lại ảnh. ExifTool đầy đủ nhất khi cần chạy script, xử lý ảnh RAW hoặc chỉ xóa từng trường. Tùy chọn có sẵn trong Windows, macOS và điện thoại chủ yếu chỉ xóa vị trí.',
  sections: [
    {
      heading: 'Chúng tôi so sánh các công cụ xóa metadata như thế nào',
      paragraphs: [
        'Công khai: All Metadata Cleaner là công cụ của trang này. Nó đứng đầu danh sách vì đây là bài hướng dẫn của nó, không phải vì mọi lựa chọn khác đều kém hơn — vài công cụ bên dưới làm tốt hơn ở những việc cụ thể, và bài viết nói rõ điều đó. Mỗi công cụ được mô tả theo cách hoạt động đã được công bố, xét theo năm câu hỏi:',
      ],
      bullets: [
        'Phạm vi: chỉ xóa EXIF và GPS, hay xóa cả XMP, IPTC, C2PA (Content Credentials) và prompt AI lưu trong PNG text?',
        'Chất lượng: cắt metadata ra khỏi tệp, hay giải mã rồi nén lại ảnh?',
        'Quyền riêng tư: ảnh được xử lý ngay trên máy bạn, hay bị tải lên máy chủ?',
        'Giữ lại gì: hướng xoay và hồ sơ màu (ICC), để ảnh sau khi xóa vẫn hiển thị đúng.',
        'Công sức: phải cài đặt, gõ lệnh hay chỉ một cú nhấp — và có xử lý hàng loạt không.',
      ],
    },
    {
      heading: 'Bảng so sánh công cụ xóa metadata',
      paragraphs: [],
      table: {
        head: ['Công cụ', 'Nền tảng', 'Giá', 'C2PA và prompt AI', 'Chất lượng ảnh'],
        rows: [
          ['All Metadata Cleaner', 'Mọi trình duyệt', 'Miễn phí', 'Xóa được', 'Giữ nguyên'],
          ['ExifTool', 'Windows, macOS, Linux (dòng lệnh)', 'Miễn phí, mã nguồn mở', 'Xóa được (-all= hoặc -jumbf:all=)', 'Giữ nguyên'],
          ['ExifCleaner', 'Windows, macOS, Linux (ứng dụng)', 'Miễn phí, mã nguồn mở', 'Qua ExifTool — nên kiểm tra lại', 'Giữ nguyên'],
          ['Windows File Explorer', 'Windows', 'Có sẵn', 'Không được thiết kế cho việc này', 'Giữ nguyên'],
          ['Preview và Ảnh (Photos) trên Mac', 'macOS', 'Có sẵn', 'Không — chỉ xóa vị trí', 'Preview giữ nguyên, xuất từ app Ảnh bị nén lại'],
          ['Chia sẻ trên iPhone và Android', 'iOS, Android', 'Có sẵn', 'Không — chỉ xóa vị trí', 'Tùy ứng dụng'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (dòng lệnh)', 'Miễn phí, mã nguồn mở', 'Thường xóa được, vì tệp được ghi lại', 'Nén lại (JPEG, WebP)'],
          ['Xuất từ phần mềm chỉnh ảnh', 'Photoshop, Lightroom, GIMP', 'Trả phí hoặc miễn phí', 'Tùy thiết lập khi xuất', 'Nén lại'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner — tốt nhất để xóa nhanh và riêng tư',
      paragraphs: [
        'Công cụ web miễn phí chạy hoàn toàn trong trình duyệt: ảnh được đọc và xử lý ngay trên máy bạn, không bao giờ bị tải lên. Công cụ xóa EXIF (gồm GPS), XMP, IPTC, C2PA (Content Credentials) và prompt hoặc workflow ComfyUI mà các công cụ tạo ảnh AI lưu trong PNG text. Các khối metadata được cắt ở tầng byte nên dữ liệu ảnh được giữ nguyên, hướng xoay và hồ sơ màu ICC cũng được giữ lại để ảnh hiển thị y như trước. Ảnh HEIC và AVIF vẫn giữ nguyên định dạng.',
        'Trước khi xóa, báo cáo liệt kê mỗi tệp chứa gì — vị trí, thông tin cá nhân, thời gian chụp và dấu hiệu AI. Hạn chế: chỉ hỗ trợ JPG, PNG, WebP, GIF, HEIC và AVIF (không có RAW, video hay PDF), tối đa 25 MB mỗi ảnh và 50 ảnh mỗi lượt, và công cụ xóa mọi thông tin nhận dạng cùng lúc chứ chưa cho chọn từng trường.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool — tốt nhất cho người dùng chuyên sâu và tự động hóa',
      paragraphs: [
        'ExifTool của Phil Harvey là công cụ metadata chuẩn mực: miễn phí, mã nguồn mở và hỗ trợ nhiều định dạng hơn mọi lựa chọn khác ở đây, kể cả ảnh RAW và video. Lệnh “exiftool -all= photo.jpg” xóa mọi metadata ghi được, “-jumbf:all=” chỉ xóa khối C2PA, và bạn có thể xóa hoặc giữ từng thẻ riêng lẻ — điều mà các công cụ một cú nhấp không làm được.',
        'Đổi lại, bạn phải dùng dòng lệnh và cẩn thận với mặc định: “-all=” cũng xóa luôn hồ sơ màu và thẻ hướng xoay, trừ khi bạn chép lại bằng “-tagsfromfile @ -icc_profile -orientation”. ExifTool giữ một bản sao lưu đuôi “_original” cạnh mỗi tệp cho tới khi bạn xóa nó.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner — ứng dụng máy tính kéo thả tốt nhất',
      paragraphs: [
        'ExifCleaner là ứng dụng máy tính miễn phí, mã nguồn mở cho Windows, macOS và Linux, đặt một cửa sổ kéo thả lên trên ExifTool. Thả tệp hoặc cả thư mục vào là ứng dụng xóa metadata, không cần mạng. Phiên bản 4 phát hành năm 2026 là lần làm lại lớn đầu tiên sau 5 năm, bổ sung tùy chọn lưu thành bản sao và giữ hướng xoay. Hãy bật lưu thành bản sao nếu muốn giữ ảnh gốc, và kiểm tra lại kết quả với ảnh AI vì khả năng xóa C2PA phụ thuộc phiên bản ExifTool đi kèm.',
      ],
    },
    {
      heading: '4. Windows File Explorer — có sẵn, phù hợp nhất với JPEG',
      paragraphs: [
        'Bấm chuột phải vào ảnh › Properties › Details › “Remove Properties and Personal Information” sẽ xóa các thuộc tính Windows chỉnh được, và có thể lưu ra một bản sao sạch. Cách này xóa tốt EXIF trong tệp JPEG và chọn được nhiều tệp cùng lúc. Với PNG, HEIC và WebP thì tùy codec đã cài, và nó không được thiết kế để xóa C2PA hay prompt AI.',
      ],
    },
    {
      heading: '5. Preview và Ảnh (Photos) trên Mac — có sẵn, chỉ xóa vị trí',
      paragraphs: [
        'Preview xóa được vị trí GPS (Tools › Show Inspector › GPS › Remove Location Info) mà không ảnh hưởng chất lượng ảnh, còn app Ảnh (Photos) có thể bỏ vị trí khi xuất ảnh. Cả hai đều giữ lại thông tin máy ảnh, ngày chụp và các trường EXIF khác, và ảnh JPEG xuất từ app Ảnh bị nén lại. Đủ dùng nếu bạn chỉ lo về vị trí.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. Tùy chọn chia sẻ trên iPhone và Android — chỉ xóa vị trí',
      paragraphs: [
        'Trên iPhone, bấm Tùy chọn ở đầu bảng chia sẻ và tắt Vị trí trước khi gửi. Trên Android, Google Photos và nhiều bảng chia sẻ cho phép xóa dữ liệu vị trí khỏi bản được chia sẻ. Đây là cách dễ nhất để không lộ nơi chụp ảnh, nhưng các trường EXIF khác vẫn còn, và thiết lập khác nhau tùy ứng dụng và hãng điện thoại.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick — dùng cho script, nhưng nén lại ảnh',
      paragraphs: [
        'Lệnh “magick mogrify -strip *.jpg” xóa profile và chú thích của cả thư mục, và ImageMagick miễn phí trên mọi hệ điều hành máy tính. Khác với ExifTool, nó giải mã rồi ghi lại ảnh, nên tệp JPEG và WebP bị nén lại, và -strip còn xóa luôn hồ sơ màu ICC, có thể làm lệch màu ảnh dải màu rộng. Chỉ nên dùng khi bạn đằng nào cũng cần đổi kích thước hay chuyển định dạng, không nên dùng như một công cụ xóa metadata thuần túy.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom và GIMP — xuất ảnh không kèm metadata',
      paragraphs: [
        'Mọi phần mềm chỉnh ảnh lớn đều cho bỏ metadata khi xuất: Export As của Photoshop có thể không kèm metadata nào, Lightroom có thể chỉ giữ thông tin bản quyền, còn GIMP cho bỏ chọn EXIF và XMP khi xuất. Xuất ảnh luôn nén lại ảnh, và ứng dụng Adobe có thể gắn Content Credentials nếu thiết lập này đang bật, nên hãy kiểm tra trước.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Còn các trang xóa metadata online phải tải ảnh lên thì sao?',
      paragraphs: [
        'Nhiều trang web xóa metadata bằng cách tải tệp của bạn lên máy chủ rồi trả về một bản sao. Một số làm khá tốt, nhưng bạn đang giao bản gốc — kèm vị trí GPS và thông tin cá nhân — cho bên thứ ba, và nhiều trang nén lại ảnh. Nếu dùng, hãy đọc chính sách quyền riêng tư xem tệp được giữ bao lâu. Công cụ xử lý ngay trong trình duyệt tránh được hoàn toàn vấn đề này.',
      ],
    },
    {
      heading: 'Nên chọn công cụ xóa metadata nào?',
      paragraphs: [],
      bullets: [
        'Chia sẻ vài ảnh hoặc ảnh AI một cách riêng tư, không cần cài gì: All Metadata Cleaner.',
        'Chạy script, xử lý ảnh RAW, video hoặc chỉ xóa vài thẻ cụ thể: ExifTool.',
        'Ứng dụng máy tính kéo thả, dùng được khi không có mạng: ExifCleaner.',
        'Chỉ cần bỏ vị trí ngay trước khi gửi từ điện thoại: nút tắt vị trí trong bảng chia sẻ.',
        'Đằng nào cũng đang chỉnh hoặc đổi kích thước ảnh: xuất ảnh không kèm metadata từ phần mềm chỉnh ảnh.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Điều mà không công cụ xóa metadata nào làm được',
      paragraphs: [
        'Mọi công cụ trên đều chỉnh metadata, không chỉnh điểm ảnh. Không công cụ nào xóa được watermark vô hình nằm ngay trong ảnh như SynthID của Google, và các nền tảng vẫn có thể gắn nhãn ảnh bằng cách nhận diện riêng của họ. Xóa metadata cũng không thay đổi nghĩa vụ công khai nội dung do AI tạo ở nơi nền tảng hoặc pháp luật yêu cầu.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Câu hỏi về công cụ xóa metadata',
  faq: [
    {
      q: 'Công cụ xóa metadata miễn phí nào tốt nhất?',
      a: 'Với đa số người dùng là công cụ chạy trên trình duyệt như All Metadata Cleaner: miễn phí, không cần cài, không tải ảnh lên và không giảm chất lượng. Nếu cần chạy script, xử lý ảnh RAW hay chỉ xóa từng trường, ExifTool là lựa chọn miễn phí đầy đủ nhất.',
    },
    {
      q: 'Dùng trang xóa metadata online có an toàn không?',
      a: 'Tùy vào việc ảnh có bị tải lên hay không. Công cụ xử lý ảnh trong trình duyệt không gửi ảnh đi đâu cả. Trang phải tải ảnh lên sẽ nhận bản gốc của bạn, kèm cả vị trí, nên hãy đọc chính sách quyền riêng tư của họ.',
    },
    {
      q: 'Xóa metadata có làm giảm chất lượng ảnh không?',
      a: 'Không, nếu dùng công cụ cắt bỏ khối metadata như All Metadata Cleaner, ExifTool, ExifCleaner hay Windows File Explorer. Xuất ảnh từ phần mềm chỉnh ảnh, ImageMagick hay app Ảnh trên Mac sẽ nén lại ảnh và có thể làm giảm chất lượng.',
    },
    {
      q: 'Công cụ nào xóa được C2PA (Content Credentials)?',
      a: 'All Metadata Cleaner và ExifTool (với -all= hoặc -jumbf:all=) xóa được manifest C2PA. Tùy chọn có sẵn trong Windows, macOS và điện thoại không được thiết kế để xóa nó.',
    },
    {
      q: 'Có thể chỉ xóa vị trí GPS và giữ các metadata khác không?',
      a: 'Có, bằng ExifTool (exiftool -gps:all= photo.jpg), Preview trên Mac hoặc tùy chọn chia sẻ trên điện thoại. All Metadata Cleaner xóa mọi metadata nhận dạng cùng lúc.',
    },
    {
      q: 'Có công cụ nào xóa được watermark AI vô hình như SynthID không?',
      a: 'Không. SynthID và các watermark tương tự nằm trong điểm ảnh chứ không nằm trong metadata, nên công cụ xóa metadata không chạm tới chúng.',
    },
  ],
};

export default article;
