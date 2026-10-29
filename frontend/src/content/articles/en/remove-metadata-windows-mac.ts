import type { Article } from '../types';

const article: Article = {
  title: 'How to Remove Metadata from Photos on Windows and Mac',
  summary: [
    'Photos copied to a computer keep everything the camera or phone recorded: GPS location, capture time, device model and sometimes AI provenance data. Windows and macOS can show this information, but their built-in removal options are limited.',
    'Here is what File Explorer, Paint, Preview and Photos can and cannot remove, how ExifTool fits in, and a browser-based way to strip all metadata losslessly without installing anything.',
  ],
  description:
    'Remove metadata from photos on Windows 11/10 and macOS: what File Explorer, Preview and Photos can remove, their limits, and a lossless option with no install.',
  answer:
    'On Windows, right-click a photo, open Properties › Details and choose “Remove Properties and Personal Information”. On a Mac, Preview can remove only the GPS location, and Photos can leave location out when exporting. Neither removes every field, especially C2PA or AI prompts. To remove all metadata on either system without re-encoding, use a browser-based cleaner or ExifTool.',
  sections: [
    {
      heading: 'How to view photo metadata on Windows and Mac',
      paragraphs: [
        'Check the file before you remove anything, so you know what is actually there.',
      ],
      bullets: [
        'Windows: right-click the photo › Properties › Details. You will see the camera, date taken, dimensions and — if present — GPS latitude and longitude.',
        'Mac (Preview): open the photo, choose Tools › Show Inspector, then the “i” tab. EXIF, IPTC and GPS appear on separate tabs.',
        'Mac (Finder): select the file and press ⌘I; “More Info” shows a short summary such as dimensions and device.',
        'Both: built-in viewers skip blocks they do not understand, such as C2PA Content Credentials or the prompt text inside AI-generated PNGs. A dedicated metadata viewer shows those too.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Remove metadata on Windows 11 and 10 with File Explorer',
      paragraphs: [],
      steps: [
        'Select one or more photos in File Explorer, right-click and choose Properties.',
        'Open the Details tab and click “Remove Properties and Personal Information” at the bottom.',
        'Choose “Create a copy with all possible properties removed” to keep the original, or select individual fields to remove from the file itself.',
        'Click OK, then open the copy’s Details tab to check what is left.',
      ],
    },
    {
      heading: 'Limits of the Windows option',
      paragraphs: [
        'File Explorer only edits properties that Windows knows how to write for that format. It works best with JPEG; support for PNG, HEIC and WebP depends on installed codecs and is often partial. It is not designed to remove C2PA manifests, XMP blocks it does not map to properties, or the prompt and workflow text that AI tools store in PNG files. Re-saving in Paint does drop metadata, but it re-encodes the image and can lower its quality.',
      ],
    },
    {
      heading: 'Remove location on Mac with Preview and Photos',
      paragraphs: ['macOS has two built-in options, both focused on location:'],
      bullets: [
        'Preview: Tools › Show Inspector › “i” tab › GPS, then click “Remove Location Info”. Save the file. Camera model, capture time and other EXIF stay.',
        'Photos: select the photo and choose Image › Location › Hide Location, or use File › Export and leave “Location Information” unchecked. A JPEG export is re-encoded, and other metadata is still included.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'Built-in options compared',
      paragraphs: [],
      table: {
        head: ['Method', 'GPS location', 'Camera and date', 'C2PA and AI prompts', 'Image quality'],
        rows: [
          ['Windows › Remove Properties', 'Removed (JPEG)', 'Removed (JPEG)', 'Not designed for it', 'Unchanged'],
          ['Re-save in Paint', 'Usually removed', 'Usually removed', 'Usually removed', 'Re-encoded'],
          ['Mac Preview › Remove Location Info', 'Removed', 'Kept', 'Kept', 'Unchanged'],
          ['Mac Photos export, location off', 'Removed', 'Kept', 'Not reliably', 'Re-encoded (JPEG)'],
          ['Browser metadata cleaner', 'Removed', 'Removed', 'Removed', 'Unchanged'],
        ],
      },
    },
    {
      heading: 'Remove all metadata on Windows or Mac — no install',
      paragraphs: [
        'The cleaner on this page runs in any desktop browser on Windows, macOS or Linux. Files are processed on your computer and never uploaded.',
      ],
      steps: [
        'Drag up to 50 JPG, PNG, WebP, GIF, HEIC or AVIF files into the drop zone at the top of this page.',
        'Review the report: location, personal data, capture time and AI signals are listed per file.',
        'Click “Remove AI metadata”. Only metadata blocks are cut; the image data is copied byte for byte.',
        'Download the files one by one or as a single ZIP, and keep your originals.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'Using ExifTool from the command line',
      paragraphs: [
        'ExifTool is a free command-line program for Windows, macOS and Linux and is the most thorough option for scripted work. “exiftool -all= photo.jpg” deletes all writable metadata and keeps a backup named photo.jpg_original. Note that this also removes the color profile and orientation tag; to keep them, run “exiftool -all= -tagsfromfile @ -icc_profile -orientation photo.jpg”. Always check the result with a viewer, because coverage differs by format.',
      ],
    },
  ],
  faqHeading: 'Questions about removing metadata on a computer',
  faq: [
    {
      q: 'Does “Remove Properties and Personal Information” remove everything?',
      a: 'No. It removes the properties Windows can edit for that format, mainly EXIF in JPEG files. C2PA manifests, unsupported XMP and PNG text chunks can remain, so check the copy before sharing.',
    },
    {
      q: 'Can I remove all EXIF data in Preview on a Mac?',
      a: 'No. Preview can only remove the GPS location. Camera, lens, date and other fields stay in the file.',
    },
    {
      q: 'Does exporting from Mac Photos remove metadata?',
      a: 'Only partly. With “Location Information” unchecked the GPS is left out, but camera and date details are kept, and a JPEG export is re-compressed.',
    },
    {
      q: 'Is there a way that does not reduce image quality?',
      a: 'Yes. Windows File Explorer, ExifTool and the browser cleaner on this page remove metadata without re-encoding. Re-saving in Paint or exporting as JPEG re-compresses the image.',
    },
    {
      q: 'Can I clean many photos at once on my computer?',
      a: 'Yes. File Explorer accepts multiple selected files, ExifTool works on whole folders, and the browser cleaner handles up to 50 images per batch with a ZIP download.',
    },
    {
      q: 'Are my photos uploaded when I use the browser cleaner?',
      a: 'No. The files are read and cleaned inside your browser on your own computer and are never sent to a server.',
    },
  ],
};

export default article;
