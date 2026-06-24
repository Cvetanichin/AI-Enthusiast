<?php
/**
 * Section: Stats Row
 * Reads product_stats repeater from ACF, or uses defaults.
 */
$stats = [];
if ( function_exists( 'get_field' ) ) {
    $stats = get_field( 'product_stats' ) ?: [];
}
if ( empty( $stats ) ) {
    $stats = [
        [ 'number' => '15+',  'label' => __( 'Years of experience', 'cvetanichin' ) ],
        [ 'number' => '3',    'label' => __( 'Engagement formats',  'cvetanichin' ) ],
        [ 'number' => '48h',  'label' => __( 'Response guarantee',  'cvetanichin' ) ],
        [ 'number' => '100%', 'label' => __( 'Instant delivery',    'cvetanichin' ) ],
    ];
}
?>
<div class="stats-row" aria-label="<?php esc_attr_e( 'Key statistics', 'cvetanichin' ); ?>">
  <div class="stats-row__inner">
    <?php foreach ( $stats as $stat ) : ?>
      <div class="stat reveal">
        <div class="stat__number"><?php echo esc_html( $stat['number'] ); ?></div>
        <div class="stat__label"><?php echo esc_html( $stat['label'] ); ?></div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
