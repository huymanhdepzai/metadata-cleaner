import type { Article } from '../types';

const article: Article = {
  title: 'Which Platforms Label AI Images? Instagram, Facebook, TikTok, YouTube and More',
  summary: [
    'Major platforms increasingly show labels such as “AI info” on images and videos. Most of them read the same industry signals embedded in the file — C2PA Content Credentials and IPTC metadata — and combine them with what creators disclose.',
    'Here is how labeling generally works across the big platforms, what triggers it, and what it means for real photos that were only lightly edited.',
  ],
  seoTitle: 'Which Platforms Label AI Images? Instagram, TikTok, YouTube',
  description:
    'How Instagram, Facebook, Threads, TikTok, YouTube, Pinterest and LinkedIn label AI images, which metadata triggers the labels and what it means for edited photos.',
  answer:
    'Instagram, Facebook and Threads (“AI info”), TikTok, YouTube and Pinterest label AI content, and LinkedIn shows a Content Credentials icon. Most automatic labels are triggered by C2PA Content Credentials or the IPTC DigitalSourceType field in the uploaded file, combined with creator disclosure. A small generative edit can be enough to trigger a label on an otherwise real photo.',
  sections: [
    {
      heading: 'AI labels by platform at a glance',
      paragraphs: ['Policies change often, but the general picture looks like this:'],
      table: {
        head: ['Platform', 'What viewers see', 'Main triggers'],
        rows: [
          ['Instagram, Facebook, Threads', '“AI info” label (formerly “Made with AI”)', 'C2PA, IPTC metadata, creator toggle'],
          ['TikTok', '“AI-generated” label', 'Creator disclosure, C2PA Content Credentials'],
          ['YouTube', 'Altered or synthetic content label', 'Creator disclosure at upload'],
          ['Pinterest', 'AI-modified label', 'Metadata and its own classifiers'],
          ['LinkedIn', 'Content Credentials “CR” icon', 'C2PA data in the image'],
        ],
      },
    },
    {
      heading: 'The signals platforms rely on',
      paragraphs: ['Automatic labels are usually driven by a small set of shared signals:'],
      bullets: [
        'C2PA Content Credentials that declare AI generation or AI editing.',
        'The IPTC DigitalSourceType field, for example trainedAlgorithmicMedia or compositeWithTrainedAlgorithmicMedia.',
        'Invisible watermarks from some AI providers, where the platform has a detector.',
        'Creator self-disclosure — a toggle or checkbox when posting realistic AI content.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook and Threads (Meta)',
      paragraphs: [
        'Meta shows an “AI info” label (it was called “Made with AI” until 2024) when it detects industry-standard AI signals or when a creator discloses AI content. After photographers complained that lightly retouched photos were being labeled, Meta moved the label for AI-edited content into the post menu, while content that is substantially generated is labeled more prominently.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTok requires creators to label realistic AI-generated content and has said it automatically labels content that arrives with C2PA Content Credentials identifying it as AI-generated. It also attaches Content Credentials to some content created with its own AI effects.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTube asks creators to disclose realistic altered or synthetic content when uploading and shows a label to viewers, more prominently for sensitive topics. It also supports C2PA for the opposite case: a “captured with a camera” indicator for content with authentic capture credentials.',
      ],
    },
    {
      heading: 'Pinterest and LinkedIn',
      paragraphs: [
        'Pinterest labels images it identifies as AI-generated or AI-modified, based on metadata and its own classifiers. LinkedIn displays a Content Credentials icon on images that carry C2PA data, letting viewers inspect the source and edits.',
        'Policies on every platform change frequently, so check the platform’s current help center before relying on any specific behavior.',
      ],
    },
    {
      heading: 'Why real photos get labeled',
      paragraphs: [
        'A single AI-assisted edit — removing an object with a generative tool, extending a background, or using an AI eraser on a phone — can mark the whole photo as composite AI content in its metadata. Platforms read that declaration without judging how large the edit was.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'How to check a photo before you post',
      paragraphs: [],
      steps: [
        'Drop the exact file you plan to upload into the checker at the top of this page.',
        'Look at the “AI & provenance” panel to see which field would trigger a label.',
        'If the label would be wrong, remove the metadata from a copy and upload the cleaned copy.',
        'If the image is substantially AI-generated, disclose it — labels exist to keep viewers informed.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions about AI labels on social media',
  faq: [
    {
      q: 'Why does my photo get an AI label when I only removed a small object?',
      a: 'Many editors record generative edits in C2PA or IPTC metadata as “composite with AI”. Platforms read that declaration without judging how large the edit was.',
    },
    {
      q: 'Do platforms keep the metadata after I post?',
      a: 'Most platforms read the metadata during upload and then strip it from the published copy, so downloading your own post will rarely show the original fields.',
    },
    {
      q: 'Will a cleaned image avoid every label?',
      a: 'Not necessarily. Cleaning removes the signals stored in the file, but platforms can also use watermark detection, classifiers or ask you to disclose AI content.',
    },
    {
      q: 'Does X (Twitter) label AI images?',
      a: 'X relies mostly on its synthetic and manipulated media policy and community notes rather than an automatic metadata-based label. Check its current policy for details.',
    },
    {
      q: 'Do I have to disclose AI images?',
      a: 'Most platforms require disclosure for realistic AI-generated content, especially of people or real events. Rules differ, so check each platform’s policy.',
    },
    {
      q: 'Can I check whether my image will be labeled?',
      a: 'Yes. Drop it into the checker: if it reports C2PA or an AI DigitalSourceType, platforms that read those signals are likely to label it.',
    },
  ],
};

export default article;
