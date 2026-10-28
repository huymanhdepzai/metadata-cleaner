import type { Article } from '../types';

const article: Article = {
  title: 'How to Control Content Credentials in Photoshop and Lightroom (and Clean Your Exports)',
  summary: [
    'Adobe apps can attach Content Credentials to exported images — a signed record of edits, including any generative AI features you used. That is useful for proving your work, but it can also trigger AI labels on photos that were only retouched.',
    'Here is where Content Credentials come from in Photoshop and Lightroom, how to check whether an export carries them, and how to remove them from a copy when you need to.',
  ],
  seoTitle: 'Turn Off Content Credentials in Photoshop & Lightroom',
  description:
    'Where Content Credentials in Photoshop and Lightroom come from, how to turn them off, how to check exports for C2PA and how to remove it from a copy losslessly.',
  answer:
    'Photoshop and Lightroom attach Content Credentials (C2PA) to exports when you enable them, and Adobe also applies them to content made with generative AI features such as Generative Fill. Turning the setting off may not stop credentials on generative edits, so check each export: if it contains a C2PA block you do not want, remove it from a copy with a lossless cleaner before publishing.',
  sections: [
    {
      heading: 'Where Content Credentials come from in Adobe apps',
      paragraphs: ['Exports can carry Content Credentials for two different reasons:'],
      bullets: [
        'You enabled Content Credentials yourself, so the app attaches your identity and edit history on export.',
        'You used a generative AI feature such as Generative Fill or Generative Expand — Adobe applies Content Credentials to content created with its generative features, describing it as AI-edited.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Why it matters before you post',
      paragraphs: [
        'Platforms such as Instagram, Facebook, Threads and TikTok read Content Credentials during upload. A photo with a single generative edit can be labeled as AI content, even if the rest of the image is a genuine photograph.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'How to turn off Content Credentials in Photoshop and Lightroom',
      paragraphs: [
        'Adobe has been rolling out Content Credentials across its apps, and the controls move between versions. In recent versions:',
      ],
      bullets: [
        'Photoshop: look for the Content Credentials panel (in the Window menu) and the Content Credentials options in the export dialog.',
        'Lightroom Classic and Lightroom: look for a Content Credentials section in the export settings.',
        'Check Adobe’s help pages for the exact version you use — names and locations change.',
      ],
    },
    {
      heading: 'Turning it off may not be enough',
      paragraphs: [
        'Adobe applies credentials to generative AI content regardless of your personal preference, so an export that used Generative Fill may still carry a manifest. Always check the exported file rather than relying on the setting alone.',
      ],
    },
    {
      heading: 'How to check an export for Content Credentials',
      paragraphs: [],
      steps: [
        'Drop the exported JPEG, PNG or other file into the tool at the top of this page.',
        'In “AI & provenance”, look for a C2PA block, the claim generator (for example Adobe Photoshop), c2pa.* actions and a composite AI source type.',
        'If any of these appear, platforms that read Content Credentials may label the image.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'How to remove Content Credentials from a copy',
      paragraphs: [],
      steps: [
        'Keep the original export with its credentials as your archive.',
        'Drop a copy into the tool and click “Remove AI metadata”. The manifest is cut at the byte level; pixels, dimensions, orientation and the color profile are kept.',
        'Confirm in the result panel that no C2PA block remains, then download the clean file for your client portal, marketplace or social network.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Keep the original as proof',
      paragraphs: [
        'Content Credentials can be valuable evidence of authorship and of how an image was edited. Archive the original export with its credentials, and only share cleaned copies where the metadata would be misleading or reveal more than you intend.',
      ],
    },
  ],
  faqHeading: 'Questions about Content Credentials in Adobe apps',
  faq: [
    {
      q: 'If I turn Content Credentials off, are generative edits still recorded?',
      a: 'They may be. Adobe applies credentials to generative AI content, so always check the exported file rather than relying on the setting alone.',
    },
    {
      q: 'Why does Instagram label my Photoshop edit as AI?',
      a: 'Generative features record a composite AI declaration in the export’s Content Credentials or XMP, and Meta reads that declaration when you upload.',
    },
    {
      q: 'Does removing the credentials undo my edits?',
      a: 'No. Only the metadata block is removed; the edited pixels are copied unchanged.',
    },
    {
      q: 'Can I add the credentials back later?',
      a: 'Not to the cleaned copy, but you can export again from the original file with Content Credentials enabled.',
    },
    {
      q: 'Does “Save for Web” remove Content Credentials?',
      a: 'It can drop much of the metadata, but behavior depends on the version and settings, and it re-compresses the image. Check the result, or clean the original export losslessly instead.',
    },
    {
      q: 'Can I clean a whole shoot at once?',
      a: 'Yes. Drop up to 50 exports, clean them in one click and download a ZIP.',
    },
  ],
};

export default article;
