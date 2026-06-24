A quiet, confident form field for checkout, offer, and lead-magnet pages — uppercase rose label, warm hairline that focuses softly. Supports input, textarea, and select.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" hint="Instant PDF delivery." />
<Input label="Notes" as="textarea" placeholder="Anything we should know?" />
<Input label="Format" as="select" options={['PDF Guide','Template Pack','Mini Toolkit']} />
```

Set `error` to turn the border and hint deep rose. Never use bright validation colors — error is communicated in the brand's own rose.
