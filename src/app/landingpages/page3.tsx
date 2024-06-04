
import Image from "next/image"
import Image3 from '../landingpages/images/Group 92548.png'
import Image4 from '../landingpages/images/Group 92549.png'
import Image5 from '../landingpages/images/Frame 20670.png'
import Image6 from '../landingpages/images/code.png'


export default function Page3() {

    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      };

    return(
        <div className="bg-[#0D0D0D] text-[#8A8A8A] flex flex-col items-center mt-20">
            <p className="text-white text-center text-[36px] mb-6 font-medium">Custom AI  Agents Like Never Before</p>
            <p className="text-[24px] text-center w-[45%] mb-10">Intel AI leverages a custom LLM architecture that's fine-tuned to grasp the intricacies of blockchain technology, its narratives, trends, & community nuances with unparalleled precision</p>

            <div className="w-full flex flex-row justify-around mb-10 gap-14 px-20">
                <div className="bg-gradient-to-b from-[#070707] to-[#181818] w-1/3 px-2 pb-10 pt-2 rounded-[20px]">
                <Image src={Image3} alt="image" className="object-cover"/>
                <p className="text-white lg:text-[20px] px-4 pt-4 font-medium">Community Owners & Managers</p>
                <p className="text-[16px] px-4 w-[90%]">Intel AI Agents serve as a seamless extension of your team, providing high-quality feedback and engaging interactions that resonate with your community.</p>
                </div>

                <div className="bg-gradient-to-b from-[#070707] to-[#181818] w-1/3 px-2 pb-10 pt-2 rounded-[20px]">
                <Image src={Image4} alt="image" className="object-cover"/>
                <p className="text-white lg:text-[36px] px-4 pt-4 font-medium">KOLs & Influencers</p>
                <p className="text-[16px] px-4 w-[90%]">Engage your social following and audience on twitter, reddit and others using <span className='font-medium text-white'>Intel<span className='font-bold text-white'>ai</span> </span></p>
                </div>

                <div className="bg-gradient-to-b from-[#070707] to-[#181818] w-1/3 px-2 pb-10 pt-2 rounded-[20px]">
                <Image src={Image6} alt="image" className="object-cover"/>
                <p className="text-white lg:text-[36px] px-4 pt-4 font-medium">KOLs & Influencers</p>
                <p className="text-[16px] px-4 w-[90%]">Engage your social following and audience on twitter, reddit and others using <span className='font-medium text-white'>Intel<span className='font-bold text-white'>ai</span> </span></p>
                </div>
            </div>

            <p className='text-center text-[32px] my-10 bg-gradient-to-r from-[#03FFA3]  to-[#7F56D9] text-transparent' style={bgClipText}>Join 4,000+ companies already growing</p>

            <div className="w-full my-5">
              <Image src={Image5} alt="image"/>
            </div>

        </div>
    )
}