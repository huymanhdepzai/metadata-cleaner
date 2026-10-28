import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'O All Metadata Cleaner',
    description:
      'All Metadata Cleaner je bezplatný nástroj s důrazem na soukromí, který přímo v prohlížeči zobrazí a odstraní EXIF, GPS, XMP, IPTC, C2PA a AI prompty z obrázků.',
    intro:
      'All Metadata Cleaner je bezplatný webový nástroj pro zobrazení a odstranění skrytých informací v souborech obrázků: EXIF a polohy GPS, XMP, IPTC, Content Credentials (C2PA) a promptů či workflow, které vkládají generátory AI.',
    sections: [
      {
        heading: 'Proč jsme ho vytvořili',
        paragraphs: [
          'Fotky a AI obrázky často obsahují víc, než by člověk čekal: kde byla fotka pořízena, jakým zařízením, kdo ji upravoval nebo přesný prompt AI obrázku. Většina nástrojů na odstranění metadat soubory nahrává na server nebo je znovu komprimuje. Chtěli jsme nástroj, který nedělá ani jedno.',
        ],
      },
      {
        heading: 'Jak to funguje',
        paragraphs: ['Vše probíhá na vašem zařízení:'],
        bullets: [
          'Prohlížeč načte každý soubor a analyzuje jeho strukturu — segmenty JPEG, chunky PNG a boxy WebP a HEIC/AVIF.',
          'Bloky metadat se odstraní na úrovni bajtů; obrazová data se zkopírují beze změny, takže kvalita zůstává stejná.',
          'Každý vyčištěný soubor se znovu analyzuje, abyste si mohli ověřit, co bylo odstraněno.',
        ],
      },
      {
        heading: 'Naše zásady',
        paragraphs: ['Každé naše rozhodnutí řídí několik pravidel:'],
        bullets: [
          'Soukromí na prvním místě: obrázky se nikdy nenahrávají, neukládají ani je nevidíme.',
          'Poctivost: vysvětlujeme, co nástroj neumí, například odstranit neviditelné vodoznaky v pixelech.',
          'Zdarma, bez účtu, bez vodoznaku a bez reklam.',
        ],
      },
      {
        heading: 'Pro koho je',
        paragraphs: [
          'Pro každého, kdo sdílí obrázky: pro lidi, kteří chtějí před zveřejněním fotky chránit svou polohu, fotografy předávající zakázky klientům, tvůrce, kteří si chtějí nechat prompty pro sebe, a každého, jehož skutečná fotka byla mylně označena jako AI. Žádáme všechny, aby dodržovali pravidla platforem pro označování obsahu vytvořeného AI.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Zásady ochrany soukromí',
    description:
      'Jak All Metadata Cleaner nakládá s vašimi daty: obrázky se zpracovávají v prohlížeči a nikdy se nenahrávají. Bez účtů, bez sledování, bez reklam.',
    intro:
      'Tyto zásady vysvětlují, jaká data All Metadata Cleaner zpracovává při používání webu. Stručně: vaše obrázky nikdy neopustí vaše zařízení a nesledujeme vás.',
    sections: [
      {
        heading: 'Vaše obrázky zůstávají ve vašem zařízení',
        paragraphs: [
          'Přidané obrázky načítá a zpracovává váš vlastní prohlížeč pomocí Web Workers. Nenahrávají se na žádný server a my je nikdy nepřijímáme, neukládáme ani nevidíme. Po načtení stránky se můžete dokonce odpojit od internetu a nástroj bude dál fungovat.',
        ],
      },
      {
        heading: 'Co neshromažďujeme',
        paragraphs: ['Web je navržen tak, aby shromažďoval co nejméně:'],
        bullets: [
          'Nejsou potřeba účty, registrace ani e-mailové adresy.',
          'Nenačítají se žádné analytické, reklamní ani sledovací skripty sociálních sítí a nestahují se písma ani skripty třetích stran.',
          'Žádné informace o obsahu ani metadatech vašich obrázků se nikam neodesílají.',
        ],
      },
      {
        heading: 'Data uložená v prohlížeči',
        paragraphs: ['Web si ve vašem zařízení pamatuje jen dvě nastavení:'],
        bullets: [
          'Zvolený jazyk — uložený v místním úložišti a ve vlastním cookie, aby se domovská stránka otevřela v tomto jazyce.',
          'Zvolený motiv (světlý, tmavý nebo podle systému) — uložený v místním úložišti.',
        ],
      },
      {
        heading: 'Hosting a serverové logy',
        paragraphs: [
          'Web je doručován z našeho vlastního serveru. Jako každý webový server zpracovává běžné údaje o požadavcích, například IP adresu, typ prohlížeče a požadovanou stránku, aby mohl web doručovat a chránit ho před zneužitím. Jazyk vašeho prohlížeče může sloužit k volbě výchozího jazyka. Tyto údaje nepoužíváme k vaší identifikaci ani profilování.',
        ],
      },
      {
        heading: 'Změny těchto zásad',
        paragraphs: [
          'Pokud se způsob, jakým web nakládá s daty, změní, aktualizujeme tuto stránku i datum nahoře. Pokračováním v používání webu po aktualizaci vyjadřujete souhlas s upravenými zásadami.',
        ],
      },
    ],
  },
  terms: {
    title: 'Podmínky použití',
    description:
      'Podmínky použití All Metadata Cleaner: bezplatný nástroj poskytovaný tak, jak je, vaše odpovědnost za použití vyčištěných obrázků a meze naší odpovědnosti.',
    intro:
      'Používáním All Metadata Cleaner souhlasíte s těmito podmínkami. Přečtěte si je spolu s upozorněním na domovské stránce a našimi Zásadami ochrany soukromí.',
    sections: [
      {
        heading: 'Služba',
        paragraphs: [
          'All Metadata Cleaner je bezplatný webový nástroj, který ve vašem zařízení prověřuje a odstraňuje metadata ze souborů obrázků. Kteroukoli jeho část můžeme kdykoli a bez upozornění změnit, vylepšit nebo ukončit.',
        ],
      },
      {
        heading: 'Přípustné použití',
        paragraphs: ['Za zpracované soubory a způsob použití výsledků odpovídáte vy. Zavazujete se, že nástroj nepoužijete k tomu, abyste:'],
        bullets: [
          'porušili zákon nebo práva druhých, včetně autorských práv a práva na soukromí;',
          'skryli obsah vytvořený AI tam, kde zákon nebo pravidla platformy vyžadují jeho označení;',
          'odstranili informace o autorských právech, licenci či autorství z obrázků, které vám nepatří nebo které nemáte právo upravovat.',
        ],
      },
      {
        heading: 'Bez záruky',
        paragraphs: [
          'Nástroj je poskytován „tak, jak je“ a „podle dostupnosti“, bez jakýchkoli výslovných či předpokládaných záruk. Nezaručujeme, že odstraní všechny druhy metadat, že výsledky budou bez chyb ani že platformy budou s vyčištěnými obrázky zacházet určitým způsobem. Vždy si ponechte kopii původních souborů.',
        ],
      },
      {
        heading: 'Omezení odpovědnosti',
        paragraphs: [
          'V maximálním rozsahu povoleném zákonem neodpovídáme za žádné přímé, nepřímé, nahodilé ani následné ztráty či škody — včetně ztráty dat, souborů nebo zisku — vzniklé používáním nebo nemožností používat nástroj. Některé jurisdikce určitá omezení nepřipouštějí; v takovém případě platí jen v povoleném rozsahu.',
        ],
      },
      {
        heading: 'Změny podmínek',
        paragraphs: [
          'Tyto podmínky můžeme čas od času aktualizovat. Datum nahoře ukazuje nejnovější verzi. Pokračováním v používání nástroje po změně vyjadřujete souhlas s aktualizovanými podmínkami.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Kontaktujte tým All Metadata Cleaner: nahlaste chybu, navrhněte funkci nebo se zeptejte na soukromí. Čteme každou zprávu a odpovídáme co nejdříve.',
    intro:
      'Dotazy, hlášení chyb i nápady jsou vítány. Napište nám e-mail a ozveme se co nejdříve.',
    sections: [
      {
        heading: 'O čem nám můžete napsat',
        paragraphs: ['Obzvlášť rádi uslyšíme o:'],
        bullets: [
          'Chybách — soubor, který nejde vyčistit, nebo metadata, která nejsou rozpoznána či odstraněna.',
          'Návrzích funkcí — nové formáty, možnosti nebo jazyky, které byste uvítali.',
          'Dotazech k soukromí nebo právním otázkám týkajícím se webu.',
        ],
      },
      {
        heading: 'Než napíšete',
        paragraphs: [
          'Neposílejte prosím soukromé fotky. Při hlášení problému uveďte formát souboru, fotoaparát, telefon nebo aplikaci, která ho vytvořila, váš prohlížeč a co jste očekávali. Je-li k reprodukci problému potřeba soubor, pošlete takový, který neobsahuje nic citlivého.',
        ],
      },
    ],
  },
};

export default pages;
