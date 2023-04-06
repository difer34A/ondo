import React from 'react'

interface CardProps {
    length?: string;
    time?: string;
    type?: string;
    p1?: string;
    p2?: string;
}

const DataCards: React.FC<CardProps> = ({ length, time, type, p1, p2 }) => {
  return (
    <div className='hello group z-10 w-full flex place-items-center justify-center bg-white rounded-md bg-gradient-to-br from-purple-600 via-green-500 to-yellow-500 overflow-hidden hover:scale-105 hover:blur-sm'>
        <div className='bg-black w-[99%] h-[99%] flex flex-col justify-center gap-6 py-6 rounded-md px-6 group-hover:scale-95 z-'>
            <h1 className='text-white font-extrabold overflow-y-hidden flex justify-center text-3xl'>{length}</h1>
            <h1 className='text-white font-medium overflow-y-hidden flex justify-center text-xl'>{time}</h1>
            <h1 className='text-slate-300 font-normal overflow-y-hidden flex justify-center text-sm'>{type}</h1>
            <div className='w-full bg-slate-700 h-[0.4px] opacity-50'/>
            <div className='w-full flex gap-4  place-items-center justify-center'>
                <h1 className='text-slate-300 font-medium overflow-y-hidden flex justify-center text-2xl line-through'>{p1}₮</h1>

                <h1 className='text-white font-semibold overflow-y-hidden flex justify-center text-2xl'>{p2}₮</h1>
            </div>
        </div>
    </div>
  )
}

export default DataCards;
