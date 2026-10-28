import type { Article } from '../types';

const article: Article = {
  seoTitle: '„Mit KI erstellt“ / „KI-Info“-Label bei Instagram entfernen',
  description:
    'Warum echte Fotos auf Instagram, Facebook und Threads das Label „KI-Info“ (früher „Mit KI erstellt“) erhalten, welche Metadaten es auslösen und wie Sie es beheben.',
  answer:
    'Instagram, Facebook und Threads zeigen das Label „KI-Info“ (früher „Mit KI erstellt“), wenn die hochgeladene Datei KI-Hinweise enthält – meist C2PA Content Credentials oder ein IPTC-Feld DigitalSourceType, das ein Programm wie Photoshop geschrieben hat. Um ein falsches Label auf einem echten Foto zu vermeiden, prüfen Sie die Datei auf diese Felder, entfernen Sie sie ohne Neukodierung aus einer Kopie und laden Sie die bereinigte Kopie hoch.',
  sections: [
    {
      heading: 'Was das Label „KI-Info“ bedeutet',
      paragraphs: [
        'Meta zeigt „KI-Info“ bei Beiträgen auf Instagram, Facebook und Threads an, wenn es davon ausgeht, dass ein Bild oder Video mit generativer KI erstellt oder bearbeitet wurde. Bis Mitte 2024 hieß das Label „Mit KI erstellt“ („Made with AI“). Meta benannte es um, nachdem sich viele Fotografen beschwert hatten, dass ganz normal retuschierte Fotos als KI-Werke markiert wurden.',
        'Heute erhalten Inhalte, die Meta als weitgehend KI-generiert einstuft, ein sichtbares Label. Bei Inhalten, die nur mit KI-Werkzeugen bearbeitet wurden, steht die Information meist im Menü des Beitrags. In beiden Fällen stammt das Label aus derselben Quelle: Hinweise, die in der Datei erkannt oder vom Ersteller angegeben wurden.',
      ],
    },
    {
      heading: 'Wie Meta KI in einem Bild erkennt',
      paragraphs: ['Laut Meta stützt sich das Unternehmen auf branchenübliche Indikatoren und auf die Angaben der Ersteller. In der Praxis zählen drei Faktoren:'],
      bullets: [
        'C2PA Content Credentials – ein signiertes Manifest, das die erzeugende App und die ausgeführten Aktionen nennt, etwa „created“ oder „edited with generative fill“.',
        'IPTC DigitalSourceType in den XMP-Metadaten – Werte wie trainedAlgorithmicMedia (vollständig generiert) oder compositeWithTrainedAlgorithmicMedia (ein Foto mit KI-generierten Teilen).',
        'Selbstauskunft – der KI-Schalter beim Posten, den Ersteller laut Meta bei realistisch wirkenden KI-Inhalten nutzen sollen.',
      ],
      table: {
        head: ['Hinweis in der Datei', 'Typische Quelle', 'Wahrscheinliches Ergebnis'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'KI-Bildgeneratoren', 'Gut sichtbares KI-Label'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Generatives Füllen, Generatives Erweitern, KI-Radierer', 'Label „KI-Info“, oft im Menü'],
          ['C2PA-Manifest mit KI-Aktionen', 'Photoshop, Firefly, KI-Dienste', 'Label „KI-Info“'],
          ['Keine KI-Felder, keine Angabe', 'Kamera, Smartphone, Bearbeitung ohne KI', 'Meist kein Label'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Warum echte Fotos fälschlich als „Mit KI erstellt“ markiert werden',
      paragraphs: [
        'Die meisten Fehlalarme verursacht die Bearbeitungssoftware, nicht die Kamera. Moderne Bildbearbeitungen schreiben Herkunftsdaten, sobald ein KI-gestütztes Werkzeug das Bild berührt – selbst wenn sich nur ein paar Pixel ändern:',
      ],
      bullets: [
        'Wer in Photoshop mit generativen Funktionen ein kleines Objekt entfernt, den Hintergrund erweitert oder den Horizont begradigt, kann die ganze Datei als Komposit mit KI kennzeichnen.',
        'Ein Export mit aktivierten Content Credentials bettet ein signiertes Manifest mit allen aufgezeichneten Bearbeitungen ein.',
        'Manche Galerie-Apps auf dem Smartphone setzen nach dem Einsatz von Objektradierern oder anderen generativen Bearbeitungen KI-Markierungen.',
        'Erneutes Speichern oder Konvertieren behält die vorhandenen Metadaten meist bei – ein Label kann ein Bild also durch mehrere Apps begleiten.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'So finden Sie das Feld, das das Label auslöst',
      paragraphs: ['Bevor Sie etwas ändern, prüfen Sie, was die Datei tatsächlich enthält:'],
      steps: [
        'Ziehen Sie genau die Datei, die Sie hochladen möchten, in das Tool oben auf dieser Seite. Die Verarbeitung läuft im Browser, es wird nichts hochgeladen.',
        'Öffnen Sie den Bereich „KI & Herkunft“. Jeder Hinweis wird mit seiner Quelle aufgeführt, zum Beispiel „C2PA · compositeWithTrainedAlgorithmicMedia“ oder „XMP · Iptc4xmpExt › DigitalSourceType“.',
        'Öffnen Sie „Alle Metadaten & Dateidetails“, um die Rohwerte zu sehen – einschließlich des Claim Generators (der App, die das Manifest signiert hat) und der aufgezeichneten c2pa.*-Aktionen.',
        'Lautet das Ergebnis „Genauer prüfen“, enthält die Datei Content Credentials, aber keine ausdrückliche KI-Angabe. Plattformen können das Manifest trotzdem auslesen – sehen Sie es sich vor dem Posten an.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'So entfernen Sie das Label „KI-Info“ von einem echten Foto',
      paragraphs: [
        'Wenn das Label Ihre Arbeit falsch beschreibt, beheben Sie die Ursache in der Datei, statt nach dem Posten gegen das Label anzukämpfen:',
      ],
      steps: [
        'Bewahren Sie Ihren Originalexport als Archiv auf – er kann später belegen, wie Sie das Bild bearbeitet haben.',
        'Klicken Sie im Tool oben auf „KI-Metadaten entfernen“. C2PA-Container sowie XMP-, IPTC- und EXIF-Blöcke werden auf Byte-Ebene herausgeschnitten; Pixel, Abmessungen, Ausrichtung und Farbprofil bleiben unberührt.',
        'Prüfen Sie den grünen Ergebnisbereich: Die bereinigte Datei wird erneut analysiert, sodass Sie sehen, dass keine KI- oder Herkunftsfelder mehr vorhanden sind.',
        'Laden Sie die bereinigte Kopie als neuen Beitrag hoch. Beim Bearbeiten eines bestehenden Beitrags wird die Datei nicht neu gelesen – ein bereits vergebenes Label bleibt daher meist bestehen.',
      ],
    },
    {
      heading: 'Warum nicht einfach einen Screenshot machen oder als JPEG neu speichern?',
      paragraphs: [
        'Screenshots und „Für Web speichern“-Tricks entfernen Metadaten ebenfalls, komprimieren das Bild aber neu, verringern die Auflösung und können Farben verschieben – bei jedem Durchgang. Die Bereinigung auf Byte-Ebene entfernt nur die Metadatenblöcke und kopiert die komprimierten Bilddaten exakt, es gibt also keinerlei Qualitätsverlust.',
      ],
    },
    {
      heading: 'Wenn das Label nach dem Bereinigen bleibt',
      paragraphs: [
        'Metadaten sind die häufigste Ursache für Labels auf bearbeiteten Fotos, aber nicht die einzige. Meta nutzt auch andere Erkennungsmethoden und die Angaben der Ersteller. Ist ein bereinigtes Foto weiterhin markiert, prüfen Sie, ob beim Posten der KI-Schalter aktiviert war, und nutzen Sie die Feedback-Möglichkeiten der Plattform, wenn Sie das Label für falsch halten.',
      ],
    },
    {
      heading: 'Wann Sie das Label behalten sollten',
      paragraphs: [
        'Das Entfernen von Metadaten korrigiert Labels, die Ihre Arbeit falsch beschreiben. Es ändert nicht, was das Bild ist. Ist ein Bild vollständig oder überwiegend KI-generiert und wirkt realistisch, verlangen die Regeln der Plattformen in der Regel eine Kennzeichnung – und das Label hilft dem Publikum, das Gesehene einzuordnen. Nutzen Sie das Tool, um Fehler zu korrigieren und Ihre Privatsphäre zu schützen, nicht um synthetische Bilder als echte Fotos auszugeben.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Fragen zum Label „KI-Info“',
  faq: [
    {
      q: 'Ist „Mit KI erstellt“ dasselbe wie „KI-Info“?',
      a: 'Ja. Meta hat das Label „Mit KI erstellt“ 2024 in „KI-Info“ umbenannt und es bei Inhalten, die nur mit KI-Werkzeugen bearbeitet wurden, ins Menü des Beitrags verschoben.',
    },
    {
      q: 'Verschwindet das Label garantiert, wenn ich die Metadaten entferne?',
      a: 'Nein. Entfernt werden die in der Datei gespeicherten Hinweise – die häufigste Ursache für Labels auf bearbeiteten Fotos. Plattformen können aber weiterhin andere Erkennungsmethoden nutzen oder Sie bitten, KI-Inhalte offenzulegen.',
    },
    {
      q: 'Kann ich das Label von einem bereits veröffentlichten Beitrag entfernen?',
      a: 'Durch Bearbeiten meist nicht. Die Datei wird beim Hochladen analysiert – zuverlässig ist daher nur, die Datei zu bereinigen und erneut zu veröffentlichen.',
    },
    {
      q: 'Sieht das Foto nach dem Bereinigen anders aus?',
      a: 'Nein. Es werden nur Metadatenblöcke entfernt; die Bilddaten werden Byte für Byte kopiert, Ausrichtung und ICC-Farbprofil bleiben erhalten.',
    },
    {
      q: 'Kann ich nur die KI-Felder entfernen und die Kameradaten behalten?',
      a: 'Die aktuelle Version entfernt alle identifizierenden Metadaten – Standort, Kamera, Autor und KI-Herkunft – in einem Schritt. Das ist die sicherste Voreinstellung zum Teilen. Abmessungen, Ausrichtung, Farbe und Animation bleiben immer erhalten.',
    },
    {
      q: 'Funktioniert das auch für Facebook und Threads?',
      a: 'Ja. Instagram, Facebook und Threads nutzen dasselbe Kennzeichnungssystem von Meta, daher lösen dieselben Felder das Label auf allen drei Plattformen aus.',
    },
  ],
};

export default article;
