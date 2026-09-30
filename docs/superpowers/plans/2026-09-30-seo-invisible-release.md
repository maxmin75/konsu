# Konsu SEO invisibile — piano di pubblicazione

**Obiettivo:** aggiungere segnali SEO tecnici senza modificare la grafica del sito pubblico.

**Architettura:** usare i metadati e le route speciali del Next.js App Router. I dati strutturati descrivono soltanto la sede pubblicata a Campodarsego. Le pagine locali restano fuori da questa pubblicazione finché non hanno contenuti distinti e verificati.

**Stack:** Next.js 16, TypeScript, Vercel.

---

## 1. Isolare le modifiche

- [x] Creare un worktree pulito e basarlo su `fe9fae9`, il commit GA4 presente nel deployment pubblico, per conservare il consenso cookie senza pubblicare il lavoro locale estraneo alla SEO.
- [x] Modificare `src/app/layout.tsx` per title, description, canonical della home e JSON-LD del salone.
- [x] Modificare `src/app/[slug]/page.tsx` per i canonical delle pagine servizio.
- [x] Creare `src/app/robots.ts` e `src/app/sitemap.ts`; la sitemap legge `konsuPages`.
- [x] Copiare l'audit in `SEO-AUDIT.md` e registrare i limiti delle landing locali.

## 2. Verificare il pacchetto

- [x] Eseguire `npm ci`, `npm run lint`, `npx tsc --noEmit`, `npm run build` e `git diff --check`.
- [x] Leggere l'HTML e le route statiche generate: canonical della home e di `/hair-salon`, JSON-LD valido, `robots.txt` e URL unici nella sitemap.
- [x] Controllare nel browser locale che hero, fotografie, font, colori e navigazione conservino l'aspetto del commit base.

## 3. Pubblicare e controllare

- [x] Collegare questo checkout allo stesso progetto Vercel `konsu` già usato dal sito, senza copiare credenziali nel repository.
- [x] Pubblicare il solo commit SEO in produzione e attendere lo stato Ready (`54abdb2`, deployment `dpl_2byKte2YzVo51UDSAWczMGH1sBUu`).
- [x] Verificare online homepage, pagina servizio, canonical, JSON-LD, `robots.txt`, `sitemap.xml` e contenuto visivo.
- [x] Verificare il redirect HTTPS 308 da `www.konsu.it` verso il dominio canonico.
- [x] Registrare che l'indicizzazione rimane da controllare in Search Console.
