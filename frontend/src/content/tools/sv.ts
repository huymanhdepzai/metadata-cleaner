import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Gratis verktyg för bildmetadata',
    description:
      'Gratis verktyg i webbläsaren för att visa, analysera och ta bort bildmetadata: EXIF-visare, integritetskontroll, metadatastorlek och borttagning av EXIF, GPS och C2PA.',
    intro:
      'Alla verktyg körs i din webbläsare med samma motor: dina bilder laddas aldrig upp och inget komprimeras om. Välj det du behöver – titta in i ett foto, kontrollera vad det avslöjar eller rensa det.',
  },
  cards: {
    cleaner: { name: 'Ta bort bildmetadata', text: 'Ta bort EXIF, GPS, XMP, IPTC, C2PA och AI-promptar med ett klick, utan kvalitetsförlust.' },
    'view-metadata': { name: 'Visa metadata', text: 'Se alla dolda fält i ett foto: kamera, datum, GPS, XMP, C2PA och AI-promptar.' },
    'privacy-check': { name: 'Integritetskontroll för foton', text: 'Ta reda på vad ett foto avslöjar – plats på kartan, personuppgifter och tidpunkt.' },
    'metadata-size': { name: 'Metadatastorlek', text: 'Mät hur många byte metadata en fil innehåller och hur riskabla de är.' },
    'remove-exif': { name: 'Ta bort EXIF', text: 'Radera kamera, datum och serienummer men behåll orientering och färger.' },
    'remove-gps': { name: 'Ta bort GPS-position', text: 'Ta bort GPS-koordinater från mobilfoton innan du delar dem.' },
    'remove-c2pa': { name: 'Ta bort C2PA', text: 'Ta bort Content Credentials-manifest (C2PA) från JPG, PNG, WebP och HEIC.' },
    'remove-prompts': { name: 'Ta bort AI-promptar', text: 'Ta bort Stable Diffusion-parametrar och ComfyUI-arbetsflöden från PNG-filer.' },
    batch: { name: 'Massrensning', text: 'Rensa upp till 50 bilder åt gången och ladda ner dem som en ZIP-fil.' },
  },
  groups: {
    inspect: { title: 'Kontrollera dina bilder', text: 'Se vad en bild avslöjar innan du delar den — filen läses bara, den ändras aldrig.' },
    remove: { title: 'Ta bort metadata efter behov', text: 'Välj ett format eller en uppgift — varje guide har rensaren inbyggd.' },
  },
  tools: {
    'view-metadata': {
      title: 'Visa bildmetadata online – EXIF, XMP, C2PA',
      description:
        'Gratis metadatavisare: se EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) och AI-promptar i JPG, PNG, WebP och HEIC i webbläsaren, utan uppladdning.',
      intro:
        'Släpp ett foto här för att se all dold information det innehåller – kamera och objektiv, datum, GPS-position, redigeringsprogram, Content Credentials och AI-promptar – grupperat efter källa. Inget ändras och inget laddas upp.',
      steps: [
        'Släpp en eller flera bilder i rutan ovan eller tryck på ”Välj bilder”.',
        'Öppna en fil för att se integritetssammanfattningen, AI-signalerna och alla metadatafält.',
        'Sök bland fälten och bestäm om du vill behålla filen som den är eller ta bort metadata.',
      ],
      faq: [
        {
          q: 'Ändras min fil när jag visar metadata?',
          a: 'Nej. Filen läses bara. Använd rensningsverktyget för att ta bort metadata – bilderna ligger kvar så att du inte behöver lägga till dem igen.',
        },
        {
          q: 'Vilken metadata kan jag se?',
          a: 'EXIF (inklusive GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG-textchunkar med promptar eller ComfyUI-arbetsflöden samt blocken i filstrukturen.',
        },
        {
          q: 'Laddas mina foton upp?',
          a: 'Nej. Webbläsaren läser filerna och de lämnar aldrig din enhet.',
        },
      ],
    },
    'privacy-check': {
      title: 'Integritetskontroll för foton – hitta GPS och personuppgifter',
      description:
        'Kontrollera vad ett foto avslöjar innan du delar det: GPS-position att öppna på karta, upphovsperson, serienummer, tidpunkt och AI-data. Gratis, utan uppladdning.',
      intro:
        'Ta reda på vad ett foto lämnar ut innan du publicerar det. Kontrollen visar om det innehåller en GPS-position (och vart den pekar), personuppgifter som upphovsperson eller enhetens serienummer, tidpunkt och AI-ursprungsdata – med en enkel risknivå.',
      steps: [
        'Släpp fotona du tänker dela i rutan ovan.',
        'Läs risknivån och de plats-, person- och tidsuppgifter som hittades i varje fil.',
        'Om en GPS-position hittas kan du öppna den på kartan och se exakt vad andra kan se – och sedan ta bort den.',
      ],
      faq: [
        {
          q: 'Hur bestäms risknivån?',
          a: 'Hög betyder att fotot innehåller en plats. Medel betyder person-, tids- eller AI-information utan plats. Låg betyder att inget av detta hittades i metadata.',
        },
        {
          q: 'Laddas kartan automatiskt?',
          a: 'Nej. Koordinaterna visas som text. OpenStreetMap öppnas i en ny flik bara om du klickar på knappen; annars lämnar platsen aldrig din enhet.',
        },
        {
          q: 'Kan ett foto avslöja var jag är utan GPS?',
          a: 'Metadata är bara en källa. Det som syns i bilden – skyltar, landmärken, reflexer – kan också avslöja en plats, och det kan den här kontrollen inte upptäcka.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metadatastorlek – hur mycket metadata finns i ett foto?',
      description:
        'Mät hur mycket metadata en bild innehåller: totalt antal byte, de största EXIF-, C2PA- eller promptblocken och en integritetsrisk. Gratis, utan uppladdning.',
      intro:
        'Se hur stor del av en fil som är metadata i stället för bild. Verktyget listar varje metadatablock efter storlek – EXIF, XMP, C2PA, inbäddade förhandsvisningar, AI-promptar och arbetsflöden – visar andelen av filen och bedömer integritetsrisken.',
      steps: [
        'Släpp en eller flera bilder i rutan ovan.',
        'Jämför metadatastorlek och andel i varje fil, block för block.',
        'Ta bort metadata så att filerna blir mindre och säkrare att dela.',
      ],
      faq: [
        {
          q: 'Varför innehåller vissa filer så mycket metadata?',
          a: 'Inbäddade förhandsvisningar, C2PA-manifest med miniatyrer och ComfyUI-arbetsflöden kan lägga till tiotals eller hundratals kilobyte, medan grundläggande EXIF oftast bara är några få.',
        },
        {
          q: 'Varför är färgprofilen markerad som behållen?',
          a: 'ICC-färgprofilen behövs för att visa färger korrekt, så rensningsverktyget behåller den. Den räknas inte in i metadatatotalen.',
        },
        {
          q: 'Ändras bilden när metadata tas bort?',
          a: 'Nej. Bara metadatablock tas bort; bilddata kopieras oförändrade, så filen blir mindre utan kvalitetsförlust.',
        },
      ],
    },
  },
};

export default tools;
