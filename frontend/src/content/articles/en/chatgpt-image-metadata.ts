import type { Article } from '../types';

const article: Article = {
  title: 'Does ChatGPT Add Metadata to Images? How to See and Remove It',
  seoTitle: 'Does ChatGPT Add Metadata to Images? (C2PA Explained)',
  summary: [
    'Images created with ChatGPT and OpenAI’s image models carry C2PA Content Credentials: signed metadata that identifies OpenAI as the source of the image.',
    'Here is what that metadata contains, where it shows up, how to check your own files and how to remove it from a copy losslessly — plus what metadata removal does not change.',
  ],
  description:
    'Yes — ChatGPT images carry C2PA Content Credentials naming OpenAI as the source. See what the metadata contains, how to check it and how to remove it losslessly.',
  answer:
    'Yes. Images generated in ChatGPT and through OpenAI’s image API include C2PA Content Credentials, a signed manifest that records that the image was created by an OpenAI model. Platforms such as Instagram, Facebook and LinkedIn can read it and show an AI label. You can inspect the manifest in a metadata viewer and remove it from a copy without changing the pixels.',
  sections: [
    {
      heading: 'What metadata ChatGPT adds to generated images',
      paragraphs: [
        'OpenAI attaches a C2PA manifest to images created by its image models in ChatGPT and in the API. The manifest is signed, so viewers can tell whether it has been altered. It typically records:',
      ],
      bullets: [
        'The issuer and the generating tool, identifying OpenAI and ChatGPT or the API.',
        'An action stating the image was created, with the digital source type “trainedAlgorithmicMedia” — the standard code for fully AI-generated media.',
        'A timestamp and the certificate used to sign the manifest.',
        'For images edited in ChatGPT, entries describing the edit and the ingredient image it was based on.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Does a ChatGPT image contain my prompt?',
      paragraphs: [
        'C2PA manifests are designed to record provenance — which tool created the image and when — rather than your conversation. Unlike Stable Diffusion or ComfyUI, which write the full prompt into PNG text chunks, OpenAI’s files are not built around storing the prompt. What is included can change over time, so the reliable answer for any specific file is to open it in a viewer and look.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'How to check a ChatGPT image for metadata',
      paragraphs: [],
      steps: [
        'Download the image from ChatGPT. Files are usually saved as PNG.',
        'Drop the downloaded file into the checker at the top of this page.',
        'Open the “AI & provenance” panel: it shows the C2PA manifest, the issuer and the digital source type.',
        'Compare with a copy you shared or re-saved — many apps drop the manifest, others keep it.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Where ChatGPT image metadata becomes visible',
      paragraphs: [
        'C2PA-aware platforms and tools read the manifest automatically. Meta shows an “AI info” label on Instagram, Facebook and Threads, LinkedIn displays a Content Credentials icon, and verification sites such as contentcredentials.org show the full history. Platforms that strip metadata on upload remove the manifest from the published copy, but they may read it first.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'How to remove metadata from a ChatGPT image',
      paragraphs: [
        'Removing the manifest is useful when you want to keep files lean, avoid sharing tool and account details, or publish an image in a context where you disclose the AI origin yourself.',
      ],
      steps: [
        'Drop one or more ChatGPT images into the cleaner at the top of this page.',
        'Click “Remove AI metadata”. The C2PA block and other metadata are cut out at the byte level.',
        'Download the cleaned PNG — the pixels, transparency and dimensions are identical to the original.',
        'Keep the original download if you may need to prove where the image came from.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'What removing metadata does not change',
      paragraphs: [
        'Metadata is only one layer. OpenAI has said it also uses internal tools to recognize its own images, platforms can run their own classifiers, and many services ask you to disclose AI-generated content no matter what the file contains. Removing the manifest cleans the file; it does not change the image’s origin or your disclosure obligations.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Questions about ChatGPT image metadata',
  faq: [
    {
      q: 'Do all ChatGPT images have C2PA metadata?',
      a: 'Images generated by OpenAI’s image models in ChatGPT and the API are published with C2PA Content Credentials. Copies that were screenshotted or re-saved by another app may have lost them.',
    },
    {
      q: 'Can someone tell an image was made with ChatGPT?',
      a: 'If the manifest is still in the file, yes: any C2PA viewer shows OpenAI as the source. Without metadata, people have to rely on visual clues or detection tools, which are not always reliable.',
    },
    {
      q: 'Does removing the metadata reduce image quality?',
      a: 'No. The cleaner removes metadata blocks and copies the image data byte for byte, so the PNG looks exactly the same.',
    },
    {
      q: 'Does a screenshot of a ChatGPT image keep the metadata?',
      a: 'Usually not. A screenshot is a new file without the original manifest, but it is lower in resolution and gets its own screenshot metadata.',
    },
    {
      q: 'Will Instagram still label a cleaned ChatGPT image?',
      a: 'Metadata-based labels need metadata, so a cleaned copy is less likely to trigger one. Platforms can still use other signals, and their rules may require you to label AI content yourself.',
    },
    {
      q: 'Are my images uploaded when I check or clean them?',
      a: 'No. Everything runs in your browser, and the images never leave your device.',
    },
  ],
};

export default article;
