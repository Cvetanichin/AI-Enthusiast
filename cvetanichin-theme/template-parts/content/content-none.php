<?php
/**
 * Empty state — no posts found
 */
?>
<div style="padding:80px 0;text-align:center;">
  <p style="font-size:var(--cvet-text-xs);font-weight:500;letter-spacing:.25em;text-transform:uppercase;color:var(--cvet-text-muted);margin-bottom:16px;">
    <?php esc_html_e( 'Nothing here', 'cvetanichin' ); ?>
  </p>
  <h2 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-3xl);margin-bottom:24px;">
    <?php esc_html_e( 'No content found.', 'cvetanichin' ); ?>
  </h2>
  <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn--ghost">
    <?php esc_html_e( 'Return home', 'cvetanichin' ); ?> <span class="btn__arrow" aria-hidden="true">&rarr;</span>
  </a>
</div>
