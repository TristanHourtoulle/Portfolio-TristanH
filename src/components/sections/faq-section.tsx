import { FAQ_ITEMS } from '@/lib/constants';

/**
 * Native <details>/<summary>, exactly as the mockup: no JS is needed for
 * expand/collapse, keyboard and screen-reader behavior come for free.
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
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
