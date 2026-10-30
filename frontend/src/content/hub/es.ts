import type { GuidesHubContent } from './types';

const es: GuidesHubContent = {
  more: '¿Primera vez aquí? Empieza por «Qué son los datos EXIF» para conocer lo básico de los metadatos de las fotos, o por «¿Qué es C2PA?» si tus imágenes están generadas o editadas con IA. Las guías se agrupan según lo que quieres hacer: limpiar un formato concreto, resolver las etiquetas de IA, ocultar los prompts o proteger tu ubicación y tu privacidad.',
  groups: {
    formats: {
      title: 'Eliminar metadatos por formato y dispositivo',
      text: 'Cada formato guarda los metadatos en un lugar distinto: JPEG en segmentos de marcador, PNG en chunks de texto, HEIC y WebP en boxes y chunks RIFF. Estas guías explican qué almacena cada formato, qué se puede borrar sin riesgo y cómo limpiar archivos en Windows, macOS, iPhone y Android, uno a uno o por lotes.',
    },
    'ai-labels': {
      title: 'Etiquetas de IA y Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok y YouTube leen los manifiestos C2PA y los campos IPTC para decidir si muestran una etiqueta de IA. Descubre cómo funcionan las Content Credentials, por qué se marcan fotos reales, cómo comprobar una imagen por tu cuenta y qué puede —y qué no puede— hacer la eliminación de metadatos frente a marcas de agua invisibles como SynthID.',
    },
    'ai-prompts': {
      title: 'Metadatos y prompts de los generadores de imágenes con IA',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion y ComfyUI dejan rastros distintos en los archivos que crean: desde un registro C2PA firmado hasta tu prompt completo, la semilla y el workflow. Mira exactamente qué deja cada herramienta y cómo compartir la imagen sin esos datos.',
    },
    privacy: {
      title: 'EXIF, GPS y privacidad de las fotos',
      text: 'Las fotos del móvil incluyen el modelo de cámara, la hora de captura y, a menudo, una posición GPS precisa a pocos metros. Averigua qué contiene EXIF, qué apps y plataformas lo eliminan al subir (y cuáles lo conservan), si basta con una captura de pantalla y cómo quitar la ubicación antes de compartir.',
    },
  },
};

export default es;
