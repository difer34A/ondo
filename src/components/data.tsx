import React from 'react'
import DataCards from './dataCards'

export default function Data() {
  return (
    <div className='mt-4 flex flex-col gap-8'>
        {/* upper text section */}
        <div className='flex flex-col gap-4'>
            <div className='flex place-items-center gap-2'>
                <h1 className='text-white font-bold text-xl'>{`DURAARAA DATA (50% OFF)`}</h1>
                <img src="https://ondo.mn/images/icons/package.svg?imwidth=32" alt="planet" className='w-8 aspect-square'/>
            </div>
            <div className='flex place-items-center justify-center'>
                <h1 className='text-slate-400 font-medium text-sm'>{`"Урамшууллыг зөвхөн 1 удаа ашиглах боломжтой"`}</h1>
            </div>
        </div>
        <div className='grid grid-cols-4 flex-col gap-8 py-4 px-2'>
            <DataCards  length = "30 хоног" time = "ХЯЗГААРГҮЙ" type = "Хурд, хэмжээ хязгааргүй" p1 = "25'000" p2 = "12'500"/>
            <DataCards  length = "90 хоног" time = "ХЯЗГААРГҮЙ" type = "Хурд, хэмжээ хязгааргүй" p1 = "50'000" p2 = "25'000"/>
            <DataCards  length = "50GB" time = "ХУГАЦААГҮЙ" type = "Шилжүүлэх боломжтой" p1 = "25'000" p2 = "12'500"/>
            <DataCards  length = "111GB" time = "ХУГАЦААГҮЙ" type = "Шилжүүлэх боломжтой" p1 = "50'000" p2 = "25'000"/>
        </div>
    </div>
  )
}
