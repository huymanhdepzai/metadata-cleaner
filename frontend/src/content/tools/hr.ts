import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Besplatni alati za metapodatke slika',
    description:
      'Besplatni alati u pregledniku za pregled, analizu i uklanjanje metapodataka slika: preglednik EXIF-a, provjera privatnosti, veličina metapodataka, uklanjanje EXIF-a, GPS-a i C2PA.',
    intro:
      'Svi alati rade u vašem pregledniku na istom pogonu: slike se nikad ne učitavaju na poslužitelj i ništa se ponovno ne sažima. Odaberite što vam treba — zavirite u fotografiju, provjerite što otkriva ili je očistite.',
  },
  cards: {
    cleaner: { name: 'Ukloni metapodatke', text: 'Uklonite EXIF, GPS, XMP, IPTC, C2PA i AI promptove jednim klikom, bez gubitka kvalitete.' },
    'view-metadata': { name: 'Pregled metapodataka', text: 'Pogledajte sva skrivena polja fotografije: fotoaparat, datum, GPS, XMP, C2PA i AI promptove.' },
    'privacy-check': { name: 'Provjera privatnosti fotografije', text: 'Saznajte što fotografija otkriva — lokaciju na karti, osobne podatke i vrijeme snimanja.' },
    'metadata-size': { name: 'Veličina metapodataka', text: 'Izmjerite koliko bajtova metapodataka datoteka sadrži i koliko su rizični.' },
    'remove-exif': { name: 'Ukloni EXIF', text: 'Izbrišite podatke o fotoaparatu, datum i serijski broj, a zadržite orijentaciju i boje.' },
    'remove-gps': { name: 'Ukloni GPS lokaciju', text: 'Uklonite GPS koordinate s fotografija s mobitela prije dijeljenja.' },
    'remove-c2pa': { name: 'Ukloni C2PA', text: 'Uklonite manifeste Content Credentials (C2PA) iz JPG, PNG, WebP i HEIC datoteka.' },
    'remove-prompts': { name: 'Ukloni AI promptove', text: 'Uklonite Stable Diffusion parametre i ComfyUI tijekove rada iz PNG datoteka.' },
    batch: { name: 'Skupno čišćenje', text: 'Očistite do 50 slika odjednom i preuzmite ih kao jednu ZIP datoteku.' },
  },
  groups: {
    inspect: { title: 'Provjerite svoje fotografije', text: 'Pogledajte što slika otkriva prije dijeljenja — datoteka se samo čita, nikad ne mijenja.' },
    remove: { title: 'Uklanjanje metapodataka prema potrebi', text: 'Odaberite format ili zadatak — svaki vodič ima ugrađeni alat za čišćenje.' },
  },
  tools: {
    'view-metadata': {
      title: 'Pregled metapodataka slike online — EXIF, XMP, C2PA',
      description:
        'Besplatan preglednik metapodataka: pogledajte EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) i AI promptove u JPG, PNG, WebP i HEIC u pregledniku, bez učitavanja.',
      intro:
        'Ispustite fotografiju i vidjet ćete sve skrivene podatke u njoj — fotoaparat i objektiv, datum snimanja, GPS položaj, softver za uređivanje, Content Credentials i AI promptove — grupirane prema izvoru. Ništa se ne mijenja niti učitava.',
      steps: [
        'Ispustite jednu ili više slika u okvir iznad ili dodirnite „Odaberi slike”.',
        'Otvorite datoteku kako biste vidjeli sažetak privatnosti, AI signale i potpun popis polja metapodataka.',
        'Pretražite polja i odlučite hoćete li datoteku zadržati ovakvu ili ukloniti metapodatke.',
      ],
      faq: [
        {
          q: 'Mijenja li pregled metapodataka moju datoteku?',
          a: 'Ne. Datoteka se samo čita. Za uklanjanje metapodataka koristite alat za čišćenje — slike ostaju učitane pa ih ne morate ponovno dodavati.',
        },
        {
          q: 'Koje metapodatke mogu vidjeti?',
          a: 'EXIF (uključujući GPS), XMP, IPTC, ICC, C2PA Content Credentials, tekstne PNG chunkove s promptovima ili ComfyUI tijekovima te blokove strukture datoteke.',
        },
        {
          q: 'Učitavaju li se moje fotografije?',
          a: 'Ne. Datoteke čita vaš preglednik i nikad ne napuštaju vaš uređaj.',
        },
      ],
    },
    'privacy-check': {
      title: 'Provjera privatnosti fotografije — pronađite GPS i osobne podatke',
      description:
        'Prije dijeljenja provjerite što fotografija otkriva: GPS lokaciju za otvaranje na karti, autora, serijski broj, vrijeme snimanja i AI podatke. Besplatno, bez učitavanja.',
      intro:
        'Saznajte što fotografija odaje prije objave. Provjera pokazuje sadrži li GPS lokaciju (i kamo pokazuje), osobne podatke poput autora ili serijskog broja uređaja, vrijeme snimanja i podatke o AI podrijetlu — uz jednostavnu razinu rizika.',
      steps: [
        'Ispustite u okvir iznad fotografije koje namjeravate podijeliti.',
        'Pročitajte razinu rizika te pronađene podatke o lokaciji, osobi i vremenu u svakoj datoteci.',
        'Ako se pronađe GPS položaj, otvorite ga na karti da vidite točno ono što bi vidjeli drugi — pa ga uklonite.',
      ],
      faq: [
        {
          q: 'Kako se određuje razina rizika?',
          a: 'Visok znači da fotografija sadrži lokaciju. Srednji znači osobne, vremenske ili AI podatke bez lokacije. Nizak znači da u metapodacima nije pronađeno ništa od toga.',
        },
        {
          q: 'Učitava li se karta automatski?',
          a: 'Ne. Koordinate se prikazuju kao tekst. OpenStreetMap se otvara u novoj kartici samo ako kliknete gumb; inače lokacija nikad ne napušta vaš uređaj.',
        },
        {
          q: 'Može li fotografija otkriti moju lokaciju bez GPS-a?',
          a: 'Metapodaci su samo jedan izvor. Ono što se vidi na slici — natpisi, znamenitosti, odrazi — također može otkriti mjesto, a ova provjera to ne može otkriti.',
        },
      ],
    },
    'metadata-size': {
      title: 'Veličina metapodataka — koliko metapodataka ima fotografija?',
      description:
        'Izmjerite koliko metapodataka slika sadrži: ukupne bajtove, udio u datoteci, najveće blokove EXIF-a, XMP-a, C2PA ili promptova i razinu rizika. Besplatno, bez učitavanja.',
      intro:
        'Pogledajte koliki je dio datoteke metapodaci, a ne slika. Alat navodi svaki blok metapodataka prema veličini — EXIF, XMP, C2PA, ugrađene preglede, AI promptove i tijekove rada — prikazuje njegov udio u datoteci i procjenjuje rizik za privatnost.',
      steps: [
        'Ispustite jednu ili više slika u okvir iznad.',
        'Usporedite veličinu metapodataka i njihov udio u svakoj datoteci, blok po blok.',
        'Uklonite metapodatke kako bi datoteke bile manje i sigurnije za dijeljenje.',
      ],
      faq: [
        {
          q: 'Zašto neke datoteke imaju toliko metapodataka?',
          a: 'Ugrađeni pregledi, C2PA manifesti sa sličicama i ComfyUI tijekovi rada mogu dodati desetke ili stotine kilobajta, dok osnovni EXIF obično ima tek nekoliko.',
        },
        {
          q: 'Zašto je profil boja označen kao zadržan?',
          a: 'ICC profil boja potreban je za ispravan prikaz boja pa ga alat za čišćenje zadržava. Ne ubraja se u ukupne metapodatke.',
        },
        {
          q: 'Mijenja li uklanjanje metapodataka sliku?',
          a: 'Ne. Uklanjaju se samo blokovi metapodataka; slikovni podaci kopiraju se nepromijenjeni pa je datoteka manja bez gubitka kvalitete.',
        },
      ],
    },
  },
};

export default tools;
