import * as React from 'react';

/**
 * A numbered feature/outcome tile or a ledger-style step row, with a
 * large ghost serif numeral. Used in "what you'll have" and "how it
 * works" sections.
 *
 * @startingPoint section="Sections" subtitle="Numbered feature tile / step row" viewport="700x200"
 */
export interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The numeral or step label, e.g. "01" or "Section 1". */
  number?: React.ReactNode;
  /** Feature / step title. */
  title?: React.ReactNode;
  /** Supporting description. */
  description?: React.ReactNode;
  /** "numbered" = dark grid tile (default). "step" = light ledger row with dot. */
  variant?: 'numbered' | 'step';
}

export function FeatureItem(props: FeatureItemProps): JSX.Element;
