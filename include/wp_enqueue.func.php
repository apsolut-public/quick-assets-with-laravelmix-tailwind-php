<?php
/**
 * Enqueue main JS and CSS
 * mix helper
 * Include: laravel.mix.php then enqueue.func.php
 * include in your functions.php file (WordPress)
 */

add_filter( 'theme/mix/args/defaults', function( $defaults ) {
	$defaults['manifest_directory'] = 'dist'; // location of your manifest.json

	return $defaults;
} );
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style(
		'theme-style',
		mix( 'dist/core.css' )
	);
	wp_enqueue_script(
		'theme-js',
		mix( 'dist/core.js' )
	);
} );