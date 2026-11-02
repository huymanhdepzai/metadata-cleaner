import type { Article } from '../types';

const article: Article = {
  title: 'Die besten Tools zum Entfernen von Metadaten 2026: 8 Optionen im Vergleich',
  seoTitle: 'Metadaten entfernen: die besten Tools 2026 im Vergleich',
  summary: [
    'Jedes Foto kann versteckte Daten enthalten: GPS-Standort, Aufnahmezeit, Seriennummern des Geräts und bei KI-Bildern C2PA Content Credentials oder gleich den ganzen Prompt. Dutzende Tools versprechen, das zu entfernen – sie unterscheiden sich aber darin, was sie wirklich löschen, ob sie das Bild neu komprimieren und ob Ihre Dateien Ihr Gerät verlassen.',
    'Hier sind die acht Tools zum Entfernen von Metadaten, die Sie 2026 kennen sollten – von Browser-Tools und ExifTool bis zu den Funktionen, die Windows, macOS und Ihr Smartphone schon mitbringen –, jeweils mit dem, was sie entfernen, und ihren Grenzen.',
  ],
  description:
    'Die besten Tools zum Entfernen von Metadaten 2026: All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, Smartphones und Editoren – was sie löschen.',
  answer:
    'Das beste Tool hängt davon ab, wie Sie arbeiten. Für schnelles, privates Bereinigen von JPG, PNG, WebP, HEIC und KI-Bildern entfernt ein Browser-Tool wie All Metadata Cleaner EXIF, GPS, C2PA und Prompts, ohne Upload und ohne Neukomprimierung. ExifTool ist die gründlichste Wahl für Skripte, RAW-Dateien und gezielte Änderungen. Die eingebauten Funktionen von Windows, macOS und Smartphones entfernen meist nur den Standort.',
  sections: [
    {
      heading: 'So haben wir die Metadaten-Tools verglichen',
      paragraphs: [
        'Hinweis: All Metadata Cleaner ist das Tool dieser Website. Es steht an erster Stelle, weil dies seine Anleitung ist – nicht, weil alle anderen Optionen schlechter wären. Mehrere der folgenden Tools sind für bestimmte Aufgaben besser geeignet, und das sagen wir auch. Jedes Tool wird anhand seines dokumentierten Verhaltens und fünf Fragen beschrieben:',
      ],
      bullets: [
        'Umfang: Entfernt es nur EXIF und GPS oder auch XMP, IPTC, C2PA Content Credentials und KI-Prompts im PNG-Text?',
        'Qualität: Schneidet es die Metadaten aus der Datei heraus oder dekodiert und komprimiert es das Bild neu?',
        'Datenschutz: Werden die Dateien auf Ihrem Gerät verarbeitet oder auf einen Server hochgeladen?',
        'Was bleibt: Ausrichtung und Farbprofil, damit das bereinigte Foto weiterhin richtig aussieht.',
        'Aufwand: Installation, Kommandozeile oder ein Klick – und ob Stapelverarbeitung möglich ist.',
      ],
    },
    {
      heading: 'Vergleichstabelle der Tools zum Entfernen von Metadaten',
      paragraphs: [],
      table: {
        head: ['Tool', 'Plattform', 'Preis', 'C2PA und KI-Prompts', 'Bildqualität'],
        rows: [
          ['All Metadata Cleaner', 'Jeder Browser', 'Kostenlos', 'Werden entfernt', 'Unverändert'],
          ['ExifTool', 'Windows, macOS, Linux (Kommandozeile)', 'Kostenlos, Open Source', 'Werden entfernt (-all= oder -jumbf:all=)', 'Unverändert'],
          ['ExifCleaner', 'Windows, macOS, Linux (App)', 'Kostenlos, Open Source', 'Über ExifTool – Ergebnis prüfen', 'Unverändert'],
          ['Windows-Explorer', 'Windows', 'Eingebaut', 'Nicht dafür gedacht', 'Unverändert'],
          ['Vorschau und Fotos am Mac', 'macOS', 'Eingebaut', 'Nein – nur Standort', 'Vorschau unverändert, Fotos-Export neu komprimiert'],
          ['Teilen auf iPhone und Android', 'iOS, Android', 'Eingebaut', 'Nein – nur Standort', 'Je nach App'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (Kommandozeile)', 'Kostenlos, Open Source', 'Meist ja, da die Datei neu geschrieben wird', 'Neu komprimiert (JPEG, WebP)'],
          ['Export aus Bildbearbeitung', 'Photoshop, Lightroom, GIMP', 'Kostenpflichtig oder kostenlos', 'Je nach Exporteinstellung', 'Neu komprimiert'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner – am besten für schnelles, privates Bereinigen',
      paragraphs: [
        'Ein kostenloses Web-Tool, das komplett im Browser läuft: Bilder werden auf Ihrem Gerät gelesen und bereinigt und nie hochgeladen. Es entfernt EXIF (inklusive GPS), XMP, IPTC, C2PA Content Credentials sowie Prompts und ComfyUI-Workflows, die KI-Generatoren im PNG-Text speichern. Die Metadatenblöcke werden auf Byte-Ebene herausgeschnitten, die Bilddaten also unverändert kopiert; Ausrichtung und ICC-Farbprofil bleiben erhalten, sodass Fotos genauso aussehen wie vorher. HEIC und AVIF bleiben in ihrem Originalformat.',
        'Vor dem Bereinigen zeigt ein Bericht, was jede Datei enthält – Standort, persönliche Daten, Aufnahmezeit und KI-Hinweise. Grenzen: nur JPG, PNG, WebP, GIF, HEIC und AVIF (kein RAW, Video oder PDF), bis zu 25 MB pro Bild und 50 Bilder pro Durchgang, und es entfernt alle identifizierenden Angaben auf einmal, statt einzelne Felder zur Auswahl zu stellen.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool – am besten für Profis und Automatisierung',
      paragraphs: [
        'ExifTool von Phil Harvey ist das Referenzwerkzeug für Metadaten: kostenlos, Open Source und mit weit mehr unterstützten Formaten als jede andere Option hier, einschließlich RAW-Dateien und Video. „exiftool -all= foto.jpg“ entfernt alle beschreibbaren Metadaten, „-jumbf:all=“ nur den C2PA-Block, und Sie können einzelne Tags löschen oder behalten – das bieten Ein-Klick-Tools nicht.',
        'Dafür brauchen Sie die Kommandozeile, und die Standardwerte erfordern Sorgfalt: „-all=“ löscht auch Farbprofil und Ausrichtungs-Tag, sofern Sie sie nicht mit „-tagsfromfile @ -icc_profile -orientation“ zurückschreiben. Neben jeder Datei bleibt eine Sicherung mit der Endung „_original“, bis Sie sie löschen.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner – die beste Desktop-App mit Drag-and-drop',
      paragraphs: [
        'ExifCleaner ist eine kostenlose Open-Source-Desktop-App für Windows, macOS und Linux, die ExifTool ein Drag-and-drop-Fenster vorschaltet. Dateien oder einen ganzen Ordner hineinziehen, und die Metadaten werden offline entfernt. Version 4 aus dem Jahr 2026 war die erste große Neuentwicklung seit fünf Jahren und brachte Optionen, eine bereinigte Kopie zu speichern und die Ausrichtung zu erhalten. Aktivieren Sie das Speichern als Kopie, wenn Sie die Originale behalten möchten, und prüfen Sie bei KI-Bildern das Ergebnis prüfen, denn die C2PA-Unterstützung hängt von der mitgelieferten ExifTool-Version ab.',
      ],
    },
    {
      heading: '4. Windows-Explorer – eingebaut, am besten für JPEG',
      paragraphs: [
        'Rechtsklick auf das Foto › Eigenschaften › Details › „Eigenschaften und persönliche Informationen entfernen“ löscht die Eigenschaften, die Windows bearbeiten kann, und kann eine bereinigte Kopie speichern. Das funktioniert gut für EXIF in JPEG-Dateien und auch mit mehreren Dateien gleichzeitig. Die Unterstützung für PNG, HEIC und WebP hängt von den installierten Codecs ab, und für C2PA-Manifeste oder KI-Prompts ist die Funktion nicht gedacht.',
      ],
    },
    {
      heading: '5. Vorschau und Fotos am Mac – eingebaut, nur Standort',
      paragraphs: [
        'Die Vorschau kann den GPS-Standort entfernen (Werkzeuge › Informationen einblenden › GPS › Ortsinformationen entfernen), ohne die Bildqualität zu verändern, und Fotos kann den Standort beim Export weglassen. Kamera, Datum und weitere EXIF-Daten bleiben in beiden Fällen erhalten, und ein JPEG-Export aus Fotos wird neu komprimiert. Ausreichend, wenn nur der Standort stört.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. Teilen auf iPhone und Android – nur Standort',
      paragraphs: [
        'Tippen Sie auf dem iPhone oben im Teilen-Menü auf „Optionen“ und deaktivieren Sie „Ort“, bevor Sie senden. Unter Android bieten Google Fotos und viele Teilen-Dialoge an, den Standort aus geteilten Kopien zu entfernen. So verraten Sie am einfachsten nicht, wo ein Foto entstanden ist – andere EXIF-Felder bleiben aber erhalten, und die Einstellungen unterscheiden sich je nach App und Hersteller.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick – für Skripte, aber mit Neukomprimierung',
      paragraphs: [
        '„magick mogrify -strip *.jpg“ entfernt Profile und Kommentare aus ganzen Ordnern, und ImageMagick ist auf allen Desktop-Systemen kostenlos. Anders als ExifTool dekodiert es das Bild und schreibt es neu, sodass JPEG- und WebP-Dateien neu komprimiert werden; -strip löscht außerdem das ICC-Farbprofil, was bei Fotos mit großem Farbraum die Farben verschieben kann. Nutzen Sie es, wenn Sie ohnehin skalieren oder konvertieren, nicht als reinen Metadaten-Entferner.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom und GIMP – ohne Metadaten exportieren',
      paragraphs: [
        'Alle großen Bildbearbeitungen können beim Export auf Metadaten verzichten: „Exportieren als“ in Photoshop kann gar keine Metadaten einschließen, der Lightroom-Export lässt sich auf das Copyright beschränken, und in GIMP können Sie EXIF und XMP beim Export abwählen. Ein Export komprimiert das Bild immer neu, und Adobe-Apps können Content Credentials hinzufügen, wenn diese Einstellung aktiv ist – prüfen Sie sie also vorher.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Und Online-Tools, die Ihr Foto hochladen?',
      paragraphs: [
        'Viele Websites bereinigen Metadaten, indem sie Ihre Datei auf ihren Server hochladen und eine Kopie zurückgeben. Manche funktionieren gut, aber Sie geben das Original – mit GPS-Standort und persönlichen Daten – an Dritte weiter, und viele komprimieren das Bild neu. Wenn Sie ein solches Tool nutzen, lesen Sie in der Datenschutzerklärung nach, wie lange Dateien gespeichert werden. Tools, die Dateien lokal im Browser verarbeiten, umgehen das Problem vollständig.',
      ],
    },
    {
      heading: 'Welches Tool zum Entfernen von Metadaten passt zu Ihnen?',
      paragraphs: [],
      bullets: [
        'Ein paar Fotos oder KI-Bilder privat teilen, ohne etwas zu installieren: All Metadata Cleaner.',
        'Skripte, RAW-Dateien, Video oder nur bestimmte Tags löschen: ExifTool.',
        'Eine Desktop-App mit Drag-and-drop, die offline funktioniert: ExifCleaner.',
        'Nur den Standort, direkt vor dem Senden vom Smartphone: der Standort-Schalter im Teilen-Menü.',
        'Sie bearbeiten oder skalieren das Foto ohnehin: ohne Metadaten aus Ihrem Editor exportieren.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Was kein Metadaten-Tool kann',
      paragraphs: [
        'Alle diese Tools bearbeiten Metadaten, keine Pixel. Keines kann unsichtbare Wasserzeichen entfernen, die im Bild selbst stecken, etwa Googles SynthID, und Plattformen können Bilder weiterhin mit eigener Erkennung kennzeichnen. Das Entfernen von Metadaten ändert auch nichts an der Pflicht, KI-generierte Inhalte offenzulegen, wo eine Plattform oder ein Gesetz das verlangt.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Fragen zu Tools zum Entfernen von Metadaten',
  faq: [
    {
      q: 'Was ist das beste kostenlose Tool zum Entfernen von Metadaten?',
      a: 'Für die meisten ein Browser-Tool wie All Metadata Cleaner: kostenlos, ohne Installation, ohne Upload und ohne Qualitätsverlust. Für Skripte, RAW-Dateien oder gezielte Änderungen ist ExifTool die vollständigste kostenlose Option.',
    },
    {
      q: 'Ist es sicher, Metadaten online zu entfernen?',
      a: 'Das hängt davon ab, ob die Datei hochgeladen wird. Tools, die Bilder im Browser verarbeiten, senden sie nirgendwohin. Websites mit Upload erhalten Ihr Originalfoto samt Standort – prüfen Sie also deren Datenschutzerklärung.',
    },
    {
      q: 'Verringert das Entfernen von Metadaten die Bildqualität?',
      a: 'Nicht bei Tools, die nur Metadatenblöcke herausschneiden, etwa All Metadata Cleaner, ExifTool, ExifCleaner und der Windows-Explorer. Export aus einem Editor, ImageMagick oder Fotos am Mac komprimiert das Bild neu und kann die Qualität senken.',
    },
    {
      q: 'Welche Tools entfernen C2PA Content Credentials?',
      a: 'All Metadata Cleaner und ExifTool (mit -all= oder -jumbf:all=) entfernen C2PA-Manifeste. Die eingebauten Funktionen von Windows, macOS und Smartphones sind dafür nicht gedacht.',
    },
    {
      q: 'Kann ich nur den GPS-Standort entfernen und den Rest behalten?',
      a: 'Ja, mit ExifTool (exiftool -gps:all= foto.jpg), der Vorschau am Mac oder den Teilen-Optionen Ihres Smartphones. All Metadata Cleaner entfernt alle identifizierenden Metadaten auf einmal.',
    },
    {
      q: 'Entfernt eines dieser Tools unsichtbare KI-Wasserzeichen wie SynthID?',
      a: 'Nein. SynthID und ähnliche Wasserzeichen sind Teil der Pixel, nicht der Metadaten, deshalb bleiben sie bei Metadaten-Tools erhalten.',
    },
  ],
};

export default article;
