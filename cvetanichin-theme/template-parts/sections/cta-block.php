<?php
/**
 * Section: Full-Width CTA Block
 * Reads from theme_mod or ACF options page.
 */
$headline = get_theme_mod( 'cta_headline', 'Ready to begin?' );
$body     = get_theme_mod( 'cta_body',     'Availability is limited. Engagements begin with a 30-minute diagnostic call &#8212; no commitment, no pitch.' );
$label    = get_theme_mod( 'cta_label',    'Book a call' );
$url      = get_theme_mod( 'cta_url',      home_url( '/contact/' ) );
?>
<section class="cta-block" aria-label="<?php esc_attr_e( 'Call to action', 'cvetanichin' ); ?>">
  <div class="cta-block__inner">
    <p class="eyebrow" style="color:var(--cvet-accent-light);"><?php esc_html_e( 'Next step', 'cvetanichin' ); ?></p>
    <h2 class="cta-block__headline reveal"><?php echo esc_html( $headline ); ?></h2>
    <p class="cta-block__body reveal" data-delay="1"><?php echo wp_kses_post( $body ); ?></p>
    <div class="cta-block__actions reveal" data-delay="2">
      <a href="<?php echo esc_url( $url ); ?>" class="btn btn--primary btn--lg">
        <?php echo esc_html( $label ); ?>
        <span class="btn__arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <p style="font-size:11px;color:rgba(250,249,246,0.35);margin-top:20px;">
      <?php esc_html_e( 'Response within 48 hours.', 'cvetanichin' ); ?>
    </p>
  </div>
</section>
