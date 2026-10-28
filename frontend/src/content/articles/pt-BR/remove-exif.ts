import type { Article } from '../types';

const article: Article = {
  title: 'Removedor de EXIF — apagar dados EXIF de fotos online',
  summary: [
    'Fotos de celulares e câmeras carregam dados EXIF: localização GPS, horário da captura, modelo do aparelho e às vezes o número de série. Qualquer pessoa que receba o arquivo original consegue ler essas informações.',
    'Solte suas fotos na ferramenta desta página para ver cada campo EXIF e apagá-lo com um clique — sem recomprimir a imagem, sem girá-la e sem enviar nada.',
  ],
  description:
    'Removedor de EXIF online e grátis: apague GPS, câmera, data e número de série de JPG, HEIC, PNG e WebP no navegador. Sem perdas, mantém a orientação, sem upload.',
  answer:
    'Para apagar os dados EXIF de uma foto, solte-a na ferramenta desta página e clique em “Remover metadados de IA”. Coordenadas GPS, horário da captura, marca, modelo e número de série da câmera são excluídos junto com XMP e IPTC, enquanto a orientação e o perfil de cor são mantidos para a foto continuar igual. A imagem nunca é recomprimida e nunca sai do seu navegador.',
  sections: [
    {
      heading: 'Como apagar dados EXIF em três passos',
      paragraphs: [],
      steps: [
        'Solte suas fotos na ferramenta acima ou toque em “Escolher imagens”. JPG, HEIC, PNG, WebP, GIF e AVIF são suportados.',
        'Confira “Detalhes de privacidade” para ver se há dados de localização, pessoais ou de data expostos, e abra “Todos os metadados” para ver cada campo.',
        'Clique em “Remover metadados de IA” e baixe as fotos limpas uma a uma ou em um ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Quais campos EXIF são removidos',
      paragraphs: [],
      table: {
        head: ['Grupo', 'Exemplos', 'Resultado'],
        rows: [
          ['Localização', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Removido'],
          ['Aparelho', 'Make, Model, LensModel, BodySerialNumber', 'Removido'],
          ['Data e hora', 'DateTimeOriginal, OffsetTime', 'Removido'],
          ['Software e autor', 'Software, Artist, Copyright', 'Removido'],
          ['Miniatura', 'Imagem de prévia incorporada', 'Removido'],
          ['Exibição', 'Orientation, perfil de cor ICC', 'Mantido'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por que um removedor de EXIF sem perdas faz diferença',
      paragraphs: [
        'Muitos removedores de EXIF redesenham a foto e salvam um arquivo novo. Isso apaga o EXIF, mas também recomprime JPEGs, pode descartar o perfil de cor e às vezes deixa a foto girada, porque a tag de orientação se perde.',
        'Esta ferramenta corta os blocos de metadados do arquivo e copia os dados da imagem sem alteração. A orientação é regravada em um bloco EXIF mínimo, então a foto continua na posição certa e idêntica pixel a pixel.',
      ],
    },
    {
      heading: 'Quando apagar os dados EXIF',
      paragraphs: [],
      bullets: [
        'Antes de vender coisas online ou postar fotos tiradas em casa.',
        'Antes de enviar arquivos originais por e-mail, links de nuvem ou pela opção “enviar como arquivo” dos mensageiros, que mantêm o EXIF.',
        'Antes de entregar trabalhos a clientes que não devem mostrar o número de série da sua câmera ou o histórico de edição.',
        'Antes de publicar fotos de crianças, eventos ou lugares que você não quer que sejam localizados.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'EXIF em fotos do iPhone e do Android',
      paragraphs: [
        'As fotos do iPhone geralmente são arquivos HEIC com o EXIF guardado como um item separado; as do Android geralmente são JPEGs com o EXIF em um segmento APP1. As duas são limpas no próprio arquivo e continuam no formato original — o HEIC não é convertido para JPG.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Perguntas sobre como apagar o EXIF',
  faq: [
    {
      q: 'Apagar o EXIF diminui a qualidade da foto?',
      a: 'Não. Só os blocos de metadados são removidos; os dados da imagem são copiados byte a byte.',
    },
    {
      q: 'Minhas fotos vão ficar giradas depois de apagar o EXIF?',
      a: 'Não. A tag de orientação é regravada em um bloco EXIF mínimo, para as fotos aparecerem na posição certa.',
    },
    {
      q: 'Minhas fotos são enviadas para um servidor?',
      a: 'Não. Tudo roda no seu navegador e os arquivos nunca saem do seu dispositivo.',
    },
    {
      q: 'Posso remover só a localização GPS e manter o resto?',
      a: 'Ainda não. A ferramenta remove todos os metadados que identificam de uma vez e mantém só o necessário para exibir a imagem corretamente.',
    },
    {
      q: 'Existe algum limite?',
      a: 'Cada foto pode ter até 25 MB e 40 megapixels, com até 50 fotos por lote.',
    },
    {
      q: 'Dá para recuperar os dados EXIF apagados?',
      a: 'Não a partir do arquivo limpo. As cópias que você compartilhou antes da limpeza ainda os contêm.',
    },
  ],
};

export default article;
