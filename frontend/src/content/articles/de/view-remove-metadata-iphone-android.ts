import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten auf iPhone & Android anzeigen und entfernen',
  summary: [
    'Ihr Smartphone hält fest, wo und wann jedes Foto aufgenommen wurde, dazu das Gerätemodell. Sowohl iOS als auch Android zeigen diese Angaben an und lassen Sie den Standort vor dem Teilen entfernen.',
    'Hier finden Sie die integrierten Optionen, ihre Grenzen und einen Weg im Browser, alle identifizierenden Metadaten zu entfernen – auch aus HEIC-Fotos vom iPhone –, ohne eine App zu installieren.',
  ],
  description:
    'Foto-Metadaten auf iPhone und Android anzeigen, Standort vor dem Teilen entfernen und alle EXIF-Daten – auch aus HEIC – im Browser löschen, ganz ohne App.',
  answer:
    'Auf dem iPhone öffnen Sie ein Foto und wischen nach oben, um Datum, Kamera und Standort zu sehen; unter Android öffnen Sie es in Google Fotos und wischen nach oben. Beide Systeme erlauben es, den Standort zu entfernen oder auszublenden, Gerätemodell, Aufnahmezeit und andere EXIF-Felder bleiben aber meist erhalten. Um alle Metadaten zu entfernen, öffnen Sie einen Cleaner im Browser Ihres Smartphones, wählen die Fotos aus und laden die bereinigten Kopien herunter – ganz ohne App.',
  sections: [
    {
      heading: 'So zeigen Sie Foto-Metadaten auf dem iPhone an',
      paragraphs: [],
      steps: [
        'Öffnen Sie das Foto in der App „Fotos“.',
        'Wischen Sie nach oben oder tippen Sie auf die Info-Taste (i).',
        'Sie sehen Datum und Uhrzeit, Kamera und Objektiv, Belichtungsdaten und – falls der Standort aktiviert war – eine Karte.',
        'Tippen Sie neben dem Datum auf „Anpassen“, um Datum, Uhrzeit oder Ort dieses Fotos zu ändern.',
      ],
    },
    {
      heading: 'So entfernen Sie den Standort beim Teilen vom iPhone',
      paragraphs: ['Zwei integrierte Optionen helfen:'],
      bullets: [
        'Tippen Sie im Teilen-Menü oben auf „Optionen“ und deaktivieren Sie „Ort“, bevor Sie senden.',
        'Damit neue Fotos keinen Standort mehr speichern, gehen Sie zu Einstellungen › Datenschutz & Sicherheit › Ortungsdienste › Kamera und wählen „Nie“.',
      ],
    },
    {
      heading: 'So zeigen Sie Metadaten unter Android an und entfernen sie',
      paragraphs: [
        'Öffnen Sie in Google Fotos ein Foto und wischen Sie nach oben, um Details wie Datum, Gerät und Standort zu sehen; je nach Version können Sie den Standort dort bearbeiten oder entfernen. Die Samsung Galerie und andere Galerie-Apps zeigen ähnliche Details. Damit neue Fotos nicht mehr markiert werden, schalten Sie in den Einstellungen Ihrer Kamera-App die Standortoption aus – Name und Position variieren je nach Hersteller.',
      ],
    },
    {
      heading: 'Was die integrierten Optionen nicht entfernen',
      paragraphs: [
        'Die Einstellungen des Smartphones konzentrieren sich auf den Standort. Gerätemodell, Aufnahmezeit, Objektivdaten, Bearbeitungssoftware und eingebettete Vorschaubilder bleiben meist erhalten, und die Einstellungen wirken nur auf künftige Fotos oder eine einzelne Freigabe. Dateien, die auf einen Computer kopiert oder über andere Apps verschickt werden, behalten alles.',
      ],
      table: {
        head: ['Option', 'Standort', 'Gerät und Zeit', 'Alle Fotos auf einmal'],
        rows: [
          ['iPhone: Teilen › Optionen › „Ort“ aus', 'Für diese Freigabe entfernt', 'Bleiben erhalten', 'Pro Freigabe'],
          ['Standort in der Kamera aus', 'Bei neuen Fotos nicht gespeichert', 'Bleiben erhalten', 'Nur neue Fotos'],
          ['Google Fotos: Standort entfernen', 'In der App entfernt', 'Bleiben erhalten', 'Pro Foto'],
          ['Metadaten-Cleaner im Browser', 'Entfernt', 'Entfernt', 'Bis zu 50 pro Durchgang'],
        ],
      },
    },
    {
      heading: 'Alle Metadaten auf dem Smartphone entfernen – ganz ohne App',
      paragraphs: [],
      steps: [
        'Öffnen Sie diese Website in Safari, Chrome oder einem anderen mobilen Browser.',
        'Tippen Sie auf „Bilder auswählen“ und wählen Sie die Fotos aus, die Sie teilen möchten.',
        'Prüfen Sie den Bericht und tippen Sie dann auf „KI-Metadaten entfernen“.',
        'Speichern Sie die bereinigten Fotos oder laden Sie alle als ZIP herunter.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
    {
      heading: 'HEIC-Fotos vom iPhone bleiben HEIC',
      paragraphs: [
        'iPhones speichern Fotos standardmäßig als HEIC. Viele Tools wandeln sie zum Bereinigen in JPEG um und komprimieren das Foto dabei neu. Dieser Cleaner entfernt die Metadaten direkt in der HEIC-Datei, behält Ausrichtung und Farben und lässt die Bilddaten unangetastet.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Fragen zu Metadaten in Handyfotos',
  faq: [
    {
      q: 'Entfernt das Ausschalten des Standorts ihn auch aus bereits aufgenommenen Fotos?',
      a: 'Nein. Es wirkt nur bei neuen Fotos. Bestehende Fotos behalten ihren Standort, bis Sie ihn entfernen.',
    },
    {
      q: 'Werden HEIC-Fotos vom iPhone unterstützt?',
      a: 'Ja. HEIC-Dateien werden direkt bereinigt, ohne Umwandlung in JPEG und ohne das Bild neu zu kodieren.',
    },
    {
      q: 'Entfernt die Teilen-Option des iPhones alle Metadaten?',
      a: 'Hauptsächlich den Standort. Andere Angaben wie Gerätemodell und Aufnahmezeit können in der geteilten Datei erhalten bleiben.',
    },
    {
      q: 'Muss ich eine App installieren, um Metadaten zu entfernen?',
      a: 'Nein. Der Cleaner läuft in Ihrem mobilen Browser, und die Fotos werden auf dem Smartphone verarbeitet, ohne hochgeladen zu werden.',
    },
    {
      q: 'Wie sehe ich den GPS-Standort eines Fotos?',
      a: 'Auf dem iPhone wischen Sie auf dem Foto nach oben, um die Karte zu sehen. Auf jedem Gerät können Sie das Foto in den Checker ziehen und die entschlüsselten Koordinaten unter „Datenschutzdetails“ ablesen.',
    },
    {
      q: 'Erscheinen bereinigte Fotos in meiner Galerie noch in der richtigen Reihenfolge?',
      a: 'Das Aufnahmedatum wird entfernt, daher sortieren Galerien bereinigte Kopien unter Umständen nach dem Speicherzeitpunkt. Behalten Sie die Originale für Ihre eigene Mediathek.',
    },
  ],
};

export default article;
