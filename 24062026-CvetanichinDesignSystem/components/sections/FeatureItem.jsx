import React from 'react';

const CSS = `
.cv-feature{display:block;transition:background var(--dur-base) var(--ease-out);}
.cv-feature--numbered{padding:2rem 1.75rem;border:var(--border-hair) solid var(--border-on-dark);
  background:var(--charcoal);}
.cv-feature--numbered:hover{background:#363636;}
.cv-feature__num{font-family:var(--font-display);font-size:36px;font-weight:var(--weight-display);
  color:rgba(232,184,184,0.4);margin-bottom:1rem;line-height:1;}
.cv-feature__title{font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-medium);
  letter-spacing:0.06em;text-transform:uppercase;color:var(--white);margin-bottom:.6rem;}
.cv-feature__desc{font-family:var(--font-body);font-size:var(--text-sm);font-weight:var(--weight-body-light);
  color:rgba(253,250,247,0.5);line-height:var(--leading-relaxed);}

/* step row variant — light surface, ledger style */
.cv-feature--step{display:grid;grid-template-columns:100px 1fr auto;gap:2rem;
  padding:1.75rem 0;border-bottom:var(--border-hair) solid var(--border-rose);align-items:start;}
.cv-feature--step .cv-feature__num{font-size:var(--text-xs);font-weight:var(--weight-body-light);
  color:var(--rose);padding-top:3px;letter-spacing:0.05em;margin-bottom:0;}
.cv-feature--step .cv-feature__title{color:var(--charcoal);font-size:var(--text-base);text-transform:none;
  letter-spacing:var(--tracking-normal);margin-bottom:.4rem;}
.cv-feature--step .cv-feature__desc{color:var(--charcoal-mid);max-width:var(--measure-body);}
.cv-feature__dot{width:8px;height:8px;border-radius:var(--radius-pill);background:transparent;
  border:var(--border-thin) solid var(--border-rose-hover);margin-top:6px;flex-shrink:0;
  transition:background var(--dur-fast) var(--ease-out);}
.cv-feature--step:hover .cv-feature__dot{background:var(--rose);}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','feature');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function FeatureItem({ number, title, description, variant = 'numbered', className = '', ...rest }) {
  useCss();
  if (variant === 'step') {
    return (
      <div className={['cv-feature', 'cv-feature--step', className].filter(Boolean).join(' ')} {...rest}>
        <div className="cv-feature__num">{number}</div>
        <div className="cv-feature__body">
          <div className="cv-feature__title">{title}</div>
          <div className="cv-feature__desc">{description}</div>
        </div>
        <div className="cv-feature__dot" aria-hidden="true" />
      </div>
    );
  }
  return (
    <div className={['cv-feature', 'cv-feature--numbered', className].filter(Boolean).join(' ')} {...rest}>
      {number && <div className="cv-feature__num">{number}</div>}
      <div className="cv-feature__title">{title}</div>
      <div className="cv-feature__desc">{description}</div>
    </div>
  );
}
