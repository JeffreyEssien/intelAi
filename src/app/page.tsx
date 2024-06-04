import Page1 from "./landingpages/page1";
import Page2 from "./landingpages/page2";
import Page3 from "./landingpages/page3";
import Page4 from "./landingpages/page4"
import Navbar from "./navbar/page";


export default function Home() {
  return (
    <div className="text-white bg-[#0D0D0D]">
        <div>
          <Navbar />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </div>
    </div>
  );
}
