import React from 'react'

const Award = () => {
  return (
    <section className='w-full flex justify-center'>

        <div className="md:w-[800px] min-w-[350px] min-h-[300px] relative  flex flex-col gap-5 items-center justify-center">
            <img src="/leftleaf.avif" alt="" className="absolute left-0 h-[20vh]" />
            <img src="/rightleaf.avif" alt="" className="absolute right-0 h-[20vh]" />
            <div className="absolute w-full h-[300px] heroblur2 bottom-0 left-0 bg-gradient-to-top z-500"></div>
            
            <div className="flex items-center z-800">
                <img src="/public/award1.avif" alt="" className="w-[40px] rounded-full" />
                <img src="/public/award2.avif" alt="" className="w-[70px] rounded-full" />
                <img src="/public/award3.avif" alt="" className="w-[40px] rounded-full" />
            </div>

            <div className="flex gap-1 text-[#ec5a29] text-3xl z-800">
                ★★★★★
            </div>

            <p className="text-black lg:text-3xl md:text-xl text-lg font-bold lg:px-25 px-15 z-800 text-center">Trusted by brands & creatives worldwide</p>

            <p className="text-center text-gray-600 lg:text-xl text-lg text-md lg:px-25 px-15 font-semibold pb-30 z-800">Over 100 brands and creatives trust me to capture their stories through bold, refined imagery.</p>
            
        </div>
      
    </section>
  )
}

export default Award
