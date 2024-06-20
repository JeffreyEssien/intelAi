"use client"

import React, { useState } from "react"
import PartnershipAnnouncement from "./partnership_announcements/page"
import PlatformFeatureUpdates from "./platform_feature_updates/page"
import FundraisingActivity from "./fundraising_activity/page"
import ScheduledPlatformMaintenance from "./scheduled_platform_maintenance/page"
import MilestoneUpdates from "./milestone_updates/page"
import RoadmapUpdates from "./roadmap_updates/page"
import NewExchangeListings from "./new_exchange_listings/page"
import SecurityIncidentReport from "./security_incident_report/page"


export default function UpcomingAnouncementModal() {

    const [showPartnershipAnnouncement, setShowPartnershipAnnouncement] = useState(false)
    const [showPlatformFeatureUpdates, setShowPlatformFeatureUpdates] = useState(false)
    const [showFundraisingActivity, setShowFundraisingActivity] = useState(false)
    const [showScheduledPlatformMaintenance, setShowScheduledPlatformMaintenance] = useState(false)
    const [showMilestoneUpdates, setShowMilestoneUpdates] = useState(false)
    const [showRoadmapUpdates, setShowRoadmapUpdates] = useState(false)
    const [showNewExchangeListings, setShowNewExchangeListings] = useState(false)
    const [showSecurityIncidentReport, setShowSecurityIncidentReport] = useState(false)


    const handlePartnershipAnnouncement = () => {
        setShowPartnershipAnnouncement(!showPartnershipAnnouncement)
    }

    const handlePlatformFeaturesUpdates = () => {
        setShowPlatformFeatureUpdates(!showPlatformFeatureUpdates)
    }

    const handleFundraisingActivity = () => {
        setShowFundraisingActivity(!showFundraisingActivity)
    }

    const handleSheduledPlatformMaintenance = () => {
        setShowScheduledPlatformMaintenance(!showScheduledPlatformMaintenance)
    }

    const handleMilestoneUpdates = () => {
        setShowMilestoneUpdates(!showMilestoneUpdates)
    }

    const handleRoadmapUpdates = () => {
        setShowRoadmapUpdates(!showRoadmapUpdates)
    }

    const handleNewExchangeListings = () => {
        setShowNewExchangeListings(!showNewExchangeListings)
    }

    const handleSecurityIncidentReport = () => {
        setShowSecurityIncidentReport(!showSecurityIncidentReport)
    }

    return (
        <div className="  bg-[#0A0908] w-full bg-opacity-50 h-screen flex items-center justify-center z-10">
           
            <div className="flex flex-col bg-[#131313] min-w-1/3 p-5 space-y-5 rounded-[20px] h-5/6 overflow-y-scroll scrollbar-none">
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePartnershipAnnouncement}>
                    <p>Partnership Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Essential for showcasing strategic alliances that can leverage mutual strengths and enhance project credibility.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handlePlatformFeaturesUpdates}>
                    <p>Platform/Feature Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">This includes upcoming and existing features which are vital for keeping the community aware of ongoing improvements and developments.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleFundraisingActivity}>
                    <p>Fundraising Activity Announcement</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Covering all stages of fundraising, this is crucial for investor engagement and transparency.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleSheduledPlatformMaintenance}>
                    <p>Scheduled Platform Maintenance or Upgrades</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Important for setting expectations regarding availability and enhancements.</p>
                </div >
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleMilestoneUpdates}>
                    <p>Milestone Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Demonstrates progress and achievement, helping maintain investor and community confidence.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleRoadmapUpdates}>
                    <p>Roadmap Updates</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]">Keeps everyone informed about the future direction and adjustments based on dynamic market conditions or internal strategy shifts.</p>
                </div>
                <div className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer" onClick={handleNewExchangeListings}>
                    <p>New Exchange Listings</p>
                    <p className="text-[14px] text-[#4D4D4D] w-[90%]"> Critical for informing traders about new markets where they can buy or sell the token.</p>
                </div>
                <div className=" pb-3 py-2 cursor-pointer" onClick={handleSecurityIncidentReport}>
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
            {showFundraisingActivity && (
                <FundraisingActivity />
            )}
            {showScheduledPlatformMaintenance && (
                <ScheduledPlatformMaintenance />
            )}
            {showMilestoneUpdates && (
                <MilestoneUpdates />
            )}
            {showRoadmapUpdates && (
                <RoadmapUpdates />
            )}
            {showNewExchangeListings && (
                <NewExchangeListings />
            )}
            {showSecurityIncidentReport && (
                <SecurityIncidentReport />
            )}
        </div>
    )
}