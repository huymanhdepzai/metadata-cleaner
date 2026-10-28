import type { Article } from '../types';

const article: Article = {
  title: 'Gérer les Content Credentials dans Photoshop et Lightroom (et nettoyer vos exports)',
  summary: [
    'Les applications Adobe peuvent joindre des Content Credentials (Identifiants de contenu) aux images exportées — un enregistrement signé des retouches, y compris des fonctions d’IA générative utilisées. C’est utile pour prouver votre travail, mais cela peut aussi déclencher des étiquettes IA sur des photos simplement retouchées.',
    'Voici d’où viennent les Content Credentials dans Photoshop et Lightroom, comment vérifier si un export en contient, et comment les supprimer d’une copie quand c’est nécessaire.',
  ],
  seoTitle: 'Désactiver les Content Credentials (Photoshop, Lightroom)',
  description:
    'D’où viennent les Content Credentials de Photoshop et Lightroom, comment les désactiver, repérer le C2PA dans vos exports et le retirer d’une copie sans perte.',
  answer:
    'Photoshop et Lightroom joignent des Content Credentials (C2PA) aux exports quand vous les activez, et Adobe les applique aussi aux contenus créés avec des fonctions d’IA générative comme le Remplissage génératif. Désactiver l’option n’empêche pas forcément leur ajout sur les retouches génératives : vérifiez donc chaque export, et s’il contient un bloc C2PA indésirable, retirez-le d’une copie avec un nettoyeur sans perte avant de publier.',
  sections: [
    {
      heading: 'D’où viennent les Content Credentials dans les applications Adobe',
      paragraphs: ['Un export peut contenir des Content Credentials pour deux raisons différentes :'],
      bullets: [
        'Vous avez vous-même activé les Content Credentials : l’application joint alors votre identité et votre historique de retouche à l’export.',
        'Vous avez utilisé une fonction d’IA générative comme le Remplissage génératif ou l’Extension générative — Adobe applique des Content Credentials aux contenus créés avec ses fonctions génératives et les décrit comme retouchés par IA.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Pourquoi c’est important avant de publier',
      paragraphs: [
        'Des plateformes comme Instagram, Facebook, Threads et TikTok lisent les Content Credentials lors de l’envoi. Une photo comportant une seule retouche générative peut être étiquetée comme contenu IA, même si le reste de l’image est une vraie photographie.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Comment désactiver les Content Credentials dans Photoshop et Lightroom',
      paragraphs: [
        'Adobe déploie progressivement les Content Credentials dans ses applications, et les réglages changent de place d’une version à l’autre. Dans les versions récentes :',
      ],
      bullets: [
        'Photoshop : cherchez le panneau Content Credentials (dans le menu Fenêtre) et les options Content Credentials de la boîte de dialogue d’exportation.',
        'Lightroom Classic et Lightroom : cherchez une section Content Credentials dans les paramètres d’exportation.',
        'Consultez l’aide d’Adobe pour la version exacte que vous utilisez — les noms et emplacements changent.',
      ],
    },
    {
      heading: 'Désactiver l’option ne suffit pas toujours',
      paragraphs: [
        'Adobe applique des credentials aux contenus d’IA générative quelle que soit votre préférence personnelle : un export qui a utilisé le Remplissage génératif peut donc toujours contenir un manifeste. Vérifiez toujours le fichier exporté au lieu de vous fier uniquement au réglage.',
      ],
    },
    {
      heading: 'Comment vérifier si un export contient des Content Credentials',
      paragraphs: [],
      steps: [
        'Déposez le JPEG, le PNG ou tout autre fichier exporté dans l’outil en haut de cette page.',
        'Dans « IA et provenance », cherchez un bloc C2PA, le claim generator (par exemple Adobe Photoshop), des actions c2pa.* et un type de source composite IA.',
        'Si l’un de ces éléments apparaît, les plateformes qui lisent les Content Credentials peuvent étiqueter l’image.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Comment supprimer les Content Credentials d’une copie',
      paragraphs: [],
      steps: [
        'Conservez l’export d’origine avec ses credentials comme archive.',
        'Déposez une copie dans l’outil et cliquez sur « Supprimer les métadonnées IA ». Le manifeste est découpé au niveau des octets ; pixels, dimensions, orientation et profil colorimétrique sont conservés.',
        'Vérifiez dans le panneau de résultat qu’il ne reste aucun bloc C2PA, puis téléchargez le fichier propre pour votre portail client, votre place de marché ou votre réseau social.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Gardez l’original comme preuve',
      paragraphs: [
        'Les Content Credentials peuvent constituer une preuve précieuse de paternité et de la façon dont une image a été retouchée. Archivez l’export d’origine avec ses credentials, et ne partagez des copies nettoyées que lorsque les métadonnées seraient trompeuses ou en révéleraient plus que vous ne le souhaitez.',
      ],
    },
  ],
  faqHeading: 'Questions sur les Content Credentials dans les applications Adobe',
  faq: [
    {
      q: 'Si je désactive les Content Credentials, les retouches génératives sont-elles encore enregistrées ?',
      a: 'C’est possible. Adobe applique des credentials aux contenus d’IA générative : vérifiez toujours le fichier exporté au lieu de vous fier uniquement au réglage.',
    },
    {
      q: 'Pourquoi Instagram étiquette-t-il ma retouche Photoshop comme IA ?',
      a: 'Les fonctions génératives enregistrent une déclaration « composite avec IA » dans les Content Credentials ou le XMP de l’export, et Meta lit cette déclaration lors de l’envoi.',
    },
    {
      q: 'Supprimer les credentials annule-t-il mes retouches ?',
      a: 'Non. Seul le bloc de métadonnées est retiré ; les pixels retouchés sont copiés sans modification.',
    },
    {
      q: 'Puis-je rajouter les credentials plus tard ?',
      a: 'Pas sur la copie nettoyée, mais vous pouvez exporter à nouveau depuis le fichier d’origine avec les Content Credentials activés.',
    },
    {
      q: '« Enregistrer pour le Web » supprime-t-il les Content Credentials ?',
      a: 'Cela peut retirer une grande partie des métadonnées, mais le comportement dépend de la version et des réglages, et l’image est recompressée. Vérifiez le résultat, ou nettoyez plutôt l’export d’origine sans perte.',
    },
    {
      q: 'Puis-je nettoyer toute une séance d’un coup ?',
      a: 'Oui. Déposez jusqu’à 50 exports, nettoyez-les en un clic et téléchargez un ZIP.',
    },
  ],
};

export default article;
