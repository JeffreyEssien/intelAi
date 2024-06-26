"use client"

import Sidebar from "@/components/sidebar/page";
import React, { useState } from 'react';
import { FaBitbucket } from "react-icons/fa6";



export default function CommunityDashboard() {

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    const handleClick = () => {
        window.location.href = "/community_ai_training";
      };

    return (
        <div className="flex flex-row ">
            <Sidebar />
            <div className="flex flex-col items-center w-full">

                {/* Title bar (community manager and Kol influencer) (Co-pilot) */}
                <div className="flex flex-row justify-between gap-4 w-full py-8">
                    <div className="flex flex-row gap-3 w-4/5 mx-auto justify-center">
                        <button className="text-[14px] font-semibold">Community Manager</button>
                        <button className="text-[14px] text-[#6A6A6A]">KOL/Influencer</button>
                    </div>
                    <div className="w-1/5 flex flex-row items-center gap-5 ">
                        <p className="text-[20px]">Co-pilot</p>
                        <div onClick={handleToggle} className={`w-[54px] h-[18px] flex items-center bg-[#545454] rounded-full p-1 cursor-pointer ${isOn ? '' : 'bg-[#545454'}`}>
                            <div className={` w-[14px] h-[14px] rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-green-500' : 'bg-white'}`}></div>
                        </div>
                        {isOn ? <p>on</p> : <p>off</p>}
                    </div>
                </div>


                    {/* Hello Username */}
                <div className="bg-[#141414] min-h-screen w-full rounded-[40px] flex flex-col">
                    <p className="text-[36px] mt-10 ml-10 font-extralight">Hello,  Username 👋</p>
                    <p className="text-[14px] text-[#A9A9A9] mt-4 ml-10 w-[25%]">To get started on the Intel AI Platform, here are a few important tasks to  carry out</p>

                        {/* Train your ai ti simulate your prefernce div */}
                    <div className="bg-gradient-to-br from-[#000000] via-[#1818183B] to-[#03FFA352] p-10 w-[80%] rounded-[20px] ml-10 mt-10 relative">
                        <div className="relative bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-full border border-white w-[70px] h-[70px]">
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.3187 2.95284C29.3187 4.59332 27.9765 5.90567 26.3062 5.90567C25.9184 5.90567 25.5307 5.84602 25.2026 5.69688L24.0394 6.3829L23.8008 6.5022L20.4006 8.47077L20.1619 8.59007L10.8262 13.9887V9.81297L23.3235 2.59492C23.5025 1.13341 24.785 0 26.3062 0C27.9765 0 29.3187 1.31238 29.3187 2.95284Z" fill="url(#paint0_linear_325_65435)" />
                                    <path d="M38.925 19.059C37.4635 19.8643 35.5844 19.3871 34.7493 17.9554C34.5405 17.5975 34.4212 17.2097 34.3615 16.8518L33.6159 16.4044L33.3176 16.2254L29.977 14.2867L29.6788 14.1078L20.1641 8.58982L20.4027 8.47052L23.8029 6.50195L36.3003 13.7498C37.7021 13.2129 39.3127 13.7498 40.0884 15.0324C40.9233 16.4641 40.4164 18.2537 38.9548 19.0888L38.925 19.059Z" fill="url(#paint1_linear_325_65435)" />
                                    <path d="M34.4497 34.4201C33.6146 35.8219 31.7355 36.329 30.274 35.4939C28.8124 34.6885 28.3054 32.8691 29.1406 31.4375C29.3493 31.0795 29.6476 30.7812 29.9459 30.5426V24.9651V14.2871L33.2865 16.2258L33.5847 16.4048V30.5426C34.8375 31.4076 35.2252 33.0779 34.4199 34.3903L34.4497 34.4201Z" fill="url(#paint2_linear_325_65435)" />
                                    <path d="M10.7968 14.0178L10.9459 25.0834L10.8564 25.0238L7.27724 22.9658L7.06849 7.9033C6.80005 7.69454 6.53161 7.42606 6.35262 7.09798C5.5175 5.69613 5.99473 3.90654 7.36673 3.07139C8.76858 2.23624 10.5582 2.71347 11.3933 4.08549C12.139 5.3382 11.8408 6.94883 10.7073 7.87349V9.69292H10.7371V9.84202L10.767 14.0178H10.7968Z" fill="url(#paint3_linear_325_65435)" />
                                    <path d="M20.3716 30.5419L16.7327 32.6596L4.17574 25.4117C3.81781 25.531 3.45989 25.6205 3.07214 25.6205C1.37202 25.6205 0 24.3081 0 22.6677C0 21.0272 1.37202 19.7148 3.07214 19.7148C4.65297 19.7148 5.93548 20.8483 6.11447 22.3396L7.21803 22.966H7.30753L10.8867 25.0836L10.9762 25.1433L20.4014 30.6016L20.3716 30.5419Z" fill="url(#paint4_linear_325_65435)" />
                                    <path d="M29.9747 29.2017L17.5072 36.3899C17.4475 36.7776 17.3282 37.1654 17.1194 37.5233C16.2843 38.9252 14.4052 39.4323 12.9437 38.5971C11.4822 37.7918 10.9751 35.9723 11.8401 34.5406C12.6156 33.2581 14.2262 32.7212 15.6281 33.2879L16.7615 32.6317L20.4004 30.514L30.0045 24.9961V29.2017H29.9747Z" fill="url(#paint5_linear_325_65435)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_325_65435" x1="9.42432" y1="10.5586" x2="29.3485" y2="2.50543" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.09" stop-color="#878788" />
                                            <stop offset="0.15" stop-color="#A8A8A8" />
                                            <stop offset="0.21" stop-color="#C3C3C3" />
                                            <stop offset="0.28" stop-color="#D9D9D9" />
                                            <stop offset="0.36" stop-color="#EAEAEA" />
                                            <stop offset="0.46" stop-color="#F6F6F6" />
                                            <stop offset="0.61" stop-color="#FDFDFD" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_325_65435" x1="27.0838" y1="5.04046" x2="34.272" y2="21.1766" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.09" stop-color="#878788" />
                                            <stop offset="0.15" stop-color="#A8A8A8" />
                                            <stop offset="0.21" stop-color="#C3C3C3" />
                                            <stop offset="0.28" stop-color="#D9D9D9" />
                                            <stop offset="0.36" stop-color="#EAEAEA" />
                                            <stop offset="0.46" stop-color="#F6F6F6" />
                                            <stop offset="0.61" stop-color="#FDFDFD" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_325_65435" x1="26.2175" y1="16.4645" x2="36.2393" y2="33.8236" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.09" stop-color="#878788" />
                                            <stop offset="0.15" stop-color="#A8A8A8" />
                                            <stop offset="0.21" stop-color="#C3C3C3" />
                                            <stop offset="0.28" stop-color="#D9D9D9" />
                                            <stop offset="0.36" stop-color="#EAEAEA" />
                                            <stop offset="0.46" stop-color="#F6F6F6" />
                                            <stop offset="0.61" stop-color="#FDFDFD" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_325_65435" x1="16.0165" y1="19.2374" x2="2.98222" y2="7.9033" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.08" stop-color="#878788" />
                                            <stop offset="0.13" stop-color="#A8A8A8" />
                                            <stop offset="0.19" stop-color="#C3C3C3" />
                                            <stop offset="0.26" stop-color="#D9D9D9" />
                                            <stop offset="0.33" stop-color="#EAEAEA" />
                                            <stop offset="0.42" stop-color="#F6F6F6" />
                                            <stop offset="0.55" stop-color="#FDFDFD" />
                                            <stop offset="0.92" stop-color="white" />
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_325_65435" x1="17.6275" y1="33.7036" x2="1.55098" y2="19.7447" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.08" stop-color="#878788" />
                                            <stop offset="0.13" stop-color="#A8A8A8" />
                                            <stop offset="0.19" stop-color="#C3C3C3" />
                                            <stop offset="0.26" stop-color="#D9D9D9" />
                                            <stop offset="0.33" stop-color="#EAEAEA" />
                                            <stop offset="0.42" stop-color="#F6F6F6" />
                                            <stop offset="0.55" stop-color="#FDFDFD" />
                                            <stop offset="0.92" stop-color="white" />
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_325_65435" x1="27.4693" y1="23.117" x2="14.7631" y2="39.9988" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#404041" />
                                            <stop offset="0.04" stop-color="#636364" />
                                            <stop offset="0.09" stop-color="#878788" />
                                            <stop offset="0.15" stop-color="#A8A8A8" />
                                            <stop offset="0.21" stop-color="#C3C3C3" />
                                            <stop offset="0.28" stop-color="#D9D9D9" />
                                            <stop offset="0.36" stop-color="#EAEAEA" />
                                            <stop offset="0.46" stop-color="#F6F6F6" />
                                            <stop offset="0.61" stop-color="#FDFDFD" />
                                            <stop offset="1" stop-color="white" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-row w-[80%] mt-5 items-center gap-2">
                            <p className="text-[36px] text-white w-[60%]">Train your AI to suite your preference</p>
                            <p className="text-[#969696] text-[10px] w-[40%]">Train IntelAI to suit your community and requirements seamlessly.Train IntelAI to suit your community and requirements seamlessly.</p>
                        </div>
                        <button className="text-black bg-white rounded-[66px] py-3 w-[150px] absolute bottom-4 right-4" onClick={handleClick}>Train Ai</button>
                    </div>

                    {/* More integrations comming soon, Upgrade to pro */}
                    <div className="flex flex-row items-center gap-4 justify-between ml-10 w-[80%] pt-4">
                        <div className="bg-[#181818] relative w-1/2 h-[220px] rounded-[20px] pt-5 pl-5">
                            <div className="absolute right-0">
                                <svg width="277" height="217" viewBox="0 0 277 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M361.624 51.1758L361.623 51.1964H360.837M361.624 51.1758L360.837 51.1964M361.624 51.1758C361.627 51.1758 361.63 51.1757 361.633 51.1757M361.624 51.1758L361.633 51.1757M360.837 51.1964C326.343 51.3303 300.505 60.1541 281.142 73.2893C261.776 86.4268 248.858 103.897 240.24 121.367C231.621 138.839 227.308 156.299 225.151 169.397C224.073 175.944 223.534 181.398 223.264 185.213C223.13 187.12 223.062 188.618 223.029 189.637C223.012 190.147 223.003 190.537 222.999 190.799C222.997 190.93 222.996 191.029 222.995 191.095L222.995 191.169L222.995 191.187M360.837 51.1964L222.995 191.187M222.995 191.187L222.995 191.19V191.191C222.995 191.192 222.995 191.192 222.495 191.192C222.257 191.192 222.132 191.192 222.067 191.192C221.995 191.192 221.995 191.192 221.995 191.191V191.19L221.995 191.187L221.995 191.169L221.994 191.095C221.994 191.029 221.993 190.93 221.991 190.799C221.987 190.537 221.978 190.147 221.961 189.637C221.928 188.618 221.86 187.12 221.726 185.213C221.456 181.398 220.917 175.944 219.839 169.397C217.682 156.299 213.369 138.839 204.75 121.367C196.132 103.897 183.214 86.4268 163.848 73.2893C144.485 60.1541 118.647 51.3303 84.1527 51.1964H83.3671V51.1757V50.1964V50.1757H84.1527M222.995 191.187L84.1527 50.1757M84.1527 50.1757C118.647 50.0418 144.485 41.218 163.848 28.0829M84.1527 50.1757L163.848 28.0829M221.995 -89.8149L221.995 -89.8181V-89.8192C221.995 -89.82 221.995 -89.8203 222.495 -89.8203M221.995 -89.8149L361.633 51.1757M221.995 -89.8149L221.995 -89.7967M221.995 -89.8149L221.995 -89.7967M222.495 -89.8203C222.995 -89.8203 222.995 -89.82 222.995 -89.8192V-89.8181L222.995 -89.8149L222.995 -89.7968L222.995 -89.7228C222.996 -89.6569 222.997 -89.5578 222.999 -89.4268C223.003 -89.1647 223.012 -88.7745 223.029 -88.2649C223.062 -87.2455 223.13 -85.748 223.265 -83.8406C223.535 -80.0257 224.074 -74.572 225.153 -68.0246C227.311 -54.9274 231.625 -37.4665 240.245 -19.9949C248.864 -2.52518 261.784 14.9454 281.151 28.0828C300.515 41.218 326.354 50.0418 360.847 50.1757H361.633V50.1957C361.644 50.1964 361.654 50.1973 361.665 50.1982L361.633 50.9545V51.1757M222.495 -89.8203L221.995 -89.8203L222.995 -89.8203L222.495 -89.8203ZM221.995 -89.7967L221.994 -89.7228M221.995 -89.7967L221.994 -89.7228M221.994 -89.7228C221.994 -89.6568 221.993 -89.5578 221.991 -89.4268M221.994 -89.7228L221.991 -89.4268M221.991 -89.4268C221.987 -89.1647 221.978 -88.7745 221.961 -88.2648M221.991 -89.4268L221.961 -88.2648M221.961 -88.2648C221.928 -87.2454 221.86 -85.748 221.726 -83.8406M221.961 -88.2648L221.726 -83.8406M221.726 -83.8406C221.456 -80.0257 220.917 -74.572 219.839 -68.0245M221.726 -83.8406L219.839 -68.0245M219.839 -68.0245C217.682 -54.9273 213.369 -37.4664 204.75 -19.9949M219.839 -68.0245L204.75 -19.9949M204.75 -19.9949C196.132 -2.52515 183.214 14.9454 163.848 28.0829M204.75 -19.9949L163.848 28.0829M17.7033 49C64.9855 46.3575 101.397 33.1451 129.431 14.356C160.628 -6.55328 181.421 -34.349 195.279 -62.1031C209.136 -89.8552 216.062 -117.575 219.526 -138.352C221.175 -148.242 222.039 -156.563 222.492 -162.568C222.946 -156.563 223.811 -148.242 225.46 -138.352C228.925 -117.575 235.854 -89.8552 249.713 -62.1031C263.573 -34.349 284.368 -6.55328 315.567 14.356C343.6 33.144 380.01 46.356 427.288 48.9995C380.002 51.641 343.588 64.8538 315.553 83.644C284.355 104.553 263.562 132.349 249.705 160.103C235.848 187.855 228.921 215.575 225.458 236.352C223.81 246.24 222.945 254.558 222.492 260.563C222.039 254.558 221.174 246.24 219.526 236.352C216.062 215.575 209.136 187.855 195.279 160.103C181.421 132.349 160.628 104.553 129.431 83.644C101.397 64.8549 64.9855 51.6425 17.7033 49ZM224.165 169.234C223.325 174.331 222.81 178.771 222.495 182.298C222.179 178.771 221.665 174.331 220.825 169.234C218.658 156.072 214.322 138.51 205.647 120.925C196.971 103.338 183.95 85.7176 164.409 72.4617C147.416 60.9341 125.514 52.722 97.2969 50.6861C125.514 48.6501 147.416 40.438 164.409 28.9104C183.95 15.6545 196.971 -1.96538 205.647 -19.5525C214.322 -37.1378 218.658 -54.7002 220.825 -67.862C221.665 -72.961 222.18 -77.4015 222.495 -80.9295C222.811 -77.4015 223.326 -72.961 224.166 -67.862C226.335 -54.7001 230.672 -37.1378 239.348 -19.5525C248.025 -1.96536 261.048 15.6545 280.589 28.9104C297.582 40.4373 319.483 48.6491 347.698 50.6857C319.478 52.721 297.575 60.9334 280.581 72.4617C261.04 85.7176 248.019 103.338 239.343 120.925C230.668 138.51 226.332 156.072 224.165 169.234ZM281.641 51.1904L281.642 51.1817C281.643 51.1817 281.644 51.1817 281.646 51.1817V51.087L281.683 50.1922C281.671 50.1911 281.658 50.1903 281.646 50.1896V50.1817H281.313C266.7 50.1251 255.773 46.3977 247.593 40.8636C239.411 35.3273 233.948 27.9627 230.301 20.5894C226.653 13.2143 224.826 5.84024 223.911 0.305725C223.454 -2.46034 223.226 -4.76373 223.112 -6.37366C223.055 -7.17853 223.026 -7.80983 223.012 -8.23869C223.005 -8.45311 223.001 -8.6169 223 -8.72644C222.999 -8.7812 222.998 -8.82242 222.998 -8.84961L222.998 -8.87982L222.998 -8.88489V-8.88695V-8.88741V-8.88849C222.998 -8.88866 222.998 -8.88869 222.73 -8.88864L222.998 -8.88869L221.998 -8.88864L222.033 -8.88861C221.998 -8.88858 221.998 -8.88853 221.998 -8.88846V-8.88737V-8.88692V-8.88486L221.998 -8.87979L221.998 -8.84956C221.997 -8.82237 221.997 -8.78117 221.996 -8.72639C221.994 -8.61685 221.991 -8.45306 221.984 -8.23865C221.97 -7.8098 221.941 -7.1785 221.884 -6.37363C221.77 -4.76369 221.542 -2.46031 221.085 0.305756C220.171 5.84027 218.345 13.2144 214.697 20.5895C211.05 27.9627 205.588 35.3273 197.406 40.8636C189.227 46.3977 178.3 50.1251 163.687 50.1817H163.354V50.1904V51.1817V51.1904H163.687C178.3 51.247 189.227 54.9745 197.406 60.5085C205.588 66.0448 211.05 73.4094 214.697 80.7827C218.345 88.1578 220.171 95.5319 221.085 101.066C221.542 103.832 221.77 106.136 221.884 107.746C221.941 108.551 221.97 109.182 221.984 109.611C221.991 109.825 221.994 109.989 221.996 110.099C221.997 110.153 221.997 110.195 221.998 110.222L221.998 110.252L221.998 110.257V110.259V110.26V110.261C221.998 110.261 221.998 110.261 222.026 110.261H222.028L222.498 110.261L222.85 110.261C222.998 110.261 222.998 110.261 222.998 110.261V110.26V110.259V110.257L222.998 110.252L222.998 110.222C222.998 110.195 222.999 110.153 223 110.099C223 110.063 223.001 110.022 223.002 109.975C223.004 109.877 223.007 109.756 223.012 109.611C223.026 109.182 223.055 108.551 223.112 107.746C223.226 106.136 223.454 103.832 223.911 101.066C224.825 95.5319 226.651 88.1578 230.299 80.7827C233.945 73.4094 239.407 66.0448 247.59 60.5085C255.769 54.9745 266.696 51.247 281.308 51.1904H281.641ZM222.498 -2.45338C222.612 -1.55196 222.752 -0.573929 222.925 0.468719C223.85 6.06805 225.7 13.5438 229.405 21.0328C233.11 28.5237 238.676 36.0374 247.033 41.6919C253.666 46.1794 262.038 49.4832 272.6 50.6858C262.036 51.888 253.663 55.1921 247.029 59.6803C238.672 65.3347 233.107 72.8485 229.402 80.3393C225.698 87.8283 223.849 95.3041 222.924 100.903C222.752 101.945 222.612 102.923 222.498 103.824C222.384 102.923 222.244 101.945 222.072 100.903C221.147 95.3041 219.297 87.8283 215.593 80.3393C211.888 72.8485 206.323 65.3347 197.966 59.6803C191.333 55.1924 182.96 51.8885 172.398 50.6861C182.96 49.4837 191.333 46.1797 197.966 41.6919C206.323 36.0374 211.888 28.5236 215.593 21.0328C219.297 13.5438 221.147 6.06801 222.072 0.468674C222.244 -0.573944 222.384 -1.55196 222.498 -2.45338Z" stroke="#151515" />
                                </svg>
                            </div>
                            <div className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] rounded-full w-[63px] h-[63px] flex items-center justify-center">
                                <div className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33398 8.75C2.33398 5.71243 4.79642 3.25 7.83398 3.25H14.1673C17.2049 3.25 19.6673 5.71243 19.6673 8.75V13.25C19.6673 16.2876 17.2049 18.75 14.1673 18.75H7.83398C4.79642 18.75 2.33398 16.2876 2.33398 13.25V8.75ZM7.83398 2.25C4.24413 2.25 1.33398 5.16015 1.33398 8.75V13.25C1.33398 16.8399 4.24413 19.75 7.83398 19.75H14.1673C17.7572 19.75 20.6673 16.8399 20.6673 13.25V8.75C20.6673 5.16015 17.7572 2.25 14.1673 2.25H7.83398ZM11.1553 7.52532C11.2615 7.27041 11.141 6.97768 10.8861 6.87147C10.6312 6.76526 10.3385 6.8858 10.2323 7.1407L8.70448 10.8074C8.64018 10.9617 8.65726 11.1379 8.74999 11.277C8.84272 11.4161 8.99884 11.4997 9.16602 11.4997H12.0827L10.8434 14.474C10.7372 14.7289 10.8577 15.0217 11.1126 15.1279C11.3675 15.2341 11.6602 15.1136 11.7664 14.8586L13.2942 11.192C13.3585 11.0377 13.3414 10.8614 13.2487 10.7223C13.156 10.5832 12.9999 10.4997 12.8327 10.4997H9.91602L11.1553 7.52532Z" fill="url(#paint0_linear_325_65457)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_325_65457" x1="1.33398" y1="11" x2="20.6673" y2="11" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#03FFA3" />
                                                <stop offset="1" stop-color="#7F56D9" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[16px] text-white my-2">More integrations coming soon</p>
                            <p className="text-[#6D6D6D] text-[12px] w-[50%]">We are adding more channels for integrations. Discord, Notion, Zapier, Slack and many more</p>
                            <button className="bg-white w-[150px] py-2 text-black rounded-[20px] absolute bottom-4 right-4 text-[12px]">Integrate now</button>
                        </div>

                        <div className="bg-gradient-to-br from-[#BDFE1C] via-[#25B8DE] to-[#460DFF] w-1/2 h-[220px] rounded-[20px] pt-4 pl-4 relative">
                            <div className="w-[55px] h-[55px] rounded-full bg-[#505050] opacity-50 flex justify-center items-center">
                                <p>
                                <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.957 15C29.9642 15 29.9713 14.9997 29.9785 14.9994C29.9857 14.9992 29.9928 14.9989 30 14.9989H29.9151C15.0017 14.9416 14.9995 0 14.9995 0C14.9995 0 14.9983 14.9416 0.0849109 14.9989H0C0.0071678 14.9989 0.0143356 14.9992 0.0215034 14.9994C0.0286712 14.9997 0.035839 15 0.0430068 15C0.035839 15 0.0286712 15.0003 0.0215034 15.0006C0.0143356 15.0008 0.0071678 15.0011 0 15.0011H0.0849109C14.9983 15.0584 14.9995 30 14.9995 30C14.9995 30 15.0006 15.0584 29.914 15.0011H29.9989C29.9857 15 29.9713 15 29.957 15Z" fill="white" />
                                    <path d="M29.957 15C29.9642 15 29.9713 14.9997 29.9785 14.9994C29.9857 14.9992 29.9928 14.9989 30 14.9989H29.9151C15.0017 14.9416 14.9995 0 14.9995 0C14.9995 0 14.9983 14.9416 0.0849109 14.9989H0C0.0071678 14.9989 0.0143356 14.9992 0.0215034 14.9994C0.0286712 14.9997 0.035839 15 0.0430068 15C0.035839 15 0.0286712 15.0003 0.0215034 15.0006C0.0143356 15.0008 0.0071678 15.0011 0 15.0011H0.0849109C14.9983 15.0584 14.9995 30 14.9995 30C14.9995 30 15.0006 15.0584 29.914 15.0011H29.9989C29.9857 15 29.9713 15 29.957 15Z" stroke="black" />
                                </svg>
                                </p>
                            </div>
                            <div>
                                <p className="text-white text-[16px]  my-3">Upgrade to Pro</p>
                                <>
                                <p className="text-[12px]">How to use AI to create on-brand content</p>
                                <p className="text-[12px]">Showcase practical business use cases</p>
                                </>
                            </div>
                            <button className="bg-white w-[150px] py-2 text-black rounded-[20px] absolute bottom-4 right-4 text-[12px]">Upgrade now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}