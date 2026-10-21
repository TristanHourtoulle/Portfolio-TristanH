'use client';

import Link from 'next/link';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Root error boundary, which replaces the layout when the layout itself fails.
 * @param error - the error that broke the root layout
 * @param reset - retries rendering the whole application
 * @returns The standalone French error document.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#f7f6f3',
          color: '#1b1b1a',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
          lineHeight: 1.6,
        }}
      >
        <main style={{ maxWidth: '34rem' }}>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6b6a66',
            }}
          >
            Erreur 500
          </p>
          <h1 style={{ margin: '0 0 1rem', fontSize: '1.875rem', lineHeight: 1.2 }}>
            Le site n’a pas pu se charger
          </h1>
          <p style={{ margin: '0 0 1.5rem' }}>
            Vous pouvez réessayer ou revenir à l’accueil.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: '0.65rem 1.1rem',
                border: '1px solid #1b1b1a',
                borderRadius: '0.5rem',
                background: '#1b1b1a',
                color: '#f7f6f3',
                font: 'inherit',
                cursor: 'pointer',
              }}
            >
              Réessayer
            </button>
            <Link
              href="/"
              style={{
                padding: '0.65rem 1.1rem',
                border: '1px solid #1b1b1a',
                borderRadius: '0.5rem',
                color: '#1b1b1a',
                font: 'inherit',
                textDecoration: 'none',
              }}
            >
              Retour à l&apos;accueil
            </Link>
          </div>
          {error.digest ? (
            <p style={{ margin: '1.5rem 0 0', fontSize: '0.8125rem', color: '#6b6a66' }}>
              Référence de l&apos;incident : {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
