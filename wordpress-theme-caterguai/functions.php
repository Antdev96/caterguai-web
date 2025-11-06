<?php
// Minimal theme setup for Caterguai starter theme
function caterguai_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'caterguai_setup' );

function caterguai_enqueue_scripts() {
    wp_enqueue_style( 'caterguai-style', get_stylesheet_uri(), array(), '0.1.0' );
}
add_action( 'wp_enqueue_scripts', 'caterguai_enqueue_scripts' );

// Allow Elementor to manage the content area by declaring support (no further action required)
add_action( 'after_setup_theme', function() {
    // no-op: placeholder for further integration if needed
} );
