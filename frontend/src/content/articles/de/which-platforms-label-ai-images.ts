import type { Article } from '../types';

const article: Article = {
  title: 'Welche Plattformen kennzeichnen KI-Bilder? Instagram, Facebook, TikTok, YouTube & Co.',
  summary: [
    'Große Plattformen zeigen zunehmend Labels wie „KI-Info“ bei Bildern und Videos. Die meisten lesen dieselben branchenüblichen Hinweise in der Datei aus – C2PA Content Credentials und IPTC-Metadaten – und kombinieren sie mit den Angaben der Ersteller.',
    'So funktioniert die KI-Kennzeichnung bei den großen Plattformen im Allgemeinen, das löst sie aus, und das bedeutet sie für echte Fotos, die nur leicht bearbeitet wurden.',
  ],
  seoTitle: 'KI-Kennzeichnung: Welche Plattformen markieren KI-Bilder?',
  description:
    'Wie Instagram, Facebook, Threads, TikTok, YouTube, Pinterest und LinkedIn KI-Bilder kennzeichnen, welche Metadaten das auslösen und was das für bearbeitete Fotos heißt.',
  answer:
    'Instagram, Facebook und Threads („KI-Info“), TikTok, YouTube und Pinterest kennzeichnen KI-Inhalte, LinkedIn zeigt ein Content-Credentials-Symbol. Die meisten automatischen Labels werden durch C2PA Content Credentials oder das IPTC-Feld DigitalSourceType in der hochgeladenen Datei ausgelöst, kombiniert mit den Angaben der Ersteller. Schon eine kleine generative Bearbeitung kann bei einem ansonsten echten Foto ein Label auslösen.',
  sections: [
    {
      heading: 'KI-Labels je Plattform im Überblick',
      paragraphs: ['Die Richtlinien ändern sich oft, doch im Großen und Ganzen sieht es so aus:'],
      table: {
        head: ['Plattform', 'Was Betrachter sehen', 'Wichtigste Auslöser'],
        rows: [
          ['Instagram, Facebook, Threads', 'Label „KI-Info“ (früher „Mit KI erstellt“)', 'C2PA, IPTC-Metadaten, KI-Schalter beim Posten'],
          ['TikTok', 'Label „KI-generiert“', 'Angabe der Ersteller, C2PA Content Credentials'],
          ['YouTube', 'Label für veränderte oder synthetische Inhalte', 'Angabe der Ersteller beim Hochladen'],
          ['Pinterest', 'Label für KI-veränderte Inhalte', 'Metadaten und eigene Klassifikatoren'],
          ['LinkedIn', 'Content-Credentials-Symbol „CR“', 'C2PA-Daten im Bild'],
        ],
      },
    },
    {
      heading: 'Auf diese Hinweise stützen sich die Plattformen',
      paragraphs: ['Automatische Labels beruhen meist auf einer kleinen Zahl gemeinsamer Hinweise:'],
      bullets: [
        'C2PA Content Credentials, die eine KI-Generierung oder KI-Bearbeitung angeben.',
        'Das IPTC-Feld DigitalSourceType, zum Beispiel trainedAlgorithmicMedia oder compositeWithTrainedAlgorithmicMedia.',
        'Unsichtbare Wasserzeichen mancher KI-Anbieter, sofern die Plattform einen passenden Detektor hat.',
        'Selbstauskunft der Ersteller – ein Schalter oder Kontrollkästchen beim Posten realistischer KI-Inhalte.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook und Threads (Meta)',
      paragraphs: [
        'Meta zeigt ein Label „KI-Info“ (bis 2024 hieß es „Mit KI erstellt“), wenn es branchenübliche KI-Hinweise erkennt oder ein Ersteller KI-Inhalte angibt. Nachdem sich Fotografen beschwert hatten, dass leicht retuschierte Fotos gekennzeichnet wurden, verschob Meta das Label für KI-bearbeitete Inhalte ins Menü des Beitrags; weitgehend generierte Inhalte werden dagegen deutlicher gekennzeichnet.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTok verlangt von Erstellern, realistische KI-generierte Inhalte zu kennzeichnen, und hat erklärt, Inhalte automatisch zu labeln, die mit C2PA Content Credentials eintreffen, die sie als KI-generiert ausweisen. Zudem versieht TikTok manche Inhalte, die mit den eigenen KI-Effekten erstellt wurden, mit Content Credentials.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTube bittet Ersteller, beim Hochladen realistische veränderte oder synthetische Inhalte anzugeben, und zeigt den Zuschauern ein Label – bei sensiblen Themen deutlicher. Außerdem unterstützt YouTube C2PA für den umgekehrten Fall: einen Hinweis „mit einer Kamera aufgenommen“ für Inhalte mit authentischen Aufnahmenachweisen.',
      ],
    },
    {
      heading: 'Pinterest und LinkedIn',
      paragraphs: [
        'Pinterest kennzeichnet Bilder, die es anhand von Metadaten und eigenen Klassifikatoren als KI-generiert oder KI-verändert erkennt. LinkedIn zeigt bei Bildern mit C2PA-Daten ein Content-Credentials-Symbol an, über das Betrachter Quelle und Bearbeitungen einsehen können.',
        'Die Richtlinien aller Plattformen ändern sich häufig. Prüfen Sie daher das aktuelle Hilfe-Center der Plattform, bevor Sie sich auf ein bestimmtes Verhalten verlassen.',
      ],
    },
    {
      heading: 'Warum echte Fotos gekennzeichnet werden',
      paragraphs: [
        'Eine einzige KI-gestützte Bearbeitung – ein Objekt mit einem generativen Werkzeug entfernen, einen Hintergrund erweitern oder auf dem Smartphone einen KI-Radierer nutzen – kann das ganze Foto in seinen Metadaten als KI-Komposit ausweisen. Plattformen lesen diese Angabe aus, ohne zu bewerten, wie groß die Bearbeitung war.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'So prüfen Sie ein Foto vor dem Posten',
      paragraphs: [],
      steps: [
        'Ziehen Sie genau die Datei, die Sie hochladen möchten, in den Checker oben auf dieser Seite.',
        'Sehen Sie im Bereich „KI & Herkunft“ nach, welches Feld ein Label auslösen würde.',
        'Wäre das Label falsch, entfernen Sie die Metadaten aus einer Kopie und laden die bereinigte Kopie hoch.',
        'Ist das Bild weitgehend KI-generiert, kennzeichnen Sie es – Labels sollen das Publikum informieren.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Fragen zu KI-Labels in sozialen Netzwerken',
  faq: [
    {
      q: 'Warum bekommt mein Foto ein KI-Label, obwohl ich nur ein kleines Objekt entfernt habe?',
      a: 'Viele Bildbearbeitungen vermerken generative Bearbeitungen in C2PA- oder IPTC-Metadaten als „Komposit mit KI“. Plattformen lesen diese Angabe aus, ohne zu bewerten, wie groß die Bearbeitung war.',
    },
    {
      q: 'Behalten Plattformen die Metadaten nach dem Posten?',
      a: 'Die meisten Plattformen lesen die Metadaten beim Hochladen aus und entfernen sie dann aus der veröffentlichten Kopie. Wenn Sie Ihren eigenen Beitrag herunterladen, sehen Sie die Originalfelder daher nur selten.',
    },
    {
      q: 'Entgeht ein bereinigtes Bild jedem Label?',
      a: 'Nicht unbedingt. Die Bereinigung entfernt die in der Datei gespeicherten Hinweise, Plattformen können aber auch Wasserzeichenerkennung und Klassifikatoren nutzen oder Sie bitten, KI-Inhalte anzugeben.',
    },
    {
      q: 'Kennzeichnet X (Twitter) KI-Bilder?',
      a: 'X stützt sich vor allem auf seine Richtlinie zu synthetischen und manipulierten Medien sowie auf Community Notes statt auf ein automatisches, metadatenbasiertes Label. Details finden Sie in der aktuellen Richtlinie.',
    },
    {
      q: 'Muss ich KI-Bilder kennzeichnen?',
      a: 'Die meisten Plattformen verlangen eine Kennzeichnung realistischer KI-generierter Inhalte, besonders wenn sie Personen oder reale Ereignisse zeigen. Die Regeln unterscheiden sich – prüfen Sie die Richtlinie der jeweiligen Plattform.',
    },
    {
      q: 'Kann ich prüfen, ob mein Bild gekennzeichnet wird?',
      a: 'Ja. Ziehen Sie es in den Checker: Meldet er C2PA oder einen KI-DigitalSourceType, wird es von Plattformen, die diese Hinweise auslesen, wahrscheinlich gekennzeichnet.',
    },
  ],
};

export default article;
