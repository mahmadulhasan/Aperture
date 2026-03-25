import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Benifit = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from('#beneimg1', {
            rotate: 0,
            scale: 0.5,
            scrollTrigger: {
                trigger: '#beneimg1',
                start: 'top 70%',
                end: 'top 50%',
                scrub: true,
            }
        })
        gsap.from('#beneimg2', {
            bottom: '-50px',
            scale: 0.8,
            scrollTrigger: {
                trigger: '#beneimg1',
                start: 'top 70%',
                end: 'top 50%',
                scrub: true,
            }
        })
        gsap.from('#leftarm', {
            left: -50,
            scrollTrigger: {
                trigger: '#leftarm',
                start: 'top 70%',
                end: 'top 50%',
                scrub: true
            }
        })
        gsap.from('#rightarm', {
            right: -50,
            scrollTrigger: {
                trigger: '#rightarm',
                start: 'top 70%',
                end: 'top 50%',
                scrub: true
            }
        })

        const rows = document.querySelectorAll(".cb-tagreel-row");

  rows.forEach((e, i) => {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;

    gsap.set(e, {
      xPercent: initial_offset
    });

    gsap.timeline().to(e, {
      ease: "none",
      duration: 5,
      xPercent: 0,
      repeat: -1
    });
  });
    })

    return (
        <section className='pb-25 pt-100 flex flex-col gap-20 items-center justify-between relative'>
            <div className="absolute h-15 bg-[#E0FFFF] w-[150%] bottom-10 rotate-5 flex items-center">
                <ul className='flex gap-5 items-center cb-tagreel-row'>
                    <li><img src="/public/logo1.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo2.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo3.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo4.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo5.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo6.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo7.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo8.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo9.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo10.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo11.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo12.png" alt="" className="h-12" /></li>
                </ul>
            </div>
            {/* <div className="absolute h-15 bg-[#E0FFFF] w-[150%] -rotate-35 top-1/2 flex items-center">
                <ul className='flex gap-5 items-center cb-tagreel-row'>
                    <li><img src="/public/logo1.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo2.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo3.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo4.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo5.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo6.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo7.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo8.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo9.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo10.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo11.png" alt="" className="h-12" /></li>
                    <li><img src="/public/logo12.png" alt="" className="h-12" /></li>
                </ul>
            </div> */}
            <div className="flex flex-col gap-5 justify-center items-center max-w-[500px]">
                <span className="bg-gray-200 px-5 py-1 rounded-full">Benefits</span>
                <p id='text' className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">Why work with me?</p>
                <p id='text' className="text-md font-semibold text-gray-500 text-center">Great photography is more than a service—it is an experience built on collaboration, trust, and creativity.</p>
            </div>

            <div className="w-full px-5 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6 max-w-[1200px] mx-auto">

                    {/* Card 1 */}
                    <div className="bg-[#f2f4f7] row-span-2  rounded-3xl p-6 flex flex-col justify-between overflow-hidden">
                        <div className="relative h-full flex justify-center items-center">

                            {/* Back Left */}
                            <img
                                id="beneimg1"
                                src="/public/bene3.avif"
                                alt=""
                                className="absolute w-40 rounded-xl pt-1 px-1 pb-4 bg-white shadow-md -translate-x-24 -translate-y-10 rotate-[-15deg] z-0"
                            />

                            {/* Back Right */}
                            <img
                                id="beneimg1"
                                src="/public/bene1.avif"
                                alt=""
                                className="absolute w-40 rounded-xl pt-1 px-1 pb-4 bg-white shadow-md translate-x-24 -translate-y-10 rotate-[15deg] z-0"
                            />

                            {/* Bottom Left */}
                            <img
                                id="beneimg1"
                                src="/public/bene4.avif"
                                alt=""
                                className="absolute w-40 rounded-xl pt-1 px-1 pb-4 bg-white shadow-md -translate-x-20 translate-y-16 rotate-[-8deg] z-0"
                            />

                            {/* Bottom Right */}
                            <img
                                id="beneimg1"
                                src="/public/psi1.avif"
                                alt=""
                                className="absolute w-40 rounded-xl pt-1 px-1 pb-4 bg-white shadow-md translate-x-20 translate-y-16 rotate-[8deg] z-0"
                            />

                            {/* Center (Main Image) */}
                            <img
                                id="beneimg1"
                                src="/public/bene2.avif"
                                alt=""
                                className="relative w-44 rounded-xl pt-1 px-1 pb-4 bg-white shadow-lg z-10"
                            />

                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Over 10+ years experience</h2>
                    </div>

                    {/* Card 2 (tall) */}
                    <div className="bg-[#f2f4f7] rounded-3xl p-6 row-span-2 flex flex-col justify-between overflow-hidden z-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Shot with the best camera gear</h2>
                        <img src="/public/bene5.avif" id='beneimg2' className="h-full object-contain" />
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-3xl overflow-hidden row-span-2">
                        <img src="/public/bene6.avif" className="w-full h-full object-cover" />
                        <p className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Professional editing included
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#f2f4f7] rounded-3xl row-span-2 p-6 flex flex-col items-center justify-between overflow-hidden ">
                        <div className="h-full  relative w-full ">
                            <img src="/public/leftarm.avif" id='leftarm' alt="" className="absolute left-0 w-1/2" />
                            <img src="/public/rightarm.avif" id='rightarm' alt="" className="absolute right-0 w-1/2" />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Seamless client experience</h2>
                    </div>

                    {/* Card 5 (wide) */}
                    <div className="bg-[#f2f4f7] rounded-3xl  col-span-2 flex items-center justify-between overflow-hidden relative">
                        <h2 className="text-xl w-20 p-6 font-semibold z-30">Tailored to your vision</h2>
                        <div className="absolute h-full w-1/2 left-0 top-0 rightwhitefade z-20"></div>
                        <img src="/public/eye.avif" className="absolute w-full right-0 h-full object-center z-10" />
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#f2f4f7] rounded-3xl p-6 overflow-hidden">
                        <p className="text-orange-500 text-xl md:text-2xl ">★★★★★</p>
                        <h2 className="text-3xl md:text-6xl font-bold">524</h2>
                        <p className="text-sm text-gray-500">satisfied clients</p>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#f2f4f7] rounded-3xl p-6 overflow-hidden">
                        <p className="text-sm">7 day turnaround</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Benifit
