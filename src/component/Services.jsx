import React from 'react'
import Rooms from '../assets/rooms.jpg'
import Spa from '../assets/spa.jpg'
import Dinning from '../assets/dinning1.jpg'

const Services = () => {
    return (
        <div className='my-15'>
            <h1 className='mb-15 font-brygada font-bold text-brow text-2xl md:text-4xl text-center'>Where Comfort Meets Style</h1>
            <div className='flex flex-wrap gap-5 md:flex justify-evenly'>
                <div className='w-xs'>
                    <img src={Rooms} className='rounded-xl w-xs' />
                    <h3 className='my-5 font-brygada font-bold text-lg text-[#7E5236]'>Rooms & Suites</h3>
                    <div className='font-inter font-light tracking-wide leading-7'>Our elegant rooms and villas combine modern comfort with coastal charm, creating a true sanctuary by the sea.</div>
                </div>
                <div className='w-xs'>
                    <img src={Spa} className='rounded-xl w-xs h-[410px]' />
                    <h3 className='my-5 font-brygada font-bold text-lg text-[#7E5236]'>Spa</h3>
                    <div className='font-inter font-light tracking-wide leading-7'>Indulge in soothing treatments inspired by nature, where every touch is designed to restore balance and serenity.</div>
                </div>
                <div className='w-xs'>
                    <img src={Dinning} className='rounded-xl w-sm h-[410px]' />
                    <h3 className='my-5 font-brygada font-bold text-lg text-[#7E5236]'>Seaside Dinning</h3>
                    <div className='font-inter font-light tracking-wide leading-7'>Dine under the stars with the sound of waves as your backdrop.</div>
                </div>
            </div>
        </div>
    )
}

export default Services