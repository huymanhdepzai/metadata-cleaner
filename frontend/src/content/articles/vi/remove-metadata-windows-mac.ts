import type { Article } from '../types';

const article: Article = {
  title: 'Cách xóa metadata ảnh trên Windows và Mac',
  summary: [
    'Ảnh chép vào máy tính vẫn giữ mọi thứ máy ảnh hay điện thoại đã ghi: vị trí GPS, thời gian chụp, tên thiết bị và đôi khi cả dữ liệu nguồn gốc AI. Windows và macOS cho xem các thông tin này, nhưng tùy chọn xóa có sẵn còn nhiều giới hạn.',
    'Dưới đây là những gì File Explorer, Paint, Preview và Photos xóa được và không xóa được, vai trò của ExifTool, và cách xóa toàn bộ metadata ngay trên trình duyệt mà không làm giảm chất lượng, không cần cài đặt.',
  ],
  description:
    'Xóa metadata ảnh trên Windows 11/10 và macOS: File Explorer, Preview và Photos xóa được gì, giới hạn ra sao, và cách xóa toàn bộ không giảm chất lượng.',
  answer:
    'Trên Windows, nhấp chuột phải vào ảnh, mở Properties › Details rồi chọn “Remove Properties and Personal Information”. Trên Mac, Preview chỉ xóa được vị trí GPS, còn Photos có thể bỏ vị trí khi xuất ảnh. Cả hai đều không xóa hết, nhất là C2PA hay prompt AI. Để xóa toàn bộ metadata trên cả hai hệ điều hành mà không nén lại ảnh, hãy dùng công cụ làm sạch trên trình duyệt hoặc ExifTool.',
  sections: [
    {
      heading: 'Cách xem metadata ảnh trên Windows và Mac',
      paragraphs: ['Hãy kiểm tra tệp trước khi xóa để biết trong đó thực sự có gì.'],
      bullets: [
        'Windows: nhấp chuột phải vào ảnh › Properties › Details. Bạn sẽ thấy máy ảnh, ngày chụp, kích thước và — nếu có — vĩ độ, kinh độ GPS.',
        'Mac (Preview): mở ảnh, chọn Tools › Show Inspector rồi chọn thẻ “i”. EXIF, IPTC và GPS nằm ở các thẻ riêng.',
        'Mac (Finder): chọn tệp và nhấn ⌘I; mục “More Info” hiện tóm tắt như kích thước và thiết bị.',
        'Cả hai: trình xem có sẵn bỏ qua các khối chúng không hiểu, như C2PA Content Credentials hay đoạn prompt trong ảnh PNG do AI tạo. Công cụ xem metadata chuyên dụng sẽ hiện cả những khối này.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Xóa metadata trên Windows 11 và 10 bằng File Explorer',
      paragraphs: [],
      steps: [
        'Chọn một hoặc nhiều ảnh trong File Explorer, nhấp chuột phải và chọn Properties.',
        'Mở thẻ Details và bấm “Remove Properties and Personal Information” ở cuối.',
        'Chọn “Create a copy with all possible properties removed” để giữ bản gốc, hoặc chọn từng trường cần xóa khỏi chính tệp đó.',
        'Bấm OK, rồi mở thẻ Details của bản sao để kiểm tra những gì còn lại.',
      ],
    },
    {
      heading: 'Giới hạn của cách làm trên Windows',
      paragraphs: [
        'File Explorer chỉ sửa được những thuộc tính mà Windows biết cách ghi cho định dạng đó. Cách này hiệu quả nhất với JPEG; với PNG, HEIC và WebP thì phụ thuộc codec đã cài và thường chỉ xóa được một phần. Nó không được thiết kế để xóa manifest C2PA, các khối XMP không ánh xạ thành thuộc tính, hay đoạn prompt và workflow mà công cụ AI lưu trong tệp PNG. Lưu lại bằng Paint thì có bỏ metadata, nhưng ảnh bị mã hóa lại và có thể giảm chất lượng.',
      ],
    },
    {
      heading: 'Xóa vị trí trên Mac bằng Preview và Photos',
      paragraphs: ['macOS có hai tùy chọn sẵn, cả hai đều chỉ tập trung vào vị trí:'],
      bullets: [
        'Preview: Tools › Show Inspector › thẻ “i” › GPS, rồi bấm “Remove Location Info” và lưu tệp. Tên máy ảnh, thời gian chụp và các EXIF khác vẫn còn.',
        'Photos: chọn ảnh rồi vào Image › Location › Hide Location, hoặc dùng File › Export và bỏ chọn “Location Information”. Xuất ra JPEG sẽ nén lại ảnh, và metadata khác vẫn được giữ.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'So sánh các tùy chọn có sẵn',
      paragraphs: [],
      table: {
        head: ['Cách làm', 'Vị trí GPS', 'Máy ảnh và ngày chụp', 'C2PA và prompt AI', 'Chất lượng ảnh'],
        rows: [
          ['Windows › Remove Properties', 'Xóa (JPEG)', 'Xóa (JPEG)', 'Không hỗ trợ', 'Giữ nguyên'],
          ['Lưu lại bằng Paint', 'Thường bị xóa', 'Thường bị xóa', 'Thường bị xóa', 'Bị nén lại'],
          ['Mac Preview › Remove Location Info', 'Xóa', 'Giữ', 'Giữ', 'Giữ nguyên'],
          ['Xuất từ Mac Photos, tắt vị trí', 'Xóa', 'Giữ', 'Không chắc chắn', 'Bị nén lại (JPEG)'],
          ['Công cụ làm sạch trên trình duyệt', 'Xóa', 'Xóa', 'Xóa', 'Giữ nguyên'],
        ],
      },
    },
    {
      heading: 'Xóa toàn bộ metadata trên Windows hoặc Mac — không cần cài đặt',
      paragraphs: [
        'Công cụ trên trang này chạy trong mọi trình duyệt máy tính trên Windows, macOS hay Linux. Tệp được xử lý ngay trên máy của bạn và không bao giờ bị tải lên.',
      ],
      steps: [
        'Kéo tối đa 50 ảnh JPG, PNG, WebP, GIF, HEIC hoặc AVIF vào vùng thả ở đầu trang.',
        'Xem báo cáo: vị trí, dữ liệu cá nhân, thời gian chụp và dấu hiệu AI được liệt kê theo từng tệp.',
        'Bấm “Xóa metadata AI”. Chỉ các khối metadata bị cắt bỏ; dữ liệu ảnh được sao chép nguyên từng byte.',
        'Tải từng ảnh hoặc tải tất cả trong một tệp ZIP, và giữ lại bản gốc.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'Dùng ExifTool bằng dòng lệnh',
      paragraphs: [
        'ExifTool là chương trình dòng lệnh miễn phí cho Windows, macOS và Linux, phù hợp nhất khi cần xử lý tự động. Lệnh “exiftool -all= photo.jpg” xóa mọi metadata ghi được và giữ một bản sao lưu tên photo.jpg_original. Lưu ý lệnh này cũng xóa hồ sơ màu và thẻ hướng xoay; để giữ lại, hãy chạy “exiftool -all= -tagsfromfile @ -icc_profile -orientation photo.jpg”. Luôn kiểm tra lại kết quả bằng trình xem metadata, vì mức hỗ trợ khác nhau tùy định dạng.',
      ],
    },
  ],
  faqHeading: 'Hỏi đáp về xóa metadata trên máy tính',
  faq: [
    {
      q: '“Remove Properties and Personal Information” có xóa hết metadata không?',
      a: 'Không. Nó chỉ xóa những thuộc tính Windows sửa được cho định dạng đó, chủ yếu là EXIF trong tệp JPEG. Manifest C2PA, XMP không được hỗ trợ và đoạn văn bản trong PNG có thể vẫn còn, nên hãy kiểm tra bản sao trước khi chia sẻ.',
    },
    {
      q: 'Có xóa được toàn bộ EXIF bằng Preview trên Mac không?',
      a: 'Không. Preview chỉ xóa được vị trí GPS. Máy ảnh, ống kính, ngày chụp và các trường khác vẫn nằm trong tệp.',
    },
    {
      q: 'Xuất ảnh từ Mac Photos có xóa metadata không?',
      a: 'Chỉ một phần. Khi bỏ chọn “Location Information”, GPS không được đưa vào, nhưng thông tin máy ảnh và ngày chụp vẫn còn, và ảnh xuất ra JPEG bị nén lại.',
    },
    {
      q: 'Có cách nào xóa mà không làm giảm chất lượng ảnh không?',
      a: 'Có. File Explorer của Windows, ExifTool và công cụ trên trang này xóa metadata mà không mã hóa lại ảnh. Lưu lại bằng Paint hay xuất ra JPEG thì ảnh bị nén lại.',
    },
    {
      q: 'Có làm sạch nhiều ảnh cùng lúc trên máy tính được không?',
      a: 'Được. File Explorer nhận nhiều tệp cùng lúc, ExifTool xử lý cả thư mục, còn công cụ trên trình duyệt xử lý tối đa 50 ảnh mỗi lượt và tải về một tệp ZIP.',
    },
    {
      q: 'Ảnh có bị tải lên khi dùng công cụ trên trình duyệt không?',
      a: 'Không. Tệp được đọc và làm sạch ngay trong trình duyệt trên máy của bạn và không bao giờ được gửi tới máy chủ.',
    },
  ],
};

export default article;
