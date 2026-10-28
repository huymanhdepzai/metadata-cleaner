import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remover metadados do Stable Diffusion e ComfyUI do PNG',
  description:
    'Stable Diffusion e ComfyUI escondem seu prompt, seed, modelo e workflow inteiro dentro do PNG. Veja o que fica salvo e remova tudo sem perdas no seu navegador.',
  answer:
    'Interfaces do Stable Diffusion como AUTOMATIC1111 e Forge salvam o prompt, a seed, o sampler e o modelo em um chunk de texto do PNG chamado “parameters”, e o ComfyUI incorpora o JSON completo de “prompt” e “workflow”. Para removê-los, solte o PNG em um limpador de metadados sem perdas que exclua os chunks de texto sem recodificar — a imagem continua idêntica pixel a pixel, mas ninguém consegue ler ou recarregar suas configurações.',
  sections: [
    {
      heading: 'O que o Stable Diffusion e o ComfyUI guardam nas suas imagens',
      paragraphs: [
        'Geradores de imagem locais salvam suas configurações como texto dentro do arquivo, para que a imagem possa ser reproduzida depois. Em um PNG, esse texto fica em chunks tEXt, zTXt ou iTXt ao lado dos dados da imagem. O que você normalmente encontra:',
      ],
      table: {
        head: ['Ferramenta', 'Onde', 'O que tem dentro'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'Chunk de texto PNG “parameters”', 'Prompt, prompt negativo, steps, sampler, CFG scale, seed, tamanho, nome e hash do modelo, LoRAs, configurações de extensões'],
          ['ComfyUI', 'Chunks de texto PNG “prompt” e “workflow”', 'O grafo de nós executado e o layout completo do editor em JSON'],
          ['InvokeAI, NovelAI, Fooocus e outros', 'Chaves de texto PNG próprias', 'Configurações de geração parecidas, com nomes específicos de cada ferramenta'],
          ['Exportações em JPEG ou WebP', 'EXIF UserComment ou XMP', 'O mesmo texto de parâmetros, dependendo da ferramenta'],
        ],
      },
    },
    {
      heading: 'Por que o workflow do ComfyUI revela tanto',
      paragraphs: [
        'Um workflow do ComfyUI não é só um prompt — é o seu pipeline inteiro. Qualquer pessoa que arraste seu PNG para o ComfyUI recebe cada nó, modelo, LoRA, upscaler, ControlNet e configuração, prontos para rodar. Os workflows também podem conter caminhos de arquivos locais, nomes de pastas ou nomes de usuário, e grafos grandes somam dezenas de kilobytes a cada imagem.',
      ],
    },
    {
      heading: 'Vale a pena remover os dados de geração?',
      paragraphs: [
        'Os dados de geração são uma receita. Removê-los faz sentido quando você vende ou publica arte finalizada, entrega trabalhos a clientes ou simplesmente não quer que copiem seu estilo exato. Também há bons motivos para mantê-los: sites de compartilhamento de modelos leem os parâmetros para mostrar as informações de geração, e colaboradores podem precisar do workflow.',
        'Você não precisa adivinhar — o relatório mostra exatamente o que há em cada arquivo antes de qualquer remoção, então dá para decidir imagem por imagem.',
      ],
    },
    {
      heading: 'Como ver o prompt e o workflow de um PNG',
      steps: [
        'Solte o PNG na ferramenta do topo desta página.',
        'Abra o painel “IA e procedência”: os chunks aparecem sinalizados como “Prompt do Stable Diffusion” ou “Fluxo de trabalho do ComfyUI”.',
        'Abra “Todos os metadados e detalhes do arquivo” para ler cada chunk de texto com sua palavra-chave (parameters, prompt, workflow) e o valor completo. Chunks zTXt e iTXt comprimidos são descomprimidos no navegador para você conseguir lê-los.',
      ],
      paragraphs: [],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Como remover os metadados do Stable Diffusion e do ComfyUI',
      steps: [
        'Solte um PNG ou um lote inteiro de imagens geradas na ferramenta (até 50 arquivos por vez).',
        'Clique em “Remover metadados de IA”. Os chunks de texto, XMP, EXIF e C2PA são removidos por inteiro.',
        'Confirme no painel de resultado que não sobrou nenhum campo de IA e baixe os arquivos um a um ou em um ZIP.',
      ],
      paragraphs: [],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'O que continua no PNG limpo',
      paragraphs: [
        'IHDR, IDAT, a paleta, a transparência, os chunks de gama e de cor e os chunks de animação APNG são mantidos. Como os chunks são removidos por inteiro, os checksums dos chunks restantes continuam válidos e o arquivo limpo abre em qualquer lugar.',
      ],
    },
    {
      heading: 'Pare de salvar metadados nas imagens novas',
      paragraphs: ['Se você não quer nunca dados de geração nas suas imagens, desative isso na origem — vale apenas para imagens novas:'],
      bullets: [
        'ComfyUI: inicie com a opção de linha de comando --disable-metadata ou use um nó de salvamento que não incorpore o workflow.',
        'AUTOMATIC1111 e Forge: em Settings, procure as opções que controlam o salvamento dos parâmetros de geração nas informações do PNG e desative-as.',
        'Outras interfaces: confira nas configurações de salvamento de imagem se há uma opção que grava prompts ou parâmetros no arquivo.',
      ],
    },
    {
      heading: 'Sem perdas vs. salvar de novo',
      paragraphs: [
        'Abrir a imagem em um editor e salvar de novo também elimina o texto, mas recomprime a imagem e pode descartar o perfil de cor ou reduzir imagens de 16 bits para 8 bits. A remoção no nível de bytes mantém os dados IDAT exatamente como o gerador os gravou, então o PNG limpo fica idêntico ao original pixel a pixel.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre metadados do Stable Diffusion e do ComfyUI',
  faq: [
    {
      q: 'O ComfyUI ainda consegue carregar o workflow de um PNG limpo?',
      a: 'Não. Os chunks “prompt” e “workflow” são removidos, então arrastar o arquivo limpo para o ComfyUI não restaura o grafo. Guarde uma cópia original se for precisar do workflow depois.',
    },
    {
      q: 'A qualidade da imagem é afetada?',
      a: 'Não. Os chunks IDAT, que guardam os dados comprimidos da imagem, são copiados sem alteração, então o PNG limpo fica idêntico ao original pixel a pixel.',
    },
    {
      q: 'Funciona com exportações em JPEG e WebP do Stable Diffusion?',
      a: 'Sim. Prompts guardados em EXIF UserComment ou XMP também são detectados e removidos de arquivos JPEG e WebP.',
    },
    {
      q: 'Como ver o prompt de uma imagem do Stable Diffusion?',
      a: 'Solte o PNG na ferramenta e abra “Todos os metadados e detalhes do arquivo”. O chunk “parameters” mostra o prompt completo, o prompt negativo, a seed e o modelo.',
    },
    {
      q: 'Minhas imagens são enviadas para um servidor?',
      a: 'Não. Os arquivos são analisados e limpos localmente no seu navegador, então prompts e workflows nunca saem do seu dispositivo.',
    },
    {
      q: 'Posso limpar centenas de imagens geradas de uma vez?',
      a: 'Sim, em lotes de até 50 arquivos. Limpe a lista entre um lote e outro e baixe cada lote em um ZIP.',
    },
  ],
};

export default article;
