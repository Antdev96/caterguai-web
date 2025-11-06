Elementor compatibility notes
=================================

Summary
-------
This project is a React + Vite single-page app. To recreate the design in WordPress + Elementor you can use the starter theme included in `wordpress-theme-caterguai/` and rebuild the layout using Elementor templates (Header, Footer, Home page sections).

What translates directly
- Static content (texts, images) — can be copied into Elementor widgets.
- Visual sections: Hero, Services, Menu, Other Services, Commitment, Testimonials, Contact.

Limitations & interactive pieces
- Smooth scrolling and some JS interactions (accordions, carousels) require either Elementor Pro widgets or small custom JS.
- Client-side translations (LanguageContext) must be converted to static content in Elementor (two separate pages or use WPML/Polylang for i18n).

Recommended migration steps
1. Zip the `wordpress-theme-caterguai` folder (rename to avoid spaces) and upload to WP → Appearance → Themes.
2. Install Elementor + Elementor Pro (recommended for global header/footer and advanced widgets).
3. Create Header template: add logo (from Media Library), nav menu, phone CTA. Use the Theme Builder to make it global.
4. Create Footer template.
5. For the Home page, create sections with Elementor matching the React layout.
6. Copy text from `src/components/LanguageContext.tsx` (the translations object) into Elementor widgets. I can export these strings into a JSON for copy/paste.

Notes on assets
- Upload `public/assets/logo.png`, `hero.webp`, and OG/favicons to Media Library; use responsive image sizes (WordPress generates them automatically).

Performance & SEO
- Enable a caching/CDN plugin, generate WebP images, and add critical meta (we already added OG tags to `index.html`).

If you want, I can:
- Export all translation strings to `docs/translations.json` for easy copy/paste.
- Generate a zip of the WordPress theme ready to upload (I can create a properly named zip file).
