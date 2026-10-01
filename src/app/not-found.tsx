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
            <h1 id="not-found-title">Cette page n&apos;existe pas</h1>
            <p className="lead">
              Le lien que vous avez suivi est probablement obsolète, ou l&apos;adresse comporte une
              faute de frappe. Voici les deux endroits où repartir.
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
