import { AVAILABILITY_LEAD_DAYS } from './constants';

/**
 * Formats "today + AVAILABILITY_LEAD_DAYS" in French.
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
