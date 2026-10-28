import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les métadonnées des images WebP : EXIF, XMP, C2PA',
  summary: [
    'Les images WebP peuvent contenir des données EXIF, XMP et C2PA tout comme le JPEG — y compris des champs de provenance IA ajoutés par les générateurs d’images et les logiciels de retouche.',
    'Déposez vos fichiers WebP dans l’outil de cette page pour les inspecter et supprimer les métadonnées, en gardant les WebP avec perte, sans perte et animés exactement tels quels.',
  ],
  description:
    'Supprimez les métadonnées EXIF, XMP et C2PA de vos images WebP dans le navigateur. Image, transparence, profil couleur et animation conservés. Gratuit, sans envoi.',
  answer:
    'Pour supprimer les métadonnées d’une image WebP, déposez-la dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». Les chunks EXIF, XMP et C2PA sont retirés du conteneur RIFF, tandis que les données d’image VP8/VP8L, la transparence, le profil colorimétrique ICC et les images de l’animation sont copiés sans modification — un WebP avec perte ne perd donc aucune qualité supplémentaire et un WebP animé garde toutes ses images.',
  sections: [
    {
      heading: 'Où se trouvent les métadonnées d’un WebP',
      paragraphs: [
        'Les fichiers WebP utilisent un conteneur RIFF composé de chunks. L’image est stockée dans des chunks VP8 (avec perte), VP8L (sans perte) ou ALPH (transparence) ; les métadonnées se trouvent dans des chunks séparés :',
      ],
      table: {
        head: ['Chunk', 'Rôle', 'Après nettoyage'],
        rows: [
          ['VP8, VP8L, ALPH', 'Données d’image et transparence', 'Conservé, octet par octet'],
          ['ICCP', 'Profil colorimétrique', 'Conservé'],
          ['ANIM, ANMF', 'Réglages et images de l’animation', 'Conservé'],
          ['EXIF', 'Appareil, heure, GPS, orientation', 'Supprimé (orientation réécrite)'],
          ['XMP', 'Historique de retouche, auteur, champs IA', 'Supprimé'],
          ['C2PA', 'Content Credentials', 'Supprimé'],
        ],
      },
    },
    {
      heading: 'Supprimer les métadonnées d’un WebP en trois étapes',
      paragraphs: [],
      steps: [
        'Déposez vos fichiers WebP dans l’outil ci-dessus.',
        'Consultez le rapport pour voir les champs EXIF, XMP et de provenance trouvés dans chaque fichier.',
        'Cliquez sur « Supprimer les métadonnées IA » et téléchargez les images nettoyées une par une ou dans un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Ce qui est conservé',
      paragraphs: [
        'Les chunks d’image, la transparence, le profil colorimétrique ICC et les images de l’animation sont copiés sans modification. Si le fichier déclarait une orientation, elle est réécrite dans un chunk EXIF minimal pour que l’image continue de s’afficher correctement.',
        'Comme rien n’est décodé ni réencodé, les WebP avec perte ne perdent aucune qualité supplémentaire, et les WebP animés gardent chaque image et son minutage.',
      ],
    },
    {
      heading: 'Quand les métadonnées WebP comptent',
      paragraphs: [
        'Beaucoup de sites web et d’outils d’IA exportent en WebP par défaut, et les métadonnées suivent le fichier quand vous le téléchargez puis le repartagez. Le nettoyage supprime les informations de localisation, d’appareil et de provenance avant que vous ne publiiez ou n’envoyiez l’image.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions sur le nettoyage des fichiers WebP',
  faq: [
    {
      q: 'Les WebP animés sont-ils pris en charge ?',
      a: 'Oui. Les chunks d’animation sont conservés : les images et leur minutage restent identiques.',
    },
    {
      q: 'L’image est-elle recompressée ?',
      a: 'Non. Seuls les chunks de métadonnées sont retirés ; les données d’image sont copiées octet par octet.',
    },
    {
      q: 'La transparence est-elle conservée ?',
      a: 'Oui. Les données alpha sont conservées exactement telles quelles.',
    },
    {
      q: 'Puis-je convertir un WebP en JPG ici ?',
      a: 'Non. L’outil garde chaque fichier dans son format d’origine ; il supprime uniquement les métadonnées.',
    },
    {
      q: 'Y a-t-il une limite de taille ?',
      a: 'Chaque fichier peut faire jusqu’à 25 Mo et 40 mégapixels, et vous pouvez nettoyer jusqu’à 50 fichiers par session.',
    },
    {
      q: 'Mes images sont-elles envoyées ?',
      a: 'Non. Les fichiers WebP sont traités localement dans votre navigateur.',
    },
  ],
};

export default article;
