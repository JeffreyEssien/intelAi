"use client";

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import TelegramImg from '../landingpages/images/Vector.png';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export default function QuerySortingPortal() {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleQuerySubmit = () => {
        if (query.trim() === '') return;

        const userMessage: Message = {
            sender: 'user',
            text: query,
        };
        setMessages([...messages, userMessage]);
        setQuery('');

        const aiResponse = `I'm sorry to hear you're experiencing a bug! Your issue has been escalated to our community manager, who will assist you shortly. In the meantime, could you please provide more details about the bug, such as what you were doing when it occurred and any error messages you received? This will help us resolve the issue more efficiently. Thank you for your patience!`;

        const botMessage: Message = {
            sender: 'bot',
            text: aiResponse,
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleQuerySubmit();
        }
    };

    return (
        <div className="w-1/3 bg-[#131313] min-h-screen border-l border-[#363636] p-4 flex flex-col">
            <p className="text-[16px]">Query Sorting Portal</p>

            <div className="h-screen flex flex-col bg-[#181818] mt-5 rounded-[20px] relative w-full">
                <div className="bg-[#252525] flex flex-row gap-3 items-center p-2 rounded-[20px] ">
                    <div className="bg-[#76CA43] w-10 h-10 rounded-full flex justify-center items-center relative">
                        <p className="text-center text-black font-semibold">MT</p>
                        <Image src={TelegramImg} alt="telegram" className="w-[40%] absolute bottom-0 right-0" />
                    </div>
                    <p>Metatrade Inc</p>
                </div>

                <div className="flex-grow overflow-y-scroll scrollbar-thin p-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-10 flex  ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-4 rounded-[20px] relative ${message.sender === 'user' ? 'bg-[#696969] w-3/4 overflow-wrap break-words' : 'bg-[#2D2D2D]'}`}>
                                <div className={`${message.sender === 'user' ? '-bottom-4' : '-bottom-4 right-6'} absolute transform bg-[#2D2D2D] px-2 py-1 rounded-[20px] border-4 border-[#181818]`}>
                                    <p className='text-white text-[12px]'>{message.sender === 'user' ? 'Spockman2304' : <span>Intel<span className='text-[#03FFA3]'>ai</span></span>}</p>
                                </div>
                                <p className="text-white">{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#181818] p-4 flex flex-col w-full">
                    <button className='bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] flex flex-row items-center gap-1 justify-center rounded-[66px] py-1 w-2/4 text-[12px] mb-4'>Resolve comment
                        <span><svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646447 5.01754C0.451184 5.2128 0.451184 5.52938 0.646447 5.72465C0.841709 5.91991 1.15829 5.91991 1.35355 5.72465L0.646447 5.01754ZM6.24342 0.627678C6.24342 0.351535 6.01956 0.127677 5.74342 0.127678L1.24342 0.127677C0.967274 0.127677 0.743416 0.351535 0.743416 0.627677C0.743416 0.90382 0.967274 1.12768 1.24342 1.12768L5.24342 1.12768L5.24342 5.12768C5.24342 5.40382 5.46727 5.62768 5.74342 5.62768C6.01956 5.62768 6.24342 5.40382 6.24342 5.12768L6.24342 0.627678ZM1.35355 5.72465L6.09697 0.981231L5.38986 0.274124L0.646447 5.01754L1.35355 5.72465Z" fill="white" />
                        </svg>
                        </span>
                    </button>
                    <div className="w-full flex flex-row items-center gap-3">
                        <input
                            value={query}
                            onChange={handleQueryChange}
                            onKeyDown={handleKeyDown}
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
