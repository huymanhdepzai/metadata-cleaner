import type { Article } from '../types';

const article: Article = {
  title: 'Supprimer les métadonnées d’un PNG (prompts, XMP, C2PA)',
  summary: [
    'Les fichiers PNG stockent leurs métadonnées dans des chunks de texte, et les outils d’IA s’en servent abondamment : Stable Diffusion y écrit votre prompt et vos réglages, ComfyUI y intègre tout le workflow, et les logiciels de retouche ajoutent du XMP ou du C2PA.',
    'Utilisez l’outil de cette page pour voir chaque chunk et supprimer les métadonnées en gardant l’image, la transparence, les couleurs et l’animation exactement telles quelles.',
  ],
  description:
    'Supprimez prompts, workflows ComfyUI, XMP, EXIF et C2PA de vos PNG dans le navigateur. Transparence, profil couleur et animation APNG conservés. Gratuit, sans envoi.',
  answer:
    'Pour supprimer les métadonnées d’un PNG, déposez-le dans l’outil de cette page et cliquez sur « Supprimer les métadonnées IA ». Les chunks de texte (tEXt, zTXt, iTXt) contenant prompts, workflows ComfyUI et XMP sont supprimés, ainsi que les chunks eXIf, caBX (C2PA), tIME et dSIG. Données d’image, transparence, profil colorimétrique et animation APNG sont copiés sans modification : le PNG reste identique au pixel près.',
  sections: [
    {
      heading: 'Où se trouvent les métadonnées d’un PNG',
      paragraphs: ['Un PNG est une liste de chunks. Les données d’image se trouvent dans les chunks IDAT ; les métadonnées, dans des chunks séparés :'],
      table: {
        head: ['Chunk', 'Contenu'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Texte libre : « parameters » de Stable Diffusion, JSON « prompt » et « workflow » de ComfyUI, XMP'],
          ['eXIf', 'Données EXIF comme l’appareil, l’heure et le GPS'],
          ['caBX', 'Content Credentials C2PA'],
          ['tIME, dSIG', 'Date de dernière modification et signatures numériques'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Supprimer les métadonnées d’un PNG en trois étapes',
      paragraphs: [],
      steps: [
        'Déposez vos fichiers PNG dans l’outil ci-dessus — les lots sont acceptés.',
        'Ouvrez le rapport pour voir le prompt, le workflow et les autres champs trouvés.',
        'Cliquez sur « Supprimer les métadonnées IA » et téléchargez les fichiers nettoyés un par un ou dans un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Ce qui est conservé dans le PNG nettoyé',
      paragraphs: [
        'Seuls les chunks de métadonnées sont supprimés. Tout ce qui influe sur l’apparence de l’image reste : en-tête, palette, données d’image, transparence (tRNS), gamma et chromaticité, profil colorimétrique sRGB ou ICC et chunks d’animation APNG. Si le fichier déclarait une orientation, elle est réécrite dans un chunk eXIf minimal avec une somme de contrôle valide.',
      ],
    },
    {
      heading: 'Pourquoi ne pas simplement réenregistrer le PNG ?',
      paragraphs: [
        'La compression PNG est sans perte, mais un réenregistrement change tout de même des choses. Redessiner un PNG via un canvas de navigateur — ce que font beaucoup d’outils en ligne — peut faire perdre le profil colorimétrique, modifier les bords transparents et réduire une image 16 bits à 8 bits. Découper les chunks évite tout cela : les données IDAT sont exactement celles écrites par votre générateur ou votre logiciel.',
      ],
    },
    {
      heading: 'Éviter les métadonnées PNG la prochaine fois',
      paragraphs: [
        'Si vous ne voulez plus jamais de données de génération dans vos fichiers, vérifiez les réglages de votre générateur : ComfyUI peut être lancé avec --disable-metadata, et beaucoup d’interfaces Stable Diffusion proposent une option pour ne plus enregistrer les paramètres de génération. Pour les fichiers que vous avez déjà, les nettoyer ici est la solution la plus rapide.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Questions sur le nettoyage des fichiers PNG',
  faq: [
    {
      q: 'Le PNG va-t-il perdre en qualité ?',
      a: 'Non. Les chunks de données d’image sont copiés octet par octet : l’image est identique à l’original au pixel près.',
    },
    {
      q: 'Peut-on récupérer mon workflow ComfyUI après le nettoyage ?',
      a: 'Pas à partir du fichier nettoyé — les chunks prompt et workflow sont entièrement supprimés. Les copies partagées auparavant les contiennent toujours.',
    },
    {
      q: 'La transparence est-elle conservée ?',
      a: 'Oui. Les canaux alpha et le chunk tRNS sont conservés exactement tels quels.',
    },
    {
      q: 'Les PNG animés sont-ils pris en charge ?',
      a: 'Oui. Les chunks d’animation APNG sont conservés : l’animation se lit exactement comme avant.',
    },
    {
      q: 'Le fichier PNG devient-il plus léger ?',
      a: 'En général, oui — surtout pour les images ComfyUI, où le workflow intégré peut ajouter des dizaines de kilo-octets.',
    },
    {
      q: 'Mes PNG sont-ils envoyés ?',
      a: 'Non. Tout est traité dans votre navigateur et ne quitte jamais votre appareil.',
    },
  ],
};

export default article;
