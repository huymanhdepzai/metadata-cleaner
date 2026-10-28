import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Instrumente gratuite pentru metadatele imaginilor',
    description:
      'Instrumente gratuite în browser pentru a vedea, analiza și elimina metadatele imaginilor: vizualizator EXIF, verificare a confidențialității, mărimea metadatelor, eliminare EXIF, GPS și C2PA.',
    intro:
      'Toate instrumentele rulează în browser cu același motor: imaginile nu sunt încărcate niciodată și nimic nu este recomprimat. Alege ce îți trebuie — privește în interiorul unei fotografii, verifică ce dezvăluie sau curăț-o.',
  },
  cards: {
    cleaner: { name: 'Elimină metadatele', text: 'Elimină EXIF, GPS, XMP, IPTC, C2PA și prompturi AI cu un clic, fără pierderi de calitate.' },
    'view-metadata': { name: 'Vezi metadatele', text: 'Vezi toate câmpurile ascunse ale unei fotografii: cameră, dată, GPS, XMP, C2PA și prompturi AI.' },
    'privacy-check': { name: 'Verificarea confidențialității', text: 'Află ce dezvăluie o fotografie — locația pe hartă, date personale și ora fotografierii.' },
    'metadata-size': { name: 'Mărimea metadatelor', text: 'Măsoară câți octeți de metadate conține un fișier și cât de riscante sunt.' },
    'remove-exif': { name: 'Elimină EXIF', text: 'Șterge datele camerei, data și numărul de serie, păstrând orientarea și culorile.' },
    'remove-gps': { name: 'Elimină locația GPS', text: 'Scoate coordonatele GPS din fotografiile de pe telefon înainte de a le distribui.' },
    'remove-c2pa': { name: 'Elimină C2PA', text: 'Elimină manifestele Content Credentials (C2PA) din JPG, PNG, WebP și HEIC.' },
    'remove-prompts': { name: 'Elimină prompturile AI', text: 'Elimină parametrii Stable Diffusion și fluxurile ComfyUI din fișierele PNG.' },
    batch: { name: 'Curățare în lot', text: 'Curăță până la 50 de imagini deodată și descarcă-le într-un singur ZIP.' },
  },
  groups: {
    inspect: { title: 'Verifică-ți fotografiile', text: 'Vezi ce dezvăluie o imagine înainte s-o distribui — fișierul este doar citit, niciodată modificat.' },
    remove: { title: 'Elimină metadatele după nevoie', text: 'Alege un format sau o sarcină — fiecare ghid include instrumentul de curățare.' },
  },
  tools: {
    'view-metadata': {
      title: 'Vezi metadatele imaginilor online — EXIF, XMP, C2PA',
      description:
        'Vizualizator de metadate gratuit: vezi EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) și prompturi AI în JPG, PNG, WebP și HEIC direct în browser, fără încărcare.',
      intro:
        'Trage o fotografie aici ca să vezi toate informațiile ascunse din ea — camera și obiectivul, data fotografierii, poziția GPS, programul de editare, Content Credentials și prompturile AI — grupate după sursă. Nimic nu este modificat sau încărcat.',
      steps: [
        'Trage una sau mai multe imagini în caseta de mai sus sau atinge „Alege imagini”.',
        'Deschide un fișier ca să vezi rezumatul confidențialității, semnalele AI și lista completă de câmpuri.',
        'Caută în câmpuri, apoi decide dacă păstrezi fișierul așa cum este sau îi elimini metadatele.',
      ],
      faq: [
        {
          q: 'Vizualizarea metadatelor îmi modifică fișierul?',
          a: 'Nu. Fișierul este doar citit. Pentru a elimina metadatele folosește instrumentul de curățare — imaginile rămân încărcate, nu trebuie să le adaugi din nou.',
        },
        {
          q: 'Ce metadate pot vedea?',
          a: 'EXIF (inclusiv GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunk-uri de text PNG cu prompturi sau fluxuri ComfyUI și blocurile din structura fișierului.',
        },
        {
          q: 'Fotografiile mele sunt încărcate?',
          a: 'Nu. Browserul citește fișierele, care nu părăsesc niciodată dispozitivul tău.',
        },
      ],
    },
    'privacy-check': {
      title: 'Verificarea confidențialității foto — găsește GPS și date personale',
      description:
        'Verifică ce dezvăluie o fotografie înainte s-o distribui: locația GPS de deschis pe hartă, autorul, numărul de serie, ora fotografierii și datele AI. Gratuit, fără încărcare.',
      intro:
        'Află ce trădează o fotografie înainte s-o publici. Verificarea arată dacă are o locație GPS (și unde indică), date personale precum autorul sau numărul de serie al dispozitivului, ora fotografierii și date despre originea AI — cu un nivel de risc simplu.',
      steps: [
        'Trage în caseta de mai sus fotografiile pe care vrei să le distribui.',
        'Citește nivelul de risc și informațiile de locație, personale și de timp găsite în fiecare fișier.',
        'Dacă există o poziție GPS, deschide-o pe hartă ca să vezi exact ce ar vedea alții — apoi elimin-o.',
      ],
      faq: [
        {
          q: 'Cum se stabilește nivelul de risc?',
          a: 'Ridicat înseamnă că fotografia conține o locație. Mediu înseamnă date personale, de timp sau AI, dar fără locație. Scăzut înseamnă că nimic din acestea nu a fost găsit în metadate.',
        },
        {
          q: 'Harta se încarcă automat?',
          a: 'Nu. Coordonatele sunt afișate ca text. OpenStreetMap se deschide într-o filă nouă doar dacă dai clic pe buton; altfel locația nu părăsește niciodată dispozitivul.',
        },
        {
          q: 'Poate o fotografie să-mi dezvăluie locația fără GPS?',
          a: 'Metadatele sunt doar o sursă. Ce se vede în imagine — indicatoare, repere, reflexii — poate dezvălui și el un loc, iar această verificare nu poate detecta asta.',
        },
      ],
    },
    'metadata-size': {
      title: 'Mărimea metadatelor — câte metadate are o fotografie?',
      description:
        'Măsoară câte metadate conține o imagine: total octeți, ponderea în fișier, cele mai mari blocuri EXIF, XMP, C2PA sau de prompturi și riscul de confidențialitate. Gratuit, fără încărcare.',
      intro:
        'Vezi ce parte dintr-un fișier sunt metadate și nu imagine. Instrumentul listează fiecare bloc de metadate după mărime — EXIF, XMP, C2PA, previzualizări încorporate, prompturi și fluxuri AI —, arată ponderea în fișier și evaluează riscul de confidențialitate.',
      steps: [
        'Trage una sau mai multe imagini în caseta de mai sus.',
        'Compară mărimea metadatelor și ponderea lor în fiecare fișier, bloc cu bloc.',
        'Elimină metadatele ca fișierele să fie mai mici și mai sigure de distribuit.',
      ],
      faq: [
        {
          q: 'De ce unele fișiere au atât de multe metadate?',
          a: 'Previzualizările încorporate, manifestele C2PA cu miniaturi și fluxurile ComfyUI pot adăuga zeci sau sute de kilobytes, în timp ce EXIF-ul de bază are de obicei doar câțiva.',
        },
        {
          q: 'De ce profilul de culoare apare ca păstrat?',
          a: 'Profilul de culoare ICC este necesar pentru afișarea corectă a culorilor, așa că instrumentul de curățare îl păstrează. Nu este inclus în totalul metadatelor.',
        },
        {
          q: 'Eliminarea metadatelor modifică imaginea?',
          a: 'Nu. Sunt eliminate doar blocurile de metadate; datele imaginii sunt copiate neschimbate, așa că fișierul devine mai mic fără pierderi de calitate.',
        },
      ],
    },
  },
};

export default tools;
