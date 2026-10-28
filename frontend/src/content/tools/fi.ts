import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Ilmaiset kuvien metatietotyökalut',
    description:
      'Ilmaiset selaintyökalut kuvien metatietojen katseluun, analysointiin ja poistoon: EXIF-katselin, yksityisyystarkistus, metatietojen koko sekä EXIF-, GPS- ja C2PA-poisto.',
    intro:
      'Kaikki työkalut toimivat selaimessasi samalla moottorilla: kuviasi ei koskaan lähetetä eikä mitään pakata uudelleen. Valitse tarpeesi mukaan — katso kuvan sisään, tarkista mitä se paljastaa tai puhdista se.',
  },
  cards: {
    cleaner: { name: 'Poista kuvien metatiedot', text: 'Poista EXIF, GPS, XMP, IPTC, C2PA ja tekoälykehotteet yhdellä napsautuksella ilman laatuhäviötä.' },
    'view-metadata': { name: 'Näytä metatiedot', text: 'Näe kuvan kaikki piilotetut kentät: kamera, päivämäärä, GPS, XMP, C2PA ja tekoälykehotteet.' },
    'privacy-check': { name: 'Kuvan yksityisyystarkistus', text: 'Selvitä, mitä kuva paljastaa — sijainnin kartalla, henkilötiedot ja kuvausajan.' },
    'metadata-size': { name: 'Metatietojen koko', text: 'Mittaa, montako tavua metatietoja tiedostossa on ja kuinka riskialttiita ne ovat.' },
    'remove-exif': { name: 'Poista EXIF', text: 'Poista kamera-, päivämäärä- ja sarjanumerotiedot säilyttäen suunnan ja värit.' },
    'remove-gps': { name: 'Poista GPS-sijainti', text: 'Poista GPS-koordinaatit puhelimen kuvista ennen jakamista.' },
    'remove-c2pa': { name: 'Poista C2PA', text: 'Poista Content Credentials -manifestit (C2PA) JPG-, PNG-, WebP- ja HEIC-tiedostoista.' },
    'remove-prompts': { name: 'Poista tekoälykehotteet', text: 'Poista Stable Diffusion -parametrit ja ComfyUI-työnkulut PNG-tiedostoista.' },
    batch: { name: 'Eräpuhdistus', text: 'Puhdista jopa 50 kuvaa kerralla ja lataa ne yhtenä ZIP-tiedostona.' },
  },
  groups: {
    inspect: { title: 'Tarkista kuvasi', text: 'Katso, mitä kuva paljastaa ennen jakamista — tiedostoa vain luetaan, sitä ei muuteta.' },
    remove: { title: 'Poista metatiedot tarpeen mukaan', text: 'Valitse muoto tai tehtävä — jokaisessa oppaassa on puhdistustyökalu valmiina.' },
  },
  tools: {
    'view-metadata': {
      title: 'Näytä kuvan metatiedot verkossa – EXIF, XMP, C2PA',
      description:
        'Ilmainen metatietojen katselin: näe JPG-, PNG-, WebP- ja HEIC-kuvien EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) ja tekoälykehotteet selaimessa ilman lähetystä.',
      intro:
        'Pudota kuva nähdäksesi kaikki sen piilotiedot — kamera ja objektiivi, kuvauspäivä, GPS-sijainti, muokkausohjelma, Content Credentials ja tekoälykehotteet — lähteen mukaan ryhmiteltynä. Mitään ei muuteta eikä lähetetä.',
      steps: [
        'Pudota yksi tai useampi kuva yllä olevaan ruutuun tai napauta ”Valitse kuvat”.',
        'Avaa tiedosto nähdäksesi yksityisyyskoosteen, tekoälysignaalit ja kaikki metatietokentät.',
        'Hae kentistä ja päätä, säilytätkö tiedoston sellaisenaan vai poistatko metatiedot.',
      ],
      faq: [
        {
          q: 'Muuttaako metatietojen katselu tiedostoani?',
          a: 'Ei. Tiedosto vain luetaan. Poista metatiedot puhdistustyökalulla — kuvat pysyvät ladattuina, joten niitä ei tarvitse lisätä uudelleen.',
        },
        {
          q: 'Mitä metatietoja näen?',
          a: 'EXIF (myös GPS), XMP, IPTC, ICC, C2PA Content Credentials, PNG-tekstilohkot kehotteineen tai ComfyUI-työnkulkuineen sekä tiedostorakenteen lohkot.',
        },
        {
          q: 'Lähetetäänkö kuviani?',
          a: 'Ei. Selaimesi lukee tiedostot, eivätkä ne koskaan poistu laitteeltasi.',
        },
      ],
    },
    'privacy-check': {
      title: 'Kuvan yksityisyystarkistus – löydä GPS ja henkilötiedot',
      description:
        'Tarkista ennen jakamista, mitä kuva paljastaa: kartalla avattava GPS-sijainti, tekijä, laitteen sarjanumero, kuvausaika ja tekoälytiedot. Ilmainen, ilman lähetystä.',
      intro:
        'Selvitä, mitä kuva kertoo, ennen kuin julkaiset sen. Tarkistus näyttää, onko kuvassa GPS-sijainti (ja mihin se osoittaa), henkilötietoja kuten tekijä tai laitteen sarjanumero, kuvausaika ja tekoälyn alkuperätiedot — selkeän riskitason kera.',
      steps: [
        'Pudota jaettavaksi aiotut kuvat yllä olevaan ruutuun.',
        'Lue kunkin tiedoston riskitaso sekä löydetyt sijainti-, henkilö- ja aikatiedot.',
        'Jos GPS-sijainti löytyy, avaa se kartalla nähdäksesi, mitä muut näkisivät — ja poista se.',
      ],
      faq: [
        {
          q: 'Miten riskitaso määritetään?',
          a: 'Korkea tarkoittaa, että kuvassa on sijainti. Kohtalainen tarkoittaa henkilö-, aika- tai tekoälytietoja ilman sijaintia. Matala tarkoittaa, ettei metatiedoista löytynyt mitään näistä.',
        },
        {
          q: 'Latautuuko kartta automaattisesti?',
          a: 'Ei. Koordinaatit näytetään tekstinä. OpenStreetMap avautuu uuteen välilehteen vain, jos napsautat painiketta; muuten sijainti ei koskaan poistu laitteeltasi.',
        },
        {
          q: 'Voiko kuva paljastaa sijaintini ilman GPS:ää?',
          a: 'Metatiedot ovat vain yksi lähde. Kuvassa näkyvät asiat — kyltit, maamerkit, heijastukset — voivat myös paljastaa paikan, eikä tämä tarkistus havaitse niitä.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metatietojen koko – kuinka paljon metatietoja kuvassa on?',
      description:
        'Mittaa, kuinka paljon metatietoja kuvassa on: tavut yhteensä, osuus tiedostosta, suurimmat EXIF-, C2PA- tai kehotelohkot ja yksityisyysriski. Ilmainen, ilman lähetystä.',
      intro:
        'Näe, kuinka suuri osa tiedostosta on metatietoja eikä kuvaa. Työkalu listaa jokaisen metatietolohkon koon mukaan — EXIF, XMP, C2PA, upotetut esikatselut, tekoälykehotteet ja työnkulut — näyttää osuuden tiedostosta ja arvioi yksityisyysriskin.',
      steps: [
        'Pudota yksi tai useampi kuva yllä olevaan ruutuun.',
        'Vertaa metatietojen kokoa ja osuutta kussakin tiedostossa lohko kerrallaan.',
        'Poista metatiedot, jotta tiedostot ovat pienempiä ja turvallisempia jakaa.',
      ],
      faq: [
        {
          q: 'Miksi joissakin tiedostoissa on niin paljon metatietoja?',
          a: 'Upotetut esikatselut, pikkukuvalliset C2PA-manifestit ja ComfyUI-työnkulut voivat lisätä kymmeniä tai satoja kilotavuja, kun taas perus-EXIF on yleensä vain muutaman kilotavun.',
        },
        {
          q: 'Miksi väriprofiili on merkitty säilytettäväksi?',
          a: 'ICC-väriprofiilia tarvitaan värien oikeaan näyttämiseen, joten puhdistustyökalu säilyttää sen. Sitä ei lasketa metatietojen kokonaismäärään.',
        },
        {
          q: 'Muuttaako metatietojen poisto kuvaa?',
          a: 'Ei. Vain metatietolohkot poistetaan; kuvadata kopioidaan muuttamattomana, joten tiedosto pienenee ilman laatuhäviötä.',
        },
      ],
    },
  },
};

export default tools;
