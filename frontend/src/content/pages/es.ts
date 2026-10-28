import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Acerca de All Metadata Cleaner',
    description:
      'All Metadata Cleaner es una herramienta gratuita y centrada en la privacidad para ver y eliminar EXIF, GPS, XMP, IPTC, C2PA y prompts de IA de imágenes en tu navegador.',
    intro:
      'All Metadata Cleaner es una herramienta web gratuita para ver y eliminar la información oculta en los archivos de imagen: EXIF y ubicación GPS, XMP, IPTC, Content Credentials (C2PA) y los prompts o flujos de trabajo que incrustan los generadores de IA.',
    sections: [
      {
        heading: 'Por qué la creamos',
        paragraphs: [
          'Las fotos y las imágenes de IA suelen contener más de lo que la gente imagina: dónde se tomó una foto, con qué dispositivo, quién la editó o el prompt exacto de una imagen de IA. La mayoría de los eliminadores de metadatos suben tus archivos a un servidor o vuelven a comprimirlos. Queríamos una herramienta que no hiciera ninguna de las dos cosas.',
        ],
      },
      {
        heading: 'Cómo funciona',
        paragraphs: ['Todo ocurre en tu propio dispositivo:'],
        bullets: [
          'Tu navegador lee cada archivo y analiza su estructura: segmentos JPEG, chunks PNG y cajas WebP y HEIC/AVIF.',
          'Los bloques de metadatos se eliminan a nivel de bytes; los datos de la imagen se copian sin cambios, así que la calidad no varía.',
          'Cada archivo limpio se vuelve a analizar para que puedas comprobar qué se eliminó.',
        ],
      },
      {
        heading: 'Nuestros principios',
        paragraphs: ['Unas pocas reglas guían todas nuestras decisiones:'],
        bullets: [
          'La privacidad primero: las imágenes nunca se suben, se guardan ni las vemos nosotros.',
          'Honestidad: explicamos lo que la herramienta no puede hacer, como eliminar marcas de agua invisibles en los píxeles.',
          'Gratis, sin cuenta, sin marca de agua y sin anuncios.',
        ],
      },
      {
        heading: 'Para quién es',
        paragraphs: [
          'Para cualquiera que comparta imágenes: quien quiere proteger su ubicación antes de publicar una foto, fotógrafos que entregan trabajos a clientes, creadores que mantienen privados sus prompts y quien vio su foto real etiquetada por error como IA. Pedimos a todos que sigan las normas de cada plataforma sobre la declaración de contenido generado con IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    description:
      'Cómo trata tus datos All Metadata Cleaner: las imágenes se procesan en tu navegador y nunca se suben. Sin cuentas, sin rastreadores, sin anuncios, almacenamiento mínimo.',
    intro:
      'Esta política explica qué datos trata All Metadata Cleaner cuando usas el sitio web. En resumen: tus imágenes nunca salen de tu dispositivo y no te rastreamos.',
    sections: [
      {
        heading: 'Tus imágenes se quedan en tu dispositivo',
        paragraphs: [
          'Las imágenes que añades las lee y procesa tu propio navegador mediante Web Workers. No se suben a ningún servidor y nunca las recibimos, guardamos ni vemos. Incluso puedes desconectarte de internet después de cargar la página y la herramienta seguirá funcionando.',
        ],
      },
      {
        heading: 'Lo que no recopilamos',
        paragraphs: ['Diseñamos el sitio para recopilar lo mínimo posible:'],
        bullets: [
          'No se requieren cuentas, registros ni direcciones de correo electrónico.',
          'No se cargan scripts de analítica, publicidad ni seguimiento de redes sociales, y no se solicitan fuentes ni scripts de terceros.',
          'No se envía a ningún sitio información sobre el contenido o los metadatos de tus imágenes.',
        ],
      },
      {
        heading: 'Datos guardados en tu navegador',
        paragraphs: ['El sitio solo recuerda dos preferencias, en tu dispositivo:'],
        bullets: [
          'El idioma que elegiste, guardado en el almacenamiento local y en una cookie propia para que la página de inicio se abra en ese idioma.',
          'El tema que elegiste (claro, oscuro o del sistema), guardado en el almacenamiento local.',
        ],
      },
      {
        heading: 'Alojamiento y registros del servidor',
        paragraphs: [
          'El sitio web se sirve desde nuestro propio servidor. Como cualquier servidor web, procesa información estándar de las solicitudes, como tu dirección IP, el tipo de navegador y la página solicitada, para servir el sitio y protegerlo de abusos. El idioma de tu navegador puede usarse para elegir un idioma predeterminado. No usamos esta información para identificarte ni elaborar perfiles.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        paragraphs: [
          'Si cambia la forma en que el sitio trata los datos, actualizaremos esta página y la fecha de la parte superior. Seguir usando el sitio después de una actualización implica que aceptas la política revisada.',
        ],
      },
    ],
  },
  terms: {
    title: 'Condiciones de uso',
    description:
      'Condiciones de uso de All Metadata Cleaner: una herramienta gratuita ofrecida tal cual, tu responsabilidad sobre el uso de las imágenes limpias y los límites de nuestra responsabilidad.',
    intro:
      'Al usar All Metadata Cleaner aceptas estas condiciones. Léelas junto con el aviso legal de la página de inicio y nuestra Política de privacidad.',
    sections: [
      {
        heading: 'El servicio',
        paragraphs: [
          'All Metadata Cleaner es una herramienta web gratuita que inspecciona y elimina metadatos de archivos de imagen en tu propio dispositivo. Podemos cambiar, mejorar o interrumpir cualquier parte de ella en cualquier momento y sin previo aviso.',
        ],
      },
      {
        heading: 'Uso aceptable',
        paragraphs: ['Eres responsable de los archivos que procesas y del uso que haces de los resultados. Te comprometes a no usar la herramienta para:'],
        bullets: [
          'infringir ninguna ley ni los derechos de terceros, incluidos los derechos de autor y de privacidad;',
          'ocultar contenido generado con IA cuando una ley o una norma de la plataforma te obligue a declararlo;',
          'eliminar información de derechos de autor, licencia o créditos de imágenes que no te pertenecen o que no tienes derecho a modificar.',
        ],
      },
      {
        heading: 'Sin garantías',
        paragraphs: [
          'La herramienta se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas. No garantizamos que elimine todos los tipos de metadatos, que los resultados estén libres de errores ni que las plataformas traten las imágenes limpias de una forma concreta. Conserva siempre una copia de tus archivos originales.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        paragraphs: [
          'En la máxima medida permitida por la ley, no somos responsables de ninguna pérdida o daño directo, indirecto, incidental o consecuente —incluida la pérdida de datos, archivos o beneficios— derivado del uso o la imposibilidad de uso de la herramienta. Algunas jurisdicciones no permiten ciertas limitaciones; en ese caso, solo se aplican en la medida permitida.',
        ],
      },
      {
        heading: 'Cambios en estas condiciones',
        paragraphs: [
          'Podemos actualizar estas condiciones de vez en cuando. La fecha de la parte superior indica la versión más reciente. Seguir usando la herramienta después de un cambio implica que aceptas las condiciones actualizadas.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contacto',
    description:
      'Contacta con el equipo de All Metadata Cleaner: informa de un error, sugiere una función o haz una pregunta sobre privacidad. Leemos todos los mensajes y respondemos lo antes posible.',
    intro:
      'Las preguntas, los informes de errores y las ideas son bienvenidos. Escríbenos por correo electrónico y te responderemos lo antes posible.',
    sections: [
      {
        heading: 'Sobre qué puedes escribirnos',
        paragraphs: ['Nos alegra especialmente recibir:'],
        bullets: [
          'Errores: un archivo que no se limpia, o metadatos que no se detectan o no se eliminan.',
          'Sugerencias: nuevos formatos, opciones o idiomas que te gustaría ver.',
          'Preguntas sobre privacidad o aspectos legales del sitio web.',
        ],
      },
      {
        heading: 'Antes de escribir',
        paragraphs: [
          'Por favor, no envíes fotos privadas. Para informar de un problema, indícanos el formato del archivo, la cámara, el teléfono o la aplicación que lo creó, tu navegador y lo que esperabas que ocurriera. Si hace falta un archivo para reproducir el problema, envía uno que no contenga nada sensible.',
        ],
      },
    ],
  },
};

export default pages;
