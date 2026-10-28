import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les données EXIF d’une photo en ligne, sans perte',
  summary: [
    'Les photos de smartphone et d’appareil photo contiennent des données EXIF : position GPS, heure de prise de vue, modèle de l’appareil et parfois un numéro de série. Quiconque récupère le fichier original peut les lire.',
    'Déposez vos photos dans l’outil de cette page pour voir chaque champ EXIF et le supprimer en un clic — sans recompresser l’image, sans la faire pivoter et sans rien envoyer.',
  ],
  description:
    'Outil gratuit pour supprimer les données EXIF en ligne : GPS, appareil, date et numéro de série des JPG, HEIC, PNG et WebP, dans le navigateur. Sans perte, sans envoi.',
  answer:
    'Pour supprimer les données EXIF d’une photo, déposez-la dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». Coordonnées GPS, heure de prise de vue, marque, modèle et numéro de série de l’appareil sont effacés avec XMP et IPTC, tandis que l’orientation et le profil colorimétrique sont conservés pour que la photo reste identique. L’image n’est jamais recompressée et ne quitte jamais votre navigateur.',
  sections: [
    {
      heading: 'Supprimer les données EXIF en trois étapes',
      paragraphs: [],
      steps: [
        'Déposez vos photos dans l’outil ci-dessus, ou touchez « Choisir des images ». Les formats JPG, HEIC, PNG, WebP, GIF et AVIF sont pris en charge.',
        'Consultez « Confidentialité » pour voir si des données de localisation, personnelles ou horaires sont exposées, et ouvrez « Toutes les métadonnées et détails du fichier » pour voir chaque champ.',
        'Cliquez sur « Supprimer les métadonnées IA » et téléchargez les photos nettoyées une par une ou dans un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Quels champs EXIF sont supprimés ?',
      paragraphs: [],
      table: {
        head: ['Groupe', 'Exemples', 'Résultat'],
        rows: [
          ['Localisation', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Supprimé'],
          ['Appareil', 'Make, Model, LensModel, BodySerialNumber', 'Supprimé'],
          ['Date et heure', 'DateTimeOriginal, OffsetTime', 'Supprimé'],
          ['Logiciel et auteur', 'Software, Artist, Copyright', 'Supprimé'],
          ['Vignette', 'Aperçu intégré', 'Supprimé'],
          ['Affichage', 'Orientation, profil colorimétrique ICC', 'Conservé'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Pourquoi choisir un outil de suppression EXIF sans perte',
      paragraphs: [
        'Beaucoup d’outils de suppression EXIF redessinent la photo et enregistrent un nouveau fichier. L’EXIF disparaît, mais les JPEG sont recompressés, le profil colorimétrique peut être perdu et la photo est parfois pivotée parce que la balise d’orientation a disparu.',
        'Cet outil découpe les blocs de métadonnées du fichier et copie les données d’image sans modification. L’orientation est réécrite dans un bloc EXIF minimal : la photo reste droite et identique au pixel près.',
      ],
    },
    {
      heading: 'Quand supprimer les données EXIF',
      paragraphs: [],
      bullets: [
        'Avant de vendre des objets en ligne ou de publier des photos prises chez vous.',
        'Avant d’envoyer des fichiers originaux par e-mail, par lien cloud ou via l’option « envoyer en tant que fichier » des messageries, qui conservent l’EXIF.',
        'Avant de livrer à un client un travail qui ne doit pas révéler le numéro de série de votre appareil ni votre historique de retouche.',
        'Avant de publier des photos d’enfants, d’événements ou de lieux que vous ne voulez pas voir localisés.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'L’EXIF des photos iPhone et Android',
      paragraphs: [
        'Les photos d’iPhone sont généralement des fichiers HEIC dont l’EXIF est stocké dans un élément séparé ; les photos Android sont généralement des JPEG avec l’EXIF dans un segment APP1. Les deux sont nettoyées sur place et gardent leur format d’origine — le HEIC n’est pas converti en JPG.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Questions sur la suppression des données EXIF',
  faq: [
    {
      q: 'Supprimer l’EXIF réduit-il la qualité de la photo ?',
      a: 'Non. Seuls les blocs de métadonnées sont retirés ; les données d’image sont copiées octet par octet.',
    },
    {
      q: 'Mes photos seront-elles pivotées après la suppression de l’EXIF ?',
      a: 'Non. La balise d’orientation est réécrite dans un bloc EXIF minimal pour que les photos s’affichent dans le bon sens.',
    },
    {
      q: 'Mes photos sont-elles envoyées sur un serveur ?',
      a: 'Non. Tout s’exécute dans votre navigateur et les fichiers ne quittent jamais votre appareil.',
    },
    {
      q: 'Puis-je supprimer uniquement la position GPS et garder le reste ?',
      a: 'Pas encore. L’outil supprime toutes les métadonnées identifiantes d’un coup et ne garde que ce qui est nécessaire pour afficher correctement l’image.',
    },
    {
      q: 'Y a-t-il une limite ?',
      a: 'Chaque photo peut faire jusqu’à 25 Mo et 40 mégapixels, avec jusqu’à 50 photos par lot.',
    },
    {
      q: 'Peut-on récupérer les données EXIF supprimées ?',
      a: 'Pas à partir du fichier nettoyé. Les copies partagées avant le nettoyage les contiennent toujours.',
    },
  ],
};

export default article;
