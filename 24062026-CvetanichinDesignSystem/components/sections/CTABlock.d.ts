import * as React from 'react';

/**
 * The closing call-to-action section — a serif heading on the left,
 * price + button + reassurance lines on the right. Calm and clear,
 * never urgent.
 *
 * @startingPoint section="Sections" subtitle="Closing CTA with price & reassurance" viewport="1000x360"
 */
export interface CTABlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Heading. Pass a string to allow <em>…</em> emphasis, or a node. */
  heading: React.ReactNode;
  /** Headline price, e.g. "€37". */
  price?: React.ReactNode;
  /** Small detail beside the price, e.g. "One-time payment". */
  priceDetail?: React.ReactNode;
  /** Button label. Default "Get instant access". */
  ctaLabel?: React.ReactNode;
  /** Checkout URL (renders an <a>). Pass "" to render a <button> + onCta. */
  ctaHref?: string;
  /** Click handler when used as a button. */
  onCta?: () => void;
  /** Short reassurance lines, each with a leading ring marker. */
  reassurances?: React.ReactNode[];
  /** "split" (default, two columns) or "stack" (single column). */
  layout?: 'split' | 'stack';
}

export function CTABlock(props: CTABlockProps): JSX.Element;
