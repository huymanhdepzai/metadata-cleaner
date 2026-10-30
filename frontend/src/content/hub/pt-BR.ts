import type { GuidesHubContent } from './types';

const ptBR: GuidesHubContent = {
  more: 'Primeira vez por aqui? Comece por “O que são dados EXIF?” para entender o básico dos metadados de fotos, ou por “O que é C2PA?” se suas imagens foram geradas ou editadas com IA. Os guias estão organizados pelo que você quer fazer: limpar um formato específico, lidar com rótulos de IA, esconder prompts ou proteger sua localização e privacidade.',
  groups: {
    formats: {
      title: 'Remover metadados por formato e dispositivo',
      text: 'Cada formato esconde os metadados em um lugar diferente: JPEG em segmentos de marcador, PNG em chunks de texto, HEIC e WebP em boxes e chunks RIFF. Estes guias mostram o que cada formato armazena, o que pode ser apagado com segurança e como limpar arquivos no Windows, macOS, iPhone e Android — um por vez ou em lote.',
    },
    'ai-labels': {
      title: 'Rótulos de IA e Content Credentials (C2PA)',
      text: 'Facebook, Instagram, TikTok e YouTube leem manifestos C2PA e campos IPTC para decidir se exibem um rótulo de IA. Entenda como as Content Credentials funcionam, por que fotos reais são marcadas, como verificar uma imagem por conta própria e o que a remoção de metadados consegue — e não consegue — fazer contra marcas d’água invisíveis como o SynthID.',
    },
    'ai-prompts': {
      title: 'Metadados e prompts de geradores de imagens com IA',
      text: 'ChatGPT, DALL·E, Midjourney, Stable Diffusion e ComfyUI deixam rastros diferentes nos arquivos que criam — de um registro C2PA assinado até seu prompt completo, seed e workflow. Veja exatamente o que cada ferramenta deixa para trás e como compartilhar a imagem sem esses dados.',
    },
    privacy: {
      title: 'EXIF, GPS e privacidade das fotos',
      text: 'Fotos de celular trazem o modelo da câmera, o horário da captura e, muitas vezes, uma posição de GPS precisa a poucos metros. Descubra o que o EXIF contém, quais apps e plataformas o removem no envio (e quais o mantêm), se uma captura de tela basta e como apagar a localização antes de compartilhar.',
    },
  },
};

export default ptBR;
