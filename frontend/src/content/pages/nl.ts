import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Over All Metadata Cleaner',
    description:
      'All Metadata Cleaner is een gratis, privacyvriendelijke tool die EXIF, GPS, XMP, IPTC, C2PA en AI-prompts in afbeeldingen toont en verwijdert, direct in je browser.',
    intro:
      'All Metadata Cleaner is een gratis webtool om verborgen informatie in afbeeldingsbestanden te bekijken en te verwijderen: EXIF en GPS-locatie, XMP, IPTC, C2PA Content Credentials en de prompts of workflows die AI-generatoren insluiten.',
    sections: [
      {
        heading: 'Waarom we hem hebben gemaakt',
        paragraphs: [
          'Foto’s en AI-afbeeldingen bevatten vaak meer dan mensen denken: waar een foto is gemaakt, met welk toestel, wie hem heeft bewerkt of de exacte prompt achter een AI-afbeelding. De meeste metadataverwijderaars uploaden je bestanden naar een server of comprimeren ze opnieuw. Wij wilden een tool die geen van beide doet.',
        ],
      },
      {
        heading: 'Hoe het werkt',
        paragraphs: ['Alles gebeurt op je eigen apparaat:'],
        bullets: [
          'Je browser leest elk bestand en analyseert de structuur: JPEG-segmenten, PNG-chunks en WebP- en HEIC/AVIF-boxen.',
          'Metadatablokken worden op byteniveau verwijderd; de beeldgegevens worden ongewijzigd gekopieerd, dus de kwaliteit blijft identiek.',
          'Elk opgeschoond bestand wordt opnieuw geanalyseerd zodat je kunt controleren wat er is verwijderd.',
        ],
      },
      {
        heading: 'Onze principes',
        paragraphs: ['Een paar regels sturen elke beslissing:'],
        bullets: [
          'Privacy eerst: afbeeldingen worden nooit geüpload, opgeslagen of door ons bekeken.',
          'Eerlijkheid: we leggen uit wat de tool niet kan, zoals onzichtbare watermerken in de pixels verwijderen.',
          'Gratis, zonder account, zonder watermerk en zonder advertenties.',
        ],
      },
      {
        heading: 'Voor wie',
        paragraphs: [
          'Voor iedereen die afbeeldingen deelt: mensen die hun locatie willen beschermen voordat ze een foto plaatsen, fotografen die werk aan klanten leveren, makers die hun prompts privé houden en iedereen van wie een echte foto ten onrechte als AI werd gelabeld. We vragen iedereen de regels van platforms over het melden van AI-content te volgen.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacybeleid',
    description:
      'Hoe All Metadata Cleaner met je gegevens omgaat: afbeeldingen worden in je browser verwerkt en nooit geüpload. Geen accounts, geen trackers, geen advertenties.',
    intro:
      'Dit beleid legt uit welke gegevens All Metadata Cleaner verwerkt wanneer je de website gebruikt. Kort gezegd: je afbeeldingen verlaten nooit je apparaat en we volgen je niet.',
    sections: [
      {
        heading: 'Je afbeeldingen blijven op je apparaat',
        paragraphs: [
          'Afbeeldingen die je toevoegt, worden door je eigen browser gelezen en verwerkt met Web Workers. Ze worden naar geen enkele server geüpload, en we ontvangen, bewaren of zien ze nooit. Je kunt zelfs de internetverbinding verbreken nadat de pagina is geladen; de tool blijft werken.',
        ],
      },
      {
        heading: 'Wat we niet verzamelen',
        paragraphs: ['De site is ontworpen om zo weinig mogelijk te verzamelen:'],
        bullets: [
          'Er zijn geen accounts, registraties of e-mailadressen nodig.',
          'Er worden geen analyse-, advertentie- of socialemediatrackingscripts geladen en geen lettertypen of scripts van derden opgevraagd.',
          'Er wordt nergens informatie over de inhoud of metadata van je afbeeldingen naartoe gestuurd.',
        ],
      },
      {
        heading: 'Gegevens in je browser',
        paragraphs: ['De site onthoudt slechts twee voorkeuren, op je apparaat:'],
        bullets: [
          'Je gekozen taal, opgeslagen in lokale opslag en in een eigen cookie zodat de startpagina in die taal opent.',
          'Je gekozen thema (licht, donker of systeem), opgeslagen in lokale opslag.',
        ],
      },
      {
        heading: 'Hosting en serverlogs',
        paragraphs: [
          'De website wordt geleverd vanaf onze eigen server. Zoals elke webserver verwerkt deze standaard verzoekgegevens, zoals je IP-adres, browsertype en de opgevraagde pagina, om de site te leveren en tegen misbruik te beschermen. De taal van je browser kan worden gebruikt om een standaardtaal te kiezen. We gebruiken deze gegevens niet om je te identificeren of te profileren.',
        ],
      },
      {
        heading: 'Wijzigingen in dit beleid',
        paragraphs: [
          'Als de manier waarop de site met gegevens omgaat verandert, werken we deze pagina en de datum bovenaan bij. Als je de site na een update blijft gebruiken, ga je akkoord met het herziene beleid.',
        ],
      },
    ],
  },
  terms: {
    title: 'Gebruiksvoorwaarden',
    description:
      'Gebruiksvoorwaarden: een gratis tool zonder garantie, jouw verantwoordelijkheid voor opgeschoonde afbeeldingen en de grenzen van onze aansprakelijkheid.',
    intro:
      'Door All Metadata Cleaner te gebruiken ga je akkoord met deze voorwaarden. Lees ze samen met de disclaimer op de startpagina en ons privacybeleid.',
    sections: [
      {
        heading: 'De dienst',
        paragraphs: [
          'All Metadata Cleaner is een gratis webtool die metadata van afbeeldingsbestanden op je eigen apparaat bekijkt en verwijdert. We kunnen elk onderdeel op elk moment en zonder aankondiging wijzigen, verbeteren of stopzetten.',
        ],
      },
      {
        heading: 'Toegestaan gebruik',
        paragraphs: ['Je bent verantwoordelijk voor de bestanden die je verwerkt en voor hoe je de resultaten gebruikt. Je gaat ermee akkoord de tool niet te gebruiken om:'],
        bullets: [
          'de wet te overtreden of inbreuk te maken op rechten van anderen, waaronder auteursrecht en privacyrechten;',
          'AI-content te verbergen wanneer een wet of platformregel vereist dat je dit meldt;',
          'auteursrecht-, licentie- of naamsvermeldingsinformatie te verwijderen uit afbeeldingen die niet van jou zijn of die je niet mag wijzigen.',
        ],
      },
      {
        heading: 'Geen garantie',
        paragraphs: [
          'De tool wordt aangeboden “zoals hij is” en “zoals beschikbaar”, zonder enige uitdrukkelijke of stilzwijgende garantie. We garanderen niet dat hij elke soort metadata verwijdert, dat resultaten foutloos zijn of dat platforms opgeschoonde afbeeldingen op een bepaalde manier behandelen. Bewaar altijd een kopie van je originele bestanden.',
        ],
      },
      {
        heading: 'Beperking van aansprakelijkheid',
        paragraphs: [
          'Voor zover wettelijk toegestaan zijn we niet aansprakelijk voor directe, indirecte, incidentele of gevolgschade of -verliezen — waaronder verlies van gegevens, bestanden of winst — die voortvloeien uit het gebruik of het niet kunnen gebruiken van de tool. Sommige rechtsgebieden staan bepaalde beperkingen niet toe; die gelden dan alleen voor zover toegestaan.',
        ],
      },
      {
        heading: 'Wijzigingen in deze voorwaarden',
        paragraphs: [
          'We kunnen deze voorwaarden van tijd tot tijd bijwerken. De datum bovenaan toont de nieuwste versie. Als je de tool na een wijziging blijft gebruiken, ga je akkoord met de bijgewerkte voorwaarden.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      'Neem contact op met het team van All Metadata Cleaner: meld een bug, stel een functie voor of stel een privacyvraag. We lezen elk bericht en reageren zo snel mogelijk.',
    intro:
      'Vragen, bugmeldingen en ideeën zijn welkom. Stuur ons een e-mail en we reageren zo snel mogelijk.',
    sections: [
      {
        heading: 'Waarover je ons kunt mailen',
        paragraphs: ['We horen vooral graag over:'],
        bullets: [
          'Bugs: een bestand dat niet wordt opgeschoond, of metadata die niet wordt herkend of niet wordt verwijderd.',
          'Functieverzoeken: nieuwe formaten, opties of talen die je graag zou zien.',
          'Privacy- of juridische vragen over de website.',
        ],
      },
      {
        heading: 'Voordat je schrijft',
        paragraphs: [
          'Stuur alsjeblieft geen privéfoto’s. Vermeld bij het melden van een probleem het bestandsformaat, de camera, telefoon of app waarmee het bestand is gemaakt, je browser en wat je verwachtte. Is er een bestand nodig om het probleem te reproduceren, stuur dan een bestand zonder gevoelige inhoud.',
        ],
      },
    ],
  },
};

export default pages;
