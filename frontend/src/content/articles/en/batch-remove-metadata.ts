import type { Article } from '../types';

const article: Article = {
  description:
    'Batch remove metadata from up to 50 images at once in your browser — JPG, PNG, WebP, GIF, HEIC, AVIF — then download one ZIP. Lossless, free, no upload.',
  answer:
    'To remove metadata from many images at once, drop up to 50 JPG, PNG, WebP, GIF, HEIC or AVIF files into the tool, review the reports, click “Remove AI metadata” once and download everything as a single ZIP. Processing runs in parallel in your browser, so nothing is uploaded and no image is re-compressed.',
  sections: [
    {
      heading: 'Batch remove metadata in four steps',
      paragraphs: [],
      steps: [
        'Drop up to 50 images onto the page — JPG, PNG, WebP, GIF, HEIC or AVIF, up to 25 MB and 40 megapixels each. Formats can be mixed.',
        'Each image is analyzed automatically; open any report to review what will be removed.',
        'Click “Remove AI metadata” once to clean every analyzed image.',
        'Download images individually or click “Download all (.zip)” to get metadata-cleared.zip.',
      ],
    },
    {
      heading: 'When batch cleaning is useful',
      paragraphs: [],
      bullets: [
        'Photographers delivering a shoot to a client without camera serials, locations or editing history.',
        'Sellers posting many product photos to marketplaces that keep the original files.',
        'AI artists publishing a set of outputs without prompts or ComfyUI workflows.',
        'Teams preparing images for a website, a press kit or a public dataset.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'How it stays fast without a server',
      paragraphs: [
        'The work is split across several Web Workers — background threads in your browser — sized to the number of CPU cores on your device. Each worker reads one file, parses its structure and returns the cleaned bytes, so the page stays responsive even with large HEIC files.',
        'The ZIP is created with the “store” method because images are already compressed: packing is fast and adds no extra quality loss.',
      ],
    },
    {
      heading: 'Verify every file before you share',
      paragraphs: [
        'After cleaning, every output file is analyzed again. The green result panel confirms whether location, personal, time and AI fields are gone. Files with duplicate names are renamed automatically inside the ZIP so nothing is overwritten.',
      ],
    },
    {
      heading: 'What is removed and what is kept',
      paragraphs: ['The same rules apply to every file in the batch:'],
      table: {
        head: ['Removed', 'Kept'],
        rows: [
          ['GPS location, capture date and time', 'Image data, byte for byte'],
          ['Camera, lens, serial numbers, software', 'Dimensions and orientation'],
          ['Author, copyright and description fields', 'ICC color profile'],
          ['XMP, IPTC, C2PA Content Credentials', 'Transparency and animation'],
          ['AI prompts, workflows, embedded thumbnails', 'Original file names'],
        ],
      },
    },
    {
      heading: 'Tips for large batches',
      paragraphs: [],
      bullets: [
        'For hundreds of images, work in batches of 50 and clear the list between runs to free memory.',
        'On low-memory phones, close other heavy tabs first.',
        'Because processing is local, you can even disconnect from the internet after the page has loaded.',
      ],
    },
    {
      heading: 'Private by design',
      paragraphs: [
        'No image is uploaded, stored or logged. The only network traffic is loading the page itself. That makes batch cleaning suitable for client work, unpublished photos and other files you cannot send to a third-party server.',
      ],
    },
  ],
  faqHeading: 'Questions about batch processing',
  faq: [
    {
      q: 'Why is there a limit of 50 images?',
      a: 'Everything runs on your device. The limit keeps memory use safe on phones and older computers; you can run as many batches as you like.',
    },
    {
      q: 'Can I mix JPG, PNG and HEIC in one batch?',
      a: 'Yes. Each file is detected by its content and cleaned with the matching method, and every file keeps its original format.',
    },
    {
      q: 'Are file names changed?',
      a: 'No. Cleaned files keep their original names. Only exact duplicates inside the ZIP get a numbered suffix.',
    },
    {
      q: 'Can I use it offline?',
      a: 'Yes. Once the page has loaded, cleaning works without an internet connection because nothing is sent to a server.',
    },
    {
      q: 'Is the ZIP compressed further?',
      a: 'No. Images are stored as they are, so the ZIP is created quickly and no image loses quality.',
    },
    {
      q: 'Is batch cleaning free?',
      a: 'Yes. There is no account, no watermark and no limit on how many batches you run.',
    },
  ],
};

export default article;
