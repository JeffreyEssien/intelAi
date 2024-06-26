
// importing the image library from the next js package 
import Image from 'next/image'

// importing the image from the source folder
import Image1 from '../landingpages/images/image 34.png'

//importing the background gradient overlay
import Overlay from '../landingpages/images/Mask group (2).png'

import Link from 'next/link';


export default function Page1() {


  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (
    <div className="text-white bg-[#0D0D0D] pb-20 flex flex-col items-center justify-center relative overflow-hidden">

<Image src={Overlay} alt='Overlay' className='absolute bottom-0 left-1/2 transform -translate-x-1/2' />

      <div className="w-[100%] mx-auto flex flex-col items-center justify-center">
        <p className=" leading-tight lg:text-[64px] text-[30px] text-center w-[80%] bg-gradient-to-r from-[#03FFA3] via- to-[#7F56D9] text-transparent mb-5 lg:flex flex-col font-semibold hidden" style={bgClipText}>Collaboration Protocol of <span className=''>Blockchain AI Agents</span></p>
        <p className=" leading-tight lg:text-[64px] text-[30px] text-center w-[80%] bg-gradient-to-r from-[#03FFA3] via- to-[#7F56D9] text-transparent mb-5 flex flex-col font-semibold lg:hidden" style={bgClipText}>Communication Protocol of Blockchain AI Agents</p>

        <p className="lg:w-[35%] w-[80%] text-center text-[22px] mb-10 flex flex-col items-center text-[#8A8A8A]">
          Tailored Intelligence built from the ground up specifically for the Web3 Ecosystem.
        </p>

        <Link href='/login'><div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[66px] py-[2px] px-[2px] mb-10 shadow-xl shadow-[#BDFE1C1A]">
          <button className="flex gap-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-[66px] py-4 lg:px-40 px-10">Request Early Access <span className="text-[#03FFA3]"><svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.146447 5.51803C-0.0488155 5.71329 -0.0488155 6.02987 0.146447 6.22514C0.341709 6.4204 0.658291 6.4204 0.853553 6.22514L0.146447 5.51803ZM5.74342 1.12817C5.74342 0.852023 5.51956 0.628166 5.24342 0.628166L0.743416 0.628166C0.467274 0.628166 0.243416 0.852023 0.243416 1.12817C0.243416 1.40431 0.467274 1.62817 0.743416 1.62817L4.74342 1.62817L4.74342 5.62817C4.74342 5.90431 4.96727 6.12817 5.24342 6.12817C5.51956 6.12817 5.74342 5.90431 5.74342 5.62817L5.74342 1.12817ZM0.853553 6.22514L5.59697 1.48172L4.88986 0.774612L0.146447 5.51803L0.853553 6.22514Z" fill="#BDFE1C" />
          </svg>
          </span></button>
        </div>
        </Link>
        <div className='border-2 rounded-[30px] border-transparent box-shadow-top box-shadow-lg shadow-yellow-500 relative z-10'>
          <div className='lg:w-[80%] w-[90%] mx-auto'>
          {/* <Image
            src={Image1}
            alt='Image1'
            className='z-40 bg-gradient-to-l from-[#DC1FFF52] to-[#03FFA31A] backdrop-filter backdrop-blur-md bg-opacity-50 rounded-[30px] p-4'
          />  */}
          <video autoPlay loop muted controls={false} className=" lg:w-[95%] h-2/3 rounded-[60px] bg-gradient-to-l from-[#DC1FFF52] to-[#03FFA31A] backdrop-filter backdrop-blur-md bg-opacity-50 p-4" src="./landingpagevid2.mp4"/>
          </div>
        </div>


      </div>
    </div>
  );
}