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
- **Pubblicato e verificato:** `robots.txt` e sitemap con 13 URL pubblici canonici.
- **Pubblicato e verificato:** dati strutturati `HairSalon` con dati già pubblicati sul sito.
- **Pubblicato e verificato:** `www.konsu.it` reindirizza con HTTP 308 alla versione canonica, mantenendo percorso e parametri; il certificato HTTPS è valido.
- **Da verificare dopo la pubblicazione:** indicizzazione, copertura e query in Google Search Console, se disponibile.

## Modifiche visive da valutare prima di implementare

### Landing Padova, Camposampiero, Mira e Dolo

- **Motivo:** intercettare ricerche locali di persone che potrebbero raggiungere il salone di Campodarsego.
- **Beneficio SEO potenziale:** pagine pertinenti a ricerche geografiche specifiche, se offrono informazioni realmente utili e distinte.
- **Modifica visiva richiesta:** nuove pagine con hero, fotografie, sezioni, CTA ed eventuali FAQ coerenti con il sito.
- **Alternativa meno invasiva:** migliorare le pagine dei servizi esistenti e includere brevi informazioni sulla provenienza dei clienti solo dove sono vere e utili. Evitare quattro pagine quasi identiche che rimandano allo stesso salone.
- **Condizione:** confermare il rapporto reale con ciascuna località e raccogliere materiale originale; non presentare sedi inesistenti né inventare testimonianze.

### FAQ, breadcrumb e nuovi blocchi di testo

- **Motivo:** chiarire servizi e navigazione.
- **Beneficio SEO potenziale:** contesto più preciso e collegamenti interni più chiari.
- **Modifica visiva richiesta:** eventuali piccoli elementi nell'interfaccia delle pagine servizio.
- **Alternativa meno invasiva:** integrare microcopy e link nei blocchi già presenti; ricorrere a FAQ compatte solo per domande reali.

## Verifiche ancora necessarie

- Accesso ai dati Search Console per scegliere query e pagine in base a impressioni, clic e copertura.
- Conferma delle località servite e dei materiali originali per eventuali landing.
