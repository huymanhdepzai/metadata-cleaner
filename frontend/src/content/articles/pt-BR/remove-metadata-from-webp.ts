import type { Article } from '../types';

const article: Article = {
  title: 'Remover metadados de imagens WebP — EXIF, XMP e C2PA',
  summary: [
    'Imagens WebP podem carregar dados EXIF, XMP e C2PA assim como o JPEG — incluindo campos de procedência de IA adicionados por geradores de imagem e editores.',
    'Solte seus arquivos WebP na ferramenta desta página para inspecioná-los e remover os metadados, mantendo WebP com perdas, sem perdas e animados exatamente como eram.',
  ],
  description:
    'Remova metadados EXIF, XMP e C2PA de imagens WebP no navegador. Mantém imagem, transparência, perfil de cor e animação. Grátis, sem upload, em lote e com ZIP.',
  answer:
    'Para remover os metadados de uma imagem WebP, solte-a na ferramenta desta página e clique em “Remover metadados de IA”. Os chunks EXIF, XMP e C2PA são excluídos do contêiner RIFF, enquanto os dados de imagem VP8/VP8L, a transparência, o perfil de cor ICC e os quadros de animação são copiados sem alteração — então o WebP com perdas não perde mais qualidade e o WebP animado mantém todos os quadros.',
  sections: [
    {
      heading: 'Onde ficam os metadados de um WebP',
      paragraphs: [
        'Arquivos WebP usam um contêiner RIFF formado por chunks. A imagem fica em chunks VP8 (com perdas), VP8L (sem perdas) ou ALPH (transparência); os metadados ficam em chunks separados:',
      ],
      table: {
        head: ['Chunk', 'Função', 'Depois da limpeza'],
        rows: [
          ['VP8, VP8L, ALPH', 'Dados da imagem e transparência', 'Mantidos, byte a byte'],
          ['ICCP', 'Perfil de cor', 'Mantido'],
          ['ANIM, ANMF', 'Configurações e quadros da animação', 'Mantidos'],
          ['EXIF', 'Câmera, data, GPS, orientação', 'Removido (orientação regravada)'],
          ['XMP', 'Histórico de edição, autor, campos de IA', 'Removido'],
          ['C2PA', 'Content Credentials', 'Removido'],
        ],
      },
    },
    {
      heading: 'Como remover metadados de WebP em três passos',
      paragraphs: [],
      steps: [
        'Solte seus arquivos WebP na ferramenta acima.',
        'Confira o relatório para ver os campos EXIF, XMP e de procedência encontrados em cada arquivo.',
        'Clique em “Remover metadados de IA” e baixe as imagens limpas uma a uma ou em um ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'O que é mantido',
      paragraphs: [
        'Os chunks de imagem, a transparência, o perfil de cor ICC e os quadros de animação são copiados sem alteração. Se o arquivo declarava uma orientação, ela é regravada em um chunk EXIF mínimo para a imagem continuar sendo exibida corretamente.',
        'Como nada é decodificado e recodificado, imagens WebP com perdas não perdem mais qualidade, e o WebP animado mantém todos os quadros e o tempo de cada um.',
      ],
    },
    {
      heading: 'Quando os metadados do WebP importam',
      paragraphs: [
        'Muitos sites e ferramentas de IA exportam em WebP por padrão, e os metadados vão junto com o arquivo quando você baixa e compartilha de novo. A limpeza remove dados de localização, do aparelho e de procedência antes de você publicar ou enviar a imagem.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Perguntas sobre como limpar arquivos WebP',
  faq: [
    {
      q: 'Arquivos WebP animados são suportados?',
      a: 'Sim. Os chunks de animação são mantidos, então os quadros e o tempo continuam iguais.',
    },
    {
      q: 'A imagem é recomprimida?',
      a: 'Não. Só os chunks de metadados são removidos; os dados da imagem são copiados byte a byte.',
    },
    {
      q: 'A transparência é preservada?',
      a: 'Sim. Os dados de alfa são mantidos exatamente como estavam.',
    },
    {
      q: 'Posso converter WebP para JPG aqui?',
      a: 'Não. A ferramenta mantém cada arquivo no formato original; ela só remove metadados.',
    },
    {
      q: 'Existe limite de tamanho?',
      a: 'Cada arquivo pode ter até 25 MB e 40 megapixels, e você pode limpar até 50 arquivos por sessão.',
    },
    {
      q: 'Minhas imagens são enviadas?',
      a: 'Não. Os arquivos WebP são processados localmente no seu navegador.',
    },
  ],
};

export default article;
