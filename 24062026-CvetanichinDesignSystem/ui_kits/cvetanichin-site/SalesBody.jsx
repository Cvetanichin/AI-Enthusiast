/* Cvetanichin sales-site — the body sections below the hero. */
const {
  Eyebrow, Divider, StatRow, Quote, ProductCard, FeatureItem, CTABlock,
} = window.CvetanichinDesignSystem_f4419f;

function SalesBody({ onCta }) {
  return (
    <React.Fragment>
      <StatRow items={[
        { value: '4', label: 'Sections' },
        { value: '14', label: 'Days to launch' },
        { value: '5', label: 'Ready-to-use tools' },
        { value: '€37', label: 'One-time' },
      ]} />

      <Divider />

      {/* WHO THIS IS FOR */}
      <section className="sec sec--for">
        <div>
          <Eyebrow tone="rose">Who this is for</Eyebrow>
          <h2 className="sec__heading">For women rebuilding<br />on their own terms</h2>
        </div>
        <div className="for__body">
          <p className="for__para">You paused your career — for a child, for a parent, after burnout, after a move — and you are now rebuilding. You have real skills and knowledge. You have never packaged or sold anything online.</p>
          <p className="for__highlight">You are skeptical of promises and cautious with money. This kit was built for exactly that person.</p>
          <p className="for__para">You do not need more preparation. You need a clear path. This kit is designed for one type of person and works because it is not trying to serve everyone.</p>
        </div>
      </section>

      {/* WHAT YOU WILL HAVE */}
      <section className="sec sec--what">
        <div className="what__header">
          <Eyebrow tone="rose-light">What you will have</Eyebrow>
          <h2 className="sec__heading sec__heading--light">Four outputs. Two weeks.<br />One product live.</h2>
        </div>
        <div className="what__grid">
          <FeatureItem number="01" title="A defined offer" description="What you are selling, who it is for, and exactly what result they get — in one clear sentence." />
          <FeatureItem number="02" title="A digital product" description="Built with AI in 3–5 focused sessions. A PDF guide, template pack, or mini toolkit." />
          <FeatureItem number="03" title="A sales page live" description="Written, designed, and published on Gumroad or Payhip in under one hour." />
          <FeatureItem number="04" title="Your first-sale plan" description="Five personal messages that outperform any public launch post. Every time." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec sec--steps">
        <Eyebrow tone="rose">How it works</Eyebrow>
        <h2 className="sec__heading" style={{ marginTop: '1rem' }}>One section per day.<br />Fourteen days. Done.</h2>
        <div className="steps">
          <FeatureItem variant="step" number="Section 1" title="Identify what you already have" description="A 10-minute audit surfaces sellable knowledge from lived transformation, professional expertise, or curation skill. You end with one offer sentence." />
          <FeatureItem variant="step" number="Section 2" title="Scope your first digital product" description="Apply the one-result rule. Choose a format. Price it honestly at €37–€57. Write three buyer outcomes that become your sales page." />
          <FeatureItem variant="step" number="Section 3" title="Build it with AI in five steps" description="Outline → draft → refine → title → sales page. Claude does the heavy drafting. You edit until it sounds like a real person wrote it." />
          <FeatureItem variant="step" number="Section 4" title="Sell it simply, without a website" description="List on Gumroad or Payhip. Write five personal outreach messages. Send them before any public post. Your first buyers already trust you." />
        </div>
      </section>

      {/* QUOTE */}
      <Quote attribution="The First Offer Kit, Section 1">
        People do not pay for experts. They pay for someone who is a few steps ahead of them, who has solved a problem they are currently stuck on, and who can explain it in a way that makes sense. That is not expertise. That is experience. You have experience.
      </Quote>

      {/* CREATOR */}
      <section className="sec sec--creator">
        <div className="creator__img-wrap">
          <div className="creator__img" role="img" aria-label="Portrait of Vaska Cvetanoska">
            <span className="creator__img-note">Portrait</span>
          </div>
          <div className="creator__frame" aria-hidden="true"></div>
        </div>
        <div className="creator__content">
          <Eyebrow tone="rose">Who made this</Eyebrow>
          <h2 className="creator__name">Vaska<br /><em>Cvetanoska</em></h2>
          <div className="creator__bio">
            <p>I built this kit because I was the woman it is designed for. I had the skills, the experience, and the quiet certainty that I had something worth selling — and I had no idea how to package it, price it, or get it in front of anyone.</p>
            <p>I figured it out. It was slower and messier than it needed to be. This kit is what I wish I had started with.</p>
          </div>
          <Divider variant="hair" />
          <span className="creator__tagline">Cvetanichin · Digital products for women who are ready</span>
        </div>
      </section>

      {/* FORMATS */}
      <section className="sec sec--formats">
        <Eyebrow tone="rose">Product formats covered</Eyebrow>
        <h2 className="sec__heading" style={{ marginTop: '1rem' }}>Choose what you can finish</h2>
        <div className="formats__grid">
          <ProductCard title="PDF Guide" description="15–30 pages, step-by-step process. Quickest to create. Easiest to price and deliver." />
          <ProductCard title="Template Pack" description="Ready-to-use files your buyer adapts. Very high perceived value for the time it takes to build." />
          <ProductCard title="Mini Toolkit" description="PDF guide plus one or two templates. Best of both: strong perceived value, fast to build." />
          <ProductCard title="Email Mini-Course" description="5–7 emails over one to two weeks. Good for topics that benefit from spacing and repetition." />
        </div>
      </section>

      {/* CTA */}
      <div id="cta">
        <CTABlock
          heading="Stop<br>preparing.<br><em>Start earning.</em>"
          price="€37"
          priceDetail={<>One-time payment<br />Standard price €57</>}
          ctaLabel="Get instant access for €37"
          ctaHref=""
          onCta={onCta}
          reassurances={[
            'Delivered instantly as a PDF. No complicated setup.',
            'One section per day. Product live within two weeks.',
            'Built for women rebuilding on their own terms.',
          ]}
        />
      </div>

      <footer className="site-footer">
        <span className="site-footer__brand">Cvetanichin</span>
        <span className="site-footer__copy">© 2026 Cvetanichin. All rights reserved.</span>
      </footer>
    </React.Fragment>
  );
}
window.SalesBody = SalesBody;
