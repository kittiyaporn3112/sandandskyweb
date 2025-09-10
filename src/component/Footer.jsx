import React from 'react'
import Logo from '../assets/logowhite.svg'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
    return (
        <div className='left-0 right-0 bottom-0 w-full bg-sky px-10 py-5'>
            <div className='flex gap-5 items-center mb-3'>
                <img src={Logo} className='size-10' />
                <h1 className='font-brygada font-bold text-2xl text-cream'>Sand & Sky</h1>
            </div>
            <div className='w-full flex flex-wrap-reverse gap-5 pl-15'>
                <div className='flex flex-col gap-3 flex-1 font-brygada text-base'>
                    <p>88/8 Moo 5 Khok Kloi, Takua Thung,Phang-Nga 82140, Thailand</p>
                    <div>
                        <p className='flex items-center gap-3'><BsTelephone />+66 32-904 666</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-3'><AiOutlineMail />sandandskyresort@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 font-brygada flex-1  text-brow'>
                    <h1 className='font-bold text-md'>Navigation</h1>
                    <ul>
                        <li className='hover:underline underline-offset-4'>Home</li>
                        <li className='hover:underline underline-offset-4'>Rooms</li>
                        <li className='hover:underline underline-offset-4'>Services</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 font-brygada flex-1 text-brow'>
                    <h1 className='font-bold text-md'>Contact</h1>
                    <ul>
                        <li className='hover:underline underline-offset-4'>Facebook</li>
                        <li className='hover:underline underline-offset-4'>Instagram</li>
                        <li className='hover:underline underline-offset-4'>X</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 font-brygada w-64 flex-1'>
                    <h1 className='font-brygada font-bold text-md text-brow'>Subscribe To Get Spacial Price</h1>
                    <div className=' relative bg-white/50 p-2 rounded-md'>
                        <input
                            type='text'
                            placeholder='Email address'
                            className='focus:outline-none'
                        />
                        <button type='submit' className='absolute h-10 w-15 top-0 right-0 bg-brow p-2 rounded-md flex justify-center items-center'><IoIosSend className='text-cream size-5' /></button>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex gap-10 justify-end font-inter text-brow text-xs'>
                <p>© Copyright Sand & Sky Resort  2025</p>
                <p>Privacy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer