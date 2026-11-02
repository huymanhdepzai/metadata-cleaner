import type { Article } from '../types';

const article: Article = {
  title: 'Captura de tela remove metadados? O que ela mantém e o que perde',
  seoTitle: 'Captura de tela remove metadados? O que fica',
  summary: [
    'Tirar uma captura de tela é um atalho popular para se livrar dos metadados de uma foto. Ela de fato remove o EXIF, o GPS e o C2PA originais — mas a captura adiciona metadados próprios e perde qualidade.',
    'Veja exatamente o que uma captura remove, o que ela mantém ou adiciona, o que ela nunca consegue remover e uma alternativa mais limpa que mantém a imagem original intacta.',
  ],
  description:
    'A captura de tela remove o EXIF, o GPS e o C2PA originais, mas adiciona metadados próprios, reduz a qualidade e mantém marcas d’água invisíveis.',
  answer:
    'Em grande parte, sim. Uma captura de tela é uma imagem nova, então o EXIF, a localização GPS e as Content Credentials C2PA da foto original não são copiados. Mas a captura recebe metadados próprios, como data e aparelho, fica limitada à resolução da sua tela, e marcas d’água invisíveis e detalhes visíveis na imagem continuam lá. Remover os metadados direto do original evita essas desvantagens.',
  sections: [
    {
      heading: 'O que uma captura de tela remove',
      paragraphs: [
        'Uma captura de tela grava os pixels que sua tela está mostrando em um arquivo novo. Nada dos metadados do arquivo original é levado junto, então isto desaparece:',
      ],
      bullets: [
        'Coordenadas GPS, modelo da câmera, lente e horário original da captura (EXIF).',
        'Autor, direitos autorais e histórico de edição (XMP e IPTC).',
        'Content Credentials C2PA e rótulos IPTC de IA adicionados por geradores de IA ou apps de edição.',
        'Prompts, seeds e workflows guardados em arquivos PNG gerados por IA.',
      ],
    },
    {
      heading: 'O que uma captura de tela adiciona ou mantém',
      paragraphs: [
        'Uma captura de tela não é um arquivo sem metadados. Dependendo do aparelho, ela pode registrar quando foi feita, o aparelho ou sistema operacional, as dimensões da tela e às vezes um comentário “Screenshot”. Em alguns aparelhos, a própria captura também pode receber Content Credentials. Esses campos costumam ser menos sensíveis que a localização GPS original, mas ainda dizem algo sobre você.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'O que uma captura de tela nunca consegue remover',
      paragraphs: [],
      bullets: [
        'Marcas d’água invisíveis como o SynthID do Google, que ficam nos pixels e foram feitas para resistir a capturas de tela.',
        'Tudo o que aparece na imagem: placas de rua, números de casas, rostos, reflexos ou uma paisagem reconhecível podem revelar um local sem nenhum metadado.',
        'Informações mostradas na tela ao redor da imagem, como notificações, o relógio ou o nome da sua conta, se você esquecer de recortar.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Captura de tela vs. limpador de metadados',
      paragraphs: [],
      table: {
        head: ['', 'Captura de tela', 'Limpador de metadados'],
        rows: [
          ['EXIF, GPS e C2PA originais', 'Não copiados', 'Removidos'],
          ['Novos metadados', 'Sim (data, aparelho…)', 'Não'],
          ['Resolução', 'Limitada à sua tela', 'Original'],
          ['Pixels', 'Recapturados, podem ser redimensionados', 'Idênticos'],
          ['Perfil de cor e HDR', 'Muitas vezes alterados', 'Mantidos'],
          ['Lote de 50 fotos', 'Uma por uma', 'Um clique'],
        ],
      },
    },
    {
      heading: 'Por que a captura de tela é um jeito ruim de limpar fotos',
      paragraphs: [
        'A menos que a foto ocupe a tela inteira com zoom de 100%, a captura é uma cópia reduzida. As cores podem mudar quando o sistema converte entre perfis de cor, os realces HDR ficam achatados e cada nova captura ou upload comprime a imagem de novo. Para tudo o que importa — portfólio, fotos de produto, arte com IA —, limpar o arquivo original dá um resultado melhor.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'Um jeito melhor: remover os metadados do original',
      paragraphs: [],
      steps: [
        'Solte as fotos originais no limpador no topo desta página — JPG, PNG, WebP, GIF, HEIC ou AVIF.',
        'Confira o relatório para ver quais dados de localização, pessoais e de IA cada arquivo contém.',
        'Clique em “Remover metadados de IA”. Só os blocos de metadados são removidos; os dados da imagem são copiados byte a byte.',
        'Baixe os arquivos limpos em resolução total, um a um ou em um ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Perguntas sobre capturas de tela e metadados',
  faq: [
    {
      q: 'A captura de tela remove a localização GPS de uma foto?',
      a: 'Sim. As coordenadas GPS originais não são copiadas para a captura. Detalhes visíveis na imagem ainda podem revelar onde ela foi tirada.',
    },
    {
      q: 'Capturas de tela têm metadados próprios?',
      a: 'Sim. Normalmente contêm a data da captura e informações sobre o aparelho ou o software, e às vezes um comentário que as identifica como capturas.',
    },
    {
      q: 'A captura de tela remove as Content Credentials C2PA?',
      a: 'O manifesto original não é copiado. Alguns aparelhos e apps podem adicionar novas Content Credentials à própria captura, então confira o resultado.',
    },
    {
      q: 'A captura de tela remove o SynthID ou outras marcas d’água invisíveis?',
      a: 'Não. Marcas d’água invisíveis fazem parte dos pixels e foram feitas para resistir a capturas, recortes e compressão.',
    },
    {
      q: 'A captura de tela reduz a qualidade da imagem?',
      a: 'Geralmente sim. Ela fica limitada à resolução da tela, pode ser redimensionada e perder o perfil de cor original e as informações HDR.',
    },
    {
      q: 'Qual é o melhor jeito de remover metadados sem perder qualidade?',
      a: 'Remover os metadados do arquivo original com um limpador sem perda. Os dados da imagem continuam idênticos e o arquivo mantém a resolução total.',
    },
  ],
};

export default article;
