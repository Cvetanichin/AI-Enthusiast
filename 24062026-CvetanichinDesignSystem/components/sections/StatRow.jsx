import React from 'react';

const CSS = `
.cv-stats{display:grid;width:100%;}
.cv-stats--dark{background:var(--charcoal);}
.cv-stats--light{background:var(--ivory-dark);border-top:var(--border-hair) solid var(--border-rose);
  border-bottom:var(--border-hair) solid var(--border-rose);}
.cv-stat{padding:1.75rem 2rem;display:flex;flex-direction:column;gap:4px;}
.cv-stats--dark .cv-stat{border-right:var(--border-hair) solid var(--border-on-dark);}
.cv-stats--light .cv-stat{border-right:var(--border-hair) solid var(--border-rose);}
.cv-stat:last-child{border-right:none;}
.cv-stat__num{font-family:var(--font-display);font-size:var(--text-stat);
  font-weight:var(--weight-display-soft);line-height:1;}
.cv-stats--dark .cv-stat__num{color:var(--rose-light);}
.cv-stats--light .cv-stat__num{color:var(--rose-deep);}
.cv-stat__label{font-family:var(--font-body);font-size:var(--text-2xs);
  font-weight:var(--weight-body-light);letter-spacing:0.08em;}
.cv-stats--dark .cv-stat__label{color:rgba(253,250,247,0.45);}
.cv-stats--light .cv-stat__label{color:var(--charcoal-mid);}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','stats');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function StatRow({ items = [], variant = 'dark', className = '', ...rest }) {
  useCss();
  return (
    <div
      className={['cv-stats', `cv-stats--${variant}`, className].filter(Boolean).join(' ')}
      style={{ gridTemplateColumns: `repeat(${items.length || 1}, 1fr)` }}
      {...rest}
    >
      {items.map((it, i) => (
        <div className="cv-stat" key={i}>
          <span className="cv-stat__num">{it.value}</span>
          <span className="cv-stat__label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
