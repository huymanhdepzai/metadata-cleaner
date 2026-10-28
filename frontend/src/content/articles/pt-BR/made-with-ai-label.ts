import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Como tirar o rótulo “Feito com IA” do Instagram',
  description:
    'Por que fotos reais ganham o rótulo “Informações de IA” (antigo “Feito com IA”) no Instagram, Facebook e Threads, que metadados o ativam e como corrigir.',
  answer:
    'Instagram, Facebook e Threads mostram o rótulo “Informações de IA” (antes chamado “Feito com IA”) quando o arquivo enviado contém sinais de IA — normalmente Content Credentials (C2PA) ou um campo IPTC DigitalSourceType gravado por um editor como o Photoshop. Para corrigir um rótulo indevido em uma foto real, verifique esses campos, remova-os de uma cópia sem recomprimir a imagem e publique a cópia limpa.',
  sections: [
    {
      heading: 'O que significa o rótulo “Informações de IA”',
      paragraphs: [
        'A Meta exibe “Informações de IA” em posts do Instagram, Facebook e Threads quando acredita que uma imagem ou vídeo foi criado ou editado com IA generativa. Até meados de 2024 o rótulo se chamava “Feito com IA” (“Made with AI”); a Meta mudou o nome depois que muitos fotógrafos reclamaram que fotos com retoques comuns estavam sendo marcadas como criações de IA.',
        'Hoje, o conteúdo que a Meta considera substancialmente gerado por IA recebe um rótulo visível, enquanto o conteúdo apenas editado com ferramentas de IA costuma mostrar a informação no menu do post. Em ambos os casos, o rótulo vem do mesmo lugar: sinais detectados no arquivo ou declarados pelo próprio criador.',
      ],
    },
    {
      heading: 'Como a Meta detecta IA em uma imagem',
      paragraphs: ['A Meta afirma que usa indicadores padrão do setor, além da declaração do criador. Na prática, três fatores contam:'],
      bullets: [
        'Content Credentials (C2PA) — um manifesto assinado que informa o app que gerou o arquivo e as ações realizadas, como “created” ou “edited with generative fill”.',
        'IPTC DigitalSourceType nos metadados XMP — valores como trainedAlgorithmicMedia (totalmente gerada) ou compositeWithTrainedAlgorithmicMedia (foto com partes geradas por IA).',
        'Autodeclaração — a opção de rótulo de IA que você pode ativar ao publicar e que a Meta pede para usar em conteúdo de IA realista.',
      ],
      table: {
        head: ['Sinal no arquivo', 'Origem típica', 'Resultado provável'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'Geradores de imagem com IA', 'Rótulo de IA em destaque'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Preenchimento generativo, Expansão generativa, borrachas com IA', 'Rótulo “Informações de IA”, muitas vezes no menu'],
          ['Manifesto C2PA com ações de IA', 'Photoshop, Firefly, serviços de IA', 'Rótulo “Informações de IA”'],
          ['Sem campos de IA, sem declaração', 'Câmera, celular, edições sem IA', 'Normalmente sem rótulo'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por que fotos reais ganham o rótulo “Feito com IA” por engano',
      paragraphs: [
        'A maioria dos falsos positivos vem do software de edição, não da câmera. Os editores modernos gravam dados de procedência assim que uma ferramenta com IA toca na imagem — mesmo que a mudança seja de poucos pixels:',
      ],
      bullets: [
        'Remover um objeto pequeno, ampliar o fundo ou endireitar o horizonte com recursos generativos do Photoshop pode marcar o arquivo inteiro como composição com IA.',
        'Exportar com Content Credentials ativado incorpora um manifesto assinado que lista cada edição registrada.',
        'Algumas galerias de celular adicionam marcadores de edição com IA depois de usar borrachas de objetos ou outras edições generativas.',
        'Salvar de novo ou converter o arquivo normalmente mantém os metadados que ele já tinha, então o rótulo pode acompanhar a imagem por vários apps.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Como descobrir qual campo ativa o rótulo',
      paragraphs: ['Antes de mudar qualquer coisa, confirme o que o arquivo realmente contém:'],
      steps: [
        'Solte na ferramenta do topo desta página exatamente o arquivo que você pretende publicar. O processamento acontece no seu navegador, então nada é enviado.',
        'Abra o painel “IA e procedência”. Cada sinal aparece com a origem, por exemplo “C2PA · compositeWithTrainedAlgorithmicMedia” ou “XMP · Iptc4xmpExt › DigitalSourceType”.',
        'Abra “Todos os metadados e detalhes do arquivo” para ver os valores brutos, incluindo o claim generator (o app que assinou o manifesto) e as ações c2pa.* registradas.',
        'Se o veredito for “Requer atenção”, o arquivo tem Content Credentials, mas nenhuma declaração explícita de IA. As plataformas ainda podem ler o manifesto, então revise-o antes de postar.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Como remover o rótulo “Informações de IA” de uma foto real',
      paragraphs: [
        'Se o rótulo descreve seu trabalho de forma errada, corrija a causa no arquivo em vez de brigar com o rótulo depois de publicar:',
      ],
      steps: [
        'Guarde a exportação original como arquivo — ela pode servir de prova de como você editou a imagem.',
        'Na ferramenta acima, clique em “Remover metadados de IA”. O contêiner C2PA e os blocos XMP, IPTC e EXIF são cortados no nível de bytes; pixels, dimensões, orientação e perfil de cor continuam intactos.',
        'Confira o painel verde de resultado: o arquivo limpo é analisado de novo, para você confirmar que não sobrou nenhum campo de IA ou de procedência.',
        'Publique a cópia limpa como um novo post. Editar um post existente não faz o arquivo ser lido de novo, então um rótulo já aplicado normalmente continua.',
      ],
    },
    {
      heading: 'Por que não tirar um print ou salvar de novo como JPEG?',
      paragraphs: [
        'Prints de tela e truques de “salvar para web” também eliminam metadados, mas recomprimem a imagem, reduzem a resolução e podem alterar as cores — toda vez que você faz isso. A limpeza no nível de bytes remove só os blocos de metadados e copia os dados comprimidos da imagem exatamente como estão, então não há perda de qualidade nenhuma.',
      ],
    },
    {
      heading: 'Se o rótulo continuar depois da limpeza',
      paragraphs: [
        'Os metadados são a causa mais comum de rótulos em fotos editadas, mas não a única. A Meta também usa outros métodos de detecção e a declaração do criador. Se uma foto limpa ainda for rotulada, verifique se a opção de rótulo de IA estava ativada na hora de postar e use as opções de feedback da plataforma se achar que o rótulo está errado.',
      ],
    },
    {
      heading: 'Quando você deve manter o rótulo',
      paragraphs: [
        'Remover metadados corrige rótulos que descrevem seu trabalho de forma errada. Isso não muda o que a imagem é. Se uma imagem foi gerada total ou substancialmente por IA e parece realista, as regras das plataformas geralmente exigem que você declare isso, e o rótulo ajuda quem vê a entender o que está vendo. Use o limpador para corrigir erros e proteger sua privacidade — não para apresentar imagens sintéticas como fotos reais.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Perguntas sobre o rótulo “Informações de IA”',
  faq: [
    {
      q: '“Feito com IA” e “Informações de IA” são a mesma coisa?',
      a: 'Sim. Em 2024 a Meta renomeou o rótulo “Feito com IA” (“Made with AI”) para “Informações de IA” (“AI info”) e o levou para o menu do post no caso de conteúdo apenas editado com ferramentas de IA.',
    },
    {
      q: 'Remover os metadados garante que o rótulo desapareça?',
      a: 'Não. Isso remove os sinais guardados no arquivo, que são a causa mais comum de rótulos em fotos editadas. As plataformas ainda podem usar outros métodos de detecção ou pedir que você declare conteúdo de IA.',
    },
    {
      q: 'Dá para tirar o rótulo de um post que já foi publicado?',
      a: 'Normalmente não editando o post. O arquivo é analisado no momento do upload, então a solução confiável é limpar o arquivo e publicar de novo.',
    },
    {
      q: 'A foto fica diferente depois da limpeza?',
      a: 'Não. Só os blocos de metadados são removidos; os dados da imagem são copiados byte a byte, e a orientação e o perfil de cor ICC são mantidos.',
    },
    {
      q: 'Posso remover só os campos de IA e manter os dados da câmera?',
      a: 'A versão atual remove todos os metadados que identificam — localização, câmera, autor e procedência de IA — em um único passo, que é o padrão mais seguro para compartilhar. Dimensões, orientação, cores e animação são sempre mantidas.',
    },
    {
      q: 'Isso também funciona no Facebook e no Threads?',
      a: 'Sim. Instagram, Facebook e Threads usam o mesmo sistema de rótulos da Meta, então os mesmos campos ativam o rótulo nos três.',
    },
  ],
};

export default article;
