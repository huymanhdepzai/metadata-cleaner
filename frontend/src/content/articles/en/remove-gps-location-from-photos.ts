import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remove Location from Photos (GPS) — Free, No Upload',
  description:
    'Phone photos can reveal your exact location, device and capture time. See which EXIF fields are risky, where they leak and how to remove GPS without quality loss.',
  answer:
    'Most phone photos store GPS coordinates in their EXIF metadata, often accurate to a few meters, plus the capture time and device model. To remove the location, drop the photo into a metadata cleaner that strips the GPS and other identifying EXIF fields while keeping orientation and colors, then share the cleaned copy. Turning off location in your camera only affects new photos.',
  sections: [
    {
      heading: 'What your phone writes into every photo',
      paragraphs: ['With location access enabled, a typical smartphone photo contains:'],
      bullets: [
        'GPS latitude, longitude and altitude — often accurate to a few meters — plus a GPS timestamp and sometimes the direction the camera was facing.',
        'The exact date and time the photo was taken and last edited, often with a time-zone offset.',
        'Device make and model, lens details and sometimes serial numbers or an owner name.',
        'Embedded preview images and secondary images (for example MPF images or depth maps) that can carry their own copy of the same EXIF data.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Why photo location data is a privacy risk',
      paragraphs: [
        'A single photo taken at home can reveal your address. A series of photos can reveal routines — when you leave for work, where your children go to school, where you spend weekends. For people selling items online, sharing photos with strangers or posting from sensitive places, location metadata is the most common accidental leak.',
      ],
    },
    {
      heading: 'Where location data leaks',
      paragraphs: [
        'Many large social networks remove EXIF when they publish your photo, but plenty of channels deliver the original file unchanged:',
      ],
      bullets: [
        'Sending a photo “as a file” or as a document in messaging apps.',
        'Email attachments and shared cloud links.',
        'Forums, marketplaces, classifieds and portfolio sites that keep the original upload.',
        'AirDrop, Bluetooth and USB transfers between devices.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'How to check if a photo has a GPS location',
      paragraphs: [],
      steps: [
        'Drop the photo into the tool at the top of this page — it is analyzed locally and never uploaded.',
        'The “Privacy details” panel shows at a glance whether location, personal or time fields are present, and the decoded GPS position in decimal coordinates.',
        '“All metadata & file details” lists every field, grouped by EXIF IFD0, Exif and GPS.',
      ],
    },
    {
      heading: 'How to remove GPS location from a photo',
      paragraphs: [],
      steps: [
        'Drop one photo or a batch of photos into the tool.',
        'Click “Remove AI metadata”. GPS, date, camera, author and software fields are removed, together with embedded thumbnails and MPF secondary images that would otherwise keep a hidden copy.',
        'Check the green result panel to confirm that no location data remains, then download the photo or a ZIP of the batch.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Remove location without rotating or recompressing',
      paragraphs: [
        'Naive EXIF removal can make portrait photos appear sideways, because rotation is stored as an EXIF tag. The cleaner writes the orientation back in a minimal EXIF block, keeps the color profile so colors stay accurate, and copies the image data byte for byte. iPhone HEIC photos are cleaned in place without converting them to JPEG.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Stop recording location in new photos',
      paragraphs: ['You can also prevent location tagging at the source:'],
      bullets: [
        'iPhone: Settings › Privacy & Security › Location Services › Camera › Never. When sharing a single photo, tap Options in the share sheet and turn off Location.',
        'Android: turn off the location option in your camera app’s settings — the name and position vary by manufacturer.',
      ],
      table: {
        head: ['Method', 'Removes GPS', 'Removes device and time', 'Works on old photos'],
        rows: [
          ['Camera location setting off', 'For new photos', 'No', 'No'],
          ['Share sheet “Location” off', 'For that share', 'No', 'Yes, per share'],
          ['Metadata cleaner', 'Yes', 'Yes', 'Yes'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Questions about GPS and photo privacy',
  faq: [
    {
      q: 'Do social networks remove GPS data automatically?',
      a: 'Many large platforms strip EXIF from the published image, but files sent as attachments, documents or cloud links usually keep the original metadata.',
    },
    {
      q: 'Can someone find my location from a photo?',
      a: 'If the photo still contains GPS EXIF, yes — any metadata viewer shows the coordinates on a map. Without metadata, only the visible content of the image can give clues.',
    },
    {
      q: 'Will my photo be rotated after cleaning?',
      a: 'No. The orientation tag is preserved, so the photo displays the same way as before.',
    },
    {
      q: 'Does it work with iPhone HEIC photos?',
      a: 'Yes. HEIC and HEIF files are cleaned in place, without conversion and without re-encoding the image.',
    },
    {
      q: 'Does turning off location remove it from photos I already took?',
      a: 'No. It only affects new photos. Existing photos keep their location until you remove it.',
    },
    {
      q: 'Is my photo uploaded when I remove the location?',
      a: 'No. Everything happens in your browser; the photo never leaves your device.',
    },
  ],
};

export default article;
