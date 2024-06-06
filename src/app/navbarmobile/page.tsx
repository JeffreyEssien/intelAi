"use client"

import React from "react";
import Image from "next/image";
import Logo from '../landingpages/images/Intel AI logo (1) (1).png'
import Icon1 from '../landingpages/images/Group 92608.png'
import Icon2 from '../landingpages/images/Group 92606.png'
import Icon3 from '../landingpages/images/Group 92607.png'
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function NavbarMobile() {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <div className="flex-col flex lg:hidden">
            <div className="text-white flex-row justify-between lg:px-40 pr-4 py-8 bg-[#0A0908] mb-10 items-center flex lg:hidden">
                <div className="lg:w-[10%] w-[45%] pl-4 lg:pl-0 pr-8 lg:pr-0">
                    <Image src={Logo} alt="image" className="object-cover" />
                </div>
                <div>
                    <button onClick={handleMenu} className="text-[30px]"><FaBars /></button>
                </div>
            </div>
            {isNavOpen && (
                <div className="mb-20">
                    <ul className="flex flex-col items-center lg:gap-10 gap-y-10">
                        <li className="hover:text-[#BDFE1C] text-[24px]">Docs</li>
                        <li className="hover:text-[#BDFE1C] text-[24px] lg:text-[16px]">Advantages</li>
                        <div className="border-[1px] border-[#181818] py-4 rounded-[66px] px-4 flex flex-col items-center justify-around">
                            <p className="lg:pr-2 text-[24px] lg:text-[16px]">Community</p>
                            <div className="flex flex-row items-center justify-center gap-4">
                            <p className="w-[10%]"><Image src={Icon1} alt="image" /></p>
                            <p className="w-[10%]"><Image src={Icon2} alt="image" /></p>
                            <p className="w-[10%]"><Image src={Icon3} alt="image" /></p>
                            </div>
                        </div>
                        <div className="w-[45%] lg:w-auto bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[66px] py-[1px] px-[1px]">
                            <button className="lg:px-10 px-2 w-full lg:w-auto rounded-[66px] py-2 bg-gradient-to-r from-[#3A3A3A] to-[#000000] lg:text-[14px] text-[20px]">Request Access</button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    )
}