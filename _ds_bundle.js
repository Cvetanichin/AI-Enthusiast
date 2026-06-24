/* @ds-bundle: {"format":3,"namespace":"CvetanichinDesignSystem_f4419f","components":[{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CTABlock","sourcePath":"components/sections/CTABlock.jsx"},{"name":"FeatureItem","sourcePath":"components/sections/FeatureItem.jsx"},{"name":"ProductCard","sourcePath":"components/sections/ProductCard.jsx"},{"name":"Quote","sourcePath":"components/sections/Quote.jsx"},{"name":"StatRow","sourcePath":"components/sections/StatRow.jsx"}],"sourceHashes":{"components/content/Badge.jsx":"0149a3688404","components/content/Divider.jsx":"59b2ae06c3f3","components/content/Eyebrow.jsx":"2546d65bd661","components/forms/Button.jsx":"5aa37663e07c","components/forms/Input.jsx":"4aba2a3afa2f","components/sections/CTABlock.jsx":"e0cc5aee4498","components/sections/FeatureItem.jsx":"04ba3a7088fa","components/sections/ProductCard.jsx":"27f8a84ff4b0","components/sections/Quote.jsx":"357b80fd2cde","components/sections/StatRow.jsx":"c6d821ebfe15","ui_kits/cvetanichin-site/App.jsx":"e3d69b653c73","ui_kits/cvetanichin-site/Checkout.jsx":"d2d669d62336","ui_kits/cvetanichin-site/Hero.jsx":"fb1cfa8c4acd","ui_kits/cvetanichin-site/SalesBody.jsx":"0135880b1601","ui_kits/cvetanichin-site/SiteNav.jsx":"136a88d966e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CvetanichinDesignSystem_f4419f = window.CvetanichinDesignSystem_f4419f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'badge');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function Badge({
  children,
  variant = 'rose',
  dot = false,
  className = '',
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['cv-badge', `cv-badge--${variant}`, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cv-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cv-divider{border:0;width:100%;height:1px;}
.cv-divider--gradient{background:linear-gradient(90deg,transparent 0%,
  var(--border-rose-strong) 20%,var(--border-rose-strong) 80%,transparent 100%);}
.cv-divider--rule{background:var(--border-rose-strong);height:var(--border-hair);}
.cv-divider--hair{background:var(--border-rose);height:var(--border-hair);}
.cv-divider--on-dark{background:var(--border-on-dark);height:var(--border-hair);}
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'divider');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function Divider({
  variant = 'gradient',
  className = '',
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['cv-divider', `cv-divider--${variant}`, className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'eyebrow');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function Eyebrow({
  children,
  tone = 'rose',
  className = '',
  as = 'span',
  ...rest
}) {
  useCss();
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['cv-eyebrow', `cv-eyebrow--${tone}`, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['cv-btn', `cv-btn--${variant}`, `cv-btn--${size}`, block ? 'cv-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cv-btn__label"
  }, children), arrow && /*#__PURE__*/React.createElement("span", {
    className: "cv-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.cv-field{display:flex;flex-direction:column;gap:8px;width:100%;}
.cv-field__label{
  font-family:var(--font-body);font-size:var(--text-3xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--rose-deep);
}
.cv-field__control{
  font-family:var(--font-body);font-size:var(--text-base);font-weight:var(--weight-body-light);
  color:var(--charcoal);background:var(--white);
  border:var(--border-hair) solid var(--border-rose-strong);border-radius:var(--radius-xs);
  padding:13px 16px;width:100%;
  transition:border-color var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-fast) var(--ease-out);
}
.cv-field__control::placeholder{color:var(--charcoal-light);}
.cv-field__control:hover{border-color:var(--border-rose-hover);}
.cv-field__control:focus{outline:none;border-color:var(--rose);
  box-shadow:0 0 0 3px rgba(200,112,112,0.10);}
.cv-field__control:disabled{opacity:.5;cursor:not-allowed;background:var(--offwhite);}
textarea.cv-field__control{resize:vertical;min-height:96px;line-height:var(--leading-relaxed);}
select.cv-field__control{appearance:none;cursor:pointer;
  background-image:linear-gradient(45deg,transparent 50%,var(--charcoal-light) 50%),
                   linear-gradient(135deg,var(--charcoal-light) 50%,transparent 50%);
  background-position:calc(100% - 20px) 19px,calc(100% - 14px) 19px;
  background-size:6px 6px,6px 6px;background-repeat:no-repeat;padding-right:40px;}
.cv-field__hint{font-family:var(--font-body);font-size:var(--text-xs);
  font-weight:var(--weight-body-light);color:var(--charcoal-light);line-height:var(--leading-relaxed);}
.cv-field--error .cv-field__control{border-color:var(--rose-deep);}
.cv-field--error .cv-field__hint{color:var(--rose-deep);}
`;
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const el = document.createElement('style');
    el.setAttribute('data-cv', 'input');
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Input({
  label,
  hint,
  error = false,
  as = 'input',
  options = [],
  className = '',
  id,
  ...rest
}) {
  useCss();
  const fieldId = id || (label ? `cv-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const wrapCls = ['cv-field', error ? 'cv-field--error' : '', className].filter(Boolean).join(' ');
  let control;
  if (as === 'textarea') {
    control = /*#__PURE__*/React.createElement("textarea", _extends({
      id: fieldId,
      className: "cv-field__control"
    }, rest));
  } else if (as === 'select') {
    control = /*#__PURE__*/React.createElement("select", _extends({
      id: fieldId,
      className: "cv-field__control"
    }, rest), options.map(o => {
      const val = typeof o === 'string' ? o : o.value;
      const lbl = typeof o === 'string' ? o : o.label;
      return /*#__PURE__*/React.createElement("option", {
        key: val,
        value: val
      }, lbl);
    }));
  } else {
    control = /*#__PURE__*/React.createElement("input", _extends({
      id: fieldId,
      className: "cv-field__control"
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cv-field__label",
    htmlFor: fieldId
  }, label), control, hint && /*#__PURE__*/React.createElement("span", {
    className: "cv-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTABlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'cta');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function CTABlock({
  heading,
  price,
  priceDetail,
  ctaLabel = 'Get instant access',
  ctaHref = '#',
  onCta,
  reassurances = [],
  layout = 'split',
  className = '',
  ...rest
}) {
  useCss();
  const right = /*#__PURE__*/React.createElement("div", {
    className: "cv-cta__right"
  }, price && /*#__PURE__*/React.createElement("div", {
    className: "cv-cta__price-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-cta__price"
  }, price), priceDetail && /*#__PURE__*/React.createElement("span", {
    className: "cv-cta__price-detail"
  }, priceDetail)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    arrow: true,
    block: true,
    as: ctaHref ? 'a' : 'button',
    href: ctaHref || undefined,
    onClick: onCta
  }, ctaLabel), reassurances.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "cv-cta__reassurance"
  }, reassurances.map((r, i) => /*#__PURE__*/React.createElement("span", {
    className: "cv-cta__line",
    key: i
  }, r))));
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['cv-cta', layout === 'stack' ? 'cv-cta--stack' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("h2", {
    className: "cv-cta__heading",
    dangerouslySetInnerHTML: typeof heading === 'string' ? {
      __html: heading
    } : undefined
  }, typeof heading === 'string' ? undefined : heading), right);
}
Object.assign(__ds_scope, { CTABlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTABlock.jsx", error: String((e && e.message) || e) }); }

// components/sections/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'feature');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function FeatureItem({
  number,
  title,
  description,
  variant = 'numbered',
  className = '',
  ...rest
}) {
  useCss();
  if (variant === 'step') {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ['cv-feature', 'cv-feature--step', className].filter(Boolean).join(' ')
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "cv-feature__num"
    }, number), /*#__PURE__*/React.createElement("div", {
      className: "cv-feature__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cv-feature__title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "cv-feature__desc"
    }, description)), /*#__PURE__*/React.createElement("div", {
      className: "cv-feature__dot",
      "aria-hidden": "true"
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cv-feature', 'cv-feature--numbered', className].filter(Boolean).join(' ')
  }, rest), number && /*#__PURE__*/React.createElement("div", {
    className: "cv-feature__num"
  }, number), /*#__PURE__*/React.createElement("div", {
    className: "cv-feature__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "cv-feature__desc"
  }, description));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/sections/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'card');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function ProductCard({
  eyebrow,
  title,
  description,
  price,
  priceNote,
  mark = true,
  serifTitle = false,
  hover = true,
  warm = false,
  footer,
  children,
  as = 'div',
  className = '',
  ...rest
}) {
  useCss();
  const Tag = as;
  const cls = ['cv-card', hover ? 'cv-card--hover' : '', warm ? 'cv-card--warm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), mark && /*#__PURE__*/React.createElement("span", {
    className: "cv-card__mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-card__mark-inner"
  })), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "cv-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: serifTitle ? 'cv-card__title cv-card__title--serif' : 'cv-card__title'
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "cv-card__desc"
  }, description), children, (price || footer) && /*#__PURE__*/React.createElement("div", {
    className: "cv-card__foot"
  }, price && /*#__PURE__*/React.createElement("span", {
    className: "cv-card__price"
  }, price), priceNote && /*#__PURE__*/React.createElement("span", {
    className: "cv-card__price-note"
  }, priceNote), footer));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'quote');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function Quote({
  children,
  attribution,
  variant = 'accent',
  mark = true,
  className = '',
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ['cv-quote', `cv-quote--${variant}`, className].filter(Boolean).join(' ')
  }, rest), mark && variant === 'accent' && /*#__PURE__*/React.createElement("span", {
    className: "cv-quote__mark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "cv-quote__text"
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    className: "cv-quote__attr"
  }, attribution));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Quote.jsx", error: String((e && e.message) || e) }); }

// components/sections/StatRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
let injected = false;
function useCss() {
  if (!injected && typeof document !== 'undefined') {
    const e = document.createElement('style');
    e.setAttribute('data-cv', 'stats');
    e.textContent = CSS;
    document.head.appendChild(e);
    injected = true;
  }
}
function StatRow({
  items = [],
  variant = 'dark',
  className = '',
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cv-stats', `cv-stats--${variant}`, className].filter(Boolean).join(' '),
    style: {
      gridTemplateColumns: `repeat(${items.length || 1}, 1fr)`
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "cv-stat",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-stat__num"
  }, it.value), /*#__PURE__*/React.createElement("span", {
    className: "cv-stat__label"
  }, it.label))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/StatRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cvetanichin-site/App.jsx
try { (() => {
/* Cvetanichin sales-site — app shell: sales page ↔ checkout. */
function App() {
  const [view, setView] = React.useState('sales'); // 'sales' | 'checkout'
  const scrollRef = React.useRef(null);
  const goCheckout = () => {
    setView('checkout');
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const goSales = () => {
    setView('sales');
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll",
    ref: scrollRef
  }, view === 'sales' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    onCta: goCheckout
  }), /*#__PURE__*/React.createElement(Hero, {
    onCta: goCheckout
  }), /*#__PURE__*/React.createElement(SalesBody, {
    onCta: goCheckout
  })) : /*#__PURE__*/React.createElement(Checkout, {
    onBack: goSales
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cvetanichin-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cvetanichin-site/Checkout.jsx
try { (() => {
/* Cvetanichin — calm offer / checkout screen. */
const {
  Eyebrow,
  Badge,
  Button,
  Input,
  Divider
} = window.CvetanichinDesignSystem_f4419f;
function Checkout({
  onBack,
  onPaid
}) {
  const [done, setDone] = React.useState(false);
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      className: "checkout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "checkout__confirm"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "rose"
    }, "Order confirmed"), /*#__PURE__*/React.createElement("h2", {
      className: "checkout__confirm-title"
    }, "Check your inbox.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Your kit is on its way.")), /*#__PURE__*/React.createElement("p", {
      className: "checkout__confirm-body"
    }, "The First Offer Kit has been delivered as a PDF. Start with Section 1 today \u2014 a 10-minute audit, and you will end with one offer sentence."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onBack
    }, "Back to the page")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/React.createElement("button", {
    className: "checkout__back",
    onClick: onBack
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    className: "checkout__grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "checkout__summary"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "Your order"), /*#__PURE__*/React.createElement("h2", {
    className: "checkout__product"
  }, "The First", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Offer Kit")), /*#__PURE__*/React.createElement("p", {
    className: "checkout__desc"
  }, "Build and sell your first digital product this month. Four sections, five tools, fourteen days."), /*#__PURE__*/React.createElement(Divider, {
    variant: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout__line"
  }, /*#__PURE__*/React.createElement("span", null, "The First Offer Kit"), /*#__PURE__*/React.createElement("span", null, "\u20AC37")), /*#__PURE__*/React.createElement("div", {
    className: "checkout__line checkout__line--muted"
  }, /*#__PURE__*/React.createElement("span", null, "Standard price"), /*#__PURE__*/React.createElement("span", {
    className: "checkout__strike"
  }, "\u20AC57")), /*#__PURE__*/React.createElement(Divider, {
    variant: "hair"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout__line checkout__total"
  }, /*#__PURE__*/React.createElement("span", null, "Total today"), /*#__PURE__*/React.createElement("span", null, "\u20AC37")), /*#__PURE__*/React.createElement("div", {
    className: "checkout__badges"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    dot: true
  }, "Instant PDF delivery"), /*#__PURE__*/React.createElement(Badge, {
    variant: "soft"
  }, "One-time payment"))), /*#__PURE__*/React.createElement("section", {
    className: "checkout__form"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "Secure checkout"), /*#__PURE__*/React.createElement("h3", {
    className: "checkout__form-title"
  }, "Where should we send it?"), /*#__PURE__*/React.createElement("div", {
    className: "checkout__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Vaska Cvetanoska"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    hint: "Your PDF is delivered here instantly."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Card",
    placeholder: "1234  1234  1234  1234"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout__field-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Expiry",
    placeholder: "MM / YY"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    placeholder: "123"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Country",
    as: "select",
    options: ['North Macedonia', 'Germany', 'United Kingdom', 'United States', 'Other']
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    block: true,
    onClick: () => {
      setDone(true);
      onPaid && onPaid();
    }
  }, "Pay \u20AC37 \xB7 Get instant access"), /*#__PURE__*/React.createElement("div", {
    className: "checkout__reassure"
  }, /*#__PURE__*/React.createElement("span", null, "Delivered instantly as a PDF. No complicated setup."), /*#__PURE__*/React.createElement("span", null, "Built for women rebuilding on their own terms.")))));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cvetanichin-site/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cvetanichin-site/Hero.jsx
try { (() => {
/* Cvetanichin sales-site — hero (rose / ivory split). */
const {
  Eyebrow,
  Button
} = window.CvetanichinDesignSystem_f4419f;
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "on-dark"
  }, "A Cvetanichin Digital Product"), /*#__PURE__*/React.createElement("div", {
    className: "hero__title-wrap"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "The First", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Offer Kit")), /*#__PURE__*/React.createElement("p", {
    className: "hero__title-sub"
  }, "Build and sell your first digital product this month \u2014 using AI to do the heavy lifting."))), /*#__PURE__*/React.createElement("div", {
    className: "hero__right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__tagline"
  }, "You already have everything you need. What you are missing is a clear, simple path."), /*#__PURE__*/React.createElement("p", {
    className: "hero__body"
  }, "No course. No audience required. No complicated setup. One calm, practical kit \u2014 four sections, five ready-to-use tools, fourteen days."), /*#__PURE__*/React.createElement("div", {
    className: "hero__price-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__price"
  }, "\u20AC37"), /*#__PURE__*/React.createElement("span", {
    className: "hero__price-note"
  }, "One-time payment", /*#__PURE__*/React.createElement("br", null), "Instant PDF delivery")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: onCta
  }, "Get instant access")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cvetanichin-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cvetanichin-site/SalesBody.jsx
try { (() => {
/* Cvetanichin sales-site — the body sections below the hero. */
const {
  Eyebrow,
  Divider,
  StatRow,
  Quote,
  ProductCard,
  FeatureItem,
  CTABlock
} = window.CvetanichinDesignSystem_f4419f;
function SalesBody({
  onCta
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatRow, {
    items: [{
      value: '4',
      label: 'Sections'
    }, {
      value: '14',
      label: 'Days to launch'
    }, {
      value: '5',
      label: 'Ready-to-use tools'
    }, {
      value: '€37',
      label: 'One-time'
    }]
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--for"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "Who this is for"), /*#__PURE__*/React.createElement("h2", {
    className: "sec__heading"
  }, "For women rebuilding", /*#__PURE__*/React.createElement("br", null), "on their own terms")), /*#__PURE__*/React.createElement("div", {
    className: "for__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "for__para"
  }, "You paused your career \u2014 for a child, for a parent, after burnout, after a move \u2014 and you are now rebuilding. You have real skills and knowledge. You have never packaged or sold anything online."), /*#__PURE__*/React.createElement("p", {
    className: "for__highlight"
  }, "You are skeptical of promises and cautious with money. This kit was built for exactly that person."), /*#__PURE__*/React.createElement("p", {
    className: "for__para"
  }, "You do not need more preparation. You need a clear path. This kit is designed for one type of person and works because it is not trying to serve everyone."))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--what"
  }, /*#__PURE__*/React.createElement("div", {
    className: "what__header"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose-light"
  }, "What you will have"), /*#__PURE__*/React.createElement("h2", {
    className: "sec__heading sec__heading--light"
  }, "Four outputs. Two weeks.", /*#__PURE__*/React.createElement("br", null), "One product live.")), /*#__PURE__*/React.createElement("div", {
    className: "what__grid"
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    number: "01",
    title: "A defined offer",
    description: "What you are selling, who it is for, and exactly what result they get \u2014 in one clear sentence."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    number: "02",
    title: "A digital product",
    description: "Built with AI in 3\u20135 focused sessions. A PDF guide, template pack, or mini toolkit."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    number: "03",
    title: "A sales page live",
    description: "Written, designed, and published on Gumroad or Payhip in under one hour."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    number: "04",
    title: "Your first-sale plan",
    description: "Five personal messages that outperform any public launch post. Every time."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--steps"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "sec__heading",
    style: {
      marginTop: '1rem'
    }
  }, "One section per day.", /*#__PURE__*/React.createElement("br", null), "Fourteen days. Done."), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    variant: "step",
    number: "Section 1",
    title: "Identify what you already have",
    description: "A 10-minute audit surfaces sellable knowledge from lived transformation, professional expertise, or curation skill. You end with one offer sentence."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    variant: "step",
    number: "Section 2",
    title: "Scope your first digital product",
    description: "Apply the one-result rule. Choose a format. Price it honestly at \u20AC37\u2013\u20AC57. Write three buyer outcomes that become your sales page."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    variant: "step",
    number: "Section 3",
    title: "Build it with AI in five steps",
    description: "Outline \u2192 draft \u2192 refine \u2192 title \u2192 sales page. Claude does the heavy drafting. You edit until it sounds like a real person wrote it."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    variant: "step",
    number: "Section 4",
    title: "Sell it simply, without a website",
    description: "List on Gumroad or Payhip. Write five personal outreach messages. Send them before any public post. Your first buyers already trust you."
  }))), /*#__PURE__*/React.createElement(Quote, {
    attribution: "The First Offer Kit, Section 1"
  }, "People do not pay for experts. They pay for someone who is a few steps ahead of them, who has solved a problem they are currently stuck on, and who can explain it in a way that makes sense. That is not expertise. That is experience. You have experience."), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--creator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "creator__img-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "creator__img",
    role: "img",
    "aria-label": "Portrait of Vaska Cvetanoska"
  }, /*#__PURE__*/React.createElement("span", {
    className: "creator__img-note"
  }, "Portrait")), /*#__PURE__*/React.createElement("div", {
    className: "creator__frame",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "creator__content"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "Who made this"), /*#__PURE__*/React.createElement("h2", {
    className: "creator__name"
  }, "Vaska", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Cvetanoska")), /*#__PURE__*/React.createElement("div", {
    className: "creator__bio"
  }, /*#__PURE__*/React.createElement("p", null, "I built this kit because I was the woman it is designed for. I had the skills, the experience, and the quiet certainty that I had something worth selling \u2014 and I had no idea how to package it, price it, or get it in front of anyone."), /*#__PURE__*/React.createElement("p", null, "I figured it out. It was slower and messier than it needed to be. This kit is what I wish I had started with.")), /*#__PURE__*/React.createElement(Divider, {
    variant: "hair"
  }), /*#__PURE__*/React.createElement("span", {
    className: "creator__tagline"
  }, "Cvetanichin \xB7 Digital products for women who are ready"))), /*#__PURE__*/React.createElement("section", {
    className: "sec sec--formats"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "rose"
  }, "Product formats covered"), /*#__PURE__*/React.createElement("h2", {
    className: "sec__heading",
    style: {
      marginTop: '1rem'
    }
  }, "Choose what you can finish"), /*#__PURE__*/React.createElement("div", {
    className: "formats__grid"
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: "PDF Guide",
    description: "15\u201330 pages, step-by-step process. Quickest to create. Easiest to price and deliver."
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Template Pack",
    description: "Ready-to-use files your buyer adapts. Very high perceived value for the time it takes to build."
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Mini Toolkit",
    description: "PDF guide plus one or two templates. Best of both: strong perceived value, fast to build."
  }), /*#__PURE__*/React.createElement(ProductCard, {
    title: "Email Mini-Course",
    description: "5\u20137 emails over one to two weeks. Good for topics that benefit from spacing and repetition."
  }))), /*#__PURE__*/React.createElement("div", {
    id: "cta"
  }, /*#__PURE__*/React.createElement(CTABlock, {
    heading: "Stop<br>preparing.<br><em>Start earning.</em>",
    price: "\u20AC37",
    priceDetail: /*#__PURE__*/React.createElement(React.Fragment, null, "One-time payment", /*#__PURE__*/React.createElement("br", null), "Standard price \u20AC57"),
    ctaLabel: "Get instant access for \u20AC37",
    ctaHref: "",
    onCta: onCta,
    reassurances: ['Delivered instantly as a PDF. No complicated setup.', 'One section per day. Product live within two weeks.', 'Built for women rebuilding on their own terms.']
  })), /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-footer__brand"
  }, "Cvetanichin"), /*#__PURE__*/React.createElement("span", {
    className: "site-footer__copy"
  }, "\xA9 2026 Cvetanichin. All rights reserved.")));
}
window.SalesBody = SalesBody;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cvetanichin-site/SalesBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cvetanichin-site/SiteNav.jsx
try { (() => {
/* Cvetanichin sales-site — top navigation (sticky, blur). */
const {
  Button
} = window.CvetanichinDesignSystem_f4419f;
function SiteNav({
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kit-scroll');
    const t = el || window;
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 30);
    t.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => t.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: 'site-nav' + (scrolled ? ' site-nav--scrolled' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-nav__brand"
  }, "Cvetanichin"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onCta
  }, "Get instant access"));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cvetanichin-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CTABlock = __ds_scope.CTABlock;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatRow = __ds_scope.StatRow;

})();
