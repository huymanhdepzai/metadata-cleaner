import type { Article } from '../types';

const article: Article = {
  description:
    'Was ist C2PA? Content Credentials erklärt: Inhalt des signierten Manifests, Speicherort in JPEG, PNG, WebP und HEIC, Prüfung und Entfernung.',
  answer:
    'C2PA ist ein offener Standard, mit dem Mediendateien einen signierten, manipulationssicheren Herkunftsnachweis erhalten; für Endnutzer heißt er Content Credentials. Ein C2PA-Manifest hält fest, welche App oder welches KI-Modell ein Bild erstellt oder bearbeitet hat. Es liegt als eigener Block in der Datei, daher können Sie es prüfen – und aus einer Kopie entfernen –, ohne die Bilddaten anzutasten.',
  sections: [
    {
      heading: 'Was sind C2PA und Content Credentials?',
      paragraphs: [
        'Die Coalition for Content Provenance and Authenticity (C2PA) ist ein Branchenverbund, zu dem unter anderem Adobe, Microsoft, Google, OpenAI, Kamerahersteller und Nachrichtenorganisationen gehören. Er veröffentlicht einen offenen technischen Standard für die Herkunft von Inhalten. „Content Credentials“ ist der verständlichere Name, der in Apps und auf Websites verwendet wird – oft als kleines „CR“-Symbol.',
        'Kameras, Bildbearbeitungen und KI-Generatoren können einen signierten Eintrag hinzufügen, der beschreibt, wie ein Bild entstanden ist – mit einer Kamera aufgenommen, in einer App bearbeitet oder von einem Modell generiert. Prüfwerkzeuge können später feststellen, ob die Datei nach der Signatur verändert wurde.',
      ],
    },
    {
      heading: 'Was steht in einem C2PA-Manifest?',
      paragraphs: ['Ein Manifest ist ein kleines, strukturiertes Paket aus drei Hauptteilen:'],
      bullets: [
        'Claim Generator – die App oder der Dienst, der das Manifest erstellt hat, zum Beispiel eine Bildbearbeitung oder ein KI-Bilddienst.',
        'Assertions – Aussagen über den Inhalt, etwa c2pa.actions (created, edited, opened, resized …), ein digitalSourceType, der KI-Generierung angeben kann, Vorschaubilder sowie Verweise auf „Ingredient“-Dateien, die bei der Bearbeitung verwendet wurden.',
        'Signatur – eine kryptografische Signatur mit einem Zertifikat, das den Unterzeichner ausweist, plus ein Hash, der das Manifest an genau diese Bilddaten bindet.',
      ],
    },
    {
      heading: 'Wo Content Credentials in jedem Format gespeichert sind',
      paragraphs: ['Das Manifest steckt in einem JUMBF-Container, und jedes Format hat dafür einen eigenen Platz:'],
      table: {
        head: ['Format', 'Speicherort des Manifests'],
        rows: [
          ['JPEG', 'APP11-Segmente'],
          ['PNG', 'caBX-Chunk'],
          ['WebP', 'Ein eigener C2PA-Chunk im RIFF-Container'],
          ['HEIC, HEIF, AVIF', 'Eine uuid-Box'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: 'Wer heute Content Credentials hinzufügt',
      paragraphs: ['Die Verbreitung wächst schnell. Typische Quellen sind:'],
      bullets: [
        'KI-Bilddienste wie die Bildgenerierung von OpenAI und Adobe Firefly, die ihre Ergebnisse als KI-generiert kennzeichnen.',
        'Bildbearbeitungen wie Photoshop und Lightroom – entweder weil Sie Content Credentials aktiviert oder eine generative Funktion genutzt haben.',
        'Einige Kameras und Smartphones, die Fotos bei der Aufnahme signieren, um zu belegen, dass sie von einem echten Gerät stammen.',
        'Plattformen und Nachrichtenverlage, die Nachweise erhalten oder anzeigen, zum Beispiel mit einem „CR“-Badge.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'So zeigen Sie die Content Credentials eines Bildes an',
      paragraphs: [],
      steps: [
        'Ziehen Sie die Datei in das Tool oben auf dieser Seite.',
        'Der Bereich „KI & Herkunft“ zeigt, ob ein C2PA-Block vorhanden ist, sowie Claim Generator, aufgezeichnete Aktionen und Quelltyp.',
        'Für eine vollständige kryptografische Prüfung der Signatur nutzen Sie zusätzlich ein offizielles Prüfwerkzeug für Content Credentials.',
      ],
    },
    {
      heading: 'So entfernen Sie C2PA Content Credentials',
      paragraphs: [
        'Klicken Sie im Tool oben auf „KI-Metadaten entfernen“. Der C2PA-Block wird auf Byte-Ebene herausgeschnitten – zusammen mit XMP, IPTC und EXIF –, die Bilddaten werden unverändert kopiert. HEIC- und AVIF-Dateien werden direkt bereinigt, sodass die Dateistruktur gültig bleibt. Die bereinigte Datei wird erneut analysiert, damit Sie prüfen können, dass kein Manifest mehr vorhanden ist.',
      ],
    },
    {
      heading: 'Was das Entfernen eines Manifests bewirkt – und was nicht',
      paragraphs: [
        'Wenn Sie das eingebettete Manifest entfernen, löschen Sie den Herkunftsnachweis aus dieser Kopie der Datei. Jede Bearbeitung bricht ohnehin die kryptografische Bindung – Prüfwerkzeuge melden ein Manifest, das nicht mehr zum Bild passt, als ungültig. Das Entfernen beseitigt also nur einen Eintrag, der sonst mit der Datei mitreisen würde.',
        'Manche Systeme setzen auf „dauerhafte“ (durable) Content Credentials: ein unsichtbares Wasserzeichen oder einen Fingerabdruck, mit dem ein Prüfwerkzeug das Manifest in einem Online-Verzeichnis nachschlagen kann, selbst wenn die eingebettete Kopie fehlt. Die Metadatenbereinigung wirkt sich darauf nicht aus, denn diese Mechanismen liegen in den Pixeln oder in einer externen Datenbank.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Content Credentials behalten oder entfernen?',
      paragraphs: [
        'Behalten Sie sie, wenn Sie belegen möchten, woher ein Bild stammt – im Journalismus, bei eigener Fotografie oder wenn ein Kunde einen Herkunftsnachweis verlangt. Erwägen Sie das Entfernen bei einer geteilten Kopie, wenn die Daten Software, Bearbeitungsverlauf oder Identitätsangaben preisgeben, die Sie nicht veröffentlichen möchten, oder wenn sie KI-Labels bei nur leicht bearbeiteten Fotos auslösen. Erst prüfen, dann für jedes Bild einzeln entscheiden.',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'Fragen zu C2PA und Content Credentials',
  faq: [
    {
      q: 'Wofür steht C2PA?',
      a: 'Für Coalition for Content Provenance and Authenticity – den Branchenverbund, der den offenen Standard hinter Content Credentials pflegt.',
    },
    {
      q: 'Ist C2PA dasselbe wie ein unsichtbares Wasserzeichen?',
      a: 'Nein. C2PA sind Metadaten, die neben den Bilddaten gespeichert werden. Unsichtbare Wasserzeichen wie SynthID sind in die Pixel eingebettet und vom Entfernen der Metadaten nicht betroffen.',
    },
    {
      q: 'Lassen sich Content Credentials fälschen?',
      a: 'Ein Manifest ist signiert, Manipulationen können Prüfwerkzeuge also erkennen. Ein fehlendes Manifest beweist jedoch nichts, und eine gültige Signatur zeigt nur, wer unterschrieben hat – nicht, dass der Inhalt wahr ist.',
    },
    {
      q: 'Wie kann ich ein Manifest vor dem Entfernen überprüfen?',
      a: 'Der Bericht nennt Claim Generator, Aktionen und Quelltyp. Für eine vollständige Signaturprüfung nutzen Sie vor dem Bereinigen ein offizielles Prüfwerkzeug für Content Credentials.',
    },
    {
      q: 'Verringert das Entfernen von C2PA die Bildqualität?',
      a: 'Nein. Das Manifest ist ein separater Block; die komprimierten Bilddaten werden unverändert kopiert.',
    },
    {
      q: 'Behalten soziale Netzwerke Content Credentials bei?',
      a: 'Manche lesen sie beim Hochladen aus, um Labels zu vergeben, und entfernen sie aus der veröffentlichten Kopie; einige zeigen sie an. Das Verhalten unterscheidet sich je nach Plattform und ändert sich mit der Zeit.',
    },
  ],
};

export default article;
