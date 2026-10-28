import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les métadonnées des photos HEIC, sans conversion',
  summary: [
    'L’iPhone enregistre ses photos en HEIC, et chacune contient le modèle de l’appareil, l’heure de prise de vue et — si la localisation est activée — l’endroit exact où vous étiez. Les photos retouchées peuvent aussi contenir des données XMP et C2PA.',
    'La plupart des outils en ligne convertissent le HEIC en JPEG pour le nettoyer, ce qui recompresse la photo. Cet outil supprime les métadonnées à l’intérieur même du fichier HEIC : il reste en HEIC, avec les données d’image d’origine.',
  ],
  description:
    'Supprimez GPS, EXIF, XMP et C2PA des photos HEIC/HEIF de l’iPhone dans votre navigateur, sans conversion en JPEG ni réencodage. Gratuit, sans envoi, par lot + ZIP.',
  answer:
    'Pour supprimer les métadonnées d’une photo HEIC sans la convertir, déposez le fichier dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». Les éléments Exif et XMP sont remplacés par des données vides valides et les boîtes C2PA transformées en espace libre : GPS, appareil et heure disparaissent, tandis que le fichier reste en HEIC avec ses données d’image d’origine. Rien n’est envoyé.',
  sections: [
    {
      heading: 'Ce que contient une photo HEIC d’iPhone',
      paragraphs: ['Le HEIC utilise le même conteneur à base de boîtes que le MP4. À côté de l’image compressée, on trouve généralement :'],
      bullets: [
        'Un élément Exif — modèle de l’appareil, objectif, heure de prise de vue, exposition et position GPS.',
        'Un élément XMP — détails de retouche et, pour les images retouchées par IA, des champs de provenance.',
        'Des boîtes uuid — utilisées pour les Content Credentials C2PA et certaines données XMP.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Pourquoi le HEIC demande une attention particulière',
      paragraphs: [
        'Dans un fichier HEIC, un index (la boîte iloc) pointe vers les données d’image par position absolue en octets. Si un outil se contente de découper les métadonnées, toutes les positions suivantes se décalent et la photo ne s’ouvre plus.',
        'Ce nettoyeur travaille donc sur place : il remplace les éléments Exif et XMP par des données vides valides et transforme les boîtes uuid C2PA en espace libre. La taille du fichier reste la même, chaque offset reste valide et les données d’image HEVC ne sont pas touchées.',
      ],
    },
    {
      heading: 'Supprimer les métadonnées d’un HEIC en trois étapes',
      paragraphs: [],
      steps: [
        'Ouvrez cette page sur votre iPhone ou votre ordinateur, puis déposez ou choisissez vos photos HEIC.',
        'Consultez le rapport — le panneau « Confidentialité » affiche les informations de localisation, d’heure et d’appareil trouvées.',
        'Touchez « Supprimer les métadonnées IA » et enregistrez les photos nettoyées, ou téléchargez-les toutes dans un ZIP.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'Nettoyer le HEIC ou le convertir en JPG ?',
      paragraphs: [],
      table: {
        head: ['', 'Nettoyage sur place (cet outil)', 'Conversion en JPG d’abord'],
        rows: [
          ['Format après nettoyage', 'HEIC', 'JPEG'],
          ['Qualité d’image', 'Inchangée', 'Recompressée'],
          ['Gamut étendu et orientation', 'Conservés', 'Peuvent changer'],
          ['Taille du fichier', 'Identique', 'Souvent plus lourde'],
        ],
      },
    },
    {
      heading: 'Ce qui est conservé',
      paragraphs: [
        'Les dimensions de l’image, la rotation et l’effet miroir, les informations de couleur et l’image compressée elle-même sont conservés : la photo s’affiche et se comporte exactement comme l’original. Les fichiers HEIF et AVIF, qui utilisent le même conteneur, sont nettoyés de la même façon.',
      ],
    },
    {
      heading: 'Empêcher l’iPhone d’enregistrer la localisation',
      paragraphs: [
        'Pour que vos nouvelles photos ne contiennent plus de GPS, allez dans Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo et choisissez Jamais. Pour un partage ponctuel, touchez Options dans la feuille de partage et désactivez la localisation. Les photos existantes gardent leurs métadonnées tant que vous ne les nettoyez pas.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Questions sur le nettoyage des photos HEIC',
  faq: [
    {
      q: 'Faut-il d’abord convertir le HEIC en JPG ?',
      a: 'Non. Les fichiers HEIC sont nettoyés directement et restent en HEIC : aucune conversion, aucune perte de qualité.',
    },
    {
      q: 'Pourquoi le fichier nettoyé a-t-il la même taille ?',
      a: 'Les métadonnées sont effacées sur place au lieu d’être découpées, car le HEIC stocke des positions absolues. Les données ont disparu, mais l’espace qu’elles occupaient reste.',
    },
    {
      q: 'Est-ce que ça fonctionne avec les Live Photos ?',
      a: 'La photo fixe d’une Live Photo est un fichier HEIC et peut être nettoyée. La courte vidéo est un fichier séparé, qui n’est pas traité ici.',
    },
    {
      q: 'Puis-je le faire directement sur mon iPhone ?',
      a: 'Oui. Ouvrez la page dans Safari, choisissez des photos dans votre photothèque, nettoyez-les et enregistrez le résultat — aucune application nécessaire.',
    },
    {
      q: 'Les formats HEIF et AVIF sont-ils aussi pris en charge ?',
      a: 'Oui. Ils utilisent le même conteneur et sont nettoyés sur place de la même façon.',
    },
    {
      q: 'Mes photos sont-elles envoyées ?',
      a: 'Non. Les photos sont traitées sur votre appareil et ne sont jamais envoyées à un serveur.',
    },
  ],
};

export default article;
