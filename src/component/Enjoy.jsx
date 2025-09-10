import React from 'react'
import Glass from '../assets/glass.jpg'
import Sea from '../assets/sea.png'
import Tog from '../assets/tog.png'

const Enjoy = () => {
    return (
        <>
            <div className='px-10 mb-10'>
                <hr className='border-dashed border' />
                <div className='relative'>
                    <div className='font-brygada font-bold text-[80px] md:text-[150px] lg:text-[190px] text-brow text-center relative z-5'>
                        Sand
                        <span className='text-cream'>&</span>
                        Sky
                    </div>
                    <div className='absolute top-20 lg:top-40 w-full flex justify-evenly'>
                        <img src={Glass} className='w-35 md:w-70 rounded-xl md:rounded-3xl -rotate-10 z-1 hover:z-3 transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />
                        <div className='flex items-end'>
                            <img src={Sea} className='w-35 h-25 lg:w-90 lg:h-65 rounded-xl z-2 hover:z-4 md:rounded-3xl transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />
                        </div>
                        <img src={Tog} className='w-35 md:w-70 rounded-xl md:rounded-3xl rotate-10 z-3 transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />
                    </div>
                </div>
                <div className='mt-40 md:mt-65 font-brygada font-medium text-xl md:text-2xl text-center'>We hope you enjoy your stay here.</div>
            </div>
        </>
    )
}

export default Enjoy

// <img src={Glass} className='absolute top-20 md:top-40 left-0 md:left-20 w-35 md:w-70 rounded-xl md:rounded-3xl -rotate-10 z-1 hover:z-3 transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />

//                         <img src={Sea} className='absolute top-30 md:top-60 md:left-[450px] w-35 md:w-90 rounded-xl z-2 hover:z-4 md:rounded-3xl transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />

//                         <img src={Tog} className='absolute top-20 md:top-40 right-0 md:right-20 w-35 md:w-70 rounded-xl md:rounded-3xl rotate-10 z-3 transition deley-150 duration-300 hover:bg-gray-100/50 hover:-translate-y-3 hover:scale-105' />
