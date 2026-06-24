import * as React from 'react';

/**
 * Small uppercase, wide-tracked section label — the eyebrow that
 * sits above nearly every Cvetanichin heading.
 *
 * @startingPoint section="Content" subtitle="Uppercase section label / eyebrow" viewport="700x120"
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  /** Color tone. Default "rose". Use "rose-light"/"on-dark" on charcoal surfaces. */
  tone?: 'rose' | 'rose-light' | 'muted' | 'on-dark';
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
