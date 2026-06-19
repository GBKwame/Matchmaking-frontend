
function ApplyComOne({formData,setFormData,handleNext,handleBack,currentSetup,totalSteps}) {

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }



  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10">
  <div className="mb-12">
    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-mocha/70">
    <span>Step {currentSetup+1} of {totalSteps}</span>
      <span className="text-gold">Let's Begin Your Journey</span>
    </div>
    <div className="h-1 w-full overflow-hidden rounded-full bg-champagne/60">
      <div
        className="h-full bg-gold transition-all duration-700"
        style={{ width: `${((currentSetup + 1) / totalSteps) * 100}%` }}
      />
    </div>
  </div>
  <div className="rounded-[2rem] border border-border bg-ivory p-8 shadow-soft md:p-12">
    <div>
      <header className="mb-8 text-center">
        <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
          Let's Begin
        </div>
        <h2 className="mt-3 font-serif text-3xl text-cocoa md:text-4xl">
          Welcome — we're glad you're here.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-mocha/75">
          Tell us where to find you. Everything you share stays private.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-mocha/70">
            First Name
          </span>
          <input
            name="firstName"
            value={formData.firstName}
            
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm text-cocoa placeholder:text-mocha/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          />
        </label>
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-mocha/70">
            Email Address
          </span>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm text-cocoa placeholder:text-mocha/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            type="email"
            defaultValue=""
          />
        </label>
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-mocha/70">
            WhatsApp Number
          </span>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm text-cocoa placeholder:text-mocha/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            placeholder="+1 425 504 5601"
            defaultValue=""
            
          />
          <span className="mt-1 block text-xs italic text-mocha/60">
            We'll use this to reach you personally.
          </span>
        </label>
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-mocha/70">
            Gender
          </span>
          <select name="gender" value={formData.gender} onChange={handleChange}
           className="mt-2 w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm text-cocoa placeholder:text-mocha/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30">
            <option value="">Select</option>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.18em] text-mocha/70">
            Country of Residence
          </span>
          <input
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-sm text-cocoa placeholder:text-mocha/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            defaultValue=""
          />
        </label>
      </div>
    </div>
    <div className="mt-10 flex items-center justify-between gap-4">
      <button
        onClick={handleBack}
        disabled={currentSetup === 0}
        type="button"
        disabled=""
        className="flex items-center gap-2 rounded-full border border-mocha/30 px-5 py-2.5 text-sm text-cocoa transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
      >
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
          className="lucide lucide-chevron-left h-4 w-4"
          aria-hidden="true"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>{" "}
        Back
      </button>
      <button
        onClick={handleNext}
        type="button"
        className="flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
      >
        Continue{" "}
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
          className="lucide lucide-chevron-right h-4 w-4"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
  <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-mocha/60">
    Private · Verified · Handpicked
  </p>
</div>

  )
}

export default ApplyComOne
