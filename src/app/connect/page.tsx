import React from "react";


export default function Connect() {

    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    return (
        <div className='flex flex-col items-center'>
            <p className="text-[24px] text-white">Connect Web3 Wallet</p>
        </div>

    )
}