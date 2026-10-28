import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Despre All Metadata Cleaner',
    description:
      'All Metadata Cleaner este un instrument gratuit, axat pe confidențialitate, care afișează și elimină EXIF, GPS, XMP, IPTC, C2PA și prompturi AI din imagini, direct în browser.',
    intro:
      'All Metadata Cleaner este un instrument web gratuit pentru a vedea și a elimina informațiile ascunse din fișierele imagine: EXIF și locația GPS, XMP, IPTC, Content Credentials (C2PA), precum și prompturile sau fluxurile de lucru încorporate de generatoarele AI.',
    sections: [
      {
        heading: 'De ce l-am creat',
        paragraphs: [
          'Fotografiile și imaginile AI conțin adesea mai mult decât s-ar crede: unde a fost făcută o fotografie, cu ce dispozitiv, cine a editat-o sau promptul exact din spatele unei imagini AI. Majoritatea instrumentelor de eliminare a metadatelor încarcă fișierele pe un server sau le recomprimă. Ne-am dorit un instrument care să nu facă niciuna dintre acestea.',
        ],
      },
      {
        heading: 'Cum funcționează',
        paragraphs: ['Totul se petrece pe propriul tău dispozitiv:'],
        bullets: [
          'Browserul citește fiecare fișier și îi analizează structura — segmente JPEG, chunk-uri PNG și casete WebP și HEIC/AVIF.',
          'Blocurile de metadate sunt eliminate la nivel de octet; datele imaginii sunt copiate neschimbate, astfel încât calitatea rămâne identică.',
          'Fiecare fișier curățat este analizat din nou ca să poți verifica ce a fost eliminat.',
        ],
      },
      {
        heading: 'Principiile noastre',
        paragraphs: ['Câteva reguli ne ghidează fiecare decizie:'],
        bullets: [
          'Confidențialitatea pe primul loc: imaginile nu sunt niciodată încărcate, stocate sau văzute de noi.',
          'Onestitate: explicăm ce nu poate face instrumentul, de exemplu eliminarea filigranelor invizibile din pixeli.',
          'Gratuit, fără cont, fără filigran și fără reclame.',
        ],
      },
      {
        heading: 'Cui se adresează',
        paragraphs: [
          'Oricui partajează imagini: celor care vor să-și protejeze locația înainte de a publica o fotografie, fotografilor care predau lucrări clienților, creatorilor care își păstrează prompturile private și oricui a văzut o fotografie reală etichetată greșit ca AI. Le cerem tuturor să respecte regulile platformelor privind declararea conținutului generat cu AI.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Politica de confidențialitate',
    description:
      'Cum tratează All Metadata Cleaner datele tale: imaginile sunt procesate în browser și nu sunt încărcate niciodată. Fără conturi, fără urmărire, fără reclame.',
    intro:
      'Această politică explică ce date tratează All Metadata Cleaner când folosești site-ul. Pe scurt: imaginile tale nu părăsesc niciodată dispozitivul și nu te urmărim.',
    sections: [
      {
        heading: 'Imaginile tale rămân pe dispozitiv',
        paragraphs: [
          'Imaginile pe care le adaugi sunt citite și procesate de propriul browser cu ajutorul Web Workers. Nu sunt încărcate pe niciun server, iar noi nu le primim, nu le stocăm și nu le vedem niciodată. Poți chiar să te deconectezi de la internet după ce pagina s-a încărcat, iar instrumentul continuă să funcționeze.',
        ],
      },
      {
        heading: 'Ce nu colectăm',
        paragraphs: ['Site-ul este conceput să colecteze cât mai puțin:'],
        bullets: [
          'Nu sunt necesare conturi, înregistrări sau adrese de e-mail.',
          'Nu se încarcă scripturi de analiză, publicitate sau urmărire a rețelelor sociale și nu se solicită fonturi sau scripturi de la terți.',
          'Nicio informație despre conținutul sau metadatele imaginilor tale nu este trimisă nicăieri.',
        ],
      },
      {
        heading: 'Date stocate în browser',
        paragraphs: ['Site-ul reține doar două preferințe, pe dispozitivul tău:'],
        bullets: [
          'Limba aleasă, salvată în stocarea locală și într-un cookie propriu, astfel încât pagina principală să se deschidă în acea limbă.',
          'Tema aleasă (deschisă, întunecată sau a sistemului), salvată în stocarea locală.',
        ],
      },
      {
        heading: 'Găzduire și jurnale de server',
        paragraphs: [
          'Site-ul este livrat de pe propriul nostru server. Ca orice server web, acesta prelucrează informații standard ale cererilor, precum adresa IP, tipul browserului și pagina solicitată, pentru a livra site-ul și a-l proteja de abuzuri. Limba browserului tău poate fi folosită pentru a alege o limbă implicită. Nu folosim aceste informații pentru a te identifica sau a-ți crea un profil.',
        ],
      },
      {
        heading: 'Modificări ale acestei politici',
        paragraphs: [
          'Dacă modul în care site-ul tratează datele se schimbă, vom actualiza această pagină și data din partea de sus. Dacă folosești în continuare site-ul după o actualizare, accepți politica revizuită.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termeni de utilizare',
    description:
      'Termenii de utilizare All Metadata Cleaner: un instrument gratuit oferit ca atare, responsabilitatea ta pentru folosirea imaginilor curățate și limitele răspunderii noastre.',
    intro:
      'Folosind All Metadata Cleaner, accepți acești termeni. Citește-i împreună cu declinarea responsabilității de pe pagina principală și cu Politica noastră de confidențialitate.',
    sections: [
      {
        heading: 'Serviciul',
        paragraphs: [
          'All Metadata Cleaner este un instrument web gratuit care inspectează și elimină metadatele din fișierele imagine pe propriul tău dispozitiv. Putem modifica, îmbunătăți sau întrerupe orice parte a acestuia în orice moment și fără notificare.',
        ],
      },
      {
        heading: 'Utilizare acceptabilă',
        paragraphs: ['Ești responsabil pentru fișierele pe care le procesezi și pentru modul în care folosești rezultatele. Ești de acord să nu folosești instrumentul pentru a:'],
        bullets: [
          'încălca vreo lege sau drepturile altora, inclusiv drepturile de autor și dreptul la viață privată;',
          'ascunde conținut generat cu AI atunci când o lege sau o regulă a platformei îți cere să îl declari;',
          'elimina informații privind drepturile de autor, licența sau creditele din imagini care nu îți aparțin sau pe care nu ai dreptul să le modifici.',
        ],
      },
      {
        heading: 'Fără garanții',
        paragraphs: [
          'Instrumentul este oferit „ca atare” și „în funcție de disponibilitate”, fără garanții de niciun fel, exprese sau implicite. Nu garantăm că elimină orice tip de metadate, că rezultatele sunt lipsite de erori sau că platformele vor trata imaginile curățate într-un anumit fel. Păstrează întotdeauna o copie a fișierelor originale.',
        ],
      },
      {
        heading: 'Limitarea răspunderii',
        paragraphs: [
          'În măsura maximă permisă de lege, nu răspundem pentru nicio pierdere sau daună directă, indirectă, incidentală sau consecventă — inclusiv pierderea de date, fișiere sau profit — rezultată din utilizarea sau imposibilitatea utilizării instrumentului. Unele jurisdicții nu permit anumite limitări; în acest caz, ele se aplică doar în măsura permisă.',
        ],
      },
      {
        heading: 'Modificări ale termenilor',
        paragraphs: [
          'Putem actualiza acești termeni din când în când. Data din partea de sus indică cea mai recentă versiune. Dacă folosești în continuare instrumentul după o modificare, accepți termenii actualizați.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      'Contactează echipa All Metadata Cleaner: raportează o eroare, propune o funcție sau pune o întrebare despre confidențialitate. Citim fiecare mesaj și răspundem cât mai repede.',
    intro:
      'Întrebările, rapoartele de erori și ideile sunt binevenite. Scrie-ne un e-mail și îți vom răspunde cât mai repede.',
    sections: [
      {
        heading: 'Despre ce ne poți scrie',
        paragraphs: ['Ne bucurăm în mod deosebit să aflăm despre:'],
        bullets: [
          'Erori — un fișier care nu poate fi curățat sau metadate care nu sunt detectate ori nu sunt eliminate.',
          'Cereri de funcții — formate, opțiuni sau limbi noi pe care ți-ai dori să le vezi.',
          'Întrebări despre confidențialitate sau aspecte juridice legate de site.',
        ],
      },
      {
        heading: 'Înainte să scrii',
        paragraphs: [
          'Te rugăm să nu trimiți fotografii private. Când raportezi o problemă, spune-ne formatul fișierului, camera, telefonul sau aplicația care l-a creat, browserul tău și ce te așteptai să se întâmple. Dacă e nevoie de un fișier pentru a reproduce problema, trimite unul care nu conține nimic sensibil.',
        ],
      },
    ],
  },
};

export default pages;
