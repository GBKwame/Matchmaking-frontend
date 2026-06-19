
import SectionTwoImg from "../../assets/sectionTwo.jpg";

function SectionTwo() {
  return (
    <section className="py-20">
      <div className="grid items-center gap-16 lg:grid-cols-2 px-6 md:px-12 lg:px-18 mx-auto max-w-8xl">
        <div>
          <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#FFD700]">
            <span class="h-px w-8 bg-[#FFD700]/60"></span>
            "Our Promise To You"
            <span class="h-px w-8 bg-[#FFD700]/60"></span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-[#875F42] md:text-5xl lg:text-6xl text-left">Love that finally feels like coming home.</h2>

          <p class="mt-6 text-lg leading-relaxed text-[#967969]/80">Tired of endless swiping and dating apps that never truly see you? At MotherlandMatch, finding love feels warm, intentional, and rooted in culture — the way it was always meant to be.</p>

          <div className="mt-10 space-y-5">
            <div className="group flex gap-5 rounded-2xl border border-border bg-[#F9F1E5]/60 p-6 transition-all duration-300 hover:border-[#C88B41] hover:shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C88B41] shadow-[#FFD700] text-white">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth h-5 w-5" aria-hidden="true"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>

                
              
              </div>
             
             <div>
               <h3 class="font-serif text-2xl text-[#875F42]">Cultural Compatibility</h3>
               <p class="mt-2 text-sm leading-relaxed text-[#967969]/80">We honor your heritage, values, faith, and family vision — because love rooted in culture lasts a lifetime.</p>
             </div>

            </div>

<div className="group flex gap-5 rounded-2xl border border-border bg-[#F9F1E5]/60 p-6 transition-all duration-300 hover:border-[#C88B41] hover:shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C88B41] shadow-[#FFD700] text-white">

               
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check h-5 w-5" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>

                
              
              </div>
             
             <div>
               <h3 class="font-serif text-2xl text-[#875F42]">Verified & Private</h3>
               <p class="mt-2 text-sm leading-relaxed text-[#967969]/80">Your information stays completely confidential. Every member is carefully verified by our team.</p>
             </div>

            </div>

            <div className="group flex gap-5 rounded-2xl border border-border bg-[#F9F1E5]/60 p-6 transition-all duration-300 hover:border-[#C88B41] hover:shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C88B41] shadow-[#FFD700] text-white">

               
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles h-5 w-5" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>

                
              
              </div>
             
             <div>
               <h3 class="font-serif text-2xl text-[#875F42]">Handpicked by Experts</h3>
               <p class="mt-2 text-sm leading-relaxed text-[#967969]/80">Real matchmakers personally curate every introduction. No algorithms. No swiping. Just intention.</p>
             </div>

            </div>
          </div>


          <div>

          </div>
        </div>
        <div className="relative">
           <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">

             <img src={SectionTwoImg} alt="sectionTwoImage" className="h-full w-full object-cover" loading="lazy" width="1280" height="1600" />
           </div>
           <div class="absolute -bottom-8 -left-6 hidden rounded-2xl border border-[#FFD700]/30 bg-ivory/90 px-6 py-5 shadow-[#FFD700] backdrop-blur md:block bg-white">
           <p class="font-serif text-3xl text-[#875F42]">94%</p>
           <p class="text-xs uppercase tracking-[0.22em] text-[#967969]/70">Members find a meaningful introduction</p>
           </div>
        </div>

      </div>
    </section>
  )
}

export default SectionTwo
