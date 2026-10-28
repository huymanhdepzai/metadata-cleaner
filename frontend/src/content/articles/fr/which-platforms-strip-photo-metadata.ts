import type { Article } from '../types';

const article: Article = {
  title: 'Quels réseaux sociaux et applications suppriment les métadonnées des photos ? (Et quand votre GPS fuit encore)',
  summary: [
    'Beaucoup pensent que les réseaux sociaux suppriment la localisation des photos. C’est souvent vrai — pour la copie publiée. Mais le fichier original peut toujours circuler avec tout son EXIF via les messageries, les e-mails, les liens cloud et les sites de partage de fichiers.',
    'Ce guide explique quels modes de partage conservent ou suppriment généralement les métadonnées, comment tester vous-même n’importe quelle application, et la seule habitude fiable : nettoyer le fichier avant qu’il ne quitte votre appareil.',
  ],
  seoTitle: 'Quelles applis suppriment les métadonnées des photos ?',
  description:
    'Quels réseaux sociaux et messageries suppriment les métadonnées des photos, quels modes de partage gardent le GPS et l’EXIF, et comment envoyer des photos propres.',
  answer:
    'Les grands réseaux sociaux comme Facebook, Instagram et X suppriment généralement l’EXIF — GPS compris — des photos qu’ils publient, et beaucoup de messageries font de même pour les images compressées. Les photos envoyées en tant que fichier ou document, les pièces jointes d’e-mails, les liens cloud, AirDrop et de nombreux forums ou places de marché conservent les métadonnées d’origine. La solution fiable : supprimer vous-même les métadonnées avant de partager.',
  sections: [
    {
      heading: 'Copie publiée ou fichier original',
      paragraphs: [
        'Quand vous publiez une photo dans un fil, la plupart des grandes plateformes la réencodent et suppriment l’EXIF de la copie publique. Le public ne voit donc pas votre position GPS, mais la plateforme reçoit tout de même l’original lors de l’envoi. Le risque principal se trouve partout où le fichier original est transmis sans modification.',
      ],
    },
    {
      heading: 'Les métadonnées sont-elles conservées ? Modes de partage courants',
      paragraphs: ['Comportement habituel — vérifiez toujours avec votre propre version de l’application :'],
      table: {
        head: ['Mode de partage', 'GPS et EXIF', 'Remarques'],
        rows: [
          ['Publications Facebook, Instagram, X', 'Généralement supprimés', 'La plateforme reçoit tout de même l’original à l’envoi'],
          ['Messageries, envoi comme photo', 'Généralement supprimés', 'L’image est aussi compressée'],
          ['Messageries, envoi comme fichier ou document', 'Conservés', 'WhatsApp et Telegram transmettent le fichier original'],
          ['Pièces jointes d’e-mails', 'Conservés', 'Le fichier est envoyé tel quel'],
          ['Liens cloud (Drive, Dropbox, iCloud)', 'Conservés', 'Toute personne disposant du lien obtient l’original'],
          ['AirDrop, Bluetooth, USB', 'Conservés', 'L’iPhone peut exclure la localisation via les Options de partage'],
          ['Forums, places de marché, sites de portfolio', 'Souvent conservés', 'Dépend du réencodage ou non des fichiers envoyés'],
        ],
      },
    },
    {
      heading: 'Messageries : envoyer en photo ou en fichier',
      paragraphs: [
        'La plupart des messageries proposent deux façons d’envoyer une image. En photo classique, elle est compressée et la plupart des métadonnées sont supprimées. En fichier ou document — souvent choisi pour garder la pleine qualité —, l’original est transmis avec tous ses champs EXIF, GPS compris. Beaucoup passent à « envoyer en tant que fichier » pour la qualité sans se rendre compte qu’ils envoient aussi leur position.',
      ],
    },
    {
      heading: 'Les plateformes qui affichent volontairement l’EXIF',
      paragraphs: [
        'Certaines communautés de photographes et sites de portfolio affichent les réglages de prise de vue à côté de chaque photo, et certains laissent le fichier original disponible au téléchargement. Si vous y publiez, considérez que vos métadonnées sont publiques sauf si vous les nettoyez d’abord.',
      ],
    },
    {
      heading: 'Tester vous-même n’importe quelle application',
      paragraphs: ['Les applications modifient régulièrement leur traitement des médias. Pour en avoir le cœur net :'],
      steps: [
        'Prenez une photo de test avec la localisation activée.',
        'Envoyez-la-vous de la façon dont vous partagez habituellement vos photos.',
        'Téléchargez le fichier reçu et déposez-le dans l’outil en haut de cette page.',
        'Le panneau « Confidentialité » indique immédiatement si des données de localisation, personnelles ou horaires ont survécu.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Nettoyez avant de partager',
      paragraphs: [
        'L’habitude la plus sûre consiste à supprimer les métadonnées avant qu’une photo ne quitte votre appareil. Cet outil supprime les champs GPS, date, appareil et auteur ainsi que les aperçus cachés, conserve orientation et couleurs, et traite tout localement — idéal pour les photos envoyées à des inconnus, des acheteurs ou des clients.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Questions sur les plateformes et les métadonnées photo',
  faq: [
    {
      q: 'WhatsApp supprime-t-il le GPS des photos ?',
      a: 'Les photos envoyées comme images classiques sont compressées et perdent la plupart de leurs métadonnées. Les photos envoyées comme documents conservent le fichier original, GPS compris.',
    },
    {
      q: 'Instagram conserve-t-il la localisation de ma photo ?',
      a: 'L’EXIF est supprimé de l’image publiée. Un lieu que vous ajoutez à la publication est distinct et visible par le public.',
    },
    {
      q: 'L’e-mail supprime-t-il les métadonnées des photos ?',
      a: 'Non. Les pièces jointes sont envoyées telles quelles : le GPS et les autres champs EXIF restent dans le fichier, sauf si votre application le redimensionne.',
    },
    {
      q: 'Google Drive ou iCloud suppriment-ils les métadonnées des photos partagées ?',
      a: 'Les liens de partage donnent normalement accès au fichier original, métadonnées comprises. Nettoyez la photo avant de l’envoyer si vous comptez la partager.',
    },
    {
      q: 'Une capture d’écran est-elle un bon moyen de supprimer les métadonnées ?',
      a: 'Elle supprime l’EXIF mais réduit la qualité, change les dimensions et peut capturer d’autres éléments de votre écran. Le nettoyage sans perte garde l’image d’origine intacte.',
    },
    {
      q: 'Si une plateforme supprime les métadonnées, ma position est-elle protégée ?',
      a: 'Vis-à-vis du public, en grande partie — mais la plateforme a reçu le fichier original, et le contenu visible de la photo peut toujours révéler où elle a été prise.',
    },
  ],
};

export default article;
