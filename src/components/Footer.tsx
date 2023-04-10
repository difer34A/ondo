import React from 'react'
import Image from 'next/image'
import {BsFacebook ,BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"

export default function Footer() {
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className='w-full h-[0.5px] bg-slate-800 opacity-50'/>
        <div className='flex place-items-center gap-8 justify-end' >
            <div className='flex place-items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 aspect-square text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h1 className='font-medium text-sm text-white'>60694269</h1>
            </div>
            <div className='flex place-items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 aspect-square text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                <h1 className='font-medium text-sm text-white'>no-contact@xcmd.nl</h1>
            </div>
            <div className='w-8 aspect-square text-white bg-slate-700 flex place-items-center justify-center rounded-full cursor-pointer bg-opacity-20'> <BsFacebook/> </div>
            <div className='w-8 aspect-square text-white bg-slate-700 flex place-items-center justify-center rounded-full cursor-pointer bg-opacity-20'> <AiOutlineTwitter/></div>
            <div className='w-8 aspect-square text-white bg-slate-700 flex place-items-center justify-center rounded-full cursor-pointer bg-opacity-20'> <BsInstagram/> </div>
            <div className='w-8 aspect-square text-white bg-slate-700 flex place-items-center justify-center rounded-full cursor-pointer bg-opacity-20'> <AiFillYoutube/> </div>
            <div className='w-8 aspect-square text-white bg-slate-700 flex place-items-center justify-center rounded-full cursor-pointer bg-opacity-20'> <FaLinkedinIn/> </div>
        </div>
        <div className='w-full text-slate-300 opacity-80 font-light text-xs flex place-items-center justify-between'>
            <h1 className='cursor-pointer'>Бүх эрх хуулиар хамгаалагдсан © 2022. ОНДО ХХК</h1>
            <h1 className='cursor-pointer'>Мэдээ, мэдээлэл</h1>
            <h1 className='cursor-pointer'>Дүрэм, журам</h1>
            <h1 className='cursor-pointer'>Үйлчилгээний нөхцөл</h1>
        </div>
        <div/>
    </div>
  )
}
