"use client"

import React, { useState } from "react";
import Image from "next/image";
import Logo from '../../landingpages/images/Intel AI logo (1) (1) (1).png'


export default function CommunityTypeSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDivClick = (category: string) => {
    setSelected(category);
  };

  const handleNextClick = () => {
    if (selected) {
      setLoading(true);
      setTimeout(() => {
        window.location.href = "/successfullogin";
      }, 1000); // Simulating a 1-second loader
    } else {
      alert("Please select a category before proceeding.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <div className="w-[90%] flex justify-end items-center pt-4">
        <Image src={Logo} alt="logo" className="lg:w-[8%]  w-[30%]" />
      </div>

      <div className='mt-4 pt-10 border-t border-[#363636] w-[95%] flex flex-col justify-center items-center'>

      </div>

      <p className="text-center lg:text-[32px] w-[90%] text-white my-5">
        Which Category Best Describes your community?
      </p>
      <div className="bg-[#131313] flex flex-col py-6 lg:w-[40%] w-[85%] rounded-[20px]">
        <div
          className={`border-b border-[#1E1E1E] py-3 px-8 cursor-pointer ${selected === "Launchpad" ? "border-white" : "hover:border hover:border-white"
            }`}
          onClick={() => handleDivClick("Launchpad")}
        >
          <p className="text-[14px] text-white">Launchpad</p>
          <p className="text-[#4D4D4D] w-[90%]">
            Projects focused on facilitating the launch of new tokens or crypto
            projects, offering early access to investors.
          </p>
        </div>
        <div
          className={`border-b border-[#1E1E1E] py-3 px-8 cursor-pointer ${selected === "Token Project" ? "border-white" : "hover:border hover:border-white"
            }`}
          onClick={() => handleDivClick("Token Project")}
        >
          <p className="text-[14px] text-white">⁠Token Project</p>
          <p className="text-[#4D4D4D] w-[90%]">
            Projects with a Utility token that operates in different verticals
            like DEFI, gaming, Layer 1,2,3 blockchain, play to earn, AI, ETC.
          </p>
        </div>
        <div
          className={`py-3 px-8 cursor-pointer ${selected === "Memecoin Project" ? "border-white" : "hover:border hover:border-white"
            }`}
          onClick={() => handleDivClick("Memecoin Project")}
        >
          <p className="text-[14px] text-white">⁠Memecoin Project</p>
          <p className="text-[#4D4D4D] w-[90%]">
            Projects centered around cryptocurrencies that originated from
            internet memes or have a humorous or viral aspect.
          </p>
        </div>
      </div>
      <button
        className="mt-5 bg-white text-black text-center py-3 lg:w-[15%] w-[80%] rounded-[24px] text-[12px]"
        onClick={handleNextClick}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
}
