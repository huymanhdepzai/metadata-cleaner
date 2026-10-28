import type { Article } from '../types';

const article: Article = {
  title: 'Remover metadados de fotos HEIC — continua HEIC, sem upload',
  summary: [
    'O iPhone salva as fotos em HEIC, e cada uma registra o modelo do aparelho, o horário da captura e — se a localização estiver ativada — exatamente onde você estava. Fotos editadas também podem trazer dados XMP e C2PA.',
    'A maioria das ferramentas online converte o HEIC para JPEG para limpá-lo, o que recomprime a foto. Esta ferramenta remove os metadados dentro do próprio arquivo HEIC, então ele continua HEIC com os dados originais da imagem.',
  ],
  description:
    'Remova GPS, EXIF, XMP e C2PA de fotos HEIC/HEIF do iPhone no navegador, sem converter para JPEG nem recodificar. Grátis, sem upload, em lote e com ZIP.',
  answer:
    'Para remover os metadados de uma foto HEIC sem convertê-la, solte o arquivo na ferramenta desta página e clique em “Remover metadados de IA”. Os itens Exif e XMP são sobrescritos com dados vazios válidos e as caixas C2PA viram espaço livre, então GPS, aparelho e horário somem enquanto o arquivo continua HEIC com os dados originais da imagem. Nada é enviado.',
  sections: [
    {
      heading: 'O que uma foto HEIC do iPhone contém',
      paragraphs: ['O HEIC usa o mesmo contêiner baseado em caixas (boxes) do MP4. Ao lado da imagem comprimida, normalmente você encontra:'],
      bullets: [
        'Um item Exif — modelo do aparelho, lente, horário da captura, exposição e localização GPS.',
        'Um item XMP — detalhes de edição e, em imagens editadas com IA, campos de procedência.',
        'Caixas uuid — usadas para Content Credentials (C2PA) e alguns dados XMP.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por que o HEIC exige um cuidado especial',
      paragraphs: [
        'Dentro de um arquivo HEIC, um índice (a caixa iloc) aponta para os dados da imagem pela posição absoluta em bytes. Se uma ferramenta simplesmente cortar os metadados, todas as posições depois deles se deslocam e a foto deixa de abrir.',
        'Por isso este limpador trabalha no próprio lugar: ele sobrescreve os itens Exif e XMP com dados vazios válidos e transforma as caixas uuid do C2PA em espaço livre. O tamanho do arquivo continua o mesmo, todos os deslocamentos continuam válidos e os dados da imagem HEVC não são tocados.',
      ],
    },
    {
      heading: 'Como remover metadados de HEIC em três passos',
      paragraphs: [],
      steps: [
        'Abra esta página no iPhone ou no computador e solte ou escolha suas fotos HEIC.',
        'Confira o relatório — o painel de privacidade mostra os dados de localização, horário e aparelho encontrados.',
        'Toque em “Remover metadados de IA” e salve as fotos limpas, ou baixe todas em um ZIP.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'Limpar o HEIC ou converter para JPG?',
      paragraphs: [],
      table: {
        head: ['', 'Limpar no próprio arquivo (esta ferramenta)', 'Converter para JPG antes'],
        rows: [
          ['Formato depois da limpeza', 'HEIC', 'JPEG'],
          ['Qualidade da imagem', 'Inalterada', 'Recomprimida'],
          ['Cores amplas e orientação', 'Mantidas', 'Podem mudar'],
          ['Tamanho do arquivo', 'Igual ao anterior', 'Muitas vezes maior'],
        ],
      },
    },
    {
      heading: 'O que é mantido',
      paragraphs: [
        'As dimensões da imagem, a rotação e o espelhamento, as informações de cor e a própria imagem comprimida são mantidos, então a foto fica e se comporta exatamente como a original. Arquivos HEIF e AVIF, que usam o mesmo contêiner, são limpos do mesmo jeito.',
      ],
    },
    {
      heading: 'Impeça o iPhone de gravar a localização',
      paragraphs: [
        'Para que as fotos novas não tenham GPS, vá em Ajustes › Privacidade e Segurança › Serviços de Localização › Câmera e escolha Nunca. Para compartilhamentos avulsos, toque em Opções na tela de compartilhamento e desative Localização. As fotos existentes mantêm os metadados até você limpá-las.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Perguntas sobre como limpar fotos HEIC',
  faq: [
    {
      q: 'Preciso converter HEIC para JPG antes?',
      a: 'Não. Os arquivos HEIC são limpos diretamente e continuam HEIC, então não há conversão nem perda de qualidade.',
    },
    {
      q: 'Por que o arquivo limpo tem o mesmo tamanho?',
      a: 'Os metadados são apagados no próprio lugar em vez de cortados, porque o HEIC guarda posições absolutas. Os dados somem, mas o espaço que ocupavam continua.',
    },
    {
      q: 'Funciona com Live Photos?',
      a: 'A imagem estática de uma Live Photo é um arquivo HEIC e pode ser limpa. O vídeo curto é um arquivo separado e não é processado aqui.',
    },
    {
      q: 'Dá para fazer isso direto no iPhone?',
      a: 'Sim. Abra a página no Safari, escolha as fotos da sua biblioteca, limpe-as e salve os resultados — sem precisar de app.',
    },
    {
      q: 'HEIF e AVIF também são suportados?',
      a: 'Sim. Eles usam o mesmo contêiner e são limpos no próprio arquivo do mesmo jeito.',
    },
    {
      q: 'Minhas fotos são enviadas?',
      a: 'Não. As fotos são processadas no seu dispositivo e nunca vão para um servidor.',
    },
  ],
};

export default article;
