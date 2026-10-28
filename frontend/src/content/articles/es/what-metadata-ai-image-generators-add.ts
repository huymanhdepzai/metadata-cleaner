import type { Article } from '../types';

const article: Article = {
  title: 'Qué metadatos añaden los generadores de imágenes con IA: DALL·E, Firefly, Midjourney, Gemini y Stable Diffusion',
  summary: [
    'Casi todos los generadores de imágenes con IA dejan rastros en sus resultados, desde Content Credentials firmadas hasta prompts en texto plano. Saber qué escribe cada herramienta te ayuda a proteger tus prompts y a entender por qué una plataforma etiqueta una imagen.',
    'A continuación tienes un resumen de los metadatos que suelen aparecer en las imágenes de los generadores más populares y de cómo ver exactamente qué contienen tus propios archivos.',
  ],
  seoTitle: 'Qué metadatos añaden los generadores de imágenes IA',
  description:
    'Qué metadatos incrustan los generadores de imágenes con IA (C2PA, IPTC DigitalSourceType, XMP, prompts y flujos), herramienta a herramienta, y cómo eliminarlos.',
  answer:
    'Los servicios de IA online como la generación de imágenes de ChatGPT y Adobe Firefly añaden Content Credentials C2PA firmadas; Google y Meta añaden marcas de agua invisibles y metadatos IPTC; Midjourney puede incluir el prompt y un tipo de origen IA; las herramientas locales como Stable Diffusion y ComfyUI guardan el prompt completo, la semilla, el modelo y el flujo de trabajo como texto PNG. Lo que se escribe cambia entre versiones, así que revisa tus archivos reales.',
  sections: [
    {
      heading: 'Tres tipos de rastros de IA',
      paragraphs: ['Los metadatos relacionados con la IA se dividen en tres grupos:'],
      bullets: [
        'Procedencia firmada: Content Credentials C2PA que nombran el generador y las acciones realizadas.',
        'Metadatos descriptivos: campos IPTC y XMP como DigitalSourceType, CreatorTool o una descripción.',
        'Datos de generación: el prompt, la semilla, el modelo y los ajustes guardados como texto, sobre todo por herramientas locales.',
      ],
    },
    {
      heading: 'Metadatos de los generadores de IA de un vistazo',
      paragraphs: [],
      table: {
        head: ['Generador', 'C2PA', 'IPTC / XMP', 'Prompt en el archivo', 'Marca de agua en píxeles'],
        rows: [
          ['Generación de imágenes de ChatGPT, DALL·E', 'Sí', 'Varía', 'Normalmente no', 'Varía'],
          ['Adobe Firefly, funciones generativas de Photoshop', 'Sí', 'Sí', 'No', 'Varía'],
          ['Google Gemini, Imagen', 'En algunos productos', 'En algunos productos', 'No', 'SynthID'],
          ['Meta AI', 'Varía', 'Sí (IPTC)', 'No', 'Sí'],
          ['Midjourney', 'Varía', 'Sí (tipo de origen)', 'A menudo', 'No anunciada'],
          ['Stable Diffusion, ComfyUI (local)', 'No', 'Rara vez', 'Sí, muy detallado', 'No por defecto'],
        ],
      },
      related: ['synthid-invisible-ai-watermarks'],
    },
    {
      heading: 'OpenAI (generación de imágenes de ChatGPT y DALL·E)',
      paragraphs: [
        'Las imágenes creadas con la generación de imágenes de OpenAI llevan Content Credentials C2PA que identifican a OpenAI como origen, así que los visores y plataformas compatibles con C2PA pueden reconocerlas. El manifiesto puede perderse si se hace una captura de pantalla de la imagen o si la vuelve a guardar una aplicación que no lo conserva.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Adobe Firefly y las funciones generativas de Photoshop',
      paragraphs: [
        'Adobe añade Content Credentials al contenido creado con sus funciones generativas basadas en Firefly, y lo describe como generado o editado con IA. Por eso, las fotos editadas con Relleno generativo o Expansión generativa pueden llevar una declaración de composición con IA aunque la mayor parte de la imagen sea una fotografía real.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom', 'made-with-ai-label'],
    },
    {
      heading: 'Google (Gemini e Imagen) y Meta AI',
      paragraphs: [
        'Google incrusta su marca de agua invisible SynthID en las imágenes de sus modelos generativos y también usa metadatos para marcar el contenido de IA en algunos productos. Meta ha afirmado que las imágenes de Meta AI incluyen un marcador visible, una marca de agua invisible y metadatos IPTC que indican la generación con IA.',
      ],
    },
    {
      heading: 'Midjourney',
      paragraphs: [
        'Las descargas de Midjourney pueden incluir el prompt y un ID de trabajo en los campos de descripción o comentario, junto con un valor IPTC que marca la imagen como generada con IA. Lo que aparece depende del formato de descarga y de la versión actual del servicio.',
      ],
      related: ['hide-midjourney-dalle-prompts'],
    },
    {
      heading: 'Stable Diffusion, ComfyUI y otras herramientas locales',
      paragraphs: [
        'Las herramientas locales no firman nada, pero a menudo guardan la información más detallada: AUTOMATIC1111 y Forge escriben un chunk de texto «parameters» con el prompt, la semilla, el sampler y el modelo, y ComfyUI incrusta sus grafos completos de prompt y flujo de trabajo en JSON. Normalmente estos ajustes se pueden desactivar, pero solo para las imágenes nuevas.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cómo ver qué añadió tu generador',
      paragraphs: ['Los generadores cambian lo que escriben con cada versión, así que lo fiable es inspeccionar el archivo real:'],
      steps: [
        'Suelta la imagen en la herramienta de la parte superior de esta página; se analiza localmente.',
        'Revisa «IA y procedencia» para ver C2PA, tipo de origen, prompts y nombres de herramientas.',
        'Si no quieres compartirlos, pulsa «Eliminar metadatos de IA» y descarga la copia limpia.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
  ],
  faqHeading: 'Preguntas sobre los metadatos de los generadores de IA',
  faq: [
    {
      q: '¿Todos los generadores de IA añaden Content Credentials C2PA?',
      a: 'No. Los grandes servicios online lo hacen cada vez más, pero muchas herramientas, sobre todo las locales, solo escriben metadatos de texto o nada en absoluto.',
    },
    {
      q: '¿Eliminar los metadatos también elimina las marcas de agua invisibles?',
      a: 'No. Las marcas de agua como SynthID están incrustadas en los píxeles. La eliminación de metadatos no modifica los píxeles.',
    },
    {
      q: '¿Por qué dos imágenes de la misma herramienta tienen metadatos distintos?',
      a: 'El formato de exportación, la versión de la aplicación, la plataforma desde la que descargaste y las ediciones posteriores pueden añadir o quitar campos.',
    },
    {
      q: '¿Qué significa trainedAlgorithmicMedia?',
      a: 'Es el valor de IPTC DigitalSourceType para el contenido creado por un modelo de IA generativa. compositeWithTrainedAlgorithmicMedia indica una imagen real con partes generadas con IA.',
    },
    {
      q: '¿Una captura de pantalla conserva los metadatos de IA?',
      a: 'Normalmente no. Una captura es una imagen nueva sin los metadatos originales, aunque las marcas de agua en los píxeles pueden sobrevivir.',
    },
    {
      q: '¿Puedo conservar la imagen y quitar solo el prompt?',
      a: 'Sí. La limpieza elimina los bloques de metadatos y copia los datos de imagen sin cambios, así que la imagen queda idéntica pero sin el prompt.',
    },
  ],
};

export default article;
