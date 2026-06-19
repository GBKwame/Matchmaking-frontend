
import sixsectionIma from "../../assets/sectionSix.jpg"

function SectionSix() {
  return (
   <section className="relative isolate section-six">
    <img src={sixsectionIma} alt="A couple walking together at golden hour" loading="lazy" width="1920" height="1280" class="absolute inset-0 h-full w-full object-cover"></img>
    <div class="absolute inset-0 bg-linear-to-r  via-ivory/20 to-[#FFFFF0]/40"></div>
    <div class="absolute inset-0 bg-linear-to-r from-[#FFFFF0]/90 to-transparent"></div>

    <div className="relative mx-auto flex min-h-[80svh] max-w-7xl items-center px-6 py-32 lg:px-10">
       <div className="max-w-2xl">
            <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#CA9C4E]">
                <span class="h-px w-8 bg-gold/60"></span>
                 "The Love You're Ready For"
                <span class="h-px w-8 bg-gold/60"></span>
            </div>
            <h2 class="font-serif text-4xl leading-tight text-[#392316] md:text-5xl md:text-6xl">Imagine meeting someone who <em class="not-italic text-[#CA9C4E]">truly understands you.</em></h2>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-[#362519]">A love rooted in shared culture, emotional safety, mutual respect, and aligned values. A partnership that honors your heritage, supports your dreams, builds a legacy, and finally feels like home.</p>
       </div>
    </div>
   </section>
  )
}

export default SectionSix
