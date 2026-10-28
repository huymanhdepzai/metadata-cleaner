import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Darmowe narzędzia do metadanych zdjęć',
    description:
      'Darmowe narzędzia w przeglądarce do podglądu, analizy i usuwania metadanych zdjęć: przeglądarka EXIF, kontrola prywatności, rozmiar metadanych, usuwanie EXIF, GPS i C2PA.',
    intro:
      'Wszystkie narzędzia działają w przeglądarce na tym samym silniku: zdjęcia nigdy nie są wysyłane, a nic nie jest ponownie kompresowane. Wybierz, czego potrzebujesz — zajrzyj do wnętrza zdjęcia, sprawdź, co ujawnia, albo je oczyść.',
  },
  cards: {
    cleaner: { name: 'Usuń metadane ze zdjęć', text: 'Usuń EXIF, GPS, XMP, IPTC, C2PA i prompty AI jednym kliknięciem, bez utraty jakości.' },
    'view-metadata': { name: 'Podgląd metadanych', text: 'Zobacz wszystkie ukryte pola zdjęcia: aparat, datę, GPS, XMP, C2PA i prompty AI.' },
    'privacy-check': { name: 'Kontrola prywatności zdjęć', text: 'Sprawdź, co zdradza zdjęcie — lokalizację na mapie, dane osobowe i czas wykonania.' },
    'metadata-size': { name: 'Rozmiar metadanych', text: 'Zmierz, ile bajtów metadanych zawiera plik i jak bardzo są ryzykowne.' },
    'remove-exif': { name: 'Usuń EXIF', text: 'Usuń dane aparatu, datę i numer seryjny, zachowując orientację i kolory.' },
    'remove-gps': { name: 'Usuń lokalizację GPS', text: 'Usuń współrzędne GPS ze zdjęć z telefonu przed udostępnieniem.' },
    'remove-c2pa': { name: 'Usuń C2PA', text: 'Usuń manifesty Content Credentials (C2PA) z plików JPG, PNG, WebP i HEIC.' },
    'remove-prompts': { name: 'Usuń prompty AI', text: 'Usuń parametry Stable Diffusion i workflow ComfyUI z plików PNG.' },
    batch: { name: 'Czyszczenie wsadowe', text: 'Oczyść do 50 zdjęć naraz i pobierz je w jednym pliku ZIP.' },
  },
  groups: {
    inspect: { title: 'Sprawdź swoje zdjęcia', text: 'Zobacz, co zdradza obraz, zanim go udostępnisz — plik jest tylko odczytywany, nigdy zmieniany.' },
    remove: { title: 'Usuwanie metadanych według potrzeb', text: 'Wybierz format lub zadanie — każdy poradnik ma wbudowane narzędzie do czyszczenia.' },
  },
  tools: {
    'view-metadata': {
      title: 'Podgląd metadanych zdjęć online — EXIF, XMP, C2PA',
      description:
        'Darmowa przeglądarka metadanych: zobacz EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) i prompty AI w JPG, PNG, WebP i HEIC w przeglądarce, bez wysyłania.',
      intro:
        'Upuść zdjęcie, aby zobaczyć wszystkie ukryte w nim informacje — aparat i obiektyw, datę wykonania, pozycję GPS, program do edycji, Content Credentials i prompty AI — pogrupowane według źródła. Nic nie jest zmieniane ani wysyłane.',
      steps: [
        'Upuść jedno lub więcej zdjęć w polu powyżej albo stuknij „Wybierz zdjęcia”.',
        'Otwórz plik, aby zobaczyć podsumowanie prywatności, sygnały AI i pełną listę pól metadanych.',
        'Przeszukaj pola i zdecyduj, czy zostawić plik bez zmian, czy usunąć metadane.',
      ],
      faq: [
        {
          q: 'Czy podgląd metadanych zmienia mój plik?',
          a: 'Nie. Plik jest tylko odczytywany. Aby usunąć metadane, użyj narzędzia do czyszczenia — zdjęcia pozostają wczytane, więc nie trzeba ich dodawać ponownie.',
        },
        {
          q: 'Jakie metadane mogę zobaczyć?',
          a: 'EXIF (w tym GPS), XMP, IPTC, ICC, Content Credentials (C2PA), tekstowe chunki PNG z promptami lub workflow ComfyUI oraz bloki struktury pliku.',
        },
        {
          q: 'Czy moje zdjęcia są wysyłane?',
          a: 'Nie. Przeglądarka odczytuje pliki, które nigdy nie opuszczają Twojego urządzenia.',
        },
      ],
    },
    'privacy-check': {
      title: 'Kontrola prywatności zdjęć — znajdź GPS i dane osobowe',
      description:
        'Sprawdź przed udostępnieniem, co zdradza zdjęcie: lokalizację GPS do otwarcia na mapie, autora, numer seryjny, czas wykonania i dane AI. Za darmo, bez wysyłania.',
      intro:
        'Dowiedz się, co zdradza zdjęcie, zanim je opublikujesz. Kontrola pokazuje, czy zawiera lokalizację GPS (i dokąd wskazuje), dane osobowe, takie jak autor czy numer seryjny urządzenia, czas wykonania oraz dane o pochodzeniu AI — z prostym poziomem ryzyka.',
      steps: [
        'Upuść w polu powyżej zdjęcia, które chcesz udostępnić.',
        'Przeczytaj poziom ryzyka oraz znalezione w każdym pliku dane o lokalizacji, osobowe i czasowe.',
        'Jeśli znaleziono pozycję GPS, otwórz ją na mapie, aby zobaczyć, co mogą zobaczyć inni — a potem ją usuń.',
      ],
      faq: [
        {
          q: 'Jak ustalany jest poziom ryzyka?',
          a: 'Wysokie oznacza, że zdjęcie zawiera lokalizację. Średnie — dane osobowe, czasowe lub o AI bez lokalizacji. Niskie — w metadanych nie znaleziono żadnej z tych informacji.',
        },
        {
          q: 'Czy mapa ładuje się automatycznie?',
          a: 'Nie. Współrzędne są pokazane jako tekst. OpenStreetMap otwiera się w nowej karcie tylko po kliknięciu przycisku; w przeciwnym razie lokalizacja nigdy nie opuszcza urządzenia.',
        },
        {
          q: 'Czy zdjęcie może zdradzić moją lokalizację bez GPS?',
          a: 'Metadane to tylko jedno źródło. To, co widać na zdjęciu — tablice, charakterystyczne budynki, odbicia — też może zdradzić miejsce, a ta kontrola tego nie wykryje.',
        },
      ],
    },
    'metadata-size': {
      title: 'Rozmiar metadanych — ile metadanych ma zdjęcie?',
      description:
        'Zmierz, ile metadanych zawiera obraz: łączna liczba bajtów, udział w pliku, największe bloki EXIF, C2PA lub promptów i ryzyko dla prywatności. Za darmo, bez wysyłania.',
      intro:
        'Zobacz, jaka część pliku to metadane, a nie obraz. Narzędzie wymienia każdy blok metadanych według rozmiaru — EXIF, XMP, C2PA, osadzone podglądy, prompty i workflow AI — pokazuje jego udział w pliku i ocenia ryzyko dla prywatności.',
      steps: [
        'Upuść jedno lub więcej zdjęć w polu powyżej.',
        'Porównaj rozmiar metadanych i ich udział w każdym pliku, blok po bloku.',
        'Usuń metadane, aby pliki były mniejsze i bezpieczniejsze do udostępniania.',
      ],
      faq: [
        {
          q: 'Dlaczego niektóre pliki mają tyle metadanych?',
          a: 'Osadzone podglądy, manifesty C2PA z miniaturami i workflow ComfyUI mogą dodać dziesiątki lub setki kilobajtów, a podstawowy EXIF to zwykle tylko kilka.',
        },
        {
          q: 'Dlaczego profil kolorów jest oznaczony jako zachowany?',
          a: 'Profil kolorów ICC jest potrzebny do poprawnego wyświetlania kolorów, więc narzędzie go zachowuje. Nie jest wliczany do sumy metadanych.',
        },
        {
          q: 'Czy usunięcie metadanych zmienia obraz?',
          a: 'Nie. Usuwane są tylko bloki metadanych; dane obrazu są kopiowane bez zmian, więc plik jest mniejszy bez utraty jakości.',
        },
      ],
    },
  },
};

export default tools;
