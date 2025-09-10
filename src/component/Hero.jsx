import React, { useState } from 'react'
import Image from '../assets/hero.jpg'
import Logo from '../assets/logo.svg'
import { FaCloud } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const Hero = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);

    const hdlOpenDropdown = () => {
        setMobileDropdown(!mobileDropdown)
    }
    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 z-50 w-full py-5 px-5  lg:px-20'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-20'>
                        <div className='flex gap-5 items-center'>
                            <img src={Logo} className='size-10 animate-[spin_5s_linear_infinite]' />
                            <h1 className='font-brygada font-bold text-2xl text-sky'>Sand & Sky</h1>
                        </div>
                        <ul className='hidden lg:flex gap-15 font-brygada font-bold text-sky text-lg'>
                            <li className='hover:underline underline-offset-4'>Home</li>
                            <li className='hover:underline underline-offset-4'>Rooms</li>
                            <li className='hover:underline underline-offset-4'>Services</li>
                            <li className='hover:underline underline-offset-4'>Contact</li>
                        </ul>
                    </div>
                    <div className='lg:hidden'>
                        <button onClick={hdlOpenDropdown}>
                            <IoMenu className='size-7 text-sky' />
                        </button>
                    </div>
                </div>
                {
                    mobileDropdown && (
                        <div className='fixed top-20 right-0 z-20 bg-sky w-full p-5 flex flex-col items-end'>
                            <ul className='font-brygada text-cream text-md'>
                                <li className='hover:underline underline-offset-4'>Home</li>
                                <li className='hover:underline underline-offset-4'>Rooms</li>
                                <li className='hover:underline underline-offset-4'>Services</li>
                                <li className='hover:underline underline-offset-4'>Contact</li>
                            </ul>
                        </div>
                    )
                }
            </div>

            {/* welcome section */}
            <div className='flex justify-between'>
                <div className='bg-cream w-full flex justify-center'>
                    <div className='mt-30 md:mt-40 pb-5'>
                        <div className='relative flex flex-col justify-center items-center font-brygada'>
                            <h2 className='font-semibold text-4xl text-brow mb-10'>Welcome to</h2>
                            <h1 className='font-bold text-7xl text-sky'>Sand & Sky</h1>
                            <h1 className='font-bold text-4xl text-sky mb-10'>Resort</h1>
                            <h4 className='font-semibold text-lg text-brow'>Your Seaside Sanctuary Awaits</h4>

                            <FaCloud className='size-20 absolute -top-3 left-2 text-sky' />
                            <FaCloud className='size-20 absolute -top-0 -left-2 text-white' />
                            <LuWaves className='size-15 absolute bottom-10 right-15 text-sky' />
                        </div>
                        <div className='flex justify-center gap-5 mt-10'>
                            <button className='rounded-full border-2 border-brow px-12 py-1 font-bold transition deley-150 duration-300 hover:bg-brow hover:text-cream'>LOGIN</button>
                            <button className='rounded-full border-2 border-sky bg-sky px-7 py-1 font-bold text-cream transition deley-150 duration-300 hover:bg-[#92afd1] hover:border-[#92afd1]'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src={Image} className='w-[600px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero