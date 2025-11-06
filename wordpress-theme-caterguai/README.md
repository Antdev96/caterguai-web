Caterguai - WordPress Theme Starter (Elementor)
===============================================

This is a minimal WordPress theme starter intended to be used with Elementor (free or Pro). It provides a basic header/footer and a content area where Elementor can design the pages.

How to install
--------------
1. Zip the `wordpress-theme-caterguai` folder (ensure the folder name has no spaces when zipping for use in WordPress). Example name: `caterguai-starter.zip`.
2. In your WordPress admin: Appearance → Themes → Add New → Upload Theme. Upload the zip and Activate.
3. Install Elementor (and Elementor Pro if available).

Suggested workflow with Elementor
---------------------------------
- Create a Header template in Elementor (use the Header template type) and add the logo, navigation menu, contact CTA, and mobile menu.
- Create a Footer template in Elementor and include contact info, social icons and Quick Links.
- Create a Home page and build sections: Hero, Services, Menu, Other Services, Commitment, Testimonials, Contact — matching structure from the React app.

Assets to upload
----------------
- logo (recommended: `/wp-content/uploads/` via Media Library)
- hero images (generate optimized WebP/AVIF, and fallback PNG/JPG)
- og-image (social preview)
- favicon

Content export
--------------
If you want me to extract the text content (translations / strings) into a JSON or CSV for easy copy/paste into Elementor widgets, I can generate that file automatically. This will speed up recreating the site.

Notes & tips
------------
- Recreating interactive behavior (smooth scroll, accordions, carousels) in Elementor may require Elementor Pro or small custom JS snippets.
- For best performance, serve optimized images via a CDN or use a plugin that generates WebP and responsive srcsets.
