import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

/**
 * Site-wide 404, served with a real 404 status by Next.
 */
export default function NotFound() {
  return (
    <>
      <main id="contenu" tabIndex={-1}>
        <section className="error-page" aria-labelledby="not-found-title">
          <div className="wrap">
            <span className="eyebrow">Erreur 404</span>
            <h1 id="not-found-title">Cette page est introuvable</h1>
            <p className="lead">
              L’adresse est peut-être incorrecte ou la page a été déplacée. Vous pouvez revenir à l’accueil ou consulter mes réalisations.
            </p>
            <div className="error-actions">
              <Link className="btn btn-primary" href="/">
                Retour à l&apos;accueil
              </Link>
              <Link className="btn btn-ghost" href="/realisations">
                Voir les réalisations et projets
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
