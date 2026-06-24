<?php
/**
 * Cvetanichin — Asset Enqueue
 * Stylesheets and scripts. No jQuery used by theme.
 */

function cvet_enqueue_assets(): void {

    // CSS stack (order matters — each depends on prior)
    wp_enqueue_style( 'cvet-tokens',
        CVET_URI . '/assets/css/tokens.css', [], CVET_VERSION );

    wp_enqueue_style( 'cvet-base',
        CVET_URI . '/assets/css/base.css', [ 'cvet-tokens' ], CVET_VERSION );

    wp_enqueue_style( 'cvet-components',
        CVET_URI . '/assets/css/components.css', [ 'cvet-base' ], CVET_VERSION );

    // Domain theme structural overrides (always loaded; body class determines which rules fire)
    wp_enqueue_style( 'cvet-theme-consultancy',
        CVET_URI . '/assets/css/themes/consultancy.css', [ 'cvet-components' ], CVET_VERSION );

    wp_enqueue_style( 'cvet-theme-selfimprovement',
        CVET_URI . '/assets/css/themes/selfimprovement.css', [ 'cvet-components' ], CVET_VERSION );

    // Preload hero font for LCP
    add_action( 'wp_head', function() {
        echo '<link rel="preload" as="font" type="font/woff2" crossorigin href="'
            . esc_url( CVET_URI . '/assets/fonts/Fraunces-Italic-VariableFont.woff2' )
            . '">' . PHP_EOL;
    }, 1 );

    // Scripts — in footer, no deps on jQuery
    wp_enqueue_script( 'cvet-scroll-reveal',
        CVET_URI . '/assets/js/scroll-reveal.js', [], CVET_VERSION, true );

    wp_enqueue_script( 'cvet-main',
        CVET_URI . '/assets/js/main.js', [], CVET_VERSION, true );

    wp_localize_script( 'cvet-main', 'cvetConfig', [
        'siteUrl' => esc_url( home_url() ),
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'cvet_nonce' ),
    ] );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'cvet_enqueue_assets' );


function cvet_editor_assets(): void {
    wp_enqueue_style( 'cvet-editor',
        CVET_URI . '/assets/css/editor-style.css', [], CVET_VERSION );
}
add_action( 'enqueue_block_editor_assets', 'cvet_editor_assets' );


// Remove WordPress emoji — brand never uses them
remove_action( 'wp_head',             'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles',     'print_emoji_styles' );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles',  'print_emoji_styles' );

// Clean up unnecessary head output
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );
