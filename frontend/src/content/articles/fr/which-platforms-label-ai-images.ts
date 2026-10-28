import type { Article } from '../types';

const article: Article = {
  title: 'Quelles plateformes étiquettent les images IA ? Instagram, Facebook, TikTok, YouTube et les autres',
  summary: [
    'Les grandes plateformes affichent de plus en plus des étiquettes comme « Infos IA » sur les images et vidéos. La plupart lisent les mêmes indices standards intégrés au fichier — Content Credentials C2PA et métadonnées IPTC — et les combinent avec ce que déclarent les créateurs.',
    'Voici comment l’étiquetage fonctionne en général sur les grandes plateformes, ce qui le déclenche, et ce que cela implique pour de vraies photos simplement retouchées.',
  ],
  seoTitle: 'Quelles plateformes étiquettent les images IA ?',
  description:
    'Comment Instagram, Facebook, Threads, TikTok, YouTube, Pinterest et LinkedIn étiquettent les images IA, quelles métadonnées la déclenchent et l’impact sur vos photos.',
  answer:
    'Instagram, Facebook et Threads (« Infos IA »), TikTok, YouTube et Pinterest étiquettent les contenus IA, et LinkedIn affiche une icône Content Credentials. La plupart des étiquettes automatiques sont déclenchées par des Content Credentials C2PA ou par le champ IPTC DigitalSourceType du fichier envoyé, combinés à la déclaration du créateur. Une petite retouche générative peut suffire à faire étiqueter une photo par ailleurs authentique.',
  sections: [
    {
      heading: 'Les étiquettes IA par plateforme en un coup d’œil',
      paragraphs: ['Les règles changent souvent, mais le tableau général est le suivant :'],
      table: {
        head: ['Plateforme', 'Ce que voit le public', 'Principaux déclencheurs'],
        rows: [
          ['Instagram, Facebook, Threads', 'Étiquette « Infos IA » (anciennement « Créé avec l’IA »)', 'C2PA, métadonnées IPTC, option du créateur'],
          ['TikTok', 'Étiquette « Généré par IA » (AI-generated)', 'Déclaration du créateur, Content Credentials C2PA'],
          ['YouTube', 'Étiquette de contenu modifié ou synthétique', 'Déclaration du créateur lors de la mise en ligne'],
          ['Pinterest', 'Étiquette « modifié par IA »', 'Métadonnées et ses propres classificateurs'],
          ['LinkedIn', 'Icône « CR » des Content Credentials', 'Données C2PA dans l’image'],
        ],
      },
    },
    {
      heading: 'Les indices sur lesquels s’appuient les plateformes',
      paragraphs: ['Les étiquettes automatiques reposent généralement sur un petit ensemble d’indices communs :'],
      bullets: [
        'Des Content Credentials C2PA qui déclarent une génération ou une retouche par IA.',
        'Le champ IPTC DigitalSourceType, par exemple trainedAlgorithmicMedia ou compositeWithTrainedAlgorithmicMedia.',
        'Les filigranes invisibles de certains fournisseurs d’IA, lorsque la plateforme dispose d’un détecteur.',
        'L’autodéclaration du créateur — une option ou une case à cocher lors de la publication d’un contenu IA réaliste.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook et Threads (Meta)',
      paragraphs: [
        'Meta affiche une étiquette « Infos IA » (appelée « Créé avec l’IA » jusqu’en 2024) lorsqu’il détecte des indices d’IA standards du secteur ou qu’un créateur déclare un contenu IA. Après les plaintes de photographes dont les photos légèrement retouchées étaient étiquetées, Meta a déplacé l’étiquette des contenus retouchés par IA dans le menu de la publication, tandis que les contenus en grande partie générés sont étiquetés de façon plus visible.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTok exige des créateurs qu’ils étiquettent les contenus IA réalistes et indique étiqueter automatiquement les contenus qui arrivent avec des Content Credentials C2PA les identifiant comme générés par IA. La plateforme ajoute aussi des Content Credentials à certains contenus créés avec ses propres effets IA.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTube demande aux créateurs de déclarer, lors de la mise en ligne, les contenus réalistes modifiés ou synthétiques, et affiche une étiquette au public, de façon plus visible pour les sujets sensibles. La plateforme prend aussi en charge C2PA pour le cas inverse : un indicateur « capturé avec un appareil photo » (captured with a camera) pour les contenus dotés d’informations de capture authentiques.',
      ],
    },
    {
      heading: 'Pinterest et LinkedIn',
      paragraphs: [
        'Pinterest étiquette les images qu’il identifie comme générées ou modifiées par IA, à partir des métadonnées et de ses propres classificateurs. LinkedIn affiche une icône Content Credentials sur les images qui contiennent des données C2PA, ce qui permet au public d’inspecter la source et les modifications.',
        'Les règles de chaque plateforme changent fréquemment : consultez le centre d’aide actuel de la plateforme avant de compter sur un comportement précis.',
      ],
    },
    {
      heading: 'Pourquoi de vraies photos sont étiquetées',
      paragraphs: [
        'Une seule retouche assistée par IA — supprimer un objet avec un outil génératif, agrandir un arrière-plan ou utiliser une gomme IA sur un téléphone — peut marquer toute la photo comme contenu composite IA dans ses métadonnées. Les plateformes lisent cette déclaration sans évaluer l’ampleur de la retouche.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Vérifier une photo avant de la publier',
      paragraphs: [],
      steps: [
        'Déposez le fichier exact que vous comptez publier dans l’outil en haut de cette page.',
        'Regardez le panneau « IA et provenance » pour voir quel champ déclencherait une étiquette.',
        'Si l’étiquette était injustifiée, supprimez les métadonnées d’une copie et publiez la copie nettoyée.',
        'Si l’image est en grande partie générée par IA, signalez-le — les étiquettes existent pour informer le public.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions sur les étiquettes IA des réseaux sociaux',
  faq: [
    {
      q: 'Pourquoi ma photo reçoit-elle une étiquette IA alors que j’ai seulement effacé un petit objet ?',
      a: 'Beaucoup de logiciels de retouche enregistrent les retouches génératives dans les métadonnées C2PA ou IPTC comme « composite avec IA ». Les plateformes lisent cette déclaration sans évaluer l’ampleur de la retouche.',
    },
    {
      q: 'Les plateformes conservent-elles les métadonnées après publication ?',
      a: 'La plupart lisent les métadonnées à l’envoi puis les suppriment de la copie publiée : télécharger votre propre publication montre donc rarement les champs d’origine.',
    },
    {
      q: 'Une image nettoyée échappera-t-elle à toute étiquette ?',
      a: 'Pas forcément. Le nettoyage supprime les indices stockés dans le fichier, mais les plateformes peuvent aussi utiliser la détection de filigranes, des classificateurs ou vous demander de déclarer un contenu IA.',
    },
    {
      q: 'X (Twitter) étiquette-t-il les images IA ?',
      a: 'X s’appuie surtout sur sa politique relative aux médias synthétiques et manipulés et sur les notes de la communauté plutôt que sur une étiquette automatique fondée sur les métadonnées. Consultez sa politique actuelle pour les détails.',
    },
    {
      q: 'Dois-je signaler mes images IA ?',
      a: 'La plupart des plateformes exigent de signaler les contenus IA réalistes, en particulier ceux montrant des personnes ou des événements réels. Les règles diffèrent : vérifiez la politique de chaque plateforme.',
    },
    {
      q: 'Puis-je vérifier si mon image sera étiquetée ?',
      a: 'Oui. Déposez-la dans l’outil : s’il signale du C2PA ou un DigitalSourceType IA, les plateformes qui lisent ces indices l’étiquetteront probablement.',
    },
  ],
};

export default article;
