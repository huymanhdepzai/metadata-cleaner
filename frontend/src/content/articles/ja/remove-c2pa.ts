import type { Article } from '../types';

const article: Article = {
  title: '画像からC2PA（Content Credentials）を削除 — 無料・アップロード不要',
  seoTitle: 'C2PA削除ツール｜Content Credentialsを無料で削除',
  summary: [
    'Photoshop、Lightroom、Firefly、ChatGPTの画像生成、一部のカメラは、どのアプリやAIモデルが画像を作成・編集したかを記録した署名付きのC2PAマニフェスト（Content Credentials）を付加します。',
    'このページのツールに画像をドロップすれば、マニフェストの内容を確認し、ワンクリックでコピーから削除できます。画像データは変更なしでコピーされ、何もアップロードされません。',
  ],
  description:
    'JPG・PNG・WebP・HEIC・AVIFからC2PA（Content Credentials）をブラウザ上で削除。先にマニフェストを確認し、画質を落とさず削除できます。無料・アップロード不要・一括対応。',
  answer:
    'C2PA（Content Credentials）を削除するには、このページのツールに画像をドロップして「AIメタデータを削除」をクリックします。C2PAマニフェスト（JPEGのAPP11、PNGのcaBX、WebPのC2PAチャンク、HEIC/AVIFのuuidボックス）がXMP、IPTC、EXIFとともに切り取られ、画像データはバイト単位でそのままコピーされます。クリーニングしたファイルは再チェックされるので、マニフェストが残っていないことを確認できます。',
  sections: [
    {
      heading: '3ステップでContent Credentialsを削除する方法',
      paragraphs: [],
      steps: [
        '上のツールに画像を1枚以上ドロップします。JPG、PNG、WebP、GIF、HEIC、AVIFに対応しています。',
        'レポートの「AIと来歴」を開き、C2PAマニフェストの有無、署名したアプリ、記録されている操作を確認します。',
        '「AIメタデータを削除」をクリックし、クリーニングしたファイルを1枚ずつ、またはZIPでダウンロードします。結果パネルでC2PAが消えたことを確認できます。',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'C2PAマニフェストの保存場所',
      paragraphs: ['マニフェストは画像データとは別の独立したブロックにあるため、再エンコードせずに削除できます。'],
      table: {
        head: ['形式', 'C2PAブロック', '同時に削除されるもの'],
        rows: [
          ['JPEG', 'APP11（JUMBF）', 'EXIF、XMP、IPTC、コメント'],
          ['PNG', 'caBXチャンク', 'テキストチャンク、eXIf、tIME'],
          ['WebP', 'C2PAチャンク', 'EXIF、XMP'],
          ['HEIC、AVIF', 'uuidボックス', 'ExifとXMPのアイテム'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Content Credentialsを削除する理由',
      paragraphs: [],
      bullets: [
        '実際の写真を生成ツールで軽くレタッチしただけなのに、不当に「AI情報」ラベルが付いてしまう。',
        '公開したくないソフトウェア名、アカウント名、編集履歴、素材ファイルがマニフェストからわかってしまう。',
        'クライアントやプラットフォームから、来歴データの付いていないプレーンな画像ファイルを求められている。',
        'そのまま共有するかどうか決める前に、画像が何を宣言しているのかを確認したい。',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'C2PAを削除してもできないこと',
      paragraphs: [
        'マニフェストを削除しても、消えるのはそのファイルのコピーに保存された記録だけです。SynthIDのようなピクセル内の不可視透かしは削除されず、フィンガープリントやオンラインのリポジトリから検証ツールが照会できる「耐久性のある（durable）」Content Credentialsにも影響しません。',
        'AI生成画像の場合、プラットフォームから開示を求められることは変わりません。各プラットフォームのルールに従ってください。メタデータを削除しても、画像の作られ方が変わるわけではありません。',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: '新しいファイルにContent Credentialsを付けない',
      paragraphs: [
        'PhotoshopとLightroomでは書き出し設定でContent Credentialsをオフにできますが、生成機能の中には設定にかかわらず付加するものもあります。AI画像サービスは通常、すべての出力に付加します。手元にあるファイルについては、ここでコピーをクリーニングするのが最も手早い方法です。後で来歴を証明する必要がありそうな場合は、元のファイルを保管しておきましょう。',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'C2PAの削除に関するよくある質問',
  faq: [
    {
      q: 'C2PAを削除すると画質は落ちますか？',
      a: 'いいえ。マニフェストは独立したブロックであり、圧縮された画像データは変更なしでコピーされます。',
    },
    {
      q: '削除する前にContent Credentialsを確認できますか？',
      a: 'はい。「AIと来歴」パネルにclaim generator、記録された操作、ソース種別が表示され、「すべてのメタデータ」にはすべてのフィールドが一覧表示されます。',
    },
    {
      q: '画像はアップロードされますか？',
      a: 'いいえ。ファイルはブラウザ内で読み込まれ、クリーニングされるため、デバイスの外に出ることはありません。',
    },
    {
      q: 'InstagramやFacebookでラベルは付きますか？',
      a: 'C2PAやIPTCのメタデータに基づくラベルは根拠を失いますが、プラットフォームが他の手がかりを使ったり、AIコンテンツの自己申告を求めたりすることはあります。',
    },
    {
      q: 'SynthIDなどの不可視透かしも削除されますか？',
      a: 'いいえ。それらはピクセルに埋め込まれており、このツールはピクセルを一切変更しません。',
    },
    {
      q: '多数の画像からまとめてC2PAを削除できますか？',
      a: 'はい。1回のバッチで最大50枚の画像をドロップし、すべてを1つのZIPファイルでダウンロードできます。',
    },
  ],
};

export default article;
