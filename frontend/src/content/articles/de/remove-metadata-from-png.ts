import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten aus PNG entfernen – Prompts, Workflow, XMP & C2PA',
  summary: [
    'PNG-Dateien speichern Metadaten in Text-Chunks, und KI-Tools nutzen sie intensiv: Stable Diffusion schreibt Ihren Prompt und Ihre Einstellungen hinein, ComfyUI bettet den ganzen Workflow ein, und Bildbearbeitungen fügen XMP- oder C2PA-Daten hinzu.',
    'Mit dem Tool auf dieser Seite sehen Sie jeden Chunk und entfernen die Metadaten, während Bild, Transparenz, Farbe und Animation exakt so bleiben, wie sie sind.',
  ],
  description:
    'Prompts, ComfyUI-Workflows, XMP, EXIF und C2PA aus PNG-Dateien im Browser entfernen. Transparenz, Farbprofil und APNG-Animation bleiben. Kostenlos, ohne Upload.',
  answer:
    'Um Metadaten aus einer PNG-Datei zu entfernen, ziehen Sie sie in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. Text-Chunks (tEXt, zTXt, iTXt) mit Prompts, ComfyUI-Workflows und XMP werden zusammen mit den Chunks eXIf, caBX (C2PA), tIME und dSIG gelöscht. Bilddaten, Transparenz, Farbprofil und APNG-Animation werden unverändert kopiert – die PNG-Datei bleibt pixelgenau identisch.',
  sections: [
    {
      heading: 'Wo PNG-Metadaten gespeichert sind',
      paragraphs: ['Eine PNG-Datei ist eine Liste von Chunks. Die Bilddaten stehen in IDAT-Chunks, Metadaten in separaten Chunks:'],
      table: {
        head: ['Chunk', 'Inhalt'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Freier Text: „parameters“ von Stable Diffusion, JSON-Daten „prompt“ und „workflow“ von ComfyUI, XMP'],
          ['eXIf', 'EXIF-Daten wie Kamera, Zeit und GPS'],
          ['caBX', 'C2PA Content Credentials'],
          ['tIME, dSIG', 'Zeitpunkt der letzten Änderung und digitale Signaturen'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Metadaten aus PNG entfernen in drei Schritten',
      paragraphs: [],
      steps: [
        'Ziehen Sie Ihre PNG-Dateien in das Tool oben – auch mehrere auf einmal.',
        'Öffnen Sie den Bericht, um Prompt, Workflow und andere gefundene Felder zu sehen.',
        'Klicken Sie auf „KI-Metadaten entfernen“ und laden Sie die bereinigten Dateien einzeln oder als ZIP herunter.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Was in der bereinigten PNG-Datei erhalten bleibt',
      paragraphs: [
        'Es werden nur Metadaten-Chunks entfernt. Alles, was das Aussehen des Bildes bestimmt, bleibt: Header, Palette, Bilddaten, Transparenz (tRNS), Gamma und Chromatizität, das sRGB- oder ICC-Farbprofil und die APNG-Animations-Chunks. Hat die Datei eine Ausrichtung angegeben, wird diese in einen minimalen eXIf-Chunk mit gültiger Prüfsumme zurückgeschrieben.',
      ],
    },
    {
      heading: 'Warum die PNG-Datei nicht einfach neu speichern?',
      paragraphs: [
        'PNG-Kompression ist verlustfrei, doch erneutes Speichern verändert trotzdem etwas. Wird eine PNG-Datei über ein Browser-Canvas neu gezeichnet – wie bei vielen Online-Tools –, kann das Farbprofil verloren gehen, transparente Kanten können sich verändern, und 16-Bit-Bilder können auf 8 Bit schrumpfen. Das Herausschneiden von Chunks vermeidet all das: Die IDAT-Daten sind exakt das, was Ihr Generator oder Editor geschrieben hat.',
      ],
    },
    {
      heading: 'PNG-Metadaten beim nächsten Mal vermeiden',
      paragraphs: [
        'Wenn Ihre Dateien nie Generierungsdaten enthalten sollen, prüfen Sie die Einstellungen Ihres Generators: ComfyUI lässt sich mit --disable-metadata starten, und viele Stable-Diffusion-Oberflächen haben eine Option, die das Speichern der Generierungsparameter abschaltet. Für Dateien, die Sie bereits haben, ist die Bereinigung hier der schnellste Weg.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Fragen zum Bereinigen von PNG-Dateien',
  faq: [
    {
      q: 'Verliert die PNG-Datei an Qualität?',
      a: 'Nein. Die Chunks mit den Bilddaten werden Byte für Byte kopiert, das Bild ist also pixelgenau identisch mit dem Original.',
    },
    {
      q: 'Kann jemand meinen ComfyUI-Workflow nach dem Bereinigen wiederherstellen?',
      a: 'Aus der bereinigten Datei nicht – die Chunks „prompt“ und „workflow“ werden vollständig entfernt. Kopien, die Sie vorher geteilt haben, enthalten sie weiterhin.',
    },
    {
      q: 'Bleibt die Transparenz erhalten?',
      a: 'Ja. Alphakanäle und der tRNS-Chunk bleiben exakt so, wie sie waren.',
    },
    {
      q: 'Werden animierte PNGs unterstützt?',
      a: 'Ja. Die APNG-Animations-Chunks bleiben erhalten, die Animation läuft also genau wie vorher.',
    },
    {
      q: 'Wird die PNG-Datei kleiner?',
      a: 'Meistens ja – besonders bei ComfyUI-Bildern, bei denen der eingebettete Workflow Dutzende Kilobyte ausmachen kann.',
    },
    {
      q: 'Werden meine PNG-Dateien hochgeladen?',
      a: 'Nein. Alles wird in Ihrem Browser verarbeitet und verlässt Ihr Gerät nie.',
    },
  ],
};

export default article;
