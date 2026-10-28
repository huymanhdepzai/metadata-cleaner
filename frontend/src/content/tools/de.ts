import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Kostenlose Tools für Bild-Metadaten',
    description:
      'Kostenlose Browser-Tools zum Anzeigen, Analysieren und Entfernen von Bild-Metadaten: EXIF-Viewer, Datenschutz-Check, Metadatengröße, EXIF, GPS und C2PA entfernen.',
    intro:
      'Alle Tools laufen mit derselben Engine in Ihrem Browser: Ihre Bilder werden nie hochgeladen und nichts wird neu komprimiert. Wählen Sie, was Sie brauchen – in ein Foto hineinsehen, prüfen, was es verrät, oder es bereinigen.',
  },
  cards: {
    cleaner: { name: 'Bild-Metadaten entfernen', text: 'EXIF, GPS, XMP, IPTC, C2PA und KI-Prompts mit einem Klick entfernen – ohne Qualitätsverlust.' },
    'view-metadata': { name: 'Metadaten anzeigen', text: 'Alle versteckten Felder eines Fotos sehen: Kamera, Datum, GPS, XMP, C2PA und KI-Prompts.' },
    'privacy-check': { name: 'Foto-Datenschutz-Check', text: 'Herausfinden, was ein Foto verrät – Standort auf der Karte, persönliche Daten und Aufnahmezeit.' },
    'metadata-size': { name: 'Metadatengröße prüfen', text: 'Messen, wie viele Bytes Metadaten eine Datei enthält und wie riskant sie sind.' },
    'remove-exif': { name: 'EXIF entfernen', text: 'Kamera, Datum und Seriennummer löschen – Ausrichtung und Farben bleiben erhalten.' },
    'remove-gps': { name: 'GPS-Standort entfernen', text: 'GPS-Koordinaten aus Handyfotos entfernen, bevor Sie sie teilen.' },
    'remove-c2pa': { name: 'C2PA entfernen', text: 'Content-Credentials-Manifeste (C2PA) aus JPG, PNG, WebP und HEIC entfernen.' },
    'remove-prompts': { name: 'KI-Prompts entfernen', text: 'Stable-Diffusion-Parameter und ComfyUI-Workflows aus PNG-Dateien entfernen.' },
    batch: { name: 'Stapelbereinigung', text: 'Bis zu 50 Bilder auf einmal bereinigen und als eine ZIP-Datei herunterladen.' },
  },
  groups: {
    inspect: { title: 'Fotos prüfen', text: 'Sehen Sie, was ein Bild verrät, bevor Sie es teilen — die Datei wird nur gelesen, nie verändert.' },
    remove: { title: 'Metadaten gezielt entfernen', text: 'Wählen Sie ein Format oder eine Aufgabe — jede Anleitung enthält den Cleaner.' },
  },
  tools: {
    'view-metadata': {
      title: 'Bild-Metadaten online anzeigen – EXIF, XMP, C2PA',
      description:
        'Kostenloser Metadaten-Viewer: EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) und KI-Prompts in JPG, PNG, WebP und HEIC im Browser ansehen – ohne Upload.',
      intro:
        'Ziehen Sie ein Foto hierher, um alle versteckten Informationen zu sehen – Kamera und Objektiv, Aufnahmedatum, GPS-Position, Bearbeitungssoftware, Content Credentials und KI-Prompts – nach Quelle gruppiert. Nichts wird verändert oder hochgeladen.',
      steps: [
        'Ziehen Sie ein oder mehrere Bilder in das Feld oben oder tippen Sie auf „Bilder auswählen“.',
        'Öffnen Sie eine Datei, um Datenschutz-Übersicht, KI-Signale und alle Metadatenfelder zu sehen.',
        'Durchsuchen Sie die Felder und entscheiden Sie, ob Sie die Datei behalten oder die Metadaten entfernen.',
      ],
      faq: [
        {
          q: 'Verändert das Anzeigen der Metadaten meine Datei?',
          a: 'Nein. Die Datei wird nur gelesen. Zum Entfernen nutzen Sie den Cleaner – Ihre Bilder bleiben geladen, Sie müssen sie nicht erneut hinzufügen.',
        },
        {
          q: 'Welche Metadaten kann ich sehen?',
          a: 'EXIF (inklusive GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG-Text-Chunks mit Prompts oder ComfyUI-Workflows sowie die Blöcke der Dateistruktur.',
        },
        {
          q: 'Werden meine Fotos hochgeladen?',
          a: 'Nein. Ihr Browser liest die Dateien, sie verlassen Ihr Gerät nie.',
        },
      ],
    },
    'privacy-check': {
      title: 'Foto-Datenschutz-Check – GPS und persönliche Daten finden',
      description:
        'Prüfen Sie vor dem Teilen, was ein Foto verrät: GPS-Standort zum Öffnen auf der Karte, Urheber, Geräte-Seriennummer, Aufnahmezeit und KI-Daten. Kostenlos, ohne Upload.',
      intro:
        'Finden Sie heraus, was ein Foto preisgibt, bevor Sie es posten. Der Check zeigt, ob es einen GPS-Standort enthält (und wohin er zeigt), persönliche Angaben wie Urheber oder Geräte-Seriennummer, die Aufnahmezeit und KI-Herkunftsdaten – mit einer einfachen Risikostufe.',
      steps: [
        'Ziehen Sie die Fotos, die Sie teilen möchten, in das Feld oben.',
        'Lesen Sie die Risikostufe sowie die gefundenen Standort-, Personen- und Zeitangaben jeder Datei.',
        'Wird eine GPS-Position gefunden, öffnen Sie sie auf der Karte, um zu sehen, was andere sehen könnten – und entfernen Sie sie.',
      ],
      faq: [
        {
          q: 'Wie wird die Risikostufe bestimmt?',
          a: 'Hoch bedeutet, das Foto enthält einen Standort. Mittel bedeutet persönliche, zeitliche oder KI-Angaben ohne Standort. Niedrig bedeutet, nichts davon wurde in den Metadaten gefunden.',
        },
        {
          q: 'Wird die Karte automatisch geladen?',
          a: 'Nein. Die Koordinaten werden als Text angezeigt. OpenStreetMap öffnet sich nur in einem neuen Tab, wenn Sie auf die Schaltfläche klicken – sonst verlässt der Standort nie Ihr Gerät.',
        },
        {
          q: 'Kann ein Foto meinen Standort auch ohne GPS verraten?',
          a: 'Metadaten sind nur eine Quelle. Was im Bild zu sehen ist – Straßenschilder, Wahrzeichen, Spiegelungen – kann einen Ort ebenfalls verraten, und das erkennt dieser Check nicht.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metadatengröße prüfen – wie viele Metadaten hat ein Foto?',
      description:
        'Messen Sie, wie viele Metadaten ein Bild enthält: Gesamtbytes, Anteil an der Datei, die größten EXIF-, XMP-, C2PA- oder Prompt-Blöcke und ein Datenschutzrisiko. Kostenlos, ohne Upload.',
      intro:
        'Sehen Sie, wie viel einer Datei Metadaten statt Bild sind. Das Tool listet jeden Metadatenblock nach Größe – EXIF, XMP, C2PA, eingebettete Vorschauen, KI-Prompts und Workflows –, zeigt seinen Anteil an der Datei und bewertet das Datenschutzrisiko.',
      steps: [
        'Ziehen Sie ein oder mehrere Bilder in das Feld oben.',
        'Vergleichen Sie Metadatengröße und Anteil jeder Datei, Block für Block.',
        'Entfernen Sie die Metadaten, damit Dateien kleiner und sicherer zu teilen sind.',
      ],
      faq: [
        {
          q: 'Warum enthalten manche Dateien so viele Metadaten?',
          a: 'Eingebettete Vorschauen, C2PA-Manifeste mit Miniaturen und ComfyUI-Workflows können Dutzende bis Hunderte Kilobyte ausmachen, einfache EXIF-Daten meist nur wenige.',
        },
        {
          q: 'Warum ist das Farbprofil als erhalten markiert?',
          a: 'Das ICC-Farbprofil wird für die korrekte Farbdarstellung benötigt, daher behält der Cleaner es. Es zählt nicht zur Metadatensumme.',
        },
        {
          q: 'Verändert das Entfernen der Metadaten das Bild?',
          a: 'Nein. Nur Metadatenblöcke werden entfernt; die Bilddaten werden unverändert kopiert, die Datei wird also ohne Qualitätsverlust kleiner.',
        },
      ],
    },
  },
};

export default tools;
