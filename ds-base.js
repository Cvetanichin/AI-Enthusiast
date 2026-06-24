(() => {
  const base = '_ds/cvetanichin-design-system-f4419f55-beba-48d0-8a44-e8d278b5b2e4';
  for (const p of ['styles.css', 'tokens/themes/selfimprovement.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if consuming, point base at the bound _ds/<folder>');
  document.head.appendChild(s);
})();
