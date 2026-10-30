import type { GuidesHubContent } from './types';

const ja: GuidesHubContent = {
  more: '初めての方は、写真メタデータの基本がわかる「Exif情報とは？」から、AI で生成・編集した画像を扱う方は「C2PAとは？」から読むのがおすすめです。ガイドは目的別に分かれています。ファイル形式ごとの削除、AI ラベルへの対処、AI プロンプトの非公開化、位置情報とプライバシーの保護です。',
  groups: {
    formats: {
      title: 'ファイル形式・端末別のメタデータ削除',
      text: 'メタデータの保存場所は形式ごとに異なります。JPEG はマーカーセグメント、PNG はテキストチャンク、HEIC と WebP はボックスや RIFF チャンクに格納されます。各形式に何が保存され、何を安全に削除できるか、Windows・macOS・iPhone・Android で 1 枚ずつ、または一括で消す方法を解説します。',
    },
    'ai-labels': {
      title: 'AI ラベルとコンテンツ認証情報（C2PA）',
      text: 'Facebook、Instagram、TikTok、YouTube は C2PA マニフェストと IPTC フィールドを読み取り、AI ラベルを表示するかを判断します。コンテンツ認証情報の仕組み、実写がラベル付けされてしまう理由、画像を自分で確認する方法、そして SynthID のような不可視透かしに対してメタデータ削除ができること・できないことを紹介します。',
    },
    'ai-prompts': {
      title: 'AI 画像生成ツールのメタデータとプロンプト',
      text: 'ChatGPT、DALL·E、Midjourney、Stable Diffusion、ComfyUI は、生成したファイルにそれぞれ異なる痕跡を残します。署名付きの C2PA 記録から、プロンプト・シード・ワークフローの全文までさまざまです。各ツールが何を残すのか、それを含めずに画像を共有する方法を確認できます。',
    },
    privacy: {
      title: 'EXIF・GPS と写真のプライバシー',
      text: 'スマートフォンの写真には機種名、撮影日時、そして数メートル単位の GPS 位置情報が含まれることがよくあります。EXIF の中身、アップロード時に情報を削除するアプリや SNS（残すサービスも）、スクリーンショットで十分かどうか、共有前に位置情報を消す方法を解説します。',
    },
  },
};

export default ja;
