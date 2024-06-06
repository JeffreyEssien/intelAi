import React from "react"

export default function Page5() {

    const style: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(3, 255, 163, 0.31), rgba(16, 12, 14, 0.2))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    const style2: React.CSSProperties = {
        background:
            "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(13, 13, 13, 0.9))",
        backgroundBlendMode: "darken",
        filter: "blur(50px)",
    };

    return (
        <div className="flex flex-col items-center mt-10 relative overflow-hidden">

            <div className="w-[37%] h-1/4 absolute bottom-[-10px] right-[-230px] " style={style}>
            </div>
            <div className="w-[37%] h-1/4 absolute bottom-[-10px] right-[-250px] rotate-45" style={style2}>
            </div>

            <p className="text-white text-[30px] font-medium text-center mb-3">Advantages</p>
            <p className="text-[#BDBDBD] text-[16px] text-center w-[40%]">Discover a world of possibilities with Glossy's exceptional features tailored to enhance your coding journey.</p>

            <div className="flex flex-col mx-20 space-y-20 mt-40 mb-20 pb-20 border-b border-[#272727] ">
                <div className="flex flex-row ">
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.14638" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="1.14638" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <g clip-path="url(#clip0_2027_29647)">
                                <path d="M24.9042 18.4547C23.1697 16.8988 20.9208 16.0398 18.5908 16.043C17.4838 16.043 16.4211 16.2324 15.4341 16.5817V31.5761C16.448 31.2183 17.5156 31.0361 18.5908 31.0373C21.0162 31.0373 23.229 31.9496 24.9042 33.449M24.9042 18.4547C26.6386 16.8987 28.8875 16.0397 31.2176 16.043C32.3245 16.043 33.3873 16.2324 34.3743 16.5817V31.5761C33.3603 31.2183 32.2928 31.0361 31.2176 31.0373C28.8875 31.0341 26.6387 31.8932 24.9042 33.449M24.9042 18.4547V33.449" stroke="#03FFA3" stroke-width="1.99371" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2027_29647">
                                    <rect width="23.9246" height="23.9246" fill="white" transform="translate(12.6108 12.7617)" />
                                </clipPath>
                            </defs>
                        </svg>
                        </p>
                        <p className="text-white text-[20px] font-medium">Smart Autocomplete</p>
                        <p className="text-[16px] text-[#BDBDBD73] w-[90%]">Say goodbye to typos and endless typing! Our Smart Autocomplete feature predicts your next word accurately, saving you time and frustration.</p>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.83876" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="0.83876" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3199 13.005C24.8913 12.9098 24.447 12.9098 24.0184 13.005L15.5619 14.8843C14.5492 15.1093 13.8661 16.0714 14.015 17.1135L16.0614 31.4384C16.1137 31.8042 16.3035 33.0401 17.5777 34.1557C18.8346 35.2563 20.9912 36.1058 24.6692 36.1058C28.3471 36.1058 30.5037 35.2563 31.7606 34.1557C33.0348 33.0401 33.2246 31.8042 33.2769 31.4384L35.3233 17.1135C35.4722 16.0714 34.7891 15.1093 33.7764 14.8843L25.3199 13.005ZM24.4522 14.9574C24.5951 14.9257 24.7432 14.9257 24.8861 14.9574L33.3426 16.8366L31.297 31.1555L31.2956 31.1657C31.269 31.3532 31.1762 32.0091 30.4431 32.651C29.6787 33.3203 28.0649 34.1058 24.6692 34.1058C21.2734 34.1058 19.6596 33.3203 18.8952 32.651C18.1621 32.0091 18.0693 31.3532 18.0427 31.1657L18.0413 31.1555L15.9957 16.8366L24.4522 14.9574ZM21.5674 23.5162C21.1768 23.1256 20.5437 23.1256 20.1532 23.5162C19.7626 23.9067 19.7626 24.5398 20.1532 24.9304L23.4179 28.1951C23.8085 28.5857 24.4416 28.5857 24.8321 28.1951L30.2734 22.7538C30.664 22.3633 30.664 21.7302 30.2734 21.3396C29.8829 20.9491 29.2497 20.9491 28.8592 21.3396L24.125 26.0738L21.5674 23.5162Z" fill="#03FFA3" />
                        </svg>
                        </p>
                        <p className="text-white text-[20px] font-medium">Your Privacy is Our Priority.</p>
                        <p className="text-[#BDBDBD73] text-[16px] w-[90%]">Your privacy and data security are paramount, especially in the crypto world. You have complete control over your data and can delete it from our systems at any time.</p>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.530655" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="0.530655" y="1.29726" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <path d="M21.4951 28.8324C21.2343 28.1894 20.7581 27.6572 20.148 27.3268C19.538 26.9964 18.832 26.8884 18.151 27.0213C17.4701 27.1542 16.8565 27.5197 16.4154 28.0552C15.9743 28.5908 15.7332 29.263 15.7333 29.9568C15.7333 30.264 15.6702 30.5678 15.5479 30.8496C15.4257 31.1314 15.2469 31.385 15.0226 31.5948C14.7983 31.8046 14.5332 31.9662 14.244 32.0694C13.9547 32.1726 13.6473 32.2152 13.3408 32.1948C13.8337 33.051 14.5955 33.7206 15.5079 34.0996C16.4203 34.4785 17.4323 34.5457 18.3868 34.2906C19.3413 34.0355 20.1849 33.4724 20.7866 32.6888C21.3882 31.9052 21.7144 30.9448 21.7144 29.9568C21.7144 29.5591 21.6367 29.1793 21.4951 28.8324ZM21.4951 28.8324C22.6804 28.4285 23.814 27.8865 24.8725 27.2175M19.8453 27.1925C20.2492 26.0047 20.792 24.8688 21.4622 23.8082M24.8715 27.2175C26.7618 26.0231 28.3799 24.4444 29.6205 22.5841L33.4843 16.7883C33.6323 16.5676 33.6991 16.3023 33.6733 16.0378C33.6474 15.7733 33.5306 15.5259 33.3426 15.338C33.1547 15.1501 32.9074 15.0332 32.6429 15.0074C32.3783 14.9816 32.1131 15.0483 31.8923 15.1964L26.0966 19.0612C24.236 20.3014 22.657 21.9191 21.4622 23.8092C22.9793 24.4875 24.1931 25.7013 24.8715 27.2185" stroke="#03FFA3" stroke-width="1.99371" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </p>
                        <p className="text-white text-[20px] font-medium">Train your AI</p>
                        <p className="text-[#BDBDBD73] text-[16px] w-[90%]">Take control of your AI's learning process with Train Your AI, shaping it to become the perfect assistant for your unique tasks and requirements.</p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.14638" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="1.14638" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <path d="M19.3393 19.7988L22.3299 22.0417L19.3393 24.2846M23.8251 24.2846H26.8157M17.844 32.5087H31.3016C31.8964 32.5087 32.4669 32.2724 32.8875 31.8517C33.3082 31.4311 33.5445 30.8606 33.5445 30.2657V18.3035C33.5445 17.7086 33.3082 17.1381 32.8875 16.7175C32.4669 16.2969 31.8964 16.0605 31.3016 16.0605H17.844C17.2491 16.0605 16.6786 16.2969 16.258 16.7175C15.8374 17.1381 15.6011 17.7086 15.6011 18.3035V30.2657C15.6011 30.8606 15.8374 31.4311 16.258 31.8517C16.6786 32.2724 17.2491 32.5087 17.844 32.5087Z" stroke="#03FFA3" stroke-width="1.99371" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </p>
                        <p className="text-white text-[20px] font-medium">Community and Audience Mangement</p>
                        <p className="text-[#BDBDBD73] text-[16px] w-[90%]">Our Community and Audience Management tools empower you to engage with your community effectively, fostering meaningful interactions and building lasting relationships.</p>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.83876" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="0.83876" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <path d="M24.264 34.2535C26.4737 34.2534 28.6207 33.5194 30.3681 32.1668C32.1154 30.8142 33.364 28.9196 33.9179 26.7804M24.264 34.2535C22.0543 34.2534 19.9072 33.5194 18.1599 32.1668C16.4125 30.8142 15.1639 28.9196 14.61 26.7804M24.264 34.2535C27.0164 34.2535 29.2482 29.7898 29.2482 24.285C29.2482 18.7801 27.0164 14.3164 24.264 14.3164M24.264 34.2535C21.5115 34.2535 19.2797 29.7898 19.2797 24.285C19.2797 18.7801 21.5115 14.3164 24.264 14.3164M33.9179 26.7804C34.1229 25.9829 34.2325 25.1467 34.2325 24.285C34.2352 22.5705 33.7937 20.8846 32.951 19.3915M33.9179 26.7804C30.9641 28.4179 27.6413 29.2745 24.264 29.2692C20.7617 29.2692 17.4709 28.3665 14.61 26.7804M14.61 26.7804C14.4004 25.9652 14.2947 25.1267 14.2954 24.285C14.2954 22.5072 14.7606 20.8369 15.5769 19.3915M24.264 14.3164C26.032 14.3157 27.7684 14.7853 29.295 15.6772C30.8216 16.569 32.0834 17.851 32.951 19.3915M24.264 14.3164C22.4959 14.3157 20.7595 14.7853 19.233 15.6772C17.7064 16.569 16.4445 17.851 15.5769 19.3915M32.951 19.3915C30.5394 21.4804 27.4545 22.6281 24.264 22.6235C20.9433 22.6235 17.9062 21.4052 15.5769 19.3915" stroke="#03FFA3" stroke-width="2.21523" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </p>
                        <p className="text-white text-[20px] font-medium">Ghost-Writer Content Generator</p>
                        <p className="text-[#BDBDBD73] text-[16px] w-[90%]">Co-pilot Content Generator takes your content creation to new heights, providing inspiration and assistance every step of the way.</p>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <p className="mb-5"><svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.530655" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" fill="#13160B" />
                            <rect x="0.530655" y="0.857803" width="46.8522" height="46.8522" rx="23.4261" stroke="#03FFA3" stroke-width="0.996856" />
                            <g clip-path="url(#clip0_2027_29686)">
                                <path d="M12.9951 27.6591C12.9951 29.0008 13.5281 30.2876 14.4769 31.2363C15.4256 32.1851 16.7124 32.7181 18.0541 32.7181H30.7015C31.6884 32.7191 32.6444 32.3739 33.4029 31.7427C34.1614 31.1114 34.6745 30.234 34.8526 29.2633C35.0308 28.2927 34.8628 27.2903 34.3779 26.4308C33.893 25.5713 33.1219 24.9091 32.199 24.5596C32.4076 23.9663 32.4461 23.3265 32.3103 22.7124C32.1744 22.0983 31.8696 21.5344 31.4301 21.0845C30.9907 20.6345 30.4342 20.3164 29.8235 20.1661C29.2128 20.0157 28.5723 20.0391 27.9742 20.2336C27.5873 18.7497 26.6381 17.4746 25.3275 16.6783C24.0169 15.882 22.4478 15.6272 20.9526 15.9676C19.4573 16.3081 18.1533 17.2172 17.3166 18.5024C16.4799 19.7875 16.1763 21.3479 16.4701 22.8531C15.4589 23.1868 14.5788 23.8309 13.9549 24.6938C13.331 25.5566 12.9952 26.5943 12.9951 27.6591Z" stroke="#03FFA3" stroke-width="1.99371" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2027_29686">
                                    <rect width="23.9246" height="23.9246" fill="white" transform="translate(11.9951 12.3223)" />
                                </clipPath>
                            </defs>
                        </svg>

                        </p>
                        <p className="text-white text-[20px] font-medium">Auto-response Engine</p>
                        <p className="text-[#BDBDBD73] text-[16px] w-[90%]">Auto-response Engine automates your responses, ensuring prompt and consistent replies to inquiries and messages.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}