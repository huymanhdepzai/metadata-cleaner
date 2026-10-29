import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Ferramentas grátis de metadados de imagem',
    description:
      'Ferramentas grátis no navegador para ver, analisar e remover metadados de imagens: visualizador EXIF, análise de privacidade, tamanho dos metadados.',
    intro:
      'Todas as ferramentas rodam no seu navegador com o mesmo mecanismo: suas imagens nunca são enviadas e nada é recomprimido. Escolha o que precisa — ver o que há dentro de uma foto, conferir o que ela revela ou limpá-la.',
  },
  cards: {
    cleaner: { name: 'Remover metadados de imagens', text: 'Remova EXIF, GPS, XMP, IPTC, C2PA e prompts de IA com um clique, sem perder qualidade.', detail: 'Solte suas imagens, confira o relatório e baixe cópias limpas; pixels, orientação e perfil de cor ficam intactos.' },
    'view-metadata': { name: 'Ver metadados', text: 'Veja todos os campos ocultos de uma foto: câmera, data, GPS, XMP, C2PA e prompts de IA.', detail: 'Somente leitura: o arquivo nunca é alterado, então é seguro para verificar fotos que você recebeu ou baixou.' },
    'privacy-check': { name: 'Análise de privacidade', text: 'Descubra o que uma foto revela — localização no mapa, dados pessoais e horário da captura.', detail: 'Classifica cada foto com risco alto, médio ou baixo e mostra as coordenadas GPS para abrir no mapa.' },
    'metadata-size': { name: 'Tamanho dos metadados', text: 'Meça quantos bytes de metadados um arquivo carrega e qual o risco deles.', detail: 'Lista os blocos de metadados por tamanho para ver se miniaturas, XMP ou prompts incorporados deixam o arquivo maior.' },
    'remove-exif': { name: 'Remover EXIF', text: 'Apague câmera, data e número de série mantendo a orientação e as cores.', detail: 'Funciona com JPG, HEIC, PNG e WebP; uma tag mínima de orientação é mantida para a foto não girar.' },
    'remove-gps': { name: 'Remover localização GPS', text: 'Tire as coordenadas GPS das fotos do celular antes de compartilhar.', detail: 'Útil antes de postar fotos da sua casa, dos seus filhos ou do trabalho, ou de enviá-las a desconhecidos.' },
    'remove-c2pa': { name: 'Remover C2PA', text: 'Remova manifestos de Content Credentials (C2PA) de JPG, PNG, WebP e HEIC.', detail: 'Remove o manifesto que ativa rótulos de IA; marcas d’água invisíveis nos pixels, como o SynthID, não são afetadas.' },
    'remove-prompts': { name: 'Remover prompts de IA', text: 'Remova parâmetros do Stable Diffusion e fluxos do ComfyUI de arquivos PNG.', detail: 'Oculta prompt, seed, modelo e grafo de nós para que ninguém copie suas configurações de geração.' },
    batch: { name: 'Limpeza em lote', text: 'Limpe até 50 imagens de uma vez e baixe tudo em um único ZIP.', detail: 'Cada arquivo mantém o formato original; os que não puderem ser processados aparecem com o motivo.' },
  },
  groups: {
    inspect: { title: 'Verifique suas fotos', text: 'Veja o que uma imagem revela antes de compartilhá-la — o arquivo é apenas lido, nunca alterado.' },
    remove: { title: 'Remova metadados conforme a necessidade', text: 'Escolha um formato ou tarefa — cada guia já inclui o limpador.' },
  },
  tools: {
    'view-metadata': {
      title: 'Ver metadados de imagens online — EXIF, XMP, C2PA',
      description:
        'Visualizador de metadados grátis: veja EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) e prompts de IA em JPG, PNG, WebP e HEIC no navegador, sem enviar nada.',
      intro:
        'Solte uma foto para ver todas as informações ocultas que ela carrega — câmera e lente, data da captura, posição GPS, software de edição, Content Credentials e prompts de IA — agrupadas por origem. Nada é alterado nem enviado.',
      steps: [
        'Solte uma ou mais imagens na caixa acima ou toque em “Escolher imagens”.',
        'Abra um arquivo para ver o resumo de privacidade, os sinais de IA e a lista completa de campos.',
        'Pesquise nos campos e decida se mantém o arquivo como está ou remove os metadados.',
      ],
      faq: [
        {
          q: 'Ver os metadados altera meu arquivo?',
          a: 'Não. O arquivo é apenas lido. Para remover metadados, use o limpador — suas imagens continuam carregadas, sem precisar adicioná-las de novo.',
        },
        {
          q: 'Quais metadados posso ver?',
          a: 'EXIF (incluindo GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de texto PNG com prompts ou fluxos do ComfyUI e os blocos da estrutura do arquivo.',
        },
        {
          q: 'Minhas fotos são enviadas?',
          a: 'Não. O navegador lê os arquivos, que nunca saem do seu dispositivo.',
        },
      ],
    },
    'privacy-check': {
      title: 'Análise de privacidade de fotos — encontre GPS e dados pessoais',
      description:
        'Veja o que uma foto revela antes de compartilhar: localização GPS para abrir no mapa, autor, número de série, horário da captura e dados de IA. Grátis, sem envio.',
      intro:
        'Descubra o que uma foto entrega antes de postar. A análise mostra se ela contém uma localização GPS (e para onde aponta), dados pessoais como autor ou número de série do aparelho, o horário da captura e dados de origem de IA — com um nível de risco simples.',
      steps: [
        'Solte na caixa acima as fotos que você pretende compartilhar.',
        'Confira o nível de risco e os dados de localização, pessoais e de horário de cada arquivo.',
        'Se houver uma posição GPS, abra no mapa para ver exatamente o que outros veriam — e depois remova.',
      ],
      faq: [
        {
          q: 'Como o nível de risco é definido?',
          a: 'Alto significa que a foto contém uma localização. Médio, que tem dados pessoais, de horário ou de IA, mas sem localização. Baixo, que nada disso foi encontrado nos metadados.',
        },
        {
          q: 'O mapa é carregado automaticamente?',
          a: 'Não. As coordenadas aparecem como texto. O OpenStreetMap só abre em uma nova aba se você clicar no botão; caso contrário, a localização nunca sai do seu dispositivo.',
        },
        {
          q: 'Uma foto pode revelar minha localização sem GPS?',
          a: 'Os metadados são só uma fonte. O que aparece na imagem — placas, pontos turísticos, reflexos — também pode revelar um lugar, e esta análise não detecta isso.',
        },
      ],
    },
    'metadata-size': {
      title: 'Tamanho dos metadados — quanto metadado tem uma foto?',
      description:
        'Meça quantos metadados uma imagem carrega: total de bytes, parcela do arquivo, os maiores blocos EXIF, C2PA ou de prompts e o risco de privacidade. Grátis, sem envio.',
      intro:
        'Veja quanto de um arquivo é metadado e não imagem. A ferramenta lista cada bloco de metadados por tamanho — EXIF, XMP, C2PA, prévias incorporadas, prompts e fluxos de IA —, mostra a parcela do arquivo e avalia o risco de privacidade.',
      steps: [
        'Solte uma ou mais imagens na caixa acima.',
        'Compare o tamanho dos metadados e a parcela de cada arquivo, bloco a bloco.',
        'Remova os metadados para deixar os arquivos menores e mais seguros para compartilhar.',
      ],
      faq: [
        {
          q: 'Por que alguns arquivos têm tantos metadados?',
          a: 'Prévias incorporadas, manifestos C2PA com miniaturas e fluxos do ComfyUI podem somar dezenas ou centenas de kilobytes, enquanto o EXIF básico costuma ter poucos.',
        },
        {
          q: 'Por que o perfil de cor aparece como mantido?',
          a: 'O perfil de cor ICC é necessário para exibir as cores corretamente, então o limpador o mantém. Ele não entra no total de metadados.',
        },
        {
          q: 'Remover os metadados altera a imagem?',
          a: 'Não. Só os blocos de metadados são removidos; os dados da imagem são copiados sem alteração, então o arquivo fica menor sem perder qualidade.',
        },
      ],
    },
  },
};

export default tools;
