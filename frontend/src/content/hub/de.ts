import type { GuidesHubContent } from './types';

const de: GuidesHubContent = {
  more: 'Neu hier? Beginnen Sie mit „Was sind EXIF-Daten?“ für die Grundlagen von Foto-Metadaten oder mit „Was ist C2PA?“, wenn Ihre Bilder mit KI erstellt oder bearbeitet wurden. Die Ratgeber sind danach sortiert, was Sie vorhaben: ein bestimmtes Dateiformat bereinigen, mit KI-Labels umgehen, KI-Prompts verbergen oder Standort und Privatsphäre schützen.',
  groups: {
    formats: {
      title: 'Metadaten nach Dateiformat und Gerät entfernen',
      text: 'Jedes Format versteckt Metadaten an einer anderen Stelle: JPEG in Marker-Segmenten, PNG in Text-Chunks, HEIC und WebP in Boxen und RIFF-Chunks. Diese Ratgeber zeigen, was jedes Format speichert, was sich gefahrlos löschen lässt und wie Sie Dateien unter Windows, macOS, iPhone und Android bereinigen – einzeln oder stapelweise.',
    },
    'ai-labels': {
      title: 'KI-Labels und Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok und YouTube lesen C2PA-Manifeste und IPTC-Felder aus, um zu entscheiden, ob sie ein KI-Label anzeigen. Erfahren Sie, wie Content Credentials funktionieren, warum echte Fotos markiert werden, wie Sie ein Bild selbst prüfen und was das Entfernen von Metadaten gegen unsichtbare Wasserzeichen wie SynthID ausrichten kann – und was nicht.',
    },
    'ai-prompts': {
      title: 'Metadaten und Prompts von KI-Bildgeneratoren',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion und ComfyUI hinterlassen unterschiedliche Spuren in den erzeugten Dateien – vom signierten C2PA-Eintrag bis zu Ihrem vollständigen Prompt samt Seed und Workflow. Sehen Sie genau, was jedes Tool zurücklässt und wie Sie das Bild ohne diese Daten teilen.',
    },
    privacy: {
      title: 'EXIF, GPS und Privatsphäre bei Fotos',
      text: 'Handyfotos enthalten das Kameramodell, den Aufnahmezeitpunkt und oft eine auf wenige Meter genaue GPS-Position. Finden Sie heraus, was in EXIF steckt, welche Apps und Plattformen es beim Hochladen entfernen (und welche es behalten), ob ein Screenshot genügt und wie Sie den Standort vor dem Teilen löschen.',
    },
  },
};

export default de;
