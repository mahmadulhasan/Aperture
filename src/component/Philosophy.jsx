import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React from 'react'

const Philosophy = () => {
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    let split = SplitText.create('#text', { type: 'words', aria: 'hidden' })
    gsap.from(split.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#text',
        start: 'top 50%',
        end: 'top 100%',
      }
    });

    gsap.to('#philosophy',{

      scrollTrigger:{
        trigger: "#philosophy",
        start: 'top top',
        end: 'bottom 50%',
        pin: '#topdiv',
      }
    })

  })
  return (
    <div id='philosophy' className='flex flex-col items-center justify-center pt-10 md:pt-15 px-5 relative'>

      <div
        id='topdiv'
        className="sticky top-0  flex flex-col gap-10 w-full justify-center items-center max-w-[1000px] py-15 bg-white"
      >
        <span className="bg-gray-200 px-5 py-1 rounded-full">Philosophy</span>

        <p id='text' className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out.</p>
      </div>

      <div className="flex flex-col justify-center items-center max-w-[1000px] z-10 pt-100 gap-50 md:gap-100">
        <div className="flex flex-col md:flex-row gap-50 md:gap-0 w-full items-center justify-between">
          <img src="/public/psi1.avif" alt="" className="rounded-3xl" />
          <img src="/public/psi2.avif" alt="" className="w-full md:w-64 rounded-3xl" />
        </div>
        <img src="/public/psi3.avif" alt="" className="rounded-3xl" />
        <div className="flex flex-col md:flex-row gap-50 md:gap-0 w-full items-center justify-between rounded-3xl">
          <img src="/public/psi4.avif" alt="" className="w-full md:w-64 rounded-3xl" />
          <img src="/public/psi5.avif" alt="" className="rounded-3xl" />
        </div>
        <img src="/public/psi6.avif" alt="" className="rounded-3xl" />
      </div>

    </div>
  )
}

export default Philosophy
