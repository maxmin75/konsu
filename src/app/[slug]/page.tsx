import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKonsuPage, konsuPages, localPages, pageLinks } from "../konsu-pages";
import { SiteFooter, SiteNav } from "../site-shell";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...konsuPages, ...localPages].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getKonsuPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle ?? `${page.title} | Konsu Parrucchieri`,
    description: page.metaDescription ?? page.intro,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function KonsuInnerPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getKonsuPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <SiteNav />

      <section className={`inner-hero${page.directionsOrigin ? " inner-hero-local" : ""}`}>
        <div className="inner-hero-media" aria-hidden="true">
          <Image src={page.image} alt="" fill priority sizes="100vw" />
          <div />
        </div>
        <div className="inner-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>
            {page.title}
            <span>{page.script}</span>
          </h1>
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="inner-content">
        <aside className="inner-index" aria-label="Pagine Konsu">
          <p>Servizi Konsu</p>
          {pageLinks.map((link) => (
            <Link
              href={`/${link.slug}/`}
              key={link.slug}
              aria-current={link.slug === page.slug ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </aside>

        <div className="inner-blocks">
          {page.sections.map((section) => (
            <article className="inner-block" key={section.title}>
              <p className="inner-kicker">Konsu</p>
              <h2>{section.title}</h2>
              {section.body ? <p>{section.body}</p> : null}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.links ? (
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {page.gallery ? (
        <section className="inner-gallery-section" aria-label={`Gallery ${page.title}`}>
          <div className="section-heading compact">
            <p className="script">Gallery</p>
            <h2>Alcune creazioni.</h2>
          </div>
          <div className="inner-gallery-grid">
            {page.gallery.map((item) => (
              <figure className="inner-gallery-item" key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 50vw, 20vw" />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="inner-cta">
        <p className="script">Ti aspettiamo</p>
        <h2>Prenota il tuo momento Konsu.</h2>
        <a href="https://hairflow.it/book/konsu" target="_blank" rel="noreferrer">
          Prenota un appuntamento
        </a>
        {page.directionsOrigin ? (
          <a
            className="directions-link"
            href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(page.directionsOrigin)}&destination=${encodeURIComponent("Via Bassa III 75, 35011 Campodarsego PD")}`}
            target="_blank"
            rel="noreferrer"
          >
            Indicazioni da {page.directionsOrigin.replace(" VE", "")}
          </a>
        ) : null}
      </section>

      <SiteFooter />
    </main>
  );
}
