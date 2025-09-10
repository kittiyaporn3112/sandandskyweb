import React from 'react'
import Thai from '../assets/thai.png'
import Star from '../assets/star.png'
import Guid from '../assets/guid.png'

const Award = () => {
    return (
        <div className='w-full h-20 bg-sky py-4 flex justify-evenly items-center'>
            <img src={Thai} className='w-30 md:w-40' />
            <img src={Star} className='w-30 md:w-35' />
            <div className='flex flex-col items-center'>
                <img src={Guid} className='w-5 md:w-10' />
                <p className='font-brygada font-semibold text-xs text-white'>Guide Michelin Hotels</p>
            </div>
        </div>
    )
}

export default Award