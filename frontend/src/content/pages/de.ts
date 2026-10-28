import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Über All Metadata Cleaner',
    description:
      'All Metadata Cleaner ist ein kostenloses, datenschutzfreundliches Tool, das EXIF, GPS, XMP, IPTC, C2PA und KI-Prompts in Bildern direkt im Browser anzeigt und entfernt.',
    intro:
      'All Metadata Cleaner ist ein kostenloses Web-Tool, mit dem Sie versteckte Informationen in Bilddateien ansehen und entfernen können – EXIF und GPS-Standort, XMP, IPTC, C2PA Content Credentials sowie die Prompts oder Workflows, die KI-Generatoren einbetten.',
    sections: [
      {
        heading: 'Warum wir es entwickelt haben',
        paragraphs: [
          'Fotos und KI-Bilder enthalten oft mehr, als man denkt: wo ein Foto aufgenommen wurde, mit welchem Gerät, wer es bearbeitet hat oder den genauen Prompt hinter einem KI-Bild. Die meisten Metadaten-Entferner laden Ihre Dateien auf einen Server hoch oder komprimieren sie neu. Wir wollten ein Tool, das beides nicht tut.',
        ],
      },
      {
        heading: 'So funktioniert es',
        paragraphs: ['Alles geschieht auf Ihrem eigenen Gerät:'],
        bullets: [
          'Ihr Browser liest jede Datei und analysiert ihre Struktur – JPEG-Segmente, PNG-Chunks sowie WebP- und HEIC/AVIF-Boxen.',
          'Metadatenblöcke werden auf Byte-Ebene entfernt; die Bilddaten werden unverändert kopiert, die Qualität bleibt identisch.',
          'Jede bereinigte Datei wird erneut analysiert, damit Sie prüfen können, was entfernt wurde.',
        ],
      },
      {
        heading: 'Unsere Grundsätze',
        paragraphs: ['Einige Regeln leiten jede unserer Entscheidungen:'],
        bullets: [
          'Datenschutz zuerst: Bilder werden nie hochgeladen, gespeichert oder von uns gesehen.',
          'Ehrlichkeit: Wir erklären, was das Tool nicht kann, etwa unsichtbare Wasserzeichen in den Pixeln entfernen.',
          'Kostenlos, ohne Konto, ohne Wasserzeichen und ohne Werbung.',
        ],
      },
      {
        heading: 'Für wen es gedacht ist',
        paragraphs: [
          'Für alle, die Bilder teilen: Menschen, die vor dem Posten ihren Standort schützen möchten, Fotografen, die Kundenaufträge liefern, Kreative, die ihre Prompts privat halten, und alle, deren echtes Foto fälschlich als KI gekennzeichnet wurde. Wir bitten alle, die Regeln der Plattformen zur Kennzeichnung KI-generierter Inhalte einzuhalten.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    description:
      'Wie All Metadata Cleaner mit Ihren Daten umgeht: Bilder werden im Browser verarbeitet und nie hochgeladen. Keine Konten, kein Tracking, keine Werbung.',
    intro:
      'Diese Erklärung beschreibt, welche Daten All Metadata Cleaner bei der Nutzung der Website verarbeitet. Kurz gesagt: Ihre Bilder verlassen nie Ihr Gerät, und wir verfolgen Sie nicht.',
    sections: [
      {
        heading: 'Ihre Bilder bleiben auf Ihrem Gerät',
        paragraphs: [
          'Bilder, die Sie hinzufügen, werden von Ihrem eigenen Browser mit Web Workers gelesen und verarbeitet. Sie werden auf keinen Server hochgeladen, und wir empfangen, speichern oder sehen sie nie. Sie können nach dem Laden der Seite sogar die Internetverbindung trennen – das Tool funktioniert weiter.',
        ],
      },
      {
        heading: 'Was wir nicht erfassen',
        paragraphs: ['Die Website ist darauf ausgelegt, so wenig wie möglich zu erfassen:'],
        bullets: [
          'Es sind keine Konten, Registrierungen oder E-Mail-Adressen erforderlich.',
          'Es werden keine Analyse-, Werbe- oder Social-Media-Tracking-Skripte geladen und keine Schriftarten oder Skripte von Drittanbietern abgerufen.',
          'Informationen über Inhalt oder Metadaten Ihrer Bilder werden nirgendwohin gesendet.',
        ],
      },
      {
        heading: 'Im Browser gespeicherte Daten',
        paragraphs: ['Die Website merkt sich nur zwei Einstellungen, und zwar auf Ihrem Gerät:'],
        bullets: [
          'Ihre gewählte Sprache, gespeichert im lokalen Speicher und in einem eigenen Cookie, damit die Startseite in dieser Sprache öffnet.',
          'Ihr gewähltes Design (hell, dunkel oder System), gespeichert im lokalen Speicher.',
        ],
      },
      {
        heading: 'Hosting und Server-Logs',
        paragraphs: [
          'Die Website wird von unserem eigenen Server ausgeliefert. Wie jeder Webserver verarbeitet er übliche Anfragedaten wie Ihre IP-Adresse, den Browsertyp und die aufgerufene Seite, um die Website auszuliefern und vor Missbrauch zu schützen. Die Sprache Ihres Browsers kann zur Wahl einer Standardsprache genutzt werden. Wir verwenden diese Informationen nicht, um Sie zu identifizieren oder Profile zu erstellen.',
        ],
      },
      {
        heading: 'Änderungen dieser Erklärung',
        paragraphs: [
          'Ändert sich der Umgang der Website mit Daten, aktualisieren wir diese Seite und das Datum oben. Wenn Sie die Website nach einer Aktualisierung weiter nutzen, akzeptieren Sie die überarbeitete Erklärung.',
        ],
      },
    ],
  },
  terms: {
    title: 'Nutzungsbedingungen',
    description:
      'Nutzungsbedingungen von All Metadata Cleaner: ein kostenloses Tool ohne Gewähr, Ihre Verantwortung für die Nutzung bereinigter Bilder und die Grenzen unserer Haftung.',
    intro:
      'Mit der Nutzung von All Metadata Cleaner stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie zusammen mit dem Haftungsausschluss auf der Startseite und unserer Datenschutzerklärung.',
    sections: [
      {
        heading: 'Der Dienst',
        paragraphs: [
          'All Metadata Cleaner ist ein kostenloses Web-Tool, das Metadaten von Bilddateien auf Ihrem eigenen Gerät anzeigt und entfernt. Wir können jeden Teil davon jederzeit ohne Ankündigung ändern, verbessern oder einstellen.',
        ],
      },
      {
        heading: 'Zulässige Nutzung',
        paragraphs: ['Sie sind für die verarbeiteten Dateien und die Verwendung der Ergebnisse verantwortlich. Sie verpflichten sich, das Tool nicht zu nutzen, um:'],
        bullets: [
          'gegen Gesetze zu verstoßen oder Rechte anderer zu verletzen, einschließlich Urheber- und Persönlichkeitsrechten;',
          'KI-generierte Inhalte zu verbergen, wenn ein Gesetz oder eine Plattformregel eine Kennzeichnung verlangt;',
          'Urheberrechts-, Lizenz- oder Quellenangaben aus Bildern zu entfernen, die Ihnen nicht gehören oder die Sie nicht verändern dürfen.',
        ],
      },
      {
        heading: 'Keine Gewährleistung',
        paragraphs: [
          'Das Tool wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne ausdrückliche oder stillschweigende Gewährleistung. Wir garantieren nicht, dass es jede Art von Metadaten entfernt, dass die Ergebnisse fehlerfrei sind oder dass Plattformen bereinigte Bilder auf eine bestimmte Weise behandeln. Bewahren Sie immer eine Kopie Ihrer Originaldateien auf.',
        ],
      },
      {
        heading: 'Haftungsbeschränkung',
        paragraphs: [
          'Soweit gesetzlich zulässig, haften wir nicht für direkte, indirekte, zufällige oder Folgeschäden oder -verluste – einschließlich des Verlusts von Daten, Dateien oder Gewinnen –, die aus der Nutzung oder der Unmöglichkeit der Nutzung des Tools entstehen. Manche Rechtsordnungen erlauben bestimmte Beschränkungen nicht; dann gelten sie nur, soweit zulässig.',
        ],
      },
      {
        heading: 'Änderungen dieser Bedingungen',
        paragraphs: [
          'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum oben zeigt die aktuelle Fassung. Wenn Sie das Tool nach einer Änderung weiter nutzen, akzeptieren Sie die aktualisierten Bedingungen.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Kontaktieren Sie das Team von All Metadata Cleaner: Fehler melden, Funktionen vorschlagen oder Datenschutzfragen stellen. Wir lesen jede Nachricht und antworten so schnell wie möglich.',
    intro:
      'Fragen, Fehlermeldungen und Ideen sind willkommen. Schreiben Sie uns eine E-Mail, und wir melden uns so schnell wie möglich.',
    sections: [
      {
        heading: 'Worüber Sie uns schreiben können',
        paragraphs: ['Besonders freuen wir uns über:'],
        bullets: [
          'Fehler – eine Datei, die sich nicht bereinigen lässt, oder Metadaten, die nicht erkannt oder nicht entfernt werden.',
          'Funktionswünsche – neue Formate, Optionen oder Sprachen, die Sie sich wünschen.',
          'Fragen zum Datenschutz oder zu rechtlichen Aspekten der Website.',
        ],
      },
      {
        heading: 'Bevor Sie schreiben',
        paragraphs: [
          'Bitte senden Sie keine privaten Fotos. Wenn Sie ein Problem melden, nennen Sie uns das Dateiformat, die Kamera, das Smartphone oder die App, mit der die Datei erstellt wurde, Ihren Browser und was Sie erwartet haben. Falls zur Reproduktion eine Datei nötig ist, senden Sie eine ohne sensible Inhalte.',
        ],
      },
    ],
  },
};

export default pages;
