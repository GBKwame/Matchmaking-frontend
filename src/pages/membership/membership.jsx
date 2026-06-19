

import Footer from "../../component/footer/footer"
import Header from "../../component/header/header"
import MemberShipSectionOne from "./component/MembershipSectionOne"
import MemberShipSectionTwo from "./component/MembershipSectionTwo"
import Chat from "../../component/chat/chat"
function Membership() {
  return (
   <>
   <Header />
   <div className="bg-ivory">
    <MemberShipSectionOne />
    <MemberShipSectionTwo />
    <Footer />
    <Chat />
   </div>
   </>
  )
}

export default Membership
