import SectionOneImg from "../../assets/seconOne.jpg";


function SectionOne() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
  <img
    src={SectionOneImg}
    alt="A loving African couple in warm golden-hour light"
    width={1920}
    height={1080}
    className="absolute inset-0 h-full w-full object-cover"
  />
  <div className="absolute inset-0 bg-linear-to-b  from-ivory/95 via-ivory/50 to-ivory/10" />
  <div className="absolute inset-0 bg-linear-to-t from-ivory via-transparent to-transparent" />
  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
    <div className="max-w-2xl fade-up">
      <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
        <span className="h-px w-10 bg-gold/60" />
        Private Matchmaking
      </div>
      <h1 className="font-serif text-5xl leading-[1.05] text-cocoa md:text-6xl lg:text-7xl">
        The person who truly sees you is{/* */}{" "}
        <em className="not-italic text-gold">closer than you think.</em>
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#362519] md:text-xl">
        Private, hand-curated matchmaking for Africans and the diaspora seeking
        intentional love, cultural connection, and lifelong partnership.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="/apply"
          className="rounded-full bg-linear-to-r from-gold to-gold px-8 py-4 text-center text-sm font-medium tracking-wide text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
        >
          Begin Your Private Application
        </a>
        <a
          href="https://wa.me/14255045601?text=Hello%20MotherlandMatch%2C%20I%27d%20like%20to%20speak%20with%20a%20matchmaker."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-mocha/30 bg-ivory/70 px-8 py-4 text-center text-sm font-medium tracking-wide text-cocoa backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          Speak with a Matchmaker
        </a>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-mocha/70">
        <span>✦ Private</span>
        <span>✦ Verified</span>
        <span>✦ Handpicked</span>
      </div>
    </div>
  </div>
</section>

  );
}

export default SectionOne;