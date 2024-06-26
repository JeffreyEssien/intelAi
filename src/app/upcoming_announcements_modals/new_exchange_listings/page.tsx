"use client"

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import SuccessfullToast from "@/app/toasts/successfultoast/page";

import CalendarWidget from "@/components/calender_widget/page";

export default function NewExchangeListings() {

    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [showToast, setShowToast] = useState(false)

    const handleCalendar = () => {
        setShowCalendar(!showCalendar)
    }

    const handleToast = () => {
        setShowToast(!showToast)
      }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (
          file &&
          (file.type === "application/pdf" ||
            file.type === "application/msword" ||
            file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        ) {
          setSelectedFile(file);
        } else {
          alert("Please select a valid PDF or DOC file.");
        }
      };
    
      const handleSend = () => {
        if (selectedFile) {
          setTextAreaValue((prev) => prev + "\n" + selectedFile.name);
          setSelectedFile(null); // Optional: Clear the file input after sending
        }
      };
    

    return (
        <div className=" flex items-center justify-center bg-[#0A0908] bg-opacity-50 w-full h-screen z-20">
            <div className="bg-[#101010] rounded-[20px] w-1/3">
                <p className="p-5 border-b border-[#181818]">New Exchange Listings</p>
                <div className="bg-[#131313] flex flex-col items-center px-8">
                    <p className="italic text-[14px] pt-4 mb-2">When do you want to inform your community about this information?</p>
                    <select className="bg-[#2A2A2A] p-4 rounded-[16px] w-full">Today
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Next Week</option>
                    </select>
                    <button className="underline w-full text-right text-[#BDFE1C] text-[12px] pt-2 pb-10" onClick={handleCalendar}>Custom day</button>
                    {showCalendar && (
                        <CalendarWidget />
                    )}
                </div>
                <div className="bg-[#131313]  ">
                <div className="bg-[#1B1B1B] px-10 rounded-b-[20px]">
                    <p className="py-4">Instructions:</p>
                    <p className="flex flex-col text-[14px] pb-3 ">Announce a new exchange listing. Include:
                        <li className="text-[#535353] pl-3">Name of the exchange.</li>
                        <li className="text-[#535353] pl-3">The date of listing.</li>
                        <li className="text-[#535353] pl-3">And, expected benefits to investors.</li>
                    </p>
                </div>
                </div>
                    
                    
                <div className="bg-[#131313] pt-10 px-4 border-b border-[#131313]">
          <textarea
            className="bg-[#0D0D0D] focus:outline-none border-none w-full h-[100px] rounded-t-[20px] flex items-end p-4 text-[#7B7B7B]"
            placeholder="Add more information"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          <div className="w-full px-4 flex justify-between border-t py-3 border-[#363636] bg-[#0D0D0D] rounded-b-[20px]">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0788 8.24667L9.18625 15.1392C8.34187 15.9836 7.19664 16.4579 6.0025 16.4579C4.80836 16.4579 3.66314 15.9836 2.81875 15.1392C1.97437 14.2948 1.5 13.1496 1.5 11.9554C1.5 10.7613 1.97437 9.61605 2.81875 8.77167L9.71125 1.87917C10.2742 1.31625 11.0377 1 11.8338 1C12.6298 1 13.3933 1.31625 13.9563 1.87917C14.5192 2.44209 14.8354 3.20558 14.8354 4.00167C14.8354 4.79776 14.5192 5.56125 13.9563 6.12417L7.05625 13.0167C6.77479 13.2981 6.39305 13.4563 5.995 13.4563C5.59696 13.4563 5.21521 13.2981 4.93375 13.0167C4.65229 12.7352 4.49417 12.3535 4.49417 11.9554C4.49417 11.5574 4.65229 11.1756 4.93375 10.8942L11.3013 4.53417"
                  stroke="#797979"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <button
              className="ml-2 p-2 bg-[#03FFA3] rounded-lg"
              type="button"
              onClick={handleSend}
            >
              <AiOutlineSend size={24} />
            </button>
          </div>
          {selectedFile && (
            <p className="text-[#7B7B7B] p-2 underline flex items-center">
              {selectedFile.name} <FaCheckCircle className="ml-2 text-green-500" />
            </p>
          )}
        </div>
        <div className="bg-[#131313] flex justify-center items-center py-5 rounded-[20px]">
          <button className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] px-14 py-3 rounded-[20px]" type="submit" onClick={handleToast}>
            Save
          </button>
        </div>
      </div>
      {showToast && (
        <div className="absolute top-10">
      <SuccessfullToast />
      </div>
    )}
        </div>
    )
}