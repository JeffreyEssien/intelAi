"use client"

export default function SuccessfulInitialTrainingModal() {

    const handleClose = () => {
        window.location.href='/community_ai_training'
    }

    return (
        <div>
            <div className="w-full h-screen bg-[#00000099] bg-opacity-50 flex flex-col justify-center items-center">
                <div className="bg-[#181818] w-1/3 h-auto pb-10 rounded flex-col flex items-center">
                    <div className="bg-[#141414] w-[200px] h-[200px] rounded-full flex justify-center items-center mx-auto my-5">
                        <div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-full w-[160px] h-[160px] flex justify-center items-center">
                            <div className="bg-[#141414] rounded-full h-[155px] w-[155px] flex justify-center items-center">
                                <svg width="104" height="104" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.1992 13.5723L19.1992 32.8223L9.69922 23.1973" stroke="url(#paint0_linear_2234_29858)" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2234_29858" x1="9.69922" y1="23.1973" x2="38.1992" y2="23.1973" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#03FFA3" />
                                            <stop offset="1" stop-color="#7F56D9" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <p className="text-[20px] text-center my-2 w-[80%]">Congratulations on Completing Your Initial Training!</p>
                    <p className="text-[#C1C1C1] text-[14px] text-center my-4">The next step is to integrate your Telegram community</p>
                    <button className="bg-white text-black w-1/2 py-3 rounded-[24px]" onClick={handleClose}>Integrate your community now</button>
                </div>
            </div>
        </div>
    )
}