import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'O alatu All Metadata Cleaner',
    description:
      'All Metadata Cleaner je besplatan alat koji štiti privatnost i izravno u pregledniku prikazuje i uklanja EXIF, GPS, XMP, IPTC, C2PA i AI promptove iz slika.',
    intro:
      'All Metadata Cleaner je besplatan web-alat za pregled i uklanjanje skrivenih podataka u slikovnim datotekama: EXIF-a i GPS lokacije, XMP-a, IPTC-a, Content Credentials (C2PA) te promptova i tijekova rada koje ugrađuju AI generatori.',
    sections: [
      {
        heading: 'Zašto smo ga izradili',
        paragraphs: [
          'Fotografije i AI slike često sadrže više nego što ljudi misle: gdje je fotografija snimljena, kojim uređajem, tko ju je uređivao ili točan prompt AI slike. Većina alata za uklanjanje metapodataka učitava datoteke na poslužitelj ili ih ponovno sažima. Htjeli smo alat koji ne radi ni jedno ni drugo.',
        ],
      },
      {
        heading: 'Kako radi',
        paragraphs: ['Sve se odvija na vašem uređaju:'],
        bullets: [
          'Preglednik čita svaku datoteku i analizira njezinu strukturu — JPEG segmente, PNG chunkove te WebP i HEIC/AVIF kutije.',
          'Blokovi metapodataka uklanjaju se na razini bajtova; slikovni podaci kopiraju se nepromijenjeni pa kvaliteta ostaje ista.',
          'Svaka očišćena datoteka ponovno se analizira kako biste mogli provjeriti što je uklonjeno.',
        ],
      },
      {
        heading: 'Naša načela',
        paragraphs: ['Nekoliko pravila vodi svaku našu odluku:'],
        bullets: [
          'Privatnost na prvom mjestu: slike se nikad ne učitavaju, ne pohranjuju niti ih mi vidimo.',
          'Iskrenost: objašnjavamo što alat ne može, primjerice ukloniti nevidljive vodene žigove u pikselima.',
          'Besplatno, bez računa, bez vodenog žiga i bez oglasa.',
        ],
      },
      {
        heading: 'Kome je namijenjen',
        paragraphs: [
          'Svima koji dijele slike: onima koji žele zaštititi svoju lokaciju prije objave fotografije, fotografima koji predaju radove klijentima, autorima koji promptove žele zadržati za sebe i svima čija je stvarna fotografija pogrešno označena kao AI. Molimo sve da poštuju pravila platformi o označavanju sadržaja izrađenog umjetnom inteligencijom.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Pravila privatnosti',
    description:
      'Kako All Metadata Cleaner postupa s vašim podacima: slike se obrađuju u pregledniku i nikad se ne učitavaju. Bez računa, bez praćenja, bez oglasa.',
    intro:
      'Ova pravila objašnjavaju koje podatke All Metadata Cleaner obrađuje kada koristite web-mjesto. Ukratko: vaše slike nikad ne napuštaju vaš uređaj i ne pratimo vas.',
    sections: [
      {
        heading: 'Vaše slike ostaju na vašem uređaju',
        paragraphs: [
          'Slike koje dodate čita i obrađuje vaš preglednik pomoću Web Workera. Ne učitavaju se ni na jedan poslužitelj i nikad ih ne primamo, ne pohranjujemo niti vidimo. Nakon učitavanja stranice možete se čak isključiti s interneta i alat će i dalje raditi.',
        ],
      },
      {
        heading: 'Što ne prikupljamo',
        paragraphs: ['Web-mjesto je osmišljeno da prikuplja što manje:'],
        bullets: [
          'Nisu potrebni računi, registracija ni adrese e-pošte.',
          'Ne učitavaju se skripte za analitiku, oglašavanje ni praćenje društvenih mreža i ne dohvaćaju se fontovi ni skripte trećih strana.',
          'Nikamo se ne šalju nikakvi podaci o sadržaju ili metapodacima vaših slika.',
        ],
      },
      {
        heading: 'Podaci spremljeni u pregledniku',
        paragraphs: ['Web-mjesto pamti samo dvije postavke, na vašem uređaju:'],
        bullets: [
          'Odabrani jezik, spremljen u lokalnoj pohrani i vlastitom kolačiću kako bi se početna stranica otvorila na tom jeziku.',
          'Odabranu temu (svijetla, tamna ili sustavska), spremljenu u lokalnoj pohrani.',
        ],
      },
      {
        heading: 'Hosting i zapisi poslužitelja',
        paragraphs: [
          'Web-mjesto isporučuje se s našeg vlastitog poslužitelja. Kao i svaki web-poslužitelj, obrađuje uobičajene podatke o zahtjevima, poput IP adrese, vrste preglednika i zatražene stranice, kako bi isporučio web-mjesto i zaštitio ga od zlouporabe. Jezik vašeg preglednika može se koristiti za odabir zadanog jezika. Te podatke ne koristimo za vašu identifikaciju ni izradu profila.',
        ],
      },
      {
        heading: 'Izmjene ovih pravila',
        paragraphs: [
          'Ako se način na koji web-mjesto postupa s podacima promijeni, ažurirat ćemo ovu stranicu i datum na vrhu. Nastavkom korištenja web-mjesta nakon ažuriranja prihvaćate izmijenjena pravila.',
        ],
      },
    ],
  },
  terms: {
    title: 'Uvjeti korištenja',
    description:
      'Uvjeti korištenja alata All Metadata Cleaner: besplatan alat pružen u viđenom stanju, vaša odgovornost za korištenje očišćenih slika i granice naše odgovornosti.',
    intro:
      'Korištenjem alata All Metadata Cleaner prihvaćate ove uvjete. Pročitajte ih zajedno s izjavom o odricanju odgovornosti na početnoj stranici i našim Pravilima privatnosti.',
    sections: [
      {
        heading: 'Usluga',
        paragraphs: [
          'All Metadata Cleaner je besplatan web-alat koji na vašem uređaju pregledava i uklanja metapodatke iz slikovnih datoteka. Bilo koji njegov dio možemo u bilo kojem trenutku i bez najave promijeniti, poboljšati ili ukinuti.',
        ],
      },
      {
        heading: 'Dopuštena uporaba',
        paragraphs: ['Odgovorni ste za datoteke koje obrađujete i način korištenja rezultata. Slažete se da alat nećete koristiti kako biste:'],
        bullets: [
          'kršili zakon ili prava drugih, uključujući autorska prava i pravo na privatnost;',
          'skrivali sadržaj izrađen umjetnom inteligencijom kada zakon ili pravila platforme zahtijevaju njegovo označavanje;',
          'uklanjali podatke o autorskim pravima, licenci ili autorstvu sa slika koje nisu vaše ili koje nemate pravo mijenjati.',
        ],
      },
      {
        heading: 'Bez jamstva',
        paragraphs: [
          'Alat se pruža „kakav jest” i „kako je dostupan”, bez ikakvih izričitih ili prešutnih jamstava. Ne jamčimo da će ukloniti svaku vrstu metapodataka, da će rezultati biti bez pogrešaka ni da će platforme očišćene slike tretirati na određeni način. Uvijek sačuvajte kopiju izvornih datoteka.',
        ],
      },
      {
        heading: 'Ograničenje odgovornosti',
        paragraphs: [
          'U najvećoj mjeri dopuštenoj zakonom ne odgovaramo za izravne, neizravne, slučajne ni posljedične gubitke ili štete — uključujući gubitak podataka, datoteka ili dobiti — nastale korištenjem ili nemogućnošću korištenja alata. Neke jurisdikcije ne dopuštaju određena ograničenja; tada se ona primjenjuju samo u dopuštenoj mjeri.',
        ],
      },
      {
        heading: 'Izmjene uvjeta',
        paragraphs: [
          'Ove uvjete možemo povremeno ažurirati. Datum na vrhu označava najnoviju verziju. Nastavkom korištenja alata nakon izmjene prihvaćate ažurirane uvjete.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Obratite se timu All Metadata Cleaner: prijavite pogrešku, predložite značajku ili postavite pitanje o privatnosti. Čitamo svaku poruku i odgovaramo što prije.',
    intro:
      'Pitanja, prijave pogrešaka i ideje su dobrodošli. Pošaljite nam e-poruku i javit ćemo se što prije.',
    sections: [
      {
        heading: 'O čemu nam možete pisati',
        paragraphs: ['Posebno nas raduju:'],
        bullets: [
          'Pogreške — datoteka koja se ne može očistiti ili metapodaci koji se ne prepoznaju ili ne uklanjaju.',
          'Prijedlozi značajki — novi formati, opcije ili jezici koje biste željeli.',
          'Pitanja o privatnosti ili pravnim aspektima web-mjesta.',
        ],
      },
      {
        heading: 'Prije nego što napišete',
        paragraphs: [
          'Molimo ne šaljite privatne fotografije. Pri prijavi problema navedite format datoteke, fotoaparat, telefon ili aplikaciju koja ju je izradila, svoj preglednik i što ste očekivali. Ako je za reprodukciju problema potrebna datoteka, pošaljite onu koja ne sadrži ništa osjetljivo.',
        ],
      },
    ],
  },
};

export default pages;
