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
    cleaner: { name: 'Eliminar metadatos de imágenes', text: 'Elimina EXIF, GPS, XMP, IPTC, C2PA y prompts de IA con un clic, sin perder calidad.' },
    'view-metadata': { name: 'Ver metadatos', text: 'Mira todos los campos ocultos de una foto: cámara, fecha, GPS, XMP, C2PA y prompts de IA.' },
    'privacy-check': { name: 'Análisis de privacidad', text: 'Descubre qué revela una foto: ubicación en el mapa, datos personales y hora de captura.' },
    'metadata-size': { name: 'Tamaño de metadatos', text: 'Mide cuántos bytes de metadatos lleva un archivo y qué riesgo suponen.' },
    'remove-exif': { name: 'Quitar EXIF', text: 'Borra cámara, fecha y número de serie conservando la orientación y los colores.' },
    'remove-gps': { name: 'Quitar ubicación GPS', text: 'Elimina las coordenadas GPS de las fotos del móvil antes de compartirlas.' },
    'remove-c2pa': { name: 'Quitar C2PA', text: 'Elimina los manifiestos de Content Credentials (C2PA) de JPG, PNG, WebP y HEIC.' },
    'remove-prompts': { name: 'Quitar prompts de IA', text: 'Elimina parámetros de Stable Diffusion y flujos de ComfyUI de archivos PNG.' },
    batch: { name: 'Limpieza por lotes', text: 'Limpia hasta 50 imágenes a la vez y descárgalas en un solo ZIP.' },
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
    },
    'privacy-check': {
      title: 'Análisis de privacidad de fotos — encuentra GPS y datos personales',
      description:
        'Comprueba qué revela una foto antes de compartirla: ubicación GPS que puedes abrir en un mapa, autor, número de serie, hora de captura y datos de IA. Gratis y sin subir nada.',
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
    },
    'metadata-size': {
      title: 'Tamaño de metadatos — ¿cuántos metadatos tiene una foto?',
      description:
        'Mide cuántos metadatos lleva una imagen: bytes totales, porcentaje del archivo, los bloques EXIF, XMP, C2PA o de prompts más grandes y el riesgo de privacidad. Gratis, sin subir nada.',
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
    },
  },
};

export default tools;
