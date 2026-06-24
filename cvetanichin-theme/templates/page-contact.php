<?php
/**
 * Template Name: Contact
 */
get_header();

$form_id      = get_theme_mod('contact_form_id', '');
$availability = function_exists('cvet_option') ? cvet_option('availability_status', 'limited') : 'limited';
$avail_labels = [
    'open'    => __( 'Open to new enquiries', 'cvetanichin' ),
    'limited' => __( 'Limited availability', 'cvetanichin' ),
    'closed'  => __( 'Not accepting new clients', 'cvetanichin' ),
];
?>
<section class="section section--inverse" style="padding-block:80px;">
  <div class="container">
    <p class="eyebrow" style="color:var(--cvet-accent-light);"><?php esc_html_e( 'Contact', 'cvetanichin' ); ?></p>
    <h1 style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-5xl);line-height:1.05;letter-spacing:-0.02em;color:var(--cvet-text-inverse);margin:0;">
      <?php esc_html_e( "Let's work together.", 'cvetanichin' ); ?>
    </h1>
    <p style="font-size:var(--cvet-text-sm);font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:var(--cvet-accent-light);margin-top:20px;">
      <?php echo esc_html( $avail_labels[ $availability ] ?? $avail_labels['limited'] ); ?>
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">
      <div>
        <p style="font-size:var(--cvet-text-md);font-weight:300;color:var(--cvet-text-secondary);line-height:var(--cvet-leading-loose);margin-bottom:32px;">
          <?php esc_html_e( 'Engagements begin with a 30-minute diagnostic call — no commitment, no pitch. Tell me what you are working on and I will tell you if I can help.', 'cvetanichin' ); ?>
        </p>
        <?php
          $contact_email = function_exists('cvet_option') ? cvet_option('contact_email') : '';
          if ($contact_email) : ?>
          <p style="font-size:var(--cvet-text-sm);color:var(--cvet-text-muted);">
            <?php esc_html_e( 'Or email directly:', 'cvetanichin' ); ?>
            <a href="mailto:<?php echo esc_attr($contact_email); ?>" style="color:var(--cvet-text-accent);">
              <?php echo esc_html($contact_email); ?>
            </a>
          </p>
        <?php endif; ?>
      </div>
      <div>
        <?php if ($form_id && function_exists('wpforms_display')) :
          wpforms_display( (int) $form_id );
        else : ?>
          <p style="font-size:var(--cvet-text-sm);color:var(--cvet-text-muted);">
            <?php esc_html_e( 'Contact form: set WPForms ID in Appearance > Customize.', 'cvetanichin' ); ?>
          </p>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
