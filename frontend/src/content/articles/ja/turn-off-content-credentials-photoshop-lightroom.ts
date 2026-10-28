import type { Article } from '../types';

const article: Article = {
  title: 'PhotoshopとLightroomでContent Credentialsを管理する方法（書き出しファイルのクリーニングも）',
  summary: [
    'Adobeのアプリは、書き出した画像にContent Credentialsを付加できます。使用した生成AI機能を含む編集の署名付き記録です。自分の作品を証明するには便利ですが、レタッチしただけの写真にAIラベルが付く原因にもなります。',
    'PhotoshopとLightroomでContent Credentialsがどこから付くのか、書き出したファイルに含まれているかの確認方法、必要なときにコピーから削除する方法を解説します。',
  ],
  seoTitle: 'Photoshop・LightroomのContent Credentialsをオフにする方法',
  description:
    'PhotoshopとLightroomでContent Credentialsが付く仕組み、オフにする方法、書き出しファイルのC2PAを確認し、コピーから画質を落とさず削除する方法を解説します。',
  answer:
    'PhotoshopとLightroomは、Content Credentials（C2PA）を有効にしていると書き出し時に付加します。また、Adobeは生成塗りつぶしなどの生成AI機能で作成したコンテンツにもContent Credentialsを適用します。設定をオフにしても生成編集には付く場合があるため、書き出しごとに確認しましょう。不要なC2PAブロックが含まれていたら、公開前にロスレスの削除ツールでコピーから取り除きます。',
  sections: [
    {
      heading: 'AdobeのアプリでContent Credentialsが付く理由',
      paragraphs: ['書き出したファイルにContent Credentialsが付く理由は2つあります。'],
      bullets: [
        '自分でContent Credentialsを有効にしたため、書き出し時にアプリがあなたの身元情報と編集履歴を付加している。',
        '生成塗りつぶしや生成拡張などの生成AI機能を使った。Adobeは自社の生成機能で作成したコンテンツにContent Credentialsを適用し、AIで編集されたものとして記述します。',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: '投稿前に気にすべき理由',
      paragraphs: [
        'Instagram、Facebook、Threads、TikTokなどのプラットフォームは、アップロード時にContent Credentialsを読み取ります。生成編集を1回しただけの写真でも、画像の残りが本物の写真であるにもかかわらず、AIコンテンツとしてラベルが付くことがあります。',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'PhotoshopとLightroomでContent Credentialsをオフにする方法',
      paragraphs: ['AdobeはContent Credentialsを各アプリに順次展開しており、設定項目の場所はバージョンによって変わります。最近のバージョンでは次のとおりです。'],
      bullets: [
        'Photoshop: 「ウィンドウ」メニューにあるContent Credentialsパネルと、書き出しダイアログのContent Credentialsのオプションを確認します。',
        'Lightroom ClassicとLightroom: 書き出し設定にあるContent Credentialsのセクションを確認します。',
        'お使いのバージョンについてはAdobeのヘルプページを確認してください。名称や場所は変わることがあります。',
      ],
    },
    {
      heading: 'オフにするだけでは不十分な場合も',
      paragraphs: [
        'Adobeは個人の設定にかかわらず生成AIコンテンツにContent Credentialsを適用するため、生成塗りつぶしを使った書き出しファイルにはマニフェストが残っている可能性があります。設定だけに頼らず、必ず書き出したファイルを確認してください。',
      ],
    },
    {
      heading: '書き出したファイルのContent Credentialsを確認する方法',
      paragraphs: [],
      steps: [
        '書き出したJPEG、PNGなどのファイルを、このページ上部のツールにドロップします。',
        '「AIと来歴」で、C2PAブロック、claim generator（例: Adobe Photoshop）、c2pa.*アクション、AIを含む合成を示すソース種別がないか確認します。',
        'いずれかが表示された場合、Content Credentialsを読み取るプラットフォームでは画像にラベルが付く可能性があります。',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'コピーからContent Credentialsを削除する方法',
      paragraphs: [],
      steps: [
        'Content Credentials付きの元の書き出しファイルは、アーカイブとして保管しておきます。',
        'コピーをツールにドロップし、「AIメタデータを削除」をクリックします。マニフェストはバイト単位で切り取られ、ピクセル、サイズ、向き、カラープロファイルは保持されます。',
        '結果パネルでC2PAブロックが残っていないことを確認し、クライアント向けポータル、マーケットプレイス、SNS用にクリーンなファイルをダウンロードします。',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: '元のファイルは証拠として保管',
      paragraphs: [
        'Content Credentialsは、作者であることや画像の編集内容を示す貴重な証拠になり得ます。Content Credentials付きの元の書き出しファイルをアーカイブし、メタデータが誤解を招く場合や、意図した以上の情報が明らかになる場合にだけ、クリーニングしたコピーを共有しましょう。',
      ],
    },
  ],
  faqHeading: 'AdobeアプリのContent Credentialsに関するよくある質問',
  faq: [
    {
      q: 'Content Credentialsをオフにしても、生成編集は記録されますか？',
      a: '記録される場合があります。Adobeは生成AIコンテンツにContent Credentialsを適用するため、設定だけに頼らず、必ず書き出したファイルを確認してください。',
    },
    {
      q: 'Photoshopで編集した写真に、InstagramでAIラベルが付くのはなぜですか？',
      a: '生成機能は、書き出しファイルのContent CredentialsやXMPに「AIを含む合成」という宣言を記録し、Metaはアップロード時にその宣言を読み取るためです。',
    },
    {
      q: 'Content Credentialsを削除すると編集内容が元に戻りますか？',
      a: 'いいえ。削除されるのはメタデータのブロックだけで、編集後のピクセルは変更なしでコピーされます。',
    },
    {
      q: '後からContent Credentialsを付け直せますか？',
      a: 'クリーニングしたコピーには付けられませんが、元のファイルからContent Credentialsを有効にして書き出し直すことはできます。',
    },
    {
      q: '「Web用に保存」でContent Credentialsは消えますか？',
      a: 'メタデータの多くは消える場合がありますが、動作はバージョンや設定によって異なり、画像も再圧縮されます。結果を確認するか、元の書き出しファイルをロスレスでクリーニングしてください。',
    },
    {
      q: '撮影データ一式をまとめてクリーニングできますか？',
      a: 'はい。最大50枚の書き出しファイルをドロップし、ワンクリックでクリーニングしてZIPでダウンロードできます。',
    },
  ],
};

export default article;
