import type { Article } from '../types';

const article: Article = {
  title: 'Welche Metadaten fügen KI-Bildgeneratoren hinzu? DALL·E, Firefly, Midjourney, Gemini und Stable Diffusion',
  summary: [
    'Fast jeder KI-Bildgenerator hinterlässt Spuren in seinen Ergebnissen – von signierten Content Credentials bis zu Prompts im Klartext. Wer weiß, was jedes Tool schreibt, kann seine Prompts schützen und versteht, warum eine Plattform ein Bild kennzeichnet.',
    'Im Folgenden finden Sie einen Überblick über die Metadaten, die in Bildern gängiger Generatoren typischerweise stecken, und wie Sie genau sehen, was in Ihren eigenen Dateien steht.',
  ],
  seoTitle: 'Welche Metadaten fügen KI-Bildgeneratoren hinzu?',
  description:
    'Welche Metadaten KI-Bildgeneratoren einbetten – C2PA, IPTC DigitalSourceType, XMP, Prompts und Workflows – Tool für Tool, und wie Sie sie prüfen oder entfernen.',
  answer:
    'Online-KI-Dienste wie die Bildgenerierung von ChatGPT und Adobe Firefly hängen signierte C2PA Content Credentials an; Google und Meta fügen unsichtbare Wasserzeichen und IPTC-Metadaten hinzu; Midjourney kann den Prompt und einen KI-Quelltyp enthalten; lokale Tools wie Stable Diffusion und ComfyUI speichern Prompt, Seed, Modell und Workflow vollständig als PNG-Text. Was geschrieben wird, ändert sich von Version zu Version – prüfen Sie daher Ihre tatsächlichen Dateien.',
  sections: [
    {
      heading: 'Drei Arten von KI-Spuren',
      paragraphs: ['KI-bezogene Metadaten lassen sich in drei Gruppen einteilen:'],
      bullets: [
        'Signierte Herkunftsnachweise – C2PA Content Credentials, die den Generator und die ausgeführten Aktionen nennen.',
        'Beschreibende Metadaten – IPTC- und XMP-Felder wie DigitalSourceType, CreatorTool oder eine Beschreibung.',
        'Generierungsdaten – Prompt, Seed, Modell und Einstellungen als Text, vor allem von lokalen Tools.',
      ],
    },
    {
      heading: 'Metadaten der KI-Generatoren im Überblick',
      paragraphs: [],
      table: {
        head: ['Generator', 'C2PA', 'IPTC / XMP', 'Prompt in der Datei', 'Pixel-Wasserzeichen'],
        rows: [
          ['Bildgenerierung in ChatGPT, DALL·E', 'Ja', 'Unterschiedlich', 'Meist nein', 'Unterschiedlich'],
          ['Adobe Firefly, generative Funktionen in Photoshop', 'Ja', 'Ja', 'Nein', 'Unterschiedlich'],
          ['Google Gemini, Imagen', 'In manchen Produkten', 'In manchen Produkten', 'Nein', 'SynthID'],
          ['Meta AI', 'Unterschiedlich', 'Ja (IPTC)', 'Nein', 'Ja'],
          ['Midjourney', 'Unterschiedlich', 'Ja (Quelltyp)', 'Oft', 'Nicht angekündigt'],
          ['Stable Diffusion, ComfyUI (lokal)', 'Nein', 'Selten', 'Ja, sehr detailliert', 'Standardmäßig nein'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (Bildgenerierung in ChatGPT und DALL·E)',
      paragraphs: [
        'Bilder aus der Bildgenerierung von OpenAI tragen C2PA Content Credentials, die OpenAI als Quelle ausweisen. So können C2PA-fähige Viewer und Plattformen sie erkennen. Das Manifest kann verloren gehen, wenn das Bild per Screenshot festgehalten oder von einer App neu gespeichert wird, die es nicht beibehält.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly und generative Funktionen in Photoshop',
      paragraphs: [
        'Adobe versieht Inhalte, die mit seinen auf Firefly basierenden generativen Funktionen erstellt wurden, mit Content Credentials und beschreibt sie als KI-generiert oder KI-bearbeitet. Fotos, die mit Generativem Füllen oder Generativem Erweitern bearbeitet wurden, können daher eine Angabe als KI-Komposit enthalten, selbst wenn der Großteil des Bildes ein echtes Foto ist.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini und Imagen) und Meta AI',
      paragraphs: [
        'Google bettet sein unsichtbares Wasserzeichen SynthID in Bilder seiner generativen Modelle ein und kennzeichnet KI-Inhalte in einigen Produkten zusätzlich über Metadaten. Meta hat erklärt, dass Bilder aus Meta AI eine sichtbare Markierung, ein unsichtbares Wasserzeichen und IPTC-Metadaten enthalten, die auf KI-Generierung hinweisen.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Midjourney-Downloads können den Prompt und eine Job-ID in Beschreibungs- oder Kommentarfeldern enthalten, dazu einen IPTC-Wert, der das Bild als KI-generiert kennzeichnet. Was enthalten ist, hängt vom Download-Format und von der aktuellen Version des Dienstes ab.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI und andere lokale Tools',
      paragraphs: [
        'Lokale Tools signieren nichts, speichern aber oft die detailliertesten Informationen: AUTOMATIC1111 und Forge schreiben einen Text-Chunk „parameters“ mit Prompt, Seed, Sampler und Modell, und ComfyUI bettet seine vollständigen Prompt- und Workflow-Graphen als JSON ein. Diese Einstellungen lassen sich meist abschalten – allerdings nur für neue Bilder.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'So sehen Sie, was Ihr Generator hinzugefügt hat',
      paragraphs: ['Generatoren ändern mit neuen Versionen, was sie schreiben. Verlässlich ist daher nur die Prüfung der tatsächlichen Datei:'],
      steps: [
        'Ziehen Sie das Bild in das Tool oben auf dieser Seite; es wird lokal analysiert.',
        'Sehen Sie unter „KI & Herkunft“ nach C2PA, Quelltyp, Prompts und Tool-Namen.',
        'Wenn Sie diese Angaben nicht teilen möchten, klicken Sie auf „KI-Metadaten entfernen“ und laden die bereinigte Kopie herunter.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Fragen zu Metadaten von KI-Generatoren',
  faq: [
    {
      q: 'Fügen alle KI-Generatoren C2PA Content Credentials hinzu?',
      a: 'Nein. Große Online-Dienste tun das zunehmend, viele Tools – besonders lokale – schreiben aber nur Text-Metadaten oder gar nichts.',
    },
    {
      q: 'Entfernt das Löschen von Metadaten auch unsichtbare Wasserzeichen?',
      a: 'Nein. Wasserzeichen wie SynthID sind in die Pixel eingebettet. Das Entfernen von Metadaten verändert keine Pixel.',
    },
    {
      q: 'Warum haben zwei Bilder aus demselben Tool unterschiedliche Metadaten?',
      a: 'Exportformat, App-Version, die Plattform, von der Sie heruntergeladen haben, und spätere Bearbeitungen können Felder hinzufügen oder entfernen.',
    },
    {
      q: 'Was bedeutet trainedAlgorithmicMedia?',
      a: 'Das ist der IPTC-DigitalSourceType-Wert für Medien, die von einem generativen KI-Modell erstellt wurden. compositeWithTrainedAlgorithmicMedia steht für ein echtes Bild mit KI-generierten Teilen.',
    },
    {
      q: 'Bleiben die KI-Metadaten in einem Screenshot erhalten?',
      a: 'Meist nicht. Ein Screenshot ist ein neues Bild ohne die ursprünglichen Metadaten, Pixel-Wasserzeichen können ihn jedoch überstehen.',
    },
    {
      q: 'Kann ich das Bild behalten, aber den Prompt entfernen?',
      a: 'Ja. Die Bereinigung entfernt die Metadatenblöcke und kopiert die Bilddaten unverändert – das Bild ist identisch, nur ohne Prompt.',
    },
  ],
};

export default article;
