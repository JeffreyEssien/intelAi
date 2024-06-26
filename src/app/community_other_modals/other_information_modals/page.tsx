"use client"


export default function OtherInformationModals() {
    return (
        <div className="w-full min-h-screen bg-[#000000] bg-opacity-75 flex flex-col items-center justify-center">
            <div className="w-1/3 bg-transparent flex flex-col">
                <div className="bg-[#101010] rounded-t-[16px] p-4">
                    <p className="text-[14px]">Other Information</p>
                </div>
                <div className="bg-[#131313] p-4  border-[#222222] border-b">
                    <input placeholder="What do you want to add?" className="bg-[#0D0D0D] outline-[#363636] p-2 w-[99%] rounded-[8px]" />
                </div>
                <div className="bg-[#131313] py-2 flex flex-col w-full">
                    <div className="bg-[#1B1B1B] rounded-b-[20px] pb-4">
                        <p className="font-semibold text-[14px] p-4">Instructions:</p>
                        <p className="text-[#E4E4E4] italic text-[14px] mt-2 px-4 ">Please provide detailed information about it.</p>
                    </div>
                    <div className="bg-[#0D0D0D] flex flex-col border-[#363636] border rounded-[12px] m-6">
                        <textarea placeholder='Add more information' className='bg-[#0D0D0D] focus:outline-none text-[#7B7B7B] w-full pt-3 px-4 rounded-[12px]' />
                        <div className="w-full bg-[#0D0D0D] border-t border-[#363636] flex flex-row items-center justify-between rounded-b-[12px] p-4">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0788 8.24667L9.18625 15.1392C8.34187 15.9836 7.19664 16.4579 6.0025 16.4579C4.80836 16.4579 3.66314 15.9836 2.81875 15.1392C1.97437 14.2948 1.5 13.1496 1.5 11.9554C1.5 10.7613 1.97437 9.61605 2.81875 8.77167L9.71125 1.87917C10.2742 1.31625 11.0377 1 11.8338 1C12.6298 1 13.3933 1.31625 13.9563 1.87917C14.5192 2.44209 14.8354 3.20558 14.8354 4.00167C14.8354 4.79776 14.5192 5.56125 13.9563 6.12417L7.05625 13.0167C6.77479 13.2981 6.39305 13.4563 5.995 13.4563C5.59696 13.4563 5.21521 13.2981 4.93375 13.0167C4.65229 12.7352 4.49417 12.3535 4.49417 11.9554C4.49417 11.5574 4.65229 11.1756 4.93375 10.8942L11.3013 4.53417" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <button className="">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="27" height="27" rx="13.5" fill="#03FFA3" />
                                    <path d="M19.3333 13.4993L8.25 18.166L10.3281 13.4993L8.25 8.83268L19.3333 13.4993Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.292 13.5L19.3337 13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                   
                </div>
                <div className="bg-[#131313] flex justify-center py-4 border-t border-[#222222] rounded-b-[12px]">
                        <button className="bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] py-2 rounded-[20px] w-1/4 my-5">Save</button>
                    </div>
            </div>
        </div>
    )
}