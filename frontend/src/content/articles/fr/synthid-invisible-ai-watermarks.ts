import type { Article } from '../types';

const article: Article = {
  title: 'SynthID et filigranes IA invisibles : ce que le nettoyage des métadonnées peut (et ne peut pas) faire',
  summary: [
    'Certaines images IA portent deux types de marqueurs : des métadonnées stockées à côté de l’image, et un filigrane invisible tissé dans les pixels eux-mêmes. SynthID de Google est l’exemple le plus connu de la seconde catégorie.',
    'Ce guide explique en quoi les filigranes invisibles diffèrent de C2PA et de l’EXIF, comment ils sont détectés, et pourquoi aucun outil de métadonnées honnête ne peut les supprimer.',
  ],
  seoTitle: 'SynthID expliqué : peut-on supprimer un filigrane IA ?',
  description:
    'SynthID et autres filigranes IA invisibles : en quoi ils diffèrent des métadonnées C2PA, comment on les détecte et pourquoi un nettoyeur ne peut pas les retirer.',
  answer:
    'SynthID est un filigrane invisible que Google DeepMind intègre aux pixels des contenus créés par les modèles d’IA de Google. Contrairement aux métadonnées C2PA ou EXIF, ce n’est pas un bloc séparé du fichier : il résiste aux modifications courantes comme le recadrage et la compression, et ne peut être lu qu’avec les outils de détection de Google. Les nettoyeurs de métadonnées — y compris celui-ci — ne modifient pas les pixels et ne peuvent donc pas le supprimer.',
  sections: [
    {
      heading: 'Deux niveaux de provenance IA',
      paragraphs: [
        'Les métadonnées — EXIF, XMP, IPTC et C2PA — se trouvent dans des blocs séparés du fichier. Elles sont faciles à lire et faciles à supprimer sans toucher à l’image. Un filigrane invisible est différent : c’est un motif subtil réparti dans les valeurs des pixels, invisible à l’œil nu mais reconnaissable par un détecteur.',
      ],
      table: {
        head: ['', 'Métadonnées (C2PA, IPTC, EXIF)', 'Filigrane invisible (ex. SynthID)'],
        rows: [
          ['Emplacement', 'Blocs séparés dans le fichier', 'Dans les valeurs des pixels'],
          ['Qui peut le lire', 'N’importe quel visualiseur de métadonnées', 'Uniquement le détecteur du fournisseur'],
          ['Résiste aux captures d’écran et au réenregistrement', 'En général non', 'Conçu pour'],
          ['Supprimé par un nettoyeur de métadonnées', 'Oui', 'Non'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'SynthID, c’est quoi ?',
      paragraphs: [
        'SynthID est une technologie de filigrane développée par Google DeepMind pour les contenus générés par les modèles d’IA de Google. Elle intègre un signal imperceptible pendant la génération et est conçue pour rester détectable après des modifications courantes comme le recadrage, le redimensionnement, la compression et les retouches de couleur. Google utilise la même famille de techniques pour les images, l’audio, la vidéo et le texte.',
      ],
    },
    {
      heading: 'Comment vérifier si une image contient SynthID',
      paragraphs: [
        'Contrairement aux métadonnées, un filigrane ne se lit pas avec un visualiseur générique : il faut le détecteur du fournisseur. Google a mis en place des moyens de vérifier si un contenu contient SynthID, comme son SynthID Detector et des vérifications intégrées à ses propres produits. D’autres fournisseurs utilisent leurs propres méthodes de filigrane et de détection.',
        'Le rapport de ce site n’affiche que les métadonnées. Son verdict « Aucun indice d’IA » n’exclut donc jamais un filigrane dans les pixels.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Quelles images IA ont des filigranes invisibles ?',
      paragraphs: [],
      bullets: [
        'Les modèles d’image de Google, comme ceux utilisés dans Gemini et Imagen, intègrent SynthID.',
        'Meta a indiqué que les images de Meta AI comportent un filigrane invisible en plus des métadonnées.',
        'D’autres services en ligne peuvent utiliser leurs propres filigranes ; les politiques varient et évoluent.',
        'Les outils locaux comme Stable Diffusion n’ajoutent généralement aucun filigrane par défaut.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Pourquoi les outils de métadonnées ne peuvent pas supprimer les filigranes',
      paragraphs: [
        'Un nettoyeur de métadonnées sans perte copie les données d’image octet par octet — c’est précisément ce qui garantit l’absence totale de perte de qualité. Un filigrane intégré aux pixels reste donc exactement à sa place. Les outils qui promettent de « supprimer les filigranes IA » ne fonctionnent pas comme annoncé ou altèrent fortement l’image, et chercher à contourner le filigrane d’un fournisseur peut aussi enfreindre ses conditions d’utilisation.',
      ],
    },
    {
      heading: 'Ce que cela signifie en pratique',
      paragraphs: [
        'Nettoyer les métadonnées est la bonne approche pour protéger votre vie privée et retirer les prompts, lieux et données de provenance que vous ne souhaitez pas partager. Cela ne rend pas une image IA indétectable. Lorsque vous publiez un contenu IA réaliste, respectez les règles de déclaration de la plateforme concernée.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
  ],
  faqHeading: 'Questions sur SynthID et les filigranes IA',
  faq: [
    {
      q: 'Cet outil supprime-t-il SynthID ?',
      a: 'Non. L’outil supprime uniquement les métadonnées et ne modifie jamais les pixels : tout filigrane invisible reste dans l’image.',
    },
    {
      q: 'Comment savoir si une image contient SynthID ?',
      a: 'Uniquement avec les outils de vérification de Google. Le rapport de métadonnées de ce site ne peut pas voir les filigranes intégrés aux pixels.',
    },
    {
      q: 'Toutes les images IA ont-elles un filigrane invisible ?',
      a: 'Non. Certains fournisseurs ajoutent un filigrane à leurs rendus, beaucoup ne le font pas, et les images issues d’outils locaux n’en contiennent généralement aucun.',
    },
    {
      q: 'Une capture d’écran supprime-t-elle SynthID ?',
      a: 'Elle est censée ne pas y parvenir. SynthID est conçu pour résister aux transformations courantes comme les captures d’écran, le recadrage et la compression.',
    },
    {
      q: 'SynthID, est-ce la même chose que les Content Credentials ?',
      a: 'Non. Les Content Credentials sont des métadonnées signées stockées à côté de l’image ; SynthID est un signal à l’intérieur des pixels. Certains systèmes combinent les deux.',
    },
    {
      q: 'Les plateformes peuvent-elles détecter SynthID ?',
      a: 'Seulement si elles ont accès à un détecteur compatible. La plupart des étiquettes des plateformes reposent aujourd’hui sur les métadonnées et la déclaration du créateur.',
    },
  ],
};

export default article;
