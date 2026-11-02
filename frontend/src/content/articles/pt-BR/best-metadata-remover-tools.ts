import type { Article } from '../types';

const article: Article = {
  title: 'Melhores ferramentas para remover metadados em 2026: 8 opções comparadas',
  seoTitle: 'Melhores ferramentas para remover metadados (2026)',
  summary: [
    'Toda foto pode carregar dados ocultos: localização GPS, data da captura, números de série do aparelho e, em imagens de IA, as Content Credentials C2PA ou o prompt inteiro. Dezenas de ferramentas prometem removê-los, mas elas diferem no que realmente apagam, em recomprimir ou não a imagem e em seus arquivos saírem ou não do seu dispositivo.',
    'Estas são as oito ferramentas para remover metadados que vale a pena conhecer em 2026, de ferramentas no navegador e o ExifTool até as opções que já vêm no Windows, no macOS e no seu celular, com o que cada uma remove e onde ela deixa a desejar.',
  ],
  description:
    'Melhores ferramentas para remover metadados em 2026: All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, celulares e editores — o que cada uma apaga.',
  answer:
    'A melhor ferramenta depende de como você trabalha. Para limpar de forma rápida e privada imagens JPG, PNG, WebP, HEIC e de IA, um limpador no navegador como o All Metadata Cleaner remove EXIF, GPS, C2PA e prompts sem upload e sem recompressão. O ExifTool é a opção mais completa para scripts, arquivos RAW e remoções seletivas. As opções nativas do Windows, do macOS e dos celulares em geral removem só a localização.',
  sections: [
    {
      heading: 'Como comparamos as ferramentas para remover metadados',
      paragraphs: [
        'Aviso: o All Metadata Cleaner é a ferramenta deste site. Ele aparece primeiro porque este é o guia dele, não porque todas as outras opções sejam piores — várias ferramentas abaixo são melhores para tarefas específicas, e dizemos isso. Cada uma é descrita pelo funcionamento documentado, com base em cinco perguntas:',
      ],
      bullets: [
        'Cobertura: remove só EXIF e GPS, ou também XMP, IPTC, Content Credentials C2PA e prompts de IA guardados no texto do PNG?',
        'Qualidade: recorta os metadados do arquivo ou decodifica e recomprime a imagem?',
        'Privacidade: os arquivos são processados no seu dispositivo ou enviados a um servidor?',
        'O que mantém: orientação e perfil de cor, para a foto limpa continuar com a aparência certa.',
        'Esforço: instalação, linha de comando ou um clique — e se processa em lote.',
      ],
    },
    {
      heading: 'Tabela comparativa de ferramentas para remover metadados',
      paragraphs: [],
      table: {
        head: ['Ferramenta', 'Plataforma', 'Preço', 'C2PA e prompts de IA', 'Qualidade da imagem'],
        rows: [
          ['All Metadata Cleaner', 'Qualquer navegador', 'Grátis', 'Removidos', 'Inalterada'],
          ['ExifTool', 'Windows, macOS, Linux (linha de comando)', 'Grátis, código aberto', 'Removidos (-all= ou -jumbf:all=)', 'Inalterada'],
          ['ExifCleaner', 'Windows, macOS, Linux (app)', 'Grátis, código aberto', 'Via ExifTool — confira o resultado', 'Inalterada'],
          ['Explorador de Arquivos do Windows', 'Windows', 'Nativo', 'Não foi feito para isso', 'Inalterada'],
          ['Pré-Visualização e Fotos no Mac', 'macOS', 'Nativo', 'Não — só localização', 'Pré-Visualização inalterada, exportação do Fotos recomprimida'],
          ['Compartilhar no iPhone e Android', 'iOS, Android', 'Nativo', 'Não — só localização', 'Depende do app'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (linha de comando)', 'Grátis, código aberto', 'Em geral sim, pois o arquivo é regravado', 'Recomprimida (JPEG, WebP)'],
          ['Exportar de um editor', 'Photoshop, Lightroom, GIMP', 'Pago ou grátis', 'Depende das opções de exportação', 'Recomprimida'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner — melhor para limpar rápido e com privacidade',
      paragraphs: [
        'Uma ferramenta web gratuita que roda inteiramente no seu navegador: as imagens são lidas e limpas no seu dispositivo e nunca enviadas. Ela remove EXIF (incluindo GPS), XMP, IPTC, Content Credentials C2PA e os prompts ou workflows do ComfyUI que geradores de IA guardam no texto do PNG. Os blocos de metadados são recortados no nível dos bytes, então os dados da imagem são copiados sem alteração, e a orientação e o perfil de cor ICC são mantidos para que as fotos apareçam exatamente como antes. HEIC e AVIF continuam no formato original.',
        'Antes da limpeza, um relatório mostra o que cada arquivo contém — localização, dados pessoais, data da captura e sinais de IA. Limites: só JPG, PNG, WebP, GIF, HEIC e AVIF (sem RAW, vídeo ou PDF), até 25 MB por imagem e 50 imagens por lote, e ela remove todas as informações identificáveis de uma vez, em vez de deixar você escolher campos individuais.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool — melhor para usuários avançados e automação',
      paragraphs: [
        'O ExifTool, de Phil Harvey, é a ferramenta de referência: grátis, de código aberto e compatível com muito mais formatos do que qualquer outra opção daqui, incluindo arquivos RAW e vídeo. “exiftool -all= foto.jpg” remove todos os metadados graváveis, “-jumbf:all=” remove só o bloco C2PA, e você pode apagar ou manter tags individuais — algo que ferramentas de um clique não oferecem.',
        'Em troca, é preciso usar a linha de comando e ter cuidado com o padrão: “-all=” também apaga o perfil de cor e a tag de orientação, a menos que você os copie de volta com “-tagsfromfile @ -icc_profile -orientation”. Ele deixa um backup chamado “_original” ao lado de cada arquivo até você apagá-lo.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner — melhor app de desktop com arrastar e soltar',
      paragraphs: [
        'O ExifCleaner é um app de desktop gratuito e de código aberto para Windows, macOS e Linux que coloca uma janela de arrastar e soltar na frente do ExifTool. Solte arquivos ou uma pasta inteira e ele remove os metadados offline. A versão 4, lançada em 2026, foi a primeira grande reconstrução em cinco anos e trouxe opções para salvar uma cópia limpa e preservar a orientação. Ative salvar como cópia se quiser manter os originais e confira o resultado em imagens de IA, porque a remoção de C2PA depende da versão do ExifTool incluída.',
      ],
    },
    {
      heading: '4. Explorador de Arquivos do Windows — nativo, melhor para JPEG',
      paragraphs: [
        'Clique com o botão direito na foto › Propriedades › Detalhes › “Remover Propriedades e Informações Pessoais” remove as propriedades que o Windows consegue editar e pode salvar uma cópia limpa. Funciona bem para EXIF em arquivos JPEG e aceita vários arquivos de uma vez. O suporte a PNG, HEIC e WebP depende dos codecs instalados, e o recurso não foi feito para remover manifestos C2PA nem prompts de IA.',
      ],
    },
    {
      heading: '5. Pré-Visualização e Fotos no Mac — nativos, só localização',
      paragraphs: [
        'A Pré-Visualização remove a localização GPS (Ferramentas › Mostrar Inspetor › GPS › Remover Informações de Localização) sem mexer na qualidade, e o Fotos pode deixar a localização de fora ao exportar. Nos dois casos, câmera, data e o restante do EXIF continuam no arquivo, e uma exportação em JPEG pelo Fotos é recomprimida. Suficiente se a sua única preocupação é a localização.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. Opções de compartilhamento no iPhone e Android — só localização',
      paragraphs: [
        'No iPhone, toque em Opções no topo da tela de compartilhamento e desative Localização antes de enviar. No Android, o Google Fotos e muitas telas de compartilhamento oferecem remover a localização das cópias compartilhadas. É o jeito mais fácil de não revelar onde a foto foi tirada, mas os outros campos EXIF continuam, e as opções variam conforme o app e o fabricante.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick — para scripts, mas com recompressão',
      paragraphs: [
        '“magick mogrify -strip *.jpg” remove perfis e comentários de pastas inteiras, e o ImageMagick é grátis em todos os sistemas de desktop. Diferente do ExifTool, ele decodifica e regrava a imagem, então arquivos JPEG e WebP são recomprimidos, e o -strip também apaga o perfil de cor ICC, o que pode alterar as cores de fotos com gama ampla. Use quando você já vai redimensionar ou converter, não como removedor de metadados puro.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom e GIMP — exportar sem metadados',
      paragraphs: [
        'Todos os grandes editores permitem exportar sem metadados: o Exportar Como do Photoshop pode não incluir nenhum, a exportação do Lightroom pode se limitar ao copyright, e o GIMP deixa desmarcar EXIF e XMP ao exportar. Exportar sempre recomprime a imagem, e os apps da Adobe podem anexar Content Credentials se essa opção estiver ativada, então confira antes.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'E os sites que removem metadados enviando sua foto?',
      paragraphs: [
        'Muitos sites limpam metadados enviando seu arquivo para o servidor deles e devolvendo uma cópia. Alguns funcionam bem, mas você entrega o original — com a localização GPS e seus dados pessoais — a terceiros, e muitos recomprimem a imagem. Se usar um, leia a política de privacidade para saber por quanto tempo os arquivos ficam guardados. Ferramentas que processam os arquivos localmente no navegador evitam o problema por completo.',
      ],
    },
    {
      heading: 'Qual ferramenta para remover metadados escolher?',
      paragraphs: [],
      bullets: [
        'Compartilhar algumas fotos ou imagens de IA com privacidade, sem instalar nada: All Metadata Cleaner.',
        'Scripts, arquivos RAW, vídeo ou apagar só tags específicas: ExifTool.',
        'Um app de desktop offline com arrastar e soltar: ExifCleaner.',
        'Só a localização, logo antes de enviar pelo celular: a chave de localização ao compartilhar.',
        'Você já vai editar ou redimensionar a foto: exporte sem metadados pelo seu editor.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'O que nenhuma ferramenta de metadados consegue fazer',
      paragraphs: [
        'Todas essas ferramentas editam metadados, não pixels. Nenhuma remove marcas d’água invisíveis embutidas na própria imagem, como o SynthID do Google, e as plataformas ainda podem rotular imagens com a própria detecção. Remover metadados também não muda a obrigação de informar conteúdo gerado por IA quando uma plataforma ou a lei exige.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Perguntas sobre ferramentas para remover metadados',
  faq: [
    {
      q: 'Qual é a melhor ferramenta grátis para remover metadados?',
      a: 'Para a maioria das pessoas, um limpador no navegador como o All Metadata Cleaner: grátis, sem instalação, sem upload e sem perda de qualidade. Para scripts, arquivos RAW ou remoções seletivas, o ExifTool é a opção grátis mais completa.',
    },
    {
      q: 'É seguro usar um site para remover metadados?',
      a: 'Depende de o arquivo ser enviado ou não. Ferramentas que processam as imagens no navegador não as enviam para lugar nenhum. Sites com upload recebem sua foto original, com a localização, então leia a política de privacidade deles.',
    },
    {
      q: 'Remover metadados reduz a qualidade da imagem?',
      a: 'Não com ferramentas que recortam os blocos de metadados, como All Metadata Cleaner, ExifTool, ExifCleaner e o Explorador de Arquivos do Windows. Exportar de um editor, do ImageMagick ou do Fotos no Mac recomprime a imagem e pode reduzir a qualidade.',
    },
    {
      q: 'Quais ferramentas removem as Content Credentials C2PA?',
      a: 'O All Metadata Cleaner e o ExifTool (com -all= ou -jumbf:all=) removem manifestos C2PA. As opções nativas do Windows, do macOS e dos celulares não foram feitas para isso.',
    },
    {
      q: 'Dá para remover só a localização GPS e manter o resto?',
      a: 'Sim, com o ExifTool (exiftool -gps:all= foto.jpg), a Pré-Visualização no Mac ou as opções de compartilhamento do celular. O All Metadata Cleaner remove todos os metadados identificáveis de uma vez.',
    },
    {
      q: 'Alguma dessas ferramentas remove marcas d’água de IA invisíveis como o SynthID?',
      a: 'Não. O SynthID e marcas parecidas fazem parte dos pixels, não dos metadados, então removedores de metadados não mexem nelas.',
    },
  ],
};

export default article;
