import type { Article } from '../types';

const article: Article = {
  title: 'What Is EXIF Data? A Plain-English Guide to Photo Metadata',
  summary: [
    'EXIF (Exchangeable Image File Format) is the hidden information a camera or phone writes into every photo: camera settings, date and time, device model and often the GPS location.',
    'This guide explains what EXIF contains, how it differs from XMP, IPTC and C2PA, why it matters for privacy, and how to view or remove it safely.',
  ],
  description:
    'What EXIF data is, which fields it contains (camera, time, GPS), how it differs from XMP, IPTC and C2PA, and how to view or remove it without losing quality.',
  answer:
    'EXIF data is metadata that cameras and phones store inside a photo: the device make and model, exposure settings, the date and time, the orientation, a small thumbnail and often the GPS location. It does not affect how the image looks. You can view it in your phone’s photo info or with a metadata viewer, and remove it with a cleaner that keeps the orientation and color profile.',
  sections: [
    {
      heading: 'What EXIF stands for',
      paragraphs: [
        'EXIF stands for Exchangeable Image File Format, a standard created for digital cameras so that every photo can carry information about how it was taken. Almost every camera and smartphone writes EXIF automatically, and most photo apps can read it.',
      ],
    },
    {
      heading: 'What EXIF data contains',
      paragraphs: ['A typical photo can include:'],
      table: {
        head: ['Group', 'Example fields'],
        rows: [
          ['Device', 'Make, Model, LensModel, sometimes a serial number'],
          ['Exposure', 'ISO, FNumber (aperture), ExposureTime (shutter speed), FocalLength, Flash'],
          ['Date and time', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Location', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Image', 'Orientation, resolution, embedded thumbnail'],
          ['Software', 'Software, the app that last saved the file'],
        ],
      },
    },
    {
      heading: 'Where EXIF is stored in the file',
      paragraphs: [
        'In JPEG files, EXIF sits in an APP1 segment near the start of the file and is organized into directories (IFDs): IFD0 for basic image and device data, the Exif directory for camera settings, the GPS directory for location and IFD1 for the thumbnail. HEIC, WebP and PNG files can carry EXIF too, in their own containers.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF vs. XMP vs. IPTC vs. C2PA',
      paragraphs: ['Photos often carry several kinds of metadata at once:'],
      table: {
        head: ['Standard', 'Written by', 'Typical content'],
        rows: [
          ['EXIF', 'Cameras and phones', 'Technical capture data, time, GPS'],
          ['XMP', 'Editing software', 'Descriptions, keywords, edit history, AI fields'],
          ['IPTC', 'Newsrooms, stock agencies, editors', 'Captions, credits, rights, DigitalSourceType'],
          ['C2PA', 'Cameras, editors, AI services', 'Signed Content Credentials: provenance and edits'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Why EXIF data matters for privacy',
      paragraphs: [
        'For photographers, EXIF is a learning tool and a record of their work. For everyone else it is mostly a privacy risk: a single photo can reveal your home address, your device and when you were somewhere. EXIF is also easy to edit, so it should never be treated as proof on its own.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'How to view EXIF data',
      paragraphs: [],
      bullets: [
        'Windows: right-click the file › Properties › Details.',
        'Mac: open the photo in Preview › Tools › Show Inspector.',
        'iPhone and Android: open the photo and swipe up.',
        'Any device: drop the photo into the tool at the top of this page to decode every EXIF, XMP and IPTC field, grouped by source.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'How to remove EXIF data safely',
      paragraphs: [
        'When removing EXIF, keep the orientation tag so photos are not rotated, keep the color profile so colors stay accurate, and avoid tools that re-compress the image. This tool does all three automatically: click “Remove AI metadata”, check the result panel and download the cleaned file.',
      ],
    },
  ],
  faqHeading: 'Questions about EXIF data',
  faq: [
    {
      q: 'Does EXIF affect image quality?',
      a: 'No. EXIF is stored separately from the image data, so removing it does not change how the image looks.',
    },
    {
      q: 'Can EXIF data be faked?',
      a: 'Yes. EXIF fields can be edited with common tools, so they are useful clues but never proof on their own.',
    },
    {
      q: 'Is orientation part of EXIF, and do you keep it?',
      a: 'Yes, orientation is an EXIF tag. The cleaner writes it back in a minimal EXIF block so your photos keep displaying the right way up.',
    },
    {
      q: 'Do screenshots have EXIF data?',
      a: 'Screenshots usually have little EXIF, but they can still contain the date, device and the software that created them.',
    },
    {
      q: 'Do PNG files have EXIF?',
      a: 'They can, in an eXIf chunk, but PNG metadata is more often stored as text chunks — which is where AI tools put prompts.',
    },
    {
      q: 'Is it legal to remove EXIF data?',
      a: 'Removing metadata from your own photos is generally fine. Do not remove copyright or credit information from images you do not own if a license requires it.',
    },
  ],
};

export default article;
