import type { Pages } from './types';

/** Bản gốc (English) — mọi ngôn ngữ khác phải có cùng cấu trúc (số mục, đoạn, gạch đầu dòng). */
const pages: Pages = {
  about: {
    title: 'About All Metadata Cleaner',
    description:
      'All Metadata Cleaner is a free, privacy-first tool that inspects and removes EXIF, GPS, XMP, IPTC, C2PA and AI prompts from images — right in your browser.',
    intro:
      'All Metadata Cleaner is a free web tool for seeing and removing the hidden information inside image files — EXIF and GPS location, XMP, IPTC, C2PA Content Credentials and the prompts or workflows that AI generators embed.',
    sections: [
      {
        heading: 'Why we built it',
        paragraphs: [
          'Photos and AI images often carry more than people expect: where a photo was taken, which device took it, who edited it, or the exact prompt behind an AI image. Most metadata removers either upload your files to a server or re-compress them. We wanted a tool that does neither.',
        ],
      },
      {
        heading: 'How it works',
        paragraphs: ['Everything happens on your own device:'],
        bullets: [
          'Your browser reads each file and parses its structure — JPEG segments, PNG chunks, WebP and HEIC/AVIF boxes.',
          'Metadata blocks are cut out at the byte level; the image data is copied unchanged, so quality stays identical.',
          'Each cleaned file is analyzed again so you can verify what was removed.',
        ],
      },
      {
        heading: 'Our principles',
        paragraphs: ['A few rules guide every decision we make:'],
        bullets: [
          'Privacy first: images are never uploaded, stored or seen by us.',
          'Honesty: we explain what the tool cannot do, such as removing invisible pixel watermarks.',
          'Free to use, with no account, no watermark and no ads.',
        ],
      },
      {
        heading: 'Who it is for',
        paragraphs: [
          'Anyone who shares images: people protecting their location before posting a photo, photographers delivering client work, creators keeping their prompts private, and anyone whose real photo was mislabeled as AI. We ask everyone to follow platform rules on disclosing AI-generated content.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'How All Metadata Cleaner handles your data: images are processed in your browser and never uploaded. No accounts, no analytics trackers, no ads, minimal storage.',
    intro:
      'This policy explains what data All Metadata Cleaner handles when you use the website. The short version: your images never leave your device, and we do not track you.',
    sections: [
      {
        heading: 'Your images stay on your device',
        paragraphs: [
          'Images you add are read and processed by your own browser using Web Workers. They are not uploaded to any server, and we never receive, store or see them. You can even disconnect from the internet after the page has loaded and the tool keeps working.',
        ],
      },
      {
        heading: 'What we do not collect',
        paragraphs: ['We designed the site to collect as little as possible:'],
        bullets: [
          'No accounts, sign-ups or email addresses are required.',
          'No analytics, advertising or social-media tracking scripts are loaded, and no third-party fonts or scripts are requested.',
          'No information about the content or metadata of your images is sent anywhere.',
        ],
      },
      {
        heading: 'Data stored in your browser',
        paragraphs: ['The site remembers two preferences on your device only:'],
        bullets: [
          'Your chosen language, saved in local storage and in a first-party cookie so the home page opens in that language.',
          'Your theme choice (light, dark or system), saved in local storage.',
        ],
      },
      {
        heading: 'Hosting and server logs',
        paragraphs: [
          'The website is served from our own server. Like any web server, it processes standard request information such as your IP address, browser type and the page requested in order to deliver the site and protect it from abuse. Your browser language may be used to pick a default language. We do not use this information to identify or profile you.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'If the way the site handles data changes, we will update this page and the date at the top. Continuing to use the site after an update means you accept the revised policy.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    description:
      'Terms for using All Metadata Cleaner: a free tool provided as is, your responsibility for how cleaned images are used, and the limits of our liability.',
    intro:
      'By using All Metadata Cleaner you agree to these terms. Please read them together with the disclaimer on the home page and our Privacy Policy.',
    sections: [
      {
        heading: 'The service',
        paragraphs: [
          'All Metadata Cleaner is a free web tool that inspects and removes metadata from image files on your own device. We may change, improve or discontinue any part of it at any time without notice.',
        ],
      },
      {
        heading: 'Acceptable use',
        paragraphs: ['You are responsible for the files you process and how you use the results. You agree not to use the tool to:'],
        bullets: [
          'break any law or infringe anyone’s rights, including copyright and privacy rights;',
          'hide AI-generated content where a law or platform rule requires you to disclose it;',
          'remove copyright, licensing or credit information from images you do not own or have no right to modify.',
        ],
      },
      {
        heading: 'No warranty',
        paragraphs: [
          'The tool is provided “as is” and “as available”, without warranties of any kind, express or implied. We do not guarantee that it will remove every kind of metadata, that results will be error-free, or that platforms will treat cleaned images in any particular way. Always keep a copy of your original files.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental or consequential loss or damage — including loss of data, files or profits — arising from the use of, or inability to use, the tool. Some jurisdictions do not allow certain limitations, in which case they apply only as far as permitted.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          'We may update these terms from time to time. The date at the top shows the latest version. Continuing to use the tool after a change means you accept the updated terms.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact us',
    description:
      'Contact the All Metadata Cleaner team: report a bug, suggest a feature or ask a privacy question. We read every message and reply as soon as we can.',
    intro:
      'Questions, bug reports and ideas are welcome. Write to us by email and we will get back to you as soon as we can.',
    sections: [
      {
        heading: 'What you can write to us about',
        paragraphs: ['We are especially glad to hear about:'],
        bullets: [
          'Bugs — a file that fails to clean, or metadata that is not detected or not removed.',
          'Feature requests — new formats, options or languages you would like to see.',
          'Privacy or legal questions about the website.',
        ],
      },
      {
        heading: 'Before you write',
        paragraphs: [
          'Please do not send private photos. To report a problem, tell us the file format, the camera, phone or app that created it, your browser and what you expected to happen. If a file is needed to reproduce the issue, send one that contains nothing sensitive.',
        ],
      },
    ],
  },
};

export default pages;
