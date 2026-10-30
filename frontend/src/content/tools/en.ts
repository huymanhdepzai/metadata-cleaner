import type { ToolsContent } from './types';

/** Bản gốc (English) — mọi ngôn ngữ khác phải có cùng cấu trúc (số bước, số câu hỏi). */
const tools: ToolsContent = {
  hub: {
    title: 'Free Metadata Cleaner Tools',
    description:
      'Free browser tools to view, analyze and remove image metadata: EXIF viewer, photo privacy check, metadata size checker, EXIF, GPS and C2PA remover.',
    intro:
      'Every tool runs in your browser with the same engine: your images are never uploaded, and nothing is re-compressed. Pick what you need — look inside a photo, check what it reveals, or clean it.',
  },
  cards: {
    cleaner: { name: 'Remove image metadata', text: 'Remove EXIF, GPS, XMP, IPTC, C2PA and AI prompts in one click, without losing quality.', detail: 'Drop your images, review the report, then download clean copies; pixels, orientation and color profile stay untouched.' },
    'view-metadata': { name: 'View metadata', text: 'See every hidden field in a photo: camera, date, GPS, XMP, C2PA and AI prompts.', detail: 'Read-only: the file is never changed, so it is safe for checking photos you received or downloaded.' },
    'privacy-check': { name: 'Photo privacy check', text: 'Find out what a photo reveals — location on a map, personal data and capture time.', detail: 'Rates each photo as high, medium or low risk and shows GPS coordinates you can open on a map.' },
    'metadata-size': { name: 'Metadata size checker', text: 'Measure how many bytes of metadata a file carries and how risky they are.', detail: 'Lists metadata blocks by size, so you can see whether thumbnails, XMP or embedded prompts make a file larger.' },
    'remove-exif': { name: 'Remove EXIF', text: 'Delete camera, date and serial number data while keeping orientation and colors.', detail: 'Works on JPG, HEIC, PNG and WebP; a minimal orientation tag is kept so photos never turn sideways.' },
    'remove-gps': { name: 'Remove GPS location', text: 'Strip GPS coordinates from phone photos before you share them.', detail: 'Useful before posting photos of your home, children or workplace, or sending them to strangers.' },
    'remove-c2pa': { name: 'Remove C2PA', text: 'Remove Content Credentials (C2PA) manifests from JPG, PNG, WebP and HEIC.', detail: 'Removes the manifest that triggers AI labels; invisible pixel watermarks such as SynthID are not affected.' },
    'remove-prompts': { name: 'Remove AI prompts', text: 'Remove Stable Diffusion parameters and ComfyUI workflows from PNG files.', detail: 'Hides your prompt, seed, model and node graph so others cannot copy your generation settings.' },
    batch: { name: 'Batch cleaner', text: 'Clean up to 50 images at once and download them as one ZIP file.', detail: 'Each file keeps its original format; files that cannot be processed are listed with the reason.' },
  },
  groups: {
    inspect: { title: 'Check your photos', text: 'See what an image reveals before you share it — the file is only read, never changed.' },
    remove: { title: 'Remove metadata by need', text: 'Pick a format or task — each guide has the cleaner built in.' },
  },
  tools: {
    'view-metadata': {
      title: 'View Image Metadata Online — EXIF, XMP, C2PA',
      description:
        'Free online metadata viewer: see EXIF, GPS, XMP, IPTC, C2PA Content Credentials and AI prompts in JPG, PNG, WebP and HEIC — in your browser, no upload.',
      intro:
        'Drop a photo to see every piece of hidden information it carries — camera and lens, capture date, GPS position, editing software, Content Credentials and AI prompts — grouped by source. Nothing is changed and nothing is uploaded.',
      steps: [
        'Drop one or more images into the box above, or tap “Choose images”.',
        'Open a file to see the privacy summary, AI signals and the full list of metadata fields.',
        'Search the fields, then decide whether to keep the file as it is or remove its metadata.',
      ],
      faq: [
        {
          q: 'Does viewing metadata change my file?',
          a: 'No. The file is only read. To remove metadata, use the cleaner — your images stay loaded so you do not need to add them again.',
        },
        {
          q: 'Which metadata can I see?',
          a: 'EXIF (including GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG text chunks with prompts or ComfyUI workflows, and the file structure blocks.',
        },
        {
          q: 'Are my photos uploaded?',
          a: 'No. Files are read by your browser and never leave your device.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'What each metadata group tells you',
            text: 'The viewer groups every field by where it is stored in the file. Each group is written by a different program for a different purpose, so knowing the source tells you how much to trust a value and how sensitive it is.',
            items: [
              { term: 'EXIF', text: 'Written by the camera or phone: make and model, lens, exposure, capture date and time zone offset. It can also contain the owner name, a body serial number and a MakerNote with vendor-specific data.' },
              { term: 'EXIF · GPS', text: 'Latitude and longitude, often accurate to a few meters, plus altitude and sometimes the direction the camera was pointing. This is the field most people want to check before sharing.' },
              { term: 'XMP', text: 'Added by editing software such as Lightroom or Photoshop: the tool used, edit history, ratings and keywords. AI tools also use XMP to declare that an image was generated.' },
              { term: 'IPTC', text: 'Captions, creator, credit line and copyright notice, mostly used by news agencies and stock sites.' },
              { term: 'C2PA', text: 'Content Credentials: a signed manifest recording which app or AI model created the image and which edits were made. Platforms read it to show “AI info” labels.' },
              { term: 'PNG text', text: 'Free text chunks. Stable Diffusion stores the prompt, seed and model here; ComfyUI stores the full node workflow as JSON.' },
              { term: 'ICC', text: 'The color profile. It contains no personal data and is needed to show colors correctly.' },
            ],
          },
          {
            title: 'How to read the report',
            text: 'Each file opens with a privacy summary that lists location, personal and time fields found. Below it, the AI section gives one of three verdicts: “AI signals detected” when the metadata names an AI tool, contains a prompt or declares AI generation; “Needs a closer look” when Content Credentials are present without an explicit AI statement; and “No AI signals” when nothing was found. The full table comes last. Use the search box to jump to what matters — typing “GPS”, “Serial”, “Software” or “prompt” is usually faster than scrolling through a hundred fields.',
          },
          {
            title: 'When checking metadata is useful',
            text: 'Look inside a photo before you post it publicly or send it to someone you do not know, when a marketplace seller or a stranger sends you an image, when a platform labels your real photo as AI and you want to see why, and after cleaning a file to confirm that nothing is left — just drop the cleaned copy into the viewer. Keep in mind that metadata can be edited or removed by anyone, so it is a clue, not proof.',
          },
        ],
        faq: [
          {
            q: 'Can metadata prove when or where a photo was taken?',
            a: 'Not on its own. Dates and GPS values in EXIF can be changed with free tools. C2PA manifests are signed and harder to fake, but they are easy to remove, so a missing manifest proves nothing either.',
          },
          {
            q: 'Why does my photo show almost no metadata?',
            a: 'Most social networks and messaging apps remove EXIF when you upload a photo, and screenshots never had camera data to begin with. A file downloaded from such a platform is usually already stripped.',
          },
          {
            q: 'Which formats can I inspect?',
            a: 'JPG, PNG, WebP and HEIC/HEIF photos, including iPhone pictures. You can drop several files at once and open each report separately.',
          },
        ],
      },
    },
    'privacy-check': {
      title: 'Photo Privacy Check — Find GPS & Personal Data',
      description:
        'Check what a photo reveals before you share it: GPS location you can open on a map, author, device serial, capture time and AI data. Free, private, no upload.',
      intro:
        'Find out what a photo gives away before you post it. The check shows whether it contains a GPS location (and where it points), personal details such as author or device serial number, the capture time and AI provenance data — with a simple risk level.',
      steps: [
        'Drop the photos you plan to share into the box above.',
        'Read the risk level and the location, personal and time details found in each file.',
        'If a GPS position is found, open it on the map to see exactly what others could see — then remove it.',
      ],
      faq: [
        {
          q: 'How is the risk level decided?',
          a: 'High means the photo contains a location. Medium means it has personal, time or AI information but no location. Low means none of these were found in the metadata.',
        },
        {
          q: 'Is the map loaded automatically?',
          a: 'No. The coordinates are shown as text. OpenStreetMap opens in a new tab only if you click the button, so the location never leaves your device otherwise.',
        },
        {
          q: 'Can a photo reveal my location without GPS?',
          a: 'Metadata is only one source. What is visible in the picture — street signs, landmarks, reflections — can also reveal a place, and this check cannot detect that.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'What the check looks for',
            text: 'The check sorts the metadata it finds into four kinds of exposure. Each one answers a different question someone could ask about you from a single file.',
            items: [
              { term: 'Location', text: 'GPS latitude, longitude and altitude. A phone photo taken at home can point to your front door, which is why any location makes the result high risk.' },
              { term: 'Personal & device', text: 'Camera make and model, author and copyright fields, owner name, body serial number, unique image ID, comments and vendor MakerNote data. A serial number can link photos you post under different accounts to the same camera.' },
              { term: 'Time', text: 'Original capture date, sub-second time and the time zone offset. Together they show when you were somewhere and roughly which part of the world you live in.' },
              { term: 'AI & provenance', text: 'Content Credentials, AI tool names and generation prompts. They are not personal in the usual sense, but they reveal how an image was made and can trigger AI labels.' },
            ],
          },
          {
            title: 'What to do with each risk level',
            text: 'High: the photo contains a location — remove it before sharing anywhere public, and open the map first if you want to see how precise it is. Medium: no location, but the file carries device, personal, time or AI data — fine for friends, worth cleaning before posting publicly or sending to strangers. Low: no sensitive metadata was found, so the file itself does not give you away; what the picture shows still might.',
          },
          {
            title: 'Where metadata survives sharing',
            text: 'Many large social networks strip GPS when you post, but plenty of channels do not: email attachments, cloud storage and file-sharing links, AirDrop and Nearby Share, photos sent “as a file” or “as a document” in chat apps, forums and small websites. When you are not sure how a photo will travel, check it here and clean it before it leaves your device.',
          },
        ],
        faq: [
          {
            q: 'How do I stop my phone from adding location to photos?',
            a: 'On iPhone, go to Settings → Privacy & Security → Location Services → Camera and choose Never. On Android, open the camera app settings and turn off location tags (the name varies by brand). Photos you already took keep their location until you remove it.',
          },
          {
            q: 'Does a low risk result mean the photo is safe to share?',
            a: 'It means the metadata is clean. Faces, house numbers, car plates, documents on a desk or a reflection in a window can still reveal more than you intend, so give the picture itself a quick look too.',
          },
          {
            q: 'Can I check photos that someone sent me?',
            a: 'Yes. The check only reads the file, so it is a quick way to see whether a received photo still has a location or device data — for example before you forward it to others.',
          },
        ],
      },
    },
    'metadata-size': {
      title: 'Metadata Size Checker — How Much Metadata Is in a Photo?',
      description:
        'Measure how much metadata an image carries: total bytes, share of the file, the largest EXIF, XMP, C2PA or prompt blocks and a privacy risk level. Free, no upload.',
      intro:
        'See how much of a file is metadata rather than image. The checker lists every metadata block by size — EXIF, XMP, C2PA, embedded previews, AI prompts and workflows — shows its share of the file and rates the privacy risk.',
      steps: [
        'Drop one or more images into the box above.',
        'Compare the metadata size and its share of each file, block by block.',
        'Remove the metadata to make files smaller and safer to share.',
      ],
      faq: [
        {
          q: 'Why do some files carry so much metadata?',
          a: 'Embedded previews, C2PA manifests with thumbnails and ComfyUI workflows can add tens or hundreds of kilobytes, while basic EXIF is usually only a few kilobytes.',
        },
        {
          q: 'Why is the color profile marked as kept?',
          a: 'The ICC color profile is needed to display colors correctly, so the cleaner keeps it. It is not counted in the metadata total.',
        },
        {
          q: 'Will removing metadata change the image?',
          a: 'No. Only metadata blocks are removed; the image data is copied unchanged, so the file gets smaller without any loss in quality.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'What usually takes up the space',
            text: 'Metadata size varies far more than most people expect. A plain EXIF block is tiny, while a single embedded preview or workflow can be larger than the image of a small web graphic. These are the blocks the checker typically finds, from small to large:',
            items: [
              { term: 'ICC color profile', text: 'From a few hundred bytes to a few kilobytes. Shown as kept, because colors depend on it.' },
              { term: 'EXIF', text: 'Usually a few kilobytes of camera settings, dates and GPS, plus an EXIF thumbnail that often adds 5–20 KB more.' },
              { term: 'XMP', text: 'Under a kilobyte for simple files, but Photoshop and Lightroom can write edit history and document lists that grow to hundreds of kilobytes.' },
              { term: 'C2PA manifest', text: 'Often tens of kilobytes: certificates, signatures and sometimes thumbnails of the source images.' },
              { term: 'PNG prompts & workflows', text: 'Stable Diffusion parameters take one or two kilobytes; a ComfyUI workflow with many nodes can reach tens or hundreds of kilobytes.' },
              { term: 'Data after the image', text: 'Some phones append extra data to JPG files: MPF secondary images, larger previews or the short video of a Motion Photo, which can add several megabytes.' },
            ],
          },
          {
            title: 'Why metadata size matters',
            text: 'On a website, every kilobyte is multiplied by every visitor and every image on the page, so stripping a few dozen kilobytes per image adds up — and unlike re-compressing, it costs nothing in quality. Size is also a privacy hint: the largest blocks are often the most revealing ones, such as a full edit history, a generation workflow or a second hidden image. For archives of thousands of photos, the savings are measurable in storage too.',
          },
          {
            title: 'How to read the result',
            text: 'The headline shows the total metadata that would be removed and its share of the file; the bar under it makes that share visible at a glance. Each block is then listed from largest to smallest with its own bar, so outliers stand out immediately. The color profile appears in green as kept and is not counted in the total. A share of a few percent is typical for large camera photos, while small PNGs and AI images often reach much higher values.',
          },
        ],
        faq: [
          {
            q: 'How much smaller will my file get?',
            a: 'By roughly the metadata total shown. The cleaner removes those blocks and copies the image data as it is, so the clean file is the original size minus the removed metadata.',
          },
          {
            q: 'Does removing metadata replace image compression?',
            a: 'No. It removes only what is not part of the picture. To make photos much smaller you still need resizing or re-compression, which changes pixels; metadata removal is the free step you can do first without any quality loss.',
          },
          {
            q: 'Why does a small AI image show a high metadata share?',
            a: 'Generators and editors attach the same prompts, workflows or Content Credentials regardless of image size, so on a small file they can make up a large part of the total bytes.',
          },
        ],
      },
    },
  },
};

export default tools;
