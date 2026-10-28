import type { Article } from '../types';

const article: Article = {
  title: 'Quais apps e redes sociais removem os metadados das fotos? (E quando o GPS ainda vaza)',
  summary: [
    'Muita gente acha que as redes sociais removem a localização das fotos. Muitas vezes removem — da cópia publicada. Mas o arquivo original ainda pode circular com o EXIF completo por mensageiros, e-mail, links de nuvem e sites de compartilhamento de arquivos.',
    'Este guia explica quais formas de compartilhar costumam manter ou remover os metadados, como testar qualquer app por conta própria e o único hábito confiável: limpar o arquivo antes que ele saia do seu aparelho.',
  ],
  seoTitle: 'WhatsApp e redes sociais removem o EXIF e o GPS das fotos?',
  description:
    'Quais redes sociais e mensageiros removem os metadados das fotos, quais formas de envio mantêm GPS e EXIF e como garantir que suas fotos estejam limpas antes de enviar.',
  answer:
    'Grandes redes sociais como Facebook, Instagram e X geralmente removem o EXIF — incluindo o GPS — das fotos que publicam, e muitos mensageiros fazem o mesmo com imagens comprimidas. Fotos enviadas como arquivo ou documento, anexos de e-mail, links de nuvem, AirDrop e muitos fóruns ou marketplaces mantêm os metadados originais. A solução confiável é remover os metadados você mesmo antes de compartilhar.',
  sections: [
    {
      heading: 'Cópia publicada vs. arquivo original',
      paragraphs: [
        'Quando você posta uma foto no feed, a maioria das grandes plataformas a recodifica e remove o EXIF da cópia pública. Isso impede que o público veja sua posição GPS, mas a própria plataforma recebe o original durante o upload. O risco maior está em todos os lugares por onde o arquivo original é repassado sem alteração.',
      ],
    },
    {
      heading: 'Mantém os metadados? Formas comuns de compartilhar',
      paragraphs: ['Comportamento típico — sempre confira na versão do seu app:'],
      table: {
        head: ['Forma de compartilhar', 'GPS e EXIF', 'Observações'],
        rows: [
          ['Posts no feed do Facebook, Instagram, X', 'Geralmente removidos', 'A plataforma ainda recebe o original no upload'],
          ['Mensageiros, enviado como foto', 'Geralmente removidos', 'A imagem também é comprimida'],
          ['Mensageiros, enviado como arquivo ou documento', 'Mantidos', 'WhatsApp e Telegram entregam o arquivo original'],
          ['Anexos de e-mail', 'Mantidos', 'O arquivo é enviado como está'],
          ['Links de nuvem (Drive, Dropbox, iCloud)', 'Mantidos', 'Qualquer pessoa com o link recebe o original'],
          ['AirDrop, Bluetooth, USB', 'Mantidos', 'No iPhone dá para excluir a localização nas Opções de compartilhamento'],
          ['Fóruns, marketplaces, sites de portfólio', 'Muitas vezes mantidos', 'Depende se o site recodifica os uploads'],
        ],
      },
    },
    {
      heading: 'Mensageiros: enviar como foto ou como arquivo',
      paragraphs: [
        'A maioria dos mensageiros oferece duas formas de enviar uma imagem. Como foto comum, ela é comprimida e a maior parte dos metadados é removida. Como arquivo ou documento — opção muitas vezes escolhida para manter a qualidade total —, o original é entregue com todos os campos EXIF, incluindo o GPS. Muita gente passa a “enviar como arquivo” por causa da qualidade sem perceber que também está enviando a própria localização.',
      ],
    },
    {
      heading: 'Plataformas que mostram o EXIF de propósito',
      paragraphs: [
        'Algumas comunidades de fotografia e sites de portfólio exibem as configurações da câmera ao lado de cada foto, e alguns deixam o arquivo original disponível para download. Se você posta nesses lugares, considere que seus metadados são públicos, a menos que os limpe antes.',
      ],
    },
    {
      heading: 'Como testar qualquer app por conta própria',
      paragraphs: ['Os apps atualizam com frequência a forma como tratam mídia. Para ter certeza:'],
      steps: [
        'Tire uma foto de teste com a localização ativada.',
        'Envie para você mesmo do jeito que costuma compartilhar fotos.',
        'Baixe o arquivo recebido e solte-o no verificador do topo desta página.',
        'O painel “Detalhes de privacidade” mostra na hora se dados de localização, pessoais ou de data sobreviveram.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Limpe antes de compartilhar',
      paragraphs: [
        'O hábito mais seguro é remover os metadados antes que a foto saia do seu aparelho. Esta ferramenta apaga os campos de GPS, data, câmera e autor, além das prévias escondidas, mantém orientação e cores e processa tudo localmente — ideal para fotos que você envia a desconhecidos, compradores ou clientes.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Perguntas sobre plataformas e metadados de fotos',
  faq: [
    {
      q: 'O WhatsApp remove o GPS das fotos?',
      a: 'Fotos enviadas como imagem comum são comprimidas e perdem a maior parte dos metadados. Fotos enviadas como documento mantêm o arquivo original, incluindo o GPS.',
    },
    {
      q: 'O Instagram mantém a localização da minha foto?',
      a: 'A imagem publicada tem o EXIF removido. Uma marcação de localização que você adiciona ao post é algo separado e fica visível para o público.',
    },
    {
      q: 'O e-mail remove os metadados das fotos?',
      a: 'Não. Os anexos são enviados como estão, então o GPS e os outros campos EXIF continuam no arquivo, a menos que o seu app redimensione a imagem.',
    },
    {
      q: 'O Google Drive ou o iCloud removem os metadados das fotos compartilhadas?',
      a: 'Links compartilhados normalmente dão acesso ao arquivo original, incluindo os metadados. Limpe a foto antes do upload se pretende compartilhá-la.',
    },
    {
      q: 'Tirar um print é uma boa forma de remover metadados?',
      a: 'Remove o EXIF, mas reduz a qualidade, muda as dimensões e pode capturar outras coisas da sua tela. A limpeza sem perdas mantém a imagem original intacta.',
    },
    {
      q: 'Se a plataforma remove os metadados, minha localização está segura?',
      a: 'Em relação ao público, na maior parte — mas a plataforma recebeu o arquivo original, e o conteúdo visível da foto ainda pode revelar onde ela foi tirada.',
    },
  ],
};

export default article;
