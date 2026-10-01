import Image from 'next/image';
import Link from 'next/link';
import { BrowserFrame } from '@/components/ui/browser-frame';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { resolveRealisationMark } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, REALISATION_MARK_SIZES } from '@/lib/constants';
import type { CaseStudyGalleryImage, CaseStudyPageContent } from '@/lib/types';

interface RealisationRowProps {
  page: CaseStudyPageContent;
}

const PHONE_SIZES = '(min-width: 900px) 220px, 60vw';

const BROWSER_SIZES = '(min-width: 900px) 320px, 88vw';

/**
 * Draws the lead capture in the shell the product was captured on.
 * @param image - capture and the frame it belongs in
 * @returns The framed capture.
 */
function RowShot({ image }: { image: CaseStudyGalleryImage }) {
  if (image.frame === 'phone') {
    return (
      <PhoneFrame
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={PHONE_SIZES}
      />
    );
  }

  return (
    <BrowserFrame
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={BROWSER_SIZES}
    />
  );
}

/**
 * One row of the realisations column, client work and personal project alike.
 *
 * Every row carries a product mark: a client entry shows the client logo, a
 * personal entry shows the application icon. Only the provenance text, the
 * client name and the engagement type, is absent on a personal project, since
 * that is the one thing a personal project genuinely does not have. A row whose
 * product is online closes with a secondary link to it, next to the link into
 * the page itself.
 *
 * @param page - the realisation to render
 * @returns The list row.
 */
export function RealisationRow({ page }: RealisationRowProps) {
  const client = page.clientId ? CLIENT_COLOR_BY_ID[page.clientId] : undefined;
  const mark = resolveRealisationMark(page);
  const shot = page.provenance === 'perso' ? page.gallery[0] : undefined;
  const href = `/realisations/${page.slug}`;
  const linkLabel = page.provenance === 'client' ? "Lire l'étude de cas" : 'Voir le projet';

  return (
    <li className="realisation-row" data-accent={page.clientId}>
      <div className="realisation-meta">
        <p className="realisation-period mono">{page.period}</p>
        {mark && (
          <span className="realisation-mark" data-shape={mark.shape}>
            <Image
              src={mark.src}
              alt=""
              aria-hidden="true"
              width={mark.width}
              height={mark.height}
              sizes={REALISATION_MARK_SIZES}
              unoptimized={mark.isVector}
            />
          </span>
        )}
        {client && <p className="realisation-client">{client.name}</p>}
        {page.engagementType && (
          <p className="realisation-engagement mono">{page.engagementType}</p>
        )}
      </div>
      <div className={shot ? 'realisation-body realisation-body-media' : 'realisation-body'}>
        <div className="realisation-text">
          <h2>
            <Link href={href}>{page.title}</Link>,{' '}
            <span className="realisation-qualifier">{page.titleQualifier}</span>
          </h2>
          <p className="realisation-lead">{page.lead}</p>
          <p className="stack">{page.stack.join(' · ')}</p>
          <div className="realisation-links">
            <Link className="related-link" href={href}>
              {linkLabel} <span aria-hidden="true">→</span>
            </Link>
            {page.externalLinks.map((link) => (
              <a
                key={link.href}
                className="live-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span aria-hidden="true">&nbsp;↗</span>
              </a>
            ))}
          </div>
        </div>
        {shot && (
          <div className="realisation-shot" data-frame={shot.frame}>
            <RowShot image={shot} />
          </div>
        )}
      </div>
    </li>
  );
}
