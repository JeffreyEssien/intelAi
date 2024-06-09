"use client"

import React, { useState } from "react";

export default function Persona() {
  const [loading, setLoading] = useState(false);

  const handleKolClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000); // Wait for 1 second before redirecting
  };

// redirecting to the community category selector page
  const handleCommunityClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/communitytypeselector";
    }, 1000); // Wait for 1 second before redirecting
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0D0D0D]">
        <p className="text-center text-[14px] text-white mb-4">Are you a</p>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="loader"> loading</div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:w-[50%] w-full items-center gap-4 justify-center mt-10">
        <div className="lg:w-2/3 w-4/5 rounded-[40px] hover:bg-gradient-to-l from-[#BDFE1C] to-[#25B8DE] backdrop-filter backdrop-blur-md bg-opacity-50 p-[1px]" onClick={handleCommunityClick}>
          <div className="bg-[#131313] hover:bg-gradient-to-br from-[#1C1C1C] via-[#000000] to-[#000000] cursor-pointer py-14 px-4 rounded-[40px]">
            <p className="my-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="12" fill="#262727" />
                <path
                  d="M15 26V25C15 22.2386 17.2386 20 20 20V20C22.7614 20 25 22.2386 25 25V26"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 26V25C9 23.3431 10.3431 22 12 22V22"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 26V25C31 23.3431 29.6569 22 28 22V22"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 20C21.6569 20 23 18.6569 23 17C23 15.3431 21.6569 14 20 14C18.3431 14 17 15.3431 17 17C17 18.6569 18.3431 20 20 20Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 22C29.1046 22 30 21.1046 30 20C30 18.8954 29.1046 18 28 18C26.8954 18 26 18.8954 26 20C26 21.1046 26.8954 22 28 22Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="text-[16px] font-medium text-white mb-2">
              Community Manager
            </p>
            <p className="text-[#707070] w-[95%]">
              Select a dedicated community manager to help nurture and grow your
              online community, ensuring a vibrant and engaged environment.
            </p>
          </div>
        </div>

        <div
          className="lg:w-2/3 w-4/5 rounded-[40px] hover:bg-gradient-to-l from-[#BDFE1C] to-[#25B8DE] backdrop-filter backdrop-blur-md bg-opacity-50 p-[1px]"
          onClick={handleKolClick}
        >
          <div className="bg-[#131313] hover:bg-gradient-to-br from-[#1C1C1C] via-[#000000] to-[#000000] cursor-pointer py-14 px-4 rounded-[40px]">
            <p className="my-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="12" fill="#262727" />
                <path
                  d="M10 28V27C10 23.134 13.134 20 17 20V20"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.8038 20.3135C24.4456 19.6088 25.5544 19.6088 26.1962 20.3135V20.3135C26.5206 20.6697 26.9868 20.8628 27.468 20.8403V20.8403C28.4201 20.7958 29.2042 21.5799 29.1597 22.532V22.532C29.1372 23.0132 29.3303 23.4794 29.6865 23.8038V23.8038C30.3912 24.4456 30.3912 25.5544 29.6865 26.1962V26.1962C29.3303 26.5206 29.1372 26.9868 29.1597 27.468V27.468C29.2042 28.4201 28.4201 29.2042 27.468 29.1597V29.1597C26.9868 29.1372 26.5206 29.3303 26.1962 29.6865V29.6865C25.5544 30.3912 24.4456 30.3912 23.8038 29.6865V29.6865C23.4794 29.3303 23.0132 29.1372 22.532 29.1597V29.1597C21.5799 29.2042 20.7958 28.4201 20.8403 27.468V27.468C20.8628 26.9868 20.6697 26.5206 20.3135 26.1962V26.1962C19.6088 25.5544 19.6088 24.4456 20.3135 23.8038V23.8038C20.6697 23.4794 20.8628 23.0132 20.8403 22.532V22.532C20.7958 21.5799 21.5799 20.7958 22.532 20.8403V20.8403C23.0132 20.8628 23.4794 20.6697 23.8038 20.3135V20.3135Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                />
                <path
                  d="M23.3633 25L24.4542 26.0909L26.636 23.9091"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20Z"
                  stroke="#EFEFEF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="text-[16px] font-medium text-white mb-2">KOL/Influencer</p>
            <p className="text-[#707070] w-[95%]">
              Pick an influencer to amplify your brand’s message, connect with
              your target audience, and boost your visibility on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
