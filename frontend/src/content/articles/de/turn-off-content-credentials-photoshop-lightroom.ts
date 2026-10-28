import type { Article } from '../types';

const article: Article = {
  title: 'Content Credentials in Photoshop und Lightroom steuern (und Exporte bereinigen)',
  summary: [
    'Adobe-Apps können exportierten Bildern Content Credentials anhängen – einen signierten Nachweis der Bearbeitungen, einschließlich aller genutzten generativen KI-Funktionen. Das hilft, die eigene Arbeit zu belegen, kann aber auch KI-Labels bei Fotos auslösen, die nur retuschiert wurden.',
    'Hier erfahren Sie, woher Content Credentials in Photoshop und Lightroom stammen, wie Sie prüfen, ob ein Export sie enthält, und wie Sie sie bei Bedarf aus einer Kopie entfernen.',
  ],
  seoTitle: 'Content Credentials in Photoshop & Lightroom deaktivieren',
  description:
    'Woher Content Credentials in Photoshop und Lightroom stammen, wie Sie sie abschalten, Exporte auf C2PA prüfen und C2PA verlustfrei aus einer Kopie entfernen.',
  answer:
    'Photoshop und Lightroom hängen Exporten Content Credentials (C2PA) an, wenn Sie diese aktivieren, und Adobe versieht auch Inhalte, die mit generativen KI-Funktionen wie Generativem Füllen erstellt wurden, damit. Das Abschalten der Einstellung verhindert Nachweise bei generativen Bearbeitungen unter Umständen nicht – prüfen Sie daher jeden Export: Enthält er einen unerwünschten C2PA-Block, entfernen Sie ihn vor dem Veröffentlichen mit einem verlustfreien Cleaner aus einer Kopie.',
  sections: [
    {
      heading: 'Woher Content Credentials in Adobe-Apps stammen',
      paragraphs: ['Exporte können aus zwei verschiedenen Gründen Content Credentials enthalten:'],
      bullets: [
        'Sie haben Content Credentials (in der deutschen Oberfläche „Inhaltsnachweise“) selbst aktiviert, daher hängt die App beim Export Ihre Identität und den Bearbeitungsverlauf an.',
        'Sie haben eine generative KI-Funktion wie Generatives Füllen oder Generatives Erweitern genutzt – Adobe versieht Inhalte, die mit seinen generativen Funktionen erstellt wurden, mit Content Credentials und beschreibt sie als KI-bearbeitet.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Warum das vor dem Posten wichtig ist',
      paragraphs: [
        'Plattformen wie Instagram, Facebook, Threads und TikTok lesen Content Credentials beim Hochladen aus. Ein Foto mit einer einzigen generativen Bearbeitung kann als KI-Inhalt gekennzeichnet werden, selbst wenn der Rest des Bildes ein echtes Foto ist.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'So deaktivieren Sie Content Credentials in Photoshop und Lightroom',
      paragraphs: [
        'Adobe führt Content Credentials schrittweise in seinen Apps ein, und die Einstellungen wandern von Version zu Version. In aktuellen Versionen gilt:',
      ],
      bullets: [
        'Photoshop: Suchen Sie das Bedienfeld für Content Credentials (im Menü „Fenster“) und die Content-Credentials-Optionen im Exportdialog.',
        'Lightroom Classic und Lightroom: Suchen Sie in den Exporteinstellungen nach einem Abschnitt zu Content Credentials.',
        'Prüfen Sie Adobes Hilfeseiten für Ihre genaue Version – Bezeichnungen und Positionen ändern sich.',
      ],
    },
    {
      heading: 'Abschalten reicht unter Umständen nicht',
      paragraphs: [
        'Adobe versieht generative KI-Inhalte unabhängig von Ihrer persönlichen Einstellung mit Nachweisen. Ein Export, bei dem Generatives Füllen zum Einsatz kam, kann daher trotzdem ein Manifest enthalten. Prüfen Sie immer die exportierte Datei, statt sich allein auf die Einstellung zu verlassen.',
      ],
    },
    {
      heading: 'So prüfen Sie einen Export auf Content Credentials',
      paragraphs: [],
      steps: [
        'Ziehen Sie das exportierte JPEG, PNG oder eine andere Datei in das Tool oben auf dieser Seite.',
        'Suchen Sie unter „KI & Herkunft“ nach einem C2PA-Block, dem Claim Generator (zum Beispiel Adobe Photoshop), c2pa.*-Aktionen und einem Quelltyp für KI-Komposite.',
        'Taucht einer dieser Punkte auf, können Plattformen, die Content Credentials auslesen, das Bild kennzeichnen.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'So entfernen Sie Content Credentials aus einer Kopie',
      paragraphs: [],
      steps: [
        'Bewahren Sie den Originalexport samt Nachweisen als Archiv auf.',
        'Ziehen Sie eine Kopie in das Tool und klicken Sie auf „KI-Metadaten entfernen“. Das Manifest wird auf Byte-Ebene herausgeschnitten; Pixel, Abmessungen, Ausrichtung und Farbprofil bleiben erhalten.',
        'Prüfen Sie im Ergebnisbereich, dass kein C2PA-Block übrig ist, und laden Sie die saubere Datei für Ihr Kundenportal, Ihren Marktplatz oder Ihr soziales Netzwerk herunter.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Das Original als Nachweis behalten',
      paragraphs: [
        'Content Credentials können ein wertvoller Beleg für Urheberschaft und für die Art der Bearbeitung sein. Archivieren Sie den Originalexport mit seinen Nachweisen und teilen Sie bereinigte Kopien nur dort, wo die Metadaten irreführend wären oder mehr verraten würden, als Sie möchten.',
      ],
    },
  ],
  faqHeading: 'Fragen zu Content Credentials in Adobe-Apps',
  faq: [
    {
      q: 'Werden generative Bearbeitungen auch dann aufgezeichnet, wenn ich Content Credentials abschalte?',
      a: 'Möglicherweise ja. Adobe versieht generative KI-Inhalte mit Nachweisen – prüfen Sie daher immer die exportierte Datei, statt sich allein auf die Einstellung zu verlassen.',
    },
    {
      q: 'Warum kennzeichnet Instagram meine Photoshop-Bearbeitung als KI?',
      a: 'Generative Funktionen vermerken in den Content Credentials oder im XMP des Exports eine Angabe als KI-Komposit, und Meta liest diese Angabe beim Hochladen aus.',
    },
    {
      q: 'Macht das Entfernen der Nachweise meine Bearbeitungen rückgängig?',
      a: 'Nein. Es wird nur der Metadatenblock entfernt; die bearbeiteten Pixel werden unverändert kopiert.',
    },
    {
      q: 'Kann ich die Nachweise später wieder hinzufügen?',
      a: 'Nicht zur bereinigten Kopie, aber Sie können aus der Originaldatei erneut mit aktivierten Content Credentials exportieren.',
    },
    {
      q: 'Entfernt „Für Web speichern“ die Content Credentials?',
      a: 'Es kann einen Großteil der Metadaten verwerfen, das Verhalten hängt aber von Version und Einstellungen ab, und das Bild wird neu komprimiert. Prüfen Sie das Ergebnis oder bereinigen Sie stattdessen den Originalexport verlustfrei.',
    },
    {
      q: 'Kann ich ein ganzes Shooting auf einmal bereinigen?',
      a: 'Ja. Ziehen Sie bis zu 50 Exporte hinein, bereinigen Sie sie mit einem Klick und laden Sie eine ZIP-Datei herunter.',
    },
  ],
};

export default article;
