import React from 'react';

const CSS = `
.cv-divider{border:0;width:100%;height:1px;}
.cv-divider--gradient{background:linear-gradient(90deg,transparent 0%,
  var(--border-rose-strong) 20%,var(--border-rose-strong) 80%,transparent 100%);}
.cv-divider--rule{background:var(--border-rose-strong);height:var(--border-hair);}
.cv-divider--hair{background:var(--border-rose);height:var(--border-hair);}
.cv-divider--on-dark{background:var(--border-on-dark);height:var(--border-hair);}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','divider');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function Divider({ variant = 'gradient', className = '', ...rest }) {
  useCss();
  return <hr className={['cv-divider', `cv-divider--${variant}`, className].filter(Boolean).join(' ')} {...rest} />;
}
