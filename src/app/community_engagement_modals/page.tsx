"use client"

import React, { useState } from "react"
import UpcomingContestsAndGiveaways from "./upcoming_contests_and_giveaways/page"
import { BsChevronBarLeft } from "react-icons/bs"
import { FaChevronLeft } from "react-icons/fa"
import UpcomingCommnunityAma from "./upcoming_community_ama/page"
import FundraisingActivityAnnouncements from "./fundraising_activity_announcements/page"
import UpcomingRewardLoyaltyProgram from "./upcoming_reward_loyalty_program/page"



export default function CommunityEngagementModal() {

    const [showUpcomingGiveaways, setShowUpcomingGiveaways] = useState(false)
    const [showUpcomingCommunityAma, setShowUpcomingCommunityAma] = useState(false)
    const [showFundraisingActivtyAnnouncements, setShowFundraisingActivtyAnnouncements] = useState(false)
    const [showUpcomingRewardLoyaltyProgram, setShowUpcomingRewardLoyaltyProgram] = useState(false)


    const handleUpcomingGiveaways = () => {
        setShowUpcomingGiveaways(!showUpcomingGiveaways)
    }

    const handleUpcomingCommunityAma = () => {
        setShowUpcomingCommunityAma(!showUpcomingCommunityAma)
    }

    const handleFundraisingActivtyAnnouncements = () => {
        setShowFundraisingActivtyAnnouncements(!showFundraisingActivtyAnnouncements)
    }

    const handleUpcomingRewardLoyaltyProgram = () => {
        setShowUpcomingRewardLoyaltyProgram(!showUpcomingRewardLoyaltyProgram)
    }

    return (
        <div className=" bg-[#0A0908] w-full bg-opacity-50 h-screen flex items-center justify-center z-10">

            <div className="flex flex-col bg-[#131313] w-1/3 p-5 space-y-5 rounded-[20px] max-h-5/6  scrollbar-none">
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleUpcomingGiveaways}>
                    <p>Upcoming Contests and Giveaways</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Great for boosting engagement and fun, these activities can help sustain and grow the community.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleUpcomingCommunityAma}>
                    <p>Upcoming Community AMA</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Helps in maintaining transparency, allows the community to raise concerns, and fosters a stronger connection with the project leaders.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleFundraisingActivtyAnnouncements}>
                    <p>Fundraising Activity Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Covering all stages of fundraising, this is crucial for investor engagement and transparency.</p>
                </div>
                <div className=" pb-3 py-2 cursor-pointer" onClick={handleUpcomingRewardLoyaltyProgram}>
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
            {showUpcomingCommunityAma && (
                <div className="absolute w-full h-full">
                <button onClick={handleUpcomingCommunityAma} className="absolute top-20 left-40 text-xl"><FaChevronLeft /></button>
                <UpcomingCommnunityAma />
            </div>
            )}
             {showFundraisingActivtyAnnouncements && (
                <div className="absolute w-full h-full">
                <button onClick={handleFundraisingActivtyAnnouncements} className="absolute top-20 left-40 text-xl"><FaChevronLeft /></button>
                <FundraisingActivityAnnouncements />
            </div>
            )}
             {showUpcomingRewardLoyaltyProgram && (
                <div className="absolute w-full h-full">
                <button onClick={handleUpcomingRewardLoyaltyProgram} className="absolute top-20 left-40 text-xl"><FaChevronLeft /></button>
                <UpcomingRewardLoyaltyProgram />
            </div>
            )}

        </div>
    )
}