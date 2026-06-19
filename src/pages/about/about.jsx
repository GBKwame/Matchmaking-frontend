import Header from "../../component/header/header"
import AboutSectionFour from "./component/aboutSectionFour"
import AboutSectionOne from "./component/aboutSectionOne"
import AboutSectionThree from "./component/aboutSectionThree"
import AboutSectionTwo from "./component/aboutSectionTwo"

import Footer from "../../component/footer/footer"
import Chat from "../../component/chat/chat"


function About() {
  return (
    <>
    <Header/>
    <div className="bg-ivory">
            <AboutSectionOne />
            <AboutSectionTwo />
            <AboutSectionThree />
            <AboutSectionFour/>
            <Footer />
            <Chat />
    </div>
    </>
  )
}

export default About
