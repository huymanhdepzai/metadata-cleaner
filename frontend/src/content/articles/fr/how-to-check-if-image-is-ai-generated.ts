import type { Article } from '../types';

const article: Article = {
  title: 'Comment savoir si une image est générée par IA (métadonnées, C2PA et au-delà)',
  summary: [
    'Vous vous demandez si une photo a été créée par une IA ? La vérification fiable la plus rapide, ce sont les métadonnées du fichier lui-même : les Content Credentials C2PA, le champ IPTC DigitalSourceType et le texte laissé par le générateur indiquent souvent précisément quel outil a créé l’image.',
    'Ce guide explique quels indices rechercher, comment les lire avec un outil gratuit dans le navigateur, que faire en l’absence de métadonnées, et pourquoi un résultat « propre » ne prouve jamais qu’une image est authentique.',
  ],
  seoTitle: 'Savoir si une image est générée par IA (outil gratuit)',
  description:
    'Savoir si une image est générée par IA : lisez gratuitement C2PA, IPTC DigitalSourceType et prompts dans le navigateur, et découvrez les limites de chaque indice.',
  answer:
    'Pour savoir si une image est générée par IA, inspectez les métadonnées du fichier original : des Content Credentials C2PA citant un service d’IA, un IPTC DigitalSourceType égal à trainedAlgorithmicMedia ou des prompts intégrés sont des preuves solides. Sans métadonnées, utilisez la recherche d’image inversée, l’outil de détection de filigrane du fournisseur et le contexte de l’image — mais aucun test isolé ne peut prouver qu’une photo est réelle.',
  sections: [
    {
      heading: 'Partez du fichier original',
      paragraphs: [
        'Les métadonnées ne survivent que dans le fichier sorti du générateur ou de l’appareil photo. Les captures d’écran, copies réenregistrées et images téléchargées depuis les réseaux sociaux sont généralement réencodées, ce qui en supprime la plupart, voire la totalité. Si possible, demandez le fichier original — celui exporté depuis l’application ou envoyé « en tant que fichier » plutôt que comme photo compressée.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Les métadonnées qui trahissent une image IA',
      paragraphs: ['Du plus fiable au moins fiable, voici les indices à vérifier :'],
      table: {
        head: ['Indice', 'Emplacement', 'Ce qu’il vous apprend'],
        rows: [
          ['Manifeste C2PA d’un service d’IA', 'APP11 (JPEG), caBX (PNG), uuid (HEIC)', 'Déclaration signée de l’outil qui a généré ou modifié l’image'],
          ['IPTC DigitalSourceType', 'Métadonnées XMP', 'Origine déclarée, par ex. trainedAlgorithmicMedia'],
          ['Prompts et paramètres', 'Chunks de texte PNG, EXIF UserComment', 'Image générée par un outil local comme Stable Diffusion ou ComfyUI'],
          ['Noms d’outils', 'XMP CreatorTool, EXIF Software', 'L’application qui a créé ou enregistré le fichier en dernier'],
        ],
      },
    },
    {
      heading: 'Indice n° 1 : les Content Credentials C2PA',
      paragraphs: [
        'Les Content Credentials sont un enregistrement signé numériquement, ajouté par les outils compatibles avec le standard C2PA. Le claim generator nomme l’application ou le service qui a produit l’image, la liste c2pa.actions enregistre des étapes comme « created » ou « edited », et une valeur digitalSourceType peut déclarer directement une génération par IA.',
        'Comme l’enregistrement est signé, les outils de vérification peuvent aussi savoir si l’image a été modifiée après la signature. Un manifeste émis par un service d’IA est la preuve la plus solide que puissent fournir les métadonnées.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Indice n° 2 : IPTC DigitalSourceType',
      paragraphs: ['Beaucoup de générateurs et de logiciels de retouche écrivent un champ IPTC standard qui décrit comment le contenu a été produit. Les valeurs les plus fréquentes :'],
      bullets: [
        'trainedAlgorithmicMedia — créé par un modèle d’IA générative.',
        'compositeWithTrainedAlgorithmicMedia — une vraie photo dont certaines parties ont été générées ou remplacées par IA (par exemple avec le Remplissage génératif).',
        'algorithmicMedia — créé par un algorithme sans données d’entraînement, comme des graphismes procéduraux.',
        'digitalCapture — capturé par un appareil photo, sans contenu génératif déclaré.',
      ],
    },
    {
      heading: 'Indice n° 3 : prompts, paramètres et noms d’outils',
      paragraphs: [
        'Les générateurs locaux comme Stable Diffusion et ComfyUI stockent le prompt, la seed, le modèle et le workflow sous forme de texte dans les fichiers PNG. D’autres outils laissent leur nom dans XMP CreatorTool ou EXIF Software. Chacun de ces éléments est un signe clair d’intervention de l’IA — et un indice sur la façon exacte dont l’image a été produite.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Vérifier une image en quelques secondes',
      paragraphs: [],
      steps: [
        'Déposez le fichier dans l’outil en haut de cette page. La vérification s’exécute entièrement dans votre navigateur ; l’image n’est jamais envoyée.',
        'Lisez le verdict du panneau « IA et provenance » : « Indices d’IA détectés », « À vérifier » (Content Credentials sans déclaration explicite d’IA) ou « Aucun indice d’IA ».',
        'Examinez les indices listés et leurs sources, puis ouvrez « Toutes les métadonnées et détails du fichier » pour voir les valeurs brutes.',
      ],
    },
    {
      heading: 'Que faire quand il n’y a pas de métadonnées ?',
      paragraphs: ['L’absence de métadonnées ne prouve rien dans un sens ni dans l’autre — logiciels de retouche, messageries et réseaux sociaux les suppriment en permanence. Autres vérifications possibles :'],
      bullets: [
        'La recherche d’image inversée, pour retrouver la copie la plus ancienne et son contexte d’origine.',
        'L’outil de détection de filigrane du fournisseur — par exemple les outils de Google pour SynthID — quand il existe.',
        'L’examen visuel : mains, texte, reflets, textures répétitives et éclairage incohérent sont des points faibles fréquents, même si les modèles récents font moins d’erreurs.',
        'Le contexte : qui l’a publiée en premier, si des sources fiables confirment la scène, et si le compte publie habituellement du contenu IA.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Les détecteurs d’images IA sont-ils fiables ?',
      paragraphs: [
        'Les détecteurs d’IA fondés sur les pixels estiment une probabilité ; ils ne prouvent rien. Les résultats varient d’un détecteur à l’autre, se dégradent après compression ou redimensionnement, et peuvent signaler de vraies photos comme IA. Considérez-les comme un élément parmi d’autres — et accordez plus de poids à la provenance signée et au contexte d’origine.',
      ],
    },
  ],
  faqHeading: 'Questions sur la détection des images IA',
  faq: [
    {
      q: '« Aucun indice d’IA » signifie-t-il que la photo est réelle ?',
      a: 'Non. Cela signifie seulement que le fichier ne contient aucune métadonnée IA. Les métadonnées se perdent ou se suppriment facilement : considérez un résultat propre comme « inconnu », pas comme une preuve d’authenticité.',
    },
    {
      q: 'Puis-je vérifier des images téléchargées depuis Instagram ou Facebook ?',
      a: 'Oui, mais les plateformes suppriment généralement les métadonnées de la copie publiée, donc le résultat est souvent vide. L’étiquette « Infos IA » de la plateforme, si elle est présente, est un indice distinct.',
    },
    {
      q: 'Les métadonnées peuvent-elles être falsifiées ?',
      a: 'Les champs EXIF et XMP simples se modifient avec des outils courants. Les manifestes C2PA sont signés, donc toute altération est détectable — ce qui en fait l’indice le plus fiable.',
    },
    {
      q: 'Comment savoir si une image a été créée avec ChatGPT ?',
      a: 'Les images issues de la génération d’images d’OpenAI contiennent des Content Credentials C2PA qui nomment OpenAI. Si le fichier original les contient encore, le rapport les affiche sous « IA et provenance ».',
    },
    {
      q: 'Puis-je vérifier des images Midjourney ou Stable Diffusion ?',
      a: 'Oui. Les téléchargements Midjourney peuvent contenir le prompt et un type de source IA, et les PNG Stable Diffusion contiennent généralement un chunk « parameters » — les deux sont signalés dans le rapport.',
    },
    {
      q: 'L’outil de vérification est-il gratuit et confidentiel ?',
      a: 'Oui. Il est gratuit, ne demande aucun compte et analyse le fichier localement dans votre navigateur, sans l’envoyer.',
    },
  ],
};

export default article;
