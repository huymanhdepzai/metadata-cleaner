import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Tietoa All Metadata Cleanerista',
    description:
      'All Metadata Cleaner on ilmainen, yksityisyyttä kunnioittava työkalu, joka näyttää ja poistaa kuvista EXIF-, GPS-, XMP-, IPTC- ja C2PA-tiedot sekä tekoälykehotteet selaimessa.',
    intro:
      'All Metadata Cleaner on ilmainen verkkotyökalu kuvatiedostojen piilotietojen katseluun ja poistamiseen: EXIF ja GPS-sijainti, XMP, IPTC, C2PA Content Credentials sekä tekoälygeneraattorien upottamat kehotteet ja työnkulut.',
    sections: [
      {
        heading: 'Miksi teimme sen',
        paragraphs: [
          'Valokuvissa ja tekoälykuvissa on usein enemmän tietoa kuin luulisi: missä kuva otettiin, millä laitteella, kuka sitä muokkasi tai tekoälykuvan tarkka kehote. Useimmat metatietojen poistajat lähettävät tiedostot palvelimelle tai pakkaavat ne uudelleen. Halusimme työkalun, joka ei tee kumpaakaan.',
        ],
      },
      {
        heading: 'Miten se toimii',
        paragraphs: ['Kaikki tapahtuu omalla laitteellasi:'],
        bullets: [
          'Selain lukee jokaisen tiedoston ja jäsentää sen rakenteen — JPEG-segmentit, PNG-lohkot sekä WebP- ja HEIC/AVIF-laatikot.',
          'Metatietolohkot leikataan pois tavutasolla; kuvadata kopioidaan muuttamattomana, joten laatu pysyy täsmälleen samana.',
          'Jokainen puhdistettu tiedosto analysoidaan uudelleen, jotta voit tarkistaa, mitä poistettiin.',
        ],
      },
      {
        heading: 'Periaatteemme',
        paragraphs: ['Muutama sääntö ohjaa jokaista päätöstämme:'],
        bullets: [
          'Yksityisyys ensin: kuvia ei koskaan lähetetä, tallenneta eikä niitä näe kukaan meistä.',
          'Rehellisyys: kerromme, mihin työkalu ei pysty, kuten pikseleihin upotettujen näkymättömien vesileimojen poistoon.',
          'Ilmainen, ilman tiliä, vesileimaa tai mainoksia.',
        ],
      },
      {
        heading: 'Kenelle se on',
        paragraphs: [
          'Kaikille, jotka jakavat kuvia: niille, jotka haluavat suojata sijaintinsa ennen kuvan julkaisua, valokuvaajille, jotka toimittavat töitä asiakkaille, sisällöntuottajille, jotka pitävät kehotteensa omana tietonaan, ja kaikille, joiden aito kuva on virheellisesti merkitty tekoälyksi. Pyydämme kaikkia noudattamaan alustojen sääntöjä tekoälysisällön ilmoittamisesta.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Tietosuojakäytäntö',
    description:
      'Miten All Metadata Cleaner käsittelee tietojasi: kuvat käsitellään selaimessa eikä niitä koskaan lähetetä. Ei tilejä, ei seurantaa, ei mainoksia.',
    intro:
      'Tämä käytäntö kertoo, mitä tietoja All Metadata Cleaner käsittelee, kun käytät sivustoa. Lyhyesti: kuvasi eivät koskaan poistu laitteeltasi, emmekä seuraa sinua.',
    sections: [
      {
        heading: 'Kuvasi pysyvät laitteellasi',
        paragraphs: [
          'Lisäämäsi kuvat lukee ja käsittelee oma selaimesi Web Workereiden avulla. Niitä ei lähetetä millekään palvelimelle, emmekä koskaan vastaanota, tallenna tai näe niitä. Voit jopa katkaista internetyhteyden sivun latauduttua, ja työkalu toimii edelleen.',
        ],
      },
      {
        heading: 'Mitä emme kerää',
        paragraphs: ['Sivusto on suunniteltu keräämään mahdollisimman vähän:'],
        bullets: [
          'Tiliä, rekisteröitymistä tai sähköpostiosoitetta ei tarvita.',
          'Analytiikka-, mainos- tai somen seurantaskriptejä ei ladata, eikä kolmansien osapuolten fontteja tai skriptejä haeta.',
          'Kuviesi sisällöstä tai metatiedoista ei lähetetä tietoja minnekään.',
        ],
      },
      {
        heading: 'Selaimeen tallennetut tiedot',
        paragraphs: ['Sivusto muistaa laitteellasi vain kaksi asetusta:'],
        bullets: [
          'Valitsemasi kielen, joka tallennetaan paikalliseen tallennustilaan ja sivuston omaan evästeeseen, jotta etusivu avautuu sillä kielellä.',
          'Valitsemasi teeman (vaalea, tumma tai järjestelmän mukainen), joka tallennetaan paikalliseen tallennustilaan.',
        ],
      },
      {
        heading: 'Palvelinympäristö ja palvelinlokit',
        paragraphs: [
          'Sivusto toimitetaan omalta palvelimeltamme. Kuten mikä tahansa verkkopalvelin, se käsittelee tavanomaisia pyyntötietoja, kuten IP-osoitteesi, selaimen tyypin ja pyydetyn sivun, toimittaakseen sivuston ja suojatakseen sitä väärinkäytöltä. Selaimesi kieltä voidaan käyttää oletuskielen valintaan. Emme käytä näitä tietoja tunnistaaksemme tai profiloidaksemme sinua.',
        ],
      },
      {
        heading: 'Muutokset tähän käytäntöön',
        paragraphs: [
          'Jos sivuston tapa käsitellä tietoja muuttuu, päivitämme tämän sivun ja yläreunan päivämäärän. Jatkamalla sivuston käyttöä päivityksen jälkeen hyväksyt päivitetyn käytännön.',
        ],
      },
    ],
  },
  terms: {
    title: 'Käyttöehdot',
    description:
      'All Metadata Cleanerin käyttöehdot: ilmainen työkalu sellaisenaan, vastuusi puhdistettujen kuvien käytöstä ja vastuumme rajoitukset.',
    intro:
      'Käyttämällä All Metadata Cleaneria hyväksyt nämä ehdot. Lue ne yhdessä etusivun vastuuvapauslausekkeen ja tietosuojakäytäntömme kanssa.',
    sections: [
      {
        heading: 'Palvelu',
        paragraphs: [
          'All Metadata Cleaner on ilmainen verkkotyökalu, joka tarkastaa ja poistaa kuvatiedostojen metatietoja omalla laitteellasi. Voimme muuttaa, parantaa tai lopettaa minkä tahansa sen osan milloin tahansa ilman ennakkoilmoitusta.',
        ],
      },
      {
        heading: 'Sallittu käyttö',
        paragraphs: ['Olet vastuussa käsittelemistäsi tiedostoista ja tulosten käytöstä. Sitoudut olemaan käyttämättä työkalua:'],
        bullets: [
          'lain rikkomiseen tai muiden oikeuksien loukkaamiseen, mukaan lukien tekijänoikeudet ja yksityisyyden suoja;',
          'tekoälyn tuottaman sisällön piilottamiseen, kun laki tai alustan sääntö edellyttää sen ilmoittamista;',
          'tekijänoikeus-, lisenssi- tai tekijätietojen poistamiseen kuvista, jotka eivät ole sinun tai joita sinulla ei ole oikeutta muokata.',
        ],
      },
      {
        heading: 'Ei takuuta',
        paragraphs: [
          'Työkalu tarjotaan ”sellaisenaan” ja ”saatavuuden mukaan” ilman minkäänlaisia nimenomaisia tai hiljaisia takuita. Emme takaa, että se poistaa kaikenlaiset metatiedot, että tulokset ovat virheettömiä tai että alustat käsittelevät puhdistettuja kuvia tietyllä tavalla. Säilytä aina kopio alkuperäisistä tiedostoistasi.',
        ],
      },
      {
        heading: 'Vastuunrajoitus',
        paragraphs: [
          'Lain sallimissa enimmäisrajoissa emme vastaa välittömistä, välillisistä, satunnaisista tai seurauksellisista menetyksistä tai vahingoista — mukaan lukien tietojen, tiedostojen tai voittojen menetys — jotka aiheutuvat työkalun käytöstä tai siitä, ettei sitä voi käyttää. Jotkin oikeudenkäyttöalueet eivät salli tiettyjä rajoituksia; tällöin niitä sovelletaan vain sallitussa laajuudessa.',
        ],
      },
      {
        heading: 'Muutokset näihin ehtoihin',
        paragraphs: [
          'Voimme päivittää näitä ehtoja ajoittain. Yläreunan päivämäärä kertoo uusimman version. Jatkamalla työkalun käyttöä muutoksen jälkeen hyväksyt päivitetyt ehdot.',
        ],
      },
    ],
  },
  contact: {
    title: 'Ota yhteyttä',
    description:
      'Ota yhteyttä All Metadata Cleanerin tiimiin: ilmoita virheestä, ehdota ominaisuutta tai kysy tietosuojasta. Luemme jokaisen viestin ja vastaamme mahdollisimman pian.',
    intro:
      'Kysymykset, virheilmoitukset ja ideat ovat tervetulleita. Lähetä meille sähköpostia, niin vastaamme mahdollisimman pian.',
    sections: [
      {
        heading: 'Mistä voit kirjoittaa meille',
        paragraphs: ['Kuulemme erityisen mielellämme:'],
        bullets: [
          'Virheistä — tiedosto, jota ei saa puhdistettua, tai metatiedot, joita ei tunnisteta tai poisteta.',
          'Ominaisuustoiveista — uusista tiedostomuodoista, asetuksista tai kielistä, joita toivoisit.',
          'Sivustoa koskevista tietosuoja- tai oikeudellisista kysymyksistä.',
        ],
      },
      {
        heading: 'Ennen kuin kirjoitat',
        paragraphs: [
          'Älä lähetä yksityisiä kuvia. Kun ilmoitat ongelmasta, kerro tiedostomuoto, tiedoston luonut kamera, puhelin tai sovellus, selaimesi ja mitä odotit tapahtuvan. Jos ongelman toistamiseen tarvitaan tiedosto, lähetä sellainen, jossa ei ole mitään arkaluonteista.',
        ],
      },
    ],
  },
};

export default pages;
