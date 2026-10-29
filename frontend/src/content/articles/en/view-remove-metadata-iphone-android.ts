import type { Article } from '../types';

const article: Article = {
  title: 'How to View and Remove Photo Metadata on iPhone and Android',
  summary: [
    'Your phone records where and when each photo was taken, plus the device model. Both iOS and Android let you view this information and remove the location before sharing.',
    'Here are the built-in options, their limits, and a browser-based way to remove all identifying metadata — including from iPhone HEIC photos — without installing an app.',
  ],
  description:
    'View photo metadata on iPhone and Android, remove the location before sharing and strip all EXIF — including HEIC photos — in your browser without installing an app.',
  answer:
    'On iPhone, open a photo and swipe up to see its date, camera and location; on Android, open it in Google Photos and swipe up. Both let you remove or hide the location, but device model, capture time and other EXIF fields usually remain. To remove all metadata, open a browser-based cleaner on your phone, select the photos and download the cleaned copies — no app needed.',
  sections: [
    {
      heading: 'How to view photo metadata on iPhone',
      paragraphs: [],
      steps: [
        'Open the photo in the Photos app.',
        'Swipe up, or tap the info (i) button.',
        'You will see the date and time, the camera and lens, exposure details and — if location was enabled — a map.',
        'Tap Adjust next to the date to change the date, time or location of that photo.',
      ],
    },
    {
      heading: 'How to remove location when sharing from iPhone',
      paragraphs: ['Two built-in options help:'],
      bullets: [
        'In the share sheet, tap Options at the top and turn off Location before sending.',
        'To stop recording location for new photos, go to Settings › Privacy & Security › Location Services › Camera and choose Never.',
      ],
    },
    {
      heading: 'How to view and remove metadata on Android',
      paragraphs: [
        'In Google Photos, open a photo and swipe up to see details such as date, device and location; depending on the version you can edit or remove the location there. Samsung Gallery and other gallery apps show similar details. To stop tagging new photos, turn off the location option in your camera app’s settings — its name and position vary by manufacturer.',
      ],
    },
    {
      heading: 'What built-in options do not remove',
      paragraphs: [
        'Phone settings focus on location. The device model, capture time, lens details, editing software and embedded previews usually remain, and settings only affect future photos or a single share. Files copied to a computer or sent through other apps keep everything.',
      ],
      table: {
        head: ['Option', 'Location', 'Device and time', 'All photos at once'],
        rows: [
          ['iPhone share Options › Location off', 'Removed for that share', 'Kept', 'Per share'],
          ['Camera location setting off', 'Not recorded in new photos', 'Kept', 'New photos only'],
          ['Google Photos remove location', 'Removed in the app', 'Kept', 'Per photo'],
          ['Browser metadata cleaner', 'Removed', 'Removed', 'Up to 50 per batch'],
        ],
      },
    },
    {
      heading: 'Remove all metadata on your phone — no app needed',
      paragraphs: [],
      steps: [
        'Open this site in Safari, Chrome or any mobile browser.',
        'Tap “Choose images” and select the photos you want to share.',
        'Review the report, then tap “Remove AI metadata”.',
        'Save the cleaned photos, or download them all as a ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'remove-metadata-windows-mac'],
    },
    {
      heading: 'iPhone HEIC photos stay HEIC',
      paragraphs: [
        'iPhones save photos as HEIC by default. Many tools convert them to JPEG to clean them, which re-compresses the photo. This cleaner removes the metadata inside the HEIC file itself, keeps orientation and colors, and leaves the image data untouched.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Questions about phone photo metadata',
  faq: [
    {
      q: 'Does turning off location remove it from photos I already took?',
      a: 'No. It only affects new photos. Existing photos keep their location until you remove it.',
    },
    {
      q: 'Are iPhone HEIC photos supported?',
      a: 'Yes. HEIC files are cleaned directly, without converting them to JPEG and without re-encoding the image.',
    },
    {
      q: 'Does the iPhone share option remove all metadata?',
      a: 'Mainly the location. Other details such as the device model and capture time can remain in the shared file.',
    },
    {
      q: 'Do I need to install an app to remove metadata?',
      a: 'No. The cleaner runs in your mobile browser, and photos are processed on the phone without being uploaded.',
    },
    {
      q: 'How do I see the GPS location of a photo?',
      a: 'On iPhone, swipe up on the photo to see the map. On any device, drop the photo into the checker to see the decoded coordinates under “Privacy details”.',
    },
    {
      q: 'Will cleaned photos still appear in the right order in my gallery?',
      a: 'Capture dates are removed, so galleries may sort cleaned copies by when they were saved. Keep your originals for your own library.',
    },
  ],
};

export default article;
