import type { Article } from '../types';

const article: Article = {
  title: 'Eliminar metadatos de fotos HEIC sin convertirlas a JPG',
  summary: [
    'El iPhone guarda las fotos en HEIC, y cada una registra el modelo del dispositivo, la hora de captura y, si la ubicación está activada, exactamente dónde estabas. Las fotos editadas también pueden llevar datos XMP y C2PA.',
    'La mayoría de las herramientas online convierten el HEIC a JPEG para limpiarlo, lo que recomprime la foto. Esta herramienta elimina los metadatos dentro del propio archivo HEIC, así que sigue siendo HEIC con los datos de imagen originales.',
  ],
  description:
    'Elimina GPS, EXIF, XMP y C2PA de fotos HEIC/HEIF del iPhone en tu navegador, sin convertir a JPEG ni recodificar. Gratis, sin subidas, por lotes y con descarga ZIP.',
  answer:
    'Para eliminar los metadatos de una foto HEIC sin convertirla, suelta el archivo en la herramienta de esta página y pulsa «Eliminar metadatos de IA». Los elementos Exif y XMP se sobrescriben con datos vacíos válidos y las cajas C2PA se convierten en espacio libre, así que desaparecen el GPS, el dispositivo y la hora mientras el archivo sigue siendo HEIC con sus datos de imagen originales. No se sube nada.',
  sections: [
    {
      heading: 'Qué contiene una foto HEIC del iPhone',
      paragraphs: ['HEIC usa el mismo contenedor basado en cajas (boxes) que MP4. Junto a la imagen comprimida suele haber:'],
      bullets: [
        'Un elemento Exif: modelo del dispositivo, objetivo, hora de captura, exposición y ubicación GPS.',
        'Un elemento XMP: detalles de edición y, en imágenes editadas con IA, campos de procedencia.',
        'Cajas uuid: se usan para las Content Credentials C2PA y algunos datos XMP.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por qué el HEIC requiere un cuidado especial',
      paragraphs: [
        'Dentro de un archivo HEIC, un índice (la caja iloc) apunta a los datos de imagen por su posición absoluta en bytes. Si una herramienta simplemente recorta los metadatos, todas las posiciones posteriores se desplazan y la foto deja de abrirse.',
        'Este limpiador trabaja in situ: sobrescribe los elementos Exif y XMP con datos vacíos válidos y convierte las cajas uuid de C2PA en espacio libre (free). El tamaño del archivo no cambia, todos los desplazamientos siguen siendo válidos y los datos de imagen HEVC no se tocan.',
      ],
    },
    {
      heading: 'Cómo eliminar los metadatos de un HEIC en tres pasos',
      paragraphs: [],
      steps: [
        'Abre esta página en tu iPhone o en el ordenador y suelta o elige tus fotos HEIC.',
        'Revisa el informe: el panel de privacidad muestra los datos de ubicación, hora y dispositivo encontrados.',
        'Toca «Eliminar metadatos de IA» y guarda las fotos limpias, o descárgalas todas en un ZIP.',
      ],
      related: ['view-remove-metadata-iphone-android', 'batch-remove-metadata'],
    },
    {
      heading: 'Limpiar el HEIC frente a convertirlo a JPG',
      paragraphs: [],
      table: {
        head: ['', 'Limpiar in situ (esta herramienta)', 'Convertir antes a JPG'],
        rows: [
          ['Formato tras la limpieza', 'HEIC', 'JPEG'],
          ['Calidad de imagen', 'Sin cambios', 'Recomprimida'],
          ['Color amplio y orientación', 'Se conservan', 'Pueden cambiar'],
          ['Tamaño del archivo', 'El mismo que antes', 'A menudo mayor'],
        ],
      },
    },
    {
      heading: 'Qué se conserva',
      paragraphs: [
        'Se conservan las dimensiones de la imagen, la rotación y el volteo, la información de color y la propia imagen comprimida, así que la foto se ve y se comporta exactamente igual que el original. Los archivos HEIF y AVIF, que usan el mismo contenedor, se limpian de la misma manera.',
      ],
    },
    {
      heading: 'Evita que el iPhone guarde la ubicación',
      paragraphs: [
        'Para que las fotos nuevas no lleven GPS, ve a Ajustes › Privacidad y seguridad › Localización › Cámara y elige Nunca. Para envíos puntuales, toca Opciones en la hoja para compartir y desactiva Ubicación. Las fotos existentes conservan sus metadatos hasta que las limpies.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo limpiar fotos HEIC',
  faq: [
    {
      q: '¿Tengo que convertir el HEIC a JPG primero?',
      a: 'No. Los archivos HEIC se limpian directamente y siguen siendo HEIC, así que no hay conversión ni pérdida de calidad.',
    },
    {
      q: '¿Por qué el archivo limpio pesa lo mismo?',
      a: 'Los metadatos se vacían in situ en lugar de recortarse, porque el HEIC guarda posiciones absolutas. Los datos desaparecen, pero el espacio que ocupaban se mantiene.',
    },
    {
      q: '¿Funciona con las Live Photos?',
      a: 'La foto fija de una Live Photo es un archivo HEIC y se puede limpiar. El vídeo corto es un archivo aparte y no se procesa aquí.',
    },
    {
      q: '¿Puedo hacerlo directamente en mi iPhone?',
      a: 'Sí. Abre la página en Safari, elige fotos de tu fototeca, límpialas y guarda el resultado, sin instalar ninguna app.',
    },
    {
      q: '¿También admite HEIF y AVIF?',
      a: 'Sí. Usan el mismo contenedor y se limpian in situ de la misma manera.',
    },
    {
      q: '¿Se suben mis fotos?',
      a: 'No. Las fotos se procesan en tu dispositivo y nunca se envían a un servidor.',
    },
  ],
};

export default article;
