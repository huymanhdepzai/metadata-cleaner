import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Remover metadados de fotos em lote — grátis, sem upload',
  description:
    'Remova metadados de até 50 imagens de uma vez no navegador — JPG, PNG, WebP, GIF, HEIC, AVIF — e baixe tudo em um ZIP. Sem perdas, grátis e sem upload.',
  answer:
    'Para remover metadados de várias imagens de uma vez, solte até 50 arquivos JPG, PNG, WebP, GIF, HEIC ou AVIF na ferramenta, confira os relatórios, clique uma vez em “Remover metadados de IA” e baixe tudo em um único ZIP. O processamento roda em paralelo no seu navegador, então nada é enviado e nenhuma imagem é recomprimida.',
  sections: [
    {
      heading: 'Remover metadados em lote em quatro passos',
      paragraphs: [],
      steps: [
        'Solte até 50 imagens na página — JPG, PNG, WebP, GIF, HEIC ou AVIF, com até 25 MB e 40 megapixels cada. Dá para misturar formatos.',
        'Cada imagem é analisada automaticamente; abra qualquer relatório para ver o que será removido.',
        'Clique uma vez em “Remover metadados de IA” para limpar todas as imagens analisadas.',
        'Baixe as imagens uma a uma ou clique em “Baixar tudo (.zip)” para receber o metadata-cleared.zip.',
      ],
    },
    {
      heading: 'Quando a limpeza em lote vale a pena',
      paragraphs: [],
      bullets: [
        'Fotógrafos que entregam um ensaio ao cliente sem número de série da câmera, localização ou histórico de edição.',
        'Vendedores que publicam muitas fotos de produtos em marketplaces que mantêm os arquivos originais.',
        'Artistas de IA que publicam uma série de imagens sem prompts nem fluxos do ComfyUI.',
        'Equipes que preparam imagens para um site, um kit de imprensa ou um dataset público.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Como continua rápido sem servidor',
      paragraphs: [
        'O trabalho é dividido entre vários Web Workers — threads em segundo plano no seu navegador — de acordo com o número de núcleos de CPU do seu dispositivo. Cada worker lê um arquivo, analisa a estrutura e devolve os bytes limpos, então a página continua respondendo mesmo com arquivos HEIC grandes.',
        'O ZIP é criado com o método “store”, porque as imagens já estão comprimidas: o empacotamento é rápido e não causa nenhuma perda extra de qualidade.',
      ],
    },
    {
      heading: 'Confira cada arquivo antes de compartilhar',
      paragraphs: [
        'Depois da limpeza, cada arquivo gerado é analisado de novo. O painel verde de resultado confirma se os campos de localização, dados pessoais, data e hora e IA sumiram. Arquivos com nomes repetidos são renomeados automaticamente dentro do ZIP, para que nada seja sobrescrito.',
      ],
    },
    {
      heading: 'O que é removido e o que é mantido',
      paragraphs: ['As mesmas regras valem para todos os arquivos do lote:'],
      table: {
        head: ['Removido', 'Mantido'],
        rows: [
          ['Localização GPS, data e hora da captura', 'Dados da imagem, byte a byte'],
          ['Câmera, lente, números de série, software', 'Dimensões e orientação'],
          ['Campos de autor, direitos autorais e descrição', 'Perfil de cor ICC'],
          ['XMP, IPTC, C2PA Content Credentials', 'Transparência e animação'],
          ['Prompts de IA, fluxos, miniaturas incorporadas', 'Nomes originais dos arquivos'],
        ],
      },
    },
    {
      heading: 'Dicas para lotes grandes',
      paragraphs: [],
      bullets: [
        'Para centenas de imagens, trabalhe em lotes de 50 e limpe a lista entre uma rodada e outra para liberar memória.',
        'Em celulares com pouca memória, feche antes outras abas pesadas.',
        'Como o processamento é local, você pode até se desconectar da internet depois que a página carregar.',
      ],
    },
    {
      heading: 'Privado desde a concepção',
      paragraphs: [
        'Nenhuma imagem é enviada, armazenada ou registrada. O único tráfego de rede é o carregamento da própria página. Isso torna a limpeza em lote adequada para trabalhos de clientes, fotos ainda não publicadas e outros arquivos que você não pode mandar para um servidor de terceiros.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre o processamento em lote',
  faq: [
    {
      q: 'Por que o limite é de 50 imagens?',
      a: 'Tudo roda no seu dispositivo. O limite mantém o uso de memória seguro em celulares e computadores mais antigos; você pode fazer quantos lotes quiser.',
    },
    {
      q: 'Posso misturar JPG, PNG e HEIC no mesmo lote?',
      a: 'Sim. Cada arquivo é identificado pelo conteúdo e limpo com o método correspondente, e todos mantêm o formato original.',
    },
    {
      q: 'Os nomes dos arquivos mudam?',
      a: 'Não. Os arquivos limpos mantêm os nomes originais. Só duplicatas exatas dentro do ZIP ganham um sufixo numérico.',
    },
    {
      q: 'Funciona offline?',
      a: 'Sim. Depois que a página carrega, a limpeza funciona sem internet, porque nada é enviado para um servidor.',
    },
    {
      q: 'O ZIP comprime as imagens ainda mais?',
      a: 'Não. As imagens são guardadas como estão, então o ZIP é criado rapidamente e nenhuma imagem perde qualidade.',
    },
    {
      q: 'A limpeza em lote é gratuita?',
      a: 'Sim. Não há conta, marca d’água nem limite de quantos lotes você processa.',
    },
  ],
};

export default article;
