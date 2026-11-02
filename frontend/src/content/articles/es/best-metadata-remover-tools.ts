import type { Article } from '../types';

const article: Article = {
  title: 'Mejores herramientas para eliminar metadatos en 2026: 8 opciones comparadas',
  seoTitle: 'Mejores herramientas para borrar metadatos (2026)',
  summary: [
    'Cada foto puede llevar datos ocultos: la ubicación GPS, la fecha de captura, el número de serie del dispositivo y, en las imágenes de IA, las Content Credentials C2PA o el prompt completo. Hay decenas de herramientas que prometen eliminarlos, pero se diferencian en lo que borran de verdad, en si vuelven a comprimir la imagen y en si tus archivos salen de tu dispositivo.',
    'Estas son las ocho herramientas para eliminar metadatos que conviene conocer en 2026, desde herramientas en el navegador y ExifTool hasta las opciones integradas en Windows, macOS y tu móvil, con lo que elimina cada una y sus límites.',
  ],
  description:
    'Mejores herramientas para eliminar metadatos en 2026: All Metadata Cleaner, ExifTool, ExifCleaner, Windows, Mac, móviles y editores. Qué borra cada una.',
  answer:
    'La mejor herramienta depende de cómo trabajes. Para limpiar de forma rápida y privada imágenes JPG, PNG, WebP, HEIC y de IA, un limpiador en el navegador como All Metadata Cleaner elimina EXIF, GPS, C2PA y prompts sin subir ni recomprimir la imagen. ExifTool es la opción más completa para scripts, archivos RAW y ediciones selectivas. Las opciones integradas en Windows, macOS y los móviles suelen quitar solo la ubicación.',
  sections: [
    {
      heading: 'Cómo comparamos las herramientas para eliminar metadatos',
      paragraphs: [
        'Aviso: All Metadata Cleaner es la herramienta de este sitio. Aparece primero porque esta es su guía, no porque todas las demás sean peores: varias de las opciones siguientes son mejores para tareas concretas, y lo decimos. Cada una se describe según su funcionamiento documentado y cinco preguntas:',
      ],
      bullets: [
        'Alcance: ¿borra solo EXIF y GPS, o también XMP, IPTC, Content Credentials C2PA y los prompts de IA guardados como texto en PNG?',
        'Calidad: ¿recorta los metadatos del archivo o decodifica y vuelve a comprimir la imagen?',
        'Privacidad: ¿procesa los archivos en tu dispositivo o los sube a un servidor?',
        'Qué conserva: la orientación y el perfil de color, para que la foto limpia se vea igual.',
        'Esfuerzo: instalación, línea de comandos o un clic, y si admite lotes.',
      ],
    },
    {
      heading: 'Tabla comparativa de herramientas para eliminar metadatos',
      paragraphs: [],
      table: {
        head: ['Herramienta', 'Plataforma', 'Precio', 'C2PA y prompts de IA', 'Calidad de imagen'],
        rows: [
          ['All Metadata Cleaner', 'Cualquier navegador', 'Gratis', 'Se eliminan', 'Sin cambios'],
          ['ExifTool', 'Windows, macOS, Linux (línea de comandos)', 'Gratis, código abierto', 'Se eliminan (-all= o -jumbf:all=)', 'Sin cambios'],
          ['ExifCleaner', 'Windows, macOS, Linux (aplicación)', 'Gratis, código abierto', 'Mediante ExifTool; revisa el resultado', 'Sin cambios'],
          ['Explorador de archivos de Windows', 'Windows', 'Integrado', 'No está pensado para ello', 'Sin cambios'],
          ['Vista Previa y Fotos de Mac', 'macOS', 'Integrado', 'No, solo la ubicación', 'Vista Previa sin cambios, exportar desde Fotos recomprime'],
          ['Compartir en iPhone y Android', 'iOS, Android', 'Integrado', 'No, solo la ubicación', 'Depende de la app'],
          ['ImageMagick -strip', 'Windows, macOS, Linux (línea de comandos)', 'Gratis, código abierto', 'Normalmente sí, porque reescribe el archivo', 'Recomprimida (JPEG, WebP)'],
          ['Exportar desde un editor', 'Photoshop, Lightroom, GIMP', 'De pago o gratis', 'Según los ajustes de exportación', 'Recomprimida'],
        ],
      },
    },
    {
      heading: '1. All Metadata Cleaner: la mejor para limpiar rápido y en privado',
      paragraphs: [
        'Una herramienta web gratuita que funciona por completo en tu navegador: las imágenes se leen y se limpian en tu dispositivo y nunca se suben. Elimina EXIF (incluido el GPS), XMP, IPTC, las Content Credentials C2PA y los prompts o flujos de ComfyUI que los generadores de IA guardan como texto en PNG. Los bloques de metadatos se recortan a nivel de bytes, así que los datos de imagen se copian sin cambios, y se conservan la orientación y el perfil de color ICC para que las fotos se vean igual que antes. HEIC y AVIF mantienen su formato original.',
        'Antes de limpiar, un informe muestra lo que contiene cada archivo: ubicación, datos personales, fecha de captura y señales de IA. Límites: solo JPG, PNG, WebP, GIF, HEIC y AVIF (ni RAW, ni vídeo, ni PDF), hasta 25 MB por imagen y 50 imágenes por lote, y elimina toda la información identificativa a la vez en lugar de dejarte elegir campos sueltos.',
      ],
      related: ['batch-remove-metadata', 'remove-c2pa'],
    },
    {
      heading: '2. ExifTool: la mejor para usuarios avanzados y automatización',
      paragraphs: [
        'ExifTool, de Phil Harvey, es la herramienta de referencia: gratuita, de código abierto y compatible con muchos más formatos que cualquier otra opción de esta lista, incluidos los RAW de cámara y el vídeo. «exiftool -all= foto.jpg» elimina todos los metadatos editables, «-jumbf:all=» elimina solo el bloque C2PA y puedes borrar o conservar etiquetas una a una, algo que las herramientas de un clic no permiten.',
        'A cambio, hay que usar la línea de comandos y vigilar los valores por defecto: «-all=» también borra el perfil de color y la etiqueta de orientación, salvo que los copies de nuevo con «-tagsfromfile @ -icc_profile -orientation». Además deja una copia de seguridad llamada «_original» junto a cada archivo hasta que la borres.',
      ],
      related: ['remove-metadata-windows-mac'],
    },
    {
      heading: '3. ExifCleaner: la mejor aplicación de escritorio de arrastrar y soltar',
      paragraphs: [
        'ExifCleaner es una aplicación de escritorio gratuita y de código abierto para Windows, macOS y Linux que pone una ventana de arrastrar y soltar delante de ExifTool. Suelta archivos o una carpeta entera y elimina los metadatos sin conexión. La versión 4, publicada en 2026, fue su primera gran reconstrucción en cinco años y añadió opciones para guardar una copia limpia y conservar la orientación. Activa guardar como copia si quieres conservar los originales y revisa el resultado en imágenes de IA, porque la eliminación de C2PA depende de la versión de ExifTool incluida.',
      ],
    },
    {
      heading: '4. Explorador de archivos de Windows: integrado, ideal para JPEG',
      paragraphs: [
        'Clic derecho en la foto › Propiedades › Detalles › «Quitar propiedades e información personal» elimina las propiedades que Windows sabe editar y puede guardar una copia limpia. Funciona bien con el EXIF de los archivos JPEG y admite varios archivos a la vez. La compatibilidad con PNG, HEIC y WebP depende de los códecs instalados, y no está pensado para eliminar manifiestos C2PA ni prompts de IA.',
      ],
    },
    {
      heading: '5. Vista Previa y Fotos de Mac: integradas, solo la ubicación',
      paragraphs: [
        'Vista Previa puede eliminar la ubicación GPS (Herramientas › Mostrar inspector › GPS › Eliminar información de ubicación) sin afectar a la calidad, y Fotos puede omitir la ubicación al exportar. En ambos casos se conservan la cámara, la fecha y el resto del EXIF, y una exportación JPEG desde Fotos se vuelve a comprimir. Suficiente si solo te preocupa la ubicación.',
      ],
      related: ['remove-gps-location-from-photos'],
    },
    {
      heading: '6. Opciones para compartir en iPhone y Android: solo la ubicación',
      paragraphs: [
        'En iPhone, toca Opciones en la parte superior de la hoja para compartir y desactiva Ubicación antes de enviar. En Android, Google Fotos y muchas pantallas para compartir permiten quitar la ubicación de las copias compartidas. Es la forma más sencilla de no revelar dónde se tomó una foto, pero los demás campos EXIF se mantienen y los ajustes varían según la app y el fabricante.',
      ],
      related: ['view-remove-metadata-iphone-android'],
    },
    {
      heading: '7. ImageMagick: para scripts, pero recomprime',
      paragraphs: [
        '«magick mogrify -strip *.jpg» elimina perfiles y comentarios de carpetas enteras, e ImageMagick es gratuito en todos los sistemas de escritorio. A diferencia de ExifTool, decodifica y vuelve a escribir la imagen, por lo que los JPEG y WebP se recomprimen, y -strip también elimina el perfil de color ICC, lo que puede alterar los colores de fotos de gama amplia. Úsalo si ya vas a redimensionar o convertir, no como eliminador de metadatos puro.',
      ],
    },
    {
      heading: '8. Photoshop, Lightroom y GIMP: exportar sin metadatos',
      paragraphs: [
        'Todos los grandes editores permiten exportar sin metadatos: Exportar como de Photoshop puede no incluir ninguno, la exportación de Lightroom puede limitarse al copyright y GIMP permite desmarcar EXIF y XMP al exportar. Exportar siempre recomprime la imagen, y las apps de Adobe pueden añadir Content Credentials si ese ajuste está activado, así que revísalo antes.',
      ],
      related: ['turn-off-content-credentials-photoshop-lightroom'],
    },
    {
      heading: '¿Y las webs que eliminan metadatos subiendo tu foto?',
      paragraphs: [
        'Muchas webs limpian los metadatos subiendo tu archivo a su servidor y devolviéndote una copia. Algunas funcionan bien, pero entregas el original, con su ubicación GPS y tus datos personales, a un tercero, y muchas recomprimen la imagen. Si usas una, lee su política de privacidad para saber cuánto tiempo guardan los archivos. Las herramientas que procesan los archivos en el navegador evitan el problema por completo.',
      ],
    },
    {
      heading: '¿Qué herramienta para eliminar metadatos elegir?',
      paragraphs: [],
      bullets: [
        'Compartir unas cuantas fotos o imágenes de IA en privado, sin instalar nada: All Metadata Cleaner.',
        'Scripts, archivos RAW, vídeo o borrar solo etiquetas concretas: ExifTool.',
        'Una aplicación de escritorio sin conexión y de arrastrar y soltar: ExifCleaner.',
        'Solo la ubicación, justo antes de enviar desde el móvil: el interruptor de ubicación al compartir.',
        'Si ya estás editando o redimensionando la foto: exportar sin metadatos desde tu editor.',
      ],
      related: ['what-is-exif-data', 'what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Lo que ninguna herramienta de metadatos puede hacer',
      paragraphs: [
        'Todas estas herramientas editan metadatos, no píxeles. Ninguna puede eliminar marcas de agua invisibles integradas en la propia imagen, como SynthID de Google, y las plataformas pueden seguir etiquetando imágenes con su propia detección. Eliminar metadatos tampoco cambia la obligación de indicar el contenido generado con IA cuando una plataforma o la ley lo exigen.',
      ],
      related: ['synthid-invisible-ai-watermarks', 'made-with-ai-label'],
    },
  ],
  faqHeading: 'Preguntas sobre herramientas para eliminar metadatos',
  faq: [
    {
      q: '¿Cuál es la mejor herramienta gratuita para eliminar metadatos?',
      a: 'Para la mayoría, un limpiador en el navegador como All Metadata Cleaner: gratis, sin instalar, sin subir archivos y sin perder calidad. Para scripts, archivos RAW o ediciones selectivas, ExifTool es la opción gratuita más completa.',
    },
    {
      q: '¿Es seguro usar una web para eliminar metadatos?',
      a: 'Depende de si el archivo se sube. Las herramientas que procesan las imágenes en el navegador no las envían a ningún sitio. Las webs que suben archivos reciben tu foto original, con su ubicación, así que revisa su política de privacidad.',
    },
    {
      q: '¿Eliminar metadatos reduce la calidad de la imagen?',
      a: 'No con herramientas que recortan los bloques de metadatos, como All Metadata Cleaner, ExifTool, ExifCleaner o el Explorador de Windows. Exportar desde un editor, ImageMagick o Fotos de Mac recomprime la imagen y puede reducir su calidad.',
    },
    {
      q: '¿Qué herramientas eliminan las Content Credentials C2PA?',
      a: 'All Metadata Cleaner y ExifTool (con -all= o -jumbf:all=) eliminan los manifiestos C2PA. Las opciones integradas en Windows, macOS y los móviles no están pensadas para ello.',
    },
    {
      q: '¿Puedo quitar solo la ubicación GPS y conservar el resto?',
      a: 'Sí, con ExifTool (exiftool -gps:all= foto.jpg), Vista Previa en Mac o las opciones para compartir del móvil. All Metadata Cleaner elimina todos los metadatos identificativos a la vez.',
    },
    {
      q: '¿Alguna de estas herramientas elimina marcas de agua de IA invisibles como SynthID?',
      a: 'No. SynthID y marcas similares forman parte de los píxeles, no de los metadatos, así que los eliminadores de metadatos no las tocan.',
    },
  ],
};

export default article;
