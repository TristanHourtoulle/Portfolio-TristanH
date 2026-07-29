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
 *
 * That visible title is an <h3>, not the <strong> it used to be. It
 * genuinely labels a topic of the page, so it belongs in the outline
 * under the section's own <h2>; a <strong> only made it look like a
 * heading. `aria-labelledby` still points at the same id, so the
 * landmark keeps its accessible name, and `.about-aside h3` in
 * globals.css restates the weight and metrics the <strong> had so the
 * column looks unchanged.
 */
export function AboutSection() {
  return (
    <section id="a-propos" aria-labelledby="apropos-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">À propos</span>
          {/*
            The space before the colon is a non-breaking one (U+00A0).
            Section headings carry `text-wrap: balance`, which balanced
            this line by breaking right before the colon and starting a
            line with it, which French typography does not do. A regular
            space is breakable and reads identically at any width, so the
            only thing that changes is that the break can no longer land
            there.
          */}
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
