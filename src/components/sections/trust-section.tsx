import { TRUST_STATS } from '@/lib/constants';

/**
 * Band of headline proof figures, sitting between the hero and the case
 * studies.
 *
 * It is an <aside>, not a <div role="note">. `note` is not a landmark
 * and is unevenly supported, so the accessible name that was attached to
 * it had nothing to expose it on: the band was reachable only by reading
 * the page linearly. <aside> maps natively to the complementary
 * landmark, which puts this block in the landmark list with its name and
 * matches what the band is, a standalone credibility statement about the
 * page rather than a step in its argument.
 *
 * <section> would have been the other candidate but is avoided on
 * purpose: globals.css draws its section rules with `section + section`,
 * so promoting this band to a section would put three sections in a row,
 * hero then band then case studies, and draw a rule on the case-studies
 * section that follows it, which it does not have today. The band keeps
 * its own top rule either way, through the `.trust` half of that
 * selector.
 *
 * The name has to come from aria-label rather than a heading, since the
 * band shows no title of its own and inventing a visible one would
 * change the page copy.
 */
export function TrustSection() {
  return (
    <aside className="trust" aria-label="Références chiffrées">
      <div className="wrap">
        <p>
          En freelance depuis 2024 : <span className="figure">{TRUST_STATS.clientsCount}</span> clients
          accompagnés, une note moyenne de <span className="figure">{TRUST_STATS.averageRating}/5</span> sur
          les avis reçus, et <span className="figure">{TRUST_STATS.productsInProduction}</span> produits
          aujourd&apos;hui en production, utilisés chaque jour.
        </p>
      </div>
    </aside>
  );
}
