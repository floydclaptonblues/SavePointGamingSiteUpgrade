# SavePoint Gaming site upgrade

Late-1990s inspired demo storefront with combinable genre, decade, console, rating, title search and alphabet filters; a device-local stash; a downloadable selection; and USPS domestic/international information. Typography uses Space Grotesk and Space Mono with Trebuchet/monospace fallbacks.

## Run

Node 20+: `npm start` serves http://127.0.0.1:4173. `npm test` verifies catalog filtering. `npm run build` writes static assets to `dist/`. No dependency installation required.

## GitHub Pages

Publish from `main`, folder `/ (root)` in repository Settings → Pages. Expected URL: https://floydclaptonblues.github.io/SavePointGamingSiteUpgrade/ . No custom domain is configured. This is a non-transactional preview.

## Inventory import is pending

On 2026-09-24 the supplied https://savepointgaming.com returned a JavaScript redirect to `/lander`, whose response identified a parking page. `/wp-json/` also redirected to the parking page. No WordPress inventory was accessible, so no real products, prices, stock or ratings have been invented or scraped. `catalog.json` is deliberately empty. The interface falls back to six prominently labeled fictional samples to demonstrate its behavior.

Provide the working WordPress source address or a WordPress/WooCommerce export to complete the import. Confirm whether rating means ESRB, review score or both. The current schema supports a rating string and uses Unverified for all demo entries.

Catalog records have stable `id`, `title`, `genre`, `year`, `console`, `rating` fields; retain source URLs and provenance when importing. Missing metadata must remain unverified. Remove sample fallback when moving to a live catalog.

## Commerce boundary

The stash creates no order, reservation or payment. USPS information describes the intended flow; there is no live rate API, generated postage or delivery promise. A live commerce phase requires confirmed inventory and prices, shipping origin, package weights/dimensions, destination policy, seller policies, server-side totals, payment handling and authorized shipping integration.
