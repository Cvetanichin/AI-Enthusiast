# Cvetanichin Project Instructions

## Creator portrait
Always use `uploads/ai-persona.png` as the creator/author portrait in all products, sales pages, and designs. The portrait frame style is: `aspect-ratio: 4/5`, `object-fit: cover`, `object-position: center top`, with a 0.5px border and an offset shadow-border div (top:12px left:12px right:-12px bottom:-12px, 0.5px solid var(--border-strong)).

## Brand
- Brand name: CVETANICHIN (all caps in nav/footer wordmark)
- Creator: Vaska Cvetanoska
- Domain: cvetanichin.org
- Currency: € (Euro)

## Design system
- Always load `ds-base.js` from the project root for all sales pages and products.
- Theme: self-improvement (selfimprovement.css). Copy it from the design system if missing.
- Typography: display font + body font from the design system tokens.
- Inline styles only — no stylesheet classes except @keyframes / @font-face / body resets in `<helmet><style>`.

## Sales page structure (standard for all Gumroad products)
1. Sticky nav — wordmark left, CTA button right
2. Split hero (2-col grid) — accent-surface left with headline + CTA, product cover/image right with price
3. Stats strip (inverse surface) — key numbers
4. Feature/stages section (white cards, 4-col grid)
5. Pull quote (accent variant)
6. What's inside (2-col: heading left, feature list right)
7. Who it's for / who it isn't (2-col)
8. FAQ (sticky label left, 2/3 right)
9. Creator section (portrait left, bio right) — always use ai-persona.png
10. CTA block (2-col: headline left, price + button right)
11. Footer (inverse surface)
