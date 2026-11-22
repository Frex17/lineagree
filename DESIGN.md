---
name: Lineagree
description: Matchmaking for pedigree dogs and cats, signposted like a mountain trail.
colors:
  field: "#0e6b3a"
  field-deep: "#0a5229"
  field-ink: "#e9f3ec"
  field-soft: "#cfe6d7"
  plate: "#ffffff"
  plate-edge: "#d9e4dc"
  ink: "#16191b"
  ink-soft: "#46504a"
  blaze: "#d52b1e"
  tip: "#f2c200"
  pole: "#6e756f"
  error: "#b0231a"
typography:
  display:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline-board:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1
  lede:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  meta:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.3
  label-cap:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 900
    letterSpacing: "0.06em"
rounded:
  control: "6px"
  plate: "10px"
  pill: "999px"
spacing:
  u: "8px"
  u2: "16px"
  u3: "24px"
  u4: "32px"
  u6: "48px"
  u8: "64px"
  u12: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plate}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  enamel-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
  arrow-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    padding: "20px 48px 20px 24px"
  arrow-plate-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.plate}"
    height: "44px"
  nav-cta:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    padding: "8px 32px 8px 16px"
  nav-cta-hover:
    backgroundColor: "{colors.tip}"
  input:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
  badge:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px 2px"
  badge-verified:
    backgroundColor: "{colors.field}"
    textColor: "{colors.plate}"
    rounded: "{rounded.pill}"
---

# Design System: Lineagree

## Overview

**Creative North Star: "Cartelli di sentiero"**

Every match is a trail sign: breed, purpose and kilometres toward another pedigree animal. The page is a park-sign green field. Content sits on white enamel plates lettered in heavy black, and the plates that point somewhere are cut as arrows. The system borrows the material honesty of Italian mountain signage: few colours, each with one job, flat graphic objects with a little real weight under them.

Density is low and confident. Large green regions carry the page; plates are the only containers. One 8px module sizes every plate, gap and padding, so a plate on the signpost, a step on the trail and the waitlist form read as the same object at different scales. Motion is reserved for one authored moment: a plate turning on the post as a match lands.

This is the owners' format. The breeders' "Ring d'expo" format (show-ring rosettes, armband numbers) is a future variant held in PRODUCT.md; it is not part of this system and nothing here should anticipate it.

Blog, species, encyclopedia and offline pages are built in this system (src/pages/blog, src/pages/specie, src/pages/enciclopedia.astro, src/pages/offline.astro; content in src/data/content.json). Only `public/matches.html`, the old swipe demo, predates it: do not derive tokens or patterns from it.

**Key Characteristics:**
- Green field, white enamel plates, black lettering; nothing else carries large area.
- Arrow-shaped plates for anything that points: links, steps, intents, the form.
- CAI red-white-red blaze only on the active match.
- Trail-sign yellow only on arrow tips, focus and selection.
- One 8px grid module everywhere.
- Overpass at weight 900 for every heading.

## Colors

Four material colours from real signage (green, white, black, red), plus a yellow and a grey that only appear as hardware.

### Primary
- **Park-Sign Green** (field): the page background and the colour of large regions. Also the fill of the verified badge, the "all articles" arrow, and list-rule arrowheads on white.
- **Deep Forest Green** (field-deep): alternate band for full-width sections (the trail section, the footer) and hover on green arrows.

### Secondary
- **CAI Blaze Red** (blaze): the red-white-red flag on the active signpost plate and the active plate's km figure. Nothing else.

### Tertiary
- **Signpost Yellow** (tip): the cut tip of each signpost arrow, the focus ring, text selection, and the nav CTA hover.

### Neutral
- **Enamel White** (plate): every content surface; button text on ink.
- **Plate Seam** (plate-edge): ruled lines between entries on a white board.
- **Sign Lettering** (ink): text on plates, the primary button, plate borders.
- **Weathered Lettering** (ink-soft): secondary text on plates.
- **Green-Tinted Light** (field-ink): body text on green.
- **Green-Tinted Soft** (field-soft): secondary text on green; tinted, never grey, and kept at 4.5:1 or better on the field.
- **Pole Steel** (pole): the signpost pole only.
- **Error Red** (error): validation and failure messages under the form.

### Named Rules
**The Blaze Rule.** Blaze red marks the active match and nothing else. If a screen has no active match, it has no blaze.

**The Hardware Rule.** Yellow and pole grey are sign hardware, not palette. They never fill a section or a content plate, and never carry text; the nav CTA's yellow hover is the one plate-sized use.

## Typography

**Display Font:** Overpass (with system-ui, sans-serif)
**Body Font:** Overpass (with system-ui, sans-serif)

**Character:** One highway-signage face across the whole system. Headings at 900 are the sign lettering; body at 400 stays plain and legible. Tabular figures are on globally so distances line up.

### Hierarchy
- **Display** (900, clamp(2.25rem, 5.2vw, 4.5rem), 1.02): the hero headline, always on its own white plate.
- **Headline** (900, clamp(2rem, 4vw, 3.25rem), 1.02): section titles set on the green field, max 20ch.
- **Headline Board** (900, clamp(1.875rem, 3.4vw, 2.75rem), 1.02): titles inside a large enamel board (trust, blog).
- **Title** (900, 1.5rem, 1): plate names, step titles, intent names. Species plates go up to 2rem.
- **Lede** (400, 1.25rem, 1.55): the hero lede, max 34ch.
- **Body** (400, 1.0625rem, 1.55): running text, 46 to 68ch.
- **Meta** (700, 0.9375rem): breed and registry lines, captions, badge text, form messages.
- **Label Cap** (900, 0.875rem, 0.06em, uppercase): the signpost cap (place name) only.

### Named Rules
**The Lettering Rule.** Every h1 to h3 is Overpass 900, line-height 1.02, -0.02em, balanced wrap. Hierarchy comes from size, never from a second face or a lighter weight.

**The Drawn Dot Rule.** Inline separators are a drawn 4px dot, not a typed middot; Overpass sets the middot too high.

## Layout

Everything is a multiple of the 8px module: gaps of 16 to 48px, section padding of 64 to 96px. The container is `min(100% - 32px, 1200px)`, which keeps a 16px gutter on phones.

The hero is two columns: the headline plate and lede on the left for reading order, the signpost on the right. Below 900px it stacks title, signpost, lede. Below 520px the signpost shows two profile plates plus the form plate, so the post stays in the first screen.

Content sections alternate between the green field and full-width deep-green bands. Plates inside a section stagger slightly (the trail steps drop 24px per step) to read as signs along a path. Two-column grids (intents, blog list) fold to one column at 900px. The nav keeps only the CTA below 640px.

## Elevation & Depth

Plates are physical objects bolted to a flat field: one soft shadow, no layering beyond that. Arrow plates are clipped with clip-path, so they take the same shadow as a drop-shadow filter instead of box-shadow.

### Shadow Vocabulary
- **Plate shadow** (`box-shadow: 0 2px 3px rgb(6 38 20 / 0.35), 0 10px 24px -8px rgb(6 38 20 / 0.45)`): enamel plates and the waitlist form.
- **Arrow shadow** (`filter: drop-shadow(0 2px 2px rgb(6 38 20 / 0.35)) drop-shadow(0 10px 14px rgb(6 38 20 / 0.3))`): every clipped arrow plate.

### Named Rules
**The Green Shadow Rule.** Shadows are tinted with the field's own dark green, never neutral black.

## Shapes

Two silhouettes. The **enamel plate** has gently rounded corners (10px), a white margin, then a 2px black inner border inset 3px from the edge, like a stamped sign; large boards add two screw heads at the top corners. The **arrow plate** is a rectangle with a pointed end (point depth 32px, 40px on the signpost, 16 to 20px on small links), pointing right by default and left as a variant. Controls (button, input) are 6px. Status badges are full pills.

**The Arrow Means Direction Rule.** A plate is cut as an arrow only when it leads somewhere or represents a step along the way. Status (pedigree caricato, verificato) is a pill, because a badge reports what was checked; it does not point.

## Components

### Buttons
Solid and plain, like the black panel of a sign.
- **Shape:** 6px corners, minimum 48px tall.
- **Primary:** ink background, white text, 800 weight, 24px side padding.
- **Hover / Focus:** goes to pure black and lifts 1px (180ms, ease-out expo). Focus is the global 3px yellow ring, offset 3px.
- **Disabled:** 60% opacity with a progress cursor while the form submits.

### Chips (status badges)
- **Style:** outline pill, 2px ink border, 800 weight, meta size.
- **Verified:** filled field green with white text. Only shown for what a moderator actually checked.

### Cards / Containers
- **Enamel plate:** 10px corners, white, plate shadow, inset black border; screws on large boards. Internal padding 32 to 48px (24px on phones).
- **Arrow plate:** white, arrow shadow, 20 to 32px padding with extra room on the pointed side. Used for trail steps, intent plates, species links, the waitlist form.

### Inputs / Fields
- **Style:** white, 2px ink border, 6px corners, 48px tall, placeholder in a mid green-grey.
- **Focus:** the global yellow ring.
- **Error:** message under the field in error red, 700 weight; success message in field green, 800.

### Navigation
- **Style:** the brand sits on a small enamel plate with a green arrow mark. Links are 700-weight field-ink on green, underline on hover. The CTA is a small white arrow plate that turns yellow on hover. Below 640px only the brand and the CTA remain.

### Signpost (signature)
A grey pole with a place-name cap; profile plates clamped to it with a dark band, alternating left and right, each with a yellow tip. A plate shows name, breed with registry, "Cerca:" purpose, and km with city. The active plate shows the blaze flag and a red km figure. Activating a plate turns it on the post (rotateY to 90deg, face swaps edge-on, turns back over 420ms); reduced motion swaps the face with no turn. The waitlist form is the last plate on the post.

## Do's and Don'ts

### Do:
- **Do** size every gap, padding and plate dimension from the 8px module.
- **Do** put content on white enamel or arrow plates; let the green field carry the space between them.
- **Do** cut a plate as an arrow when it leads somewhere or marks a step; keep status as a pill.
- **Do** label synthetic profiles as examples ("profili di esempio").
- **Do** keep secondary text on green in the tinted soft green at 4.5:1 or better.

### Don't:
- **Don't** use blaze red for anything except the active match.
- **Don't** use signpost yellow or pole grey as fills, backgrounds or text colours.
- **Don't** introduce a second typeface or set headings below weight 900.
- **Don't** add motion beyond the plate turn and small hover shifts; the turn must have a no-motion fallback.
- **Don't** use neutral black shadows; shadows are field-tinted.
