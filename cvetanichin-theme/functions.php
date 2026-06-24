<?php
/**
 * Cvetanichin — functions.php
 * Entry point. Defines constants. Loads inc/ modules.
 * No business logic here — delegate to inc/ files.
 */

defined( 'ABSPATH' ) || exit;

define( 'CVET_VERSION', '1.0.0' );
define( 'CVET_DIR',     get_template_directory() );
define( 'CVET_URI',     get_template_directory_uri() );

require_once CVET_DIR . '/inc/theme-setup.php';
require_once CVET_DIR . '/inc/enqueue.php';
require_once CVET_DIR . '/inc/helpers.php';
require_once CVET_DIR . '/inc/block-patterns.php';
require_once CVET_DIR . '/inc/block-styles.php';

if ( function_exists( 'acf_add_local_field_group' ) ) {
    require_once CVET_DIR . '/inc/custom-fields.php';
}
