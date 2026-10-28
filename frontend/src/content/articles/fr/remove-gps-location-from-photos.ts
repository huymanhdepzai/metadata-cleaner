import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Enlever la localisation GPS d’une photo (iPhone, Android)',
  description:
    'Vos photos peuvent révéler votre position exacte, votre appareil et l’heure de prise de vue. Champs EXIF à risque, fuites courantes et suppression du GPS sans perte.',
  answer:
    'La plupart des photos de smartphone stockent des coordonnées GPS dans leurs métadonnées EXIF, souvent précises à quelques mètres, ainsi que l’heure de prise de vue et le modèle de l’appareil. Pour enlever la localisation d’une photo, déposez-la dans un nettoyeur de métadonnées qui supprime le GPS et les autres champs EXIF identifiants tout en conservant orientation et couleurs, puis partagez la copie nettoyée. Désactiver la localisation de l’appareil photo ne concerne que les nouvelles photos.',
  sections: [
    {
      heading: 'Ce que votre smartphone écrit dans chaque photo',
      paragraphs: ['Quand l’accès à la localisation est activé, une photo de smartphone typique contient :'],
      bullets: [
        'La latitude, la longitude et l’altitude GPS — souvent précises à quelques mètres —, un horodatage GPS et parfois la direction dans laquelle pointait l’appareil.',
        'La date et l’heure exactes de la prise de vue et de la dernière modification, souvent avec le décalage horaire.',
        'La marque et le modèle de l’appareil, des informations sur l’objectif et parfois des numéros de série ou le nom du propriétaire.',
        'Des aperçus intégrés et des images secondaires (par exemple des images MPF ou des cartes de profondeur) qui peuvent contenir leur propre copie des mêmes données EXIF.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Pourquoi la localisation d’une photo menace votre vie privée',
      paragraphs: [
        'Une seule photo prise chez vous peut révéler votre adresse. Une série de photos peut révéler vos habitudes — l’heure à laquelle vous partez travailler, l’école de vos enfants, l’endroit où vous passez vos week-ends. Pour qui vend des objets en ligne, partage des photos avec des inconnus ou publie depuis des lieux sensibles, les métadonnées de localisation sont la fuite accidentelle la plus fréquente.',
      ],
    },
    {
      heading: 'Par où fuient les données de localisation',
      paragraphs: [
        'Beaucoup de grands réseaux sociaux suppriment l’EXIF en publiant votre photo, mais de nombreux canaux transmettent le fichier original tel quel :',
      ],
      bullets: [
        'L’envoi d’une photo « en tant que fichier » ou comme document dans les messageries.',
        'Les pièces jointes d’e-mails et les liens de partage cloud.',
        'Les forums, places de marché, sites de petites annonces et sites de portfolio qui conservent le fichier envoyé.',
        'Les transferts AirDrop, Bluetooth et USB entre appareils.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Comment savoir si une photo contient une position GPS',
      paragraphs: [],
      steps: [
        'Déposez la photo dans l’outil en haut de cette page — elle est analysée localement et jamais envoyée.',
        'Le panneau « Confidentialité » montre d’un coup d’œil si des champs de localisation, personnels ou horaires sont présents, ainsi que la position GPS décodée en coordonnées décimales.',
        '« Toutes les métadonnées et détails du fichier » liste chaque champ, regroupé par EXIF IFD0, Exif et GPS.',
      ],
    },
    {
      heading: 'Comment supprimer la localisation GPS d’une photo',
      paragraphs: [],
      steps: [
        'Déposez une photo ou un lot de photos dans l’outil.',
        'Cliquez sur « Supprimer les métadonnées IA ». Les champs GPS, date, appareil, auteur et logiciel sont supprimés, ainsi que les vignettes intégrées et les images secondaires MPF qui en garderaient sinon une copie cachée.',
        'Vérifiez dans le panneau de résultat vert qu’il ne reste aucune donnée de localisation, puis téléchargez la photo ou un ZIP du lot.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Supprimer la localisation sans faire pivoter ni recompresser',
      paragraphs: [
        'Une suppression naïve de l’EXIF peut faire apparaître les photos en portrait couchées sur le côté, car la rotation est stockée dans une balise EXIF. Le nettoyeur réécrit l’orientation dans un bloc EXIF minimal, conserve le profil colorimétrique pour des couleurs fidèles et copie les données d’image octet par octet. Les photos HEIC de l’iPhone sont nettoyées sur place, sans conversion en JPEG.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Ne plus enregistrer la localisation dans les nouvelles photos',
      paragraphs: ['Vous pouvez aussi empêcher la géolocalisation à la source :'],
      bullets: [
        'iPhone : Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo › Jamais. Pour partager une seule photo, touchez Options dans la feuille de partage et désactivez la localisation.',
        'Android : désactivez l’option de localisation dans les paramètres de l’application Appareil photo — son nom et son emplacement varient selon le fabricant.',
      ],
      table: {
        head: ['Méthode', 'Supprime le GPS', 'Supprime appareil et heure', 'Fonctionne sur les anciennes photos'],
        rows: [
          ['Localisation désactivée dans l’appareil photo', 'Pour les nouvelles photos', 'Non', 'Non'],
          ['Localisation désactivée dans la feuille de partage', 'Pour ce partage', 'Non', 'Oui, à chaque partage'],
          ['Nettoyeur de métadonnées', 'Oui', 'Oui', 'Oui'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Questions sur le GPS et la confidentialité des photos',
  faq: [
    {
      q: 'Les réseaux sociaux suppriment-ils automatiquement les données GPS ?',
      a: 'Beaucoup de grandes plateformes retirent l’EXIF de l’image publiée, mais les fichiers envoyés en pièce jointe, comme document ou via un lien cloud conservent généralement les métadonnées d’origine.',
    },
    {
      q: 'Peut-on retrouver ma position à partir d’une photo ?',
      a: 'Si la photo contient encore des données EXIF GPS, oui : n’importe quel visualiseur de métadonnées affiche les coordonnées sur une carte. Sans métadonnées, seul le contenu visible de l’image peut donner des indices.',
    },
    {
      q: 'Ma photo sera-t-elle pivotée après le nettoyage ?',
      a: 'Non. La balise d’orientation est conservée : la photo s’affiche exactement comme avant.',
    },
    {
      q: 'Est-ce que ça fonctionne avec les photos HEIC de l’iPhone ?',
      a: 'Oui. Les fichiers HEIC et HEIF sont nettoyés sur place, sans conversion et sans réencodage de l’image.',
    },
    {
      q: 'Désactiver la localisation la supprime-t-elle des photos déjà prises ?',
      a: 'Non. Cela ne concerne que les nouvelles photos. Les photos existantes gardent leur localisation tant que vous ne la supprimez pas.',
    },
    {
      q: 'Ma photo est-elle envoyée quand je supprime la localisation ?',
      a: 'Non. Tout se passe dans votre navigateur ; la photo ne quitte jamais votre appareil.',
    },
  ],
};

export default article;
