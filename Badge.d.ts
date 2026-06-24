import * as React from 'react';

/**
 * A small understated label chip for prices, status, and categories
 * — square corners, quiet rose by default.
 *
 * @startingPoint section="Content" subtitle="Understated label chip" viewport="700x120"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default "rose" (pale fill). Also "outline", "charcoal", "soft". */
  variant?: 'rose' | 'outline' | 'charcoal' | 'soft';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
