<?php
/**
 * Template Name: Services
 * Domain 1 — CSO Consultancy services page.
 */
get_header();

get_template_part('template-parts/sections/hero');
?>

<section class="section">
  <div class="container">
    <p class="eyebrow reveal"><?php esc_html_e( 'Engagement Formats', 'cvetanichin' ); ?></p>
    <div class="grid-3" style="margin-top:40px;">

      <div class="card reveal" data-delay="1">
        <div class="card__dot" aria-hidden="true"></div>
        <h3 class="card__title"><?php esc_html_e( 'Fractional CSO', 'cvetanichin' ); ?></h3>
        <p class="card__body"><?php esc_html_e( 'Ongoing embedded strategic presence. Monthly retained engagement with deep organisational context.', 'cvetanichin' ); ?></p>
      </div>

      <div class="card reveal" data-delay="2">
        <div class="card__dot" aria-hidden="true"></div>
        <h3 class="card__title"><?php esc_html_e( 'Strategy Intensive', 'cvetanichin' ); ?></h3>
        <p class="card__body"><?php esc_html_e( 'Focused three-day engagement around a single high-stakes decision. Clear output. No follow-on commitment required.', 'cvetanichin' ); ?></p>
      </div>

      <div class="card reveal" data-delay="3">
        <div class="card__dot" aria-hidden="true"></div>
        <h3 class="card__title"><?php esc_html_e( 'Advisory Retainer', 'cvetanichin' ); ?></h3>
        <p class="card__body"><?php esc_html_e( 'Monthly retained access for critical moments. Senior strategic input without full-time commitment.', 'cvetanichin' ); ?></p>
      </div>

    </div>
  </div>
</section>

<section class="section section--subtle">
  <div class="container">
    <div style="max-width:680px;">
      <p class="eyebrow reveal"><?php esc_html_e( 'The Approach', 'cvetanichin' ); ?></p>
      <div class="entry-content">
        <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
      </div>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/sections/pull-quote'); ?>
<?php get_template_part('template-parts/sections/cta-block'); ?>
<?php get_footer(); ?>
