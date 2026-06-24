<?php
/**
 * Cvetanichin — Default Page Template
 */
get_header();

// ACF hero if fields are set
if ( function_exists( 'get_field' ) && get_field( 'hero_headline' ) ) :
  get_template_part( 'template-parts/sections/hero' );
endif;
?>

<section class="section">
  <div class="container">
    <?php while ( have_posts() ) : the_post(); ?>
      <div class="entry-content">
        <?php the_content(); ?>
      </div>
    <?php endwhile; ?>
  </div>
</section>

<?php get_footer(); ?>
