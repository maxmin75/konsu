import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Navigazione principale">
      <Link className="brand" href="/" aria-label="Konsu home">
        <Image
          src="/konsu/konsu-logo-bianco.png"
          alt="Konsu"
          width={300}
          height={101}
          priority
        />
      </Link>
      <div className="nav-links">
        <Link href="/about-us/">Chi siamo</Link>
        <div className="nav-item has-submenu">
          <Link href="/hair-salon/">Salone</Link>
          <div className="nav-submenu" aria-label="Sottomenu Salone">
            <Link href="/specialevent/">Specialevent</Link>
          </div>
        </div>
        <Link href="/ricostruzione-unghie/">Ricostruzione unghie</Link>
        <Link href="/trattamenti/">Trattamenti</Link>
        <div className="nav-item has-submenu">
          <Link href="/estetica/">Estetica</Link>
          <div className="nav-submenu nav-submenu-wide" aria-label="Sottomenu Estetica">
            <Link href="/massaggio_corpo/">Massaggio corpo</Link>
            <Link href="/kabido-massage/">Kobido massage</Link>
            <Link href="/masaggio-californiano/">Masaggio californiano</Link>
            <Link href="/solarium/">Solarium</Link>
            <Link href="/laminazione-ciglia/">Laminazione ciglia</Link>
            <Link href="/makeup/">Makeup</Link>
          </div>
        </div>
      </div>
      <Link className="nav-cta" href="/#booking">
        Prenota
      </Link>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer" id="contatti">
      <div className="footer-brand">
        <Image
          className="footer-logo"
          src="/konsu/konsu-logo-bianco.png"
          alt="Konsu Parrucchieri Estetica Solarium"
          width={300}
          height={101}
        />
        <div className="footer-copy">
          <p>KONSU PARRUCCHIERI ESTETICA di</p>
          <p>Carraro Consuela</p>
          <p>Via Bassa III, 75 – 35011 Campodarsego (PD)</p>
          <p>P.IVA 00046240289</p>
        </div>
      </div>
      <div className="footer-column">
        <h3>Orari</h3>
        <p>Lunedi: CHIUSO</p>
        <p>Martedi: 8.30- 12.30 / 15.00-19.00</p>
        <p>Mercoledi: 8.30 – 18.30</p>
        <p>Giovedi: 8.30-12.30 / 15.00-19.00</p>
        <p>Venerdi: 8.30- 18.30</p>
        <p>Sabato: 8.00- 16.00</p>
        <p>Domenica: CHIUSO</p>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <a href="mailto:konsu.parrucchieri@gmail.com">konsu.parrucchieri@gmail.com</a>
        <p>
          <strong>TEL.</strong> <a href="tel:+390499201171">049 9201171</a>
        </p>
        <p>
          <strong>MOB.</strong> <a href="tel:+393458169711">345 816 9711</a>
        </p>
      </div>
    </footer>
  );
}
