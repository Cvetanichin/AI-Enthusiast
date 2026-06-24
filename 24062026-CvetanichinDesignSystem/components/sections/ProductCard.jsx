import React from 'react';

const CSS = `
.cv-card{background:var(--white);border:var(--border-hair) solid var(--border-rose);
  border-radius:var(--radius-xs);padding:var(--card-py) var(--card-px);
  display:flex;flex-direction:column;gap:0;text-decoration:none;
  transition:border-color var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out);}
.cv-card--hover:hover{border-color:var(--rose);transform:translateY(-3px);box-shadow:var(--shadow-md);}
.cv-card--warm{background:var(--ivory-dark);}
.cv-card__mark{width:32px;height:32px;background:var(--rose);margin-bottom:1rem;
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  transition:background var(--dur-fast) var(--ease-out);}
.cv-card--hover:hover .cv-card__mark{background:var(--rose-deep);}
.cv-card__mark-inner{width:10px;height:10px;background:var(--white);}
.cv-card__eyebrow{font-family:var(--font-body);font-size:var(--text-3xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--rose-deep);margin-bottom:.6rem;}
.cv-card__title{font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-medium);
  letter-spacing:0.08em;text-transform:uppercase;color:var(--charcoal);margin-bottom:.5rem;}
.cv-card__title--serif{font-family:var(--font-display);font-size:var(--text-h3);font-weight:var(--weight-display-soft);
  letter-spacing:var(--tracking-normal);text-transform:none;line-height:var(--leading-snug);}
.cv-card__desc{font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-body-light);
  color:var(--charcoal-mid);line-height:var(--leading-relaxed);}
.cv-card__foot{margin-top:1.25rem;padding-top:1rem;border-top:var(--border-hair) solid var(--border-rose);
  display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
.cv-card__price{font-family:var(--font-display);font-size:var(--text-stat);font-weight:var(--weight-display-soft);color:var(--charcoal);}
.cv-card__price-note{font-family:var(--font-body);font-size:var(--text-2xs);font-weight:var(--weight-body-light);color:var(--charcoal-light);}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','card');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function ProductCard({
  eyebrow, title, description, price, priceNote, mark = true, serifTitle = false,
  hover = true, warm = false, footer, children, as = 'div', className = '', ...rest
}) {
  useCss();
  const Tag = as;
  const cls = ['cv-card', hover ? 'cv-card--hover' : '', warm ? 'cv-card--warm' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {mark && <span className="cv-card__mark" aria-hidden="true"><span className="cv-card__mark-inner" /></span>}
      {eyebrow && <span className="cv-card__eyebrow">{eyebrow}</span>}
      {title && <h3 className={serifTitle ? 'cv-card__title cv-card__title--serif' : 'cv-card__title'}>{title}</h3>}
      {description && <p className="cv-card__desc">{description}</p>}
      {children}
      {(price || footer) && (
        <div className="cv-card__foot">
          {price && <span className="cv-card__price">{price}</span>}
          {priceNote && <span className="cv-card__price-note">{priceNote}</span>}
          {footer}
        </div>
      )}
    </Tag>
  );
}
