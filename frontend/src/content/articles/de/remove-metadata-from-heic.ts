import type { Article } from '../types';

const article: Article = {
  title: 'Metadaten aus HEIC entfernen – HEIC bleibt, kein Upload',
  summary: [
    'iPhones speichern Fotos als HEIC, und jedes davon hält Gerätemodell, Aufnahmezeit und – bei aktiviertem Standort – genau fest, wo Sie waren. Bearbeitete Fotos können außerdem XMP- und C2PA-Daten enthalten.',
    'Die meisten Online-Tools wandeln HEIC zum Bereinigen in JPEG um und komprimieren das Foto dabei neu. Dieses Tool entfernt die Metadaten direkt in der HEIC-Datei – sie bleibt HEIC, mit den originalen Bilddaten.',
  ],
  description:
    'GPS-, EXIF-, XMP- und C2PA-Metadaten aus iPhone-HEIC/HEIF-Fotos im Browser entfernen – ohne JPEG-Umwandlung oder Neukodierung. Kostenlos, ohne Upload, mit ZIP.',
  answer:
    'Um Metadaten aus einem HEIC-Foto ohne Umwandlung zu entfernen, ziehen Sie die Datei in das Tool auf dieser Seite und klicken auf „KI-Metadaten entfernen“. Die Exif- und XMP-Items werden mit gültigen leeren Daten überschrieben und C2PA-Boxen in freien Speicher umgewandelt. GPS-, Geräte- und Zeitangaben sind danach weg, die Datei bleibt aber HEIC mit den originalen Bilddaten. Es wird nichts hochgeladen.',
  sections: [
    {
      heading: 'Was ein HEIC-Foto vom iPhone enthält',
      paragraphs: ['HEIC nutzt denselben boxbasierten Container wie MP4. Neben dem komprimierten Bild finden Sie typischerweise:'],
      bullets: [
        'Ein Exif-Item – Gerätemodell, Objektiv, Aufnahmezeit, Belichtung und GPS-Standort.',
        'Ein XMP-Item – Bearbeitungsdetails und bei KI-bearbeiteten Bildern Herkunftsfelder.',
        'uuid-Boxen – für C2PA Content Credentials und einen Teil der XMP-Daten.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Warum HEIC besondere Sorgfalt braucht',
      paragraphs: [
        'In einer HEIC-Datei verweist ein Index (die iloc-Box) über absolute Byte-Positionen auf die Bilddaten. Schneidet ein Tool Metadaten einfach heraus, verschiebt sich jede nachfolgende Position, und das Foto lässt sich nicht mehr öffnen.',
        'Dieser Cleaner arbeitet deshalb direkt in der Datei: Er überschreibt die Exif- und XMP-Items mit gültigen leeren Daten und wandelt C2PA-uuid-Boxen in freien Speicher um. Die Dateigröße bleibt gleich, jeder Offset bleibt gültig, und die HEVC-Bilddaten werden nicht angetastet.',
      ],
    },
    {
      heading: 'Metadaten aus HEIC entfernen in drei Schritten',
      paragraphs: [],
      steps: [
        'Öffnen Sie diese Seite auf Ihrem iPhone oder Computer und ziehen Sie Ihre HEIC-Fotos hinein oder wählen Sie sie aus.',
        'Prüfen Sie den Bericht – der Bereich „Datenschutzdetails“ zeigt gefundene Standort-, Zeit- und Geräteangaben.',
        'Tippen Sie auf „KI-Metadaten entfernen“ und speichern Sie die bereinigten Fotos oder laden Sie alle als ZIP herunter.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'HEIC bereinigen statt in JPG umwandeln',
      paragraphs: [],
      table: {
        head: ['', 'Direkt bereinigen (dieses Tool)', 'Erst in JPG umwandeln'],
        rows: [
          ['Format nach dem Bereinigen', 'HEIC', 'JPEG'],
          ['Bildqualität', 'Unverändert', 'Neu komprimiert'],
          ['Erweiterter Farbraum und Ausrichtung', 'Erhalten', 'Können sich ändern'],
          ['Dateigröße', 'Wie vorher', 'Oft größer'],
        ],
      },
    },
    {
      heading: 'Was erhalten bleibt',
      paragraphs: [
        'Bildabmessungen, Drehung und Spiegelung, die Farbinformationen und das komprimierte Bild selbst bleiben erhalten – das Foto sieht genauso aus und verhält sich genauso wie das Original. HEIF- und AVIF-Dateien, die denselben Container nutzen, werden auf dieselbe Weise bereinigt.',
      ],
    },
    {
      heading: 'Standortaufzeichnung am iPhone abschalten',
      paragraphs: [
        'Damit neue Fotos keine GPS-Daten enthalten, gehen Sie zu Einstellungen › Datenschutz & Sicherheit › Ortungsdienste › Kamera und wählen „Nie“. Für einzelne Freigaben tippen Sie im Teilen-Menü auf „Optionen“ und deaktivieren „Ort“. Vorhandene Fotos behalten ihre Metadaten, bis Sie sie bereinigen.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Fragen zum Bereinigen von HEIC-Fotos',
  faq: [
    {
      q: 'Muss ich HEIC zuerst in JPG umwandeln?',
      a: 'Nein. HEIC-Dateien werden direkt bereinigt und bleiben HEIC – es gibt keine Umwandlung und keinen Qualitätsverlust.',
    },
    {
      q: 'Warum ist die bereinigte Datei gleich groß?',
      a: 'Die Metadaten werden an Ort und Stelle geleert statt herausgeschnitten, weil HEIC absolute Positionen speichert. Die Daten sind weg, der belegte Platz bleibt aber bestehen.',
    },
    {
      q: 'Funktioniert das bei Live Photos?',
      a: 'Das Standbild eines Live Photos ist eine HEIC-Datei und lässt sich bereinigen. Das kurze Video ist eine separate Datei und wird hier nicht verarbeitet.',
    },
    {
      q: 'Kann ich das direkt auf meinem iPhone machen?',
      a: 'Ja. Öffnen Sie die Seite in Safari, wählen Sie Fotos aus Ihrer Mediathek, bereinigen Sie sie und speichern Sie die Ergebnisse – ganz ohne App.',
    },
    {
      q: 'Werden auch HEIF und AVIF unterstützt?',
      a: 'Ja. Sie nutzen denselben Container und werden auf dieselbe Weise direkt bereinigt.',
    },
    {
      q: 'Werden meine Fotos hochgeladen?',
      a: 'Nein. Die Fotos werden auf Ihrem Gerät verarbeitet und nie an einen Server gesendet.',
    },
  ],
};

export default article;
