import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Supprimer les métadonnées Stable Diffusion et ComfyUI (PNG)',
  description:
    'Stable Diffusion et ComfyUI cachent votre prompt, la seed, le modèle et tout le workflow dans vos PNG. Voyez ce qui est stocké et supprimez-le sans perte.',
  answer:
    'Les interfaces Stable Diffusion comme AUTOMATIC1111 et Forge enregistrent le prompt, la seed, le sampler et le modèle dans un chunk de texte PNG nommé « parameters », et ComfyUI y intègre ses JSON complets « prompt » et « workflow ». Pour les supprimer, déposez le PNG dans un nettoyeur de métadonnées sans perte qui retire les chunks de texte sans réencoder : l’image reste identique au pixel près, mais personne ne peut lire ni recharger vos réglages.',
  sections: [
    {
      heading: 'Ce que Stable Diffusion et ComfyUI enregistrent dans vos images',
      paragraphs: [
        'Les générateurs d’images locaux enregistrent leurs réglages sous forme de texte dans le fichier pour que l’image puisse être reproduite plus tard. Dans un PNG, ce texte se trouve dans des chunks tEXt, zTXt ou iTXt, à côté des données d’image. Voici ce que l’on trouve généralement :',
      ],
      table: {
        head: ['Outil', 'Emplacement', 'Contenu'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'Chunk de texte PNG « parameters »', 'Prompt, prompt négatif, steps, sampler, CFG scale, seed, taille, nom et hash du modèle, LoRA, réglages des extensions'],
          ['ComfyUI', 'Chunks de texte PNG « prompt » et « workflow »', 'Le graphe de nœuds exécuté et toute la disposition de l’éditeur, en JSON'],
          ['InvokeAI, NovelAI, Fooocus et autres', 'Leurs propres clés de texte PNG', 'Des réglages de génération similaires, sous des noms propres à chaque outil'],
          ['Exports en JPEG ou WebP', 'EXIF UserComment ou XMP', 'Le même texte de paramètres, selon l’outil'],
        ],
      },
    },
    {
      heading: 'Pourquoi le workflow ComfyUI en dit particulièrement long',
      paragraphs: [
        'Un workflow ComfyUI n’est pas qu’un prompt : c’est tout votre pipeline. Quiconque fait glisser votre PNG dans ComfyUI récupère chaque nœud, modèle, LoRA, upscaler, ControlNet et réglage, prêt à l’emploi. Les workflows peuvent aussi contenir des chemins de fichiers locaux, des noms de dossiers ou des noms d’utilisateur, et les gros graphes ajoutent des dizaines de kilo-octets à chaque image.',
      ],
    },
    {
      heading: 'Faut-il supprimer les données de génération ?',
      paragraphs: [
        'Les données de génération sont une recette. Les supprimer est logique quand vous vendez ou publiez des œuvres finies, livrez un travail à un client ou ne voulez tout simplement pas qu’on copie votre style exact. Il y a aussi de bonnes raisons de les garder : les sites de partage de modèles lisent ces paramètres pour afficher les infos de génération, et vos collaborateurs peuvent avoir besoin du workflow.',
        'Inutile de deviner : le rapport montre précisément ce que contient chaque fichier avant toute suppression, pour que vous décidiez image par image.',
      ],
    },
    {
      heading: 'Comment voir le prompt et le workflow d’un PNG',
      steps: [
        'Déposez le PNG dans l’outil en haut de cette page.',
        'Ouvrez le panneau « IA et provenance » : les chunks sont signalés comme « Prompt Stable Diffusion (A1111 / Forge) » ou « Workflow ComfyUI ».',
        'Ouvrez « Toutes les métadonnées et détails du fichier » pour lire chaque chunk de texte avec son mot-clé (parameters, prompt, workflow) et sa valeur complète. Les chunks compressés zTXt et iTXt sont décompressés dans le navigateur pour que vous puissiez les lire.',
      ],
      paragraphs: [],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Comment supprimer les métadonnées Stable Diffusion et ComfyUI',
      steps: [
        'Déposez un PNG ou tout un lot de rendus dans l’outil (jusqu’à 50 fichiers par passage).',
        'Cliquez sur « Supprimer les métadonnées IA ». Les chunks de texte, XMP, EXIF et C2PA sont retirés en entier.',
        'Vérifiez dans le panneau de résultat qu’il ne reste aucun champ IA, puis téléchargez les fichiers un par un ou dans un ZIP.',
      ],
      paragraphs: [],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'Ce qui reste dans le PNG nettoyé',
      paragraphs: [
        'IHDR, IDAT, la palette, la transparence, les chunks de gamma et de couleur ainsi que les chunks d’animation APNG sont conservés. Comme les chunks sont retirés en entier, les sommes de contrôle des chunks restants restent valides et le fichier nettoyé s’ouvre partout.',
      ],
    },
    {
      heading: 'Ne plus enregistrer de métadonnées dans les nouvelles images',
      paragraphs: ['Si vous ne voulez plus jamais de données de génération dans vos rendus, désactivez-les à la source — cela ne concerne que les nouvelles images :'],
      bullets: [
        'ComfyUI : lancez-le avec l’option de ligne de commande --disable-metadata, ou utilisez un nœud d’enregistrement qui n’intègre pas le workflow.',
        'AUTOMATIC1111 et Forge : dans les paramètres (Settings), cherchez les options qui enregistrent les paramètres de génération dans les infos PNG, et désactivez-les.',
        'Autres interfaces : vérifiez dans les réglages d’enregistrement des images s’il existe une option qui écrit les prompts ou les paramètres dans le fichier.',
      ],
    },
    {
      heading: 'Nettoyage sans perte ou réenregistrement ?',
      paragraphs: [
        'Ouvrir l’image dans un éditeur et la réenregistrer supprime aussi le texte, mais l’image est recompressée, le profil colorimétrique peut être perdu et une image 16 bits peut passer en 8 bits. La suppression au niveau des octets conserve les données IDAT exactement telles que le générateur les a écrites : le PNG nettoyé est identique à l’original au pixel près.',
      ],
    },
  ],
  faqHeading: 'Questions sur les métadonnées Stable Diffusion et ComfyUI',
  faq: [
    {
      q: 'ComfyUI peut-il encore charger le workflow depuis un PNG nettoyé ?',
      a: 'Non. Les chunks « prompt » et « workflow » sont supprimés : glisser le fichier nettoyé dans ComfyUI ne restaure pas le graphe. Gardez une copie de l’original si vous aurez besoin du workflow plus tard.',
    },
    {
      q: 'La qualité de l’image est-elle affectée ?',
      a: 'Non. Les chunks IDAT qui contiennent les données d’image compressées sont copiés sans modification : le PNG nettoyé est identique à l’original au pixel près.',
    },
    {
      q: 'Est-ce que ça marche pour les exports JPEG et WebP de Stable Diffusion ?',
      a: 'Oui. Les prompts stockés dans EXIF UserComment ou XMP sont aussi détectés et supprimés des fichiers JPEG et WebP.',
    },
    {
      q: 'Comment voir le prompt d’une image Stable Diffusion ?',
      a: 'Déposez le PNG dans l’outil et ouvrez « Toutes les métadonnées et détails du fichier ». Le chunk « parameters » affiche le prompt complet, le prompt négatif, la seed et le modèle.',
    },
    {
      q: 'Mes images sont-elles envoyées sur un serveur ?',
      a: 'Non. Les fichiers sont analysés et nettoyés localement dans votre navigateur : prompts et workflows ne quittent jamais votre appareil.',
    },
    {
      q: 'Puis-je nettoyer des centaines de rendus d’un coup ?',
      a: 'Oui, par lots de 50 fichiers maximum. Videz la liste entre deux lots et téléchargez chaque lot dans un ZIP.',
    },
  ],
};

export default article;
