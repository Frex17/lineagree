# English site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** English at the root of the marketing site, Italian moved under `/it`, with hreflang, a language switcher and redirects.

**Architecture:** One `Landing.astro` component renders both languages from a copy dictionary in `src/i18n.ts`. `Base.astro` owns `lang`, hreflang and the translated header and footer. Legal pages are separate files per language.

**Tech Stack:** Astro 5 (static, `build.format: 'file'`), Vercel (`cleanUrls`), Node test runner.

**Spec:** `docs/superpowers/specs/2026-11-27-english-site-design.md`

## Global Constraints
- No new dependencies.
- English copy is plain and natural, run through `humanizer`. Keep the app's term "Declared pedigree" for the badge.
- Legal pages: faithful translation, no change in meaning. Keep the draft banner.
- Page `id="lista"` stays the anchor in both languages.

## Review Focus
- An old Italian URL (`/termini`, `/blog/<slug>`, `/specie/cani`, `/enciclopedia`) must 301 to its `/it/` equivalent. Check `vercel.json` redirect patterns by reading them, and check that internal links in `/it/` pages never point to the old paths (grep `href="/blog`, `href="/specie`, `href="/enciclopedia"` returns nothing).
- No-JS waitlist post from an Italian page must land back on `/it/#lista`. Covered by a test in Task 1.
- An unknown or hostile `lang` value in the form post must fall back to `/#lista`, never an open redirect. Covered by a test in Task 1.
- The header at 390px with the extra switcher link must not wrap badly. Checked in the browser in Task 4.
- Canonical and hreflang URLs must have no `.html` suffix, and `/it/` must keep its trailing slash. Checked in the built HTML in Task 4.

---

### Task 1: Waitlist API returns to the right language
**Files:** Modify `api/waitlist.js` (the 303 redirect), Test `api/waitlist.test.js`
- [ ] Test `form post redirects back by language`: urlencoded post with `body {email, lang:'it'}` gives `Location '/it/#lista'`. With `lang:'en'`, `lang:'//evil.com'` or no lang, it gives `'/#lista'`.
- [ ] Run `npm test`: the new test fails.
- [ ] Implement: `Location = req.body.lang === 'it' ? '/it/#lista' : '/#lista'`.
- [ ] Run `npm test`: everything passes. Commit.

### Task 2: i18n dictionary, Base, Waitlist, Landing
**Files:** Create `src/i18n.ts`, `src/components/Landing.astro`, `src/pages/it/index.astro`. Modify `src/layouts/Base.astro`, `src/components/Waitlist.astro`, `src/pages/index.astro`.
**Interfaces:** `export type Lang = 'en' | 'it'`, `export const t: Record<Lang, {...}>`. `Base` props `{ title, description, lang: Lang, alt?: string }`. `Waitlist` props `{ id, lang: Lang }`. `Landing` props `{ lang: Lang }`.
- [ ] Move the markup, script and style of `index.astro` into `Landing.astro`. Take the copy from `t[lang]`. Demo profiles in EN: same names and breeds, European cities. Species and blog links go to `/it/...`, and EN adds "(in Italian)".
- [ ] Waitlist: the label, placeholder, button and JS messages come from `t[lang]`, passed to the script through `data-*` attributes. A hidden `<input name="lang">` carries the language.
- [ ] Base: `<html lang>`, `og:locale`, `<link rel=alternate hreflang>` for en, it and x-default when `alt` is set. Header switcher link (`hreflang`, `lang` attributes). Nav and footer links per language.
- [ ] `npm run build` passes. Commit.

### Task 3: Move Italian pages to /it/, EN legal, redirects, sitemap
**Files:** `git mv` `blog/`, `specie/`, `enciclopedia.astro` and `termini.astro` into `src/pages/it/`. Copy `privacy.astro` to `it/privacy.astro`. Rewrite `privacy.astro` in EN and create `terms.astro`. Modify `vercel.json`, `public/sitemap.xml`, `public/manifest.json`.
- [ ] Fix the import paths and internal links (`/it/blog`, `/it/specie`, `/it/enciclopedia`). Pass `lang="it"` everywhere, plus `alt` on the pages that have an EN twin.
- [ ] Redirects: `/termini`, `/enciclopedia`, `/blog`, `/blog/:slug`, `/specie/:slug` go to `/it/...` (permanent). Update the existing `/blog/index.html` redirect too.
- [ ] Rebuild the sitemap with the EN and IT URLs.
- [ ] `npm run build` and `npm test` pass. The Review Focus grep returns nothing. Commit.

### Task 4: Verify
- [ ] Run `npm run build`, then `astro preview`. In the built-in browser at desktop width and at 390px: `/`, `/it/`, `/privacy`, `/terms`, `/it/termini`, `/it/blog`. Check the switcher, `lang`, hreflang and canonical in the DOM.
- [ ] Run `ponytail-review` and `web-design-guidelines` on the changed UI. Fix the findings, then commit.
