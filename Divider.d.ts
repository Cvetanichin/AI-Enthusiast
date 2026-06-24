import * as React from 'react';

/**
 * A soft horizontal rule. The "gradient" variant fades rose at both
 * ends — Cvetanichin's quiet way of separating sections.
 */
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Default "gradient" (fades at ends). "rule"/"hair" are flat; "on-dark" for charcoal. */
  variant?: 'gradient' | 'rule' | 'hair' | 'on-dark';
}

export function Divider(props: DividerProps): JSX.Element;
