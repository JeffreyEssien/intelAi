import Page from "./landingpages/page";
import Navbar from "./navbar/page";
import NavbarMobile from "./navbarmobile/page";
import Footer from './footer/page'


export default function Home() {
  return (
    <div className="text-white bg-[#0D0D0D]">
        <div>
          <Navbar />
          <NavbarMobile />
          <Page />
        </div>
          <Footer />
    </div>
  );
}
