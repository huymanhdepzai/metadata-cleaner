import type { Article } from '../types';

const article: Article = {
  description:
    'Handyfotos verraten oft Standort, Gerät und Aufnahmezeit. Welche EXIF-Felder riskant sind, wo sie durchsickern und wie Sie GPS-Daten ohne Qualitätsverlust löschen.',
  answer:
    'Die meisten Handyfotos speichern GPS-Koordinaten in den EXIF-Metadaten, oft auf wenige Meter genau, dazu Aufnahmezeit und Gerätemodell. Um den Standort aus einem Foto zu entfernen, ziehen Sie es in einen Metadaten-Cleaner, der GPS und andere identifizierende EXIF-Felder löscht, Ausrichtung und Farben aber beibehält, und teilen Sie dann die bereinigte Kopie. Das Abschalten des Standorts in der Kamera wirkt nur bei neuen Fotos.',
  sections: [
    {
      heading: 'Was Ihr Smartphone in jedes Foto schreibt',
      paragraphs: ['Bei aktiviertem Standortzugriff enthält ein typisches Smartphone-Foto:'],
      bullets: [
        'GPS-Breite, -Länge und -Höhe – oft auf wenige Meter genau – plus einen GPS-Zeitstempel und manchmal die Blickrichtung der Kamera.',
        'Das genaue Datum und die Uhrzeit der Aufnahme und der letzten Bearbeitung, oft mit Zeitzonen-Offset.',
        'Hersteller und Modell des Geräts, Objektivdaten und manchmal Seriennummern oder einen Besitzernamen.',
        'Eingebettete Vorschaubilder und Zweitbilder (etwa MPF-Bilder oder Tiefenkarten), die eine eigene Kopie derselben EXIF-Daten enthalten können.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Warum Standortdaten in Fotos ein Datenschutzrisiko sind',
      paragraphs: [
        'Ein einziges Foto, das zu Hause aufgenommen wurde, kann Ihre Adresse verraten. Eine Reihe von Fotos kann Gewohnheiten offenlegen – wann Sie zur Arbeit gehen, wo Ihre Kinder zur Schule gehen, wo Sie Ihre Wochenenden verbringen. Wer Dinge online verkauft, Fotos mit Fremden teilt oder von sensiblen Orten aus postet, gibt am häufigsten versehentlich über Standort-Metadaten etwas preis.',
      ],
    },
    {
      heading: 'Wo Standortdaten durchsickern',
      paragraphs: [
        'Viele große soziale Netzwerke entfernen EXIF beim Veröffentlichen Ihres Fotos, doch zahlreiche Kanäle liefern die Originaldatei unverändert aus:',
      ],
      bullets: [
        'Fotos, die in Messenger-Apps „als Datei“ oder als Dokument verschickt werden.',
        'E-Mail-Anhänge und geteilte Cloud-Links.',
        'Foren, Marktplätze, Kleinanzeigenportale und Portfolio-Seiten, die den Original-Upload behalten.',
        'AirDrop-, Bluetooth- und USB-Übertragungen zwischen Geräten.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'So prüfen Sie, ob ein Foto einen GPS-Standort enthält',
      paragraphs: [],
      steps: [
        'Ziehen Sie das Foto in das Tool oben auf dieser Seite – es wird lokal analysiert und nie hochgeladen.',
        'Der Bereich „Datenschutzdetails“ zeigt auf einen Blick, ob Standort-, Personen- oder Zeitangaben vorhanden sind, und nennt die entschlüsselte GPS-Position in Dezimalkoordinaten.',
        '„Alle Metadaten & Dateidetails“ listet jedes Feld auf, gruppiert nach EXIF IFD0, Exif und GPS.',
      ],
    },
    {
      heading: 'So entfernen Sie den GPS-Standort aus einem Foto',
      paragraphs: [],
      steps: [
        'Ziehen Sie ein Foto oder mehrere Fotos auf einmal in das Tool.',
        'Klicken Sie auf „KI-Metadaten entfernen“. GPS-, Datums-, Kamera-, Autor- und Software-Felder werden gelöscht – zusammen mit eingebetteten Vorschaubildern und MPF-Zweitbildern, die sonst eine versteckte Kopie behalten würden.',
        'Prüfen Sie im grünen Ergebnisbereich, dass keine Standortdaten mehr vorhanden sind, und laden Sie das Foto oder eine ZIP-Datei mit allen Fotos herunter.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Standort entfernen, ohne das Foto zu drehen oder neu zu komprimieren',
      paragraphs: [
        'Ein unbedachtes Löschen der EXIF-Daten kann Hochformatfotos plötzlich quer erscheinen lassen, weil die Drehung als EXIF-Tag gespeichert ist. Der Cleaner schreibt die Ausrichtung in einen minimalen EXIF-Block zurück, behält das Farbprofil für korrekte Farben und kopiert die Bilddaten Byte für Byte. HEIC-Fotos vom iPhone werden direkt bereinigt, ohne sie in JPEG umzuwandeln.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Standort in neuen Fotos gar nicht erst speichern',
      paragraphs: ['Sie können die Standortmarkierung auch direkt an der Quelle verhindern:'],
      bullets: [
        'iPhone: Einstellungen › Datenschutz & Sicherheit › Ortungsdienste › Kamera › Nie. Beim Teilen eines einzelnen Fotos tippen Sie im Teilen-Menü auf „Optionen“ und deaktivieren „Ort“.',
        'Android: Schalten Sie in den Einstellungen Ihrer Kamera-App die Standortoption aus – Name und Position variieren je nach Hersteller.',
      ],
      table: {
        head: ['Methode', 'Entfernt GPS', 'Entfernt Gerät und Zeit', 'Wirkt bei alten Fotos'],
        rows: [
          ['Standort in der Kamera aus', 'Bei neuen Fotos', 'Nein', 'Nein'],
          ['„Ort“ im Teilen-Menü aus', 'Für diese Freigabe', 'Nein', 'Ja, pro Freigabe'],
          ['Metadaten-Cleaner', 'Ja', 'Ja', 'Ja'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Fragen zu GPS-Daten und Foto-Datenschutz',
  faq: [
    {
      q: 'Entfernen soziale Netzwerke GPS-Daten automatisch?',
      a: 'Viele große Plattformen entfernen EXIF aus dem veröffentlichten Bild. Dateien, die als Anhang, Dokument oder Cloud-Link verschickt werden, behalten die Original-Metadaten jedoch meist.',
    },
    {
      q: 'Kann jemand meinen Standort anhand eines Fotos herausfinden?',
      a: 'Wenn das Foto noch GPS-EXIF-Daten enthält, ja – jeder Metadaten-Viewer zeigt die Koordinaten auf einer Karte. Ohne Metadaten liefert nur der sichtbare Bildinhalt mögliche Hinweise.',
    },
    {
      q: 'Wird mein Foto nach dem Bereinigen gedreht angezeigt?',
      a: 'Nein. Das Ausrichtungs-Tag bleibt erhalten, das Foto wird also genauso angezeigt wie vorher.',
    },
    {
      q: 'Funktioniert das mit HEIC-Fotos vom iPhone?',
      a: 'Ja. HEIC- und HEIF-Dateien werden direkt bereinigt – ohne Umwandlung und ohne das Bild neu zu kodieren.',
    },
    {
      q: 'Entfernt das Ausschalten des Standorts ihn auch aus bereits aufgenommenen Fotos?',
      a: 'Nein. Es wirkt nur bei neuen Fotos. Bestehende Fotos behalten ihren Standort, bis Sie ihn entfernen.',
    },
    {
      q: 'Wird mein Foto hochgeladen, wenn ich den Standort entferne?',
      a: 'Nein. Alles geschieht in Ihrem Browser; das Foto verlässt Ihr Gerät nie.',
    },
  ],
};

export default article;
