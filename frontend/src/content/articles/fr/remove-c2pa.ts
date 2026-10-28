import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les Content Credentials C2PA d’une image — gratuit, sans envoi',
  seoTitle: 'Supprimer C2PA / Content Credentials en ligne — gratuit',
  summary: [
    'Photoshop, Lightroom, Firefly, la génération d’images de ChatGPT et certains appareils photo ajoutent un manifeste C2PA signé — les Content Credentials — qui indique quelle application ou quel modèle d’IA a créé ou modifié une image.',
    'Déposez vos images dans l’outil de cette page pour voir ce que dit le manifeste et le supprimer d’une copie en un clic. Les données d’image sont copiées sans modification et rien n’est envoyé.',
  ],
  description:
    'Supprimez les Content Credentials C2PA des JPG, PNG, WebP, HEIC et AVIF dans votre navigateur. Consultez le manifeste, puis retirez-le sans perte. Gratuit, par lot.',
  answer:
    'Pour supprimer les Content Credentials C2PA, déposez l’image dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». Le manifeste C2PA (APP11 en JPEG, caBX en PNG, chunk C2PA en WebP, boîte uuid en HEIC/AVIF) est découpé avec XMP, IPTC et EXIF, tandis que les données d’image sont copiées octet par octet. Le fichier nettoyé est réanalysé pour confirmer qu’il ne reste aucun manifeste.',
  sections: [
    {
      heading: 'Supprimer les Content Credentials en trois étapes',
      paragraphs: [],
      steps: [
        'Déposez une ou plusieurs images dans l’outil ci-dessus — JPG, PNG, WebP, GIF, HEIC et AVIF sont pris en charge.',
        'Ouvrez « IA et provenance » dans le rapport pour voir si un manifeste C2PA est présent, quelle application l’a signé et quelles actions il enregistre.',
        'Cliquez sur « Supprimer les métadonnées IA » et téléchargez les fichiers nettoyés un par un ou dans un ZIP. Le panneau de résultat confirme que C2PA a disparu.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Où est stocké le manifeste C2PA ?',
      paragraphs: ['Le manifeste se trouve dans son propre bloc, séparé des données d’image : on peut donc le retirer sans réencodage.'],
      table: {
        head: ['Format', 'Bloc C2PA', 'Également supprimé'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, commentaires'],
          ['PNG', 'Chunk caBX', 'Chunks de texte, eXIf, tIME'],
          ['WebP', 'Chunk C2PA', 'EXIF, XMP'],
          ['HEIC, AVIF', 'Boîte uuid', 'Éléments Exif et XMP'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Pourquoi supprimer les Content Credentials',
      paragraphs: [],
      bullets: [
        'Une vraie photo a été légèrement retouchée avec un outil génératif et reçoit maintenant une étiquette « Infos IA » qu’elle ne mérite pas.',
        'Le manifeste révèle un logiciel, des noms de compte, un historique de retouche ou des fichiers sources (ingredients) que vous préférez ne pas publier.',
        'Un client ou une plateforme a besoin de fichiers image simples, sans données de provenance.',
        'Vous voulez voir ce qu’une image déclare avant de décider de la partager telle quelle.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Ce que la suppression de C2PA ne fait pas',
      paragraphs: [
        'Retirer le manifeste supprime uniquement l’enregistrement stocké dans cette copie du fichier. Cela n’enlève pas les filigranes invisibles intégrés aux pixels comme SynthID, et n’affecte pas les Content Credentials « durables » (durable) qu’un outil de vérification peut retrouver à partir d’une empreinte ou d’une base en ligne.',
        'Si une image est générée par IA, les plateformes peuvent toujours vous demander de le déclarer. Respectez les règles de chaque plateforme : supprimer les métadonnées ne change pas la façon dont l’image a été créée.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Éviter les Content Credentials dans les nouveaux fichiers',
      paragraphs: [
        'Dans Photoshop et Lightroom, les Content Credentials peuvent être désactivés dans les paramètres d’exportation, même si certaines fonctions génératives les ajoutent malgré tout. Les services d’images IA les ajoutent généralement à chaque rendu. Pour les fichiers que vous avez déjà, nettoyer une copie ici est la solution la plus rapide — gardez l’original si vous risquez de devoir prouver la provenance plus tard.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Questions sur la suppression de C2PA',
  faq: [
    {
      q: 'Supprimer C2PA réduit-il la qualité de l’image ?',
      a: 'Non. Le manifeste est un bloc séparé ; les données d’image compressées sont copiées sans modification.',
    },
    {
      q: 'Puis-je voir les Content Credentials avant de les supprimer ?',
      a: 'Oui. Le panneau « IA et provenance » affiche le claim generator, les actions enregistrées et le type de source, et « Toutes les métadonnées et détails du fichier » liste chaque champ.',
    },
    {
      q: 'Mes images sont-elles envoyées ?',
      a: 'Non. Les fichiers sont lus et nettoyés dans votre navigateur et ne quittent jamais votre appareil.',
    },
    {
      q: 'Instagram ou Facebook étiquetteront-ils encore l’image ?',
      a: 'Les étiquettes fondées sur les métadonnées C2PA ou IPTC perdent leur source, mais les plateformes peuvent utiliser d’autres signaux ou vous demander de déclarer vous-même un contenu IA.',
    },
    {
      q: 'L’outil supprime-t-il SynthID ou d’autres filigranes invisibles ?',
      a: 'Non. Ils sont intégrés aux pixels, et cet outil ne modifie jamais les pixels.',
    },
    {
      q: 'Puis-je supprimer C2PA de nombreuses images à la fois ?',
      a: 'Oui. Déposez jusqu’à 50 images par lot et téléchargez-les toutes dans un seul fichier ZIP.',
    },
  ],
};

export default article;
