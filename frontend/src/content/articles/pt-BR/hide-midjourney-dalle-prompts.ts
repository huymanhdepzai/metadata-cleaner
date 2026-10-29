import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remover metadados de imagens do Midjourney e ChatGPT',
  description:
    'Imagens do Midjourney, ChatGPT/DALL·E e Firefly podem levar seu prompt, ID do job e dados de procedência. Veja o que está embutido e remova antes de postar.',
  answer:
    'Imagens baixadas de serviços de IA podem conter seu prompt, um ID de job ou de geração, o nome da ferramenta e Content Credentials (C2PA). Qualquer pessoa consegue ler isso com um visualizador de metadados gratuito. Para esconder seu prompt, abra o arquivo em um verificador de metadados, confirme quais campos existem e remova-os de uma cópia com um limpador sem perdas antes de postar ou enviar a imagem.',
  sections: [
    {
      heading: 'O que os serviços de imagem com IA embutem nos downloads',
      paragraphs: [
        'Os geradores de imagem online adicionam cada vez mais metadados a cada download — em parte por transparência, em parte para seguir padrões de procedência. O que exatamente é gravado depende do serviço, do formato do download e da versão atual, então sempre verifique o arquivo real. Exemplos comuns:',
      ],
      table: {
        head: ['Serviço', 'Metadados típicos', 'O que pode revelar'],
        rows: [
          ['Midjourney', 'Texto de descrição/comentário, IPTC DigitalSourceType', 'Seu prompt, um ID de job, que a imagem foi gerada por IA'],
          ['Geração de imagens do ChatGPT, DALL·E', 'C2PA Content Credentials', 'Que a OpenAI gerou a imagem, as ações registradas'],
          ['Adobe Firefly', 'C2PA Content Credentials, XMP', 'Geração por IA, o app usado, histórico de edição'],
          ['Muitas outras ferramentas', 'XMP CreatorTool, EXIF Software, datas', 'Nome da ferramenta, hora de criação, às vezes IDs ligados à conta'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Por que vale a pena proteger seus prompts',
      paragraphs: [
        'Para ilustradores, designers e prompt engineers, um prompt refinado é conhecimento construído ao longo de muitas tentativas. Qualquer pessoa que baixe sua imagem pode colocá-la em um visualizador de metadados, copiar o prompt e reproduzir seu estilo em minutos.',
        'IDs e dados ligados à conta também podem conectar uma imagem pública à sua conta ou a outras imagens que você gerou. Se você entrega imagens para clientes, prompts embutidos podem expor seu processo e as ferramentas que você usa.',
      ],
    },
    {
      heading: 'Como saber se uma imagem contém o seu prompt',
      paragraphs: [],
      steps: [
        'Solte o arquivo baixado na ferramenta do topo desta página — o processamento é local, então seu prompt nunca é enviado.',
        'Veja no painel “IA e procedência” se há prompts, nomes de geradores e declarações de tipo de origem.',
        'Veja no painel “Detalhes de privacidade” se há autores, descrições, identificadores e datas.',
        'Abra “Todos os metadados e detalhes do arquivo” se quiser ler cada campo na íntegra.',
      ],
    },
    {
      heading: 'Como remover o prompt e os metadados de IA',
      paragraphs: [],
      steps: [
        'Clique em “Remover metadados de IA”. Texto do prompt, IDs e blocos XMP, IPTC, EXIF e C2PA são removidos no nível de bytes.',
        'Confira o painel verde de resultado — o arquivo limpo é analisado de novo para você confirmar que nada ficou para trás.',
        'Baixe a imagem, ou baixe um ZIP se processou um lote.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'O Midjourney sempre inclui o prompt?',
      paragraphs: [
        'Não necessariamente. O que aparece depende de como você baixou (app web, Discord, com ou sem upscale), do formato do arquivo e da versão do serviço — e isso muda com o tempo. A única resposta confiável é inspecionar o arquivo que você tem em mãos. O mesmo vale para outros serviços: duas imagens da mesma ferramenta podem trazer campos diferentes.',
      ],
    },
    {
      heading: 'O que a remoção de metadados não faz',
      paragraphs: [
        'Alguns provedores também adicionam marcas d’água invisíveis nos próprios pixels, como o SynthID do Google. Isso não é metadado, e um limpador sem perdas — que nunca altera pixels — não consegue removê-las. E se você publicar uma imagem de IA realista, as regras da plataforma ainda podem exigir que você declare isso. Remover o prompt protege seu processo; não muda a natureza da imagem.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Perguntas sobre metadados do Midjourney e do DALL·E',
  faq: [
    {
      q: 'Alguém consegue ver meu prompt do Midjourney pela imagem?',
      a: 'Se o prompt estiver guardado nos metadados do arquivo, sim — qualquer visualizador de metadados mostra. Verifique o arquivo e remova os campos antes de compartilhar se quiser manter o prompt em segredo.',
    },
    {
      q: 'O Midjourney sempre embute o prompt?',
      a: 'Depende do formato do download e das configurações atuais do serviço. Inspecione o arquivo para ver exatamente quais campos existem antes de decidir.',
    },
    {
      q: 'Imagens do ChatGPT têm metadados?',
      a: 'As imagens da geração de imagens da OpenAI trazem Content Credentials (C2PA) que identificam a OpenAI como origem. O relatório as lista em “IA e procedência”.',
    },
    {
      q: 'A limpeza remove o SynthID ou outras marcas d’água invisíveis?',
      a: 'Não. Marcas d’água invisíveis fazem parte dos dados de pixels. A ferramenta só remove metadados e nunca altera os pixels.',
    },
    {
      q: 'Remover metadados diminui a qualidade da imagem?',
      a: 'Não. Os blocos de metadados são cortados e os dados comprimidos da imagem são copiados sem alteração.',
    },
    {
      q: 'Posso limpar várias imagens de uma vez?',
      a: 'Sim. Solte até 50 imagens, confira os relatórios e baixe tudo em um único arquivo ZIP.',
    },
  ],
};

export default article;
