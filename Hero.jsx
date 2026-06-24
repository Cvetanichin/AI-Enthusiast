/* Cvetanichin sales-site — hero (rose / ivory split). */
const { Eyebrow, Button } = window.CvetanichinDesignSystem_f4419f;

function Hero({ onCta }) {
  return (
    <section className="hero">
      <div className="hero__left">
        <Eyebrow tone="on-dark">A Cvetanichin Digital Product</Eyebrow>
        <div className="hero__title-wrap">
          <h1 className="hero__title">The First<br /><em>Offer Kit</em></h1>
          <p className="hero__title-sub">Build and sell your first digital product this month — using AI to do the heavy lifting.</p>
        </div>
      </div>
      <div className="hero__right">
        <p className="hero__tagline">You already have everything you need. What you are missing is a clear, simple path.</p>
        <p className="hero__body">No course. No audience required. No complicated setup. One calm, practical kit — four sections, five ready-to-use tools, fourteen days.</p>
        <div className="hero__price-row">
          <span className="hero__price">€37</span>
          <span className="hero__price-note">One-time payment<br />Instant PDF delivery</span>
        </div>
        <Button variant="primary" arrow onClick={onCta}>Get instant access</Button>
      </div>
    </section>
  );
}
window.Hero = Hero;
