<?php
/**
 * Cvetanichin — 404 Not Found
 */
get_header();
?>
<section class="error-404">
  <div style="text-align:center;">
    <span class="error-404__code">404</span>
    <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-3xl);margin:0 0 16px;"><?php esc_html_e( 'Page not found.', 'cvetanichin' ); ?></h1>
    <p style="font-size:var(--cvet-text-md);color:var(--cvet-text-secondary);max-width:420px;margin:0 auto 32px;"><?php esc_html_e( 'The page you are looking for does not exist or has moved. Try the homepage.', 'cvetanichin' ); ?></p>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn--primary">
      <?php esc_html_e( 'Return home', 'cvetanichin' ); ?> <span class="btn__arrow" aria-hidden="true">&rarr;</span>
    </a>
  </div>
</section>
<?php get_footer(); ?>
