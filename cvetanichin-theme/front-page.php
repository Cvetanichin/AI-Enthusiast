<?php
/**
 * Cvetanichin — Homepage
 * Static front page. Set in Settings > Reading.
 */
get_header();

// Hero section
get_template_part( 'template-parts/sections/hero' );
?>

<!-- Two-domain cards -->
<section class="section section--subtle">
  <div class="container">
    <div class="grid-2">

      <div class="card reveal">
        <span class="eyebrow"><?php esc_html_e( 'Domain 01', 'cvetanichin' ); ?></span>
        <h2 style="font-size:var(--cvet-text-3xl);margin-bottom:14px;"><?php esc_html_e( 'CSO Consultancy', 'cvetanichin' ); ?></h2>
        <p class="card__body"><?php echo esc_html( get_theme_mod( 'domain1_description', 'Strategic leadership for organisations ready to move. Fractional CSO, Strategy Intensives, Advisory Retainer.' ) ); ?></p>
        <a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="btn btn--ghost" style="margin-top:24px;">
          <?php esc_html_e( 'View services', 'cvetanichin' ); ?> <span class="btn__arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="card reveal" data-delay="2">
        <span class="eyebrow"><?php esc_html_e( 'Domain 02', 'cvetanichin' ); ?></span>
        <h2 style="font-size:var(--cvet-text-3xl);margin-bottom:14px;"><?php esc_html_e( 'Self-Improvement', 'cvetanichin' ); ?></h2>
        <p class="card__body"><?php echo esc_html( get_theme_mod( 'domain2_description', 'Digital products for professional growth. Prompt packs, workbooks, AI tools, and starter kits.' ) ); ?></p>
        <a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="btn btn--ghost" style="margin-top:24px;">
          <?php esc_html_e( 'Browse products', 'cvetanichin' ); ?> <span class="btn__arrow" aria-hidden="true">&rarr;</span>
        </a>
      </div>

    </div>
  </div>
</section>

<!-- Philosophy quote -->
<?php get_template_part( 'template-parts/sections/pull-quote' ); ?>

<!-- CTA block -->
<?php get_template_part( 'template-parts/sections/cta-block' ); ?>

<?php get_footer(); ?>
