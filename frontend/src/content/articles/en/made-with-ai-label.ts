import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remove the “Made with AI” / “AI info” Label on Instagram',
  description:
    'Why real photos get an “AI info” (formerly “Made with AI”) label on Instagram, Facebook and Threads, which metadata triggers it, and how to fix false labels.',
  answer:
    'Instagram, Facebook and Threads add the “AI info” label (formerly “Made with AI”) when the uploaded file contains AI signals — usually C2PA Content Credentials or an IPTC DigitalSourceType field written by an editor such as Photoshop. To fix a false label on a real photo, check the file for those fields, remove them from a copy without re-encoding, and upload the cleaned copy.',
  sections: [
    {
      heading: 'What the “AI info” label means',
      paragraphs: [
        'Meta shows “AI info” on posts in Instagram, Facebook and Threads when it believes an image or video was created or edited with generative AI. The label was called “Made with AI” until mid-2024, when Meta renamed it after many photographers complained that ordinary retouched photos were being marked as AI creations.',
        'Today, content that Meta considers substantially AI-generated gets a visible label, while content that was only edited with AI tools usually shows the information in the post menu. Either way, the label comes from the same place: signals detected in the file or disclosed by the creator.',
      ],
    },
    {
      heading: 'How Meta detects AI in an image',
      paragraphs: ['Meta has said it relies on industry-standard indicators plus creator disclosure. In practice, three inputs matter:'],
      bullets: [
        'C2PA Content Credentials — a signed manifest that lists the app that produced the file and the actions performed, such as “created” or “edited with generative fill”.',
        'IPTC DigitalSourceType in the XMP metadata — values such as trainedAlgorithmicMedia (fully generated) or compositeWithTrainedAlgorithmicMedia (a photo with AI-generated parts).',
        'Self-disclosure — the AI label toggle you can switch on when posting, which Meta asks creators to use for realistic AI content.',
      ],
      table: {
        head: ['Signal in the file', 'Typical source', 'Likely result'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'AI image generators', 'Prominent AI label'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Generative Fill, Generative Expand, AI erasers', '“AI info” label, often in the menu'],
          ['C2PA manifest with AI actions', 'Photoshop, Firefly, AI services', '“AI info” label'],
          ['No AI fields, no disclosure', 'Camera, phone, non-AI edits', 'Usually no label'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Why real photos get labeled “Made with AI” by mistake',
      paragraphs: [
        'Most false positives are caused by editing software, not by the camera. Modern editors write provenance data as soon as an AI-assisted tool touches the image — even if the change is a few pixels:',
      ],
      bullets: [
        'Removing a small object, extending a background or straightening a horizon with generative features in Photoshop can mark the whole file as a composite with AI.',
        'Exporting with Content Credentials enabled embeds a signed manifest that lists every recorded edit.',
        'Some phone galleries add AI-edit markers after object erasers or other generative edits.',
        'Re-saving or converting a file usually keeps the metadata it already had, so a label can follow the image through several apps.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'How to find the field that triggers the label',
      paragraphs: ['Before you change anything, confirm what the file actually contains:'],
      steps: [
        'Drop the exact file you plan to upload into the tool at the top of this page. Processing happens in your browser, so nothing is uploaded.',
        'Open the “AI & provenance” panel. Each signal is listed with its source, for example “C2PA · compositeWithTrainedAlgorithmicMedia” or “XMP · Iptc4xmpExt › DigitalSourceType”.',
        'Open “All metadata & file details” to see the raw values, including the claim generator (the app that signed the manifest) and the recorded c2pa.* actions.',
        'If the verdict is “Needs a closer look”, the file has Content Credentials but no explicit AI declaration. Platforms may still read the manifest, so review it before posting.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'How to remove the “AI info” label from a real photo',
      paragraphs: [
        'If the label misdescribes your work, fix the cause in the file rather than fighting the label after posting:',
      ],
      steps: [
        'Keep your original export as an archive — it may be useful as proof of how you edited the image.',
        'In the tool above, click “Remove AI metadata”. The C2PA container, XMP, IPTC and EXIF blocks are cut at the byte level; pixels, dimensions, orientation and the color profile stay untouched.',
        'Check the green result panel: the cleaned file is analyzed again, so you can confirm that no AI or provenance fields remain.',
        'Upload the cleaned copy as a new post. Editing an existing post does not re-read the file, so a label that was already applied usually stays.',
      ],
    },
    {
      heading: 'Why not just take a screenshot or re-save as JPEG?',
      paragraphs: [
        'Screenshots and “save for web” tricks also drop metadata, but they re-compress the image, lower the resolution and can shift colors — every time you do it. Byte-level cleaning removes only the metadata blocks and copies the compressed image data exactly, so there is no quality loss at all.',
      ],
      related: ['does-screenshot-remove-metadata'],
    },
    {
      heading: 'If the label stays after cleaning',
      paragraphs: [
        'Metadata is the most common cause of labels on edited photos, but it is not the only one. Meta also uses other detection methods and creator disclosure. If a cleaned photo is still labeled, check whether the AI label toggle was switched on when posting, and use the platform’s feedback options if you believe the label is wrong.',
      ],
    },
    {
      heading: 'When you should keep the label',
      paragraphs: [
        'Removing metadata fixes labels that misdescribe your work. It does not change what the image is. If a picture is fully or substantially AI-generated and looks realistic, platform rules generally require you to disclose it, and the label helps viewers understand what they are seeing. Use the cleaner to correct mistakes and protect your privacy — not to present synthetic images as real photographs.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Questions about the “AI info” label',
  faq: [
    {
      q: 'Is “Made with AI” the same as “AI info”?',
      a: 'Yes. Meta renamed the “Made with AI” label to “AI info” in 2024 and moved it into the post menu for content that was only edited with AI tools.',
    },
    {
      q: 'Does removing metadata guarantee that the label disappears?',
      a: 'No. It removes the signals stored in the file, which are the most common cause of labels on edited photos. Platforms can still use other detection methods or ask you to disclose AI content.',
    },
    {
      q: 'Can I remove the label from a post that is already published?',
      a: 'Usually not by editing it. The file is analyzed when it is uploaded, so the reliable fix is to clean the file and publish it again.',
    },
    {
      q: 'Will the photo look different after cleaning?',
      a: 'No. Only metadata blocks are removed; the image data is copied byte for byte, and the orientation and ICC color profile are kept.',
    },
    {
      q: 'Can I remove only the AI fields and keep camera details?',
      a: 'The current version removes all identifying metadata — location, camera, author and AI provenance — in one step, which is the safest default for sharing. Dimensions, orientation, color and animation are always kept.',
    },
    {
      q: 'Does this also work for Facebook and Threads?',
      a: 'Yes. Instagram, Facebook and Threads use the same Meta labeling system, so the same fields trigger the label on all three.',
    },
  ],
};

export default article;
