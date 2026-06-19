
import {Routes, Route } from "react-router-dom"
import Home from "./pages/home/home.jsx"

import HowItWorks from "./pages/How-it-works/how-it-works.jsx"
import Membership from "./pages/membership/membership.jsx"
import About from "./pages/about/about.jsx"
import Apply from "./pages/Appy/Apply.jsx"
import AdminProfileDashboard from "./pages/AdminDashbord/AdminDashbord.jsx"

function App() {


  return (
    
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />

       <Route path="/membership" element={<Membership/>} /> 
       <Route path="/how-it-works" element={<HowItWorks/>} />
       <Route path="/apply" element={<Apply/>} />
       <Route path={import.meta.env.VITE_ADMIN_DASHBOARD} element={<AdminProfileDashboard/>} />
    </Routes>

    
  )
}

export default App
