import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteNav } from "./site-shell";

const gallery = [
  { src: "/konsu/gallery-ricci-2.jpg", alt: "Taglio riccio con colore rosso", size: "square" },
  { src: "/konsu/gallery-marilena-6.jpg", alt: "Raccolto elegante con accessorio", size: "square" },
  { src: "/konsu/gallery-rosso-1.jpg", alt: "Capelli mossi rosso rame", size: "square" },
  { src: "/konsu/gallery-marilena-11.jpg", alt: "Acconciatura raccolta sposa", size: "tall" },
  { src: "/konsu/gallery-corso-farmaca-tall.jpg", alt: "Caschetto viola primo piano", size: "tall" },
  { src: "/konsu/gallery-colore-claudia-tall.jpg", alt: "Onde castano freddo", size: "tall" },
  { src: "/konsu/gallery-colori-caldi-2.jpg", alt: "Colore caldo ramato", size: "tall" },
  { src: "/konsu/gallery-short-blonde.jpg", alt: "Taglio corto biondo freddo", size: "tall" },
  { src: "/konsu/gallery-fringe-color.jpg", alt: "Colore con frangia", size: "tall" },
];

const team = [
  { name: "Consuelo", role: "Haircut and style", image: "/konsu/team-consuelo-requested.jpg" },
  { name: "Michela", role: "Hair and beauty", image: "/konsu/team-michela-new.jpg" },
  { name: "Riccardo", role: "Color artist", image: "/konsu/team-riccardo-new.jpg" },
  { name: "Sara", role: "Relax and beauty", image: "/konsu/team-sara-new.jpg" },
];

const quickServices = [
  { script: "hair", title: "Salone", href: "/hair-salon/", dark: false },
  { script: "Beauty", title: "Estetica", href: "/estetica/", dark: true },
  { script: "Spa", title: "Trattamenti", href: "/trattamenti/", dark: false },
  { script: "Sun", title: "Solarium", href: "/solarium/", dark: true },
  { script: "Cool", title: "Make-up", href: "/makeup/", dark: false },
];

const introItems = ["Creativita", "Cura", "Precisione", "Dal 1993 sempre con voi"];

export default function Home() {
  return (
    <main>
      <SiteNav />

      <section className="hero" id="home">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/konsu/konsu-staff-campodarsego.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image hero-image-primary"
          />
          <Image
            src="/konsu/hero-salon-chair.jpg"
            alt=""
            fill
            sizes="100vw"
            className="hero-image hero-image-secondary"
          />
          <div className="hero-film" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Campodarsego • since 1993</p>
          <h1>
            <span className="hero-title-main">We love hair</span>
            <span className="hero-title-script">Cambiamo look?</span>
          </h1>
          <p className="hero-text">
            Konsu Parrucchieri Estetica Solarium: capelli, estetica,
            ricostruzione unghie e trattamenti a Campodarsego.
          </p>
          <div className="hero-actions">
            <a href="https://hairflow.it/book/konsu" target="_blank" rel="noreferrer">
              Prenota un appuntamento
            </a>
            <a href="#gallery">Guarda i lavori</a>
          </div>
        </div>
      </section>

      <section className="home-offers" aria-label="Servizi principali Konsu">
        <article className="offer-card">
          <p className="offer-script">Amiamo i</p>
          <h2>Capelli</h2>
          <span>Da 30 anni nella tua testa</span>
          <a href="#servizi">Scopri di piu</a>
        </article>
        <article className="offer-card featured">
          <div>
            <p className="offer-script">Curiamo il</p>
            <h2>Benessere</h2>
            <span>Estetica - Solarium - Trattamenti</span>
            <a href="#servizi">Scopri di piu</a>
          </div>
        </article>
        <article className="offer-card">
          <p className="offer-script">Artisti</p>
          <h2>Unghie</h2>
          <span>Ricostruzione - Artcolor</span>
          <a href="#booking">Scopri di piu</a>
        </article>
      </section>

      <section className="intro-strip" aria-label="Valori del salone">
        <div className="intro-strip-track">
          {introItems.map((item) => (
            <span className="intro-strip-item" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="intro-strip-track" aria-hidden="true">
          {introItems.map((item) => (
            <span className="intro-strip-item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading compact">
          <p className="script">Lo staff</p>
          <h2>Consuelo, Michela, Riccardo e Sara.</h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="team-photo">
                <Image src={person.image} alt={person.name} fill sizes="(max-width: 900px) 100vw, 25vw" />
                <div className="team-overlay" aria-hidden="true">
                  <span>{person.name}</span>
                  <small>{person.role}</small>
                </div>
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quick-service-strip" aria-label="Percorsi Konsu">
        {quickServices.map((item) => (
          <article className={`quick-service-card${item.dark ? " dark" : ""}`} key={item.title}>
            <p className="quick-service-script">{item.script}</p>
            <h2>{item.title}</h2>
            <Link href={item.href}>Scopri di più</Link>
          </article>
        ))}
      </section>

      <section className="feature-band" id="storia">
        <div className="feature-video-window" aria-hidden="true">
          <video
            className="feature-video"
            src="/konsu/storia-parallax.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="feature-video-shade" />
        </div>
        <div>
          <p className="script">30 anni</p>
          <h2>Since 1993, sempre con voi.</h2>
        </div>
        <p>
          Il 17 novembre 1993 nasce “Parrucchieri Consuelo”. Nel 2003 il salone
          cambia location e diventa “Parrucchieri Estetica Solarium”. L&apos;8
          settembre 2018 prende forma il brand KONSU Parrucchieri Estetica.
        </p>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading compact">
          <p className="script">Gallery</p>
          <h2>Alcune nostre creazioni.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`gallery-item ${item.size}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="booking-panel" id="booking">
        <div>
          <p className="script">Mani</p>
          <h2>Colori sfumature forme, tutto nelle tue mani.</h2>
        </div>
        <a href="https://konsu.it/ricostruzione-unghie/">Scopri</a>
      </section>

      <section className="map-section" aria-label="Mappa Konsu Parrucchieri Estetica">
        <iframe
          title="Konsu Parrucchieri Estetica su Google Maps"
          src="https://www.google.com/maps?q=Konsu%20Parrucchieri%20Estetica%2C%20Via%20Bassa%20III%2075%2C%2035011%20Campodarsego%20PD&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
