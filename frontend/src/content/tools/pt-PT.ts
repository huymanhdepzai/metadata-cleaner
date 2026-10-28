import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Ferramentas gratuitas de metadados de imagem',
    description:
      'Ferramentas gratuitas no navegador para ver, analisar e remover metadados de imagens: visualizador EXIF, análise de privacidade, tamanho dos metadados.',
    intro:
      'Todas as ferramentas funcionam no seu navegador com o mesmo motor: as imagens nunca são enviadas e nada é recomprimido. Escolha o que precisa — ver o interior de uma fotografia, verificar o que revela ou limpá-la.',
  },
  cards: {
    cleaner: { name: 'Remover metadados de imagens', text: 'Remova EXIF, GPS, XMP, IPTC, C2PA e prompts de IA com um clique, sem perder qualidade.' },
    'view-metadata': { name: 'Ver metadados', text: 'Veja todos os campos ocultos de uma fotografia: câmara, data, GPS, XMP, C2PA e prompts de IA.' },
    'privacy-check': { name: 'Análise de privacidade', text: 'Descubra o que uma fotografia revela — localização no mapa, dados pessoais e hora da captura.' },
    'metadata-size': { name: 'Tamanho dos metadados', text: 'Meça quantos bytes de metadados um ficheiro contém e qual o seu risco.' },
    'remove-exif': { name: 'Remover EXIF', text: 'Apague câmara, data e número de série, mantendo a orientação e as cores.' },
    'remove-gps': { name: 'Remover localização GPS', text: 'Retire as coordenadas GPS das fotografias do telemóvel antes de as partilhar.' },
    'remove-c2pa': { name: 'Remover C2PA', text: 'Remova manifestos de Content Credentials (C2PA) de JPG, PNG, WebP e HEIC.' },
    'remove-prompts': { name: 'Remover prompts de IA', text: 'Remova parâmetros do Stable Diffusion e fluxos do ComfyUI de ficheiros PNG.' },
    batch: { name: 'Limpeza em lote', text: 'Limpe até 50 imagens de uma vez e transfira-as num único ZIP.' },
  },
  groups: {
    inspect: { title: 'Verifique as suas fotografias', text: 'Veja o que uma imagem revela antes de a partilhar — o ficheiro é apenas lido, nunca alterado.' },
    remove: { title: 'Remova metadados consoante a necessidade', text: 'Escolha um formato ou tarefa — cada guia inclui o limpador.' },
  },
  tools: {
    'view-metadata': {
      title: 'Ver metadados de imagens online — EXIF, XMP, C2PA',
      description:
        'Visualizador de metadados gratuito: veja EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) e prompts de IA em JPG, PNG, WebP e HEIC no navegador, sem enviar nada.',
      intro:
        'Largue uma fotografia para ver toda a informação oculta que contém — câmara e objetiva, data da captura, posição GPS, software de edição, Content Credentials e prompts de IA — agrupada por origem. Nada é alterado nem enviado.',
      steps: [
        'Largue uma ou mais imagens na caixa acima ou toque em «Escolher imagens».',
        'Abra um ficheiro para ver o resumo de privacidade, os sinais de IA e a lista completa de campos.',
        'Pesquise nos campos e decida se mantém o ficheiro como está ou remove os metadados.',
      ],
      faq: [
        {
          q: 'Ver os metadados altera o meu ficheiro?',
          a: 'Não. O ficheiro é apenas lido. Para remover metadados, use o limpador — as imagens continuam carregadas e não precisa de as adicionar novamente.',
        },
        {
          q: 'Que metadados posso ver?',
          a: 'EXIF (incluindo GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de texto PNG com prompts ou fluxos do ComfyUI e os blocos da estrutura do ficheiro.',
        },
        {
          q: 'As minhas fotografias são enviadas?',
          a: 'Não. O navegador lê os ficheiros, que nunca saem do seu dispositivo.',
        },
      ],
    },
    'privacy-check': {
      title: 'Análise de privacidade de fotografias — GPS e dados pessoais',
      description:
        'Verifique o que uma fotografia revela antes de a partilhar: localização GPS para abrir no mapa, autor, hora da captura e dados de IA. Gratuito, sem envio.',
      intro:
        'Descubra o que uma fotografia denuncia antes de a publicar. A análise mostra se contém uma localização GPS (e para onde aponta), dados pessoais como o autor ou o número de série do dispositivo, a hora da captura e dados de proveniência de IA — com um nível de risco simples.',
      steps: [
        'Largue na caixa acima as fotografias que tenciona partilhar.',
        'Leia o nível de risco e os dados de localização, pessoais e de hora encontrados em cada ficheiro.',
        'Se houver uma posição GPS, abra-a no mapa para ver exatamente o que os outros veriam — e depois remova-a.',
      ],
      faq: [
        {
          q: 'Como é definido o nível de risco?',
          a: 'Alto significa que a fotografia contém uma localização. Médio, que tem dados pessoais, de hora ou de IA, mas sem localização. Baixo, que nada disto foi encontrado nos metadados.',
        },
        {
          q: 'O mapa é carregado automaticamente?',
          a: 'Não. As coordenadas são mostradas como texto. O OpenStreetMap só abre num novo separador se clicar no botão; caso contrário, a localização nunca sai do seu dispositivo.',
        },
        {
          q: 'Uma fotografia pode revelar a minha localização sem GPS?',
          a: 'Os metadados são apenas uma fonte. O que se vê na imagem — placas, monumentos, reflexos — também pode revelar um local, e esta análise não o consegue detetar.',
        },
      ],
    },
    'metadata-size': {
      title: 'Tamanho dos metadados — quantos metadados tem uma fotografia?',
      description:
        'Meça quantos metadados uma imagem contém: total de bytes, os maiores blocos EXIF, C2PA ou de prompts e o risco de privacidade. Gratuito, sem envio.',
      intro:
        'Veja que parte de um ficheiro são metadados e não imagem. A ferramenta lista cada bloco de metadados por tamanho — EXIF, XMP, C2PA, pré-visualizações incorporadas, prompts e fluxos de IA —, mostra a percentagem do ficheiro e avalia o risco de privacidade.',
      steps: [
        'Largue uma ou mais imagens na caixa acima.',
        'Compare o tamanho dos metadados e a sua percentagem em cada ficheiro, bloco a bloco.',
        'Remova os metadados para tornar os ficheiros mais pequenos e mais seguros de partilhar.',
      ],
      faq: [
        {
          q: 'Porque é que alguns ficheiros têm tantos metadados?',
          a: 'Pré-visualizações incorporadas, manifestos C2PA com miniaturas e fluxos do ComfyUI podem somar dezenas ou centenas de kilobytes, enquanto o EXIF básico costuma ter apenas alguns.',
        },
        {
          q: 'Porque é que o perfil de cor aparece como mantido?',
          a: 'O perfil de cor ICC é necessário para mostrar as cores corretamente, por isso o limpador mantém-no. Não entra no total de metadados.',
        },
        {
          q: 'Remover os metadados altera a imagem?',
          a: 'Não. Só os blocos de metadados são removidos; os dados da imagem são copiados sem alterações, por isso o ficheiro fica mais pequeno sem perder qualidade.',
        },
      ],
    },
  },
};

export default tools;
