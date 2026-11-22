# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

(This record covers the marketing site. A native mobile app for the App Store is a separate, later surface; its platform will be recorded when that work starts.)

## Stack

Astro, static output, deployed on Vercel (lineagree.vercel.app). Replaces the current hand-written static HTML pages. User chose Astro on 2026-11-22.

## Users

Primary: private owners in Italy of a pedigree dog or cat (ENCI LOI/LOR, ANFI). They want to find another pedigree animal of the same breed nearby, for reasons they choose themselves: a mating (monta), a single litter, getting to know other owners, or an economic agreement.

Secondary, later phase: certified breeders. Not the launch audience.

## Product Purpose

Lineagree is matchmaking for pedigree animals: a "Tinder for animals with pedigree". Owners create a profile for their animal, swipe through compatible animals nearby, and a mutual like opens a chat between the two owners. They agree everything else in the chat.

The site exists to explain the product, rank in search through the blog and species pages, and collect real early-access sign-ups for the app. Success for the site: people understand what Lineagree is and leave a working email for the app launch.

## Positioning

Unlike Facebook groups and classified ads, every Lineagree profile is built around the pedigree: registry, number and lineage come first, and matches are filtered by breed, distance and what each owner says they are looking for.

## Operating Context

- Each animal profile has a "Cosa cerco" multi-select (monta, una cucciolata, conoscersi, accordo economico) used for ranking and filtering.
- Distance in km is the main filter; only city and distance are shown, never a precise location.
- Pedigree at launch: self-declared plus a photo of the pedigree document ("pedigree caricato" badge). Later: manual moderator check of the LOI/LOO number and photo ("verificato" badge). No ENCI/ANFI API exists.
- The app does not handle payments or contracts between owners.

## Capabilities and Constraints

- Launch species in the app: dogs and cats only. Horses, rabbits, birds and fish remain as site content pages and arrive in the app later.
- Italy only. Languages: Italian (primary) and English.
- Free at launch. A premium plan for breeders is a later phase. No advertising.
- Safety: report and block users, 18+ only.
- The site keeps: landing, blog (6 Italian articles), species pages, encyclopedia, PWA manifest. The waitlist must actually store emails (today it stores nothing). Privacy and Terms pages must exist (today the links are `#`).
- The old matches.html demo (8 hard-coded animals) was removed; real matching will live in the app.

## Brand Commitments

- Name: Lineagree.
- Two visual formats coexist (user, 2026-11-22): "Cartelli di sentiero" (trail/park signage) for private owners now; "Ring d'expo" (show-ring rosettes, armband numbers) reserved for the breeders' format when breeders launch.
- Current logotype and look are not binding. Keep the existing logo only if nothing better is found during redesign (user, 2026-11-22).

## Evidence on Hand

- Blog articles and images: `blog/*.html`, `blog/images/*.jpg`.
- Species and encyclopedia copy: `specie/*.html`, `enciclopedia.html`.
- No real users, waitlist numbers, reviews, partners, or real owner/animal photos yet. The site must not show invented numbers, testimonials, partners or "verified" claims.

## Product Principles

1. Pedigree first: lineage and registry are the core of every profile, not a footnote.
2. Owners decide the purpose of a match; the product never assumes breeding.
3. Honest trust signals: a badge says exactly what was checked, nothing more.
4. Privacy by default: city and distance, never exact location.
5. Private owners first; breeders are a later layer, not the default voice.

## Accessibility & Inclusion

WCAG 2.1 AA contrast and keyboard access on the site (the current pages fail AA contrast in many places).
