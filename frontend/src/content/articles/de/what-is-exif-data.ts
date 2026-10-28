import type { Article } from '../types';

const article: Article = {
  title: 'Was sind EXIF-Daten? Foto-Metadaten einfach erklärt',
  summary: [
    'EXIF (Exchangeable Image File Format) sind die verborgenen Informationen, die eine Kamera oder ein Smartphone in jedes Foto schreibt: Kameraeinstellungen, Datum und Uhrzeit, Gerätemodell und oft den GPS-Standort.',
    'Dieser Ratgeber erklärt, was EXIF enthält, wie es sich von XMP, IPTC und C2PA unterscheidet, warum es für den Datenschutz wichtig ist und wie Sie EXIF-Daten sicher anzeigen oder löschen.',
  ],
  description:
    'Was EXIF-Daten sind, welche Felder sie enthalten (Kamera, Zeit, GPS), wie sie sich von XMP, IPTC und C2PA unterscheiden und wie Sie sie ohne Qualitätsverlust löschen.',
  answer:
    'EXIF-Daten sind Metadaten, die Kameras und Smartphones in einem Foto speichern: Hersteller und Modell des Geräts, Belichtungseinstellungen, Datum und Uhrzeit, die Ausrichtung, ein kleines Vorschaubild und oft den GPS-Standort. Auf das Aussehen des Bildes haben sie keinen Einfluss. Sie können sie in den Fotoinfos Ihres Smartphones oder mit einem Metadaten-Viewer ansehen und mit einem Cleaner entfernen, der Ausrichtung und Farbprofil beibehält.',
  sections: [
    {
      heading: 'Wofür EXIF steht',
      paragraphs: [
        'EXIF steht für Exchangeable Image File Format, einen Standard, der für Digitalkameras geschaffen wurde, damit jedes Foto Informationen darüber mitführen kann, wie es aufgenommen wurde. Fast jede Kamera und jedes Smartphone schreibt EXIF automatisch, und die meisten Foto-Apps können es lesen.',
      ],
    },
    {
      heading: 'Was EXIF-Daten enthalten',
      paragraphs: ['Ein typisches Foto kann Folgendes enthalten:'],
      table: {
        head: ['Gruppe', 'Beispielfelder'],
        rows: [
          ['Gerät', 'Make, Model, LensModel, manchmal eine Seriennummer'],
          ['Belichtung', 'ISO, FNumber (Blende), ExposureTime (Verschlusszeit), FocalLength, Flash'],
          ['Datum und Uhrzeit', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Standort', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Bild', 'Orientation, Auflösung, eingebettetes Vorschaubild'],
          ['Software', 'Software, die App, die die Datei zuletzt gespeichert hat'],
        ],
      },
    },
    {
      heading: 'Wo EXIF in der Datei gespeichert ist',
      paragraphs: [
        'In JPEG-Dateien steht EXIF in einem APP1-Segment nahe am Dateianfang und ist in Verzeichnisse (IFDs) gegliedert: IFD0 für grundlegende Bild- und Gerätedaten, das Exif-Verzeichnis für Kameraeinstellungen, das GPS-Verzeichnis für den Standort und IFD1 für das Vorschaubild. Auch HEIC-, WebP- und PNG-Dateien können EXIF enthalten, jeweils in ihrem eigenen Container.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF, XMP, IPTC und C2PA im Vergleich',
      paragraphs: ['Fotos enthalten oft mehrere Arten von Metadaten gleichzeitig:'],
      table: {
        head: ['Standard', 'Geschrieben von', 'Typischer Inhalt'],
        rows: [
          ['EXIF', 'Kameras und Smartphones', 'Technische Aufnahmedaten, Zeit, GPS'],
          ['XMP', 'Bildbearbeitungssoftware', 'Beschreibungen, Schlagwörter, Bearbeitungsverlauf, KI-Felder'],
          ['IPTC', 'Redaktionen, Bildagenturen, Bildbearbeitungen', 'Bildunterschriften, Credits, Rechte, DigitalSourceType'],
          ['C2PA', 'Kameras, Bildbearbeitungen, KI-Dienste', 'Signierte Content Credentials: Herkunft und Bearbeitungen'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Warum EXIF-Daten für den Datenschutz wichtig sind',
      paragraphs: [
        'Für Fotografen ist EXIF ein Lernwerkzeug und eine Dokumentation ihrer Arbeit. Für alle anderen ist es vor allem ein Datenschutzrisiko: Ein einziges Foto kann Ihre Wohnadresse, Ihr Gerät und den Zeitpunkt verraten, zu dem Sie irgendwo waren. EXIF lässt sich zudem leicht bearbeiten und sollte daher nie allein als Beweis gelten.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'So zeigen Sie EXIF-Daten an',
      paragraphs: [],
      bullets: [
        'Windows: Rechtsklick auf die Datei › Eigenschaften › Details.',
        'Mac: Foto in Vorschau öffnen › Werkzeuge › Informationen einblenden.',
        'iPhone und Android: Foto öffnen und nach oben wischen.',
        'Jedes Gerät: Ziehen Sie das Foto in das Tool oben auf dieser Seite, um alle EXIF-, XMP- und IPTC-Felder nach Quelle gruppiert zu entschlüsseln.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'So löschen Sie EXIF-Daten sicher',
      paragraphs: [
        'Behalten Sie beim Entfernen von EXIF das Ausrichtungs-Tag, damit Fotos nicht gedreht werden, behalten Sie das Farbprofil für korrekte Farben, und meiden Sie Tools, die das Bild neu komprimieren. Dieses Tool erledigt alle drei Punkte automatisch: Klicken Sie auf „KI-Metadaten entfernen“, prüfen Sie den Ergebnisbereich und laden Sie die bereinigte Datei herunter.',
      ],
    },
  ],
  faqHeading: 'Fragen zu EXIF-Daten',
  faq: [
    {
      q: 'Beeinflusst EXIF die Bildqualität?',
      a: 'Nein. EXIF wird getrennt von den Bilddaten gespeichert, daher ändert das Entfernen nichts am Aussehen des Bildes.',
    },
    {
      q: 'Lassen sich EXIF-Daten fälschen?',
      a: 'Ja. EXIF-Felder lassen sich mit gängigen Tools bearbeiten. Sie sind daher nützliche Hinweise, aber nie allein ein Beweis.',
    },
    {
      q: 'Gehört die Ausrichtung zu EXIF, und bleibt sie erhalten?',
      a: 'Ja, die Ausrichtung ist ein EXIF-Tag. Der Cleaner schreibt sie in einen minimalen EXIF-Block zurück, damit Ihre Fotos weiterhin richtig herum angezeigt werden.',
    },
    {
      q: 'Haben Screenshots EXIF-Daten?',
      a: 'Screenshots enthalten meist wenig EXIF, können aber trotzdem Datum, Gerät und die Software enthalten, mit der sie erstellt wurden.',
    },
    {
      q: 'Haben PNG-Dateien EXIF?',
      a: 'Das ist möglich, in einem eXIf-Chunk. Häufiger werden PNG-Metadaten aber als Text-Chunks gespeichert – genau dort legen KI-Tools ihre Prompts ab.',
    },
    {
      q: 'Ist es legal, EXIF-Daten zu entfernen?',
      a: 'Metadaten aus Ihren eigenen Fotos zu entfernen ist in der Regel unproblematisch. Entfernen Sie aber keine Urheberrechts- oder Credit-Angaben aus Bildern, die Ihnen nicht gehören, wenn eine Lizenz sie vorschreibt.',
    },
  ],
};

export default article;
