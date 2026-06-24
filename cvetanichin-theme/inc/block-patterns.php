<?php
/**
 * Cvetanichin — Gutenberg Block Patterns
 * Locked section compositions for the block editor.
 */

function cvet_register_block_patterns(): void {

    register_block_pattern_category( 'cvetanichin', [
        'label' => __( 'Cvetanichin Sections', 'cvetanichin' ),
    ] );

    // Hero — Full Width (Domain 1)
    register_block_pattern( 'cvetanichin/hero-full', [
        'title'      => __( 'Hero — Full Width', 'cvetanichin' ),
        'categories' => [ 'cvetanichin' ],
        'content'    => '<!-- wp:group {"className":"hero hero--full","backgroundColor":"surface-inverse"} -->
<div class="wp-block-group hero hero--full">
<!-- wp:paragraph {"className":"eyebrow","textColor":"gold"} --><p class="eyebrow has-gold-color has-text-color">Domain 01 · CSO Consultancy</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":1,"className":"hero__headline"} --><h1 class="hero__headline">Strategic clarity for organisations ready to move.</h1><!-- /wp:heading -->
<!-- wp:paragraph {"className":"hero__body"} --><p class="hero__body">Fractional CSO. Strategy Intensive. Advisory Retainer. Precise, senior strategic leadership — without the permanent hire.</p><!-- /wp:paragraph -->
<!-- wp:buttons --><div class="wp-block-buttons">
<!-- wp:button {"className":"btn btn--primary"} --><div class="wp-block-button btn btn--primary"><a class="wp-block-button__link">Work together →</a></div><!-- /wp:button -->
</div><!-- /wp:buttons -->
</div>
<!-- /wp:group -->',
    ] );

    // CTA Block
    register_block_pattern( 'cvetanichin/cta-block', [
        'title'      => __( 'CTA Block — Full Width', 'cvetanichin' ),
        'categories' => [ 'cvetanichin' ],
        'content'    => '<!-- wp:group {"className":"cta-block","backgroundColor":"surface-inverse"} -->
<div class="wp-block-group cta-block">
<!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">Next step</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2>Ready to begin?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Availability is limited. Engagements begin with a 30-minute diagnostic call — no commitment, no pitch.</p><!-- /wp:paragraph -->
<!-- wp:buttons --><div class="wp-block-buttons">
<!-- wp:button {"className":"btn btn--primary btn--lg"} --><div class="wp-block-button btn btn--primary btn--lg"><a class="wp-block-button__link" href="/contact/">Book a call →</a></div><!-- /wp:button -->
</div><!-- /wp:buttons -->
</div>
<!-- /wp:group -->',
    ] );

    // Stats Row
    register_block_pattern( 'cvetanichin/stats-row', [
        'title'      => __( 'Stats Row', 'cvetanichin' ),
        'categories' => [ 'cvetanichin' ],
        'content'    => '<!-- wp:group {"className":"stats-row","backgroundColor":"surface-inverse"} -->
<div class="wp-block-group stats-row">
<div class="stats-row__inner">
<!-- wp:group {"className":"stat"} --><div class="wp-block-group stat">
<!-- wp:heading {"level":3,"className":"stat__number"} --><h3 class="stat__number">15+</h3><!-- /wp:heading -->
<!-- wp:paragraph {"className":"stat__label"} --><p class="stat__label">Years of strategy experience</p><!-- /wp:paragraph -->
</div><!-- /wp:group -->
<!-- wp:group {"className":"stat"} --><div class="wp-block-group stat">
<!-- wp:heading {"level":3,"className":"stat__number"} --><h3 class="stat__number">3</h3><!-- /wp:heading -->
<!-- wp:paragraph {"className":"stat__label"} --><p class="stat__label">Engagement formats</p><!-- /wp:paragraph -->
</div><!-- /wp:group -->
<!-- wp:group {"className":"stat"} --><div class="wp-block-group stat">
<!-- wp:heading {"level":3,"className":"stat__number"} --><h3 class="stat__number">48h</h3><!-- /wp:heading -->
<!-- wp:paragraph {"className":"stat__label"} --><p class="stat__label">Response guarantee</p><!-- /wp:paragraph -->
</div><!-- /wp:group -->
<!-- wp:group {"className":"stat"} --><div class="wp-block-group stat">
<!-- wp:heading {"level":3,"className":"stat__number"} --><h3 class="stat__number">€37–79</h3><!-- /wp:heading -->
<!-- wp:paragraph {"className":"stat__label"} --><p class="stat__label">Digital product range</p><!-- /wp:paragraph -->
</div><!-- /wp:group -->
</div>
</div><!-- /wp:group -->',
    ] );

    // Pull Quote
    register_block_pattern( 'cvetanichin/pull-quote', [
        'title'      => __( 'Pull Quote', 'cvetanichin' ),
        'categories' => [ 'cvetanichin' ],
        'content'    => '<!-- wp:quote {"className":"pull-quote"} -->
<blockquote class="wp-block-quote pull-quote">
<!-- wp:paragraph --><p>"The work is not to write the strategy. The work is to make the decision that makes the strategy possible."</p><!-- /wp:paragraph -->
<cite>— Vaska Cvetanoska</cite>
</blockquote>
<!-- /wp:quote -->',
    ] );
}
add_action( 'init', 'cvet_register_block_patterns' );
