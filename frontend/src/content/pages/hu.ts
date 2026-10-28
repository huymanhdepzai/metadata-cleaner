import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'A All Metadata Cleanerről',
    description:
      'A All Metadata Cleaner ingyenes, adatvédelmet előtérbe helyező eszköz, amely a böngészőben megjeleníti és eltávolítja a képek EXIF, GPS, C2PA adatait és MI-promptjait.',
    intro:
      'A All Metadata Cleaner ingyenes webes eszköz a képfájlokban rejtett információk megtekintésére és eltávolítására: EXIF és GPS-helyadatok, XMP, IPTC, C2PA Content Credentials, valamint az MI-képgenerátorok által beágyazott promptok és munkafolyamatok.',
    sections: [
      {
        heading: 'Miért készítettük',
        paragraphs: [
          'A fotók és az MI-képek gyakran többet árulnak el, mint gondolnánk: hol készült a fotó, milyen eszközzel, ki szerkesztette, vagy pontosan milyen prompt áll egy MI-kép mögött. A legtöbb metaadat-eltávolító feltölti a fájlokat egy szerverre, vagy újratömöríti őket. Olyan eszközt akartunk, amely egyiket sem teszi.',
        ],
      },
      {
        heading: 'Hogyan működik',
        paragraphs: ['Minden a saját eszközödön történik:'],
        bullets: [
          'A böngésző beolvassa a fájlokat, és elemzi a szerkezetüket — JPEG-szegmensek, PNG-chunkok, WebP- és HEIC/AVIF-dobozok.',
          'A metaadat-blokkokat bájtszinten vágja ki; a képadatokat változatlanul másolja, így a minőség teljesen azonos marad.',
          'Minden megtisztított fájlt újra elemez, hogy ellenőrizhesd, mi került eltávolításra.',
        ],
      },
      {
        heading: 'Alapelveink',
        paragraphs: ['Néhány szabály vezérli minden döntésünket:'],
        bullets: [
          'Az adatvédelem az első: a képeket soha nem töltjük fel, nem tároljuk és nem látjuk.',
          'Őszinteség: elmondjuk, mire nem képes az eszköz, például a pixelekbe ágyazott láthatatlan vízjelek eltávolítására.',
          'Ingyenes, fiók, vízjel és reklámok nélkül.',
        ],
      },
      {
        heading: 'Kinek szól',
        paragraphs: [
          'Mindenkinek, aki képeket oszt meg: akik egy fotó közzététele előtt védeni szeretnék a tartózkodási helyüket, fotósoknak, akik ügyfeleiknek adnak át munkákat, alkotóknak, akik titokban tartanák a promptjaikat, és mindenkinek, akinek valódi fotóját tévesen MI-nek jelölték. Kérünk mindenkit, hogy tartsa be a platformok MI-tartalom jelölésére vonatkozó szabályait.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Adatvédelmi szabályzat',
    description:
      'Hogyan kezeli a All Metadata Cleaner az adataidat: a képek a böngészőben kerülnek feldolgozásra, és soha nem töltődnek fel. Nincs fiók, nincs követés, nincs reklám.',
    intro:
      'Ez a szabályzat elmagyarázza, milyen adatokat kezel a All Metadata Cleaner, amikor a weboldalt használod. Röviden: a képeid soha nem hagyják el az eszközödet, és nem követünk téged.',
    sections: [
      {
        heading: 'A képeid az eszközödön maradnak',
        paragraphs: [
          'A hozzáadott képeket a saját böngésződ olvassa be és dolgozza fel Web Workerek segítségével. Nem töltődnek fel egyetlen szerverre sem, és mi soha nem kapjuk meg, nem tároljuk és nem látjuk őket. Az oldal betöltése után akár le is választhatod az internetet — az eszköz továbbra is működik.',
        ],
      },
      {
        heading: 'Amit nem gyűjtünk',
        paragraphs: ['Az oldalt úgy terveztük, hogy a lehető legkevesebbet gyűjtse:'],
        bullets: [
          'Nincs szükség fiókra, regisztrációra vagy e-mail-címre.',
          'Nem töltünk be elemző, hirdetési vagy közösségimédia-követő szkripteket, és nem kérünk le harmadik féltől származó betűtípusokat vagy szkripteket.',
          'A képeid tartalmáról vagy metaadatairól semmilyen információ nem kerül elküldésre sehová.',
        ],
      },
      {
        heading: 'A böngészőben tárolt adatok',
        paragraphs: ['Az oldal csak két beállítást jegyez meg, az eszközödön:'],
        bullets: [
          'A választott nyelvet, amelyet a helyi tárolóban és egy saját sütiben tárolunk, hogy a kezdőlap ezen a nyelven nyíljon meg.',
          'A választott témát (világos, sötét vagy rendszer szerinti), amelyet a helyi tárolóban tárolunk.',
        ],
      },
      {
        heading: 'Tárhely és szervernaplók',
        paragraphs: [
          'A weboldalt saját szerverünk szolgálja ki. Mint minden webszerver, ez is kezeli a szokásos kérésadatokat — például az IP-címet, a böngésző típusát és a kért oldalt — az oldal kiszolgálása és a visszaélések elleni védelem érdekében. A böngésződ nyelve alapján választhatjuk ki az alapértelmezett nyelvet. Ezeket az adatokat nem használjuk az azonosításodra vagy profilalkotásra.',
        ],
      },
      {
        heading: 'A szabályzat módosítása',
        paragraphs: [
          'Ha az oldal adatkezelése megváltozik, frissítjük ezt az oldalt és a tetején lévő dátumot. Ha a frissítés után is használod az oldalt, elfogadod a módosított szabályzatot.',
        ],
      },
    ],
  },
  terms: {
    title: 'Felhasználási feltételek',
    description:
      'Felhasználási feltételek: ingyenes, adott állapotában nyújtott eszköz, a megtisztított képek felhasználásáért viselt felelősséged és felelősségünk korlátai.',
    intro:
      'A All Metadata Cleaner használatával elfogadod ezeket a feltételeket. Olvasd el őket a kezdőlapon található jogi nyilatkozattal és az adatvédelmi szabályzatunkkal együtt.',
    sections: [
      {
        heading: 'A szolgáltatás',
        paragraphs: [
          'A All Metadata Cleaner ingyenes webes eszköz, amely a saját eszközödön vizsgálja és távolítja el a képfájlok metaadatait. Bármely részét bármikor, előzetes értesítés nélkül módosíthatjuk, fejleszthetjük vagy megszüntethetjük.',
        ],
      },
      {
        heading: 'Megengedett használat',
        paragraphs: ['Te felelsz a feldolgozott fájlokért és az eredmények felhasználásáért. Vállalod, hogy az eszközt nem használod arra, hogy:'],
        bullets: [
          'jogszabályt sérts, vagy mások jogait megsértsd, beleértve a szerzői jogot és a magánszférához való jogot;',
          'elrejtsd az MI által létrehozott tartalmat, ha jogszabály vagy platformszabály előírja annak jelölését;',
          'szerzői jogi, licenc- vagy forrásmegjelölési adatokat távolíts el olyan képekről, amelyek nem a tieid, vagy amelyek módosítására nincs jogod.',
        ],
      },
      {
        heading: 'Nincs garancia',
        paragraphs: [
          'Az eszközt „adott állapotában” és „rendelkezésre állás szerint” biztosítjuk, mindennemű kifejezett vagy hallgatólagos garancia nélkül. Nem garantáljuk, hogy minden metaadat-típust eltávolít, hogy az eredmények hibamentesek, vagy hogy a platformok a megtisztított képeket bizonyos módon kezelik. Mindig őrizd meg az eredeti fájlok másolatát.',
        ],
      },
      {
        heading: 'Felelősségkorlátozás',
        paragraphs: [
          'A jogszabályok által megengedett legteljesebb mértékben nem felelünk semmilyen közvetlen, közvetett, véletlen vagy következményes veszteségért vagy kárért — beleértve az adatok, fájlok vagy nyereség elvesztését —, amely az eszköz használatából vagy használhatatlanságából ered. Egyes joghatóságok nem engednek meg bizonyos korlátozásokat; ilyenkor azok csak a megengedett mértékben érvényesek.',
        ],
      },
      {
        heading: 'A feltételek módosítása',
        paragraphs: [
          'Ezeket a feltételeket időről időre frissíthetjük. A tetején lévő dátum mutatja a legfrissebb változatot. Ha egy módosítás után is használod az eszközt, elfogadod a frissített feltételeket.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kapcsolat',
    description:
      'Vedd fel a kapcsolatot a All Metadata Cleaner csapatával: jelents hibát, javasolj funkciót, vagy tegyél fel adatvédelmi kérdést. Minden üzenetet elolvasunk, és mihamarabb válaszolunk.',
    intro:
      'Szívesen fogadjuk a kérdéseket, hibajelentéseket és ötleteket. Írj nekünk e-mailt, és mihamarabb válaszolunk.',
    sections: [
      {
        heading: 'Miről írhatsz nekünk',
        paragraphs: ['Különösen örülünk, ha ezekről hallunk:'],
        bullets: [
          'Hibák — egy fájl, amely nem tisztítható meg, vagy metaadatok, amelyeket az eszköz nem ismer fel vagy nem távolít el.',
          'Funkciókérések — új formátumok, beállítások vagy nyelvek, amelyeket szívesen látnál.',
          'Adatvédelmi vagy jogi kérdések a weboldallal kapcsolatban.',
        ],
      },
      {
        heading: 'Mielőtt írsz',
        paragraphs: [
          'Kérjük, ne küldj privát fotókat. Hiba jelentésekor add meg a fájlformátumot, a fájlt létrehozó fényképezőgépet, telefont vagy alkalmazást, a böngésződet és azt, hogy mit vártál. Ha a hiba reprodukálásához fájl szükséges, olyat küldj, amely nem tartalmaz semmi érzékenyt.',
        ],
      },
    ],
  },
};

export default pages;
