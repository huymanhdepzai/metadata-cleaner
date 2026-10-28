import type { Article } from '../types';

const article: Article = {
  title: 'Remove Metadata from HEIC Photos — Keep HEIC, No Upload',
  summary: [
    'iPhones save photos as HEIC, and each one records the device model, capture time and — if location is on — exactly where you were. Edited photos can also carry XMP and C2PA data.',
    'Most online tools convert HEIC to JPEG to clean it, which re-compresses the photo. This tool removes the metadata inside the HEIC file itself, so it stays HEIC with the original image data.',
  ],
  description:
    'Remove GPS, EXIF, XMP and C2PA metadata from iPhone HEIC/HEIF photos in your browser, without converting to JPEG or re-encoding. Free, no upload, batch + ZIP.',
  answer:
    'To remove metadata from a HEIC photo without converting it, drop the file into the tool on this page and click “Remove AI metadata”. The Exif and XMP items are overwritten with valid empty data and C2PA boxes are turned into free space, so GPS, device and time details are gone while the file stays HEIC with its original image data. Nothing is uploaded.',
  sections: [
    {
      heading: 'What an iPhone HEIC photo contains',
      paragraphs: ['HEIC uses the same box-based container as MP4. Next to the compressed image you will typically find:'],
      bullets: [
        'An Exif item — device model, lens, capture time, exposure and GPS location.',
        'An XMP item — editing details and, for AI-edited images, provenance fields.',
        'uuid boxes — used for C2PA Content Credentials and some XMP data.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Why HEIC needs special care',
      paragraphs: [
        'Inside a HEIC file, an index (the iloc box) points to the image data by absolute byte position. If a tool simply cuts metadata out, every position after it shifts and the photo no longer opens.',
        'This cleaner works in place instead: it overwrites the Exif and XMP items with valid empty data and turns C2PA uuid boxes into free space. The file size stays the same, every offset stays valid and the HEVC image data is untouched.',
      ],
    },
    {
      heading: 'How to remove metadata from HEIC in three steps',
      paragraphs: [],
      steps: [
        'Open this page on your iPhone or computer and drop or choose your HEIC photos.',
        'Check the report — the privacy panel shows location, time and device details that were found.',
        'Tap “Remove AI metadata” and save the cleaned photos, or download them all as a ZIP.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'HEIC cleaning vs. converting to JPG',
      paragraphs: [],
      table: {
        head: ['', 'Clean in place (this tool)', 'Convert to JPG first'],
        rows: [
          ['Format after cleaning', 'HEIC', 'JPEG'],
          ['Image quality', 'Unchanged', 'Re-compressed'],
          ['Wide color and orientation', 'Kept', 'May change'],
          ['File size', 'Same as before', 'Often larger'],
        ],
      },
    },
    {
      heading: 'What is kept',
      paragraphs: [
        'Image dimensions, rotation and mirroring, the color information and the compressed image itself are kept, so the photo looks and behaves exactly like the original. HEIF and AVIF files, which use the same container, are cleaned the same way.',
      ],
    },
    {
      heading: 'Stop iPhone from recording location',
      paragraphs: [
        'To keep new photos free of GPS, go to Settings › Privacy & Security › Location Services › Camera and choose Never. For single shares, tap Options in the share sheet and turn off Location. Existing photos keep their metadata until you clean them.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Questions about cleaning HEIC photos',
  faq: [
    {
      q: 'Do I need to convert HEIC to JPG first?',
      a: 'No. HEIC files are cleaned directly and stay HEIC, so there is no conversion and no quality loss.',
    },
    {
      q: 'Why is the cleaned file the same size?',
      a: 'Metadata is blanked in place rather than cut out, because HEIC stores absolute positions. The data is gone, but the space it used remains.',
    },
    {
      q: 'Does this work on Live Photos?',
      a: 'The still photo of a Live Photo is a HEIC file and can be cleaned. The short video is a separate file and is not processed here.',
    },
    {
      q: 'Can I do this directly on my iPhone?',
      a: 'Yes. Open the page in Safari, choose photos from your library, clean them and save the results — no app needed.',
    },
    {
      q: 'Are HEIF and AVIF supported too?',
      a: 'Yes. They use the same container and are cleaned in place the same way.',
    },
    {
      q: 'Are my photos uploaded?',
      a: 'No. Photos are processed on your device and never sent to a server.',
    },
  ],
};

export default article;
