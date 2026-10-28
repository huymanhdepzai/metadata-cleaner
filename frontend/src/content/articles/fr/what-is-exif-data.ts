import type { Article } from '../types';

const article: Article = {
  title: 'Données EXIF : c’est quoi ? Guide des métadonnées photo',
  summary: [
    'L’EXIF (Exchangeable Image File Format) désigne les informations cachées qu’un appareil photo ou un smartphone écrit dans chaque photo : réglages de prise de vue, date et heure, modèle de l’appareil et souvent la position GPS.',
    'Ce guide explique ce que contient l’EXIF, en quoi il diffère de XMP, IPTC et C2PA, pourquoi il compte pour votre vie privée, et comment le consulter ou le supprimer en toute sécurité.',
  ],
  description:
    'Données EXIF, c’est quoi ? Les champs (appareil, heure, GPS), les différences avec XMP, IPTC et C2PA, et comment les lire ou les supprimer sans perte de qualité.',
  answer:
    'Les données EXIF sont des métadonnées que les appareils photo et smartphones stockent dans une photo : marque et modèle de l’appareil, réglages d’exposition, date et heure, orientation, une petite vignette et souvent la position GPS. Elles n’influent pas sur l’apparence de l’image. Vous pouvez les consulter dans les infos photo de votre téléphone ou avec un visualiseur de métadonnées, et les supprimer avec un nettoyeur qui conserve l’orientation et le profil colorimétrique.',
  sections: [
    {
      heading: 'Que signifie EXIF ?',
      paragraphs: [
        'EXIF signifie Exchangeable Image File Format, un standard créé pour les appareils photo numériques afin que chaque photo puisse transporter des informations sur sa prise de vue. Presque tous les appareils photo et smartphones écrivent l’EXIF automatiquement, et la plupart des applications photo savent le lire.',
      ],
    },
    {
      heading: 'Que contiennent les données EXIF ?',
      paragraphs: ['Une photo typique peut inclure :'],
      table: {
        head: ['Groupe', 'Exemples de champs'],
        rows: [
          ['Appareil', 'Make, Model, LensModel, parfois un numéro de série'],
          ['Exposition', 'ISO, FNumber (ouverture), ExposureTime (vitesse d’obturation), FocalLength, Flash'],
          ['Date et heure', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Localisation', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Image', 'Orientation, résolution, vignette intégrée'],
          ['Logiciel', 'Software, l’application qui a enregistré le fichier en dernier'],
        ],
      },
    },
    {
      heading: 'Où l’EXIF est-il stocké dans le fichier ?',
      paragraphs: [
        'Dans les fichiers JPEG, l’EXIF se trouve dans un segment APP1 près du début du fichier et s’organise en répertoires (IFD) : IFD0 pour les données de base de l’image et de l’appareil, le répertoire Exif pour les réglages de prise de vue, le répertoire GPS pour la localisation et IFD1 pour la vignette. Les fichiers HEIC, WebP et PNG peuvent aussi contenir de l’EXIF, dans leurs propres conteneurs.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF, XMP, IPTC et C2PA : quelles différences ?',
      paragraphs: ['Les photos contiennent souvent plusieurs types de métadonnées à la fois :'],
      table: {
        head: ['Standard', 'Écrit par', 'Contenu typique'],
        rows: [
          ['EXIF', 'Appareils photo et smartphones', 'Données techniques de prise de vue, heure, GPS'],
          ['XMP', 'Logiciels de retouche', 'Descriptions, mots-clés, historique de retouche, champs IA'],
          ['IPTC', 'Rédactions, banques d’images, logiciels de retouche', 'Légendes, crédits, droits, DigitalSourceType'],
          ['C2PA', 'Appareils photo, logiciels de retouche, services d’IA', 'Content Credentials signés : provenance et modifications'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Pourquoi les données EXIF comptent pour votre vie privée',
      paragraphs: [
        'Pour les photographes, l’EXIF est un outil d’apprentissage et une trace de leur travail. Pour tous les autres, c’est surtout un risque pour la vie privée : une seule photo peut révéler votre adresse, votre appareil et le moment où vous étiez quelque part. L’EXIF est aussi facile à modifier : il ne doit jamais être considéré comme une preuve à lui seul.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Comment voir les données EXIF d’une photo',
      paragraphs: [],
      bullets: [
        'Windows : clic droit sur le fichier › Propriétés › Détails.',
        'Mac : ouvrez la photo dans Aperçu › Outils › Afficher l’inspecteur.',
        'iPhone et Android : ouvrez la photo et balayez vers le haut.',
        'N’importe quel appareil : déposez la photo dans l’outil en haut de cette page pour décoder chaque champ EXIF, XMP et IPTC, regroupé par source.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'Comment supprimer les données EXIF en toute sécurité',
      paragraphs: [
        'Quand vous supprimez l’EXIF, conservez la balise d’orientation pour que les photos ne soient pas pivotées, gardez le profil colorimétrique pour des couleurs fidèles, et évitez les outils qui recompressent l’image. Cet outil fait les trois automatiquement : cliquez sur « Supprimer les métadonnées IA », vérifiez le panneau de résultat et téléchargez le fichier nettoyé.',
      ],
    },
  ],
  faqHeading: 'Questions sur les données EXIF',
  faq: [
    {
      q: 'L’EXIF affecte-t-il la qualité de l’image ?',
      a: 'Non. L’EXIF est stocké séparément des données d’image : le supprimer ne change pas l’apparence de l’image.',
    },
    {
      q: 'Les données EXIF peuvent-elles être falsifiées ?',
      a: 'Oui. Les champs EXIF se modifient avec des outils courants : ce sont des indices utiles, mais jamais une preuve à eux seuls.',
    },
    {
      q: 'L’orientation fait-elle partie de l’EXIF, et est-elle conservée ?',
      a: 'Oui, l’orientation est une balise EXIF. Le nettoyeur la réécrit dans un bloc EXIF minimal pour que vos photos continuent de s’afficher dans le bon sens.',
    },
    {
      q: 'Les captures d’écran contiennent-elles des données EXIF ?',
      a: 'Les captures d’écran contiennent généralement peu d’EXIF, mais elles peuvent tout de même indiquer la date, l’appareil et le logiciel qui les a créées.',
    },
    {
      q: 'Les fichiers PNG contiennent-ils de l’EXIF ?',
      a: 'C’est possible, dans un chunk eXIf, mais les métadonnées PNG sont plus souvent stockées dans des chunks de texte — là où les outils d’IA placent les prompts.',
    },
    {
      q: 'Est-il légal de supprimer les données EXIF ?',
      a: 'Supprimer les métadonnées de vos propres photos ne pose généralement pas de problème. Ne retirez pas les informations de copyright ou de crédit d’images qui ne vous appartiennent pas si une licence l’exige.',
    },
  ],
};

export default article;
