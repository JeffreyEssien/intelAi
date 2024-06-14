"use client";

import { useState } from "react";
import Image from "next/image";
import LoadingImg from "../landingpages/images/Group 92718.png"
import IntelAiWorkspaceModal from "../modals/community_train_your_ai_modal/intel_ai_workspace_modal/page";
import Sidebar from "@/components/sidebar/page";

export default function IntelAiWorkspace() {
    const [isOn, setIsOn] = useState(false);
    const [fileName, setFileName] = useState('No file chosen');

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // Logic to handle form submission
        alert('Form submitted');
    };

    const [isModalOpen, setIsModalOpen] = useState(true);


    const handleModalClose = () => {
        setIsModalOpen(false);
      }

    return (
        <div className="bg-[#0D0D0D] flex flex-row w-full">
            <Sidebar />
            <div className="flex flex-col bg-[#0D0D0D] w-full">
                <div className="w-full flex flex-row py-3 items-center gap-3 justify-end pr-5">
                    <p className="text-[20px]">Co-pilot</p>
                    <div onClick={handleToggle} className={`w-[54px] h-[18px] flex items-center bg-[#545454] rounded-full p-1 cursor-pointer ${isOn ? '' : 'bg-white'}`}>
                        <div className={`bg-[#545454] w-[14px] h-[14px] rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-green-500' : ''}`}></div>
                    </div>
                    {isOn ? <p>on</p> : <p>off</p>}
                </div>

                <div className="bg-[#141414] w-full min-h-screen rounded-[40px] pt-10 pl-14 pb-10">
                    <p className="font-medium text-[20px]">IntelAI Workspace</p>

                    <div className="flex flex-row justify-between gap-10 mt-8 pr-10">
                        <div className=" w-1/3 bg-[#181818]">
                            <div className="bg-[#1B1B1B] py-2 pl-4 rounded-[20px]">
                                <p className="text-[14px] mt-2 mb-3">Provide Context</p>
                                <p className="text-[#858585] text-[14px]">Providing more information about your community will help the AI better understand your needs and provide more accurate assistance.</p>
                            </div>

                            <h2 className="text-[14px] text-[#D6D6D6] italic mb-4 mt-20 pl-4">UPLOAD DOCUMENTS</h2>

                            <form className=" mt-8 text-white rounded-md w-[90%] px-8">
                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="block mb-2">What is the name of your project?</label>
                                    <input
                                        type="text"
                                        placeholder="Metadapp"
                                        className="w-full p-2 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="block mb-2">What is the category of your project?</label>
                                    <select className="w-full p-2 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Launchpad</option>
                                        <option>Padlaunch</option>
                                        <option>Startup</option>
                                    </select>
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="block mb-2">Add Website/URL</label>
                                    <input
                                        type="text"
                                        placeholder="https://example.com"
                                        className="w-full p-2 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="block mb-2">Upload Document</label>
                                    <p className="text-sm mb-2">Kindly upload a document that contains detailed information about your project including Tokenomics, FAQs, etc. PDF version of your Gitbook would be perfect.</p>
                                    <input
                                        type="file"
                                        className="w-full p-2 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="w-2/3 bg-[#181818] min-h-screen rounded-[20px]">
                            <div className="flex flex-row justify-between p-4 bg-[#1B1B1B] rounded-[20px]">
                                <p className=" text-[#858585] text-[14px] p-4 rounded-[20px]">Test area</p>
                                <div className="bg-[#131313] rounded-[10px] p-4">
                                    <p className="flex flex-row gap-2">
                                        <span className="text-[]">1/15</span>
                                        <span>prompts</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-10 mt-14">
                                <Image src={LoadingImg} alt="Loader" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <IntelAiWorkspaceModal isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
}
