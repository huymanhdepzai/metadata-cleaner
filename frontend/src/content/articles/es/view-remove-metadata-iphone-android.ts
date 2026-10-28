import type { Article } from '../types';

const article: Article = {
  title: 'Cómo ver y borrar los metadatos de una foto en iPhone y Android',
  summary: [
    'Tu móvil registra dónde y cuándo se tomó cada foto, además del modelo del dispositivo. Tanto iOS como Android permiten ver esta información y quitar la ubicación antes de compartir.',
    'Aquí tienes las opciones integradas, sus límites y una forma de eliminar todos los metadatos identificativos desde el navegador, también en las fotos HEIC del iPhone, sin instalar ninguna app.',
  ],
  seoTitle: 'Ver y borrar metadatos de fotos en iPhone y Android',
  description:
    'Ve los metadatos de tus fotos en iPhone y Android, quita la ubicación antes de compartir y borra todo el EXIF, también en fotos HEIC, desde el navegador y sin apps.',
  answer:
    'En iPhone, abre una foto y desliza hacia arriba para ver la fecha, la cámara y la ubicación; en Android, ábrela en Google Fotos y desliza hacia arriba. Ambos permiten quitar u ocultar la ubicación, pero el modelo del dispositivo, la hora de captura y otros campos EXIF suelen quedarse. Para borrar todos los metadatos, abre un limpiador en el navegador del móvil, selecciona las fotos y descarga las copias limpias, sin instalar ninguna app.',
  sections: [
    {
      heading: 'Cómo ver los metadatos de una foto en iPhone',
      paragraphs: [],
      steps: [
        'Abre la foto en la app Fotos.',
        'Desliza hacia arriba o toca el botón de información (i).',
        'Verás la fecha y la hora, la cámara y el objetivo, los datos de exposición y, si la ubicación estaba activada, un mapa.',
        'Toca Ajustar junto a la fecha para cambiar la fecha, la hora o la ubicación de esa foto.',
      ],
    },
    {
      heading: 'Cómo quitar la ubicación al compartir desde el iPhone',
      paragraphs: ['Hay dos opciones integradas que ayudan:'],
      bullets: [
        'En la hoja para compartir, toca Opciones en la parte superior y desactiva Ubicación antes de enviar.',
        'Para dejar de registrar la ubicación en las fotos nuevas, ve a Ajustes › Privacidad y seguridad › Localización › Cámara y elige Nunca.',
      ],
    },
    {
      heading: 'Cómo ver y borrar los metadatos en Android',
      paragraphs: [
        'En Google Fotos, abre una foto y desliza hacia arriba para ver detalles como la fecha, el dispositivo y la ubicación; según la versión, ahí mismo puedes editar o quitar la ubicación. La Galería de Samsung y otras apps de galería muestran detalles similares. Para dejar de etiquetar las fotos nuevas, desactiva la opción de ubicación en los ajustes de la app de cámara; su nombre y su lugar varían según el fabricante.',
      ],
    },
    {
      heading: 'Lo que no eliminan las opciones integradas',
      paragraphs: [
        'Los ajustes del móvil se centran en la ubicación. El modelo del dispositivo, la hora de captura, los datos del objetivo, el software de edición y las vistas previas incrustadas suelen quedarse, y los ajustes solo afectan a las fotos futuras o a un envío concreto. Los archivos copiados a un ordenador o enviados por otras apps lo conservan todo.',
      ],
      table: {
        head: ['Opción', 'Ubicación', 'Dispositivo y hora', 'Todas las fotos a la vez'],
        rows: [
          ['iPhone: Opciones › Ubicación desactivada al compartir', 'Se quita en ese envío', 'Se conservan', 'En cada envío'],
          ['Ubicación desactivada en la cámara', 'No se registra en fotos nuevas', 'Se conservan', 'Solo fotos nuevas'],
          ['Quitar ubicación en Google Fotos', 'Se quita en la app', 'Se conservan', 'Foto a foto'],
          ['Limpiador de metadatos en el navegador', 'Se elimina', 'Se eliminan', 'Hasta 50 por lote'],
        ],
      },
    },
    {
      heading: 'Borra todos los metadatos desde el móvil, sin instalar apps',
      paragraphs: [],
      steps: [
        'Abre este sitio en Safari, Chrome o cualquier navegador móvil.',
        'Toca «Elegir imágenes» y selecciona las fotos que quieres compartir.',
        'Revisa el informe y toca «Eliminar metadatos de IA».',
        'Guarda las fotos limpias o descárgalas todas en un ZIP.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
    {
      heading: 'Las fotos HEIC del iPhone siguen siendo HEIC',
      paragraphs: [
        'El iPhone guarda las fotos en HEIC por defecto. Muchas herramientas las convierten a JPEG para limpiarlas, lo que recomprime la foto. Este limpiador elimina los metadatos dentro del propio archivo HEIC, conserva la orientación y los colores y deja intactos los datos de imagen.',
      ],
      related: ['remove-metadata-from-heic'],
    },
  ],
  faqHeading: 'Preguntas sobre los metadatos de las fotos del móvil',
  faq: [
    {
      q: '¿Desactivar la ubicación la borra de las fotos que ya hice?',
      a: 'No. Solo afecta a las fotos nuevas. Las fotos existentes conservan la ubicación hasta que la elimines.',
    },
    {
      q: '¿Admite las fotos HEIC del iPhone?',
      a: 'Sí. Los archivos HEIC se limpian directamente, sin convertirlos a JPEG y sin recodificar la imagen.',
    },
    {
      q: '¿La opción de compartir del iPhone elimina todos los metadatos?',
      a: 'Sobre todo la ubicación. Otros datos, como el modelo del dispositivo y la hora de captura, pueden quedarse en el archivo compartido.',
    },
    {
      q: '¿Necesito instalar una app para borrar los metadatos?',
      a: 'No. El limpiador funciona en el navegador del móvil y las fotos se procesan en el propio teléfono sin subirse.',
    },
    {
      q: '¿Cómo veo la ubicación GPS de una foto?',
      a: 'En iPhone, desliza hacia arriba sobre la foto para ver el mapa. En cualquier dispositivo, suelta la foto en el comprobador para ver las coordenadas decodificadas en «Detalles de privacidad».',
    },
    {
      q: '¿Las fotos limpias seguirán apareciendo en el orden correcto en mi galería?',
      a: 'Las fechas de captura se eliminan, así que la galería puede ordenar las copias limpias según cuándo se guardaron. Conserva los originales para tu propia biblioteca.',
    },
  ],
};

export default article;
