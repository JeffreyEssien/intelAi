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
import { FaChevronLeft } from "react-icons/fa"

const announcementData = [
    {
        title: "Partnership Announcement",
        description: "Essential for showcasing strategic alliances that can leverage mutual strengths and enhance project credibility.",
        component: <PartnershipAnnouncement />
    },
    {
        title: "Platform/Feature Updates",
        description: "This includes upcoming and existing features which are vital for keeping the community aware of ongoing improvements and developments.",
        component: <PlatformFeatureUpdates />
    },
    {
        title: "Fundraising Activity Announcement",
        description: "Covering all stages of fundraising, this is crucial for investor engagement and transparency.",
        component: <FundraisingActivity />
    },
    {
        title: "Scheduled Platform Maintenance or Upgrades",
        description: "Important for setting expectations regarding availability and enhancements.",
        component: <ScheduledPlatformMaintenance />
    },
    {
        title: "Milestone Updates",
        description: "Demonstrates progress and achievement, helping maintain investor and community confidence.",
        component: <MilestoneUpdates />
    },
    {
        title: "Roadmap Updates",
        description: "Keeps everyone informed about the future direction and adjustments based on dynamic market conditions or internal strategy shifts.",
        component: <RoadmapUpdates />
    },
    {
        title: "New Exchange Listings",
        description: "Critical for informing traders about new markets where they can buy or sell the token.",
        component: <NewExchangeListings />
    },
    {
        title: "Security Incident Report",
        description: "Essential for transparency and trust, informing users about any potential or actual security issues and how they are being addressed.",
        component: <SecurityIncidentReport />
    },
]

export default function UpcomingAnouncementModal() {
    const [visibleAnnouncement, setVisibleAnnouncement] = useState<string | null>(null)

    const handleAnnouncementClick = (title: string) => {
        setVisibleAnnouncement(visibleAnnouncement === title ? null : title)
    }

    return (
        <div className="bg-[#0A0908] w-full bg-opacity- h-screen flex items-center justify-center">
            <div className="flex flex-col bg-[#131313] min-w-1/3 space-y-5 rounded-[20px] h-5/6 py-4 overflow-y-scroll scrollbar-none">
                {announcementData.map(({ title, description, component }) => (
                    <div key={title} className="border-b border-[#1E1E1E] pb-3 py-2 cursor-pointer p-6 hover:bg-[#252525]" onClick={() => handleAnnouncementClick(title)}>
                        <p>{title}</p>
                        <p className="text-[14px] text-[#4D4D4D] w-[90%]">{description}</p>
                    </div>
                ))}
            </div>
            {announcementData.map(({ title, component }) => (
                visibleAnnouncement === title && (
                    <div key={title} className="absolute w-full">
                        <button className="absolute top-20 left-20 text-xl" onClick={() => handleAnnouncementClick(title)}><FaChevronLeft /></button>
                        {component}
                    </div>
                )
            ))}
        </div>
    )
}
