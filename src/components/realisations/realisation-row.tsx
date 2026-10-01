import Link from 'next/link';
import { BrowserFrame } from '@/components/ui/browser-frame';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { CLIENT_COLOR_BY_ID } from '@/lib/constants';
import type { PersonalProject, ProjectScreenshot, RealisationEntry } from '@/lib/types';

const PHONE_SIZES = '(min-width: 900px) 220px, (min-width: 560px) 220px, 60vw';

const BROWSER_SIZES = '(min-width: 900px) 320px, 88vw';

/**
 * Draws the screenshot in the shell the project was captured on.
 * @param screenshot - capture and the frame it belongs in
 * @returns The framed capture.
 */
function ProjectShot({ screenshot }: { screenshot: ProjectScreenshot }) {
  if (screenshot.frame === 'phone') {
    return (
      <PhoneFrame
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        sizes={PHONE_SIZES}
      />
    );
  }

  return (
    <BrowserFrame
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      sizes={BROWSER_SIZES}
    />
  );
}

/**
 * One personal project, with the screenshot that stands in for a case study.
 * @param project - the project to render
 * @returns The row body.
 */
function PersonalBody({ project }: { project: PersonalProject }) {
  return (
    <div className="realisation-body realisation-body-media">
      <div className="realisation-text">
        <h2>
          {project.title},{' '}
          <span className="realisation-qualifier">{project.titleQualifier}</span>
        </h2>
        <p className="realisation-lead">{project.lead}</p>
        {project.origin && <p className="realisation-origin">{project.origin}</p>}
        <p className="realisation-proof">
          <span className="realisation-proof-label mono">Technique</span>
          {project.proof}
        </p>
        <p className="stack">{project.stack.join(' · ')}</p>
        {project.liveLink && (
          <a className="related-link" href={project.liveLink.href}>
            {project.liveLink.label}
          </a>
        )}
      </div>
      <div className="realisation-shot" data-frame={project.screenshot.frame}>
        <ProjectShot screenshot={project.screenshot} />
      </div>
    </div>
  );
}

/**
 * One row of the realisations column, client work or personal project alike.
 *
 * The provenance cell is simply absent on a personal project: the column keeps
 * its shape and nothing labels the entry as lesser.
 *
 * @param entry - the entry to render
 * @returns The list row.
 */
export function RealisationRow({ entry }: { entry: RealisationEntry }) {
  if (entry.kind === 'client') {
    const { page } = entry;
    const client = CLIENT_COLOR_BY_ID[page.clientId];

    return (
      <li className="realisation-row" data-accent={page.clientId}>
        <div className="realisation-meta">
          <p className="realisation-period mono">{page.period}</p>
          <p className="realisation-client">{client.name}</p>
          <p className="realisation-engagement mono">{page.engagementType}</p>
        </div>
        <div className="realisation-body">
          <div className="realisation-text">
            <h2>
              <Link href={`/realisations/${page.slug}`}>{page.title}</Link>,{' '}
              <span className="realisation-qualifier">{page.titleQualifier}</span>
            </h2>
            <p className="realisation-lead">{page.lead}</p>
            <p className="stack">{page.stack.join(' · ')}</p>
            <Link className="related-link" href={`/realisations/${page.slug}`}>
              Lire l&apos;étude de cas <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="realisation-row">
      <div className="realisation-meta">
        <p className="realisation-period mono">{entry.project.period}</p>
      </div>
      <PersonalBody project={entry.project} />
    </li>
  );
}
