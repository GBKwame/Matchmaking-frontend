import Chat from "../../component/chat/chat"
import Footer from "../../component/footer/footer"
import Header from "../../component/header/header"
import SectionEight from "../../component/sectionEight/sectionEight"
import SectionFive from "../../component/sectionFive/sectionFive"
import SectionFour from "../../component/sectionFour/sectionFour"
import SectionOne from "../../component/sectionOne/sectionOne"
import SectionSeven from "../../component/sectionSeven/sectionSeven"
import SectionSix from "../../component/sectionSix/sectionSix"
import SectionThree from "../../component/sectionThree/sectionThree"
import SectionTwo from "../../component/sectionTwo/sectionTwo"

function Home() {
  return (

  <>
<Header />
<SectionOne />
<SectionTwo />
<SectionThree/>
<SectionFour />
<SectionFive />
<SectionSix />
<SectionSeven />
<SectionEight />
<Footer />
<Chat />
  </>
        
    
  )
}

export default Home
