import type { Article } from '../types';

const article: Article = {
  title: 'Entfernt ein Screenshot Metadaten? Was bleibt und was verloren geht',
  seoTitle: 'Entfernt ein Screenshot Metadaten? Was bleibt',
  summary: [
    'Ein Screenshot gilt als bequemer Weg, um Foto-Metadaten loszuwerden. Er entfernt tatsächlich die ursprünglichen EXIF-, GPS- und C2PA-Daten – fügt aber eigene Metadaten hinzu und kostet Bildqualität.',
    'Hier erfahren Sie genau, was ein Screenshot entfernt, was er behält oder hinzufügt, was er nie entfernen kann, und eine sauberere Alternative, bei der das Originalbild unverändert bleibt.',
  ],
  description:
    'Ein Screenshot entfernt die originalen EXIF-, GPS- und C2PA-Daten, fügt aber eigene Metadaten hinzu, senkt die Qualität und behält unsichtbare Wasserzeichen.',
  answer:
    'Größtenteils ja. Ein Screenshot ist ein völlig neues Bild, daher werden EXIF, GPS-Standort und C2PA Content Credentials des Originalfotos nicht übernommen. Der Screenshot erhält aber eigene Metadaten wie Datum und Gerät, ist auf die Auflösung Ihres Bildschirms begrenzt, und unsichtbare Wasserzeichen sowie im Bild sichtbare Details bleiben erhalten. Wer die Metadaten direkt aus dem Original entfernt, vermeidet diese Nachteile.',
  sections: [
    {
      heading: 'Was ein Screenshot entfernt',
      paragraphs: [
        'Ein Screenshot erfasst die Pixel, die Ihr Bildschirm gerade anzeigt, und speichert sie als neue Datei. Aus den Metadaten der Originaldatei wird nichts übernommen, folgendes ist also weg:',
      ],
      bullets: [
        'GPS-Koordinaten, Kameramodell, Objektiv und ursprüngliche Aufnahmezeit (EXIF).',
        'Urheber, Copyright und Bearbeitungsverlauf (XMP und IPTC).',
        'C2PA Content Credentials und IPTC-KI-Labels von KI-Generatoren oder Bearbeitungs-Apps.',
        'Prompts, Seeds und Workflows in KI-generierten PNG-Dateien.',
      ],
    },
    {
      heading: 'Was ein Screenshot hinzufügt oder behält',
      paragraphs: [
        'Ein Screenshot ist keine metadatenfreie Datei. Je nach Gerät kann er den Aufnahmezeitpunkt, das Gerät oder Betriebssystem, die Bildschirmgröße und manchmal einen Kommentar „Screenshot“ enthalten. Auf manchen Geräten kann auch der Screenshot selbst Content Credentials erhalten. Diese Felder sind meist weniger heikel als der ursprüngliche GPS-Standort, verraten aber trotzdem etwas über Sie.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Was ein Screenshot nie entfernen kann',
      paragraphs: [],
      bullets: [
        'Unsichtbare Wasserzeichen wie Googles SynthID, die in den Pixeln stecken und so gestaltet sind, dass sie Screenshots überstehen.',
        'Alles, was im Bild sichtbar ist: Straßenschilder, Hausnummern, Gesichter, Spiegelungen oder eine erkennbare Aussicht können einen Ort ganz ohne Metadaten verraten.',
        'Informationen, die rund um das Bild auf dem Bildschirm zu sehen sind, etwa Benachrichtigungen, die Uhrzeit oder Ihr Kontoname, wenn Sie das Zuschneiden vergessen.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Screenshot oder Metadaten-Tool im Vergleich',
      paragraphs: [],
      table: {
        head: ['', 'Screenshot', 'Metadaten-Tool'],
        rows: [
          ['Ursprüngliche EXIF-, GPS- und C2PA-Daten', 'Nicht übernommen', 'Entfernt'],
          ['Neue Metadaten', 'Ja (Datum, Gerät …)', 'Nein'],
          ['Auflösung', 'Auf den Bildschirm begrenzt', 'Original'],
          ['Pixel', 'Neu erfasst, evtl. skaliert', 'Identisch'],
          ['Farbprofil und HDR', 'Oft verändert', 'Bleiben erhalten'],
          ['50 Fotos auf einmal', 'Einzeln', 'Ein Klick'],
        ],
      },
    },
    {
      heading: 'Warum ein Screenshot ein schlechter Weg zum Bereinigen ist',
      paragraphs: [
        'Wenn das Foto nicht bei 100 % Zoom den ganzen Bildschirm füllt, ist der Screenshot eine verkleinerte Kopie. Farben können sich verschieben, wenn das System zwischen Farbprofilen umrechnet, HDR-Lichter werden flach, und jeder weitere Screenshot oder Upload komprimiert das Bild erneut. Für alles, was Ihnen wichtig ist – Portfolio, Produktfotos, KI-Kunst –, liefert das Bereinigen der Originaldatei ein besseres Ergebnis.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'Besser: Metadaten aus dem Original entfernen',
      paragraphs: [],
      steps: [
        'Ziehen Sie die Originalfotos in das Tool oben auf dieser Seite – JPG, PNG, WebP, GIF, HEIC oder AVIF.',
        'Prüfen Sie im Bericht, welche Standort-, persönlichen und KI-Daten jede Datei enthält.',
        'Klicken Sie auf „KI-Metadaten entfernen“. Nur Metadatenblöcke werden entfernt; die Bilddaten werden Byte für Byte kopiert.',
        'Laden Sie die bereinigten Dateien in voller Auflösung herunter, einzeln oder als ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Fragen zu Screenshots und Metadaten',
  faq: [
    {
      q: 'Entfernt ein Screenshot den GPS-Standort eines Fotos?',
      a: 'Ja. Die ursprünglichen GPS-Koordinaten werden nicht in den Screenshot übernommen. Im Bild sichtbare Details können trotzdem verraten, wo es aufgenommen wurde.',
    },
    {
      q: 'Haben Screenshots eigene Metadaten?',
      a: 'Ja. Screenshots enthalten meist das Aufnahmedatum und Angaben zum Gerät oder zur Software, manchmal auch einen Kommentar, der sie als Screenshot kennzeichnet.',
    },
    {
      q: 'Entfernt ein Screenshot C2PA Content Credentials?',
      a: 'Das ursprüngliche Manifest wird nicht übernommen. Manche Geräte und Apps können dem Screenshot selbst neue Content Credentials hinzufügen – prüfen Sie also das Ergebnis.',
    },
    {
      q: 'Entfernt ein Screenshot SynthID oder andere unsichtbare Wasserzeichen?',
      a: 'Nein. Unsichtbare Wasserzeichen sind Teil der Pixel und so gestaltet, dass sie Screenshots, Zuschneiden und Komprimierung überstehen.',
    },
    {
      q: 'Verringert ein Screenshot die Bildqualität?',
      a: 'Meistens ja. Er ist auf die Bildschirmauflösung begrenzt, kann skaliert werden und das ursprüngliche Farbprofil sowie HDR-Informationen verlieren.',
    },
    {
      q: 'Wie entfernt man Metadaten am besten ohne Qualitätsverlust?',
      a: 'Entfernen Sie die Metadaten mit einem verlustfreien Tool aus der Originaldatei. Die Bilddaten bleiben identisch und die Datei behält ihre volle Auflösung.',
    },
  ],
};

export default article;
