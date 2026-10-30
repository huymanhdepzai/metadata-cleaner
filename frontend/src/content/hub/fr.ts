import type { GuidesHubContent } from './types';

const fr: GuidesHubContent = {
  more: 'Vous découvrez le sujet ? Commencez par « Données EXIF : c’est quoi ? » pour les bases des métadonnées photo, ou par « Qu’est-ce que C2PA ? » si vos images sont générées ou retouchées par IA. Les guides sont classés selon ce que vous voulez faire : nettoyer un format précis, gérer les labels IA, masquer vos prompts ou protéger votre localisation et votre vie privée.',
  groups: {
    formats: {
      title: 'Supprimer les métadonnées par format et par appareil',
      text: 'Chaque format cache ses métadonnées à un endroit différent : JPEG dans des segments de marqueurs, PNG dans des chunks de texte, HEIC et WebP dans des boîtes et des chunks RIFF. Ces guides montrent ce que stocke chaque format, ce qu’on peut effacer sans risque et comment nettoyer vos fichiers sous Windows, macOS, iPhone et Android, un par un ou par lots.',
    },
    'ai-labels': {
      title: 'Labels IA et Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok et YouTube lisent les manifestes C2PA et les champs IPTC pour décider d’afficher ou non un label IA. Comprenez le fonctionnement des Content Credentials, pourquoi de vraies photos sont signalées, comment vérifier une image vous-même et ce que la suppression des métadonnées peut — ou ne peut pas — faire face aux filigranes invisibles comme SynthID.',
    },
    'ai-prompts': {
      title: 'Métadonnées et prompts des générateurs d’images IA',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion et ComfyUI laissent des traces différentes dans les fichiers qu’ils créent : d’un enregistrement C2PA signé jusqu’à votre prompt complet, la seed et le workflow. Voyez précisément ce que laisse chaque outil et comment partager l’image sans ces données.',
    },
    privacy: {
      title: 'EXIF, GPS et confidentialité des photos',
      text: 'Les photos prises au téléphone contiennent le modèle d’appareil, l’heure de prise de vue et souvent une position GPS précise à quelques mètres. Découvrez ce que contient EXIF, quelles applis et plateformes le suppriment à l’envoi (et lesquelles le conservent), si une capture d’écran suffit et comment retirer la localisation avant de partager.',
    },
  },
};

export default fr;
