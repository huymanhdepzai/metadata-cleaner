import type { Article } from '../types';

const article: Article = {
  title: 'AI画像の見分け方 — メタデータ・C2PAなどでAI生成かを確認する方法',
  summary: [
    'その写真はAIで作られたもの？最も手早く確実な確認方法は、ファイル自体のメタデータを見ることです。C2PAのContent Credentials、IPTC DigitalSourceTypeフィールド、生成ツールのテキストには、どのツールで画像が作られたかがはっきり書かれていることがよくあります。',
    'このガイドでは、確認すべき痕跡、無料のブラウザ版チェッカーでの読み取り方、メタデータがない場合の対処法、そして「痕跡なし」という結果が画像が本物である証明にはならない理由を解説します。',
  ],
  seoTitle: 'AI画像の見分け方｜AI生成かを無料でチェックする方法',
  description:
    'AI画像の見分け方を解説。C2PAのContent Credentials、IPTC DigitalSourceType、プロンプトをブラウザで無料チェックし、それぞれの痕跡の限界も理解しましょう。',
  answer:
    '画像がAI生成かどうかを確認するには、元のファイルのメタデータを調べます。AIサービス名が記されたC2PAのContent Credentials、trainedAlgorithmicMediaというIPTC DigitalSourceType、埋め込まれたプロンプトは有力な証拠です。メタデータがない場合は、画像の逆引き検索、提供元の透かしチェッカー、画像の文脈を手がかりにします。ただし、写真が本物であることを1つのテストだけで証明することはできません。',
  sections: [
    {
      heading: 'まずは元のファイルを入手する',
      paragraphs: [
        'メタデータが残っているのは、生成ツールやカメラから出てきたファイルだけです。スクリーンショット、保存し直したコピー、SNSからダウンロードした画像は通常再エンコードされており、メタデータの大部分またはすべてが失われています。可能であれば、元のファイル、つまりアプリから書き出したものや、圧縮された写真ではなく「ファイルとして」送られたものを入手しましょう。',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'AI画像を見分けるメタデータの痕跡',
      paragraphs: ['確認する価値のある痕跡を、強いものから順に並べると次のとおりです。'],
      table: {
        head: ['痕跡', '保存場所', 'わかること'],
        rows: [
          ['AIサービスによるC2PAマニフェスト', 'APP11（JPEG）、caBX（PNG）、uuid（HEIC）', 'どのツールが画像を生成・編集したかを示す署名付きの宣言'],
          ['IPTC DigitalSourceType', 'XMPメタデータ', '宣言された出どころ（例: trainedAlgorithmicMedia）'],
          ['プロンプトとパラメータ', 'PNGテキストチャンク、EXIF UserComment', 'Stable DiffusionやComfyUIなどのローカルツールで生成されたこと'],
          ['ツール名', 'XMP CreatorTool、EXIF Software', 'ファイルを作成した、または最後に保存したアプリ'],
        ],
      },
    },
    {
      heading: '痕跡1: C2PAのContent Credentials',
      paragraphs: [
        'Content Credentialsは、C2PA規格に対応したツールが付加するデジタル署名付きの記録です。claim generatorには画像を作成したアプリやサービスの名前が、c2pa.actionsのリストには「created」「edited」などの手順が記録され、digitalSourceTypeの値でAI生成であることを明確に宣言できます。',
        '記録には署名があるため、検証ツールは署名後に画像が変更されたかどうかも判別できます。AIサービスによるマニフェストは、メタデータから得られる最も有力な証拠です。',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: '痕跡2: IPTC DigitalSourceType',
      paragraphs: ['多くの生成ツールや編集ソフトは、コンテンツの作られ方を示す標準のIPTCフィールドを書き込みます。よく見かける値は次のとおりです。'],
      bullets: [
        'trainedAlgorithmicMedia — 生成AIモデルで作成。',
        'compositeWithTrainedAlgorithmicMedia — 一部がAIで生成・置換された実際の写真（生成塗りつぶしなど）。',
        'algorithmicMedia — プロシージャルグラフィックスなど、学習データを使わないアルゴリズムで作成。',
        'digitalCapture — カメラで撮影され、生成コンテンツの宣言がないもの。',
      ],
    },
    {
      heading: '痕跡3: プロンプト、パラメータ、ツール名',
      paragraphs: [
        'Stable DiffusionやComfyUIなどのローカル生成ツールは、プロンプト、シード、モデル、ワークフローをPNGファイル内にテキストとして保存します。他のツールはXMP CreatorToolやEXIF Softwareに名前を残します。いずれもAIが関わったことの明確な証拠であり、画像がどのように作られたかを知る手がかりにもなります。',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: '数秒で画像をチェックする方法',
      paragraphs: [],
      steps: [
        'このページ上部のツールにファイルをドロップします。チェックはすべてブラウザ内で行われ、画像がアップロードされることはありません。',
        '「AIと来歴」パネルで判定を確認します。「AIの痕跡を検出」「要確認」（AIの明示的な宣言がないContent Credentials）「AIの痕跡なし」のいずれかが表示されます。',
        '一覧表示された痕跡とその出どころを確認し、生の値を見るには「すべてのメタデータとファイルの詳細」を開きます。',
      ],
    },
    {
      heading: 'メタデータがない場合はどうする？',
      paragraphs: ['メタデータがないことは、どちらの証拠にもなりません。編集アプリ、メッセージアプリ、SNSは日常的にメタデータを削除しています。ほかに使える確認方法は次のとおりです。'],
      bullets: [
        '画像の逆引き検索で、最も古いコピーと元の文脈を探す。',
        '提供元の透かしチェッカーがあれば使う（例: SynthID向けのGoogleのツール）。',
        '目視で確認する。手、文字、映り込み、繰り返しのテクスチャ、不自然な照明はよくある弱点ですが、最近のモデルはミスが減っています。',
        '文脈を確認する。最初に投稿したのは誰か、信頼できる情報源がその場面を裏付けているか、そのアカウントが普段からAIコンテンツを投稿しているか。',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'AI画像判定ツールはどこまで信頼できる？',
      paragraphs: [
        'ピクセルを解析するAI判定ツールは確率を推定するだけで、何かを証明するものではありません。結果はツールによって異なり、圧縮やリサイズの後には精度が落ち、実際の写真をAIと判定することもあります。複数ある判断材料の一つとして扱い、署名付きの来歴情報と元の文脈をより重視しましょう。',
      ],
    },
  ],
  faqHeading: 'AI画像のチェックに関するよくある質問',
  faq: [
    {
      q: '「AIの痕跡なし」なら、その写真は本物ですか？',
      a: 'いいえ。ファイルにAIのメタデータがないというだけです。メタデータは簡単に失われたり削除されたりするため、痕跡なしという結果は「不明」と捉え、本物である証明とは考えないでください。',
    },
    {
      q: 'InstagramやFacebookからダウンロードした画像もチェックできますか？',
      a: 'できますが、プラットフォームは通常、公開するコピーからメタデータを削除しているため、結果は空のことが多いです。プラットフォーム自身の「AI情報」ラベルがあれば、それは別の手がかりになります。',
    },
    {
      q: 'メタデータは偽装できますか？',
      a: '通常のEXIFやXMPのフィールドは一般的なツールで編集できます。C2PAマニフェストは署名されているため改ざんを検知でき、より信頼できる痕跡です。',
    },
    {
      q: 'ChatGPTで作られた画像かどうかを見分けるには？',
      a: 'OpenAIの画像生成で作られた画像には、OpenAIの名前が記されたC2PAのContent Credentialsが含まれています。元のファイルにまだ残っていれば、レポートの「AIと来歴」に表示されます。',
    },
    {
      q: 'MidjourneyやStable Diffusionの画像もチェックできますか？',
      a: 'はい。Midjourneyのダウンロード画像にはプロンプトとAIのソース種別が含まれることがあり、Stable DiffusionのPNGには通常「parameters」チャンクがあります。どちらもレポートで検出されます。',
    },
    {
      q: 'チェッカーは無料で、プライバシーは守られますか？',
      a: 'はい。無料でアカウントも不要です。ファイルはアップロードされず、ブラウザ内でローカルに解析されます。',
    },
  ],
};

export default article;
