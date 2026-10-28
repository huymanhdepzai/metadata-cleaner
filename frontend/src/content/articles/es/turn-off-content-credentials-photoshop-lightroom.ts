import type { Article } from '../types';

const article: Article = {
  title: 'Cómo controlar las Content Credentials en Photoshop y Lightroom (y limpiar tus exportaciones)',
  summary: [
    'Las aplicaciones de Adobe pueden añadir Content Credentials a las imágenes exportadas: un registro firmado de las ediciones, incluidas las funciones de IA generativa que hayas usado. Es útil para demostrar la autoría de tu trabajo, pero también puede provocar etiquetas de IA en fotos que solo se retocaron.',
    'Aquí verás de dónde salen las Content Credentials en Photoshop y Lightroom, cómo comprobar si una exportación las lleva y cómo eliminarlas de una copia cuando lo necesites.',
  ],
  seoTitle: 'Desactivar Content Credentials en Photoshop y Lightroom',
  description:
    'De dónde salen las Content Credentials en Photoshop y Lightroom, cómo desactivarlas, cómo detectar C2PA en tus exportaciones y cómo quitarlo de una copia sin pérdida.',
  answer:
    'Photoshop y Lightroom añaden Content Credentials (C2PA) a las exportaciones cuando las activas, y Adobe también las aplica al contenido creado con funciones de IA generativa como Relleno generativo. Desactivar el ajuste puede no impedir las credenciales en las ediciones generativas, así que revisa cada exportación: si contiene un bloque C2PA que no quieres, elimínalo de una copia con un limpiador sin pérdida antes de publicar.',
  sections: [
    {
      heading: 'De dónde salen las Content Credentials en las apps de Adobe',
      paragraphs: ['Las exportaciones pueden llevar Content Credentials por dos motivos distintos:'],
      bullets: [
        'Activaste tú mismo las Content Credentials, así que la aplicación añade tu identidad y tu historial de edición al exportar.',
        'Usaste una función de IA generativa como Relleno generativo o Expansión generativa: Adobe aplica Content Credentials al contenido creado con sus funciones generativas y lo describe como editado con IA.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Por qué importa antes de publicar',
      paragraphs: [
        'Plataformas como Instagram, Facebook, Threads y TikTok leen las Content Credentials al subir el archivo. Una foto con una sola edición generativa puede recibir una etiqueta de contenido de IA, aunque el resto de la imagen sea una fotografía auténtica.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
    {
      heading: 'Cómo desactivar las Content Credentials en Photoshop y Lightroom',
      paragraphs: [
        'Adobe ha ido incorporando las Content Credentials en sus aplicaciones, y los controles cambian de sitio entre versiones. En las versiones recientes:',
      ],
      bullets: [
        'Photoshop: busca el panel Content Credentials (en el menú Ventana) y las opciones de Content Credentials en el cuadro de diálogo de exportación.',
        'Lightroom Classic y Lightroom: busca una sección Content Credentials en los ajustes de exportación.',
        'Consulta las páginas de ayuda de Adobe para la versión exacta que uses: los nombres y las ubicaciones cambian.',
      ],
    },
    {
      heading: 'Desactivarlas puede no ser suficiente',
      paragraphs: [
        'Adobe aplica credenciales al contenido de IA generativa independientemente de tu preferencia personal, así que una exportación en la que usaste Relleno generativo puede seguir llevando un manifiesto. Comprueba siempre el archivo exportado en lugar de fiarte solo del ajuste.',
      ],
    },
    {
      heading: 'Cómo comprobar si una exportación lleva Content Credentials',
      paragraphs: [],
      steps: [
        'Suelta el JPEG, PNG u otro archivo exportado en la herramienta de la parte superior de esta página.',
        'En «IA y procedencia», busca un bloque C2PA, el claim generator (por ejemplo, Adobe Photoshop), acciones c2pa.* y un tipo de origen de composición con IA.',
        'Si aparece cualquiera de ellos, las plataformas que leen Content Credentials pueden etiquetar la imagen.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Cómo eliminar las Content Credentials de una copia',
      paragraphs: [],
      steps: [
        'Guarda la exportación original con sus credenciales como archivo.',
        'Suelta una copia en la herramienta y pulsa «Eliminar metadatos de IA». El manifiesto se recorta a nivel de bytes; se conservan los píxeles, las dimensiones, la orientación y el perfil de color.',
        'Confirma en el panel de resultados que no queda ningún bloque C2PA y descarga el archivo limpio para el portal de tu cliente, un marketplace o una red social.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-jpg', 'batch-remove-metadata'],
    },
    {
      heading: 'Conserva el original como prueba',
      paragraphs: [
        'Las Content Credentials pueden ser una prueba valiosa de autoría y de cómo se editó una imagen. Archiva la exportación original con sus credenciales y comparte copias limpias solo cuando los metadatos puedan inducir a error o revelar más de lo que quieres.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre las Content Credentials en las apps de Adobe',
  faq: [
    {
      q: 'Si desactivo las Content Credentials, ¿se siguen registrando las ediciones generativas?',
      a: 'Es posible. Adobe aplica credenciales al contenido de IA generativa, así que comprueba siempre el archivo exportado en lugar de fiarte solo del ajuste.',
    },
    {
      q: '¿Por qué Instagram etiqueta como IA mi edición de Photoshop?',
      a: 'Las funciones generativas registran una declaración de composición con IA en las Content Credentials o en el XMP de la exportación, y Meta lee esa declaración cuando subes la imagen.',
    },
    {
      q: '¿Eliminar las credenciales deshace mis ediciones?',
      a: 'No. Solo se elimina el bloque de metadatos; los píxeles editados se copian sin cambios.',
    },
    {
      q: '¿Puedo volver a añadir las credenciales más tarde?',
      a: 'No a la copia limpia, pero puedes volver a exportar desde el archivo original con las Content Credentials activadas.',
    },
    {
      q: '¿«Guardar para web» elimina las Content Credentials?',
      a: 'Puede eliminar buena parte de los metadatos, pero el comportamiento depende de la versión y de los ajustes, y recomprime la imagen. Comprueba el resultado o limpia la exportación original sin pérdida.',
    },
    {
      q: '¿Puedo limpiar una sesión completa a la vez?',
      a: 'Sí. Suelta hasta 50 exportaciones, límpialas con un clic y descarga un ZIP.',
    },
  ],
};

export default article;
