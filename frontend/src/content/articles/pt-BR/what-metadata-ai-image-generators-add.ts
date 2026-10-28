import type { Article } from '../types';

const article: Article = {
  title: 'Que metadados os geradores de imagem com IA adicionam? DALL·E, Firefly, Midjourney, Gemini e Stable Diffusion',
  summary: [
    'Quase todo gerador de imagem com IA deixa rastros no que produz — de Content Credentials assinadas a prompts em texto puro. Saber o que cada ferramenta grava ajuda a proteger seus prompts e a entender por que uma plataforma rotula uma imagem.',
    'Abaixo está um panorama dos metadados que costumam aparecer em imagens dos geradores mais populares e de como ver exatamente o que há nos seus próprios arquivos.',
  ],
  seoTitle: 'Metadados de imagens de IA: o que cada gerador grava',
  description:
    'Os metadados que os geradores de imagem com IA embutem — C2PA, IPTC DigitalSourceType, XMP, prompts e workflows —, ferramenta por ferramenta, e como ver ou removê-los.',
  answer:
    'Serviços de IA online como a geração de imagens do ChatGPT e o Adobe Firefly anexam Content Credentials (C2PA) assinadas; Google e Meta adicionam marcas d’água invisíveis e metadados IPTC; o Midjourney pode incluir o prompt e um tipo de origem de IA; ferramentas locais como Stable Diffusion e ComfyUI guardam o prompt completo, a seed, o modelo e o workflow como texto no PNG. O que é gravado muda entre versões, então inspecione seus arquivos reais.',
  sections: [
    {
      heading: 'Três tipos de rastro de IA',
      paragraphs: ['Os metadados relacionados à IA se dividem em três grupos:'],
      bullets: [
        'Procedência assinada — Content Credentials (C2PA) que citam o gerador e as ações realizadas.',
        'Metadados descritivos — campos IPTC e XMP como DigitalSourceType, CreatorTool ou uma descrição.',
        'Dados de geração — o prompt, a seed, o modelo e as configurações guardados como texto, principalmente por ferramentas locais.',
      ],
    },
    {
      heading: 'Metadados dos geradores de IA num relance',
      paragraphs: [],
      table: {
        head: ['Gerador', 'C2PA', 'IPTC / XMP', 'Prompt no arquivo', 'Marca d’água nos pixels'],
        rows: [
          ['Geração de imagens do ChatGPT, DALL·E', 'Sim', 'Varia', 'Geralmente não', 'Varia'],
          ['Adobe Firefly, recursos generativos do Photoshop', 'Sim', 'Sim', 'Não', 'Varia'],
          ['Google Gemini, Imagen', 'Em alguns produtos', 'Em alguns produtos', 'Não', 'SynthID'],
          ['Meta AI', 'Varia', 'Sim (IPTC)', 'Não', 'Sim'],
          ['Midjourney', 'Varia', 'Sim (tipo de origem)', 'Muitas vezes', 'Não anunciada'],
          ['Stable Diffusion, ComfyUI (locais)', 'Não', 'Raramente', 'Sim, bem detalhado', 'Não, por padrão'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (geração de imagens do ChatGPT e DALL·E)',
      paragraphs: [
        'As imagens criadas com a geração de imagens da OpenAI trazem Content Credentials (C2PA) que identificam a OpenAI como origem, então podem ser reconhecidas por visualizadores e plataformas compatíveis com C2PA. O manifesto pode se perder quando a imagem passa por um print ou é salva de novo por um app que não o preserva.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly e recursos generativos do Photoshop',
      paragraphs: [
        'A Adobe anexa Content Credentials ao conteúdo criado com seus recursos generativos baseados no Firefly, descrevendo-o como gerado ou editado por IA. Por isso, fotos editadas com o Preenchimento generativo ou a Expansão generativa podem trazer uma declaração de composição com IA mesmo que a maior parte da imagem seja uma fotografia real.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini e Imagen) e Meta AI',
      paragraphs: [
        'O Google embute sua marca d’água invisível SynthID nas imagens dos seus modelos generativos e também usa metadados para marcar conteúdo de IA em alguns produtos. A Meta afirmou que as imagens da Meta AI incluem um marcador visível, uma marca d’água invisível e metadados IPTC indicando geração por IA.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Os downloads do Midjourney podem incluir o prompt e um ID de job em campos de descrição ou comentário, junto com um valor IPTC que marca a imagem como gerada por IA. O que aparece depende do formato do download e da versão atual do serviço.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI e outras ferramentas locais',
      paragraphs: [
        'Ferramentas locais não assinam nada, mas muitas vezes guardam as informações mais detalhadas: AUTOMATIC1111 e Forge gravam um chunk de texto “parameters” com o prompt, a seed, o sampler e o modelo, e o ComfyUI incorpora os grafos completos de prompt e workflow em JSON. Essas configurações geralmente podem ser desativadas — mas só para imagens novas.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Como ver o que o seu gerador adicionou',
      paragraphs: ['Os geradores mudam o que gravam a cada nova versão, então o jeito confiável é inspecionar o arquivo real:'],
      steps: [
        'Solte a imagem na ferramenta do topo desta página; ela é analisada localmente.',
        'Confira em “IA e procedência” se há C2PA, tipo de origem, prompts e nomes de ferramentas.',
        'Se não quiser compartilhar esses dados, clique em “Remover metadados de IA” e baixe a cópia limpa.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Perguntas sobre metadados de geradores de IA',
  faq: [
    {
      q: 'Todos os geradores de IA adicionam Content Credentials (C2PA)?',
      a: 'Não. Os grandes serviços online fazem isso cada vez mais, mas muitas ferramentas — principalmente as locais — só gravam metadados em texto ou nada.',
    },
    {
      q: 'Remover metadados também remove marcas d’água invisíveis?',
      a: 'Não. Marcas d’água como o SynthID ficam embutidas nos pixels. A remoção de metadados não altera pixels.',
    },
    {
      q: 'Por que duas imagens da mesma ferramenta têm metadados diferentes?',
      a: 'O formato de exportação, a versão do app, a plataforma de onde você baixou e edições posteriores podem adicionar ou remover campos.',
    },
    {
      q: 'O que significa trainedAlgorithmicMedia?',
      a: 'É o valor do IPTC DigitalSourceType para mídia criada por um modelo de IA generativa. compositeWithTrainedAlgorithmicMedia indica uma imagem real com partes geradas por IA.',
    },
    {
      q: 'Um print de tela mantém os metadados de IA?',
      a: 'Geralmente não. Um print é uma imagem nova, sem os metadados originais, embora marcas d’água nos pixels possam sobreviver.',
    },
    {
      q: 'Posso manter a imagem e remover só o prompt?',
      a: 'Sim. A limpeza remove os blocos de metadados e copia os dados da imagem sem alteração, então a imagem fica idêntica, só que sem o prompt.',
    },
  ],
};

export default article;
