import type { Article } from '../types';

const article: Article = {
  title: 'Remover metadados de JPG online — sem perdas e sem upload',
  summary: [
    'Todo JPG de câmera, celular ou gerador de IA pode carregar EXIF (câmera, data, GPS), XMP, IPTC e Content Credentials (C2PA). Solte seus arquivos JPG na ferramenta desta página para ver exatamente o que há dentro e remover tudo com um clique.',
    'O limpador corta os segmentos de metadados no nível de bytes, então os dados comprimidos da imagem são copiados sem alteração — sem salvar de novo, sem perda de qualidade e sem enviar nada.',
  ],
  description:
    'Remova metadados EXIF, GPS, XMP, IPTC e C2PA de arquivos JPG/JPEG no navegador. Sem perdas: a imagem é copiada byte a byte. Grátis, sem upload, em lote e com ZIP.',
  answer:
    'Para remover os metadados de um JPG online sem perder qualidade, solte o arquivo na ferramenta desta página e clique em “Remover metadados de IA”. EXIF (incluindo GPS), XMP, IPTC, C2PA e comentários são cortados no nível de bytes, enquanto os dados comprimidos da imagem são copiados sem alteração, então a foto fica idêntica. Tudo roda no seu navegador — o arquivo nunca é enviado.',
  sections: [
    {
      heading: 'O que um arquivo JPG pode esconder',
      paragraphs: ['Um JPEG é uma sequência de segmentos de marcador. Além da imagem em si, ele costuma conter:'],
      table: {
        head: ['Segmento', 'O que pode conter'],
        rows: [
          ['APP1 EXIF', 'Modelo da câmera ou do celular, horário da captura, exposição, coordenadas GPS, uma miniatura incorporada'],
          ['APP1 XMP', 'Histórico de edição, autor, palavras-chave, campos de IA como o IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Legendas, créditos, avisos de direitos autorais'],
          ['APP11 JUMBF', 'Content Credentials (C2PA) — um registro assinado de como a imagem foi feita'],
          ['COM, APP2 MPF, dados após o EOI', 'Comentários, prévias, a parte em vídeo das fotos com movimento'],
        ],
      },
      related: ['what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Como remover metadados de um JPG em três passos',
      paragraphs: [],
      steps: [
        'Solte um ou mais arquivos JPG na ferramenta acima ou toque em “Escolher imagens”.',
        'Leia o relatório: detalhes de privacidade, sinais de IA e procedência e a lista completa de metadados encontrados em cada arquivo.',
        'Clique em “Remover metadados de IA” e baixe cada arquivo ou tudo em um único ZIP. O arquivo limpo é analisado de novo para você confirmar que não sobrou nada que identifique.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Por que “sem perdas” importa no JPG',
      paragraphs: [
        'O JPEG é um formato com perdas: toda vez que uma imagem é decodificada e salva de novo, ela é recomprimida e perde um pouco de detalhe. Muitas ferramentas de “remover metadados” funcionam redesenhando a foto e exportando um JPEG novo, o que apaga os metadados, mas também reduz a qualidade e pode mudar as cores.',
        'Esta ferramenta nunca decodifica a imagem. Ela remove os segmentos de metadados e copia os dados comprimidos da imagem exatamente como estavam, então a foto fica idêntica e o arquivo normalmente fica menor.',
      ],
      table: {
        head: ['Método', 'Remove metadados', 'Qualidade', 'Mantém o perfil de cor'],
        rows: [
          ['Limpeza no nível de bytes (esta ferramenta)', 'Sim', 'Inalterada', 'Sim'],
          ['Salvar de novo ou redesenhar em canvas', 'Sim', 'Recomprimida', 'Muitas vezes não'],
          ['Print de tela', 'Sim', 'Menor, redimensionada', 'Não'],
        ],
      },
    },
    {
      heading: 'O que é mantido no JPG limpo',
      paragraphs: [
        'Remover tudo às cegas pode estragar a forma como a foto é exibida. O limpador mantém as partes que afetam a aparência: o cabeçalho JFIF, o perfil de cor ICC, o segmento Adobe de transformação de cor e a orientação, que é regravada em um bloco EXIF mínimo para a foto continuar na posição certa. Dimensões e dados da imagem nunca são alterados.',
      ],
    },
    {
      heading: 'Motivos comuns para limpar um JPG',
      paragraphs: [],
      bullets: [
        'Remover o GPS antes de postar fotos em marketplaces, fóruns ou mensageiros.',
        'Remover números de série da câmera, nomes de autor e histórico de edição antes de entregar trabalhos a clientes.',
        'Remover C2PA ou campos de IA que ativam o rótulo “Informações de IA” em uma foto real.',
        'Remover prompts e dados do gerador de JPEGs criados por IA.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Perguntas sobre como limpar arquivos JPG',
  faq: [
    {
      q: 'JPG e JPEG são a mesma coisa?',
      a: 'Sim. .jpg, .jpeg e .jfif são o mesmo formato, e os três são suportados.',
    },
    {
      q: 'Remover metadados diminui a qualidade do JPG?',
      a: 'Não. Os dados comprimidos da imagem são copiados byte a byte; só os segmentos de metadados são removidos.',
    },
    {
      q: 'Minhas fotos são enviadas para algum lugar?',
      a: 'Não. Os arquivos são lidos e limpos dentro do seu navegador; eles nunca saem do seu dispositivo.',
    },
    {
      q: 'Minha foto vai ficar girada depois da limpeza?',
      a: 'Não. A orientação é regravada em um bloco EXIF mínimo, então a foto aparece do mesmo jeito.',
    },
    {
      q: 'O que acontece com as fotos com movimento?',
      a: 'Alguns celulares anexam um vídeo curto depois da imagem JPEG. Esses dados finais são removidos junto com os metadados, então o resultado é uma foto estática comum.',
    },
    {
      q: 'Existe limite de tamanho?',
      a: 'Cada JPG pode ter até 25 MB e 40 megapixels, e você pode limpar até 50 arquivos por lote.',
    },
  ],
};

export default article;
