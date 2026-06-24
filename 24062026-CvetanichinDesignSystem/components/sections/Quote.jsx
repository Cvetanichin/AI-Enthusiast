import React from 'react';

const CSS = `
.cv-quote{position:relative;overflow:hidden;}
.cv-quote--accent{background:var(--rose);padding:var(--section-py) var(--section-px);}
.cv-quote--plain{background:transparent;padding:0;}
.cv-quote--inset{background:var(--ivory-dark);padding:var(--card-py) var(--card-px);
  border-left:var(--border-accent) solid var(--rose);}
.cv-quote__mark{font-family:var(--font-display);font-size:200px;font-weight:var(--weight-display);
  line-height:.75;position:absolute;top:1.5rem;left:2rem;pointer-events:none;
  color:rgba(253,250,247,0.10);}
.cv-quote__text{font-family:var(--font-display);font-weight:var(--weight-display-soft);
  font-style:italic;line-height:var(--leading-quote);position:relative;z-index:1;}
.cv-quote--accent .cv-quote__text{font-size:clamp(18px,2vw,24px);color:var(--white);max-width:var(--measure-wide);}
.cv-quote--plain .cv-quote__text{font-size:clamp(18px,2vw,24px);color:var(--charcoal);max-width:var(--measure-wide);}
.cv-quote--inset .cv-quote__text{font-size:var(--text-lg);color:var(--charcoal);font-style:italic;}
.cv-quote__attr{margin-top:2rem;font-family:var(--font-body);font-size:var(--text-2xs);
  letter-spacing:0.18em;text-transform:uppercase;font-weight:var(--weight-body);position:relative;z-index:1;}
.cv-quote--accent .cv-quote__attr{color:rgba(253,250,247,0.5);}
.cv-quote--plain .cv-quote__attr,.cv-quote--inset .cv-quote__attr{color:var(--rose-deep);margin-top:1rem;}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','quote');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function Quote({ children, attribution, variant = 'accent', mark = true, className = '', ...rest }) {
  useCss();
  return (
    <figure className={['cv-quote', `cv-quote--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {mark && variant === 'accent' && <span className="cv-quote__mark" aria-hidden="true">&ldquo;</span>}
      <blockquote className="cv-quote__text">{children}</blockquote>
      {attribution && <figcaption className="cv-quote__attr">{attribution}</figcaption>}
    </figure>
  );
}
