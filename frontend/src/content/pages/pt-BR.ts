import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Sobre o All Metadata Cleaner',
    description:
      'O All Metadata Cleaner é uma ferramenta gratuita e focada em privacidade para ver e remover EXIF, GPS, XMP, IPTC, C2PA e prompts de IA de imagens no seu navegador.',
    intro:
      'O All Metadata Cleaner é uma ferramenta web gratuita para ver e remover as informações ocultas em arquivos de imagem: EXIF e localização GPS, XMP, IPTC, Content Credentials (C2PA) e os prompts ou fluxos de trabalho que geradores de IA incorporam.',
    sections: [
      {
        heading: 'Por que criamos a ferramenta',
        paragraphs: [
          'Fotos e imagens de IA costumam carregar mais do que as pessoas imaginam: onde a foto foi tirada, com qual aparelho, quem a editou ou o prompt exato de uma imagem de IA. A maioria dos removedores de metadados envia seus arquivos para um servidor ou os recomprime. Queríamos uma ferramenta que não fizesse nenhuma das duas coisas.',
        ],
      },
      {
        heading: 'Como funciona',
        paragraphs: ['Tudo acontece no seu próprio dispositivo:'],
        bullets: [
          'Seu navegador lê cada arquivo e analisa sua estrutura: segmentos JPEG, chunks PNG e caixas WebP e HEIC/AVIF.',
          'Os blocos de metadados são removidos no nível de bytes; os dados da imagem são copiados sem alterações, então a qualidade continua idêntica.',
          'Cada arquivo limpo é analisado novamente para você conferir o que foi removido.',
        ],
      },
      {
        heading: 'Nossos princípios',
        paragraphs: ['Algumas regras orientam todas as nossas decisões:'],
        bullets: [
          'Privacidade em primeiro lugar: as imagens nunca são enviadas, armazenadas ou vistas por nós.',
          'Honestidade: explicamos o que a ferramenta não faz, como remover marcas d’água invisíveis nos pixels.',
          'Gratuita, sem conta, sem marca d’água e sem anúncios.',
        ],
      },
      {
        heading: 'Para quem é',
        paragraphs: [
          'Para qualquer pessoa que compartilha imagens: quem quer proteger a localização antes de postar uma foto, fotógrafos que entregam trabalhos a clientes, criadores que mantêm seus prompts privados e quem teve uma foto real rotulada como IA por engano. Pedimos que todos sigam as regras das plataformas sobre declarar conteúdo gerado por IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de privacidade',
    description:
      'Como o All Metadata Cleaner trata seus dados: as imagens são processadas no seu navegador e nunca enviadas. Sem contas, sem rastreadores, sem anúncios.',
    intro:
      'Esta política explica quais dados o All Metadata Cleaner trata quando você usa o site. Em resumo: suas imagens nunca saem do seu dispositivo e não rastreamos você.',
    sections: [
      {
        heading: 'Suas imagens ficam no seu dispositivo',
        paragraphs: [
          'As imagens que você adiciona são lidas e processadas pelo seu próprio navegador com Web Workers. Elas não são enviadas a nenhum servidor, e nós nunca as recebemos, armazenamos ou vemos. Você pode até se desconectar da internet depois que a página carregar e a ferramenta continua funcionando.',
        ],
      },
      {
        heading: 'O que não coletamos',
        paragraphs: ['O site foi projetado para coletar o mínimo possível:'],
        bullets: [
          'Não é preciso conta, cadastro nem endereço de e-mail.',
          'Nenhum script de análise, publicidade ou rastreamento de redes sociais é carregado, e nenhuma fonte ou script de terceiros é solicitado.',
          'Nenhuma informação sobre o conteúdo ou os metadados das suas imagens é enviada para lugar algum.',
        ],
      },
      {
        heading: 'Dados salvos no seu navegador',
        paragraphs: ['O site lembra apenas duas preferências, no seu dispositivo:'],
        bullets: [
          'O idioma escolhido, salvo no armazenamento local e em um cookie próprio para que a página inicial abra nesse idioma.',
          'O tema escolhido (claro, escuro ou do sistema), salvo no armazenamento local.',
        ],
      },
      {
        heading: 'Hospedagem e registros do servidor',
        paragraphs: [
          'O site é entregue a partir do nosso próprio servidor. Como qualquer servidor web, ele processa informações padrão das requisições, como seu endereço IP, o tipo de navegador e a página solicitada, para entregar o site e protegê-lo contra abusos. O idioma do seu navegador pode ser usado para escolher um idioma padrão. Não usamos essas informações para identificar você ou criar perfis.',
        ],
      },
      {
        heading: 'Alterações nesta política',
        paragraphs: [
          'Se a forma como o site trata dados mudar, atualizaremos esta página e a data no topo. Continuar usando o site após uma atualização significa que você aceita a política revisada.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termos de uso',
    description:
      'Termos de uso do All Metadata Cleaner: uma ferramenta gratuita fornecida no estado em que se encontra, sua responsabilidade pelo uso das imagens limpas e os limites da nossa responsabilidade.',
    intro:
      'Ao usar o All Metadata Cleaner, você concorda com estes termos. Leia-os junto com o aviso legal da página inicial e a nossa Política de privacidade.',
    sections: [
      {
        heading: 'O serviço',
        paragraphs: [
          'O All Metadata Cleaner é uma ferramenta web gratuita que analisa e remove metadados de arquivos de imagem no seu próprio dispositivo. Podemos alterar, melhorar ou descontinuar qualquer parte dela a qualquer momento, sem aviso prévio.',
        ],
      },
      {
        heading: 'Uso aceitável',
        paragraphs: ['Você é responsável pelos arquivos que processa e pelo uso dos resultados. Você concorda em não usar a ferramenta para:'],
        bullets: [
          'violar qualquer lei ou os direitos de terceiros, incluindo direitos autorais e de privacidade;',
          'ocultar conteúdo gerado por IA quando uma lei ou regra da plataforma exigir que você o declare;',
          'remover informações de direitos autorais, licença ou crédito de imagens que não são suas ou que você não tem direito de modificar.',
        ],
      },
      {
        heading: 'Sem garantias',
        paragraphs: [
          'A ferramenta é fornecida “no estado em que se encontra” e “conforme disponível”, sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que ela remova todos os tipos de metadados, que os resultados estejam livres de erros nem que as plataformas tratem as imagens limpas de alguma forma específica. Sempre guarde uma cópia dos arquivos originais.',
        ],
      },
      {
        heading: 'Limitação de responsabilidade',
        paragraphs: [
          'Na máxima extensão permitida por lei, não nos responsabilizamos por perdas ou danos diretos, indiretos, incidentais ou consequentes — incluindo perda de dados, arquivos ou lucros — decorrentes do uso ou da impossibilidade de uso da ferramenta. Algumas jurisdições não permitem certas limitações; nesse caso, elas se aplicam apenas na medida permitida.',
        ],
      },
      {
        heading: 'Alterações nestes termos',
        paragraphs: [
          'Podemos atualizar estes termos periodicamente. A data no topo indica a versão mais recente. Continuar usando a ferramenta após uma alteração significa que você aceita os termos atualizados.',
        ],
      },
    ],
  },
  contact: {
    title: 'Fale conosco',
    description:
      'Fale com a equipe do All Metadata Cleaner: relate um bug, sugira um recurso ou tire uma dúvida sobre privacidade. Lemos todas as mensagens e respondemos o quanto antes.',
    intro:
      'Perguntas, relatos de bugs e ideias são bem-vindos. Escreva para nós por e-mail e responderemos o quanto antes.',
    sections: [
      {
        heading: 'Sobre o que você pode escrever',
        paragraphs: ['Ficamos especialmente felizes em receber:'],
        bullets: [
          'Bugs: um arquivo que não é limpo, ou metadados que não são detectados ou não são removidos.',
          'Sugestões de recursos: novos formatos, opções ou idiomas que você gostaria de ver.',
          'Dúvidas sobre privacidade ou questões legais do site.',
        ],
      },
      {
        heading: 'Antes de escrever',
        paragraphs: [
          'Por favor, não envie fotos privadas. Para relatar um problema, informe o formato do arquivo, a câmera, o celular ou o app que o criou, seu navegador e o que você esperava que acontecesse. Se um arquivo for necessário para reproduzir o problema, envie um que não contenha nada sensível.',
        ],
      },
    ],
  },
};

export default pages;
