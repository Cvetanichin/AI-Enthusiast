<?php
/**
 * Section: Email Newsletter Capture
 * Uses WPForms shortcode. Form ID set in theme_mod.
 */
$form_id  = get_theme_mod( 'newsletter_form_id', '' );
$headline = get_theme_mod( 'newsletter_headline', 'Stay in the work.' );
$body     = get_theme_mod( 'newsletter_body',     'Notes on strategy, AI, and building things that last. No frequency promise. No noise.' );
?>
<section class="section section--subtle">
  <div class="container">
    <div style="max-width:520px;margin-inline:auto;text-align:center;">
      <p class="eyebrow"><?php esc_html_e( 'Newsletter', 'cvetanichin' ); ?></p>
      <h2 style="font-size:var(--cvet-text-3xl);margin-bottom:16px;"><?php echo esc_html( $headline ); ?></h2>
      <p style="font-size:var(--cvet-text-md);color:var(--cvet-text-secondary);margin-bottom:32px;"><?php echo esc_html( $body ); ?></p>
      <?php if ( $form_id && function_exists( 'wpforms_display' ) ) : ?>
        <?php wpforms_display( (int) $form_id ); ?>
      <?php else : ?>
        <p style="font-size:var(--cvet-text-sm);color:var(--cvet-text-muted);">
          <?php esc_html_e( 'Newsletter form: set WPForms ID in Appearance > Customize.', 'cvetanichin' ); ?>
        </p>
      <?php endif; ?>
    </div>
  </div>
</section>
