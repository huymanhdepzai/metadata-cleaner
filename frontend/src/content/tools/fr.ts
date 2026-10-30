import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Outils gratuits pour les métadonnées d’images',
    description:
      'Outils gratuits dans le navigateur pour voir, analyser et supprimer les métadonnées d’images : lecteur EXIF, analyse de confidentialité, taille des métadonnées.',
    intro:
      'Tous les outils fonctionnent dans votre navigateur avec le même moteur : vos images ne sont jamais envoyées et rien n’est recompressé. Choisissez ce dont vous avez besoin : regarder dans une photo, vérifier ce qu’elle révèle ou la nettoyer.',
  },
  cards: {
    cleaner: { name: 'Supprimer les métadonnées', text: 'Supprimez EXIF, GPS, XMP, IPTC, C2PA et prompts d’IA en un clic, sans perte de qualité.', detail: 'Déposez vos images, consultez le rapport, puis téléchargez des copies propres : pixels, orientation et profil colorimétrique restent intacts.' },
    'view-metadata': { name: 'Voir les métadonnées', text: 'Affichez tous les champs cachés d’une photo : appareil, date, GPS, XMP, C2PA et prompts d’IA.', detail: 'Lecture seule : le fichier n’est jamais modifié, idéal pour vérifier des photos reçues ou téléchargées.' },
    'privacy-check': { name: 'Analyse de confidentialité', text: 'Découvrez ce qu’une photo révèle : position sur une carte, données personnelles et heure de prise de vue.', detail: 'Attribue à chaque photo un risque élevé, moyen ou faible et affiche les coordonnées GPS à ouvrir sur une carte.' },
    'metadata-size': { name: 'Taille des métadonnées', text: 'Mesurez combien d’octets de métadonnées contient un fichier et leur niveau de risque.', detail: 'Classe les blocs de métadonnées par taille pour voir si les miniatures, l’XMP ou des prompts intégrés alourdissent le fichier.' },
    'remove-exif': { name: 'Supprimer l’EXIF', text: 'Effacez appareil, date et numéro de série en gardant l’orientation et les couleurs.', detail: 'Fonctionne avec JPG, HEIC, PNG et WebP ; une balise d’orientation minimale est conservée pour que les photos ne pivotent pas.' },
    'remove-gps': { name: 'Supprimer la position GPS', text: 'Retirez les coordonnées GPS des photos de téléphone avant de les partager.', detail: 'Utile avant de publier des photos de votre domicile, de vos enfants ou de votre lieu de travail, ou de les envoyer à des inconnus.' },
    'remove-c2pa': { name: 'Supprimer C2PA', text: 'Retirez les manifestes Content Credentials (C2PA) des JPG, PNG, WebP et HEIC.', detail: 'Supprime le manifeste qui déclenche les labels IA ; les filigranes invisibles dans les pixels, comme SynthID, ne sont pas concernés.' },
    'remove-prompts': { name: 'Supprimer les prompts d’IA', text: 'Supprimez les paramètres Stable Diffusion et workflows ComfyUI des fichiers PNG.', detail: 'Masque prompt, seed, modèle et graphe de nœuds pour que personne ne copie vos réglages de génération.' },
    batch: { name: 'Nettoyage par lot', text: 'Nettoyez jusqu’à 50 images d’un coup et téléchargez-les dans un seul ZIP.', detail: 'Chaque fichier garde son format d’origine ; les fichiers impossibles à traiter sont listés avec la raison.' },
  },
  groups: {
    inspect: { title: 'Vérifiez vos photos', text: 'Voyez ce qu’une image révèle avant de la partager : le fichier est seulement lu, jamais modifié.' },
    remove: { title: 'Supprimer les métadonnées selon le besoin', text: 'Choisissez un format ou une tâche : chaque guide intègre le nettoyeur.' },
  },
  tools: {
    'view-metadata': {
      title: 'Voir les métadonnées d’une image en ligne — EXIF, XMP, C2PA',
      description:
        'Lecteur de métadonnées gratuit : affichez EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) et prompts d’IA des JPG, PNG, WebP et HEIC dans votre navigateur, sans envoi.',
      intro:
        'Déposez une photo pour voir toutes les informations cachées qu’elle contient — appareil et objectif, date de prise de vue, position GPS, logiciel de retouche, Content Credentials et prompts d’IA — regroupées par source. Rien n’est modifié ni envoyé.',
      steps: [
        'Déposez une ou plusieurs images dans le cadre ci-dessus, ou touchez « Choisir des images ».',
        'Ouvrez un fichier pour voir le résumé de confidentialité, les signaux d’IA et la liste complète des champs.',
        'Recherchez dans les champs, puis décidez de garder le fichier tel quel ou d’en supprimer les métadonnées.',
      ],
      faq: [
        {
          q: 'Afficher les métadonnées modifie-t-il mon fichier ?',
          a: 'Non. Le fichier est seulement lu. Pour supprimer les métadonnées, utilisez le nettoyeur : vos images restent chargées, inutile de les ajouter à nouveau.',
        },
        {
          q: 'Quelles métadonnées puis-je voir ?',
          a: 'EXIF (y compris le GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de texte PNG avec prompts ou workflows ComfyUI, et les blocs de la structure du fichier.',
        },
        {
          q: 'Mes photos sont-elles envoyées ?',
          a: 'Non. Votre navigateur lit les fichiers, qui ne quittent jamais votre appareil.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Ce que révèle chaque groupe de métadonnées',
            text: 'Le visualiseur classe chaque champ selon l’endroit où il est stocké dans le fichier. Chaque groupe est écrit par un programme différent, dans un but différent : connaître la source aide à juger du degré de confiance à accorder à une valeur et de sa sensibilité.',
            items: [
              { term: 'EXIF', text: 'Écrit par l’appareil photo ou le smartphone : marque et modèle, objectif, exposition, date de prise de vue et fuseau horaire. On peut aussi y trouver le nom du propriétaire, le numéro de série du boîtier et une MakerNote contenant des données propres au fabricant.' },
              { term: 'EXIF · GPS', text: 'Latitude et longitude, souvent précises à quelques mètres, ainsi que l’altitude et parfois la direction vers laquelle pointait l’appareil. C’est le champ que la plupart des gens veulent vérifier avant de partager.' },
              { term: 'XMP', text: 'Ajouté par les logiciels de retouche comme Lightroom ou Photoshop : outil utilisé, historique des modifications, notes et mots-clés. Les outils d’IA utilisent aussi XMP pour déclarer qu’une image a été générée.' },
              { term: 'IPTC', text: 'Légendes, auteur, ligne de crédit et mention de copyright, surtout utilisés par les agences de presse et les banques d’images.' },
              { term: 'C2PA', text: 'Content Credentials : un manifeste signé qui indique quelle application ou quel modèle d’IA a créé l’image et quelles modifications ont été faites. Les plateformes le lisent pour afficher les étiquettes « Infos IA ».' },
              { term: 'PNG text', text: 'Des blocs de texte libre. Stable Diffusion y enregistre le prompt, la seed et le modèle ; ComfyUI y stocke le workflow complet des nœuds au format JSON.' },
              { term: 'ICC', text: 'Le profil colorimétrique. Il ne contient aucune donnée personnelle et sert à afficher correctement les couleurs.' },
            ],
          },
          {
            title: 'Comment lire le rapport',
            text: 'Chaque fichier s’ouvre sur un résumé de confidentialité qui liste les champs de localisation, personnels et horaires trouvés. Juste en dessous, la section IA donne l’un de trois verdicts : « Indices d’IA détectés » lorsque les métadonnées citent un outil d’IA, contiennent un prompt ou déclarent une génération par IA ; « À vérifier » lorsque des Content Credentials sont présents sans mention explicite de l’IA ; et « Aucun indice d’IA » lorsque rien n’a été trouvé. Le tableau complet vient en dernier. Utilisez la recherche pour aller droit à l’essentiel : taper « GPS », « Serial », « Software » ou « prompt » est souvent bien plus rapide que de faire défiler une centaine de champs.',
          },
          {
            title: 'Quand vérifier les métadonnées',
            text: 'Regardez à l’intérieur d’une photo avant de la publier ou de l’envoyer à un inconnu, quand un vendeur de petites annonces ou un inconnu vous envoie une image, quand une plateforme étiquette une vraie photo comme IA et que vous voulez comprendre pourquoi, et après un nettoyage pour confirmer qu’il ne reste rien : il suffit de déposer la copie nettoyée dans le visualiseur. Gardez en tête que n’importe qui peut modifier ou effacer des métadonnées : c’est un indice, pas une preuve.',
          },
        ],
        faq: [
          {
            q: 'Les métadonnées peuvent-elles prouver quand ou où une photo a été prise ?',
            a: 'Pas à elles seules. Les dates et les coordonnées GPS de l’EXIF se modifient avec des outils gratuits. Les manifestes C2PA sont signés et plus difficiles à falsifier, mais faciles à supprimer : l’absence de manifeste ne prouve donc rien non plus.',
          },
          {
            q: 'Pourquoi ma photo n’affiche-t-elle presque aucune métadonnée ?',
            a: 'La plupart des réseaux sociaux et des messageries suppriment l’EXIF à l’envoi, et les captures d’écran n’ont jamais contenu de données d’appareil. Un fichier téléchargé depuis ces plateformes est généralement déjà nettoyé.',
          },
          {
            q: 'Quels formats puis-je inspecter ?',
            a: 'Les photos JPG, PNG, WebP et HEIC/HEIF, y compris celles de l’iPhone. Vous pouvez déposer plusieurs fichiers à la fois et ouvrir le rapport de chacun séparément.',
          },
        ],
      },
    },
    'privacy-check': {
      title: 'Analyse de confidentialité photo — GPS et données personnelles',
      description:
        'Vérifiez ce qu’une photo révèle avant de la partager : position GPS à ouvrir sur une carte, auteur, heure de prise de vue et données d’IA. Gratuit, sans envoi.',
      intro:
        'Découvrez ce qu’une photo dévoile avant de la publier. L’analyse indique si elle contient une position GPS (et où elle pointe), des données personnelles comme l’auteur ou le numéro de série de l’appareil, l’heure de prise de vue et des données de provenance IA, avec un niveau de risque simple.',
      steps: [
        'Déposez dans le cadre ci-dessus les photos que vous comptez partager.',
        'Lisez le niveau de risque et les informations de lieu, personnelles et horaires trouvées dans chaque fichier.',
        'Si une position GPS est trouvée, ouvrez-la sur la carte pour voir exactement ce que d’autres pourraient voir, puis supprimez-la.',
      ],
      faq: [
        {
          q: 'Comment le niveau de risque est-il déterminé ?',
          a: 'Élevé signifie que la photo contient une position. Moyen, qu’elle contient des données personnelles, horaires ou d’IA sans position. Faible, que rien de tout cela n’a été trouvé dans les métadonnées.',
        },
        {
          q: 'La carte se charge-t-elle automatiquement ?',
          a: 'Non. Les coordonnées s’affichent en texte. OpenStreetMap s’ouvre dans un nouvel onglet uniquement si vous cliquez sur le bouton ; sinon, la position ne quitte jamais votre appareil.',
        },
        {
          q: 'Une photo peut-elle révéler ma position sans GPS ?',
          a: 'Les métadonnées ne sont qu’une source. Ce qui est visible sur l’image — panneaux, monuments, reflets — peut aussi révéler un lieu, et cette analyse ne peut pas le détecter.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Ce que l’analyse recherche',
            text: 'L’analyse range les métadonnées trouvées en quatre types d’exposition. Chacun répond à une question différente que quelqu’un pourrait se poser sur vous à partir d’un seul fichier.',
            items: [
              { term: 'Localisation', text: 'Latitude, longitude et altitude GPS. Une photo prise chez vous avec un téléphone peut mener jusqu’à votre porte : c’est pourquoi toute localisation place le résultat en risque élevé.' },
              { term: 'Personnel et appareil', text: 'Marque et modèle de l’appareil, champs auteur et copyright, nom du propriétaire, numéro de série du boîtier, identifiant unique de l’image, commentaires et données MakerNote du fabricant. Un numéro de série peut relier à un même appareil des photos publiées depuis des comptes différents.' },
              { term: 'Date et heure', text: 'Date de prise de vue d’origine, fractions de seconde et fuseau horaire. Ensemble, ils montrent quand vous étiez quelque part et, approximativement, dans quelle région du monde vous vivez.' },
              { term: 'IA et provenance', text: 'Content Credentials, noms d’outils d’IA et prompts de génération. Ce ne sont pas des données personnelles au sens habituel, mais elles révèlent comment l’image a été faite et peuvent déclencher des étiquettes IA.' },
            ],
          },
          {
            title: 'Que faire selon le niveau de risque',
            text: 'Élevé : la photo contient une localisation. Supprimez-la avant tout partage public et, si vous voulez voir sa précision, ouvrez d’abord la carte. Moyen : pas de localisation, mais le fichier contient des données d’appareil, personnelles, horaires ou d’IA ; aucun souci pour des proches, mais un nettoyage s’impose avant une publication ou un envoi à des inconnus. Faible : aucune métadonnée sensible n’a été trouvée, le fichier lui-même ne vous trahit donc pas ; ce que montre l’image, peut-être encore.',
          },
          {
            title: 'Là où les métadonnées survivent au partage',
            text: 'Beaucoup de grands réseaux sociaux suppriment le GPS à la publication, mais bien d’autres canaux non : pièces jointes d’e-mails, stockage en ligne et liens de partage de fichiers, AirDrop et Nearby Share, photos envoyées « en tant que fichier » ou « en tant que document » dans les messageries, forums et petits sites web. Si vous ne savez pas par où une photo va passer, vérifiez-la ici et nettoyez-la avant qu’elle ne quitte votre appareil.',
          },
        ],
        faq: [
          {
            q: 'Comment empêcher mon téléphone d’ajouter la localisation aux photos ?',
            a: 'Sur iPhone, allez dans Réglages → Confidentialité et sécurité → Service de localisation → Appareil photo et choisissez Jamais. Sur Android, ouvrez les réglages de l’appli appareil photo et désactivez les balises de localisation (le nom varie selon la marque). Les photos déjà prises gardent leur localisation tant que vous ne la supprimez pas.',
          },
          {
            q: 'Un risque faible signifie-t-il que la photo peut être partagée sans danger ?',
            a: 'Cela signifie que les métadonnées sont propres. Des visages, un numéro de rue, une plaque d’immatriculation, des documents sur un bureau ou un reflet dans une vitre peuvent en révéler plus que prévu : jetez aussi un œil à l’image elle-même.',
          },
          {
            q: 'Puis-je vérifier des photos que l’on m’a envoyées ?',
            a: 'Oui. L’analyse se contente de lire le fichier : c’est un moyen rapide de savoir si une photo reçue contient encore une localisation ou des données d’appareil, par exemple avant de la transférer.',
          },
        ],
      },
    },
    'metadata-size': {
      title: 'Taille des métadonnées — combien de métadonnées dans une photo ?',
      description:
        'Mesurez la quantité de métadonnées d’une image : total en octets, part du fichier, plus gros blocs EXIF, XMP, C2PA ou de prompts et niveau de risque. Gratuit, sans envoi.',
      intro:
        'Voyez quelle part d’un fichier est constituée de métadonnées plutôt que d’image. L’outil liste chaque bloc de métadonnées par taille — EXIF, XMP, C2PA, aperçus intégrés, prompts et workflows d’IA —, indique sa part du fichier et évalue le risque pour la vie privée.',
      steps: [
        'Déposez une ou plusieurs images dans le cadre ci-dessus.',
        'Comparez la taille des métadonnées et leur part dans chaque fichier, bloc par bloc.',
        'Supprimez les métadonnées pour des fichiers plus légers et plus sûrs à partager.',
      ],
      faq: [
        {
          q: 'Pourquoi certains fichiers contiennent-ils autant de métadonnées ?',
          a: 'Les aperçus intégrés, les manifestes C2PA avec vignettes et les workflows ComfyUI peuvent ajouter des dizaines ou des centaines de kilo-octets, alors que l’EXIF de base ne pèse souvent que quelques ko.',
        },
        {
          q: 'Pourquoi le profil de couleur est-il marqué comme conservé ?',
          a: 'Le profil ICC est nécessaire pour afficher correctement les couleurs ; le nettoyeur le conserve donc. Il n’est pas compté dans le total des métadonnées.',
        },
        {
          q: 'Supprimer les métadonnées modifie-t-il l’image ?',
          a: 'Non. Seuls les blocs de métadonnées sont supprimés ; les données de l’image sont copiées telles quelles, le fichier s’allège sans perte de qualité.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Ce qui prend généralement de la place',
            text: 'La taille des métadonnées varie bien plus qu’on ne l’imagine. Un bloc EXIF ordinaire est minuscule, alors qu’un seul aperçu ou workflow intégré peut peser plus que l’image d’un petit visuel web. Voici les blocs que l’outil trouve le plus souvent, du plus petit au plus gros :',
            items: [
              { term: 'Profil ICC', text: 'De quelques centaines d’octets à quelques kilo-octets. Indiqué comme conservé, car les couleurs en dépendent.' },
              { term: 'EXIF', text: 'En général quelques kilo-octets de réglages, de dates et de GPS, plus une miniature EXIF qui ajoute souvent 5 à 20 Ko.' },
              { term: 'XMP', text: 'Moins d’un kilo-octet pour un fichier simple, mais Photoshop et Lightroom peuvent écrire des historiques de modification et des listes de documents qui atteignent des centaines de kilo-octets.' },
              { term: 'Manifeste C2PA', text: 'Souvent des dizaines de kilo-octets : certificats, signatures et parfois miniatures des images sources.' },
              { term: 'Prompts et workflows PNG', text: 'Les paramètres Stable Diffusion occupent un ou deux kilo-octets ; un workflow ComfyUI comptant beaucoup de nœuds peut atteindre des dizaines ou des centaines de kilo-octets.' },
              { term: 'Données après l’image', text: 'Certains téléphones ajoutent des données à la fin des JPG : images secondaires MPF, aperçus plus grands ou la courte vidéo d’une Motion Photo, ce qui peut représenter plusieurs mégaoctets.' },
            ],
          },
          {
            title: 'Pourquoi la taille des métadonnées compte',
            text: 'Sur un site web, chaque kilo-octet est multiplié par chaque visiteur et chaque image de la page : retirer quelques dizaines de kilo-octets par image finit par compter, et contrairement à une recompression, cela ne coûte rien en qualité. La taille est aussi un indice de confidentialité : les plus gros blocs sont souvent les plus révélateurs, comme un historique complet de retouches, un workflow de génération ou une seconde image cachée. Pour des archives de milliers de photos, le gain se voit aussi sur le stockage.',
          },
          {
            title: 'Comment lire le résultat',
            text: 'L’en-tête affiche le total des métadonnées qui seraient supprimées et leur part dans le fichier ; la barre en dessous rend cette part visible d’un coup d’œil. Chaque bloc est ensuite listé du plus gros au plus petit avec sa propre barre, pour que les valeurs anormales sautent aux yeux. Le profil colorimétrique apparaît en vert comme conservé et n’est pas compté dans le total. Quelques pour cent est habituel pour de grandes photos d’appareil, alors que les petits PNG et les images d’IA atteignent souvent des valeurs bien plus élevées.',
          },
        ],
        faq: [
          {
            q: 'De combien mon fichier va-t-il diminuer ?',
            a: 'D’environ le total de métadonnées affiché. Le nettoyeur supprime ces blocs et copie les données d’image telles quelles : le fichier nettoyé pèse donc la taille d’origine moins les métadonnées retirées.',
          },
          {
            q: 'Supprimer les métadonnées remplace-t-il la compression d’image ?',
            a: 'Non. Cela retire seulement ce qui ne fait pas partie de l’image. Pour réduire fortement une photo, il faut toujours la redimensionner ou la recompresser, ce qui modifie les pixels ; supprimer les métadonnées est l’étape gratuite à faire d’abord, sans aucune perte de qualité.',
          },
          {
            q: 'Pourquoi une petite image d’IA affiche-t-elle une part de métadonnées élevée ?',
            a: 'Les générateurs et les logiciels de retouche ajoutent les mêmes prompts, workflows ou Content Credentials quelle que soit la taille de l’image : sur un petit fichier, ils peuvent donc représenter une grande partie du total.',
          },
        ],
      },
    },
  },
};

export default tools;
