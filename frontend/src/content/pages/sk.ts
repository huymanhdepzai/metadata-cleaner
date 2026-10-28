import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'O All Metadata Cleaner',
    description:
      'All Metadata Cleaner je bezplatný nástroj s dôrazom na súkromie, ktorý priamo v prehliadači zobrazí a odstráni EXIF, GPS, XMP, IPTC, C2PA a AI prompty z obrázkov.',
    intro:
      'All Metadata Cleaner je bezplatný webový nástroj na zobrazenie a odstránenie skrytých informácií v súboroch obrázkov: EXIF a polohy GPS, XMP, IPTC, Content Credentials (C2PA) a promptov či workflow, ktoré vkladajú generátory AI.',
    sections: [
      {
        heading: 'Prečo sme ho vytvorili',
        paragraphs: [
          'Fotky a AI obrázky často obsahujú viac, než by človek čakal: kde bola fotka urobená, akým zariadením, kto ju upravoval alebo presný prompt AI obrázka. Väčšina nástrojov na odstránenie metadát súbory nahráva na server alebo ich znova komprimuje. Chceli sme nástroj, ktorý nerobí ani jedno.',
        ],
      },
      {
        heading: 'Ako to funguje',
        paragraphs: ['Všetko prebieha vo vašom zariadení:'],
        bullets: [
          'Prehliadač načíta každý súbor a analyzuje jeho štruktúru — segmenty JPEG, chunky PNG a boxy WebP a HEIC/AVIF.',
          'Bloky metadát sa odstránia na úrovni bajtov; obrazové dáta sa skopírujú bez zmeny, takže kvalita zostáva rovnaká.',
          'Každý vyčistený súbor sa znova analyzuje, aby ste si mohli overiť, čo bolo odstránené.',
        ],
      },
      {
        heading: 'Naše zásady',
        paragraphs: ['Každé naše rozhodnutie riadi niekoľko pravidiel:'],
        bullets: [
          'Súkromie na prvom mieste: obrázky sa nikdy nenahrávajú, neukladajú ani ich nevidíme.',
          'Čestnosť: vysvetľujeme, čo nástroj nedokáže, napríklad odstrániť neviditeľné vodoznaky v pixeloch.',
          'Zadarmo, bez účtu, bez vodoznaku a bez reklám.',
        ],
      },
      {
        heading: 'Pre koho je',
        paragraphs: [
          'Pre každého, kto zdieľa obrázky: pre ľudí, ktorí chcú pred zverejnením fotky chrániť svoju polohu, fotografov odovzdávajúcich zákazky klientom, tvorcov, ktorí si chcú nechať prompty pre seba, a každého, koho skutočná fotka bola omylom označená ako AI. Žiadame všetkých, aby dodržiavali pravidlá platforiem na označovanie obsahu vytvoreného AI.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Zásady ochrany súkromia',
    description:
      'Ako All Metadata Cleaner zaobchádza s vašimi údajmi: obrázky sa spracúvajú v prehliadači a nikdy sa nenahrávajú. Bez účtov, bez sledovania, bez reklám.',
    intro:
      'Tieto zásady vysvetľujú, aké údaje All Metadata Cleaner spracúva pri používaní webu. Stručne: vaše obrázky nikdy neopustia vaše zariadenie a nesledujeme vás.',
    sections: [
      {
        heading: 'Vaše obrázky zostávajú vo vašom zariadení',
        paragraphs: [
          'Pridané obrázky načítava a spracúva váš vlastný prehliadač pomocou Web Workers. Nenahrávajú sa na žiadny server a my ich nikdy neprijímame, neukladáme ani nevidíme. Po načítaní stránky sa môžete dokonca odpojiť od internetu a nástroj bude ďalej fungovať.',
        ],
      },
      {
        heading: 'Čo nezhromažďujeme',
        paragraphs: ['Web je navrhnutý tak, aby zhromažďoval čo najmenej:'],
        bullets: [
          'Nie sú potrebné účty, registrácia ani e-mailové adresy.',
          'Nenačítavajú sa žiadne analytické, reklamné ani sledovacie skripty sociálnych sietí a nesťahujú sa písma ani skripty tretích strán.',
          'Žiadne informácie o obsahu ani metadátach vašich obrázkov sa nikam neodosielajú.',
        ],
      },
      {
        heading: 'Údaje uložené v prehliadači',
        paragraphs: ['Web si vo vašom zariadení pamätá iba dve nastavenia:'],
        bullets: [
          'Zvolený jazyk — uložený v miestnom úložisku a vo vlastnom cookie, aby sa domovská stránka otvorila v tomto jazyku.',
          'Zvolený motív (svetlý, tmavý alebo podľa systému) — uložený v miestnom úložisku.',
        ],
      },
      {
        heading: 'Hosting a serverové logy',
        paragraphs: [
          'Web sa doručuje z nášho vlastného servera. Ako každý webový server spracúva bežné údaje o požiadavkách, napríklad IP adresu, typ prehliadača a požadovanú stránku, aby mohol web doručovať a chrániť ho pred zneužitím. Jazyk vášho prehliadača môže slúžiť na výber predvoleného jazyka. Tieto údaje nepoužívame na vašu identifikáciu ani profilovanie.',
        ],
      },
      {
        heading: 'Zmeny týchto zásad',
        paragraphs: [
          'Ak sa spôsob, akým web zaobchádza s údajmi, zmení, aktualizujeme túto stránku aj dátum hore. Pokračovaním v používaní webu po aktualizácii vyjadrujete súhlas s upravenými zásadami.',
        ],
      },
    ],
  },
  terms: {
    title: 'Podmienky používania',
    description:
      'Podmienky používania All Metadata Cleaner: bezplatný nástroj poskytovaný tak, ako je, vaša zodpovednosť za použitie vyčistených obrázkov a hranice našej zodpovednosti.',
    intro:
      'Používaním All Metadata Cleaner súhlasíte s týmito podmienkami. Prečítajte si ich spolu s upozornením na domovskej stránke a našimi Zásadami ochrany súkromia.',
    sections: [
      {
        heading: 'Služba',
        paragraphs: [
          'All Metadata Cleaner je bezplatný webový nástroj, ktorý vo vašom zariadení preveruje a odstraňuje metadáta zo súborov obrázkov. Ktorúkoľvek jeho časť môžeme kedykoľvek a bez upozornenia zmeniť, vylepšiť alebo ukončiť.',
        ],
      },
      {
        heading: 'Prípustné používanie',
        paragraphs: ['Za spracované súbory a spôsob použitia výsledkov zodpovedáte vy. Zaväzujete sa, že nástroj nepoužijete na to, aby ste:'],
        bullets: [
          'porušili zákon alebo práva iných, vrátane autorských práv a práva na súkromie;',
          'skryli obsah vytvorený AI tam, kde zákon alebo pravidlá platformy vyžadujú jeho označenie;',
          'odstránili informácie o autorských právach, licencii či autorstve z obrázkov, ktoré vám nepatria alebo ktoré nemáte právo upravovať.',
        ],
      },
      {
        heading: 'Bez záruky',
        paragraphs: [
          'Nástroj sa poskytuje „tak, ako je“ a „podľa dostupnosti“, bez akýchkoľvek výslovných či predpokladaných záruk. Nezaručujeme, že odstráni všetky druhy metadát, že výsledky budú bez chýb ani že platformy budú s vyčistenými obrázkami zaobchádzať určitým spôsobom. Vždy si ponechajte kópiu pôvodných súborov.',
        ],
      },
      {
        heading: 'Obmedzenie zodpovednosti',
        paragraphs: [
          'V maximálnom rozsahu povolenom zákonom nezodpovedáme za žiadne priame, nepriame, náhodné ani následné straty či škody — vrátane straty údajov, súborov alebo zisku — vzniknuté používaním alebo nemožnosťou používať nástroj. Niektoré jurisdikcie určité obmedzenia nepripúšťajú; v takom prípade platia len v povolenom rozsahu.',
        ],
      },
      {
        heading: 'Zmeny podmienok',
        paragraphs: [
          'Tieto podmienky môžeme z času na čas aktualizovať. Dátum hore ukazuje najnovšiu verziu. Pokračovaním v používaní nástroja po zmene vyjadrujete súhlas s aktualizovanými podmienkami.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Kontaktujte tím All Metadata Cleaner: nahláste chybu, navrhnite funkciu alebo sa opýtajte na súkromie. Čítame každú správu a odpovedáme čo najskôr.',
    intro:
      'Otázky, hlásenia chýb aj nápady sú vítané. Napíšte nám e-mail a ozveme sa čo najskôr.',
    sections: [
      {
        heading: 'O čom nám môžete napísať',
        paragraphs: ['Obzvlášť radi sa dozvieme o:'],
        bullets: [
          'Chybách — súbor, ktorý nejde vyčistiť, alebo metadáta, ktoré nie sú rozpoznané či odstránené.',
          'Návrhoch funkcií — nové formáty, možnosti alebo jazyky, ktoré by ste privítali.',
          'Otázkach o súkromí alebo právnych otázkach týkajúcich sa webu.',
        ],
      },
      {
        heading: 'Skôr než napíšete',
        paragraphs: [
          'Neposielajte, prosím, súkromné fotky. Pri hlásení problému uveďte formát súboru, fotoaparát, telefón alebo aplikáciu, ktorá ho vytvorila, váš prehliadač a čo ste očakávali. Ak je na reprodukciu problému potrebný súbor, pošlite taký, ktorý neobsahuje nič citlivé.',
        ],
      },
    ],
  },
};

export default pages;
