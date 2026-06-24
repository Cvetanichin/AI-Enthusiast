<?php
/**
 * Cvetanichin — Blog Sidebar
 */
if ( ! is_active_sidebar( 'sidebar-blog' ) ) return;
?>
<aside class="sidebar" role="complementary" aria-label="<?php esc_attr_e( 'Blog Sidebar', 'cvetanichin' ); ?>">
  <?php dynamic_sidebar( 'sidebar-blog' ); ?>
</aside>
