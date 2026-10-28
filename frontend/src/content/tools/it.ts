import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Strumenti gratuiti per i metadati delle immagini',
    description:
      'Strumenti gratuiti nel browser per vedere, analizzare e rimuovere i metadati delle immagini: visualizzatore EXIF, controllo privacy, peso dei metadati, rimozione EXIF, GPS e C2PA.',
    intro:
      'Tutti gli strumenti funzionano nel tuo browser con lo stesso motore: le immagini non vengono mai caricate e nulla viene ricompresso. Scegli ciò che ti serve: guardare dentro una foto, controllare cosa rivela o ripulirla.',
  },
  cards: {
    cleaner: { name: 'Rimuovi i metadati', text: 'Rimuovi EXIF, GPS, XMP, IPTC, C2PA e prompt IA con un clic, senza perdita di qualità.' },
    'view-metadata': { name: 'Vedi i metadati', text: 'Guarda tutti i campi nascosti di una foto: fotocamera, data, GPS, XMP, C2PA e prompt IA.' },
    'privacy-check': { name: 'Controllo privacy foto', text: 'Scopri cosa rivela una foto: posizione sulla mappa, dati personali e ora dello scatto.' },
    'metadata-size': { name: 'Peso dei metadati', text: 'Misura quanti byte di metadati contiene un file e quanto sono rischiosi.' },
    'remove-exif': { name: 'Rimuovi EXIF', text: 'Elimina fotocamera, data e numero di serie mantenendo orientamento e colori.' },
    'remove-gps': { name: 'Rimuovi la posizione GPS', text: 'Togli le coordinate GPS dalle foto dello smartphone prima di condividerle.' },
    'remove-c2pa': { name: 'Rimuovi C2PA', text: 'Rimuovi i manifest Content Credentials (C2PA) da JPG, PNG, WebP e HEIC.' },
    'remove-prompts': { name: 'Rimuovi i prompt IA', text: 'Rimuovi i parametri di Stable Diffusion e i workflow ComfyUI dai file PNG.' },
    batch: { name: 'Pulizia in blocco', text: 'Pulisci fino a 50 immagini alla volta e scaricale in un unico ZIP.' },
  },
  groups: {
    inspect: { title: 'Controlla le tue foto', text: 'Scopri cosa rivela un’immagine prima di condividerla: il file viene solo letto, mai modificato.' },
    remove: { title: 'Rimuovi i metadati in base all’esigenza', text: 'Scegli un formato o un’attività: ogni guida include lo strumento di pulizia.' },
  },
  tools: {
    'view-metadata': {
      title: 'Vedi i metadati delle immagini online — EXIF, XMP, C2PA',
      description:
        'Visualizzatore di metadati gratuito: vedi EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) e prompt IA di JPG, PNG, WebP e HEIC nel browser, senza caricare nulla.',
      intro:
        'Trascina una foto per vedere tutte le informazioni nascoste che contiene — fotocamera e obiettivo, data dello scatto, posizione GPS, software di modifica, Content Credentials e prompt IA — raggruppate per origine. Nulla viene modificato o caricato.',
      steps: [
        'Trascina una o più immagini nel riquadro qui sopra oppure tocca “Scegli immagini”.',
        'Apri un file per vedere il riepilogo privacy, i segnali IA e l’elenco completo dei campi.',
        'Cerca tra i campi e decidi se tenere il file così com’è o rimuoverne i metadati.',
      ],
      faq: [
        {
          q: 'Vedere i metadati modifica il mio file?',
          a: 'No. Il file viene solo letto. Per rimuovere i metadati usa il pulitore: le immagini restano caricate, non serve aggiungerle di nuovo.',
        },
        {
          q: 'Quali metadati posso vedere?',
          a: 'EXIF (incluso il GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunk di testo PNG con prompt o workflow ComfyUI e i blocchi della struttura del file.',
        },
        {
          q: 'Le mie foto vengono caricate?',
          a: 'No. Il browser legge i file, che non lasciano mai il tuo dispositivo.',
        },
      ],
    },
    'privacy-check': {
      title: 'Controllo privacy foto — trova GPS e dati personali',
      description:
        'Controlla cosa rivela una foto prima di condividerla: posizione GPS da aprire sulla mappa, autore, numero di serie, ora dello scatto e dati IA. Gratis, privato, senza caricamenti.',
      intro:
        'Scopri cosa svela una foto prima di pubblicarla. Il controllo mostra se contiene una posizione GPS (e dove punta), dati personali come autore o numero di serie del dispositivo, l’ora dello scatto e dati di provenienza IA, con un livello di rischio semplice.',
      steps: [
        'Trascina nel riquadro qui sopra le foto che intendi condividere.',
        'Leggi il livello di rischio e i dati di posizione, personali e orari trovati in ogni file.',
        'Se c’è una posizione GPS, aprila sulla mappa per vedere esattamente cosa vedrebbero gli altri, poi rimuovila.',
      ],
      faq: [
        {
          q: 'Come viene stabilito il livello di rischio?',
          a: 'Alto significa che la foto contiene una posizione. Medio, che contiene dati personali, orari o IA ma non la posizione. Basso, che nei metadati non è stato trovato nulla di tutto ciò.',
        },
        {
          q: 'La mappa si carica automaticamente?',
          a: 'No. Le coordinate sono mostrate come testo. OpenStreetMap si apre in una nuova scheda solo se fai clic sul pulsante; altrimenti la posizione non lascia mai il dispositivo.',
        },
        {
          q: 'Una foto può rivelare la mia posizione senza GPS?',
          a: 'I metadati sono solo una fonte. Ciò che si vede nell’immagine — cartelli, monumenti, riflessi — può rivelare un luogo, e questo controllo non può rilevarlo.',
        },
      ],
    },
    'metadata-size': {
      title: 'Peso dei metadati — quanti metadati ha una foto?',
      description:
        'Misura quanti metadati contiene un’immagine: byte totali, percentuale del file, i blocchi EXIF, XMP, C2PA o di prompt più grandi e il rischio privacy. Gratis, senza caricamenti.',
      intro:
        'Scopri quanta parte di un file è costituita da metadati anziché dall’immagine. Lo strumento elenca ogni blocco di metadati per dimensione — EXIF, XMP, C2PA, anteprime incorporate, prompt e workflow IA —, mostra la percentuale sul file e valuta il rischio per la privacy.',
      steps: [
        'Trascina una o più immagini nel riquadro qui sopra.',
        'Confronta il peso dei metadati e la loro percentuale in ogni file, blocco per blocco.',
        'Rimuovi i metadati per avere file più leggeri e più sicuri da condividere.',
      ],
      faq: [
        {
          q: 'Perché alcuni file contengono così tanti metadati?',
          a: 'Anteprime incorporate, manifest C2PA con miniature e workflow ComfyUI possono aggiungere decine o centinaia di kilobyte, mentre l’EXIF di base pesa di solito pochi KB.',
        },
        {
          q: 'Perché il profilo colore è indicato come mantenuto?',
          a: 'Il profilo colore ICC serve per mostrare correttamente i colori, quindi il pulitore lo conserva. Non viene conteggiato nel totale dei metadati.',
        },
        {
          q: 'Rimuovere i metadati modifica l’immagine?',
          a: 'No. Vengono rimossi solo i blocchi di metadati; i dati dell’immagine sono copiati senza modifiche, quindi il file si alleggerisce senza perdita di qualità.',
        },
      ],
    },
  },
};

export default tools;
