import type { Article } from '../types';

const article: Article = {
  title: 'Qué es SynthID y cómo funcionan las marcas de agua invisibles de IA (y qué no puede hacer la limpieza de metadatos)',
  summary: [
    'Algunas imágenes de IA llevan dos tipos de marcas: metadatos guardados junto a la imagen y una marca de agua invisible integrada en los propios píxeles. SynthID de Google es el ejemplo más conocido del segundo tipo.',
    'Esta guía explica en qué se diferencian las marcas de agua invisibles de C2PA y EXIF, cómo se detectan y por qué ninguna herramienta de metadatos honesta puede eliminarlas.',
  ],
  seoTitle: 'Qué es SynthID: ¿se pueden quitar las marcas de agua de IA?',
  description:
    'Qué son SynthID y otras marcas de agua invisibles de IA, en qué se diferencian de los metadatos C2PA, cómo se detectan y por qué un limpiador de metadatos no las elimina.',
  answer:
    'SynthID es una marca de agua invisible que Google DeepMind incrusta en los píxeles del contenido creado con los modelos de IA de Google. A diferencia de los metadatos C2PA o EXIF, no es un bloque separado dentro del archivo, resiste ediciones habituales como el recorte y la compresión, y solo se puede leer con las herramientas de detección de Google. Los limpiadores de metadatos, incluido este, no modifican los píxeles y por tanto no pueden eliminarla.',
  sections: [
    {
      heading: 'Dos capas de procedencia IA',
      paragraphs: [
        'Los metadatos (EXIF, XMP, IPTC y C2PA) están en bloques separados del archivo. Son fáciles de leer y fáciles de eliminar sin tocar la imagen. Una marca de agua invisible es distinta: es un patrón sutil repartido por los valores de los píxeles, invisible a simple vista pero reconocible para un detector.',
      ],
      table: {
        head: ['', 'Metadatos (C2PA, IPTC, EXIF)', 'Marca de agua invisible (p. ej. SynthID)'],
        rows: [
          ['Dónde está', 'Bloques separados dentro del archivo', 'Dentro de los valores de los píxeles'],
          ['Quién puede leerla', 'Cualquier visor de metadatos', 'Solo el detector del proveedor'],
          ['Resiste capturas de pantalla y nuevos guardados', 'Normalmente no', 'Está diseñada para ello'],
          ['La elimina un limpiador de metadatos', 'Sí', 'No'],
        ],
      },
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Qué es SynthID',
      paragraphs: [
        'SynthID es una tecnología de marcas de agua desarrollada por Google DeepMind para el contenido generado con los modelos de IA de Google. Incrusta una señal imperceptible durante la generación y está diseñada para seguir siendo detectable tras cambios habituales como recortar, redimensionar, comprimir o ajustar el color. Google usa la misma familia de técnicas para imágenes, audio, vídeo y texto.',
      ],
    },
    {
      heading: 'Cómo saber si una imagen tiene SynthID',
      paragraphs: [
        'A diferencia de los metadatos, una marca de agua no se puede leer con un visor genérico: necesitas el detector del proveedor. Google ha introducido formas de comprobar si un contenido contiene SynthID, como su SynthID Detector y la verificación dentro de sus propios productos. Otros proveedores usan sus propios métodos de marca de agua y detección.',
        'El informe de este sitio solo muestra metadatos. Por eso su veredicto «Sin indicios de IA» nunca descarta una marca de agua en los píxeles.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: '¿Qué imágenes de IA llevan marcas de agua invisibles?',
      paragraphs: [],
      bullets: [
        'Los modelos de imagen de Google, como los que se usan en Gemini e Imagen, incrustan SynthID.',
        'Meta ha afirmado que las imágenes de Meta AI incluyen una marca de agua invisible además de metadatos.',
        'Otros servicios online pueden usar sus propias marcas de agua; las políticas varían y cambian.',
        'Las herramientas locales como Stable Diffusion no suelen añadir ninguna marca de agua por defecto.',
      ],
      related: ['what-metadata-ai-image-generators-add'],
    },
    {
      heading: 'Por qué las herramientas de metadatos no pueden quitar marcas de agua',
      paragraphs: [
        'Un limpiador de metadatos sin pérdida copia los datos de imagen byte a byte: eso es precisamente lo que garantiza que no haya ninguna pérdida de calidad. Por tanto, una marca de agua dentro de los píxeles se queda exactamente donde está. Las herramientas que prometen «quitar marcas de agua de IA» o no funcionan como dicen o alteran mucho la imagen, y tratar de burlar la marca de agua de un proveedor también puede incumplir sus condiciones de uso.',
      ],
    },
    {
      heading: 'Qué significa esto en la práctica',
      paragraphs: [
        'Limpiar los metadatos es la herramienta adecuada para proteger tu privacidad y eliminar prompts, ubicaciones y datos de procedencia que no quieres compartir. No hace que una imagen de IA sea indetectable. Cuando publiques contenido realista generado con IA, sigue las normas de divulgación de la plataforma en la que publicas.',
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images'],
    },
  ],
  faqHeading: 'Preguntas sobre SynthID y las marcas de agua de IA',
  faq: [
    {
      q: '¿Esta herramienta elimina SynthID?',
      a: 'No. La herramienta solo elimina metadatos y nunca modifica los píxeles, así que cualquier marca de agua invisible permanece en la imagen.',
    },
    {
      q: '¿Cómo puedo saber si una imagen tiene SynthID?',
      a: 'Solo con las herramientas de verificación de Google. El informe de metadatos de este sitio no puede ver marcas de agua dentro de los píxeles.',
    },
    {
      q: '¿Todas las imágenes de IA tienen marcas de agua invisibles?',
      a: 'No. Algunos proveedores marcan sus resultados, muchos no, y las imágenes de herramientas locales no suelen llevar ninguna marca de agua.',
    },
    {
      q: '¿Una captura de pantalla elimina SynthID?',
      a: 'Está diseñado para que no. SynthID se creó para resistir transformaciones habituales como capturas de pantalla, recortes y compresión.',
    },
    {
      q: '¿SynthID es lo mismo que las Content Credentials?',
      a: 'No. Las Content Credentials son metadatos firmados que se guardan junto a la imagen; SynthID es una señal dentro de los píxeles. Algunos sistemas combinan ambos.',
    },
    {
      q: '¿Las plataformas pueden detectar SynthID?',
      a: 'Solo si tienen acceso a un detector compatible. Hoy, la mayoría de las etiquetas de las plataformas se basan en los metadatos y en la declaración del creador.',
    },
  ],
};

export default article;
