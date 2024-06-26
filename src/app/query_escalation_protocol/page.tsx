"use client"

import Image from "next/image";
import BoxImage from '../landingpages/images/cmmxmmxx 1.png'
import Sidebar from "@/components/sidebar/page";
import { useState } from "react";
import EscalationReport from "./escalation_report";


export default function QueryEscalationProtocol() {

    const [showEscalationReports, setShowEscalationReports] = useState(false)

    const handleEscalationReport = () => {
        setShowEscalationReports(!showEscalationReports)
    }

    return (
        <div className="flex flex-row min-h-screen w-full">
            <Sidebar />
            <div className="bg-[#0D0D0D] w-full h-auto flex flex-col">
                <div className="w-full flex flex-row items-center p-8 gap-4">
                    <button className="text-[#6A6A6A] text-[14px]">Ai Training</button>
                    <button className="text-[14px]">Query Escalation Protocol</button>
                </div>

                <div className="min-h-screen w-full bg-[#131313] rounded-t-[20px] flex flex-col justify-center items-center relative">
                    {showEscalationReports && (
                        <div className="absolute inset-0 z-10">
                        <EscalationReport />
                        </div>
                    )}
                    <div className="w-1/2 h-auto flex flex-col items-center justify-center">
                        <p className="text-[32px] font-medium text-white">No information here</p>
                        <Image src={BoxImage} alt="box" className="w-[35%]" />
                        <p className="text-[#707070] text-[14px] w-[45%] text-center mt-3">Once your community is set up, cases that the aI can’t assess would be pushed here</p>
                    </div>
                    <button onClick={handleEscalationReport} className="bg-white rounded-[24px] w-1/6 py-3 mt-8 text-black text-[12px]">Integrate community</button>
                </div>
            </div>
        </div>
    )
}