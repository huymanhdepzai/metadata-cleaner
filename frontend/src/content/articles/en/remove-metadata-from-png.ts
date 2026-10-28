import type { Article } from '../types';

const article: Article = {
  title: 'Remove Metadata from PNG — Prompts, Workflow, XMP & C2PA',
  summary: [
    'PNG files store metadata in text chunks, and AI tools use them heavily: Stable Diffusion writes your prompt and settings, ComfyUI embeds the whole workflow, and editors add XMP or C2PA data.',
    'Use the tool on this page to see every chunk and remove the metadata while keeping the image, transparency, color and animation exactly as they are.',
  ],
  description:
    'Remove prompts, ComfyUI workflows, XMP, EXIF and C2PA from PNG files in your browser. Keeps transparency, color profile and APNG animation. Free, no upload.',
  answer:
    'To remove metadata from a PNG, drop it into the tool on this page and click “Remove AI metadata”. Text chunks (tEXt, zTXt, iTXt) holding prompts, ComfyUI workflows and XMP are deleted along with eXIf, caBX (C2PA), tIME and dSIG chunks. Image data, transparency, color profile and APNG animation are copied unchanged, so the PNG stays pixel-identical.',
  sections: [
    {
      heading: 'Where PNG metadata lives',
      paragraphs: ['A PNG is a list of chunks. The image data sits in IDAT chunks; metadata sits in separate chunks:'],
      table: {
        head: ['Chunk', 'What it holds'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Free-form text: Stable Diffusion “parameters”, ComfyUI “prompt” and “workflow” JSON, XMP'],
          ['eXIf', 'EXIF data such as camera, time and GPS'],
          ['caBX', 'C2PA Content Credentials'],
          ['tIME, dSIG', 'Last-modified time and digital signatures'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'How to remove metadata from a PNG in three steps',
      paragraphs: [],
      steps: [
        'Drop your PNG files into the tool above — batches are fine.',
        'Open the report to see the prompt, workflow and other fields that were found.',
        'Click “Remove AI metadata” and download the cleaned files individually or as a ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'What is kept in the cleaned PNG',
      paragraphs: [
        'Only metadata chunks are removed. Everything that affects how the image looks stays: header, palette, image data, transparency (tRNS), gamma and chromaticity, the sRGB or ICC color profile, and APNG animation chunks. If the file declared an orientation, it is written back in a minimal eXIf chunk with a valid checksum.',
      ],
    },
    {
      heading: 'Why not just re-save the PNG?',
      paragraphs: [
        'PNG compression is lossless, but re-saving still changes things. Redrawing a PNG through a browser canvas — what many online tools do — can drop the color profile, alter transparent edges and reduce 16-bit images to 8 bits. Cutting chunks avoids all of that: the IDAT data is exactly what your generator or editor wrote.',
      ],
    },
    {
      heading: 'Prevent PNG metadata next time',
      paragraphs: [
        'If you never want generation data in your files, check your generator’s settings: ComfyUI can be started with --disable-metadata, and many Stable Diffusion interfaces have an option to stop saving generation parameters. For files you already have, cleaning them here is the fastest fix.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Questions about cleaning PNG files',
  faq: [
    {
      q: 'Will the PNG lose quality?',
      a: 'No. The image data chunks are copied byte for byte, so the picture is pixel-identical to the original.',
    },
    {
      q: 'Can someone recover my ComfyUI workflow after cleaning?',
      a: 'Not from the cleaned file — the prompt and workflow chunks are removed completely. Copies you shared earlier still contain them.',
    },
    {
      q: 'Is transparency preserved?',
      a: 'Yes. Alpha channels and the tRNS chunk are kept exactly as they were.',
    },
    {
      q: 'Are animated PNGs supported?',
      a: 'Yes. APNG animation chunks are kept, so the animation plays exactly as before.',
    },
    {
      q: 'Does the PNG file get smaller?',
      a: 'Usually, yes — especially for ComfyUI images, where the embedded workflow can add tens of kilobytes.',
    },
    {
      q: 'Are my PNGs uploaded?',
      a: 'No. Everything is processed in your browser and never leaves your device.',
    },
  ],
};

export default article;
