# Reality Split

A word sits selected in a design tool that starts thinking for itself: it splits into letter objects, they scatter, the view dives in, the letters take turns being inspected at huge scale, then everything collapses to a dot and pops back whole. Each pass replays as a different word, in a different colour world, with a different kind of shape under the letters.

## Why

The reference for this piece was a single 162-frame clip of the word "Reality" — every ease, seam gap, drift law, and handle physic in here came off that clip frame by frame. But almost everything that looked like a property of those seven specific letters turned out to be a property of the mechanism instead, and finding that out is most of the engineering.

The clearest example: the original scatter targets were keyed by character. `a` went to dead centre, and the camera dove into dead centre — so on "Animation," the letter that got magnified was whichever one happened to be named `a`, not the first letter. The same character-keying stacked both `i`s of a word on one point and dropped every letter the reference clip hadn't named onto a fallback ring. One piece of hardcoded data was hiding four separate bugs at once. The fix wasn't a patch — it was to key everything by index instead: the constellation is generated fresh for any word, word[0] always parks at centre because the letter the camera magnifies has to be the letter the inspection opens on, and the rest spiral out on the golden angle so no two are ever in line.

## How it works

- **The constellation is generated, not tabulated.** Word[0] sits at centre; the rest spiral out on the golden angle (137.5°) and then relax apart over sixty passes using each glyph's real box size, with every box clamped inside the card. Deterministic — a given word always produces the same picture.
- **Boxes are measured off the glyphs.** Every letter's ink bounds (not its em box) plus a padding ratio recovered from the reference become its box, so a capital A or M never hangs outside its own selection box the way it did under the original hand-measured, single-fallback sizes.
- **The inspection dwell is a floor, not a remainder.** Built forward from a guaranteed still hold, then the loop stretches to fit the word — a nine-letter word gets a longer piece at the same speed, not a faster piece squeezed into a fixed window.
- **One motion language everywhere:** lazy wind-up, violent middle, long soft landing, zero rotation. The measured curves have fatter tails than any cubic-bezier or sigmoid, so every phase ships its control points through a monotone cubic spline instead.
- **Shapes grow by geometry, not taste.** An ellipse inscribed in a letter's rectangular ink box clips the corners, so the box gets scaled by √2 first; a squircle needs 2^¼. Applied at measure time, so the scatter's overlap relaxation sees the true occupied size.

## Stack

- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS v4
- **Rendering:** a single `<canvas>` and the 2D context — no WebGL, no CSS animation, no animation library
- **Type:** Helvetica Bold via the system font stack (`Helvetica, Arial, sans-serif`) — Helvetica isn't licensed to ship as a web font, and Arial is metric-compatible enough that the reference clip's measured padding ratios still hold

The animation (`src/components/reality-split/`) doesn't import React or Next — `engine.ts` is a plain class taking `(canvas, options)`, `params.ts` holds the measured constants and the palette/variant library fenced clearly apart from what an instance is meant to override, and `reality-split-card.tsx` is the thin wrapper that mounts it and watches for visibility, reduced-motion, and route transitions.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
