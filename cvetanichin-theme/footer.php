</main><!-- #main -->

<?php $hide_footer = function_exists( 'get_field' ) ? get_field( 'hide_footer' ) : false; ?>
<?php if ( ! $hide_footer ) : ?>

<footer class="site-footer" role="contentinfo">
  <div class="site-footer__grid">

    <div class="site-footer__brand">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>"
         class="site-footer__wordmark" rel="home">
        <?php bloginfo( 'name' ); ?>
      </a>
      <p class="site-footer__tagline">
        <?php echo esc_html( cvet_option( 'footer_tagline', 'Strategist. AI practitioner. Digital product creator.' ) ); ?>
      </p>
    </div>

    <nav aria-label="<?php esc_attr_e( 'CSO Consultancy', 'cvetanichin' ); ?>">
      <p class="footer-nav__title"><?php esc_html_e( 'CSO Consultancy', 'cvetanichin' ); ?></p>
      <ul class="footer-nav__list">
        <li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'Services', 'cvetanichin' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'About', 'cvetanichin' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'Work together', 'cvetanichin' ); ?></a></li>
      </ul>
    </nav>

    <nav aria-label="<?php esc_attr_e( 'Self-Improvement', 'cvetanichin' ); ?>">
      <p class="footer-nav__title"><?php esc_html_e( 'Self-Improvement', 'cvetanichin' ); ?></p>
      <ul class="footer-nav__list">
        <li><a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'Digital Products', 'cvetanichin' ); ?></a></li>
        <li><a href="https://cvetanichin.gumroad.com" target="_blank" rel="noopener noreferrer" class="footer-nav__link"><?php esc_html_e( 'Gumroad Shop &#8599;', 'cvetanichin' ); ?></a></li>
      </ul>
    </nav>

    <nav aria-label="<?php esc_attr_e( 'More', 'cvetanichin' ); ?>">
      <p class="footer-nav__title"><?php esc_html_e( 'More', 'cvetanichin' ); ?></p>
      <ul class="footer-nav__list">
        <li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'Writing', 'cvetanichin' ); ?></a></li>
        <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="footer-nav__link"><?php esc_html_e( 'Contact', 'cvetanichin' ); ?></a></li>
      </ul>
    </nav>

  </div>

  <div class="site-footer__bottom">
    <p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'cvetanichin' ); ?></p>
    <?php if ( has_nav_menu( 'legal' ) ) :
      wp_nav_menu( [
        'theme_location' => 'legal',
        'container'      => false,
        'menu_class'     => 'footer-legal__list',
        'fallback_cb'    => false,
      ] );
    endif; ?>
  </div>
</footer>

<?php endif; ?>

<button class="back-to-top" aria-label="<?php esc_attr_e( 'Back to top', 'cvetanichin' ); ?>">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
       stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <polyline points="2,11 8,5 14,11"/>
  </svg>
</button>

<?php wp_footer(); ?>
</body>
</html>
