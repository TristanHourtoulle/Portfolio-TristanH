'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        {/*
          The visible line stays short on purpose: the h3 two elements above
          already carries the title, so printing it again would be redundant
          on a card that is only four lines tall. The name is added in a
          visually hidden span instead, which is real text in the DOM. That
          fixes both problems the shared label caused: the four cards used to
          expose one identical accessible name, so a screen reader's link
          list read "lire l'étude de cas" four times with nothing to tell the
          destinations apart, and the four links sent the same anchor text to
          four different URLs. The arrow is decoration and is hidden so it is
          not announced as "flèche vers la droite".
        */}
        <Link className="case-link" href={caseStudy.caseLinkHref}>
          Lire l&apos;étude de cas<span className="sr-only"> {caseStudy.title}</span>{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
