import type { ToolsContent } from './types';

const tools: ToolsContent = {
  hub: {
    title: 'Eines gratuïtes de metadades d’imatge',
    description:
      'Eines gratuïtes al navegador per veure, analitzar i eliminar metadades d’imatges: visor EXIF, anàlisi de privadesa, mida de les metadades i eliminació d’EXIF, GPS i C2PA.',
    intro:
      'Totes les eines funcionen al navegador amb el mateix motor: les imatges mai no es pugen i res no es torna a comprimir. Tria el que necessites: mirar dins d’una foto, comprovar què revela o netejar-la.',
  },
  cards: {
    cleaner: { name: 'Elimina metadades d’imatges', text: 'Elimina EXIF, GPS, XMP, IPTC, C2PA i prompts d’IA amb un clic, sense perdre qualitat.' },
    'view-metadata': { name: 'Mostra les metadades', text: 'Mira tots els camps ocults d’una foto: càmera, data, GPS, XMP, C2PA i prompts d’IA.' },
    'privacy-check': { name: 'Anàlisi de privadesa', text: 'Descobreix què revela una foto: ubicació al mapa, dades personals i hora de captura.' },
    'metadata-size': { name: 'Mida de les metadades', text: 'Mesura quants bytes de metadades porta un fitxer i quin risc suposen.' },
    'remove-exif': { name: 'Elimina l’EXIF', text: 'Esborra càmera, data i número de sèrie conservant l’orientació i els colors.' },
    'remove-gps': { name: 'Elimina la ubicació GPS', text: 'Treu les coordenades GPS de les fotos del mòbil abans de compartir-les.' },
    'remove-c2pa': { name: 'Elimina C2PA', text: 'Elimina els manifestos de Content Credentials (C2PA) de JPG, PNG, WebP i HEIC.' },
    'remove-prompts': { name: 'Elimina prompts d’IA', text: 'Elimina paràmetres de Stable Diffusion i fluxos de ComfyUI dels fitxers PNG.' },
    batch: { name: 'Neteja per lots', text: 'Neteja fins a 50 imatges alhora i baixa-les en un sol ZIP.' },
  },
  groups: {
    inspect: { title: 'Revisa les teves fotos', text: 'Mira què revela una imatge abans de compartir-la: el fitxer només es llegeix, mai es modifica.' },
    remove: { title: 'Elimina metadades segons la necessitat', text: 'Tria un format o una tasca: cada guia inclou el netejador.' },
  },
  tools: {
    'view-metadata': {
      title: 'Mostra les metadades d’una imatge en línia — EXIF, XMP, C2PA',
      description:
        'Visor de metadades gratuït: consulta EXIF, GPS, XMP, IPTC, Content Credentials (C2PA) i prompts d’IA en JPG, PNG, WebP i HEIC al navegador, sense pujar res.',
      intro:
        'Deixa anar una foto per veure tota la informació oculta que conté —càmera i objectiu, data de captura, posició GPS, programari d’edició, Content Credentials i prompts d’IA—, agrupada per origen. No es modifica ni es puja res.',
      steps: [
        'Deixa anar una o més imatges al requadre de dalt o toca «Tria imatges».',
        'Obre un fitxer per veure el resum de privadesa, els senyals d’IA i la llista completa de camps.',
        'Cerca entre els camps i decideix si conserves el fitxer tal com és o n’elimines les metadades.',
      ],
      faq: [
        {
          q: 'Veure les metadades modifica el fitxer?',
          a: 'No. El fitxer només es llegeix. Per eliminar metadades, fes servir el netejador: les imatges continuen carregades i no cal tornar-les a afegir.',
        },
        {
          q: 'Quines metadades puc veure?',
          a: 'EXIF (inclòs el GPS), XMP, IPTC, ICC, Content Credentials (C2PA), chunks de text PNG amb prompts o fluxos de ComfyUI i els blocs de l’estructura del fitxer.',
        },
        {
          q: 'Es pugen les meves fotos?',
          a: 'No. El navegador llegeix els fitxers, que mai no surten del dispositiu.',
        },
      ],
    },
    'privacy-check': {
      title: 'Anàlisi de privadesa de fotos — troba GPS i dades personals',
      description:
        'Comprova què revela una foto abans de compartir-la: ubicació GPS per obrir al mapa, autor, número de sèrie, hora de captura i dades d’IA. Gratuït, sense pujar res.',
      intro:
        'Descobreix què delata una foto abans de publicar-la. L’anàlisi mostra si conté una ubicació GPS (i on apunta), dades personals com l’autor o el número de sèrie del dispositiu, l’hora de captura i dades de procedència d’IA, amb un nivell de risc senzill.',
      steps: [
        'Deixa anar al requadre de dalt les fotos que vols compartir.',
        'Llegeix el nivell de risc i les dades d’ubicació, personals i d’hora de cada fitxer.',
        'Si hi ha una posició GPS, obre-la al mapa per veure exactament què veurien els altres i després elimina-la.',
      ],
      faq: [
        {
          q: 'Com es decideix el nivell de risc?',
          a: 'Alt vol dir que la foto conté una ubicació. Mitjà, que té dades personals, d’hora o d’IA però no ubicació. Baix, que no s’ha trobat res d’això a les metadades.',
        },
        {
          q: 'El mapa es carrega automàticament?',
          a: 'No. Les coordenades es mostren com a text. OpenStreetMap s’obre en una pestanya nova només si prems el botó; si no, la ubicació mai no surt del dispositiu.',
        },
        {
          q: 'Una foto pot revelar la meva ubicació sense GPS?',
          a: 'Les metadades només són una font. El que es veu a la imatge —rètols, monuments, reflexos— també pot revelar un lloc, i aquesta anàlisi no ho pot detectar.',
        },
      ],
    },
    'metadata-size': {
      title: 'Mida de les metadades — quantes metadades té una foto?',
      description:
        'Mesura quantes metadades porta una imatge: bytes totals, els blocs EXIF, C2PA o de prompts més grans i el risc de privadesa. Gratuït, sense pujar res.',
      intro:
        'Descobreix quina part d’un fitxer són metadades i no imatge. L’eina llista cada bloc de metadades per mida —EXIF, XMP, C2PA, previsualitzacions incrustades, prompts i fluxos d’IA—, mostra el seu percentatge del fitxer i valora el risc de privadesa.',
      steps: [
        'Deixa anar una o més imatges al requadre de dalt.',
        'Compara la mida de les metadades i el seu percentatge a cada fitxer, bloc a bloc.',
        'Elimina les metadades perquè els fitxers pesin menys i siguin més segurs de compartir.',
      ],
      faq: [
        {
          q: 'Per què alguns fitxers porten tantes metadades?',
          a: 'Les previsualitzacions incrustades, els manifestos C2PA amb miniatures i els fluxos de ComfyUI poden sumar desenes o centenars de kilobytes; l’EXIF bàsic sol ocupar-ne només uns quants.',
        },
        {
          q: 'Per què el perfil de color apareix com a conservat?',
          a: 'El perfil de color ICC cal per mostrar bé els colors, així que el netejador el conserva. No es compta en el total de metadades.',
        },
        {
          q: 'Eliminar les metadades canvia la imatge?',
          a: 'No. Només s’eliminen blocs de metadades; les dades de la imatge es copien sense canvis, de manera que el fitxer pesa menys sense perdre qualitat.',
        },
      ],
    },
  },
};

export default tools;
