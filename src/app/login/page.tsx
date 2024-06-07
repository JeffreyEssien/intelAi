import React from "react";
import LoginForm from '../login/form'
import Image from "next/image";
import Elipse1 from '../landingpages/images/Ellipse 6.png'
import Elipse2 from '../landingpages/images/Ellipse 107.png'
import Logo from '../landingpages/images/Intel AI logo (1) (1) (1).png'



export default function Login() {

    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    return (
        <div className='flex flex-col items-center relative overflow-hidden z-10'>

            <Image src={Elipse1} alt="overlay" className="absolute top-- left-1/2 transform -translate-x-1/2" />
            <Image src={Elipse2} alt="overlay" className="absolute bottom-0" />

            <div className="w-[90%] flex justify-end items-center pt-4">
                <Image src={Logo} alt="logo" className="lg:w-[8%]  w-[30%]" />
            </div>

            <div className='mt-4 pt-10 border-t border-[#363636] w-[95%] flex flex-col justify-center items-center'>
                
            </div>
            <LoginForm />
        </div>

    )
}