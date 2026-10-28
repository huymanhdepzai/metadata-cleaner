import type { Article } from '../types';

const article: Article = {
  title: 'Remove Metadata from WebP Images — EXIF, XMP & C2PA',
  summary: [
    'WebP images can carry EXIF, XMP and C2PA data just like JPEG — including AI provenance fields added by image generators and editors.',
    'Drop your WebP files into the tool on this page to inspect them and remove the metadata while keeping lossy, lossless and animated WebP exactly as they were.',
  ],
  description:
    'Remove EXIF, XMP and C2PA metadata from WebP images in your browser. Keeps image data, transparency, color profile and animation. Free, no upload, batch + ZIP.',
  answer:
    'To remove metadata from a WebP image, drop it into the tool on this page and click “Remove AI metadata”. The EXIF, XMP and C2PA chunks are deleted from the RIFF container, while the VP8/VP8L image data, transparency, ICC color profile and animation frames are copied unchanged — so lossy WebP loses no further quality and animated WebP keeps every frame.',
  sections: [
    {
      heading: 'Where WebP metadata lives',
      paragraphs: [
        'WebP files use a RIFF container made of chunks. The image is stored in VP8 (lossy), VP8L (lossless) or ALPH (transparency) chunks; metadata lives in separate chunks:',
      ],
      table: {
        head: ['Chunk', 'Role', 'After cleaning'],
        rows: [
          ['VP8, VP8L, ALPH', 'Image data and transparency', 'Kept, byte for byte'],
          ['ICCP', 'Color profile', 'Kept'],
          ['ANIM, ANMF', 'Animation settings and frames', 'Kept'],
          ['EXIF', 'Camera, time, GPS, orientation', 'Removed (orientation rewritten)'],
          ['XMP', 'Edit history, author, AI fields', 'Removed'],
          ['C2PA', 'Content Credentials', 'Removed'],
        ],
      },
    },
    {
      heading: 'How to remove metadata from WebP in three steps',
      paragraphs: [],
      steps: [
        'Drop your WebP files into the tool above.',
        'Review the report to see the EXIF, XMP and provenance fields found in each file.',
        'Click “Remove AI metadata” and download the cleaned images individually or as a ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'What is kept',
      paragraphs: [
        'The image chunks, transparency, the ICC color profile and animation frames are copied unchanged. If the file declared an orientation, it is written back in a minimal EXIF chunk so the image keeps displaying correctly.',
        'Because nothing is decoded and re-encoded, lossy WebP images do not lose any further quality, and animated WebP keeps every frame and its timing.',
      ],
    },
    {
      heading: 'When WebP metadata matters',
      paragraphs: [
        'Many websites and AI tools export WebP by default, and the metadata travels with the file when you download and re-share it. Cleaning removes location, device and provenance details before you publish or send the image.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions about cleaning WebP files',
  faq: [
    {
      q: 'Are animated WebP files supported?',
      a: 'Yes. Animation chunks are kept, so frames and timing stay the same.',
    },
    {
      q: 'Does the image get re-compressed?',
      a: 'No. Only metadata chunks are removed; the image data is copied byte for byte.',
    },
    {
      q: 'Is transparency preserved?',
      a: 'Yes. Alpha data is kept exactly as it was.',
    },
    {
      q: 'Can I convert WebP to JPG here?',
      a: 'No. The tool keeps every file in its original format; it only removes metadata.',
    },
    {
      q: 'Is there a size limit?',
      a: 'Each file can be up to 25 MB and 40 megapixels, and you can clean up to 50 files per session.',
    },
    {
      q: 'Are my images uploaded?',
      a: 'No. WebP files are processed locally in your browser.',
    },
  ],
};

export default article;
