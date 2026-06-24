import React from 'react';

/* Inject component CSS once. Uses design-system tokens only. */
const CSS = `
.cv-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-body);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-label);text-transform:uppercase;
  cursor:pointer;border:var(--border-hair) solid transparent;
  border-radius:var(--radius-none);text-decoration:none;
  position:relative;overflow:hidden;white-space:nowrap;
  transition:background var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out),
             border-color var(--dur-fast) var(--ease-out);
}
.cv-btn:disabled,.cv-btn[aria-disabled="true"]{opacity:.4;cursor:not-allowed;pointer-events:none;}
.cv-btn__label,.cv-btn__arrow{position:relative;z-index:1;}
.cv-btn__arrow{transition:transform var(--dur-fast) var(--ease-out);}
.cv-btn:hover .cv-btn__arrow{transform:translateX(4px);}

/* sizes */
.cv-btn--sm{font-size:var(--text-2xs);padding:9px 20px;}
.cv-btn--md{font-size:var(--text-xs);padding:15px 32px;}
.cv-btn--lg{font-size:var(--text-sm);padding:18px 40px;}
.cv-btn--block{width:100%;}

/* primary — domain text with accent wipe on hover */
.cv-btn--primary{background:var(--text-primary);color:var(--surface-white);}
.cv-btn--primary::after{content:'';position:absolute;inset:0;
  background:var(--accent-primary);transform:translateX(-101%);
  transition:transform .3s var(--ease-out);}
.cv-btn--primary:hover::after{transform:translateX(0);}

/* accent — domain accent fill; --accent-fg controls text (dark on gold, white on pink) */
.cv-btn--accent{background:var(--accent-primary);color:var(--accent-fg,var(--text-primary));}
.cv-btn--accent:hover{background:var(--accent-deep);}

/* outline — hairline accent border, fills on hover */
.cv-btn--outline{background:transparent;color:var(--text-accent);
  border-color:var(--border-accent);}
.cv-btn--outline:hover{background:var(--accent-primary);color:var(--accent-fg,var(--text-primary));border-color:var(--accent-primary);}

/* ghost — text only, quiet */
.cv-btn--ghost{background:transparent;color:var(--text-primary);}
.cv-btn--ghost:hover{color:var(--accent-primary);}
`;

let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const el = document.createElement('style');
    el.setAttribute('data-cv', 'button');
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  block = false,
  as = 'button',
  className = '',
  ...rest
}) {
  useCss();
  const Tag = as;
  const cls = [
    'cv-btn',
    `cv-btn--${variant}`,
    `cv-btn--${size}`,
    block ? 'cv-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      <span className="cv-btn__label">{children}</span>
      {arrow && <span className="cv-btn__arrow" aria-hidden="true">→</span>}
    </Tag>
  );
}
