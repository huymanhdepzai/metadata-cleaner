import type { Article } from '../types';

const article: Article = {
  title: '¿Una captura de pantalla elimina los metadatos? Qué conserva y qué pierde',
  seoTitle: '¿Una captura de pantalla elimina los metadatos?',
  summary: [
    'Hacer una captura de pantalla es un atajo popular para deshacerse de los metadatos de una foto. Sí elimina el EXIF, el GPS y el C2PA originales, pero la captura añade sus propios metadatos y pierde calidad.',
    'Aquí verás exactamente qué elimina una captura, qué conserva o añade, qué no puede eliminar nunca y una alternativa más limpia que mantiene intacta la imagen original.',
  ],
  description:
    'Una captura elimina el EXIF, el GPS y el C2PA originales, pero añade metadatos, baja la calidad y mantiene las marcas invisibles. Alternativa sin pérdida.',
  answer:
    'En gran parte, sí. Una captura de pantalla es una imagen nueva, así que el EXIF, la ubicación GPS y las Content Credentials C2PA de la foto original no se copian. Pero la captura recibe sus propios metadatos, como la fecha y el dispositivo, queda limitada a la resolución de tu pantalla y conserva las marcas de agua invisibles y los detalles visibles en la imagen. Eliminar los metadatos del original evita estos inconvenientes.',
  sections: [
    {
      heading: 'Qué elimina una captura de pantalla',
      paragraphs: [
        'Una captura toma los píxeles que muestra tu pantalla y los guarda como un archivo nuevo. No se traslada nada de los metadatos del archivo original, así que desaparece lo siguiente:',
      ],
      bullets: [
        'Coordenadas GPS, modelo de cámara, objetivo y hora de captura original (EXIF).',
        'Autor, copyright e historial de edición (XMP e IPTC).',
        'Content Credentials C2PA y etiquetas IPTC de IA añadidas por generadores de IA o apps de edición.',
        'Prompts, semillas y flujos guardados en archivos PNG generados con IA.',
      ],
    },
    {
      heading: 'Qué añade o conserva una captura de pantalla',
      paragraphs: [
        'Una captura no es un archivo sin metadatos. Según el dispositivo, puede registrar cuándo se hizo, el dispositivo o sistema operativo, las dimensiones de la pantalla y a veces un comentario «Screenshot». En algunos dispositivos, la propia captura también puede llevar Content Credentials. Estos campos suelen ser menos sensibles que la ubicación GPS original, pero siguen diciendo algo de ti.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Lo que una captura de pantalla nunca puede eliminar',
      paragraphs: [],
      bullets: [
        'Marcas de agua invisibles como SynthID de Google, que están en los píxeles y están diseñadas para sobrevivir a las capturas.',
        'Todo lo visible en la imagen: señales de tráfico, números de portal, caras, reflejos o una vista reconocible pueden revelar una ubicación sin ningún metadato.',
        'La información que aparece en pantalla alrededor de la imagen, como notificaciones, la hora o tu nombre de cuenta, si olvidas recortarla.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'Captura de pantalla frente a limpiador de metadatos',
      paragraphs: [],
      table: {
        head: ['', 'Captura de pantalla', 'Limpiador de metadatos'],
        rows: [
          ['EXIF, GPS y C2PA originales', 'No se copian', 'Se eliminan'],
          ['Añade metadatos nuevos', 'Sí (fecha, dispositivo…)', 'No'],
          ['Resolución', 'Limitada a tu pantalla', 'Original'],
          ['Píxeles', 'Recapturados, pueden escalarse', 'Idénticos'],
          ['Perfil de color y HDR', 'A menudo cambian', 'Se conservan'],
          ['Lote de 50 fotos', 'Una a una', 'Un clic'],
        ],
      },
    },
    {
      heading: 'Por qué una captura es una mala forma de limpiar fotos',
      paragraphs: [
        'Salvo que la foto ocupe toda la pantalla al 100 % de zoom, la captura es una copia reducida. Los colores pueden variar cuando el sistema convierte entre perfiles de color, las luces HDR se aplanan y cada nueva captura o subida vuelve a comprimir la imagen. Para todo lo que te importa (portfolio, fotos de producto, arte con IA), limpiar el archivo original da un resultado mejor.',
      ],
      related: ['made-with-ai-label'],
    },
    {
      heading: 'Una forma mejor: eliminar los metadatos del original',
      paragraphs: [],
      steps: [
        'Suelta las fotos originales en el limpiador de la parte superior de esta página: JPG, PNG, WebP, GIF, HEIC o AVIF.',
        'Revisa el informe para ver qué datos de ubicación, personales y de IA contiene cada archivo.',
        'Pulsa «Eliminar metadatos de IA». Solo se eliminan los bloques de metadatos; los datos de imagen se copian byte a byte.',
        'Descarga los archivos limpios a resolución completa, uno a uno o en un ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Preguntas sobre capturas de pantalla y metadatos',
  faq: [
    {
      q: '¿Una captura de pantalla elimina la ubicación GPS de una foto?',
      a: 'Sí. Las coordenadas GPS originales no se copian en la captura. Los detalles visibles en la imagen pueden seguir revelando dónde se tomó.',
    },
    {
      q: '¿Las capturas de pantalla tienen sus propios metadatos?',
      a: 'Sí. Suelen incluir la fecha de captura e información sobre el dispositivo o el software, y a veces un comentario que las identifica como capturas.',
    },
    {
      q: '¿Una captura de pantalla elimina las Content Credentials C2PA?',
      a: 'El manifiesto original no se copia. Algunos dispositivos y apps pueden añadir Content Credentials nuevas a la propia captura, así que revisa el resultado.',
    },
    {
      q: '¿Una captura elimina SynthID u otras marcas de agua invisibles?',
      a: 'No. Las marcas de agua invisibles forman parte de los píxeles y están diseñadas para sobrevivir a capturas, recortes y compresión.',
    },
    {
      q: '¿Una captura de pantalla reduce la calidad de la imagen?',
      a: 'Normalmente sí. Queda limitada a la resolución de tu pantalla, puede escalarse y puede perder el perfil de color original y la información HDR.',
    },
    {
      q: '¿Cuál es la mejor forma de eliminar metadatos sin perder calidad?',
      a: 'Eliminar los metadatos del archivo original con un limpiador sin pérdida. Los datos de imagen se mantienen idénticos y el archivo conserva su resolución completa.',
    },
  ],
};

export default article;
