import type { Article } from '../types';

const article: Article = {
  title: 'C2PA Content Credentials aus Bildern entfernen – kostenlos, ohne Upload',
  seoTitle: 'C2PA Content Credentials online entfernen – kostenlos',
  summary: [
    'Photoshop, Lightroom, Firefly, die Bildgenerierung von ChatGPT und einige Kameras fügen ein signiertes C2PA-Manifest hinzu – die Content Credentials. Es hält fest, welche App oder welches KI-Modell ein Bild erstellt oder bearbeitet hat.',
    'Ziehen Sie Ihre Bilder in das Tool auf dieser Seite, um zu sehen, was im Manifest steht, und entfernen Sie es mit einem Klick aus einer Kopie. Die Bilddaten werden unverändert kopiert, und nichts wird hochgeladen.',
  ],
  description:
    'C2PA Content Credentials aus JPG, PNG, WebP, HEIC und AVIF im Browser entfernen. Erst das Manifest ansehen, dann verlustfrei löschen. Kostenlos, ohne Upload.',
  answer:
    'Um C2PA Content Credentials zu entfernen, ziehen Sie das Bild in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. Das C2PA-Manifest (JPEG APP11, PNG caBX, WebP-C2PA-Chunk, HEIC/AVIF-uuid-Box) wird zusammen mit XMP, IPTC und EXIF herausgeschnitten, während die Bilddaten Byte für Byte kopiert werden. Die bereinigte Datei wird erneut geprüft, damit Sie sehen, dass kein Manifest übrig ist.',
  sections: [
    {
      heading: 'Content Credentials in drei Schritten entfernen',
      paragraphs: [],
      steps: [
        'Ziehen Sie ein oder mehrere Bilder in das Tool oben – unterstützt werden JPG, PNG, WebP, GIF, HEIC und AVIF.',
        'Öffnen Sie im Bericht „KI & Herkunft“, um zu sehen, ob ein C2PA-Manifest vorhanden ist, welche App es signiert hat und welche Aktionen es aufzeichnet.',
        'Klicken Sie auf „KI-Metadaten entfernen“ und laden Sie die bereinigten Dateien einzeln oder als ZIP herunter. Der Ergebnisbereich bestätigt, dass C2PA entfernt ist.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Wo das C2PA-Manifest gespeichert ist',
      paragraphs: ['Das Manifest liegt in einem eigenen Block, getrennt von den Bilddaten, und lässt sich daher ohne Neukodierung entfernen:'],
      table: {
        head: ['Format', 'C2PA-Block', 'Ebenfalls entfernt'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, Kommentare'],
          ['PNG', 'caBX-Chunk', 'Text-Chunks, eXIf, tIME'],
          ['WebP', 'C2PA-Chunk', 'EXIF, XMP'],
          ['HEIC, AVIF', 'uuid-Box', 'Exif- und XMP-Items'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Warum Content Credentials entfernt werden',
      paragraphs: [],
      bullets: [
        'Ein echtes Foto wurde mit einem generativen Werkzeug leicht retuschiert und erhält nun ein unverdientes Label „KI-Info“.',
        'Das Manifest verrät Software, Kontonamen, Bearbeitungsverlauf oder „Ingredient“-Dateien, die Sie lieber nicht veröffentlichen möchten.',
        'Ein Kunde oder eine Plattform braucht schlichte Bilddateien ohne angehängte Herkunftsdaten.',
        'Sie möchten prüfen, was ein Bild über sich aussagt, bevor Sie entscheiden, ob Sie es unverändert teilen.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Was das Entfernen von C2PA nicht bewirkt',
      paragraphs: [
        'Das Entfernen des Manifests löscht nur den Eintrag in dieser Kopie der Datei. Unsichtbare Pixel-Wasserzeichen wie SynthID bleiben bestehen, und „dauerhafte“ (durable) Content Credentials, die ein Prüfwerkzeug über einen Fingerabdruck oder ein Online-Verzeichnis nachschlagen kann, sind davon nicht betroffen.',
        'Ist ein Bild KI-generiert, können Plattformen trotzdem eine Kennzeichnung verlangen. Halten Sie sich an die Regeln der jeweiligen Plattform – das Entfernen von Metadaten ändert nichts daran, wie das Bild entstanden ist.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Content Credentials in neuen Dateien verhindern',
      paragraphs: [
        'In Photoshop und Lightroom lassen sich Content Credentials in den Exporteinstellungen abschalten, manche generativen Funktionen fügen sie jedoch trotzdem hinzu. KI-Bilddienste versehen in der Regel jedes Ergebnis damit. Bei Dateien, die Sie bereits haben, ist das Bereinigen einer Kopie hier die schnellste Lösung – behalten Sie das Original, falls Sie die Herkunft später nachweisen müssen.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Fragen zum Entfernen von C2PA',
  faq: [
    {
      q: 'Verringert das Entfernen von C2PA die Bildqualität?',
      a: 'Nein. Das Manifest ist ein separater Block; die komprimierten Bilddaten werden unverändert kopiert.',
    },
    {
      q: 'Kann ich die Content Credentials vor dem Entfernen ansehen?',
      a: 'Ja. Der Bereich „KI & Herkunft“ zeigt Claim Generator, aufgezeichnete Aktionen und Quelltyp, und „Alle Metadaten & Dateidetails“ listet jedes Feld auf.',
    },
    {
      q: 'Werden meine Bilder hochgeladen?',
      a: 'Nein. Die Dateien werden in Ihrem Browser gelesen und bereinigt und verlassen Ihr Gerät nie.',
    },
    {
      q: 'Kennzeichnen Instagram oder Facebook das Bild trotzdem?',
      a: 'Labels, die auf C2PA- oder IPTC-Metadaten beruhen, verlieren ihre Grundlage. Plattformen können jedoch andere Signale nutzen oder Sie bitten, KI-Inhalte selbst offenzulegen.',
    },
    {
      q: 'Werden SynthID oder andere unsichtbare Wasserzeichen entfernt?',
      a: 'Nein. Diese sind in die Pixel eingebettet, und dieses Tool verändert nie Pixel.',
    },
    {
      q: 'Kann ich C2PA aus vielen Bildern auf einmal entfernen?',
      a: 'Ja. Ziehen Sie bis zu 50 Bilder pro Durchgang hinein und laden Sie alle als eine ZIP-Datei herunter.',
    },
  ],
};

export default article;
