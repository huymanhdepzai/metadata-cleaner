import type { Article } from '../types';

const article: Article = {
  title: 'Ist ein Bild KI-generiert? So erkennen Sie KI-Bilder (Metadaten, C2PA & mehr)',
  summary: [
    'Sie fragen sich, ob ein Foto mit KI erstellt wurde? Der schnellste verlässliche Check sind die Metadaten der Datei selbst: C2PA Content Credentials, das IPTC-Feld DigitalSourceType und Generatortexte nennen oft genau das Tool, mit dem das Bild erzeugt wurde.',
    'Dieser Ratgeber zeigt, auf welche Hinweise Sie achten sollten, wie Sie sie mit einem kostenlosen Checker im Browser auslesen, was Sie tun können, wenn keine Metadaten vorhanden sind – und warum ein „sauberes“ Ergebnis nie beweist, dass ein Bild echt ist.',
  ],
  seoTitle: 'KI-Bild erkennen: Ist ein Bild KI-generiert? (kostenlos)',
  description:
    'KI-Bild erkennen: C2PA Content Credentials, IPTC DigitalSourceType und Prompts kostenlos im Browser auslesen – und die Grenzen jedes Hinweises kennen.',
  answer:
    'Um zu prüfen, ob ein Bild KI-generiert ist, sehen Sie sich die Metadaten der Originaldatei an: C2PA Content Credentials, die einen KI-Dienst nennen, ein IPTC DigitalSourceType mit dem Wert trainedAlgorithmicMedia oder eingebettete Prompts sind starke Belege. Fehlen die Metadaten, helfen eine umgekehrte Bildersuche, der Wasserzeichen-Checker des Anbieters und der Kontext des Bildes – doch kein einzelner Test kann beweisen, dass ein Bild echt ist.',
  sections: [
    {
      heading: 'Beginnen Sie mit der Originaldatei',
      paragraphs: [
        'Metadaten überleben nur in der Datei, die den Generator oder die Kamera verlassen hat. Screenshots, neu gespeicherte Kopien und aus sozialen Netzwerken heruntergeladene Bilder sind meist neu kodiert, wodurch die Metadaten größtenteils oder ganz verschwinden. Bitten Sie nach Möglichkeit um die Originaldatei – die aus der App exportierte oder „als Datei“ statt als komprimiertes Foto gesendete.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Diese Metadaten verraten KI-Bilder',
      paragraphs: ['Vom stärksten zum schwächsten – diese Hinweise lohnen sich zu prüfen:'],
      table: {
        head: ['Hinweis', 'Speicherort', 'Aussage'],
        rows: [
          ['C2PA-Manifest eines KI-Dienstes', 'APP11 (JPEG), caBX (PNG), uuid (HEIC)', 'Signierte Angabe, welches Tool das Bild erzeugt oder bearbeitet hat'],
          ['IPTC DigitalSourceType', 'XMP-Metadaten', 'Angegebene Herkunft, z. B. trainedAlgorithmicMedia'],
          ['Prompts und Parameter', 'PNG-Text-Chunks, EXIF UserComment', 'Mit einem lokalen Tool wie Stable Diffusion oder ComfyUI erzeugt'],
          ['Tool-Namen', 'XMP CreatorTool, EXIF Software', 'Welche App die Datei erstellt oder zuletzt gespeichert hat'],
        ],
      },
    },
    {
      heading: 'Hinweis 1: C2PA Content Credentials',
      paragraphs: [
        'Content Credentials sind ein digital signierter Eintrag, den Tools mit Unterstützung für den C2PA-Standard anhängen. Der Claim Generator nennt die App oder den Dienst, der das Bild erzeugt hat, die Liste c2pa.actions hält Schritte wie „created“ oder „edited“ fest, und ein digitalSourceType-Wert kann die KI-Generierung ausdrücklich angeben.',
        'Da der Eintrag signiert ist, können Prüfwerkzeuge außerdem erkennen, ob das Bild nach der Signatur verändert wurde. Ein Manifest eines KI-Dienstes ist der stärkste Beleg, den Metadaten liefern können.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Hinweis 2: IPTC DigitalSourceType',
      paragraphs: ['Viele Generatoren und Bildbearbeitungen schreiben ein Standard-IPTC-Feld, das beschreibt, wie der Inhalt entstanden ist. Die häufigsten Werte:'],
      bullets: [
        'trainedAlgorithmicMedia – von einem generativen KI-Modell erstellt.',
        'compositeWithTrainedAlgorithmicMedia – ein echtes Foto, in dem Teile von KI erzeugt oder ersetzt wurden (zum Beispiel mit Generativem Füllen).',
        'algorithmicMedia – von einem Algorithmus ohne Trainingsdaten erstellt, etwa prozedurale Grafiken.',
        'digitalCapture – mit einer Kamera aufgenommen, ohne angegebene generative Inhalte.',
      ],
    },
    {
      heading: 'Hinweis 3: Prompts, Parameter und Tool-Namen',
      paragraphs: [
        'Lokale Generatoren wie Stable Diffusion und ComfyUI speichern Prompt, Seed, Modell und Workflow als Text in PNG-Dateien. Andere Tools hinterlassen ihren Namen in XMP CreatorTool oder EXIF Software. Jeder dieser Hinweise ist ein klares Zeichen für KI-Beteiligung – und verrät oft genau, wie das Bild entstanden ist.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'So prüfen Sie ein Bild in Sekunden',
      paragraphs: [],
      steps: [
        'Ziehen Sie die Datei in das Tool oben auf dieser Seite. Die Prüfung läuft vollständig in Ihrem Browser; das Bild wird nie hochgeladen.',
        'Lesen Sie das Ergebnis im Bereich „KI & Herkunft“: „KI-Hinweise gefunden“, „Genauer prüfen“ (Content Credentials ohne ausdrückliche KI-Angabe) oder „Keine KI-Hinweise“.',
        'Sehen Sie sich die aufgeführten Hinweise und ihre Quellen an und öffnen Sie dann „Alle Metadaten & Dateidetails“ für die Rohwerte.',
      ],
    },
    {
      heading: 'Was tun, wenn keine Metadaten vorhanden sind?',
      paragraphs: ['Fehlende Metadaten sind kein Beleg in die eine oder andere Richtung – Bearbeitungs-Apps, Messenger und soziale Netzwerke entfernen sie ständig. Weitere Prüfmöglichkeiten:'],
      bullets: [
        'Umgekehrte Bildersuche, um die früheste Kopie und ihren ursprünglichen Kontext zu finden.',
        'Der Wasserzeichen-Checker des Anbieters – etwa die Tools von Google für SynthID –, sofern es einen gibt.',
        'Sichtprüfung: Hände, Text, Spiegelungen, sich wiederholende Texturen und unstimmige Beleuchtung sind typische Schwachstellen, auch wenn moderne Modelle weniger Fehler machen.',
        'Der Kontext: Wer hat das Bild zuerst gepostet, bestätigen verlässliche Quellen die Szene, und postet das Konto üblicherweise KI-Inhalte?',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Wie zuverlässig sind KI-Bild-Detektoren?',
      paragraphs: [
        'Pixelbasierte KI-Detektoren schätzen eine Wahrscheinlichkeit; sie beweisen nichts. Die Ergebnisse unterscheiden sich von Detektor zu Detektor, werden nach Kompression oder Skalierung schlechter und können echte Fotos als KI einstufen. Betrachten Sie sie als einen Anhaltspunkt unter mehreren – und gewichten Sie signierte Herkunftsnachweise und den ursprünglichen Kontext stärker.',
      ],
    },
  ],
  faqHeading: 'Fragen zur Prüfung von Bildern auf KI',
  faq: [
    {
      q: 'Bedeutet „Keine KI-Hinweise“, dass das Foto echt ist?',
      a: 'Nein. Es bedeutet nur, dass die Datei keine KI-Metadaten enthält. Metadaten gehen leicht verloren oder lassen sich entfernen – werten Sie ein sauberes Ergebnis daher als „unbekannt“, nicht als Echtheitsbeweis.',
    },
    {
      q: 'Kann ich Bilder prüfen, die ich von Instagram oder Facebook heruntergeladen habe?',
      a: 'Ja, aber Plattformen entfernen die Metadaten meist aus der veröffentlichten Kopie, das Ergebnis ist daher oft leer. Das eigene Label „KI-Info“ der Plattform ist, falls vorhanden, ein separater Hinweis.',
    },
    {
      q: 'Lassen sich Metadaten fälschen?',
      a: 'Einfache EXIF- und XMP-Felder lassen sich mit gängigen Tools bearbeiten. C2PA-Manifeste sind signiert, Manipulationen sind also erkennbar – das macht sie zum vertrauenswürdigeren Hinweis.',
    },
    {
      q: 'Wie erkenne ich, ob ein Bild mit ChatGPT erstellt wurde?',
      a: 'Bilder aus der Bildgenerierung von OpenAI tragen C2PA Content Credentials, die OpenAI nennen. Enthält die Originaldatei sie noch, zeigt der Bericht sie unter „KI & Herkunft“ an.',
    },
    {
      q: 'Kann ich Midjourney- oder Stable-Diffusion-Bilder prüfen?',
      a: 'Ja. Midjourney-Downloads können den Prompt und einen KI-Quelltyp enthalten, und Stable-Diffusion-PNGs enthalten meist einen Chunk „parameters“ – beides wird im Bericht markiert.',
    },
    {
      q: 'Ist der Checker kostenlos und privat?',
      a: 'Ja. Er ist kostenlos, braucht kein Konto und analysiert die Datei lokal in Ihrem Browser, ohne sie hochzuladen.',
    },
  ],
};

export default article;
