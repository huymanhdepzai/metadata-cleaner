import type { Article } from '../types';

const article: Article = {
  title: 'Como remover metadados de fotos no Windows e no Mac',
  seoTitle: 'Remover metadados de fotos no Windows e no Mac',
  summary: [
    'Fotos copiadas para o computador mantêm tudo o que a câmera ou o celular registrou: localização GPS, horário da captura, modelo do aparelho e, às vezes, dados de procedência de IA. O Windows e o macOS mostram essas informações, mas as opções nativas para removê-las são limitadas.',
    'Veja o que o Explorador de Arquivos, o Paint, a Pré-Visualização e o Fotos conseguem ou não remover, onde o ExifTool entra e um jeito de remover todos os metadados sem perda pelo navegador, sem instalar nada.',
  ],
  description:
    'Remova metadados de fotos no Windows 11/10 e no macOS: o que o Explorador, a Pré-Visualização e o Fotos apagam, seus limites e uma opção sem perda.',
  answer:
    'No Windows, clique com o botão direito em uma foto, abra Propriedades › Detalhes e escolha “Remover Propriedades e Informações Pessoais”. No Mac, a Pré-Visualização remove só a localização GPS, e o Fotos pode deixá-la de fora ao exportar. Nenhuma das opções remove todos os campos, principalmente C2PA ou prompts de IA. Para remover todos os metadados em qualquer um dos sistemas sem recompressão, use um limpador no navegador ou o ExifTool.',
  sections: [
    {
      heading: 'Como ver os metadados de uma foto no Windows e no Mac',
      paragraphs: ['Confira o arquivo antes de remover qualquer coisa, para saber o que ele realmente contém.'],
      bullets: [
        'Windows: clique com o botão direito na foto › Propriedades › Detalhes. Aparecem a câmera, a data da captura, as dimensões e, se houver, a latitude e a longitude GPS.',
        'Mac (Pré-Visualização): abra a foto, escolha Ferramentas › Mostrar Inspetor e depois a aba “i”. EXIF, IPTC e GPS aparecem em abas separadas.',
        'Mac (Finder): selecione o arquivo e pressione ⌘I; “Mais Informações” mostra um resumo curto, como dimensões e aparelho.',
        'Nos dois: os visualizadores nativos ignoram blocos que não entendem, como as Content Credentials C2PA ou o texto do prompt em PNGs gerados por IA. Um visualizador de metadados dedicado mostra isso também.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Remover metadados no Windows 11 e 10 com o Explorador de Arquivos',
      paragraphs: [],
      steps: [
        'Selecione uma ou mais fotos no Explorador de Arquivos, clique com o botão direito e escolha Propriedades.',
        'Abra a aba Detalhes e clique em “Remover Propriedades e Informações Pessoais”, na parte de baixo.',
        'Escolha “Criar uma cópia com todas as propriedades possíveis removidas” para manter o original, ou selecione os campos que quer remover do próprio arquivo.',
        'Clique em OK e abra a aba Detalhes da cópia para conferir o que sobrou.',
      ],
    },
    {
      heading: 'Limites da opção do Windows',
      paragraphs: [
        'O Explorador de Arquivos só edita as propriedades que o Windows sabe gravar naquele formato. Funciona melhor com JPEG; o suporte a PNG, HEIC e WebP depende dos codecs instalados e costuma ser parcial. O recurso não foi feito para remover manifestos C2PA, blocos XMP que ele não associa a propriedades nem o texto de prompts e workflows que ferramentas de IA guardam em arquivos PNG. Salvar de novo no Paint remove os metadados, mas recomprime a imagem e pode reduzir a qualidade.',
      ],
    },
    {
      heading: 'Remover a localização no Mac com a Pré-Visualização e o Fotos',
      paragraphs: ['O macOS tem duas opções nativas, ambas focadas na localização:'],
      bullets: [
        'Pré-Visualização: Ferramentas › Mostrar Inspetor › aba “i” › GPS, depois clique em “Remover Informações de Localização” e salve. O modelo da câmera, o horário da captura e o restante do EXIF continuam no arquivo.',
        'Fotos: selecione a foto e escolha Imagem › Localização › Ocultar Localização, ou use Arquivo › Exportar e desmarque “Informações de localização”. Uma exportação em JPEG é recomprimida, e os outros metadados continuam incluídos.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'Comparação das opções nativas',
      paragraphs: [],
      table: {
        head: ['Método', 'Localização GPS', 'Câmera e data', 'C2PA e prompts de IA', 'Qualidade da imagem'],
        rows: [
          ['Windows › Remover Propriedades', 'Removida (JPEG)', 'Removidas (JPEG)', 'Não foi feito para isso', 'Inalterada'],
          ['Salvar de novo no Paint', 'Em geral removida', 'Em geral removidas', 'Em geral removidos', 'Recomprimida'],
          ['Pré-Visualização › Remover Informações de Localização', 'Removida', 'Mantidas', 'Mantidos', 'Inalterada'],
          ['Exportar do Fotos sem localização', 'Removida', 'Mantidas', 'Não de forma confiável', 'Recomprimida (JPEG)'],
          ['Limpador de metadados no navegador', 'Removida', 'Removidas', 'Removidos', 'Inalterada'],
        ],
      },
    },
    {
      heading: 'Remover todos os metadados no Windows ou no Mac, sem instalar nada',
      paragraphs: [
        'O limpador desta página funciona em qualquer navegador de desktop no Windows, no macOS ou no Linux. Os arquivos são processados no seu computador e nunca são enviados.',
      ],
      steps: [
        'Arraste até 50 arquivos JPG, PNG, WebP, GIF, HEIC ou AVIF para a área no topo desta página.',
        'Confira o relatório: localização, dados pessoais, horário da captura e sinais de IA aparecem por arquivo.',
        'Clique em “Remover metadados de IA”. Só os blocos de metadados são recortados; os dados da imagem são copiados byte a byte.',
        'Baixe os arquivos um a um ou em um único ZIP e guarde os originais.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'Usar o ExifTool pela linha de comando',
      paragraphs: [
        'O ExifTool é um programa gratuito de linha de comando para Windows, macOS e Linux e a opção mais completa para scripts. “exiftool -all= foto.jpg” apaga todos os metadados graváveis e mantém um backup chamado foto.jpg_original. Ele também remove o perfil de cor e a tag de orientação; para mantê-los, rode “exiftool -all= -tagsfromfile @ -icc_profile -orientation foto.jpg”. Sempre confira o resultado em um visualizador, porque a cobertura varia conforme o formato.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre remover metadados no computador',
  faq: [
    {
      q: '“Remover Propriedades e Informações Pessoais” remove tudo?',
      a: 'Não. Remove as propriedades que o Windows consegue editar naquele formato, principalmente o EXIF de arquivos JPEG. Manifestos C2PA, XMP não suportado e blocos de texto PNG podem permanecer, então confira a cópia antes de compartilhar.',
    },
    {
      q: 'Dá para remover todo o EXIF pela Pré-Visualização no Mac?',
      a: 'Não. A Pré-Visualização só remove a localização GPS. Câmera, lente, data e outros campos continuam no arquivo.',
    },
    {
      q: 'Exportar pelo Fotos no Mac remove os metadados?',
      a: 'Só em parte. Com “Informações de localização” desmarcado, o GPS fica de fora, mas câmera e data são mantidas, e uma exportação em JPEG é recomprimida.',
    },
    {
      q: 'Existe um jeito que não reduza a qualidade da imagem?',
      a: 'Sim. O Explorador de Arquivos do Windows, o ExifTool e o limpador no navegador desta página removem metadados sem recompressão. Salvar de novo no Paint ou exportar em JPEG recomprime a imagem.',
    },
    {
      q: 'Dá para limpar muitas fotos de uma vez no computador?',
      a: 'Sim. O Explorador de Arquivos aceita vários arquivos selecionados, o ExifTool trabalha com pastas inteiras e o limpador no navegador processa até 50 imagens por lote com download em ZIP.',
    },
    {
      q: 'Minhas fotos são enviadas quando uso o limpador no navegador?',
      a: 'Não. Os arquivos são lidos e limpos dentro do navegador, no seu próprio computador, e nunca são enviados a um servidor.',
    },
  ],
};

export default article;
