"use client"

import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa"
import OtherInformationModals from "./other_information_modals/page"

export default function CommunityOtherModals() {

    const [showOtherInformation, setShowOtherInformation] = useState(false)

    const handleOtherInformation = () => {
        setShowOtherInformation(!showOtherInformation)
    }

    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#000000] bg-opacity-75">
            <div className="bg-[#101010] rounded-t-[16px] border-b border-[#181818] p-4 w-1/3">
                <p className="text-[14px]">Other Information</p>
            </div>
            <div className="bg-[#131313] rounded-b-[20px] flex flex-col p-4 w-1/3 cursor-pointer" onClick={handleOtherInformation}>
                <p className="text-[14px] text-white">Updates or special instructions that do not fall in any of the other categories.</p>
                <p className="text-[#4D4D4D] text-[14px] my-2">Add other options</p>
            </div>
            {showOtherInformation && (
                <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-full'>
                <button onClick={handleOtherInformation} className='absolute top-10 left-10  text-xl'><FaChevronLeft /></button>
                <OtherInformationModals />
              </div>
            )}
        </div>
    )
}