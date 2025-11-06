<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header id="site-header">
    <div class="site-branding">
        <!-- Logo placeholder: upload logo in Appearance > Customize or replace with an <img> in child theme -->
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">Caterguai</a>
    </div>
    <nav id="site-navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
    </nav>
</header>
