import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Herramientas gratis de metadatos de imagen',
    description:
      'Herramientas gratis en el navegador para ver, analizar y eliminar metadatos de imágenes: visor EXIF, análisis de privacidad, tamaño de metadatos, quitar EXIF, GPS y C2PA.',
    intro:
      'Todas las herramientas funcionan en tu navegador con el mismo motor: tus imágenes nunca se suben y nada se vuelve a comprimir. Elige lo que necesitas: ver el interior de una foto, comprobar lo que revela o limpiarla.',
  },
  cards: {
    cleaner: { name: 'Eliminar metadatos de imágenes', text: 'Elimina EXIF, GPS, XMP, IPTC, C2PA y prompts de IA con un clic, sin perder calidad.', detail: 'Suelta tus imágenes, revisa el informe y descarga copias limpias; píxeles, orientación y perfil de color quedan intactos.' },
    'view-metadata': { name: 'Ver metadatos', text: 'Mira todos los campos ocultos de una foto: cámara, fecha, GPS, XMP, C2PA y prompts de IA.', detail: 'Solo lectura: el archivo nunca se modifica, así que es seguro para revisar fotos que recibiste o descargaste.' },
    'privacy-check': { name: 'Análisis de privacidad', text: 'Descubre qué revela una foto: ubicación en el mapa, datos personales y hora de captura.', detail: 'Califica cada foto con riesgo alto, medio o bajo y muestra las coordenadas GPS para abrirlas en un mapa.' },
    'metadata-size': { name: 'Tamaño de metadatos', text: 'Mide cuántos bytes de metadatos lleva un archivo y qué riesgo suponen.', detail: 'Ordena los bloques de metadatos por tamaño para ver si miniaturas, XMP o prompts incrustados agrandan el archivo.' },
    'remove-exif': { name: 'Quitar EXIF', text: 'Borra cámara, fecha y número de serie conservando la orientación y los colores.', detail: 'Funciona con JPG, HEIC, PNG y WebP; se conserva una etiqueta mínima de orientación para que las fotos no se giren.' },
    'remove-gps': { name: 'Quitar ubicación GPS', text: 'Elimina las coordenadas GPS de las fotos del móvil antes de compartirlas.', detail: 'Útil antes de publicar fotos de tu casa, tus hijos o tu trabajo, o de enviarlas a desconocidos.' },
    'remove-c2pa': { name: 'Quitar C2PA', text: 'Elimina los manifiestos de Content Credentials (C2PA) de JPG, PNG, WebP y HEIC.', detail: 'Elimina el manifiesto que activa las etiquetas de IA; las marcas de agua invisibles en los píxeles, como SynthID, no se ven afectadas.' },
    'remove-prompts': { name: 'Quitar prompts de IA', text: 'Elimina parámetros de Stable Diffusion y flujos de ComfyUI de archivos PNG.', detail: 'Oculta prompt, seed, modelo y grafo de nodos para que nadie copie tus ajustes de generación.' },
    batch: { name: 'Limpieza por lotes', text: 'Limpia hasta 50 imágenes a la vez y descárgalas en un solo ZIP.', detail: 'Cada archivo conserva su formato original; los que no se pueden procesar aparecen con el motivo.' },
  },
  groups: {
    inspect: { title: 'Revisa tus fotos', text: 'Mira qué revela una imagen antes de compartirla: el archivo solo se lee, nunca se modifica.' },
    remove: { title: 'Elimina metadatos según lo que necesites', text: 'Elige un formato o una tarea: cada guía incluye el limpiador.' },
  },
  tools: {
    'view-metadata': {
      title: 'Ver metadatos de imágenes online — EXIF, XMP, C2PA',
      description:
        'Visor de metadatos gratis: consulta EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) y prompts de IA en JPG, PNG, WebP y HEIC en tu navegador, sin subir nada.',
      intro:
        'Suelta una foto para ver toda la información oculta que contiene —cámara y objetivo, fecha de captura, posición GPS, software de edición, Content Credentials y prompts de IA—, agrupada por origen. No se modifica ni se sube nada.',
      steps: [
        'Suelta una o varias imágenes en el recuadro de arriba o toca «Elegir imágenes».',
        'Abre un archivo para ver el resumen de privacidad, las señales de IA y la lista completa de campos.',
        'Busca entre los campos y decide si conservar el archivo tal cual o eliminar sus metadatos.',
      ],
      faq: [
        {
          q: '¿Ver los metadatos modifica mi archivo?',
          a: 'No. El archivo solo se lee. Para eliminar metadatos usa el limpiador: tus imágenes siguen cargadas y no hace falta volver a añadirlas.',
        },
        {
          q: '¿Qué metadatos puedo ver?',
          a: 'EXIF (incluido GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de texto PNG con prompts o flujos de ComfyUI y los bloques de la estructura del archivo.',
        },
        {
          q: '¿Se suben mis fotos?',
          a: 'No. Tu navegador lee los archivos y nunca salen de tu dispositivo.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Qué indica cada grupo de metadatos',
            text: 'El visor agrupa cada campo según el lugar del archivo donde está guardado. Cada grupo lo escribe un programa distinto con un propósito distinto, así que conocer el origen te ayuda a saber cuánto fiarte de un valor y qué tan sensible es.',
            items: [
              { term: 'EXIF', text: 'Lo escribe la cámara o el teléfono: marca y modelo, objetivo, exposición, fecha de captura y zona horaria. También puede incluir el nombre del propietario, el número de serie del cuerpo y una MakerNote con datos propios del fabricante.' },
              { term: 'EXIF · GPS', text: 'Latitud y longitud, a menudo con precisión de pocos metros, además de la altitud y a veces la dirección hacia la que apuntaba la cámara. Es el campo que casi todo el mundo quiere revisar antes de compartir.' },
              { term: 'XMP', text: 'Lo añaden programas de edición como Lightroom o Photoshop: la herramienta usada, el historial de edición, valoraciones y palabras clave. Las herramientas de IA también usan XMP para declarar que una imagen fue generada.' },
              { term: 'IPTC', text: 'Pies de foto, autor, línea de crédito y aviso de copyright, usados sobre todo por agencias de noticias y bancos de imágenes.' },
              { term: 'C2PA', text: 'Content Credentials: un manifiesto firmado que registra qué aplicación o modelo de IA creó la imagen y qué ediciones se hicieron. Las plataformas lo leen para mostrar etiquetas de “Información de IA”.' },
              { term: 'PNG text', text: 'Bloques de texto libre. Stable Diffusion guarda aquí el prompt, la semilla y el modelo; ComfyUI guarda el flujo de trabajo completo de nodos en JSON.' },
              { term: 'ICC', text: 'El perfil de color. No contiene datos personales y es necesario para mostrar bien los colores.' },
            ],
          },
          {
            title: 'Cómo leer el informe',
            text: 'Cada archivo se abre con un resumen de privacidad que enumera los campos de ubicación, datos personales y hora encontrados. Debajo, la sección de IA da uno de tres veredictos: “Indicios de IA detectados” cuando los metadatos nombran una herramienta de IA, contienen un prompt o declaran generación por IA; “Requiere revisión” cuando hay Content Credentials sin una declaración explícita de IA; y “Sin indicios de IA” cuando no se encontró nada. La tabla completa va al final. Usa el buscador para ir directo a lo importante: escribir “GPS”, “Serial”, “Software” o “prompt” suele ser mucho más rápido que recorrer cien campos.',
          },
          {
            title: 'Cuándo conviene revisar los metadatos',
            text: 'Revisa una foto antes de publicarla o de enviarla a alguien que no conoces, cuando un vendedor de segunda mano o un desconocido te manda una imagen, cuando una plataforma etiqueta como IA una foto real y quieres saber por qué, y después de limpiar un archivo para confirmar que no queda nada: basta con soltar la copia limpia en el visor. Ten en cuenta que cualquiera puede editar o borrar los metadatos, así que son una pista, no una prueba.',
          },
        ],
        faq: [
          {
            q: '¿Los metadatos pueden demostrar cuándo o dónde se tomó una foto?',
            a: 'Por sí solos, no. Las fechas y el GPS del EXIF se pueden cambiar con herramientas gratuitas. Los manifiestos C2PA están firmados y son más difíciles de falsificar, pero se eliminan con facilidad, así que la ausencia de un manifiesto tampoco demuestra nada.',
          },
          {
            q: '¿Por qué mi foto casi no muestra metadatos?',
            a: 'La mayoría de redes sociales y apps de mensajería eliminan el EXIF al subir una foto, y las capturas de pantalla nunca tuvieron datos de cámara. Un archivo descargado de esas plataformas suele estar ya limpio.',
          },
          {
            q: '¿Qué formatos puedo revisar?',
            a: 'Fotos JPG, PNG, WebP y HEIC/HEIF, incluidas las del iPhone. Puedes soltar varios archivos a la vez y abrir el informe de cada uno por separado.',
          },
        ],
      },
    },
    'privacy-check': {
      title: 'Análisis de privacidad de fotos — GPS y datos personales',
      description:
        'Comprueba qué revela una foto antes de compartirla: ubicación GPS que puedes abrir en un mapa, autor, hora de captura y datos de IA. Gratis, sin subidas.',
      intro:
        'Descubre qué delata una foto antes de publicarla. El análisis muestra si contiene una ubicación GPS (y adónde apunta), datos personales como el autor o el número de serie del dispositivo, la hora de captura y datos de procedencia de IA, con un nivel de riesgo sencillo.',
      steps: [
        'Suelta en el recuadro de arriba las fotos que vas a compartir.',
        'Revisa el nivel de riesgo y los datos de ubicación, personales y de hora de cada archivo.',
        'Si hay una posición GPS, ábrela en el mapa para ver exactamente lo que verían otros y luego elimínala.',
      ],
      faq: [
        {
          q: '¿Cómo se decide el nivel de riesgo?',
          a: 'Alto significa que la foto contiene una ubicación. Medio, que tiene datos personales, de hora o de IA pero no ubicación. Bajo, que no se encontró nada de eso en los metadatos.',
        },
        {
          q: '¿El mapa se carga automáticamente?',
          a: 'No. Las coordenadas se muestran como texto. OpenStreetMap se abre en otra pestaña solo si pulsas el botón; si no, la ubicación nunca sale de tu dispositivo.',
        },
        {
          q: '¿Puede una foto revelar mi ubicación sin GPS?',
          a: 'Los metadatos son solo una fuente. Lo que se ve en la imagen —carteles, monumentos, reflejos— también puede revelar un lugar, y este análisis no puede detectarlo.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Qué busca el análisis',
            text: 'El análisis clasifica los metadatos que encuentra en cuatro tipos de exposición. Cada uno responde a una pregunta distinta que alguien podría hacerse sobre ti a partir de un solo archivo.',
            items: [
              { term: 'Ubicación', text: 'Latitud, longitud y altitud GPS. Una foto tomada con el móvil en casa puede señalar la puerta de tu domicilio; por eso cualquier ubicación hace que el riesgo sea alto.' },
              { term: 'Datos personales y del dispositivo', text: 'Marca y modelo de la cámara, campos de autor y copyright, nombre del propietario, número de serie del cuerpo, ID único de imagen, comentarios y datos MakerNote del fabricante. Un número de serie puede vincular fotos que publicas con cuentas distintas a la misma cámara.' },
              { term: 'Hora', text: 'Fecha de captura original, fracciones de segundo y zona horaria. Juntas revelan cuándo estuviste en un lugar y, aproximadamente, en qué parte del mundo vives.' },
              { term: 'IA y procedencia', text: 'Content Credentials, nombres de herramientas de IA y prompts de generación. No son datos personales en el sentido habitual, pero revelan cómo se hizo la imagen y pueden activar etiquetas de IA.' },
            ],
          },
          {
            title: 'Qué hacer con cada nivel de riesgo',
            text: 'Alto: la foto contiene una ubicación. Elimínala antes de compartirla en cualquier sitio público y, si quieres ver lo precisa que es, ábrela antes en el mapa. Medio: no hay ubicación, pero el archivo lleva datos del dispositivo, personales, de hora o de IA; no pasa nada si es para amigos, pero conviene limpiarlo antes de publicarlo o enviarlo a desconocidos. Bajo: no se encontraron metadatos sensibles, así que el archivo en sí no te delata; lo que muestra la imagen todavía podría hacerlo.',
          },
          {
            title: 'Dónde sobreviven los metadatos al compartir',
            text: 'Muchas redes sociales grandes eliminan el GPS al publicar, pero muchos otros canales no: archivos adjuntos de correo, almacenamiento en la nube y enlaces para compartir archivos, AirDrop y Nearby Share, fotos enviadas “como archivo” o “como documento” en apps de chat, foros y sitios web pequeños. Si no sabes por dónde va a viajar una foto, revísala aquí y límpiala antes de que salga de tu dispositivo.',
          },
        ],
        faq: [
          {
            q: '¿Cómo evito que mi teléfono añada la ubicación a las fotos?',
            a: 'En iPhone, ve a Ajustes → Privacidad y seguridad → Localización → Cámara y elige Nunca. En Android, abre los ajustes de la app de cámara y desactiva las etiquetas de ubicación (el nombre varía según la marca). Las fotos que ya tomaste conservan la ubicación hasta que la elimines.',
          },
          {
            q: '¿Un riesgo bajo significa que la foto es segura para compartir?',
            a: 'Significa que los metadatos están limpios. Caras, números de portal, matrículas, documentos sobre la mesa o un reflejo en una ventana pueden revelar más de lo que pretendes, así que echa también un vistazo a la propia imagen.',
          },
          {
            q: '¿Puedo revisar fotos que me envía otra persona?',
            a: 'Sí. El análisis solo lee el archivo, así que es una forma rápida de ver si una foto recibida conserva la ubicación o datos del dispositivo, por ejemplo antes de reenviarla.',
          },
        ],
      },
    },
    'metadata-size': {
      title: 'Tamaño de metadatos — ¿cuántos metadatos tiene una foto?',
      description:
        'Mide cuántos metadatos lleva una imagen: bytes totales, los bloques EXIF, C2PA o de prompts más grandes y el riesgo de privacidad. Gratis, sin subir nada.',
      intro:
        'Descubre qué parte de un archivo son metadatos y no imagen. La herramienta lista cada bloque de metadatos por tamaño —EXIF, XMP, C2PA, vistas previas incrustadas, prompts y flujos de IA—, muestra su porcentaje del archivo y valora el riesgo de privacidad.',
      steps: [
        'Suelta una o varias imágenes en el recuadro de arriba.',
        'Compara el tamaño de los metadatos y su porcentaje en cada archivo, bloque a bloque.',
        'Elimina los metadatos para que los archivos pesen menos y sean más seguros de compartir.',
      ],
      faq: [
        {
          q: '¿Por qué algunos archivos llevan tantos metadatos?',
          a: 'Las vistas previas incrustadas, los manifiestos C2PA con miniaturas y los flujos de ComfyUI pueden sumar decenas o cientos de kilobytes; el EXIF básico suele ocupar solo unos pocos.',
        },
        {
          q: '¿Por qué el perfil de color aparece como conservado?',
          a: 'El perfil de color ICC es necesario para mostrar bien los colores, así que el limpiador lo conserva. No se cuenta en el total de metadatos.',
        },
        {
          q: '¿Eliminar los metadatos cambia la imagen?',
          a: 'No. Solo se eliminan bloques de metadatos; los datos de la imagen se copian sin cambios, así que el archivo pesa menos sin perder calidad.',
        },
      ],
      guide: {
        sections: [
          {
            title: 'Qué suele ocupar el espacio',
            text: 'El tamaño de los metadatos varía mucho más de lo que la mayoría imagina. Un bloque EXIF normal es diminuto, mientras que una sola vista previa o un flujo de trabajo incrustado puede pesar más que la imagen de un gráfico web pequeño. Estos son los bloques que el medidor suele encontrar, de menor a mayor:',
            items: [
              { term: 'Perfil de color ICC', text: 'De unos cientos de bytes a unos pocos kilobytes. Aparece como conservado, porque los colores dependen de él.' },
              { term: 'EXIF', text: 'Normalmente unos pocos kilobytes de ajustes de cámara, fechas y GPS, más una miniatura EXIF que a menudo añade otros 5–20 KB.' },
              { term: 'XMP', text: 'Menos de un kilobyte en archivos sencillos, pero Photoshop y Lightroom pueden escribir historiales de edición y listas de documentos que llegan a cientos de kilobytes.' },
              { term: 'Manifiesto C2PA', text: 'A menudo decenas de kilobytes: certificados, firmas y a veces miniaturas de las imágenes de origen.' },
              { term: 'Prompts y flujos PNG', text: 'Los parámetros de Stable Diffusion ocupan uno o dos kilobytes; un flujo de ComfyUI con muchos nodos puede llegar a decenas o cientos de kilobytes.' },
              { term: 'Datos tras la imagen', text: 'Algunos teléfonos añaden datos al final de los JPG: imágenes secundarias MPF, vistas previas más grandes o el vídeo corto de una Motion Photo, que pueden sumar varios megabytes.' },
            ],
          },
          {
            title: 'Por qué importa el tamaño de los metadatos',
            text: 'En un sitio web, cada kilobyte se multiplica por cada visitante y cada imagen de la página, así que quitar unas decenas de kilobytes por imagen se nota, y a diferencia de recomprimir, no cuesta nada de calidad. El tamaño también es una pista de privacidad: los bloques más grandes suelen ser los más reveladores, como un historial de edición completo, un flujo de generación o una segunda imagen oculta. En archivos de miles de fotos, el ahorro también se nota en el almacenamiento.',
          },
          {
            title: 'Cómo leer el resultado',
            text: 'El titular muestra el total de metadatos que se eliminarían y su porcentaje del archivo; la barra de debajo hace visible ese porcentaje de un vistazo. Después, cada bloque aparece de mayor a menor con su propia barra, para que los valores atípicos destaquen enseguida. El perfil de color aparece en verde como conservado y no cuenta en el total. Un porcentaje de pocas unidades es típico en fotos grandes de cámara, mientras que los PNG pequeños y las imágenes de IA suelen alcanzar valores mucho más altos.',
          },
        ],
        faq: [
          {
            q: '¿Cuánto se reducirá mi archivo?',
            a: 'Aproximadamente el total de metadatos indicado. El limpiador elimina esos bloques y copia los datos de imagen tal cual, así que el archivo limpio pesa lo mismo que el original menos los metadatos eliminados.',
          },
          {
            q: '¿Eliminar metadatos sustituye a la compresión de imágenes?',
            a: 'No. Solo quita lo que no forma parte de la imagen. Para reducir mucho una foto sigues necesitando redimensionar o recomprimir, lo que cambia los píxeles; eliminar metadatos es el paso gratuito que puedes dar primero sin perder calidad.',
          },
          {
            q: '¿Por qué una imagen de IA pequeña muestra un porcentaje alto de metadatos?',
            a: 'Los generadores y editores añaden los mismos prompts, flujos de trabajo o Content Credentials sea cual sea el tamaño de la imagen, así que en un archivo pequeño pueden suponer una gran parte del total de bytes.',
          },
        ],
      },
    },
  },
};

export default tools;
