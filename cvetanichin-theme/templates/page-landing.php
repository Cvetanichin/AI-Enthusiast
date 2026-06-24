<?php
/**
 * Template Name: Landing Page
 * No header or footer chrome. Used for ad campaigns.
 * Domain 1 by default.
 */
get_header(); // header.php hides nav if hide_header ACF field is true
              // Set hide_header = true on any page using this template

get_template_part('template-parts/sections/hero');
get_template_part('template-parts/sections/stats-row');
get_template_part('template-parts/sections/features');

?>
<section class="section">
  <div class="container">
    <div class="entry-content">
      <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/sections/cta-block'); ?>
<?php get_footer(); ?>
