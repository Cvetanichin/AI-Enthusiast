The closing offer section: large serif heading on the left, price + primary button + reassurance lines on the right. Reassuring, never urgent — no countdowns, no scarcity.

```jsx
<CTABlock
  heading="Stop<br>preparing.<br><em>Start earning.</em>"
  price="€37"
  priceDetail={<>One-time payment<br/>Standard price €57</>}
  ctaLabel="Get instant access for €37"
  ctaHref="https://gumroad.com/..."
  reassurances={[
    'Delivered instantly as a PDF. No complicated setup.',
    'One section per day. Product live within two weeks.',
  ]} />
```

`heading` accepts an HTML string (so you can italicize emphasis with `<em>`) or a node. Use `layout="stack"` for narrow / PDF contexts. Composes the `Button` primitive — don't rebuild it.
