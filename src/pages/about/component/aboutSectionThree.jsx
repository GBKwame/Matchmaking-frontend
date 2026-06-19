


function AboutSectionThree() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
        <span className="h-px w-8 bg-gold/60" />
        Our Values
        <span className="h-px w-8 bg-gold/60" />
      </div>
      <h2 className="font-serif text-4xl leading-tight text-cocoa md:text-5xl lg:text-6xl ">
        What guides every introduction.
      </h2>
    </div>
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      <div className="rounded-3xl border border-border bg-cream/50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-gold to-gold/80 text-primary-foreground shadow-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart h-6 w-6"
            aria-hidden="true"
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-3xl text-cocoa">Warmth</h3>
        <p className="mt-3 text-mocha/80">
          Every conversation feels like coming home.
        </p>
      </div>
      <div className="rounded-3xl border border-border bg-cream/50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-gold to-gold/80 text-primary-foreground shadow-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield-check h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-3xl text-cocoa">Privacy</h3>
        <p className="mt-3 text-mocha/80">
          Your story is held with the utmost discretion.
        </p>
      </div>
      <div className="rounded-3xl border border-border bg-cream/50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-gold to-gold/80 text-primary-foreground shadow-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles h-6 w-6"
            aria-hidden="true"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx={4} cy={20} r={2} />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-3xl text-cocoa">Intention</h3>
        <p className="mt-3 text-mocha/80">
          We curate for character, not convenience.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutSectionThree
