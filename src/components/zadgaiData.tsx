import React from 'react'
import DataSlider from './dataSlider'

export default function ZadgaiData() {
  return (
    <div className='mt-4 flex flex-col gap-8 overflow-visible'>
        {/* upper text section */}
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-center gap-2'>
                <h1 className='text-white font-bold text-xl'>{`Задгай дата`}</h1>
                <h1 className='text-slate-400 font-medium text-sm'>{`Хугацаагүй, Шилжүүлэх боломжтой`}</h1>
            </div>
            <DataSlider/>
        </div>
    </div>
  )
}
