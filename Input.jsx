import React from 'react';

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

export function Input({
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
    control = <textarea id={fieldId} className="cv-field__control" {...rest} />;
  } else if (as === 'select') {
    control = (
      <select id={fieldId} className="cv-field__control" {...rest}>
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lbl = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{lbl}</option>;
        })}
      </select>
    );
  } else {
    control = <input id={fieldId} className="cv-field__control" {...rest} />;
  }
  return (
    <div className={wrapCls}>
      {label && <label className="cv-field__label" htmlFor={fieldId}>{label}</label>}
      {control}
      {hint && <span className="cv-field__hint">{hint}</span>}
    </div>
  );
}
