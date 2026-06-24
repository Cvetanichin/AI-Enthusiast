<?php
/**
 * Template Name: Legal
 * Privacy Policy, Terms of Service — long-form prose, constrained width.
 */
get_header();
?>
<section class="section section--subtle" style="padding-block:64px;">
  <div class="container">
    <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-5xl);margin-bottom:8px;"><?php the_title(); ?></h1>
    <p style="font-size:var(--cvet-text-sm);color:var(--cvet-text-muted);">
      <?php printf( esc_html__( 'Last updated: %s', 'cvetanichin' ), esc_html( get_the_modified_date() ) ); ?>
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="entry-content" style="max-width:680px;">
      <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>
