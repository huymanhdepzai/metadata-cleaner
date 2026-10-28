import type { Article } from '../types';

const article: Article = {
  title: 'Qué apps y redes sociales eliminan los metadatos de las fotos (y cuándo se sigue filtrando tu GPS)',
  summary: [
    'Mucha gente da por hecho que las redes sociales eliminan la ubicación de las fotos. A menudo lo hacen, pero en la copia publicada. El archivo original puede seguir viajando con todo su EXIF a través de apps de mensajería, correo, enlaces de la nube y webs para compartir archivos.',
    'Esta guía explica qué formas de compartir suelen conservar o eliminar los metadatos, cómo probar tú mismo cualquier app y el único hábito fiable: limpiar el archivo antes de que salga de tu dispositivo.',
  ],
  seoTitle: '¿WhatsApp o Instagram borran los metadatos de las fotos?',
  description:
    'Qué redes sociales y apps de mensajería eliminan los metadatos de las fotos, qué formas de compartir conservan el GPS y el EXIF, y cómo enviar siempre fotos limpias.',
  answer:
    'Las grandes redes sociales como Facebook, Instagram y X suelen eliminar el EXIF, incluido el GPS, de las fotos que publican, y muchas apps de mensajería hacen lo mismo con las imágenes comprimidas. Las fotos enviadas como archivo o documento, los adjuntos de correo, los enlaces de la nube, AirDrop y muchos foros o marketplaces conservan los metadatos originales. La solución fiable es eliminar tú mismo los metadatos antes de compartir.',
  sections: [
    {
      heading: 'Copias publicadas frente a archivos originales',
      paragraphs: [
        'Cuando publicas una foto en tu feed, la mayoría de las grandes plataformas la recodifican y eliminan el EXIF de la copia pública. Eso impide que los demás vean tu posición GPS, pero la propia plataforma sigue recibiendo el original al subirlo. El mayor riesgo está en todos los sitios por donde el archivo original pasa sin cambios.',
      ],
    },
    {
      heading: '¿Se conservan los metadatos? Formas habituales de compartir',
      paragraphs: ['Comportamiento típico; compruébalo siempre con tu versión de la app:'],
      table: {
        head: ['Forma de compartir', 'GPS y EXIF', 'Notas'],
        rows: [
          ['Publicaciones en Facebook, Instagram y X', 'Normalmente se eliminan', 'La plataforma sigue recibiendo el original al subirlo'],
          ['Apps de mensajería, enviado como foto', 'Normalmente se eliminan', 'La imagen también se comprime'],
          ['Apps de mensajería, enviado como archivo o documento', 'Se conservan', 'WhatsApp y Telegram entregan el archivo original'],
          ['Adjuntos de correo', 'Se conservan', 'El archivo se envía tal cual'],
          ['Enlaces de la nube (Drive, Dropbox, iCloud)', 'Se conservan', 'Cualquiera con el enlace obtiene el original'],
          ['AirDrop, Bluetooth, USB', 'Se conservan', 'El iPhone puede excluir la ubicación desde Opciones al compartir'],
          ['Foros, marketplaces, webs de portfolio', 'A menudo se conservan', 'Depende de si la web recodifica lo que se sube'],
        ],
      },
    },
    {
      heading: 'Apps de mensajería: enviar como foto o como archivo',
      paragraphs: [
        'La mayoría de las apps de mensajería ofrecen dos formas de enviar una imagen. Como foto normal, se comprime y se eliminan casi todos los metadatos. Como archivo o documento, una opción que se suele elegir para mantener la calidad, se entrega el original con todos los campos EXIF, incluido el GPS. Mucha gente pasa a «enviar como archivo» por la calidad sin darse cuenta de que también envía su ubicación.',
      ],
    },
    {
      heading: 'Plataformas que muestran el EXIF a propósito',
      paragraphs: [
        'Algunas comunidades de fotografía y webs de portfolio muestran los ajustes de la cámara junto a cada foto, y algunas dejan el archivo original disponible para descargar. Si publicas ahí, da por hecho que tus metadatos son públicos salvo que los limpies antes.',
      ],
    },
    {
      heading: 'Cómo probar tú mismo cualquier app',
      paragraphs: ['Las apps actualizan a menudo su forma de tratar los archivos multimedia. Para saberlo con seguridad:'],
      steps: [
        'Haz una foto de prueba con la ubicación activada.',
        'Envíatela a ti mismo de la forma en que sueles compartir fotos.',
        'Descarga el archivo recibido y suéltalo en el comprobador de la parte superior de esta página.',
        'El panel «Detalles de privacidad» muestra al instante si se han conservado datos de ubicación, personales o de fecha.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Limpia antes de compartir',
      paragraphs: [
        'El hábito más seguro es eliminar los metadatos antes de que una foto salga de tu dispositivo. Esta herramienta elimina los campos de GPS, fecha, cámara y autor, además de las vistas previas ocultas, conserva la orientación y los colores, y lo procesa todo localmente: ideal para las fotos que envías a desconocidos, compradores o clientes.',
      ],
      related: ['remove-exif', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
    },
  ],
  faqHeading: 'Preguntas sobre las plataformas y los metadatos de las fotos',
  faq: [
    {
      q: '¿WhatsApp elimina el GPS de las fotos?',
      a: 'Las fotos enviadas como imágenes normales se comprimen y pierden casi todos los metadatos. Las fotos enviadas como documento conservan el archivo original, incluido el GPS.',
    },
    {
      q: '¿Instagram conserva la ubicación de mi foto?',
      a: 'La imagen publicada no lleva EXIF. La ubicación que añades a la publicación es algo aparte y la pueden ver los demás.',
    },
    {
      q: '¿El correo electrónico elimina los metadatos de las fotos?',
      a: 'No. Los adjuntos se envían tal cual, así que el GPS y los demás campos EXIF se quedan en el archivo salvo que tu app lo redimensione.',
    },
    {
      q: '¿Google Drive o iCloud eliminan los metadatos de las fotos compartidas?',
      a: 'Los enlaces compartidos suelen dar acceso al archivo original, metadatos incluidos. Limpia la foto antes de subirla si vas a compartirla.',
    },
    {
      q: '¿Hacer una captura de pantalla es una buena forma de eliminar los metadatos?',
      a: 'Elimina el EXIF, pero reduce la calidad, cambia las dimensiones y puede captar otras cosas de tu pantalla. La limpieza sin pérdida mantiene intacta la imagen original.',
    },
    {
      q: 'Si una plataforma elimina los metadatos, ¿mi ubicación está a salvo?',
      a: 'Frente a los demás usuarios, en gran medida sí, pero la plataforma recibió el archivo original, y el contenido visible de la foto todavía puede revelar dónde se tomó.',
    },
  ],
};

export default article;
