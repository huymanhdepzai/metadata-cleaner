import type { Article } from '../types';

const article: Article = {
  title: 'Fügt ChatGPT Bildern Metadaten hinzu? So sehen und entfernen Sie sie',
  seoTitle: 'Fügt ChatGPT Bildern Metadaten hinzu? (C2PA erklärt)',
  summary: [
    'Bilder, die mit ChatGPT und den Bildmodellen von OpenAI erstellt wurden, enthalten C2PA Content Credentials: signierte Metadaten, die OpenAI als Quelle des Bildes ausweisen.',
    'Hier erfahren Sie, was diese Metadaten enthalten, wo sie sichtbar werden, wie Sie Ihre eigenen Dateien prüfen und wie Sie sie verlustfrei aus einer Kopie entfernen – und was das Entfernen nicht ändert.',
  ],
  description:
    'Ja – ChatGPT-Bilder enthalten C2PA Content Credentials, die OpenAI als Quelle nennen. Was die Metadaten enthalten, wie Sie sie prüfen und verlustfrei entfernen.',
  answer:
    'Ja. Bilder, die in ChatGPT und über die Bild-API von OpenAI erzeugt werden, enthalten C2PA Content Credentials – ein signiertes Manifest, das festhält, dass das Bild von einem OpenAI-Modell erstellt wurde. Plattformen wie Instagram, Facebook und LinkedIn können es lesen und ein KI-Label anzeigen. Sie können das Manifest in einem Metadaten-Viewer prüfen und aus einer Kopie entfernen, ohne die Pixel zu verändern.',
  sections: [
    {
      heading: 'Welche Metadaten ChatGPT generierten Bildern hinzufügt',
      paragraphs: [
        'OpenAI versieht Bilder seiner Bildmodelle in ChatGPT und in der API mit einem C2PA-Manifest. Das Manifest ist signiert, sodass Viewer erkennen, ob es verändert wurde. Es hält typischerweise fest:',
      ],
      bullets: [
        'Den Aussteller und das erzeugende Tool – OpenAI und ChatGPT bzw. die API.',
        'Eine Aktion, die die Erstellung des Bildes angibt, mit dem Digital Source Type „trainedAlgorithmicMedia“ – dem Standardcode für vollständig KI-generierte Medien.',
        'Einen Zeitstempel und das Zertifikat, mit dem das Manifest signiert wurde.',
        'Bei in ChatGPT bearbeiteten Bildern Einträge zur Bearbeitung und zum Ausgangsbild.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Enthält ein ChatGPT-Bild meinen Prompt?',
      paragraphs: [
        'C2PA-Manifeste sind dafür gedacht, die Herkunft festzuhalten – welches Tool das Bild wann erstellt hat –, nicht Ihr Gespräch. Anders als Stable Diffusion oder ComfyUI, die den vollständigen Prompt in PNG-Text-Chunks schreiben, sind die Dateien von OpenAI nicht darauf ausgelegt, den Prompt zu speichern. Was enthalten ist, kann sich mit der Zeit ändern; verlässlich ist für eine bestimmte Datei nur, sie in einem Viewer zu öffnen und nachzusehen.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'So prüfen Sie ein ChatGPT-Bild auf Metadaten',
      paragraphs: [],
      steps: [
        'Laden Sie das Bild aus ChatGPT herunter. Dateien werden meist als PNG gespeichert.',
        'Ziehen Sie die heruntergeladene Datei in die Prüfung oben auf dieser Seite.',
        'Öffnen Sie den Bereich „KI & Herkunft“: Er zeigt das C2PA-Manifest, den Aussteller und den Digital Source Type.',
        'Vergleichen Sie mit einer geteilten oder neu gespeicherten Kopie – viele Apps entfernen das Manifest, andere behalten es.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Wo die Metadaten von ChatGPT-Bildern sichtbar werden',
      paragraphs: [
        'C2PA-fähige Plattformen und Tools lesen das Manifest automatisch. Meta zeigt auf Instagram, Facebook und Threads das Label „KI-Info“, LinkedIn ein Content-Credentials-Symbol, und Prüfseiten wie contentcredentials.org den vollständigen Verlauf. Plattformen, die Metadaten beim Upload entfernen, löschen das Manifest aus der veröffentlichten Kopie – können es vorher aber auslesen.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'So entfernen Sie Metadaten aus einem ChatGPT-Bild',
      paragraphs: [
        'Das Entfernen des Manifests ist sinnvoll, wenn Sie schlanke Dateien möchten, keine Tool- und Kontodaten weitergeben wollen oder ein Bild in einem Kontext veröffentlichen, in dem Sie die KI-Herkunft selbst angeben.',
      ],
      steps: [
        'Ziehen Sie ein oder mehrere ChatGPT-Bilder in das Tool oben auf dieser Seite.',
        'Klicken Sie auf „KI-Metadaten entfernen“. Der C2PA-Block und andere Metadaten werden auf Byte-Ebene herausgeschnitten.',
        'Laden Sie das bereinigte PNG herunter – Pixel, Transparenz und Abmessungen sind identisch mit dem Original.',
        'Behalten Sie den Original-Download, falls Sie später nachweisen müssen, woher das Bild stammt.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'Was das Entfernen der Metadaten nicht ändert',
      paragraphs: [
        'Metadaten sind nur eine Ebene. OpenAI hat erklärt, dass es auch interne Werkzeuge nutzt, um eigene Bilder zu erkennen, Plattformen können eigene Klassifikatoren einsetzen, und viele Dienste verlangen die Offenlegung KI-generierter Inhalte unabhängig vom Dateiinhalt. Das Entfernen des Manifests bereinigt die Datei; es ändert weder die Herkunft des Bildes noch Ihre Offenlegungspflichten.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Fragen zu den Metadaten von ChatGPT-Bildern',
  faq: [
    {
      q: 'Haben alle ChatGPT-Bilder C2PA-Metadaten?',
      a: 'Bilder, die von OpenAIs Bildmodellen in ChatGPT und der API erzeugt werden, werden mit C2PA Content Credentials ausgeliefert. Kopien, die per Screenshot entstanden oder von einer anderen App neu gespeichert wurden, haben sie möglicherweise verloren.',
    },
    {
      q: 'Kann man erkennen, dass ein Bild mit ChatGPT erstellt wurde?',
      a: 'Wenn das Manifest noch in der Datei ist, ja: Jeder C2PA-Viewer zeigt OpenAI als Quelle. Ohne Metadaten bleiben nur visuelle Hinweise oder Erkennungstools, und die sind nicht immer zuverlässig.',
    },
    {
      q: 'Verringert das Entfernen der Metadaten die Bildqualität?',
      a: 'Nein. Das Tool entfernt Metadatenblöcke und kopiert die Bilddaten Byte für Byte, das PNG sieht also genau gleich aus.',
    },
    {
      q: 'Behält ein Screenshot eines ChatGPT-Bildes die Metadaten?',
      a: 'Meist nicht. Ein Screenshot ist eine neue Datei ohne das ursprüngliche Manifest, hat aber eine geringere Auflösung und erhält eigene Screenshot-Metadaten.',
    },
    {
      q: 'Kennzeichnet Instagram ein bereinigtes ChatGPT-Bild trotzdem?',
      a: 'Metadatenbasierte Labels brauchen Metadaten, eine bereinigte Kopie löst also seltener eines aus. Plattformen können aber andere Signale nutzen, und ihre Regeln können verlangen, dass Sie KI-Inhalte selbst kennzeichnen.',
    },
    {
      q: 'Werden meine Bilder beim Prüfen oder Bereinigen hochgeladen?',
      a: 'Nein. Alles läuft in Ihrem Browser, und die Bilder verlassen Ihr Gerät nicht.',
    },
  ],
};

export default article;
