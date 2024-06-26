"use client";

import { usePathname } from "next/navigation";

import React from "react"

import Image from 'next/image'

import Logo from '../landingpages/images/Intel AI logo (1) (1) (1).png'


export default function Footer() {

    const pathname = usePathname();

    const noFooterPaths = ["/login", "/login/connect", "/login/persona", "/login/communitytypeselector", "/successfullogin", "/communitydashboard", "/community_dashboard_after_initial_training", "/community_ai_training", "/intel_ai_workspace", "/telegram_simulation", "/launchpad_ai_training", "/successful_initial_training_modal", "/query_escalation_protocol"]

    if (noFooterPaths.includes(pathname)) {
        return null;
    }

    const style: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(127, 86, 217, 0.21), rgba(16, 12, 14, 0.2))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    const style2: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(127, 86, 217, 0.21), rgba(16, 12, 14, 0.2))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    return (
        <div className="bg-[#000000] text-[#707070] pt-10 lg:pt-40 pb-10 relative overflow-hidden">

            <div className="w-[40%] h-1/3 absolute bottom-[0] right-[-130px]" style={style}>
            </div>
            <div className="w-[37%] h-1/2 absolute bottom-[0] right-[-200px] rotate-" style={style2}>
            </div>

            <div className="flex flex-col lg:flex-row justify-between w-[85%] mx-auto border-b border-[#272727]">
                <div className="flex flex-row w-1/2">
                    <Image src={Logo} alt='image' className="w-[228px] h-[68px]" />
                </div>
                <div className="flex flex-col lg:w-1/2 pb-14">
                    <p className="text-[16px] text-white font-medium mb-8">Company</p>
                    <p className="text-[14px]">Cykelbarometer tiskap, regnbågsbarn. Diren kude. Trangen tön. Andrafiering plabel. Antist dibel.
                        Detet plar. Sorat prio. Dedon bise, sor. Tötrenas pan om terasm. Emgram eurovis om backslick.
                        Intrakosa plötslig vuxendöd. Päkron rel. Sospere atomslöjd. Hexare juholtare. Lanas att.
                        Pevill. Pogt traras bengen. Plastis krosektigt. Pixlig soska. Dekaligt satt, respektive od.
                        Osade tison ypäsat. Språkplikt ten och stenorure. Astrosodat agon yjäjänat. Blandkostare. Sosesade.
                        Guldomat kontraling spår. Lask kun. Polyamori revis. Läjov lar uspesa. Mytopol.
                    </p>
                </div>
            </div>
            <p className='text-white text-[10px] w-[85%] mx-auto py-4'>Built with ⚡️ Intelai Company Inc</p>
        </div>
    )
}