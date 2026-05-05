import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKonsuPage, konsuPages, pageLinks } from "../konsu-pages";
import { SiteFooter, SiteNav } from "../site-shell";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return konsuPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getKonsuPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Konsu Parrucchieri`,
    description: page.intro,
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

      <section className="inner-hero">
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
            </article>
          ))}
        </div>
      </section>

      <section className="inner-cta">
        <p className="script">Ti aspettiamo</p>
        <h2>Prenota il tuo momento Konsu.</h2>
        <Link href="/#booking">Prenota un appuntamento</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
