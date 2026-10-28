import type { Article } from '../types';

const article: Article = {
  description:
    'Qué es C2PA y qué son las Content Credentials: qué contiene el manifiesto firmado, dónde se guarda en JPEG, PNG, WebP y HEIC, cómo revisarlo y cómo eliminarlo.',
  answer:
    'C2PA es un estándar abierto para añadir a los archivos multimedia un historial firmado en el que cualquier manipulación queda a la vista; su nombre de cara al público es Content Credentials. Un manifiesto C2PA registra qué aplicación o modelo de IA creó o editó una imagen. Se guarda como un bloque aparte dentro del archivo, así que puedes revisarlo, y eliminarlo de una copia, sin tocar los datos de imagen.',
  sections: [
    {
      heading: 'Qué son C2PA y las Content Credentials',
      paragraphs: [
        'La Coalition for Content Provenance and Authenticity (C2PA) es un grupo del sector entre cuyos miembros están Adobe, Microsoft, Google, OpenAI, fabricantes de cámaras y medios de comunicación. Publica un estándar técnico abierto para la procedencia del contenido. «Content Credentials» es el nombre amigable que se usa en aplicaciones y webs, a menudo representado con un pequeño icono «CR».',
        'Las cámaras, el software de edición y los generadores de IA pueden añadir un registro firmado que describe cómo se hizo una imagen (capturada con una cámara, editada en una aplicación o generada por un modelo), y los verificadores pueden comprobar después si el archivo cambió tras la firma.',
      ],
    },
    {
      heading: 'Qué contiene un manifiesto C2PA',
      paragraphs: ['Un manifiesto es un paquete pequeño y estructurado con tres partes principales:'],
      bullets: [
        'Claim generator: la aplicación o el servicio que creó el manifiesto, por ejemplo un editor o un servicio de imágenes con IA.',
        'Assertions (afirmaciones): declaraciones sobre el contenido, como c2pa.actions (created, edited, opened, resized…), un digitalSourceType que puede declarar la generación con IA, miniaturas y referencias a los archivos «ingredient» usados en la edición.',
        'Firma: una firma criptográfica con un certificado que identifica al firmante, más un hash que vincula el manifiesto a los datos de imagen exactos.',
      ],
    },
    {
      heading: 'Dónde se guardan las Content Credentials en cada formato',
      paragraphs: ['El manifiesto va dentro de un contenedor JUMBF, y cada formato tiene su propio hueco para él:'],
      table: {
        head: ['Formato', 'Dónde está el manifiesto'],
        rows: [
          ['JPEG', 'Segmentos APP11'],
          ['PNG', 'Chunk caBX'],
          ['WebP', 'Un chunk C2PA dedicado en el contenedor RIFF'],
          ['HEIC, HEIF, AVIF', 'Una caja uuid'],
        ],
      },
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'remove-metadata-from-heic'],
    },
    {
      heading: 'Quién añade Content Credentials hoy',
      paragraphs: ['La adopción crece rápido. Los orígenes habituales son:'],
      bullets: [
        'Servicios de imágenes con IA, como la generación de imágenes de OpenAI y Adobe Firefly, que marcan sus resultados como generados con IA.',
        'Aplicaciones de edición como Photoshop y Lightroom, porque activaste las Content Credentials o porque usaste una función generativa.',
        'Algunas cámaras y móviles que firman las fotos al capturarlas para demostrar que proceden de un dispositivo real.',
        'Plataformas y medios de comunicación que conservan o muestran las credenciales, por ejemplo con una insignia «CR».',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Cómo ver las Content Credentials de una imagen',
      paragraphs: [],
      steps: [
        'Suelta el archivo en la herramienta de la parte superior de esta página.',
        'El panel «IA y procedencia» muestra si hay un bloque C2PA, el claim generator, las acciones registradas y el tipo de origen.',
        'Para una validación criptográfica completa de la firma, usa además una herramienta oficial de verificación de Content Credentials.',
      ],
    },
    {
      heading: 'Cómo eliminar las Content Credentials C2PA',
      paragraphs: [
        'Pulsa «Eliminar metadatos de IA» en la herramienta de arriba. El bloque C2PA se recorta a nivel de bytes, junto con XMP, IPTC y EXIF, y los datos de imagen se copian sin cambios. Los archivos HEIC y AVIF se limpian in situ para que la estructura del archivo siga siendo válida. El archivo limpio se vuelve a analizar para que confirmes que no queda ningún manifiesto.',
      ],
    },
    {
      heading: 'Lo que hace (y lo que no) eliminar un manifiesto',
      paragraphs: [
        'Eliminar el manifiesto incrustado borra el registro de procedencia de esa copia del archivo. Cualquier edición ya rompe el vínculo criptográfico (los verificadores marcan como no válido un manifiesto que ya no coincide con la imagen), así que quitarlo simplemente elimina un registro que, de lo contrario, viajaría con el archivo.',
        'Algunos sistemas usan Content Credentials «duraderas»: una marca de agua invisible o una huella digital que permite a un verificador buscar el manifiesto en un repositorio online incluso cuando la copia incrustada ya no está. La limpieza de metadatos no afecta a esos mecanismos, porque viven en los píxeles o en una base de datos remota.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: '¿Conviene conservar o eliminar las Content Credentials?',
      paragraphs: [
        'Consérvalas cuando quieras demostrar de dónde viene una imagen: en periodismo, en fotografía original o cuando un cliente te pide la procedencia. Plantéate eliminarlas de una copia compartida cuando revelen software, historial de edición o datos de identidad que prefieres no publicar, o cuando provoquen etiquetas de IA en fotos que solo se editaron ligeramente. Revisa primero y decide imagen por imagen.',
      ],
      related: ['made-with-ai-label'],
    },
  ],
  faqHeading: 'Preguntas sobre C2PA y las Content Credentials',
  faq: [
    {
      q: '¿Qué significa C2PA?',
      a: 'Coalition for Content Provenance and Authenticity (Coalición para la Procedencia y Autenticidad del Contenido): el grupo del sector que mantiene el estándar abierto en el que se basan las Content Credentials.',
    },
    {
      q: '¿C2PA es lo mismo que una marca de agua invisible?',
      a: 'No. C2PA son metadatos guardados junto a los datos de imagen. Las marcas de agua invisibles como SynthID están incrustadas en los píxeles y no les afecta la eliminación de metadatos.',
    },
    {
      q: '¿Se pueden falsificar las Content Credentials?',
      a: 'Un manifiesto está firmado, así que los verificadores pueden detectar cualquier manipulación. Pero la ausencia de manifiesto no demuestra nada, y una firma válida solo indica quién firmó, no que el contenido sea verdadero.',
    },
    {
      q: '¿Cómo puedo verificar un manifiesto antes de eliminarlo?',
      a: 'El informe muestra el claim generator, las acciones y el tipo de origen. Para validar la firma por completo, usa una herramienta oficial de verificación de Content Credentials antes de limpiar el archivo.',
    },
    {
      q: '¿Eliminar el C2PA reduce la calidad de la imagen?',
      a: 'No. El manifiesto es un bloque aparte; los datos de imagen comprimidos se copian sin cambios.',
    },
    {
      q: '¿Las redes sociales conservan las Content Credentials?',
      a: 'Algunas las leen al subir el archivo para aplicar etiquetas y las eliminan de la copia publicada; unas pocas las muestran. El comportamiento varía según la plataforma y cambia con el tiempo.',
    },
  ],
};

export default article;
