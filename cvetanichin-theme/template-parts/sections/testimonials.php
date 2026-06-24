<?php
/**
 * Section: Testimonial Strip
 * Queries the 'testimonial' CPT. Title = attribution, editor = quote text.
 * Falls back silently if no testimonials exist.
 */
$testimonials = get_posts( [
    'post_type'      => 'testimonial',
    'posts_per_page' => 6,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
    'post_status'    => 'publish',
] );

if ( empty( $testimonials ) ) return;
?>
<section class="section section--subtle" aria-label="<?php esc_attr_e( 'Testimonials', 'cvetanichin' ); ?>">
  <div class="container">
    <p class="eyebrow reveal"><?php esc_html_e( 'What people say', 'cvetanichin' ); ?></p>

    <div class="grid-<?php echo count( $testimonials ) === 1 ? '1' : ( count( $testimonials ) <= 2 ? '2' : '3' ); ?>"
         style="margin-top:40px;">
      <?php foreach ( $testimonials as $i => $testimonial ) :
        $quote = get_post_field( 'post_content', $testimonial );
        $name  = get_the_title( $testimonial );
      ?>
        <figure class="testimonial-card reveal" data-delay="<?php echo esc_attr( min( 4, $i + 1 ) ); ?>"
                style="background:var(--cvet-surface-white);border:var(--cvet-border-hair) solid var(--cvet-border-subtle);padding:32px;margin:0;">
          <blockquote style="margin:0 0 24px;">
            <p style="font-family:var(--cvet-font-serif);font-style:italic;font-weight:200;font-size:var(--cvet-text-xl);line-height:1.45;letter-spacing:-0.01em;color:var(--cvet-text-primary);margin:0;">
              &ldquo;<?php echo wp_kses_post( $quote ); ?>&rdquo;
            </p>
          </blockquote>
          <?php if ( $name ) : ?>
            <figcaption style="font-family:var(--cvet-font-sans);font-size:var(--cvet-text-xs);font-weight:500;letter-spacing:var(--cvet-tracking-widest);text-transform:uppercase;color:var(--cvet-text-muted);">
              &mdash; <?php echo esc_html( $name ); ?>
            </figcaption>
          <?php endif; ?>
        </figure>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php wp_reset_postdata(); ?>
