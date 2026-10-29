import type { Article } from '../types';

const article: Article = {
  title: 'SynthID und unsichtbare KI-Wasserzeichen erklärt: Was Metadaten-Bereinigung kann und was nicht',
  summary: [
    'Manche KI-Bilder tragen zwei Arten von Markierungen: Metadaten, die neben dem Bild gespeichert sind, und ein unsichtbares Wasserzeichen, das in die Pixel selbst eingewoben ist. SynthID von Google ist das bekannteste Beispiel für die zweite Art.',
    'Dieser Ratgeber erklärt, wie sich unsichtbare Wasserzeichen von C2PA und EXIF unterscheiden, wie sie erkannt werden und warum kein seriöses Metadaten-Tool sie entfernen kann.',
  ],
  seoTitle: 'SynthID erklärt: Lassen sich KI-Wasserzeichen entfernen?',
  description:
    'Was SynthID und andere unsichtbare KI-Wasserzeichen sind, wie sie sich von C2PA-Metadaten unterscheiden, wie man sie erkennt und warum Cleaner sie nicht entfernen.',
  answer:
    'SynthID ist ein unsichtbares Wasserzeichen, das Google DeepMind in die Pixel von Inhalten einbettet, die mit Googles KI-Modellen erstellt wurden. Anders als C2PA- oder EXIF-Metadaten ist es kein separater Block in der Datei, übersteht gängige Bearbeitungen wie Zuschneiden und Kompression und lässt sich nur mit Googles eigenen Erkennungstools auslesen. Metadaten-Cleaner – auch dieser – verändern keine Pixel und können es daher nicht entfernen.',
  sections: [
    {
      heading: 'Zwei Ebenen der KI-Herkunft',
      paragraphs: [
        'Metadaten – EXIF, XMP, IPTC und C2PA – liegen in separaten Blöcken der Datei. Sie sind leicht auszulesen und lassen sich entfernen, ohne das Bild anzutasten. Ein unsichtbares Wasserzeichen ist etwas anderes: ein feines Muster, das über die Pixelwerte verteilt ist – für das Auge unsichtbar, für einen Detektor aber erkennbar.',
      ],
      table: {
        head: ['', 'Metadaten (C2PA, IPTC, EXIF)', 'Unsichtbares Wasserzeichen (z. B. SynthID)'],
        rows: [
          ['Speicherort', 'Separate Blöcke in der Datei', 'In den Pixelwerten'],
          ['Wer es lesen kann', 'Jeder Metadaten-Viewer', 'Nur der Detektor des Anbieters'],
          ['Übersteht Screenshots und Neuspeichern', 'Meist nicht', 'Darauf ausgelegt'],
          ['Wird von einem Metadaten-Cleaner entfernt', 'Ja', 'Nein'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Was ist SynthID?',
      paragraphs: [
        'SynthID ist eine Wasserzeichentechnologie von Google DeepMind für Inhalte, die von Googles KI-Modellen erzeugt werden. Sie bettet bei der Generierung ein nicht wahrnehmbares Signal ein, das auch nach gängigen Änderungen wie Zuschneiden, Skalieren, Kompression und Farbanpassungen erkennbar bleiben soll. Google nutzt dieselbe Technikfamilie für Bilder, Audio, Video und Text.',
      ],
    },
    {
      heading: 'So prüfen Sie ein Bild auf SynthID',
      paragraphs: [
        'Anders als Metadaten lässt sich ein Wasserzeichen nicht mit einem beliebigen Viewer auslesen – Sie brauchen den Detektor des Anbieters. Google hat Möglichkeiten eingeführt, Inhalte auf SynthID zu prüfen, etwa den SynthID Detector und Prüfungen in den eigenen Produkten. Andere Anbieter setzen eigene Wasserzeichen- und Erkennungsverfahren ein.',
        'Der Bericht auf dieser Website zeigt nur Metadaten. Das Ergebnis „Keine KI-Hinweise“ schließt ein Pixel-Wasserzeichen daher nie aus.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Welche KI-Bilder haben unsichtbare Wasserzeichen?',
      paragraphs: [],
      bullets: [
        'Googles Bildmodelle, etwa die in Gemini und Imagen eingesetzten, betten SynthID ein.',
        'Meta hat erklärt, dass Bilder aus Meta AI neben Metadaten ein unsichtbares Wasserzeichen enthalten.',
        'Andere Online-Dienste nutzen unter Umständen eigene Wasserzeichen; die Richtlinien unterscheiden sich und ändern sich.',
        'Lokale Tools wie Stable Diffusion fügen standardmäßig meist kein Wasserzeichen hinzu.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Warum Metadaten-Tools keine Wasserzeichen entfernen können',
      paragraphs: [
        'Ein verlustfreier Metadaten-Cleaner kopiert die Bilddaten Byte für Byte – genau das garantiert, dass keinerlei Qualität verloren geht. Ein Wasserzeichen in den Pixeln bleibt daher genau dort, wo es ist. Tools, die versprechen, „KI-Wasserzeichen zu entfernen“, funktionieren entweder nicht wie behauptet oder verändern das Bild stark – und der Versuch, das Wasserzeichen eines Anbieters zu umgehen, kann zudem gegen dessen Nutzungsbedingungen verstoßen.',
      ],
    },
    {
      heading: 'Was das in der Praxis bedeutet',
      paragraphs: [
        'Die Metadaten-Bereinigung ist das richtige Werkzeug für den Datenschutz und um Prompts, Standorte und Herkunftsdaten zu entfernen, die Sie nicht teilen möchten. Sie macht ein KI-Bild nicht unerkennbar. Wenn Sie realistische KI-generierte Inhalte veröffentlichen, halten Sie sich an die Kennzeichnungsregeln der jeweiligen Plattform.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
  ],
  faqHeading: 'Fragen zu SynthID und KI-Wasserzeichen',
  faq: [
    {
      q: 'Entfernt dieses Tool SynthID?',
      a: 'Nein. Das Tool entfernt nur Metadaten und verändert nie Pixel – ein unsichtbares Wasserzeichen bleibt also im Bild.',
    },
    {
      q: 'Wie erkenne ich, ob ein Bild SynthID enthält?',
      a: 'Nur mit Googles eigenen Prüfwerkzeugen. Der Metadatenbericht auf dieser Website kann keine Wasserzeichen in den Pixeln sehen.',
    },
    {
      q: 'Haben alle KI-Bilder unsichtbare Wasserzeichen?',
      a: 'Nein. Manche Anbieter versehen ihre Ergebnisse mit Wasserzeichen, viele nicht, und Bilder aus lokalen Tools tragen meist überhaupt keins.',
    },
    {
      q: 'Entfernt ein Screenshot SynthID?',
      a: 'Darauf ist SynthID ausgelegt, eben nicht. Es soll gängige Veränderungen wie Screenshots, Zuschneiden und Kompression überstehen.',
    },
    {
      q: 'Ist SynthID dasselbe wie Content Credentials?',
      a: 'Nein. Content Credentials sind signierte Metadaten, die neben dem Bild gespeichert werden; SynthID ist ein Signal in den Pixeln. Manche Systeme kombinieren beides.',
    },
    {
      q: 'Können Plattformen SynthID erkennen?',
      a: 'Nur wenn sie Zugang zu einem kompatiblen Detektor haben. Die meisten Plattform-Labels beruhen heute auf Metadaten und den Angaben der Ersteller.',
    },
  ],
};

export default article;
