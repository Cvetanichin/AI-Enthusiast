<?php
/**
 * Blog post loop item — used in archive.php, search.php
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-card' ); ?>>
  <div class="post-card__meta">
    <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
      <?php echo esc_html( get_the_date() ); ?>
    </time>
    <span><?php echo esc_html( cvet_reading_time() ); ?></span>
  </div>

  <h2 class="post-card__title">
    <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
  </h2>

  <?php if ( has_excerpt() || get_the_excerpt() ) : ?>
    <p class="post-card__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
  <?php endif; ?>

  <a href="<?php the_permalink(); ?>" class="btn btn--ghost btn--sm" aria-label="<?php echo esc_attr( sprintf( __( 'Read %s', 'cvetanichin' ), get_the_title() ) ); ?>">
    <?php esc_html_e( 'Read', 'cvetanichin' ); ?> <span class="btn__arrow" aria-hidden="true">&rarr;</span>
  </a>
</article>
