# Cvetanichin — Asset Inventory

This directory holds visual assets for the Cvetanichin brand.

## Status

No image assets were provided in the initial source files. The landing page references `../design/Gemini_Generated_Image_.png` for the creator photo, but this file was not available during design system construction.

## Expected directory structure

```
assets/
├── brand/
│   ├── cvetanichin-wordmark.svg       Brand wordmark (the Fraunces logotype)
│   ├── cvetanichin-wordmark-white.svg White variant for dark backgrounds
│   └── favicon.ico / favicon.svg
│
├── photography/
│   ├── vaska-portrait.jpg             Creator photo (warm tone, soft contrast)
│   └── product-preview.jpg            Kit cover or product mockup
│
└── icons/
    └── (see ICONOGRAPHY in readme.md — no icon library used by default)
```

## Brand mark usage

The brand is identified by the Fraunces serif logotype "Cvetanichin" — rendered in CSS as:

```css
font-family: var(--font-serif);
font-size: 13px;
font-weight: 300;
letter-spacing: 0.22em;
text-transform: uppercase;
color: var(--text-secondary);
```

No graphic logo mark exists in the current brand. The wordmark IS the logo.

## Photography guidance

- Personal photography only — no stock
- Warm tone: `filter: sepia(5%) contrast(1.02)`
- The offset-frame technique: `position: relative` wrap with an absolute inner frame offset by `+12px`, `0.5px solid var(--border-strong)`
- Never cool-toned, never desaturated

## Adding assets

Place files here and reference them from components and UI kits. Update this file with the inventory when new assets are added.
