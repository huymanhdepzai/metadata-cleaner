import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Sobre o All Metadata Cleaner',
    description:
      'O All Metadata Cleaner é uma ferramenta gratuita e focada na privacidade para ver e remover EXIF, GPS, XMP, IPTC, C2PA e prompts de IA de imagens no seu navegador.',
    intro:
      'O All Metadata Cleaner é uma ferramenta web gratuita para ver e remover as informações ocultas em ficheiros de imagem: EXIF e localização GPS, XMP, IPTC, Content Credentials (C2PA) e os prompts ou fluxos de trabalho que os geradores de IA incorporam.',
    sections: [
      {
        heading: 'Porque a criámos',
        paragraphs: [
          'As fotografias e as imagens de IA contêm muitas vezes mais do que se imagina: onde foi tirada a fotografia, com que dispositivo, quem a editou ou o prompt exato de uma imagem de IA. A maioria das ferramentas para remover metadados envia os ficheiros para um servidor ou volta a comprimi-los. Queríamos uma ferramenta que não fizesse nenhuma das duas coisas.',
        ],
      },
      {
        heading: 'Como funciona',
        paragraphs: ['Tudo acontece no seu próprio dispositivo:'],
        bullets: [
          'O navegador lê cada ficheiro e analisa a sua estrutura: segmentos JPEG, chunks PNG e caixas WebP e HEIC/AVIF.',
          'Os blocos de metadados são removidos ao nível dos bytes; os dados da imagem são copiados sem alterações, pelo que a qualidade se mantém idêntica.',
          'Cada ficheiro limpo é analisado novamente para que possa verificar o que foi removido.',
        ],
      },
      {
        heading: 'Os nossos princípios',
        paragraphs: ['Algumas regras orientam todas as nossas decisões:'],
        bullets: [
          'Privacidade em primeiro lugar: as imagens nunca são enviadas, guardadas ou vistas por nós.',
          'Honestidade: explicamos o que a ferramenta não consegue fazer, como remover marcas de água invisíveis nos píxeis.',
          'Gratuita, sem conta, sem marca de água e sem anúncios.',
        ],
      },
      {
        heading: 'Para quem é',
        paragraphs: [
          'Para quem partilha imagens: quem quer proteger a sua localização antes de publicar uma fotografia, fotógrafos que entregam trabalhos a clientes, criadores que mantêm os seus prompts privados e quem viu uma fotografia real ser rotulada como IA por engano. Pedimos a todos que sigam as regras das plataformas sobre a declaração de conteúdo gerado por IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de privacidade',
    description:
      'Como o All Metadata Cleaner trata os seus dados: as imagens são processadas no navegador e nunca são enviadas. Sem contas, sem rastreadores, sem anúncios.',
    intro:
      'Esta política explica que dados o All Metadata Cleaner trata quando utiliza o site. Em resumo: as suas imagens nunca saem do seu dispositivo e não o rastreamos.',
    sections: [
      {
        heading: 'As suas imagens ficam no seu dispositivo',
        paragraphs: [
          'As imagens que adiciona são lidas e processadas pelo seu próprio navegador com Web Workers. Não são enviadas para nenhum servidor e nunca as recebemos, guardamos ou vemos. Pode até desligar-se da internet depois de a página carregar e a ferramenta continua a funcionar.',
        ],
      },
      {
        heading: 'O que não recolhemos',
        paragraphs: ['O site foi concebido para recolher o mínimo possível:'],
        bullets: [
          'Não são necessárias contas, registos nem endereços de e-mail.',
          'Não são carregados scripts de análise, publicidade ou rastreio de redes sociais, nem são pedidos tipos de letra ou scripts de terceiros.',
          'Nenhuma informação sobre o conteúdo ou os metadados das suas imagens é enviada para lado nenhum.',
        ],
      },
      {
        heading: 'Dados guardados no seu navegador',
        paragraphs: ['O site só memoriza duas preferências, no seu dispositivo:'],
        bullets: [
          'O idioma escolhido, guardado no armazenamento local e num cookie próprio para que a página inicial abra nesse idioma.',
          'O tema escolhido (claro, escuro ou do sistema), guardado no armazenamento local.',
        ],
      },
      {
        heading: 'Alojamento e registos do servidor',
        paragraphs: [
          'O site é disponibilizado a partir do nosso próprio servidor. Como qualquer servidor web, trata informações normais dos pedidos, como o endereço IP, o tipo de navegador e a página pedida, para disponibilizar o site e protegê-lo contra abusos. O idioma do seu navegador pode ser usado para escolher um idioma predefinido. Não usamos estas informações para o identificar ou criar perfis.',
        ],
      },
      {
        heading: 'Alterações a esta política',
        paragraphs: [
          'Se a forma como o site trata os dados mudar, atualizaremos esta página e a data no topo. Continuar a utilizar o site após uma atualização significa que aceita a política revista.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termos de utilização',
    description:
      'Termos de utilização do All Metadata Cleaner: uma ferramenta gratuita disponibilizada tal como está, a sua responsabilidade pela utilização das imagens limpas e os limites da nossa responsabilidade.',
    intro:
      'Ao utilizar o All Metadata Cleaner, aceita estes termos. Leia-os juntamente com o aviso legal da página inicial e a nossa Política de privacidade.',
    sections: [
      {
        heading: 'O serviço',
        paragraphs: [
          'O All Metadata Cleaner é uma ferramenta web gratuita que analisa e remove metadados de ficheiros de imagem no seu próprio dispositivo. Podemos alterar, melhorar ou descontinuar qualquer parte da ferramenta a qualquer momento e sem aviso prévio.',
        ],
      },
      {
        heading: 'Utilização aceitável',
        paragraphs: ['É responsável pelos ficheiros que processa e pela forma como utiliza os resultados. Compromete-se a não utilizar a ferramenta para:'],
        bullets: [
          'violar qualquer lei ou os direitos de terceiros, incluindo direitos de autor e de privacidade;',
          'ocultar conteúdo gerado por IA quando uma lei ou regra da plataforma o obrigue a declará-lo;',
          'remover informações de direitos de autor, licença ou créditos de imagens que não lhe pertencem ou que não tem direito a modificar.',
        ],
      },
      {
        heading: 'Sem garantias',
        paragraphs: [
          'A ferramenta é disponibilizada «tal como está» e «conforme disponível», sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que remova todos os tipos de metadados, que os resultados estejam isentos de erros nem que as plataformas tratem as imagens limpas de uma forma específica. Guarde sempre uma cópia dos ficheiros originais.',
        ],
      },
      {
        heading: 'Limitação de responsabilidade',
        paragraphs: [
          'Na máxima medida permitida por lei, não somos responsáveis por quaisquer perdas ou danos diretos, indiretos, acidentais ou consequentes — incluindo perda de dados, ficheiros ou lucros — resultantes da utilização ou da impossibilidade de utilização da ferramenta. Algumas jurisdições não permitem certas limitações; nesse caso, aplicam-se apenas na medida permitida.',
        ],
      },
      {
        heading: 'Alterações a estes termos',
        paragraphs: [
          'Podemos atualizar estes termos periodicamente. A data no topo indica a versão mais recente. Continuar a utilizar a ferramenta após uma alteração significa que aceita os termos atualizados.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contacte-nos',
    description:
      'Contacte a equipa do All Metadata Cleaner: comunique um erro, sugira uma funcionalidade ou faça uma pergunta sobre privacidade. Lemos todas as mensagens e respondemos o mais depressa possível.',
    intro:
      'Perguntas, relatórios de erros e ideias são bem-vindos. Envie-nos um e-mail e responderemos o mais depressa possível.',
    sections: [
      {
        heading: 'Sobre o que nos pode escrever',
        paragraphs: ['Gostamos especialmente de receber:'],
        bullets: [
          'Erros: um ficheiro que não é limpo, ou metadados que não são detetados ou não são removidos.',
          'Sugestões de funcionalidades: novos formatos, opções ou idiomas que gostaria de ver.',
          'Questões de privacidade ou jurídicas relacionadas com o site.',
        ],
      },
      {
        heading: 'Antes de escrever',
        paragraphs: [
          'Por favor, não envie fotografias privadas. Para comunicar um problema, indique o formato do ficheiro, a câmara, o telemóvel ou a aplicação que o criou, o seu navegador e o que esperava que acontecesse. Se for necessário um ficheiro para reproduzir o problema, envie um que não contenha nada sensível.',
        ],
      },
    ],
  },
};

export default pages;
