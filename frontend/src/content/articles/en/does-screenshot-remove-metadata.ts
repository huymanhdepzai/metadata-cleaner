import type { Article } from '../types';

const article: Article = {
  title: 'Does a Screenshot Remove Metadata? What It Keeps and What It Loses',
  seoTitle: 'Does a Screenshot Remove Metadata? What It Keeps & Loses',
  summary: [
    'Taking a screenshot is a popular shortcut for getting rid of photo metadata. It does drop the original EXIF, GPS and C2PA data — but the screenshot adds metadata of its own and costs image quality.',
    'Here is exactly what a screenshot removes, what it keeps or adds, what it can never remove, and a cleaner alternative that keeps the original image intact.',
  ],
  description:
    'A screenshot drops the original EXIF, GPS and C2PA data, but adds its own metadata, lowers quality and keeps invisible watermarks. Here is a lossless alternative.',
  answer:
    'Mostly, yes. A screenshot is a brand-new image, so the original photo’s EXIF, GPS location and C2PA Content Credentials are not copied into it. But the screenshot gets its own metadata, such as the date and device, it is limited to your screen’s resolution, and invisible watermarks or details visible in the picture survive. Removing metadata directly from the original avoids these trade-offs.',
  sections: [
    {
      heading: 'What a screenshot removes',
      paragraphs: [
        'A screenshot captures the pixels your screen is showing and saves them as a new file. Nothing from the original file’s metadata is carried over, so the following are gone:',
      ],
      bullets: [
        'GPS coordinates, camera model, lens and the original capture time (EXIF).',
        'Author, copyright and editing history (XMP and IPTC).',
        'C2PA Content Credentials and IPTC AI labels added by AI generators or editing apps.',
        'Prompts, seeds and workflows stored in AI-generated PNG files.',
      ],
    },
    {
      heading: 'What a screenshot adds or keeps',
      paragraphs: [
        'A screenshot is not a metadata-free file. Depending on the device it can record the time it was taken, the device or operating system, the screen dimensions and sometimes a “Screenshot” comment. On some devices, the screenshot itself can also be tagged with Content Credentials. These fields are usually less sensitive than the original GPS location, but they still say something about you.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'What a screenshot can never remove',
      paragraphs: [],
      bullets: [
        'Invisible watermarks such as Google’s SynthID, which live in the pixels and are designed to survive screenshots.',
        'Anything visible in the image: street signs, house numbers, faces, reflections or a recognizable view can reveal a location without any metadata.',
        'Information shown on screen around the image, such as notifications, the clock or your account name, if you forget to crop it.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Screenshot vs. metadata cleaner',
      paragraphs: [],
      table: {
        head: ['', 'Screenshot', 'Metadata cleaner'],
        rows: [
          ['Original EXIF, GPS and C2PA', 'Not copied', 'Removed'],
          ['New metadata added', 'Yes (date, device…)', 'No'],
          ['Resolution', 'Limited to your screen', 'Original'],
          ['Pixels', 'Re-captured, may be scaled', 'Identical'],
          ['Color profile and HDR', 'Often changed', 'Kept'],
          ['Batch of 50 photos', 'One by one', 'One click'],
        ],
      },
    },
    {
      heading: 'Why a screenshot is a poor way to clean photos',
      paragraphs: [
        'Unless the photo fills the screen at 100% zoom, the screenshot is a scaled-down copy. Colors can shift when the system converts between color profiles, HDR highlights are flattened, and every further screenshot or upload compresses the image again. For anything you care about — portfolio work, product photos, AI art — cleaning the original file gives a better result.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'A better way: remove metadata from the original',
      paragraphs: [],
      steps: [
        'Drop the original photos into the cleaner at the top of this page — JPG, PNG, WebP, GIF, HEIC or AVIF.',
        'Check the report to see which location, personal and AI data each file contains.',
        'Click “Remove AI metadata”. Only metadata blocks are removed; the image data is copied byte for byte.',
        'Download the cleaned files at full resolution, one by one or as a ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Questions about screenshots and metadata',
  faq: [
    {
      q: 'Does a screenshot remove the GPS location of a photo?',
      a: 'Yes. The original GPS coordinates are not copied into the screenshot. Details visible in the picture can still reveal where it was taken.',
    },
    {
      q: 'Do screenshots have their own metadata?',
      a: 'Yes. Screenshots usually contain the capture date and information about the device or software, and sometimes a comment marking them as screenshots.',
    },
    {
      q: 'Does a screenshot remove C2PA Content Credentials?',
      a: 'The original manifest is not copied. Some devices and apps can add new Content Credentials to the screenshot itself, so check the result.',
    },
    {
      q: 'Does a screenshot remove SynthID or other invisible watermarks?',
      a: 'No. Invisible watermarks are part of the pixels and are designed to survive screenshots, cropping and compression.',
    },
    {
      q: 'Does a screenshot reduce image quality?',
      a: 'Usually. It is limited to your screen resolution, may be scaled, and can lose the original color profile and HDR information.',
    },
    {
      q: 'What is the best way to remove metadata without losing quality?',
      a: 'Remove the metadata from the original file with a lossless cleaner. The image data stays identical and the file keeps its full resolution.',
    },
  ],
};

export default article;
