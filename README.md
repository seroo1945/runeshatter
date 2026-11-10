# Runeshatter: GitHub Pages teaser v1.8

Static site for GitHub Pages. Deploy `index.html`, `styles.css`, `script.js`, and `assets/` at repository root. No backend or build required.

## Story and platform corrections
- Lore reflects the current approved story: Serath and the Order of the Seven Wardens; the pact with the Voice Beyond the Veil; seven seals imprisoning innocent souls; Aldren Veyr breaking the Seal of Silence to save Elira; the false voice; ruined Wrzosowice; the fallen Order member; Grûmak as a protective chieftain rather than the village's destroyer.
- Android is labeled **COMING SOON** and iOS **COMING 2027** (target, subject to change). No monetization promises are published.
- Existing art is preserved, but explicitly provisional; screenshots and dialogue visuals are concepts, not final in-game assets.
- The 25 fights / five regions of Act I remain a development plan.

## Publishing checklist
- Review art rights and story spoilers before publishing.
- Provide a genuine social, community or mailing-list destination for a follow button; the current page has sharing only.
- Verify responsive display on mobile and the GitHub Pages URL after deployment.


## v1.5: Artwork status
Visible WORK IN PROGRESS notices have been added beside concept art, the rune-board mockup, hero/enemy galleries, dialogue UI concept and in the footer. Images and character designs are provisional and may change.


## Update v1.6: Early development preview
- Added `assets/runeshatter-development-preview.webp` (optimized promotional concept image).
- Added the `#first-look` section directly below the hero and a Preview navigation link.
- Image is marked **WORK IN PROGRESS · CONCEPT PREVIEW**; it is not represented as an exact game screenshot.
- All previous site content and assets are retained.
- To deploy: upload **the contents** of this archive to the GitHub Pages publishing root (normally the repository root), replacing the old files.

## v1.7
- Dwa prostokątne przyciski pod logo zastąpiono ozdobnymi, ściętymi w narożnikach przyciskami w stylistyce ciemnego metalu i postarzanego złota.
- Bez zmian układu, tekstów i pozostałych sekcji.

## v1.8: Typography
Removed en dashes and em dashes from all site copy and supporting text. No visual or functional changes.

## v1.9
Replaced geometric black skyline behind the hero with an atmospheric SVG illustration of Valdorian ruins and fog. Kept the v1.8 buttons, text, graphics, and other sections unchanged.

## v2.0: Hero background visibility fix
- Added higher-contrast ruined stone towers and soft fog behind the hero text.
- Kept the center clear for logo and copy, no rectangular skyline.
- Bumped CSS cache key to `styles.css?v=20` so GitHub Pages visitors receive new styling.
- Upload the entire archive contents to the repository root, including `assets/hero-valdoria-ruins-v2.svg`.

## v2.1: Two-phone preview and clean links
- Replaced the full promotional poster with two phones on transparent background.
- Added three independent feature highlights below the phones.
- Added canonical and Open Graph URL for the official GitHub Pages site.
- The Share action now shares the official GitHub Pages URL, not a local file URL or a link with tracking parameters.
- Bumped CSS and JS cache keys. All existing sections, art and fantasy buttons remain.

## v2.2 URL cleanup

On page load, legacy query parameters such as `?v=13&utm_source=chatgpt.com` are removed from the visible address using `history.replaceState`, preserving the current section anchor (`#journey`) and unrelated parameters. All navigation links remain local anchors. No redirect or reload occurs.

## v2.3
- Reworded the EARN YOUR VICTORIES feature description to remove repetition.

## v2.4: Custom domain
- Canonical and Open Graph URLs now use https://runeshattergame.com/.
- Open Graph image is an absolute HTTPS URL; added Twitter card metadata.
- Share button now uses the custom domain.
- Added root CNAME file to preserve GitHub Pages custom domain across deployments.
- No visual design changes.
- DNS and Enforce HTTPS are configured in OVH and GitHub, not in this ZIP.
