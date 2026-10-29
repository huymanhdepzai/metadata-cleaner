import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Ingyenes képmetaadat-eszközök',
    description:
      'Ingyenes böngészős eszközök a képek metaadatainak megtekintéséhez, elemzéséhez és eltávolításához: EXIF-néző, adatvédelmi ellenőrzés, metaadat-méret.',
    intro:
      'Minden eszköz a böngésződben fut, ugyanazzal a motorral: a képek soha nem töltődnek fel, és semmi sem tömörül újra. Válaszd ki, amire szükséged van — nézz bele egy fotóba, ellenőrizd, mit árul el, vagy tisztítsd meg.',
  },
  cards: {
    cleaner: { name: 'Képmetaadatok eltávolítása', text: 'Távolítsd el az EXIF, GPS, XMP, IPTC, C2PA adatokat és az MI-promptokat egy kattintással, minőségromlás nélkül.', detail: 'Húzd be a képeket, nézd át a jelentést, majd töltsd le a tiszta másolatokat; a pixelek, a tájolás és a színprofil változatlan marad.' },
    'view-metadata': { name: 'Metaadatok megtekintése', text: 'Lásd a fotó összes rejtett mezőjét: fényképezőgép, dátum, GPS, XMP, C2PA és MI-promptok.', detail: 'Csak olvasás: a fájl sosem módosul, így biztonságosan ellenőrizheted a kapott vagy letöltött fotókat.' },
    'privacy-check': { name: 'Fotó adatvédelmi ellenőrzése', text: 'Tudd meg, mit árul el egy fotó — helyet a térképen, személyes adatokat és a készítés idejét.', detail: 'Minden fotót magas, közepes vagy alacsony kockázatúnak minősít, és megmutatja a térképen megnyitható GPS-koordinátákat.' },
    'metadata-size': { name: 'Metaadat-méret', text: 'Mérd meg, hány bájt metaadat van egy fájlban, és mennyire kockázatos.', detail: 'Méret szerint listázza a metaadat-blokkokat, így látod, hogy a bélyegképek, az XMP vagy a beágyazott promptok növelik-e a fájlt.' },
    'remove-exif': { name: 'EXIF eltávolítása', text: 'Töröld a fényképezőgép, a dátum és a sorozatszám adatait, a tájolás és a színek megmaradnak.', detail: 'JPG, HEIC, PNG és WebP fájlokkal működik; egy minimális tájolási címke megmarad, így a fotók nem fordulnak el.' },
    'remove-gps': { name: 'GPS-hely eltávolítása', text: 'Távolítsd el a GPS-koordinátákat a telefonos fotókból megosztás előtt.', detail: 'Hasznos, mielőtt otthonodról, gyerekeidről vagy munkahelyedről posztolsz fotót, vagy idegennek küldöd.' },
    'remove-c2pa': { name: 'C2PA eltávolítása', text: 'Távolítsd el a Content Credentials (C2PA) manifesteket JPG, PNG, WebP és HEIC fájlokból.', detail: 'Eltávolítja az MI-címkét kiváltó manifestet; a pixelekbe ágyazott láthatatlan vízjeleket, például a SynthID-t, nem érinti.' },
    'remove-prompts': { name: 'MI-promptok eltávolítása', text: 'Távolítsd el a Stable Diffusion paramétereit és a ComfyUI munkafolyamatokat PNG fájlokból.', detail: 'Elrejti a promptot, a seedet, a modellt és a node-gráfot, hogy senki ne másolhassa a generálási beállításaidat.' },
    batch: { name: 'Kötegelt tisztítás', text: 'Tisztíts meg egyszerre akár 50 képet, és töltsd le őket egy ZIP-fájlban.', detail: 'Minden fájl megtartja eredeti formátumát; a nem feldolgozható fájlok az okkal együtt jelennek meg.' },
  },
  groups: {
    inspect: { title: 'Ellenőrizze a fotóit', text: 'Nézze meg, mit árul el egy kép, mielőtt megosztja — a fájlt csak olvassuk, nem módosítjuk.' },
    remove: { title: 'Metaadatok eltávolítása igény szerint', text: 'Válasszon formátumot vagy feladatot — minden útmutatóban benne van a tisztító.' },
  },
  tools: {
    'view-metadata': {
      title: 'Képmetaadatok online megtekintése — EXIF, XMP, C2PA',
      description:
        'Ingyenes metaadat-néző: nézd meg a JPG, PNG, WebP és HEIC fájlok EXIF, GPS, XMP, IPTC, C2PA adatait és MI-promptjait a böngészőben, feltöltés nélkül.',
      intro:
        'Húzz ide egy fotót, és lásd az összes rejtett információt — fényképezőgép és objektív, készítés dátuma, GPS-pozíció, szerkesztőprogram, Content Credentials és MI-promptok — forrás szerint csoportosítva. Semmi sem módosul vagy töltődik fel.',
      steps: [
        'Húzz egy vagy több képet a fenti mezőbe, vagy koppints a „Képek kiválasztása” gombra.',
        'Nyiss meg egy fájlt az adatvédelmi összefoglaló, az MI-jelek és az összes metaadatmező megtekintéséhez.',
        'Keress a mezők között, majd döntsd el, hogy változatlanul hagyod a fájlt vagy eltávolítod a metaadatait.',
      ],
      faq: [
        {
          q: 'Megváltoztatja a fájlt a metaadatok megtekintése?',
          a: 'Nem. A fájlt csak beolvassuk. A metaadatok eltávolításához használd a tisztítót — a képek betöltve maradnak, nem kell újra hozzáadni őket.',
        },
        {
          q: 'Milyen metaadatokat láthatok?',
          a: 'EXIF (a GPS-t is beleértve), XMP, IPTC, ICC, C2PA Content Credentials, promptokat vagy ComfyUI munkafolyamatokat tartalmazó PNG szövegchunkok, valamint a fájlszerkezet blokkjai.',
        },
        {
          q: 'Feltöltődnek a fotóim?',
          a: 'Nem. A fájlokat a böngésződ olvassa be, és soha nem hagyják el az eszközödet.',
        },
      ],
    },
    'privacy-check': {
      title: 'Fotó adatvédelmi ellenőrzése — GPS és személyes adatok keresése',
      description:
        'Megosztás előtt ellenőrizd, mit árul el egy fotó: térképen megnyitható GPS-hely, szerző, sorozatszám, készítés ideje és MI-adatok. Ingyenes, feltöltés nélkül.',
      intro:
        'Tudd meg, mit fed fel egy fotó, mielőtt közzéteszed. Az ellenőrzés megmutatja, van-e benne GPS-hely (és hová mutat), személyes adat, például szerző vagy eszköz-sorozatszám, a készítés ideje és MI-eredetadat — egyszerű kockázati szinttel.',
      steps: [
        'Húzd a fenti mezőbe a megosztani kívánt fotókat.',
        'Olvasd el az egyes fájlok kockázati szintjét és a talált hely-, személyes és időadatokat.',
        'Ha GPS-pozíció található, nyisd meg a térképen, hogy lásd, pontosan mit láthatnak mások — majd távolítsd el.',
      ],
      faq: [
        {
          q: 'Hogyan dől el a kockázati szint?',
          a: 'A magas azt jelenti, hogy a fotó helyadatot tartalmaz. A közepes személyes, időbeli vagy MI-adatot hely nélkül. Az alacsony azt, hogy a metaadatokban ezek egyike sem található.',
        },
        {
          q: 'Automatikusan betöltődik a térkép?',
          a: 'Nem. A koordináták szövegként jelennek meg. Az OpenStreetMap csak akkor nyílik meg új lapon, ha a gombra kattintasz; különben a hely soha nem hagyja el az eszközödet.',
        },
        {
          q: 'Elárulhatja egy fotó a helyemet GPS nélkül is?',
          a: 'A metaadat csak egy forrás. Ami a képen látható — táblák, nevezetességek, tükröződések — szintén elárulhat egy helyet, és ezt ez az ellenőrzés nem tudja észlelni.',
        },
      ],
    },
    'metadata-size': {
      title: 'Metaadat-méret — mennyi metaadat van egy fotóban?',
      description:
        'Mérd meg, mennyi metaadatot tartalmaz egy kép: összes bájt, a legnagyobb EXIF-, C2PA- vagy promptblokkok és adatvédelmi kockázat. Ingyenes, feltöltés nélkül.',
      intro:
        'Nézd meg, a fájl mekkora része metaadat a kép helyett. Az eszköz méret szerint listáz minden metaadat-blokkot — EXIF, XMP, C2PA, beágyazott előnézetek, MI-promptok és munkafolyamatok —, megmutatja az arányukat a fájlban, és értékeli az adatvédelmi kockázatot.',
      steps: [
        'Húzz egy vagy több képet a fenti mezőbe.',
        'Hasonlítsd össze blokkonként a metaadatok méretét és arányát az egyes fájlokban.',
        'Távolítsd el a metaadatokat, hogy a fájlok kisebbek és biztonságosabban megoszthatók legyenek.',
      ],
      faq: [
        {
          q: 'Miért van egyes fájlokban ennyi metaadat?',
          a: 'A beágyazott előnézetek, a bélyegképes C2PA-manifestek és a ComfyUI munkafolyamatok több tíz vagy száz kilobájtot is hozzáadhatnak, míg az alap EXIF általában csak néhány kilobájt.',
        },
        {
          q: 'Miért van a színprofil megtartottként jelölve?',
          a: 'Az ICC színprofil a színek helyes megjelenítéséhez kell, ezért a tisztító megtartja. Nem számít bele a metaadatok összegébe.',
        },
        {
          q: 'Megváltozik a kép a metaadatok eltávolításától?',
          a: 'Nem. Csak a metaadat-blokkok törlődnek; a képadatok változatlanul másolódnak, így a fájl minőségromlás nélkül lesz kisebb.',
        },
      ],
    },
  },
};

export default tools;
