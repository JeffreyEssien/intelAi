import Page1 from "./landingpages/page1";
import Page2 from "./landingpages/page2";
import Page3 from "./landingpages/page3";
import Page4 from "./landingpages/page4"
import Page5 from './landingpages/page5'
import Page6 from './landingpages/page6'
import Page7 from './landingpages/page7'
import Navbar from "./navbar/page";
import Footer from './footer/page'


export default function Home() {
  return (
    <div className="text-white bg-[#0D0D0D]">
        <div>
          <Navbar />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </div>
          <Footer />
    </div>
  );
}
