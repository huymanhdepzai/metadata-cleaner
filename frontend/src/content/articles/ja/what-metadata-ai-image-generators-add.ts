import type { Article } from '../types';

const article: Article = {
  title: 'AI画像生成ツールが付けるメタデータとは？DALL·E・Firefly・Midjourney・Gemini・Stable Diffusion',
  summary: [
    'ほぼすべてのAI画像生成ツールは、署名付きのContent Credentialsからプレーンテキストのプロンプトまで、出力に何らかの痕跡を残します。各ツールが何を書き込むかを知っておけば、プロンプトを守り、プラットフォームが画像にラベルを付ける理由も理解できます。',
    '以下では、人気の生成ツールで作られた画像によく見られるメタデータの概要と、自分のファイルに何が含まれているかを正確に確認する方法を紹介します。',
  ],
  seoTitle: 'AI画像生成ツールが埋め込むメタデータまとめ',
  description:
    'AI画像生成ツールが埋め込むメタデータ（C2PA、IPTC DigitalSourceType、XMP、プロンプト、ワークフロー）をツール別に解説し、確認・削除する方法も紹介します。',
  answer:
    'ChatGPTの画像生成やAdobe FireflyなどのクラウドAIサービスは署名付きのC2PAのContent Credentialsを付加し、GoogleとMetaは不可視の透かしとIPTCメタデータを追加します。MidjourneyはプロンプトとAIのソース種別を含めることがあり、Stable DiffusionやComfyUIなどのローカルツールはプロンプト、シード、モデル、ワークフローの全体をPNGのテキストとして保存します。書き込まれる内容はバージョンによって変わるため、実際のファイルを確認しましょう。',
  sections: [
    {
      heading: 'AIの痕跡は3種類',
      paragraphs: ['AIに関連するメタデータは、次の3つのグループに分けられます。'],
      bullets: [
        '署名付きの来歴 — 生成ツール名と実行された操作を記したC2PAのContent Credentials。',
        '記述的メタデータ — DigitalSourceType、CreatorTool、説明文などのIPTCやXMPのフィールド。',
        '生成データ — 主にローカルツールがテキストとして保存するプロンプト、シード、モデル、設定。',
      ],
    },
    {
      heading: 'AI生成ツール別メタデータ早見表',
      paragraphs: [],
      table: {
        head: ['生成ツール', 'C2PA', 'IPTC / XMP', 'ファイル内のプロンプト', 'ピクセルの透かし'],
        rows: [
          ['ChatGPTの画像生成、DALL·E', 'あり', '場合による', '通常なし', '場合による'],
          ['Adobe Firefly、Photoshopの生成機能', 'あり', 'あり', 'なし', '場合による'],
          ['Google Gemini、Imagen', '一部の製品', '一部の製品', 'なし', 'SynthID'],
          ['Meta AI', '場合による', 'あり（IPTC）', 'なし', 'あり'],
          ['Midjourney', '場合による', 'あり（ソース種別）', 'あることが多い', '公表なし'],
          ['Stable Diffusion、ComfyUI（ローカル）', 'なし', 'まれ', 'あり（非常に詳細）', '標準ではなし'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI（ChatGPTの画像生成とDALL·E）',
      paragraphs: [
        'OpenAIの画像生成で作られた画像には、OpenAIが生成元であることを示すC2PAのContent Credentialsが含まれており、C2PAに対応したビューアやプラットフォームで識別できます。ただし、スクリーンショットを撮ったり、マニフェストを保持しないアプリで保存し直したりすると、マニフェストは失われることがあります。',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe FireflyとPhotoshopの生成機能',
      paragraphs: [
        'Adobeは、Fireflyを使った生成機能で作成したコンテンツにContent Credentialsを付加し、AI生成またはAI編集されたコンテンツであることを記述します。そのため、生成塗りつぶしや生成拡張で編集した写真は、画像の大部分が実際の写真であっても、AIを含む合成という宣言を持つことがあります。',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google（GeminiとImagen）とMeta AI',
      paragraphs: [
        'Googleは、生成モデルで作った画像に不可視の透かしSynthIDを埋め込み、一部の製品ではメタデータでもAIコンテンツであることを示しています。Metaは、Meta AIで作られた画像には目に見えるマーク、不可視の透かし、AI生成を示すIPTCメタデータが含まれると説明しています。',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Midjourneyのダウンロード画像には、説明文やコメントのフィールドにプロンプトとジョブIDが含まれ、AI生成画像であることを示すIPTCの値も付いていることがあります。何が含まれるかは、ダウンロード形式とその時点のサービスのバージョンによって異なります。',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion、ComfyUIなどのローカルツール',
      paragraphs: [
        'ローカルツールは署名こそしませんが、最も詳細な情報を保存していることがよくあります。AUTOMATIC1111とForgeはプロンプト、シード、サンプラー、モデルを含む「parameters」テキストチャンクを書き込み、ComfyUIはpromptとworkflowのグラフ全体をJSONとして埋め込みます。これらの設定は通常オフにできますが、適用されるのは新しい画像だけです。',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: '生成ツールが追加したメタデータを確認する方法',
      paragraphs: ['生成ツールはバージョンごとに書き込む内容を変えるため、確実なのは実際のファイルを調べることです。'],
      steps: [
        'このページ上部のツールに画像をドロップします。解析はローカルで行われます。',
        '「AIと来歴」で、C2PA、ソース種別、プロンプト、ツール名を確認します。',
        '共有したくない場合は「AIメタデータを削除」をクリックし、クリーンなコピーをダウンロードします。',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'AI生成ツールのメタデータに関するよくある質問',
  faq: [
    {
      q: 'すべてのAI生成ツールがC2PAのContent Credentialsを付けますか？',
      a: 'いいえ。大手のクラウドサービスでは増えていますが、多くのツール、特にローカルツールはテキストのメタデータだけを書き込むか、何も書き込みません。',
    },
    {
      q: 'メタデータを削除すると不可視の透かしも消えますか？',
      a: 'いいえ。SynthIDなどの透かしはピクセルに埋め込まれています。メタデータを削除してもピクセルは変わりません。',
    },
    {
      q: '同じツールで作った2枚の画像でメタデータが違うのはなぜですか？',
      a: '書き出し形式、アプリのバージョン、ダウンロード元のプラットフォーム、その後の編集によって、フィールドが追加されたり削除されたりするためです。',
    },
    {
      q: 'trainedAlgorithmicMediaとはどういう意味ですか？',
      a: '生成AIモデルで作成されたメディアを示すIPTC DigitalSourceTypeの値です。compositeWithTrainedAlgorithmicMediaは、AI生成部分を含む実際の画像を意味します。',
    },
    {
      q: 'スクリーンショットにはAIのメタデータが残りますか？',
      a: '通常は残りません。スクリーンショットは元のメタデータを持たない新しい画像です。ただし、ピクセルの透かしは残る場合があります。',
    },
    {
      q: '画像はそのままで、プロンプトだけを削除できますか？',
      a: 'はい。クリーニングではメタデータのブロックを削除し、画像データは変更なしでコピーするため、プロンプトのない同一の画像になります。',
    },
  ],
};

export default article;
