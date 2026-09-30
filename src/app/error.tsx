'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary for everything under the root layout.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main id="contenu" tabIndex={-1}>
      <section className="error-page" aria-labelledby="error-title">
        <div className="wrap">
          <span className="eyebrow">Erreur</span>
          <h1 id="error-title">Quelque chose s&apos;est mal passé</h1>
          <p className="lead">
            Cette page n&apos;a pas pu s&apos;afficher. Vous pouvez réessayer, ou revenir à
            l&apos;accueil. Si le problème persiste, écrivez-moi et je regarde.
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
  );
}
