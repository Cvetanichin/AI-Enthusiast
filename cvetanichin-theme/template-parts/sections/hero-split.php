<?php
/**
 * Section: Split Hero (Domain 2 — product pages)
 * Left: accent colour panel with eyebrow + headline.
 * Right: body text + price + CTA.
 */
$eyebrow   = function_exists( 'get_field' ) ? get_field( 'hero_eyebrow' )   : '';
$headline  = function_exists( 'get_field' ) ? get_field( 'hero_headline' )  : get_the_title();
$body      = function_exists( 'get_field' ) ? get_field( 'hero_body' )      : '';
$price     = function_exists( 'get_field' ) ? get_field( 'product_price' )  : '';
$format    = function_exists( 'get_field' ) ? get_field( 'product_format' ) : '';
$cta_label = function_exists( 'get_field' ) ? get_field( 'product_cta_label' ) : 'GET INSTANT ACCESS';
$cta_url   = function_exists( 'get_field' ) ? get_field( 'product_cta_url' )   : '#';
?>
<section class="hero hero--split" aria-label="<?php esc_attr_e( 'Product hero', 'cvetanichin' ); ?>">
  <div class="hero__inner">

    <div class="hero__accent-col">
      <?php if ( $eyebrow ) : ?>
        <span class="hero__eyebrow" style="color:var(--cvet-surface-white);opacity:.75;"><?php echo esc_html( $eyebrow ); ?></span>
      <?php endif; ?>
      <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:clamp(32px,3.5vw,52px);line-height:1.05;letter-spacing:-0.02em;color:var(--cvet-surface-white);margin:0;">
        <?php echo esc_html( $headline ); ?>
      </h1>
    </div>

    <div class="hero__content-col">
      <?php if ( $body ) : ?>
        <p style="font-size:var(--cvet-text-md);font-weight:300;color:var(--cvet-text-secondary);line-height:var(--cvet-leading-loose);margin-bottom:32px;"><?php echo esc_html( $body ); ?></p>
      <?php endif; ?>

      <?php if ( $price ) : ?>
        <div style="margin-bottom:24px;">
          <span style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-4xl);color:var(--cvet-text-primary);line-height:1;">
            <?php echo esc_html( $price ); ?>
          </span>
          <?php if ( $format ) : ?>
            <span style="font-size:var(--cvet-text-xs);font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--cvet-text-muted);display:block;margin-top:6px;">
              <?php echo esc_html( $format ); ?>
            </span>
          <?php endif; ?>
        </div>
      <?php endif; ?>

      <a href="<?php echo esc_url( $cta_url ); ?>"
         class="btn btn--primary btn--lg"
         target="_blank" rel="noopener noreferrer">
        <?php echo esc_html( $cta_label ); ?>
        <span class="btn__arrow" aria-hidden="true">&rarr;</span>
      </a>

      <p style="font-size:11px;color:var(--cvet-text-muted);margin-top:14px;">
        <?php esc_html_e( 'Delivered instantly. No complicated setup.', 'cvetanichin' ); ?>
      </p>
    </div>

  </div>
</section>
