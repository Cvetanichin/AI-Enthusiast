<?php
/**
 * Cvetanichin — Block Style Variations
 */

function cvet_register_block_styles(): void {

    register_block_style( 'core/button', [
        'name'  => 'primary',
        'label' => __( 'Primary', 'cvetanichin' ),
    ] );
    register_block_style( 'core/button', [
        'name'  => 'ghost',
        'label' => __( 'Ghost', 'cvetanichin' ),
    ] );
    register_block_style( 'core/button', [
        'name'  => 'ghost-inverse',
        'label' => __( 'Ghost Inverse', 'cvetanichin' ),
    ] );
    register_block_style( 'core/quote', [
        'name'  => 'pull-quote',
        'label' => __( 'Pull Quote', 'cvetanichin' ),
    ] );
    register_block_style( 'core/separator', [
        'name'  => 'hairline',
        'label' => __( 'Hairline', 'cvetanichin' ),
    ] );
    register_block_style( 'core/table', [
        'name'  => 'brand',
        'label' => __( 'Brand Table', 'cvetanichin' ),
    ] );
}
add_action( 'init', 'cvet_register_block_styles' );
