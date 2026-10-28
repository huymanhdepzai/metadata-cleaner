import type { Article } from '../types';

const article: Article = {
  title: 'Como controlar as Content Credentials no Photoshop e no Lightroom (e limpar suas exportações)',
  summary: [
    'Os apps da Adobe podem anexar Content Credentials às imagens exportadas — um registro assinado das edições, incluindo qualquer recurso de IA generativa que você usou. Isso ajuda a comprovar seu trabalho, mas também pode ativar rótulos de IA em fotos que só receberam retoques.',
    'Veja de onde vêm as Content Credentials no Photoshop e no Lightroom, como verificar se uma exportação as contém e como removê-las de uma cópia quando precisar.',
  ],
  seoTitle: 'Desativar Content Credentials no Photoshop e Lightroom',
  description:
    'De onde vêm as Content Credentials no Photoshop e no Lightroom, como desativá-las, como verificar o C2PA nas exportações e como removê-lo de uma cópia sem perdas.',
  answer:
    'O Photoshop e o Lightroom anexam Content Credentials (C2PA) às exportações quando você as ativa, e a Adobe também as aplica a conteúdos feitos com recursos de IA generativa, como o Preenchimento generativo. Desativar a configuração pode não impedir as credenciais em edições generativas, então verifique cada exportação: se ela tiver um bloco C2PA indesejado, remova-o de uma cópia com um limpador sem perdas antes de publicar.',
  sections: [
    {
      heading: 'De onde vêm as Content Credentials nos apps da Adobe',
      paragraphs: ['As exportações podem trazer Content Credentials por dois motivos diferentes:'],
      bullets: [
        'Você mesmo ativou as Content Credentials, então o app anexa sua identidade e o histórico de edição na exportação.',
        'Você usou um recurso de IA generativa, como o Preenchimento generativo ou a Expansão generativa — a Adobe aplica Content Credentials ao conteúdo criado com seus recursos generativos, descrevendo-o como editado com IA.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por que isso importa antes de postar',
      paragraphs: [
        'Plataformas como Instagram, Facebook, Threads e TikTok leem as Content Credentials durante o upload. Uma foto com uma única edição generativa pode ser rotulada como conteúdo de IA, mesmo que o resto da imagem seja uma fotografia real.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Como desativar as Content Credentials no Photoshop e no Lightroom',
      paragraphs: [
        'A Adobe vem implementando as Content Credentials (Credenciais de conteúdo) em seus apps, e os controles mudam de lugar entre as versões. Nas versões recentes:',
      ],
      bullets: [
        'Photoshop: procure o painel Content Credentials (no menu Janela) e as opções de Content Credentials na caixa de diálogo de exportação.',
        'Lightroom Classic e Lightroom: procure uma seção de Content Credentials nas configurações de exportação.',
        'Consulte as páginas de ajuda da Adobe para a versão exata que você usa — os nomes e os lugares mudam.',
      ],
    },
    {
      heading: 'Desativar pode não ser suficiente',
      paragraphs: [
        'A Adobe aplica credenciais ao conteúdo de IA generativa independentemente da sua preferência pessoal, então uma exportação que usou o Preenchimento generativo ainda pode trazer um manifesto. Sempre verifique o arquivo exportado em vez de confiar só na configuração.',
      ],
    },
    {
      heading: 'Como verificar se uma exportação tem Content Credentials',
      paragraphs: [],
      steps: [
        'Solte o JPEG, PNG ou outro arquivo exportado na ferramenta do topo desta página.',
        'Em “IA e procedência”, procure um bloco C2PA, o claim generator (por exemplo, Adobe Photoshop), ações c2pa.* e um tipo de origem de composição com IA.',
        'Se algum desses itens aparecer, plataformas que leem Content Credentials podem rotular a imagem.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Como remover as Content Credentials de uma cópia',
      paragraphs: [],
      steps: [
        'Guarde a exportação original com as credenciais como seu arquivo de referência.',
        'Solte uma cópia na ferramenta e clique em “Remover metadados de IA”. O manifesto é cortado no nível de bytes; pixels, dimensões, orientação e perfil de cor são mantidos.',
        'Confirme no painel de resultado que não sobrou nenhum bloco C2PA e baixe o arquivo limpo para o portal do cliente, o marketplace ou a rede social.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Guarde o original como prova',
      paragraphs: [
        'As Content Credentials podem ser uma prova valiosa de autoria e de como uma imagem foi editada. Arquive a exportação original com as credenciais e compartilhe cópias limpas apenas quando os metadados forem enganosos ou revelarem mais do que você pretende.',
      ],
    },
  ],
  faqHeading: 'Perguntas sobre Content Credentials nos apps da Adobe',
  faq: [
    {
      q: 'Se eu desativar as Content Credentials, as edições generativas continuam sendo registradas?',
      a: 'Podem continuar. A Adobe aplica credenciais ao conteúdo de IA generativa, então sempre verifique o arquivo exportado em vez de confiar só na configuração.',
    },
    {
      q: 'Por que o Instagram rotula minha edição do Photoshop como IA?',
      a: 'Os recursos generativos gravam uma declaração de composição com IA nas Content Credentials ou no XMP da exportação, e a Meta lê essa declaração quando você faz o upload.',
    },
    {
      q: 'Remover as credenciais desfaz minhas edições?',
      a: 'Não. Só o bloco de metadados é removido; os pixels editados são copiados sem alteração.',
    },
    {
      q: 'Posso adicionar as credenciais de volta depois?',
      a: 'Não na cópia limpa, mas você pode exportar de novo a partir do arquivo original com as Content Credentials ativadas.',
    },
    {
      q: 'O “Salvar para Web” remove as Content Credentials?',
      a: 'Pode eliminar boa parte dos metadados, mas o comportamento depende da versão e das configurações, e ele recomprime a imagem. Confira o resultado ou, melhor, limpe a exportação original sem perdas.',
    },
    {
      q: 'Posso limpar um ensaio inteiro de uma vez?',
      a: 'Sim. Solte até 50 exportações, limpe todas com um clique e baixe um ZIP.',
    },
  ],
};

export default article;
