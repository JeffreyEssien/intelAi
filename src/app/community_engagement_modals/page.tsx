"use client"

import React, { useState } from "react"



export default function CommunityEngagementModal() {

    const [showPartnershipAnnouncement, setShowPartnershipAnnouncement] = useState(false)
    const [showPlatformFeatureUpdates, setShowPlatformFeatureUpdates] = useState(false)

    const handlePartnershipAnnouncement = () => {
        setShowPartnershipAnnouncement(!showPartnershipAnnouncement)
    }

    const handlePlatformFeaturesUpdates = () => {
        setShowPlatformFeatureUpdates(!showPlatformFeatureUpdates)
    }

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A0908] w-full bg-opacity-50 h-screen flex items-center justify-center z-10">
           
            <div className="flex flex-col bg-[#131313] w-1/3 p-5 space-y-5 rounded-[20px] max-h-5/6  scrollbar-none">
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePartnershipAnnouncement}>
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
            
        </div>
    )
}