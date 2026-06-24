<?php
/**
 * Cvetanichin — Theme Setup
 * add_theme_support, menus, image sizes, widget areas, CPTs.
 */

function cvet_theme_setup(): void {

    load_theme_textdomain( 'cvetanichin', CVET_DIR . '/languages' );

    add_theme_support( 'html5', [
        'search-form', 'comment-form', 'comment-list',
        'gallery', 'caption', 'style', 'script',
    ] );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'customize-selective-refresh-widgets' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'wp-block-styles' );

    add_theme_support( 'custom-logo', [
        'height'      => 48,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => [ 'site-title', 'site-description' ],
    ] );

    // Locked Gutenberg palette — brand colours only
    add_theme_support( 'editor-color-palette', [
        [ 'name' => __( 'Ochre Gold',  'cvetanichin' ), 'slug' => 'gold',        'color' => '#E2C044' ],
        [ 'name' => __( 'Deep Slate',  'cvetanichin' ), 'slug' => 'slate',       'color' => '#393E41' ],
        [ 'name' => __( 'Warm Stone',  'cvetanichin' ), 'slug' => 'stone',       'color' => '#EDEAE5' ],
        [ 'name' => __( 'Teal',        'cvetanichin' ), 'slug' => 'teal',        'color' => '#587B7F' ],
        [ 'name' => __( 'Hot Pink',    'cvetanichin' ), 'slug' => 'hot-pink',    'color' => '#E55381' ],
        [ 'name' => __( 'Deep Purple', 'cvetanichin' ), 'slug' => 'deep-purple', 'color' => '#190828' ],
        [ 'name' => __( 'Warm White',  'cvetanichin' ), 'slug' => 'warm-white',  'color' => '#FAF9F6' ],
    ] );

    // Disable custom colour/font pickers — enforce brand
    add_theme_support( 'disable-custom-colors' );
    add_theme_support( 'disable-custom-gradients' );
    add_theme_support( 'disable-custom-font-sizes' );
    add_theme_support( 'editor-gradient-presets', [] );

    // Gutenberg type scale
    add_theme_support( 'editor-font-sizes', [
        [ 'name' => __( 'Small',   'cvetanichin' ), 'slug' => 'small',   'size' => 13 ],
        [ 'name' => __( 'Body',    'cvetanichin' ), 'slug' => 'body',    'size' => 14 ],
        [ 'name' => __( 'Large',   'cvetanichin' ), 'slug' => 'large',   'size' => 21 ],
        [ 'name' => __( 'Display', 'cvetanichin' ), 'slug' => 'display', 'size' => 48 ],
    ] );

    // Custom image sizes
    add_image_size( 'cvet-hero',     1600, 900,  true );
    add_image_size( 'cvet-card',     800,  600,  true );
    add_image_size( 'cvet-portrait', 720,  900,  true );
    add_image_size( 'cvet-thumb',    480,  360,  true );
    add_image_size( 'cvet-og',       1200, 630,  true );

    // Navigation menus
    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'cvetanichin' ),
        'footer'  => __( 'Footer Navigation',  'cvetanichin' ),
        'legal'   => __( 'Legal Links',        'cvetanichin' ),
        'social'  => __( 'Social Links',       'cvetanichin' ),
    ] );
}
add_action( 'after_setup_theme', 'cvet_theme_setup' );


function cvet_widgets_init(): void {

    register_sidebar( [
        'name'          => __( 'Blog Sidebar', 'cvetanichin' ),
        'id'            => 'sidebar-blog',
        'description'   => __( 'Appears alongside blog archive and single posts.', 'cvetanichin' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget__title">',
        'after_title'   => '</h3>',
    ] );

    register_sidebar( [
        'name'          => __( 'Footer Column 1', 'cvetanichin' ),
        'id'            => 'footer-1',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget__title">',
        'after_title'   => '</h4>',
    ] );
}
add_action( 'widgets_init', 'cvet_widgets_init' );


function cvet_register_post_types(): void {

    // Testimonials CPT
    register_post_type( 'testimonial', [
        'labels'       => [
            'name'          => __( 'Testimonials', 'cvetanichin' ),
            'singular_name' => __( 'Testimonial',  'cvetanichin' ),
        ],
        'public'       => false,
        'show_ui'      => true,
        'show_in_menu' => true,
        'supports'     => [ 'title', 'editor' ],
        'menu_icon'    => 'dashicons-format-quote',
    ] );

    // Digital Products CPT (Domain 2)
    register_post_type( 'product', [
        'labels'      => [
            'name'          => __( 'Products', 'cvetanichin' ),
            'singular_name' => __( 'Product',  'cvetanichin' ),
        ],
        'public'      => true,
        'has_archive' => 'products',
        'rewrite'     => [ 'slug' => 'products' ],
        'show_in_rest'=> true,
        'supports'    => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
        'menu_icon'   => 'dashicons-cart',
    ] );
}
add_action( 'init', 'cvet_register_post_types' );
