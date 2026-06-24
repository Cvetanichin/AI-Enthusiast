<?php
/**
 * Section: Hero — Full Width (Domain 1 default)
 * ACF fields: hero_eyebrow, hero_headline, hero_body, hero_cta_label, hero_cta_url, hero_image
 */
$eyebrow   = function_exists( 'get_field' ) ? get_field( 'hero_eyebrow' )   : '';
$headline  = function_exists( 'get_field' ) ? get_field( 'hero_headline' )  : '';
$body      = function_exists( 'get_field' ) ? get_field( 'hero_body' )      : '';
$cta_label = function_exists( 'get_field' ) ? get_field( 'hero_cta_label' ) : '';
$cta_url   = function_exists( 'get_field' ) ? get_field( 'hero_cta_url' )   : '';
$image     = function_exists( 'get_field' ) ? get_field( 'hero_image' )     : null;

// Fallbacks from page title + excerpt
if ( ! $headline ) $headline = get_the_title();
?>
<section class="hero" aria-label="<?php esc_attr_e( 'Page hero', 'cvetanichin' ); ?>">
  <div class="hero__inner">
    <div class="hero__content">
      <?php if ( $eyebrow ) : ?>
        <span class="hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></span>
      <?php endif; ?>

      <h1 class="hero__headline"><?php echo esc_html( $headline ); ?></h1>

      <?php if ( $body ) : ?>
        <p class="hero__body"><?php echo esc_html( $body ); ?></p>
      <?php endif; ?>

      <?php if ( $cta_label && $cta_url ) : ?>
        <div class="hero__actions">
          <a href="<?php echo esc_url( $cta_url ); ?>" class="btn btn--primary btn--lg">
            <?php echo esc_html( $cta_label ); ?>
            <span class="btn__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      <?php endif; ?>
    </div>

    <?php if ( $image ) : ?>
      <div class="hero__frame-wrap">
        <img
          src="<?php echo esc_url( $image['sizes']['cvet-portrait'] ?? $image['url'] ); ?>"
          alt="<?php echo esc_attr( $image['alt'] ?? '' ); ?>"
          width="<?php echo esc_attr( $image['sizes']['cvet-portrait-width'] ?? $image['width'] ); ?>"
          height="<?php echo esc_attr( $image['sizes']['cvet-portrait-height'] ?? $image['height'] ); ?>"
          class="hero__portrait"
          loading="eager"
          decoding="async"
        >
        <div class="hero__frame" aria-hidden="true"></div>
      </div>
    <?php endif; ?>
  </div>
</section>
