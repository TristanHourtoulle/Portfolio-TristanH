'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CLIENT_COLOR_BY_ID, CLIENT_LOGO_SIZES } from '@/lib/constants';
import type { CaseStudy } from '@/lib/types';
import { useAccentTrigger } from '@/components/providers/accent-provider';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

/**
 * Case-study card, wired as a recoloring trigger for its client.
 */
export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const client = CLIENT_COLOR_BY_ID[caseStudy.clientId];
  const triggerHandlers = useAccentTrigger(caseStudy.clientId);
  const titleId = `proj-${caseStudy.id}`;

  return (
    <article className="project" aria-labelledby={titleId} {...triggerHandlers}>
      <div className="project-side">
        <span className="swatch" aria-hidden="true" style={{ backgroundColor: client.brand }} />
        <span className="logo-box">
          <Image
            src={client.logo.src}
            alt=""
            aria-hidden="true"
            width={client.logo.width}
            height={client.logo.height}
            sizes={CLIENT_LOGO_SIZES}
          />
        </span>
        <p className="project-type">
          {caseStudy.missionType}
          <br />
          {caseStudy.period}
        </p>
      </div>
      <div>
        <h3 id={titleId}>{caseStudy.title}</h3>
        <p className="stack">{caseStudy.stack.join(' · ')}</p>
        <dl>
          {caseStudy.details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
        <Link className="case-link" href={caseStudy.caseLinkHref}>
          Lire l&apos;étude de cas<span className="sr-only"> {caseStudy.title}</span>{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
