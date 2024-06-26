"use client"

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import TelegramImg from '../landingpages/images/Vector.png';

export default function QuerySortingPortal() {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleQuerySubmit = () => {
        // Predefined response
        const aiResponse = `**I'm sorry to hear you're experiencing a bug! Your issue has been escalated to our community manager, who will assist you shortly. In the meantime, could you please provide more details about the bug, such as what you were doing when it occurred and any error messages you received? This will help us resolve the issue more efficiently. Thank you for your patience!**`;
        
        // Update messages state to include both query and response
        setMessages((prevMessages) => [
            ...prevMessages,
            ` ${query}`,
            ` ${aiResponse}`
        ]);
        setQuery(''); // Clear the input field
    };

    return (
        <div className="w-1/3 bg-[#131313] min-h-screen border-l border-[#363636] p-4 flex flex-col">
            <p className="text-[16px]">Query Sorting Portal</p>

            <div className="h-[88vh] flex flex-col bg-[#181818] mt-5 rounded-[20px] relative w-full">
                <div className="bg-[#252525] flex flex-row gap-3 items-center p-2 rounded-[20px] ">
                    <div className="bg-[#76CA43] w-10 h-10 rounded-full flex justify-center items-center relative">
                        <p className="text-center text-black font-semibold">MT</p>
                        <Image src={TelegramImg} alt="telegram" className="w-[40%] absolute bottom-0 right-0" />
                    </div>
                    <p>Metatrade Inc</p>
                </div>

                <div className="flex-grow overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div key={index} className="p-4 rounded-[20px] text-white mb-2">
                            <p className='bg-[#2D2D2D] '>{message}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#181818] p-4 flex flex-col w-full">
                    <div className="w-full flex flex-row items-center gap-3">
                        <input
                            value={query}
                            onChange={handleQueryChange}
                            placeholder="Input the proper response here ...."
                            className="bg-[#0D0D0D] w-full border-[#272727] border rounded-[15px] py-3 text-[#3D3D3D] text-[12px] p-4"
                        />
                        <button onClick={handleQuerySubmit} className="bg-[#03FFA3] rounded-full p-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2309_36529)">
                                    <path d="M22 11.998L3 21.998L6.5625 11.998L3 1.99804L22 11.998Z" stroke="black" strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.50098 12L22.001 12" stroke="black" strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2309_36529">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
