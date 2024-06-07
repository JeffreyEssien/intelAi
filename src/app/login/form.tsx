import React from "react";
import Image from "next/image";
import TelegramImg from '../landingpages/images/vector.png'
import XImg from '../landingpages/images/X influencer.png'
import Link from "next/link";


export default function LoginForm() {

  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (

    <div className='flex flex-col items-center w-full'>
      <p className="tracking-wider lg:text-[64px] text-[40px] text-center w-[99%] bg-gradient-to-r from-[#03FFA3] via- to-[#7F56D9] text-transparent mb-5 lg:flex flex-col font-semibold" style={bgClipText}>Welcome to Intel AI</p>
      <p className='text-white lg:text-[14px] text-[18px] text-center w-[90%] lg:w-[28%] mb-10'>Discover cutting-edge AI solutions designed to transform your business and unlock new possibilities. Dive in and explore how <span className="font-bold">IntelAI</span> can power your next innovation.</p>
      <div className="lg:w-[40%] w-[90%] bg-gradient-to-b from-[#474747] to-[#81818100] rounded-[20px] py-[2px] px-[2px] lg:mb-40 mb-10  mx-auto">
        <form className='flex flex-col  rounded-[20px] w-full pt-20 lg:px-20 px-6 bg-black'>
          <p className='text-center text-[16px] text-white font-medium my-4'>Enter Your Invitation Code</p>
          <p className='text-center w-[%] text-[#707070] mt-2 mb-6 mx-auto'>Securely enter your private key to access your account and unlock all features. Your private key ensures your data is safe and only accessible by you.</p>
          <label className="text-left text-[12px]">Input your invitation code</label>
          <input placeholder="Enter invite code" className="bg-[#1B1B1B] rounded-[12px] py-4 px-4 lg:w-[95%] my-3" />

          <Link href={'/connect'} className="text-black bg-white py-2 lg:w-[40%] w-[80%] mx-auto rounded-[20px] mt-3 text-center">Submit</Link>

          <div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] w-[90%] rounded-[16px] py-[2px] px-[2px] mb-10 shadow-xl shadow-[#BDFE1C1A] mx-auto mt-10">
            <div className="flex flex-row justify-evenly py-5 items-center mx-auto bg-[#090909] rounded-[16px]">
              <p>No invitation code?</p>
              <p>Find here</p>
              <Image src={TelegramImg} alt="telegram image" className="w-[8%]" />
              <Image src={XImg} alt="telegram image" className="w-[8%]" />
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}