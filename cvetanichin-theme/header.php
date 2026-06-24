<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'cvetanichin' ); ?></a>

<?php $hide_header = function_exists( 'get_field' ) ? get_field( 'hide_header' ) : false; ?>
<?php if ( ! $hide_header ) : ?>

<header class="site-header" role="banner">
  <div class="site-header__inner">

    <div class="site-branding">
      <?php cvet_wordmark(); ?>
    </div>

    <nav class="main-nav" id="main-nav" role="navigation"
         aria-label="<?php esc_attr_e( 'Primary', 'cvetanichin' ); ?>">
      <?php if ( has_nav_menu( 'primary' ) ) :
        wp_nav_menu( [
          'theme_location' => 'primary',
          'menu_class'     => 'main-nav__list',
          'container'      => false,
          'fallback_cb'    => false,
          'walker'         => new Cvet_Nav_Walker(),
        ] );
      endif; ?>
    </nav>

    <div class="site-header__actions">
      <?php
        $contact_page = get_page_by_path( 'contact' );
        if ( $contact_page ) :
      ?>
        <a href="<?php echo esc_url( get_permalink( $contact_page ) ); ?>"
           class="btn btn--primary btn--sm">
          <?php esc_html_e( 'Work together', 'cvetanichin' ); ?>
          <span class="btn__arrow" aria-hidden="true">&rarr;</span>
        </a>
      <?php endif; ?>

      <button class="nav-toggle"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="<?php esc_attr_e( 'Toggle navigation', 'cvetanichin' ); ?>">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <line x1="0" y1="1"  x2="20" y2="1"  stroke="currentColor" stroke-width="1.5"/>
          <line x1="0" y1="7"  x2="20" y2="7"  stroke="currentColor" stroke-width="1.5"/>
          <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </button>
    </div>

  </div>
</header>

<?php endif; ?>

<main id="main" class="site-main" role="main">
