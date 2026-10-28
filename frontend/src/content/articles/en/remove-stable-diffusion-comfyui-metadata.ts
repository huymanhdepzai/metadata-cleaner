import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remove Stable Diffusion & ComfyUI Metadata from PNG',
  description:
    'Stable Diffusion and ComfyUI hide your prompt, seed, model and full workflow inside PNG files. See what is stored and remove it losslessly in your browser.',
  answer:
    'Stable Diffusion interfaces such as AUTOMATIC1111 and Forge save the prompt, seed, sampler and model in a PNG text chunk called “parameters”, and ComfyUI embeds its full “prompt” and “workflow” JSON. To remove them, drop the PNG into a lossless metadata cleaner that deletes text chunks without re-encoding — the image stays pixel-identical, but nobody can read or reload your settings.',
  sections: [
    {
      heading: 'What Stable Diffusion and ComfyUI store in your images',
      paragraphs: [
        'Local image generators save their settings as text inside the file so the image can be reproduced later. In a PNG this text lives in tEXt, zTXt or iTXt chunks next to the image data. What you will typically find:',
      ],
      table: {
        head: ['Tool', 'Where', 'What is inside'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'PNG text chunk “parameters”', 'Prompt, negative prompt, steps, sampler, CFG scale, seed, size, model name and hash, LoRAs, extension settings'],
          ['ComfyUI', 'PNG text chunks “prompt” and “workflow”', 'The executed node graph and the full editor layout as JSON'],
          ['InvokeAI, NovelAI, Fooocus and others', 'Their own PNG text keys', 'Similar generation settings under tool-specific names'],
          ['Exports to JPEG or WebP', 'EXIF UserComment or XMP', 'The same parameters text, depending on the tool'],
        ],
      },
    },
    {
      heading: 'Why the ComfyUI workflow is especially revealing',
      paragraphs: [
        'A ComfyUI workflow is not just a prompt — it is your entire pipeline. Anyone who drags your PNG into ComfyUI gets every node, model, LoRA, upscaler, ControlNet and setting, ready to run. Workflows can also contain local file paths, folder names or usernames, and large graphs add tens of kilobytes to every image.',
      ],
    },
    {
      heading: 'Should you remove generation data?',
      paragraphs: [
        'Generation data is a recipe. Removing it makes sense when you sell or publish finished art, deliver client work, or simply do not want others to copy your exact style. There are good reasons to keep it, too: model-sharing sites read the parameters to show generation info, and collaborators may need the workflow.',
        'You do not have to guess — the report shows exactly what is inside each file before anything is removed, so you can decide per image.',
      ],
    },
    {
      heading: 'How to view the prompt and workflow in a PNG',
      steps: [
        'Drop the PNG into the tool at the top of this page.',
        'Open the “AI & provenance” panel: chunks are flagged as “Stable Diffusion prompt” or “ComfyUI workflow”.',
        'Open “All metadata & file details” to read each text chunk with its keyword (parameters, prompt, workflow) and full value. Compressed zTXt and iTXt chunks are decompressed in the browser so you can read them.',
      ],
      paragraphs: [],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'How to remove Stable Diffusion and ComfyUI metadata',
      steps: [
        'Drop one PNG or a whole batch of outputs into the tool (up to 50 files per run).',
        'Click “Remove AI metadata”. Text, XMP, EXIF and C2PA chunks are removed as whole units.',
        'Confirm in the result panel that no AI fields remain, then download the files individually or as a ZIP.',
      ],
      paragraphs: [],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'What stays in the cleaned PNG',
      paragraphs: [
        'IHDR, IDAT, the palette, transparency, gamma and color chunks, and APNG animation chunks are kept. Because chunks are removed whole, the checksums of the remaining chunks stay valid and the cleaned file opens everywhere.',
      ],
    },
    {
      heading: 'Stop saving metadata in new images',
      paragraphs: ['If you never want generation data in your outputs, turn it off at the source — this only affects new images:'],
      bullets: [
        'ComfyUI: start it with the --disable-metadata command-line option, or use a save node that does not embed the workflow.',
        'AUTOMATIC1111 and Forge: in Settings, look for the options that control saving generation parameters to PNG info, and turn them off.',
        'Other interfaces: check the image-saving settings for an option that writes prompts or parameters into the file.',
      ],
    },
    {
      heading: 'Lossless vs. re-saving',
      paragraphs: [
        'Opening the image in an editor and saving it again also drops the text, but it re-compresses the image and may discard the color profile or reduce 16-bit images to 8 bits. Byte-level removal keeps the IDAT data exactly as the generator wrote it, so the cleaned PNG is pixel-identical to the original.',
      ],
    },
  ],
  faqHeading: 'Questions about Stable Diffusion and ComfyUI metadata',
  faq: [
    {
      q: 'Can ComfyUI still load the workflow from a cleaned PNG?',
      a: 'No. The “prompt” and “workflow” chunks are removed, so dragging the cleaned file into ComfyUI will not restore the graph. Keep an original copy if you need the workflow later.',
    },
    {
      q: 'Is the image quality affected?',
      a: 'No. The IDAT chunks that hold the compressed image data are copied unchanged, so the cleaned PNG is pixel-identical to the original.',
    },
    {
      q: 'Does this work for JPEG and WebP exports from Stable Diffusion?',
      a: 'Yes. Prompts stored in EXIF UserComment or XMP are detected and removed from JPEG and WebP files as well.',
    },
    {
      q: 'How can I see the prompt of a Stable Diffusion image?',
      a: 'Drop the PNG into the tool and open “All metadata & file details”. The “parameters” chunk shows the full prompt, negative prompt, seed and model.',
    },
    {
      q: 'Are my images uploaded to a server?',
      a: 'No. Files are analyzed and cleaned locally in your browser, so prompts and workflows never leave your device.',
    },
    {
      q: 'Can I clean hundreds of outputs at once?',
      a: 'Yes, in batches of up to 50 files. Clear the list between batches and download each batch as a ZIP.',
    },
  ],
};

export default article;
