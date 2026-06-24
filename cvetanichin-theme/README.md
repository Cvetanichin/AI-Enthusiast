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
5. Add self-hosted font .woff2 files to `assets/fonts/`
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
For self-hosted fonts, download Fraunces (weight 200, 300 italic) and Outfit
(weight 300, 400, 500) from Google Fonts and place .woff2 files in `assets/fonts/`.

## Non-Negotiables

- No page builder
- No hardcoded hex values — use `--cvet-*` CSS custom properties only
- No emoji
- No pure #FFFFFF — use `--cvet-surface-white`
- No rounded corners on cards/buttons/inputs
- No bold/non-italic display headlines
