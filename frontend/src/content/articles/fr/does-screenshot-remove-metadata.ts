import type { Article } from '../types';

const article: Article = {
  title: 'Une capture d’écran supprime-t-elle les métadonnées ? Ce qu’elle garde et perd',
  seoTitle: 'Une capture d’écran supprime-t-elle les métadonnées ?',
  summary: [
    'Faire une capture d’écran est un raccourci populaire pour se débarrasser des métadonnées d’une photo. Elle supprime bien l’EXIF, le GPS et le C2PA d’origine — mais la capture ajoute ses propres métadonnées et dégrade la qualité.',
    'Voici précisément ce qu’une capture supprime, ce qu’elle garde ou ajoute, ce qu’elle ne peut jamais supprimer, et une alternative plus propre qui laisse l’image d’origine intacte.',
  ],
  description:
    'Une capture supprime l’EXIF, le GPS et le C2PA d’origine, mais ajoute ses propres métadonnées, réduit la qualité et garde les filigranes invisibles.',
  answer:
    'En grande partie, oui. Une capture d’écran est une toute nouvelle image : l’EXIF, la position GPS et les Content Credentials C2PA de la photo d’origine n’y sont pas copiés. Mais la capture reçoit ses propres métadonnées, comme la date et l’appareil, elle est limitée à la résolution de votre écran, et les filigranes invisibles comme les détails visibles dans l’image subsistent. Supprimer les métadonnées directement de l’original évite ces inconvénients.',
  sections: [
    {
      heading: 'Ce qu’une capture d’écran supprime',
      paragraphs: [
        'Une capture d’écran enregistre les pixels affichés à l’écran dans un nouveau fichier. Rien des métadonnées du fichier d’origine n’est repris, donc les éléments suivants disparaissent :',
      ],
      bullets: [
        'Coordonnées GPS, modèle d’appareil, objectif et heure de prise de vue d’origine (EXIF).',
        'Auteur, copyright et historique de retouche (XMP et IPTC).',
        'Content Credentials C2PA et étiquettes IPTC d’IA ajoutées par les générateurs d’IA ou les applications de retouche.',
        'Prompts, seeds et workflows stockés dans les PNG générés par IA.',
      ],
    },
    {
      heading: 'Ce qu’une capture d’écran ajoute ou conserve',
      paragraphs: [
        'Une capture d’écran n’est pas un fichier sans métadonnées. Selon l’appareil, elle peut enregistrer l’heure de la capture, l’appareil ou le système d’exploitation, les dimensions de l’écran et parfois un commentaire « Screenshot ». Sur certains appareils, la capture elle-même peut aussi recevoir des Content Credentials. Ces champs sont généralement moins sensibles que la position GPS d’origine, mais ils en disent quand même un peu sur vous.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Ce qu’une capture d’écran ne peut jamais supprimer',
      paragraphs: [],
      bullets: [
        'Les filigranes invisibles comme SynthID de Google, intégrés aux pixels et conçus pour résister aux captures d’écran.',
        'Tout ce qui est visible dans l’image : panneaux, numéros de rue, visages, reflets ou un paysage reconnaissable peuvent révéler un lieu sans aucune métadonnée.',
        'Les informations affichées autour de l’image, comme les notifications, l’heure ou votre nom de compte, si vous oubliez de recadrer.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Capture d’écran ou outil de suppression des métadonnées',
      paragraphs: [],
      table: {
        head: ['', 'Capture d’écran', 'Outil de métadonnées'],
        rows: [
          ['EXIF, GPS et C2PA d’origine', 'Non copiés', 'Supprimés'],
          ['Nouvelles métadonnées', 'Oui (date, appareil…)', 'Non'],
          ['Résolution', 'Limitée à votre écran', 'D’origine'],
          ['Pixels', 'Recapturés, parfois redimensionnés', 'Identiques'],
          ['Profil couleur et HDR', 'Souvent modifiés', 'Conservés'],
          ['Lot de 50 photos', 'Une par une', 'Un clic'],
        ],
      },
    },
    {
      heading: 'Pourquoi la capture d’écran est une mauvaise façon de nettoyer ses photos',
      paragraphs: [
        'Sauf si la photo remplit l’écran à 100 % de zoom, la capture est une copie réduite. Les couleurs peuvent changer lorsque le système convertit entre profils couleur, les hautes lumières HDR sont aplaties, et chaque nouvelle capture ou mise en ligne recompresse l’image. Pour tout ce qui compte — portfolio, photos de produits, art IA —, nettoyer le fichier d’origine donne un meilleur résultat.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'Mieux : supprimer les métadonnées de l’original',
      paragraphs: [],
      steps: [
        'Déposez les photos d’origine dans l’outil en haut de cette page : JPG, PNG, WebP, GIF, HEIC ou AVIF.',
        'Consultez le rapport pour voir quelles données de position, personnelles et IA contient chaque fichier.',
        'Cliquez sur « Supprimer les métadonnées IA ». Seuls les blocs de métadonnées sont supprimés ; les données d’image sont copiées octet par octet.',
        'Téléchargez les fichiers nettoyés en pleine résolution, un par un ou dans un ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Questions sur les captures d’écran et les métadonnées',
  faq: [
    {
      q: 'Une capture d’écran supprime-t-elle la position GPS d’une photo ?',
      a: 'Oui. Les coordonnées GPS d’origine ne sont pas copiées dans la capture. Les détails visibles dans l’image peuvent toutefois révéler où elle a été prise.',
    },
    {
      q: 'Les captures d’écran ont-elles leurs propres métadonnées ?',
      a: 'Oui. Elles contiennent généralement la date de capture et des informations sur l’appareil ou le logiciel, parfois un commentaire qui les identifie comme captures.',
    },
    {
      q: 'Une capture d’écran supprime-t-elle les Content Credentials C2PA ?',
      a: 'Le manifeste d’origine n’est pas copié. Certains appareils et applications peuvent ajouter de nouvelles Content Credentials à la capture elle-même : vérifiez le résultat.',
    },
    {
      q: 'Une capture d’écran supprime-t-elle SynthID ou d’autres filigranes invisibles ?',
      a: 'Non. Les filigranes invisibles font partie des pixels et sont conçus pour résister aux captures, au recadrage et à la compression.',
    },
    {
      q: 'Une capture d’écran réduit-elle la qualité de l’image ?',
      a: 'En général, oui. Elle est limitée à la résolution de l’écran, peut être redimensionnée et perdre le profil couleur d’origine ainsi que les informations HDR.',
    },
    {
      q: 'Quelle est la meilleure façon de supprimer les métadonnées sans perte ?',
      a: 'Supprimer les métadonnées du fichier d’origine avec un outil sans perte. Les données d’image restent identiques et le fichier garde sa pleine résolution.',
    },
  ],
};

export default article;
