import type { Article } from '../types';

const article: Article = {
  title: 'Best Metadata Remover Tools in 2026: 8 Options Compared',
  seoTitle: 'Best Metadata Removers 2026: 8 Tools Compared',
  summary: [
    'Every photo can carry hidden data: GPS location, capture time, device serial numbers, and — for AI images — C2PA Content Credentials or the full prompt. Dozens of tools promise to remove it, but they differ in what they actually strip, whether they re-encode the image and whether your files leave your device.',
    'Here are the eight metadata removers worth knowing in 2026, from browser tools and ExifTool to the options already built into Windows, macOS and your phone, with what each one removes and where it falls short.',
  ],
  description:
    'Best metadata remover tools in 2026 compared: All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, phones and editors — what each removes and its limits.',
  answer:
    'The best metadata remover depends on how you work. For quick, private cleanup of JPG, PNG, WebP, HEIC and AI images, a browser-based cleaner such as All Metadata Cleaner removes EXIF, GPS, C2PA and prompts without uploading or re-encoding. ExifTool is the most thorough choice for scripts, RAW files and selective edits. The built-in options in Windows, macOS and phones mostly remove location only.',
  sections: [
    {
      heading: 'How we compared metadata removers',
      paragraphs: [
        'Disclosure: All Metadata Cleaner is the tool on this site. It is listed first because this is its guide, not because every other option is worse — several tools below are better for specific jobs, and we say so. Each entry describes documented behavior, judged on five questions:',
      ],
      bullets: [
        'Coverage: does it remove EXIF and GPS only, or also XMP, IPTC, C2PA Content Credentials and AI prompts stored in PNG text?',
        'Quality: does it cut metadata out of the file, or decode and re-compress the image?',
        'Privacy: are files processed on your device, or uploaded to a server?',
        'What it keeps: orientation and color profile, so the cleaned photo still looks right.',
        'Effort: install, command line or one click — and whether it handles batches.',
      ],
    },
    {
      heading: 'Metadata remover comparison table',
      paragraphs: [],
      table: {
        head: ['Tool', 'Platform', 'Price', 'C2PA and AI prompts', 'Image quality'],
        rows: [
          ['All Metadata Cleaner', 'Any browser', 'Free', 'Removed', 'Unchanged'],
          ['ExifTool', 'Windows, macOS, Linux (command line)', 'Free, open source', 'Removed (-all= or -jumbf:all=)', 'Unchanged'],
          ['ExifCleaner', 'Windows, macOS, Linux (app)', 'Free, open source', 'Via ExifTool — check the result', 'Unchanged'],
          ['Windows File Explorer', 'Windows', 'Built in', 'Not designed for it', 'Unchanged'],
          ['Mac Preview and Photos', 'macOS', 'Built in', 'No — location only', 'Preview unchanged, Photos export re-encoded'],
          ['iPhone and Android sharing', 'iOS, Android', 'Built in', 'No — location only', 'Varies by app'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (command line)', 'Free, open source', 'Usually, as the file is rewritten', 'Re-encoded (JPEG, WebP)'],
          ['Photo editor export', 'Photoshop, Lightroom, GIMP', 'Paid or free', 'Depends on export settings', 'Re-encoded'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner — best for quick, private cleanup',
      paragraphs: [
        'A free web tool that runs entirely in your browser: images are read and cleaned on your device and never uploaded. It removes EXIF (including GPS), XMP, IPTC, C2PA Content Credentials and the prompts or ComfyUI workflows that AI generators store in PNG text. Metadata blocks are cut at the byte level, so the image data is copied unchanged, and the orientation and ICC color profile are kept so photos display exactly as before. HEIC and AVIF stay in their original format.',
        'Before cleaning, a report lists what each file contains — location, personal data, capture time and AI signals. Limits: JPG, PNG, WebP, GIF, HEIC and AVIF only (no RAW, video or PDF), up to 25 MB and 50 images per batch, and it removes everything identifying at once rather than letting you pick single fields.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool — best for power users and automation',
      paragraphs: [
        'ExifTool by Phil Harvey is the reference metadata tool: free, open source and supporting far more formats than any other option here, including camera RAW files and video. “exiftool -all= photo.jpg” removes all writable metadata, “-jumbf:all=” removes only the C2PA block, and you can delete or keep individual tags — something one-click tools do not offer.',
        'The trade-off is the command line, and the defaults need care: “-all=” also deletes the color profile and orientation tag unless you copy them back with “-tagsfromfile @ -icc_profile -orientation”. It keeps a backup named “_original” next to each file until you remove it.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner — best desktop app with drag and drop',
      paragraphs: [
        'ExifCleaner is a free, open-source desktop app for Windows, macOS and Linux that puts a drag-and-drop window in front of ExifTool. Drop files or a whole folder and it strips metadata offline. Version 4, released in 2026, was its first major rebuild in five years and added options to save a cleaned copy and to preserve orientation. Turn on saving as a copy if you want to keep your originals, and check the result on AI images, as C2PA coverage depends on the bundled ExifTool version.',
      ],
    },
    {
      heading: '4. Windows File Explorer — built in, best for JPEG',
      paragraphs: [
        'Right-click a photo › Properties › Details › “Remove Properties and Personal Information” removes the properties Windows can edit, and can save a clean copy. It works well for EXIF in JPEG files and accepts several files at once. Support for PNG, HEIC and WebP depends on installed codecs, and it is not designed to remove C2PA manifests or AI prompts.',
      ],
    },
    {
      heading: '5. Mac Preview and Photos — built in, location only',
      paragraphs: [
        'Preview can remove the GPS location (Tools › Show Inspector › GPS › Remove Location Info) without touching image quality, and Photos can leave location out on export. Camera, date and other EXIF stay in both cases, and a JPEG export from Photos is re-compressed. Good enough when location is your only concern.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. iPhone and Android sharing options — location only',
      paragraphs: [
        'On iPhone, tap Options at the top of the share sheet and turn off Location before sending. On Android, Google Photos and many share sheets offer to remove location data from shared copies. These are the easiest way to stop sharing where a photo was taken, but other EXIF fields stay, and settings differ by app and phone maker.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick — scripting, with re-encoding',
      paragraphs: [
        '“magick mogrify -strip *.jpg” removes profiles and comments from whole folders, and ImageMagick is free on every desktop system. Unlike ExifTool, it decodes and re-writes the image, so JPEG and WebP files are re-compressed, and -strip also drops the ICC color profile, which can shift colors in wide-gamut photos. Use it when you are resizing or converting anyway, not as a pure metadata remover.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom and GIMP — export without metadata',
      paragraphs: [
        'Every major editor lets you leave metadata out on export: Photoshop’s Export As can include no metadata at all, Lightroom’s export can be limited to copyright only, and GIMP lets you untick EXIF and XMP when exporting. Exporting always re-encodes the image, and Adobe apps can attach Content Credentials if that setting is on, so check it first.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'What about online metadata removers that upload your photo?',
      paragraphs: [
        'Many websites clean metadata by uploading your file to their server and sending back a copy. Some work well, but you are handing over the original — with its GPS location and personal details — to a third party, and many re-compress the image. If you use one, read its privacy policy for how long files are kept. Browser-based tools that process files locally avoid the problem entirely.',
      ],
    },
    {
      heading: 'Which metadata remover should you choose?',
      paragraphs: [],
      bullets: [
        'Sharing a few photos or AI images privately, without installing anything: All Metadata Cleaner.',
        'Scripts, RAW files, video or removing only specific tags: ExifTool.',
        'A desktop app you can use offline with drag and drop: ExifCleaner.',
        'Only the location, right before sending from your phone: the share sheet’s location toggle.',
        'Already editing or resizing the photo: export without metadata from your editor.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'What no metadata remover can do',
      paragraphs: [
        'All of these tools edit metadata, not pixels. None can remove invisible watermarks embedded in the image itself, such as Google’s SynthID, and platforms can still label images using their own detection. Removing metadata also does not change any obligation to disclose AI-generated content where a platform or law requires it.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions about metadata remover tools',
  faq: [
    {
      q: 'What is the best free metadata remover?',
      a: 'For most people, a browser-based cleaner such as All Metadata Cleaner: free, no install, no upload and no quality loss. For scripting, RAW files or selective edits, ExifTool is the most complete free option.',
    },
    {
      q: 'Is it safe to use an online metadata remover?',
      a: 'It depends on whether the file is uploaded. Tools that process images in your browser never send them anywhere. Upload-based sites receive your original photo, including its location, so check their privacy policy.',
    },
    {
      q: 'Does removing metadata reduce image quality?',
      a: 'Not with tools that cut out metadata blocks, such as All Metadata Cleaner, ExifTool, ExifCleaner and Windows File Explorer. Exporting from an editor, ImageMagick or Mac Photos re-encodes the image and can lower its quality.',
    },
    {
      q: 'Which tools remove C2PA Content Credentials?',
      a: 'All Metadata Cleaner and ExifTool (with -all= or -jumbf:all=) remove C2PA manifests. The built-in options in Windows, macOS and phones are not designed to remove them.',
    },
    {
      q: 'Can I remove only the GPS location and keep the other metadata?',
      a: 'Yes, with ExifTool (exiftool -gps:all= photo.jpg), Mac Preview or your phone’s share options. All Metadata Cleaner removes all identifying metadata at once.',
    },
    {
      q: 'Can any of these tools remove invisible AI watermarks like SynthID?',
      a: 'No. SynthID and similar watermarks are part of the pixels, not the metadata, so metadata removers leave them in place.',
    },
  ],
};

export default article;
