import { ABOUT_CONTENT } from '@/lib/constants';

/** Id of the tools column title. */
const TOOLS_TITLE_ID = 'apropos-tools-title';

/**
 * "À propos" section.
 */
export function AboutSection() {
  return (
    <section id="a-propos" aria-labelledby="apropos-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">À propos</span>
          <h2 id="apropos-title">Un interlocuteur, deux métiers&#160;: design et développement</h2>
        </div>
        <div className="about-grid">
          <div>
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="about-aside" aria-labelledby={TOOLS_TITLE_ID}>
            <h3 id={TOOLS_TITLE_ID}>{ABOUT_CONTENT.toolsHeading}</h3>
            {ABOUT_CONTENT.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
