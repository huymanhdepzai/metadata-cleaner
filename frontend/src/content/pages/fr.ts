import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'À propos de All Metadata Cleaner',
    description:
      'All Metadata Cleaner est un outil gratuit et respectueux de la vie privée pour afficher et supprimer EXIF, GPS, C2PA et prompts d’IA des images, dans votre navigateur.',
    intro:
      'All Metadata Cleaner est un outil web gratuit pour voir et supprimer les informations cachées dans les fichiers image : EXIF et position GPS, XMP, IPTC, Content Credentials (C2PA) ainsi que les prompts ou workflows intégrés par les générateurs d’IA.',
    sections: [
      {
        heading: 'Pourquoi nous l’avons créé',
        paragraphs: [
          'Les photos et les images d’IA contiennent souvent plus qu’on ne le pense : le lieu de prise de vue, l’appareil utilisé, qui les a retouchées ou le prompt exact d’une image d’IA. La plupart des outils de suppression de métadonnées envoient vos fichiers sur un serveur ou les recompressent. Nous voulions un outil qui ne fasse ni l’un ni l’autre.',
        ],
      },
      {
        heading: 'Comment ça marche',
        paragraphs: ['Tout se passe sur votre propre appareil :'],
        bullets: [
          'Votre navigateur lit chaque fichier et analyse sa structure : segments JPEG, chunks PNG, boîtes WebP et HEIC/AVIF.',
          'Les blocs de métadonnées sont retirés au niveau des octets ; les données de l’image sont copiées telles quelles, la qualité reste identique.',
          'Chaque fichier nettoyé est analysé à nouveau pour que vous puissiez vérifier ce qui a été supprimé.',
        ],
      },
      {
        heading: 'Nos principes',
        paragraphs: ['Quelques règles guident chacune de nos décisions :'],
        bullets: [
          'La vie privée d’abord : les images ne sont jamais envoyées, stockées ni vues par nous.',
          'L’honnêteté : nous expliquons ce que l’outil ne peut pas faire, comme supprimer les filigranes invisibles dans les pixels.',
          'Gratuit, sans compte, sans filigrane et sans publicité.',
        ],
      },
      {
        heading: 'Pour qui',
        paragraphs: [
          'Pour tous ceux qui partagent des images : les personnes qui veulent protéger leur position avant de publier une photo, les photographes qui livrent des travaux à leurs clients, les créateurs qui gardent leurs prompts privés et tous ceux dont une vraie photo a été étiquetée IA par erreur. Nous demandons à chacun de respecter les règles des plateformes sur la déclaration des contenus générés par IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Politique de confidentialité',
    description:
      'Comment All Metadata Cleaner traite vos données : les images sont traitées dans votre navigateur et jamais envoyées. Pas de compte, pas de traceur, pas de publicité.',
    intro:
      'Cette politique explique quelles données All Metadata Cleaner traite lorsque vous utilisez le site. En bref : vos images ne quittent jamais votre appareil et nous ne vous suivons pas.',
    sections: [
      {
        heading: 'Vos images restent sur votre appareil',
        paragraphs: [
          'Les images que vous ajoutez sont lues et traitées par votre propre navigateur à l’aide de Web Workers. Elles ne sont envoyées sur aucun serveur, et nous ne les recevons, ne les stockons ni ne les voyons jamais. Vous pouvez même vous déconnecter d’internet une fois la page chargée : l’outil continue de fonctionner.',
        ],
      },
      {
        heading: 'Ce que nous ne collectons pas',
        paragraphs: ['Le site est conçu pour collecter le moins possible :'],
        bullets: [
          'Aucun compte, aucune inscription ni adresse e-mail n’est nécessaire.',
          'Aucun script d’analyse, de publicité ou de suivi des réseaux sociaux n’est chargé, et aucune police ni aucun script tiers n’est demandé.',
          'Aucune information sur le contenu ou les métadonnées de vos images n’est envoyée nulle part.',
        ],
      },
      {
        heading: 'Données stockées dans votre navigateur',
        paragraphs: ['Le site ne mémorise que deux préférences, sur votre appareil :'],
        bullets: [
          'La langue choisie, enregistrée dans le stockage local et dans un cookie propriétaire pour que la page d’accueil s’ouvre dans cette langue.',
          'Le thème choisi (clair, sombre ou système), enregistré dans le stockage local.',
        ],
      },
      {
        heading: 'Hébergement et journaux du serveur',
        paragraphs: [
          'Le site est diffusé depuis notre propre serveur. Comme tout serveur web, il traite des informations de requête standard, telles que votre adresse IP, le type de navigateur et la page demandée, afin de diffuser le site et de le protéger contre les abus. La langue de votre navigateur peut servir à choisir une langue par défaut. Nous n’utilisons pas ces informations pour vous identifier ni établir de profil.',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        paragraphs: [
          'Si la manière dont le site traite les données change, nous mettrons à jour cette page et la date en haut. Continuer à utiliser le site après une mise à jour vaut acceptation de la politique révisée.',
        ],
      },
    ],
  },
  terms: {
    title: 'Conditions d’utilisation',
    description:
      'Conditions d’utilisation : un outil gratuit fourni tel quel, votre responsabilité quant à l’usage des images nettoyées et les limites de notre responsabilité.',
    intro:
      'En utilisant All Metadata Cleaner, vous acceptez ces conditions. Lisez-les avec l’avertissement de la page d’accueil et notre Politique de confidentialité.',
    sections: [
      {
        heading: 'Le service',
        paragraphs: [
          'All Metadata Cleaner est un outil web gratuit qui analyse et supprime les métadonnées des fichiers image sur votre propre appareil. Nous pouvons modifier, améliorer ou arrêter tout ou partie de l’outil à tout moment et sans préavis.',
        ],
      },
      {
        heading: 'Utilisation autorisée',
        paragraphs: ['Vous êtes responsable des fichiers que vous traitez et de l’usage des résultats. Vous vous engagez à ne pas utiliser l’outil pour :'],
        bullets: [
          'enfreindre la loi ou les droits d’autrui, y compris le droit d’auteur et le droit à la vie privée ;',
          'masquer un contenu généré par IA lorsqu’une loi ou une règle de plateforme impose de le déclarer ;',
          'supprimer des informations de droits d’auteur, de licence ou de crédit d’images qui ne vous appartiennent pas ou que vous n’avez pas le droit de modifier.',
        ],
      },
      {
        heading: 'Absence de garantie',
        paragraphs: [
          'L’outil est fourni « tel quel » et « selon disponibilité », sans aucune garantie, expresse ou implicite. Nous ne garantissons pas qu’il supprime tous les types de métadonnées, que les résultats soient exempts d’erreurs ni que les plateformes traitent les images nettoyées d’une manière particulière. Conservez toujours une copie de vos fichiers originaux.',
        ],
      },
      {
        heading: 'Limitation de responsabilité',
        paragraphs: [
          'Dans toute la mesure permise par la loi, nous ne sommes pas responsables des pertes ou dommages directs, indirects, accessoires ou consécutifs — y compris la perte de données, de fichiers ou de bénéfices — résultant de l’utilisation ou de l’impossibilité d’utiliser l’outil. Certaines juridictions n’autorisent pas certaines limitations ; elles ne s’appliquent alors que dans la mesure permise.',
        ],
      },
      {
        heading: 'Modifications de ces conditions',
        paragraphs: [
          'Nous pouvons mettre à jour ces conditions de temps à autre. La date en haut indique la version la plus récente. Continuer à utiliser l’outil après une modification vaut acceptation des conditions mises à jour.',
        ],
      },
    ],
  },
  contact: {
    title: 'Nous contacter',
    description:
      'Contactez l’équipe All Metadata Cleaner : signalez un bug, proposez une fonctionnalité ou posez une question sur la confidentialité. Nous lisons chaque message et répondons au plus vite.',
    intro:
      'Les questions, signalements de bugs et idées sont les bienvenus. Écrivez-nous par e-mail et nous vous répondrons dès que possible.',
    sections: [
      {
        heading: 'À quel sujet nous écrire',
        paragraphs: ['Nous sommes particulièrement heureux de recevoir :'],
        bullets: [
          'Des bugs : un fichier impossible à nettoyer, ou des métadonnées non détectées ou non supprimées.',
          'Des suggestions : nouveaux formats, options ou langues que vous aimeriez voir.',
          'Des questions de confidentialité ou juridiques concernant le site.',
        ],
      },
      {
        heading: 'Avant d’écrire',
        paragraphs: [
          'Merci de ne pas envoyer de photos privées. Pour signaler un problème, indiquez-nous le format du fichier, l’appareil photo, le téléphone ou l’application qui l’a créé, votre navigateur et le résultat attendu. Si un fichier est nécessaire pour reproduire le problème, envoyez-en un qui ne contient rien de sensible.',
        ],
      },
    ],
  },
};

export default pages;
