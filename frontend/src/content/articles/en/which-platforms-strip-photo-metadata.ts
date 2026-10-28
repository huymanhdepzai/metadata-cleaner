import type { Article } from '../types';

const article: Article = {
  title: 'Which Apps and Social Networks Strip Photo Metadata? (And When Your GPS Still Leaks)',
  summary: [
    'Many people assume social media removes location data from photos. Often it does — for the published copy. But the original file can still travel with full EXIF through messaging apps, email, cloud links and file-sharing sites.',
    'This guide explains which sharing paths usually keep or remove metadata, how to test any app yourself, and the only reliable habit: clean the file before it leaves your device.',
  ],
  seoTitle: 'Which Apps Strip Photo Metadata? (GPS & EXIF Guide)',
  description:
    'Which social networks and messaging apps remove photo metadata, which sharing methods keep GPS and EXIF, and how to make sure your photos are clean before sending.',
  answer:
    'Large social networks such as Facebook, Instagram and X usually strip EXIF — including GPS — from the photos they publish, and many messaging apps do the same for compressed images. Photos sent as files or documents, email attachments, cloud links, AirDrop and many forums or marketplaces keep the original metadata. The reliable fix is to remove metadata yourself before sharing.',
  sections: [
    {
      heading: 'Published copies vs. original files',
      paragraphs: [
        'When you post a photo to a feed, most large platforms re-encode it and strip EXIF from the public copy. That protects viewers from seeing your GPS position, but the platform itself still receives the original during upload. The bigger risk is everywhere the original file is passed on unchanged.',
      ],
    },
    {
      heading: 'Does it keep metadata? Common sharing methods',
      paragraphs: ['Typical behavior — always verify with your own app version:'],
      table: {
        head: ['Sharing method', 'GPS and EXIF', 'Notes'],
        rows: [
          ['Facebook, Instagram, X feed posts', 'Usually stripped', 'The platform still receives the original on upload'],
          ['Messaging apps, sent as a photo', 'Usually stripped', 'The image is also compressed'],
          ['Messaging apps, sent as a file or document', 'Kept', 'WhatsApp and Telegram deliver the original file'],
          ['Email attachments', 'Kept', 'The file is sent as is'],
          ['Cloud links (Drive, Dropbox, iCloud)', 'Kept', 'Anyone with the link gets the original'],
          ['AirDrop, Bluetooth, USB', 'Kept', 'iPhone can exclude location via share Options'],
          ['Forums, marketplaces, portfolio sites', 'Often kept', 'Depends on whether the site re-encodes uploads'],
        ],
      },
    },
    {
      heading: 'Messaging apps: photo vs. file',
      paragraphs: [
        'Most messaging apps offer two ways to send an image. As a regular photo, it is compressed and most metadata is removed. As a file or document — often chosen to keep full quality — the original is delivered with every EXIF field, including GPS. People often switch to “send as file” for quality without realizing it also sends their location.',
      ],
    },
    {
      heading: 'Platforms that show EXIF on purpose',
      paragraphs: [
        'Some photography communities and portfolio sites display camera settings next to each photo, and some keep the original file available for download. If you post there, assume your metadata is public unless you clean it first.',
      ],
    },
    {
      heading: 'How to test any app yourself',
      paragraphs: ['Apps update their handling of media regularly. To know for sure:'],
      steps: [
        'Take a test photo with location enabled.',
        'Send it to yourself the way you normally share photos.',
        'Download the received file and drop it into the checker at the top of this page.',
        'The “Privacy details” panel shows immediately whether location, personal or time data survived.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Clean before you share',
      paragraphs: [
        'The safest habit is to remove metadata before a photo leaves your device. This tool strips GPS, date, camera and author fields as well as hidden preview images, keeps orientation and colors, and processes everything locally — ideal for photos you send to strangers, buyers or clients.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Questions about platforms and photo metadata',
  faq: [
    {
      q: 'Does WhatsApp remove GPS from photos?',
      a: 'Photos sent as regular images are compressed and lose most metadata. Photos sent as documents keep the original file, including GPS.',
    },
    {
      q: 'Does Instagram keep my photo’s location?',
      a: 'The published image is stripped of EXIF. A location tag you add to the post is separate and visible to viewers.',
    },
    {
      q: 'Does email remove photo metadata?',
      a: 'No. Attachments are sent as they are, so GPS and other EXIF fields stay in the file unless your app resizes it.',
    },
    {
      q: 'Does Google Drive or iCloud remove metadata from shared photos?',
      a: 'Shared links normally give access to the original file, including its metadata. Clean the photo before uploading if you plan to share it.',
    },
    {
      q: 'Is taking a screenshot a good way to remove metadata?',
      a: 'It removes EXIF but lowers quality, changes dimensions and may capture other things on your screen. Lossless cleaning keeps the original image intact.',
    },
    {
      q: 'If a platform strips metadata, is my location safe?',
      a: 'From viewers, mostly — but the platform received the original file, and the visible content of the photo can still reveal where it was taken.',
    },
  ],
};

export default article;
