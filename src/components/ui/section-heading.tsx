interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleId: string;
  lead?: string;
}

/**
 * The eyebrow / h2 / lead paragraph pattern repeated at the top of every
 * content section in the mockup (`.section-head`).
 */
export function SectionHeading({ eyebrow, title, titleId, lead }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
