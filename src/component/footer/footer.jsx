
import logo from "../../assets/logo.png"
function Footer() {
    return (
        <footer className="border-t border-border bg-cream">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid gap-12 md:grid-cols-3">
                    <div>
                        <img src={logo} alt="Logo" className="h-10 w-10" />
                        <p class="mt-6 max-w-sm text-sm leading-relaxed text-[#362519]/80">Private, hand-curated matchmaking for Africans and the diaspora seeking intentional love and lifelong partnership.</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#CA9C4E]">Explore</h4>
                        <ul className="mt-5 space-y-3 text-sm text-[#362519]/80">
                            <li>
                                <a className="hover:text-[#CA9C4E] active" href="/" data-status="active" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a className="hover:text-[#CA9C4E]" href="/about" data-status="active" aria-current="page">About Us</a>
                            </li>
                            <li>
                                <a className="hover:text-[#CA9C4E]" href="/how-it-works" data-status="active" aria-current="page">How It Works</a>
                            </li>
                            <li>
                                <a className="hover:text-[#CA9C4E]" href="/membership" data-status="active" aria-current="page">Membership</a>
                            </li>
                            
                            <li>
                                <a className="hover:text-[#CA9C4E]" href="/apply" data-status="active" aria-current="page">Apply Now</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#CA9C4E]">Connect</h4>
                        <ul className="mt-5 space-y-3 text-sm text-[#362519]/80">
                            <li>
                                <a href="https://wa.me/14255045601?text=Hello%20MotherlandMatch%2C%20I%27d%20like%20to%20speak%20with%20a%20matchmaker." target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp +1 425 504 5601</a>
                            </li>
                            <li>
                                <a href="mailto:hello@motherlandmatch.com" class="hover:text-gold">hello@motherlandmatch.com</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="mt-14 border-t border-border pt-6 text-center text-xs text-[#362519]/60">© 2026 MotherlandMatch. A private matchmaking sanctuary.</div>
            </div>
        </footer>
    )
}

export default Footer
