import Image from "next/image"
import Text1 from "../../landingpages/images/Group 56956.png"
import Text2 from "../../landingpages/images/Group 56957.png"
import Integrations from "../../landingpages/images/Group 56954.png"
import { FaCheckCircle } from "react-icons/fa"

export default function OutstandingTasks() {
    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    return (
        <div className="w-[25%] pt-5 pl-2 bg-[#141414] border-l border-[#363636] ml-2">
            <p className="text-[12px] text-white">Outstanding tasks</p>

            {/* spam blocking and tracking */}
            <div className="w-[90%] bg-[#181818] mt-4 rounded-[20px] py-2 flex flex-col">
                <div className="bg-gradient-to-b from-[#070707] to-[#181818] py-3 px-4 space-y-3 rounded-[20px] mx-2">
                    <Image src={Text1} alt="Text notification" />
                    <Image src={Text2} alt="Text notification2" />
                </div>
                <div className="px-3 mt-4">
                    <p className="text-[14px] text-white font-semibold mb-2">Spam blocking and tracking</p>
                    <p className="text-[#6D6D6D] text-[12px]">Intelai  automatically blocks spams and tracks the progress.</p>
                </div>
            </div>

            <div className="w-[90%] bg-[#181818] mt-6 rounded-[20px] py-2 flex flex-col">
                <div className="bg-gradient-to-b from-[#070707] to-[#181818] py-3 px-4 space-y-3 rounded-[20px] mx-2">
                    <Image src={Integrations} alt="Text notification" />
                </div>
                <div className="px-3 mt-4">
                    <p className="text-[13px] text-white font-semibold mb-2">More integrations coming soon</p>
                    <p className="text-[#6D6D6D] text-[12px]">We are adding more channels for integrations. Discord, Notion, Zapier, Slack and many more</p>
                </div>
            </div>

            {/* Promotionns */}
            <p className="text-[12px] my-5">Promotions</p>

            <div className="bg-gradient-to-br from-[#BDFE1C] via-[#25B8DE] to-[#460DFF] flex flex-col rounded-[20px] w-[97%] px-5 py-5 relative">
                <p className="absolute top-5 right-2">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.9455 19C37.9546 19 37.9637 18.9997 37.9728 18.9993C37.9818 18.999 37.9909 18.9986 38 18.9986H37.8925C19.0021 18.926 18.9993 0 18.9993 0C18.9993 0 18.9979 18.926 0.107554 18.9986H0C0.00907921 18.9986 0.0181584 18.999 0.0272376 18.9993C0.0363169 18.9997 0.0453961 19 0.0544753 19C0.0453961 19 0.0363169 19.0003 0.0272376 19.0007C0.0181584 19.001 0.00907921 19.0014 0 19.0014H0.107554C18.9979 19.074 18.9993 38 18.9993 38C18.9993 38 19.0007 19.074 37.8911 19.0014H37.9986C37.9818 19 37.9637 19 37.9455 19Z" fill="white" />
                        <path d="M37.9455 19C37.9546 19 37.9637 18.9997 37.9728 18.9993C37.9818 18.999 37.9909 18.9986 38 18.9986H37.8925C19.0021 18.926 18.9993 0 18.9993 0C18.9993 0 18.9979 18.926 0.107554 18.9986H0C0.00907921 18.9986 0.0181584 18.999 0.0272376 18.9993C0.0363169 18.9997 0.0453961 19 0.0544753 19C0.0453961 19 0.0363169 19.0003 0.0272376 19.0007C0.0181584 19.001 0.00907921 19.0014 0 19.0014H0.107554C18.9979 19.074 18.9993 38 18.9993 38C18.9993 38 19.0007 19.074 37.8911 19.0014H37.9986C37.9818 19 37.9637 19 37.9455 19Z" />
                        <path d="M31.4409 28.8277L31.4484 28.8275H31.4336C28.828 28.8175 28.8276 26.207 28.8276 26.207C28.8276 26.207 28.8274 28.8175 26.2219 28.8275H26.207L26.2145 28.8277L26.207 28.8279H26.2219C28.8274 28.8379 28.8276 31.4484 28.8276 31.4484C28.8276 31.4484 28.8278 28.8379 31.4334 28.8279H31.4482C31.4459 28.8277 31.4434 28.8277 31.4409 28.8277Z" fill="white" />
                        <path d="M31.4409 28.8277L31.4484 28.8275H31.4336C28.828 28.8175 28.8276 26.207 28.8276 26.207C28.8276 26.207 28.8274 28.8175 26.2219 28.8275H26.207L26.2145 28.8277L26.207 28.8279H26.2219C28.8274 28.8379 28.8276 31.4484 28.8276 31.4484C28.8276 31.4484 28.8278 28.8379 31.4334 28.8279H31.4482C31.4459 28.8277 31.4434 28.8277 31.4409 28.8277Z" />
                    </svg>
                </p>

                <p className="text-white text-[40px] font-medium flex flex-row gap-2">Upgrade to  Pro</p>
                <p className="flex flex-row gap-2 text-[10px]"><span><FaCheckCircle /></span>How to use AI to create on-brand content</p>
                <p className="flex flex-row gap-2 text-[10px] mb-10"><span><FaCheckCircle /></span>Showcase practical business use cases</p>

                <button className="bg-[#0D0D0D] text-center w-[150px] py-2 rounded-[66px] absolute bottom-1 right-1 flex flex-row justify-center   font-semibold "><p className="bg-gradient-to-r from-[#03FFA3] via- to-[#7F56D9] text-transparent" style={bgClipText}>Activate now</p> <span><svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.646447 5.01754C0.451184 5.2128 0.451184 5.52938 0.646447 5.72465C0.841709 5.91991 1.15829 5.91991 1.35355 5.72465L0.646447 5.01754ZM6.24342 0.627678C6.24342 0.351535 6.01956 0.127677 5.74342 0.127678L1.24342 0.127677C0.967274 0.127677 0.743416 0.351535 0.743416 0.627677C0.743416 0.90382 0.967274 1.12768 1.24342 1.12768L5.24342 1.12768L5.24342 5.12768C5.24342 5.40382 5.46727 5.62768 5.74342 5.62768C6.01956 5.62768 6.24342 5.40382 6.24342 5.12768L6.24342 0.627678ZM1.35355 5.72465L6.09697 0.981231L5.38986 0.274124L0.646447 5.01754L1.35355 5.72465Z" fill="url(#paint0_linear_255_36845)" />
                    <defs>
                        <linearGradient id="paint0_linear_255_36845" x1="1.35355" y1="5.72465" x2="6.09697" y2="0.981231" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#03FFA3" />
                            <stop offset="1" stop-color="#7F56D9" />
                        </linearGradient>
                    </defs>
                </svg>
                </span></button>
            </div>
        </div>
    )
}