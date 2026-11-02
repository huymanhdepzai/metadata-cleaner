import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten aus Fotos entfernen unter Windows und Mac',
  seoTitle: 'Foto-Metadaten entfernen unter Windows und Mac',
  summary: [
    'Fotos, die auf den Computer kopiert werden, behalten alles, was Kamera oder Smartphone aufgezeichnet haben: GPS-Standort, Aufnahmezeit, Gerätemodell und manchmal KI-Herkunftsdaten. Windows und macOS können diese Angaben anzeigen, ihre eingebauten Möglichkeiten zum Entfernen sind aber begrenzt.',
    'Hier erfahren Sie, was Explorer, Paint, Vorschau und Fotos entfernen können und was nicht, welche Rolle ExifTool spielt und wie Sie im Browser alle Metadaten verlustfrei entfernen, ohne etwas zu installieren.',
  ],
  description:
    'Foto-Metadaten entfernen unter Windows 11/10 und macOS: was Explorer, Vorschau und Fotos löschen, ihre Grenzen und eine verlustfreie Lösung ohne Installation.',
  answer:
    'Unter Windows klicken Sie mit der rechten Maustaste auf ein Foto, öffnen Eigenschaften › Details und wählen „Eigenschaften und persönliche Informationen entfernen“. Am Mac kann die Vorschau nur den GPS-Standort entfernen, und Fotos kann den Standort beim Export weglassen. Keine der beiden Möglichkeiten entfernt alle Felder, vor allem nicht C2PA oder KI-Prompts. Um auf beiden Systemen alle Metadaten ohne Neukomprimierung zu entfernen, nutzen Sie ein Browser-Tool oder ExifTool.',
  sections: [
    {
      heading: 'Foto-Metadaten unter Windows und Mac anzeigen',
      paragraphs: ['Prüfen Sie die Datei, bevor Sie etwas entfernen, damit Sie wissen, was tatsächlich enthalten ist.'],
      bullets: [
        'Windows: Rechtsklick auf das Foto › Eigenschaften › Details. Sie sehen Kamera, Aufnahmedatum, Abmessungen und – falls vorhanden – GPS-Breiten- und Längengrad.',
        'Mac (Vorschau): Foto öffnen, Werkzeuge › Informationen einblenden wählen, dann den Tab „i“. EXIF, IPTC und GPS erscheinen in eigenen Tabs.',
        'Mac (Finder): Datei auswählen und ⌘I drücken; „Weitere Informationen“ zeigt eine kurze Übersicht wie Abmessungen und Gerät.',
        'Beide: Eingebaute Anzeigen überspringen Blöcke, die sie nicht verstehen, etwa C2PA Content Credentials oder den Prompt-Text in KI-generierten PNGs. Ein spezieller Metadaten-Viewer zeigt auch diese.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Metadaten unter Windows 11 und 10 mit dem Explorer entfernen',
      paragraphs: [],
      steps: [
        'Wählen Sie im Explorer ein oder mehrere Fotos aus, klicken Sie mit der rechten Maustaste und wählen Sie Eigenschaften.',
        'Öffnen Sie den Tab Details und klicken Sie unten auf „Eigenschaften und persönliche Informationen entfernen“.',
        'Wählen Sie „Kopie erstellen, in der alle möglichen Eigenschaften entfernt sind“, um das Original zu behalten, oder markieren Sie einzelne Felder, die aus der Datei selbst entfernt werden sollen.',
        'Klicken Sie auf OK und öffnen Sie den Tab Details der Kopie, um zu prüfen, was übrig ist.',
      ],
    },
    {
      heading: 'Grenzen der Windows-Funktion',
      paragraphs: [
        'Der Explorer bearbeitet nur Eigenschaften, die Windows für das jeweilige Format schreiben kann. Am besten funktioniert das mit JPEG; die Unterstützung für PNG, HEIC und WebP hängt von den installierten Codecs ab und ist oft unvollständig. Für C2PA-Manifeste, XMP-Blöcke ohne passende Eigenschaft oder Prompt- und Workflow-Text, den KI-Tools in PNG-Dateien speichern, ist die Funktion nicht gedacht. Erneutes Speichern in Paint entfernt die Metadaten zwar, komprimiert das Bild aber neu und kann die Qualität senken.',
      ],
    },
    {
      heading: 'Standort am Mac mit Vorschau und Fotos entfernen',
      paragraphs: ['macOS bietet zwei eingebaute Möglichkeiten, beide auf den Standort ausgerichtet:'],
      bullets: [
        'Vorschau: Werkzeuge › Informationen einblenden › Tab „i“ › GPS, dann auf „Ortsinformationen entfernen“ klicken und die Datei sichern. Kameramodell, Aufnahmezeit und weitere EXIF-Daten bleiben erhalten.',
        'Fotos: Foto auswählen und Bild › Ort › Ort ausblenden wählen, oder Ablage › Exportieren nutzen und „Ortsinformationen“ deaktivieren. Ein JPEG-Export wird neu komprimiert, andere Metadaten werden trotzdem übernommen.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'Eingebaute Möglichkeiten im Vergleich',
      paragraphs: [],
      table: {
        head: ['Methode', 'GPS-Standort', 'Kamera und Datum', 'C2PA und KI-Prompts', 'Bildqualität'],
        rows: [
          ['Windows › Eigenschaften entfernen', 'Entfernt (JPEG)', 'Entfernt (JPEG)', 'Nicht dafür gedacht', 'Unverändert'],
          ['Erneut in Paint speichern', 'Meist entfernt', 'Meist entfernt', 'Meist entfernt', 'Neu komprimiert'],
          ['Vorschau › Ortsinformationen entfernen', 'Entfernt', 'Bleibt', 'Bleibt', 'Unverändert'],
          ['Export aus Fotos ohne Standort', 'Entfernt', 'Bleibt', 'Nicht zuverlässig', 'Neu komprimiert (JPEG)'],
          ['Metadaten-Tool im Browser', 'Entfernt', 'Entfernt', 'Entfernt', 'Unverändert'],
        ],
      },
    },
    {
      heading: 'Alle Metadaten unter Windows oder Mac entfernen – ohne Installation',
      paragraphs: [
        'Das Tool auf dieser Seite läuft in jedem Desktop-Browser unter Windows, macOS oder Linux. Die Dateien werden auf Ihrem Computer verarbeitet und nie hochgeladen.',
      ],
      steps: [
        'Ziehen Sie bis zu 50 JPG-, PNG-, WebP-, GIF-, HEIC- oder AVIF-Dateien in den Ablagebereich oben auf dieser Seite.',
        'Prüfen Sie den Bericht: Standort, persönliche Daten, Aufnahmezeit und KI-Hinweise werden pro Datei aufgelistet.',
        'Klicken Sie auf „KI-Metadaten entfernen“. Nur Metadatenblöcke werden herausgeschnitten; die Bilddaten werden Byte für Byte kopiert.',
        'Laden Sie die Dateien einzeln oder als ZIP herunter und behalten Sie Ihre Originale.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'ExifTool über die Kommandozeile nutzen',
      paragraphs: [
        'ExifTool ist ein kostenloses Kommandozeilenprogramm für Windows, macOS und Linux und die gründlichste Option für Skripte. „exiftool -all= foto.jpg“ löscht alle beschreibbaren Metadaten und legt eine Sicherung namens foto.jpg_original an. Dabei werden auch Farbprofil und Ausrichtungs-Tag entfernt; um sie zu behalten, führen Sie „exiftool -all= -tagsfromfile @ -icc_profile -orientation foto.jpg“ aus. Prüfen Sie das Ergebnis immer mit einem Viewer, denn die Abdeckung unterscheidet sich je nach Format.',
      ],
    },
  ],
  faqHeading: 'Fragen zum Entfernen von Metadaten am Computer',
  faq: [
    {
      q: 'Entfernt „Eigenschaften und persönliche Informationen entfernen“ alles?',
      a: 'Nein. Es entfernt die Eigenschaften, die Windows für das Format bearbeiten kann, vor allem EXIF in JPEG-Dateien. C2PA-Manifeste, nicht unterstütztes XMP und PNG-Text-Chunks können erhalten bleiben – prüfen Sie die Kopie also vor dem Teilen.',
    },
    {
      q: 'Kann ich am Mac mit der Vorschau alle EXIF-Daten entfernen?',
      a: 'Nein. Die Vorschau kann nur den GPS-Standort entfernen. Kamera, Objektiv, Datum und weitere Felder bleiben in der Datei.',
    },
    {
      q: 'Entfernt der Export aus Fotos am Mac die Metadaten?',
      a: 'Nur teilweise. Mit deaktivierten „Ortsinformationen“ wird das GPS weggelassen, Kamera- und Datumsangaben bleiben aber erhalten, und ein JPEG-Export wird neu komprimiert.',
    },
    {
      q: 'Gibt es eine Methode ohne Qualitätsverlust?',
      a: 'Ja. Der Windows-Explorer, ExifTool und das Browser-Tool auf dieser Seite entfernen Metadaten ohne Neukomprimierung. Erneutes Speichern in Paint oder ein JPEG-Export komprimiert das Bild neu.',
    },
    {
      q: 'Kann ich am Computer viele Fotos auf einmal bereinigen?',
      a: 'Ja. Der Explorer akzeptiert mehrere ausgewählte Dateien, ExifTool arbeitet mit ganzen Ordnern, und das Browser-Tool verarbeitet bis zu 50 Bilder pro Durchgang mit ZIP-Download.',
    },
    {
      q: 'Werden meine Fotos beim Browser-Tool hochgeladen?',
      a: 'Nein. Die Dateien werden im Browser auf Ihrem eigenen Computer gelesen und bereinigt und nie an einen Server gesendet.',
    },
  ],
};

export default article;
