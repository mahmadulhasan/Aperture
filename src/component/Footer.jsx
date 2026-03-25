import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React from 'react'

const Footer = () => {
    gsap.registerPlugin(SplitText)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const split = SplitText.create('#text2', { type: 'lines', aria: 'hidden' })

        gsap.from(split.lines, {
            opacity: 0,
            rotationX: -100,
            transformOrigin: "50% 50% -160px",
            opacity: 0,
            duration: 1.2,
            ease: "power3",
            stagger: 0.5,
            scrollTrigger:{
                trigger: '#footer',
                start: 'top 80%',
                end: 'top 20%',
                scrub:true,
            }
        })

        
    })
    return (
        <footer id='footer' className='h-screen footerbg flex flex-col gap-10 justify-center items-center'>
            <p id='text2' className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-[700px] text-center">The perfect shot is just a conversation away</p>
            <p className="text-sm md:text-md lg:text-lg text-gray-500 font-semibold max-w-[500px] text-center">Reach out now and let's discuss bringing your vision to life with photography that truly captures what matters.</p>

            <div className="flex relative items-center justify-center w-[700px] h-[45vh] group overflow-hidden">

                {/* Left Image */}
                <img
                    src="/public/bene3.avif"
                    alt=""
                    id='footerimg'
                    className="absolute w-40 h-[28vh] object-cover 
               -translate-x-24 -rotate-12  group-hover:-translate-x-44 duration-300
               rounded-xl p-1 bg-[#B2FFFF] shadow-md z-0"
                />

                {/* Right Image */}
                <img
                    src="/public/bene6.avif"
                    alt=""
                    id='footerimg'
                    className="absolute w-40 h-[28vh] object-cover 
               translate-x-24 rotate-12 group-hover:translate-x-44 duration-300
               rounded-xl p-1 bg-[#B2FFFF] shadow-md z-0"
                />

                {/* Center Image */}
                <img
                    src="/public/bene2.avif"
                    alt=""
                    id='footerimg'
                    className="relative w-44 h-[30vh] object-cover group-hover:scale-120 duration-300
               rounded-xl p-1 bg-[#B2FFFF] shadow-lg z-10"
                />

            </div>

            <div className="flex gap-6 items-center">

                <span className="flex items-center gap-2 text-md cursor-pointer hover:opacity-70 transition">
                    ⌁ Instagram
                </span>

                <span className="flex items-center gap-2 text-md cursor-pointer hover:opacity-70 transition">
                    ⌘ LinkedIn
                </span>

                <span className="flex items-center gap-2 text-md cursor-pointer hover:opacity-70 transition">
                    ✕ Twitter
                </span>

            </div>

            <img src="/public/name.png" alt="" className="w-[90%]" />

        </footer>
    )
}

export default Footer
