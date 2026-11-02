import type { Article } from '../types';

const article: Article = {
  title: 'ChatGPT ajoute-t-il des métadonnées aux images ? Les voir et les supprimer',
  seoTitle: 'ChatGPT ajoute-t-il des métadonnées aux images ?',
  summary: [
    'Les images créées avec ChatGPT et les modèles d’image d’OpenAI contiennent des Content Credentials C2PA : des métadonnées signées qui désignent OpenAI comme source de l’image.',
    'Voici ce que contiennent ces métadonnées, où elles apparaissent, comment vérifier vos propres fichiers et comment les supprimer d’une copie sans perte — et ce que leur suppression ne change pas.',
  ],
  description:
    'Oui : les images ChatGPT contiennent des Content Credentials C2PA nommant OpenAI. Ce qu’elles contiennent, comment les vérifier et les supprimer.',
  answer:
    'Oui. Les images générées dans ChatGPT et via l’API d’images d’OpenAI contiennent des Content Credentials C2PA, un manifeste signé qui indique que l’image a été créée par un modèle d’OpenAI. Des plateformes comme Instagram, Facebook et LinkedIn peuvent le lire et afficher une étiquette IA. Vous pouvez examiner le manifeste dans une visionneuse de métadonnées et le supprimer d’une copie sans modifier les pixels.',
  sections: [
    {
      heading: 'Quelles métadonnées ChatGPT ajoute aux images générées',
      paragraphs: [
        'OpenAI joint un manifeste C2PA aux images créées par ses modèles d’image dans ChatGPT et dans l’API. Le manifeste est signé, ce qui permet aux visionneuses de savoir s’il a été modifié. Il indique généralement :',
      ],
      bullets: [
        'L’émetteur et l’outil de génération, qui identifient OpenAI et ChatGPT ou l’API.',
        'Une action indiquant que l’image a été créée, avec le type de source numérique « trainedAlgorithmicMedia », le code standard des médias entièrement générés par IA.',
        'Un horodatage et le certificat utilisé pour signer le manifeste.',
        'Pour les images retouchées dans ChatGPT, des entrées décrivant la modification et l’image de départ.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Une image ChatGPT contient-elle mon prompt ?',
      paragraphs: [
        'Les manifestes C2PA sont conçus pour enregistrer la provenance — quel outil a créé l’image et quand — et non votre conversation. Contrairement à Stable Diffusion ou ComfyUI, qui écrivent le prompt complet dans des blocs de texte PNG, les fichiers d’OpenAI ne sont pas pensés pour stocker le prompt. Leur contenu peut évoluer : pour un fichier précis, la seule réponse fiable est de l’ouvrir dans une visionneuse et de vérifier.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Comment vérifier les métadonnées d’une image ChatGPT',
      paragraphs: [],
      steps: [
        'Téléchargez l’image depuis ChatGPT. Les fichiers sont généralement enregistrés en PNG.',
        'Déposez le fichier téléchargé dans l’outil de vérification en haut de cette page.',
        'Ouvrez le panneau « IA et provenance » : il affiche le manifeste C2PA, l’émetteur et le type de source numérique.',
        'Comparez avec une copie partagée ou réenregistrée : beaucoup d’applications suppriment le manifeste, d’autres le conservent.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Où les métadonnées des images ChatGPT deviennent visibles',
      paragraphs: [
        'Les plateformes et outils compatibles C2PA lisent le manifeste automatiquement. Meta affiche l’étiquette « Infos IA » sur Instagram, Facebook et Threads, LinkedIn affiche une icône Content Credentials, et des sites de vérification comme contentcredentials.org montrent l’historique complet. Les plateformes qui suppriment les métadonnées à l’envoi retirent le manifeste de la copie publiée, mais peuvent le lire avant.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'Comment supprimer les métadonnées d’une image ChatGPT',
      paragraphs: [
        'Supprimer le manifeste est utile pour alléger vos fichiers, éviter de partager des informations sur l’outil et le compte, ou publier une image dans un contexte où vous indiquez vous-même son origine IA.',
      ],
      steps: [
        'Déposez une ou plusieurs images ChatGPT dans l’outil en haut de cette page.',
        'Cliquez sur « Supprimer les métadonnées IA ». Le bloc C2PA et les autres métadonnées sont découpés au niveau des octets.',
        'Téléchargez le PNG nettoyé : pixels, transparence et dimensions sont identiques à l’original.',
        'Gardez le téléchargement d’origine si vous pourriez avoir besoin de prouver d’où vient l’image.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'Ce que la suppression des métadonnées ne change pas',
      paragraphs: [
        'Les métadonnées ne sont qu’une couche. OpenAI a indiqué utiliser aussi des outils internes pour reconnaître ses propres images, les plateformes peuvent utiliser leurs propres classificateurs, et de nombreux services demandent de signaler les contenus générés par IA quel que soit le contenu du fichier. Supprimer le manifeste nettoie le fichier ; cela ne change ni l’origine de l’image ni vos obligations de transparence.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Questions sur les métadonnées des images ChatGPT',
  faq: [
    {
      q: 'Toutes les images ChatGPT ont-elles des métadonnées C2PA ?',
      a: 'Les images générées par les modèles d’image d’OpenAI dans ChatGPT et l’API sont fournies avec des Content Credentials C2PA. Les copies issues d’une capture d’écran ou réenregistrées par une autre application peuvent les avoir perdues.',
    },
    {
      q: 'Peut-on savoir qu’une image a été faite avec ChatGPT ?',
      a: 'Si le manifeste est toujours dans le fichier, oui : toute visionneuse C2PA affiche OpenAI comme source. Sans métadonnées, il faut se fier à des indices visuels ou à des outils de détection, qui ne sont pas toujours fiables.',
    },
    {
      q: 'Supprimer les métadonnées réduit-il la qualité de l’image ?',
      a: 'Non. L’outil supprime les blocs de métadonnées et copie les données d’image octet par octet : le PNG est visuellement identique.',
    },
    {
      q: 'Une capture d’écran d’une image ChatGPT conserve-t-elle les métadonnées ?',
      a: 'En général non. Une capture est un nouveau fichier sans le manifeste d’origine, mais sa résolution est plus faible et elle reçoit ses propres métadonnées de capture.',
    },
    {
      q: 'Instagram étiquettera-t-il quand même une image ChatGPT nettoyée ?',
      a: 'Les étiquettes fondées sur les métadonnées ont besoin de métadonnées : une copie nettoyée en déclenche donc moins souvent. Les plateformes peuvent toutefois utiliser d’autres signaux, et leurs règles peuvent vous obliger à signaler vous-même les contenus IA.',
    },
    {
      q: 'Mes images sont-elles envoyées quand je les vérifie ou les nettoie ?',
      a: 'Non. Tout se passe dans votre navigateur et les images ne quittent jamais votre appareil.',
    },
  ],
};

export default article;
