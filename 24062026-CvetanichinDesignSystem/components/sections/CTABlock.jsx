import React from 'react';
import { Button } from '../forms/Button.jsx';

const CSS = `
.cv-cta{display:grid;grid-template-columns:1fr 1fr;gap:var(--section-gap);align-items:center;
  padding:var(--section-py) var(--section-px);background:var(--ivory-dark);
  border-top:var(--border-hair) solid var(--border-rose);}
.cv-cta--stack{grid-template-columns:1fr;gap:2rem;text-align:left;max-width:var(--measure-wide);}
.cv-cta__heading{font-family:var(--font-display);font-size:var(--text-display);
  font-weight:var(--weight-display);line-height:var(--leading-snug);color:var(--charcoal);}
.cv-cta__heading em{font-style:italic;color:var(--rose-deep);}
.cv-cta__right{display:flex;flex-direction:column;gap:1.25rem;}
.cv-cta__price-row{display:flex;align-items:baseline;gap:12px;padding-bottom:1.25rem;
  border-bottom:var(--border-hair) solid var(--border-rose-strong);}
.cv-cta__price{font-family:var(--font-display);font-size:48px;font-weight:var(--weight-display-soft);color:var(--charcoal);}
.cv-cta__price-detail{font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-body-light);
  color:var(--charcoal-light);line-height:1.6;}
.cv-cta__reassurance{display:flex;flex-direction:column;gap:.6rem;margin-top:.25rem;}
.cv-cta__line{font-family:var(--font-body);font-size:var(--text-xs);font-weight:var(--weight-body-light);
  color:var(--charcoal-light);display:flex;align-items:center;gap:8px;}
.cv-cta__line::before{content:'';display:inline-block;width:6px;height:6px;
  border:var(--border-hair) solid var(--border-rose-hover);border-radius:var(--radius-pill);flex-shrink:0;}
`;
let injected=false;
function useCss(){if(!injected&&typeof document!=='undefined'){const e=document.createElement('style');e.setAttribute('data-cv','cta');e.textContent=CSS;document.head.appendChild(e);injected=true;}}

export function CTABlock({
  heading, price, priceDetail, ctaLabel = 'Get instant access', ctaHref = '#',
  onCta, reassurances = [], layout = 'split', className = '', ...rest
}) {
  useCss();
  const right = (
    <div className="cv-cta__right">
      {price && (
        <div className="cv-cta__price-row">
          <span className="cv-cta__price">{price}</span>
          {priceDetail && <span className="cv-cta__price-detail">{priceDetail}</span>}
        </div>
      )}
      <Button variant="primary" arrow block as={ctaHref ? 'a' : 'button'} href={ctaHref || undefined} onClick={onCta}>
        {ctaLabel}
      </Button>
      {reassurances.length > 0 && (
        <div className="cv-cta__reassurance">
          {reassurances.map((r, i) => <span className="cv-cta__line" key={i}>{r}</span>)}
        </div>
      )}
    </div>
  );
  return (
    <section className={['cv-cta', layout === 'stack' ? 'cv-cta--stack' : '', className].filter(Boolean).join(' ')} {...rest}>
      <h2 className="cv-cta__heading" dangerouslySetInnerHTML={typeof heading === 'string' ? { __html: heading } : undefined}>
        {typeof heading === 'string' ? undefined : heading}
      </h2>
      {right}
    </section>
  );
}
