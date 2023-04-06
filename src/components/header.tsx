import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

export default function Header() {
    return (
        <div className=' h-[98px] flex place-items-center justify-between sticky absolute'>
            <div className='flex gap-28'>
                <Link href={"/"}>
                    <img src="https://ondo.mn/images/Logo.svg?imwidth=128" alt="ondo" />
                </Link>
                <div className='flex gap-4'>
                    <Link href={"#"} className='text-white font-bold text-sm'>ЯАГААД ONDO ГЭЖ?</Link>
                    <Link href={"#"} className='text-white font-bold text-sm'>ДАТА ЦЭНЭГЛЭХ</Link>
                    <Link href={"#"} className='text-white font-bold text-sm'>ДУГААР АВАХ</Link>
                </div>
            </div>
            <div className='flex gap-4'>
                <Button>ТУСЛАМЖ</Button>
                <Button>НЭВТРЭХ</Button>
            </div>

        </div>
    )
}
