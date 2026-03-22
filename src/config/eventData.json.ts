// Original date, March 20, 2026
export const EVENT_DATE = new Date('2026-03-20T10:00:00-07:00');

// Medium shows 'mm dd' e.g. March 20
// Long shows 'mm dd, yyyy'
type DateFormat = 'medium' | 'long';

export function eventDate(isPlaceholder: boolean = false, format: DateFormat = 'long'): string {
  if (isPlaceholder) {
    return 'Fall 2026';
  }
  switch (format) {
    case 'medium':
      return EVENT_DATE.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    default:
      return EVENT_DATE.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
  }
}
