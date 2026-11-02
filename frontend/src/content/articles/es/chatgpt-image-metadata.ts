import type { Article } from '../types';

const article: Article = {
  title: '¿ChatGPT añade metadatos a las imágenes? Cómo verlos y eliminarlos',
  seoTitle: '¿ChatGPT añade metadatos a las imágenes? (C2PA)',
  summary: [
    'Las imágenes creadas con ChatGPT y los modelos de imagen de OpenAI llevan Content Credentials C2PA: metadatos firmados que identifican a OpenAI como origen de la imagen.',
    'Aquí verás qué contienen esos metadatos, dónde aparecen, cómo revisar tus propios archivos y cómo eliminarlos de una copia sin pérdida, además de lo que no cambia al quitarlos.',
  ],
  description:
    'Sí: las imágenes de ChatGPT llevan Content Credentials C2PA que indican que OpenAI es el origen. Qué contienen, cómo revisarlas y cómo quitarlas sin pérdida.',
  answer:
    'Sí. Las imágenes generadas en ChatGPT y con la API de imágenes de OpenAI incluyen Content Credentials C2PA, un manifiesto firmado que registra que la imagen la creó un modelo de OpenAI. Plataformas como Instagram, Facebook y LinkedIn pueden leerlo y mostrar una etiqueta de IA. Puedes revisar el manifiesto con un visor de metadatos y eliminarlo de una copia sin cambiar los píxeles.',
  sections: [
    {
      heading: 'Qué metadatos añade ChatGPT a las imágenes generadas',
      paragraphs: [
        'OpenAI añade un manifiesto C2PA a las imágenes creadas por sus modelos de imagen en ChatGPT y en la API. El manifiesto está firmado, así que los visores pueden saber si se ha modificado. Normalmente registra:',
      ],
      bullets: [
        'El emisor y la herramienta de generación, que identifican a OpenAI y a ChatGPT o la API.',
        'Una acción que indica que la imagen se creó, con el tipo de fuente digital «trainedAlgorithmicMedia», el código estándar para contenido generado íntegramente por IA.',
        'Una marca de tiempo y el certificado usado para firmar el manifiesto.',
        'En las imágenes editadas en ChatGPT, entradas que describen la edición y la imagen de partida.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: '¿Una imagen de ChatGPT contiene mi prompt?',
      paragraphs: [
        'Los manifiestos C2PA están pensados para registrar la procedencia (qué herramienta creó la imagen y cuándo), no tu conversación. A diferencia de Stable Diffusion o ComfyUI, que escriben el prompt completo en fragmentos de texto del PNG, los archivos de OpenAI no están diseñados para guardar el prompt. Lo que se incluye puede cambiar con el tiempo, así que la respuesta fiable para un archivo concreto es abrirlo en un visor y comprobarlo.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cómo comprobar los metadatos de una imagen de ChatGPT',
      paragraphs: [],
      steps: [
        'Descarga la imagen desde ChatGPT. Normalmente se guarda como PNG.',
        'Suelta el archivo descargado en el comprobador de la parte superior de esta página.',
        'Abre el panel «IA y procedencia»: muestra el manifiesto C2PA, el emisor y el tipo de fuente digital.',
        'Compáralo con una copia que hayas compartido o vuelto a guardar: muchas apps eliminan el manifiesto y otras lo conservan.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Dónde se ven los metadatos de las imágenes de ChatGPT',
      paragraphs: [
        'Las plataformas y herramientas compatibles con C2PA leen el manifiesto automáticamente. Meta muestra la etiqueta «Info de IA» en Instagram, Facebook y Threads, LinkedIn muestra un icono de Content Credentials y sitios de verificación como contentcredentials.org muestran el historial completo. Las plataformas que eliminan los metadatos al subir quitan el manifiesto de la copia publicada, pero pueden leerlo antes.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'Cómo eliminar los metadatos de una imagen de ChatGPT',
      paragraphs: [
        'Quitar el manifiesto es útil si quieres archivos más ligeros, no compartir datos de la herramienta o la cuenta, o publicar una imagen en un contexto en el que tú mismo indicas su origen de IA.',
      ],
      steps: [
        'Suelta una o varias imágenes de ChatGPT en el limpiador de la parte superior de esta página.',
        'Pulsa «Eliminar metadatos de IA». El bloque C2PA y el resto de metadatos se recortan a nivel de bytes.',
        'Descarga el PNG limpio: los píxeles, la transparencia y las dimensiones son idénticos al original.',
        'Guarda la descarga original si puedes necesitar demostrar de dónde procede la imagen.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'Lo que no cambia al eliminar los metadatos',
      paragraphs: [
        'Los metadatos son solo una capa. OpenAI ha dicho que también usa herramientas internas para reconocer sus propias imágenes, las plataformas pueden usar sus propios clasificadores y muchos servicios piden que indiques el contenido generado con IA contenga lo que contenga el archivo. Quitar el manifiesto limpia el archivo, pero no cambia el origen de la imagen ni tus obligaciones de transparencia.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Preguntas sobre los metadatos de las imágenes de ChatGPT',
  faq: [
    {
      q: '¿Todas las imágenes de ChatGPT tienen metadatos C2PA?',
      a: 'Las imágenes generadas por los modelos de imagen de OpenAI en ChatGPT y en la API se publican con Content Credentials C2PA. Las copias hechas con captura de pantalla o guardadas de nuevo con otra app pueden haberlas perdido.',
    },
    {
      q: '¿Se puede saber que una imagen se hizo con ChatGPT?',
      a: 'Si el manifiesto sigue en el archivo, sí: cualquier visor C2PA muestra a OpenAI como origen. Sin metadatos, hay que fiarse de pistas visuales o de herramientas de detección, que no siempre son fiables.',
    },
    {
      q: '¿Eliminar los metadatos reduce la calidad de la imagen?',
      a: 'No. El limpiador elimina los bloques de metadatos y copia los datos de imagen byte a byte, así que el PNG se ve exactamente igual.',
    },
    {
      q: '¿Una captura de pantalla de una imagen de ChatGPT conserva los metadatos?',
      a: 'Normalmente no. Una captura es un archivo nuevo sin el manifiesto original, pero tiene menos resolución y recibe sus propios metadatos de captura.',
    },
    {
      q: '¿Instagram seguirá etiquetando una imagen de ChatGPT limpia?',
      a: 'Las etiquetas basadas en metadatos necesitan metadatos, así que es menos probable. Las plataformas pueden usar otras señales y sus normas pueden exigir que etiquetes tú mismo el contenido de IA.',
    },
    {
      q: '¿Se suben mis imágenes al revisarlas o limpiarlas?',
      a: 'No. Todo se ejecuta en tu navegador y las imágenes nunca salen de tu dispositivo.',
    },
  ],
};

export default article;
