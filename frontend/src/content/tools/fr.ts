import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Outils gratuits pour les métadonnées d’images',
    description:
      'Outils gratuits dans le navigateur pour voir, analyser et supprimer les métadonnées d’images : lecteur EXIF, analyse de confidentialité, taille des métadonnées, suppression EXIF, GPS, C2PA.',
    intro:
      'Tous les outils fonctionnent dans votre navigateur avec le même moteur : vos images ne sont jamais envoyées et rien n’est recompressé. Choisissez ce dont vous avez besoin : regarder dans une photo, vérifier ce qu’elle révèle ou la nettoyer.',
  },
  cards: {
    cleaner: { name: 'Supprimer les métadonnées', text: 'Supprimez EXIF, GPS, XMP, IPTC, C2PA et prompts d’IA en un clic, sans perte de qualité.' },
    'view-metadata': { name: 'Voir les métadonnées', text: 'Affichez tous les champs cachés d’une photo : appareil, date, GPS, XMP, C2PA et prompts d’IA.' },
    'privacy-check': { name: 'Analyse de confidentialité', text: 'Découvrez ce qu’une photo révèle : position sur une carte, données personnelles et heure de prise de vue.' },
    'metadata-size': { name: 'Taille des métadonnées', text: 'Mesurez combien d’octets de métadonnées contient un fichier et leur niveau de risque.' },
    'remove-exif': { name: 'Supprimer l’EXIF', text: 'Effacez appareil, date et numéro de série en gardant l’orientation et les couleurs.' },
    'remove-gps': { name: 'Supprimer la position GPS', text: 'Retirez les coordonnées GPS des photos de téléphone avant de les partager.' },
    'remove-c2pa': { name: 'Supprimer C2PA', text: 'Retirez les manifestes Content Credentials (C2PA) des JPG, PNG, WebP et HEIC.' },
    'remove-prompts': { name: 'Supprimer les prompts d’IA', text: 'Supprimez les paramètres Stable Diffusion et workflows ComfyUI des fichiers PNG.' },
    batch: { name: 'Nettoyage par lot', text: 'Nettoyez jusqu’à 50 images d’un coup et téléchargez-les dans un seul ZIP.' },
  },
  groups: {
    inspect: { title: 'Vérifiez vos photos', text: 'Voyez ce qu’une image révèle avant de la partager : le fichier est seulement lu, jamais modifié.' },
    remove: { title: 'Supprimer les métadonnées selon le besoin', text: 'Choisissez un format ou une tâche : chaque guide intègre le nettoyeur.' },
  },
  tools: {
    'view-metadata': {
      title: 'Voir les métadonnées d’une image en ligne — EXIF, XMP, C2PA',
      description:
        'Lecteur de métadonnées gratuit : affichez EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) et prompts d’IA des JPG, PNG, WebP et HEIC dans votre navigateur, sans envoi.',
      intro:
        'Déposez une photo pour voir toutes les informations cachées qu’elle contient — appareil et objectif, date de prise de vue, position GPS, logiciel de retouche, Content Credentials et prompts d’IA — regroupées par source. Rien n’est modifié ni envoyé.',
      steps: [
        'Déposez une ou plusieurs images dans le cadre ci-dessus, ou touchez « Choisir des images ».',
        'Ouvrez un fichier pour voir le résumé de confidentialité, les signaux d’IA et la liste complète des champs.',
        'Recherchez dans les champs, puis décidez de garder le fichier tel quel ou d’en supprimer les métadonnées.',
      ],
      faq: [
        {
          q: 'Afficher les métadonnées modifie-t-il mon fichier ?',
          a: 'Non. Le fichier est seulement lu. Pour supprimer les métadonnées, utilisez le nettoyeur : vos images restent chargées, inutile de les ajouter à nouveau.',
        },
        {
          q: 'Quelles métadonnées puis-je voir ?',
          a: 'EXIF (y compris le GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de texte PNG avec prompts ou workflows ComfyUI, et les blocs de la structure du fichier.',
        },
        {
          q: 'Mes photos sont-elles envoyées ?',
          a: 'Non. Votre navigateur lit les fichiers, qui ne quittent jamais votre appareil.',
        },
      ],
    },
    'privacy-check': {
      title: 'Analyse de confidentialité photo — trouver GPS et données personnelles',
      description:
        'Vérifiez ce qu’une photo révèle avant de la partager : position GPS à ouvrir sur une carte, auteur, numéro de série, heure de prise de vue et données d’IA. Gratuit, sans envoi.',
      intro:
        'Découvrez ce qu’une photo dévoile avant de la publier. L’analyse indique si elle contient une position GPS (et où elle pointe), des données personnelles comme l’auteur ou le numéro de série de l’appareil, l’heure de prise de vue et des données de provenance IA, avec un niveau de risque simple.',
      steps: [
        'Déposez dans le cadre ci-dessus les photos que vous comptez partager.',
        'Lisez le niveau de risque et les informations de lieu, personnelles et horaires trouvées dans chaque fichier.',
        'Si une position GPS est trouvée, ouvrez-la sur la carte pour voir exactement ce que d’autres pourraient voir, puis supprimez-la.',
      ],
      faq: [
        {
          q: 'Comment le niveau de risque est-il déterminé ?',
          a: 'Élevé signifie que la photo contient une position. Moyen, qu’elle contient des données personnelles, horaires ou d’IA sans position. Faible, que rien de tout cela n’a été trouvé dans les métadonnées.',
        },
        {
          q: 'La carte se charge-t-elle automatiquement ?',
          a: 'Non. Les coordonnées s’affichent en texte. OpenStreetMap s’ouvre dans un nouvel onglet uniquement si vous cliquez sur le bouton ; sinon, la position ne quitte jamais votre appareil.',
        },
        {
          q: 'Une photo peut-elle révéler ma position sans GPS ?',
          a: 'Les métadonnées ne sont qu’une source. Ce qui est visible sur l’image — panneaux, monuments, reflets — peut aussi révéler un lieu, et cette analyse ne peut pas le détecter.',
        },
      ],
    },
    'metadata-size': {
      title: 'Taille des métadonnées — combien de métadonnées dans une photo ?',
      description:
        'Mesurez la quantité de métadonnées d’une image : total en octets, part du fichier, plus gros blocs EXIF, XMP, C2PA ou de prompts et niveau de risque. Gratuit, sans envoi.',
      intro:
        'Voyez quelle part d’un fichier est constituée de métadonnées plutôt que d’image. L’outil liste chaque bloc de métadonnées par taille — EXIF, XMP, C2PA, aperçus intégrés, prompts et workflows d’IA —, indique sa part du fichier et évalue le risque pour la vie privée.',
      steps: [
        'Déposez une ou plusieurs images dans le cadre ci-dessus.',
        'Comparez la taille des métadonnées et leur part dans chaque fichier, bloc par bloc.',
        'Supprimez les métadonnées pour des fichiers plus légers et plus sûrs à partager.',
      ],
      faq: [
        {
          q: 'Pourquoi certains fichiers contiennent-ils autant de métadonnées ?',
          a: 'Les aperçus intégrés, les manifestes C2PA avec vignettes et les workflows ComfyUI peuvent ajouter des dizaines ou des centaines de kilo-octets, alors que l’EXIF de base ne pèse souvent que quelques ko.',
        },
        {
          q: 'Pourquoi le profil de couleur est-il marqué comme conservé ?',
          a: 'Le profil ICC est nécessaire pour afficher correctement les couleurs ; le nettoyeur le conserve donc. Il n’est pas compté dans le total des métadonnées.',
        },
        {
          q: 'Supprimer les métadonnées modifie-t-il l’image ?',
          a: 'Non. Seuls les blocs de métadonnées sont supprimés ; les données de l’image sont copiées telles quelles, le fichier s’allège sans perte de qualité.',
        },
      ],
    },
  },
};

export default tools;
