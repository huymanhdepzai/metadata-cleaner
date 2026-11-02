import type { Article } from '../types';

const article: Article = {
  title: 'Meilleurs outils pour supprimer les métadonnées en 2026 : 8 options comparées',
  seoTitle: 'Supprimer les métadonnées : meilleurs outils 2026',
  summary: [
    'Chaque photo peut contenir des données cachées : position GPS, date de prise de vue, numéros de série de l’appareil et, pour les images IA, des Content Credentials C2PA ou le prompt complet. Des dizaines d’outils promettent de les supprimer, mais ils diffèrent sur ce qu’ils effacent réellement, sur la recompression de l’image et sur le fait que vos fichiers quittent ou non votre appareil.',
    'Voici les huit outils de suppression de métadonnées à connaître en 2026, des outils dans le navigateur et ExifTool aux options déjà intégrées à Windows, macOS et votre téléphone, avec ce que chacun supprime et ses limites.',
  ],
  description:
    'Meilleurs outils pour supprimer les métadonnées en 2026 : All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, mobiles et logiciels — ce qu’ils effacent.',
  answer:
    'Le meilleur outil dépend de votre façon de travailler. Pour nettoyer rapidement et en privé des images JPG, PNG, WebP, HEIC et IA, un outil dans le navigateur comme All Metadata Cleaner supprime EXIF, GPS, C2PA et prompts sans envoi ni recompression. ExifTool est le plus complet pour les scripts, les fichiers RAW et les suppressions ciblées. Les options intégrées à Windows, macOS et aux téléphones ne retirent en général que la position.',
  sections: [
    {
      heading: 'Comment nous avons comparé les outils de suppression de métadonnées',
      paragraphs: [
        'Précision : All Metadata Cleaner est l’outil de ce site. Il apparaît en premier parce que ce guide est le sien, pas parce que toutes les autres options seraient moins bonnes : plusieurs outils ci-dessous conviennent mieux à certaines tâches, et nous le disons. Chacun est décrit d’après son fonctionnement documenté, selon cinq questions :',
      ],
      bullets: [
        'Couverture : supprime-t-il seulement l’EXIF et le GPS, ou aussi le XMP, l’IPTC, les Content Credentials C2PA et les prompts IA stockés dans le texte PNG ?',
        'Qualité : découpe-t-il les métadonnées du fichier, ou décode-t-il et recompresse-t-il l’image ?',
        'Confidentialité : les fichiers sont-ils traités sur votre appareil ou envoyés sur un serveur ?',
        'Ce qu’il conserve : l’orientation et le profil couleur, pour que la photo nettoyée s’affiche correctement.',
        'Effort : installation, ligne de commande ou un clic — et prise en charge du traitement par lots.',
      ],
    },
    {
      heading: 'Tableau comparatif des outils de suppression de métadonnées',
      paragraphs: [],
      table: {
        head: ['Outil', 'Plateforme', 'Prix', 'C2PA et prompts IA', 'Qualité d’image'],
        rows: [
          ['All Metadata Cleaner', 'Tout navigateur', 'Gratuit', 'Supprimés', 'Inchangée'],
          ['ExifTool', 'Windows, macOS, Linux (ligne de commande)', 'Gratuit, open source', 'Supprimés (-all= ou -jumbf:all=)', 'Inchangée'],
          ['ExifCleaner', 'Windows, macOS, Linux (application)', 'Gratuit, open source', 'Via ExifTool — vérifiez le résultat', 'Inchangée'],
          ['Explorateur de fichiers Windows', 'Windows', 'Intégré', 'Pas prévu pour', 'Inchangée'],
          ['Aperçu et Photos sur Mac', 'macOS', 'Intégré', 'Non — position uniquement', 'Inchangée avec Aperçu, recompressée à l’export depuis Photos'],
          ['Partage sur iPhone et Android', 'iOS, Android', 'Intégré', 'Non — position uniquement', 'Selon l’app'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (ligne de commande)', 'Gratuit, open source', 'En général, car le fichier est réécrit', 'Recompressée (JPEG, WebP)'],
          ['Export depuis un logiciel photo', 'Photoshop, Lightroom, GIMP', 'Payant ou gratuit', 'Selon les réglages d’export', 'Recompressée'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner — le meilleur pour un nettoyage rapide et privé',
      paragraphs: [
        'Un outil web gratuit qui fonctionne entièrement dans votre navigateur : les images sont lues et nettoyées sur votre appareil et ne sont jamais envoyées. Il supprime l’EXIF (GPS compris), le XMP, l’IPTC, les Content Credentials C2PA ainsi que les prompts et workflows ComfyUI que les générateurs d’IA stockent dans le texte PNG. Les blocs de métadonnées sont découpés au niveau des octets : les données d’image sont copiées telles quelles, et l’orientation et le profil couleur ICC sont conservés pour que les photos s’affichent exactement comme avant. HEIC et AVIF restent dans leur format d’origine.',
        'Avant le nettoyage, un rapport indique ce que contient chaque fichier : position, données personnelles, date de prise de vue et signaux IA. Limites : uniquement JPG, PNG, WebP, GIF, HEIC et AVIF (ni RAW, ni vidéo, ni PDF), jusqu’à 25 Mo par image et 50 images par lot, et il supprime toutes les informations identifiantes d’un coup au lieu de laisser choisir des champs un par un.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool — le meilleur pour les utilisateurs avancés et l’automatisation',
      paragraphs: [
        'ExifTool, de Phil Harvey, est l’outil de référence : gratuit, open source et compatible avec bien plus de formats que toutes les autres options ici, y compris les fichiers RAW et la vidéo. « exiftool -all= photo.jpg » supprime toutes les métadonnées modifiables, « -jumbf:all= » seulement le bloc C2PA, et vous pouvez supprimer ou garder chaque balise individuellement — ce que les outils en un clic ne proposent pas.',
        'En contrepartie, il faut passer par la ligne de commande et surveiller les réglages par défaut : « -all= » supprime aussi le profil couleur et la balise d’orientation, sauf si vous les recopiez avec « -tagsfromfile @ -icc_profile -orientation ». Une sauvegarde nommée « _original » reste à côté de chaque fichier jusqu’à ce que vous la supprimiez.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner — la meilleure application de bureau en glisser-déposer',
      paragraphs: [
        'ExifCleaner est une application de bureau gratuite et open source pour Windows, macOS et Linux, qui place une fenêtre de glisser-déposer devant ExifTool. Déposez des fichiers ou un dossier entier, et les métadonnées sont supprimées hors ligne. La version 4, publiée en 2026, est sa première refonte majeure en cinq ans et ajoute des options pour enregistrer une copie nettoyée et conserver l’orientation. Activez l’enregistrement en copie si vous voulez garder vos originaux, et vérifiez le résultat sur les images IA, car la prise en charge de C2PA dépend de la version d’ExifTool incluse.',
      ],
    },
    {
      heading: '4. Explorateur de fichiers Windows — intégré, idéal pour le JPEG',
      paragraphs: [
        'Clic droit sur la photo › Propriétés › Détails › « Supprimer les propriétés et les informations personnelles » efface les propriétés que Windows sait modifier et peut enregistrer une copie nettoyée. Cela fonctionne bien pour l’EXIF des fichiers JPEG, y compris sur plusieurs fichiers à la fois. La prise en charge des PNG, HEIC et WebP dépend des codecs installés, et la fonction n’est pas prévue pour supprimer les manifestes C2PA ni les prompts IA.',
      ],
    },
    {
      heading: '5. Aperçu et Photos sur Mac — intégrés, position uniquement',
      paragraphs: [
        'Aperçu peut supprimer la position GPS (Outils › Afficher l’inspecteur › GPS › Supprimer les informations de localisation) sans toucher à la qualité, et Photos peut omettre la position à l’export. Dans les deux cas, l’appareil, la date et le reste de l’EXIF sont conservés, et un export JPEG depuis Photos est recompressé. Suffisant si seule la position vous préoccupe.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. Options de partage sur iPhone et Android — position uniquement',
      paragraphs: [
        'Sur iPhone, touchez Options en haut de la feuille de partage et désactivez la localisation avant d’envoyer. Sur Android, Google Photos et de nombreuses fenêtres de partage proposent de retirer la position des copies partagées. C’est le moyen le plus simple de ne pas révéler où une photo a été prise, mais les autres champs EXIF restent, et les réglages varient selon l’app et le fabricant.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick — pour les scripts, mais avec recompression',
      paragraphs: [
        '« magick mogrify -strip *.jpg » supprime les profils et commentaires de dossiers entiers, et ImageMagick est gratuit sur tous les systèmes de bureau. Contrairement à ExifTool, il décode puis réécrit l’image : les JPEG et WebP sont donc recompressés, et -strip supprime aussi le profil couleur ICC, ce qui peut décaler les couleurs des photos à gamut étendu. À utiliser si vous redimensionnez ou convertissez de toute façon, pas comme simple outil de suppression de métadonnées.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom et GIMP — exporter sans métadonnées',
      paragraphs: [
        'Tous les grands logiciels photo permettent d’exporter sans métadonnées : « Exporter sous » de Photoshop peut n’en inclure aucune, l’export de Lightroom peut se limiter au copyright, et GIMP permet de décocher l’EXIF et le XMP à l’export. Un export recompresse toujours l’image, et les apps Adobe peuvent ajouter des Content Credentials si ce réglage est activé : vérifiez-le avant.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Et les sites en ligne qui envoient votre photo sur un serveur ?',
      paragraphs: [
        'Beaucoup de sites nettoient les métadonnées en envoyant votre fichier sur leur serveur puis en vous renvoyant une copie. Certains fonctionnent bien, mais vous confiez l’original — avec sa position GPS et vos données personnelles — à un tiers, et beaucoup recompressent l’image. Si vous en utilisez un, lisez sa politique de confidentialité pour savoir combien de temps les fichiers sont conservés. Les outils qui traitent les fichiers localement dans le navigateur évitent complètement le problème.',
      ],
    },
    {
      heading: 'Quel outil de suppression de métadonnées choisir ?',
      paragraphs: [],
      bullets: [
        'Partager quelques photos ou images IA en privé, sans rien installer : All Metadata Cleaner.',
        'Scripts, fichiers RAW, vidéo ou suppression de balises précises : ExifTool.',
        'Une application de bureau hors ligne en glisser-déposer : ExifCleaner.',
        'Seulement la position, juste avant d’envoyer depuis votre téléphone : l’interrupteur de localisation du partage.',
        'Vous retouchez ou redimensionnez déjà la photo : exportez sans métadonnées depuis votre logiciel.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Ce qu’aucun outil de métadonnées ne peut faire',
      paragraphs: [
        'Tous ces outils modifient les métadonnées, pas les pixels. Aucun ne peut supprimer les filigranes invisibles intégrés à l’image elle-même, comme SynthID de Google, et les plateformes peuvent toujours étiqueter les images grâce à leur propre détection. Supprimer les métadonnées ne change pas non plus l’obligation de signaler un contenu généré par IA lorsqu’une plateforme ou la loi l’exige.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions sur les outils de suppression de métadonnées',
  faq: [
    {
      q: 'Quel est le meilleur outil gratuit pour supprimer les métadonnées ?',
      a: 'Pour la plupart des gens, un outil dans le navigateur comme All Metadata Cleaner : gratuit, sans installation, sans envoi et sans perte de qualité. Pour les scripts, les fichiers RAW ou les suppressions ciblées, ExifTool est l’option gratuite la plus complète.',
    },
    {
      q: 'Est-il sûr d’utiliser un site pour supprimer les métadonnées ?',
      a: 'Cela dépend de l’envoi du fichier. Les outils qui traitent les images dans le navigateur ne les envoient nulle part. Les sites qui les téléversent reçoivent votre photo d’origine, avec sa position : lisez leur politique de confidentialité.',
    },
    {
      q: 'Supprimer les métadonnées réduit-il la qualité de l’image ?',
      a: 'Non avec les outils qui découpent les blocs de métadonnées, comme All Metadata Cleaner, ExifTool, ExifCleaner et l’Explorateur Windows. L’export depuis un logiciel, ImageMagick ou Photos sur Mac recompresse l’image et peut réduire sa qualité.',
    },
    {
      q: 'Quels outils suppriment les Content Credentials C2PA ?',
      a: 'All Metadata Cleaner et ExifTool (avec -all= ou -jumbf:all=) suppriment les manifestes C2PA. Les options intégrées à Windows, macOS et aux téléphones ne sont pas prévues pour cela.',
    },
    {
      q: 'Puis-je supprimer seulement la position GPS et garder le reste ?',
      a: 'Oui, avec ExifTool (exiftool -gps:all= photo.jpg), Aperçu sur Mac ou les options de partage de votre téléphone. All Metadata Cleaner supprime toutes les métadonnées identifiantes en une fois.',
    },
    {
      q: 'Un de ces outils peut-il supprimer les filigranes IA invisibles comme SynthID ?',
      a: 'Non. SynthID et les filigranes similaires font partie des pixels, pas des métadonnées : les outils de suppression de métadonnées n’y touchent pas.',
    },
  ],
};

export default article;
