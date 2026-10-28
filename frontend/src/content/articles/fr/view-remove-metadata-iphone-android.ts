import type { Article } from '../types';

const article: Article = {
  title: 'Voir et supprimer les métadonnées photo (iPhone, Android)',
  summary: [
    'Votre téléphone enregistre où et quand chaque photo a été prise, ainsi que le modèle de l’appareil. iOS comme Android permettent de consulter ces informations et de retirer la localisation avant de partager.',
    'Voici les options intégrées, leurs limites, et une méthode dans le navigateur pour supprimer toutes les métadonnées identifiantes — y compris des photos HEIC de l’iPhone — sans installer d’application.',
  ],
  description:
    'Voir les métadonnées d’une photo sur iPhone et Android, retirer la localisation avant de partager et effacer tout l’EXIF (HEIC compris) dans le navigateur, sans appli.',
  answer:
    'Sur iPhone, ouvrez une photo et balayez vers le haut pour voir sa date, l’appareil et le lieu ; sur Android, ouvrez-la dans Google Photos et balayez vers le haut. Les deux permettent de retirer ou masquer la localisation, mais le modèle de l’appareil, l’heure de prise de vue et d’autres champs EXIF restent généralement. Pour tout supprimer, ouvrez un nettoyeur dans le navigateur de votre téléphone, sélectionnez les photos et téléchargez les copies nettoyées — sans application.',
  sections: [
    {
      heading: 'Voir les métadonnées d’une photo sur iPhone',
      paragraphs: [],
      steps: [
        'Ouvrez la photo dans l’app Photos.',
        'Balayez vers le haut, ou touchez le bouton d’information (i).',
        'Vous voyez la date et l’heure, l’appareil et l’objectif, les réglages d’exposition et — si la localisation était activée — une carte.',
        'Touchez Ajuster à côté de la date pour modifier la date, l’heure ou le lieu de cette photo.',
      ],
    },
    {
      heading: 'Retirer la localisation en partageant depuis un iPhone',
      paragraphs: ['Deux options intégrées peuvent aider :'],
      bullets: [
        'Dans la feuille de partage, touchez Options en haut et désactivez la localisation avant d’envoyer.',
        'Pour ne plus enregistrer la localisation des nouvelles photos, allez dans Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo et choisissez Jamais.',
      ],
    },
    {
      heading: 'Voir et supprimer les métadonnées sur Android',
      paragraphs: [
        'Dans Google Photos, ouvrez une photo et balayez vers le haut pour voir des détails comme la date, l’appareil et le lieu ; selon la version, vous pouvez y modifier ou supprimer la localisation. La Galerie Samsung et les autres applications de galerie affichent des détails similaires. Pour ne plus géolocaliser les nouvelles photos, désactivez l’option de localisation dans les paramètres de l’application Appareil photo — son nom et son emplacement varient selon le fabricant.',
      ],
    },
    {
      heading: 'Ce que les options intégrées ne suppriment pas',
      paragraphs: [
        'Les réglages du téléphone se concentrent sur la localisation. Le modèle de l’appareil, l’heure de prise de vue, les informations sur l’objectif, le logiciel de retouche et les aperçus intégrés restent généralement, et ces réglages ne concernent que les futures photos ou un seul partage. Les fichiers copiés sur un ordinateur ou envoyés via d’autres applications conservent tout.',
      ],
      table: {
        head: ['Option', 'Localisation', 'Appareil et heure', 'Toutes les photos d’un coup'],
        rows: [
          ['iPhone : Options de partage › localisation désactivée', 'Retirée pour ce partage', 'Conservés', 'À chaque partage'],
          ['Localisation désactivée dans l’appareil photo', 'Non enregistrée dans les nouvelles photos', 'Conservés', 'Nouvelles photos uniquement'],
          ['Google Photos : supprimer la position', 'Retirée dans l’application', 'Conservés', 'Photo par photo'],
          ['Nettoyeur de métadonnées dans le navigateur', 'Supprimée', 'Supprimés', 'Jusqu’à 50 par lot'],
        ],
      },
    },
    {
      heading: 'Supprimer toutes les métadonnées sur votre téléphone, sans application',
      paragraphs: [],
      steps: [
        'Ouvrez ce site dans Safari, Chrome ou n’importe quel navigateur mobile.',
        'Touchez « Choisir des images » et sélectionnez les photos à partager.',
        'Consultez le rapport, puis touchez « Supprimer les métadonnées IA ».',
        'Enregistrez les photos nettoyées, ou téléchargez-les toutes dans un ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
    {
      heading: 'Les photos HEIC de l’iPhone restent en HEIC',
      paragraphs: [
        'L’iPhone enregistre les photos en HEIC par défaut. Beaucoup d’outils les convertissent en JPEG pour les nettoyer, ce qui recompresse la photo. Ce nettoyeur supprime les métadonnées à l’intérieur même du fichier HEIC, conserve orientation et couleurs, et ne touche pas aux données d’image.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Questions sur les métadonnées des photos de smartphone',
  faq: [
    {
      q: 'Désactiver la localisation la supprime-t-elle des photos déjà prises ?',
      a: 'Non. Cela ne concerne que les nouvelles photos. Les photos existantes gardent leur localisation tant que vous ne la supprimez pas.',
    },
    {
      q: 'Les photos HEIC de l’iPhone sont-elles prises en charge ?',
      a: 'Oui. Les fichiers HEIC sont nettoyés directement, sans conversion en JPEG et sans réencodage de l’image.',
    },
    {
      q: 'L’option de partage de l’iPhone supprime-t-elle toutes les métadonnées ?',
      a: 'Surtout la localisation. D’autres informations comme le modèle de l’appareil et l’heure de prise de vue peuvent rester dans le fichier partagé.',
    },
    {
      q: 'Faut-il installer une application pour supprimer les métadonnées ?',
      a: 'Non. Le nettoyeur fonctionne dans le navigateur de votre téléphone, et les photos sont traitées sur l’appareil sans être envoyées.',
    },
    {
      q: 'Comment voir la position GPS d’une photo ?',
      a: 'Sur iPhone, balayez la photo vers le haut pour voir la carte. Sur n’importe quel appareil, déposez la photo dans l’outil pour voir les coordonnées décodées dans « Confidentialité ».',
    },
    {
      q: 'Les photos nettoyées apparaîtront-elles toujours dans le bon ordre dans ma galerie ?',
      a: 'Les dates de prise de vue sont supprimées : les galeries peuvent donc trier les copies nettoyées selon leur date d’enregistrement. Gardez vos originaux pour votre propre photothèque.',
    },
  ],
};

export default article;
