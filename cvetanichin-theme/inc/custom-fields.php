<?php
/**
 * Cvetanichin — ACF Field Groups
 * Registered programmatically. Also export to /acf-json/ for version control.
 * Requires: ACF Pro 6.x
 */

if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

// Page Settings
acf_add_local_field_group( [
    'key'      => 'group_cvet_page_settings',
    'title'    => 'Page Settings',
    'position' => 'side',
    'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ] ] ],
    'fields'   => [
        [
            'key'           => 'field_cvet_page_domain',
            'label'         => 'Domain',
            'name'          => 'page_domain',
            'type'          => 'select',
            'choices'       => [
                'consultancy'     => 'CSO Consultancy (D1 — gold/slate)',
                'selfimprovement' => 'Self-Improvement (D2 — pink/purple)',
            ],
            'default_value' => 'consultancy',
            'instructions'  => 'Sets the colour theme. Consultancy = gold/slate. Self-Improvement = pink/purple.',
        ],
        [
            'key'           => 'field_cvet_hide_header',
            'label'         => 'Hide Header',
            'name'          => 'hide_header',
            'type'          => 'true_false',
            'default_value' => 0,
            'ui'            => 1,
            'instructions'  => 'Use for no-chrome landing pages.',
        ],
        [
            'key'           => 'field_cvet_hide_footer',
            'label'         => 'Hide Footer',
            'name'          => 'hide_footer',
            'type'          => 'true_false',
            'default_value' => 0,
            'ui'            => 1,
        ],
    ],
] );

// Hero Section
acf_add_local_field_group( [
    'key'      => 'group_cvet_hero',
    'title'    => 'Hero Section',
    'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ] ] ],
    'fields'   => [
        [
            'key'           => 'field_cvet_hero_type',
            'label'         => 'Hero Layout',
            'name'          => 'hero_type',
            'type'          => 'select',
            'choices'       => [ 'full' => 'Full Width (D1)', 'split' => 'Split Column (D2)' ],
            'default_value' => 'full',
        ],
        [
            'key'   => 'field_cvet_hero_eyebrow',
            'label' => 'Eyebrow',
            'name'  => 'hero_eyebrow',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_cvet_hero_headline',
            'label' => 'Headline',
            'name'  => 'hero_headline',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
        [
            'key'   => 'field_cvet_hero_body',
            'label' => 'Body Text',
            'name'  => 'hero_body',
            'type'  => 'textarea',
            'rows'  => 3,
        ],
        [
            'key'   => 'field_cvet_hero_cta_label',
            'label' => 'CTA Label',
            'name'  => 'hero_cta_label',
            'type'  => 'text',
        ],
        [
            'key'   => 'field_cvet_hero_cta_url',
            'label' => 'CTA URL',
            'name'  => 'hero_cta_url',
            'type'  => 'url',
        ],
        [
            'key'           => 'field_cvet_hero_image',
            'label'         => 'Hero Image',
            'name'          => 'hero_image',
            'type'          => 'image',
            'return_format' => 'array',
            'preview_size'  => 'cvet-hero',
        ],
    ],
] );

// Product Meta (CPT: product)
acf_add_local_field_group( [
    'key'      => 'group_cvet_product',
    'title'    => 'Product Details',
    'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'product' ] ] ],
    'fields'   => [
        [
            'key'          => 'field_cvet_product_price',
            'label'        => 'Price',
            'name'         => 'product_price',
            'type'         => 'text',
            'instructions' => 'e.g. \u20ac37',
        ],
        [
            'key'          => 'field_cvet_product_format',
            'label'        => 'Format',
            'name'         => 'product_format',
            'type'         => 'text',
            'instructions' => 'e.g. PDF · Instant download',
        ],
        [
            'key'          => 'field_cvet_product_cta_label',
            'label'        => 'CTA Button Label',
            'name'         => 'product_cta_label',
            'type'         => 'text',
            'default_value'=> 'GET INSTANT ACCESS',
        ],
        [
            'key'  => 'field_cvet_product_cta_url',
            'label'=> 'Purchase URL (Gumroad)',
            'name' => 'product_cta_url',
            'type' => 'url',
        ],
        [
            'key'        => 'field_cvet_product_stats',
            'label'      => 'Stats Strip',
            'name'       => 'product_stats',
            'type'       => 'repeater',
            'min'        => 2,
            'max'        => 4,
            'layout'     => 'table',
            'sub_fields' => [
                [ 'key' => 'field_cvet_stat_num',   'label' => 'Number', 'name' => 'number', 'type' => 'text', 'column_width' => '30' ],
                [ 'key' => 'field_cvet_stat_label', 'label' => 'Label',  'name' => 'label',  'type' => 'text', 'column_width' => '70' ],
            ],
        ],
        [
            'key'        => 'field_cvet_product_outputs',
            'label'      => 'Product Outputs (Feature Cards)',
            'name'       => 'product_outputs',
            'type'       => 'repeater',
            'layout'     => 'block',
            'sub_fields' => [
                [ 'key' => 'field_cvet_output_num',  'label' => 'Number',      'name' => 'number',      'type' => 'text' ],
                [ 'key' => 'field_cvet_output_title','label' => 'Title',        'name' => 'title',       'type' => 'text' ],
                [ 'key' => 'field_cvet_output_body', 'label' => 'Description',  'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
            ],
        ],
    ],
] );

// Site Identity Options Page
if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page( [
        'page_title' => 'Site Identity',
        'menu_title' => 'Site Identity',
        'menu_slug'  => 'cvet-site-identity',
        'capability' => 'manage_options',
        'parent_slug'=> 'options-general.php',
    ] );

    acf_add_local_field_group( [
        'key'      => 'group_cvet_site_identity',
        'title'    => 'Site Identity',
        'location' => [ [ [ 'param' => 'options_page', 'operator' => '==', 'value' => 'cvet-site-identity' ] ] ],
        'fields'   => [
            [
                'key'           => 'field_cvet_footer_tagline',
                'label'         => 'Footer Tagline',
                'name'          => 'footer_tagline',
                'type'          => 'text',
                'default_value' => 'Strategist. AI practitioner. Digital product creator.',
            ],
            [
                'key'   => 'field_cvet_contact_email',
                'label' => 'Contact Email',
                'name'  => 'contact_email',
                'type'  => 'email',
            ],
            [
                'key'           => 'field_cvet_availability',
                'label'         => 'Availability Status',
                'name'          => 'availability_status',
                'type'          => 'select',
                'choices'       => [
                    'open'    => 'Open to enquiries',
                    'limited' => 'Limited availability',
                    'closed'  => 'Not accepting new clients',
                ],
                'default_value' => 'limited',
            ],
        ],
    ] );
}
