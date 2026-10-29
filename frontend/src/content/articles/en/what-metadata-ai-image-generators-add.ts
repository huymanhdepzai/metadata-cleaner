import type { Article } from '../types';

const article: Article = {
  title: 'What Metadata Do AI Image Generators Add? DALL·E, Firefly, Midjourney, Gemini and Stable Diffusion',
  summary: [
    'Almost every AI image generator leaves traces in its output — from signed Content Credentials to plain-text prompts. Knowing what each tool writes helps you protect your prompts and understand why a platform labels an image.',
    'Below is an overview of the metadata commonly found in images from popular generators, and how to see exactly what is inside your own files.',
  ],
  seoTitle: 'What Metadata Do AI Image Generators Add?',
  description:
    'The metadata AI image generators embed — C2PA, IPTC DigitalSourceType, XMP, prompts and workflows — tool by tool, and how to inspect or remove it from your files.',
  answer:
    'Hosted AI services such as ChatGPT image generation and Adobe Firefly attach signed C2PA Content Credentials; Google and Meta add invisible watermarks and IPTC metadata; Midjourney may include the prompt and an AI source type; local tools such as Stable Diffusion and ComfyUI store the full prompt, seed, model and workflow as PNG text. What is written changes between versions, so inspect your actual files.',
  sections: [
    {
      heading: 'Three kinds of AI traces',
      paragraphs: ['AI-related metadata falls into three groups:'],
      bullets: [
        'Signed provenance — C2PA Content Credentials naming the generator and the actions performed.',
        'Descriptive metadata — IPTC and XMP fields such as DigitalSourceType, CreatorTool or a description.',
        'Generation data — the prompt, seed, model and settings stored as text, mainly by local tools.',
      ],
    },
    {
      heading: 'AI generator metadata at a glance',
      paragraphs: [],
      table: {
        head: ['Generator', 'C2PA', 'IPTC / XMP', 'Prompt in file', 'Pixel watermark'],
        rows: [
          ['ChatGPT image generation, DALL·E', 'Yes', 'Varies', 'Usually no', 'Varies'],
          ['Adobe Firefly, Photoshop generative features', 'Yes', 'Yes', 'No', 'Varies'],
          ['Google Gemini, Imagen', 'In some products', 'In some products', 'No', 'SynthID'],
          ['Meta AI', 'Varies', 'Yes (IPTC)', 'No', 'Yes'],
          ['Midjourney', 'Varies', 'Yes (source type)', 'Often', 'Not announced'],
          ['Stable Diffusion, ComfyUI (local)', 'No', 'Rarely', 'Yes, very detailed', 'No by default'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (ChatGPT image generation and DALL·E)',
      paragraphs: [
        'Images created with OpenAI’s image generation carry C2PA Content Credentials that identify OpenAI as the source, so they can be recognized by C2PA-aware viewers and platforms. The manifest can be lost when the image is screenshotted or re-saved by an app that does not preserve it.',
      ],
      related: ['chatgpt-image-metadata', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly and generative features in Photoshop',
      paragraphs: [
        'Adobe attaches Content Credentials to content created with its Firefly-powered generative features, describing the content as AI-generated or AI-edited. Photos edited with Generative Fill or Generative Expand can therefore carry a composite AI declaration even if most of the image is a real photograph.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini and Imagen) and Meta AI',
      paragraphs: [
        'Google embeds its SynthID invisible watermark in images from its generative models and also uses metadata to mark AI content in some products. Meta has said that images from Meta AI include a visible marker, an invisible watermark and IPTC metadata indicating AI generation.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Midjourney downloads can include the prompt and a job ID in description or comment fields, along with an IPTC value that marks the image as AI-generated. What appears depends on the download format and the current service version.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI and other local tools',
      paragraphs: [
        'Local tools do not sign anything, but they often store the most detailed information: AUTOMATIC1111 and Forge write a “parameters” text chunk with the prompt, seed, sampler and model, and ComfyUI embeds its full prompt and workflow graphs as JSON. These settings can usually be turned off — but only for new images.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'How to see what your generator added',
      paragraphs: ['Generators change what they write with new versions, so the reliable approach is to inspect the actual file:'],
      steps: [
        'Drop the image into the tool at the top of this page; it is analyzed locally.',
        'Check “AI & provenance” for C2PA, source type, prompts and tool names.',
        'If you do not want to share them, click “Remove AI metadata” and download the cleaned copy.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions about AI generator metadata',
  faq: [
    {
      q: 'Do all AI generators add C2PA Content Credentials?',
      a: 'No. Large hosted services increasingly do, but many tools — especially local ones — only write text metadata or nothing at all.',
    },
    {
      q: 'Does removing metadata also remove invisible watermarks?',
      a: 'No. Watermarks such as SynthID are embedded in the pixels. Metadata removal does not change pixels.',
    },
    {
      q: 'Why do two images from the same tool have different metadata?',
      a: 'Export format, app version, the platform you downloaded from and later edits can all add or remove fields.',
    },
    {
      q: 'What does trainedAlgorithmicMedia mean?',
      a: 'It is the IPTC DigitalSourceType value for media created by a generative AI model. compositeWithTrainedAlgorithmicMedia means a real image with AI-generated parts.',
    },
    {
      q: 'Does a screenshot keep the AI metadata?',
      a: 'Usually not. A screenshot is a new image without the original metadata, although pixel watermarks may survive.',
    },
    {
      q: 'Can I keep the image but remove the prompt?',
      a: 'Yes. Cleaning removes the metadata blocks and copies the image data unchanged, so the image is identical without the prompt.',
    },
  ],
};

export default article;
