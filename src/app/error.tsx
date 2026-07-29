'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary for everything under the root layout.
 *
 * Must be a Client Component: Next attaches it as a real React error
 * boundary, and only a client boundary can catch a render error and offer
 * a retry. It replaces the page content only, so the header, the skip
 * link and the "Réserver un appel" button stay in place and a visitor who
 * hits an error can still book.
 *
 * No footer here, unlike the 404 page: `SiteFooter` reads the current
 * year at render time, which is correct on the server but would run in
 * the browser once imported into this Client Component. The 404 page is a
 * Server Component and has no such constraint.
 *
 * Nothing is logged and the error message is never shown. The message can
 * carry internals (paths, query fragments) that have no place on a public
 * page, and the site has no logger to send it to. `digest` is the hash
 * Next puts in the server logs for the same error, so surfacing it gives
 * a visitor something quotable without leaking anything.
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
