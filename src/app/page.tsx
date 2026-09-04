import { RealitySplitCard } from "@/components/reality-split/reality-split-card";

const BUILT_FROM = [
  "The constellation is generated, keyed by index, not by character. Word[0] parks dead centre and the rest spiral out on the golden angle — 137.5°, so no two letters are ever in line — then relax apart over sixty passes using each glyph's real box size.",
  "Boxes are measured off the glyphs, not tabulated. Every letter's ink bounds plus a recovered padding ratio become its box, so a word the reference never saw still gets a box its own letters actually fit inside.",
  "The inspection train's dwell is a floor, not a remainder: built forward from a guaranteed still hold, and the loop stretches to fit the word rather than racing every letter to fit a fixed loop length.",
  "One motion language everywhere — lazy wind-up, violent middle, long soft landing, zero rotation — shipped as measured control points through a monotone cubic spline, because the real curves have fatter tails than any closed-form ease.",
];

const CONSTRAINTS = [
  "Shapes grow by geometry, not taste. An ellipse inscribed in a letter's box clips the ink corners, so the box is scaled by √2 first — a squircle by 2^¼ — measured before the scatter's overlap relaxation ever runs, not at draw time.",
  "Seed 0 is the measured layout, exactly. The jitter a seed adds is multiplied by a factor that's zero at seed 0, so turning the knob can never perturb the reference composition.",
  "Letters fade and defocus under the zoom instead of relying on it to sweep them off-frame — and the blur radius is divided by the glyph's own scale, since a canvas filter blurs in the current transform space.",
  "Measured and tunable constants are fenced apart on purpose. The eases, seam gaps, and drift law came off the reference clip frame by frame; the word, palette, shape, and seed are the only things an instance is meant to touch.",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-8">
        <span className="text-sm font-bold tracking-tight">Reality Split</span>
        <a
          href="https://github.com/prashantkoirala465/reality-split"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            A word that starts thinking for itself.
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Selected in a design tool, it splits into letter objects, each
            with its own four handles. They scatter across the card, the
            view dives into the first letter, and the rest take turns
            sliding through center at huge scale — then everything collapses
            to a dot and pops back whole, ready to replay as a different
            word in a different colour world.
          </p>
        </div>

        <RealitySplitCard />
      </main>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
              How it&apos;s built
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {BUILT_FROM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
              Constraints
            </h2>
            <ul className="mt-4 flex flex-col gap-4 text-sm leading-relaxed">
              {CONSTRAINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span>© {year} Prashant Koirala</span>
          <a
            href="https://github.com/prashantkoirala465/reality-split"
            className="transition-colors hover:text-foreground"
          >
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}
