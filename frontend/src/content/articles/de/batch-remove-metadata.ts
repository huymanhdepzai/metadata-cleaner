import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Metadaten stapelweise entfernen – 50 Bilder ohne Upload',
  description:
    'Metadaten aus bis zu 50 Bildern gleichzeitig im Browser entfernen – JPG, PNG, WebP, GIF, HEIC, AVIF – und als eine ZIP laden. Verlustfrei, kostenlos, ohne Upload.',
  answer:
    'Um Metadaten aus vielen Bildern auf einmal zu entfernen, ziehen Sie bis zu 50 JPG-, PNG-, WebP-, GIF-, HEIC- oder AVIF-Dateien in das Tool, prüfen die Berichte, klicken einmal auf „KI-Metadaten entfernen“ und laden alles als eine einzige ZIP-Datei herunter. Die Verarbeitung läuft parallel in Ihrem Browser – nichts wird hochgeladen und kein Bild neu komprimiert.',
  sections: [
    {
      heading: 'Metadaten stapelweise entfernen in vier Schritten',
      paragraphs: [],
      steps: [
        'Ziehen Sie bis zu 50 Bilder auf die Seite – JPG, PNG, WebP, GIF, HEIC oder AVIF, jeweils bis zu 25 MB und 40 Megapixel. Formate dürfen gemischt werden.',
        'Jedes Bild wird automatisch analysiert; öffnen Sie einen beliebigen Bericht, um zu sehen, was entfernt wird.',
        'Klicken Sie einmal auf „KI-Metadaten entfernen“, um alle analysierten Bilder zu bereinigen.',
        'Laden Sie die Bilder einzeln herunter oder klicken Sie auf „Alle herunterladen (.zip)“, um metadata-cleared.zip zu erhalten.',
      ],
    },
    {
      heading: 'Wann sich die Stapelbereinigung lohnt',
      paragraphs: [],
      bullets: [
        'Fotografen, die ein Shooting ohne Seriennummern der Kamera, Standorte oder Bearbeitungsverlauf an Kunden liefern.',
        'Verkäufer, die viele Produktfotos auf Marktplätzen einstellen, die die Originaldateien behalten.',
        'KI-Künstler, die eine Reihe von Ergebnissen ohne Prompts oder ComfyUI-Workflows veröffentlichen.',
        'Teams, die Bilder für eine Website, eine Pressemappe oder einen öffentlichen Datensatz vorbereiten.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Warum es auch ohne Server schnell geht',
      paragraphs: [
        'Die Arbeit wird auf mehrere Web Worker verteilt – Hintergrund-Threads in Ihrem Browser –, deren Anzahl sich nach den CPU-Kernen Ihres Geräts richtet. Jeder Worker liest eine Datei, analysiert ihre Struktur und gibt die bereinigten Bytes zurück. So bleibt die Seite auch bei großen HEIC-Dateien reaktionsschnell.',
        'Die ZIP-Datei wird mit der Methode „Store“ (ohne Kompression) erstellt, da Bilder bereits komprimiert sind: Das Packen geht schnell und kostet keine zusätzliche Qualität.',
      ],
    },
    {
      heading: 'Jede Datei vor dem Teilen überprüfen',
      paragraphs: [
        'Nach dem Bereinigen wird jede Ausgabedatei erneut analysiert. Der grüne Ergebnisbereich bestätigt, ob Standort-, Personen-, Zeit- und KI-Felder entfernt sind. Dateien mit doppelten Namen werden in der ZIP-Datei automatisch umbenannt, damit nichts überschrieben wird.',
      ],
    },
    {
      heading: 'Was entfernt wird und was erhalten bleibt',
      paragraphs: ['Für jede Datei im Stapel gelten dieselben Regeln:'],
      table: {
        head: ['Entfernt', 'Erhalten'],
        rows: [
          ['GPS-Standort, Aufnahmedatum und -uhrzeit', 'Bilddaten, Byte für Byte'],
          ['Kamera, Objektiv, Seriennummern, Software', 'Abmessungen und Ausrichtung'],
          ['Autor-, Copyright- und Beschreibungsfelder', 'ICC-Farbprofil'],
          ['XMP, IPTC, C2PA Content Credentials', 'Transparenz und Animation'],
          ['KI-Prompts, Workflows, eingebettete Vorschaubilder', 'Originale Dateinamen'],
        ],
      },
    },
    {
      heading: 'Tipps für große Stapel',
      paragraphs: [],
      bullets: [
        'Bei Hunderten von Bildern arbeiten Sie in Stapeln zu je 50 und leeren die Liste zwischen den Durchgängen, um Speicher freizugeben.',
        'Schließen Sie auf Smartphones mit wenig Arbeitsspeicher vorher andere aufwendige Tabs.',
        'Da die Verarbeitung lokal erfolgt, können Sie die Internetverbindung nach dem Laden der Seite sogar trennen.',
      ],
    },
    {
      heading: 'Datenschutz von Grund auf',
      paragraphs: [
        'Kein Bild wird hochgeladen, gespeichert oder protokolliert. Der einzige Netzwerkverkehr ist das Laden der Seite selbst. Damit eignet sich die Stapelbereinigung für Kundenaufträge, unveröffentlichte Fotos und andere Dateien, die Sie nicht an den Server eines Drittanbieters schicken dürfen.',
      ],
    },
  ],
  faqHeading: 'Fragen zur Stapelverarbeitung',
  faq: [
    {
      q: 'Warum gibt es ein Limit von 50 Bildern?',
      a: 'Alles läuft auf Ihrem Gerät. Das Limit hält den Speicherbedarf auf Smartphones und älteren Computern im sicheren Bereich; Sie können beliebig viele Durchgänge starten.',
    },
    {
      q: 'Kann ich JPG, PNG und HEIC in einem Stapel mischen?',
      a: 'Ja. Jede Datei wird anhand ihres Inhalts erkannt und mit der passenden Methode bereinigt; jede Datei behält ihr ursprüngliches Format.',
    },
    {
      q: 'Werden Dateinamen geändert?',
      a: 'Nein. Bereinigte Dateien behalten ihre Originalnamen. Nur exakte Duplikate in der ZIP-Datei erhalten eine fortlaufende Nummer.',
    },
    {
      q: 'Kann ich das Tool offline nutzen?',
      a: 'Ja. Sobald die Seite geladen ist, funktioniert die Bereinigung ohne Internetverbindung, da nichts an einen Server gesendet wird.',
    },
    {
      q: 'Wird die ZIP-Datei zusätzlich komprimiert?',
      a: 'Nein. Die Bilder werden unverändert abgelegt, daher ist die ZIP-Datei schnell erstellt und kein Bild verliert an Qualität.',
    },
    {
      q: 'Ist die Stapelbereinigung kostenlos?',
      a: 'Ja. Es gibt kein Konto, kein Wasserzeichen und keine Begrenzung, wie viele Durchgänge Sie starten.',
    },
  ],
};

export default article;
