import React from 'react'
import Im1 from '../assets/1.png'
import Im2 from '../assets/2.png'
import Im3 from '../assets/3.png'
import Im4 from '../assets/4.png'
import Im5 from '../assets/5.png'
import Yummy from '../assets/yummy.svg'
import Star from '../assets/star.svg'
import Checkin from '../assets/checkin.svg'
import Relax from '../assets/relax.svg'
import Loveit from '../assets/loveit.svg'


const Moments = () => {
    return (
        <div className=' bg-brow w-full flex flex-col items-center py-5'>
            {/* image moment */}
            <div className='relative w-full h-[200px] md:h-[300px] md:mt-20 overflow-x-clip'>
                <div className='absolute -left-10 bottom-0 md:-bottom-5'>
                    <img src={Im5} className='relative w-[100px] md:w-[150px] md:h-[200px]' />
                    <img src={Yummy} className='absolute left-5 -top-15 md:-top-17 w-20 md:w-25' />
                    <img src={Star} className='absolute left-12 -top-5 w-15 md:w-25' />
                </div>
                <div className='absolute left-1/6 top-10 md:top-10'>
                    <img src={Im2} className='relative w-[100px] md:w-[200px]' />
                    <img src={Checkin} className='absolute left-0 -top-10 w-65 md:-top-15' />
                </div>
                <img src={Im4} className='w-[100px] md:w-[200px] absolute left-1/2 md:-top-10 -translate-x-1/2 ' />
                <div className='absolute right-1/6 top-10 md:top-10'>
                    <img src={Im3} className='relative w-[100px] md:w-[200px]' />
                    <img src={Relax} className='absolute right-0 -top-13 w-20 md:-top-20 md:w-40' />
                </div>
                <div className='absolute -right-10 bottom-0 md:-bottom-5'>
                    <img src={Im1} className='w-[100px] md:w-[150px] md:h-[200px] ' />
                    <img src={Loveit} className='absolute right-8 -top-10 w-20 md:-top-15 md:w-30' />
                </div>
            </div>
            {/* text moment */}
            <h2 className="text-2xl md:text-5xl text-center font-bold font-brygada text-sky mb-6">Moments at Sand & Sky</h2>
            <p className="font-inter text-sm md:text-lg text-white text-center px-4">A collection of photos of people, food, and activities at Sand & Sky Resort.</p>
        </div>
    )
}

export default Moments