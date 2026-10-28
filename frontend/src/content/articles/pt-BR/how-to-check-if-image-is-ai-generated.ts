import type { Article } from '../types';

const article: Article = {
  title: 'Como saber se uma imagem foi feita por IA (metadados, C2PA e mais)',
  summary: [
    'Quer saber se uma foto foi feita por IA? A verificação confiável mais rápida está nos metadados do próprio arquivo: Content Credentials (C2PA), o campo IPTC DigitalSourceType e textos do gerador muitas vezes dizem exatamente qual ferramenta criou a imagem.',
    'Este guia mostra quais sinais procurar, como lê-los com um verificador gratuito no navegador, o que fazer quando não há metadados e por que um resultado “limpo” nunca prova que uma imagem é real.',
  ],
  seoTitle: 'Como saber se uma imagem foi feita por IA (grátis)',
  description:
    'Descubra se uma imagem foi gerada por IA: leia Content Credentials (C2PA), IPTC DigitalSourceType e prompts grátis no navegador e entenda os limites de cada sinal.',
  answer:
    'Para saber se uma imagem foi gerada por IA, inspecione os metadados do arquivo original: Content Credentials (C2PA) que citam um serviço de IA, um IPTC DigitalSourceType igual a trainedAlgorithmicMedia ou prompts embutidos são evidências fortes. Se não houver metadados, use a busca reversa de imagens, o verificador de marca d’água do provedor e o contexto da imagem — mas nenhum teste isolado consegue provar que uma imagem é real.',
  sections: [
    {
      heading: 'Comece pelo arquivo original',
      paragraphs: [
        'Os metadados só sobrevivem no arquivo que saiu do gerador ou da câmera. Prints, cópias salvas de novo e imagens baixadas de redes sociais costumam ser recodificadas, o que remove a maior parte deles ou todos. Se puder, peça o arquivo original — o exportado do app ou enviado “como arquivo”, e não como foto comprimida.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Os sinais nos metadados que denunciam imagens de IA',
      paragraphs: ['Do mais forte para o mais fraco, estes são os sinais que vale verificar:'],
      table: {
        head: ['Sinal', 'Onde fica', 'O que indica'],
        rows: [
          ['Manifesto C2PA de um serviço de IA', 'APP11 (JPEG), caBX (PNG), uuid (HEIC)', 'Declaração assinada de qual ferramenta gerou ou editou a imagem'],
          ['IPTC DigitalSourceType', 'Metadados XMP', 'Origem declarada, por exemplo trainedAlgorithmicMedia'],
          ['Prompts e parâmetros', 'Chunks de texto PNG, EXIF UserComment', 'Gerada por uma ferramenta local como Stable Diffusion ou ComfyUI'],
          ['Nomes de ferramentas', 'XMP CreatorTool, EXIF Software', 'Qual app criou ou salvou o arquivo por último'],
        ],
      },
    },
    {
      heading: 'Sinal 1: Content Credentials (C2PA)',
      paragraphs: [
        'Content Credentials são um registro com assinatura digital anexado por ferramentas compatíveis com o padrão C2PA. O claim generator informa o app ou serviço que produziu a imagem, a lista c2pa.actions registra etapas como “created” ou “edited”, e um valor digitalSourceType pode declarar diretamente a geração por IA.',
        'Como o registro é assinado, os verificadores também conseguem saber se a imagem foi modificada depois da assinatura. Um manifesto de um serviço de IA é a evidência mais forte que os metadados podem oferecer.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Sinal 2: IPTC DigitalSourceType',
      paragraphs: ['Muitos geradores e editores gravam um campo IPTC padrão que descreve como o conteúdo foi feito. Os valores mais comuns:'],
      bullets: [
        'trainedAlgorithmicMedia — criada por um modelo de IA generativa.',
        'compositeWithTrainedAlgorithmicMedia — uma foto real com partes geradas ou substituídas por IA (por exemplo, com o Preenchimento generativo).',
        'algorithmicMedia — criada por um algoritmo sem dados de treinamento, como gráficos procedurais.',
        'digitalCapture — capturada por uma câmera, sem conteúdo generativo declarado.',
      ],
    },
    {
      heading: 'Sinal 3: prompts, parâmetros e nomes de ferramentas',
      paragraphs: [
        'Geradores locais como Stable Diffusion e ComfyUI guardam o prompt, a seed, o modelo e o fluxo de trabalho como texto dentro de arquivos PNG. Outras ferramentas deixam o próprio nome em XMP CreatorTool ou EXIF Software. Qualquer um desses é um sinal claro de envolvimento de IA — e uma pista de como exatamente a imagem foi feita.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Como verificar uma imagem em segundos',
      paragraphs: [],
      steps: [
        'Solte o arquivo na ferramenta do topo desta página. A verificação roda inteiramente no seu navegador; a imagem nunca é enviada.',
        'Leia o veredito no painel “IA e procedência”: “Sinais de IA detectados”, “Requer atenção” (Content Credentials sem declaração explícita de IA) ou “Sem sinais de IA”.',
        'Revise os sinais listados e suas origens e depois abra “Todos os metadados e detalhes do arquivo” para ver os valores brutos.',
      ],
    },
    {
      heading: 'O que fazer quando não há metadados',
      paragraphs: ['A falta de metadados não prova nada, nem para um lado nem para o outro — apps de edição, mensageiros e redes sociais os removem o tempo todo. Outras verificações possíveis:'],
      bullets: [
        'Busca reversa de imagens para achar a cópia mais antiga e o contexto original.',
        'O verificador de marca d’água do próprio provedor — por exemplo, as ferramentas do Google para o SynthID — quando existir.',
        'Inspeção visual: mãos, textos, reflexos, texturas repetidas e iluminação inconsistente são pontos fracos comuns, embora os modelos atuais errem menos.',
        'O contexto: quem postou primeiro, se fontes confiáveis confirmam a cena e se a conta costuma postar conteúdo de IA.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Detectores de imagem de IA são confiáveis?',
      paragraphs: [
        'Detectores de IA baseados em pixels estimam uma probabilidade; eles não provam nada. Os resultados variam entre detectores, pioram depois de compressão ou redimensionamento e podem marcar fotos reais como IA. Trate-os como uma informação entre várias — e dê mais peso à procedência assinada e ao contexto original.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre como identificar imagens de IA',
  faq: [
    {
      q: '“Sem sinais de IA” significa que a foto é real?',
      a: 'Não. Significa apenas que o arquivo não tem metadados de IA. Metadados se perdem ou são removidos com facilidade, então trate um resultado limpo como “desconhecido”, e não como prova de autenticidade.',
    },
    {
      q: 'Posso verificar imagens baixadas do Instagram ou do Facebook?',
      a: 'Pode, mas as plataformas costumam remover os metadados da cópia publicada, então o resultado muitas vezes vem vazio. O rótulo “Informações de IA” da própria plataforma, se aparecer, é um sinal à parte.',
    },
    {
      q: 'Metadados podem ser falsificados?',
      a: 'Campos EXIF e XMP comuns podem ser editados com ferramentas populares. Manifestos C2PA são assinados, então a adulteração é detectável — o que faz deles o sinal mais confiável.',
    },
    {
      q: 'Como saber se uma imagem foi feita com o ChatGPT?',
      a: 'As imagens da geração de imagens da OpenAI trazem Content Credentials (C2PA) que citam a OpenAI. Se o arquivo original ainda os tiver, o relatório os mostra em “IA e procedência”.',
    },
    {
      q: 'Dá para verificar imagens do Midjourney ou do Stable Diffusion?',
      a: 'Sim. Downloads do Midjourney podem conter o prompt e um tipo de origem de IA, e PNGs do Stable Diffusion geralmente têm um chunk “parameters” — ambos são sinalizados no relatório.',
    },
    {
      q: 'O verificador é gratuito e privado?',
      a: 'Sim. É gratuito, não exige conta e analisa o arquivo localmente no seu navegador, sem enviá-lo.',
    },
  ],
};

export default article;
