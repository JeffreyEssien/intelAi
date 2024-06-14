"use client"

import Image from 'next/image'
import Logo from '../../app/landingpages/images/Intel AI logo (1) (1) (1).png'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


export default function Sidebar() {


    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    const textToCopy = "0x35b...a36b";

    return (
        <div className="bg-[#0D0D0D] min-h-screen w-[20%] border-r border-[#363636] relative">
            <div className='border-b border-[#363636] py-5 px-5 mb-40 mx-4'>
                <Image src={Logo} alt='yes' className='w-[45%]' />
            </div>
            <div className='items flex flex-col space-y-20'>
                <div className='flex flex-row items-center gap-3'>
                    <p className='pl-14'><svg width="22" height="22" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 4.06667V2.35C1.75 2.01863 2.01863 1.75 2.35 1.75H5.23333C5.5647 1.75 5.83333 2.01863 5.83333 2.35V4.06667C5.83333 4.39804 5.5647 4.66667 5.23333 4.66667H2.35C2.01863 4.66667 1.75 4.39804 1.75 4.06667Z" stroke="white" />
                        <path d="M8.16699 11.6507V9.93398C8.16699 9.60261 8.43562 9.33398 8.76699 9.33398H11.6503C11.9817 9.33398 12.2503 9.60261 12.2503 9.93398V11.6507C12.2503 11.982 11.9817 12.2507 11.6503 12.2507H8.76699C8.43562 12.2507 8.16699 11.982 8.16699 11.6507Z" stroke="white" />
                        <path d="M8.16699 6.98333V2.35C8.16699 2.01863 8.43562 1.75 8.76699 1.75H11.6503C11.9817 1.75 12.2503 2.01863 12.2503 2.35V6.98333C12.2503 7.3147 11.9817 7.58333 11.6503 7.58333H8.76699C8.43562 7.58333 8.16699 7.3147 8.16699 6.98333Z" stroke="white" />
                        <path d="M1.75 11.6493V7.01602C1.75 6.68464 2.01863 6.41602 2.35 6.41602H5.23333C5.5647 6.41602 5.83333 6.68465 5.83333 7.01602V11.6493C5.83333 11.9807 5.5647 12.2493 5.23333 12.2493H2.35C2.01863 12.2493 1.75 11.9807 1.75 11.6493Z" stroke="white" />
                    </svg>
                    </p>
                    <p>Dashboard</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <p className='pl-14'><svg width="22" height="22" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33301 9.33268L9.33301 4.66602" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 9.33268L7 6.41602" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.66699 9.33398L4.66699 7.58398" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.75 11.65V2.35C1.75 2.01863 2.01863 1.75 2.35 1.75H11.65C11.9814 1.75 12.25 2.01863 12.25 2.35V11.65C12.25 11.9814 11.9814 12.25 11.65 12.25H2.35C2.01863 12.25 1.75 11.9814 1.75 11.65Z" stroke="#707070" />
                    </svg>
                    </p>
                    <p className='text-[#707070]'>AI Community Workspace</p>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <p className='pl-14'><svg width="22" height="22" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.66296 0.529297H10.3496L6.66463 4.74138L11 10.4719H7.60558L4.94725 6.99592L1.90483 10.4719H0.21725L4.15892 5.9665L0 0.529755H3.48058L5.88363 3.70692L8.66296 0.529297ZM8.07125 9.46267H9.00579L2.97275 1.48584H1.96992L8.07125 9.46267Z" fill="url(#paint0_linear_2600_20153)" />
                        <defs>
                            <linearGradient id="paint0_linear_2600_20153" x1="0" y1="5.50061" x2="11" y2="5.50061" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#03FFA3" />
                                <stop offset="1" stop-color="#7F56D9" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </p>
                    <p className='text-[#707070]'>X Agents</p>
                </div>
                <div className=''>
                    <p className='text-[#707070] pl-14'>DEPIN </p>
                </div>
            </div>
            <div className='bg-[#141414] w-[80%] rounded-[24px] flex flex-row items-center justify-between py-3 gap-2 pl-2 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <div className='flex flex-row items-center gap-1'>
                <div className='w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center'> </div>
                <p className='text-[14px]'>{textToCopy}</p>
                <button onClick={handleCopy}>
                    {copied ? 'Copied!' : <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0H3.5C3.36739 0 3.24021 0.0526785 3.14645 0.146447C3.05268 0.240215 3 0.367392 3 0.5V3H0.5C0.367392 3 0.240215 3.05268 0.146447 3.14645C0.0526785 3.24021 0 3.36739 0 3.5V11.5C0 11.6326 0.0526785 11.7598 0.146447 11.8536C0.240215 11.9473 0.367392 12 0.5 12H8.5C8.63261 12 8.75979 11.9473 8.85355 11.8536C8.94732 11.7598 9 11.6326 9 11.5V9H11.5C11.6326 9 11.7598 8.94732 11.8536 8.85355C11.9473 8.75979 12 8.63261 12 8.5V0.5C12 0.367392 11.9473 0.240215 11.8536 0.146447C11.7598 0.0526785 11.6326 0 11.5 0ZM8 11H1V4H8V11ZM11 8H9V3.5C9 3.36739 8.94732 3.24021 8.85355 3.14645C8.75979 3.05268 8.63261 3 8.5 3H4V1H11V8Z" fill="#C8C8C8" />
                    </svg>
                    }
                </button>
                </div>
                <p className='font-slim pr-3 text-[10px]'><FaPlus /></p>
            </div>
        </div>
    )
}