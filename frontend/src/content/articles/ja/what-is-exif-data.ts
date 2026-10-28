import type { Article } from '../types';

const article: Article = {
  title: 'Exif情報とは？写真のメタデータをわかりやすく解説',
  summary: [
    'EXIF（Exchangeable Image File Format）とは、カメラやスマホがすべての写真に書き込む隠れた情報です。カメラの設定、日時、端末のモデル、そして多くの場合GPS位置情報が含まれます。',
    'このガイドでは、Exifに含まれる内容、XMP・IPTC・C2PAとの違い、プライバシーにとって重要な理由、安全に確認・削除する方法を解説します。',
  ],
  description:
    'Exif情報とは何か、含まれる項目（カメラ、日時、GPS）、XMP・IPTC・C2PAとの違い、画質を落とさずに確認・削除する方法をわかりやすく解説します。',
  answer:
    'Exif情報とは、カメラやスマホが写真の中に保存するメタデータで、端末のメーカーとモデル、露出設定、日時、向き、小さなサムネイル、そして多くの場合GPS位置情報が含まれます。画像の見た目には影響しません。スマホの写真の情報画面やメタデータビューアで確認でき、向きとカラープロファイルを保持する削除ツールを使えば安全に削除できます。',
  sections: [
    {
      heading: 'EXIFは何の略？',
      paragraphs: [
        'EXIFはExchangeable Image File Formatの略で、すべての写真に撮影時の情報を持たせるためにデジタルカメラ向けに作られた規格です。ほぼすべてのカメラとスマホが自動でExifを書き込み、ほとんどの写真アプリで読み取れます。',
      ],
    },
    {
      heading: 'Exif情報に含まれる内容',
      paragraphs: ['一般的な写真には、次のような情報が含まれることがあります。'],
      table: {
        head: ['グループ', 'フィールドの例'],
        rows: [
          ['端末', 'Make、Model、LensModel、場合によってはシリアル番号'],
          ['露出', 'ISO、FNumber（絞り）、ExposureTime（シャッタースピード）、FocalLength、Flash'],
          ['日時', 'DateTimeOriginal、DateTimeDigitized、OffsetTime'],
          ['位置情報', 'GPSLatitude、GPSLongitude、GPSAltitude、GPSImgDirection'],
          ['画像', 'Orientation、解像度、埋め込みサムネイル'],
          ['ソフトウェア', 'Software（ファイルを最後に保存したアプリ）'],
        ],
      },
    },
    {
      heading: 'Exifはファイルのどこに保存されている？',
      paragraphs: [
        'JPEGファイルでは、Exifはファイルの先頭付近にあるAPP1セグメントに格納され、ディレクトリ（IFD）ごとに整理されています。基本的な画像と端末のデータはIFD0、カメラの設定はExifディレクトリ、位置情報はGPSディレクトリ、サムネイルはIFD1です。HEIC、WebP、PNGのファイルも、それぞれのコンテナにExifを持つことができます。',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF・XMP・IPTC・C2PAの違い',
      paragraphs: ['写真には、複数の種類のメタデータが同時に含まれていることがよくあります。'],
      table: {
        head: ['規格', '書き込むもの', '主な内容'],
        rows: [
          ['EXIF', 'カメラとスマホ', '撮影の技術データ、日時、GPS'],
          ['XMP', '編集ソフト', '説明文、キーワード、編集履歴、AIのフィールド'],
          ['IPTC', '報道機関、ストックフォトサービス、編集ソフト', 'キャプション、クレジット、権利情報、DigitalSourceType'],
          ['C2PA', 'カメラ、編集ソフト、AIサービス', '署名付きのContent Credentials（来歴と編集内容）'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Exif情報がプライバシーにとって重要な理由',
      paragraphs: [
        '写真家にとって、Exifは学びの材料であり、作品の記録です。しかしそれ以外の人にとっては、主にプライバシー上のリスクです。写真1枚から、自宅の住所、使っている端末、いつどこにいたかがわかってしまうことがあります。また、Exifは簡単に編集できるため、それだけを証拠として扱うべきではありません。',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Exif情報を確認する方法',
      paragraphs: [],
      bullets: [
        'Windows: ファイルを右クリック ›「プロパティ」›「詳細」。',
        'Mac: 写真を「プレビュー」で開き ›「ツール」›「インスペクタを表示」。',
        'iPhoneとAndroid: 写真を開いて上にスワイプ。',
        'どの端末でも: このページ上部のツールに写真をドロップすれば、EXIF、XMP、IPTCのすべてのフィールドがデコードされ、出どころごとに表示されます。',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'Exif情報を安全に削除する方法',
      paragraphs: [
        'Exifを削除するときは、写真が回転しないよう向きのタグを残し、色が正確に保たれるようカラープロファイルを残し、画像を再圧縮するツールは避けましょう。このツールはこの3つを自動で行います。「AIメタデータを削除」をクリックし、結果パネルを確認して、クリーンなファイルをダウンロードするだけです。',
      ],
    },
  ],
  faqHeading: 'Exif情報に関するよくある質問',
  faq: [
    {
      q: 'Exifは画質に影響しますか？',
      a: 'いいえ。Exifは画像データとは別に保存されているため、削除しても画像の見た目は変わりません。',
    },
    {
      q: 'Exif情報は偽装できますか？',
      a: 'はい。Exifのフィールドは一般的なツールで編集できるため、有用な手がかりにはなっても、それだけでは証拠になりません。',
    },
    {
      q: '向きはExifの一部ですか？保持されますか？',
      a: 'はい、向きはExifのタグです。このツールは向きを最小限のEXIFブロックに書き戻すため、写真は正しい向きで表示され続けます。',
    },
    {
      q: 'スクリーンショットにもExif情報はありますか？',
      a: 'スクリーンショットのExifは通常わずかですが、日時、端末、作成したソフトウェアが含まれることはあります。',
    },
    {
      q: 'PNGファイルにもExifはありますか？',
      a: 'eXIfチャンクとして持つことはできますが、PNGのメタデータはテキストチャンクとして保存されることのほうが多く、AIツールがプロンプトを書き込むのもこのチャンクです。',
    },
    {
      q: 'Exif情報を削除するのは合法ですか？',
      a: '自分の写真からメタデータを削除することは、一般的に問題ありません。自分が権利を持たない画像については、ライセンスで求められている場合、著作権やクレジットの情報を削除しないでください。',
    },
  ],
};

export default article;
