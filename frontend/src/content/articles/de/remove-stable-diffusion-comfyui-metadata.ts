import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Stable-Diffusion- & ComfyUI-Metadaten aus PNG entfernen',
  description:
    'Stable Diffusion und ComfyUI speichern Prompt, Seed, Modell und Workflow in PNG-Dateien. Sehen Sie, was drinsteht, und entfernen Sie es verlustfrei im Browser.',
  answer:
    'Stable-Diffusion-Oberflächen wie AUTOMATIC1111 und Forge speichern Prompt, Seed, Sampler und Modell in einem PNG-Text-Chunk namens „parameters“, ComfyUI bettet die vollständigen JSON-Daten „prompt“ und „workflow“ ein. Zum Entfernen ziehen Sie die PNG-Datei in einen verlustfreien Metadaten-Cleaner, der Text-Chunks ohne Neukodierung löscht – das Bild bleibt pixelgenau gleich, aber niemand kann Ihre Einstellungen mehr auslesen oder laden.',
  sections: [
    {
      heading: 'Was Stable Diffusion und ComfyUI in Ihren Bildern speichern',
      paragraphs: [
        'Lokale Bildgeneratoren schreiben ihre Einstellungen als Text in die Datei, damit sich das Bild später reproduzieren lässt. In einer PNG-Datei steht dieser Text in tEXt-, zTXt- oder iTXt-Chunks neben den Bilddaten. Typischerweise finden Sie:',
      ],
      table: {
        head: ['Tool', 'Speicherort', 'Inhalt'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'PNG-Text-Chunk „parameters“', 'Prompt, Negativ-Prompt, Steps, Sampler, CFG Scale, Seed, Größe, Modellname und Hash, LoRAs, Einstellungen von Erweiterungen'],
          ['ComfyUI', 'PNG-Text-Chunks „prompt“ und „workflow“', 'Der ausgeführte Node-Graph und das komplette Editor-Layout als JSON'],
          ['InvokeAI, NovelAI, Fooocus und andere', 'Eigene PNG-Text-Schlüssel', 'Ähnliche Generierungseinstellungen unter toolspezifischen Namen'],
          ['Exporte als JPEG oder WebP', 'EXIF UserComment oder XMP', 'Derselbe Parametertext, je nach Tool'],
        ],
      },
    },
    {
      heading: 'Warum gerade der ComfyUI-Workflow so viel verrät',
      paragraphs: [
        'Ein ComfyUI-Workflow ist nicht nur ein Prompt – er ist Ihre komplette Pipeline. Wer Ihre PNG-Datei in ComfyUI zieht, erhält jeden Node, jedes Modell, jede LoRA, jeden Upscaler, jedes ControlNet und jede Einstellung, sofort lauffähig. Workflows können außerdem lokale Dateipfade, Ordner- oder Benutzernamen enthalten, und große Graphen machen jedes Bild um Dutzende Kilobyte größer.',
      ],
    },
    {
      heading: 'Sollten Sie die Generierungsdaten entfernen?',
      paragraphs: [
        'Generierungsdaten sind ein Rezept. Sie zu entfernen ist sinnvoll, wenn Sie fertige Werke verkaufen oder veröffentlichen, Kundenaufträge abliefern oder einfach nicht möchten, dass andere Ihren Stil exakt kopieren. Es gibt aber auch gute Gründe, sie zu behalten: Plattformen zum Teilen von Modellen lesen die Parameter aus, um Generierungsinfos anzuzeigen, und Mitwirkende brauchen eventuell den Workflow.',
        'Sie müssen nicht raten – der Bericht zeigt vor dem Entfernen genau, was in jeder Datei steckt. So können Sie Bild für Bild entscheiden.',
      ],
    },
    {
      heading: 'So sehen Sie Prompt und Workflow einer PNG-Datei ein',
      steps: [
        'Ziehen Sie die PNG-Datei in das Tool oben auf dieser Seite.',
        'Öffnen Sie den Bereich „KI & Herkunft“: Chunks werden als „Stable-Diffusion-Prompt“ oder „ComfyUI-Workflow“ markiert.',
        'Öffnen Sie „Alle Metadaten & Dateidetails“, um jeden Text-Chunk mit seinem Schlüsselwort (parameters, prompt, workflow) und dem vollständigen Wert zu lesen. Komprimierte zTXt- und iTXt-Chunks werden im Browser entpackt, damit Sie sie lesen können.',
      ],
      paragraphs: [],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'So entfernen Sie Stable-Diffusion- und ComfyUI-Metadaten',
      steps: [
        'Ziehen Sie eine PNG-Datei oder einen ganzen Stapel an Ausgaben in das Tool (bis zu 50 Dateien pro Durchgang).',
        'Klicken Sie auf „KI-Metadaten entfernen“. Text-, XMP-, EXIF- und C2PA-Chunks werden als Ganzes entfernt.',
        'Prüfen Sie im Ergebnisbereich, dass keine KI-Felder übrig sind, und laden Sie die Dateien einzeln oder als ZIP herunter.',
      ],
      paragraphs: [],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'Was in der bereinigten PNG-Datei erhalten bleibt',
      paragraphs: [
        'IHDR, IDAT, die Palette, Transparenz-, Gamma- und Farb-Chunks sowie APNG-Animations-Chunks bleiben erhalten. Da Chunks immer vollständig entfernt werden, bleiben die Prüfsummen der übrigen Chunks gültig, und die bereinigte Datei lässt sich überall öffnen.',
      ],
    },
    {
      heading: 'Metadaten in neuen Bildern gar nicht erst speichern',
      paragraphs: ['Wenn Ihre Ausgaben nie Generierungsdaten enthalten sollen, schalten Sie das direkt an der Quelle ab – das betrifft nur neue Bilder:'],
      bullets: [
        'ComfyUI: Starten Sie es mit der Kommandozeilenoption --disable-metadata oder verwenden Sie einen Save-Node, der den Workflow nicht einbettet.',
        'AUTOMATIC1111 und Forge: Suchen Sie in den Settings nach den Optionen, die das Speichern der Generierungsparameter in die PNG-Info steuern, und deaktivieren Sie sie.',
        'Andere Oberflächen: Prüfen Sie die Speichereinstellungen auf eine Option, die Prompts oder Parameter in die Datei schreibt.',
      ],
    },
    {
      heading: 'Verlustfrei statt neu speichern',
      paragraphs: [
        'Das Bild in einem Editor zu öffnen und neu zu speichern entfernt den Text ebenfalls, komprimiert das Bild aber neu und kann das Farbprofil verwerfen oder 16-Bit-Bilder auf 8 Bit reduzieren. Beim Entfernen auf Byte-Ebene bleiben die IDAT-Daten exakt so, wie der Generator sie geschrieben hat – die bereinigte PNG-Datei ist pixelgenau identisch mit dem Original.',
      ],
    },
  ],
  faqHeading: 'Fragen zu Stable-Diffusion- und ComfyUI-Metadaten',
  faq: [
    {
      q: 'Kann ComfyUI den Workflow aus einer bereinigten PNG-Datei noch laden?',
      a: 'Nein. Die Chunks „prompt“ und „workflow“ werden entfernt, daher stellt das Hineinziehen der bereinigten Datei in ComfyUI den Graphen nicht wieder her. Bewahren Sie eine Originalkopie auf, wenn Sie den Workflow später noch brauchen.',
    },
    {
      q: 'Leidet die Bildqualität?',
      a: 'Nein. Die IDAT-Chunks mit den komprimierten Bilddaten werden unverändert kopiert, die bereinigte PNG-Datei ist pixelgenau identisch mit dem Original.',
    },
    {
      q: 'Funktioniert das auch bei JPEG- und WebP-Exporten aus Stable Diffusion?',
      a: 'Ja. Prompts in EXIF UserComment oder XMP werden auch in JPEG- und WebP-Dateien erkannt und entfernt.',
    },
    {
      q: 'Wie kann ich den Prompt eines Stable-Diffusion-Bildes auslesen?',
      a: 'Ziehen Sie die PNG-Datei in das Tool und öffnen Sie „Alle Metadaten & Dateidetails“. Der Chunk „parameters“ zeigt den vollständigen Prompt, den Negativ-Prompt, den Seed und das Modell.',
    },
    {
      q: 'Werden meine Bilder auf einen Server hochgeladen?',
      a: 'Nein. Die Dateien werden lokal im Browser analysiert und bereinigt, Prompts und Workflows verlassen Ihr Gerät nie.',
    },
    {
      q: 'Kann ich Hunderte von Ausgaben auf einmal bereinigen?',
      a: 'Ja, in Stapeln von bis zu 50 Dateien. Leeren Sie die Liste zwischen den Durchgängen und laden Sie jeden Stapel als ZIP herunter.',
    },
  ],
};

export default article;
