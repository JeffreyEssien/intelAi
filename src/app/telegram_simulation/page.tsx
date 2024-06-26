"use client";

import React, { useState } from 'react';
import { AiOutlineSend, AiOutlineLike, AiOutlineDislike, AiOutlineClose } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import SuccessfulInitialTrainingModal from '../successful_initial_training_modal/page';

interface Message {
    sender: 'user' | 'bot';
    text: string;
    timestamp: string;
}

export default function TelegramSimulation() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [showSuccessful, setShowSuccessful] = useState(false)
    const [useCount, setUseCount] = useState(0);
    const [showSimulation, setShowSimulation] = useState(true)

    const handleSendMessage = (messageText?: string) => {
        if (useCount >= 15) return; // Check if the use limit is reached

        const text = messageText || input;
        if (text.trim() === '') return;

        const newMessage: Message = {
            sender: 'user',
            text: text,
            timestamp: new Date().toLocaleTimeString(), // Add timestamp
        };
        setMessages([...messages, newMessage]);
        setInput('');
        setUseCount(useCount + 1);
        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                sender: 'bot',
                text: 'With a commitment to providing tools for investment, asset organization, and management in one convenient platform, GetEquity ensures a safe and efficient investment experience for accredited investors, from high-net-worth individuals to industry veterans.',
                timestamp: new Date().toLocaleTimeString(), // Add timestamp
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 200);
    };

    const handleCompleteTraining = () => {
        setShowSuccessful(!showSuccessful)
    }

    const handleButtonClick = (messageText: string) => {
        handleSendMessage(messageText);
    };

    const handleClose = () => {
        setShowSimulation(!showSimulation)
    };

    return (
        <div className='absolute w-full z-10'>
              {showSuccessful && (
                <div className='absolute w-full h-screen z-20'>
                    <SuccessfulInitialTrainingModal />
                </div>
            )}
             {showSimulation && (
            <div className="flex flex-col items-end bg-[#131313] bg-opacity-65 inset-0 ">
                <div className="bg-[#131313] flex flex-col h-auto overflow-hidden w-1/4 relative">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-white">
                        <AiOutlineClose size={18} />
                    </button>
                    <div className="absolute top-4 right-16 text-white bg-[#131313] p-4">
                        <p className='flex items-center text-[12px] text-[#858585]'>
                            <span className='text-white'>  {0 + useCount}</span> / 15  prompts
                        </p>
                    </div>
                    <select className="bg-[#1D1D1D] w-1/3 p-4 m-4 rounded-[10px]">
                        <option className='flex items-center gap-2'><FaTelegram />Telegram</option>
                        <option className='flex items-center gap-2'><FaXTwitter /> Twitter</option>
                        <option className='flex items-center gap-2'><FaDiscord /> Discord</option>
                    </select>

                    <div className=" bg-[#181818] h-screen overflow-hiden rounded-t-[20px] relative">
                        <p className="bg-[#1B1B1B] w-full p-4 text-[#858585] rounded-[20px]">Simulation Workspace</p>
                        <div className="w-full flex flex-row justify-around mt-4">
                            <div className="hover:bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[8px] p-[2px]">
                                <button
                                    className="bg-[#2C2C2C] text-center text-[12px] py-4 px-2 rounded-[8px]"
                                    onClick={() => handleButtonClick('What is get equity')}
                                    disabled={useCount >= 15}>
                                    What is get equity
                                </button>
                            </div>
                            <div className="hover:bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[8px] p-[2px]">
                                <button
                                    className="bg-[#2C2C2C] text-center text-[12px] py-4 px-2 rounded-[8px]"
                                    onClick={() => handleButtonClick('When Private Sale?')}
                                    disabled={useCount >= 15}>
                                    When Private Sale?
                                </button>
                            </div>
                            <div className="hover:bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-[8px] p-[2px]">
                                <button
                                    className="bg-[#2C2C2C] text-center text-[12px] py-4 px-2 rounded-[8px]"
                                    onClick={() => handleButtonClick('Best features?')}
                                    disabled={useCount >= 15}>
                                    Best features?
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 mb-20 mt-6 px-4 h-screen overflow-y-scroll scrollbar-thin">
                            {messages.map((message, index) => (
                                <div key={index} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {message.sender === 'bot' && (
                                        <div className="flex items-start">

                                            <div className="bg-[#2D2D2D] p-4 rounded-lg relative">
                                                <div className="absolute -bottom-5 left-6 transform -translate-x-1/2 bg-[#2D2D2D] px-2 py-1 rounded-[20px] border-[#181818] border-4">
                                                    <p className='text-[12px] bg-[#2D2D2D] '>Intel<span className='text-[#03FFA3]'>ai</span></p>
                                                </div>
                                                <div className="text-white">{message.text}</div>
                                                <div className="text-xs text-gray-400 mt-2">{message.timestamp}</div>
                                                <div className="flex space-x-2 mt-2">
                                                    <button className="text-gray-400 hover:text-white">
                                                        <AiOutlineLike size={20} />
                                                    </button>
                                                    <button className="text-gray-400 hover:text-white">
                                                        <AiOutlineDislike size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {message.sender === 'user' && (
                                        <div className="flex items-end flex-col w-full">
                                            <div className="bg-[#696969] w-3/4 overflow-wrap break-words rounded-[20px] relative">
                                                <div className="absolute -bottom-2 -right-1 transform -translate-x-1/2 bg-[#2D2D2D] px-2 py-1 rounded-[20px] border-4 border-[#181818]">
                                                    <p className='text-white text-[12px]'>You</p>
                                                </div>
                                                <div className="text-white p-4">{message.text}</div>
                                                <div className="text-xs text-gray-400 mt-2 px-4">{message.timestamp}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center bg-[#181818] py-2 absolute bottom-0 w-full ">
                            <div className='flex flex-row px-4 w-full'>
                                <input
                                    type="text"
                                    placeholder="Ask any question"
                                    className="w-full p-2 rounded-lg bg-[#0D0D0D] text-white"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                    disabled={useCount >= 15}
                                />
                                <button className="ml-2 p-2 bg-[#03FFA3] rounded-lg" onClick={() => handleSendMessage()} disabled={useCount >= 15}>
                                    <AiOutlineSend size={24} />
                                </button>
                            </div>
                            <div className='bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] p-[2px] mt-8 rounded-[66px]'>
                                <button className='bg-gradient-to-r from-[#3A3A3A] to-[#000000] text-[12px] p-3 rounded-[66px]' onClick={handleCompleteTraining}>Complete Training</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             )}
        </div>
    );
}
