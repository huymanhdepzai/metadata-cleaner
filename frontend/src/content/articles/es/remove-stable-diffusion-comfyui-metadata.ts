import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Eliminar metadatos de Stable Diffusion y ComfyUI en PNG',
  description:
    'Stable Diffusion y ComfyUI esconden tu prompt, la semilla, el modelo y el flujo completo dentro de los PNG. Mira qué se guarda y elimínalo sin pérdida en tu navegador.',
  answer:
    'Las interfaces de Stable Diffusion como AUTOMATIC1111 y Forge guardan el prompt, la semilla, el sampler y el modelo en un chunk de texto PNG llamado «parameters», y ComfyUI incrusta su JSON completo de «prompt» y «workflow». Para eliminarlos, suelta el PNG en un limpiador de metadatos sin pérdida que borre los chunks de texto sin recodificar: la imagen queda idéntica píxel a píxel, pero nadie puede leer ni recargar tus ajustes.',
  sections: [
    {
      heading: 'Qué guardan Stable Diffusion y ComfyUI en tus imágenes',
      paragraphs: [
        'Los generadores de imágenes locales guardan sus ajustes como texto dentro del archivo para que la imagen se pueda reproducir más tarde. En un PNG, ese texto está en chunks tEXt, zTXt o iTXt junto a los datos de imagen. Lo que suele aparecer:',
      ],
      table: {
        head: ['Herramienta', 'Dónde', 'Qué contiene'],
        rows: [
          ['AUTOMATIC1111, Forge, SD.Next', 'Chunk de texto PNG «parameters»', 'Prompt, prompt negativo, pasos, sampler, escala CFG, semilla, tamaño, nombre y hash del modelo, LoRA, ajustes de extensiones'],
          ['ComfyUI', 'Chunks de texto PNG «prompt» y «workflow»', 'El grafo de nodos ejecutado y el diseño completo del editor en JSON'],
          ['InvokeAI, NovelAI, Fooocus y otros', 'Sus propias claves de texto PNG', 'Ajustes de generación similares con nombres propios de cada herramienta'],
          ['Exportaciones a JPEG o WebP', 'EXIF UserComment o XMP', 'El mismo texto de parámetros, según la herramienta'],
        ],
      },
    },
    {
      heading: 'Por qué el flujo de trabajo de ComfyUI revela tanto',
      paragraphs: [
        'Un flujo de ComfyUI no es solo un prompt: es todo tu pipeline. Cualquiera que arrastre tu PNG a ComfyUI obtiene cada nodo, modelo, LoRA, upscaler, ControlNet y ajuste, listo para ejecutarse. Los flujos también pueden contener rutas de archivos locales, nombres de carpetas o nombres de usuario, y los grafos grandes añaden decenas de kilobytes a cada imagen.',
      ],
    },
    {
      heading: '¿Deberías eliminar los datos de generación?',
      paragraphs: [
        'Los datos de generación son una receta. Eliminarlos tiene sentido cuando vendes o publicas arte terminado, entregas trabajos a clientes o simplemente no quieres que otros copien tu estilo exacto. También hay buenas razones para conservarlos: las webs para compartir modelos leen los parámetros para mostrar la información de generación, y tus colaboradores pueden necesitar el flujo de trabajo.',
        'No tienes que adivinar: el informe muestra exactamente qué hay en cada archivo antes de eliminar nada, así que puedes decidir imagen por imagen.',
      ],
    },
    {
      heading: 'Cómo ver el prompt y el flujo de trabajo de un PNG',
      steps: [
        'Suelta el PNG en la herramienta de la parte superior de esta página.',
        'Abre el panel «IA y procedencia»: los chunks aparecen marcados como «Prompt de Stable Diffusion» o «Flujo de trabajo de ComfyUI».',
        'Abre «Todos los metadatos y detalles del archivo» para leer cada chunk de texto con su palabra clave (parameters, prompt, workflow) y su valor completo. Los chunks comprimidos zTXt e iTXt se descomprimen en el navegador para que puedas leerlos.',
      ],
      paragraphs: [],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Cómo eliminar los metadatos de Stable Diffusion y ComfyUI',
      steps: [
        'Suelta un PNG o un lote entero de resultados en la herramienta (hasta 50 archivos por tanda).',
        'Pulsa «Eliminar metadatos de IA». Los chunks de texto, XMP, EXIF y C2PA se eliminan como unidades completas.',
        'Confirma en el panel de resultados que no queda ningún campo de IA y descarga los archivos uno a uno o en un ZIP.',
      ],
      paragraphs: [],
      related: ['remove-metadata-from-png', 'batch-remove-metadata'],
    },
    {
      heading: 'Qué queda en el PNG limpio',
      paragraphs: [
        'Se conservan IHDR, IDAT, la paleta, la transparencia, los chunks de gamma y color, y los chunks de animación APNG. Como los chunks se eliminan completos, las sumas de comprobación de los demás siguen siendo válidas y el archivo limpio se abre en cualquier sitio.',
      ],
    },
    {
      heading: 'Deja de guardar metadatos en las imágenes nuevas',
      paragraphs: ['Si nunca quieres datos de generación en tus resultados, desactívalos en el origen (solo afecta a las imágenes nuevas):'],
      bullets: [
        'ComfyUI: inícialo con la opción de línea de comandos --disable-metadata, o usa un nodo de guardado que no incruste el flujo de trabajo.',
        'AUTOMATIC1111 y Forge: en Settings, busca las opciones que controlan si se guardan los parámetros de generación en la información del PNG y desactívalas.',
        'Otras interfaces: revisa los ajustes de guardado de imágenes por si hay una opción que escribe prompts o parámetros en el archivo.',
      ],
    },
    {
      heading: 'Sin pérdida frente a volver a guardar',
      paragraphs: [
        'Abrir la imagen en un editor y guardarla de nuevo también elimina el texto, pero recomprime la imagen y puede descartar el perfil de color o reducir las imágenes de 16 bits a 8 bits. La eliminación a nivel de bytes mantiene los datos IDAT exactamente como los escribió el generador, así que el PNG limpio es idéntico píxel a píxel al original.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre los metadatos de Stable Diffusion y ComfyUI',
  faq: [
    {
      q: '¿ComfyUI puede seguir cargando el flujo de trabajo desde un PNG limpio?',
      a: 'No. Los chunks «prompt» y «workflow» se eliminan, así que arrastrar el archivo limpio a ComfyUI no restaurará el grafo. Conserva una copia original si vas a necesitar el flujo más adelante.',
    },
    {
      q: '¿Se ve afectada la calidad de imagen?',
      a: 'No. Los chunks IDAT que contienen los datos de imagen comprimidos se copian sin cambios, así que el PNG limpio es idéntico píxel a píxel al original.',
    },
    {
      q: '¿Funciona con exportaciones JPEG y WebP de Stable Diffusion?',
      a: 'Sí. Los prompts guardados en EXIF UserComment o XMP también se detectan y se eliminan de los archivos JPEG y WebP.',
    },
    {
      q: '¿Cómo puedo ver el prompt de una imagen de Stable Diffusion?',
      a: 'Suelta el PNG en la herramienta y abre «Todos los metadatos y detalles del archivo». El chunk «parameters» muestra el prompt completo, el prompt negativo, la semilla y el modelo.',
    },
    {
      q: '¿Se suben mis imágenes a un servidor?',
      a: 'No. Los archivos se analizan y se limpian localmente en tu navegador, así que los prompts y los flujos de trabajo nunca salen de tu dispositivo.',
    },
    {
      q: '¿Puedo limpiar cientos de resultados a la vez?',
      a: 'Sí, en lotes de hasta 50 archivos. Vacía la lista entre lotes y descarga cada lote en un ZIP.',
    },
  ],
};

export default article;
