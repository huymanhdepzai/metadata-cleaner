import type { Article } from '../types';

const article: Article = {
  title: 'Remover metadados de PNG — prompts, workflow, XMP e C2PA',
  summary: [
    'Arquivos PNG guardam metadados em chunks de texto, e as ferramentas de IA usam muito esse recurso: o Stable Diffusion grava seu prompt e suas configurações, o ComfyUI incorpora o workflow inteiro e os editores adicionam dados XMP ou C2PA.',
    'Use a ferramenta desta página para ver cada chunk e remover os metadados mantendo a imagem, a transparência, as cores e a animação exatamente como estão.',
  ],
  description:
    'Remova prompts, workflows do ComfyUI, XMP, EXIF e C2PA de arquivos PNG no navegador. Mantém transparência, perfil de cor e animação APNG. Grátis, sem upload.',
  answer:
    'Para remover os metadados de um PNG, solte-o na ferramenta desta página e clique em “Remover metadados de IA”. Os chunks de texto (tEXt, zTXt, iTXt) com prompts, workflows do ComfyUI e XMP são excluídos junto com os chunks eXIf, caBX (C2PA), tIME e dSIG. Dados da imagem, transparência, perfil de cor e animação APNG são copiados sem alteração, então o PNG continua idêntico pixel a pixel.',
  sections: [
    {
      heading: 'Onde ficam os metadados de um PNG',
      paragraphs: ['Um PNG é uma lista de chunks. Os dados da imagem ficam nos chunks IDAT; os metadados ficam em chunks separados:'],
      table: {
        head: ['Chunk', 'O que guarda'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Texto livre: “parameters” do Stable Diffusion, JSON “prompt” e “workflow” do ComfyUI, XMP'],
          ['eXIf', 'Dados EXIF como câmera, data e GPS'],
          ['caBX', 'Content Credentials (C2PA)'],
          ['tIME, dSIG', 'Hora da última modificação e assinaturas digitais'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Como remover metadados de um PNG em três passos',
      paragraphs: [],
      steps: [
        'Solte seus arquivos PNG na ferramenta acima — pode ser em lote.',
        'Abra o relatório para ver o prompt, o workflow e os outros campos encontrados.',
        'Clique em “Remover metadados de IA” e baixe os arquivos limpos um a um ou em um ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'O que é mantido no PNG limpo',
      paragraphs: [
        'Só os chunks de metadados são removidos. Tudo o que afeta a aparência da imagem continua: cabeçalho, paleta, dados da imagem, transparência (tRNS), gama e cromaticidade, o perfil de cor sRGB ou ICC e os chunks de animação APNG. Se o arquivo declarava uma orientação, ela é regravada em um chunk eXIf mínimo com checksum válido.',
      ],
    },
    {
      heading: 'Por que não simplesmente salvar o PNG de novo?',
      paragraphs: [
        'A compressão do PNG é sem perdas, mas salvar de novo ainda muda coisas. Redesenhar um PNG em um canvas do navegador — o que muitas ferramentas online fazem — pode descartar o perfil de cor, alterar as bordas transparentes e reduzir imagens de 16 bits para 8 bits. Cortar os chunks evita tudo isso: os dados IDAT são exatamente o que seu gerador ou editor gravou.',
      ],
    },
    {
      heading: 'Evite metadados no PNG da próxima vez',
      paragraphs: [
        'Se você não quer nunca dados de geração nos seus arquivos, confira as configurações do seu gerador: o ComfyUI pode ser iniciado com --disable-metadata, e muitas interfaces do Stable Diffusion têm uma opção para parar de salvar os parâmetros de geração. Para os arquivos que você já tem, limpá-los aqui é a solução mais rápida.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Perguntas sobre como limpar arquivos PNG',
  faq: [
    {
      q: 'O PNG perde qualidade?',
      a: 'Não. Os chunks com os dados da imagem são copiados byte a byte, então a imagem fica idêntica à original pixel a pixel.',
    },
    {
      q: 'Alguém consegue recuperar meu workflow do ComfyUI depois da limpeza?',
      a: 'Não a partir do arquivo limpo — os chunks de prompt e workflow são removidos por completo. As cópias que você compartilhou antes ainda os contêm.',
    },
    {
      q: 'A transparência é preservada?',
      a: 'Sim. Os canais alfa e o chunk tRNS são mantidos exatamente como estavam.',
    },
    {
      q: 'PNGs animados são suportados?',
      a: 'Sim. Os chunks de animação APNG são mantidos, então a animação roda exatamente como antes.',
    },
    {
      q: 'O arquivo PNG fica menor?',
      a: 'Normalmente sim — principalmente em imagens do ComfyUI, em que o workflow incorporado pode somar dezenas de kilobytes.',
    },
    {
      q: 'Meus PNGs são enviados?',
      a: 'Não. Tudo é processado no seu navegador e nunca sai do seu dispositivo.',
    },
  ],
};

export default article;
