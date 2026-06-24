<?php
/**
 * Cvetanichin — Helpers
 * Domain detection, nav walker, utility functions.
 */


/**
 * Determine the active domain class for the current request.
 * Domain is stored as ACF select field 'page_domain' per page.
 */
function cvet_get_domain(): string {

    if ( is_singular( 'product' ) || is_post_type_archive( 'product' ) ) {
        return 'domain-selfimprovement';
    }

    if ( ( is_page() || is_singular() ) && function_exists( 'get_field' ) ) {
        $domain = get_field( 'page_domain' );
        if ( $domain === 'selfimprovement' ) return 'domain-selfimprovement';
        if ( $domain === 'consultancy' )     return 'domain-consultancy';
    }

    // Slug-based defaults
    if ( is_page( [ 'services', 'approach', 'work-together', 'contact', 'about' ] ) ) {
        return 'domain-consultancy';
    }

    if ( is_home() || is_archive() || is_singular( 'post' ) ) {
        return ''; // No domain class on blog — brand neutral
    }

    return 'domain-consultancy'; // site default
}

add_filter( 'body_class', function( array $classes ): array {
    $domain = cvet_get_domain();
    if ( $domain ) {
        $classes[] = $domain;
    }
    return $classes;
} );


/**
 * Output the wordmark link.
 * Uses custom logo if set; falls back to site name.
 */
function cvet_wordmark(): void {
    if ( has_custom_logo() ) {
        echo get_custom_logo();
        return;
    }
    printf(
        '<a href="%s" class="site-branding__wordmark" rel="home" aria-label="%s">%s</a>',
        esc_url( home_url( '/' ) ),
        esc_attr( get_bloginfo( 'name' ) . ' — ' . __( 'Home', 'cvetanichin' ) ),
        esc_html( get_bloginfo( 'name' ) )
    );
}


/**
 * Estimated reading time for a post.
 */
function cvet_reading_time( int $post_id = 0 ): string {
    $post_id = $post_id ?: (int) get_the_ID();
    $content = get_post_field( 'post_content', $post_id );
    $words   = str_word_count( strip_tags( $content ) );
    $mins    = max( 1, (int) round( $words / 200 ) );
    return sprintf( _n( '%d min read', '%d min read', $mins, 'cvetanichin' ), $mins );
}


/**
 * Get ACF options page field with fallback.
 */
function cvet_option( string $key, string $fallback = '' ): string {
    if ( ! function_exists( 'get_field' ) ) return $fallback;
    return get_field( $key, 'option' ) ?: $fallback;
}


/**
 * Minimal nav walker — adds .main-nav__link class, drops submenus.
 */
class Cvet_Nav_Walker extends Walker_Nav_Menu {

    public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ): void {
        $is_current = in_array( 'current-menu-item', $item->classes, true );
        $output .= '<li class="main-nav__item' . ( $is_current ? ' is-current' : '' ) . '">';
        $output .= '<a class="main-nav__link' . ( $is_current ? ' is-active' : '' ) . '"';
        $output .= ' href="' . esc_url( $item->url ) . '"';
        if ( $item->target ) $output .= ' target="' . esc_attr( $item->target ) . '"';
        if ( $item->xfn )    $output .= ' rel="' . esc_attr( $item->xfn ) . '"';
        $output .= '>' . esc_html( $item->title ) . '</a>';
    }

    public function end_el( &$output, $item, $depth = 0, $args = null ): void {
        $output .= '</li>';
    }
}
