import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Borrar la ubicación GPS de tus fotos del móvil',
  description:
    'Las fotos del móvil pueden revelar tu ubicación exacta, tu dispositivo y la hora. Descubre qué campos EXIF son peligrosos y cómo borrar el GPS sin perder calidad.',
  answer:
    'La mayoría de las fotos del móvil guardan coordenadas GPS en sus metadatos EXIF, a menudo con una precisión de pocos metros, además de la hora de captura y el modelo del dispositivo. Para borrar la ubicación, suelta la foto en un limpiador de metadatos que elimine el GPS y otros campos EXIF identificativos conservando la orientación y los colores, y comparte la copia limpia. Desactivar la ubicación en la cámara solo afecta a las fotos nuevas.',
  sections: [
    {
      heading: 'Qué escribe tu móvil en cada foto',
      paragraphs: ['Con el acceso a la ubicación activado, una foto típica de smartphone contiene:'],
      bullets: [
        'Latitud, longitud y altitud GPS, a menudo con una precisión de pocos metros, además de una marca de tiempo GPS y a veces la dirección hacia la que apuntaba la cámara.',
        'La fecha y la hora exactas en que se tomó y se editó por última vez la foto, a menudo con la diferencia de zona horaria.',
        'La marca y el modelo del dispositivo, detalles del objetivo y a veces números de serie o el nombre del propietario.',
        'Vistas previas incrustadas e imágenes secundarias (por ejemplo, imágenes MPF o mapas de profundidad) que pueden llevar su propia copia de los mismos datos EXIF.',
      ],
      related: ['what-is-exif-data'],
    },
    {
      heading: 'Por qué la ubicación de las fotos es un riesgo para tu privacidad',
      paragraphs: [
        'Una sola foto tomada en casa puede revelar tu dirección. Una serie de fotos puede revelar tus rutinas: cuándo sales a trabajar, a qué colegio van tus hijos, dónde pasas los fines de semana. Para quien vende cosas por internet, comparte fotos con desconocidos o publica desde lugares sensibles, los metadatos de ubicación son la filtración accidental más habitual.',
      ],
    },
    {
      heading: 'Por dónde se filtra la ubicación',
      paragraphs: [
        'Muchas redes sociales grandes eliminan el EXIF al publicar tu foto, pero hay muchos canales que entregan el archivo original sin cambios:',
      ],
      bullets: [
        'Enviar una foto «como archivo» o como documento en apps de mensajería.',
        'Adjuntos de correo y enlaces compartidos de la nube.',
        'Foros, marketplaces, webs de anuncios clasificados y portfolios que conservan el archivo subido original.',
        'Transferencias por AirDrop, Bluetooth y USB entre dispositivos.',
      ],
      related: ['which-platforms-strip-photo-metadata'],
    },
    {
      heading: 'Cómo saber si una foto tiene ubicación GPS',
      paragraphs: [],
      steps: [
        'Suelta la foto en la herramienta de la parte superior de esta página: se analiza localmente y nunca se sube.',
        'El panel «Detalles de privacidad» muestra de un vistazo si hay campos de ubicación, personales o de fecha, y la posición GPS decodificada en coordenadas decimales.',
        '«Todos los metadatos y detalles del archivo» enumera cada campo, agrupado por EXIF IFD0, Exif y GPS.',
      ],
    },
    {
      heading: 'Cómo borrar la ubicación GPS de una foto',
      paragraphs: [],
      steps: [
        'Suelta una foto o un lote de fotos en la herramienta.',
        'Pulsa «Eliminar metadatos de IA». Se eliminan los campos de GPS, fecha, cámara, autor y software, junto con las miniaturas incrustadas y las imágenes secundarias MPF que, de lo contrario, guardarían una copia oculta.',
        'Revisa el panel verde de resultados para confirmar que no queda ningún dato de ubicación y descarga la foto o un ZIP con el lote.',
      ],
      related: ['remove-exif', 'batch-remove-metadata'],
    },
    {
      heading: 'Quitar la ubicación sin girar ni recomprimir la foto',
      paragraphs: [
        'Una eliminación de EXIF poco cuidadosa puede hacer que las fotos en vertical aparezcan de lado, porque la rotación se guarda como una etiqueta EXIF. El limpiador vuelve a escribir la orientación en un bloque EXIF mínimo, conserva el perfil de color para que los colores sigan siendo fieles y copia los datos de imagen byte a byte. Las fotos HEIC del iPhone se limpian directamente, sin convertirlas a JPEG.',
      ],
      related: ['remove-metadata-from-heic', 'remove-metadata-from-jpg'],
    },
    {
      heading: 'Deja de guardar la ubicación en las fotos nuevas',
      paragraphs: ['También puedes evitar el etiquetado de ubicación desde el origen:'],
      bullets: [
        'iPhone: Ajustes › Privacidad y seguridad › Localización › Cámara › Nunca. Al compartir una foto suelta, toca Opciones en la hoja para compartir y desactiva Ubicación.',
        'Android: desactiva la opción de ubicación en los ajustes de la app de cámara; el nombre y el lugar varían según el fabricante.',
      ],
      table: {
        head: ['Método', 'Elimina el GPS', 'Elimina dispositivo y hora', 'Funciona con fotos antiguas'],
        rows: [
          ['Ubicación desactivada en la cámara', 'En fotos nuevas', 'No', 'No'],
          ['«Ubicación» desactivada al compartir', 'En ese envío', 'No', 'Sí, en cada envío'],
          ['Limpiador de metadatos', 'Sí', 'Sí', 'Sí'],
        ],
      },
      related: ['view-remove-metadata-iphone-android'],
    },
  ],
  faqHeading: 'Preguntas sobre el GPS y la privacidad de las fotos',
  faq: [
    {
      q: '¿Las redes sociales eliminan el GPS automáticamente?',
      a: 'Muchas plataformas grandes eliminan el EXIF de la imagen publicada, pero los archivos enviados como adjuntos, documentos o enlaces de la nube suelen conservar los metadatos originales.',
    },
    {
      q: '¿Alguien puede averiguar mi ubicación a partir de una foto?',
      a: 'Si la foto sigue conteniendo EXIF con GPS, sí: cualquier visor de metadatos muestra las coordenadas en un mapa. Sin metadatos, solo el contenido visible de la imagen puede dar pistas.',
    },
    {
      q: '¿Mi foto se girará después de limpiarla?',
      a: 'No. La etiqueta de orientación se conserva, así que la foto se muestra igual que antes.',
    },
    {
      q: '¿Funciona con las fotos HEIC del iPhone?',
      a: 'Sí. Los archivos HEIC y HEIF se limpian directamente, sin conversión y sin recodificar la imagen.',
    },
    {
      q: '¿Desactivar la ubicación la borra de las fotos que ya hice?',
      a: 'No. Solo afecta a las fotos nuevas. Las fotos existentes conservan la ubicación hasta que la elimines.',
    },
    {
      q: '¿Se sube mi foto cuando borro la ubicación?',
      a: 'No. Todo ocurre en tu navegador; la foto nunca sale de tu dispositivo.',
    },
  ],
};

export default article;
