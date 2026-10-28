import type { Article } from '../types';

const article: Article = {
  title: 'Quais plataformas rotulam imagens de IA? Instagram, Facebook, TikTok, YouTube e mais',
  summary: [
    'As grandes plataformas mostram cada vez mais rótulos como “Informações de IA” em imagens e vídeos. A maioria lê os mesmos sinais do setor embutidos no arquivo — Content Credentials (C2PA) e metadados IPTC — e os combina com o que os criadores declaram.',
    'Veja como a rotulagem funciona em geral nas grandes plataformas, o que a ativa e o que isso significa para fotos reais que só receberam edições leves.',
  ],
  seoTitle: 'Quais redes rotulam imagens de IA? Instagram, TikTok…',
  description:
    'Como Instagram, Facebook, Threads, TikTok, YouTube, Pinterest e LinkedIn rotulam imagens de IA, que metadados ativam os rótulos e o que isso muda para fotos editadas.',
  answer:
    'Instagram, Facebook e Threads (“Informações de IA”), TikTok, YouTube e Pinterest rotulam conteúdo de IA, e o LinkedIn mostra um ícone de Content Credentials. A maioria dos rótulos automáticos é ativada por Content Credentials (C2PA) ou pelo campo IPTC DigitalSourceType no arquivo enviado, combinados com a declaração do criador. Uma pequena edição generativa pode bastar para rotular uma foto que, no resto, é real.',
  sections: [
    {
      heading: 'Rótulos de IA por plataforma num relance',
      paragraphs: ['As políticas mudam com frequência, mas o panorama geral é este:'],
      table: {
        head: ['Plataforma', 'O que o público vê', 'Principais gatilhos'],
        rows: [
          ['Instagram, Facebook, Threads', 'Rótulo “Informações de IA” (antes “Feito com IA”)', 'C2PA, metadados IPTC, opção do criador'],
          ['TikTok', 'Rótulo “Gerado por IA”', 'Declaração do criador, Content Credentials (C2PA)'],
          ['YouTube', 'Rótulo de conteúdo alterado ou sintético', 'Declaração do criador no upload'],
          ['Pinterest', 'Rótulo de modificado por IA', 'Metadados e classificadores próprios'],
          ['LinkedIn', 'Ícone “CR” de Content Credentials', 'Dados C2PA na imagem'],
        ],
      },
    },
    {
      heading: 'Os sinais em que as plataformas se baseiam',
      paragraphs: ['Os rótulos automáticos geralmente dependem de um pequeno conjunto de sinais compartilhados:'],
      bullets: [
        'Content Credentials (C2PA) que declaram geração ou edição por IA.',
        'O campo IPTC DigitalSourceType, por exemplo trainedAlgorithmicMedia ou compositeWithTrainedAlgorithmicMedia.',
        'Marcas d’água invisíveis de alguns provedores de IA, quando a plataforma tem um detector.',
        'Autodeclaração do criador — uma opção ou caixa de seleção ao postar conteúdo de IA realista.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook e Threads (Meta)',
      paragraphs: [
        'A Meta mostra o rótulo “Informações de IA” (que se chamava “Feito com IA” até 2024) quando detecta sinais de IA padrão do setor ou quando o criador declara conteúdo de IA. Depois que fotógrafos reclamaram que fotos com retoques leves estavam sendo rotuladas, a Meta levou o rótulo do conteúdo editado com IA para o menu do post, enquanto o conteúdo substancialmente gerado recebe um rótulo mais visível.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'O TikTok exige que os criadores rotulem conteúdo realista gerado por IA e afirmou que rotula automaticamente o conteúdo que chega com Content Credentials (C2PA) identificando-o como gerado por IA. Ele também anexa Content Credentials a parte do conteúdo criado com seus próprios efeitos de IA.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'O YouTube pede que os criadores declarem, no upload, conteúdo realista alterado ou sintético e mostra um rótulo ao público, com mais destaque em temas sensíveis. Ele também usa o C2PA para o caso oposto: um indicador de “capturado com uma câmera” para conteúdo com credenciais autênticas de captura.',
      ],
    },
    {
      heading: 'Pinterest e LinkedIn',
      paragraphs: [
        'O Pinterest rotula imagens que identifica como geradas ou modificadas por IA, com base em metadados e em classificadores próprios. O LinkedIn exibe um ícone de Content Credentials em imagens que têm dados C2PA, permitindo que o público inspecione a origem e as edições.',
        'As políticas de todas as plataformas mudam com frequência, então consulte a central de ajuda atual de cada uma antes de contar com qualquer comportamento específico.',
      ],
    },
    {
      heading: 'Por que fotos reais são rotuladas',
      paragraphs: [
        'Uma única edição com ajuda de IA — remover um objeto com uma ferramenta generativa, ampliar o fundo ou usar uma borracha com IA no celular — pode marcar a foto inteira como conteúdo de composição com IA nos metadados. As plataformas leem essa declaração sem avaliar o tamanho da edição.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Como verificar uma foto antes de postar',
      paragraphs: [],
      steps: [
        'Solte no verificador do topo desta página exatamente o arquivo que você pretende enviar.',
        'Veja no painel “IA e procedência” qual campo ativaria um rótulo.',
        'Se o rótulo for indevido, remova os metadados de uma cópia e envie a cópia limpa.',
        'Se a imagem for substancialmente gerada por IA, declare isso — os rótulos existem para manter o público informado.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Perguntas sobre rótulos de IA nas redes sociais',
  faq: [
    {
      q: 'Por que minha foto ganha rótulo de IA se eu só removi um objeto pequeno?',
      a: 'Muitos editores registram edições generativas nos metadados C2PA ou IPTC como “composição com IA” (composite with AI). As plataformas leem essa declaração sem avaliar o tamanho da edição.',
    },
    {
      q: 'As plataformas mantêm os metadados depois que eu posto?',
      a: 'A maioria lê os metadados durante o upload e depois os remove da cópia publicada, então baixar seu próprio post raramente mostra os campos originais.',
    },
    {
      q: 'Uma imagem limpa escapa de todos os rótulos?',
      a: 'Não necessariamente. A limpeza remove os sinais guardados no arquivo, mas as plataformas também podem usar detecção de marca d’água, classificadores ou pedir que você declare conteúdo de IA.',
    },
    {
      q: 'O X (Twitter) rotula imagens de IA?',
      a: 'O X se apoia principalmente na sua política de mídia sintética e manipulada e nas notas da comunidade, e não em um rótulo automático baseado em metadados. Consulte a política atual para mais detalhes.',
    },
    {
      q: 'Sou obrigado a declarar imagens de IA?',
      a: 'A maioria das plataformas exige a declaração de conteúdo realista gerado por IA, principalmente de pessoas ou fatos reais. As regras variam, então confira a política de cada plataforma.',
    },
    {
      q: 'Posso verificar se minha imagem vai ser rotulada?',
      a: 'Sim. Solte-a no verificador: se ele apontar C2PA ou um DigitalSourceType de IA, as plataformas que leem esses sinais provavelmente vão rotulá-la.',
    },
  ],
};

export default article;
