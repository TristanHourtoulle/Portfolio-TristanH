'use client';

import Image from 'next/image';
import { CLIENT_COLOR_BY_ID } from '@/lib/constants';
import type { CaseStudy } from '@/lib/types';
import { useAccentTrigger } from '@/components/providers/accent-provider';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

/**
 * A single case study, wired as a recoloring trigger for its client.
 * Hover, keyboard focus (via focus bubbling from the case-study link) and
 * click are all handled by useAccentTrigger; this component only spreads
 * the resulting handlers onto the article.
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
        <a className="case-link" href={caseStudy.caseLinkHref}>
          Lire l&apos;étude de cas →
        </a>
      </div>
    </article>
  );
}
