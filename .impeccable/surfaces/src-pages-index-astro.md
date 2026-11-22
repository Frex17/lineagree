---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Landing Lineagree (sito vetrina)

Scope: src/pages/index.astro (landing) plus shared layout used by blog, specie, enciclopedia, legal pages.
Visitor mode: Persuade (landing). Blog and specie pages are Read and inherit the world with restraint.

Audience: private owners in Italy of a pedigree dog or cat. Job: understand Lineagree and leave an email for app early access.
Action: waitlist email form, working, in the first viewport. When the app ships, the same slot becomes the App Store button.
Proof/content: no real users or numbers. Demonstration profiles are synthetic and labelled "profilo di esempio".
Must not feel like: a dating site, a registry/ente, a puppy e-commerce.
Future: breeders get the "Ring d'expo" world (rosettes, armband numbers) as their own format later; not on this surface now.

## Direction contract

THESIS: Ogni match è un cartello di sentiero: razza, intento e km verso un altro animale con pedigree. Refuses the category default of a phone mockup with pink swipe cards beside a headline.

OWN-WORLD: Park-sign green field (#0E6B3A family) carries large regions; white enamel sign plates with rounded corners and screw dots hold content; black sign lettering in Overpass (highway signage face) heavy for display; CAI red-white-red blaze reserved only for the active match; trail-sign yellow only for the signpost arrow tips. Arrow-shaped plates are the component language: links, cards, badges, the form. One grid module rules every plate.

STORY: The visitor sees a signpost of real-looking (synthetic) matches pointing to animals at given km, understands that matching is by breed, purpose and distance with pedigree on each plate, sees the three steps (profilo con pedigree, swipe, chat), and leaves the email.

FIRST VIEWPORT: Green field. Left-centre a tall signpost pole with 4 arrow plates stacked, each a synthetic profile (nome, razza, km, "cerca: ..."), pointing left and right; the top plate turns to show the red blaze as the active match. Headline on a large white plate at top: "Trova un compagno di razza vicino a te." The bottom arrow plate is the email form with "Entra in lista" button. Small nav plate at top.

FORM: assigned grounded candidate 3 of 7 (Cartelli di sentiero), seed:57a7e3cd2ceb0b78. Raises: single grid module (brick), red reserved for active match (film), one decisive plate-turn match moment (spy), arrow plate repeated at every scale (emigre). Signature interaction: the plate turn on the signpost (rotateY) when a match lands; reduced-motion swaps to a cross-fade.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Build adaptations (cited)
- Signpost sits in the right column on desktop: the headline plate needs the reading-order lead on the left. On ≤520px the post shows 2 plates plus the form plate so the signpost stays in the first screen.
- Trust badges stay pills: they are status chips (what was checked), not directions; arrows would imply navigation.
- Reduced motion: the face swaps instantly, no turn.

## Unresolved
- Waitlist storage backend: built as api/waitlist.js writing to a Supabase table `waitlist`; needs SUPABASE_URL and SUPABASE_SERVICE_KEY on Vercel and the table created. Must not lose emails.
- Privacy/Terms legal text needs the user's review before launch.
