import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Om All Metadata Cleaner',
    description:
      'All Metadata Cleaner er et gratis, privatlivsvenligt værktøj, der viser og fjerner EXIF, GPS, XMP, IPTC, C2PA og AI-prompts fra billeder direkte i din browser.',
    intro:
      'All Metadata Cleaner er et gratis webværktøj til at se og fjerne skjulte oplysninger i billedfiler: EXIF og GPS-placering, XMP, IPTC, C2PA Content Credentials samt de prompts og workflows, som AI-generatorer indlejrer.',
    sections: [
      {
        heading: 'Hvorfor vi lavede det',
        paragraphs: [
          'Fotos og AI-billeder indeholder ofte mere, end man tror: hvor et foto blev taget, med hvilken enhed, hvem der redigerede det, eller den præcise prompt bag et AI-billede. De fleste værktøjer til at fjerne metadata uploader dine filer til en server eller komprimerer dem igen. Vi ville have et værktøj, der ikke gør nogen af delene.',
        ],
      },
      {
        heading: 'Sådan virker det',
        paragraphs: ['Alt foregår på din egen enhed:'],
        bullets: [
          'Browseren læser hver fil og analyserer dens struktur — JPEG-segmenter, PNG-chunks samt WebP- og HEIC/AVIF-bokse.',
          'Metadatablokke klippes ud på byteniveau; billeddata kopieres uændret, så kvaliteten forbliver identisk.',
          'Hver renset fil analyseres igen, så du kan kontrollere, hvad der blev fjernet.',
        ],
      },
      {
        heading: 'Vores principper',
        paragraphs: ['Nogle få regler styrer alle vores beslutninger:'],
        bullets: [
          'Privatliv først: billeder bliver aldrig uploadet, gemt eller set af os.',
          'Ærlighed: vi forklarer, hvad værktøjet ikke kan, fx fjerne usynlige vandmærker i pixels.',
          'Gratis, uden konto, uden vandmærke og uden reklamer.',
        ],
      },
      {
        heading: 'Hvem det er til',
        paragraphs: [
          'Alle, der deler billeder: folk, der vil beskytte deres placering, før de deler et foto, fotografer, der leverer opgaver til kunder, skabere, der holder deres prompts private, og alle, hvis ægte foto fejlagtigt er blevet mærket som AI. Vi beder alle følge platformenes regler om at oplyse om AI-genereret indhold.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privatlivspolitik',
    description:
      'Sådan behandler All Metadata Cleaner dine data: billeder behandles i din browser og uploades aldrig. Ingen konti, ingen sporing, ingen reklamer.',
    intro:
      'Denne politik forklarer, hvilke data All Metadata Cleaner behandler, når du bruger hjemmesiden. Kort sagt: dine billeder forlader aldrig din enhed, og vi sporer dig ikke.',
    sections: [
      {
        heading: 'Dine billeder bliver på din enhed',
        paragraphs: [
          'Billeder, du tilføjer, læses og behandles af din egen browser med Web Workers. De uploades ikke til nogen server, og vi modtager, gemmer eller ser dem aldrig. Du kan endda afbryde internetforbindelsen, når siden er indlæst, og værktøjet virker stadig.',
        ],
      },
      {
        heading: 'Hvad vi ikke indsamler',
        paragraphs: ['Hjemmesiden er designet til at indsamle så lidt som muligt:'],
        bullets: [
          'Der kræves ingen konti, tilmelding eller e-mailadresser.',
          'Der indlæses ingen scripts til analyse, annoncering eller sporing fra sociale medier, og der hentes ingen skrifttyper eller scripts fra tredjeparter.',
          'Der sendes ingen oplysninger om indholdet eller metadata i dine billeder nogen steder hen.',
        ],
      },
      {
        heading: 'Data gemt i din browser',
        paragraphs: ['Hjemmesiden husker kun to indstillinger, på din enhed:'],
        bullets: [
          'Dit valgte sprog, gemt i lokal lagring og i en førstepartscookie, så forsiden åbner på det sprog.',
          'Dit valgte tema (lyst, mørkt eller system), gemt i lokal lagring.',
        ],
      },
      {
        heading: 'Hosting og serverlogs',
        paragraphs: [
          'Hjemmesiden leveres fra vores egen server. Som enhver webserver behandler den almindelige anmodningsoplysninger som din IP-adresse, browsertype og den ønskede side for at levere hjemmesiden og beskytte den mod misbrug. Din browsers sprog kan bruges til at vælge et standardsprog. Vi bruger ikke oplysningerne til at identificere eller profilere dig.',
        ],
      },
      {
        heading: 'Ændringer af politikken',
        paragraphs: [
          'Hvis måden, hjemmesiden behandler data på, ændres, opdaterer vi denne side og datoen øverst. Hvis du fortsætter med at bruge hjemmesiden efter en opdatering, accepterer du den reviderede politik.',
        ],
      },
    ],
  },
  terms: {
    title: 'Brugsvilkår',
    description:
      'Brugsvilkår for All Metadata Cleaner: et gratis værktøj, der leveres som det er, dit ansvar for brugen af rensede billeder og grænserne for vores ansvar.',
    intro:
      'Ved at bruge All Metadata Cleaner accepterer du disse vilkår. Læs dem sammen med ansvarsfraskrivelsen på forsiden og vores privatlivspolitik.',
    sections: [
      {
        heading: 'Tjenesten',
        paragraphs: [
          'All Metadata Cleaner er et gratis webværktøj, der undersøger og fjerner metadata fra billedfiler på din egen enhed. Vi kan til enhver tid og uden varsel ændre, forbedre eller indstille enhver del af det.',
        ],
      },
      {
        heading: 'Tilladt brug',
        paragraphs: ['Du er ansvarlig for de filer, du behandler, og for hvordan du bruger resultaterne. Du accepterer ikke at bruge værktøjet til at:'],
        bullets: [
          'overtræde love eller krænke andres rettigheder, herunder ophavsret og ret til privatliv;',
          'skjule AI-genereret indhold, når en lov eller platformsregel kræver, at du oplyser om det;',
          'fjerne oplysninger om ophavsret, licens eller kreditering fra billeder, du ikke ejer eller ikke har ret til at ændre.',
        ],
      },
      {
        heading: 'Ingen garanti',
        paragraphs: [
          'Værktøjet leveres “som det er” og “som tilgængeligt”, uden nogen udtrykkelige eller underforståede garantier. Vi garanterer ikke, at det fjerner alle typer metadata, at resultaterne er fejlfri, eller at platforme behandler rensede billeder på en bestemt måde. Gem altid en kopi af dine originale filer.',
        ],
      },
      {
        heading: 'Ansvarsbegrænsning',
        paragraphs: [
          'I det omfang loven tillader det, er vi ikke ansvarlige for direkte, indirekte, hændelige eller følgetab eller -skader — herunder tab af data, filer eller fortjeneste — som følge af brug af eller manglende mulighed for at bruge værktøjet. Nogle jurisdiktioner tillader ikke visse begrænsninger; så gælder de kun i det tilladte omfang.',
        ],
      },
      {
        heading: 'Ændringer af vilkårene',
        paragraphs: [
          'Vi kan opdatere disse vilkår fra tid til anden. Datoen øverst viser den seneste version. Hvis du fortsætter med at bruge værktøjet efter en ændring, accepterer du de opdaterede vilkår.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt os',
    description:
      'Kontakt holdet bag All Metadata Cleaner: rapportér en fejl, foreslå en funktion eller stil et spørgsmål om privatliv. Vi læser alle beskeder og svarer hurtigst muligt.',
    intro:
      'Spørgsmål, fejlrapporter og idéer er velkomne. Skriv til os på e-mail, så vender vi tilbage hurtigst muligt.',
    sections: [
      {
        heading: 'Hvad du kan skrive til os om',
        paragraphs: ['Vi hører især gerne om:'],
        bullets: [
          'Fejl — en fil, der ikke kan renses, eller metadata, der ikke registreres eller ikke fjernes.',
          'Ønsker til funktioner — nye formater, indstillinger eller sprog, du gerne vil se.',
          'Spørgsmål om privatliv eller juridiske forhold vedrørende hjemmesiden.',
        ],
      },
      {
        heading: 'Før du skriver',
        paragraphs: [
          'Send venligst ikke private fotos. Når du rapporterer et problem, så fortæl os filformatet, det kamera, den telefon eller app, der skabte filen, din browser, og hvad du forventede. Hvis der skal bruges en fil til at genskabe problemet, så send en, der ikke indeholder noget følsomt.',
        ],
      },
    ],
  },
};

export default pages;
