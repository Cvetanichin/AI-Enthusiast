import * as React from 'react';

/**
 * Cvetanichin button. Square editorial corners, uppercase tracked
 * label, quiet hover. Primary = charcoal with a rose-deep wipe;
 * accent = solid dusty rose; outline = hairline that fills; ghost = text.
 *
 * @startingPoint section="Forms" subtitle="Editorial button — primary, accent, outline, ghost" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  /** Size. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Show a trailing arrow that nudges right on hover. */
  arrow?: boolean;
  /** Full-width. */
  block?: boolean;
  /** Render as another element, e.g. "a" for links. Default "button". */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
