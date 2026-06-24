# Cvetanichin WordPress Theme

Custom WordPress theme for cvetanichin.org.

## Requirements

- WordPress 6.4+
- PHP 8.1+
- ACF Pro 6.x

## Installation

1. Upload the `cvetanichin/` folder to `wp-content/themes/`
2. Activate the theme in Appearance > Themes
3. Install and activate ACF Pro
4. Install and activate Yoast SEO, WPForms, WP Rocket, UpdraftPlus
5. Fonts are included in `assets/fonts/` — no additional download needed
6. Create pages and set the `page_domain` ACF field on each

## Domain Switching

Each page gets a body class of `domain-consultancy` or `domain-selfimprovement`
based on the ACF **Page Settings > Domain** select field.

CSS custom properties in `assets/css/tokens.css` handle all colour differences
between the two domains. No conditional stylesheet loading required.

## File Structure

See the WordPress Theme System brief (WordPress Theme System.dc.html) for the
complete architecture, template map, design tokens, plugin stack, and launch checklist.

## Development

No build step required. Edit PHP/CSS/JS directly.

### Fonts

Self-hosted variable fonts are included in `assets/fonts/`:

| File | Family | Axis |
|---|---|---|
| `Fraunces-Italic-VariableFont.woff2` | Fraunces | weight 100–900, italic |
| `Outfit-VariableFont.woff2` | Outfit | weight 100–900 |

`tokens.css` uses a single `@font-face` per family with `font-weight: 100 900` (variable font syntax), replacing the previous 5-file static approach. The Fraunces italic file is preloaded via `<link rel="preload">` in `enqueue.php` for LCP.

## Non-Negotiables

- No page builder
- No hardcoded hex values — use `--cvet-*` CSS custom properties only
- No emoji
- No pure #FFFFFF — use `--cvet-surface-white`
- No rounded corners on cards/buttons/inputs
- No bold/non-italic display headlines
