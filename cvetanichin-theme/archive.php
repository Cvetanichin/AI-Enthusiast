<?php
/**
 * Cvetanichin — Archive (Blog + Product CPT)
 */
get_header();

$is_product_archive = is_post_type_archive( 'product' );
?>

<header class="section section--inverse" style="padding-block:80px;">
  <div class="container">
    <p class="eyebrow">
      <?php echo $is_product_archive
        ? esc_html__( 'Digital Products', 'cvetanichin' )
        : esc_html__( 'Writing', 'cvetanichin' ); ?>
    </p>
    <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-display);line-height:1.0;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0;">
      <?php the_archive_title(); ?>
    </h1>
  </div>
</header>

<section class="section">
  <div class="container">
    <?php if ( have_posts() ) : ?>

      <?php if ( $is_product_archive ) : ?>
        <div class="grid-3">
          <?php while ( have_posts() ) : the_post(); ?>
            <?php get_template_part( 'template-parts/content/content', 'product' ); ?>
          <?php endwhile; ?>
        </div>

      <?php else : ?>
        <div style="display:grid;grid-template-columns:1fr 280px;gap:64px;align-items:start;">
          <div class="post-list">
            <?php while ( have_posts() ) : the_post(); ?>
              <?php get_template_part( 'template-parts/content/content', 'post' ); ?>
            <?php endwhile; ?>
          </div>
          <?php if ( is_active_sidebar( 'sidebar-blog' ) ) : ?>
            <aside class="sidebar" role="complementary" aria-label="<?php esc_attr_e( 'Blog Sidebar', 'cvetanichin' ); ?>">
              <?php dynamic_sidebar( 'sidebar-blog' ); ?>
            </aside>
          <?php endif; ?>
        </div>
      <?php endif; ?>

      <?php the_posts_pagination( [ 'class' => 'pagination' ] ); ?>

    <?php else : ?>
      <?php get_template_part( 'template-parts/content/content', 'none' ); ?>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
