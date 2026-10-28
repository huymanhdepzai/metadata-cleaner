import type { Article } from '../types';

const article: Article = {
  title: 'Qué son los datos EXIF: guía sencilla sobre los metadatos de las fotos',
  summary: [
    'EXIF (Exchangeable Image File Format) es la información oculta que una cámara o un móvil escribe en cada foto: ajustes de la cámara, fecha y hora, modelo del dispositivo y, a menudo, la ubicación GPS.',
    'Esta guía explica qué contiene el EXIF, en qué se diferencia de XMP, IPTC y C2PA, por qué importa para tu privacidad y cómo verlo o eliminarlo de forma segura.',
  ],
  seoTitle: 'Qué son los datos EXIF de una foto y cómo verlos',
  description:
    'Qué son los datos EXIF, qué campos contienen (cámara, hora, GPS), en qué se diferencian de XMP, IPTC y C2PA, y cómo verlos o eliminarlos sin perder calidad.',
  answer:
    'Los datos EXIF son metadatos que las cámaras y los móviles guardan dentro de una foto: la marca y el modelo del dispositivo, los ajustes de exposición, la fecha y la hora, la orientación, una pequeña miniatura y a menudo la ubicación GPS. No afectan al aspecto de la imagen. Puedes verlos en la información de la foto de tu móvil o con un visor de metadatos, y eliminarlos con un limpiador que conserve la orientación y el perfil de color.',
  sections: [
    {
      heading: 'Qué significa EXIF',
      paragraphs: [
        'EXIF son las siglas de Exchangeable Image File Format, un estándar creado para las cámaras digitales para que cada foto pueda llevar información sobre cómo se tomó. Casi todas las cámaras y smartphones escriben EXIF automáticamente, y la mayoría de las apps de fotos pueden leerlo.',
      ],
    },
    {
      heading: 'Qué contienen los datos EXIF',
      paragraphs: ['Una foto típica puede incluir:'],
      table: {
        head: ['Grupo', 'Campos de ejemplo'],
        rows: [
          ['Dispositivo', 'Make, Model, LensModel, a veces un número de serie'],
          ['Exposición', 'ISO, FNumber (apertura), ExposureTime (velocidad de obturación), FocalLength, Flash'],
          ['Fecha y hora', 'DateTimeOriginal, DateTimeDigitized, OffsetTime'],
          ['Ubicación', 'GPSLatitude, GPSLongitude, GPSAltitude, GPSImgDirection'],
          ['Imagen', 'Orientation, resolución, miniatura incrustada'],
          ['Software', 'Software, la aplicación que guardó el archivo por última vez'],
        ],
      },
    },
    {
      heading: 'Dónde se guarda el EXIF dentro del archivo',
      paragraphs: [
        'En los archivos JPEG, el EXIF está en un segmento APP1 cerca del inicio del archivo y se organiza en directorios (IFD): IFD0 para los datos básicos de la imagen y del dispositivo, el directorio Exif para los ajustes de la cámara, el directorio GPS para la ubicación e IFD1 para la miniatura. Los archivos HEIC, WebP y PNG también pueden llevar EXIF, cada uno en su propio contenedor.',
      ],
      related: ['remove-metadata-from-jpg', 'remove-metadata-from-heic', 'remove-metadata-from-png'],
    },
    {
      heading: 'EXIF frente a XMP, IPTC y C2PA',
      paragraphs: ['Las fotos suelen llevar varios tipos de metadatos a la vez:'],
      table: {
        head: ['Estándar', 'Quién lo escribe', 'Contenido típico'],
        rows: [
          ['EXIF', 'Cámaras y móviles', 'Datos técnicos de captura, hora, GPS'],
          ['XMP', 'Software de edición', 'Descripciones, palabras clave, historial de edición, campos de IA'],
          ['IPTC', 'Redacciones, agencias de stock, editores', 'Pies de foto, créditos, derechos, DigitalSourceType'],
          ['C2PA', 'Cámaras, editores, servicios de IA', 'Content Credentials firmadas: procedencia y ediciones'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por qué los datos EXIF importan para tu privacidad',
      paragraphs: [
        'Para los fotógrafos, el EXIF es una herramienta de aprendizaje y un registro de su trabajo. Para todos los demás es sobre todo un riesgo para la privacidad: una sola foto puede revelar la dirección de tu casa, tu dispositivo y cuándo estuviste en un lugar. Además, el EXIF es fácil de editar, así que nunca debe tomarse como prueba por sí solo.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Cómo ver los datos EXIF de una foto',
      paragraphs: [],
      bullets: [
        'Windows: clic derecho en el archivo › Propiedades › Detalles.',
        'Mac: abre la foto en Vista Previa › Herramientas › Mostrar inspector.',
        'iPhone y Android: abre la foto y desliza hacia arriba.',
        'Cualquier dispositivo: suelta la foto en la herramienta de la parte superior de esta página para decodificar cada campo EXIF, XMP e IPTC, agrupado por origen.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: 'Cómo eliminar los datos EXIF de forma segura',
      paragraphs: [
        'Al eliminar el EXIF, conserva la etiqueta de orientación para que las fotos no se giren, conserva el perfil de color para que los colores sigan siendo fieles y evita las herramientas que recomprimen la imagen. Esta herramienta hace las tres cosas automáticamente: pulsa «Eliminar metadatos de IA», revisa el panel de resultados y descarga el archivo limpio.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre los datos EXIF',
  faq: [
    {
      q: '¿El EXIF afecta a la calidad de la imagen?',
      a: 'No. El EXIF se guarda separado de los datos de imagen, así que eliminarlo no cambia el aspecto de la imagen.',
    },
    {
      q: '¿Se pueden falsificar los datos EXIF?',
      a: 'Sí. Los campos EXIF se pueden editar con herramientas comunes, así que son pistas útiles pero nunca una prueba por sí solos.',
    },
    {
      q: '¿La orientación forma parte del EXIF? ¿Se conserva?',
      a: 'Sí, la orientación es una etiqueta EXIF. El limpiador la vuelve a escribir en un bloque EXIF mínimo para que tus fotos se sigan mostrando en la posición correcta.',
    },
    {
      q: '¿Las capturas de pantalla tienen datos EXIF?',
      a: 'Las capturas de pantalla suelen tener poco EXIF, pero aun así pueden incluir la fecha, el dispositivo y el software que las creó.',
    },
    {
      q: '¿Los archivos PNG tienen EXIF?',
      a: 'Pueden tenerlo, en un chunk eXIf, pero los metadatos de un PNG se guardan más a menudo en chunks de texto, que es donde las herramientas de IA ponen los prompts.',
    },
    {
      q: '¿Es legal eliminar los datos EXIF?',
      a: 'Eliminar los metadatos de tus propias fotos suele no plantear problemas. No elimines la información de copyright o de créditos de imágenes que no son tuyas si una licencia lo exige.',
    },
  ],
};

export default article;
