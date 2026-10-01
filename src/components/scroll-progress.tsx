/**
 * Accent rule under the sticky header, scrubbed by the document scroll position.
 *
 * Its resting state is a full-width rule: with no scroll timeline available, or
 * under a reduced-motion preference, the bar simply stays complete instead of
 * reading as an empty gauge that never fills.
 *
 * @returns The progress rule.
 */
export function ScrollProgress() {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
