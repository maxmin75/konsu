# Audit SEO Konsu.it — 30 settembre 2026

## Vincolo grafico

L'identità visiva attuale è parte del brand. Le modifiche SEO devono conservare palette, font, logo, fotografie, proporzioni, animazioni, header, footer e ritmo delle pagine. Questo audit separa gli interventi senza impatto visivo dalle proposte che richiedono una revisione grafica prima dell'implementazione.

## Pattern visivi osservati

- Hero fotografici a tutta larghezza con sovrapposizione scura e testo breve.
- Titoli serif ampi, accenti corsivi, oro nei dettagli e nei pulsanti.
- Home con sequenza visiva di servizi, team, storia, gallery e contatti.
- Pagine servizio con hero fotografico, navigazione laterale, sezioni brevi su fondo chiaro e CTA finale.

## Evidenze tecniche sul sito pubblico

- La meta description della home descriveva il sito come progetto Next.js ricreato da WordPress, non il servizio offerto ai clienti.
- Homepage e pagina `/hair-salon` non esponevano un canonical né dati strutturati JSON-LD.
- `/robots.txt` e `/sitemap.xml` restituivano una pagina 404.
- La sede visibile sul sito è Via Bassa III, 75, 35011 Campodarsego (PD). Questa rimane l'unica sede da dichiarare senza nuove evidenze.

## Interventi senza impatto visivo

- **Pubblicato e verificato:** title e meta description della homepage corretti.
- **Pubblicato e verificato:** URL canonici per homepage e pagine servizio.
- **Pubblicato e verificato:** `robots.txt` e sitemap con 17 URL pubblici canonici, comprese le quattro pagine locali.
- **Pubblicato e verificato:** dati strutturati `HairSalon` con dati già pubblicati sul sito.
- **Pubblicato e verificato:** `www.konsu.it` reindirizza con HTTP 308 alla versione canonica, mantenendo percorso e parametri; il certificato HTTPS è valido.
- **Search Console accessibile il 30 settembre 2026:** la proprietà dominio `konsu.it` è verificata; rendimento e copertura sono ancora in elaborazione.
- **Sitemap inviata e letta da Google:** `https://konsu.it/sitemap.xml` è stata inviata alla proprietà dominio. Il file pubblico risponde con HTTP 200 e XML valido. Il 30 settembre 2026 Search Console mostra per questa sitemap `Riuscita`, ultima lettura il 30 settembre e 17 pagine rilevate. Le vecchie sitemap WordPress nello storico hanno stati separati e non riguardano questo file.
- **DNS di verifica:** il TXT è visibile sul server primario e su Google DNS; durante il controllo due server secondari VHosting non lo restituivano ancora. Gli indirizzi A pubblicati dai cinque server autorevoli coincidono.
- **Pagine locali:** `/da-padova`, `/da-camposampiero`, `/da-mira` e `/da-dolo` risultavano ancora sconosciute all'indice Google. Search Console ha confermato una richiesta di indicizzazione per ciascuna pagina; l'inserimento in coda non garantisce l'indicizzazione.
- **Metadati dei servizi pubblicati e verificati:** il controllo iniziale mostrava descrizioni tra 168 e 270 caratteri e title privi della località sulle pagine servizio. Sono ora online title e descrizioni più brevi e specifici per 11 pagine; la verifica pubblica ha confermato i nuovi metadati senza modifiche a contenuti visibili, componenti o CSS. Il Solarium è escluso da questa revisione perché il checkout principale contiene un lavoro locale di rimozione ancora non pubblicato.
- **Rilascio del 30 settembre 2026:** commit `14374cb`, deployment Vercel `dpl_9K1RqCDnxDDDLcXs5E1AGQhsXEwS`, alias di produzione `https://konsu.it`. Il controllo pubblico successivo al rilascio ha rilevato 17 URL della sitemap raggiungibili con HTTP 200, un H1 per pagina e canonical coerenti.
- **Controllo successivo dell'indicizzazione:** il report `Pagine` della proprietà dominio è ancora in elaborazione, perciò non consente di distinguere URL indicizzati ed esclusi. La sitemap è letta con successo, ma questo dato non equivale all'indicizzazione.
- **Collegamenti interni:** la scansione delle 17 pagine pubbliche ha trovato le quattro landing locali collegate dal footer di ogni pagina. Sulla homepage due link `#servizi` puntavano a un'ancora inesistente; i tre inviti «Scopri di più» delle offerte sono stati collegati alle rispettive pagine di servizio. Le CTA «Prenota un appuntamento» delle pagine servizio puntavano al pannello unghie nella homepage; sono state allineate al link di prenotazione già usato nella navigazione e nelle pagine locali. Nessun componente o CSS è stato modificato.
- **Rilascio dei link del 30 settembre 2026:** commit `be1e142`, deployment Vercel `dpl_BsDpKut1QJFT8JxtdxECkfuPqH9d`, alias `https://konsu.it`. La scansione pubblica successiva ha confermato 17/17 pagine HTTP 200 con un H1, link e ancore interni validi, immagini con attributo alt, e quattro landing locali collegate da tutte le pagine.
- **Prestazioni in Search Console:** il report Core Web Vitals non dispone ancora di dati d'uso sufficienti, né su mobile né su desktop. Non è quindi possibile dedurre da quel report se le metriche reali degli utenti siano buone o scadenti.
- **Misura di laboratorio mobile:** il report PageSpeed Insights del 30 settembre 2026 alle 16:35 (Moto G Power emulato, rete 4G lenta) ha dato 55/100 per le prestazioni e 100/100 per i controlli SEO di base; FCP 24,3 s, LCP 27,5 s, CLS 0. Il payload rilevato era circa 15 MB, con circa 10 MB da risorse Vercel Blob esterne e 3,9 MB da Google Fonts esterni. È una singola prova sintetica, non un dato di uso reale o una diagnosi definitiva. Report: `https://pagespeed.web.dev/analysis/https-konsu-it/sndvn5fcsw?utm_source=search_console&form_factor=mobile&hl=it`.

## Modifiche visive da valutare prima di implementare

### Landing Padova, Camposampiero, Mira e Dolo

- **Motivo:** intercettare ricerche locali di persone che potrebbero raggiungere il salone di Campodarsego.
- **Beneficio SEO potenziale:** pagine pertinenti a ricerche geografiche specifiche, se offrono informazioni realmente utili e distinte.
- **Modifica visiva richiesta:** nuove pagine con hero, fotografie, sezioni, CTA ed eventuali FAQ coerenti con il sito.
- **Alternativa meno invasiva:** migliorare le pagine dei servizi esistenti e includere brevi informazioni sulla provenienza dei clienti solo dove sono vere e utili. Evitare quattro pagine quasi identiche che rimandano allo stesso salone.
- **Condizione:** confermare il rapporto reale con ciascuna località e raccogliere materiale originale; non presentare sedi inesistenti né inventare testimonianze.

#### Progetto approvato per la creazione

- **Motivo:** dare a chi parte da queste località un percorso chiaro verso l'unica sede di Campodarsego e verso i servizi pertinenti.
- **Beneficio SEO potenziale:** pagine raggiungibili dal sito, con titoli e contenuti descrittivi diversi, senza far credere che Konsu abbia altre sedi.
- **Modifica visiva richiesta:** quattro pagine che riusano hero, sezioni, gallery e CTA delle pagine servizio; un gruppo discreto di link nel footer esistente. Sui telefoni i titoli locali più lunghi usano una misura leggermente inferiore dello stesso font per evitare tagli.
- **Alternativa meno invasiva:** una sola pagina «Dove siamo» con quattro link alle indicazioni. Se le nuove pagine non offrono utilità distinta o non ottengono riscontri in Search Console, questa rimane l'alternativa consigliata.
- **Limite editoriale:** nessuna distanza, durata del tragitto, testimonianza, servizio a domicilio o sede secondaria senza verifica; ogni pagina indica l'indirizzo reale e collega le indicazioni stradali dalla località di partenza.
- **Stato al 30 settembre 2026:** pubblicate `/da-padova`, `/da-camposampiero`, `/da-mira` e `/da-dolo`. Le pagine rispondono con HTTP 200, hanno canonical propri e sono nella sitemap pubblica (17 URL totali). Nel browser desktop sono stati verificati hero, titoli, link e indirizzo. Il breakpoint mobile è stato controllato nel CSS, senza prova visiva su dispositivo.
- **Presupposto editoriale da confermare con Konsu:** queste città sono trattate come punti di partenza verso il salone di Campodarsego. Le pagine non dichiarano una clientela locale già esistente né servizi svolti fuori sede.

### FAQ, breadcrumb e nuovi blocchi di testo

- **Motivo:** chiarire servizi e navigazione.
- **Beneficio SEO potenziale:** contesto più preciso e collegamenti interni più chiari.
- **Modifica visiva richiesta:** eventuali piccoli elementi nell'interfaccia delle pagine servizio.
- **Alternativa meno invasiva:** integrare microcopy e link nei blocchi già presenti; ricorrere a FAQ compatte solo per domande reali.

### Prestazioni della homepage mobile

- **Motivo:** la misura di laboratorio segnala un caricamento iniziale lento su una connessione mobile emulata; Search Console non ha ancora dati reali sufficienti.
- **Beneficio SEO e UX potenziale:** ridurre il tempo prima che l'hero sia visibile e la pagina utilizzabile, senza ridurre la qualità delle fotografie.
- **Modifica visiva o di comportamento da valutare:** un eventuale caricamento differito del widget di prenotazione o del video può cambiare quando compaiono elementi e animazioni; va verificato nel browser prima di adottarlo.
- **Alternativa meno invasiva:** analizzare la provenienza esatta delle risorse esterne e ottimizzare solo il loro caricamento e le priorità di rete, mantenendo immagini, font e componenti esistenti.

## Verifiche ancora necessarie

- Seguire i report di indicizzazione Search Console dopo l'elaborazione; `Riuscita` per la sitemap conferma la lettura del file, non l'indicizzazione delle 17 pagine. Le vecchie sitemap WordPress restano nello storico con stati propri.
- Usare query, impressioni, clic e copertura quando i dati saranno disponibili.
- Chiarire se il Solarium è ancora un servizio attivo prima di modificare la relativa pagina pubblica e la sitemap.
- Conferma delle località servite e dei materiali originali per eventuali landing.
