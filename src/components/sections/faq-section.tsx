import { FAQ_ITEMS } from '@/lib/constants';

/**
 * Native <details>/<summary>, exactly as the mockup: no JS is needed for
 * expand/collapse, keyboard and screen-reader behavior come for free.
 *
 * Each question is wrapped in an <h3> INSIDE its <summary>. These eight
 * strings are the longest, most specific phrasings on the site, and as
 * bare summary text they contributed nothing to the document outline:
 * the section's <h2> was followed by eight unheaded blocks. The heading
 * has to go inside the <summary> rather than around it, because HTML
 * requires <summary> to be the first child of <details>, so wrapping it
 * is not an option. `.faq-list summary h3` in globals.css inherits the
 * summary's own font so the row is pixel-identical to before.
 */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title">Les questions qu&apos;on me pose avant de commencer</h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id}>
              <summary>
                <h3>{item.question}</h3>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
