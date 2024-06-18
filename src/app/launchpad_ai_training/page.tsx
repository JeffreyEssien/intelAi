"use client"
import { useState, useEffect } from "react";

import Sidebar from "@/components/sidebar/page";
import { FaTelegramPlane } from "react-icons/fa";


interface TrainingData {
    id: number;
    projectName: string;
    action: string;
    dateTime: string;
}

const trainingData: TrainingData[] = [
    {
        id: 1,
        projectName: 'Partnerships',
        action: 'Updated Document',
        dateTime: '20, May 2024 10:15 am',
    },
    {
        id: 2,
        projectName: 'Raise Announcement',
        action: 'Edited Document',
        dateTime: '20, May 2024 10:15 am',
    },
    {
        id: 3,
        projectName: 'Engagement',
        action: 'Updated Information',
        dateTime: '20, May 2024 10:15 am',
    },
];



export default function LauuchpadAiTraining() {

    const rowColors = [
        'bg-[#0A0908]', // Dark gray
        'bg-[#1D1D1D]', // Slightly lighter gray
        'bg-[#0A0908]', // Even lighter gray
    ];

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };




    return (
        <div className="bg-[#0D0D0D] h-screen w-full rounded-[20px]">
            <div className="flex flex-row ">
                <Sidebar />
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row justify-between gap-4 w-full py-8">
                        <div className="flex flex-row gap-3 w-4/5 mx-auto justify-center">
                            <button className="text-[14px] font-semibold" >Ai Training</button>
                            <button className="text-[14px] text-[#6A6A6A]">Query Escalation Protocol</button>
                        </div>
                        <div className="w-1/5 flex flex-row items-center gap-5 ">
                            <p className="text-[20px]">Co-pilot</p>
                            <div onClick={handleToggle} className={`w-[54px] h-[18px] flex items-center bg-[#545454] rounded-full p-1 cursor-pointer ${isOn ? '' : 'bg-[#545454] '}`}>
                                <div className={` w-[14px] h-[14px] rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-green-500' : 'bg-white'}`}></div>
                            </div>
                            {isOn ? <p>on</p> : <p>off</p>}
                        </div>
                    </div>
                    <div className="bg-[#141414] rounded-[20px] min-h-screen w-full flex flex-col">
                        <div className="flex flex-row mt-5 ml-5 gap-3">
                            <button className="text-white text-[14px]">Ape Terminal training</button>
                            <button className="text-[#4D4D4D] text-[14px]">Launchpad projects training</button>
                        </div>

                        <div className="mt-20 flex flex-col w-[80%] mx-auto">
                            <p className="text-center text-[24px]">What’s new with your launchpad projects?</p>

                            <div className="flex flex-row w-full justify-around mt-5 ">
                                <div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-3xl p-[1px]">
                                    <li className="border-[#202020] border rounded-3xl text-center min-w-[266px] flex items-center justify-center py-3 bg-gradient-to-r from-[#3A3A3A] to-[#000000]">Upcoming Project Listings</li>
                                </div>

                                <li className="border-[#202020] border rounded-3xl text-center min-w-[266px] flex items-center justify-center py-3">Update Previously Listed Projects</li>

                            </div>

                        </div>

                        <div className='bg-[#131313] p-8 rounded-2xl w-[80%] mx-auto mt-40'>
                            <h2 className="text-white text-[18px] mb-5">Training History</h2>
                            <h3 className="text-[#929292] text-[14px] mb-5">Recent Training</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-[#1a1a1a] rounded-lg">
                                    <thead>
                                        <tr>
                                            <th className="py-3 px-4 text-left text-gray-400">#</th>
                                            <th className="py-3 px-4 text-left text-gray-400">PROJECT NAME</th>
                                            <th className="py-3 px-4 text-left text-gray-400">ACTION</th>
                                            <th className="py-3 px-4 text-left text-gray-400">DATE & TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {trainingData.map((data, index) => (
                                            <tr key={data.id} className={`${rowColors[index % rowColors.length]} `}>
                                                <td className="py-4 px-4 text-white">{data.id}.</td>
                                                <td className="py-4 px-4 text-white">{data.projectName}</td>
                                                <td className="py-4 px-4 text-[#03FFA3]">{data.action}</td>
                                                <td className="py-4 px-4 text-white">{data.dateTime}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}