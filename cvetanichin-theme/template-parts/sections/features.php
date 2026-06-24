<?php
/**
 * Section: Numbered Feature Cards
 * Reads product_outputs repeater from ACF.
 */
$outputs = function_exists( 'get_field' ) ? get_field( 'product_outputs' ) : [];
if ( empty( $outputs ) ) return;
?>
<section class="section">
  <div class="container">
    <p class="eyebrow reveal"><?php esc_html_e( 'What you get', 'cvetanichin' ); ?></p>
    <div class="grid-2" style="margin-top:40px;">
      <?php foreach ( $outputs as $i => $output ) : ?>
        <div class="card reveal" data-delay="<?php echo esc_attr( min( 4, $i + 1 ) ); ?>">
          <div class="card__number"><?php echo esc_html( $output['number'] ); ?></div>
          <h3 class="card__title"><?php echo esc_html( $output['title'] ); ?></h3>
          <p class="card__body"><?php echo esc_html( $output['description'] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
