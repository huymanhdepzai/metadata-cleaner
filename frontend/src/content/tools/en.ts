import type { ToolsContent } from './types';

/** Bản gốc (English) — mọi ngôn ngữ khác phải có cùng cấu trúc (số bước, số câu hỏi). */
const tools: ToolsContent = {
  hub: {
    title: 'Free Metadata Cleaner Tools',
    description:
      'Free browser tools to view, analyze and remove image metadata: EXIF viewer, photo privacy check, metadata size checker, EXIF, GPS and C2PA remover.',
    intro:
      'Every tool runs in your browser with the same engine: your images are never uploaded, and nothing is re-compressed. Pick what you need — look inside a photo, check what it reveals, or clean it.',
  },
  cards: {
    cleaner: { name: 'Remove image metadata', text: 'Remove EXIF, GPS, XMP, IPTC, C2PA and AI prompts in one click, without losing quality.', detail: 'Drop your images, review the report, then download clean copies; pixels, orientation and color profile stay untouched.' },
    'view-metadata': { name: 'View metadata', text: 'See every hidden field in a photo: camera, date, GPS, XMP, C2PA and AI prompts.', detail: 'Read-only: the file is never changed, so it is safe for checking photos you received or downloaded.' },
    'privacy-check': { name: 'Photo privacy check', text: 'Find out what a photo reveals — location on a map, personal data and capture time.', detail: 'Rates each photo as high, medium or low risk and shows GPS coordinates you can open on a map.' },
    'metadata-size': { name: 'Metadata size checker', text: 'Measure how many bytes of metadata a file carries and how risky they are.', detail: 'Lists metadata blocks by size, so you can see whether thumbnails, XMP or embedded prompts make a file larger.' },
    'remove-exif': { name: 'Remove EXIF', text: 'Delete camera, date and serial number data while keeping orientation and colors.', detail: 'Works on JPG, HEIC, PNG and WebP; a minimal orientation tag is kept so photos never turn sideways.' },
    'remove-gps': { name: 'Remove GPS location', text: 'Strip GPS coordinates from phone photos before you share them.', detail: 'Useful before posting photos of your home, children or workplace, or sending them to strangers.' },
    'remove-c2pa': { name: 'Remove C2PA', text: 'Remove Content Credentials (C2PA) manifests from JPG, PNG, WebP and HEIC.', detail: 'Removes the manifest that triggers AI labels; invisible pixel watermarks such as SynthID are not affected.' },
    'remove-prompts': { name: 'Remove AI prompts', text: 'Remove Stable Diffusion parameters and ComfyUI workflows from PNG files.', detail: 'Hides your prompt, seed, model and node graph so others cannot copy your generation settings.' },
    batch: { name: 'Batch cleaner', text: 'Clean up to 50 images at once and download them as one ZIP file.', detail: 'Each file keeps its original format; files that cannot be processed are listed with the reason.' },
  },
  groups: {
    inspect: { title: 'Check your photos', text: 'See what an image reveals before you share it — the file is only read, never changed.' },
    remove: { title: 'Remove metadata by need', text: 'Pick a format or task — each guide has the cleaner built in.' },
  },
  tools: {
    'view-metadata': {
      title: 'View Image Metadata Online — EXIF, XMP, C2PA',
      description:
        'Free online metadata viewer: see EXIF, GPS, XMP, IPTC, C2PA Content Credentials and AI prompts in JPG, PNG, WebP and HEIC — in your browser, no upload.',
      intro:
        'Drop a photo to see every piece of hidden information it carries — camera and lens, capture date, GPS position, editing software, Content Credentials and AI prompts — grouped by source. Nothing is changed and nothing is uploaded.',
      steps: [
        'Drop one or more images into the box above, or tap “Choose images”.',
        'Open a file to see the privacy summary, AI signals and the full list of metadata fields.',
        'Search the fields, then decide whether to keep the file as it is or remove its metadata.',
      ],
      faq: [
        {
          q: 'Does viewing metadata change my file?',
          a: 'No. The file is only read. To remove metadata, use the cleaner — your images stay loaded so you do not need to add them again.',
        },
        {
          q: 'Which metadata can I see?',
          a: 'EXIF (including GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG text chunks with prompts or ComfyUI workflows, and the file structure blocks.',
        },
        {
          q: 'Are my photos uploaded?',
          a: 'No. Files are read by your browser and never leave your device.',
        },
      ],
    },
    'privacy-check': {
      title: 'Photo Privacy Check — Find GPS & Personal Data',
      description:
        'Check what a photo reveals before you share it: GPS location you can open on a map, author, device serial, capture time and AI data. Free, private, no upload.',
      intro:
        'Find out what a photo gives away before you post it. The check shows whether it contains a GPS location (and where it points), personal details such as author or device serial number, the capture time and AI provenance data — with a simple risk level.',
      steps: [
        'Drop the photos you plan to share into the box above.',
        'Read the risk level and the location, personal and time details found in each file.',
        'If a GPS position is found, open it on the map to see exactly what others could see — then remove it.',
      ],
      faq: [
        {
          q: 'How is the risk level decided?',
          a: 'High means the photo contains a location. Medium means it has personal, time or AI information but no location. Low means none of these were found in the metadata.',
        },
        {
          q: 'Is the map loaded automatically?',
          a: 'No. The coordinates are shown as text. OpenStreetMap opens in a new tab only if you click the button, so the location never leaves your device otherwise.',
        },
        {
          q: 'Can a photo reveal my location without GPS?',
          a: 'Metadata is only one source. What is visible in the picture — street signs, landmarks, reflections — can also reveal a place, and this check cannot detect that.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metadata Size Checker — How Much Metadata Is in a Photo?',
      description:
        'Measure how much metadata an image carries: total bytes, share of the file, the largest EXIF, XMP, C2PA or prompt blocks and a privacy risk level. Free, no upload.',
      intro:
        'See how much of a file is metadata rather than image. The checker lists every metadata block by size — EXIF, XMP, C2PA, embedded previews, AI prompts and workflows — shows its share of the file and rates the privacy risk.',
      steps: [
        'Drop one or more images into the box above.',
        'Compare the metadata size and its share of each file, block by block.',
        'Remove the metadata to make files smaller and safer to share.',
      ],
      faq: [
        {
          q: 'Why do some files carry so much metadata?',
          a: 'Embedded previews, C2PA manifests with thumbnails and ComfyUI workflows can add tens or hundreds of kilobytes, while basic EXIF is usually only a few kilobytes.',
        },
        {
          q: 'Why is the color profile marked as kept?',
          a: 'The ICC color profile is needed to display colors correctly, so the cleaner keeps it. It is not counted in the metadata total.',
        },
        {
          q: 'Will removing metadata change the image?',
          a: 'No. Only metadata blocks are removed; the image data is copied unchanged, so the file gets smaller without any loss in quality.',
        },
      ],
    },
  },
};

export default tools;
