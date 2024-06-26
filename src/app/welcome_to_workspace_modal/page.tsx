"use client"

import React from 'react';
import { useState } from "react";


export default function WelcomeToWorkspaceModal() {

  const [showModal, setShowModal] = useState(true)

    const handleClose = () => {
        setShowModal(!showModal)
    }

    

    return(
        <div>
          {showModal && (
            <div onClick={handleClose} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#181818] p-8 rounded-lg shadow-lg text-center w-1/4">
        <h2 className="text-[20px] font-bold mb-4">Welcome to Your Workspace</h2>
        <p className="text-[#C1C1C1] mb-6">
          With your workspace, you can easily create announcements, engage with your community, update projects, and simulate actions seamlessly.
        </p>
        <button
          onClick={handleClose}
          className="bg-white text-black rounded-[20px] px-4 py-2"
        >
          Get Started
        </button>
      </div>
    </div>
    )}
        </div>
    )
}