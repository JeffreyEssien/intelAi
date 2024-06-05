import React from "react";
import Testimonial1 from '../landingpages/images/Frame 13.png'
import Testimonial2 from '../landingpages/images/Group 7.png'
import Testimonial3 from '../landingpages/images/Group 8.png'
import Image from "next/image";

export default function Page6() {


    return (
        <div className="flex flex-col items-center">
            <p className="text-white text-[36px] font-medium mb-5">Voices of Innovation, Testimonials</p>
            <p className="text-center text-[16px] text-[#BDBDBD] w-[40%]">Discover what the coding community is saying about Glossy in our Testimonials section. Immerse yourself in firsthand experiences as developers share.</p>

            <div className="flex flex-row gap-5 mt-14 max-w-[80%] overflow-hidden overflow-x-scroll">
                <Image src={Testimonial1} alt="image" className="w-1/3"/>
                <Image src={Testimonial2} alt="image" className="w-1/3"/>
                <Image src={Testimonial3} alt="image" className="w-1/3"/>
                <Image src={Testimonial1} alt="image" className="w-1/3"/>
                <Image src={Testimonial2} alt="image" className="w-1/3"/>
                <Image src={Testimonial3} alt="image" className="w-1/3"/>
            </div>
        </div>
    )
}