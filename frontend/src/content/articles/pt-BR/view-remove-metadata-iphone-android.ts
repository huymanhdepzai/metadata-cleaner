import type { Article } from '../types';

const article: Article = {
  title: 'Como ver e remover os metadados das fotos no iPhone e no Android',
  summary: [
    'Seu celular registra onde e quando cada foto foi tirada, além do modelo do aparelho. Tanto o iOS quanto o Android permitem ver essas informações e tirar a localização antes de compartilhar.',
    'Veja as opções nativas, os limites delas e um jeito de remover todos os metadados que identificam — inclusive de fotos HEIC do iPhone — direto no navegador, sem instalar app.',
  ],
  seoTitle: 'Ver e remover metadados de fotos no iPhone e Android',
  description:
    'Veja os metadados das fotos no iPhone e no Android, tire a localização antes de compartilhar e apague todo o EXIF — inclusive de HEIC — no navegador, sem instalar app.',
  answer:
    'No iPhone, abra uma foto e deslize para cima para ver a data, a câmera e a localização; no Android, abra a foto no Google Fotos e deslize para cima. Os dois permitem remover ou ocultar a localização, mas o modelo do aparelho, o horário da captura e outros campos EXIF geralmente continuam. Para remover todos os metadados, abra um limpador no navegador do celular, selecione as fotos e baixe as cópias limpas — sem precisar de app.',
  sections: [
    {
      heading: 'Como ver os metadados de uma foto no iPhone',
      paragraphs: [],
      steps: [
        'Abra a foto no app Fotos.',
        'Deslize para cima ou toque no botão de informações (i).',
        'Você verá a data e a hora, a câmera e a lente, os dados de exposição e — se a localização estava ativada — um mapa.',
        'Toque em Ajustar ao lado da data para mudar a data, a hora ou a localização daquela foto.',
      ],
    },
    {
      heading: 'Como tirar a localização ao compartilhar no iPhone',
      paragraphs: ['Duas opções nativas ajudam:'],
      bullets: [
        'Na tela de compartilhamento, toque em Opções no topo e desative Localização antes de enviar.',
        'Para parar de registrar a localização nas fotos novas, vá em Ajustes › Privacidade e Segurança › Serviços de Localização › Câmera e escolha Nunca.',
      ],
    },
    {
      heading: 'Como ver e remover metadados no Android',
      paragraphs: [
        'No Google Fotos, abra uma foto e deslize para cima para ver detalhes como data, aparelho e localização; dependendo da versão, dá para editar ou remover a localização ali mesmo. A Galeria da Samsung e outros apps de galeria mostram detalhes parecidos. Para parar de marcar as fotos novas, desative a opção de localização nas configurações do app de câmera — o nome e o lugar variam conforme o fabricante.',
      ],
    },
    {
      heading: 'O que as opções nativas não removem',
      paragraphs: [
        'As configurações do celular focam na localização. O modelo do aparelho, o horário da captura, os dados da lente, o software de edição e as prévias incorporadas geralmente continuam, e as configurações só valem para fotos futuras ou para um único compartilhamento. Arquivos copiados para o computador ou enviados por outros apps mantêm tudo.',
      ],
      table: {
        head: ['Opção', 'Localização', 'Aparelho e horário', 'Todas as fotos de uma vez'],
        rows: [
          ['Opções de compartilhamento do iPhone › Localização desativada', 'Removida naquele compartilhamento', 'Mantidos', 'A cada compartilhamento'],
          ['Localização da câmera desativada', 'Não é registrada nas fotos novas', 'Mantidos', 'Só fotos novas'],
          ['Remover localização no Google Fotos', 'Removida no app', 'Mantidos', 'Foto por foto'],
          ['Limpador de metadados no navegador', 'Removida', 'Removidos', 'Até 50 por lote'],
        ],
      },
    },
    {
      heading: 'Remova todos os metadados no celular — sem instalar app',
      paragraphs: [],
      steps: [
        'Abra este site no Safari, no Chrome ou em qualquer navegador do celular.',
        'Toque em “Escolher imagens” e selecione as fotos que quer compartilhar.',
        'Confira o relatório e toque em “Remover metadados de IA”.',
        'Salve as fotos limpas ou baixe todas em um ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
    {
      heading: 'Fotos HEIC do iPhone continuam HEIC',
      paragraphs: [
        'O iPhone salva as fotos em HEIC por padrão. Muitas ferramentas as convertem para JPEG para limpá-las, o que recomprime a foto. Este limpador remove os metadados dentro do próprio arquivo HEIC, mantém orientação e cores e não toca nos dados da imagem.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Perguntas sobre metadados de fotos do celular',
  faq: [
    {
      q: 'Desativar a localização remove o GPS das fotos que já tirei?',
      a: 'Não. Isso só vale para fotos novas. As fotos existentes mantêm a localização até você removê-la.',
    },
    {
      q: 'Fotos HEIC do iPhone são suportadas?',
      a: 'Sim. Os arquivos HEIC são limpos diretamente, sem conversão para JPEG e sem recodificar a imagem.',
    },
    {
      q: 'A opção de compartilhamento do iPhone remove todos os metadados?',
      a: 'Principalmente a localização. Outros dados, como o modelo do aparelho e o horário da captura, podem continuar no arquivo compartilhado.',
    },
    {
      q: 'Preciso instalar um app para remover metadados?',
      a: 'Não. O limpador roda no navegador do celular, e as fotos são processadas no próprio aparelho, sem upload.',
    },
    {
      q: 'Como vejo a localização GPS de uma foto?',
      a: 'No iPhone, deslize a foto para cima para ver o mapa. Em qualquer aparelho, solte a foto no verificador para ver as coordenadas decodificadas em “Detalhes de privacidade”.',
    },
    {
      q: 'As fotos limpas continuam na ordem certa na galeria?',
      a: 'As datas de captura são removidas, então as galerias podem ordenar as cópias limpas pela data em que foram salvas. Guarde os originais na sua própria biblioteca.',
    },
  ],
};

export default article;
