import React from 'react';

const CSS = `
.cv-eyebrow{
  display:block;font-family:var(--font-body);font-size:var(--text-3xs);
  font-weight:var(--weight-medium);letter-spacing:var(--tracking-eyebrow);
  text-transform:uppercase;line-height:1.4;
}
.cv-eyebrow--rose{color:var(--rose);}
.cv-eyebrow--rose-light{color:var(--rose-light);}
.cv-eyebrow--muted{color:var(--charcoal-light);}
.cv-eyebrow--on-dark{color:rgba(253,250,247,0.55);}
`;
let injected = false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','eyebrow');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function Eyebrow({ children, tone = 'rose', className = '', as = 'span', ...rest }) {
  useCss();
  const Tag = as;
  return (
    <Tag className={['cv-eyebrow', `cv-eyebrow--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  );
}
