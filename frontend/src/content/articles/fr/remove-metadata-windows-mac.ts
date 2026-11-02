import type { Article } from '../types';

const article: Article = {
  title: 'Comment supprimer les métadonnées des photos sur Windows et Mac',
  seoTitle: 'Supprimer les métadonnées photo sur Windows et Mac',
  summary: [
    'Les photos copiées sur un ordinateur conservent tout ce que l’appareil photo ou le téléphone a enregistré : position GPS, heure de prise de vue, modèle de l’appareil et parfois des données de provenance IA. Windows et macOS savent afficher ces informations, mais leurs options intégrées pour les supprimer sont limitées.',
    'Voici ce que l’Explorateur de fichiers, Paint, Aperçu et Photos peuvent supprimer ou non, la place d’ExifTool, et une méthode dans le navigateur pour retirer toutes les métadonnées sans perte, sans rien installer.',
  ],
  description:
    'Supprimer les métadonnées photo sur Windows 11/10 et macOS : ce que l’Explorateur, Aperçu et Photos effacent, leurs limites et une solution sans perte.',
  answer:
    'Sur Windows, faites un clic droit sur une photo, ouvrez Propriétés › Détails et choisissez « Supprimer les propriétés et les informations personnelles ». Sur Mac, Aperçu ne peut retirer que la position GPS, et Photos peut l’omettre à l’export. Aucune de ces options ne supprime tous les champs, en particulier C2PA ou les prompts IA. Pour retirer toutes les métadonnées sur l’un ou l’autre système sans recompression, utilisez un outil dans le navigateur ou ExifTool.',
  sections: [
    {
      heading: 'Voir les métadonnées d’une photo sur Windows et Mac',
      paragraphs: ['Vérifiez le fichier avant de supprimer quoi que ce soit, pour savoir ce qu’il contient réellement.'],
      bullets: [
        'Windows : clic droit sur la photo › Propriétés › Détails. Vous voyez l’appareil, la date de prise de vue, les dimensions et, le cas échéant, la latitude et la longitude GPS.',
        'Mac (Aperçu) : ouvrez la photo, choisissez Outils › Afficher l’inspecteur, puis l’onglet « i ». EXIF, IPTC et GPS apparaissent dans des onglets distincts.',
        'Mac (Finder) : sélectionnez le fichier et appuyez sur ⌘I ; « Plus d’infos » affiche un court résumé, comme les dimensions et l’appareil.',
        'Les deux : les visionneuses intégrées ignorent les blocs qu’elles ne comprennent pas, comme les Content Credentials C2PA ou le texte du prompt dans les PNG générés par IA. Une visionneuse de métadonnées dédiée les affiche aussi.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Supprimer les métadonnées sur Windows 11 et 10 avec l’Explorateur de fichiers',
      paragraphs: [],
      steps: [
        'Sélectionnez une ou plusieurs photos dans l’Explorateur de fichiers, faites un clic droit et choisissez Propriétés.',
        'Ouvrez l’onglet Détails et cliquez sur « Supprimer les propriétés et les informations personnelles » en bas.',
        'Choisissez « Créer une copie en supprimant toutes les propriétés possibles » pour garder l’original, ou sélectionnez les champs à supprimer du fichier lui-même.',
        'Cliquez sur OK, puis ouvrez l’onglet Détails de la copie pour vérifier ce qui reste.',
      ],
    },
    {
      heading: 'Limites de l’option Windows',
      paragraphs: [
        'L’Explorateur de fichiers ne modifie que les propriétés que Windows sait écrire pour ce format. Cela fonctionne au mieux avec le JPEG ; la prise en charge des PNG, HEIC et WebP dépend des codecs installés et reste souvent partielle. La fonction n’est pas prévue pour supprimer les manifestes C2PA, les blocs XMP qu’elle n’associe à aucune propriété, ni le texte des prompts et workflows que les outils d’IA stockent dans les PNG. Réenregistrer dans Paint supprime bien les métadonnées, mais recompresse l’image et peut en réduire la qualité.',
      ],
    },
    {
      heading: 'Retirer la position sur Mac avec Aperçu et Photos',
      paragraphs: ['macOS propose deux options intégrées, toutes deux centrées sur la position :'],
      bullets: [
        'Aperçu : Outils › Afficher l’inspecteur › onglet « i » › GPS, puis cliquez sur « Supprimer les informations de localisation » et enregistrez. Le modèle d’appareil, l’heure de prise de vue et le reste de l’EXIF sont conservés.',
        'Photos : sélectionnez la photo et choisissez Image › Lieu › Masquer le lieu, ou utilisez Fichier › Exporter en décochant « Informations de lieu ». Un export JPEG est recompressé et les autres métadonnées sont tout de même incluses.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'Comparatif des options intégrées',
      paragraphs: [],
      table: {
        head: ['Méthode', 'Position GPS', 'Appareil et date', 'C2PA et prompts IA', 'Qualité d’image'],
        rows: [
          ['Windows › Supprimer les propriétés', 'Supprimée (JPEG)', 'Supprimés (JPEG)', 'Pas prévu pour', 'Inchangée'],
          ['Réenregistrer dans Paint', 'En général supprimée', 'En général supprimés', 'En général supprimés', 'Recompressée'],
          ['Aperçu › Supprimer les informations de localisation', 'Supprimée', 'Conservés', 'Conservés', 'Inchangée'],
          ['Export Photos sans le lieu', 'Supprimée', 'Conservés', 'Pas de façon fiable', 'Recompressée (JPEG)'],
          ['Outil de métadonnées dans le navigateur', 'Supprimée', 'Supprimés', 'Supprimés', 'Inchangée'],
        ],
      },
    },
    {
      heading: 'Supprimer toutes les métadonnées sur Windows ou Mac, sans installation',
      paragraphs: [
        'L’outil de cette page fonctionne dans n’importe quel navigateur de bureau sous Windows, macOS ou Linux. Les fichiers sont traités sur votre ordinateur et ne sont jamais envoyés.',
      ],
      steps: [
        'Faites glisser jusqu’à 50 fichiers JPG, PNG, WebP, GIF, HEIC ou AVIF dans la zone de dépôt en haut de cette page.',
        'Consultez le rapport : position, données personnelles, heure de prise de vue et signaux IA sont listés pour chaque fichier.',
        'Cliquez sur « Supprimer les métadonnées IA ». Seuls les blocs de métadonnées sont découpés ; les données d’image sont copiées octet par octet.',
        'Téléchargez les fichiers un par un ou dans un seul ZIP, et gardez vos originaux.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'Utiliser ExifTool en ligne de commande',
      paragraphs: [
        'ExifTool est un programme gratuit en ligne de commande pour Windows, macOS et Linux, et l’option la plus complète pour les scripts. « exiftool -all= photo.jpg » supprime toutes les métadonnées modifiables et conserve une sauvegarde nommée photo.jpg_original. Notez que cela supprime aussi le profil couleur et la balise d’orientation ; pour les garder, lancez « exiftool -all= -tagsfromfile @ -icc_profile -orientation photo.jpg ». Vérifiez toujours le résultat avec une visionneuse, car la couverture varie selon le format.',
      ],
    },
  ],
  faqHeading: 'Questions sur la suppression des métadonnées sur ordinateur',
  faq: [
    {
      q: '« Supprimer les propriétés et les informations personnelles » efface-t-il tout ?',
      a: 'Non. Cela supprime les propriétés que Windows peut modifier pour ce format, surtout l’EXIF des fichiers JPEG. Les manifestes C2PA, le XMP non pris en charge et les blocs de texte PNG peuvent subsister : vérifiez la copie avant de la partager.',
    },
    {
      q: 'Puis-je supprimer tout l’EXIF avec Aperçu sur Mac ?',
      a: 'Non. Aperçu ne peut retirer que la position GPS. L’appareil, l’objectif, la date et les autres champs restent dans le fichier.',
    },
    {
      q: 'L’export depuis Photos sur Mac supprime-t-il les métadonnées ?',
      a: 'En partie seulement. Avec « Informations de lieu » décoché, le GPS est omis, mais l’appareil et la date sont conservés, et un export JPEG est recompressé.',
    },
    {
      q: 'Existe-t-il une méthode sans perte de qualité ?',
      a: 'Oui. L’Explorateur de fichiers Windows, ExifTool et l’outil dans le navigateur de cette page suppriment les métadonnées sans recompression. Réenregistrer dans Paint ou exporter en JPEG recompresse l’image.',
    },
    {
      q: 'Puis-je nettoyer beaucoup de photos à la fois sur mon ordinateur ?',
      a: 'Oui. L’Explorateur de fichiers accepte plusieurs fichiers sélectionnés, ExifTool traite des dossiers entiers, et l’outil dans le navigateur gère jusqu’à 50 images par lot avec téléchargement en ZIP.',
    },
    {
      q: 'Mes photos sont-elles envoyées quand j’utilise l’outil dans le navigateur ?',
      a: 'Non. Les fichiers sont lus et nettoyés dans le navigateur, sur votre propre ordinateur, et ne sont jamais envoyés à un serveur.',
    },
  ],
};

export default article;
