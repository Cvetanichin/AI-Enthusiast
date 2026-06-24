<?php
/**
 * Cvetanichin — Fallback Template
 * WordPress requires this file. Handles any unmatched request.
 */
get_header();
?>
<div class="container section">
  <?php if ( have_posts() ) : ?>
    <div class="post-list">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'template-parts/content/content', get_post_type() ); ?>
      <?php endwhile; ?>
    </div>
    <?php the_posts_pagination( [ 'class' => 'pagination' ] ); ?>
  <?php else : ?>
    <?php get_template_part( 'template-parts/content/content', 'none' ); ?>
  <?php endif; ?>
</div>
<?php get_footer(); ?>
