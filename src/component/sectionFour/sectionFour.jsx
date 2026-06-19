import { motion } from "framer-motion";
import secTionFour from "../../assets/sectionFour.jpg";

function SectionFour() {
  return (
    <section className="bg-[#F8EFE0] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-start gap-16 lg:grid-cols-2">
                <div className="lg:sticky lg:top-32">
                    <div className="aspect-4/5 overflow-hidden rounded-4xl shadow-soft">
                     <img alt="An African couple embracing softly, foreheads touching" loading="lazy" width="1280" height="1600" className="h-full w-full object-cover" src={secTionFour}></img>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#CA9C4E]">
                       <span className="h-px w-8 bg-[#CA9C4E]/60"></span>
                       "How It Works"
                       <span className="h-px w-8 bg-[#CA9C4E]/60"></span>
                    </div>
                    <h2 className="font-serif text-3xl leading-tight text-[#392316] md:text-4xl lg:text-5xl text-left">A thoughtful 4-step journey to intentional love.</h2>
                <div className="mt-5 space-y-5">
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                                <span className="font-serif text-3xl text-[#CA9C4E]">01</span>
                                <span className="mt-2 h-full w-px flex-1 bg-linear-to-b from-gold/40 to-transparent"></span>
                        </div>
                        <div className="pb-2">
                            <h3 className="font-serif text-2xl text-[#392316] md:text-3xl">Apply Privately</h3>
                            <p className="mt-2 max-w-md leading-relaxed text-[#967969]/80">Share your story, values, and what you're looking for in a calm, respectful application.</p>
                        </div>
                    </div>
                     <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                                <span className="font-serif text-3xl text-[#CA9C4E]">02</span>
                                <span className="mt-2 h-full w-px flex-1 bg-linear-to-b from-gold/40 to-transparent"></span>
                        </div>
                        <div className="pb-2">
                            <h3 className="font-serif text-2xl text-[#392316] md:text-3xl">Personal Matchmaker Review</h3>
                            <p className="mt-2 max-w-md leading-relaxed text-[#967969]/80">Our team reviews your profile and gets to know you through a personal conversation.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                                <span className="font-serif text-3xl text-[#CA9C4E]">03</span>
                                <span className="mt-2 h-full w-px flex-1 bg-linear-to-b from-gold/40 to-transparent"></span>
                        </div>
                        <div className="pb-2">
                            <h3 className="font-serif text-2xl text-[#392316] md:text-3xl">Thoughtful Compatibility Matching</h3>
                            <p className="mt-2 max-w-md leading-relaxed text-[#967969]/80">We hand-select matches based on culture, lifestyle, goals, and long-term vision</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                                <span className="font-serif text-3xl text-[#CA9C4E]">04</span>
                                <span className="mt-2 h-full w-px flex-1 bg-linear-to-b from-gold/40 to-transparent"></span>
                        </div>
                        <div className="pb-2">
                            <h3 className="font-serif text-2xl text-[#392316] md:text-3xl">Warm, Intentional Introductions</h3>
                            <p className="mt-2 max-w-md leading-relaxed text-[#967969]/80">Meet someone truly aligned with you in a safe, guided, and meaningful way</p>
                        </div>
                       
                    </div>
                     <a href="/apply" className=" inline-block rounded-full bg-gradient-to-r from-[#DAAB5D] to-[#DAAB5D]/80 px-8 py-4 text-sm font-medium tracking-wide text-white shadow-[#FFD700] transition-transform hover:scale-[1.03]">Begin Your Private Application</a>
                    
                </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default SectionFour
