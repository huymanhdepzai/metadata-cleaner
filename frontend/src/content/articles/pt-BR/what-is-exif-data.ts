import type { Article } from '../types';

const article: Article = {
  title: 'O que são dados EXIF? Guia simples sobre metadados de fotos',
  summary: [
    'EXIF (Exchangeable Image File Format) é a informação oculta que a câmera ou o celular grava em cada foto: configurações da câmera, data e hora, modelo do aparelho e muitas vezes a localização GPS.',
    'Este guia explica o que o EXIF contém, como ele difere de XMP, IPTC e C2PA, por que ele importa para a privacidade e como ver ou remover esses dados com segurança.',
  ],
  description:
    'O que são dados EXIF, quais campos eles contêm (câmera, data, GPS), como diferem de XMP, IPTC e C2PA e como ver ou apagar o EXIF de fotos sem perder qualidade.',
  answer:
    'Dados EXIF são metadados que câmeras e celulares guardam dentro de uma foto: marca e modelo do aparelho, configurações de exposição, data e hora, orientação, uma pequena miniatura e muitas vezes a localização GPS. Eles não afetam a aparência da imagem. Você pode vê-los nas informações da foto no celular ou com um visualizador de metadados, e removê-los com um limpador que mantenha a orientação e o perfil de cor.',
  sections: [
    {
      heading: 'O que significa EXIF',
      paragraphs: [
        'EXIF é a sigla de Exchangeable Image File Format, um padrão criado para câmeras digitais para que cada foto possa levar informações sobre como foi tirada. Quase toda câmera e todo smartphone gravam EXIF automaticamente, e a maioria dos apps de fotos consegue lê-lo.',
      ],
    },
    {
      heading: 'O que os dados EXIF contêm',
      paragraphs: ['Uma foto típica pode incluir:'],
      table: {
        head: ['Grupo', 'Campos de exemplo'],
        rows: [
          ['Aparelho', 'Make, Model, LensModel, às vezes um número de série'],
          ['Exposição', 'ISO, FNumber (abertura), ExposureTime (velocidade do obturador), FocalLength, Flash'],
          ['Data e hora', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Localização', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Imagem', 'Orientation, resolução, miniatura incorporada'],
          ['Software', 'Software, o app que salvou o arquivo por último'],
        ],
      },
    },
    {
      heading: 'Onde o EXIF fica guardado no arquivo',
      paragraphs: [
        'Em arquivos JPEG, o EXIF fica em um segmento APP1 perto do início do arquivo e é organizado em diretórios (IFDs): IFD0 para dados básicos da imagem e do aparelho, o diretório Exif para as configurações da câmera, o diretório GPS para a localização e o IFD1 para a miniatura. Arquivos HEIC, WebP e PNG também podem ter EXIF, em seus próprios contêineres.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF vs. XMP vs. IPTC vs. C2PA',
      paragraphs: ['As fotos muitas vezes carregam vários tipos de metadados ao mesmo tempo:'],
      table: {
        head: ['Padrão', 'Quem grava', 'Conteúdo típico'],
        rows: [
          ['EXIF', 'Câmeras e celulares', 'Dados técnicos da captura, data e hora, GPS'],
          ['XMP', 'Softwares de edição', 'Descrições, palavras-chave, histórico de edição, campos de IA'],
          ['IPTC', 'Redações, bancos de imagens, editores', 'Legendas, créditos, direitos, DigitalSourceType'],
          ['C2PA', 'Câmeras, editores, serviços de IA', 'Content Credentials assinadas: procedência e edições'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por que os dados EXIF importam para a privacidade',
      paragraphs: [
        'Para fotógrafos, o EXIF é uma ferramenta de aprendizado e um registro do trabalho. Para todo mundo, é principalmente um risco à privacidade: uma única foto pode revelar o endereço da sua casa, seu aparelho e quando você esteve em algum lugar. O EXIF também é fácil de editar, então nunca deve ser tratado como prova por si só.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Como ver os dados EXIF de uma foto',
      paragraphs: [],
      bullets: [
        'Windows: clique com o botão direito no arquivo › Propriedades › Detalhes.',
        'Mac: abra a foto no Pré-Visualização › Ferramentas › Mostrar Inspetor.',
        'iPhone e Android: abra a foto e deslize para cima.',
        'Qualquer aparelho: solte a foto na ferramenta do topo desta página para decodificar cada campo EXIF, XMP e IPTC, agrupado pela origem.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'Como apagar os dados EXIF com segurança',
      paragraphs: [
        'Ao remover o EXIF, mantenha a tag de orientação para as fotos não ficarem giradas, mantenha o perfil de cor para as cores continuarem fiéis e evite ferramentas que recomprimem a imagem. Esta ferramenta faz as três coisas automaticamente: clique em “Remover metadados de IA”, confira o painel de resultado e baixe o arquivo limpo.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre dados EXIF',
  faq: [
    {
      q: 'O EXIF afeta a qualidade da imagem?',
      a: 'Não. O EXIF fica guardado separado dos dados da imagem, então removê-lo não muda a aparência da foto.',
    },
    {
      q: 'Dados EXIF podem ser falsificados?',
      a: 'Sim. Os campos EXIF podem ser editados com ferramentas comuns, então são pistas úteis, mas nunca prova por si sós.',
    },
    {
      q: 'A orientação faz parte do EXIF? Vocês a mantêm?',
      a: 'Sim, a orientação é uma tag EXIF. O limpador a regrava em um bloco EXIF mínimo para suas fotos continuarem aparecendo na posição certa.',
    },
    {
      q: 'Prints de tela têm dados EXIF?',
      a: 'Prints geralmente têm pouco EXIF, mas ainda podem conter a data, o aparelho e o software que os criou.',
    },
    {
      q: 'Arquivos PNG têm EXIF?',
      a: 'Podem ter, em um chunk eXIf, mas os metadados de PNG ficam mais vezes em chunks de texto — que é onde as ferramentas de IA colocam os prompts.',
    },
    {
      q: 'É legal remover dados EXIF?',
      a: 'Remover metadados das suas próprias fotos geralmente não tem problema. Não remova informações de direitos autorais ou de crédito de imagens que não são suas se uma licença exigir que elas fiquem.',
    },
  ],
};

export default article;
