import type { Article } from '../types';

const article: Article = {
  title: 'EXIF Remover — Remove EXIF Data from Photos Online',
  summary: [
    'Photos from phones and cameras carry EXIF data: GPS location, capture time, device model and sometimes a serial number. Anyone who gets the original file can read it.',
    'Drop your photos into the tool on this page to see every EXIF field and remove it in one click — without re-compressing the image, without rotating it, and without uploading anything.',
  ],
  description:
    'Free online EXIF remover: delete GPS, camera, date and serial number from JPG, HEIC, PNG and WebP in your browser. Lossless, keeps orientation, no upload.',
  answer:
    'To remove EXIF data from a photo, drop it into the tool on this page and click “Remove AI metadata”. GPS coordinates, capture time, camera make, model and serial number are deleted along with XMP and IPTC, while the orientation and color profile are kept so the photo looks the same. The image is never re-compressed and never leaves your browser.',
  sections: [
    {
      heading: 'How to remove EXIF data in three steps',
      paragraphs: [],
      steps: [
        'Drop your photos into the tool above, or tap “Choose images”. JPG, HEIC, PNG, WebP, GIF and AVIF are supported.',
        'Check “Privacy details” to see whether location, personal or time data is exposed, and open “All metadata” for every field.',
        'Click “Remove AI metadata” and download the cleaned photos one by one or as a ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Which EXIF fields are removed',
      paragraphs: [],
      table: {
        head: ['Group', 'Examples', 'Result'],
        rows: [
          ['Location', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Removed'],
          ['Device', 'Make, Model, LensModel, BodySerialNumber', 'Removed'],
          ['Time', 'DateTimeOriginal, OffsetTime', 'Removed'],
          ['Software and author', 'Software, Artist, Copyright', 'Removed'],
          ['Thumbnail', 'Embedded preview image', 'Removed'],
          ['Display', 'Orientation, ICC color profile', 'Kept'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Why a lossless EXIF remover matters',
      paragraphs: [
        'Many EXIF removers redraw the photo and save a new file. That strips EXIF but also re-compresses JPEGs, can drop the color profile and sometimes rotates the photo because the orientation tag is lost.',
        'This tool cuts the metadata blocks out of the file and copies the image data unchanged. The orientation is written back in a minimal EXIF block, so the photo stays upright and pixel-identical.',
      ],
    },
    {
      heading: 'When to remove EXIF data',
      paragraphs: [],
      bullets: [
        'Before selling items online or posting photos taken at home.',
        'Before sending original files by email, cloud links or “send as file” in messaging apps, which keep EXIF.',
        'Before delivering client work that should not show your camera serial number or edit history.',
        'Before publishing photos of children, events or places you do not want located.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'EXIF on iPhone and Android photos',
      paragraphs: [
        'iPhone photos are usually HEIC files with EXIF stored as a separate item; Android photos are usually JPEGs with EXIF in an APP1 segment. Both are cleaned in place and stay in their original format — HEIC is not converted to JPG.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Questions about removing EXIF',
  faq: [
    {
      q: 'Does removing EXIF reduce photo quality?',
      a: 'No. Only metadata blocks are removed; the image data is copied byte for byte.',
    },
    {
      q: 'Will my photos be rotated after removing EXIF?',
      a: 'No. The orientation tag is written back in a minimal EXIF block so photos display the right way up.',
    },
    {
      q: 'Are my photos uploaded to a server?',
      a: 'No. Everything runs in your browser and the files never leave your device.',
    },
    {
      q: 'Can I remove only the GPS location and keep the rest?',
      a: 'Not yet. The tool removes all identifying metadata at once and keeps only what is needed to display the image correctly.',
    },
    {
      q: 'Is there a limit?',
      a: 'Each photo can be up to 25 MB and 40 megapixels, with up to 50 photos per batch.',
    },
    {
      q: 'Can removed EXIF data be recovered?',
      a: 'Not from the cleaned file. Copies you shared before cleaning still contain it.',
    },
  ],
};

export default article;
