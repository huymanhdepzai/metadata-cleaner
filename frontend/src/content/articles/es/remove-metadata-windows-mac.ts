import type { Article } from '../types';

const article: Article = {
  title: 'Cómo eliminar los metadatos de las fotos en Windows y Mac',
  seoTitle: 'Eliminar metadatos de fotos en Windows y Mac',
  summary: [
    'Las fotos que copias al ordenador conservan todo lo que registró la cámara o el móvil: ubicación GPS, hora de captura, modelo del dispositivo y, a veces, datos de procedencia de IA. Windows y macOS pueden mostrar esta información, pero sus opciones integradas para borrarla son limitadas.',
    'Aquí verás qué pueden y qué no pueden eliminar el Explorador de archivos, Paint, Vista Previa y Fotos, qué papel tiene ExifTool y una forma de quitar todos los metadatos sin pérdida desde el navegador, sin instalar nada.',
  ],
  description:
    'Elimina metadatos de fotos en Windows 11/10 y macOS: qué borran el Explorador, Vista Previa y Fotos, sus límites y una opción sin pérdida y sin instalar nada.',
  answer:
    'En Windows, haz clic derecho en una foto, abre Propiedades › Detalles y elige «Quitar propiedades e información personal». En Mac, Vista Previa solo puede quitar la ubicación GPS y Fotos puede omitirla al exportar. Ninguna de las dos elimina todos los campos, sobre todo C2PA o los prompts de IA. Para quitar todos los metadatos en cualquiera de los dos sistemas sin recomprimir, usa un limpiador en el navegador o ExifTool.',
  sections: [
    {
      heading: 'Cómo ver los metadatos de una foto en Windows y Mac',
      paragraphs: ['Revisa el archivo antes de borrar nada, para saber qué contiene realmente.'],
      bullets: [
        'Windows: clic derecho en la foto › Propiedades › Detalles. Verás la cámara, la fecha de captura, las dimensiones y, si existen, la latitud y longitud GPS.',
        'Mac (Vista Previa): abre la foto y elige Herramientas › Mostrar inspector y luego la pestaña «i». EXIF, IPTC y GPS aparecen en pestañas separadas.',
        'Mac (Finder): selecciona el archivo y pulsa ⌘I; «Más información» muestra un resumen breve, como las dimensiones y el dispositivo.',
        'En ambos: los visores integrados omiten los bloques que no entienden, como las Content Credentials C2PA o el texto del prompt dentro de los PNG generados con IA. Un visor de metadatos específico también los muestra.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Eliminar metadatos en Windows 11 y 10 con el Explorador de archivos',
      paragraphs: [],
      steps: [
        'Selecciona una o varias fotos en el Explorador de archivos, haz clic derecho y elige Propiedades.',
        'Abre la pestaña Detalles y haz clic en «Quitar propiedades e información personal», en la parte inferior.',
        'Elige «Crear una copia con todas las propiedades posibles quitadas» para conservar el original, o selecciona los campos que quieres quitar del propio archivo.',
        'Haz clic en Aceptar y abre la pestaña Detalles de la copia para comprobar qué queda.',
      ],
    },
    {
      heading: 'Límites de la opción de Windows',
      paragraphs: [
        'El Explorador de archivos solo edita las propiedades que Windows sabe escribir en cada formato. Funciona mejor con JPEG; la compatibilidad con PNG, HEIC y WebP depende de los códecs instalados y suele ser parcial. No está pensado para eliminar manifiestos C2PA, bloques XMP que no asocia a propiedades ni el texto de prompts y flujos que las herramientas de IA guardan en archivos PNG. Volver a guardar en Paint sí elimina los metadatos, pero recomprime la imagen y puede reducir su calidad.',
      ],
    },
    {
      heading: 'Quitar la ubicación en Mac con Vista Previa y Fotos',
      paragraphs: ['macOS tiene dos opciones integradas, ambas centradas en la ubicación:'],
      bullets: [
        'Vista Previa: Herramientas › Mostrar inspector › pestaña «i» › GPS y haz clic en «Eliminar información de ubicación». Guarda el archivo. El modelo de cámara, la hora de captura y el resto del EXIF se mantienen.',
        'Fotos: selecciona la foto y elige Imagen › Ubicación › Ocultar ubicación, o usa Archivo › Exportar y desmarca «Información de ubicación». Una exportación JPEG se recomprime y el resto de metadatos se incluye igualmente.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: 'Comparativa de las opciones integradas',
      paragraphs: [],
      table: {
        head: ['Método', 'Ubicación GPS', 'Cámara y fecha', 'C2PA y prompts de IA', 'Calidad de imagen'],
        rows: [
          ['Windows › Quitar propiedades', 'Se elimina (JPEG)', 'Se elimina (JPEG)', 'No está pensado para ello', 'Sin cambios'],
          ['Volver a guardar en Paint', 'Normalmente se elimina', 'Normalmente se elimina', 'Normalmente se elimina', 'Recomprimida'],
          ['Vista Previa › Eliminar información de ubicación', 'Se elimina', 'Se mantiene', 'Se mantiene', 'Sin cambios'],
          ['Exportar desde Fotos sin ubicación', 'Se elimina', 'Se mantiene', 'No de forma fiable', 'Recomprimida (JPEG)'],
          ['Limpiador de metadatos en el navegador', 'Se elimina', 'Se elimina', 'Se elimina', 'Sin cambios'],
        ],
      },
    },
    {
      heading: 'Eliminar todos los metadatos en Windows o Mac sin instalar nada',
      paragraphs: [
        'El limpiador de esta página funciona en cualquier navegador de escritorio en Windows, macOS o Linux. Los archivos se procesan en tu ordenador y nunca se suben.',
      ],
      steps: [
        'Arrastra hasta 50 archivos JPG, PNG, WebP, GIF, HEIC o AVIF a la zona de arrastre de la parte superior de esta página.',
        'Revisa el informe: la ubicación, los datos personales, la hora de captura y las señales de IA aparecen por archivo.',
        'Pulsa «Eliminar metadatos de IA». Solo se recortan los bloques de metadatos; los datos de imagen se copian byte a byte.',
        'Descarga los archivos uno a uno o en un único ZIP y conserva los originales.',
      ],
      related: ['batch-remove-metadata', 'remove-exif'],
    },
    {
      heading: 'Usar ExifTool desde la línea de comandos',
      paragraphs: [
        'ExifTool es un programa gratuito de línea de comandos para Windows, macOS y Linux, y la opción más completa para tareas con scripts. «exiftool -all= foto.jpg» borra todos los metadatos editables y guarda una copia de seguridad llamada foto.jpg_original. Ten en cuenta que también elimina el perfil de color y la etiqueta de orientación; para conservarlos, ejecuta «exiftool -all= -tagsfromfile @ -icc_profile -orientation foto.jpg». Revisa siempre el resultado con un visor, porque la cobertura varía según el formato.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre eliminar metadatos en el ordenador',
  faq: [
    {
      q: '¿«Quitar propiedades e información personal» lo elimina todo?',
      a: 'No. Elimina las propiedades que Windows puede editar en ese formato, sobre todo el EXIF de los JPEG. Los manifiestos C2PA, el XMP no compatible y los fragmentos de texto PNG pueden quedarse, así que revisa la copia antes de compartirla.',
    },
    {
      q: '¿Puedo eliminar todo el EXIF con Vista Previa en Mac?',
      a: 'No. Vista Previa solo puede quitar la ubicación GPS. La cámara, el objetivo, la fecha y los demás campos siguen en el archivo.',
    },
    {
      q: '¿Exportar desde Fotos en Mac elimina los metadatos?',
      a: 'Solo en parte. Con «Información de ubicación» desmarcada se omite el GPS, pero se conservan los datos de cámara y fecha, y una exportación JPEG se vuelve a comprimir.',
    },
    {
      q: '¿Hay alguna forma que no reduzca la calidad de la imagen?',
      a: 'Sí. El Explorador de archivos de Windows, ExifTool y el limpiador en el navegador de esta página eliminan los metadatos sin recomprimir. Volver a guardar en Paint o exportar como JPEG recomprime la imagen.',
    },
    {
      q: '¿Puedo limpiar muchas fotos a la vez en el ordenador?',
      a: 'Sí. El Explorador de archivos admite varios archivos seleccionados, ExifTool trabaja con carpetas enteras y el limpiador en el navegador procesa hasta 50 imágenes por lote con descarga en ZIP.',
    },
    {
      q: '¿Se suben mis fotos al usar el limpiador en el navegador?',
      a: 'No. Los archivos se leen y se limpian dentro del navegador en tu propio ordenador y nunca se envían a un servidor.',
    },
  ],
};

export default article;
