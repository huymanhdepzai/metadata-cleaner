import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Metadaten aus Midjourney- & ChatGPT-Bildern entfernen',
  description:
    'Bilder aus Midjourney, ChatGPT/DALL·E und Firefly können Prompt, Job-ID und KI-Herkunftsdaten enthalten. Sehen Sie, was eingebettet ist, und entfernen Sie es.',
  answer:
    'Downloads von KI-Bilddiensten können Ihren Prompt, eine Job- oder Generierungs-ID, den Namen des Tools und C2PA Content Credentials enthalten. Jeder kann diese Angaben mit einem kostenlosen Metadaten-Viewer lesen. Um Ihren Prompt zu verbergen, öffnen Sie die Datei in einem Metadaten-Checker, prüfen Sie, welche Felder vorhanden sind, und entfernen Sie sie mit einem verlustfreien Cleaner aus einer Kopie, bevor Sie das Bild posten oder versenden.',
  sections: [
    {
      heading: 'Was KI-Bilddienste in Ihre Downloads schreiben',
      paragraphs: [
        'Online-Bildgeneratoren fügen jedem Download zunehmend Metadaten hinzu – teils aus Transparenzgründen, teils um Herkunftsstandards zu unterstützen. Was genau geschrieben wird, hängt vom Dienst, vom Download-Format und von der aktuellen Version ab. Prüfen Sie deshalb immer die tatsächliche Datei. Typische Beispiele:',
      ],
      table: {
        head: ['Dienst', 'Typische Metadaten', 'Kann verraten'],
        rows: [
          ['Midjourney', 'Beschreibungs-/Kommentartext, IPTC DigitalSourceType', 'Ihren Prompt, eine Job-ID, dass das Bild KI-generiert ist'],
          ['Bildgenerierung in ChatGPT, DALL·E', 'C2PA Content Credentials', 'Dass OpenAI das Bild erzeugt hat, die aufgezeichneten Aktionen'],
          ['Adobe Firefly', 'C2PA Content Credentials, XMP', 'KI-Generierung, verwendete App, Bearbeitungsverlauf'],
          ['Viele andere Tools', 'XMP CreatorTool, EXIF Software, Datumsangaben', 'Tool-Name, Erstellungszeit, manchmal kontobezogene IDs'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Warum Ihre Prompts schützenswert sind',
      paragraphs: [
        'Für Illustratoren, Designer und Prompt Engineers ist ein ausgefeilter Prompt Fachwissen aus vielen Iterationen. Wer Ihr Bild herunterlädt, kann es in einen Metadaten-Viewer werfen, den Prompt kopieren und Ihren Stil in wenigen Minuten nachbauen.',
        'IDs und kontobezogene Angaben können ein öffentliches Bild außerdem mit Ihrem Konto oder mit anderen von Ihnen generierten Bildern verknüpfen. Wenn Sie Bilder an Kunden liefern, können eingebettete Prompts Ihren Arbeitsablauf und Ihre Werkzeuge offenlegen.',
      ],
    },
    {
      heading: 'So prüfen Sie, ob ein Bild Ihren Prompt enthält',
      paragraphs: [],
      steps: [
        'Ziehen Sie die heruntergeladene Datei in das Tool oben auf dieser Seite – die Verarbeitung erfolgt lokal, Ihr Prompt wird nie hochgeladen.',
        'Suchen Sie im Bereich „KI & Herkunft“ nach Prompts, Generatornamen und Angaben zum Quelltyp.',
        'Suchen Sie im Bereich „Datenschutzdetails“ nach Autoren, Beschreibungen, Kennungen und Datumsangaben.',
        'Öffnen Sie „Alle Metadaten & Dateidetails“, wenn Sie jedes Feld im Wortlaut lesen möchten.',
      ],
    },
    {
      heading: 'So entfernen Sie den Prompt und die KI-Metadaten',
      paragraphs: [],
      steps: [
        'Klicken Sie auf „KI-Metadaten entfernen“. Prompt-Text, IDs sowie XMP-, IPTC-, EXIF- und C2PA-Blöcke werden auf Byte-Ebene entfernt.',
        'Prüfen Sie den grünen Ergebnisbereich – die bereinigte Datei wird erneut analysiert, damit Sie sicher sein können, dass nichts übrig ist.',
        'Laden Sie das Bild herunter – oder eine ZIP-Datei, wenn Sie einen ganzen Stapel bearbeitet haben.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Enthält ein Midjourney-Bild immer den Prompt?',
      paragraphs: [
        'Nicht unbedingt. Was enthalten ist, hängt vom Download-Weg (Web-App, Discord, hochskaliert oder nicht), vom Dateiformat und von der Version des Dienstes ab – und das ändert sich mit der Zeit. Eine verlässliche Antwort liefert nur die Prüfung der Datei, die Sie tatsächlich haben. Das gilt auch für andere Dienste: Zwei Bilder aus demselben Tool können unterschiedliche Felder enthalten.',
      ],
    },
    {
      heading: 'Was das Entfernen von Metadaten nicht leisten kann',
      paragraphs: [
        'Manche Anbieter betten zusätzlich unsichtbare Wasserzeichen direkt in die Pixel ein, etwa SynthID von Google. Das sind keine Metadaten, und ein verlustfreier Cleaner – der Pixel nie verändert – kann sie nicht entfernen. Und wenn Sie ein realistisch wirkendes KI-Bild veröffentlichen, verlangen die Regeln der Plattform unter Umständen trotzdem eine Kennzeichnung. Das Entfernen des Prompts schützt Ihren Arbeitsablauf, ändert aber nichts an der Art des Bildes.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Fragen zu Midjourney- und DALL·E-Metadaten',
  faq: [
    {
      q: 'Kann jemand meinen Midjourney-Prompt aus dem Bild auslesen?',
      a: 'Wenn der Prompt in den Metadaten der Datei steht, ja – jeder Metadaten-Viewer zeigt ihn an. Prüfen Sie die Datei und entfernen Sie die Felder vor dem Teilen, wenn der Prompt privat bleiben soll.',
    },
    {
      q: 'Bettet Midjourney den Prompt immer ein?',
      a: 'Das hängt vom Download-Format und den aktuellen Einstellungen des Dienstes ab. Prüfen Sie die Datei, um genau zu sehen, welche Felder vorhanden sind, bevor Sie entscheiden.',
    },
    {
      q: 'Enthalten ChatGPT-Bilder Metadaten?',
      a: 'Bilder aus der Bildgenerierung von OpenAI tragen C2PA Content Credentials, die OpenAI als Quelle ausweisen. Der Bericht listet sie unter „KI & Herkunft“ auf.',
    },
    {
      q: 'Entfernt die Bereinigung SynthID oder andere unsichtbare Wasserzeichen?',
      a: 'Nein. Unsichtbare Wasserzeichen sind Teil der Pixeldaten. Das Tool entfernt nur Metadaten und verändert nie Pixel.',
    },
    {
      q: 'Verringert das Entfernen von Metadaten die Bildqualität?',
      a: 'Nein. Metadatenblöcke werden herausgeschnitten, die komprimierten Bilddaten werden unverändert kopiert.',
    },
    {
      q: 'Kann ich mehrere Bilder auf einmal bereinigen?',
      a: 'Ja. Ziehen Sie bis zu 50 Bilder hinein, prüfen Sie die Berichte und laden Sie anschließend alles als eine ZIP-Datei herunter.',
    },
  ],
};

export default article;
