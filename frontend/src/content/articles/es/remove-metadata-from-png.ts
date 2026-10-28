import type { Article } from '../types';

const article: Article = {
  title: 'Eliminar metadatos de PNG: prompts, flujos, XMP y C2PA',
  summary: [
    'Los archivos PNG guardan metadatos en chunks de texto, y las herramientas de IA los usan mucho: Stable Diffusion escribe tu prompt y tus ajustes, ComfyUI incrusta el flujo de trabajo completo y los editores añaden datos XMP o C2PA.',
    'Usa la herramienta de esta página para ver cada chunk y eliminar los metadatos conservando la imagen, la transparencia, el color y la animación exactamente como están.',
  ],
  description:
    'Elimina prompts, flujos de ComfyUI, XMP, EXIF y C2PA de archivos PNG en el navegador. Conserva transparencia, perfil de color y animación APNG. Gratis y sin subidas.',
  answer:
    'Para eliminar los metadatos de un PNG, suéltalo en la herramienta de esta página y pulsa «Eliminar metadatos de IA». Se borran los chunks de texto (tEXt, zTXt, iTXt) con prompts, flujos de ComfyUI y XMP, junto con los chunks eXIf, caBX (C2PA), tIME y dSIG. Los datos de imagen, la transparencia, el perfil de color y la animación APNG se copian sin cambios, así que el PNG queda idéntico píxel a píxel.',
  sections: [
    {
      heading: 'Dónde se guardan los metadatos de un PNG',
      paragraphs: ['Un PNG es una lista de chunks. Los datos de imagen están en los chunks IDAT; los metadatos, en chunks separados:'],
      table: {
        head: ['Chunk', 'Qué contiene'],
        rows: [
          ['tEXt, zTXt, iTXt', 'Texto libre: «parameters» de Stable Diffusion, JSON «prompt» y «workflow» de ComfyUI, XMP'],
          ['eXIf', 'Datos EXIF como cámara, hora y GPS'],
          ['caBX', 'Content Credentials C2PA'],
          ['tIME, dSIG', 'Hora de la última modificación y firmas digitales'],
        ],
      },
      related: ['remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Cómo eliminar los metadatos de un PNG en tres pasos',
      paragraphs: [],
      steps: [
        'Suelta tus archivos PNG en la herramienta de arriba; puedes hacerlo por lotes.',
        'Abre el informe para ver el prompt, el flujo de trabajo y los demás campos encontrados.',
        'Pulsa «Eliminar metadatos de IA» y descarga los archivos limpios uno a uno o en un ZIP.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: 'Qué se conserva en el PNG limpio',
      paragraphs: [
        'Solo se eliminan los chunks de metadatos. Se conserva todo lo que afecta al aspecto de la imagen: la cabecera, la paleta, los datos de imagen, la transparencia (tRNS), la gamma y la cromaticidad, el perfil de color sRGB o ICC y los chunks de animación APNG. Si el archivo declaraba una orientación, se vuelve a escribir en un chunk eXIf mínimo con una suma de comprobación válida.',
      ],
    },
    {
      heading: '¿Por qué no basta con volver a guardar el PNG?',
      paragraphs: [
        'La compresión PNG es sin pérdida, pero volver a guardar sigue cambiando cosas. Redibujar un PNG en un canvas del navegador, que es lo que hacen muchas herramientas online, puede perder el perfil de color, alterar los bordes transparentes y reducir las imágenes de 16 bits a 8 bits. Recortar chunks evita todo eso: los datos IDAT son exactamente los que escribió tu generador o tu editor.',
      ],
    },
    {
      heading: 'Evita los metadatos PNG la próxima vez',
      paragraphs: [
        'Si no quieres que tus archivos lleven nunca datos de generación, revisa los ajustes de tu generador: ComfyUI se puede iniciar con --disable-metadata, y muchas interfaces de Stable Diffusion tienen una opción para dejar de guardar los parámetros de generación. Para los archivos que ya tienes, limpiarlos aquí es la solución más rápida.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
  ],
  faqHeading: 'Preguntas sobre cómo limpiar archivos PNG',
  faq: [
    {
      q: '¿El PNG perderá calidad?',
      a: 'No. Los chunks de datos de imagen se copian byte a byte, así que la imagen es idéntica píxel a píxel al original.',
    },
    {
      q: '¿Alguien puede recuperar mi flujo de ComfyUI después de limpiar?',
      a: 'No a partir del archivo limpio: los chunks del prompt y del flujo de trabajo se eliminan por completo. Las copias que compartiste antes siguen conteniéndolos.',
    },
    {
      q: '¿Se conserva la transparencia?',
      a: 'Sí. Los canales alfa y el chunk tRNS se mantienen exactamente como estaban.',
    },
    {
      q: '¿Admite PNG animados?',
      a: 'Sí. Los chunks de animación APNG se conservan, así que la animación se reproduce igual que antes.',
    },
    {
      q: '¿El archivo PNG pesa menos después?',
      a: 'Normalmente sí, sobre todo en imágenes de ComfyUI, donde el flujo incrustado puede añadir decenas de kilobytes.',
    },
    {
      q: '¿Se suben mis PNG?',
      a: 'No. Todo se procesa en tu navegador y nunca sale de tu dispositivo.',
    },
  ],
};

export default article;
