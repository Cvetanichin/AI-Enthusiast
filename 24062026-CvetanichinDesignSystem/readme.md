# Cvetanichin Design System

> Calm, premium, editorial. One personal brand. Two distinct professional domains.

---

## Overview

**Brand:** Cvetanichin \
**Creator:** Vaska Cvetanoska\
**Category:** Personal brand design system — AI Enthusiast\
**Subcategory:** B2B CSO Consultancy + B2C Self-Improvement

Cvetanichin is Vaska Cvetanoska's personal brand — strategist, AI practitioner, and digital product creator — operating across two distinct professional domains. The design system serves both: a shared typographic and spacing foundation, and two separate colour themes that give each domain its own visual identity while remaining unmistakably part of the same brand.

The brand communicates through editorial restraint — direct language, precise type, minimal colour, no decoration. Whether addressing a senior leadership team or an individual buyer, the tone is the same: intelligent, specific, unhyped.

---

## Three Templates

### Landing Page

**Purpose:** Brand overview homepage — both domains, portrait, philosophy quote\
**Audience:** B2B + B2C — anyone arriving at the Cvetanichin brand for the first time\
**Palette:** Deep slate hero · warm ivory sections · SI pink for D2 · teal for D1\
**Theme file:** `tokens/themes/selfimprovement.css` (base; D1 elements use hardcoded teal)\
**Template:** `templates/landing-page/LandingPage.dc.html`

The landing page bridges both domains. It introduces Vaska, presents the two domain offerings side by side, and routes visitors to either the consultancy page or the self-improvement product page. All navigation is live `<a href>` links — CVETANICHIN wordmark returns to the landing page from every template.

**Sections:** Sticky nav → Slate hero with portrait → Two-domain cards → About with portrait → Philosophy quote → Footer with full link mesh

---

### Domain 1 — CSO Consultancy

**Audience:** B2B — organisations, senior leadership teams, boards\
**Offer:** Fractional and advisory strategic leadership services\
**Palette:** Ochre gold · warm stone · slate\
**Theme file:** `tokens/themes/consultancy.css`\
**Template:** `templates/consultancy-page/ConsultancyPage.dc.html`

Vaska offers senior strategic leadership for organisations that need a Chief Strategy Officer without a permanent hire. Three engagement formats: **Fractional CSO** (ongoing embedded presence), **Strategy Intensive** (focused three-day engagement around a single decision), and **Advisory Retainer** (monthly retained access for critical moments).

The visual register is authoritative and precise — slate inverse hero, gold accent, structure-driven layout. No consumer warmth; no softening.

---

### Domain 2 — Self-Improvement

**Audience:** B2C — individuals pursuing professional growth and independence\
**Offer:** Digital products sold online: prompt packs, AI tools, templates, starter kits, courses\
**Palette:** Hot pink · blush · deep purple\
**Theme file:** `tokens/themes/selfimprovement.css`\
**Template:** `templates/self-improvement-page/SelfImprovementPage.dc.html`

Vaska creates and sells practical digital products that help people develop skills, work smarter with AI, and build professional independence. Products are clear, structured, and designed for immediate use.

Every Domain 2 product page is built on the **Self-Improvement Page** template, adapting content while preserving the visual language: split-column hero, accent-left surface, stats strip, numbered output cards, pull quote, creator section, CTA block.

> **Rule:** New Domain 2 product pages → duplicate `templates/self-improvement-page/` and replace content. Do not redesign the layout or change the colour theme.

#### Published products

**Product 01 — The First Offer Kit**\
€37 · PDF guide · Instant digital download\
[https://cvetanichin.gumroad.com/l/ai-income-starter-kit](https://cvetanichin.gumroad.com/l/ai-income-starter-kit)

The first published product in this domain. Walks women through building and selling their first digital product in 14 days using AI tools. Four sections, one output per section: the idea, the outline, the draft, the offer. No subscription. No upsell.

| Detail | Value |
| --- | --- |
| Price | €37 |
| Format | PDF (instant download) |
| Length | 4 sections · 14-day sequence |
| Target buyer | Women with expertise, no product yet |
| CTA | "Stop preparing. Start earning." |

---

**Product 02 — Clarity-to-Action OS**\
€79 · Fillable workbook (.docx) · Instant digital download\
[https://cvetanichin.gumroad.com/l/clarity-to-action](https://cvetanichin.gumroad.com/l/clarity-to-action)

A structured 4-stage workbook that turns honest self-reflection into a real, checkable 90-day plan — built on the same discipline used to design EU-funded projects. 52 pages, fully guided and fillable. Completable on desktop (Word or Google Docs) or printed.

| Detail | Value |
| --- | --- |
| Price | €79 |
| Format | .docx (instant download, fillable) |
| Length | 52 pages · 4 stages · 90-day arc |
| Target buyer | Purpose-driven professionals who've done audits before — and changed nothing afterwards |
| CTA | "Stop circling the same reflection. Build the plan." |

**Four stages:**
1. **Life Audit** — score seven domains, trace when drift started
2. **Energy Diagnosis** — identify which of four burnout patterns applies
3. **Values Clarification** — forced-ranking to surface under-invested values
4. **The 90-Day Plan** — one objective, three outcome areas, Day 45 + Day 90 checkpoints

---

## Content Fundamentals

### Voice and tone

The Cvetanichin voice is **direct, reassuring, emotionally intelligent, specific, and mature.**

| ✓ Do | ✗ Avoid |
| --- | --- |
| Short, declarative sentences | Padding, filler, throat-clearing |
| Specific numbers: €37, 14 days, 4 sections | Vague promises ("transform your life") |
| Acknowledge doubt without dismissing it | Urgency tactics and false scarcity |
| Treat the reader as an intelligent adult | Exclamation points in body copy |
| Second person throughout ("you") | Passive voice, corporate "we" |

### Person

- **Second person (you)** for the reader — "You already have everything you need."
- **First person (I)** in creator/founder copy only — "I built this kit because I was the woman it is designed for."
- Never "we" — this is a personal brand, not a corporate one.

### Casing rules

| Element | Rule | Example |
| --- | --- | --- |
| Headlines | Sentence case | "For women rebuilding on their own terms" |
| Section labels | ALL CAPS + tracked | "WHO THIS IS FOR" |
| Button labels | ALL CAPS | "GET INSTANT ACCESS" |
| Body text | Sentence case | Standard prose |
| Product names | Title case | "The First Offer Kit" |
| Brand name | Sentence case in prose, ALL CAPS in labels | Cvetanichin / CVETANICHIN |

### Emoji

**Never used.** The brand communicates through editorial restraint, type hierarchy, and specific language — not visual decoration.

### Punctuation conventions

- Em dashes (—) for pause and attribution; never double hyphens (--)
- No exclamation points in brand copy
- Ellipsis avoided — specificity replaces vagueness
- Short sentences over long, comma-heavy ones

### Copy reference — Domain 2 (Self-Improvement)

**Headlines:**
- "Stop preparing. Start earning."
- "Four outputs. Two weeks. One product live."
- "You already have everything you need. What you are missing is a clear, simple path."
- "Most clarity tools stop at insight. This one doesn't."
- "Stop circling the same reflection. Build the plan."

**CTA reassurance lines:**
- "Delivered instantly as a PDF. No complicated setup."
- "One section per day. Product live within two weeks."
- "Built for women rebuilding on their own terms."
- "Digital download (.docx). Fillable on desktop or Google Docs."

### Copy reference — Domain 1 (Consultancy)

**Headlines:**
- "Strategic clarity for organisations ready to move."
- "The work is not to write the strategy. The work is to make the decision that makes the strategy possible."

**CTA reassurance lines:**
- "Availability is limited. Engagements begin with a 30-minute diagnostic call — no commitment, no pitch."
- "Response within 48 hours."

**What to avoid (both domains):**
- "Transform your life today!"
- "LIMITED TIME OFFER — Don't miss out!"
- "Join thousands of successful women who..."

---

## Visual Foundations

### Color System

The system has two layers: **base primitives** (shared) and **domain themes** (swapped per context). Components reference only semantic tokens — they adapt automatically when a theme is loaded.

#### Domain 1 — Consultancy palette (Gold · Stone · Slate)

| Role | Value | Use |
| --- | --- | --- |
| Accent primary | Ochre gold `#E2C044` | Dot markers, CTA buttons, quote accent bar |
| Accent light | Gold light `#EDDA85` | Stat numbers and italic accents on dark |
| Surface base | Warm stone `#EDEAE5` | Default page background |
| Surface inverse | Deep slate `#393E41` | Hero, footer, CTA inverse sections |
| Secondary accent | Teal `#587B7F` | Eyebrow labels, nav domain link, dividers |

Full token definitions in `tokens/themes/consultancy.css`.

#### Domain 2 — Self-Improvement palette (Hot pink · Blush · Deep purple)

| Role | Value | Use |
| --- | --- | --- |
| Accent primary | Hot pink `#E55381` | Hero left panel, labels, CTA buttons, dot markers |
| Accent light | Blush `#EFA9AE` | Stat numbers on dark backgrounds |
| Accent deep | Deep pink `#C23368` | Hover states, emphasis text, footer links |
| Surface base | Warm blush `#F5F0F1` | Default body background |
| Surface inverse | Deep purple `#190828` | Stats strip, footer |

Full token definitions in `tokens/themes/selfimprovement.css`.

#### Shared base primitives

All components use **semantic aliases** (`--accent-primary`, `--surface-base`, etc.) — never the raw primitives directly. Theme files override the semantic layer per domain.

**Rules:**
- Never hardcode primitive hex values in new components — always use semantic tokens
- Never use pure `#FFFFFF` — always `--surface-white` for warmth
- No bright gradients, no neon, no cool-toned shadows

### How to apply a domain theme

```html
<link rel="stylesheet" href="/styles.css">
<!-- Then ONE of: -->
<link rel="stylesheet" href="/tokens/themes/selfimprovement.css">
<link rel="stylesheet" href="/tokens/themes/consultancy.css">
```

---

### Typography

**Display serif:** Fraunces — variable optical-size serif (opsz 9–144). Soft, literary, editorial. Use at weight 200–300. Italic variant signals emphasis — never bold headlines.

**Body/UI sans:** Outfit — geometric, clean, open forms. Weights 300–600.

#### Type hierarchy rules

- Headline tracking: `-0.02em` at display sizes
- Section labels (Eyebrow): `10px`, `letter-spacing: 0.25em`, `font-weight: 500`, `text-transform: uppercase`
- Body text: `14px`, `font-weight: 300`, `line-height: 1.9` — slow, calm reading pace
- Button labels: `12px`, `font-weight: 500`, `letter-spacing: 0.12em`
- Price/stat numbers: Fraunces, `font-weight: 300` — editorial, never bold

Full scale in `tokens/typography.css`.

---

### Section Rhythm

Sections alternate between surfaces. The pattern differs by domain but follows the same principle: dark inverse for authority moments (hero, stats, CTA), light surfaces for content, accent surfaces for emotional punctuation.

**Landing Page rhythm:**
1. **Deep slate** `#2a2c31` — hero with portrait
2. **Warm ivory** `#fbf4e6` — two-domain cards
3. **Deep slate** `#2a2c31` — about section (cream card inset)
4. **Warm ivory** `#fbf4e6` — philosophy quote
5. **Dark** `#303335` — footer

**Domain 2 (Self-Improvement) rhythm:**
1. **Accent left + Subtle right** — split hero
2. **Inverse** — stats strip
3. **Base** — what you get (product cards)
4. **Accent** — pull quote
5. **Subtle** — creator section
6. **Muted** — CTA block
7. **Inverse** — footer

**Domain 1 (Consultancy) rhythm:**
1. **Inverse** — full-width hero
2. **Base** — services grid
3. **Subtle** — approach + quote
4. **Base** — about / creator
5. **Inverse** — CTA + footer

---

### Borders

- All borders: `0.5px` (hairline — never `1px` for non-interactive states)
- Accent-tinted: `rgba(accent, 0.15–0.5)` depending on emphasis context
- On dark (inverse bg): `rgba(surface-white, 0.06)` — almost invisible
- On hover: border-color shifts toward `--accent-primary`

### Shadows

- Always warm-toned
- `--shadow-sm: 0 1px 8px rgba(45,45,45,0.05)` — subtle lift
- `--shadow-md: 0 1px 24px rgba(45,45,45,0.07)` — nav on scroll
- `--shadow-warm: 0 4px 24px rgba(160,85,85,0.08)` — warm hover state
- Never heavy `box-shadow`, never cool-toned

### Border Radius

**Almost none.** This is editorial design, not product UI.

- Buttons, cards, inputs: `border-radius: 0` — sharp, square
- Decorative dots only: `border-radius: 50%`
- Maximum allowed: `2px` (rarely)

### Motion and Animation

**Scroll reveal:** `opacity 0→1` + directional translate (`Y: 28px` or `X: ±32px`) over `0.7–0.8s ease`. Staggered by `0.1–0.4s` delays.

**Hover feedback:**
- Primary button: background transitions → accent-deep
- Ghost button: border fills accent, text turns white
- Cards: `translateY(-3px)` lift + border shifts to `--accent-primary`
- Marker dots: fill from transparent → accent
- Arrow glyphs: `translateX(4px)`

**Never use:** Bounces, springs, dramatic scale effects, looping decorative animations, blur transitions on content.

### Imagery

- Personal photography only — no stock
- Warm filter: `filter: sepia(5%) contrast(1.02)`
- Offset frame technique: secondary border element offset by `+12px`, `0.5px solid var(--border-strong)`
- Portrait stored at: `assets/portrait.png`
- No illustrations, mascots, or icon-based imagery

---

## Iconography

The brand uses **no icon library.** Visual indicators are achieved through:

- **`→`** Unicode U+2192 — button directional cues
- **CSS geometric squares** — 32×32px accent square with centered 10×10px white square (dot marker on product cards and format indicators)
- **CSS circles** — 8px, `border-radius: 50%`, accent border, fills on hover (step list indicators)
- **Inline SVG** — 16px stroke chevron, `stroke-width: 1.5`, for back-to-top only

**For future functional icon needs** (checkmarks, lock icons, etc.), use [Lucide Icons](https://lucide.dev/) from CDN:
- Stroke weight: `1.5px`
- Sizes: `16px` inline / `20px` standalone
- Colors: `var(--text-secondary)` default, `var(--accent-primary)` for accent

---

## Templates

Templates are the primary starting points for new pages. Each template is a Design Component (`.dc.html`) that loads the full design system.

| Template | Domain | Use for |
| --- | --- | --- |
| `templates/landing-page/LandingPage.dc.html` | Both | Cvetanichin homepage — brand overview |
| `templates/consultancy-page/ConsultancyPage.dc.html` | Domain 1 | Any new consultancy service or offering page |
| `templates/self-improvement-page/SelfImprovementPage.dc.html` | Domain 2 | Every new digital product sales page |

### Navigation link mesh

All templates are fully cross-linked:

| Page | Wordmark links to | Nav links to | Footer links to |
| --- | --- | --- | --- |
| Landing Page | Self (homepage) | Consultancy · Self-Improvement | Consultancy · Self-Improvement · Gumroad Shop ↗ |
| Consultancy Page | Landing Page | Self-Improvement | Landing Page · Self-Improvement |
| Self-Improvement Page | Landing Page | CSO Consultancy | Landing Page · Consultancy · Gumroad ↗ |

### Creating a new Domain 2 product page

1. Duplicate `templates/self-improvement-page/` into a new folder
2. Replace product name, headline, description, section outputs, price, and CTA copy
3. Swap the product cover placeholder for real product imagery
4. Update the Gumroad link to the new product URL
5. Do not alter layout structure, colour theme, or component choices

### Creating a new Domain 1 service page

1. Duplicate `templates/consultancy-page/` into a new folder
2. Replace service names, descriptions, approach copy, and CTA
3. Update the about section with relevant context
4. Do not alter layout structure or colour theme

---

## Components

Components are domain-agnostic — they read semantic tokens and adapt to whichever theme is loaded.

| Component | Location | Description |
| --- | --- | --- |
| `Button` | `components/forms/` | Primary / accent / outline / ghost. Sizes: sm, md, lg. Optional arrow. |
| `Input` | `components/forms/` | Email/text field with label + error states |
| `Badge` | `components/content/` | Label chip — rose / muted / on-dark tones |
| `Eyebrow` | `components/content/` | Small-caps section label — muted / rose / on-dark |
| `Divider` | `components/content/` | Gradient horizontal rule |
| `Quote` | `components/sections/` | Pull quote — accent / plain / inset variants |
| `StatRow` | `components/sections/` | Horizontal stats strip — dark / light |
| `FeatureItem` | `components/sections/` | Numbered card or step-row variant |
| `ProductCard` | `components/sections/` | White card with dot marker |
| `CTABlock` | `components/sections/` | Full-width CTA section with button |

---

## File Index

```
/
├── styles.css                              Global CSS entry point — @import list only
├── readme.md                               This file
├── SKILL.md                                Claude Code / agent skill descriptor
│
├── tokens/
│   ├── fonts.css                           Google Fonts CDN import (Fraunces + Outfit)
│   ├── colors.css                          Base colour primitives + semantic aliases
│   ├── typography.css                      Font families, scale, weights, leading
│   ├── spacing.css                         4px-grid scale + section rhythm tokens
│   ├── effects.css                         Radius, borders, shadows, transitions
│   └── themes/
│       ├── selfimprovement.css             Domain 2 — hot pink · blush · deep purple
│       └── consultancy.css                 Domain 1 — gold · stone · slate
│
├── components/
│   ├── content/
│   │   ├── Badge.jsx + .d.ts               Label chip (rose / muted / on-dark)
│   │   ├── Eyebrow.jsx + .d.ts             Small-caps section eyebrow label
│   │   ├── Divider.jsx + .d.ts             Gradient rose horizontal rule
│   │   └── content.card.html               @dsCard — Labels, Badges & Dividers
│   │
│   ├── forms/
│   │   ├── Button.jsx + .d.ts              Primary / accent / outline / ghost button
│   │   ├── Input.jsx + .d.ts               Email/text field with label + error states
│   │   └── forms.card.html                 @dsCard — Buttons & Inputs
│   │
│   └── sections/
│       ├── Quote.jsx + .d.ts               Pull quote (accent / plain / inset)
│       ├── StatRow.jsx + .d.ts             Horizontal stats strip (dark / light)
│       ├── FeatureItem.jsx + .d.ts         Numbered card or step-row variant
│       ├── ProductCard.jsx + .d.ts         White card with dot marker
│       ├── CTABlock.jsx + .d.ts            Full-width CTA section with button
│       └── sections.card.html              @dsCard — Sections: Quote, Stats, Cards, CTA
│
├── guidelines/                             @dsCard foundation cards
│   ├── brand-wordmark.card.html            Brand — wordmark rendering rules
│   ├── color-rose.card.html                Colors — rose accent palette
│   ├── color-ivory.card.html               Colors — ivory surface palette
│   ├── color-charcoal.card.html            Colors — charcoal text palette
│   ├── color-pairings.card.html            Colors — approved surface pairings
│   ├── color-domains.card.html             Colors — two-domain theme comparison
│   ├── type-serif.card.html                Type — Fraunces display specimens
│   ├── type-sans.card.html                 Type — Outfit body/UI specimens
│   ├── type-scale.card.html                Type — full scale reference
│   ├── spacing-scale.card.html             Spacing — token scale
│   ├── radius-borders.card.html            Spacing — radius + border tokens
│   ├── shadows.card.html                   Spacing — shadow tokens
│   ├── motion.card.html                    Spacing — transition + motion tokens
│   ├── section-rhythm.card.html            Spacing — section alternation pattern
│   └── voice.card.html                     Brand — copy do / don't
│
├── templates/
│   ├── landing-page/
│   │   ├── LandingPage.dc.html             Both domains — brand overview homepage
│   │   └── ds-base.js                      Loads styles + SI theme + DS bundle
│   ├── consultancy-page/
│   │   ├── ConsultancyPage.dc.html         Domain 1 — service landing page
│   │   └── ds-base.js                      Loads styles + consultancy theme + DS bundle
│   └── self-improvement-page/
│       ├── SelfImprovementPage.dc.html     Domain 2 — digital product sales page
│       └── ds-base.js                      Loads styles + SI theme + DS bundle
│
└── assets/
    ├── portrait.png                        Creator portrait — Vaska Cvetanoska
    └── README.md                           Asset inventory + placement guide
```

---

## Published products — quick reference

| Product | Domain | Price | Format | Gumroad URL |
| --- | --- | --- | --- | --- |
| The First Offer Kit | D2 Self-Improvement | €37 | PDF | https://cvetanichin.gumroad.com/l/ai-income-starter-kit |
| Clarity-to-Action OS | D2 Self-Improvement | €79 | .docx | https://cvetanichin.gumroad.com/l/clarity-to-action |
