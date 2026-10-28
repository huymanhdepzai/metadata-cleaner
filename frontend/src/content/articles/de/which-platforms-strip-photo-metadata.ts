import type { Article } from '../types';

const article: Article = {
  title: 'Welche Apps und sozialen Netzwerke entfernen Foto-Metadaten? (Und wann Ihr GPS-Standort trotzdem durchsickert)',
  summary: [
    'Viele gehen davon aus, dass soziale Netzwerke Standortdaten aus Fotos entfernen. Oft stimmt das – für die veröffentlichte Kopie. Die Originaldatei kann aber mit vollständigen EXIF-Daten über Messenger, E-Mail, Cloud-Links und Filesharing-Seiten weitergereicht werden.',
    'Dieser Ratgeber zeigt, welche Wege des Teilens Metadaten meist behalten oder entfernen, wie Sie jede App selbst testen und welche Gewohnheit als einzige zuverlässig ist: die Datei bereinigen, bevor sie Ihr Gerät verlässt.',
  ],
  seoTitle: 'Welche Apps entfernen Foto-Metadaten? (GPS & EXIF)',
  description:
    'Welche sozialen Netzwerke und Messenger Foto-Metadaten entfernen, bei welchen Wegen GPS und EXIF erhalten bleiben und wie Sie Ihre Fotos vor dem Senden bereinigen.',
  answer:
    'Große soziale Netzwerke wie Facebook, Instagram und X entfernen EXIF – einschließlich GPS – meist aus den veröffentlichten Fotos, und viele Messenger tun das bei komprimierten Bildern ebenso. Als Datei oder Dokument gesendete Fotos, E-Mail-Anhänge, Cloud-Links, AirDrop und viele Foren oder Marktplätze behalten die Original-Metadaten. Zuverlässig ist nur, die Metadaten vor dem Teilen selbst zu entfernen.',
  sections: [
    {
      heading: 'Veröffentlichte Kopie oder Originaldatei',
      paragraphs: [
        'Wenn Sie ein Foto in einem Feed posten, kodieren die meisten großen Plattformen es neu und entfernen EXIF aus der öffentlichen Kopie. Das verhindert, dass Betrachter Ihre GPS-Position sehen – die Plattform selbst erhält beim Hochladen aber trotzdem das Original. Das größere Risiko liegt überall dort, wo die Originaldatei unverändert weitergegeben wird.',
      ],
    },
    {
      heading: 'Bleiben die Metadaten erhalten? Gängige Wege des Teilens',
      paragraphs: ['Typisches Verhalten – prüfen Sie es immer mit Ihrer eigenen App-Version:'],
      table: {
        head: ['Art des Teilens', 'GPS und EXIF', 'Hinweise'],
        rows: [
          ['Feed-Beiträge auf Facebook, Instagram, X', 'Meist entfernt', 'Die Plattform erhält beim Hochladen trotzdem das Original'],
          ['Messenger, als Foto gesendet', 'Meist entfernt', 'Das Bild wird zusätzlich komprimiert'],
          ['Messenger, als Datei oder Dokument gesendet', 'Bleiben erhalten', 'WhatsApp und Telegram liefern die Originaldatei aus'],
          ['E-Mail-Anhänge', 'Bleiben erhalten', 'Die Datei wird unverändert verschickt'],
          ['Cloud-Links (Drive, Dropbox, iCloud)', 'Bleiben erhalten', 'Jeder mit dem Link erhält das Original'],
          ['AirDrop, Bluetooth, USB', 'Bleiben erhalten', 'Am iPhone lässt sich der Standort über „Optionen“ beim Teilen ausschließen'],
          ['Foren, Marktplätze, Portfolio-Seiten', 'Bleiben oft erhalten', 'Hängt davon ab, ob die Seite Uploads neu kodiert'],
        ],
      },
    },
    {
      heading: 'Messenger: als Foto oder als Datei senden',
      paragraphs: [
        'Die meisten Messenger bieten zwei Wege, ein Bild zu senden. Als normales Foto wird es komprimiert, und die meisten Metadaten werden entfernt. Als Datei oder Dokument – oft gewählt, um die volle Qualität zu behalten – wird das Original mit allen EXIF-Feldern ausgeliefert, einschließlich GPS. Viele wechseln der Qualität wegen zu „als Datei senden“, ohne zu ahnen, dass sie damit auch ihren Standort verschicken.',
      ],
    },
    {
      heading: 'Plattformen, die EXIF absichtlich anzeigen',
      paragraphs: [
        'Manche Fotografie-Communitys und Portfolio-Seiten zeigen neben jedem Foto die Kameraeinstellungen an, und manche stellen die Originaldatei zum Download bereit. Wenn Sie dort posten, gehen Sie davon aus, dass Ihre Metadaten öffentlich sind – es sei denn, Sie bereinigen sie vorher.',
      ],
    },
    {
      heading: 'So testen Sie jede App selbst',
      paragraphs: ['Apps ändern regelmäßig, wie sie mit Medien umgehen. So wissen Sie es sicher:'],
      steps: [
        'Machen Sie ein Testfoto mit aktiviertem Standort.',
        'Schicken Sie es sich selbst auf dem Weg, auf dem Sie normalerweise Fotos teilen.',
        'Laden Sie die empfangene Datei herunter und ziehen Sie sie in den Checker oben auf dieser Seite.',
        'Der Bereich „Datenschutzdetails“ zeigt sofort, ob Standort-, Personen- oder Zeitangaben erhalten geblieben sind.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Erst bereinigen, dann teilen',
      paragraphs: [
        'Am sichersten ist es, Metadaten zu entfernen, bevor ein Foto Ihr Gerät verlässt. Dieses Tool entfernt GPS-, Datums-, Kamera- und Autorfelder sowie versteckte Vorschaubilder, behält Ausrichtung und Farben und verarbeitet alles lokal – ideal für Fotos, die Sie an Fremde, Käufer oder Kunden schicken.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Fragen zu Plattformen und Foto-Metadaten',
  faq: [
    {
      q: 'Entfernt WhatsApp GPS-Daten aus Fotos?',
      a: 'Als normales Bild gesendete Fotos werden komprimiert und verlieren die meisten Metadaten. Als Dokument gesendete Fotos behalten die Originaldatei, einschließlich GPS.',
    },
    {
      q: 'Behält Instagram den Standort meines Fotos?',
      a: 'Aus dem veröffentlichten Bild wird EXIF entfernt. Ein Ort, den Sie dem Beitrag hinzufügen, ist davon unabhängig und für Betrachter sichtbar.',
    },
    {
      q: 'Entfernt E-Mail die Metadaten von Fotos?',
      a: 'Nein. Anhänge werden unverändert verschickt, GPS und andere EXIF-Felder bleiben also in der Datei – es sei denn, Ihre App verkleinert sie.',
    },
    {
      q: 'Entfernen Google Drive oder iCloud Metadaten aus geteilten Fotos?',
      a: 'Geteilte Links geben normalerweise Zugriff auf die Originaldatei samt Metadaten. Bereinigen Sie das Foto vor dem Hochladen, wenn Sie es teilen möchten.',
    },
    {
      q: 'Ist ein Screenshot eine gute Methode, Metadaten zu entfernen?',
      a: 'Er entfernt EXIF, verringert aber die Qualität, ändert die Abmessungen und kann andere Dinge auf Ihrem Bildschirm mit erfassen. Die verlustfreie Bereinigung lässt das Originalbild unverändert.',
    },
    {
      q: 'Ist mein Standort sicher, wenn eine Plattform Metadaten entfernt?',
      a: 'Vor Betrachtern weitgehend – die Plattform hat aber die Originaldatei erhalten, und der sichtbare Bildinhalt kann immer noch verraten, wo das Foto entstanden ist.',
    },
  ],
};

export default article;
