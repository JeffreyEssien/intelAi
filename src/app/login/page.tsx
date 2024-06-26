"use client"

import React from "react";
import LoginForm from '../login/form'
import Image from "next/image";
import Elipse1 from '../landingpages/images/Ellipse 6.png'
import Elipse2 from '../landingpages/images/Ellipse 107.png'
import Logo from '../landingpages/images/Intel AI logo (1) (1) (1).png'
import Link from 'next/link'


export default function Login() {

    const bgClipText: React.CSSProperties = {
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

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
        <div className='flex flex-col items-center relative overflow-hidden z-10'>

            <Image src={Elipse2} alt="overlay" className="absolute bottom-0" />

            {/* Gradient styling */}

            <div  className="w-[60%] h-[700px] absolute top-[-450px] left-1/2 transform -translate-x-1/2 rounded-full rotate-30 opacity-50" style={style}>
            </div>
            <div  className="w-[60%] h-[700px] absolute top-[-450px] left-1/2 transform -translate-x-1/2 rounded-full rotate-30 opacity-80" style={style}>
            </div>
            <div  className="w-[60%] h-[700px] absolute bottom-[-550px] left-1/2 transform -translate-x-1/2 rounded-full rotate-30 opacity-50" style={style}>
            </div>
            <div  className="w-[60%] h-[700px] absolute bottom-[-550px] left-1/2 transform -translate-x-1/2 rounded-full rotate-30 opacity-40" style={style}>
            </div>

            <Link href='/'  className="w-[90%] flex justify-start items-center pt-4"> 
             <Image src={Logo} alt="logo" className="lg:w-[8%]  w-[30%]" />
            </Link>

            <div className='mt-4 pt-10 border-t border-[#363636] w-[95%] flex flex-col justify-center items-center'>
                
            </div>
            <LoginForm />
        </div>

    )
}