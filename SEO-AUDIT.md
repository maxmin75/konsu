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
- **Sitemap inviata e testata:** `https://konsu.it/sitemap.xml` è stata inviata alla proprietà dominio. Il file pubblico risponde con HTTP 200 e XML valido; il test live di Google per smartphone conferma `Recupero pagina: Esito positivo`, scansione consentita e URL disponibile. Il report Sitemap continua però a mostrare `Impossibile recuperare` e 0 pagine rilevate anche dopo un nuovo invio: la causa non è ancora dimostrata e l'elaborazione non va considerata riuscita.
- **DNS di verifica:** il TXT è visibile sul server primario e su Google DNS; durante il controllo due server secondari VHosting non lo restituivano ancora. Gli indirizzi A pubblicati dai cinque server autorevoli coincidono.
- **Pagine locali:** `/da-padova`, `/da-camposampiero`, `/da-mira` e `/da-dolo` risultavano ancora sconosciute all'indice Google. Search Console ha confermato una richiesta di indicizzazione per ciascuna pagina; l'inserimento in coda non garantisce l'indicizzazione.
- **Metadati dei servizi:** il controllo live mostrava descrizioni tra 168 e 270 caratteri e title privi della località sulle pagine servizio. Sono stati preparati title e descrizioni più brevi e specifici per 11 pagine, senza modificare contenuti visibili o grafica. Il Solarium è escluso da questa revisione perché il checkout principale contiene un lavoro locale di rimozione ancora non pubblicato.

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

## Verifiche ancora necessarie

- Ricontrollare la lettura della sitemap e i report Search Console dopo l'elaborazione; le vecchie sitemap WordPress restano nello storico con errori di recupero.
- Usare query, impressioni, clic e copertura quando i dati saranno disponibili.
- Chiarire se il Solarium è ancora un servizio attivo prima di modificare la relativa pagina pubblica e la sitemap.
- Conferma delle località servite e dei materiali originali per eventuali landing.
