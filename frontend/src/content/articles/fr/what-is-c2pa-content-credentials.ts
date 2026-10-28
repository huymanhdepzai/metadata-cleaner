import type { Article } from '../types';

const article: Article = {
  seoTitle: 'C2PA, c’est quoi ? Les Content Credentials expliqués',
  description:
    'C2PA et Content Credentials expliqués : contenu du manifeste signé, emplacement dans les JPEG, PNG, WebP et HEIC, comment l’inspecter et comment le supprimer.',
  answer:
    'C2PA est un standard ouvert qui associe aux fichiers multimédias un historique signé qui rend toute altération détectable ; son nom grand public est Content Credentials. Un manifeste C2PA indique quelle application ou quel modèle d’IA a créé ou modifié une image. Il est stocké dans un bloc séparé du fichier : vous pouvez donc l’inspecter — et le supprimer d’une copie — sans toucher aux données d’image.',
  sections: [
    {
      heading: 'C2PA et Content Credentials, c’est quoi ?',
      paragraphs: [
        'La Coalition for Content Provenance and Authenticity (C2PA) est un groupement industriel dont font partie Adobe, Microsoft, Google, OpenAI, des fabricants d’appareils photo et des organes de presse. Elle publie un standard technique ouvert pour la provenance des contenus. « Content Credentials » est le nom grand public utilisé dans les applications et sur les sites web, souvent représenté par une petite icône « CR ».',
        'Appareils photo, logiciels de retouche et générateurs d’IA peuvent ajouter un enregistrement signé décrivant comment une image a été produite — capturée par un appareil, modifiée dans une application ou générée par un modèle — et un outil de vérification peut ensuite contrôler si le fichier a changé après la signature.',
      ],
    },
    {
      heading: 'Que contient un manifeste C2PA ?',
      paragraphs: ['Un manifeste est un petit paquet structuré en trois parties principales :'],
      bullets: [
        'Claim generator — l’application ou le service qui a créé le manifeste, par exemple un logiciel de retouche ou un service d’images IA.',
        'Assertions — des déclarations sur le contenu, comme c2pa.actions (created, edited, opened, resized…), un digitalSourceType qui peut déclarer une génération par IA, des vignettes et des références aux fichiers « ingredient » utilisés lors de la retouche.',
        'Signature — une signature cryptographique avec un certificat identifiant le signataire, plus un hash qui lie le manifeste aux données d’image exactes.',
      ],
    },
    {
      heading: 'Où sont stockés les Content Credentials selon le format',
      paragraphs: ['Le manifeste est emballé dans un conteneur JUMBF, et chaque format lui réserve son propre emplacement :'],
      table: {
        head: ['Format', 'Emplacement du manifeste'],
        rows: [
          ['JPEG', 'Segments APP11'],
          ['PNG', 'Chunk caBX'],
          ['WebP', 'Un chunk C2PA dédié dans le conteneur RIFF'],
          ['HEIC, HEIF, AVIF', 'Une boîte uuid'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: 'Qui ajoute des Content Credentials aujourd’hui ?',
      paragraphs: ['L’adoption progresse rapidement. Sources typiques :'],
      bullets: [
        'Les services d’images IA, comme la génération d’images d’OpenAI et Adobe Firefly, qui marquent leurs rendus comme générés par IA.',
        'Les logiciels de retouche comme Photoshop et Lightroom, soit parce que vous avez activé les Content Credentials, soit parce que vous avez utilisé une fonction générative.',
        'Certains appareils photo et smartphones qui signent les photos à la prise de vue pour prouver qu’elles viennent d’un vrai appareil.',
        'Des plateformes et éditeurs de presse qui conservent ou affichent ces informations, par exemple avec un badge « CR ».',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Comment voir les Content Credentials d’une image',
      paragraphs: [],
      steps: [
        'Déposez le fichier dans l’outil en haut de cette page.',
        'Le panneau « IA et provenance » indique si un bloc C2PA est présent, le claim generator, les actions enregistrées et le type de source.',
        'Pour une validation cryptographique complète de la signature, utilisez en plus un outil officiel de vérification des Content Credentials.',
      ],
    },
    {
      heading: 'Comment supprimer les Content Credentials C2PA',
      paragraphs: [
        'Cliquez sur « Supprimer les métadonnées IA » dans l’outil ci-dessus. Le bloc C2PA est découpé au niveau des octets — avec XMP, IPTC et EXIF — et les données d’image sont copiées sans modification. Les fichiers HEIC et AVIF sont nettoyés sur place pour que la structure du fichier reste valide. Le fichier nettoyé est réanalysé pour que vous puissiez confirmer qu’il ne reste aucun manifeste.',
      ],
    },
    {
      heading: 'Ce que fait la suppression d’un manifeste — et ce qu’elle ne fait pas',
      paragraphs: [
        'Supprimer le manifeste intégré efface l’enregistrement de provenance de cette copie du fichier. Toute modification rompt déjà le lien cryptographique — les outils de vérification signalent comme invalide un manifeste qui ne correspond plus à l’image —, le nettoyage retire donc simplement un enregistrement qui, sinon, voyagerait avec le fichier.',
        'Certains systèmes utilisent des Content Credentials « durables » (durable) : un filigrane invisible ou une empreinte qui permet de retrouver le manifeste dans une base en ligne même après la disparition de la copie intégrée. Le nettoyage des métadonnées n’affecte pas ces mécanismes, car ils se trouvent dans les pixels ou dans une base de données distante.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Faut-il garder ou supprimer les Content Credentials ?',
      paragraphs: [
        'Gardez-les quand vous voulez prouver l’origine d’une image — en journalisme, pour de la photographie originale ou quand un client demande la provenance. Envisagez de les retirer d’une copie partagée quand ils révèlent un logiciel, un historique de retouche ou des informations d’identité que vous préférez ne pas publier, ou quand ils déclenchent des étiquettes IA sur des photos à peine retouchées. Inspectez d’abord, puis décidez image par image.',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'Questions sur C2PA et les Content Credentials',
  faq: [
    {
      q: 'Que signifie C2PA ?',
      a: 'Coalition for Content Provenance and Authenticity — le groupement industriel qui maintient le standard ouvert sur lequel reposent les Content Credentials.',
    },
    {
      q: 'C2PA, est-ce la même chose qu’un filigrane invisible ?',
      a: 'Non. C2PA, ce sont des métadonnées stockées à côté des données d’image. Les filigranes invisibles comme SynthID sont intégrés aux pixels et ne sont pas affectés par la suppression des métadonnées.',
    },
    {
      q: 'Les Content Credentials peuvent-ils être falsifiés ?',
      a: 'Un manifeste est signé : toute altération est détectable par les outils de vérification. Mais l’absence de manifeste ne prouve rien, et une signature valide montre seulement qui a signé — pas que le contenu est vrai.',
    },
    {
      q: 'Comment vérifier un manifeste avant de le supprimer ?',
      a: 'Le rapport liste le claim generator, les actions et le type de source. Pour une validation complète de la signature, utilisez un outil officiel de vérification des Content Credentials avant de nettoyer le fichier.',
    },
    {
      q: 'Supprimer C2PA réduit-il la qualité de l’image ?',
      a: 'Non. Le manifeste est un bloc séparé ; les données d’image compressées sont copiées sans modification.',
    },
    {
      q: 'Les réseaux sociaux conservent-ils les Content Credentials ?',
      a: 'Certains les lisent à l’envoi pour appliquer des étiquettes puis les suppriment de la copie publiée ; quelques-uns les affichent. Le comportement varie selon la plateforme et évolue avec le temps.',
    },
  ],
};

export default article;
