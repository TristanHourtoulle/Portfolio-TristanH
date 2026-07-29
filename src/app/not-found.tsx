import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

/**
 * Site-wide 404, served with a real 404 status by Next.
 *
 * It is reached two ways: by any URL that matches no route, and by every
 * `notFound()` call, including the guard in /realisations/[slug]. Without
 * this file Next falls back to its own bare black-on-white page, which
 * looks like a broken deployment rather than a page of this site, and
 * offers no way out except the back button.
 *
 * The two destinations are the two that actually convert: the homepage,
 * and the case-study index (most dead links on a portfolio point at a
 * project page whose slug moved). The header and its "Réserver un appel"
 * button come from the root layout, so a booking stays one click away.
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
                Voir les études de cas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
