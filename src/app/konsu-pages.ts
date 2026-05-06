export type KonsuPage = {
  slug: string;
  title: string;
  script: string;
  eyebrow: string;
  intro: string;
  image: string;
  gallery?: {
    src: string;
    alt: string;
  }[];
  sections: {
    title: string;
    body?: string;
    items?: string[];
  }[];
};

export const konsuPages: KonsuPage[] = [
  {
    slug: "about-us",
    title: "Chi siamo",
    script: "History",
    eyebrow: "Il tuo salone di fiducia da 30 anni",
    image: "/konsu/konsu-staff-campodarsego.jpg",
    intro:
      "La nostra realta nasce il 17 novembre 1993 con il nome di Parrucchieri Consuelo. Nel 2003 il salone cambia veste e diventa Parrucchieri Estetica Solarium; l'8 settembre 2018 prende forma il brand KONSU Parrucchieri Estetica.",
    sections: [
      {
        title: "La nostra storia",
        body:
          "Dopo anni di passione e dedizione, Konsu cresce grazie ai clienti che hanno sempre creduto nelle nostre competenze e nei nostri servizi. Il nostro motto e semplice: lavorare per qualcosa che amiamo si chiama passione.",
      },
      {
        title: "Cosa siamo",
        body:
          "Siamo professioniste dei capelli e dei trattamenti estetici, oltre alla ricostruzione delle unghie. Con esperienza decennale e formazione continua siamo pronte ad affrontare ogni richiesta con passione e professionalita.",
      },
      {
        title: "Uno staff preparato",
        body:
          "Lo staff e la nostra forza: ci spinge a crescere, rinnovarci e formarci continuamente, cosi da offrire servizi esclusivi, di qualita e al passo con le nuove tendenze.",
      },
    ],
  },
  {
    slug: "hair-salon",
    title: "Hair salon",
    script: "Hair lovers",
    eyebrow: "Campodarsego dal 1993",
    image: "/konsu/barber-chair.jpg",
    intro:
      "La tua bellezza e il tuo benessere sono al centro di tutto cio che facciamo. Il nostro team comprende le tue esigenze e crea servizi su misura, pensati per esaltare la tua immagine naturale.",
    sections: [
      {
        title: "Il nostro impegno",
        body:
          "Per noi il risultato e l'obiettivo. Taglio e colore sono insieme un'arte e una scienza: creiamo tagli su misura, gestibili e duraturi, con tecniche avanzate e prodotti di alta qualita.",
      },
      {
        title: "Perche scegliere Konsu",
        items: [
          "Professionisti del settore: stilisti e coloristi qualificati e appassionati.",
          "Ambiente elegante e rilassante: un'oasi di tranquillita dove rigenerarsi.",
          "Esperienza di lusso: ogni dettaglio e curato per farti sentire speciale.",
          "Prodotti di alta qualita per proteggere e nutrire i capelli.",
        ],
      },
      {
        title: "Tabella servizi",
        items: [
          "Taglio donna, uomo e bambino",
          "Piega e piega glamour",
          "Colore, colore naturale-vegano e colorazioni expert",
          "Meches, balayage, shatush, tonalizzante e crema riflessante",
          "Permanente, extension, trattamenti curativi e anticaduta",
          "Trattamenti ricostruttori alla cheratina, botox e fibre",
          "Ossigenoterapia capelli per cute e lunghezze",
          "Barber uomo",
        ],
      },
    ],
  },
  {
    slug: "specialevent",
    title: "Special events",
    script: "L'evento",
    eyebrow: "Per un giorno speciale",
    image: "/konsu/gallery-marilena-11.jpg",
    intro:
      "Il giorno del matrimonio e uno degli eventi piu speciali. Da Konsu rendiamo ogni sposa la versione piu splendida di se attraverso acconciature e make-up personalizzati.",
    sections: [
      {
        title: "Il tuo giorno, la tua essenza",
        body:
          "Creiamo un design unico per la tua acconciatura, in armonia con abito, accessori e personalita, valorizzando la tua bellezza naturale.",
      },
      {
        title: "Metodologia acconciature sposa",
        items: [
          "Consulenza approfondita per comprendere stile, desideri e look nuziale.",
          "Progettazione personalizzata dell'acconciatura e del make-up.",
          "Sessione di prova per verificare il risultato e perfezionarlo.",
          "Prodotti di alta qualita e tecniche avanzate per durata e bellezza.",
          "Presenza e cura nel giorno del matrimonio.",
        ],
      },
    ],
  },
  {
    slug: "ricostruzione-unghie",
    title: "Ricostruzione unghie",
    script: "Creativita",
    eyebrow: "Una mano di stile",
    image: "/konsu/nails-hero-alt.jpg",
    intro:
      "Konsu e un salone estetico dedicato alla bellezza e alla cura delle tue unghie. Portiamo mani e piedi a nuovi livelli di splendore con trattamenti innovativi e design artistici personalizzati.",
    gallery: [
      { src: "/konsu/nails-gallery-01.jpg", alt: "Ricostruzione unghie Konsu 01" },
      { src: "/konsu/nails-gallery-02.jpg", alt: "Ricostruzione unghie Konsu 02" },
      { src: "/konsu/nails-gallery-03.jpg", alt: "Ricostruzione unghie Konsu 03" },
      { src: "/konsu/nails-gallery-04.jpg", alt: "Ricostruzione unghie Konsu 04" },
      { src: "/konsu/nails-gallery-05.jpg", alt: "Ricostruzione unghie Konsu 05" },
      { src: "/konsu/nails-gallery-06.jpg", alt: "Ricostruzione unghie Konsu 06" },
      { src: "/konsu/nails-gallery-07.jpg", alt: "Ricostruzione unghie Konsu 07" },
      { src: "/konsu/nails-gallery-08.jpg", alt: "Ricostruzione unghie Konsu 08" },
      { src: "/konsu/nails-gallery-09.jpg", alt: "Ricostruzione unghie Konsu 09" },
      { src: "/konsu/nails-gallery-10.jpg", alt: "Ricostruzione unghie Konsu 10" },
      { src: "/konsu/nails-gallery-11.jpg", alt: "Ricostruzione unghie Konsu 11" },
      { src: "/konsu/nails-gallery-12.jpg", alt: "Ricostruzione unghie Konsu 12" },
      { src: "/konsu/nails-gallery-13.jpg", alt: "Ricostruzione unghie Konsu 13" },
      { src: "/konsu/nails-gallery-14.jpg", alt: "Ricostruzione unghie Konsu 14" },
      { src: "/konsu/nails-gallery-15.jpg", alt: "Ricostruzione unghie Konsu 15" },
    ],
    sections: [
      {
        title: "La nostra metodologia",
        body:
          "La ricostruzione unghie con gel e arte e scienza. Partiamo dall'analisi delle unghie e della pelle per scegliere trattamenti adatti, sicuri e duraturi.",
      },
      {
        title: "Come lo facciamo",
        items: [
          "Analisi personalizzata di unghie e pelle.",
          "Ricostruzioni unghie gel, gel mani base e refill.",
          "Manicure e pedicure con smalto longwear o semipermanente.",
          "Tecnica impeccabile per una finitura liscia, uniforme e resistente.",
          "Prodotti di alta qualita per proteggere le unghie naturali.",
        ],
      },
      {
        title: "Nail art",
        body:
          "Le tue unghie sono una tela bianca: dall'arte astratta ai disegni geometrici, dalle sfumature delicate ai colori accesi, realizziamo design personalizzati con tecniche avanzate.",
      },
    ],
  },
  {
    slug: "trattamenti",
    title: "Trattamenti",
    script: "Benessere",
    eyebrow: "Il viaggio verso la bellezza inizia qui",
    image: "/konsu/treatments-presso-konsu.png",
    intro:
      "Immergiti in un mondo dove la tua bellezza e il tuo benessere sono al centro di tutto cio che facciamo. Prenota il tuo appuntamento oggi e lasciati avvolgere dai nostri trattamenti innovativi e personalizzati.",
    gallery: [
      { src: "/konsu/treatments-pressotherapy.jpg", alt: "Trattamento pressoterapia" },
      { src: "/konsu/treatments-presso-konsu.png", alt: "Pressoterapia Konsu" },
      { src: "/konsu/treatments-lipolisi-konsu.jpg", alt: "Trattamento lipolisi Konsu" },
    ],
    sections: [
      {
        title: "La tua destinazione per il benessere",
        items: [
          "Pressomassaggio con Infrarossi: il nostro trattamento di pressomassaggio con infrarossi e progettato per drenare i liquidi e stimolare un effetto lipolitico, promuovendo il benessere e la tonicita della pelle.",
          "Radiofrequenza Viso/Corpo: la radiofrequenza, applicata su viso e corpo, stimola la produzione di collagene, offrendo un effetto lifting e rassodante, per una pelle visibilmente piu giovane e tonica.",
          "Trattamenti Corpo Modellanti Tonificanti, Riducenti: esplora i nostri trattamenti corpo, come la lipolisi, il lipolaser ed EMS Nubway, progettati per modellare e ridurre, offrendo una silhouette piu snella e definita.",
          "Trattamenti Viso: i nostri trattamenti viso sono personalizzati per soddisfare le esigenze della tua pelle, utilizzando prodotti e tecniche avanzate per promuovere un incarnato radiante e sano.",
          "Trattamenti New Generation LED: scopri i benefici dei nostri trattamenti LED di nuova generazione, che utilizzano la luce per stimolare il rinnovamento cellulare e promuovere una pelle visibilmente piu giovane e luminosa.",
          "Ossigenoterapia Viso: l'ossigenoterapia per il viso rigenera e rivitalizza la pelle, offrendo un trattamento che nutre in profondita, per un incarnato fresco, luminoso e pieno di vitalita.",
          "Ritual Botux Viso: il nostro ritual botux viso e un trattamento anti-eta intensivo, che utilizza principi attivi avanzati per minimizzare le rughe e restituire alla pelle un aspetto giovane e rilassato.",
        ],
      },
    ],
  },
  {
    slug: "estetica",
    title: "Estetica",
    script: "Sempre in ordine",
    eyebrow: "Konsu, la tua oasi di bellezza",
    image: "/konsu/estetica-hero-lettino-fiori.jpg",
    intro:
      "KONSU - la tua oasi di bellezza. Dalla cura del viso allo sguardo, dalla ceretta alla luce pulsata: ogni trattamento unisce precisione, prodotti delicati e attenzione alla persona.",
    sections: [
      {
        title: "Servizi estetica",
        items: [
          "Epilazione Definitiva con Luce Pulsata: elimina i peli indesiderati con la nostra tecnologia di luce pulsata, garantendo una pelle liscia e risultati duraturi attraverso un trattamento sicuro e praticamente indolore.",
          "Sopracciglia: scopri il potere di sopracciglia perfettamente modellate con i nostri esperti, che utilizzano tecniche di precisione per creare la forma ideale e valorizzare il tuo sguardo.",
          "Colore Sopracciglia: ravviva e definisci le tue sopracciglia con il nostro servizio di colorazione, utilizzando pigmenti di alta qualita per garantire un risultato naturale e di lunga durata.",
          "Henne Sopracciglia: esplora l'arte dell'henne per sopracciglia, un metodo naturale per colorare e definire, offrendo un look affascinante e duraturo senza l'uso di prodotti chimici.",
          "Extension Volume Ciglia: valorizza il tuo sguardo con extension di ciglia voluminose, applicate con precisione dai nostri esperti per garantire un aspetto naturale, pieno e seducente.",
          "Baffetto: rimuovi delicatamente i peli superflui dalla zona del baffetto con i nostri metodi delicati ed efficaci, assicurando una pelle liscia e risultati duraturi.",
          "Ceretta Inguine / Ascelle: goditi una pelle liscia e setosa con la nostra ceretta per inguine e ascelle, utilizzando prodotti delicati per minimizzare il disagio e promuovere la cura della pelle.",
          "Ceretta Mezza Gamba: esperienza di ceretta mezza gamba che combina efficienza e comfort, utilizzando cere di alta qualita per garantire una rimozione del pelo pulita e duratura.",
          "Ceretta Gambe Intera: rivela gambe meravigliosamente lisce con la nostra ceretta completa, offrendo un servizio attento e meticoloso per assicurare risultati ottimali e una pelle impeccabile.",
          "Ceretta Schiena Uomo: elimina i peli dalla schiena con la nostra ceretta maschile, progettata per offrire risultati lisci e duraturi con un approccio professionale e discreto.",
          "Ceretta Total Body Uomo & Donna: scopri la liberta di una pelle completamente liscia con il nostro servizio di ceretta total body, adattato per soddisfare le esigenze specifiche di uomini e donne.",
          "Pulizia Viso: rigenera la tua pelle con il nostro trattamento di pulizia del viso, utilizzando prodotti e tecniche avanzate per purificare, esfoliare e nutrire in profondita.",
        ],
      },
      {
        title: "Percorsi relax",
        items: [
          "Massaggio corpo",
          "Kobido massage",
          "Massaggio californiano",
          "Solarium",
          "Laminazione ciglia",
          "Make-up",
        ],
      },
    ],
  },
  {
    slug: "massaggio_corpo",
    title: "Massaggio corpo",
    script: "Rilassati",
    eyebrow: "Esplora il benessere con il Massaggio Corpo Konsu",
    image: "/konsu/massaggio-corpo-hero-kali.jpg",
    intro:
      "Benvenuti nel mondo del relax e della cura personale presso KONSU, il tuo rifugio di bellezza e benessere. Il nostro Massaggio Corpo Generico è progettato per coccolare il tuo corpo, alleviare lo stress e rinnovare la tua energia vitale.",
    sections: [
      {
        title: "Introduzione al Massaggio Corpo",
        body:
          "Benvenuti nel mondo del relax e della cura personale presso KONSU, il tuo rifugio di bellezza e benessere. Il nostro Massaggio Corpo Generico è progettato per coccolare il tuo corpo, alleviare lo stress e rinnovare la tua energia vitale. Che tu stia cercando un momento di puro relax o desideri liberarti dalle tensioni quotidiane, il nostro massaggio corpo è la scelta perfetta per ritrovare equilibrio e armonia.",
      },
      {
        title: "I Benefici del Massaggio Corpo",
        items: [
          "Riduzione dello Stress: Le nostre terapie di massaggio sono progettate per sciogliere le tensioni muscolari, promuovendo una sensazione di rilassamento e riduzione dello stress.",
          "Miglioramento della Circolazione: I movimenti rilassanti e mirati stimolano la circolazione sanguigna, contribuendo a un migliore apporto di ossigeno ai tessuti e alla rimozione delle tossine.",
          "Puro Rinnovamento: Il massaggio corpo non è solo un trattamento fisico ma anche una pausa rigenerante per la mente, offrendoti un momento di fuga dal trambusto quotidiano.",
        ],
      },
      {
        title: "La Tua Esperienza di Massaggio Corpo da Konsu",
        body:
          "Al nostro salone, offriamo un’esperienza di massaggio corpo su misura per le tue esigenze. I nostri terapisti altamente qualificati useranno tecniche personalizzate per garantire che ogni sessione soddisfi le tue specifiche necessità di relax e benessere.",
      },
      {
        title: "Prenota la Tua Sessione di Massaggio Corpo",
        body:
          "Scegli il Massaggio Corpo KONSU per ritrovare il tuo equilibrio interno e riscoprire il piacere del benessere. Prenota ora la tua sessione e concediti questo momento di cura e relax.",
      },
    ],
  },
  {
    slug: "kabido-massage",
    title: "Kobido massage",
    script: "Dal Giappone",
    eyebrow: "Esplora il benessere autentico con il Kobido massaggio",
    image: "/konsu/kobido-hero-massage.webp",
    intro:
      "Benvenuti nel nostro spazio dedicato al Kobido, un antico segreto giapponese per la bellezza e il benessere interiore. Il Kobido è più di un semplice massaggio; è un rituale che risveglia la tua energia vitale, rivitalizza la tua pelle e rilascia le tensioni accumulate.",
    sections: [
      {
        title: "Introduzione al Kobido",
        body:
          "Benvenuti nel nostro spazio dedicato al Kobido, un antico segreto giapponese per la bellezza e il benessere interiore. Il Kobido è più di un semplice massaggio; è un rituale che risveglia la tua energia vitale, rivitalizza la tua pelle e rilascia le tensioni accumulate. Da secoli, il Kobido è stato considerato un tesoro della tradizione giapponese, offrendo non solo benefici fisici ma anche uno stato di equilibrio mentale e spirituale.",
      },
      {
        title: "I Benefici del Kobido",
        items: [
          "Tonificazione della Pelle: Il Kobido utilizza tecniche specifiche per stimolare la circolazione sanguigna e migliorare l’elasticità della pelle, conferendo un aspetto tonico e radiante.",
          "Riduzione delle Tensioni Facciali e Muscolari: Le manovre delicate e armoniose del Kobido mirano a sciogliere le tensioni accumulate nei muscoli del viso e del collo, promuovendo un senso immediato di relax.",
          "Stimolazione dell’Energia Vitale: Il massaggio Kobido si concentra anche sulla stimolazione dei punti energetici del viso, contribuendo a riequilibrare l’energia vitale (Ki) e promuovendo una sensazione di armonia.",
        ],
      },
      {
        title: "L’Esperienza Kobido da Noi",
        body:
          "Presso il nostro centro, vi offriamo un’esperienza Kobido autentica e personalizzata. I nostri terapisti esperti sono addestrati secondo le antiche tecniche giapponesi per garantire un trattamento accurato e rispettoso della tradizione. Ogni sessione Kobido è un viaggio di rinnovamento che vi condurrà a uno stato di rilassamento profondo e bellezza radiante.",
      },
      {
        title: "Prenota la Tua Esperienza Kobido",
        body:
          "Concediti l’opportunità di sperimentare il Kobido e scoprire i suoi straordinari benefici. Prenota ora la tua sessione presso il nostro centro e immergiti nell’autentico benessere giapponese.",
      },
    ],
  },
  {
    slug: "masaggio-californiano",
    title: "Massaggio californiano",
    script: "Un attimo per te",
    eyebrow: "Massaggio Californiano: Un'Esperienza di Rilassamento Profondo",
    image: "/konsu/wellness.jpg",
    intro:
      "Benvenuti nel nostro centro di bellezza e benessere, KONSU. Siamo lieti di offrirvi un’esperienza unica di relax attraverso il nostro esclusivo servizio di Massaggio Californiano.",
    sections: [
      {
        title: "Massaggio Californiano: Un'Esperienza di Rilassamento Profondo",
        body:
          "Benvenuti nel nostro centro di bellezza e benessere, KONSU. Siamo lieti di offrirvi un’esperienza unica di relax attraverso il nostro esclusivo servizio di Massaggio Californiano. Il Massaggio Californiano è più di una semplice terapia fisica; è un viaggio sensoriale che unisce la mente, il corpo e lo spirito per raggiungere uno stato di armonia totale.",
      },
      {
        title: "Cosa è il Massaggio Californiano?",
        body:
          "Il Massaggio Californiano, noto anche come “massaggio a onda lunga”, è una forma di massaggio terapeutico che incorpora movimenti fluidi e rilassanti. I nostri terapisti altamente qualificati utilizzano tecniche di sfioramento, massaggi circolari e lunghe carezze per sciogliere le tensioni muscolari, migliorare la circolazione e promuovere un senso generale di benessere.",
      },
      {
        title: "I Benefici del Massaggio Californiano",
        items: [
          "Rilassamento Profondo: La tecnica rilassante del massaggio californiano aiuta a liberare la tensione accumulata nelle fasce muscolari, inducendo uno stato di totale rilassamento.",
          "Stimolazione della Circolazione Sanguigna: I movimenti delicati migliorano la circolazione sanguigna, contribuendo a una migliore ossigenazione dei tessuti e al drenaggio delle tossine.",
          "Miglioramento dello Stato d’Animo: Il massaggio californiano non beneficia solo il corpo ma anche la mente, promuovendo una sensazione di tranquillità e riducendo lo stress.",
        ],
      },
      {
        title: "Cosa Aspettarsi da una Sessione da Konsu",
        body:
          "Al vostro arrivo, sarete accolti in un ambiente tranquillo e accogliente. Il nostro team esperto vi guiderà attraverso una breve consultazione per personalizzare la vostra esperienza in base alle vostre esigenze individuali. Durante la sessione, sarete immersi in un’atmosfera rilassante con oli essenziali e musica calma per migliorare ulteriormente il vostro benessere.",
      },
    ],
  },
  {
    slug: "solarium",
    title: "Solarium",
    script: "Abbronzatissima",
    eyebrow: "L'Esclusività del Solarium Alta Pressione a Konsu",
    image: "/konsu/salon-wide.jpg",
    intro:
      "Nel cuore del nostro salone estetico, Konsu, si trova un angolo dedicato esclusivamente al tuo desiderio di ottenere un’abbronzatura perfetta in ogni stagione: il nostro Solarium Alta Pressione.",
    sections: [
      {
        title: "L'Esclusività del Solarium Alta Pressione a Konsu",
        body:
          "Nel cuore del nostro salone estetico, Konsu, si trova un angolo dedicato esclusivamente al tuo desiderio di ottenere un’abbronzatura perfetta in ogni stagione: il nostro Solarium Alta Pressione.",
      },
      {
        title: "Metodologia del Solarium Alta Pressione",
        body:
          "Il Solarium Alta Pressione non è un comune letto abbronzante, ma un’esperienza di abbronzatura di alta qualità che si distingue per sicurezza e risultati ottimali. Ecco come funziona:",
        items: [
          "Tecnologia Avanzata: I nostri apparecchi di alta pressione utilizzano lampade speciali che emettono una maggiore percentuale di raggi UVA e una minore percentuale di raggi UVB, garantendo un’abbronzatura più profonda e duratura, minimizzando il rischio di scottature.",
          "Personalizzazione: Ogni sessione è personalizzata in base al tuo tipo di pelle e ai tuoi obiettivi di abbronzatura, assicurando un risultato omogeneo e naturale, senza compromettere la salute della tua pelle.",
          "Comfort e Relax: Durante il tuo tempo nel nostro solarium, ti immergerai in un’atmosfera rilassante e confortevole, dove ogni dettaglio è stato pensato per il tuo benessere.",
          "Sicurezza Prima di Tutto: La tua sicurezza è la nostra priorità. Il nostro team è altamente qualificato e seguirà passo passo il tuo percorso, assicurandosi che l’esposizione sia sempre nei limiti raccomandati e che la tua pelle sia protetta e nutrita.",
          "Consulenza Esperta: Prima di iniziare il tuo percorso di abbronzatura, i nostri esperti ti consulteranno per comprendere le tue esigenze e aspettative, fornendoti consigli preziosi su come mantenere la tua abbronzatura e prenderti cura della tua pelle.",
        ],
      },
    ],
  },
  {
    slug: "laminazione-ciglia",
    title: "Laminazione ciglia",
    script: "Apri gli occhi",
    eyebrow: "Scopri la bellezza senza confini con la Laminazione Ciglia",
    image: "/konsu/team-sara-new.jpg",
    intro:
      "Benvenuti nel mondo della bellezza definita e senza sforzo con la Laminazione Ciglia presso il nostro salone. La Laminazione Ciglia è il segreto per ciglia dall’aspetto lussuoso, incurvato e dal fascino senza tempo.",
    sections: [
      {
        title: "Introduzione alla Laminazione Ciglia",
        body:
          "Benvenuti nel mondo della bellezza definita e senza sforzo con la Laminazione Ciglia presso il nostro salone. La Laminazione Ciglia è il segreto per ciglia dall’aspetto lussuoso, incurvato e dal fascino senza tempo. Se desideri uno sguardo che catturi l’attenzione e mantenga la sua eleganza naturale, la Laminazione Ciglia è la soluzione perfetta.",
      },
      {
        title: "Come Funziona la Laminazione Ciglia",
        body:
          "La Laminazione Ciglia è un trattamento innovativo che coinvolge l’applicazione di una soluzione sicura e delicata sulle ciglia naturali. Questa soluzione aiuta ad incurvare le ciglia dalla radice, creando un effetto di sollevamento che apre lo sguardo. La laminazione contribuisce anche a nutrire e fortificare le ciglia, lasciandole morbide, flessibili e visibilmente più lunghe.",
      },
      {
        title: "I Benefici della Laminazione Ciglia",
        items: [
          "Effetto di Sollevamento Naturale: La laminazione ciglia dà alle ciglia un effetto di sollevamento naturale, rendendo gli occhi più grandi e più aperti.",
          "Durata Prolungata: Goditi ciglia perfettamente curvate per settimane senza l’uso di ciglia finte o mascara.",
          "Risultati Naturali e Personalizzati: Il nostro team di esperti personalizzerà il trattamento per adattarsi al tuo stile e alle tue preferenze, garantendo risultati naturali e armoniosi.",
        ],
      },
      {
        title: "La Tua Esperienza di Laminazione Ciglia con Noi",
        body:
          "Presso il nostro salone, offriamo sessioni di Laminazione Ciglia curate con precisione per garantire un risultato impeccabile. I nostri tecnici specializzati ti guideranno attraverso il processo, assicurandosi che tu ti senta a tuo agio e soddisfatto del risultato.",
      },
      {
        title: "Prenota la Tua Sessione di Laminazione Ciglia",
        body:
          "Sperimenta il potere di uno sguardo naturalmente affascinante con la Laminazione Ciglia. Prenota ora la tua sessione e scopri come questo trattamento può trasformare il tuo sguardo in un’opera d’arte.",
      },
    ],
  },
  {
    slug: "makeup",
    title: "Make-up",
    script: "Quella cosa in piu",
    eyebrow: "Konsu - La Tua Oasi di Bellezza",
    image: "/konsu/gallery-marilena-6.jpg",
    intro:
      "Il Tuo Sguardo, La Tua Essenza, Riflessi d’arte. Da Konsu, crediamo che ogni volto sia una tela unica e meravigliosa. I nostri servizi di make-up e allungamento ciglia sono progettati per esaltare la tua bellezza naturale, garantendoti un look radiante e autentico.",
    sections: [
      {
        title: "Konsu - La Tua Oasi di Bellezza",
        body:
          "Il Tuo Sguardo, La Tua Essenza, Riflessi d’arte. Da Konsu, crediamo che ogni volto sia una tela unica e meravigliosa. I nostri servizi di make-up e allungamento ciglia sono progettati per esaltare la tua bellezza naturale, garantendoti un look radiante e autentico.",
      },
      {
        title: "Metodologia dei Servizi di Make-Up e Allungamento Ciglia",
        body:
          "Ogni trattamento nasce dall’ascolto e da una lettura attenta del volto e dello sguardo, per creare un risultato armonioso, personalizzato e adatto all’occasione.",
      },
      {
        title: "Make-up",
        items: [
          "Consulenza Personalizzata: Ascoltiamo le tue esigenze e desideri per creare un look che esalti la tua bellezza e si adatti perfettamente all’occasione.",
          "Prodotti di Elite: Utilizziamo solo cosmetici di alta qualità, assicurando una durata impeccabile e un finish splendido.",
          "Applicazione Professionale: Le nostre make-up artist utilizzano tecniche avanzate per un’applicazione precisa e un risultato armonioso.",
          "Look Personalizzati: Dal naturale all’audace, creiamo look su misura che riflettano il tuo stile e la tua personalità.",
        ],
      },
      {
        title: "Allungamento ciglia",
        items: [
          "Analisi Dettagliata: Studiamo la forma e la condizione delle tue ciglia naturali per determinare l’approccio migliore all’allungamento.",
          "Materiali di Qualità: Utilizziamo estensioni di ciglia di alta qualità, garantendo un aspetto naturale e una sensazione leggera.",
          "Applicazione Minuziosa: Le ciglia vengono applicate con precisione, assicurando un legame sicuro e una durata estesa.",
          "Cura e Manutenzione: Forniamo istruzioni dettagliate e prodotti per la cura delle ciglia, assicurando che rimangano belle più a lungo.",
        ],
      },
    ],
  },
];

export const pageLinks = konsuPages.map(({ slug, title }) => ({ slug, title }));

export function getKonsuPage(slug: string) {
  return konsuPages.find((page) => page.slug === slug);
}
