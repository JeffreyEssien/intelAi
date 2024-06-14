"use client"

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessfulLogin() {
  const bgClipText: React.CSSProperties = {
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const style: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.05), rgba(13, 13, 13, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(13, 13, 13, 0.9))",
    backgroundBlendMode: "darken",
    filter: "blur(50px)",
  };

  const handleClick = () => {
    window.location.href = "/communitydashboard";
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-240px] rotate-45 rounded-full opacity-45" style={style}>
      </div>
      <div className="w-[30%] h-1/2 absolute top-[-20px] left-[-200px] rotate-45 rounded-full opacity-45" style={style2}>
      </div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-240px] rotate-45 rounded-full opacity-80" style={style}>
      </div>
      <div className="w-[40%] h-1/2 absolute bottom-[-20px] right-[-200px] rotate-45 rounded-full opacity-80" style={style2}>
      </div>

      <div className="rounded-full bg-[#141414] w-[190px] h-[190px] flex items-center justify-center z-20">
        <div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-full w-[120px] h-[120px] flex items-center justify-center">
          <div className="rounded-full bg-[#141414] w-[118px] h-[118px] flex items-center justify-center">
            <p>
              <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.834 1.45898L17.1673 33.5423L1.33398 17.5007" stroke="url(#paint0_linear_1685_22268)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_1685_22268" x1="1.33398" y1="17.5007" x2="48.834" y2="17.5007" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#03FFA3" />
                    <stop offset="1" stop-color="#7F56D9" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
          </div>
        </div>
      </div>
      <p className="text-white lg:text-[40px] text-[32px] text-center">Onboarded Successfully</p>
      <p className="text-[#707070] text-14px text-center w-[90%]">Your info has been uploaded to the AI, you can begin testing your AI now</p>

      <button
        className="text-center text-black bg-white py-3 lg:w-[12%] w-[90%] rounded-[60px] mt-10 hover:opacity-45"
        onClick={handleClick}
      >
        Go To Dashboard
      </button>
    </div>
  )
}
