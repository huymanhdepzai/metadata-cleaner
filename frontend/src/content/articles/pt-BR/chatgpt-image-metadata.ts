import type { Article } from '../types';

const article: Article = {
  title: 'O ChatGPT adiciona metadados às imagens? Como ver e remover',
  seoTitle: 'O ChatGPT adiciona metadados às imagens? (C2PA)',
  summary: [
    'Imagens criadas com o ChatGPT e os modelos de imagem da OpenAI trazem Content Credentials C2PA: metadados assinados que identificam a OpenAI como origem da imagem.',
    'Veja o que esses metadados contêm, onde aparecem, como conferir seus próprios arquivos e como removê-los de uma cópia sem perda — e o que a remoção não muda.',
  ],
  description:
    'Sim — imagens do ChatGPT trazem Content Credentials C2PA que indicam a OpenAI como origem. Veja o que contêm, como conferir e como remover sem perda.',
  answer:
    'Sim. Imagens geradas no ChatGPT e pela API de imagens da OpenAI incluem Content Credentials C2PA, um manifesto assinado que registra que a imagem foi criada por um modelo da OpenAI. Plataformas como Instagram, Facebook e LinkedIn podem lê-lo e mostrar um rótulo de IA. Você pode examinar o manifesto em um visualizador de metadados e removê-lo de uma cópia sem alterar os pixels.',
  sections: [
    {
      heading: 'Que metadados o ChatGPT adiciona às imagens geradas',
      paragraphs: [
        'A OpenAI anexa um manifesto C2PA às imagens criadas por seus modelos de imagem no ChatGPT e na API. O manifesto é assinado, então os visualizadores conseguem saber se ele foi alterado. Normalmente ele registra:',
      ],
      bullets: [
        'O emissor e a ferramenta de geração, identificando a OpenAI e o ChatGPT ou a API.',
        'Uma ação informando que a imagem foi criada, com o tipo de fonte digital “trainedAlgorithmicMedia” — o código padrão para mídia gerada inteiramente por IA.',
        'Um carimbo de data e hora e o certificado usado para assinar o manifesto.',
        'Em imagens editadas no ChatGPT, entradas que descrevem a edição e a imagem de origem.',
      ],
      related: ['what-is-c2pa-content-credentials'],
    },
    {
      heading: 'Uma imagem do ChatGPT contém meu prompt?',
      paragraphs: [
        'Manifestos C2PA foram feitos para registrar a procedência — qual ferramenta criou a imagem e quando —, não a sua conversa. Diferente do Stable Diffusion ou do ComfyUI, que gravam o prompt completo em blocos de texto do PNG, os arquivos da OpenAI não foram pensados para guardar o prompt. O que é incluído pode mudar com o tempo, então a resposta confiável para um arquivo específico é abri-lo em um visualizador e conferir.',
      ],
      related: ['hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    },
    {
      heading: 'Como verificar os metadados de uma imagem do ChatGPT',
      paragraphs: [],
      steps: [
        'Baixe a imagem do ChatGPT. Os arquivos geralmente são salvos em PNG.',
        'Solte o arquivo baixado no verificador no topo desta página.',
        'Abra o painel “IA e procedência”: ele mostra o manifesto C2PA, o emissor e o tipo de fonte digital.',
        'Compare com uma cópia que você compartilhou ou salvou de novo — muitos apps removem o manifesto, outros o mantêm.',
      ],
      related: ['how-to-check-if-image-is-ai-generated'],
    },
    {
      heading: 'Onde os metadados das imagens do ChatGPT ficam visíveis',
      paragraphs: [
        'Plataformas e ferramentas compatíveis com C2PA leem o manifesto automaticamente. A Meta mostra o rótulo “Informações de IA” no Instagram, no Facebook e no Threads, o LinkedIn exibe um ícone de Content Credentials e sites de verificação como contentcredentials.org mostram o histórico completo. Plataformas que removem metadados no upload tiram o manifesto da cópia publicada, mas podem lê-lo antes.',
      ],
      related: ['which-platforms-label-ai-images'],
    },
    {
      heading: 'Como remover os metadados de uma imagem do ChatGPT',
      paragraphs: [
        'Remover o manifesto é útil quando você quer arquivos mais leves, evitar compartilhar dados da ferramenta e da conta, ou publicar uma imagem em um contexto em que você mesmo informa a origem de IA.',
      ],
      steps: [
        'Solte uma ou mais imagens do ChatGPT no limpador no topo desta página.',
        'Clique em “Remover metadados de IA”. O bloco C2PA e os outros metadados são recortados no nível dos bytes.',
        'Baixe o PNG limpo — pixels, transparência e dimensões são idênticos ao original.',
        'Guarde o download original se você puder precisar provar de onde a imagem veio.',
      ],
      related: ['remove-c2pa', 'remove-metadata-from-png'],
    },
    {
      heading: 'O que remover os metadados não muda',
      paragraphs: [
        'Metadados são só uma camada. A OpenAI disse que também usa ferramentas internas para reconhecer as próprias imagens, as plataformas podem usar seus próprios classificadores e muitos serviços pedem que você informe conteúdo gerado por IA, seja qual for o conteúdo do arquivo. Remover o manifesto limpa o arquivo; não muda a origem da imagem nem suas obrigações de transparência.',
      ],
      related: ['synthid-invisible-ai-watermarks'],
    },
  ],
  faqHeading: 'Perguntas sobre os metadados das imagens do ChatGPT',
  faq: [
    {
      q: 'Todas as imagens do ChatGPT têm metadados C2PA?',
      a: 'Imagens geradas pelos modelos de imagem da OpenAI no ChatGPT e na API são entregues com Content Credentials C2PA. Cópias feitas por captura de tela ou salvas de novo por outro app podem tê-las perdido.',
    },
    {
      q: 'Dá para saber que uma imagem foi feita com o ChatGPT?',
      a: 'Se o manifesto ainda estiver no arquivo, sim: qualquer visualizador C2PA mostra a OpenAI como origem. Sem metadados, é preciso depender de pistas visuais ou ferramentas de detecção, que nem sempre são confiáveis.',
    },
    {
      q: 'Remover os metadados reduz a qualidade da imagem?',
      a: 'Não. O limpador remove os blocos de metadados e copia os dados da imagem byte a byte, então o PNG fica exatamente igual.',
    },
    {
      q: 'Uma captura de tela de uma imagem do ChatGPT mantém os metadados?',
      a: 'Geralmente não. A captura é um arquivo novo, sem o manifesto original, mas tem resolução menor e recebe seus próprios metadados de captura.',
    },
    {
      q: 'O Instagram ainda vai rotular uma imagem do ChatGPT limpa?',
      a: 'Rótulos baseados em metadados precisam de metadados, então uma cópia limpa tem menos chance de acionar um. As plataformas ainda podem usar outros sinais, e as regras delas podem exigir que você mesmo rotule conteúdo de IA.',
    },
    {
      q: 'Minhas imagens são enviadas quando verifico ou limpo?',
      a: 'Não. Tudo roda no seu navegador e as imagens nunca saem do seu dispositivo.',
    },
  ],
};

export default article;
