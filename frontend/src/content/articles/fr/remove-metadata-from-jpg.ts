import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les métadonnées d’un JPG en ligne, sans perte',
  summary: [
    'Chaque JPG issu d’un appareil photo, d’un smartphone ou d’un générateur d’IA peut contenir de l’EXIF (appareil, heure, GPS), du XMP, de l’IPTC et des Content Credentials C2PA. Déposez vos fichiers JPG dans l’outil de cette page pour voir exactement ce qu’ils contiennent et le supprimer en un clic.',
    'Le nettoyeur découpe les segments de métadonnées au niveau des octets : les données d’image compressées sont copiées sans modification — pas de réenregistrement, pas de perte de qualité, et rien n’est envoyé.',
  ],
  description:
    'Supprimez les métadonnées EXIF, GPS, XMP, IPTC et C2PA de vos JPG/JPEG dans le navigateur. Sans perte : l’image est copiée octet par octet. Gratuit, sans envoi, par lot.',
  answer:
    'Pour supprimer les métadonnées d’un JPG en ligne sans perte de qualité, déposez le fichier dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». EXIF (GPS compris), XMP, IPTC, C2PA et commentaires sont découpés au niveau des octets tandis que les données d’image compressées sont copiées sans modification : la photo reste identique. Tout se passe dans votre navigateur — le fichier n’est jamais envoyé.',
  sections: [
    {
      heading: 'Ce qu’un fichier JPG peut cacher',
      paragraphs: ['Un JPEG est une suite de segments de marqueurs. En plus de l’image elle-même, il contient souvent :'],
      table: {
        head: ['Segment', 'Contenu possible'],
        rows: [
          ['APP1 EXIF', 'Modèle d’appareil photo ou de smartphone, heure de prise de vue, exposition, coordonnées GPS, vignette intégrée'],
          ['APP1 XMP', 'Historique de retouche, auteur, mots-clés, champs IA comme IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Légendes, crédits, mentions de copyright'],
          ['APP11 JUMBF', 'Content Credentials C2PA — un enregistrement signé de la façon dont l’image a été produite'],
          ['COM, APP2 MPF, données après EOI', 'Commentaires, images d’aperçu, partie vidéo des photos animées (motion photos)'],
        ],
      },
      related: ['remove-exif', 'what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Supprimer les métadonnées d’un JPG en trois étapes',
      paragraphs: [],
      steps: [
        'Déposez un ou plusieurs fichiers JPG dans l’outil ci-dessus, ou touchez « Choisir des images ».',
        'Lisez le rapport : confidentialité, indices d’IA et de provenance, et liste complète des métadonnées trouvées dans chaque fichier.',
        'Cliquez sur « Supprimer les métadonnées IA », puis téléchargez chaque fichier ou le tout dans un ZIP. Le fichier nettoyé est réanalysé pour que vous puissiez confirmer qu’il ne reste rien d’identifiant.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Pourquoi le nettoyage sans perte compte pour le JPG',
      paragraphs: [
        'Le JPEG est un format avec perte : chaque fois qu’une image est décodée puis réenregistrée, elle est recompressée et perd un peu de détail. Beaucoup d’outils pour « supprimer les métadonnées » redessinent la photo et exportent un nouveau JPEG : les métadonnées disparaissent, mais la qualité baisse et les couleurs peuvent changer.',
        'Cet outil ne décode jamais l’image. Il retire les segments de métadonnées et copie les données d’image compressées telles quelles : la photo reste identique et le fichier devient généralement plus léger.',
      ],
      table: {
        head: ['Méthode', 'Supprime les métadonnées', 'Qualité', 'Conserve le profil colorimétrique'],
        rows: [
          ['Nettoyage au niveau des octets (cet outil)', 'Oui', 'Inchangée', 'Oui'],
          ['Réenregistrement ou redessin sur canvas', 'Oui', 'Recompressée', 'Souvent non'],
          ['Capture d’écran', 'Oui', 'Moindre, redimensionnée', 'Non'],
        ],
      },
    },
    {
      heading: 'Ce qui est conservé dans le JPG nettoyé',
      paragraphs: [
        'Tout supprimer à l’aveugle peut perturber l’affichage d’une photo. Le nettoyeur conserve ce qui influe sur l’apparence : l’en-tête JFIF, le profil colorimétrique ICC, le segment de transformation des couleurs Adobe et l’orientation, réécrite dans un bloc EXIF minimal pour que la photo reste droite. Les dimensions et les données d’image ne sont jamais modifiées.',
      ],
    },
    {
      heading: 'Raisons courantes de nettoyer un JPG',
      paragraphs: [],
      bullets: [
        'Supprimer le GPS avant de publier des photos sur des places de marché, des forums ou des messageries.',
        'Supprimer numéros de série, noms d’auteur et historique de retouche avant de livrer un travail à un client.',
        'Supprimer les champs C2PA ou IA qui déclenchent une étiquette « Infos IA » sur une vraie photo.',
        'Supprimer les prompts et les informations sur le générateur des JPEG créés par IA.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions sur le nettoyage des fichiers JPG',
  faq: [
    {
      q: 'JPG et JPEG, c’est la même chose ?',
      a: 'Oui. .jpg, .jpeg et .jfif désignent le même format, et les trois sont pris en charge.',
    },
    {
      q: 'Supprimer les métadonnées réduit-il la qualité du JPG ?',
      a: 'Non. Les données d’image compressées sont copiées octet par octet ; seuls les segments de métadonnées sont retirés.',
    },
    {
      q: 'Mes photos sont-elles envoyées quelque part ?',
      a: 'Non. Les fichiers sont lus et nettoyés dans votre navigateur ; ils ne quittent jamais votre appareil.',
    },
    {
      q: 'Ma photo sera-t-elle pivotée après le nettoyage ?',
      a: 'Non. L’orientation est réécrite dans un bloc EXIF minimal : la photo s’affiche de la même façon.',
    },
    {
      q: 'Que deviennent les photos animées (motion photos) ?',
      a: 'Certains téléphones ajoutent une courte vidéo après l’image JPEG. Ces données finales sont supprimées avec les métadonnées : le résultat est une photo fixe classique.',
    },
    {
      q: 'Y a-t-il une limite de taille ?',
      a: 'Chaque JPG peut faire jusqu’à 25 Mo et 40 mégapixels, et vous pouvez nettoyer jusqu’à 50 fichiers par lot.',
    },
  ],
};

export default article;
