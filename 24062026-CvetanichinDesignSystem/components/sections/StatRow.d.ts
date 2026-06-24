import * as React from 'react';

interface Stat {
  /** Large serif figure, e.g. "14" or "€37". */
  value: React.ReactNode;
  /** Quiet label beneath, e.g. "Days to launch". */
  label: React.ReactNode;
}

/**
 * A full-width strip of evenly-divided stats with serif figures —
 * the proof row that follows a Cvetanichin hero.
 *
 * @startingPoint section="Sections" subtitle="Full-width stat / proof strip" viewport="900x110"
 */
export interface StatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stats to display; columns size automatically. */
  items: Stat[];
  /** Default "dark" (charcoal bg, rose figures). "light" for ivory sections. */
  variant?: 'dark' | 'light';
}

export function StatRow(props: StatRowProps): JSX.Element;
