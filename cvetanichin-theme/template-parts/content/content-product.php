<?php
/**
 * Product card — used in archive.php product grid.
 * Reads ACF fields: product_price, product_format, product_cta_url.
 */
$price  = function_exists( 'get_field' ) ? get_field( 'product_price' )  : '';
$format = function_exists( 'get_field' ) ? get_field( 'product_format' ) : '';
$cta    = function_exists( 'get_field' ) ? get_field( 'product_cta_url' ) : get_the_permalink();
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'card' ); ?>
         style="display:flex;flex-direction:column;">

  <?php if ( has_post_thumbnail() ) : ?>
    <a href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true"
       style="display:block;overflow:hidden;aspect-ratio:4/3;margin-bottom:24px;">
      <?php the_post_thumbnail( 'cvet-card', [
        'class' => 'portrait',
        'style' => 'width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease;',
        'alt'   => '',
      ] ); ?>
    </a>
  <?php endif; ?>

  <div style="flex:1;display:flex;flex-direction:column;">
    <h2 class="card__title" style="margin-bottom:10px;">
      <a href="<?php the_permalink(); ?>"
         style="color:inherit;text-decoration:none;"><?php the_title(); ?></a>
    </h2>

    <?php if ( $price ) : ?>
      <div style="margin-bottom:10px;">
        <span style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-2xl);color:var(--cvet-accent-primary);line-height:1;">
          <?php echo esc_html( $price ); ?>
        </span>
        <?php if ( $format ) : ?>
          <span style="font-size:var(--cvet-text-xs);font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--cvet-text-muted);display:block;margin-top:4px;font-family:var(--cvet-font-sans);">
            <?php echo esc_html( $format ); ?>
          </span>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ( has_excerpt() ) : ?>
      <p class="card__body" style="margin-bottom:24px;flex:1;"><?php the_excerpt(); ?></p>
    <?php endif; ?>

    <a href="<?php echo esc_url( $cta ); ?>"
       class="btn btn--ghost btn--sm"
       aria-label="<?php echo esc_attr( sprintf( __( 'Get %s', 'cvetanichin' ), get_the_title() ) ); ?>">
      <?php esc_html_e( 'View product', 'cvetanichin' ); ?>
      <span class="btn__arrow" aria-hidden="true">&rarr;</span>
    </a>
  </div>

</article>
