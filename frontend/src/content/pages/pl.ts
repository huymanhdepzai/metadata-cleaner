import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'O All Metadata Cleaner',
    description:
      'All Metadata Cleaner to darmowe, dbające o prywatność narzędzie do podglądu i usuwania EXIF, GPS, XMP, IPTC, C2PA i promptów AI z obrazów — bezpośrednio w przeglądarce.',
    intro:
      'All Metadata Cleaner to darmowe narzędzie internetowe do podglądu i usuwania ukrytych informacji z plików graficznych: EXIF i lokalizacji GPS, XMP, IPTC, Content Credentials (C2PA) oraz promptów i workflow osadzanych przez generatory AI.',
    sections: [
      {
        heading: 'Dlaczego je stworzyliśmy',
        paragraphs: [
          'Zdjęcia i obrazy AI często zawierają więcej, niż się wydaje: miejsce wykonania zdjęcia, użyte urządzenie, autora edycji czy dokładny prompt obrazu AI. Większość narzędzi do usuwania metadanych wysyła pliki na serwer albo kompresuje je ponownie. Chcieliśmy narzędzia, które nie robi ani jednego, ani drugiego.',
        ],
      },
      {
        heading: 'Jak to działa',
        paragraphs: ['Wszystko dzieje się na Twoim urządzeniu:'],
        bullets: [
          'Przeglądarka odczytuje każdy plik i analizuje jego strukturę — segmenty JPEG, chunki PNG oraz boksy WebP i HEIC/AVIF.',
          'Bloki metadanych są usuwane na poziomie bajtów; dane obrazu są kopiowane bez zmian, więc jakość pozostaje identyczna.',
          'Każdy oczyszczony plik jest analizowany ponownie, abyś mógł sprawdzić, co usunięto.',
        ],
      },
      {
        heading: 'Nasze zasady',
        paragraphs: ['Każdą naszą decyzją kieruje kilka zasad:'],
        bullets: [
          'Prywatność przede wszystkim: obrazy nigdy nie są wysyłane, zapisywane ani oglądane przez nas.',
          'Uczciwość: wyjaśniamy, czego narzędzie nie potrafi, np. usuwać niewidocznych znaków wodnych w pikselach.',
          'Bezpłatnie, bez konta, bez znaku wodnego i bez reklam.',
        ],
      },
      {
        heading: 'Dla kogo',
        paragraphs: [
          'Dla każdego, kto udostępnia obrazy: osób chroniących swoją lokalizację przed publikacją zdjęcia, fotografów przekazujących prace klientom, twórców, którzy chcą zachować prompty dla siebie, i wszystkich, których prawdziwe zdjęcie zostało błędnie oznaczone jako AI. Prosimy wszystkich o przestrzeganie zasad platform dotyczących oznaczania treści wygenerowanych przez AI.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Polityka prywatności',
    description:
      'Jak All Metadata Cleaner traktuje Twoje dane: obrazy są przetwarzane w przeglądarce i nigdy nie są wysyłane. Bez kont, bez śledzenia, bez reklam.',
    intro:
      'Ta polityka wyjaśnia, jakie dane przetwarza All Metadata Cleaner podczas korzystania ze strony. W skrócie: Twoje obrazy nigdy nie opuszczają urządzenia i nie śledzimy Cię.',
    sections: [
      {
        heading: 'Twoje obrazy zostają na urządzeniu',
        paragraphs: [
          'Dodane obrazy są odczytywane i przetwarzane przez Twoją przeglądarkę za pomocą Web Workers. Nie są wysyłane na żaden serwer, a my nigdy ich nie otrzymujemy, nie przechowujemy ani nie oglądamy. Po załadowaniu strony możesz nawet odłączyć internet — narzędzie nadal działa.',
        ],
      },
      {
        heading: 'Czego nie zbieramy',
        paragraphs: ['Strona została zaprojektowana tak, by zbierać jak najmniej:'],
        bullets: [
          'Nie są potrzebne konta, rejestracja ani adres e-mail.',
          'Nie ładujemy skryptów analitycznych, reklamowych ani śledzących serwisów społecznościowych i nie pobieramy czcionek ani skryptów stron trzecich.',
          'Żadne informacje o treści ani metadanych Twoich obrazów nie są nigdzie wysyłane.',
        ],
      },
      {
        heading: 'Dane zapisywane w przeglądarce',
        paragraphs: ['Strona zapamiętuje tylko dwie preferencje, na Twoim urządzeniu:'],
        bullets: [
          'Wybrany język — zapisany w pamięci lokalnej i we własnym pliku cookie, aby strona główna otwierała się w tym języku.',
          'Wybrany motyw (jasny, ciemny lub systemowy) — zapisany w pamięci lokalnej.',
        ],
      },
      {
        heading: 'Hosting i logi serwera',
        paragraphs: [
          'Strona jest dostarczana z naszego własnego serwera. Jak każdy serwer WWW, przetwarza standardowe dane żądań, takie jak adres IP, typ przeglądarki i żądana strona, aby udostępniać witrynę i chronić ją przed nadużyciami. Język przeglądarki może służyć do wyboru domyślnego języka. Nie wykorzystujemy tych informacji do identyfikowania ani profilowania Cię.',
        ],
      },
      {
        heading: 'Zmiany tej polityki',
        paragraphs: [
          'Jeśli zmieni się sposób przetwarzania danych przez stronę, zaktualizujemy tę stronę i datę na górze. Dalsze korzystanie ze strony po aktualizacji oznacza akceptację zmienionej polityki.',
        ],
      },
    ],
  },
  terms: {
    title: 'Warunki korzystania',
    description:
      'Warunki korzystania: darmowe narzędzie udostępniane w stanie, w jakim jest, Twoja odpowiedzialność za użycie oczyszczonych obrazów i granice naszej odpowiedzialności.',
    intro:
      'Korzystając z All Metadata Cleaner, akceptujesz te warunki. Przeczytaj je razem z zastrzeżeniem na stronie głównej i naszą Polityką prywatności.',
    sections: [
      {
        heading: 'Usługa',
        paragraphs: [
          'All Metadata Cleaner to darmowe narzędzie internetowe, które sprawdza i usuwa metadane z plików graficznych na Twoim urządzeniu. Możemy w dowolnym momencie i bez uprzedzenia zmienić, ulepszyć lub wycofać dowolną jego część.',
        ],
      },
      {
        heading: 'Dozwolone użycie',
        paragraphs: ['Odpowiadasz za przetwarzane pliki i sposób wykorzystania wyników. Zobowiązujesz się nie używać narzędzia, aby:'],
        bullets: [
          'łamać prawo lub naruszać prawa innych osób, w tym prawa autorskie i prawo do prywatności;',
          'ukrywać treści wygenerowane przez AI, gdy prawo lub zasady platformy wymagają ich oznaczenia;',
          'usuwać informacji o prawach autorskich, licencji lub autorstwie z obrazów, które nie należą do Ciebie lub których nie masz prawa modyfikować.',
        ],
      },
      {
        heading: 'Brak gwarancji',
        paragraphs: [
          'Narzędzie jest udostępniane „w stanie, w jakim jest” i „w miarę dostępności”, bez jakichkolwiek gwarancji, wyraźnych ani dorozumianych. Nie gwarantujemy, że usunie każdy rodzaj metadanych, że wyniki będą wolne od błędów ani że platformy potraktują oczyszczone obrazy w określony sposób. Zawsze zachowuj kopię oryginalnych plików.',
        ],
      },
      {
        heading: 'Ograniczenie odpowiedzialności',
        paragraphs: [
          'W najszerszym zakresie dozwolonym przez prawo nie odpowiadamy za żadne bezpośrednie, pośrednie, przypadkowe ani wynikowe straty lub szkody — w tym utratę danych, plików lub zysków — wynikające z korzystania lub niemożności korzystania z narzędzia. Niektóre jurysdykcje nie dopuszczają pewnych ograniczeń; wówczas obowiązują one tylko w dozwolonym zakresie.',
        ],
      },
      {
        heading: 'Zmiany warunków',
        paragraphs: [
          'Możemy od czasu do czasu aktualizować te warunki. Data na górze wskazuje najnowszą wersję. Dalsze korzystanie z narzędzia po zmianie oznacza akceptację zaktualizowanych warunków.',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    description:
      'Skontaktuj się z zespołem All Metadata Cleaner: zgłoś błąd, zaproponuj funkcję lub zadaj pytanie o prywatność. Czytamy każdą wiadomość i odpowiadamy jak najszybciej.',
    intro:
      'Pytania, zgłoszenia błędów i pomysły są mile widziane. Napisz do nas e-mail, a odpowiemy najszybciej, jak to możliwe.',
    sections: [
      {
        heading: 'W jakich sprawach możesz pisać',
        paragraphs: ['Szczególnie chętnie dowiemy się o:'],
        bullets: [
          'Błędach — pliku, którego nie da się oczyścić, lub metadanych, które nie są wykrywane albo usuwane.',
          'Pomysłach na funkcje — nowych formatach, opcjach lub językach, które chcesz zobaczyć.',
          'Pytaniach o prywatność lub kwestie prawne dotyczące strony.',
        ],
      },
      {
        heading: 'Zanim napiszesz',
        paragraphs: [
          'Prosimy nie wysyłać prywatnych zdjęć. Zgłaszając problem, podaj format pliku, aparat, telefon lub aplikację, która go utworzyła, swoją przeglądarkę i oczekiwany rezultat. Jeśli do odtworzenia problemu potrzebny jest plik, wyślij taki, który nie zawiera nic wrażliwego.',
        ],
      },
    ],
  },
};

export default pages;
