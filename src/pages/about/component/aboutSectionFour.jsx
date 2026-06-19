import sectionSixImg from '../../../assets/sectionSix.jpg'

function AboutSectionFour() {
  return (
   <section className="relative isolate overflow-hidden">
  <img
    alt="Couple at golden hour"
    loading="lazy"
    width={1920}
    height={1080}
    className="absolute inset-0 h-full w-full object-cover"
    src={sectionSixImg}
  />
  <div className="absolute inset-0 bg-linear-to-b from-ivory/80 to-ivory/20" />
  <div className="relative mx-auto flex min-h-[60svh] max-w-7xl items-center px-6 py-24 lg:px-10">
    <div className="max-w-xl">
      <h2 className="font-serif text-4xl leading-tight text-cocoa md:text-5xl">
        Ready to be truly seen?
      </h2>
      <a
        href="/apply"
        className="mt-8 inline-block rounded-full bg-linear-to-r from-gold to-gold/80 px-8 py-4 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
      >
        Begin Your Private Application
      </a>
    </div>
  </div>
</section>

  )
}

export default AboutSectionFour
