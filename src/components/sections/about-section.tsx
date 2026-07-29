import { ABOUT_CONTENT } from '@/lib/constants';

/** Ties the tools column to its own visible title, see AboutSection. */
const TOOLS_TITLE_ID = 'apropos-tools-title';

/**
 * The tools column is an <aside> carrying aria-labelledby rather than a
 * <div> carrying aria-label. An aria-label on a plain <div> names
 * nothing: a generic container has no role, so the accessibility tree
 * drops it along with its label, and the string "Outils de travail" was
 * being computed for no one, all the more so as the column already
 * displays its own title and that title reads "Outils du quotidien".
 * <aside> is the native complementary landmark, and pointing its name at
 * the visible title keeps the two from drifting apart again.
 */
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
          <aside className="about-aside" aria-labelledby={TOOLS_TITLE_ID}>
            <strong id={TOOLS_TITLE_ID}>{ABOUT_CONTENT.toolsHeading}</strong>
            {ABOUT_CONTENT.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
