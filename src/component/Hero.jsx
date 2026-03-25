import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useState } from 'react'

const Hero = () => {
    const [hovered, setHovered] = useState(false);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.to('#heroimg', {
            bottom: 0,
            scrollTrigger: {
                trigger: '#hero',
                start: 'top 0',
                end: 'bottom 0',
                scrub: true,
            }
        })
    })
    return (
        <section id='hero' className='w-full h-[90vh] bg-[#017f96] relative overflow-hidden relative'>

            <div className="absolute top-0 left-0 flex items-center justify-between px-5 md:px-15 lg:px-30 py-5 w-full h-[10vh] ">
                <span className="text-white text-[clamp(1rem,1.5vw,2rem)]">M HASAN</span>
                <img
                    src="/wheel.svg"
                    className="w-[30px] transform transition-transform duration-300 animate-spin"
                    alt=""
                />
                <div className="bg-white rounded-full h-[40px] overflow-hidden group ">
                    <div className="px-5 py-1.5 text-[clamp(1rem,1.5vw,1.2rem)] font-bold flex flex-col gap-5  transition-transform duration-300 group-hover:-translate-y-[45px]">
                        <span>CONTACT</span>
                        <span>CONTACT</span>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center pt-20 md:pt-0">
                <h1 className="text-[clamp(3rem,20vw,40rem)] z-700 font-semibold text-white">AUGUST</h1>
            </div>


            <img src="/public/heroimg.avif" alt="" id='heroimg' className="absolute -bottom-[200px] md:h-[90vh] h-[80vh] left-1/2 -translate-x-1/2 z-800" />
            <img src="/public/cloud.avif" alt="" className="absolute w-[70vw] top-1/2 left-[15vw]  -translate-y-1/2 z-600" />


            <div className="absolute w-full h-[300px] heroblur bottom-0 left-0 bg-gradient-to-top z-900"></div>

        </section>
    )
}

export default Hero
