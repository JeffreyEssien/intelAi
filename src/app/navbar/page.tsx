import Image from "next/image";
import Logo from '../landingpages/images/Intel AI logo (1) (1).png'
import Icon1 from '../landingpages/images/Group 92608.png'
import Icon2 from '../landingpages/images/Group 92606.png'
import Icon3 from '../landingpages/images/Group 92607.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
     
    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      };
    

    return (
      <div className="text-white flex-row justify-evenly lg:justify-between lg:px-40 pr-4 py-8 bg-[#0A0908] mb-10 items-center hidden lg:flex">
            <div className="lg:w-[10%] w-[45%] pl-4 lg:pl-0 pr-8 lg:pr-0">
                <Link  href='/'><Image src={Logo} alt="image" className="object-cover"/></Link>
            </div>
            <ul className="flex flex-row items-center lg:gap-10 gap-2">
                <li className="hover:text-[#BDFE1C] text-[12px] lg:text-[16px]">Docs</li>
                <li className="hover:text-[#BDFE1C] text-[12px] lg:text-[16px]">Advantages</li>
                <div className="border-[1px] border-[#181818] py-1 rounded-[66px] px-4 flex items-center lg:justify-around">
                    <p className="lg:pr-2 text-[10px] lg:text-[16px]">Community</p>
                    <p className="w-[10%]"><Image src={Icon1} alt="image" /></p>
                    <p className="w-[10%]"><Image src={Icon2} alt="image" /></p>
                    <p className="w-[10%]"><Image src={Icon3} alt="image" /></p>
                </div>
                <div className="w-[100%] lg:w-auto bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[66px] py-[1px] px-[1px]">
                    <Link href='/login'><button className="lg:px-10 px-2 w-full lg:w-auto rounded-[66px] py-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] lg:text-[14px] text-[10px]">Get Access</button></Link>
                </div>
            </ul>
      </div>
    );
  }
  