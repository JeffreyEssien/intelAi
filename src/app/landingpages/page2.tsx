import Image from "next/image"
import Image2 from '../landingpages/images/Group 57046.png'

export default function Page2() {

     
  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

    return(
        <div className="bg-[#181818] flex flex-col items-center w-full py-10 text-[#8A8A8A]">
            <p className="flex flex-col text-[56px] text-center pt-14 mb-8 text-white font-medium leading-none">Meticulously Engineered To 
            <span className="flex flex-row gap-3">Deliver
                <span style={bgClipText} className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] text-transparent"> Human-Like Responses:</span></span>
            </p>

            <p className="w-[45%] text-center text-[#8A8A8A] text-[22px] leading-tight">
            Experience the sophistication of AI Agents that talks like a human but works like a supercomputer. Intel AI’s deep learning algorithms  are crafted to replicate the warmth, empathy, and complexity of human interaction, ensuring that every message, reply, or announcement feels genuinely personal.
            </p>

            <div className="w-[60%] my-10">
                <Image src={Image2} alt="image" className="object-cover"/>
            </div>

           

        </div>
    )
}