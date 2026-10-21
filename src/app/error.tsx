'use client';

import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary for everything under the root layout.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <>
      <main id="contenu" tabIndex={-1}>
        <section className="error-page" aria-labelledby="error-title">
          <div className="wrap">
            <span className="eyebrow">Erreur</span>
            <h1 id="error-title">La page n’a pas pu s’afficher</h1>
            <p className="lead">
              Vous pouvez réessayer ou revenir à l’accueil. Si le problème persiste, vous pouvez me le signaler par e-mail.
            </p>
            <div className="error-actions">
              <button className="btn btn-primary" type="button" onClick={reset}>
                Réessayer
              </button>
              <Link className="btn btn-ghost" href="/">
                Retour à l&apos;accueil
              </Link>
            </div>
            {error.digest ? (
              <p className="error-digest mono">Référence de l&apos;incident : {error.digest}</p>
            ) : null}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
