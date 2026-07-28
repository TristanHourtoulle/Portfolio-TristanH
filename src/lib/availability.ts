import { AVAILABILITY_LEAD_DAYS } from './constants';

/**
 * Formats "today + AVAILABILITY_LEAD_DAYS" in French, e.g. "12 août 2026".
 *
 * This must run on the server only. Computing it in a Client Component
 * (useEffect or first render) would let the server-rendered HTML and the
 * browser's own clock disagree by a tick around midnight or a deploy
 * boundary, producing a hydration mismatch. Keeping it in a Server
 * Component sidesteps that entirely: the string is generated once, at
 * request time, and shipped as static text.
 */
export function getAvailabilityLabel(): string {
  const date = new Date();
  date.setDate(date.getDate() + AVAILABILITY_LEAD_DAYS);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
