import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Enlever l’étiquette « Infos IA » (Made with AI) d’Instagram',
  description:
    'Pourquoi de vraies photos reçoivent l’étiquette « Infos IA » (ex-Made with AI) sur Instagram, Facebook et Threads, quelles métadonnées la déclenchent et comment l’éviter.',
  answer:
    'Instagram, Facebook et Threads affichent l’étiquette « Infos IA » (anciennement « Créé avec l’IA » / Made with AI) quand le fichier publié contient des indices d’IA — le plus souvent des Content Credentials C2PA ou un champ IPTC DigitalSourceType écrit par un logiciel comme Photoshop. Pour corriger une étiquette injustifiée sur une vraie photo, vérifiez ces champs, supprimez-les d’une copie sans réencodage, puis publiez la copie nettoyée.',
  sections: [
    {
      heading: 'Que signifie l’étiquette « Infos IA » ?',
      paragraphs: [
        'Meta affiche « Infos IA » sur les publications Instagram, Facebook et Threads lorsqu’il estime qu’une image ou une vidéo a été créée ou modifiée avec une IA générative. Jusqu’à mi-2024, l’étiquette s’appelait « Créé avec l’IA » (Made with AI) ; Meta l’a renommée après les plaintes de nombreux photographes dont les photos simplement retouchées étaient présentées comme des créations IA.',
        'Aujourd’hui, un contenu que Meta juge en grande partie généré par IA reçoit une étiquette visible, tandis qu’un contenu seulement retouché avec des outils d’IA affiche généralement l’information dans le menu de la publication. Dans les deux cas, l’étiquette a la même origine : des indices détectés dans le fichier ou déclarés par le créateur.',
      ],
    },
    {
      heading: 'Comment Meta détecte l’IA dans une image',
      paragraphs: ['Meta indique s’appuyer sur des indicateurs standards du secteur et sur la déclaration du créateur. En pratique, trois éléments comptent :'],
      bullets: [
        'Les Content Credentials C2PA — un manifeste signé qui indique l’application ayant produit le fichier et les actions effectuées, par exemple « created » ou « edited with generative fill ».',
        'IPTC DigitalSourceType dans les métadonnées XMP — des valeurs comme trainedAlgorithmicMedia (image entièrement générée) ou compositeWithTrainedAlgorithmicMedia (photo comportant des parties générées par IA).',
        'L’autodéclaration — l’option d’étiquette IA que vous pouvez activer au moment de publier, et que Meta demande d’utiliser pour les contenus IA réalistes.',
      ],
      table: {
        head: ['Indice dans le fichier', 'Source habituelle', 'Résultat probable'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'Générateurs d’images IA', 'Étiquette IA bien visible'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Remplissage génératif, Extension générative, gommes IA', 'Étiquette « Infos IA », souvent dans le menu'],
          ['Manifeste C2PA avec actions IA', 'Photoshop, Firefly, services d’IA', 'Étiquette « Infos IA »'],
          ['Aucun champ IA, aucune déclaration', 'Appareil photo, smartphone, retouches sans IA', 'Généralement pas d’étiquette'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Pourquoi de vraies photos sont étiquetées « Créé avec l’IA » par erreur',
      paragraphs: [
        'La plupart des faux positifs viennent du logiciel de retouche, pas de l’appareil photo. Les éditeurs modernes écrivent des données de provenance dès qu’un outil assisté par IA touche l’image — même si la modification ne concerne que quelques pixels :',
      ],
      bullets: [
        'Effacer un petit objet, agrandir un arrière-plan ou redresser un horizon avec les fonctions génératives de Photoshop peut marquer tout le fichier comme composite avec IA.',
        'Exporter avec les Content Credentials activés intègre un manifeste signé qui liste chaque modification enregistrée.',
        'Certaines galeries de smartphone ajoutent des marqueurs de retouche IA après l’utilisation d’une gomme d’objets ou d’une autre retouche générative.',
        'Réenregistrer ou convertir un fichier conserve généralement les métadonnées existantes : l’étiquette peut donc suivre l’image d’application en application.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Trouver le champ qui déclenche l’étiquette',
      paragraphs: ['Avant de modifier quoi que ce soit, vérifiez ce que contient réellement le fichier :'],
      steps: [
        'Déposez le fichier exact que vous comptez publier dans l’outil en haut de cette page. Le traitement a lieu dans votre navigateur : rien n’est envoyé.',
        'Ouvrez le panneau « IA et provenance ». Chaque indice est listé avec sa source, par exemple « C2PA · compositeWithTrainedAlgorithmicMedia » ou « XMP · Iptc4xmpExt › DigitalSourceType ».',
        'Ouvrez « Toutes les métadonnées et détails du fichier » pour voir les valeurs brutes, dont le claim generator (l’application qui a signé le manifeste) et les actions c2pa.* enregistrées.',
        'Si le verdict est « À vérifier », le fichier contient des Content Credentials sans déclaration explicite d’IA. Les plateformes peuvent malgré tout lire le manifeste : examinez-le avant de publier.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Comment enlever l’étiquette « Infos IA » d’une vraie photo',
      paragraphs: [
        'Si l’étiquette décrit mal votre travail, corrigez la cause dans le fichier plutôt que de lutter contre l’étiquette après publication :',
      ],
      steps: [
        'Conservez votre export d’origine en archive — il peut servir de preuve de la façon dont vous avez retouché l’image.',
        'Dans l’outil ci-dessus, cliquez sur « Supprimer les métadonnées IA ». Les blocs C2PA, XMP, IPTC et EXIF sont coupés au niveau des octets ; pixels, dimensions, orientation et profil colorimétrique restent intacts.',
        'Vérifiez le panneau de résultat vert : le fichier nettoyé est réanalysé, ce qui vous permet de confirmer qu’il ne reste aucun champ d’IA ou de provenance.',
        'Publiez la copie nettoyée dans une nouvelle publication. Modifier une publication existante ne relit pas le fichier : une étiquette déjà appliquée reste généralement en place.',
      ],
    },
    {
      heading: 'Pourquoi ne pas simplement faire une capture d’écran ou réenregistrer en JPEG ?',
      paragraphs: [
        'Les captures d’écran et les astuces « Enregistrer pour le web » font aussi disparaître les métadonnées, mais elles recompressent l’image, réduisent la résolution et peuvent décaler les couleurs — à chaque fois. Le nettoyage au niveau des octets retire uniquement les blocs de métadonnées et recopie à l’identique les données d’image compressées : aucune perte de qualité.',
      ],
    },
    {
      heading: 'Si l’étiquette persiste après le nettoyage',
      paragraphs: [
        'Les métadonnées sont la cause la plus fréquente des étiquettes sur les photos retouchées, mais pas la seule. Meta utilise aussi d’autres méthodes de détection et la déclaration du créateur. Si une photo nettoyée reste étiquetée, vérifiez que l’option d’étiquette IA n’était pas activée lors de la publication, et utilisez les outils de signalement de la plateforme si vous estimez que l’étiquette est erronée.',
      ],
    },
    {
      heading: 'Quand garder l’étiquette',
      paragraphs: [
        'Supprimer les métadonnées corrige les étiquettes qui décrivent mal votre travail. Cela ne change pas la nature de l’image. Si une image est entièrement ou en grande partie générée par IA et paraît réaliste, les règles des plateformes exigent en général de le signaler, et l’étiquette aide le public à comprendre ce qu’il voit. Utilisez l’outil pour corriger des erreurs et protéger votre vie privée — pas pour faire passer des images synthétiques pour de vraies photos.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Questions sur l’étiquette « Infos IA »',
  faq: [
    {
      q: '« Créé avec l’IA » et « Infos IA », c’est la même chose ?',
      a: 'Oui. En 2024, Meta a renommé l’étiquette « Créé avec l’IA » (Made with AI) en « Infos IA » et l’a déplacée dans le menu de la publication pour les contenus seulement retouchés avec des outils d’IA.',
    },
    {
      q: 'Supprimer les métadonnées garantit-il la disparition de l’étiquette ?',
      a: 'Non. Cela retire les indices stockés dans le fichier, qui sont la cause la plus fréquente des étiquettes sur les photos retouchées. Les plateformes peuvent toutefois utiliser d’autres méthodes de détection ou vous demander de déclarer un contenu IA.',
    },
    {
      q: 'Peut-on retirer l’étiquette d’une publication déjà en ligne ?',
      a: 'En général, pas en la modifiant. Le fichier est analysé au moment de l’envoi : la solution fiable consiste à nettoyer le fichier et à le publier de nouveau.',
    },
    {
      q: 'La photo sera-t-elle différente après le nettoyage ?',
      a: 'Non. Seuls les blocs de métadonnées sont supprimés ; les données d’image sont copiées octet par octet, et l’orientation ainsi que le profil colorimétrique ICC sont conservés.',
    },
    {
      q: 'Puis-je supprimer uniquement les champs IA et garder les infos de l’appareil photo ?',
      a: 'La version actuelle supprime en une seule étape toutes les métadonnées identifiantes — localisation, appareil, auteur et provenance IA —, ce qui est le réglage le plus sûr pour partager. Dimensions, orientation, couleurs et animation sont toujours conservées.',
    },
    {
      q: 'Est-ce que cela fonctionne aussi pour Facebook et Threads ?',
      a: 'Oui. Instagram, Facebook et Threads utilisent le même système d’étiquetage de Meta : les mêmes champs déclenchent l’étiquette sur les trois.',
    },
  ],
};

export default article;
