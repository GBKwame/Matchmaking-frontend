
function ApplyComSeven() {
  return (
    <>
    <div className="mx-auto max-w-3xl px-6 lg:px-10">
  <div className="mb-12">
    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-mocha/70">
      <span>Step 7 of 7</span>
      <span className="text-gold">Thank You</span>
    </div>
    <div className="h-1 w-full overflow-hidden rounded-full bg-champagne/60">
      <div
        className="h-full bg-gold transition-all duration-700"
        style={{ width: "100%" }}
      />
    </div>
  </div>
  <div className="rounded-[2rem] border border-border bg-ivory p-8 shadow-soft md:p-12">
    <div className="py-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
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
          className="lucide lucide-check h-7 w-7"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h2 className="mt-8 font-serif text-4xl text-cocoa md:text-5xl">
        Thank you for taking this beautiful step.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-mocha/80">
        Our team will thoughtfully review your application and reach out within
        48 hours via WhatsApp or email.
      </p>
      <a
        href="https://wa.me/14255045601?text=Hello%20MotherlandMatch%2C%20I%27d%20like%20to%20speak%20with%20a%20matchmaker."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-gold to-gold/80 px-8 py-4 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
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
          className="lucide lucide-message-circle h-4 w-4"
          aria-hidden="true"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
        </svg>
        Message us on WhatsApp · +1 425 504 5601
      </a>
    </div>
  </div>
  <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-mocha/60">
    Private · Verified · Handpicked
  </p>
</div>

    </>
  )
}

export default ApplyComSeven
