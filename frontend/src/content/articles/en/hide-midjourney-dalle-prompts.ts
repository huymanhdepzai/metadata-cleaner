import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remove Metadata from Midjourney & ChatGPT Images',
  description:
    'Images from Midjourney, ChatGPT/DALL·E and Firefly can carry your prompt, job ID and AI provenance data. See what is embedded and remove it before sharing.',
  answer:
    'Downloads from AI image services can contain your prompt, a job or generation ID, the tool name and C2PA Content Credentials. Anyone can read these with a free metadata viewer. To hide your prompt, open the file in a metadata checker, confirm which fields are present, and remove them from a copy with a lossless cleaner before you post or send the image.',
  sections: [
    {
      heading: 'What AI image services embed in your downloads',
      paragraphs: [
        'Hosted image generators increasingly add metadata to every download — partly for transparency, partly to support provenance standards. Exactly what is written depends on the service, the download format and the current version, so always check the actual file. Common examples:',
      ],
      table: {
        head: ['Service', 'Typical metadata', 'Can reveal'],
        rows: [
          ['Midjourney', 'Description/comment text, IPTC DigitalSourceType', 'Your prompt, a job ID, that the image is AI-generated'],
          ['ChatGPT image generation, DALL·E', 'C2PA Content Credentials', 'That OpenAI generated the image, the recorded actions'],
          ['Adobe Firefly', 'C2PA Content Credentials, XMP', 'AI generation, the app used, edit history'],
          ['Many other tools', 'XMP CreatorTool, EXIF Software, dates', 'Tool name, creation time, sometimes account-related IDs'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Why your prompts are worth protecting',
      paragraphs: [
        'For illustrators, designers and prompt engineers, a refined prompt is working knowledge built over many iterations. Anyone who downloads your image can paste it into a metadata viewer, copy the prompt and reproduce your style in minutes.',
        'IDs and account-related details can also link a public image back to your account or to other images you generated. If you deliver images to clients, embedded prompts can expose your process and the tools you use.',
      ],
    },
    {
      heading: 'How to check whether an image contains your prompt',
      paragraphs: [],
      steps: [
        'Drop the downloaded file into the tool at the top of this page — processing is local, so your prompt is never uploaded.',
        'Look at the “AI & provenance” panel for prompts, generator names and source-type declarations.',
        'Look at the “Privacy details” panel for authors, descriptions, identifiers and dates.',
        'Open “All metadata & file details” if you want to read every field verbatim.',
      ],
    },
    {
      heading: 'How to remove the prompt and AI metadata',
      paragraphs: [],
      steps: [
        'Click “Remove AI metadata”. Prompt text, IDs, XMP, IPTC, EXIF and C2PA blocks are removed at the byte level.',
        'Check the green result panel — the cleaned file is analyzed again so you can confirm nothing is left.',
        'Download the image, or download a ZIP if you processed a batch.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Does Midjourney always include the prompt?',
      paragraphs: [
        'Not necessarily. What appears depends on the download path (web app, Discord, upscaled or not), the file format and the service version — and this changes over time. The only reliable answer is to inspect the file you actually have. The same applies to other services: two images from the same tool can carry different fields.',
      ],
    },
    {
      heading: 'What metadata removal cannot do',
      paragraphs: [
        'Some providers also add invisible watermarks to the pixels themselves, such as Google’s SynthID. These are not metadata, and a lossless cleaner — which never changes pixels — cannot remove them. And if you publish a realistic AI-generated image, platform rules may still require you to disclose it. Removing the prompt protects your process; it does not change the nature of the image.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions about Midjourney and DALL·E metadata',
  faq: [
    {
      q: 'Can someone see my Midjourney prompt from the image?',
      a: 'If the prompt is stored in the file’s metadata, yes — any metadata viewer shows it. Check the file and remove the fields before sharing if you want to keep the prompt private.',
    },
    {
      q: 'Does Midjourney always embed the prompt?',
      a: 'It depends on the download format and the current service settings. Inspect the file to see exactly which fields are present before you decide.',
    },
    {
      q: 'Do ChatGPT images contain metadata?',
      a: 'Images from OpenAI’s image generation carry C2PA Content Credentials that identify OpenAI as the source. The report lists them under “AI & provenance”.',
    },
    {
      q: 'Will cleaning remove SynthID or other invisible watermarks?',
      a: 'No. Invisible watermarks are part of the pixel data. The tool only removes metadata and never changes pixels.',
    },
    {
      q: 'Does removing metadata reduce image quality?',
      a: 'No. Metadata blocks are cut out and the compressed image data is copied unchanged.',
    },
    {
      q: 'Can I clean several images at once?',
      a: 'Yes. Drop up to 50 images, review the reports, then download everything as a single ZIP file.',
    },
  ],
};

export default article;
