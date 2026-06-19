
import sectionTwoImg from "../../../assets/sectionTwo.jpg";

function AboutSectionTwo() {
  return (
   <section className="bg-cream py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
        <img
          alt="Elegant couple"
          loading="lazy"
          width={1280}
          height={1600}
          className="h-full w-full object-cover"
          src={sectionTwoImg}
        />
      </div>
      <div>
        <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
          <span className="h-px w-8 bg-gold/60" />
          Our Story
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <h2 className="font-serif text-4xl leading-tight text-cocoa md:text-5xl lg:text-6xl text-left">
          Born from a longing felt across continents.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mocha/85">
          We watched accomplished Black professionals — at home and across the
          diaspora — struggle to find partners who shared their language of
          love: family, faith, ambition, and roots. The apps failed them. The
          introductions felt random. The waiting grew heavy.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-mocha/85">
          MotherlandMatch is our answer. A quiet, private, deeply human service
          where real matchmakers do the listening, the curating, and the
          introducing — so you can do the loving.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutSectionTwo
