<?php
/**
 * Cvetanichin — Single Post / Single Product
 */
get_header();

// Product CPT: full sales page layout
if ( is_singular( 'product' ) ) :
  get_template_part( 'template-parts/sections/hero-split' );
  get_template_part( 'template-parts/sections/stats-row' );
  get_template_part( 'template-parts/sections/features' );
  get_template_part( 'template-parts/sections/cta-block' );
  get_footer();
  return;
endif;

// Blog post
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'single-post' ); ?>>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="post-hero section section--inverse">
      <div class="container">
        <div class="post-hero__meta eyebrow">
          <?php echo esc_html( get_the_date() ); ?>
          &nbsp;&middot;&nbsp;
          <?php echo esc_html( cvet_reading_time() ); ?>
        </div>
        <h1 class="post-hero__title"
            style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-display);line-height:1.0;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0;">
          <?php the_title(); ?>
        </h1>
      </div>
    </div>
    <div class="container" style="padding-top:0;margin-top:-2px;">
      <?php the_post_thumbnail( 'cvet-hero', [ 'class' => 'post-hero__image', 'style' => 'width:100%;aspect-ratio:16/7;object-fit:cover;filter:sepia(5%) contrast(1.02);' ] ); ?>
    </div>
  <?php else : ?>
    <header class="section section--inverse">
      <div class="container">
        <p class="eyebrow"><?php echo esc_html( get_the_date() ); ?> &middot; <?php echo esc_html( cvet_reading_time() ); ?></p>
        <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-display);line-height:1.0;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0;">
          <?php the_title(); ?>
        </h1>
      </div>
    </header>
  <?php endif; ?>

  <div class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 280px;gap:64px;align-items:start;">
        <div class="entry-content">
          <?php the_content(); ?>
          <div style="margin-top:48px;padding-top:24px;border-top:0.5px solid var(--cvet-border-subtle);">
            <?php wp_link_pages(); ?>
          </div>
        </div>
        <?php if ( is_active_sidebar( 'sidebar-blog' ) ) : ?>
          <aside class="sidebar" role="complementary" aria-label="<?php esc_attr_e( 'Blog Sidebar', 'cvetanichin' ); ?>">
            <?php dynamic_sidebar( 'sidebar-blog' ); ?>
          </aside>
        <?php endif; ?>
      </div>
    </div>
  </div>

</article>
<?php get_footer(); ?>
