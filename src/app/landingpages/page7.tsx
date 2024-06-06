import React from "react";
import Image from "next/image";
import Gradient from '../landingpages/images/Mask group (2).png'

export default function Page7() {

    const style: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(220, 31, 255, 0.2))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    const style2: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(3, 255, 163, 0.28), rgba(16, 12, 14, 0.2))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    return (
        <div className="flex flex-col items-center mt-40 relative overflow-hidden h-auto">

            {/* <div className="w-[37%] h-1/4 absolute bottom-0 left-1/2 transform -translate-x-1/2" style={style}>
            </div> */}
            {/* <div className="w-[37%] h-1/4 absolute bottom-[-100px] left-1/3 transform -translate-x-1/2 rounded-full bg-gradient-to-l from-[#DC1FFF52] to-[#03FFA31A] backdrop-filter backdrop-blur-md bg-opacity-50 p-4" style={style2}>
            </div> */}
            <Image src={Gradient} alt="image" className="absolute bottom-0 left-1/2 transform -translate-x-1/2"/>

            <p className="text-white text-center text-[40px] mb-3">Frequently asked questions</p>
            <p className="text-[16px] text-center w-[40%] text-[#8A8A8A]">Everything you need to know</p>

            <div className="flex flex-col w-[55%] mt-20">

                <div className="flex flex-row justify-between border-b border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">What is Intel AI and how does it benefit community managers and influencers?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
                <div className="flex flex-row justify-between border-t border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">How do I get started with training an AI on Intel AI?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
                <div className="flex flex-row justify-between border-t border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">What are 'Animation Steroids' and how can they enhance my projects?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
                <div className="flex flex-row justify-between border-t border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">How does the 'Advanced Query Escalation Protocol' work?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
                <div className="flex flex-row justify-between border-t border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">Can I update my projects and announcements through Intel AI?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
                <div className="flex flex-row justify-between border-t border-[#2B2B2B] py-6 items-center">
                    <p className="text-white text-[16px]">Is Intel AI secure and how does it protect my data?</p>
                    <p><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 7.60672V15.5824M7.34549 11.5945H15.3211M21.3029 11.5945C21.3029 17.1006 16.8393 21.5641 11.3333 21.5641C5.82729 21.5641 1.36377 17.1006 1.36377 11.5945C1.36377 6.08852 5.82729 1.625 11.3333 1.625C16.8393 1.625 21.3029 6.08852 21.3029 11.5945Z" stroke="white" stroke-width="1.99391" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </div>
            </div>

            <div className="flex flex-row justify-between w-[60%] my-20 items-center py-14 px-10 rounded-[20px] bg-gradient-to-br from-[#BDFE1C] via-[#25B8DE] to-[#460DFF] mb-60">
                <div className="flex flex-col">
                    <p className="text-[24px] text-white mb-2">Still have questions?</p>
                    <p className="text-[#2A336D] text-[16px] w-[70%]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <button className="px-14 py-1 text-white rounded-[66px] border bg-gradient-to-r from-[#3A3A3A] to-[#000000] h-[40px]">Sign up</button>

            </div>
        </div>
    )
}