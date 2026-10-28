import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Gratis værktøjer til billedmetadata',
    description:
      'Gratis værktøjer i browseren til at se, analysere og fjerne billedmetadata: EXIF-viser, privatlivstjek, metadatastørrelse samt fjernelse af EXIF, GPS og C2PA.',
    intro:
      'Alle værktøjer kører i din browser med den samme motor: dine billeder uploades aldrig, og intet komprimeres igen. Vælg det, du har brug for – kig ind i et foto, tjek hvad det afslører, eller rens det.',
  },
  cards: {
    cleaner: { name: 'Fjern billedmetadata', text: 'Fjern EXIF, GPS, XMP, IPTC, C2PA og AI-prompts med ét klik uden kvalitetstab.' },
    'view-metadata': { name: 'Vis metadata', text: 'Se alle skjulte felter i et foto: kamera, dato, GPS, XMP, C2PA og AI-prompts.' },
    'privacy-check': { name: 'Privatlivstjek af fotos', text: 'Find ud af, hvad et foto afslører – placering på kortet, personoplysninger og tidspunkt.' },
    'metadata-size': { name: 'Metadatastørrelse', text: 'Mål, hvor mange bytes metadata en fil indeholder, og hvor risikable de er.' },
    'remove-exif': { name: 'Fjern EXIF', text: 'Slet kamera, dato og serienummer, men bevar retning og farver.' },
    'remove-gps': { name: 'Fjern GPS-placering', text: 'Fjern GPS-koordinater fra mobilfotos, før du deler dem.' },
    'remove-c2pa': { name: 'Fjern C2PA', text: 'Fjern Content Credentials-manifester (C2PA) fra JPG, PNG, WebP og HEIC.' },
    'remove-prompts': { name: 'Fjern AI-prompts', text: 'Fjern Stable Diffusion-parametre og ComfyUI-workflows fra PNG-filer.' },
    batch: { name: 'Masserensning', text: 'Rens op til 50 billeder ad gangen, og download dem som én ZIP-fil.' },
  },
  groups: {
    inspect: { title: 'Tjek dine billeder', text: 'Se, hvad et billede afslører, før du deler det — filen bliver kun læst, aldrig ændret.' },
    remove: { title: 'Fjern metadata efter behov', text: 'Vælg et format eller en opgave — hver guide har renseren indbygget.' },
  },
  tools: {
    'view-metadata': {
      title: 'Vis billedmetadata online – EXIF, XMP, C2PA',
      description:
        'Gratis metadataviser: se EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) og AI-prompts i JPG, PNG, WebP og HEIC i browseren – uden upload.',
      intro:
        'Slip et foto her for at se alle de skjulte oplysninger, det indeholder – kamera og objektiv, optagelsesdato, GPS-position, redigeringsprogram, Content Credentials og AI-prompts – grupperet efter kilde. Intet ændres eller uploades.',
      steps: [
        'Slip et eller flere billeder i feltet ovenfor, eller tryk på “Vælg billeder”.',
        'Åbn en fil for at se privatlivsoversigten, AI-signalerne og alle metadatafelter.',
        'Søg i felterne, og beslut, om filen skal beholdes, som den er, eller metadata fjernes.',
      ],
      faq: [
        {
          q: 'Ændrer visning af metadata min fil?',
          a: 'Nej. Filen læses kun. Brug renseværktøjet til at fjerne metadata – dine billeder forbliver indlæst, så du ikke skal tilføje dem igen.',
        },
        {
          q: 'Hvilke metadata kan jeg se?',
          a: 'EXIF (inklusive GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG-tekstchunks med prompts eller ComfyUI-workflows samt filstrukturens blokke.',
        },
        {
          q: 'Bliver mine fotos uploadet?',
          a: 'Nej. Din browser læser filerne, og de forlader aldrig din enhed.',
        },
      ],
    },
    'privacy-check': {
      title: 'Privatlivstjek af fotos – find GPS og personoplysninger',
      description:
        'Tjek, hvad et foto afslører, før du deler det: GPS-placering, der kan åbnes på et kort, ophavsperson, serienummer, tidspunkt og AI-data. Gratis, uden upload.',
      intro:
        'Find ud af, hvad et foto røber, før du deler det. Tjekket viser, om det indeholder en GPS-placering (og hvor den peger hen), personoplysninger som ophavsperson eller enhedens serienummer, optagelsestidspunkt og AI-oprindelsesdata – med et enkelt risikoniveau.',
      steps: [
        'Slip de fotos, du vil dele, i feltet ovenfor.',
        'Læs risikoniveauet og de fundne placerings-, person- og tidsoplysninger i hver fil.',
        'Hvis der findes en GPS-position, kan du åbne den på kortet og se præcis, hvad andre kan se – og derefter fjerne den.',
      ],
      faq: [
        {
          q: 'Hvordan fastsættes risikoniveauet?',
          a: 'Høj betyder, at fotoet indeholder en placering. Middel betyder person-, tids- eller AI-oplysninger uden placering. Lav betyder, at intet af dette blev fundet i metadata.',
        },
        {
          q: 'Indlæses kortet automatisk?',
          a: 'Nej. Koordinaterne vises som tekst. OpenStreetMap åbnes kun i en ny fane, hvis du klikker på knappen; ellers forlader placeringen aldrig din enhed.',
        },
        {
          q: 'Kan et foto afsløre min placering uden GPS?',
          a: 'Metadata er kun én kilde. Det, der ses på billedet – skilte, vartegn, spejlinger – kan også afsløre et sted, og det kan dette tjek ikke opdage.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metadatastørrelse – hvor meget metadata er der i et foto?',
      description:
        'Mål, hvor meget metadata et billede indeholder: samlede bytes, andel af filen, de største EXIF-, XMP-, C2PA- eller promptblokke og en privatlivsrisiko. Gratis, uden upload.',
      intro:
        'Se, hvor stor en del af en fil der er metadata i stedet for billede. Værktøjet viser hver metadatablok efter størrelse – EXIF, XMP, C2PA, indlejrede forhåndsvisninger, AI-prompts og workflows – med andelen af filen og en vurdering af privatlivsrisikoen.',
      steps: [
        'Slip et eller flere billeder i feltet ovenfor.',
        'Sammenlign metadatastørrelse og andel i hver fil, blok for blok.',
        'Fjern metadata, så filerne bliver mindre og mere sikre at dele.',
      ],
      faq: [
        {
          q: 'Hvorfor indeholder nogle filer så meget metadata?',
          a: 'Indlejrede forhåndsvisninger, C2PA-manifester med miniaturer og ComfyUI-workflows kan tilføje titusinder eller hundredtusinder af bytes, mens grundlæggende EXIF typisk kun fylder få kilobyte.',
        },
        {
          q: 'Hvorfor er farveprofilen markeret som bevaret?',
          a: 'ICC-farveprofilen er nødvendig for at vise farver korrekt, så renseværktøjet bevarer den. Den tælles ikke med i metadatatotalen.',
        },
        {
          q: 'Ændrer fjernelse af metadata billedet?',
          a: 'Nej. Kun metadatablokke fjernes; billeddata kopieres uændret, så filen bliver mindre uden kvalitetstab.',
        },
      ],
    },
  },
};

export default tools;
