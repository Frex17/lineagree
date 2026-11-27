# English version of the marketing site — design

## Why
The app ships in EN, IT, ES, FR, DE with English as the primary language and targets Europe. The site was Italian only. English must be the default.

## Goals
- English at the root: `/`, `/privacy`, `/terms`.
- All Italian pages under `/it`: `/it`, `/it/privacy`, `/it/termini`, `/it/blog/*`, `/it/enciclopedia`, `/it/specie/*`.
- 301 redirects from the old Italian URLs (`/termini`, `/blog`, `/blog/*`, `/enciclopedia`, `/specie/*`).
- `<html lang>`, `hreflang` (en, it, x-default=en) and `og:locale` on every page. The language switcher in the header goes to the same page in the other language, or to that language's home.
- The waitlist works in both languages, including the no-JavaScript fallback.

## Non-goals
- The blog, encyclopedia and species pages are not translated (follow-up). English pages link to them marked "(in Italian)".
- No ES/FR/DE yet. No redirect based on the browser language.

## Anti-goals
- Changing the meaning of the legal pages. The English versions are faithful translations, flagged for legal review.
- Adding dependencies. Putting app internals in this public repo.

## Approaches
1. **Chosen:** move the landing markup into `src/components/Landing.astro` with a `lang` prop. Shared chrome copy (header, footer, waitlist) goes in `src/i18n.ts`; landing copy sits next to its markup in `Landing.astro`. Each page file becomes a thin wrapper.
2. Duplicate the pages per language. Rejected: every design change would have to be made twice.
3. Astro's built-in `i18n` routing config. Rejected: we would still need a file per language, and we don't need its helpers.

## How
- `Base.astro` takes `lang` (`en` | `it`) and `alt` (the path of the equivalent page in the other language). The header, footer and skip link copy come from `src/i18n.ts`.
- `Waitlist.astro` takes `lang`. It sends a hidden `lang` field, so the no-JS fallback in `api/waitlist.js` redirects to `/it#lista` or `/#lista`. A test covers this.
- Legal pages stay as separate files per language: `privacy.astro` and `terms.astro` (EN), `it/privacy.astro` and `it/termini.astro` (IT).
- `public/sitemap.xml` lists the new URLs. `manifest.json` uses `lang: en` with an English name.

## Flag for legal review
- Terms: "Only adults resident in Italy" conflicts with a site aimed at Europe. The English version translates it as is.
- Which language version prevails if the translations differ.
