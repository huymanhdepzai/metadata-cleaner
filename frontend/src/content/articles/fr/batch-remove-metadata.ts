import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Supprimer les métadonnées par lot (50 images, sans envoi)',
  description:
    'Supprimez les métadonnées de 50 images à la fois dans votre navigateur — JPG, PNG, WebP, GIF, HEIC, AVIF — puis téléchargez un seul ZIP. Sans perte, gratuit, sans envoi.',
  answer:
    'Pour supprimer les métadonnées de plusieurs images à la fois, déposez jusqu’à 50 fichiers JPG, PNG, WebP, GIF, HEIC ou AVIF dans l’outil, consultez les rapports, cliquez une seule fois sur « Supprimer les métadonnées IA » et téléchargez le tout dans un seul ZIP. Le traitement s’exécute en parallèle dans votre navigateur : rien n’est envoyé et aucune image n’est recompressée.',
  sections: [
    {
      heading: 'Supprimer les métadonnées par lot en quatre étapes',
      paragraphs: [],
      steps: [
        'Déposez jusqu’à 50 images sur la page — JPG, PNG, WebP, GIF, HEIC ou AVIF, jusqu’à 25 Mo et 40 mégapixels chacune. Vous pouvez mélanger les formats.',
        'Chaque image est analysée automatiquement ; ouvrez n’importe quel rapport pour voir ce qui sera supprimé.',
        'Cliquez une fois sur « Supprimer les métadonnées IA » pour nettoyer toutes les images analysées.',
        'Téléchargez les images une par une ou cliquez sur « Tout télécharger (.zip) » pour obtenir metadata-cleared.zip.',
      ],
    },
    {
      heading: 'Quand le nettoyage par lot est utile',
      paragraphs: [],
      bullets: [
        'Les photographes qui livrent une séance à un client sans numéros de série, lieux ni historique de retouche.',
        'Les vendeurs qui publient de nombreuses photos de produits sur des places de marché qui conservent les fichiers originaux.',
        'Les artistes IA qui publient une série de rendus sans prompts ni workflows ComfyUI.',
        'Les équipes qui préparent des images pour un site web, un dossier de presse ou un jeu de données public.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Rapide sans serveur : comment ça marche',
      paragraphs: [
        'Le travail est réparti entre plusieurs Web Workers — des threads d’arrière-plan de votre navigateur — en fonction du nombre de cœurs du processeur de votre appareil. Chaque worker lit un fichier, analyse sa structure et renvoie les octets nettoyés : la page reste fluide même avec de gros fichiers HEIC.',
        'Le ZIP est créé avec la méthode « store » (sans compression), car les images sont déjà compressées : l’archivage est rapide et n’ajoute aucune perte de qualité.',
      ],
    },
    {
      heading: 'Vérifier chaque fichier avant de partager',
      paragraphs: [
        'Après le nettoyage, chaque fichier produit est réanalysé. Le panneau de résultat vert confirme si les champs de localisation, personnels, horaires et IA ont disparu. Les fichiers portant le même nom sont renommés automatiquement dans le ZIP pour que rien ne soit écrasé.',
      ],
    },
    {
      heading: 'Ce qui est supprimé et ce qui est conservé',
      paragraphs: ['Les mêmes règles s’appliquent à chaque fichier du lot :'],
      table: {
        head: ['Supprimé', 'Conservé'],
        rows: [
          ['Position GPS, date et heure de prise de vue', 'Données d’image, octet par octet'],
          ['Appareil, objectif, numéros de série, logiciel', 'Dimensions et orientation'],
          ['Champs auteur, copyright et description', 'Profil colorimétrique ICC'],
          ['XMP, IPTC, Content Credentials C2PA', 'Transparence et animation'],
          ['Prompts IA, workflows, vignettes intégrées', 'Noms de fichiers d’origine'],
        ],
      },
    },
    {
      heading: 'Conseils pour les gros volumes',
      paragraphs: [],
      bullets: [
        'Pour des centaines d’images, travaillez par lots de 50 et videz la liste entre deux passages pour libérer la mémoire.',
        'Sur les téléphones avec peu de mémoire, fermez d’abord les autres onglets gourmands.',
        'Comme le traitement est local, vous pouvez même vous déconnecter d’Internet une fois la page chargée.',
      ],
    },
    {
      heading: 'Confidentiel par conception',
      paragraphs: [
        'Aucune image n’est envoyée, stockée ni journalisée. Le seul trafic réseau est le chargement de la page elle-même. Le nettoyage par lot convient donc aux travaux clients, aux photos non publiées et à tous les fichiers que vous ne pouvez pas confier à un serveur tiers.',
      ],
    },
  ],
  faqHeading: 'Questions sur le traitement par lot',
  faq: [
    {
      q: 'Pourquoi une limite de 50 images ?',
      a: 'Tout s’exécute sur votre appareil. La limite garde une consommation de mémoire raisonnable sur les téléphones et les ordinateurs anciens ; vous pouvez enchaîner autant de lots que vous voulez.',
    },
    {
      q: 'Puis-je mélanger JPG, PNG et HEIC dans un même lot ?',
      a: 'Oui. Chaque fichier est identifié d’après son contenu et nettoyé avec la méthode adaptée, et chaque fichier garde son format d’origine.',
    },
    {
      q: 'Les noms de fichiers sont-ils modifiés ?',
      a: 'Non. Les fichiers nettoyés gardent leur nom d’origine. Seuls les doublons exacts dans le ZIP reçoivent un suffixe numéroté.',
    },
    {
      q: 'Puis-je l’utiliser hors ligne ?',
      a: 'Oui. Une fois la page chargée, le nettoyage fonctionne sans connexion Internet, puisque rien n’est envoyé à un serveur.',
    },
    {
      q: 'Le ZIP est-il compressé davantage ?',
      a: 'Non. Les images y sont stockées telles quelles : le ZIP est créé rapidement et aucune image ne perd en qualité.',
    },
    {
      q: 'Le nettoyage par lot est-il gratuit ?',
      a: 'Oui. Pas de compte, pas de filigrane et aucune limite au nombre de lots.',
    },
  ],
};

export default article;
