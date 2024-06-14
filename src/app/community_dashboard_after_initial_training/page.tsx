"use client"

import { useState } from "react";
import Sidebar from "@/components/sidebar/page";
import ConnectCommunities from "./connect_more_communities/page";
import ActivitesCommunity from "./community_dasboard_activities/page";
import CommunityEngagement from "./community_dasboard_engagement/page";
import CommunityEscalationReports from "./community_escalation_reports/page";
import CommunityPlatformEngagements from "./community_platform_engagements/page";
import CommunityIntelAiActivity from "./community_intel_ai_activity/page";
import OutstandingTasks from "./outstanding_tasks/page";

export default function CommunityDashboardAIT() {

    const [isOn, setIsOn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('This week');

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-row ">
            <Sidebar />
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-row justify-between gap-4 w-full py-8">
                    <div className="flex flex-row gap-3 w-4/5 mx-auto justify-center">
                        <button className="text-[14px] font-semibold">Community Manager</button>
                        <button className="text-[14px] text-[#6A6A6A]">KOL/Influencer</button>
                    </div>
                    <div className="w-1/5 flex flex-row items-center gap-5 ">
                        <p className="text-[20px]">Co-pilot</p>
                        <div onClick={handleToggle} className={`w-[54px] h-[18px] flex items-center bg-[#545454] rounded-full p-1 cursor-pointer ${isOn ? '' : 'bg-white'}`}>
                            <div className={`bg-white w-[14px] h-[14px] rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-green-500' : ''}`}></div>
                        </div>
                        {isOn ? <p>on</p> : <p>off</p>}
                    </div>
                </div>

                <div className="bg-[#141414] min-h-screen w-full rounded-[40px] flex flex-row pt-6 pl-6">
                    <div className="flex flex-col ">
                    <p>Quick actions</p>

                    <div className="flex flex-row justify-between">

                        <div className="bg-gradient-to-br from-[#000000] via-[#1818183B] to-[#03FFA352] p-10 w-[65%] min-h-[250px] rounded-[20px] mt-10 relative">
                            <p className="text-[#5E5E5E] text-[14px]">Hello,  Username 👋</p>
                            <div className="flex flex-col w-[80%] mt-5 gap-2">
                                <p className="text-[30px] text-white w-[50%] font-200">Train, Update, Test & Simulate!</p>
                                <p className="text-[#969696] text-[10px] w-[50%]">Train IntelAI to suit your community and requirements seamlessly.Train IntelAI to suit your community and requirements seamlessly.</p>
                            </div>
                            <button className="text-black bg-white rounded-[66px] py-3 w-[150px] absolute bottom-4 right-4">Update Ai</button>
                        </div>

                        <ConnectCommunities />
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-row w-full justify-between pt-10">
                            <p className="text-white text-[12px]">Analytics</p>
                            <div className="mr-4">
                                <div>
                                    <button
                                        onClick={toggleDropdown}
                                        className="justify-center w-full rounded-[25px] border border-[#272727] shadow-sm px-4 py-2 bg-[#0D0D0D] text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex flex-row items-center gap-3 text-[#828282]">
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.25 0.9375L4.125 4.0625L1 0.9375" stroke="#686868" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        {selectedOption}
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0D0D0D] ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {['This week', 'This month', 'This year'].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleOptionClick(option)}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                    role="menuitem"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                                <div className="w-full pr-5 flex flex-col">
                                <ActivitesCommunity />
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col w-[49%]">
                                    <CommunityEngagement />
                                    <CommunityPlatformEngagements />
                                    </div>
                                    <div className="flex flex-col w-[49%]">
                                    <CommunityEscalationReports />
                                    <CommunityIntelAiActivity />
                                    </div>
                                </div>
                                </div>
                    </div>
                    </div>
                    <OutstandingTasks />
                </div>
            </div>
        </div>
    )
}