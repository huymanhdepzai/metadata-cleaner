import type { Article } from '../types';

const article: Article = {
  title: 'Remove C2PA Content Credentials from Images — Free, No Upload',
  seoTitle: 'Remove C2PA Content Credentials Online — Free',
  summary: [
    'Photoshop, Lightroom, Firefly, ChatGPT image generation and some cameras attach a signed C2PA manifest — Content Credentials — that records which app or AI model created or edited an image.',
    'Drop your images into the tool on this page to see what the manifest says and remove it from a copy in one click. The image data is copied unchanged and nothing is uploaded.',
  ],
  description:
    'Remove C2PA Content Credentials from JPG, PNG, WebP, HEIC and AVIF in your browser. See the manifest first, then strip it losslessly. Free, no upload, batch.',
  answer:
    'To remove C2PA Content Credentials, drop the image into the tool on this page and click “Remove AI metadata”. The C2PA manifest (JPEG APP11, PNG caBX, WebP C2PA chunk, HEIC/AVIF uuid box) is cut out together with XMP, IPTC and EXIF, while the image data is copied byte for byte. The cleaned file is checked again so you can confirm no manifest remains.',
  sections: [
    {
      heading: 'How to remove Content Credentials in three steps',
      paragraphs: [],
      steps: [
        'Drop one or more images into the tool above — JPG, PNG, WebP, GIF, HEIC and AVIF are supported.',
        'Open “AI & provenance” in the report to see whether a C2PA manifest is present, which app signed it and which actions it records.',
        'Click “Remove AI metadata” and download the cleaned files one by one or as a ZIP. The result panel confirms that C2PA is gone.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Where the C2PA manifest is stored',
      paragraphs: ['The manifest lives in its own block, separate from the image data, so it can be removed without re-encoding:'],
      table: {
        head: ['Format', 'C2PA block', 'Also removed'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, comments'],
          ['PNG', 'caBX chunk', 'Text chunks, eXIf, tIME'],
          ['WebP', 'C2PA chunk', 'EXIF, XMP'],
          ['HEIC, AVIF', 'uuid box', 'Exif and XMP items'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Why people remove Content Credentials',
      paragraphs: [],
      bullets: [
        'A real photo was lightly retouched with a generative tool and now gets an “AI info” label it does not deserve.',
        'The manifest reveals software, account names, edit history or ingredient files you would rather not publish.',
        'A client or platform needs plain image files without provenance data attached.',
        'You want to inspect what an image declares before deciding whether to share it as is.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'What removing C2PA does not do',
      paragraphs: [
        'Stripping the manifest only removes the record stored in that copy of the file. It does not remove invisible pixel watermarks such as SynthID, and it does not affect “durable” Content Credentials that a verifier can look up from a fingerprint or an online repository.',
        'If an image is AI-generated, platforms may still ask you to disclose it. Follow each platform’s rules — removing metadata does not change how the image was made.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Stop new files from getting Content Credentials',
      paragraphs: [
        'In Photoshop and Lightroom, Content Credentials can be turned off in the export settings, although some generative features add them regardless. AI image services usually add them to every output. For files you already have, cleaning a copy here is the quickest fix — keep the original if you may need to prove provenance later.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Questions about removing C2PA',
  faq: [
    {
      q: 'Does removing C2PA reduce image quality?',
      a: 'No. The manifest is a separate block; the compressed image data is copied unchanged.',
    },
    {
      q: 'Can I see the Content Credentials before removing them?',
      a: 'Yes. The “AI & provenance” panel shows the claim generator, recorded actions and source type, and “All metadata” lists every field.',
    },
    {
      q: 'Are my images uploaded?',
      a: 'No. Files are read and cleaned in your browser and never leave your device.',
    },
    {
      q: 'Will Instagram or Facebook still label the image?',
      a: 'Labels based on C2PA or IPTC metadata lose their source, but platforms can use other signals or ask you to disclose AI content yourself.',
    },
    {
      q: 'Does it remove SynthID or other invisible watermarks?',
      a: 'No. Those are embedded in the pixels, and this tool never changes pixels.',
    },
    {
      q: 'Can I remove C2PA from many images at once?',
      a: 'Yes. Drop up to 50 images per batch and download them all as one ZIP file.',
    },
  ],
};

export default article;
