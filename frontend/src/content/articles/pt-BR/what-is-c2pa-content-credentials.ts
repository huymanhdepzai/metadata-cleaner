import type { Article } from '../types';

const article: Article = {
  description:
    'O que é C2PA e Content Credentials: o que o manifesto assinado contém, onde fica no JPEG, PNG, WebP e HEIC, como inspecioná-lo e como removê-lo da imagem.',
  answer:
    'C2PA é um padrão aberto para anexar a arquivos de mídia um histórico assinado e à prova de adulteração; o nome usado para o público é Content Credentials. Um manifesto C2PA registra qual app ou modelo de IA criou ou editou uma imagem. Ele fica guardado como um bloco separado no arquivo, então você pode inspecioná-lo — e removê-lo de uma cópia — sem tocar nos dados da imagem.',
  sections: [
    {
      heading: 'O que é C2PA e o que são Content Credentials',
      paragraphs: [
        'A Coalition for Content Provenance and Authenticity (C2PA) é um grupo do setor que reúne membros como Adobe, Microsoft, Google, OpenAI, fabricantes de câmeras e organizações de notícias. Ela publica um padrão técnico aberto de procedência de conteúdo. “Content Credentials” é o nome amigável usado em apps e sites, muitas vezes mostrado como um pequeno ícone “CR”.',
        'Câmeras, softwares de edição e geradores de IA podem adicionar um registro assinado que descreve como a imagem foi feita — capturada por uma câmera, editada em um app ou gerada por um modelo —, e verificadores podem depois conferir se o arquivo mudou após a assinatura.',
      ],
    },
    {
      heading: 'O que tem dentro de um manifesto C2PA',
      paragraphs: ['Um manifesto é um pacote pequeno e estruturado com três partes principais:'],
      bullets: [
        'Claim generator — o app ou serviço que criou o manifesto, por exemplo um editor ou um serviço de imagem com IA.',
        'Asserções (assertions) — declarações sobre o conteúdo, como c2pa.actions (created, edited, opened, resized…), um digitalSourceType que pode declarar geração por IA, miniaturas e referências a arquivos de origem (“ingredient”) usados na edição.',
        'Assinatura — uma assinatura criptográfica com um certificado que identifica quem assinou, mais um hash que vincula o manifesto aos dados exatos da imagem.',
      ],
    },
    {
      heading: 'Onde as Content Credentials ficam em cada formato',
      paragraphs: ['O manifesto é embalado em um contêiner JUMBF, e cada formato tem seu próprio espaço para ele:'],
      table: {
        head: ['Formato', 'Onde o manifesto fica'],
        rows: [
          ['JPEG', 'Segmentos APP11'],
          ['PNG', 'Chunk caBX'],
          ['WebP', 'Um chunk C2PA dedicado no contêiner RIFF'],
          ['HEIC, HEIF, AVIF', 'Uma caixa uuid'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: 'Quem adiciona Content Credentials hoje',
      paragraphs: ['A adoção está crescendo rápido. Fontes comuns incluem:'],
      bullets: [
        'Serviços de imagem com IA, como a geração de imagens da OpenAI e o Adobe Firefly, que marcam o que geram como criado por IA.',
        'Apps de edição como Photoshop e Lightroom, seja porque você ativou as Content Credentials, seja porque usou um recurso generativo.',
        'Algumas câmeras e celulares que assinam as fotos no momento da captura para provar que vieram de um aparelho real.',
        'Plataformas e veículos de notícias que preservam ou exibem as credenciais, por exemplo com um selo “CR”.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Como ver as Content Credentials de uma imagem',
      paragraphs: [],
      steps: [
        'Solte o arquivo na ferramenta do topo desta página.',
        'O painel “IA e procedência” mostra se há um bloco C2PA, o claim generator, as ações registradas e o tipo de origem.',
        'Para validar a assinatura criptograficamente por completo, use também uma ferramenta oficial de verificação de Content Credentials.',
      ],
    },
    {
      heading: 'Como remover C2PA e Content Credentials',
      paragraphs: [
        'Clique em “Remover metadados de IA” na ferramenta acima. O bloco C2PA é cortado no nível de bytes — junto com XMP, IPTC e EXIF — e os dados da imagem são copiados sem alteração. Arquivos HEIC e AVIF são limpos no próprio lugar, para a estrutura do arquivo continuar válida. O arquivo limpo é analisado de novo para você confirmar que não sobrou nenhum manifesto.',
      ],
    },
    {
      heading: 'O que remover um manifesto faz — e o que não faz',
      paragraphs: [
        'Remover o manifesto incorporado apaga o registro de procedência daquela cópia do arquivo. Qualquer edição já quebra o vínculo criptográfico — os verificadores apontam como inválido um manifesto que não corresponde mais à imagem —, então a remoção apenas tira um registro que, de outra forma, viajaria com o arquivo.',
        'Alguns sistemas usam Content Credentials “duráveis” (durable): uma marca d’água invisível ou uma impressão digital que permite a um verificador buscar o manifesto em um repositório online mesmo depois que a cópia incorporada sumiu. A limpeza de metadados não afeta esses mecanismos, porque eles ficam nos pixels ou em um banco de dados remoto.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Vale a pena manter ou remover as Content Credentials?',
      paragraphs: [
        'Mantenha-as quando quiser provar de onde uma imagem veio — no jornalismo, em fotografia original ou quando um cliente pede a procedência. Considere removê-las de uma cópia compartilhada quando revelarem software, histórico de edição ou dados de identidade que você prefere não publicar, ou quando ativarem rótulos de IA em fotos que só receberam edições leves. Inspecione primeiro e decida imagem por imagem.',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'Perguntas sobre C2PA e Content Credentials',
  faq: [
    {
      q: 'O que significa C2PA?',
      a: 'Coalition for Content Provenance and Authenticity (Coalizão para Procedência e Autenticidade de Conteúdo) — o grupo do setor que mantém o padrão aberto por trás das Content Credentials.',
    },
    {
      q: 'C2PA é a mesma coisa que uma marca d’água invisível?',
      a: 'Não. O C2PA é um metadado guardado ao lado dos dados da imagem. Marcas d’água invisíveis como o SynthID ficam embutidas nos pixels e não são afetadas pela remoção de metadados.',
    },
    {
      q: 'Content Credentials podem ser falsificadas?',
      a: 'Um manifesto é assinado, então a adulteração é detectável pelos verificadores. Mas a ausência de manifesto não prova nada, e uma assinatura válida só mostra quem assinou — não que o conteúdo seja verdadeiro.',
    },
    {
      q: 'Como verificar um manifesto antes de removê-lo?',
      a: 'O relatório lista o claim generator, as ações e o tipo de origem. Para validar a assinatura por completo, use uma ferramenta oficial de verificação de Content Credentials antes de limpar o arquivo.',
    },
    {
      q: 'Remover o C2PA diminui a qualidade da imagem?',
      a: 'Não. O manifesto é um bloco separado; os dados comprimidos da imagem são copiados sem alteração.',
    },
    {
      q: 'As redes sociais mantêm as Content Credentials?',
      a: 'Algumas as leem no upload para aplicar rótulos e as removem da cópia publicada; poucas as exibem. O comportamento varia por plataforma e muda com o tempo.',
    },
  ],
};

export default article;
