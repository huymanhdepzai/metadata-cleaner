import type { Article } from '../types';

const article: Article = {
  description:
    'C2PA（Content Credentials）とは何かをわかりやすく解説。署名付きマニフェストの中身、JPEG・PNG・WebP・HEICでの保存場所、確認方法と削除方法まで。',
  answer:
    'C2PAとは、メディアファイルに署名付きで改ざんを検知できる来歴情報を付けるためのオープン規格で、一般向けには「Content Credentials」と呼ばれます。C2PAマニフェストには、どのアプリやAIモデルが画像を作成・編集したかが記録されます。ファイル内の独立したブロックとして保存されるため、画像データに触れずに中身を確認したり、コピーから削除したりできます。',
  sections: [
    {
      heading: 'C2PAとContent Credentialsとは',
      paragraphs: [
        'C2PA（Coalition for Content Provenance and Authenticity）は、Adobe、Microsoft、Google、OpenAI、カメラメーカー、報道機関などが参加する業界団体で、コンテンツの来歴に関するオープンな技術規格を公開しています。「Content Credentials」はアプリやWebサイトで使われる親しみやすい名称で、小さな「CR」アイコンで表示されることがよくあります。',
        'カメラ、編集ソフト、AI生成ツールは、画像がどのように作られたか（カメラで撮影された、アプリで編集された、モデルで生成された）を記した署名付きの記録を追加でき、検証ツールは後から、署名後にファイルが変更されたかどうかを確認できます。',
      ],
    },
    {
      heading: 'C2PAマニフェストの中身',
      paragraphs: ['マニフェストは小さな構造化パッケージで、主に3つの要素で構成されます。'],
      bullets: [
        'Claim generator — マニフェストを作成したアプリやサービス（編集ソフトやAI画像サービスなど）。',
        'Assertions — コンテンツに関する記述。c2pa.actions（created、edited、opened、resizedなど）、AI生成を宣言できるdigitalSourceType、サムネイル、編集に使われた「素材（ingredient）」ファイルへの参照など。',
        '署名 — 署名者を特定する証明書付きの暗号署名と、マニフェストを特定の画像データに結び付けるハッシュ。',
      ],
    },
    {
      heading: '形式ごとのContent Credentialsの保存場所',
      paragraphs: ['マニフェストはJUMBFコンテナに包まれ、形式ごとに専用の格納場所があります。'],
      table: {
        head: ['形式', 'マニフェストの保存場所'],
        rows: [
          ['JPEG', 'APP11セグメント'],
          ['PNG', 'caBXチャンク'],
          ['WebP', 'RIFFコンテナ内の専用C2PAチャンク'],
          ['HEIC、HEIF、AVIF', 'uuidボックス'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: '現在Content Credentialsを付けているのは誰か',
      paragraphs: ['導入は急速に広がっています。主な発生元は次のとおりです。'],
      bullets: [
        'OpenAIの画像生成やAdobe FireflyなどのAI画像サービス。出力をAI生成としてマークします。',
        'PhotoshopやLightroomなどの編集アプリ。Content Credentialsを有効にした場合や、生成機能を使った場合に付きます。',
        '一部のカメラやスマートフォン。撮影時に写真に署名し、実在の機器で撮られたことを証明します。',
        'Content Credentialsを保持・表示するプラットフォームや報道機関（「CR」バッジなど）。',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: '画像のContent Credentialsを確認する方法',
      paragraphs: [],
      steps: [
        'このページ上部のツールにファイルをドロップします。',
        '「AIと来歴」パネルに、C2PAブロックの有無、claim generator、記録された操作、ソース種別が表示されます。',
        '署名を暗号的に完全に検証したい場合は、公式のContent Credentials検証ツールも併用してください。',
      ],
    },
    {
      heading: 'C2PA（Content Credentials）を削除する方法',
      paragraphs: [
        '上のツールで「AIメタデータを削除」をクリックします。C2PAブロックはXMP、IPTC、EXIFとともにバイト単位で切り取られ、画像データは変更なしでコピーされます。HEICとAVIFはファイル構造が有効なまま保たれるよう、その場でクリーニングされます。クリーニングしたファイルは再解析されるので、マニフェストが残っていないことを確認できます。',
      ],
    },
    {
      heading: 'マニフェストを削除するとどうなるか（どうならないか）',
      paragraphs: [
        '埋め込まれたマニフェストを削除すると、そのファイルのコピーから来歴の記録が消えます。そもそも何らかの編集を加えた時点で暗号的な結び付きは壊れ、画像と一致しなくなったマニフェストは検証ツールで無効と表示されます。つまり削除とは、本来ファイルとともに受け渡されるはずだった記録を取り除くことにすぎません。',
        '一部のシステムは「耐久性のある（durable）」Content Credentialsを使っています。これは不可視の透かしやフィンガープリントで、埋め込みのコピーが消えた後でも、検証ツールがオンラインのリポジトリからマニフェストを照会できるようにするものです。これらはピクセルやリモートのデータベースにあるため、メタデータのクリーニングでは影響を受けません。',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Content Credentialsは残すべき？削除すべき？',
      paragraphs: [
        '報道写真やオリジナルの写真作品、クライアントから来歴を求められた場合など、画像の出どころを証明したいときは残しておきましょう。公開したくないソフトウェア名、編集履歴、個人を特定できる情報が含まれている場合や、軽く編集しただけの写真にAIラベルが付いてしまう場合は、共有用のコピーから削除することを検討してください。まず中身を確認し、画像ごとに判断するのがおすすめです。',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'C2PA・Content Credentialsに関するよくある質問',
  faq: [
    {
      q: 'C2PAは何の略ですか？',
      a: 'Coalition for Content Provenance and Authenticityの略です。Content Credentialsの基盤となるオープン規格を管理している業界団体です。',
    },
    {
      q: 'C2PAと不可視の透かしは同じものですか？',
      a: 'いいえ。C2PAは画像データとは別に保存されるメタデータです。SynthIDなどの不可視透かしはピクセルに埋め込まれており、メタデータを削除しても影響を受けません。',
    },
    {
      q: 'Content Credentialsは偽造できますか？',
      a: 'マニフェストは署名されているため、改ざんは検証ツールで検知できます。ただし、マニフェストがないことは何の証明にもならず、有効な署名も誰が署名したかを示すだけで、内容が真実であることを示すものではありません。',
    },
    {
      q: '削除する前にマニフェストを検証するには？',
      a: 'レポートにはclaim generator、操作、ソース種別が表示されます。署名を完全に検証したい場合は、ファイルをクリーニングする前に公式のContent Credentials検証ツールを使ってください。',
    },
    {
      q: 'C2PAを削除すると画質は落ちますか？',
      a: 'いいえ。マニフェストは独立したブロックであり、圧縮された画像データは変更なしでコピーされます。',
    },
    {
      q: 'SNSはContent Credentialsを残しますか？',
      a: 'アップロード時に読み取ってラベル付けに使い、公開するコピーからは削除するところもあれば、表示するところも一部あります。動作はプラットフォームによって異なり、時期によっても変わります。',
    },
  ],
};

export default article;
