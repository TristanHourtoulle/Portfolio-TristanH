import { ABOUT_CONTENT } from '@/lib/constants';

export function AboutSection() {
  return (
    <section id="a-propos" aria-labelledby="apropos-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">À propos</span>
          <h2 id="apropos-title">Un interlocuteur, deux métiers</h2>
        </div>
        <div className="about-grid">
          <div>
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-aside" aria-label="Outils de travail">
            <strong>{ABOUT_CONTENT.toolsHeading}</strong>
            {ABOUT_CONTENT.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
