import * as React from 'react';

/**
 * Editorial pull-quote / testimonial. The "accent" variant is a
 * full rose section with a giant ghost quotation mark; "plain" and
 * "inset" are lighter treatments for in-page quotes.
 *
 * @startingPoint section="Sections" subtitle="Editorial pull-quote / testimonial" viewport="700x320"
 */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Attribution line below the quote (rendered uppercase). */
  attribution?: React.ReactNode;
  /** Default "accent" (full rose block). Also "plain" and "inset". */
  variant?: 'accent' | 'plain' | 'inset';
  /** Show the oversized ghost quote mark (accent variant only). Default true. */
  mark?: boolean;
  children?: React.ReactNode;
}

export function Quote(props: QuoteProps): JSX.Element;
