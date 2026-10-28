import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Om All Metadata Cleaner',
    description:
      'All Metadata Cleaner är ett gratis, integritetsvänligt verktyg som visar och tar bort EXIF, GPS, XMP, IPTC, C2PA och AI-promptar från bilder direkt i webbläsaren.',
    intro:
      'All Metadata Cleaner är ett gratis webbverktyg för att se och ta bort dold information i bildfiler: EXIF och GPS-position, XMP, IPTC, C2PA Content Credentials samt de promptar och arbetsflöden som AI-generatorer bäddar in.',
    sections: [
      {
        heading: 'Varför vi byggde det',
        paragraphs: [
          'Foton och AI-bilder innehåller ofta mer än man tror: var ett foto togs, med vilken enhet, vem som redigerade det eller den exakta prompten bakom en AI-bild. De flesta verktyg för att ta bort metadata laddar upp dina filer till en server eller komprimerar om dem. Vi ville ha ett verktyg som inte gör något av det.',
        ],
      },
      {
        heading: 'Så fungerar det',
        paragraphs: ['Allt sker på din egen enhet:'],
        bullets: [
          'Webbläsaren läser varje fil och analyserar dess struktur — JPEG-segment, PNG-chunkar samt WebP- och HEIC/AVIF-boxar.',
          'Metadatablock klipps bort på bytenivå; bilddata kopieras oförändrade, så kvaliteten förblir identisk.',
          'Varje rensad fil analyseras igen så att du kan kontrollera vad som togs bort.',
        ],
      },
      {
        heading: 'Våra principer',
        paragraphs: ['Några regler styr varje beslut vi fattar:'],
        bullets: [
          'Integritet först: bilder laddas aldrig upp, sparas eller ses av oss.',
          'Ärlighet: vi förklarar vad verktyget inte kan, till exempel ta bort osynliga vattenstämplar i pixlarna.',
          'Gratis, utan konto, utan vattenstämpel och utan annonser.',
        ],
      },
      {
        heading: 'Vem det är till för',
        paragraphs: [
          'Alla som delar bilder: personer som vill skydda sin position innan de publicerar ett foto, fotografer som levererar uppdrag till kunder, kreatörer som håller sina promptar privata och alla vars riktiga foto felaktigt märkts som AI. Vi ber alla att följa plattformarnas regler om att upplysa om AI-genererat innehåll.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Integritetspolicy',
    description:
      'Så hanterar All Metadata Cleaner dina uppgifter: bilder behandlas i webbläsaren och laddas aldrig upp. Inga konton, ingen spårning, inga annonser.',
    intro:
      'Den här policyn förklarar vilka uppgifter All Metadata Cleaner hanterar när du använder webbplatsen. Kort sagt: dina bilder lämnar aldrig din enhet och vi spårar dig inte.',
    sections: [
      {
        heading: 'Dina bilder stannar på din enhet',
        paragraphs: [
          'Bilder du lägger till läses och bearbetas av din egen webbläsare med Web Workers. De laddas inte upp till någon server, och vi tar aldrig emot, sparar eller ser dem. Du kan till och med koppla från internet när sidan har laddats — verktyget fortsätter att fungera.',
        ],
      },
      {
        heading: 'Vad vi inte samlar in',
        paragraphs: ['Webbplatsen är utformad för att samla in så lite som möjligt:'],
        bullets: [
          'Inga konton, registreringar eller e-postadresser behövs.',
          'Inga skript för analys, annonsering eller spårning från sociala medier laddas, och inga typsnitt eller skript från tredje part hämtas.',
          'Ingen information om innehållet eller metadata i dina bilder skickas någonstans.',
        ],
      },
      {
        heading: 'Uppgifter som sparas i webbläsaren',
        paragraphs: ['Webbplatsen kommer bara ihåg två inställningar, på din enhet:'],
        bullets: [
          'Ditt valda språk, sparat i lokal lagring och i en egen cookie så att startsidan öppnas på det språket.',
          'Ditt valda tema (ljust, mörkt eller system), sparat i lokal lagring.',
        ],
      },
      {
        heading: 'Webbhotell och serverloggar',
        paragraphs: [
          'Webbplatsen levereras från vår egen server. Som alla webbservrar behandlar den vanlig förfrågningsinformation, som din IP-adress, webbläsartyp och begärd sida, för att leverera webbplatsen och skydda den mot missbruk. Din webbläsares språk kan användas för att välja ett standardspråk. Vi använder inte uppgifterna för att identifiera eller profilera dig.',
        ],
      },
      {
        heading: 'Ändringar i policyn',
        paragraphs: [
          'Om sättet webbplatsen hanterar uppgifter på ändras uppdaterar vi den här sidan och datumet högst upp. Om du fortsätter använda webbplatsen efter en uppdatering godkänner du den reviderade policyn.',
        ],
      },
    ],
  },
  terms: {
    title: 'Användarvillkor',
    description:
      'Användarvillkor för All Metadata Cleaner: ett gratis verktyg som tillhandahålls i befintligt skick, ditt ansvar för hur rensade bilder används och gränserna för vårt ansvar.',
    intro:
      'Genom att använda All Metadata Cleaner godkänner du dessa villkor. Läs dem tillsammans med ansvarsfriskrivningen på startsidan och vår integritetspolicy.',
    sections: [
      {
        heading: 'Tjänsten',
        paragraphs: [
          'All Metadata Cleaner är ett gratis webbverktyg som granskar och tar bort metadata från bildfiler på din egen enhet. Vi kan när som helst och utan förvarning ändra, förbättra eller avveckla någon del av det.',
        ],
      },
      {
        heading: 'Tillåten användning',
        paragraphs: ['Du ansvarar för filerna du bearbetar och för hur du använder resultaten. Du förbinder dig att inte använda verktyget för att:'],
        bullets: [
          'bryta mot lag eller inkräkta på andras rättigheter, inklusive upphovsrätt och rätt till privatliv;',
          'dölja AI-genererat innehåll när en lag eller plattformsregel kräver att du upplyser om det;',
          'ta bort upphovsrätts-, licens- eller krediteringsinformation från bilder som du inte äger eller inte har rätt att ändra.',
        ],
      },
      {
        heading: 'Ingen garanti',
        paragraphs: [
          'Verktyget tillhandahålls ”i befintligt skick” och ”i mån av tillgänglighet”, utan några uttryckliga eller underförstådda garantier. Vi garanterar inte att det tar bort alla typer av metadata, att resultaten är felfria eller att plattformar behandlar rensade bilder på något visst sätt. Spara alltid en kopia av dina originalfiler.',
        ],
      },
      {
        heading: 'Ansvarsbegränsning',
        paragraphs: [
          'I den utsträckning lagen tillåter ansvarar vi inte för direkta, indirekta, tillfälliga eller följdförluster eller skador — inklusive förlust av data, filer eller vinst — som uppstår genom användning av, eller oförmåga att använda, verktyget. Vissa jurisdiktioner tillåter inte vissa begränsningar; då gäller de endast i den mån det är tillåtet.',
        ],
      },
      {
        heading: 'Ändringar i villkoren',
        paragraphs: [
          'Vi kan uppdatera dessa villkor då och då. Datumet högst upp visar den senaste versionen. Om du fortsätter använda verktyget efter en ändring godkänner du de uppdaterade villkoren.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakta oss',
    description:
      'Kontakta teamet bakom All Metadata Cleaner: rapportera en bugg, föreslå en funktion eller ställ en integritetsfråga. Vi läser varje meddelande och svarar så snart vi kan.',
    intro:
      'Frågor, buggrapporter och idéer är välkomna. Skicka ett mejl så återkommer vi så snart vi kan.',
    sections: [
      {
        heading: 'Vad du kan skriva till oss om',
        paragraphs: ['Vi är särskilt glada att höra om:'],
        bullets: [
          'Buggar — en fil som inte går att rensa, eller metadata som inte upptäcks eller inte tas bort.',
          'Funktionsönskemål — nya format, alternativ eller språk du vill se.',
          'Integritets- eller juridiska frågor om webbplatsen.',
        ],
      },
      {
        heading: 'Innan du skriver',
        paragraphs: [
          'Skicka inte privata foton. När du rapporterar ett problem, berätta filformatet, vilken kamera, telefon eller app som skapade filen, din webbläsare och vad du förväntade dig. Om en fil behövs för att återskapa problemet, skicka en som inte innehåller något känsligt.',
        ],
      },
    ],
  },
};

export default pages;
