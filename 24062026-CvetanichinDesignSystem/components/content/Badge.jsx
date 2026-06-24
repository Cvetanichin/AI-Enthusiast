import React from 'react';

const CSS = `
.cv-badge{
  display:inline-flex;align-items:center;gap:7px;font-family:var(--font-body);
  font-size:var(--text-2xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-label);text-transform:uppercase;
  padding:5px 12px;border-radius:var(--radius-none);line-height:1;
  border:var(--border-hair) solid transparent;
}
.cv-badge--rose{background:var(--rose-pale);color:var(--rose-deep);}
.cv-badge--outline{background:transparent;color:var(--rose-deep);border-color:var(--border-rose-hover);}
.cv-badge--charcoal{background:var(--charcoal);color:var(--white);}
.cv-badge--soft{background:var(--ivory-mid);color:var(--charcoal-mid);}
.cv-badge__dot{width:5px;height:5px;border-radius:var(--radius-pill);background:currentColor;flex-shrink:0;}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','badge');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function Badge({ children, variant = 'rose', dot = false, className = '', ...rest }) {
  useCss();
  return (
    <span className={['cv-badge', `cv-badge--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="cv-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
