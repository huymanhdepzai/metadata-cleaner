import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten aus JPG entfernen – verlustfrei & ohne Upload',
  summary: [
    'Jede JPG-Datei aus einer Kamera, einem Smartphone oder einem KI-Generator kann EXIF (Kamera, Zeit, GPS), XMP, IPTC und C2PA Content Credentials enthalten. Ziehen Sie Ihre JPG-Dateien in das Tool auf dieser Seite, um genau zu sehen, was drinsteckt, und entfernen Sie es mit einem Klick.',
    'Der Cleaner schneidet Metadatensegmente auf Byte-Ebene heraus, sodass die komprimierten Bilddaten unverändert kopiert werden – kein erneutes Speichern, kein Qualitätsverlust, kein Upload.',
  ],
  description:
    'EXIF-, GPS-, XMP-, IPTC- und C2PA-Metadaten aus JPG/JPEG im Browser entfernen. Verlustfrei: Bilddaten bleiben Byte für Byte gleich. Kostenlos, ohne Upload, mit ZIP.',
  answer:
    'Um Metadaten aus einer JPG-Datei ohne Qualitätsverlust online zu entfernen, ziehen Sie die Datei in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. EXIF (einschließlich GPS), XMP, IPTC, C2PA und Kommentare werden auf Byte-Ebene herausgeschnitten, die komprimierten Bilddaten werden unverändert kopiert – das Foto sieht identisch aus. Alles läuft in Ihrem Browser, die Datei wird nie hochgeladen.',
  sections: [
    {
      heading: 'Was eine JPG-Datei verbergen kann',
      paragraphs: ['Eine JPEG-Datei besteht aus einer Folge von Marker-Segmenten. Neben dem eigentlichen Bild enthält sie oft:'],
      table: {
        head: ['Segment', 'Möglicher Inhalt'],
        rows: [
          ['APP1 EXIF', 'Kamera- oder Smartphone-Modell, Aufnahmezeit, Belichtung, GPS-Koordinaten, ein eingebettetes Vorschaubild'],
          ['APP1 XMP', 'Bearbeitungsverlauf, Autor, Schlagwörter, KI-Felder wie IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Bildunterschriften, Credits, Copyright-Hinweise'],
          ['APP11 JUMBF', 'C2PA Content Credentials – ein signierter Nachweis, wie das Bild entstanden ist'],
          ['COM, APP2 MPF, Daten nach EOI', 'Kommentare, Vorschaubilder, der Videoteil von Motion Photos'],
        ],
      },
      related: ['what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Metadaten aus JPG entfernen in drei Schritten',
      paragraphs: [],
      steps: [
        'Ziehen Sie eine oder mehrere JPG-Dateien in das Tool oben oder tippen Sie auf „Bilder auswählen“.',
        'Lesen Sie den Bericht: Datenschutzdetails, Hinweise unter „KI & Herkunft“ und die vollständige Liste der in jeder Datei gefundenen Metadaten.',
        'Klicken Sie auf „KI-Metadaten entfernen“ und laden Sie jede Datei einzeln oder alle als eine ZIP herunter. Die bereinigte Datei wird erneut analysiert, damit Sie prüfen können, dass nichts Identifizierendes übrig ist.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Warum verlustfrei bei JPG so wichtig ist',
      paragraphs: [
        'JPEG ist ein verlustbehaftetes Format: Jedes Mal, wenn ein Bild dekodiert und erneut gespeichert wird, wird es neu komprimiert und verliert etwas Detail. Viele Tools zum Entfernen von Metadaten zeichnen das Foto neu und exportieren ein neues JPEG – das entfernt zwar die Metadaten, verringert aber auch die Qualität und kann Farben verändern.',
        'Dieses Tool dekodiert das Bild nie. Es entfernt Metadatensegmente und kopiert die komprimierten Bilddaten exakt so, wie sie waren – das Foto sieht identisch aus, und die Datei wird meist kleiner.',
      ],
      table: {
        head: ['Methode', 'Entfernt Metadaten', 'Qualität', 'Behält Farbprofil'],
        rows: [
          ['Bereinigung auf Byte-Ebene (dieses Tool)', 'Ja', 'Unverändert', 'Ja'],
          ['Neu speichern oder auf Canvas neu zeichnen', 'Ja', 'Neu komprimiert', 'Oft nicht'],
          ['Screenshot', 'Ja', 'Geringer, skaliert', 'Nein'],
        ],
      },
    },
    {
      heading: 'Was in der bereinigten JPG-Datei erhalten bleibt',
      paragraphs: [
        'Wer blind alles entfernt, kann die Darstellung eines Fotos beschädigen. Der Cleaner behält die Teile, die das Aussehen bestimmen: den JFIF-Header, das ICC-Farbprofil, das Adobe-Farbtransformationssegment und die Ausrichtung, die in einen minimalen EXIF-Block zurückgeschrieben wird, damit das Foto aufrecht bleibt. Abmessungen und Bilddaten werden nie verändert.',
      ],
    },
    {
      heading: 'Typische Gründe, eine JPG-Datei zu bereinigen',
      paragraphs: [],
      bullets: [
        'GPS-Daten entfernen, bevor Fotos auf Marktplätzen, in Foren oder in Messenger-Apps landen.',
        'Seriennummern der Kamera, Autorennamen und Bearbeitungsverlauf entfernen, bevor Kundenaufträge ausgeliefert werden.',
        'C2PA- oder KI-Felder entfernen, die bei einem echten Foto das Label „KI-Info“ auslösen.',
        'Prompts und Generatorangaben aus KI-generierten JPEGs entfernen.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Fragen zum Bereinigen von JPG-Dateien',
  faq: [
    {
      q: 'Ist JPG dasselbe wie JPEG?',
      a: 'Ja. .jpg, .jpeg und .jfif sind dasselbe Format, und alle drei werden unterstützt.',
    },
    {
      q: 'Verringert das Entfernen von Metadaten die JPG-Qualität?',
      a: 'Nein. Die komprimierten Bilddaten werden Byte für Byte kopiert; nur Metadatensegmente werden entfernt.',
    },
    {
      q: 'Werden meine Fotos irgendwohin hochgeladen?',
      a: 'Nein. Die Dateien werden in Ihrem Browser gelesen und bereinigt; sie verlassen Ihr Gerät nie.',
    },
    {
      q: 'Wird mein Foto nach dem Bereinigen gedreht?',
      a: 'Nein. Die Ausrichtung wird in einen minimalen EXIF-Block zurückgeschrieben, das Foto wird also genauso angezeigt.',
    },
    {
      q: 'Was passiert mit Motion Photos?',
      a: 'Manche Smartphones hängen hinter dem JPEG-Bild ein kurzes Video an. Diese angehängten Daten werden zusammen mit den Metadaten entfernt, das Ergebnis ist also ein normales Standbild.',
    },
    {
      q: 'Gibt es eine Größenbeschränkung?',
      a: 'Jede JPG-Datei darf bis zu 25 MB und 40 Megapixel groß sein, und Sie können bis zu 50 Dateien pro Durchgang bereinigen.',
    },
  ],
};

export default article;
