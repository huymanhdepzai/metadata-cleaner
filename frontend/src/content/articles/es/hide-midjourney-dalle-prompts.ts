import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Eliminar metadatos de imágenes de Midjourney y ChatGPT',
  description:
    'Las imágenes de Midjourney, ChatGPT/DALL·E y Firefly pueden incluir tu prompt, el ID del trabajo y datos de procedencia IA. Mira qué llevan y bórralo antes de compartir.',
  answer:
    'Las descargas de servicios de imágenes con IA pueden contener tu prompt, un ID de trabajo o de generación, el nombre de la herramienta y Content Credentials C2PA. Cualquiera puede leerlos con un visor de metadatos gratuito. Para ocultar tu prompt, abre el archivo en un comprobador de metadatos, confirma qué campos hay y elimínalos de una copia con un limpiador sin pérdida antes de publicar o enviar la imagen.',
  sections: [
    {
      heading: 'Qué incrustan los servicios de imágenes con IA en tus descargas',
      paragraphs: [
        'Los generadores de imágenes online añaden cada vez más metadatos a cada descarga, en parte por transparencia y en parte para cumplir los estándares de procedencia. Lo que se escribe exactamente depende del servicio, del formato de descarga y de la versión actual, así que comprueba siempre el archivo real. Ejemplos habituales:',
      ],
      table: {
        head: ['Servicio', 'Metadatos típicos', 'Puede revelar'],
        rows: [
          ['Midjourney', 'Texto de descripción/comentario, IPTC DigitalSourceType', 'Tu prompt, un ID de trabajo, que la imagen está generada con IA'],
          ['Generación de imágenes de ChatGPT, DALL·E', 'Content Credentials (C2PA)', 'Que OpenAI generó la imagen y las acciones registradas'],
          ['Adobe Firefly', 'Content Credentials (C2PA), XMP', 'Generación con IA, la aplicación usada, el historial de edición'],
          ['Muchas otras herramientas', 'XMP CreatorTool, EXIF Software, fechas', 'Nombre de la herramienta, hora de creación y a veces ID vinculados a la cuenta'],
        ],
      },
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Por qué merece la pena proteger tus prompts',
      paragraphs: [
        'Para ilustradores, diseñadores y prompt engineers, un prompt pulido es conocimiento de trabajo construido a lo largo de muchas iteraciones. Cualquiera que descargue tu imagen puede abrirla en un visor de metadatos, copiar el prompt y reproducir tu estilo en minutos.',
        'Los ID y los datos vinculados a la cuenta también pueden relacionar una imagen pública con tu cuenta o con otras imágenes que hayas generado. Si entregas imágenes a clientes, los prompts incrustados pueden dejar al descubierto tu proceso y las herramientas que usas.',
      ],
    },
    {
      heading: 'Cómo saber si una imagen contiene tu prompt',
      paragraphs: [],
      steps: [
        'Suelta el archivo descargado en la herramienta de la parte superior de esta página: el procesamiento es local, así que tu prompt nunca se sube.',
        'Mira el panel «IA y procedencia» para ver prompts, nombres de generadores y declaraciones del tipo de origen.',
        'Mira el panel «Detalles de privacidad» para ver autores, descripciones, identificadores y fechas.',
        'Abre «Todos los metadatos y detalles del archivo» si quieres leer cada campo textualmente.',
      ],
    },
    {
      heading: 'Cómo eliminar el prompt y los metadatos de IA',
      paragraphs: [],
      steps: [
        'Pulsa «Eliminar metadatos de IA». El texto del prompt, los ID y los bloques XMP, IPTC, EXIF y C2PA se eliminan a nivel de bytes.',
        'Revisa el panel verde de resultados: el archivo limpio se vuelve a analizar para que confirmes que no queda nada.',
        'Descarga la imagen, o un ZIP si has procesado un lote.',
      ],
      related: ['batch-remove-metadata'],
    },
    {
      heading: '¿Midjourney incluye siempre el prompt?',
      paragraphs: [
        'No necesariamente. Lo que aparece depende de la vía de descarga (app web, Discord, con o sin upscale), del formato de archivo y de la versión del servicio, y esto cambia con el tiempo. La única respuesta fiable es inspeccionar el archivo que tienes. Lo mismo ocurre con otros servicios: dos imágenes de la misma herramienta pueden llevar campos distintos.',
      ],
    },
    {
      heading: 'Lo que no puede hacer la eliminación de metadatos',
      paragraphs: [
        'Algunos proveedores también añaden marcas de agua invisibles en los propios píxeles, como SynthID de Google. No son metadatos, y un limpiador sin pérdida, que nunca modifica los píxeles, no puede eliminarlas. Además, si publicas una imagen realista generada con IA, las normas de la plataforma pueden seguir exigiendo que lo declares. Eliminar el prompt protege tu proceso; no cambia la naturaleza de la imagen.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Preguntas sobre los metadatos de Midjourney y DALL·E',
  faq: [
    {
      q: '¿Alguien puede ver mi prompt de Midjourney a partir de la imagen?',
      a: 'Si el prompt está guardado en los metadatos del archivo, sí: cualquier visor de metadatos lo muestra. Comprueba el archivo y elimina esos campos antes de compartirlo si quieres mantener el prompt en privado.',
    },
    {
      q: '¿Midjourney incrusta siempre el prompt?',
      a: 'Depende del formato de descarga y de la configuración actual del servicio. Inspecciona el archivo para ver exactamente qué campos contiene antes de decidir.',
    },
    {
      q: '¿Las imágenes de ChatGPT tienen metadatos?',
      a: 'Las imágenes generadas con OpenAI llevan Content Credentials C2PA que identifican a OpenAI como origen. El informe las muestra en «IA y procedencia».',
    },
    {
      q: '¿La limpieza elimina SynthID u otras marcas de agua invisibles?',
      a: 'No. Las marcas de agua invisibles forman parte de los datos de píxeles. La herramienta solo elimina metadatos y nunca modifica los píxeles.',
    },
    {
      q: '¿Eliminar los metadatos reduce la calidad de la imagen?',
      a: 'No. Los bloques de metadatos se recortan y los datos de imagen comprimidos se copian sin cambios.',
    },
    {
      q: '¿Puedo limpiar varias imágenes a la vez?',
      a: 'Sí. Suelta hasta 50 imágenes, revisa los informes y descárgalo todo en un único archivo ZIP.',
    },
  ],
};

export default article;
