/* Cvetanichin — calm offer / checkout screen. */
const { Eyebrow, Badge, Button, Input, Divider } = window.CvetanichinDesignSystem_f4419f;

function Checkout({ onBack, onPaid }) {
  const [done, setDone] = React.useState(false);
  if (done) {
    return (
      <div className="checkout">
        <div className="checkout__confirm">
          <Eyebrow tone="rose">Order confirmed</Eyebrow>
          <h2 className="checkout__confirm-title">Check your inbox.<br /><em>Your kit is on its way.</em></h2>
          <p className="checkout__confirm-body">The First Offer Kit has been delivered as a PDF. Start with Section 1 today — a 10-minute audit, and you will end with one offer sentence.</p>
          <Button variant="outline" size="sm" onClick={onBack}>Back to the page</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="checkout">
      <button className="checkout__back" onClick={onBack}>← Back</button>
      <div className="checkout__grid">
        {/* Summary */}
        <aside className="checkout__summary">
          <Eyebrow tone="rose">Your order</Eyebrow>
          <h2 className="checkout__product">The First<br /><em>Offer Kit</em></h2>
          <p className="checkout__desc">Build and sell your first digital product this month. Four sections, five tools, fourteen days.</p>
          <Divider variant="hair" />
          <div className="checkout__line"><span>The First Offer Kit</span><span>€37</span></div>
          <div className="checkout__line checkout__line--muted"><span>Standard price</span><span className="checkout__strike">€57</span></div>
          <Divider variant="hair" />
          <div className="checkout__line checkout__total"><span>Total today</span><span>€37</span></div>
          <div className="checkout__badges">
            <Badge variant="outline" dot>Instant PDF delivery</Badge>
            <Badge variant="soft">One-time payment</Badge>
          </div>
        </aside>

        {/* Form */}
        <section className="checkout__form">
          <Eyebrow tone="rose">Secure checkout</Eyebrow>
          <h3 className="checkout__form-title">Where should we send it?</h3>
          <div className="checkout__fields">
            <Input label="Full name" placeholder="Vaska Cvetanoska" />
            <Input label="Email" type="email" placeholder="you@example.com" hint="Your PDF is delivered here instantly." />
            <Input label="Card" placeholder="1234  1234  1234  1234" />
            <div className="checkout__field-row">
              <Input label="Expiry" placeholder="MM / YY" />
              <Input label="CVC" placeholder="123" />
            </div>
            <Input label="Country" as="select" options={['North Macedonia', 'Germany', 'United Kingdom', 'United States', 'Other']} />
          </div>
          <Button variant="primary" arrow block onClick={() => { setDone(true); onPaid && onPaid(); }}>
            Pay €37 · Get instant access
          </Button>
          <div className="checkout__reassure">
            <span>Delivered instantly as a PDF. No complicated setup.</span>
            <span>Built for women rebuilding on their own terms.</span>
          </div>
        </section>
      </div>
    </div>
  );
}
window.Checkout = Checkout;
