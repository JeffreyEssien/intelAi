import React from 'react'

import Image from 'next/image'
import StickerImage from '../landingpages/images/Group 92539.png'
import StickerImage2 from '../landingpages/images/Group 92540.png'
import StickerImage3 from '../landingpages/images/Group 92541.png'
import Image7 from '../landingpages/images/Group 92584.png'
import Image8 from '../landingpages/images/image 32.png'
import Image9 from '../landingpages/images/image 29.png'
import Image10 from '../landingpages/images/Mask group (1).png'
import Image11 from '../landingpages/images/MacBook Pro 14_ - 6ia.png'
import Image12 from '../landingpages/images/Group 92585.png'


export default function Page4() {

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
        <div className='text-[#8A8A8A] bg-[#0D0D0D] flex flex-col items-center mt-36 relative overflow-hidden'>

            <div className="w-[27%] h-1/5 absolute top-[350px] left-[-130px] rotate-45" style={style}>
            </div>
            <div className="w-[27%] h-1/3 absolute bottom-[350px] right-[-200px] rotate-45" style={style2}>
            </div>

            <button className='bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] px-6 py-1 text-white text-[13.96px] rounded-[66px]'>Features</button>
            <p className='text-center lg:text-[36px] text-[24px] text-white mt-8'>Empower Your Workflow with Cutting-Edge Features</p>
            <p className='text-center lg:w-[50%] w-[80%] text-[16px] mb-14'>Explore the frontier of coding evolution with Glossy Unleashed. Our latest features redefine the boundaries of what's possible in coding tools.</p>

            <div className='flex flex-col lg:flex-row lg:px-10 w-[80%] mx-auto my-14'>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <Image src={StickerImage} alt='image' className='w-[7%] mb-8' />
                    <p className='text-white text-[29.91px] lg:w-[80%] mb-5'>Train, Simulate, Update, Re-Train, Repeat!!!</p>
                    <p className='text-[16px] lg:w-[80%] mb-5'>Intel AI learns from each interaction, continuously updating its knowledge base and response strategies to better serve your community. As your community evolves, so does Intel AI."</p>
                    <div className='flex flex-row items-center gap-5 mb-3'>
                        <Image src={StickerImage2} alt='image' className='w-[7%]' />
                        <p className='text-[#BDBDBD73]'>Content Strategy Setup</p>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <Image src={StickerImage3} alt='image' className='w-[7%]' />
                        <p className='text-[#BDBDBD73]'>Query Escalation Protocol</p>
                    </div>
                </div>
                <div className='lg:w-1/2 mt-10 lg:mt-0'>
                    <div className='relative w-full h-auto'>
                        <Image src={Image7} alt='image' className='rounded-br-[66px]' />
                        <div className='absolute inset-0 flex justify-end items-end flex-row rounded-[30px]'>
                            <Image src={Image8} alt='image' className='w-[90%] bg-gradient-to-l from-[#3A3A3A57] to-[#03FFA31A]  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-tl-[30px] rounded-br-[66px] pt-6 pl-6' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:px-10 w-[80%] mx-auto my-14'>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <Image src={StickerImage} alt='image' className='w-[5%]' />
                        <p className='text-[13.96px]'>Context-aware AI co-pilot</p>
                    </div>
                    <Image src={StickerImage2} alt='image' className='w-[7%] mt-5' />
                    <p className='text-[29.91px] text-white mb-5 mt-8'>Intelligent Automation on Steroids</p>
                    <p className='text-[16px] text-[#BDBDBD] lg:w-[90%]'>Introducing your personal social media strategist driven by AI, streamlining content planning, scheduling, and interaction on twitter and other platforms. Leveraging data to grasp your audience's behavior and preferences, we optimize your content strategy for unparalleled engagement.</p>
                    <div className='flex flex-row gap-2 items-center mb-3 mt-4'>
                        <Image src={StickerImage3} alt='image' className='w-[7%] ' />
                        <p className='text-[13.96px]'>Query Escalation Protocol</p>
                    </div>
                </div>

                <div className='lg:w-1/2 mt-5 lg:mt-0'>
                    <div className='relative w-full h-auto'>
                        <Image src={Image12} alt='image' className='rounded-br-[66px]' />
                        <div className='absolute inset-0 flex justify-end items-end flex-row rounded-[30px]'>
                            <Image src={Image11} alt='image' className='w-[92%] bg-gradient-to-l from-[#3A3A3A57] to-[#03FFA31A]   bg-opacity-50 rounded-tl-[30px] rounded-br-[66px]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:px-10 w-[80%] mx-auto my-20'>
                <div className='lg:w-1/2 flex-col flex justify-center'>
                    <div className='flex flex-row items-center gap-2'>
                        <Image src={StickerImage} alt='image' className='w-[5%]' />
                        <p className='text-[#EFEFEF73] text-[13.96px]'>Context-aware AI co-pilot</p>
                    </div>
                    <div className='flex flex-row items-center mt-5 gap-2'>
                        <Image src={StickerImage3} alt='image' className='w-[5%] ' />
                        <p className='text-[#EFEFEF73] text-[13.96px]'>Content Strategy Setup</p>
                    </div>
                    <Image src={StickerImage2} alt='image' className='w-[9%] mt-5' />

                    <p className='font-medium text-[29.91px] mt-8 mb-5 text-white'>Advanced Query Escalation Protocol</p>
                    <p className='text-[#BDBDBD] text-[16px] lg:w-[88%]'>Our  context aware smart engine  streamlines the handling of out of scope  user inquiries by automatically identifying, categorizing, and routing complex queries to the most suitable responder within your organization. Tailored to consider complexity, urgency, and subject matter, this protocol ensures  timely, informed, and contextually relevant responses, elevating user experience within your community.</p>
                </div>

                <div className='lg:w-1/2 mt-5 lg:mt-0'>
                    <div className='relative w-full h-auto rounded-[66px] border-2 border-[#3A3A3A] bg-[]'>
                        <Image src={Image10} alt='image' />
                        <div className='absolute inset-0 flex flex-row px-10 justify-center pt-10'>
                            <Image src={Image9} alt='image' className='w-[80%] bg-gradient-to-l from-[#3A3A3A57] to-[#03FFA31A]  backdrop-filter backdrop-blur-md bg-opacity-50 rounded-t-[30px]' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}