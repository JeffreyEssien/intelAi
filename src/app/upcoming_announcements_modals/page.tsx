"use client"

import React, { useState } from "react"
import PartnershipAnnouncement from "./partnership_announcements/page"
import PlatformFeatureUpdates from "./platform_feature_updates/page"


export default function UpcomingAnouncementModal() {

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
           
            <div className="flex flex-col bg-[#131313] min-w-1/3 p-5 space-y-5 rounded-[20px] h-5/6 overflow-y-scroll scrollbar-none">
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePartnershipAnnouncement}>
                    <p>Partnership Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Essential for showcasing strategic alliances that can leverage mutual strengths and enhance project credibility.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePlatformFeaturesUpdates}>
                    <p>Platform/Feature Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">This includes upcoming and existing features which are vital for keeping the community aware of ongoing improvements and developments.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>Fundraising Activity Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Covering all stages of fundraising, this is crucial for investor engagement and transparency.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>Scheduled Platform Maintenance or Upgrades</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Important for setting expectations regarding availability and enhancements.</p>
                </div >
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>Milestone Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Demonstrates progress and achievement, helping maintain investor and community confidence.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>Roadmap Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Keeps everyone informed about the future direction and adjustments based on dynamic market conditions or internal strategy shifts.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer">
                    <p>New Exchange Listings</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]"> Critical for informing traders about new markets where they can buy or sell the token.</p>
                </div>
                <div className=" pb-3 py-2 cursor-pointer">
                    <p>Security Incident Report</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]"> Essential for transparency and trust, informing users about any potential or actual security issues and how they are being addressed.</p>
                </div>
            </div>
            {showPartnershipAnnouncement && (
                <PartnershipAnnouncement />
            )}
            {showPlatformFeatureUpdates && (
                <PlatformFeatureUpdates />
            )}
        </div>
    )
}