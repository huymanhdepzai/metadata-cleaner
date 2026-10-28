import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Quitar la etiqueta «Información de IA» en Instagram',
  description:
    'Por qué Instagram, Facebook y Threads ponen «Información de IA» (antes «Hecho con IA») a fotos reales, qué metadatos la activan y cómo corregir etiquetas erróneas.',
  answer:
    'Instagram, Facebook y Threads añaden la etiqueta «Información de IA» (antes «Hecho con IA») cuando el archivo subido contiene indicios de IA, normalmente Content Credentials C2PA o un campo IPTC DigitalSourceType escrito por un editor como Photoshop. Para quitar una etiqueta errónea de una foto real, busca esos campos en el archivo, elimínalos de una copia sin recodificar la imagen y sube la copia limpia.',
  sections: [
    {
      heading: 'Qué significa la etiqueta «Información de IA»',
      paragraphs: [
        'Meta muestra «Información de IA» en publicaciones de Instagram, Facebook y Threads cuando cree que una imagen o un vídeo se creó o editó con IA generativa. Hasta mediados de 2024 la etiqueta se llamaba «Hecho con IA»; Meta la renombró después de que muchos fotógrafos se quejaran de que fotos retocadas de forma normal aparecían marcadas como creaciones de IA.',
        'Hoy, el contenido que Meta considera generado en gran parte con IA lleva una etiqueta visible, mientras que el contenido solo editado con herramientas de IA suele mostrar la información en el menú de la publicación. En ambos casos, la etiqueta sale del mismo sitio: indicios detectados en el archivo o declarados por el creador.',
      ],
    },
    {
      heading: 'Cómo detecta Meta la IA en una imagen',
      paragraphs: ['Meta ha explicado que se basa en indicadores estándar del sector y en la declaración del creador. En la práctica, cuentan tres elementos:'],
      bullets: [
        'Content Credentials C2PA: un manifiesto firmado que indica la aplicación que generó el archivo y las acciones realizadas, como «creado» o «editado con relleno generativo».',
        'IPTC DigitalSourceType en los metadatos XMP: valores como trainedAlgorithmicMedia (generada por completo) o compositeWithTrainedAlgorithmicMedia (una foto con partes generadas con IA).',
        'Declaración propia: el interruptor de etiqueta de IA que puedes activar al publicar y que Meta pide usar para el contenido de IA realista.',
      ],
      table: {
        head: ['Indicio en el archivo', 'Origen habitual', 'Resultado probable'],
        rows: [
          ['DigitalSourceType = trainedAlgorithmicMedia', 'Generadores de imágenes con IA', 'Etiqueta de IA destacada'],
          ['DigitalSourceType = compositeWithTrainedAlgorithmicMedia', 'Relleno generativo, Expansión generativa, borradores con IA', 'Etiqueta «Información de IA», a menudo en el menú'],
          ['Manifiesto C2PA con acciones de IA', 'Photoshop, Firefly, servicios de IA', 'Etiqueta «Información de IA»'],
          ['Sin campos de IA ni declaración', 'Cámara, móvil, ediciones sin IA', 'Normalmente sin etiqueta'],
        ],
      },
      related: ['which-platforms-label-ai-images', 'what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por qué fotos reales reciben la etiqueta «Hecho con IA» por error',
      paragraphs: [
        'La mayoría de los falsos positivos los provoca el software de edición, no la cámara. Los editores modernos escriben datos de procedencia en cuanto una herramienta asistida por IA toca la imagen, aunque el cambio afecte solo a unos pocos píxeles:',
      ],
      bullets: [
        'Borrar un objeto pequeño, ampliar un fondo o enderezar el horizonte con funciones generativas de Photoshop puede marcar todo el archivo como composición con IA.',
        'Exportar con Content Credentials activadas incrusta un manifiesto firmado que enumera cada edición registrada.',
        'Algunas galerías de móvil añaden marcadores de edición con IA tras usar el borrador de objetos u otras ediciones generativas.',
        'Volver a guardar o convertir un archivo suele mantener los metadatos que ya tenía, así que una etiqueta puede seguir a la imagen a través de varias aplicaciones.',
      ],
      related: ['remove-c2pa', 'turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: 'Cómo encontrar el campo que activa la etiqueta',
      paragraphs: ['Antes de cambiar nada, confirma qué contiene realmente el archivo:'],
      steps: [
        'Suelta en la herramienta de la parte superior de esta página el archivo exacto que vas a subir. El procesamiento se hace en tu navegador, así que no se sube nada.',
        'Abre el panel «IA y procedencia». Cada indicio aparece con su origen, por ejemplo «C2PA · compositeWithTrainedAlgorithmicMedia» o «XMP · Iptc4xmpExt › DigitalSourceType».',
        'Abre «Todos los metadatos y detalles del archivo» para ver los valores sin procesar, incluido el claim generator (la aplicación que firmó el manifiesto) y las acciones c2pa.* registradas.',
        'Si el veredicto es «Requiere revisión», el archivo tiene Content Credentials pero ninguna declaración explícita de IA. Las plataformas pueden leer igualmente el manifiesto, así que revísalo antes de publicar.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Cómo quitar la etiqueta «Información de IA» de una foto real',
      paragraphs: [
        'Si la etiqueta describe mal tu trabajo, corrige la causa en el archivo en lugar de pelearte con la etiqueta después de publicar:',
      ],
      steps: [
        'Guarda tu exportación original como archivo: puede servirte como prueba de cómo editaste la imagen.',
        'En la herramienta de arriba, pulsa «Eliminar metadatos de IA». El contenedor C2PA y los bloques XMP, IPTC y EXIF se recortan a nivel de bytes; los píxeles, las dimensiones, la orientación y el perfil de color no se tocan.',
        'Revisa el panel verde de resultados: el archivo limpio se vuelve a analizar, así que puedes confirmar que no queda ningún campo de IA ni de procedencia.',
        'Sube la copia limpia como una publicación nueva. Editar una publicación existente no vuelve a leer el archivo, así que una etiqueta ya aplicada suele mantenerse.',
      ],
    },
    {
      heading: '¿Por qué no hacer una captura de pantalla o guardar de nuevo como JPEG?',
      paragraphs: [
        'Las capturas de pantalla y los trucos de «guardar para web» también eliminan los metadatos, pero vuelven a comprimir la imagen, reducen la resolución y pueden alterar los colores, cada vez que lo haces. La limpieza a nivel de bytes solo elimina los bloques de metadatos y copia exactamente los datos de imagen comprimidos, así que no hay ninguna pérdida de calidad.',
      ],
    },
    {
      heading: 'Si la etiqueta sigue después de limpiar',
      paragraphs: [
        'Los metadatos son la causa más habitual de las etiquetas en fotos editadas, pero no la única. Meta también usa otros métodos de detección y la declaración del creador. Si una foto limpia sigue etiquetada, comprueba si activaste el interruptor de etiqueta de IA al publicar y usa las opciones de comentarios de la plataforma si crees que la etiqueta es un error.',
      ],
    },
    {
      heading: 'Cuándo deberías mantener la etiqueta',
      paragraphs: [
        'Eliminar los metadatos corrige etiquetas que describen mal tu trabajo. No cambia lo que es la imagen. Si una imagen está generada total o sustancialmente con IA y parece realista, las normas de las plataformas suelen exigir que lo declares, y la etiqueta ayuda a quien la ve a entender lo que está viendo. Usa el limpiador para corregir errores y proteger tu privacidad, no para hacer pasar imágenes sintéticas por fotografías reales.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Preguntas sobre la etiqueta «Información de IA»',
  faq: [
    {
      q: '¿«Hecho con IA» es lo mismo que «Información de IA»?',
      a: 'Sí. En 2024 Meta renombró la etiqueta «Hecho con IA» a «Información de IA» y la trasladó al menú de la publicación para el contenido que solo se editó con herramientas de IA.',
    },
    {
      q: '¿Eliminar los metadatos garantiza que desaparezca la etiqueta?',
      a: 'No. Elimina los indicios guardados en el archivo, que son la causa más habitual de las etiquetas en fotos editadas. Las plataformas pueden seguir usando otros métodos de detección o pedirte que declares el contenido de IA.',
    },
    {
      q: '¿Puedo quitar la etiqueta de una publicación ya publicada?',
      a: 'Normalmente no editándola. El archivo se analiza al subirlo, así que la solución fiable es limpiar el archivo y publicarlo de nuevo.',
    },
    {
      q: '¿La foto se verá distinta después de limpiarla?',
      a: 'No. Solo se eliminan bloques de metadatos; los datos de imagen se copian byte a byte y se conservan la orientación y el perfil de color ICC.',
    },
    {
      q: '¿Puedo eliminar solo los campos de IA y conservar los datos de la cámara?',
      a: 'La versión actual elimina en un solo paso todos los metadatos identificativos (ubicación, cámara, autor y procedencia IA), que es la opción más segura para compartir. Las dimensiones, la orientación, el color y la animación se conservan siempre.',
    },
    {
      q: '¿Esto también funciona en Facebook y Threads?',
      a: 'Sí. Instagram, Facebook y Threads usan el mismo sistema de etiquetado de Meta, así que los mismos campos activan la etiqueta en las tres.',
    },
  ],
};

export default article;
