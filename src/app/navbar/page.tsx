import Image from "next/image";
import Logo from '../landingpages/images/Intel AI logo (1) (1).png'
import Icon1 from '../landingpages/images/Group 92608.png'
import Icon2 from '../landingpages/images/Group 92606.png'
import Icon3 from '../landingpages/images/Group 92607.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

export default function Navbar() {
     
    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      };
    

    return (
      <div className="text-white flex-row justify-between px-40 py-8 bg-[#0A0908] mb-10 hidden lg:flex">
            <div className="w-[10%]">
                <Image src={Logo} alt="image" className="object-cover"/>
            </div>
            <ul className="flex flex-row items-center gap-10">
                <li className="hover:text-[#BDFE1C]">Docs</li>
                <li className="hover:text-[#BDFE1C]">Advantages</li>
                <div className="border-[1px] border-[#181818] py-1 rounded-[66px] px-4 flex items-center justify-around">
                    <p className="pr-2">Community</p>
                    <p className="w-[10%]"><Image src={Icon1} alt="image" /></p>
                    <p className="w-[10%]"><Image src={Icon2} alt="image" /></p>
                    <p className="w-[10%]"><Image src={Icon3} alt="image" /></p>
                </div>
                <div className=" bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[66px] py-[1px] px-[1px]">
                    <button className="px-10 rounded-[66px] py-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] text-[14px]">Request Access</button>
                </div>
            </ul>
      </div>
    );
  }
  