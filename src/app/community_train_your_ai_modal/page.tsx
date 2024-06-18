"use client"
import React, { FC } from "react";
import { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function CommunityTrainYourAiModal(){
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleModalClose = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative bg-[#1a1a1a] rounded-2xl p-8 w-96 flex flex-col">
          <h2 className="text-white text-xl mb-4">Your Journey Starts Here</h2>
          <p className="text-gray-400 mb-4">
            Before you start using your community workspace, it's important to train your AI. Discover the benefits of AI training here.
          </p>
          <button
            className="bg-[#FFFFFF] text-black rounded-full px-4 py-2 w-1/2 mx-auto"
            onClick={handleModalClose}
          >
            Train your AI now
          </button>
        </div>
      </div>
    </div>
  );
}

