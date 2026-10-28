import type { Article } from '../types';

const article: Article = {
  title: 'Quitar EXIF de fotos online: elimina los datos EXIF gratis',
  summary: [
    'Las fotos del móvil y de la cámara llevan datos EXIF: ubicación GPS, hora de captura, modelo del dispositivo y a veces un número de serie. Cualquiera que reciba el archivo original puede leerlos.',
    'Suelta tus fotos en la herramienta de esta página para ver cada campo EXIF y eliminarlo con un clic, sin volver a comprimir la imagen, sin girarla y sin subir nada.',
  ],
  description:
    'Quita los datos EXIF de tus fotos online y gratis: borra GPS, cámara, fecha y número de serie de JPG, HEIC, PNG y WebP en el navegador. Sin pérdida y sin subidas.',
  answer:
    'Para quitar los datos EXIF de una foto, suéltala en la herramienta de esta página y pulsa «Eliminar metadatos de IA». Se borran las coordenadas GPS, la hora de captura, la marca, el modelo y el número de serie de la cámara, junto con XMP e IPTC, y se conservan la orientación y el perfil de color para que la foto se vea igual. La imagen nunca se recomprime ni sale de tu navegador.',
  sections: [
    {
      heading: 'Cómo eliminar los datos EXIF en tres pasos',
      paragraphs: [],
      steps: [
        'Suelta tus fotos en la herramienta de arriba o pulsa «Elegir imágenes». Admite JPG, HEIC, PNG, WebP, GIF y AVIF.',
        'Revisa «Detalles de privacidad» para ver si se exponen datos de ubicación, personales o de fecha, y abre «Todos los metadatos» para ver cada campo.',
        'Pulsa «Eliminar metadatos de IA» y descarga las fotos limpias una a una o en un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Qué campos EXIF se eliminan',
      paragraphs: [],
      table: {
        head: ['Grupo', 'Ejemplos', 'Resultado'],
        rows: [
          ['Ubicación', 'GPSLatitude, GPSLongitude, GPSAltitude', 'Se elimina'],
          ['Dispositivo', 'Make, Model, LensModel, BodySerialNumber', 'Se elimina'],
          ['Fecha y hora', 'DateTimeOriginal, OffsetTime', 'Se elimina'],
          ['Software y autor', 'Software, Artist, Copyright', 'Se elimina'],
          ['Miniatura', 'Vista previa incrustada', 'Se elimina'],
          ['Visualización', 'Orientation, perfil de color ICC', 'Se conserva'],
        ],
      },
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por qué importa quitar el EXIF sin pérdida',
      paragraphs: [
        'Muchas herramientas para quitar EXIF redibujan la foto y guardan un archivo nuevo. Así eliminan el EXIF, pero también recomprimen los JPEG, pueden perder el perfil de color y a veces giran la foto porque se pierde la etiqueta de orientación.',
        'Esta herramienta recorta los bloques de metadatos del archivo y copia los datos de imagen sin cambios. La orientación se vuelve a escribir en un bloque EXIF mínimo, así que la foto sigue derecha e idéntica píxel a píxel.',
      ],
    },
    {
      heading: 'Cuándo conviene borrar los datos EXIF',
      paragraphs: [],
      bullets: [
        'Antes de vender cosas por internet o publicar fotos tomadas en casa.',
        'Antes de enviar archivos originales por correo, enlaces de la nube o la opción «enviar como archivo» de las apps de mensajería, que conservan el EXIF.',
        'Antes de entregar trabajos a clientes que no deben mostrar el número de serie de tu cámara ni tu historial de edición.',
        'Antes de publicar fotos de niños, eventos o lugares que no quieres que se puedan localizar.',
      ],
      related: ['remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'EXIF en fotos de iPhone y Android',
      paragraphs: [
        'Las fotos de iPhone suelen ser archivos HEIC con el EXIF guardado como un elemento aparte; las de Android suelen ser JPEG con el EXIF en un segmento APP1. Ambas se limpian directamente y mantienen su formato original: el HEIC no se convierte a JPG.',
      ],
      related: ['remove-metadata-from-heic', 'view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo quitar el EXIF',
  faq: [
    {
      q: '¿Quitar el EXIF reduce la calidad de la foto?',
      a: 'No. Solo se eliminan bloques de metadatos; los datos de imagen se copian byte a byte.',
    },
    {
      q: '¿Mis fotos se girarán después de quitar el EXIF?',
      a: 'No. La etiqueta de orientación se vuelve a escribir en un bloque EXIF mínimo para que las fotos se muestren en la posición correcta.',
    },
    {
      q: '¿Se suben mis fotos a un servidor?',
      a: 'No. Todo se ejecuta en tu navegador y los archivos nunca salen de tu dispositivo.',
    },
    {
      q: '¿Puedo borrar solo la ubicación GPS y conservar lo demás?',
      a: 'Todavía no. La herramienta elimina a la vez todos los metadatos identificativos y conserva solo lo necesario para mostrar bien la imagen.',
    },
    {
      q: '¿Hay algún límite?',
      a: 'Cada foto puede tener hasta 25 MB y 40 megapíxeles, con un máximo de 50 fotos por lote.',
    },
    {
      q: '¿Se pueden recuperar los datos EXIF eliminados?',
      a: 'No a partir del archivo limpio. Las copias que compartiste antes de limpiarlo siguen conteniéndolos.',
    },
  ],
};

export default article;
