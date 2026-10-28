import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Como tirar a localização GPS das fotos do celular',
  description:
    'Fotos de celular podem revelar sua localização exata, o aparelho e a hora da captura. Veja quais campos EXIF são arriscados e como tirar o GPS sem perder qualidade.',
  answer:
    'A maioria das fotos de celular guarda coordenadas GPS nos metadados EXIF, muitas vezes com precisão de poucos metros, além do horário da captura e do modelo do aparelho. Para tirar a localização, solte a foto em um limpador de metadados que remova o GPS e os outros campos EXIF que identificam, mantendo orientação e cores, e compartilhe a cópia limpa. Desativar a localização na câmera só vale para fotos novas.',
  sections: [
    {
      heading: 'O que o celular grava em cada foto',
      paragraphs: ['Com o acesso à localização ativado, uma foto típica de smartphone contém:'],
      bullets: [
        'Latitude, longitude e altitude GPS — muitas vezes com precisão de poucos metros —, além de um carimbo de hora GPS e às vezes a direção para onde a câmera apontava.',
        'A data e a hora exatas em que a foto foi tirada e editada pela última vez, muitas vezes com o fuso horário.',
        'Marca e modelo do aparelho, dados da lente e às vezes números de série ou o nome do dono.',
        'Prévias incorporadas e imagens secundárias (por exemplo, imagens MPF ou mapas de profundidade) que podem ter sua própria cópia dos mesmos dados EXIF.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por que a localização da foto é um risco à privacidade',
      paragraphs: [
        'Uma única foto tirada em casa pode revelar seu endereço. Uma série de fotos pode revelar sua rotina — quando você sai para o trabalho, onde seus filhos estudam, onde você passa os fins de semana. Para quem vende coisas online, compartilha fotos com desconhecidos ou posta de lugares sensíveis, os metadados de localização são o vazamento acidental mais comum.',
      ],
    },
    {
      heading: 'Por onde a localização vaza',
      paragraphs: [
        'Muitas das grandes redes sociais removem o EXIF ao publicar sua foto, mas vários canais entregam o arquivo original sem alteração:',
      ],
      bullets: [
        'Enviar uma foto “como arquivo” ou como documento em mensageiros.',
        'Anexos de e-mail e links compartilhados de nuvem.',
        'Fóruns, marketplaces, sites de classificados e de portfólio que mantêm o arquivo original enviado.',
        'AirDrop, Bluetooth e transferências por USB entre aparelhos.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Como saber se uma foto tem localização GPS',
      paragraphs: [],
      steps: [
        'Solte a foto na ferramenta do topo desta página — ela é analisada localmente e nunca é enviada.',
        'O painel “Detalhes de privacidade” mostra de relance se há campos de localização, pessoais ou de data, e a posição GPS decodificada em coordenadas decimais.',
        '“Todos os metadados e detalhes do arquivo” lista cada campo, agrupado em EXIF IFD0, Exif e GPS.',
      ],
    },
    {
      heading: 'Como tirar a localização GPS de uma foto',
      paragraphs: [],
      steps: [
        'Solte uma foto ou um lote de fotos na ferramenta.',
        'Clique em “Remover metadados de IA”. Os campos de GPS, data, câmera, autor e software são removidos, junto com as miniaturas incorporadas e as imagens secundárias MPF, que de outra forma guardariam uma cópia escondida.',
        'Confira o painel verde de resultado para garantir que não sobrou nenhum dado de localização e baixe a foto ou um ZIP do lote.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Remover a localização sem girar nem recomprimir a foto',
      paragraphs: [
        'Uma remoção de EXIF ingênua pode fazer fotos em pé aparecerem deitadas, porque a rotação é guardada como uma tag EXIF. O limpador regrava a orientação em um bloco EXIF mínimo, mantém o perfil de cor para as cores continuarem fiéis e copia os dados da imagem byte a byte. As fotos HEIC do iPhone são limpas no próprio arquivo, sem conversão para JPEG.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Pare de gravar a localização nas fotos novas',
      paragraphs: ['Você também pode impedir a marcação de localização na origem:'],
      bullets: [
        'iPhone: Ajustes › Privacidade e Segurança › Serviços de Localização › Câmera › Nunca. Ao compartilhar uma única foto, toque em Opções na tela de compartilhamento e desative Localização.',
        'Android: desative a opção de localização nas configurações do app de câmera — o nome e o lugar variam conforme o fabricante.',
      ],
      table: {
        head: ['Método', 'Remove o GPS', 'Remove aparelho e data', 'Funciona em fotos antigas'],
        rows: [
          ['Localização da câmera desativada', 'Nas fotos novas', 'Não', 'Não'],
          ['“Localização” desativada ao compartilhar', 'Naquele compartilhamento', 'Não', 'Sim, a cada compartilhamento'],
          ['Limpador de metadados', 'Sim', 'Sim', 'Sim'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Perguntas sobre GPS e privacidade nas fotos',
  faq: [
    {
      q: 'As redes sociais removem os dados de GPS automaticamente?',
      a: 'Muitas das grandes plataformas apagam o EXIF da imagem publicada, mas arquivos enviados como anexo, documento ou link de nuvem geralmente mantêm os metadados originais.',
    },
    {
      q: 'Alguém consegue descobrir minha localização por uma foto?',
      a: 'Se a foto ainda tiver EXIF de GPS, sim — qualquer visualizador de metadados mostra as coordenadas no mapa. Sem metadados, só o conteúdo visível da imagem pode dar pistas.',
    },
    {
      q: 'Minha foto vai ficar girada depois da limpeza?',
      a: 'Não. A tag de orientação é preservada, então a foto aparece do mesmo jeito que antes.',
    },
    {
      q: 'Funciona com fotos HEIC do iPhone?',
      a: 'Sim. Arquivos HEIC e HEIF são limpos no próprio arquivo, sem conversão e sem recodificar a imagem.',
    },
    {
      q: 'Desativar a localização remove o GPS das fotos que já tirei?',
      a: 'Não. Isso só vale para fotos novas. As fotos existentes mantêm a localização até você removê-la.',
    },
    {
      q: 'Minha foto é enviada quando eu removo a localização?',
      a: 'Não. Tudo acontece no seu navegador; a foto nunca sai do seu dispositivo.',
    },
  ],
};

export default article;
