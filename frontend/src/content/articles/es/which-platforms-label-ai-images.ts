import type { Article } from '../types';

const article: Article = {
  title: 'Qué plataformas etiquetan las imágenes de IA: Instagram, Facebook, TikTok, YouTube y más',
  summary: [
    'Las grandes plataformas muestran cada vez más etiquetas como «Información de IA» en imágenes y vídeos. La mayoría leen los mismos indicios estándar del sector incrustados en el archivo (Content Credentials C2PA y metadatos IPTC) y los combinan con lo que declaran los creadores.',
    'Así funciona en general el etiquetado en las grandes plataformas, qué lo activa y qué implica para las fotos reales que solo se editaron ligeramente.',
  ],
  seoTitle: 'Qué redes etiquetan imágenes de IA: Instagram, TikTok…',
  description:
    'Cómo etiquetan las imágenes de IA Instagram, Facebook, Threads, TikTok, YouTube, Pinterest y LinkedIn, qué metadatos activan las etiquetas y qué implica para tus fotos.',
  answer:
    'Instagram, Facebook y Threads («Información de IA»), TikTok, YouTube y Pinterest etiquetan el contenido de IA, y LinkedIn muestra un icono de Content Credentials. La mayoría de las etiquetas automáticas se activan por las Content Credentials C2PA o por el campo IPTC DigitalSourceType del archivo subido, combinados con la declaración del creador. Una pequeña edición generativa puede bastar para que una foto por lo demás real reciba una etiqueta.',
  sections: [
    {
      heading: 'Etiquetas de IA por plataforma de un vistazo',
      paragraphs: ['Las políticas cambian a menudo, pero el panorama general es este:'],
      table: {
        head: ['Plataforma', 'Qué ven los usuarios', 'Desencadenantes principales'],
        rows: [
          ['Instagram, Facebook, Threads', 'Etiqueta «Información de IA» (antes «Hecho con IA»)', 'C2PA, metadatos IPTC, interruptor del creador'],
          ['TikTok', 'Etiqueta de contenido generado por IA', 'Declaración del creador, Content Credentials C2PA'],
          ['YouTube', 'Etiqueta de contenido alterado o sintético', 'Declaración del creador al subir el vídeo'],
          ['Pinterest', 'Etiqueta de contenido modificado con IA', 'Metadatos y sus propios clasificadores'],
          ['LinkedIn', 'Icono «CR» de Content Credentials', 'Datos C2PA de la imagen'],
        ],
      },
    },
    {
      heading: 'Los indicios en los que se basan las plataformas',
      paragraphs: ['Las etiquetas automáticas suelen depender de un pequeño conjunto de indicios compartidos:'],
      bullets: [
        'Content Credentials C2PA que declaran generación o edición con IA.',
        'El campo IPTC DigitalSourceType, por ejemplo trainedAlgorithmicMedia o compositeWithTrainedAlgorithmicMedia.',
        'Marcas de agua invisibles de algunos proveedores de IA, cuando la plataforma dispone de un detector.',
        'La declaración del propio creador: un interruptor o una casilla al publicar contenido de IA realista.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Instagram, Facebook y Threads (Meta)',
      paragraphs: [
        'Meta muestra la etiqueta «Información de IA» (que se llamó «Hecho con IA» hasta 2024) cuando detecta indicios de IA estándar del sector o cuando un creador declara contenido de IA. Después de que los fotógrafos se quejaran de que se etiquetaban fotos con retoques ligeros, Meta trasladó la etiqueta del contenido editado con IA al menú de la publicación, mientras que el contenido generado en gran parte se etiqueta de forma más visible.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'TikTok',
      paragraphs: [
        'TikTok exige a los creadores que etiqueten el contenido realista generado con IA y ha afirmado que etiqueta automáticamente el contenido que llega con Content Credentials C2PA que lo identifican como generado con IA. También añade Content Credentials a parte del contenido creado con sus propios efectos de IA.',
      ],
    },
    {
      heading: 'YouTube',
      paragraphs: [
        'YouTube pide a los creadores que declaren al subir el contenido realista alterado o sintético y muestra una etiqueta a los espectadores, de forma más visible en temas sensibles. También admite C2PA para el caso contrario: un indicador de «grabado con una cámara» para el contenido con credenciales de captura auténticas.',
      ],
    },
    {
      heading: 'Pinterest y LinkedIn',
      paragraphs: [
        'Pinterest etiqueta las imágenes que identifica como generadas o modificadas con IA, a partir de los metadatos y de sus propios clasificadores. LinkedIn muestra un icono de Content Credentials en las imágenes que llevan datos C2PA, para que los usuarios puedan consultar el origen y las ediciones.',
        'Las políticas de todas las plataformas cambian con frecuencia, así que consulta el centro de ayuda actual de cada una antes de contar con un comportamiento concreto.',
      ],
    },
    {
      heading: 'Por qué se etiquetan fotos reales',
      paragraphs: [
        'Una sola edición asistida por IA (borrar un objeto con una herramienta generativa, ampliar un fondo o usar un borrador con IA en el móvil) puede marcar toda la foto como contenido compuesto con IA en sus metadatos. Las plataformas leen esa declaración sin valorar el tamaño de la edición.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Cómo comprobar una foto antes de publicarla',
      paragraphs: [],
      steps: [
        'Suelta el archivo exacto que vas a subir en el comprobador de la parte superior de esta página.',
        'Mira el panel «IA y procedencia» para ver qué campo activaría una etiqueta.',
        'Si la etiqueta fuera errónea, elimina los metadatos de una copia y sube la copia limpia.',
        'Si la imagen está generada en gran parte con IA, decláralo: las etiquetas existen para que el público esté informado.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Preguntas sobre las etiquetas de IA en redes sociales',
  faq: [
    {
      q: '¿Por qué mi foto recibe una etiqueta de IA si solo borré un objeto pequeño?',
      a: 'Muchos editores registran las ediciones generativas en los metadatos C2PA o IPTC como «composición con IA». Las plataformas leen esa declaración sin valorar el tamaño de la edición.',
    },
    {
      q: '¿Las plataformas conservan los metadatos después de publicar?',
      a: 'La mayoría leen los metadatos al subir el archivo y luego los eliminan de la copia publicada, así que si descargas tu propia publicación casi nunca verás los campos originales.',
    },
    {
      q: '¿Una imagen limpia evitará cualquier etiqueta?',
      a: 'No necesariamente. La limpieza elimina los indicios guardados en el archivo, pero las plataformas también pueden usar la detección de marcas de agua, clasificadores o pedirte que declares el contenido de IA.',
    },
    {
      q: '¿X (Twitter) etiqueta las imágenes de IA?',
      a: 'X se basa sobre todo en su política de contenido multimedia sintético y manipulado y en las notas de la comunidad, más que en una etiqueta automática basada en metadatos. Consulta su política actual para más detalles.',
    },
    {
      q: '¿Tengo que declarar las imágenes de IA?',
      a: 'La mayoría de las plataformas exigen declarar el contenido realista generado con IA, sobre todo si muestra personas o hechos reales. Las normas varían, así que consulta la política de cada plataforma.',
    },
    {
      q: '¿Puedo comprobar si mi imagen va a recibir una etiqueta?',
      a: 'Sí. Suéltala en el comprobador: si muestra C2PA o un DigitalSourceType de IA, es probable que las plataformas que leen esos indicios la etiqueten.',
    },
  ],
};

export default article;
