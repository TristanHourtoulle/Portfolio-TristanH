interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleId: string;
  lead?: string;
}

/**
 * Eyebrow, heading and lead paragraph of a content section.
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
