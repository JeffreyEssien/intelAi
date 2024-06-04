import Image from "next/image"
import Image2 from '../landingpages/images/Group 57046.png'

export default function Page2() {

     
  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

    return(
        <div className="bg-[#181818] flex flex-col items-center w-full py-10 text-[#8A8A8A]">
            <p className="flex flex-col text-[65px] text-center pt-14 mb-8 text-white font-medium">Meticulously Engineered To 
            <span className="flex flex-row gap-1">Deliver
                <span style={bgClipText} className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] text-transparent">Human-Like Responses:</span></span>
            </p>

            <p className="w-[54%] text-center text-[#8A8A8A] text-[24px]">
            We proudly introduce AI agents of unparalleled intelligence, capable of truly understanding and engaging with blockchain communities like never before!
            </p>

            <div className="w-[60%] my-10">
                <Image src={Image2} alt="image" className="object-cover"/>
            </div>

           

        </div>
    )
}