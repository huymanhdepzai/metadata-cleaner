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
    cleaner: { name: 'Xóa metadata ảnh', text: 'Xóa EXIF, GPS, XMP, IPTC, C2PA và prompt AI chỉ với một cú nhấp, không giảm chất lượng.', detail: 'Thả ảnh vào, xem báo cáo rồi tải bản sạch về; điểm ảnh, hướng xoay và hồ sơ màu được giữ nguyên.' },
    'view-metadata': { name: 'Xem metadata', text: 'Xem mọi trường ẩn trong ảnh: máy ảnh, ngày giờ, GPS, XMP, C2PA và prompt AI.', detail: 'Chỉ đọc: tệp không bị thay đổi, nên an toàn để kiểm tra ảnh bạn nhận được hoặc tải về.' },
    'privacy-check': { name: 'Phân tích quyền riêng tư ảnh', text: 'Biết ảnh để lộ gì — vị trí trên bản đồ, thông tin cá nhân và thời gian chụp.', detail: 'Đánh giá mỗi ảnh ở mức rủi ro cao, trung bình hoặc thấp và hiện tọa độ GPS để mở trên bản đồ.' },
    'metadata-size': { name: 'Đo dung lượng metadata', text: 'Đo số byte metadata trong tệp và mức rủi ro của chúng.', detail: 'Liệt kê các khối metadata theo dung lượng, để biết ảnh thu nhỏ, XMP hay prompt nhúng làm tệp nặng thêm bao nhiêu.' },
    'remove-exif': { name: 'Xóa EXIF', text: 'Xóa thông tin máy ảnh, ngày giờ và số sê-ri, vẫn giữ hướng xoay và màu sắc.', detail: 'Dùng được với JPG, HEIC, PNG và WebP; thẻ hướng xoay tối thiểu được giữ lại để ảnh không bị xoay ngang.' },
    'remove-gps': { name: 'Xóa vị trí GPS', text: 'Gỡ tọa độ GPS khỏi ảnh điện thoại trước khi chia sẻ.', detail: 'Nên dùng trước khi đăng ảnh nhà, con cái hoặc nơi làm việc, hay gửi ảnh cho người lạ.' },
    'remove-c2pa': { name: 'Xóa C2PA', text: 'Gỡ manifest Content Credentials (C2PA) khỏi ảnh JPG, PNG, WebP và HEIC.', detail: 'Gỡ manifest khiến ảnh bị gắn nhãn AI; watermark ẩn trong điểm ảnh như SynthID không bị ảnh hưởng.' },
    'remove-prompts': { name: 'Xóa prompt AI', text: 'Xóa thông số Stable Diffusion và workflow ComfyUI khỏi tệp PNG.', detail: 'Giấu prompt, seed, model và sơ đồ node để người khác không sao chép được thiết lập tạo ảnh của bạn.' },
    batch: { name: 'Làm sạch hàng loạt', text: 'Làm sạch tối đa 50 ảnh cùng lúc và tải về trong một tệp ZIP.', detail: 'Mỗi tệp giữ nguyên định dạng gốc; tệp không xử lý được sẽ được liệt kê kèm lý do.' },
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
      guide: {
        sections: [
          {
            title: 'Mỗi nhóm metadata cho biết điều gì',
            text: 'Công cụ xếp các trường theo nơi chúng được lưu trong tệp. Mỗi nhóm do một chương trình khác nhau ghi vào với mục đích khác nhau, nên biết nguồn gốc sẽ giúp bạn đánh giá giá trị đó đáng tin đến đâu và nhạy cảm đến mức nào.',
            items: [
              { term: 'EXIF', text: 'Do máy ảnh hoặc điện thoại ghi: hãng và đời máy, ống kính, thông số phơi sáng, ngày giờ chụp và múi giờ. EXIF còn có thể chứa tên chủ máy, số serial thân máy và MakerNote — dữ liệu riêng của từng hãng.' },
              { term: 'EXIF · GPS', text: 'Vĩ độ và kinh độ, thường chính xác tới vài mét, kèm độ cao và đôi khi cả hướng máy ảnh khi chụp. Đây là trường mà hầu hết mọi người cần kiểm tra trước khi chia sẻ ảnh.' },
              { term: 'XMP', text: 'Do phần mềm chỉnh sửa như Lightroom hay Photoshop thêm vào: công cụ đã dùng, lịch sử chỉnh sửa, điểm đánh giá và từ khóa. Các công cụ AI cũng dùng XMP để khai báo ảnh được tạo bằng AI.' },
              { term: 'IPTC', text: 'Chú thích, tác giả, dòng ghi công và thông báo bản quyền — chủ yếu được hãng tin và trang ảnh stock sử dụng.' },
              { term: 'C2PA', text: 'Content Credentials: bản kê khai có chữ ký số, ghi lại ứng dụng hoặc mô hình AI nào đã tạo ảnh và những chỉnh sửa đã thực hiện. Các nền tảng đọc phần này để gắn nhãn “Thông tin AI”.' },
              { term: 'PNG text', text: 'Các chunk văn bản tự do. Stable Diffusion lưu prompt, seed và model ở đây; ComfyUI lưu toàn bộ workflow các node dưới dạng JSON.' },
              { term: 'ICC', text: 'Hồ sơ màu. Không chứa dữ liệu cá nhân và cần thiết để hiển thị màu đúng.' },
            ],
          },
          {
            title: 'Cách đọc báo cáo',
            text: 'Mỗi tệp mở ra với phần tóm tắt quyền riêng tư, liệt kê các trường vị trí, cá nhân và thời gian tìm thấy. Bên dưới, mục AI đưa ra một trong ba kết luận: “Phát hiện dấu hiệu AI” khi metadata nêu tên công cụ AI, chứa prompt hoặc khai báo ảnh do AI tạo; “Cần kiểm tra kỹ” khi có Content Credentials nhưng không ghi rõ là AI; và “Không thấy dấu hiệu AI” khi không tìm thấy gì. Bảng đầy đủ nằm cuối cùng. Hãy dùng ô tìm kiếm để đi thẳng tới phần quan trọng — gõ “GPS”, “Serial”, “Software” hoặc “prompt” thường nhanh hơn nhiều so với cuộn qua cả trăm trường.',
          },
          {
            title: 'Khi nào nên xem metadata',
            text: 'Hãy xem bên trong ảnh trước khi đăng công khai hoặc gửi cho người lạ, khi người bán trên chợ online hay ai đó bạn không quen gửi ảnh cho bạn, khi nền tảng gắn nhãn AI cho ảnh thật của bạn và bạn muốn biết vì sao, và sau khi làm sạch để chắc chắn không còn sót gì — chỉ cần thả bản đã làm sạch vào công cụ. Lưu ý rằng ai cũng có thể sửa hoặc xóa metadata, nên đây là manh mối chứ không phải bằng chứng.',
          },
        ],
        faq: [
          {
            q: 'Metadata có chứng minh được ảnh chụp lúc nào, ở đâu không?',
            a: 'Tự nó thì không. Ngày giờ và GPS trong EXIF có thể bị sửa bằng công cụ miễn phí. Bản kê khai C2PA có chữ ký nên khó giả mạo hơn, nhưng lại rất dễ bị xóa, nên việc không có C2PA cũng không chứng minh được điều gì.',
          },
          {
            q: 'Vì sao ảnh của tôi gần như không có metadata?',
            a: 'Hầu hết mạng xã hội và ứng dụng nhắn tin xóa EXIF khi bạn tải ảnh lên, còn ảnh chụp màn hình vốn không có dữ liệu máy ảnh. Ảnh tải về từ các nền tảng đó thường đã bị xóa metadata.',
          },
          {
            q: 'Tôi có thể xem những định dạng nào?',
            a: 'Ảnh JPG, PNG, WebP và HEIC/HEIF, kể cả ảnh chụp bằng iPhone. Bạn có thể thả nhiều tệp cùng lúc và mở báo cáo của từng tệp.',
          },
        ],
      },
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
      guide: {
        sections: [
          {
            title: 'Công cụ kiểm tra những gì',
            text: 'Công cụ chia metadata tìm thấy thành bốn loại thông tin bị lộ. Mỗi loại trả lời một câu hỏi khác nhau mà người khác có thể đặt ra về bạn chỉ từ một tệp ảnh.',
            items: [
              { term: 'Vị trí', text: 'Vĩ độ, kinh độ và độ cao GPS. Ảnh chụp bằng điện thoại ở nhà có thể chỉ thẳng tới cửa nhà bạn, vì vậy chỉ cần có vị trí là kết quả sẽ ở mức rủi ro cao.' },
              { term: 'Cá nhân & thiết bị', text: 'Hãng và đời máy, trường tác giả và bản quyền, tên chủ máy, số serial thân máy, mã định danh ảnh, bình luận và dữ liệu MakerNote của hãng. Số serial có thể liên kết những ảnh bạn đăng ở các tài khoản khác nhau với cùng một máy ảnh.' },
              { term: 'Thời gian', text: 'Ngày giờ chụp gốc, phần lẻ của giây và múi giờ. Gộp lại, chúng cho biết bạn ở đâu đó vào lúc nào và đại khái bạn sống ở khu vực nào trên thế giới.' },
              { term: 'AI & nguồn gốc', text: 'Content Credentials, tên công cụ AI và prompt tạo ảnh. Chúng không phải dữ liệu cá nhân theo nghĩa thông thường, nhưng cho biết ảnh được tạo ra thế nào và có thể khiến ảnh bị gắn nhãn AI.' },
            ],
          },
          {
            title: 'Nên làm gì với từng mức rủi ro',
            text: 'Cao: ảnh có vị trí — hãy xóa trước khi chia sẻ ở bất kỳ nơi công khai nào, và mở bản đồ trước nếu muốn xem vị trí chính xác đến đâu. Trung bình: không có vị trí nhưng tệp mang dữ liệu thiết bị, cá nhân, thời gian hoặc AI — gửi bạn bè thì không sao, nhưng nên làm sạch trước khi đăng công khai hoặc gửi người lạ. Thấp: không tìm thấy metadata nhạy cảm, nên bản thân tệp không làm lộ bạn; tuy vậy nội dung bức ảnh vẫn có thể.',
          },
          {
            title: 'Metadata vẫn còn khi chia sẻ qua đâu',
            text: 'Nhiều mạng xã hội lớn xóa GPS khi bạn đăng ảnh, nhưng rất nhiều kênh thì không: tệp đính kèm email, lưu trữ đám mây và link chia sẻ tệp, AirDrop và Nearby Share, ảnh gửi “dạng tệp” hoặc “dạng tài liệu” trong ứng dụng chat, diễn đàn và các website nhỏ. Khi không chắc ảnh sẽ được truyền đi thế nào, hãy kiểm tra ở đây và làm sạch trước khi ảnh rời khỏi thiết bị.',
          },
        ],
        faq: [
          {
            q: 'Làm sao để điện thoại không gắn vị trí vào ảnh?',
            a: 'Trên iPhone, vào Cài đặt → Quyền riêng tư & Bảo mật → Dịch vụ định vị → Camera và chọn Không bao giờ. Trên Android, mở phần cài đặt của ứng dụng camera và tắt gắn thẻ vị trí (tên mục khác nhau tùy hãng). Ảnh đã chụp trước đó vẫn giữ vị trí cho tới khi bạn xóa.',
          },
          {
            q: 'Kết quả rủi ro thấp có nghĩa là ảnh an toàn để chia sẻ?',
            a: 'Nó có nghĩa là metadata đã sạch. Khuôn mặt, số nhà, biển số xe, giấy tờ trên bàn hay hình phản chiếu trên cửa kính vẫn có thể tiết lộ nhiều hơn bạn muốn, nên hãy xem qua cả nội dung bức ảnh.',
          },
          {
            q: 'Tôi có thể kiểm tra ảnh người khác gửi cho mình không?',
            a: 'Có. Công cụ chỉ đọc tệp, nên đây là cách nhanh để biết ảnh nhận được còn vị trí hay dữ liệu thiết bị không — ví dụ trước khi bạn chuyển tiếp cho người khác.',
          },
        ],
      },
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
      guide: {
        sections: [
          {
            title: 'Thứ gì thường chiếm dung lượng',
            text: 'Dung lượng metadata chênh lệch nhiều hơn hầu hết mọi người nghĩ. Một khối EXIF thông thường rất nhỏ, trong khi một ảnh xem trước hay một workflow nhúng có thể còn lớn hơn cả phần ảnh của một hình nhỏ trên web. Đây là các khối công cụ thường tìm thấy, từ nhỏ đến lớn:',
            items: [
              { term: 'Hồ sơ màu ICC', text: 'Từ vài trăm byte đến vài kilobyte. Được đánh dấu là giữ lại, vì màu sắc phụ thuộc vào nó.' },
              { term: 'EXIF', text: 'Thường vài kilobyte gồm thông số máy, ngày giờ và GPS, cộng thêm ảnh thu nhỏ EXIF thường nặng thêm 5–20 KB.' },
              { term: 'XMP', text: 'Dưới một kilobyte với tệp đơn giản, nhưng Photoshop và Lightroom có thể ghi lịch sử chỉnh sửa và danh sách tài liệu gốc lên tới hàng trăm kilobyte.' },
              { term: 'Bản kê khai C2PA', text: 'Thường vài chục kilobyte: chứng chỉ, chữ ký và đôi khi cả ảnh thu nhỏ của các ảnh nguồn.' },
              { term: 'Prompt & workflow PNG', text: 'Thông số Stable Diffusion chỉ chiếm một hai kilobyte; một workflow ComfyUI nhiều node có thể lên tới hàng chục hoặc hàng trăm kilobyte.' },
              { term: 'Dữ liệu sau phần ảnh', text: 'Một số điện thoại gắn thêm dữ liệu vào cuối tệp JPG: ảnh phụ MPF, ảnh xem trước lớn hơn hoặc đoạn video ngắn của Motion Photo, có thể thêm vài megabyte.' },
            ],
          },
          {
            title: 'Vì sao dung lượng metadata quan trọng',
            text: 'Trên website, mỗi kilobyte được nhân với mọi lượt truy cập và mọi ảnh trên trang, nên bỏ vài chục kilobyte mỗi ảnh sẽ cộng lại thành con số đáng kể — và khác với nén lại, cách này không làm giảm chất lượng. Dung lượng cũng là gợi ý về quyền riêng tư: những khối lớn nhất thường là khối để lộ nhiều nhất, như toàn bộ lịch sử chỉnh sửa, workflow tạo ảnh hay một ảnh ẩn thứ hai. Với kho lưu trữ hàng nghìn ảnh, phần tiết kiệm còn thấy rõ ở dung lượng lưu trữ.',
          },
          {
            title: 'Cách đọc kết quả',
            text: 'Dòng đầu hiện tổng metadata sẽ bị xóa và tỉ lệ so với cả tệp; thanh bên dưới giúp bạn thấy tỉ lệ đó ngay. Sau đó từng khối được liệt kê từ lớn đến nhỏ kèm thanh riêng, nên khối bất thường nổi bật ngay lập tức. Hồ sơ màu hiện màu xanh lá với ghi chú giữ lại và không được tính vào tổng. Với ảnh chụp từ máy ảnh dung lượng lớn, tỉ lệ vài phần trăm là bình thường, còn ảnh PNG nhỏ và ảnh AI thường cao hơn nhiều.',
          },
        ],
        faq: [
          {
            q: 'Tệp của tôi sẽ nhỏ đi bao nhiêu?',
            a: 'Xấp xỉ bằng tổng metadata hiển thị. Công cụ làm sạch xóa các khối đó và sao chép nguyên dữ liệu ảnh, nên tệp sạch có dung lượng bằng tệp gốc trừ đi phần metadata đã xóa.',
          },
          {
            q: 'Xóa metadata có thay được việc nén ảnh không?',
            a: 'Không. Nó chỉ bỏ những gì không thuộc về bức ảnh. Muốn ảnh nhỏ đi nhiều, bạn vẫn cần thu nhỏ kích thước hoặc nén lại, việc này làm thay đổi điểm ảnh; xóa metadata là bước miễn phí nên làm trước mà không mất chút chất lượng nào.',
          },
          {
            q: 'Vì sao ảnh AI nhỏ lại có tỉ lệ metadata cao?',
            a: 'Công cụ tạo ảnh và phần mềm chỉnh sửa gắn cùng một lượng prompt, workflow hoặc Content Credentials bất kể kích thước ảnh, nên với tệp nhỏ chúng có thể chiếm phần lớn tổng số byte.',
          },
        ],
      },
    },
  },
};

export default tools;
