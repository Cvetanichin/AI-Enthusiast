<?php
/**
 * Cvetanichin — Search Results
 */
get_header();
?>
<header class="section section--inverse" style="padding-block:80px;">
  <div class="container">
    <p class="eyebrow"><?php esc_html_e( 'Search Results', 'cvetanichin' ); ?></p>
    <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-5xl);line-height:1.05;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0;">
      <?php
        printf(
          /* translators: %s: search query */
          esc_html__( 'Results for "%s"', 'cvetanichin' ),
          '<em>' . esc_html( get_search_query() ) . '</em>'
        );
      ?>
    </h1>
  </div>
</header>

<section class="section">
  <div class="container">
    <?php if ( have_posts() ) : ?>
      <p style="font-size:var(--cvet-text-sm);color:var(--cvet-text-muted);margin-bottom:40px;">
        <?php printf( esc_html( _n( '%d result', '%d results', (int) $wp_query->found_posts, 'cvetanichin' ) ), (int) $wp_query->found_posts ); ?>
      </p>
      <div class="post-list">
        <?php while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'template-parts/content/content', 'post' ); ?>
        <?php endwhile; ?>
      </div>
      <?php the_posts_pagination( [ 'class' => 'pagination' ] ); ?>
    <?php else : ?>
      <?php get_template_part( 'template-parts/content/content', 'none' ); ?>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
