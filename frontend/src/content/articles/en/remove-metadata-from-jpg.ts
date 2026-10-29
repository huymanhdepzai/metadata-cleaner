import type { Article } from '../types';

const article: Article = {
  title: 'Remove Metadata from JPG Online — Lossless, No Upload',
  summary: [
    'Every JPG from a camera, phone or AI generator can carry EXIF (camera, time, GPS), XMP, IPTC and C2PA Content Credentials. Drop your JPG files into the tool on this page to see exactly what is inside and remove it in one click.',
    'The cleaner cuts metadata segments at the byte level, so the compressed image data is copied unchanged — no re-saving, no quality loss, and nothing is uploaded.',
  ],
  description:
    'Remove EXIF, GPS, XMP, IPTC and C2PA metadata from JPG/JPEG files in your browser. Lossless: image data is copied byte for byte. Free, no upload, batch + ZIP.',
  answer:
    'To remove metadata from a JPG online without losing quality, drop the file into the tool on this page and click “Remove AI metadata”. EXIF (including GPS), XMP, IPTC, C2PA and comments are cut out at the byte level while the compressed image data is copied unchanged, so the photo looks identical. Everything runs in your browser — the file is never uploaded.',
  sections: [
    {
      heading: 'What a JPG file can hide',
      paragraphs: ['A JPEG is a sequence of marker segments. Besides the image itself, it often contains:'],
      table: {
        head: ['Segment', 'What it can contain'],
        rows: [
          ['APP1 EXIF', 'Camera or phone model, capture time, exposure, GPS coordinates, an embedded thumbnail'],
          ['APP1 XMP', 'Edit history, author, keywords, AI fields such as IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Captions, credits, copyright notes'],
          ['APP11 JUMBF', 'C2PA Content Credentials — a signed record of how the image was made'],
          ['COM, APP2 MPF, data after EOI', 'Comments, preview images, the video part of motion photos'],
        ],
      },
      related: ['remove-exif', 'what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'How to remove metadata from a JPG in three steps',
      paragraphs: [],
      steps: [
        'Drop one or more JPG files into the tool above, or tap “Choose images”.',
        'Read the report: privacy details, AI & provenance signals and the full list of metadata found in each file.',
        'Click “Remove AI metadata”, then download each file or everything as one ZIP. The cleaned file is analyzed again so you can confirm nothing identifying is left.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Why lossless matters for JPG',
      paragraphs: [
        'JPEG is a lossy format: every time an image is decoded and saved again, it is re-compressed and loses a little detail. Many “remove metadata” tools work by redrawing the photo and exporting a new JPEG, which strips metadata but also lowers quality and can change colors.',
        'This tool never decodes the image. It removes metadata segments and copies the compressed image data exactly as it was, so the photo looks identical and the file usually gets smaller.',
      ],
      table: {
        head: ['Method', 'Removes metadata', 'Quality', 'Keeps color profile'],
        rows: [
          ['Byte-level cleaning (this tool)', 'Yes', 'Unchanged', 'Yes'],
          ['Re-saving or canvas redraw', 'Yes', 'Re-compressed', 'Often not'],
          ['Screenshot', 'Yes', 'Lower, resized', 'No'],
        ],
      },
    },
    {
      heading: 'What is kept in the cleaned JPG',
      paragraphs: [
        'Removing everything blindly can break how a photo displays. The cleaner keeps the parts that affect appearance: the JFIF header, the ICC color profile, the Adobe color-transform segment and the orientation, which is written back in a minimal EXIF block so the photo stays upright. Dimensions and image data are never changed.',
      ],
    },
    {
      heading: 'Common reasons to clean a JPG',
      paragraphs: [],
      bullets: [
        'Removing GPS before posting photos to marketplaces, forums or messaging apps.',
        'Removing camera serials, author names and editing history before delivering client work.',
        'Removing C2PA or AI fields that trigger an “AI info” label on a real photo.',
        'Removing prompts and generator details from AI-generated JPEGs.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions about cleaning JPG files',
  faq: [
    {
      q: 'Is JPG the same as JPEG?',
      a: 'Yes. .jpg, .jpeg and .jfif are the same format, and all three are supported.',
    },
    {
      q: 'Does removing metadata reduce JPG quality?',
      a: 'No. The compressed image data is copied byte for byte; only metadata segments are removed.',
    },
    {
      q: 'Are my photos uploaded anywhere?',
      a: 'No. Files are read and cleaned inside your browser; they never leave your device.',
    },
    {
      q: 'Will my photo be rotated after cleaning?',
      a: 'No. The orientation is written back in a minimal EXIF block, so the photo displays the same way.',
    },
    {
      q: 'What happens to motion photos?',
      a: 'Some phones append a short video after the JPEG image. That trailing data is removed together with the metadata, so the result is a regular still photo.',
    },
    {
      q: 'Is there a size limit?',
      a: 'Each JPG can be up to 25 MB and 40 megapixels, and you can clean up to 50 files per batch.',
    },
  ],
};

export default article;
