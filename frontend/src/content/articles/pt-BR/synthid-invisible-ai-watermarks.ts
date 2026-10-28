import type { Article } from '../types';

const article: Article = {
  title: 'SynthID e marcas d’água invisíveis de IA: o que a limpeza de metadados faz e não faz',
  summary: [
    'Algumas imagens de IA carregam dois tipos de marcador: metadados guardados ao lado da imagem e uma marca d’água invisível embutida nos próprios pixels. O SynthID, do Google, é o exemplo mais conhecido do segundo tipo.',
    'Este guia explica como as marcas d’água invisíveis diferem do C2PA e do EXIF, como elas são detectadas e por que nenhuma ferramenta de metadados honesta consegue removê-las.',
  ],
  seoTitle: 'SynthID e marcas d’água invisíveis de IA: o que são',
  description:
    'O que são o SynthID e outras marcas d’água invisíveis de IA, como diferem dos metadados C2PA, como são detectadas e por que limpadores de metadados não as removem.',
  answer:
    'O SynthID é uma marca d’água invisível que o Google DeepMind embute nos pixels do conteúdo criado pelos modelos de IA do Google. Diferente dos metadados C2PA ou EXIF, ele não é um bloco separado no arquivo, resiste a edições comuns como corte e compressão e só pode ser lido pelas ferramentas de detecção do próprio Google. Limpadores de metadados — incluindo este — não alteram pixels e, por isso, não conseguem removê-lo.',
  sections: [
    {
      heading: 'Duas camadas de procedência de IA',
      paragraphs: [
        'Os metadados — EXIF, XMP, IPTC e C2PA — ficam em blocos separados do arquivo. São fáceis de ler e fáceis de remover sem tocar na imagem. Uma marca d’água invisível é diferente: é um padrão sutil espalhado pelos valores dos pixels, invisível a olho nu, mas reconhecível por um detector.',
      ],
      table: {
        head: ['', 'Metadados (C2PA, IPTC, EXIF)', 'Marca d’água invisível (ex.: SynthID)'],
        rows: [
          ['Onde fica', 'Blocos separados no arquivo', 'Dentro dos valores dos pixels'],
          ['Quem consegue ler', 'Qualquer visualizador de metadados', 'Só o detector do provedor'],
          ['Sobrevive a prints e a salvar de novo', 'Geralmente não', 'Foi projetada para isso'],
          ['Removida por um limpador de metadados', 'Sim', 'Não'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'O que é o SynthID',
      paragraphs: [
        'O SynthID é uma tecnologia de marca d’água desenvolvida pelo Google DeepMind para o conteúdo gerado pelos modelos de IA do Google. Ele embute um sinal imperceptível durante a geração e foi projetado para continuar detectável depois de mudanças comuns como corte, redimensionamento, compressão e ajustes de cor. O Google usa a mesma família de técnicas para imagens, áudio, vídeo e texto.',
      ],
    },
    {
      heading: 'Como verificar se uma imagem tem SynthID',
      paragraphs: [
        'Diferente dos metadados, uma marca d’água não pode ser lida com um visualizador genérico — você precisa do detector do provedor. O Google lançou formas de verificar se um conteúdo contém SynthID, como o SynthID Detector e a verificação dentro dos próprios produtos. Outros provedores usam seus próprios métodos de marca d’água e detecção.',
        'O relatório deste site mostra apenas metadados. Por isso, o veredito “Sem sinais de IA” nunca descarta uma marca d’água nos pixels.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Quais imagens de IA têm marcas d’água invisíveis?',
      paragraphs: [],
      bullets: [
        'Os modelos de imagem do Google, como os usados no Gemini e no Imagen, embutem o SynthID.',
        'A Meta afirmou que as imagens da Meta AI incluem uma marca d’água invisível além dos metadados.',
        'Outros serviços online podem usar suas próprias marcas d’água; as políticas variam e mudam.',
        'Ferramentas locais como o Stable Diffusion geralmente não adicionam marca d’água por padrão.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Por que ferramentas de metadados não removem marcas d’água',
      paragraphs: [
        'Um limpador de metadados sem perdas copia os dados da imagem byte a byte — é justamente isso que garante zero perda de qualidade. Uma marca d’água dentro dos pixels, portanto, continua exatamente onde está. Ferramentas que prometem “remover marcas d’água de IA” ou não funcionam como dizem ou alteram muito a imagem, e tentar burlar a marca d’água de um provedor também pode violar os termos de uso dele.',
      ],
    },
    {
      heading: 'O que isso significa na prática',
      paragraphs: [
        'Limpar metadados é a ferramenta certa para a privacidade e para remover prompts, localizações e dados de procedência que você não quer compartilhar. Isso não torna uma imagem de IA indetectável. Ao publicar conteúdo realista gerado por IA, siga as regras de divulgação da plataforma em que você posta.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
  ],
  faqHeading: 'Perguntas sobre o SynthID e marcas d’água de IA',
  faq: [
    {
      q: 'Esta ferramenta remove o SynthID?',
      a: 'Não. A ferramenta só remove metadados e nunca modifica pixels, então qualquer marca d’água invisível continua na imagem.',
    },
    {
      q: 'Como saber se uma imagem tem SynthID?',
      a: 'Só com as ferramentas de verificação do próprio Google. O relatório de metadados deste site não enxerga marcas d’água dentro dos pixels.',
    },
    {
      q: 'Todas as imagens de IA têm marcas d’água invisíveis?',
      a: 'Não. Alguns provedores aplicam marca d’água no que geram, muitos não, e imagens de ferramentas locais geralmente não têm marca d’água nenhuma.',
    },
    {
      q: 'Um print de tela remove o SynthID?',
      a: 'Ele foi projetado para não ser removido assim. O SynthID foi feito para resistir a transformações comuns como prints, cortes e compressão.',
    },
    {
      q: 'SynthID e Content Credentials são a mesma coisa?',
      a: 'Não. Content Credentials são metadados assinados guardados ao lado da imagem; o SynthID é um sinal dentro dos pixels. Alguns sistemas combinam os dois.',
    },
    {
      q: 'As plataformas conseguem detectar o SynthID?',
      a: 'Só onde têm acesso a um detector compatível. Hoje, a maioria dos rótulos das plataformas se baseia em metadados e na declaração do criador.',
    },
  ],
};

export default article;
