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
    cleaner: { name: 'Bild-Metadaten entfernen', text: 'EXIF, GPS, XMP, IPTC, C2PA und KI-Prompts mit einem Klick entfernen – ohne Qualitätsverlust.', detail: 'Bilder ablegen, Bericht prüfen, saubere Kopien herunterladen – Pixel, Ausrichtung und Farbprofil bleiben unverändert.' },
    'view-metadata': { name: 'Metadaten anzeigen', text: 'Alle versteckten Felder eines Fotos sehen: Kamera, Datum, GPS, XMP, C2PA und KI-Prompts.', detail: 'Nur lesend: Die Datei wird nie verändert – ideal, um empfangene oder heruntergeladene Fotos zu prüfen.' },
    'privacy-check': { name: 'Foto-Datenschutz-Check', text: 'Herausfinden, was ein Foto verrät – Standort auf der Karte, persönliche Daten und Aufnahmezeit.', detail: 'Bewertet jedes Foto mit hohem, mittlerem oder niedrigem Risiko und zeigt GPS-Koordinaten, die Sie auf einer Karte öffnen können.' },
    'metadata-size': { name: 'Metadatengröße prüfen', text: 'Messen, wie viele Bytes Metadaten eine Datei enthält und wie riskant sie sind.', detail: 'Listet Metadatenblöcke nach Größe auf – so sehen Sie, ob Vorschaubilder, XMP oder eingebettete Prompts die Datei aufblähen.' },
    'remove-exif': { name: 'EXIF entfernen', text: 'Kamera, Datum und Seriennummer löschen – Ausrichtung und Farben bleiben erhalten.', detail: 'Für JPG, HEIC, PNG und WebP; ein minimales Ausrichtungs-Tag bleibt erhalten, damit Fotos nicht kippen.' },
    'remove-gps': { name: 'GPS-Standort entfernen', text: 'GPS-Koordinaten aus Handyfotos entfernen, bevor Sie sie teilen.', detail: 'Sinnvoll, bevor Sie Fotos von Zuhause, Kindern oder Arbeitsplatz posten oder an Fremde schicken.' },
    'remove-c2pa': { name: 'C2PA entfernen', text: 'Content-Credentials-Manifeste (C2PA) aus JPG, PNG, WebP und HEIC entfernen.', detail: 'Entfernt das Manifest, das KI-Labels auslöst; unsichtbare Pixel-Wasserzeichen wie SynthID bleiben unberührt.' },
    'remove-prompts': { name: 'KI-Prompts entfernen', text: 'Stable-Diffusion-Parameter und ComfyUI-Workflows aus PNG-Dateien entfernen.', detail: 'Verbirgt Prompt, Seed, Modell und Node-Graph, damit niemand Ihre Generierungseinstellungen kopieren kann.' },
    batch: { name: 'Stapelbereinigung', text: 'Bis zu 50 Bilder auf einmal bereinigen und als eine ZIP-Datei herunterladen.', detail: 'Jede Datei behält ihr Originalformat; nicht verarbeitbare Dateien werden mit Grund aufgelistet.' },
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
      guide: {
        sections: [
          {
            title: 'Was die einzelnen Metadatengruppen verraten',
            text: 'Der Viewer ordnet jedes Feld danach, wo es in der Datei gespeichert ist. Jede Gruppe wird von einem anderen Programm zu einem anderen Zweck geschrieben – wer die Quelle kennt, kann besser einschätzen, wie verlässlich ein Wert ist und wie sensibel.',
            items: [
              { term: 'EXIF', text: 'Von Kamera oder Smartphone geschrieben: Hersteller und Modell, Objektiv, Belichtung, Aufnahmezeit und Zeitzone. Dazu können Besitzername, Seriennummer des Gehäuses und eine MakerNote mit herstellerspezifischen Daten kommen.' },
              { term: 'EXIF · GPS', text: 'Breiten- und Längengrad, oft auf wenige Meter genau, außerdem Höhe und manchmal die Blickrichtung der Kamera. Das ist das Feld, das die meisten vor dem Teilen prüfen möchten.' },
              { term: 'XMP', text: 'Von Bearbeitungsprogrammen wie Lightroom oder Photoshop ergänzt: verwendetes Werkzeug, Bearbeitungsverlauf, Bewertungen und Stichwörter. Auch KI-Tools erklären über XMP, dass ein Bild generiert wurde.' },
              { term: 'IPTC', text: 'Bildunterschriften, Urheber, Credit-Zeile und Copyright-Hinweis – vor allem bei Nachrichtenagenturen und Bildagenturen im Einsatz.' },
              { term: 'C2PA', text: 'Content Credentials: ein signiertes Manifest, das festhält, welche App oder welches KI-Modell das Bild erstellt hat und welche Bearbeitungen erfolgten. Plattformen lesen es aus, um „KI-Info“-Labels anzuzeigen.' },
              { term: 'PNG text', text: 'Freie Text-Chunks. Stable Diffusion speichert hier Prompt, Seed und Modell, ComfyUI den kompletten Node-Workflow als JSON.' },
              { term: 'ICC', text: 'Das Farbprofil. Es enthält keine persönlichen Daten und wird für die korrekte Farbdarstellung gebraucht.' },
            ],
          },
          {
            title: 'So lesen Sie den Bericht',
            text: 'Jede Datei beginnt mit einer Datenschutz-Übersicht, die gefundene Standort-, Personen- und Zeitfelder auflistet. Darunter gibt der KI-Abschnitt eines von drei Ergebnissen aus: „KI-Hinweise gefunden“, wenn die Metadaten ein KI-Tool nennen, einen Prompt enthalten oder eine KI-Erzeugung erklären; „Genauer prüfen“, wenn Content Credentials vorhanden sind, aber nicht ausdrücklich KI angeben; und „Keine KI-Hinweise“, wenn nichts gefunden wurde. Ganz unten folgt die vollständige Tabelle. Mit dem Suchfeld kommen Sie direkt zum Wesentlichen – „GPS“, „Serial“, „Software“ oder „prompt“ einzutippen geht meist viel schneller, als durch hundert Felder zu scrollen.',
          },
          {
            title: 'Wann sich ein Blick in die Metadaten lohnt',
            text: 'Prüfen Sie ein Foto, bevor Sie es öffentlich posten oder an Unbekannte schicken, wenn Ihnen ein Kleinanzeigen-Verkäufer oder ein Fremder ein Bild sendet, wenn eine Plattform Ihr echtes Foto als KI markiert und Sie den Grund wissen wollen, und nach dem Bereinigen, um sicherzugehen, dass nichts übrig ist – ziehen Sie dafür einfach die bereinigte Kopie in den Viewer. Bedenken Sie: Metadaten kann jeder ändern oder löschen. Sie sind ein Hinweis, kein Beweis.',
          },
        ],
        faq: [
          {
            q: 'Können Metadaten beweisen, wann oder wo ein Foto aufgenommen wurde?',
            a: 'Allein nicht. Datum und GPS-Werte in EXIF lassen sich mit kostenlosen Tools ändern. C2PA-Manifeste sind signiert und schwerer zu fälschen, aber leicht zu entfernen – ein fehlendes Manifest beweist also ebenfalls nichts.',
          },
          {
            q: 'Warum zeigt mein Foto fast keine Metadaten?',
            a: 'Die meisten sozialen Netzwerke und Messenger entfernen EXIF beim Hochladen, und Screenshots hatten nie Kameradaten. Eine Datei, die von einer solchen Plattform heruntergeladen wurde, ist meist bereits bereinigt.',
          },
          {
            q: 'Welche Formate kann ich prüfen?',
            a: 'JPG-, PNG-, WebP- und HEIC/HEIF-Fotos, auch iPhone-Aufnahmen. Sie können mehrere Dateien auf einmal ablegen und jeden Bericht einzeln öffnen.',
          },
        ],
      },
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
      guide: {
        sections: [
          {
            title: 'Wonach der Check sucht',
            text: 'Der Check teilt die gefundenen Metadaten in vier Arten von Preisgabe ein. Jede beantwortet eine andere Frage, die jemand allein anhand einer Datei über Sie stellen könnte.',
            items: [
              { term: 'Standort', text: 'GPS-Breite, -Länge und -Höhe. Ein zu Hause aufgenommenes Handyfoto kann bis zur Haustür führen – deshalb ergibt jeder Standort ein hohes Risiko.' },
              { term: 'Person & Gerät', text: 'Kamerahersteller und -modell, Urheber- und Copyright-Felder, Besitzername, Gehäuse-Seriennummer, eindeutige Bild-ID, Kommentare und MakerNote-Daten des Herstellers. Über eine Seriennummer lassen sich Fotos, die Sie unter verschiedenen Konten posten, derselben Kamera zuordnen.' },
              { term: 'Zeit', text: 'Ursprüngliches Aufnahmedatum, Sekundenbruchteile und Zeitzone. Zusammen zeigen sie, wann Sie wo waren und ungefähr, in welcher Weltregion Sie leben.' },
              { term: 'KI & Herkunft', text: 'Content Credentials, Namen von KI-Tools und Generierungs-Prompts. Sie sind keine persönlichen Daten im üblichen Sinn, verraten aber, wie ein Bild entstanden ist, und können KI-Labels auslösen.' },
            ],
          },
          {
            title: 'Was bei welchem Risiko zu tun ist',
            text: 'Hoch: Das Foto enthält einen Standort – entfernen Sie ihn, bevor Sie es irgendwo öffentlich teilen, und öffnen Sie vorher die Karte, wenn Sie sehen möchten, wie genau er ist. Mittel: kein Standort, aber Geräte-, Personen-, Zeit- oder KI-Daten – für Freunde unproblematisch, vor öffentlichen Posts oder dem Versand an Fremde aber eine Bereinigung wert. Niedrig: keine sensiblen Metadaten gefunden, die Datei selbst verrät Sie also nicht; was auf dem Bild zu sehen ist, möglicherweise schon.',
          },
          {
            title: 'Wo Metadaten das Teilen überstehen',
            text: 'Viele große soziale Netzwerke entfernen GPS beim Posten, viele andere Wege aber nicht: E-Mail-Anhänge, Cloud-Speicher und Freigabelinks, AirDrop und Nearby Share, Fotos, die in Messengern „als Datei“ oder „als Dokument“ verschickt werden, Foren und kleine Websites. Wenn Sie nicht sicher sind, wie ein Foto weitergegeben wird, prüfen Sie es hier und bereinigen Sie es, bevor es Ihr Gerät verlässt.',
          },
        ],
        faq: [
          {
            q: 'Wie verhindere ich, dass mein Handy Fotos einen Standort hinzufügt?',
            a: 'Auf dem iPhone unter Einstellungen → Datenschutz & Sicherheit → Ortungsdienste → Kamera „Nie“ wählen. Auf Android in den Einstellungen der Kamera-App die Standort-Tags ausschalten (die Bezeichnung variiert je nach Hersteller). Bereits aufgenommene Fotos behalten ihren Standort, bis Sie ihn entfernen.',
          },
          {
            q: 'Heißt ein niedriges Risiko, dass das Foto sicher geteilt werden kann?',
            a: 'Es heißt, dass die Metadaten sauber sind. Gesichter, Hausnummern, Kennzeichen, Dokumente auf dem Tisch oder eine Spiegelung im Fenster können trotzdem mehr verraten als beabsichtigt – werfen Sie also auch einen Blick auf das Bild selbst.',
          },
          {
            q: 'Kann ich Fotos prüfen, die mir jemand geschickt hat?',
            a: 'Ja. Der Check liest die Datei nur, so sehen Sie schnell, ob ein empfangenes Foto noch Standort- oder Gerätedaten enthält – etwa bevor Sie es weiterleiten.',
          },
        ],
      },
    },
    'metadata-size': {
      title: 'Metadatengröße prüfen – wie viele Metadaten hat ein Foto?',
      description:
        'Messen Sie, wie viele Metadaten ein Bild enthält: Gesamtbytes, die größten EXIF-, C2PA- oder Prompt-Blöcke und ein Datenschutzrisiko. Kostenlos, ohne Upload.',
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
      guide: {
        sections: [
          {
            title: 'Was meist den Platz belegt',
            text: 'Die Größe von Metadaten schwankt viel stärker, als die meisten erwarten. Ein gewöhnlicher EXIF-Block ist winzig, während ein einziges eingebettetes Vorschaubild oder ein Workflow größer sein kann als die Bilddaten einer kleinen Webgrafik. Diese Blöcke findet der Checker typischerweise, von klein nach groß:',
            items: [
              { term: 'ICC-Farbprofil', text: 'Einige hundert Bytes bis wenige Kilobyte. Als beibehalten markiert, weil die Farben davon abhängen.' },
              { term: 'EXIF', text: 'Meist einige Kilobyte für Kameraeinstellungen, Datum und GPS, dazu ein EXIF-Vorschaubild, das oft weitere 5–20 KB ausmacht.' },
              { term: 'XMP', text: 'Bei einfachen Dateien unter einem Kilobyte, doch Photoshop und Lightroom können Bearbeitungsverläufe und Dokumentlisten schreiben, die auf Hunderte Kilobyte anwachsen.' },
              { term: 'C2PA-Manifest', text: 'Oft Dutzende Kilobyte: Zertifikate, Signaturen und manchmal Vorschaubilder der Ausgangsbilder.' },
              { term: 'PNG-Prompts & -Workflows', text: 'Stable-Diffusion-Parameter belegen ein bis zwei Kilobyte; ein ComfyUI-Workflow mit vielen Nodes kann Dutzende oder Hunderte Kilobyte erreichen.' },
              { term: 'Daten nach dem Bild', text: 'Manche Smartphones hängen zusätzliche Daten an JPG-Dateien an: MPF-Zweitbilder, größere Vorschauen oder das kurze Video eines Motion Photo – das kann mehrere Megabyte ausmachen.' },
            ],
          },
          {
            title: 'Warum die Metadatengröße wichtig ist',
            text: 'Auf einer Website wird jedes Kilobyte mit jedem Besucher und jedem Bild der Seite multipliziert – ein paar Dutzend Kilobyte pro Bild summieren sich also, und anders als erneutes Komprimieren kostet das keinerlei Qualität. Die Größe ist auch ein Datenschutz-Hinweis: Die größten Blöcke sind oft die aufschlussreichsten, etwa ein kompletter Bearbeitungsverlauf, ein Generierungs-Workflow oder ein zweites, verstecktes Bild. Bei Archiven mit Tausenden Fotos macht sich die Ersparnis auch beim Speicherplatz bemerkbar.',
          },
          {
            title: 'So lesen Sie das Ergebnis',
            text: 'Oben stehen die Gesamtgröße der Metadaten, die entfernt würden, und ihr Anteil an der Datei; der Balken darunter macht diesen Anteil auf einen Blick sichtbar. Danach folgt jeder Block von groß nach klein mit eigenem Balken, sodass Ausreißer sofort auffallen. Das Farbprofil erscheint grün als beibehalten und zählt nicht zur Summe. Bei großen Kamerafotos sind wenige Prozent üblich, kleine PNGs und KI-Bilder erreichen oft deutlich höhere Werte.',
          },
        ],
        faq: [
          {
            q: 'Wie viel kleiner wird meine Datei?',
            a: 'Ungefähr um die angezeigte Metadatensumme. Der Cleaner entfernt diese Blöcke und kopiert die Bilddaten unverändert, die bereinigte Datei ist also so groß wie das Original minus der entfernten Metadaten.',
          },
          {
            q: 'Ersetzt das Entfernen von Metadaten die Bildkomprimierung?',
            a: 'Nein. Es entfernt nur, was nicht zum Bild gehört. Um Fotos deutlich zu verkleinern, brauchen Sie weiterhin Skalieren oder erneutes Komprimieren, was die Pixel verändert; das Entfernen von Metadaten ist der kostenlose erste Schritt ohne jeden Qualitätsverlust.',
          },
          {
            q: 'Warum hat ein kleines KI-Bild einen hohen Metadatenanteil?',
            a: 'Generatoren und Editoren hängen unabhängig von der Bildgröße dieselben Prompts, Workflows oder Content Credentials an – bei einer kleinen Datei können sie daher einen großen Teil der Gesamtbytes ausmachen.',
          },
        ],
      },
    },
  },
};

export default tools;
