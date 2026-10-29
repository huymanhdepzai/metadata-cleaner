import type { Article } from '../types';

const article: Article = {
  title: 'Eliminar metadatos de JPG online: sin pérdida y sin subidas',
  summary: [
    'Cualquier JPG de una cámara, un móvil o un generador de IA puede llevar EXIF (cámara, hora, GPS), XMP, IPTC y Content Credentials C2PA. Suelta tus archivos JPG en la herramienta de esta página para ver exactamente qué contienen y eliminarlo con un clic.',
    'El limpiador recorta los segmentos de metadatos a nivel de bytes, así que los datos de imagen comprimidos se copian sin cambios: sin volver a guardar, sin pérdida de calidad y sin subir nada.',
  ],
  description:
    'Elimina metadatos EXIF, GPS, XMP, IPTC y C2PA de archivos JPG/JPEG en tu navegador. Sin pérdida: la imagen se copia byte a byte. Gratis, sin subidas, por lotes y ZIP.',
  answer:
    'Para eliminar los metadatos de un JPG online sin perder calidad, suelta el archivo en la herramienta de esta página y pulsa «Eliminar metadatos de IA». El EXIF (incluido el GPS), XMP, IPTC, C2PA y los comentarios se recortan a nivel de bytes, mientras los datos de imagen comprimidos se copian sin cambios, así que la foto se ve idéntica. Todo se ejecuta en tu navegador: el archivo nunca se sube.',
  sections: [
    {
      heading: 'Qué puede esconder un archivo JPG',
      paragraphs: ['Un JPEG es una secuencia de segmentos de marcador. Además de la propia imagen, a menudo contiene:'],
      table: {
        head: ['Segmento', 'Qué puede contener'],
        rows: [
          ['APP1 EXIF', 'Modelo de cámara o móvil, hora de captura, exposición, coordenadas GPS, una miniatura incrustada'],
          ['APP1 XMP', 'Historial de edición, autor, palabras clave, campos de IA como IPTC DigitalSourceType'],
          ['APP13 IPTC', 'Pies de foto, créditos, avisos de copyright'],
          ['APP11 JUMBF', 'Content Credentials C2PA: un registro firmado de cómo se creó la imagen'],
          ['COM, APP2 MPF, datos tras EOI', 'Comentarios, vistas previas, la parte de vídeo de las fotos en movimiento'],
        ],
      },
      related: ['remove-exif', 'what-is-exif-data', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Cómo eliminar los metadatos de un JPG en tres pasos',
      paragraphs: [],
      steps: [
        'Suelta uno o varios archivos JPG en la herramienta de arriba o pulsa «Elegir imágenes».',
        'Lee el informe: detalles de privacidad, indicios de IA y procedencia, y la lista completa de metadatos encontrados en cada archivo.',
        'Pulsa «Eliminar metadatos de IA» y descarga cada archivo o todo en un único ZIP. El archivo limpio se vuelve a analizar para que confirmes que no queda nada identificativo.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Por qué es importante limpiar un JPG sin pérdida',
      paragraphs: [
        'JPEG es un formato con pérdida: cada vez que una imagen se decodifica y se vuelve a guardar, se recomprime y pierde algo de detalle. Muchas herramientas para «eliminar metadatos» redibujan la foto y exportan un JPEG nuevo, lo que elimina los metadatos pero también reduce la calidad y puede cambiar los colores.',
        'Esta herramienta nunca decodifica la imagen. Elimina los segmentos de metadatos y copia los datos de imagen comprimidos tal como estaban, así que la foto se ve idéntica y el archivo suele quedar más pequeño.',
      ],
      table: {
        head: ['Método', 'Elimina metadatos', 'Calidad', 'Conserva el perfil de color'],
        rows: [
          ['Limpieza a nivel de bytes (esta herramienta)', 'Sí', 'Sin cambios', 'Sí'],
          ['Guardar de nuevo o redibujar en canvas', 'Sí', 'Recomprimida', 'A menudo no'],
          ['Captura de pantalla', 'Sí', 'Menor, redimensionada', 'No'],
        ],
      },
    },
    {
      heading: 'Qué se conserva en el JPG limpio',
      paragraphs: [
        'Borrarlo todo a ciegas puede estropear cómo se muestra una foto. El limpiador conserva las partes que afectan a su aspecto: la cabecera JFIF, el perfil de color ICC, el segmento de transformación de color de Adobe y la orientación, que se vuelve a escribir en un bloque EXIF mínimo para que la foto siga derecha. Las dimensiones y los datos de imagen nunca cambian.',
      ],
    },
    {
      heading: 'Motivos habituales para limpiar un JPG',
      paragraphs: [],
      bullets: [
        'Borrar el GPS antes de publicar fotos en marketplaces, foros o apps de mensajería.',
        'Eliminar números de serie de la cámara, nombres de autor e historial de edición antes de entregar trabajos a clientes.',
        'Eliminar campos C2PA o de IA que activan la etiqueta «Información de IA» en una foto real.',
        'Quitar prompts y datos del generador de JPEG generados con IA.',
      ],
      related: ['remove-gps-location-from-photos', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo limpiar archivos JPG',
  faq: [
    {
      q: '¿JPG es lo mismo que JPEG?',
      a: 'Sí. .jpg, .jpeg y .jfif son el mismo formato, y se admiten los tres.',
    },
    {
      q: '¿Eliminar los metadatos reduce la calidad del JPG?',
      a: 'No. Los datos de imagen comprimidos se copian byte a byte; solo se eliminan los segmentos de metadatos.',
    },
    {
      q: '¿Se suben mis fotos a algún sitio?',
      a: 'No. Los archivos se leen y se limpian dentro de tu navegador; nunca salen de tu dispositivo.',
    },
    {
      q: '¿Mi foto se girará después de limpiarla?',
      a: 'No. La orientación se vuelve a escribir en un bloque EXIF mínimo, así que la foto se muestra igual.',
    },
    {
      q: '¿Qué pasa con las fotos en movimiento?',
      a: 'Algunos móviles añaden un vídeo corto después de la imagen JPEG. Esos datos finales se eliminan junto con los metadatos, así que el resultado es una foto fija normal.',
    },
    {
      q: '¿Hay un límite de tamaño?',
      a: 'Cada JPG puede tener hasta 25 MB y 40 megapíxeles, y puedes limpiar hasta 50 archivos por lote.',
    },
  ],
};

export default article;
