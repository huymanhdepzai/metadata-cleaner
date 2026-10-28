import type { Article } from '../types';

const article: Article = {
  title: 'Quelles métadonnées ajoutent les générateurs d’images IA ? DALL·E, Firefly, Midjourney, Gemini et Stable Diffusion',
  summary: [
    'Presque tous les générateurs d’images IA laissent des traces dans leurs rendus — des Content Credentials signés jusqu’aux prompts en texte clair. Savoir ce que chaque outil écrit vous aide à protéger vos prompts et à comprendre pourquoi une plateforme étiquette une image.',
    'Voici un panorama des métadonnées que l’on trouve couramment dans les images des générateurs populaires, et comment voir exactement ce que contiennent vos propres fichiers.',
  ],
  seoTitle: 'Métadonnées des images IA : ce qu’ajoute chaque générateur',
  description:
    'Les métadonnées ajoutées par les générateurs d’images IA (C2PA, IPTC DigitalSourceType, XMP, prompts, workflows), outil par outil, et comment les voir ou les supprimer.',
  answer:
    'Les services d’IA en ligne comme la génération d’images de ChatGPT et Adobe Firefly ajoutent des Content Credentials C2PA signés ; Google et Meta ajoutent des filigranes invisibles et des métadonnées IPTC ; Midjourney peut inclure le prompt et un type de source IA ; les outils locaux comme Stable Diffusion et ComfyUI stockent le prompt complet, la seed, le modèle et le workflow en texte PNG. Ce qui est écrit change selon les versions : inspectez vos fichiers réels.',
  sections: [
    {
      heading: 'Trois types de traces d’IA',
      paragraphs: ['Les métadonnées liées à l’IA se répartissent en trois groupes :'],
      bullets: [
        'La provenance signée — des Content Credentials C2PA qui nomment le générateur et les actions effectuées.',
        'Les métadonnées descriptives — des champs IPTC et XMP comme DigitalSourceType, CreatorTool ou une description.',
        'Les données de génération — le prompt, la seed, le modèle et les réglages stockés en texte, surtout par les outils locaux.',
      ],
    },
    {
      heading: 'Les métadonnées des générateurs IA en un coup d’œil',
      paragraphs: [],
      table: {
        head: ['Générateur', 'C2PA', 'IPTC / XMP', 'Prompt dans le fichier', 'Filigrane dans les pixels'],
        rows: [
          ['Génération d’images de ChatGPT, DALL·E', 'Oui', 'Variable', 'En général non', 'Variable'],
          ['Adobe Firefly, fonctions génératives de Photoshop', 'Oui', 'Oui', 'Non', 'Variable'],
          ['Google Gemini, Imagen', 'Dans certains produits', 'Dans certains produits', 'Non', 'SynthID'],
          ['Meta AI', 'Variable', 'Oui (IPTC)', 'Non', 'Oui'],
          ['Midjourney', 'Variable', 'Oui (type de source)', 'Souvent', 'Non annoncé'],
          ['Stable Diffusion, ComfyUI (local)', 'Non', 'Rarement', 'Oui, très détaillé', 'Non par défaut'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (génération d’images de ChatGPT et DALL·E)',
      paragraphs: [
        'Les images créées avec la génération d’images d’OpenAI contiennent des Content Credentials C2PA qui identifient OpenAI comme source : les visualiseurs et plateformes compatibles C2PA peuvent donc les reconnaître. Le manifeste peut disparaître lors d’une capture d’écran ou d’un réenregistrement par une application qui ne le conserve pas.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly et les fonctions génératives de Photoshop',
      paragraphs: [
        'Adobe joint des Content Credentials aux contenus créés avec ses fonctions génératives basées sur Firefly, en les décrivant comme générés ou retouchés par IA. Les photos retouchées avec le Remplissage génératif ou l’Extension générative peuvent donc porter une déclaration « composite avec IA », même si l’essentiel de l’image est une vraie photo.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini et Imagen) et Meta AI',
      paragraphs: [
        'Google intègre son filigrane invisible SynthID aux images de ses modèles génératifs et utilise aussi des métadonnées pour signaler les contenus IA dans certains produits. Meta a indiqué que les images de Meta AI comportent un marqueur visible, un filigrane invisible et des métadonnées IPTC indiquant une génération par IA.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Les téléchargements Midjourney peuvent inclure le prompt et un ID de tâche dans les champs de description ou de commentaire, ainsi qu’une valeur IPTC qui marque l’image comme générée par IA. Ce qui apparaît dépend du format de téléchargement et de la version actuelle du service.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI et autres outils locaux',
      paragraphs: [
        'Les outils locaux ne signent rien, mais ce sont souvent eux qui stockent les informations les plus détaillées : AUTOMATIC1111 et Forge écrivent un chunk de texte « parameters » avec le prompt, la seed, le sampler et le modèle, et ComfyUI intègre ses graphes complets de prompt et de workflow en JSON. Ces réglages peuvent généralement être désactivés — mais uniquement pour les nouvelles images.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Comment voir ce que votre générateur a ajouté',
      paragraphs: ['Les générateurs changent ce qu’ils écrivent au fil des versions : la méthode fiable consiste à inspecter le fichier réel.'],
      steps: [
        'Déposez l’image dans l’outil en haut de cette page ; elle est analysée localement.',
        'Consultez « IA et provenance » pour repérer C2PA, type de source, prompts et noms d’outils.',
        'Si vous ne voulez pas les partager, cliquez sur « Supprimer les métadonnées IA » et téléchargez la copie nettoyée.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Questions sur les métadonnées des générateurs IA',
  faq: [
    {
      q: 'Tous les générateurs IA ajoutent-ils des Content Credentials C2PA ?',
      a: 'Non. Les grands services en ligne le font de plus en plus, mais beaucoup d’outils — surtout locaux — n’écrivent que des métadonnées texte, voire rien du tout.',
    },
    {
      q: 'Supprimer les métadonnées supprime-t-il aussi les filigranes invisibles ?',
      a: 'Non. Les filigranes comme SynthID sont intégrés aux pixels. La suppression des métadonnées ne modifie pas les pixels.',
    },
    {
      q: 'Pourquoi deux images du même outil ont-elles des métadonnées différentes ?',
      a: 'Le format d’export, la version de l’application, la plateforme de téléchargement et les retouches ultérieures peuvent tous ajouter ou retirer des champs.',
    },
    {
      q: 'Que signifie trainedAlgorithmicMedia ?',
      a: 'C’est la valeur IPTC DigitalSourceType des médias créés par un modèle d’IA générative. compositeWithTrainedAlgorithmicMedia désigne une vraie image comportant des parties générées par IA.',
    },
    {
      q: 'Une capture d’écran conserve-t-elle les métadonnées IA ?',
      a: 'En général non. Une capture d’écran est une nouvelle image sans les métadonnées d’origine, même si les filigranes dans les pixels peuvent survivre.',
    },
    {
      q: 'Puis-je garder l’image mais supprimer le prompt ?',
      a: 'Oui. Le nettoyage retire les blocs de métadonnées et copie les données d’image sans modification : l’image est identique, sans le prompt.',
    },
  ],
};

export default article;
