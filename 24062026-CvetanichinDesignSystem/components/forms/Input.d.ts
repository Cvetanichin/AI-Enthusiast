import * as React from 'react';

type Option = string | { value: string; label: string };

/**
 * Cvetanichin form field — text input, textarea, or select with an
 * uppercase rose label and a soft hairline that warms on focus.
 *
 * @startingPoint section="Forms" subtitle="Labelled input, textarea & select" viewport="700x260"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'as'> {
  /** Uppercase label rendered above the control. */
  label?: string;
  /** Helper / error text below the control. */
  hint?: string;
  /** Error state — borders + hint turn deep rose. */
  error?: boolean;
  /** Control type. Default "input". */
  as?: 'input' | 'textarea' | 'select';
  /** Options when as="select". */
  options?: Option[];
}

export function Input(props: InputProps): JSX.Element;
