import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Bezplatné nástroje na metadáta obrázkov',
    description:
      'Bezplatné nástroje v prehliadači na zobrazenie, analýzu a odstránenie metadát obrázkov: prehliadač EXIF, kontrola súkromia, veľkosť metadát, odstránenie EXIF, GPS a C2PA.',
    intro:
      'Všetky nástroje bežia vo vašom prehliadači na rovnakom jadre: obrázky sa nikdy nenahrávajú a nič sa znova nekomprimuje. Vyberte, čo potrebujete — nazrieť do fotky, zistiť, čo prezrádza, alebo ju vyčistiť.',
  },
  cards: {
    cleaner: { name: 'Odstrániť metadáta', text: 'Odstráňte EXIF, GPS, XMP, IPTC, C2PA a AI prompty jedným kliknutím bez straty kvality.', detail: 'Pretiahnite obrázky, skontrolujte prehľad a stiahnite čisté kópie; pixely, orientácia aj farebný profil zostanú bez zmeny.' },
    'view-metadata': { name: 'Zobraziť metadáta', text: 'Pozrite si všetky skryté polia fotky: fotoaparát, dátum, GPS, XMP, C2PA a AI prompty.', detail: 'Iba na čítanie: súbor sa nikdy nemení, takže je to bezpečné aj pre fotky, ktoré ste dostali alebo stiahli.' },
    'privacy-check': { name: 'Kontrola súkromia fotky', text: 'Zistite, čo fotka prezrádza — polohu na mape, osobné údaje a čas zhotovenia.', detail: 'Ohodnotí riziko každej fotky ako vysoké, stredné alebo nízke a ukáže GPS súradnice, ktoré otvoríte na mape.' },
    'metadata-size': { name: 'Veľkosť metadát', text: 'Zmerajte, koľko bajtov metadát súbor obsahuje a aké sú rizikové.', detail: 'Zoradí bloky metadát podľa veľkosti, aby ste videli, či súbor zväčšujú náhľady, XMP alebo vložené prompty.' },
    'remove-exif': { name: 'Odstrániť EXIF', text: 'Vymažte údaje o fotoaparáte, dátum a sériové číslo, orientácia a farby zostanú.', detail: 'Funguje s JPG, HEIC, PNG a WebP; minimálna značka orientácie zostane, aby sa fotky neotáčali.' },
    'remove-gps': { name: 'Odstrániť polohu GPS', text: 'Odstráňte súradnice GPS z fotiek z telefónu skôr, než ich pošlete.', detail: 'Hodí sa pred zverejnením fotiek domova, detí či pracoviska alebo pred ich poslaním cudzím ľuďom.' },
    'remove-c2pa': { name: 'Odstrániť C2PA', text: 'Odstráňte manifesty Content Credentials (C2PA) z JPG, PNG, WebP a HEIC.', detail: 'Odstráni manifest, ktorý spúšťa štítky AI; neviditeľné vodoznaky v pixeloch, ako SynthID, zostanú nedotknuté.' },
    'remove-prompts': { name: 'Odstrániť AI prompty', text: 'Odstráňte parametre Stable Diffusion a workflow ComfyUI zo súborov PNG.', detail: 'Skryje prompt, seed, model aj graf uzlov, aby nikto neskopíroval vaše nastavenia generovania.' },
    batch: { name: 'Hromadné čistenie', text: 'Vyčistite až 50 obrázkov naraz a stiahnite ich ako jeden ZIP.', detail: 'Každý súbor si zachová pôvodný formát; súbory, ktoré sa nepodarilo spracovať, sú uvedené s dôvodom.' },
  },
  groups: {
    inspect: { title: 'Skontrolujte svoje fotky', text: 'Zistite, čo obrázok prezrádza, skôr než ho zdieľate — súbor sa len číta, nikdy nemení.' },
    remove: { title: 'Odstránenie metadát podľa potreby', text: 'Vyberte formát alebo úlohu — každý návod má čistič priamo v sebe.' },
  },
  tools: {
    'view-metadata': {
      title: 'Zobraziť metadáta obrázka online — EXIF, XMP, C2PA',
      description:
        'Bezplatný prehliadač metadát: zobrazte EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) a AI prompty v JPG, PNG, WebP a HEIC priamo v prehliadači, bez nahrávania.',
      intro:
        'Pretiahnite fotku a uvidíte všetky skryté informácie — fotoaparát a objektív, dátum zhotovenia, polohu GPS, editačný softvér, Content Credentials a AI prompty — zoskupené podľa zdroja. Nič sa nemení ani nenahráva.',
      steps: [
        'Pretiahnite jeden alebo viac obrázkov do poľa vyššie, alebo ťuknite na „Vybrať obrázky“.',
        'Otvorte súbor a zobrazte súhrn súkromia, signály AI a úplný zoznam polí metadát.',
        'Prehľadajte polia a rozhodnite sa, či súbor ponecháte, alebo metadáta odstránite.',
      ],
      faq: [
        {
          q: 'Zmení zobrazenie metadát môj súbor?',
          a: 'Nie. Súbor sa len číta. Na odstránenie metadát použite čistič — obrázky zostanú načítané, nemusíte ich pridávať znova.',
        },
        {
          q: 'Aké metadáta uvidím?',
          a: 'EXIF (vrátane GPS), XMP, IPTC, ICC, C2PA Content Credentials, textové chunky PNG s promptmi alebo workflow ComfyUI a bloky štruktúry súboru.',
        },
        {
          q: 'Nahrávajú sa moje fotky?',
          a: 'Nie. Súbory číta váš prehliadač a nikdy neopustia vaše zariadenie.',
        },
      ],
    },
    'privacy-check': {
      title: 'Kontrola súkromia fotky — nájdite GPS a osobné údaje',
      description:
        'Skontrolujte pred zdieľaním, čo fotka prezrádza: polohu GPS na otvorenie na mape, autora, sériové číslo, čas zhotovenia a údaje o AI. Zadarmo, bez nahrávania.',
      intro:
        'Zistite, čo fotka vyzradí, skôr než ju zverejníte. Kontrola ukáže, či obsahuje polohu GPS (a kam ukazuje), osobné údaje ako autora alebo sériové číslo zariadenia, čas zhotovenia a údaje o pôvode AI — s jednoduchou úrovňou rizika.',
      steps: [
        'Pretiahnite do poľa vyššie fotky, ktoré chcete zdieľať.',
        'Prečítajte si úroveň rizika a nájdené údaje o polohe, osobe a čase v každom súbore.',
        'Ak sa nájde poloha GPS, otvorte ju na mape a uvidíte presne to, čo ostatní — potom ju odstráňte.',
      ],
      faq: [
        {
          q: 'Ako sa určuje úroveň rizika?',
          a: 'Vysoké znamená, že fotka obsahuje polohu. Stredné znamená osobné, časové alebo AI údaje bez polohy. Nízke znamená, že nič z toho sa v metadátach nenašlo.',
        },
        {
          q: 'Načíta sa mapa automaticky?',
          a: 'Nie. Súradnice sa zobrazujú ako text. OpenStreetMap sa otvorí na novej karte len po kliknutí na tlačidlo; inak poloha nikdy neopustí vaše zariadenie.',
        },
        {
          q: 'Môže fotka prezradiť moju polohu aj bez GPS?',
          a: 'Metadáta sú len jeden zdroj. To, čo je na snímke vidieť — tabule, pamiatky, odrazy — môže miesto prezradiť tiež, a táto kontrola to nerozpozná.',
        },
      ],
    },
    'metadata-size': {
      title: 'Veľkosť metadát — koľko metadát je vo fotke?',
      description:
        'Zmerajte, koľko metadát obrázok obsahuje: celkové bajty, podiel na súbore, najväčšie bloky EXIF, C2PA či promptov a úroveň rizika pre súkromie. Zadarmo, bez nahrávania.',
      intro:
        'Zistite, aká časť súboru sú metadáta, a nie obraz. Nástroj vypíše každý blok metadát podľa veľkosti — EXIF, XMP, C2PA, vložené náhľady, AI prompty a workflow — ukáže jeho podiel na súbore a ohodnotí riziko pre súkromie.',
      steps: [
        'Pretiahnite jeden alebo viac obrázkov do poľa vyššie.',
        'Porovnajte veľkosť metadát a ich podiel v každom súbore, blok po bloku.',
        'Odstráňte metadáta, aby boli súbory menšie a bezpečnejšie na zdieľanie.',
      ],
      faq: [
        {
          q: 'Prečo niektoré súbory obsahujú toľko metadát?',
          a: 'Vložené náhľady, manifesty C2PA s miniatúrami a workflow ComfyUI môžu pridať desiatky až stovky kilobajtov, kým základný EXIF má zvyčajne len pár kilobajtov.',
        },
        {
          q: 'Prečo je farebný profil označený ako zachovaný?',
          a: 'Farebný profil ICC je potrebný na správne zobrazenie farieb, preto ho čistič ponechá. Do súčtu metadát sa nezapočítava.',
        },
        {
          q: 'Zmení odstránenie metadát obrázok?',
          a: 'Nie. Odstránia sa len bloky metadát; obrazové dáta sa skopírujú bez zmeny, takže sa súbor zmenší bez straty kvality.',
        },
      ],
    },
  },
};

export default tools;
