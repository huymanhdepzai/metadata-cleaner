import type { Article } from '../types';

const article: Article = {
  title: 'Remover C2PA (Content Credentials) de imagens — grátis, sem upload',
  seoTitle: 'Remover C2PA e Content Credentials online — grátis',
  summary: [
    'Photoshop, Lightroom, Firefly, a geração de imagens do ChatGPT e algumas câmeras anexam um manifesto C2PA assinado — as Content Credentials — que registra qual app ou modelo de IA criou ou editou uma imagem.',
    'Solte suas imagens na ferramenta desta página para ver o que o manifesto diz e removê-lo de uma cópia com um clique. Os dados da imagem são copiados sem alteração e nada é enviado.',
  ],
  description:
    'Remova Content Credentials (C2PA) de JPG, PNG, WebP, HEIC e AVIF no navegador. Veja o manifesto e apague-o sem perder qualidade. Grátis, sem upload, em lote.',
  answer:
    'Para remover Content Credentials (C2PA), solte a imagem na ferramenta desta página e clique em “Remover metadados de IA”. O manifesto C2PA (APP11 no JPEG, caBX no PNG, chunk C2PA no WebP, caixa uuid no HEIC/AVIF) é cortado junto com XMP, IPTC e EXIF, enquanto os dados da imagem são copiados byte a byte. O arquivo limpo é verificado de novo para você confirmar que não sobrou nenhum manifesto.',
  sections: [
    {
      heading: 'Como remover Content Credentials em três passos',
      paragraphs: [],
      steps: [
        'Solte uma ou mais imagens na ferramenta acima — JPG, PNG, WebP, GIF, HEIC e AVIF são suportados.',
        'Abra “IA e procedência” no relatório para ver se há um manifesto C2PA, qual app o assinou e quais ações ele registra.',
        'Clique em “Remover metadados de IA” e baixe os arquivos limpos um a um ou em um ZIP. O painel de resultado confirma que o C2PA sumiu.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Onde o manifesto C2PA fica guardado',
      paragraphs: ['O manifesto fica em um bloco próprio, separado dos dados da imagem, então pode ser removido sem recodificar:'],
      table: {
        head: ['Formato', 'Bloco C2PA', 'Também removido'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, comentários'],
          ['PNG', 'Chunk caBX', 'Chunks de texto, eXIf, tIME'],
          ['WebP', 'Chunk C2PA', 'EXIF, XMP'],
          ['HEIC, AVIF', 'Caixa uuid', 'Itens Exif e XMP'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por que as pessoas removem Content Credentials',
      paragraphs: [],
      bullets: [
        'Uma foto real recebeu um retoque leve com uma ferramenta generativa e agora ganha um rótulo “Informações de IA” que não merece.',
        'O manifesto revela software, nomes de conta, histórico de edição ou arquivos de origem (ingredients) que você prefere não publicar.',
        'Um cliente ou uma plataforma precisa de arquivos de imagem simples, sem dados de procedência anexados.',
        'Você quer inspecionar o que uma imagem declara antes de decidir se a compartilha como está.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'O que remover o C2PA não faz',
      paragraphs: [
        'Apagar o manifesto remove apenas o registro guardado naquela cópia do arquivo. Isso não remove marcas d’água invisíveis nos pixels, como o SynthID, e não afeta Content Credentials “duráveis” (durable), que um verificador consegue recuperar a partir de uma impressão digital da imagem ou de um repositório online.',
        'Se a imagem foi gerada por IA, as plataformas ainda podem pedir que você declare isso. Siga as regras de cada plataforma — remover metadados não muda a forma como a imagem foi feita.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Evite que novos arquivos recebam Content Credentials',
      paragraphs: [
        'No Photoshop e no Lightroom, as Content Credentials podem ser desativadas nas configurações de exportação, embora alguns recursos generativos as adicionem mesmo assim. Serviços de imagem com IA costumam adicioná-las a tudo o que geram. Para arquivos que você já tem, limpar uma cópia aqui é a solução mais rápida — guarde o original caso precise comprovar a procedência depois.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Perguntas sobre como remover C2PA',
  faq: [
    {
      q: 'Remover o C2PA diminui a qualidade da imagem?',
      a: 'Não. O manifesto é um bloco separado; os dados comprimidos da imagem são copiados sem alteração.',
    },
    {
      q: 'Posso ver as Content Credentials antes de removê-las?',
      a: 'Sim. O painel “IA e procedência” mostra o claim generator, as ações registradas e o tipo de origem, e “Todos os metadados” lista cada campo.',
    },
    {
      q: 'Minhas imagens são enviadas para algum lugar?',
      a: 'Não. Os arquivos são lidos e limpos no seu navegador e nunca saem do seu dispositivo.',
    },
    {
      q: 'O Instagram ou o Facebook ainda vão rotular a imagem?',
      a: 'Rótulos baseados em metadados C2PA ou IPTC perdem a origem, mas as plataformas podem usar outros sinais ou pedir que você mesmo declare conteúdo de IA.',
    },
    {
      q: 'Remove o SynthID ou outras marcas d’água invisíveis?',
      a: 'Não. Elas ficam embutidas nos pixels, e esta ferramenta nunca altera pixels.',
    },
    {
      q: 'Dá para remover o C2PA de muitas imagens de uma vez?',
      a: 'Sim. Solte até 50 imagens por lote e baixe todas em um único arquivo ZIP.',
    },
  ],
};

export default article;
