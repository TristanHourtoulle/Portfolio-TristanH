/**
 * Accent rule under the sticky header, scrubbed by the document scroll position.
 * @returns The progress rule.
 */
export function ScrollProgress() {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
