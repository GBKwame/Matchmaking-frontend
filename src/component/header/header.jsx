
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {

  const [isopen, setIsopen]=useState(false)
  

  const sideMenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden")
    document.getElementById("desktop-menu").classList.toggle("lg:flex")

    setIsopen(!isopen)
    
    
    if(isopen===false){
      document.getElementById("mobile-menu-button").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`
    }else{
      
      document.getElementById("mobile-menu-button").innerHTML=` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>`
    }
   
  }

   window.addEventListener("scroll", () => {
      try{
        const header = document.querySelector("header")

        if (window.scrollY >5) {
          header.classList.add("bg-[#FAF5EC]", "shadow-md");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("bg-white/30", "shadow-md");
          header.classList.add("bg-transparent");
        }
      }catch(error){
        console.log(error)
      }
    })

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto lg:px-10">
        <Link to="/"><img className="h-12 w-auto" src={logo} alt="logo" /></Link>
        <div id="desktop-menu" className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-sm font-semibold tracking-wide text-gray-1000 transition-colors hover:text-[#CCA466]">Home</Link>
          <Link to="/about" className="text-sm font-semibold tracking-wide text-gray-1000 transition-colors hover:text-[#CCA466]">About us</Link>

          <Link to="/how-it-works" className="text-sm font-semibold tracking-wide text-gray-1000 transition-colors hover:text-[#CCA466]">How It Works</Link>

          <Link to="/membership" className="text-sm font-semibold tracking-wide text-gray-1000 transition-colors hover:text-[#CCA466]">Membership</Link>

          <Link to="/apply" className="rounded-full bg-linear-to-r from-[#f0c36e] via-[#e2ae4c] to-[#db8d19] px-6 py-2.5 text-white text-sm font-medium tracking-wide text-primary-foreground shadow-2xl transition-transform hover:scale-105 ">Apply Now</Link>
        </div>

        <button id="mobile-menu-button" className="lg:hidden" onClick={sideMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true">
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>

      </nav>

      <div id="mobile-menu" className="border-t bg-[#FAF6EE] px-6 py-6 hidden">
        <div className="flex flex-col gap-4 text-gray-800">
          <Link class="text-base text-[#614759] active" to="/"  >Home</Link>
          <Link class="text-base text-[#614759] active" to="/about-us"  >About Us</Link>
          <Link class="text-base text-[#614759] active" to="/how-it-works"  >How It Works</Link>
          <Link class="text-base text-[#614759] active" to="/membership"  >Membership</Link>
          <Link to="/apply" class="mt-2 text-white rounded-full bg-linear-to-r from-[#f0c36e] via-[#e2ae4c] to-[#db8d19] px-6 py-3 text-center text-sm font-medium">Apply Now</Link>
        </div>
      </div>
    </header>

  )
}

export default Header
