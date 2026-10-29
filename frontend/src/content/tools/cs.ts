import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Bezplatné nástroje pro metadata obrázků',
    description:
      'Bezplatné nástroje v prohlížeči pro zobrazení, analýzu a odstranění metadat obrázků: prohlížeč EXIF, kontrola soukromí, velikost metadat, odstranění EXIF, GPS a C2PA.',
    intro:
      'Všechny nástroje běží ve vašem prohlížeči na stejném jádru: obrázky se nikdy nenahrávají a nic se znovu nekomprimuje. Vyberte, co potřebujete — nahlédnout do fotky, zjistit, co prozrazuje, nebo ji vyčistit.',
  },
  cards: {
    cleaner: { name: 'Odstranit metadata', text: 'Odstraňte EXIF, GPS, XMP, IPTC, C2PA a AI prompty jedním kliknutím bez ztráty kvality.', detail: 'Přetáhněte obrázky, zkontrolujte přehled a stáhněte čisté kopie; pixely, orientace i barevný profil zůstanou beze změny.' },
    'view-metadata': { name: 'Zobrazit metadata', text: 'Prohlédněte si všechna skrytá pole fotky: fotoaparát, datum, GPS, XMP, C2PA a AI prompty.', detail: 'Jen pro čtení: soubor se nikdy nemění, takže je to bezpečné i pro fotky, které jste dostali nebo stáhli.' },
    'privacy-check': { name: 'Kontrola soukromí fotky', text: 'Zjistěte, co fotka prozrazuje — polohu na mapě, osobní údaje a čas pořízení.', detail: 'Ohodnotí riziko každé fotky jako vysoké, střední nebo nízké a ukáže GPS souřadnice, které otevřete na mapě.' },
    'metadata-size': { name: 'Velikost metadat', text: 'Změřte, kolik bajtů metadat soubor obsahuje a jak jsou rizikové.', detail: 'Seřadí bloky metadat podle velikosti, abyste viděli, zda soubor zvětšují náhledy, XMP nebo vložené prompty.' },
    'remove-exif': { name: 'Odstranit EXIF', text: 'Smažte údaje o fotoaparátu, datum a sériové číslo, orientace a barvy zůstanou.', detail: 'Funguje s JPG, HEIC, PNG a WebP; minimální značka orientace zůstane, aby se fotky neotáčely.' },
    'remove-gps': { name: 'Odstranit polohu GPS', text: 'Odstraňte souřadnice GPS z fotek z telefonu dřív, než je pošlete.', detail: 'Hodí se před zveřejněním fotek domova, dětí či pracoviště nebo před jejich posláním cizím lidem.' },
    'remove-c2pa': { name: 'Odstranit C2PA', text: 'Odstraňte manifesty Content Credentials (C2PA) z JPG, PNG, WebP a HEIC.', detail: 'Odstraní manifest, který spouští štítky AI; neviditelné vodoznaky v pixelech, jako SynthID, zůstanou nedotčeny.' },
    'remove-prompts': { name: 'Odstranit AI prompty', text: 'Odstraňte parametry Stable Diffusion a workflow ComfyUI ze souborů PNG.', detail: 'Skryje prompt, seed, model i graf uzlů, aby nikdo nezkopíroval vaše nastavení generování.' },
    batch: { name: 'Hromadné čištění', text: 'Vyčistěte až 50 obrázků najednou a stáhněte je jako jeden ZIP.', detail: 'Každý soubor si zachová původní formát; soubory, které nešlo zpracovat, jsou uvedeny s důvodem.' },
  },
  groups: {
    inspect: { title: 'Zkontrolujte své fotky', text: 'Zjistěte, co obrázek prozrazuje, než ho sdílíte — soubor se jen čte, nikdy nemění.' },
    remove: { title: 'Odstranění metadat podle potřeby', text: 'Vyberte formát nebo úkol — každý návod má čistič přímo v sobě.' },
  },
  tools: {
    'view-metadata': {
      title: 'Zobrazit metadata obrázku online — EXIF, XMP, C2PA',
      description:
        'Bezplatný prohlížeč metadat: zobrazte EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) a AI prompty v JPG, PNG, WebP a HEIC přímo v prohlížeči, bez nahrávání.',
      intro:
        'Přetáhněte fotku a uvidíte všechny skryté informace — fotoaparát a objektiv, datum pořízení, polohu GPS, editační software, Content Credentials a AI prompty — seskupené podle zdroje. Nic se nemění ani nenahrává.',
      steps: [
        'Přetáhněte jeden nebo více obrázků do pole výše, nebo klepněte na „Vybrat obrázky“.',
        'Otevřete soubor a zobrazte souhrn soukromí, signály AI a úplný seznam polí metadat.',
        'Prohledejte pole a rozhodněte se, zda soubor ponecháte, nebo metadata odstraníte.',
      ],
      faq: [
        {
          q: 'Změní zobrazení metadat můj soubor?',
          a: 'Ne. Soubor se jen čte. K odstranění metadat použijte čistič — obrázky zůstanou načtené, nemusíte je přidávat znovu.',
        },
        {
          q: 'Jaká metadata uvidím?',
          a: 'EXIF (včetně GPS), XMP, IPTC, ICC, C2PA Content Credentials, textové chunky PNG s prompty nebo workflow ComfyUI a bloky struktury souboru.',
        },
        {
          q: 'Nahrávají se moje fotky?',
          a: 'Ne. Soubory čte váš prohlížeč a nikdy neopustí vaše zařízení.',
        },
      ],
    },
    'privacy-check': {
      title: 'Kontrola soukromí fotky — najděte GPS a osobní údaje',
      description:
        'Zkontrolujte před sdílením, co fotka prozrazuje: polohu GPS k otevření na mapě, autora, sériové číslo, čas pořízení a data o AI. Zdarma, bez nahrávání.',
      intro:
        'Zjistěte, co fotka vyzradí, než ji zveřejníte. Kontrola ukáže, zda obsahuje polohu GPS (a kam ukazuje), osobní údaje jako autora nebo sériové číslo zařízení, čas pořízení a data o původu AI — s jednoduchou úrovní rizika.',
      steps: [
        'Přetáhněte do pole výše fotky, které chcete sdílet.',
        'Přečtěte si úroveň rizika a nalezené údaje o poloze, osobě a čase v každém souboru.',
        'Pokud se najde poloha GPS, otevřete ji na mapě a uvidíte přesně to, co ostatní — pak ji odstraňte.',
      ],
      faq: [
        {
          q: 'Jak se určuje úroveň rizika?',
          a: 'Vysoké znamená, že fotka obsahuje polohu. Střední znamená osobní, časové nebo AI údaje bez polohy. Nízké znamená, že nic z toho nebylo v metadatech nalezeno.',
        },
        {
          q: 'Načítá se mapa automaticky?',
          a: 'Ne. Souřadnice se zobrazují jako text. OpenStreetMap se otevře v nové kartě jen po kliknutí na tlačítko; jinak poloha nikdy neopustí vaše zařízení.',
        },
        {
          q: 'Může fotka prozradit mou polohu i bez GPS?',
          a: 'Metadata jsou jen jeden zdroj. To, co je na snímku vidět — cedule, památky, odrazy — může místo prozradit také, a tato kontrola to nerozpozná.',
        },
      ],
    },
    'metadata-size': {
      title: 'Velikost metadat — kolik metadat je ve fotce?',
      description:
        'Změřte, kolik metadat obrázek obsahuje: celkové bajty, podíl na souboru, největší bloky EXIF, XMP, C2PA či promptů a úroveň rizika pro soukromí. Zdarma, bez nahrávání.',
      intro:
        'Zjistěte, jaká část souboru jsou metadata, a ne obraz. Nástroj vypíše každý blok metadat podle velikosti — EXIF, XMP, C2PA, vložené náhledy, AI prompty a workflow — ukáže jeho podíl na souboru a ohodnotí riziko pro soukromí.',
      steps: [
        'Přetáhněte jeden nebo více obrázků do pole výše.',
        'Porovnejte velikost metadat a jejich podíl v každém souboru, blok po bloku.',
        'Odstraňte metadata, aby byly soubory menší a bezpečnější ke sdílení.',
      ],
      faq: [
        {
          q: 'Proč některé soubory obsahují tolik metadat?',
          a: 'Vložené náhledy, manifesty C2PA s miniaturami a workflow ComfyUI mohou přidat desítky až stovky kilobajtů, zatímco základní EXIF má obvykle jen pár kilobajtů.',
        },
        {
          q: 'Proč je barevný profil označen jako zachovaný?',
          a: 'Barevný profil ICC je potřeba pro správné zobrazení barev, proto ho čistič ponechá. Do součtu metadat se nezapočítává.',
        },
        {
          q: 'Změní odstranění metadat obrázek?',
          a: 'Ne. Odstraní se jen bloky metadat; obrazová data se zkopírují beze změny, takže se soubor zmenší bez ztráty kvality.',
        },
      ],
    },
  },
};

export default tools;
