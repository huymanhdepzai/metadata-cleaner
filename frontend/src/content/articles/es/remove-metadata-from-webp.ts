import type { Article } from '../types';

const article: Article = {
  title: 'Eliminar metadatos de imágenes WebP: EXIF, XMP y C2PA',
  summary: [
    'Las imágenes WebP pueden llevar datos EXIF, XMP y C2PA igual que los JPEG, incluidos los campos de procedencia IA que añaden los generadores y editores de imágenes.',
    'Suelta tus archivos WebP en la herramienta de esta página para inspeccionarlos y eliminar los metadatos manteniendo los WebP con pérdida, sin pérdida y animados exactamente como estaban.',
  ],
  description:
    'Elimina metadatos EXIF, XMP y C2PA de imágenes WebP en tu navegador. Conserva imagen, transparencia, perfil de color y animación. Gratis y sin subidas.',
  answer:
    'Para eliminar los metadatos de una imagen WebP, suéltala en la herramienta de esta página y pulsa «Eliminar metadatos de IA». Los chunks EXIF, XMP y C2PA se borran del contenedor RIFF, mientras los datos de imagen VP8/VP8L, la transparencia, el perfil de color ICC y los fotogramas de animación se copian sin cambios: el WebP con pérdida no pierde más calidad y el WebP animado conserva todos sus fotogramas.',
  sections: [
    {
      heading: 'Dónde se guardan los metadatos de un WebP',
      paragraphs: [
        'Los archivos WebP usan un contenedor RIFF formado por chunks. La imagen se guarda en chunks VP8 (con pérdida), VP8L (sin pérdida) o ALPH (transparencia); los metadatos están en chunks separados:',
      ],
      table: {
        head: ['Chunk', 'Función', 'Tras la limpieza'],
        rows: [
          ['VP8, VP8L, ALPH', 'Datos de imagen y transparencia', 'Se conserva, byte a byte'],
          ['ICCP', 'Perfil de color', 'Se conserva'],
          ['ANIM, ANMF', 'Ajustes de animación y fotogramas', 'Se conserva'],
          ['EXIF', 'Cámara, hora, GPS, orientación', 'Se elimina (la orientación se reescribe)'],
          ['XMP', 'Historial de edición, autor, campos de IA', 'Se elimina'],
          ['C2PA', 'Content Credentials', 'Se elimina'],
        ],
      },
    },
    {
      heading: 'Cómo eliminar los metadatos de un WebP en tres pasos',
      paragraphs: [],
      steps: [
        'Suelta tus archivos WebP en la herramienta de arriba.',
        'Revisa el informe para ver los campos EXIF, XMP y de procedencia encontrados en cada archivo.',
        'Pulsa «Eliminar metadatos de IA» y descarga las imágenes limpias una a una o en un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Qué se conserva',
      paragraphs: [
        'Los chunks de imagen, la transparencia, el perfil de color ICC y los fotogramas de animación se copian sin cambios. Si el archivo declaraba una orientación, se vuelve a escribir en un chunk EXIF mínimo para que la imagen se siga mostrando correctamente.',
        'Como nada se decodifica ni se vuelve a codificar, las imágenes WebP con pérdida no pierden más calidad y los WebP animados conservan todos sus fotogramas y su temporización.',
      ],
    },
    {
      heading: 'Cuándo importan los metadatos de un WebP',
      paragraphs: [
        'Muchas webs y herramientas de IA exportan en WebP por defecto, y los metadatos viajan con el archivo cuando lo descargas y lo vuelves a compartir. La limpieza elimina los datos de ubicación, dispositivo y procedencia antes de publicar o enviar la imagen.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo limpiar archivos WebP',
  faq: [
    {
      q: '¿Admite archivos WebP animados?',
      a: 'Sí. Los chunks de animación se conservan, así que los fotogramas y la temporización no cambian.',
    },
    {
      q: '¿La imagen se vuelve a comprimir?',
      a: 'No. Solo se eliminan los chunks de metadatos; los datos de imagen se copian byte a byte.',
    },
    {
      q: '¿Se conserva la transparencia?',
      a: 'Sí. Los datos alfa se mantienen exactamente como estaban.',
    },
    {
      q: '¿Puedo convertir WebP a JPG aquí?',
      a: 'No. La herramienta mantiene cada archivo en su formato original; solo elimina metadatos.',
    },
    {
      q: '¿Hay un límite de tamaño?',
      a: 'Cada archivo puede tener hasta 25 MB y 40 megapíxeles, y puedes limpiar hasta 50 archivos por sesión.',
    },
    {
      q: '¿Se suben mis imágenes?',
      a: 'No. Los archivos WebP se procesan localmente en tu navegador.',
    },
  ],
};

export default article;
