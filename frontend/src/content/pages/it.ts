import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Chi siamo: All Metadata Cleaner',
    description:
      'All Metadata Cleaner è uno strumento gratuito e attento alla privacy per vedere e rimuovere EXIF, GPS, XMP, IPTC, C2PA e prompt IA dalle immagini, nel tuo browser.',
    intro:
      'All Metadata Cleaner è uno strumento web gratuito per vedere e rimuovere le informazioni nascoste nei file immagine: EXIF e posizione GPS, XMP, IPTC, Content Credentials (C2PA) e i prompt o i workflow che i generatori di IA incorporano.',
    sections: [
      {
        heading: 'Perché l’abbiamo creato',
        paragraphs: [
          'Foto e immagini IA contengono spesso più di quanto si pensi: dove è stata scattata una foto, con quale dispositivo, chi l’ha modificata o il prompt esatto di un’immagine IA. La maggior parte degli strumenti per rimuovere i metadati carica i file su un server o li ricomprime. Volevamo uno strumento che non facesse né l’una né l’altra cosa.',
        ],
      },
      {
        heading: 'Come funziona',
        paragraphs: ['Tutto avviene sul tuo dispositivo:'],
        bullets: [
          'Il browser legge ogni file e ne analizza la struttura: segmenti JPEG, chunk PNG e box WebP e HEIC/AVIF.',
          'I blocchi di metadati vengono rimossi a livello di byte; i dati dell’immagine sono copiati senza modifiche, quindi la qualità resta identica.',
          'Ogni file pulito viene analizzato di nuovo così puoi verificare cosa è stato rimosso.',
        ],
      },
      {
        heading: 'I nostri principi',
        paragraphs: ['Poche regole guidano ogni nostra decisione:'],
        bullets: [
          'Prima la privacy: le immagini non vengono mai caricate, salvate o viste da noi.',
          'Onestà: spieghiamo cosa lo strumento non può fare, come rimuovere le filigrane invisibili nei pixel.',
          'Gratuito, senza account, senza filigrana e senza pubblicità.',
        ],
      },
      {
        heading: 'A chi è rivolto',
        paragraphs: [
          'A chiunque condivida immagini: chi vuole proteggere la propria posizione prima di pubblicare una foto, fotografi che consegnano lavori ai clienti, creator che tengono privati i propri prompt e chi ha visto una foto reale etichettata per errore come IA. Chiediamo a tutti di rispettare le regole delle piattaforme sulla dichiarazione dei contenuti generati con IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Informativa sulla privacy',
    description:
      'Come All Metadata Cleaner tratta i tuoi dati: le immagini sono elaborate nel browser e mai caricate. Nessun account, nessun tracciamento, nessuna pubblicità.',
    intro:
      'Questa informativa spiega quali dati tratta All Metadata Cleaner quando usi il sito. In breve: le tue immagini non lasciano mai il tuo dispositivo e non ti tracciamo.',
    sections: [
      {
        heading: 'Le tue immagini restano sul tuo dispositivo',
        paragraphs: [
          'Le immagini che aggiungi vengono lette ed elaborate dal tuo browser tramite Web Worker. Non vengono caricate su alcun server e noi non le riceviamo, salviamo o vediamo mai. Puoi persino disconnetterti da internet dopo il caricamento della pagina e lo strumento continua a funzionare.',
        ],
      },
      {
        heading: 'Cosa non raccogliamo',
        paragraphs: ['Il sito è progettato per raccogliere il meno possibile:'],
        bullets: [
          'Non servono account, registrazioni o indirizzi email.',
          'Non vengono caricati script di analisi, pubblicità o tracciamento dei social network, né richiesti font o script di terze parti.',
          'Nessuna informazione sul contenuto o sui metadati delle tue immagini viene inviata altrove.',
        ],
      },
      {
        heading: 'Dati salvati nel browser',
        paragraphs: ['Il sito ricorda solo due preferenze, sul tuo dispositivo:'],
        bullets: [
          'La lingua scelta, salvata nella memoria locale e in un cookie proprietario così che la home page si apra in quella lingua.',
          'Il tema scelto (chiaro, scuro o di sistema), salvato nella memoria locale.',
        ],
      },
      {
        heading: 'Hosting e log del server',
        paragraphs: [
          'Il sito è distribuito dal nostro server. Come ogni server web, elabora le informazioni standard delle richieste, come indirizzo IP, tipo di browser e pagina richiesta, per distribuire il sito e proteggerlo dagli abusi. La lingua del tuo browser può essere usata per scegliere una lingua predefinita. Non usiamo queste informazioni per identificarti o profilarti.',
        ],
      },
      {
        heading: 'Modifiche a questa informativa',
        paragraphs: [
          'Se il modo in cui il sito tratta i dati cambia, aggiorneremo questa pagina e la data in alto. Continuare a usare il sito dopo un aggiornamento significa accettare l’informativa aggiornata.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termini di utilizzo',
    description:
      'Termini di utilizzo: uno strumento gratuito fornito così com’è, la tua responsabilità sull’uso delle immagini pulite e i limiti della nostra responsabilità.',
    intro:
      'Usando All Metadata Cleaner accetti questi termini. Leggili insieme all’esclusione di responsabilità nella home page e alla nostra Informativa sulla privacy.',
    sections: [
      {
        heading: 'Il servizio',
        paragraphs: [
          'All Metadata Cleaner è uno strumento web gratuito che analizza e rimuove i metadati dai file immagine sul tuo dispositivo. Possiamo modificarne, migliorarne o interromperne qualsiasi parte in qualsiasi momento e senza preavviso.',
        ],
      },
      {
        heading: 'Uso consentito',
        paragraphs: ['Sei responsabile dei file che elabori e dell’uso dei risultati. Ti impegni a non usare lo strumento per:'],
        bullets: [
          'violare leggi o diritti altrui, compresi il diritto d’autore e il diritto alla privacy;',
          'nascondere contenuti generati con IA quando una legge o una regola della piattaforma ti obbliga a dichiararli;',
          'rimuovere informazioni su copyright, licenza o crediti da immagini che non ti appartengono o che non hai il diritto di modificare.',
        ],
      },
      {
        heading: 'Nessuna garanzia',
        paragraphs: [
          'Lo strumento è fornito “così com’è” e “come disponibile”, senza garanzie di alcun tipo, espresse o implicite. Non garantiamo che rimuova ogni tipo di metadato, che i risultati siano privi di errori o che le piattaforme trattino le immagini pulite in un modo particolare. Conserva sempre una copia dei file originali.',
        ],
      },
      {
        heading: 'Limitazione di responsabilità',
        paragraphs: [
          'Nella misura massima consentita dalla legge, non siamo responsabili di perdite o danni diretti, indiretti, incidentali o consequenziali — inclusa la perdita di dati, file o profitti — derivanti dall’uso o dall’impossibilità di usare lo strumento. Alcuni ordinamenti non ammettono determinate limitazioni; in tal caso si applicano solo nei limiti consentiti.',
        ],
      },
      {
        heading: 'Modifiche a questi termini',
        paragraphs: [
          'Possiamo aggiornare questi termini di tanto in tanto. La data in alto indica la versione più recente. Continuare a usare lo strumento dopo una modifica significa accettare i termini aggiornati.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contattaci',
    description:
      'Contatta il team di All Metadata Cleaner: segnala un bug, suggerisci una funzione o fai una domanda sulla privacy. Leggiamo ogni messaggio e rispondiamo il prima possibile.',
    intro:
      'Domande, segnalazioni di bug e idee sono benvenute. Scrivici via email e ti risponderemo il prima possibile.',
    sections: [
      {
        heading: 'Per cosa puoi scriverci',
        paragraphs: ['Siamo particolarmente felici di ricevere:'],
        bullets: [
          'Bug: un file che non viene pulito, o metadati non rilevati o non rimossi.',
          'Richieste di funzionalità: nuovi formati, opzioni o lingue che vorresti vedere.',
          'Domande sulla privacy o su aspetti legali del sito.',
        ],
      },
      {
        heading: 'Prima di scrivere',
        paragraphs: [
          'Per favore non inviare foto private. Per segnalare un problema, indicaci il formato del file, la fotocamera, il telefono o l’app che l’ha creato, il tuo browser e cosa ti aspettavi. Se serve un file per riprodurre il problema, inviane uno che non contenga nulla di sensibile.',
        ],
      },
    ],
  },
};

export default pages;
