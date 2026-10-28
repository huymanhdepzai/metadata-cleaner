import type { Article } from '../types';

const article: Article = {
  title: 'Eliminar Content Credentials C2PA de imágenes: gratis y sin subidas',
  seoTitle: 'Eliminar C2PA (Content Credentials) online y gratis',
  summary: [
    'Photoshop, Lightroom, Firefly, la generación de imágenes de ChatGPT y algunas cámaras añaden un manifiesto C2PA firmado, las Content Credentials, que registra qué aplicación o modelo de IA creó o editó una imagen.',
    'Suelta tus imágenes en la herramienta de esta página para ver qué dice el manifiesto y eliminarlo de una copia con un clic. Los datos de imagen se copian sin cambios y no se sube nada.',
  ],
  description:
    'Elimina las Content Credentials C2PA de JPG, PNG, WebP, HEIC y AVIF en tu navegador. Revisa primero el manifiesto y bórralo sin pérdida. Gratis, sin subidas y por lotes.',
  answer:
    'Para eliminar las Content Credentials C2PA, suelta la imagen en la herramienta de esta página y pulsa «Eliminar metadatos de IA». El manifiesto C2PA (APP11 en JPEG, caBX en PNG, chunk C2PA en WebP, caja uuid en HEIC/AVIF) se recorta junto con XMP, IPTC y EXIF, mientras los datos de imagen se copian byte a byte. El archivo limpio se vuelve a comprobar para que confirmes que no queda ningún manifiesto.',
  sections: [
    {
      heading: 'Cómo eliminar las Content Credentials en tres pasos',
      paragraphs: [],
      steps: [
        'Suelta una o varias imágenes en la herramienta de arriba: admite JPG, PNG, WebP, GIF, HEIC y AVIF.',
        'Abre «IA y procedencia» en el informe para ver si hay un manifiesto C2PA, qué aplicación lo firmó y qué acciones registra.',
        'Pulsa «Eliminar metadatos de IA» y descarga los archivos limpios uno a uno o en un ZIP. El panel de resultados confirma que el C2PA ha desaparecido.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Dónde se guarda el manifiesto C2PA',
      paragraphs: ['El manifiesto vive en su propio bloque, separado de los datos de imagen, así que se puede eliminar sin recodificar:'],
      table: {
        head: ['Formato', 'Bloque C2PA', 'También se elimina'],
        rows: [
          ['JPEG', 'APP11 (JUMBF)', 'EXIF, XMP, IPTC, comentarios'],
          ['PNG', 'Chunk caBX', 'Chunks de texto, eXIf, tIME'],
          ['WebP', 'Chunk C2PA', 'EXIF, XMP'],
          ['HEIC, AVIF', 'Caja uuid', 'Elementos Exif y XMP'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por qué se eliminan las Content Credentials',
      paragraphs: [],
      bullets: [
        'Una foto real se retocó ligeramente con una herramienta generativa y ahora recibe una etiqueta «Información de IA» que no merece.',
        'El manifiesto revela software, nombres de cuenta, historial de edición o archivos de origen (ingredients) que prefieres no publicar.',
        'Un cliente o una plataforma necesita archivos de imagen sin datos de procedencia.',
        'Quieres revisar qué declara una imagen antes de decidir si la compartes tal cual.',
      ],
      related: ['made-with-ai-label', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Lo que no hace eliminar el C2PA',
      paragraphs: [
        'Quitar el manifiesto solo elimina el registro guardado en esa copia del archivo. No elimina marcas de agua invisibles en los píxeles como SynthID, ni afecta a las Content Credentials «duraderas» que un verificador puede recuperar a partir de una huella digital o de un repositorio online.',
        'Si una imagen está generada con IA, las plataformas pueden seguir pidiéndote que lo declares. Sigue las normas de cada plataforma: eliminar metadatos no cambia cómo se creó la imagen.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Evita que los archivos nuevos lleven Content Credentials',
      paragraphs: [
        'En Photoshop y Lightroom, las Content Credentials se pueden desactivar en los ajustes de exportación, aunque algunas funciones generativas las añaden igualmente. Los servicios de imágenes con IA suelen añadirlas a cada resultado. Para los archivos que ya tienes, limpiar una copia aquí es la solución más rápida; conserva el original por si más adelante necesitas demostrar su procedencia.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo eliminar C2PA',
  faq: [
    {
      q: '¿Eliminar el C2PA reduce la calidad de la imagen?',
      a: 'No. El manifiesto es un bloque aparte; los datos de imagen comprimidos se copian sin cambios.',
    },
    {
      q: '¿Puedo ver las Content Credentials antes de eliminarlas?',
      a: 'Sí. El panel «IA y procedencia» muestra el claim generator, las acciones registradas y el tipo de origen, y «Todos los metadatos» enumera cada campo.',
    },
    {
      q: '¿Se suben mis imágenes?',
      a: 'No. Los archivos se leen y se limpian en tu navegador y nunca salen de tu dispositivo.',
    },
    {
      q: '¿Instagram o Facebook seguirán etiquetando la imagen?',
      a: 'Las etiquetas basadas en metadatos C2PA o IPTC pierden su origen, pero las plataformas pueden usar otros indicios o pedirte que declares tú mismo el contenido de IA.',
    },
    {
      q: '¿Elimina SynthID u otras marcas de agua invisibles?',
      a: 'No. Están incrustadas en los píxeles, y esta herramienta nunca modifica los píxeles.',
    },
    {
      q: '¿Puedo eliminar el C2PA de muchas imágenes a la vez?',
      a: 'Sí. Suelta hasta 50 imágenes por lote y descárgalas todas en un único archivo ZIP.',
    },
  ],
};

export default article;
