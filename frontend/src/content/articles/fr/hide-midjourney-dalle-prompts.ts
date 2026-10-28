import type { Article } from '../types';

const article: Article = {
  description:
    'Les images Midjourney, ChatGPT/DALL·E et Firefly peuvent contenir votre prompt, un ID de tâche et des données de provenance IA. Supprimez-les avant de partager.',
  answer:
    'Les images téléchargées depuis les services d’IA peuvent contenir votre prompt, un identifiant de tâche ou de génération, le nom de l’outil et des Content Credentials C2PA. N’importe qui peut les lire avec un visualiseur de métadonnées gratuit. Pour masquer votre prompt, ouvrez le fichier dans un outil d’analyse des métadonnées, repérez les champs présents, puis supprimez-les d’une copie avec un nettoyeur sans perte avant de publier ou d’envoyer l’image.',
  sections: [
    {
      heading: 'Ce que les services d’images IA intègrent à vos téléchargements',
      paragraphs: [
        'Les générateurs d’images en ligne ajoutent de plus en plus de métadonnées à chaque téléchargement — en partie par transparence, en partie pour suivre les standards de provenance. Le contenu exact dépend du service, du format de téléchargement et de la version en cours : vérifiez toujours le fichier réel. Exemples courants :',
      ],
      table: {
        head: ['Service', 'Métadonnées habituelles', 'Peut révéler'],
        rows: [
          ['Midjourney', 'Texte de description/commentaire, IPTC DigitalSourceType', 'Votre prompt, un ID de tâche, le fait que l’image est générée par IA'],
          ['Génération d’images de ChatGPT, DALL·E', 'Content Credentials C2PA', 'Qu’OpenAI a généré l’image, les actions enregistrées'],
          ['Adobe Firefly', 'Content Credentials C2PA, XMP', 'Génération par IA, application utilisée, historique des modifications'],
          ['Beaucoup d’autres outils', 'XMP CreatorTool, EXIF Software, dates', 'Nom de l’outil, date de création, parfois des identifiants liés au compte'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Pourquoi vos prompts méritent d’être protégés',
      paragraphs: [
        'Pour les illustrateurs, designers et prompt engineers, un prompt peaufiné est un savoir-faire construit au fil de nombreuses itérations. Quiconque télécharge votre image peut l’ouvrir dans un visualiseur de métadonnées, copier le prompt et reproduire votre style en quelques minutes.',
        'Les identifiants et détails liés au compte peuvent aussi relier une image publique à votre compte ou à d’autres images que vous avez générées. Si vous livrez des images à des clients, les prompts intégrés peuvent exposer votre méthode et les outils que vous utilisez.',
      ],
    },
    {
      heading: 'Comment savoir si une image contient votre prompt',
      paragraphs: [],
      steps: [
        'Déposez le fichier téléchargé dans l’outil en haut de cette page — le traitement est local, votre prompt n’est jamais envoyé.',
        'Regardez le panneau « IA et provenance » : prompts, noms de générateurs et déclarations de type de source.',
        'Regardez le panneau « Confidentialité » : auteurs, descriptions, identifiants et dates.',
        'Ouvrez « Toutes les métadonnées et détails du fichier » si vous voulez lire chaque champ mot pour mot.',
      ],
    },
    {
      heading: 'Comment supprimer le prompt et les métadonnées IA',
      paragraphs: [],
      steps: [
        'Cliquez sur « Supprimer les métadonnées IA ». Texte du prompt, identifiants, blocs XMP, IPTC, EXIF et C2PA sont retirés au niveau des octets.',
        'Vérifiez le panneau de résultat vert — le fichier nettoyé est réanalysé pour que vous puissiez confirmer qu’il ne reste rien.',
        'Téléchargez l’image, ou un ZIP si vous avez traité un lot.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Midjourney inclut-il toujours le prompt ?',
      paragraphs: [
        'Pas forcément. Ce qui apparaît dépend du mode de téléchargement (application web, Discord, image upscalée ou non), du format de fichier et de la version du service — et cela évolue avec le temps. La seule réponse fiable est d’inspecter le fichier que vous avez réellement. Il en va de même pour les autres services : deux images du même outil peuvent contenir des champs différents.',
      ],
    },
    {
      heading: 'Ce que la suppression des métadonnées ne peut pas faire',
      paragraphs: [
        'Certains fournisseurs ajoutent aussi des filigranes invisibles dans les pixels eux-mêmes, comme SynthID de Google. Ce ne sont pas des métadonnées, et un nettoyeur sans perte — qui ne modifie jamais les pixels — ne peut pas les retirer. Et si vous publiez une image IA réaliste, les règles des plateformes peuvent toujours vous obliger à le signaler. Supprimer le prompt protège votre méthode ; cela ne change pas la nature de l’image.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions sur les métadonnées Midjourney et DALL·E',
  faq: [
    {
      q: 'Peut-on voir mon prompt Midjourney à partir de l’image ?',
      a: 'Si le prompt est stocké dans les métadonnées du fichier, oui : n’importe quel visualiseur de métadonnées l’affiche. Vérifiez le fichier et supprimez ces champs avant de partager si vous voulez garder votre prompt privé.',
    },
    {
      q: 'Midjourney intègre-t-il toujours le prompt ?',
      a: 'Cela dépend du format de téléchargement et des réglages actuels du service. Inspectez le fichier pour voir exactement quels champs sont présents avant de décider.',
    },
    {
      q: 'Les images ChatGPT contiennent-elles des métadonnées ?',
      a: 'Les images issues de la génération d’images d’OpenAI contiennent des Content Credentials C2PA qui identifient OpenAI comme source. Le rapport les liste sous « IA et provenance ».',
    },
    {
      q: 'Le nettoyage supprime-t-il SynthID ou d’autres filigranes invisibles ?',
      a: 'Non. Les filigranes invisibles font partie des données de pixels. L’outil supprime uniquement les métadonnées et ne modifie jamais les pixels.',
    },
    {
      q: 'Supprimer les métadonnées réduit-il la qualité de l’image ?',
      a: 'Non. Les blocs de métadonnées sont découpés et les données d’image compressées sont copiées sans modification.',
    },
    {
      q: 'Puis-je nettoyer plusieurs images à la fois ?',
      a: 'Oui. Déposez jusqu’à 50 images, consultez les rapports, puis téléchargez le tout dans un seul fichier ZIP.',
    },
  ],
};

export default article;
