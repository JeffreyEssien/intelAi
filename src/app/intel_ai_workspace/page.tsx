"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { AiOutlineCheckCircle, AiFillFilePdf } from "react-icons/ai";
import Image from "next/image";
import LoadingImg from "../landingpages/images/Group 92718.png";
import IntelAiImg from "../landingpages/images/Intel AI.png";
import IntelAiWorkspaceModal from "../intel_ai_workspace_modal/page";
import TelegramSimulation from "../telegram_simulation/page";
import Sidebar from "@/components/sidebar/page";
import { FaTelegramPlane } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const IntelAiWorkspace = () => {
    const [isOn, setIsOn] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [projectURL, setProjectURL] = useState('');
    const [isEditingName, setIsEditingName] = useState(true);
    const [isEditingCategory, setIsEditingCategory] = useState(true);
    const [isEditingURL, setIsEditingURL] = useState(true);
    const [isSimulationModalOpen, setSimulationModalOpen] = useState(false);
    const [isURLValid, setIsURLValid] = useState(true);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            alert("Please select a valid PDF or DOC file.");
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!projectName || !projectCategory || !projectURL || !file) {
            alert('Please fill out all required fields.');
            return;
        }
        if (!isURLValid) {
            alert('Please enter a valid URL.');
            return;
        }
        alert('Form submitted');
        setFormSubmitted(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');
        if (!hasVisitedBefore) {
            setIsModalOpen(true);
            sessionStorage.setItem('hasVisitedBefore', 'true');
        } else {
            setIsModalOpen(false);
        }
    }, []);

    const handleNameBlur = () => {
        if (projectName.trim() !== '') {
            setIsEditingName(false);
        }
    };

    const handleCategoryBlur = () => {
        if (projectCategory.trim() !== '') {
            setIsEditingCategory(false);
        }
    };

    const handleURLBlur = () => {
        if (projectURL.trim() !== '') {
            validateURL(projectURL);
        }
    };

    const handleEditClick = (field: string) => {
        if (field === 'name') setIsEditingName(true);
        if (field === 'category') setIsEditingCategory(true);
        if (field === 'url') setIsEditingURL(true);
    };

    const handleSimulation = () => {
        setSimulationModalOpen(!isSimulationModalOpen);
    };

    const validateURL = (url: string) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        setIsURLValid(regex.test(url));
    };

    return (
        <div className="bg-[#0D0D0D] flex flex-row w-full min-h-screen h-auto">
            {isSimulationModalOpen && <TelegramSimulation />}
            <Sidebar />
            <div className="flex flex-col bg-[#0D0D0D] w-full">
                <div className="w-full flex flex-row py-3 items-center gap-3 justify-end pr-5">
                    <p className="text-[20px]">Co-pilot</p>
                    <div onClick={handleToggle} className={`w-[54px] h-[18px] flex items-center bg-[#545454] rounded-full p-1 cursor-pointer ${isOn ? '' : 'bg-white'}`}>
                        <div className={`bg-[#545454] w-[14px] h-[14px] rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-green-500' : ''}`}></div>
                    </div>
                    <p>{isOn ? 'on' : 'off'}</p>
                </div>

                <div className="bg-[#141414] w-full min-h-screen rounded-[40px] pt-10 pl-14 pb-10">
                    <p className="font-medium text-[20px]">IntelAI Workspace</p>
                    <div className="flex flex-row justify-between gap-10 mt-8 pr-10">
                        <div className="w-1/3 bg-[#181818]">
                            <div className="bg-[#1B1B1B] py-2 pl-4 rounded-[20px]">
                                <p className="text-[14px] mt-2 mb-3">Provide Context</p>
                                <p className="text-[#858585] text-[14px]">Providing more information about your community will help the AI better understand your needs and provide more accurate assistance.</p>
                            </div>

                            <h2 className="text-[14px] text-[#D6D6D6] italic mb-4 mt-20 pl-4">UPLOAD DOCUMENTS</h2>

                            <form className="mt-8 text-white rounded-md w-[90%] px-8" onSubmit={handleSubmit}>
                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="mb-2 flex items-center">
                                        {!isEditingName && <AiOutlineCheckCircle className="text-green-400 inline-block mr-2" />}
                                        What is the name of your project?
                                        {!isEditingName && (
                                            <button type="button" className="ml-2" onClick={() => handleEditClick('name')}>
                                                <BsChevronDown className="text-white" />
                                            </button>
                                        )}
                                    </label>
                                    {isEditingName ? (
                                        <input
                                            type="text"
                                            placeholder="Metadapp"
                                            className="w-full p-4 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={projectName}
                                            onChange={(e) => setProjectName(e.target.value)}
                                            onBlur={handleNameBlur}
                                        />
                                    ) : (
                                        <p className="text-[#858585] pl-6">{projectName}</p>
                                    )}
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="mb-2 flex items-center">
                                        {!isEditingCategory && <AiOutlineCheckCircle className="text-green-400 inline-block mr-2" />}
                                        What is the category of your project?
                                        {!isEditingCategory && (
                                            <button type="button" className="ml-2" onClick={() => handleEditClick('category')}>
                                                <BsChevronDown className="text-white" />
                                            </button>
                                        )}
                                    </label>
                                    {isEditingCategory ? (
                                        <select
                                            className="w-full p-4 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={projectCategory}
                                            onChange={(e) => setProjectCategory(e.target.value)}
                                            onBlur={handleCategoryBlur}
                                        >
                                            <option value="">Select category</option>
                                            <option value="Launchpad">Launchpad</option>
                                            <option value="Padlaunch">Token Project</option>
                                            <option value="Startup">Memecoin Project</option>
                                        </select>
                                    ) : (
                                        <p className="text-[#858585] pl-6">{projectCategory}</p>
                                    )}
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="mb-2 flex items-center">
                                        {!isEditingURL && <AiOutlineCheckCircle className="text-green-400 inline-block mr-2" />}
                                        Add Website/URL
                                        {!isEditingURL && (
                                            <button type="button" className="ml-2" onClick={() => handleEditClick('url')}>
                                                <BsChevronDown className="text-white" />
                                            </button>
                                        )}
                                    </label>
                                    {isEditingURL ? (
                                        <input
                                            type="text"
                                            placeholder="https://example.com"
                                            className="w-full p-4 bg-[#131313] rounded-[66px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={projectURL}
                                            onChange={(e) => setProjectURL(e.target.value)}
                                            onBlur={handleURLBlur}
                                        />
                                    ) :(
                                        <p className={`text-[#858585] pl-6 ${isURLValid ? '' : 'text-red-500'}`}>{projectURL}</p>
                                    )}
                                    {!isURLValid && <p className="text-red-500 text-sm mt-2">Please enter a valid URL.</p>} 
                                </div>

                                <div className="mb-6 border-b border-[#2B2B2B] pb-8">
                                    <label className="block mb-2">Upload Document</label>
                                    <p className="text-sm mb-2 text-[#858585] flex flex-col">
                                        Kindly upload any documents or links that you might have about your project or product.
                                        <span className="text-white"> Whitepaper, Gitbook, Pitch Deck, Excel Sheet, FAQ documents and so on.</span>
                                    </p>
                                    {!formSubmitted ? (
                                        <label className="w-full py-5 flex items-center justify-center bg-[#131313] border-2 border-dashed border-[#363636] rounded-[66px] text-[#707070] cursor-pointer hover:bg-[#1e1e1e] relative">
                                            <span>Upload doc: PDF, GITBOOK, DOC</span>
                                            <input
                                                type="file"
                                                className="absolute w-full h-full opacity-0 cursor-pointer"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    ) : (
                                        file && (
                                            <div className="flex items-center justify-between bg-[#131313] border border-green-500 rounded-[20px] p-4">
                                                <div className="flex items-center">
                                                    <AiFillFilePdf className="text-red-500 text-5xl mr-4" />
                                                    <div>
                                                        <p className="text-white">{file.name}</p>
                                                        <p className="text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <AiOutlineCheckCircle className="text-green-400 text-3xl mr-2" />
                                                    <span className="text-white">100%</span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                {!formSubmitted && (
                                    <button className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] text-white py-2 mb-4 w-[153px] mx-auto rounded-[24px]" type="submit">
                                        Submit
                                    </button>
                                )}
                            </form>
                        </div>

                        <div className="w-2/3 bg-[#181818] min-h-screen rounded-[20px] pb-20">
                            <div className="flex flex-row justify-between p-4 bg-[#1B1B1B] rounded-[20px]">
                                <p className="text-[#858585] text-[14px] p-4 rounded-[20px]">Test area</p>
                                <div className="bg-[#131313] rounded-[10px] p-4">
                                    <p className="flex flex-row gap-2 items-center">
                                        <span className="text-[12px]">1/15</span>
                                        <span>prompts</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-10 mt-14">
                                {formSubmitted ? (
                                    <div className="flex flex-col">
                                        <div className="flex flex-col border-l-4 space-y-10 border-[#03FFA3] pl-2">
                                            <Image src={IntelAiImg} alt="logo" className="w-[10%]" />
                                            <p className="text-white">
                                                GetEquity is a dynamic platform that democratizes access to private capital investments, providing a marketplace for investors of all types to engage in private company investments across diverse markets like the Middle East, Africa, and Europe.
                                            </p>
                                            <p>
                                                The company focuses on aggregating investments across various asset classes, making investment opportunities more accessible for SEC-accredited providers. Founded in 2020 and based in Lagos, Nigeria, GetEquity operates as a private marketplace facilitating the trade of digital securities and assets securely and privately. Their innovative approach allows users to fund their wallets easily, invest in vetted investment products, buy and sell shares, and even gift equity to family and friends.
                                            </p>
                                            <p>
                                                GetEquity is a dynamic platform that democratizes access to private capital investments, providing a marketplace for investors of all types to engage in private company investments across diverse markets like the Middle East, Africa, and Europe.
                                            </p>
                                            <p>
                                                The company focuses on aggregating investments across various asset classes, making investment opportunities more accessible for SEC-accredited providers. Founded in 2020 and based in Lagos, Nigeria, GetEquity operates as a private marketplace facilitating the trade of digital securities and assets securely and privately. Their innovative approach allows users to fund their wallets easily, invest in vetted investment products, buy and sell shares, and even gift equity to family and friends.
                                            </p>
                                        </div>

                                        <button className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] py-2 w-1/3 flex flex-row items-center justify-center rounded-[66px] mx-auto gap-2 my-6" onClick={handleSimulation}>
                                            <FaTelegramPlane /> Simulate on Telegram
                                        </button>
                                    </div>
                                ) : (
                                    <Image src={LoadingImg} alt="Loader" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <IntelAiWorkspaceModal />}
        </div>
    );
}

export default IntelAiWorkspace;
