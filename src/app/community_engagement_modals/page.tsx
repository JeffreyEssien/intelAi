"use client"

import React, { useState } from "react"
import UpcomingContestsAndGiveaways from "./upcoming_contests_and_giveaways/page"
import { BsChevronBarLeft } from "react-icons/bs"
import { FaChevronLeft } from "react-icons/fa"



export default function CommunityEngagementModal() {

    const [showUpcomingGiveaways, setShowUpcomingGiveaways] = useState(false)
    const [showPlatformFeatureUpdates, setShowPlatformFeatureUpdates] = useState(false)


    const handleUpcomingGiveaways = () => {
        setShowUpcomingGiveaways(!showUpcomingGiveaways)
    }

    const handlePlatformFeaturesUpdates = () => {
        setShowPlatformFeatureUpdates(!showPlatformFeatureUpdates)
    }

    return (
        <div className=" bg-[#0A0908] w-full bg-opacity-50 h-screen flex items-center justify-center z-10">

            <div className="flex flex-col bg-[#131313] w-1/3 p-5 space-y-5 rounded-[20px] max-h-5/6  scrollbar-none">
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleUpcomingGiveaways}>
                    <p>Upcoming Contests and Giveaways</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Great for boosting engagement and fun, these activities can help sustain and grow the community.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePlatformFeaturesUpdates}>
                    <p>Upcoming Community AMA</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Helps in maintaining transparency, allows the community to raise concerns, and fosters a stronger connection with the project leaders.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>Fundraising Activity Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Covering all stages of fundraising, this is crucial for investor engagement and transparency.</p>
                </div>
                <div className=" pb-3 py-2 cursor-pointer">
                    <p>⁠Upcoming Reward & Loyalty Program</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]"> Encourages sustained engagement and investment in the project by rewarding active community members.</p>
                </div >

            </div>
            {showUpcomingGiveaways && (
                <div className="absolute w-full h-full">
                    <button onClick={handleUpcomingGiveaways} className="absolute top-20 left-40 text-xl"><FaChevronLeft /></button>
                    <UpcomingContestsAndGiveaways />
                </div>
            )}

        </div>
    )
}