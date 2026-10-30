import type { GuidesHubContent } from './types';

const en: GuidesHubContent = {
  more: 'New here? Start with “What is EXIF data?” for the basics of photo metadata, or “What is C2PA?” if your images are AI-generated or edited with AI tools. Guides are grouped by what you want to do: clean a specific file type, deal with AI labels, hide AI prompts, or protect your location and privacy.',
  groups: {
    formats: {
      title: 'Remove metadata by file format and device',
      text: 'Every format hides metadata in a different place: JPEG in marker segments, PNG in text chunks, HEIC and WebP in boxes and RIFF chunks. These guides show what each format stores, what is safe to delete, and how to clean files on Windows, macOS, iPhone and Android — one at a time or in batches.',
    },
    'ai-labels': {
      title: 'AI labels and Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok and YouTube read C2PA manifests and IPTC fields to decide whether to show an AI label. Learn how Content Credentials work, why real photos get flagged, how to check an image yourself, and what metadata removal can and cannot do against invisible watermarks such as SynthID.',
    },
    'ai-prompts': {
      title: 'AI generator metadata and prompts',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion and ComfyUI write different traces into the files they create — from a signed C2PA record to your full prompt, seed and workflow. See exactly what each tool leaves behind and how to share the image without it.',
    },
    privacy: {
      title: 'EXIF, GPS and photo privacy',
      text: 'Phone photos carry the camera model, capture time and often a GPS position accurate to a few meters. Find out what EXIF contains, which apps and platforms strip it on upload (and which keep it), whether a screenshot is enough, and how to remove location data before you share.',
    },
  },
};

export default en;
