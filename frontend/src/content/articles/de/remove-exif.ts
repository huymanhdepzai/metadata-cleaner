import type { Article } from '../types';

const article: Article = {
  title: 'EXIF-Daten online löschen – kostenloser EXIF Remover',
  summary: [
    'Fotos von Smartphones und Kameras enthalten EXIF-Daten: GPS-Standort, Aufnahmezeit, Gerätemodell und manchmal eine Seriennummer. Jeder, der die Originaldatei erhält, kann sie auslesen.',
    'Ziehen Sie Ihre Fotos in das Tool auf dieser Seite, um jedes EXIF-Feld zu sehen und mit einem Klick zu entfernen – ohne das Bild neu zu komprimieren, ohne es zu drehen und ohne etwas hochzuladen.',
  ],
  description:
    'Kostenloser EXIF Remover: GPS, Kamera, Datum und Seriennummer aus JPG, HEIC, PNG und WebP im Browser löschen. Verlustfrei, Ausrichtung bleibt, kein Upload.',
  answer:
    'Um EXIF-Daten aus einem Foto zu löschen, ziehen Sie es in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. GPS-Koordinaten, Aufnahmezeit, Kamerahersteller, Modell und Seriennummer werden zusammen mit XMP und IPTC entfernt, während Ausrichtung und Farbprofil erhalten bleiben – das Foto sieht also genauso aus. Das Bild wird nie neu komprimiert und verlässt nie Ihren Browser.',
  sections: [
    {
      heading: 'EXIF-Daten in drei Schritten entfernen',
      paragraphs: [],
      steps: [
        'Ziehen Sie Ihre Fotos in das Tool oben oder tippen Sie auf „Bilder auswählen“. Unterstützt werden JPG, HEIC, PNG, WebP, GIF und AVIF.',
        'Prüfen Sie unter „Datenschutzdetails“, ob Standort-, Personen- oder Zeitangaben offengelegt sind, und öffnen Sie „Alle Metadaten & Dateidetails“ für jedes einzelne Feld.',
        'Klicken Sie auf „KI-Metadaten entfernen“ und laden Sie die bereinigten Fotos einzeln oder als ZIP herunter.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Welche EXIF-Felder gelöscht werden',
      paragraphs: [],
      table: {
        head: ['Gruppe', 'Beispiele', 'Ergebnis'],
        rows: [
          ['Standort', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Entfernt'],
          ['Gerät', 'Make, Model, LensModel, BodySerialNumber', 'Entfernt'],
          ['Zeit', 'DateTimeOriginal, OffsetTime', 'Entfernt'],
          ['Software und Autor', 'Software, Artist, Copyright', 'Entfernt'],
          ['Vorschaubild', 'Eingebettetes Vorschaubild', 'Entfernt'],
          ['Darstellung', 'Orientation, ICC-Farbprofil', 'Erhalten'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Warum ein verlustfreier EXIF Remover wichtig ist',
      paragraphs: [
        'Viele EXIF-Remover zeichnen das Foto neu und speichern eine neue Datei. Das entfernt zwar EXIF, komprimiert JPEGs aber auch neu, kann das Farbprofil verwerfen und dreht das Foto manchmal, weil das Ausrichtungs-Tag verloren geht.',
        'Dieses Tool schneidet die Metadatenblöcke aus der Datei heraus und kopiert die Bilddaten unverändert. Die Ausrichtung wird in einen minimalen EXIF-Block zurückgeschrieben – das Foto bleibt aufrecht und pixelgenau identisch.',
      ],
    },
    {
      heading: 'Wann Sie EXIF-Daten löschen sollten',
      paragraphs: [],
      bullets: [
        'Bevor Sie Dinge online verkaufen oder Fotos posten, die zu Hause aufgenommen wurden.',
        'Bevor Sie Originaldateien per E-Mail, Cloud-Link oder „als Datei senden“ in Messenger-Apps verschicken – dabei bleibt EXIF erhalten.',
        'Bevor Sie Kundenaufträge abliefern, die weder die Seriennummer Ihrer Kamera noch Ihren Bearbeitungsverlauf zeigen sollen.',
        'Bevor Sie Fotos von Kindern, Veranstaltungen oder Orten veröffentlichen, die nicht lokalisiert werden sollen.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'EXIF bei iPhone- und Android-Fotos',
      paragraphs: [
        'iPhone-Fotos sind meist HEIC-Dateien, in denen EXIF als eigenes Item gespeichert ist; Android-Fotos sind meist JPEGs mit EXIF in einem APP1-Segment. Beide werden direkt bereinigt und behalten ihr ursprüngliches Format – HEIC wird nicht in JPG umgewandelt.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Fragen zum Löschen von EXIF-Daten',
  faq: [
    {
      q: 'Verringert das Entfernen von EXIF die Fotoqualität?',
      a: 'Nein. Es werden nur Metadatenblöcke entfernt; die Bilddaten werden Byte für Byte kopiert.',
    },
    {
      q: 'Werden meine Fotos nach dem Entfernen von EXIF gedreht?',
      a: 'Nein. Das Ausrichtungs-Tag wird in einen minimalen EXIF-Block zurückgeschrieben, damit die Fotos richtig herum angezeigt werden.',
    },
    {
      q: 'Werden meine Fotos auf einen Server hochgeladen?',
      a: 'Nein. Alles läuft in Ihrem Browser, und die Dateien verlassen Ihr Gerät nie.',
    },
    {
      q: 'Kann ich nur den GPS-Standort entfernen und den Rest behalten?',
      a: 'Noch nicht. Das Tool entfernt alle identifizierenden Metadaten auf einmal und behält nur, was für die korrekte Anzeige des Bildes nötig ist.',
    },
    {
      q: 'Gibt es ein Limit?',
      a: 'Jedes Foto darf bis zu 25 MB und 40 Megapixel groß sein, bei bis zu 50 Fotos pro Durchgang.',
    },
    {
      q: 'Lassen sich gelöschte EXIF-Daten wiederherstellen?',
      a: 'Aus der bereinigten Datei nicht. Kopien, die Sie vor dem Bereinigen geteilt haben, enthalten sie jedoch weiterhin.',
    },
  ],
};

export default article;
