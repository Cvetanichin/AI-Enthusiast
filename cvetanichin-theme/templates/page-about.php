<?php
/**
 * Template Name: About
 * About page — portrait, bio, philosophy.
 */
get_header();
?>
<section class="section section--inverse" style="padding-block:80px;">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
      <div>
        <p class="eyebrow" style="color:var(--cvet-accent-light);"><?php esc_html_e( 'About', 'cvetanichin' ); ?></p>
        <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-display);line-height:1.0;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0 0 24px;">
          <?php the_title(); ?>
        </h1>
        <?php
          $bio = function_exists('get_field') ? get_field('hero_body') : '';
          if ($bio) : ?>
          <p style="font-size:var(--cvet-text-md);font-weight:300;color:rgba(250,249,246,0.65);line-height:var(--cvet-leading-loose);max-width:440px;"><?php echo esc_html( $bio ); ?></p>
        <?php endif; ?>
      </div>
      <?php
        $portrait_id = get_theme_mod('about_portrait_id');
        if ($portrait_id) : ?>
        <div style="position:relative;">
          <?php echo wp_get_attachment_image( $portrait_id, 'cvet-portrait', false, [
            'class'   => 'hero__portrait',
            'loading' => 'eager',
            'alt'     => 'Vaska Cvetanoska',
          ]); ?>
          <div class="hero__frame" aria-hidden="true"></div>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="entry-content">
      <?php
        while (have_posts()) : the_post();
          the_content();
        endwhile;
      ?>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/sections/pull-quote'); ?>
<?php get_template_part('template-parts/sections/cta-block'); ?>
<?php get_footer(); ?>
