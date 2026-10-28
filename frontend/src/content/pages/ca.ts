import type { Pages } from './types';

const pages: Pages = {
  about: {
    title: 'Sobre All Metadata Cleaner',
    description:
      'All Metadata Cleaner és una eina gratuïta i respectuosa amb la privadesa per veure i eliminar EXIF, GPS, XMP, IPTC, C2PA i prompts d’IA de les imatges, al navegador.',
    intro:
      'All Metadata Cleaner és una eina web gratuïta per veure i eliminar la informació oculta dels fitxers d’imatge: EXIF i ubicació GPS, XMP, IPTC, Content Credentials (C2PA) i els prompts o fluxos de treball que incrusten els generadors d’IA.',
    sections: [
      {
        heading: 'Per què la vam crear',
        paragraphs: [
          'Les fotos i les imatges d’IA sovint contenen més del que la gent es pensa: on es va fer una foto, amb quin dispositiu, qui la va editar o el prompt exacte d’una imatge d’IA. La majoria d’eines per eliminar metadades pugen els fitxers a un servidor o els tornen a comprimir. Volíem una eina que no fes ni una cosa ni l’altra.',
        ],
      },
      {
        heading: 'Com funciona',
        paragraphs: ['Tot passa al teu propi dispositiu:'],
        bullets: [
          'El navegador llegeix cada fitxer i n’analitza l’estructura: segments JPEG, chunks PNG i caixes WebP i HEIC/AVIF.',
          'Els blocs de metadades s’eliminen a nivell de bytes; les dades de la imatge es copien sense canvis, de manera que la qualitat no varia.',
          'Cada fitxer net es torna a analitzar perquè puguis comprovar què s’ha eliminat.',
        ],
      },
      {
        heading: 'Els nostres principis',
        paragraphs: ['Unes poques normes guien totes les nostres decisions:'],
        bullets: [
          'La privadesa primer: les imatges mai no es pugen, no es desen ni les veiem.',
          'Honestedat: expliquem el que l’eina no pot fer, com eliminar marques d’aigua invisibles als píxels.',
          'Gratuïta, sense compte, sense marca d’aigua i sense anuncis.',
        ],
      },
      {
        heading: 'Per a qui és',
        paragraphs: [
          'Per a qualsevol persona que comparteixi imatges: qui vol protegir la seva ubicació abans de publicar una foto, fotògrafs que lliuren encàrrecs als clients, creadors que volen mantenir privats els seus prompts i qui ha vist una foto real etiquetada per error com a IA. Demanem a tothom que segueixi les normes de les plataformes sobre la declaració de contingut generat amb IA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de privadesa',
    description:
      'Com tracta All Metadata Cleaner les teves dades: les imatges es processen al navegador i no es pugen mai. Sense comptes, sense rastrejadors, sense anuncis.',
    intro:
      'Aquesta política explica quines dades tracta All Metadata Cleaner quan utilitzes el lloc web. En resum: les teves imatges no surten mai del dispositiu i no et rastregem.',
    sections: [
      {
        heading: 'Les teves imatges es queden al dispositiu',
        paragraphs: [
          'Les imatges que afegeixes les llegeix i les processa el teu propi navegador amb Web Workers. No es pugen a cap servidor i mai no les rebem, desem ni veiem. Fins i tot pots desconnectar-te d’internet un cop carregada la pàgina i l’eina continua funcionant.',
        ],
      },
      {
        heading: 'Què no recollim',
        paragraphs: ['El lloc està dissenyat per recollir el mínim possible:'],
        bullets: [
          'No calen comptes, registres ni adreces de correu electrònic.',
          'No es carreguen scripts d’analítica, publicitat ni seguiment de xarxes socials, i no se sol·liciten tipus de lletra ni scripts de tercers.',
          'No s’envia enlloc cap informació sobre el contingut o les metadades de les teves imatges.',
        ],
      },
      {
        heading: 'Dades desades al navegador',
        paragraphs: ['El lloc només recorda dues preferències, al teu dispositiu:'],
        bullets: [
          'L’idioma que has triat, desat a l’emmagatzematge local i en una galeta pròpia perquè la pàgina d’inici s’obri en aquest idioma.',
          'El tema que has triat (clar, fosc o del sistema), desat a l’emmagatzematge local.',
        ],
      },
      {
        heading: 'Allotjament i registres del servidor',
        paragraphs: [
          'El lloc web se serveix des del nostre propi servidor. Com qualsevol servidor web, tracta informació estàndard de les sol·licituds, com ara l’adreça IP, el tipus de navegador i la pàgina sol·licitada, per servir el lloc i protegir-lo d’abusos. L’idioma del teu navegador es pot fer servir per triar un idioma per defecte. No fem servir aquesta informació per identificar-te ni elaborar perfils.',
        ],
      },
      {
        heading: 'Canvis en aquesta política',
        paragraphs: [
          'Si canvia la manera com el lloc tracta les dades, actualitzarem aquesta pàgina i la data de la part superior. Continuar utilitzant el lloc després d’una actualització implica acceptar la política revisada.',
        ],
      },
    ],
  },
  terms: {
    title: 'Condicions d’ús',
    description:
      'Condicions d’ús: una eina gratuïta oferta tal com és, la teva responsabilitat sobre l’ús de les imatges netes i els límits de la nostra responsabilitat.',
    intro:
      'En utilitzar All Metadata Cleaner acceptes aquestes condicions. Llegeix-les juntament amb l’avís legal de la pàgina d’inici i la nostra Política de privadesa.',
    sections: [
      {
        heading: 'El servei',
        paragraphs: [
          'All Metadata Cleaner és una eina web gratuïta que inspecciona i elimina metadades de fitxers d’imatge al teu propi dispositiu. Podem canviar, millorar o interrompre qualsevol part de l’eina en qualsevol moment i sense avís previ.',
        ],
      },
      {
        heading: 'Ús acceptable',
        paragraphs: ['Ets responsable dels fitxers que processes i de l’ús que fas dels resultats. Et comprometes a no utilitzar l’eina per:'],
        bullets: [
          'infringir cap llei ni els drets de tercers, inclosos els drets d’autor i de privadesa;',
          'amagar contingut generat amb IA quan una llei o una norma de la plataforma t’obligui a declarar-lo;',
          'eliminar informació de drets d’autor, llicència o crèdits d’imatges que no són teves o que no tens dret a modificar.',
        ],
      },
      {
        heading: 'Sense garanties',
        paragraphs: [
          'L’eina s’ofereix «tal com és» i «segons disponibilitat», sense garanties de cap mena, expresses o implícites. No garantim que elimini tots els tipus de metadades, que els resultats estiguin lliures d’errors ni que les plataformes tractin les imatges netes d’una manera concreta. Conserva sempre una còpia dels fitxers originals.',
        ],
      },
      {
        heading: 'Limitació de responsabilitat',
        paragraphs: [
          'En la màxima mesura permesa per la llei, no som responsables de cap pèrdua o dany directe, indirecte, incidental o conseqüent —inclosa la pèrdua de dades, fitxers o beneficis— derivat de l’ús o la impossibilitat d’ús de l’eina. Algunes jurisdiccions no permeten determinades limitacions; en aquest cas, només s’apliquen en la mesura permesa.',
        ],
      },
      {
        heading: 'Canvis en aquestes condicions',
        paragraphs: [
          'Podem actualitzar aquestes condicions de tant en tant. La data de la part superior indica la versió més recent. Continuar utilitzant l’eina després d’un canvi implica acceptar les condicions actualitzades.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contacte',
    description:
      'Contacta amb l’equip de All Metadata Cleaner: informa d’un error, suggereix una funció o fes una pregunta sobre privadesa. Llegim tots els missatges i responem al més aviat possible.',
    intro:
      'Les preguntes, els informes d’errors i les idees són benvinguts. Escriu-nos un correu electrònic i et respondrem al més aviat possible.',
    sections: [
      {
        heading: 'Sobre què ens pots escriure',
        paragraphs: ['Ens agrada especialment rebre:'],
        bullets: [
          'Errors: un fitxer que no es neteja, o metadades que no es detecten o no s’eliminen.',
          'Suggeriments: nous formats, opcions o idiomes que t’agradaria veure.',
          'Preguntes sobre privadesa o aspectes legals del lloc web.',
        ],
      },
      {
        heading: 'Abans d’escriure',
        paragraphs: [
          'Si us plau, no enviïs fotos privades. Per informar d’un problema, indica’ns el format del fitxer, la càmera, el telèfon o l’aplicació que el va crear, el teu navegador i què esperaves que passés. Si cal un fitxer per reproduir el problema, envia’n un que no contingui res sensible.',
        ],
      },
    ],
  },
};

export default pages;
