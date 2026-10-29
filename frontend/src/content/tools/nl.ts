import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Gratis tools voor afbeeldingsmetadata',
    description:
      'Gratis browsertools om metadata van afbeeldingen te bekijken, analyseren en verwijderen: EXIF-viewer, privacycheck, metadatagrootte en EXIF, GPS en C2PA verwijderen.',
    intro:
      'Alle tools draaien in je browser met dezelfde engine: je afbeeldingen worden nooit geüpload en er wordt niets opnieuw gecomprimeerd. Kies wat je nodig hebt: in een foto kijken, controleren wat hij prijsgeeft of hem opschonen.',
  },
  cards: {
    cleaner: { name: 'Metadata uit afbeeldingen verwijderen', text: 'Verwijder EXIF, GPS, XMP, IPTC, C2PA en AI-prompts met één klik, zonder kwaliteitsverlies.', detail: 'Sleep je afbeeldingen erin, bekijk het rapport en download schone kopieën; pixels, oriëntatie en kleurprofiel blijven ongewijzigd.' },
    'view-metadata': { name: 'Metadata bekijken', text: 'Bekijk alle verborgen velden van een foto: camera, datum, GPS, XMP, C2PA en AI-prompts.', detail: 'Alleen-lezen: het bestand wordt nooit gewijzigd, dus veilig om ontvangen of gedownloade foto’s te controleren.' },
    'privacy-check': { name: 'Privacycheck voor foto’s', text: 'Ontdek wat een foto prijsgeeft: locatie op de kaart, persoonlijke gegevens en opnametijd.', detail: 'Geeft elke foto een hoog, gemiddeld of laag risico en toont GPS-coördinaten die je op een kaart kunt openen.' },
    'metadata-size': { name: 'Metadatagrootte meten', text: 'Meet hoeveel bytes metadata een bestand bevat en hoe riskant die zijn.', detail: 'Toont metadatablokken op grootte, zodat je ziet of miniaturen, XMP of ingesloten prompts het bestand groter maken.' },
    'remove-exif': { name: 'EXIF verwijderen', text: 'Wis camera, datum en serienummer, met behoud van oriëntatie en kleuren.', detail: 'Werkt met JPG, HEIC, PNG en WebP; een minimale oriëntatietag blijft behouden zodat foto’s niet kantelen.' },
    'remove-gps': { name: 'GPS-locatie verwijderen', text: 'Haal GPS-coördinaten uit telefoonfoto’s voordat je ze deelt.', detail: 'Handig voordat je foto’s van je huis, kinderen of werkplek plaatst of naar onbekenden stuurt.' },
    'remove-c2pa': { name: 'C2PA verwijderen', text: 'Verwijder Content Credentials-manifesten (C2PA) uit JPG, PNG, WebP en HEIC.', detail: 'Verwijdert het manifest dat AI-labels activeert; onzichtbare pixelwatermerken zoals SynthID blijven onaangeroerd.' },
    'remove-prompts': { name: 'AI-prompts verwijderen', text: 'Verwijder Stable Diffusion-parameters en ComfyUI-workflows uit PNG-bestanden.', detail: 'Verbergt prompt, seed, model en node-graaf zodat niemand je generatie-instellingen kan kopiëren.' },
    batch: { name: 'Bulk opschonen', text: 'Schoon tot 50 afbeeldingen tegelijk op en download ze als één ZIP-bestand.', detail: 'Elk bestand behoudt zijn oorspronkelijke formaat; bestanden die niet verwerkt konden worden, staan vermeld met de reden.' },
  },
  groups: {
    inspect: { title: 'Controleer je foto’s', text: 'Zie wat een afbeelding prijsgeeft voordat je hem deelt — het bestand wordt alleen gelezen, nooit gewijzigd.' },
    remove: { title: 'Metadata verwijderen per behoefte', text: 'Kies een formaat of taak — elke handleiding heeft de cleaner ingebouwd.' },
  },
  tools: {
    'view-metadata': {
      title: 'Metadata van afbeeldingen online bekijken — EXIF, XMP, C2PA',
      description:
        'Gratis metadataviewer: bekijk EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) en AI-prompts in JPG, PNG, WebP en HEIC in je browser, zonder upload.',
      intro:
        'Sleep een foto hierheen om alle verborgen informatie te zien — camera en lens, opnamedatum, GPS-positie, bewerkingssoftware, Content Credentials en AI-prompts — gegroepeerd per bron. Er wordt niets gewijzigd of geüpload.',
      steps: [
        'Sleep een of meer afbeeldingen naar het vak hierboven of tik op “Afbeeldingen kiezen”.',
        'Open een bestand om het privacyoverzicht, de AI-signalen en alle metadatavelden te zien.',
        'Doorzoek de velden en beslis of je het bestand zo houdt of de metadata verwijdert.',
      ],
      faq: [
        {
          q: 'Verandert het bekijken van metadata mijn bestand?',
          a: 'Nee. Het bestand wordt alleen gelezen. Gebruik de cleaner om metadata te verwijderen: je afbeeldingen blijven geladen, dus je hoeft ze niet opnieuw toe te voegen.',
        },
        {
          q: 'Welke metadata kan ik zien?',
          a: 'EXIF (inclusief GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG-tekstchunks met prompts of ComfyUI-workflows en de blokken van de bestandsstructuur.',
        },
        {
          q: 'Worden mijn foto’s geüpload?',
          a: 'Nee. Je browser leest de bestanden en ze verlaten je apparaat nooit.',
        },
      ],
    },
    'privacy-check': {
      title: 'Privacycheck voor foto’s — vind GPS en persoonlijke gegevens',
      description:
        'Controleer wat een foto prijsgeeft voordat je hem deelt: GPS-locatie die je op een kaart opent, maker, serienummer, opnametijd en AI-gegevens. Gratis, zonder upload.',
      intro:
        'Ontdek wat een foto verraadt voordat je hem plaatst. De check toont of hij een GPS-locatie bevat (en waar die naar wijst), persoonlijke gegevens zoals maker of serienummer van het toestel, de opnametijd en AI-herkomstgegevens — met een eenvoudig risiconiveau.',
      steps: [
        'Sleep de foto’s die je wilt delen naar het vak hierboven.',
        'Lees het risiconiveau en de gevonden locatie-, persoonlijke en tijdgegevens per bestand.',
        'Is er een GPS-positie, open die dan op de kaart om precies te zien wat anderen kunnen zien — en verwijder hem.',
      ],
      faq: [
        {
          q: 'Hoe wordt het risiconiveau bepaald?',
          a: 'Hoog betekent dat de foto een locatie bevat. Gemiddeld betekent persoonlijke, tijd- of AI-informatie zonder locatie. Laag betekent dat niets daarvan in de metadata is gevonden.',
        },
        {
          q: 'Wordt de kaart automatisch geladen?',
          a: 'Nee. De coördinaten worden als tekst getoond. OpenStreetMap opent alleen in een nieuw tabblad als je op de knop klikt; anders verlaat de locatie je apparaat nooit.',
        },
        {
          q: 'Kan een foto mijn locatie verraden zonder GPS?',
          a: 'Metadata is maar één bron. Wat op de foto te zien is — straatnaambordjes, bezienswaardigheden, reflecties — kan een plek ook verraden, en deze check kan dat niet detecteren.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metadatagrootte meten — hoeveel metadata zit er in een foto?',
      description:
        'Meet hoeveel metadata een afbeelding bevat: totaal aantal bytes, de grootste EXIF-, C2PA- of promptblokken en een privacyrisico. Gratis, zonder upload.',
      intro:
        'Zie hoeveel van een bestand metadata is in plaats van beeld. De tool toont elk metadatablok op grootte — EXIF, XMP, C2PA, ingesloten voorbeelden, AI-prompts en workflows — met het aandeel in het bestand en een inschatting van het privacyrisico.',
      steps: [
        'Sleep een of meer afbeeldingen naar het vak hierboven.',
        'Vergelijk de metadatagrootte en het aandeel per bestand, blok voor blok.',
        'Verwijder de metadata zodat bestanden kleiner en veiliger te delen zijn.',
      ],
      faq: [
        {
          q: 'Waarom bevatten sommige bestanden zoveel metadata?',
          a: 'Ingesloten voorbeelden, C2PA-manifesten met miniaturen en ComfyUI-workflows kunnen tientallen tot honderden kilobytes toevoegen, terwijl basis-EXIF meestal maar een paar kilobyte is.',
        },
        {
          q: 'Waarom staat het kleurprofiel als behouden?',
          a: 'Het ICC-kleurprofiel is nodig om kleuren correct weer te geven, dus de cleaner houdt het. Het telt niet mee in het metadatatotaal.',
        },
        {
          q: 'Verandert het verwijderen van metadata de afbeelding?',
          a: 'Nee. Alleen metadatablokken worden verwijderd; de beeldgegevens worden ongewijzigd gekopieerd, dus het bestand wordt kleiner zonder kwaliteitsverlies.',
        },
      ],
    },
  },
};

export default tools;
