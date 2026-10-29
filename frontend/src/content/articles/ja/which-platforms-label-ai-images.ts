import type { Article } from '../types';

const article: Article = {
  title: 'AI画像にラベルを付けるSNSは？Instagram・Facebook・TikTok・YouTubeなど',
  summary: [
    '大手プラットフォームでは、画像や動画に「AI情報」などのラベルが表示されることが増えています。その多くは、ファイルに埋め込まれた業界共通の痕跡（C2PAのContent CredentialsとIPTCメタデータ）を読み取り、投稿者の申告と組み合わせて判断しています。',
    '主要プラットフォームでのラベル付けの一般的な仕組み、ラベルが付くきっかけ、そして軽く編集しただけの実際の写真にとって何を意味するのかを解説します。',
  ],
  seoTitle: 'AIラベルが付くSNSまとめ｜Instagram・TikTok・YouTube',
  description:
    'Instagram、Facebook、Threads、TikTok、YouTube、Pinterest、LinkedInがAI画像にラベルを付ける仕組みと、原因となるメタデータ、編集写真への影響を解説します。',
  answer:
    'Instagram、Facebook、Threads（「AI情報」）、TikTok、YouTube、PinterestはAIコンテンツにラベルを付け、LinkedInはContent Credentialsのアイコンを表示します。自動ラベルの多くは、アップロードされたファイル内のC2PAのContent CredentialsやIPTC DigitalSourceTypeフィールドと、投稿者の申告を組み合わせて付けられます。小さな生成編集だけでも、実際の写真にラベルが付くことがあります。',
  sections: [
    {
      heading: 'プラットフォーム別のAIラベル早見表',
      paragraphs: ['ポリシーは頻繁に変わりますが、全体像はおおむね次のとおりです。'],
      table: {
        head: ['プラットフォーム', '閲覧者に表示されるもの', '主なきっかけ'],
        rows: [
          ['Instagram、Facebook、Threads', '「AI情報」ラベル（旧「Made with AI」）', 'C2PA、IPTCメタデータ、投稿者による切り替え'],
          ['TikTok', '「AI生成」ラベル', '投稿者の申告、C2PAのContent Credentials'],
          ['YouTube', '改変・合成コンテンツのラベル', 'アップロード時の投稿者の申告'],
          ['Pinterest', 'AIによる加工のラベル', 'メタデータと独自の分類器'],
          ['LinkedIn', 'Content Credentialsの「CR」アイコン', '画像内のC2PAデータ'],
        ],
      },
    },
    {
      heading: 'プラットフォームが頼りにしている痕跡',
      paragraphs: ['自動ラベルは通常、共通する少数の痕跡によって付けられます。'],
      bullets: [
        'AI生成やAI編集を宣言するC2PAのContent Credentials。',
        'IPTC DigitalSourceTypeフィールド（trainedAlgorithmicMediaやcompositeWithTrainedAlgorithmicMediaなど）。',
        '一部のAI提供元による不可視の透かし（プラットフォームが検出ツールを持っている場合）。',
        '投稿者の自己申告 — リアルなAIコンテンツを投稿するときの切り替えやチェックボックス。',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram、Facebook、Threads（Meta）',
      paragraphs: [
        'Metaは、業界標準のAIの痕跡を検出した場合や、投稿者がAIコンテンツであることを申告した場合に「AI情報」ラベル（2024年までは「Made with AI」）を表示します。軽くレタッチしただけの写真にまでラベルが付くと写真家から苦情が寄せられた後、MetaはAIで編集したコンテンツのラベルを投稿のメニュー内に移し、大部分が生成されたコンテンツにはより目立つラベルを付けるようにしました。',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTokは、リアルなAI生成コンテンツにラベルを付けることを投稿者に義務付けており、AI生成であることを示すC2PAのContent Credentials付きでアップロードされたコンテンツには自動でラベルを付けると説明しています。また、自社のAIエフェクトで作成された一部のコンテンツにはContent Credentialsを付加しています。',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTubeは、リアルな改変・合成コンテンツをアップロードする際に投稿者に申告を求め、閲覧者にラベルを表示します。デリケートなトピックではより目立つ形で表示されます。また、逆のケースとしてC2PAにも対応しており、本物の撮影情報を持つコンテンツには「カメラで撮影」の表示が付きます。',
      ],
    },
    {
      heading: 'PinterestとLinkedIn',
      paragraphs: [
        'Pinterestは、メタデータと独自の分類器に基づいて、AI生成またはAIで加工されたと判断した画像にラベルを付けます。LinkedInは、C2PAデータを持つ画像にContent Credentialsのアイコンを表示し、閲覧者が出どころや編集内容を確認できるようにしています。',
        'どのプラットフォームもポリシーを頻繁に変更しているため、特定の動作を前提にする前に、各プラットフォームの最新のヘルプセンターを確認してください。',
      ],
    },
    {
      heading: '実際の写真にラベルが付く理由',
      paragraphs: [
        '生成ツールで物を消す、背景を広げる、スマホのAI消しゴムを使うといった、AIを使った編集を1回するだけで、メタデータ上は写真全体がAIを含む合成コンテンツとして記録されることがあります。プラットフォームはその宣言を読み取るだけで、編集の大きさまでは判断しません。',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: '投稿前に写真をチェックする方法',
      paragraphs: [],
      steps: [
        'アップロード予定のファイルそのものを、このページ上部のチェッカーにドロップします。',
        '「AIと来歴」パネルで、どのフィールドがラベルの原因になりそうかを確認します。',
        'ラベルが実態と合わない場合は、コピーからメタデータを削除し、クリーンなコピーをアップロードします。',
        '画像の大部分がAI生成なら、開示しましょう。ラベルは閲覧者に正しい情報を伝えるためにあります。',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'SNSのAIラベルに関するよくある質問',
  faq: [
    {
      q: '小さな物を消しただけなのに、なぜAIラベルが付くのですか？',
      a: '多くの編集ソフトは、生成編集をC2PAやIPTCのメタデータに「AIを含む合成」として記録します。プラットフォームはその宣言を読み取るだけで、編集の大きさまでは判断しません。',
    },
    {
      q: '投稿後もプラットフォームはメタデータを保持しますか？',
      a: 'ほとんどのプラットフォームはアップロード時にメタデータを読み取り、公開するコピーからは削除します。そのため、自分の投稿をダウンロードしても元のフィールドが残っていることはまれです。',
    },
    {
      q: 'クリーニングした画像なら、どのラベルも付きませんか？',
      a: '必ずしもそうではありません。クリーニングで消えるのはファイルに保存された痕跡ですが、プラットフォームは透かしの検出や分類器を使ったり、AIコンテンツの申告を求めたりすることもあります。',
    },
    {
      q: 'X（旧Twitter）はAI画像にラベルを付けますか？',
      a: 'Xは、メタデータに基づく自動ラベルよりも、合成・操作されたメディアに関するポリシーとコミュニティノートを主に利用しています。詳しくは最新のポリシーを確認してください。',
    },
    {
      q: 'AI画像は開示しなければなりませんか？',
      a: '多くのプラットフォームは、特に人物や実際の出来事を扱うリアルなAI生成コンテンツについて開示を求めています。ルールはそれぞれ異なるため、各プラットフォームのポリシーを確認してください。',
    },
    {
      q: '自分の画像にラベルが付くかどうか確認できますか？',
      a: 'はい。チェッカーにドロップして、C2PAやAIを示すDigitalSourceTypeが表示されれば、それらの痕跡を読み取るプラットフォームではラベルが付く可能性が高いでしょう。',
    },
  ],
};

export default article;
