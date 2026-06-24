<?php
/**
 * Section: Editorial Pull Quote
 */
$quote = get_theme_mod(
    'philosophy_quote',
    'The work is not to write the strategy. The work is to make the decision that makes the strategy possible.'
);
$attribution = get_theme_mod( 'philosophy_attribution', '&#8212; Vaska Cvetanoska' );
?>
<section class="section">
  <div class="container">
    <blockquote class="pull-quote reveal">
      <p class="pull-quote__text">&ldquo;<?php echo esc_html( $quote ); ?>&rdquo;</p>
      <footer class="pull-quote__attribution"><?php echo wp_kses_post( $attribution ); ?></footer>
    </blockquote>
  </div>
</section>
