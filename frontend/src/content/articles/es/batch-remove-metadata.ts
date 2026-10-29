import type { Article } from '../types';

const article: Article = {
  seoTitle: 'Eliminar metadatos de fotos por lotes — gratis, sin subir',
  description:
    'Elimina metadatos de hasta 50 imágenes a la vez en tu navegador (JPG, PNG, WebP, GIF, HEIC, AVIF) y descárgalas en un ZIP. Sin pérdida, gratis y sin subidas.',
  answer:
    'Para eliminar los metadatos de muchas imágenes a la vez, suelta hasta 50 archivos JPG, PNG, WebP, GIF, HEIC o AVIF en la herramienta, revisa los informes, pulsa una sola vez «Eliminar metadatos de IA» y descárgalo todo en un único ZIP. El procesamiento se hace en paralelo dentro de tu navegador: no se sube nada y ninguna imagen se vuelve a comprimir.',
  sections: [
    {
      heading: 'Eliminar metadatos por lotes en cuatro pasos',
      paragraphs: [],
      steps: [
        'Suelta hasta 50 imágenes en la página: JPG, PNG, WebP, GIF, HEIC o AVIF, de hasta 25 MB y 40 megapíxeles cada una. Puedes mezclar formatos.',
        'Cada imagen se analiza automáticamente; abre cualquier informe para ver qué se va a eliminar.',
        'Pulsa una vez «Eliminar metadatos de IA» para limpiar todas las imágenes analizadas.',
        'Descarga las imágenes una a una o pulsa «Descargar todo (.zip)» para obtener metadata-cleared.zip.',
      ],
    },
    {
      heading: 'Cuándo conviene limpiar fotos por lotes',
      paragraphs: [],
      bullets: [
        'Fotógrafos que entregan una sesión a un cliente sin números de serie de la cámara, ubicaciones ni historial de edición.',
        'Vendedores que publican muchas fotos de productos en marketplaces que conservan los archivos originales.',
        'Artistas de IA que publican una serie de imágenes sin prompts ni flujos de ComfyUI.',
        'Equipos que preparan imágenes para una web, un dossier de prensa o un dataset público.',
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'remove-gps-location-from-photos'],
    },
    {
      heading: 'Cómo se mantiene rápido sin un servidor',
      paragraphs: [
        'El trabajo se reparte entre varios Web Workers (hilos en segundo plano de tu navegador), tantos como núcleos de CPU tenga tu dispositivo. Cada worker lee un archivo, analiza su estructura y devuelve los bytes limpios, así que la página sigue respondiendo incluso con archivos HEIC grandes.',
        'El ZIP se crea con el método «store» (sin compresión) porque las imágenes ya están comprimidas: el empaquetado es rápido y no añade ninguna pérdida de calidad.',
      ],
    },
    {
      heading: 'Comprueba cada archivo antes de compartirlo',
      paragraphs: [
        'Después de la limpieza, cada archivo resultante se vuelve a analizar. El panel verde de resultados confirma si han desaparecido los campos de ubicación, datos personales, fecha y hora e IA. Los archivos con nombres duplicados se renombran automáticamente dentro del ZIP para que no se sobrescriba nada.',
      ],
    },
    {
      heading: 'Qué se elimina y qué se conserva',
      paragraphs: ['Las mismas reglas se aplican a todos los archivos del lote:'],
      table: {
        head: ['Se elimina', 'Se conserva'],
        rows: [
          ['Ubicación GPS, fecha y hora de captura', 'Datos de imagen, byte a byte'],
          ['Cámara, objetivo, números de serie, software', 'Dimensiones y orientación'],
          ['Campos de autor, copyright y descripción', 'Perfil de color ICC'],
          ['XMP, IPTC, Content Credentials (C2PA)', 'Transparencia y animación'],
          ['Prompts de IA, flujos de trabajo, miniaturas incrustadas', 'Nombres de archivo originales'],
        ],
      },
    },
    {
      heading: 'Consejos para lotes grandes',
      paragraphs: [],
      bullets: [
        'Si tienes cientos de imágenes, trabaja en lotes de 50 y vacía la lista entre una tanda y otra para liberar memoria.',
        'En móviles con poca memoria, cierra antes otras pestañas pesadas.',
        'Como el procesamiento es local, puedes incluso desconectarte de internet una vez cargada la página.',
      ],
    },
    {
      heading: 'Privado desde el diseño',
      paragraphs: [
        'Ninguna imagen se sube, se almacena ni se registra. El único tráfico de red es la carga de la propia página. Por eso la limpieza por lotes sirve para trabajos de clientes, fotos inéditas y cualquier archivo que no puedas enviar al servidor de un tercero.',
      ],
    },
  ],
  faqHeading: 'Preguntas sobre el procesamiento por lotes',
  faq: [
    {
      q: '¿Por qué hay un límite de 50 imágenes?',
      a: 'Todo se ejecuta en tu dispositivo. El límite mantiene un uso de memoria seguro en móviles y ordenadores antiguos; puedes hacer tantos lotes como quieras.',
    },
    {
      q: '¿Puedo mezclar JPG, PNG y HEIC en un mismo lote?',
      a: 'Sí. Cada archivo se identifica por su contenido y se limpia con el método que le corresponde, y todos conservan su formato original.',
    },
    {
      q: '¿Se cambian los nombres de los archivos?',
      a: 'No. Los archivos limpios conservan su nombre original. Solo los duplicados exactos dentro del ZIP reciben un sufijo numerado.',
    },
    {
      q: '¿Puedo usarla sin conexión?',
      a: 'Sí. Una vez cargada la página, la limpieza funciona sin conexión a internet porque no se envía nada a ningún servidor.',
    },
    {
      q: '¿El ZIP comprime aún más las imágenes?',
      a: 'No. Las imágenes se guardan tal cual, así que el ZIP se crea rápido y ninguna imagen pierde calidad.',
    },
    {
      q: '¿La limpieza por lotes es gratuita?',
      a: 'Sí. No hace falta cuenta, no hay marca de agua y no hay límite en el número de lotes que puedes procesar.',
    },
  ],
};

export default article;
