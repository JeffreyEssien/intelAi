import React from 'react'

import Image from 'next/image'
import StickerImage from '../landingpages/images/Group 92539.png'
import StickerImage2 from '../landingpages/images/Group 92540.png'
import StickerImage3 from '../landingpages/images/Group 92541.png'
import Image7 from '../landingpages/images/Group 92584.png'
import Image8 from '../landingpages/images/image 32.png'


export default function Page4() {
    return (
        <div className='text-[#8A8A8A] bg-[#0D0D0D] flex flex-col items-center mt-36'>

            <button className='bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] px-6 py-1 text-white text-[13.96px] rounded-[66px]'>Features</button>
            <p className='text-center text-[36px] text-white mt-8'>Glossy Unleashed: Latest Innovations</p>
            <p className='text-center w-[50%] text-[16px] mb-14'>Explore the frontier of coding evolution with Glossy Unleashed. Our latest features redefine the boundaries of what's possible in coding tools.</p>

            <div className='flex flex-row px-10 w-[80%] mx-auto my-14'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <Image src={StickerImage} alt='image' className='w-[7%] mb-8' />
                    <p className='text-white text-[29.91px] w-[80%] mb-5'>Train, Simulate, Update, Re-Train, Repeat!!!</p>
                    <p className='text-[16px] w-[80%] mb-5'>Intel AI learns from each interaction, continuously updating its knowledge base and response strategies to better serve your community. As your community evolves, so does Intel AI."</p>
                    <div className='flex flex-row items-center gap-5 mb-3'>
                        <Image src={StickerImage2} alt='image' className='w-[7%]' />
                        <p className='text-[#BDBDBD73]'>Content Strategy Setup</p>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <Image src={StickerImage3} alt='image' className='w-[7%]' />
                        <p className='text-[#BDBDBD73]'>Query Escalation Protocol</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='relative w-full h-auto'>
                        <Image src={Image7} alt='image' />
                        <div className='absolute inset-0 w-[80%] bottom-0 right-0 flex'>
                            <Image src={Image8} alt='image' className='w-[] backdrop-filter backdrop-blur-md bg-opacity-50 rounded-tl-[30px] absolute bottom-0 right-0 '/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                <div className='flex flex-row items-center gap-2'>
                    <Image src={StickerImage} alt='image' className='w-[10%]'/>
                    <p className='text-[#BDBDBD73] text-[13.96px]'>Context-aware AI co-pilot</p>
                </div>
                </div>
            </div>

        </div>
    )
}