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
      guide: {
        sections: [
          {
            title: 'O que cada grupo de metadados revela',
            text: 'O visualizador agrupa cada campo conforme o lugar do arquivo em que ele está gravado. Cada grupo é escrito por um programa diferente, com um propósito diferente, então saber a origem ajuda a entender o quanto confiar em um valor e o quão sensível ele é.',
            items: [
              { term: 'EXIF', text: 'Gravado pela câmera ou pelo celular: marca e modelo, lente, exposição, data da captura e fuso horário. Também pode trazer o nome do proprietário, o número de série do corpo e uma MakerNote com dados próprios do fabricante.' },
              { term: 'EXIF · GPS', text: 'Latitude e longitude, muitas vezes com precisão de poucos metros, além da altitude e às vezes a direção para onde a câmera apontava. É o campo que quase todo mundo quer conferir antes de compartilhar.' },
              { term: 'XMP', text: 'Adicionado por programas de edição como Lightroom ou Photoshop: a ferramenta usada, o histórico de edição, classificações e palavras-chave. Ferramentas de IA também usam XMP para declarar que uma imagem foi gerada.' },
              { term: 'IPTC', text: 'Legendas, autor, linha de crédito e aviso de copyright, usados principalmente por agências de notícias e bancos de imagens.' },
              { term: 'C2PA', text: 'Content Credentials: um manifesto assinado que registra qual aplicativo ou modelo de IA criou a imagem e quais edições foram feitas. As plataformas leem esse manifesto para mostrar selos de “Info de IA”.' },
              { term: 'PNG text', text: 'Blocos de texto livre. O Stable Diffusion guarda ali o prompt, a seed e o modelo; o ComfyUI guarda o workflow completo de nós em JSON.' },
              { term: 'ICC', text: 'O perfil de cor. Não contém dados pessoais e é necessário para exibir as cores corretamente.' },
            ],
          },
          {
            title: 'Como ler o relatório',
            text: 'Cada arquivo abre com um resumo de privacidade que lista os campos de localização, dados pessoais e horário encontrados. Logo abaixo, a seção de IA dá um de três vereditos: “Sinais de IA detectados” quando os metadados citam uma ferramenta de IA, contêm um prompt ou declaram geração por IA; “Requer atenção” quando há Content Credentials sem declaração explícita de IA; e “Sem sinais de IA” quando nada foi encontrado. A tabela completa vem por último. Use a busca para ir direto ao que importa: digitar “GPS”, “Serial”, “Software” ou “prompt” costuma ser bem mais rápido do que rolar por cem campos.',
          },
          {
            title: 'Quando vale a pena ver os metadados',
            text: 'Olhe dentro de uma foto antes de publicá-la ou enviá-la a alguém que você não conhece, quando um vendedor de marketplace ou um desconhecido manda uma imagem para você, quando uma plataforma marca uma foto real como IA e você quer saber o motivo, e depois de limpar um arquivo para confirmar que não sobrou nada — basta soltar a cópia limpa no visualizador. Lembre-se de que qualquer pessoa pode editar ou apagar metadados, então eles são uma pista, não uma prova.',
          },
        ],
        faq: [
          {
            q: 'Os metadados provam quando ou onde uma foto foi tirada?',
            a: 'Sozinhos, não. Datas e GPS no EXIF podem ser alterados com ferramentas gratuitas. Os manifestos C2PA são assinados e mais difíceis de falsificar, mas são fáceis de remover, então a ausência de um manifesto também não prova nada.',
          },
          {
            q: 'Por que minha foto quase não mostra metadados?',
            a: 'A maioria das redes sociais e dos apps de mensagem remove o EXIF no envio, e capturas de tela nunca tiveram dados de câmera. Um arquivo baixado dessas plataformas geralmente já está limpo.',
          },
          {
            q: 'Quais formatos posso verificar?',
            a: 'Fotos JPG, PNG, WebP e HEIC/HEIF, incluindo as do iPhone. Você pode soltar vários arquivos de uma vez e abrir o relatório de cada um separadamente.',
          },
        ],
      },
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
      guide: {
        sections: [
          {
            title: 'O que a análise procura',
            text: 'A análise separa os metadados encontrados em quatro tipos de exposição. Cada um responde a uma pergunta diferente que alguém poderia fazer sobre você a partir de um único arquivo.',
            items: [
              { term: 'Localização', text: 'Latitude, longitude e altitude do GPS. Uma foto tirada em casa com o celular pode apontar para a sua porta, por isso qualquer localização deixa o resultado com risco alto.' },
              { term: 'Pessoal e dispositivo', text: 'Marca e modelo da câmera, campos de autor e copyright, nome do proprietário, número de série do corpo, ID único da imagem, comentários e dados MakerNote do fabricante. Um número de série pode ligar fotos que você publica em contas diferentes à mesma câmera.' },
              { term: 'Horário', text: 'Data original da captura, frações de segundo e fuso horário. Juntos, mostram quando você esteve em algum lugar e, aproximadamente, em que parte do mundo você mora.' },
              { term: 'IA e procedência', text: 'Content Credentials, nomes de ferramentas de IA e prompts de geração. Não são dados pessoais no sentido usual, mas revelam como a imagem foi feita e podem acionar selos de IA.' },
            ],
          },
          {
            title: 'O que fazer em cada nível de risco',
            text: 'Alto: a foto contém uma localização — remova antes de compartilhar em qualquer lugar público e, se quiser ver o quão precisa ela é, abra o mapa primeiro. Médio: não há localização, mas o arquivo traz dados do dispositivo, pessoais, de horário ou de IA — tudo bem para amigos, mas vale limpar antes de publicar ou mandar para desconhecidos. Baixo: nenhum metadado sensível foi encontrado, então o arquivo em si não entrega você; o que aparece na imagem ainda pode entregar.',
          },
          {
            title: 'Onde os metadados sobrevivem ao compartilhamento',
            text: 'Muitas redes sociais grandes removem o GPS na publicação, mas vários outros canais não: anexos de e-mail, armazenamento em nuvem e links de compartilhamento de arquivos, AirDrop e Nearby Share, fotos enviadas “como arquivo” ou “como documento” em apps de conversa, fóruns e sites pequenos. Se você não tem certeza de por onde uma foto vai passar, verifique aqui e limpe antes que ela saia do seu aparelho.',
          },
        ],
        faq: [
          {
            q: 'Como impedir que o celular adicione a localização às fotos?',
            a: 'No iPhone, vá em Ajustes → Privacidade e Segurança → Serviços de Localização → Câmera e escolha Nunca. No Android, abra as configurações do app de câmera e desative as tags de localização (o nome varia conforme a marca). As fotos já tiradas mantêm a localização até você removê-la.',
          },
          {
            q: 'Risco baixo significa que a foto é segura para compartilhar?',
            a: 'Significa que os metadados estão limpos. Rostos, números de casa, placas de carro, documentos sobre a mesa ou um reflexo na janela ainda podem revelar mais do que você quer, então dê uma olhada também na própria imagem.',
          },
          {
            q: 'Posso verificar fotos que alguém me enviou?',
            a: 'Sim. A análise apenas lê o arquivo, então é um jeito rápido de saber se uma foto recebida ainda tem localização ou dados do dispositivo — por exemplo, antes de encaminhá-la.',
          },
        ],
      },
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
      guide: {
        sections: [
          {
            title: 'O que costuma ocupar espaço',
            text: 'O tamanho dos metadados varia muito mais do que a maioria imagina. Um bloco EXIF comum é minúsculo, enquanto uma única prévia ou um workflow incorporado pode pesar mais do que a imagem de um pequeno gráfico para a web. Estes são os blocos que o medidor costuma encontrar, do menor para o maior:',
            items: [
              { term: 'Perfil de cor ICC', text: 'De algumas centenas de bytes a poucos kilobytes. Aparece como mantido, porque as cores dependem dele.' },
              { term: 'EXIF', text: 'Normalmente alguns kilobytes de configurações da câmera, datas e GPS, mais uma miniatura EXIF que muitas vezes adiciona outros 5–20 KB.' },
              { term: 'XMP', text: 'Menos de um kilobyte em arquivos simples, mas o Photoshop e o Lightroom podem gravar históricos de edição e listas de documentos que chegam a centenas de kilobytes.' },
              { term: 'Manifesto C2PA', text: 'Muitas vezes dezenas de kilobytes: certificados, assinaturas e às vezes miniaturas das imagens de origem.' },
              { term: 'Prompts e workflows PNG', text: 'Os parâmetros do Stable Diffusion ocupam um ou dois kilobytes; um workflow do ComfyUI com muitos nós pode chegar a dezenas ou centenas de kilobytes.' },
              { term: 'Dados depois da imagem', text: 'Alguns celulares anexam dados ao final dos arquivos JPG: imagens secundárias MPF, prévias maiores ou o vídeo curto de uma Motion Photo, o que pode somar vários megabytes.' },
            ],
          },
          {
            title: 'Por que o tamanho dos metadados importa',
            text: 'Em um site, cada kilobyte é multiplicado por cada visitante e cada imagem da página, então tirar algumas dezenas de kilobytes por imagem faz diferença — e, ao contrário de recomprimir, não custa nada em qualidade. O tamanho também é uma pista de privacidade: os maiores blocos costumam ser os mais reveladores, como um histórico de edição completo, um workflow de geração ou uma segunda imagem escondida. Em acervos com milhares de fotos, a economia também aparece no armazenamento.',
          },
          {
            title: 'Como ler o resultado',
            text: 'O destaque mostra o total de metadados que seriam removidos e a parcela que representam no arquivo; a barra logo abaixo deixa essa parcela visível de relance. Em seguida, cada bloco aparece do maior para o menor com sua própria barra, para que os casos fora do comum chamem atenção na hora. O perfil de cor aparece em verde como mantido e não entra no total. Alguns poucos por cento é o normal em fotos grandes de câmera, enquanto PNGs pequenos e imagens de IA costumam chegar a valores bem mais altos.',
          },
        ],
        faq: [
          {
            q: 'Quanto meu arquivo vai diminuir?',
            a: 'Aproximadamente o total de metadados mostrado. O limpador remove esses blocos e copia os dados da imagem como estão, então o arquivo limpo tem o tamanho original menos os metadados removidos.',
          },
          {
            q: 'Remover metadados substitui a compressão de imagens?',
            a: 'Não. A remoção tira apenas o que não faz parte da imagem. Para deixar fotos muito menores, você ainda precisa redimensionar ou recomprimir, o que altera os pixels; remover metadados é o passo gratuito que dá para fazer antes, sem nenhuma perda de qualidade.',
          },
          {
            q: 'Por que uma imagem de IA pequena mostra uma parcela alta de metadados?',
            a: 'Geradores e editores anexam os mesmos prompts, workflows ou Content Credentials independentemente do tamanho da imagem, então, em um arquivo pequeno, eles podem representar grande parte do total de bytes.',
          },
        ],
      },
    },
  },
};

export default tools;
