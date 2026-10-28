import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten aus WebP entfernen – EXIF, XMP & C2PA',
  summary: [
    'WebP-Bilder können genau wie JPEG EXIF-, XMP- und C2PA-Daten enthalten – einschließlich KI-Herkunftsfeldern, die Bildgeneratoren und Bildbearbeitungen hinzufügen.',
    'Ziehen Sie Ihre WebP-Dateien in das Tool auf dieser Seite, um sie zu prüfen und die Metadaten zu entfernen. Verlustbehaftete, verlustfreie und animierte WebP-Dateien bleiben dabei exakt so, wie sie waren.',
  ],
  description:
    'EXIF-, XMP- und C2PA-Metadaten aus WebP-Bildern im Browser entfernen. Bilddaten, Transparenz, Farbprofil und Animation bleiben. Kostenlos, ohne Upload, mit ZIP.',
  answer:
    'Um Metadaten aus einem WebP-Bild zu entfernen, ziehen Sie es in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. Die EXIF-, XMP- und C2PA-Chunks werden aus dem RIFF-Container gelöscht, während VP8/VP8L-Bilddaten, Transparenz, ICC-Farbprofil und Animationsframes unverändert kopiert werden – verlustbehaftetes WebP verliert also keine weitere Qualität, und animiertes WebP behält jeden Frame.',
  sections: [
    {
      heading: 'Wo WebP-Metadaten gespeichert sind',
      paragraphs: [
        'WebP-Dateien nutzen einen RIFF-Container aus Chunks. Das Bild steckt in VP8- (verlustbehaftet), VP8L- (verlustfrei) oder ALPH-Chunks (Transparenz); Metadaten liegen in separaten Chunks:',
      ],
      table: {
        head: ['Chunk', 'Aufgabe', 'Nach dem Bereinigen'],
        rows: [
          ['VP8, VP8L, ALPH', 'Bilddaten und Transparenz', 'Erhalten, Byte für Byte'],
          ['ICCP', 'Farbprofil', 'Erhalten'],
          ['ANIM, ANMF', 'Animationseinstellungen und Frames', 'Erhalten'],
          ['EXIF', 'Kamera, Zeit, GPS, Ausrichtung', 'Entfernt (Ausrichtung neu geschrieben)'],
          ['XMP', 'Bearbeitungsverlauf, Autor, KI-Felder', 'Entfernt'],
          ['C2PA', 'Content Credentials', 'Entfernt'],
        ],
      },
    },
    {
      heading: 'Metadaten aus WebP entfernen in drei Schritten',
      paragraphs: [],
      steps: [
        'Ziehen Sie Ihre WebP-Dateien in das Tool oben.',
        'Sehen Sie im Bericht nach, welche EXIF-, XMP- und Herkunftsfelder in jeder Datei gefunden wurden.',
        'Klicken Sie auf „KI-Metadaten entfernen“ und laden Sie die bereinigten Bilder einzeln oder als ZIP herunter.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Was erhalten bleibt',
      paragraphs: [
        'Die Bild-Chunks, die Transparenz, das ICC-Farbprofil und die Animationsframes werden unverändert kopiert. Hat die Datei eine Ausrichtung angegeben, wird diese in einen minimalen EXIF-Chunk zurückgeschrieben, damit das Bild weiterhin richtig angezeigt wird.',
        'Da nichts dekodiert und neu kodiert wird, verlieren verlustbehaftete WebP-Bilder keine weitere Qualität, und animierte WebP-Dateien behalten jeden Frame samt Timing.',
      ],
    },
    {
      heading: 'Wann WebP-Metadaten eine Rolle spielen',
      paragraphs: [
        'Viele Websites und KI-Tools exportieren standardmäßig als WebP, und die Metadaten reisen mit der Datei, wenn Sie sie herunterladen und weiterteilen. Die Bereinigung entfernt Standort-, Geräte- und Herkunftsangaben, bevor Sie das Bild veröffentlichen oder versenden.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Fragen zum Bereinigen von WebP-Dateien',
  faq: [
    {
      q: 'Werden animierte WebP-Dateien unterstützt?',
      a: 'Ja. Die Animations-Chunks bleiben erhalten, Frames und Timing ändern sich also nicht.',
    },
    {
      q: 'Wird das Bild neu komprimiert?',
      a: 'Nein. Es werden nur Metadaten-Chunks entfernt; die Bilddaten werden Byte für Byte kopiert.',
    },
    {
      q: 'Bleibt die Transparenz erhalten?',
      a: 'Ja. Die Alphadaten bleiben exakt so, wie sie waren.',
    },
    {
      q: 'Kann ich hier WebP in JPG umwandeln?',
      a: 'Nein. Das Tool behält jede Datei in ihrem ursprünglichen Format; es entfernt nur Metadaten.',
    },
    {
      q: 'Gibt es eine Größenbeschränkung?',
      a: 'Jede Datei darf bis zu 25 MB und 40 Megapixel groß sein, und Sie können bis zu 50 Dateien pro Sitzung bereinigen.',
    },
    {
      q: 'Werden meine Bilder hochgeladen?',
      a: 'Nein. WebP-Dateien werden lokal in Ihrem Browser verarbeitet.',
    },
  ],
};

export default article;
