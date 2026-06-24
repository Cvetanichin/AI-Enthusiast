import * as React from 'react';

/**
 * A simple, understated card for products, formats, and offers —
 * hairline border, optional rose mark, lifts gently on hover.
 *
 * @startingPoint section="Sections" subtitle="Product / format / offer card" viewport="700x260"
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase eyebrow above the title. */
  eyebrow?: React.ReactNode;
  /** Card title. */
  title?: React.ReactNode;
  /** Body description. */
  description?: React.ReactNode;
  /** Optional price shown in the footer (serif). */
  price?: React.ReactNode;
  /** Small note beside the price. */
  priceNote?: React.ReactNode;
  /** Show the small rose square mark. Default true. */
  mark?: boolean;
  /** Render the title in serif (for offer cards). Default false. */
  serifTitle?: boolean;
  /** Lift + border-warm on hover. Default true. */
  hover?: boolean;
  /** Warm ivory background instead of white. */
  warm?: boolean;
  /** Custom footer content (replaces/extends the price row). */
  footer?: React.ReactNode;
  /** Render as another element, e.g. "a". Default "div". */
  as?: 'div' | 'a' | 'article';
  children?: React.ReactNode;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
