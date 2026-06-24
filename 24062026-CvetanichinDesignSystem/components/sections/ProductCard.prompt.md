A clean, understated card for product formats, offers, and feature tiles. Hairline border, optional rose square mark, gentle lift on hover.

```jsx
<ProductCard
  title="PDF Guide"
  description="15–30 pages, step-by-step process. Quickest to create and deliver." />

<ProductCard serifTitle eyebrow="Offer" title="The First Offer Kit"
  description="Build and sell your first digital product this month."
  price="€37" priceNote="One-time" />
```

Props: `eyebrow`, `title`, `description`, `price`/`priceNote` (serif footer), `mark` (rose square, on by default), `serifTitle` for offer cards, `warm` for ivory fill, `as="a"` to make the whole card a link. Keep descriptions to one or two lines.
