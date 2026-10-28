import type { Article } from '../types';

const article: Article = {
  title: 'Cómo saber si una imagen es de IA (metadatos, C2PA y más)',
  summary: [
    '¿Te preguntas si una foto está hecha con IA? La comprobación fiable más rápida son los metadatos del propio archivo: las Content Credentials C2PA, el campo IPTC DigitalSourceType y el texto del generador suelen indicar exactamente qué herramienta creó la imagen.',
    'Esta guía explica qué indicios buscar, cómo leerlos con un comprobador gratuito en el navegador, qué hacer cuando no hay metadatos y por qué un resultado «limpio» nunca demuestra que una imagen sea real.',
  ],
  seoTitle: 'Cómo saber si una imagen es de IA (comprobador gratis)',
  description:
    'Cómo saber si una imagen es de IA: lee gratis en tu navegador las Content Credentials C2PA, IPTC DigitalSourceType y prompts, y conoce los límites de cada indicio.',
  answer:
    'Para saber si una imagen está generada con IA, revisa los metadatos del archivo original: unas Content Credentials C2PA que nombran un servicio de IA, un IPTC DigitalSourceType con el valor trainedAlgorithmicMedia o prompts incrustados son pruebas sólidas. Si faltan los metadatos, usa la búsqueda inversa de imágenes, el verificador de marcas de agua del proveedor y el contexto de la imagen, pero ninguna prueba por sí sola demuestra que una foto sea real.',
  sections: [
    {
      heading: 'Empieza por el archivo original',
      paragraphs: [
        'Los metadatos solo se conservan en el archivo que salió del generador o de la cámara. Las capturas de pantalla, las copias guardadas de nuevo y las imágenes descargadas de redes sociales suelen estar recodificadas, lo que elimina la mayor parte o la totalidad de esos datos. Si puedes, pide el archivo original: el exportado desde la aplicación o enviado «como archivo» y no como foto comprimida.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Los metadatos que delatan una imagen hecha con IA',
      paragraphs: ['De más fiable a menos, estos son los indicios que vale la pena comprobar:'],
      table: {
        head: ['Indicio', 'Dónde se guarda', 'Qué te dice'],
        rows: [
          ['Manifiesto C2PA de un servicio de IA', 'APP11 (JPEG), caBX (PNG), uuid (HEIC)', 'Declaración firmada de qué herramienta generó o editó la imagen'],
          ['IPTC DigitalSourceType', 'Metadatos XMP', 'Origen declarado, p. ej. trainedAlgorithmicMedia'],
          ['Prompts y parámetros', 'Chunks de texto PNG, EXIF UserComment', 'Generada con una herramienta local como Stable Diffusion o ComfyUI'],
          ['Nombres de herramientas', 'XMP CreatorTool, EXIF Software', 'Qué aplicación creó o guardó por última vez el archivo'],
        ],
      },
    },
    {
      heading: 'Indicio 1: Content Credentials C2PA',
      paragraphs: [
        'Las Content Credentials son un registro con firma digital que añaden las herramientas compatibles con el estándar C2PA. El claim generator nombra la aplicación o el servicio que produjo la imagen, la lista c2pa.actions registra pasos como «created» (creada) o «edited» (editada), y un valor digitalSourceType puede declarar directamente que la imagen se generó con IA.',
        'Como el registro está firmado, los verificadores también pueden saber si la imagen se modificó después de la firma. Un manifiesto procedente de un servicio de IA es la prueba más sólida que pueden ofrecer los metadatos.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Indicio 2: IPTC DigitalSourceType',
      paragraphs: ['Muchos generadores y editores escriben un campo IPTC estándar que describe cómo se creó el contenido. Los valores más habituales:'],
      bullets: [
        'trainedAlgorithmicMedia: creada por un modelo de IA generativa.',
        'compositeWithTrainedAlgorithmicMedia: una foto real con partes generadas o sustituidas por IA (por ejemplo, con Relleno generativo).',
        'algorithmicMedia: creada por un algoritmo sin datos de entrenamiento, como los gráficos procedurales.',
        'digitalCapture: capturada con una cámara, sin contenido generativo declarado.',
      ],
    },
    {
      heading: 'Indicio 3: prompts, parámetros y nombres de herramientas',
      paragraphs: [
        'Los generadores locales como Stable Diffusion y ComfyUI guardan el prompt, la semilla, el modelo y el flujo de trabajo como texto dentro de los archivos PNG. Otras herramientas dejan su nombre en XMP CreatorTool o EXIF Software. Cualquiera de ellos es una señal clara de que intervino la IA, y una pista de cómo se hizo exactamente la imagen.',
      ],
      related: ['what-metadata-ai-image-generators-add', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cómo comprobar una imagen en segundos',
      paragraphs: [],
      steps: [
        'Suelta el archivo en la herramienta de la parte superior de esta página. La comprobación se hace por completo en tu navegador; la imagen nunca se sube.',
        'Lee el veredicto del panel «IA y procedencia»: «Indicios de IA detectados», «Requiere revisión» (Content Credentials sin una declaración explícita de IA) o «Sin indicios de IA».',
        'Revisa los indicios que aparecen y su origen, y abre «Todos los metadatos y detalles del archivo» para ver los valores sin procesar.',
      ],
    },
    {
      heading: 'Qué hacer si la imagen no tiene metadatos',
      paragraphs: ['La ausencia de metadatos no prueba nada en ningún sentido: las aplicaciones de edición, las de mensajería y las redes sociales los eliminan constantemente. Otras comprobaciones que puedes hacer:'],
      bullets: [
        'Búsqueda inversa de imágenes para encontrar la copia más antigua y su contexto original.',
        'El verificador de marcas de agua del propio proveedor, por ejemplo las herramientas de Google para SynthID, cuando exista.',
        'Inspección visual: manos, texto, reflejos, texturas repetidas e iluminación incoherente son puntos débiles habituales, aunque los modelos modernos fallan menos.',
        'El contexto: quién la publicó primero, si fuentes fiables confirman la escena y si la cuenta suele publicar contenido de IA.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: '¿Son fiables los detectores de imágenes de IA?',
      paragraphs: [
        'Los detectores de IA basados en píxeles estiman una probabilidad; no demuestran nada. Los resultados varían entre detectores, empeoran tras la compresión o el redimensionado y pueden marcar fotos reales como IA. Tómalos como un dato más entre varios y da más peso a la procedencia firmada y al contexto original.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre cómo detectar imágenes de IA',
  faq: [
    {
      q: '¿«Sin indicios de IA» significa que la foto es real?',
      a: 'No. Solo significa que el archivo no contiene metadatos de IA. Los metadatos se pierden o se eliminan con facilidad, así que considera un resultado limpio como «desconocido», no como prueba de autenticidad.',
    },
    {
      q: '¿Puedo comprobar imágenes descargadas de Instagram o Facebook?',
      a: 'Puedes, pero las plataformas suelen eliminar los metadatos de la copia publicada, así que el resultado a menudo sale vacío. La etiqueta «Información de IA» de la propia plataforma, si aparece, es un indicio aparte.',
    },
    {
      q: '¿Se pueden falsificar los metadatos?',
      a: 'Los campos EXIF y XMP simples se pueden editar con herramientas comunes. Los manifiestos C2PA están firmados, así que cualquier manipulación se puede detectar, lo que los convierte en el indicio más fiable.',
    },
    {
      q: '¿Cómo sé si una imagen se hizo con ChatGPT?',
      a: 'Las imágenes generadas con OpenAI llevan Content Credentials C2PA que nombran a OpenAI. Si el archivo original las conserva, el informe las muestra en «IA y procedencia».',
    },
    {
      q: '¿Puedo comprobar imágenes de Midjourney o Stable Diffusion?',
      a: 'Sí. Las descargas de Midjourney pueden contener el prompt y un tipo de origen IA, y los PNG de Stable Diffusion suelen incluir un chunk «parameters»; el informe señala ambos casos.',
    },
    {
      q: '¿El comprobador es gratuito y privado?',
      a: 'Sí. Es gratuito, no requiere cuenta y analiza el archivo localmente en tu navegador sin subirlo.',
    },
  ],
};

export default article;
