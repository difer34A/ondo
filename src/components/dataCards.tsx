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
        <div className='w-[90%] h-full relative flex justify-center place-items-center group overflow-hidden'>
            <div className='w-full h-full bg-white rounded-md group-hover:blur-none scrollbar-hide' >
                <div className='w-full h-full bg-white rounded-md bg-gradient-to-br from-purple-400 via-blue-300 to-yellow-300 group-hover:scale-[150%] group-hover:animate-spin-slow scrollbar-hide'/>
            </div>
            {/* 
            <div className='absolute w-[99%] h-[99%]'>
                <div className='bg-black w-full h-full flex flex-col justify-center gap-6 py-6 rounded-md px-6 group-hover:scale-95 z-50'>
                    <h1 className='text-white font-extrabold overflow-y-hidden flex justify-center text-3xl'>{length}</h1>
                    <h1 className='text-white font-medium overflow-y-hidden flex justify-center text-xl'>{time}</h1>
                    <h1 className='text-slate-300 font-normal overflow-y-hidden flex justify-center text-sm'>{type}</h1>
                    <div className='w-full bg-slate-700 h-[0.4px] opacity-50' />
                    <div className='w-full flex gap-4  place-items-center justify-center'>
                        <h1 className='text-slate-300 font-medium overflow-y-hidden flex justify-center text-2xl line-through'>{p1}₮</h1>

                        <h1 className='text-white font-semibold overflow-y-hidden flex justify-center text-2xl'>{p2}₮</h1>
                    </div>
                </div>
            </div>
             */}

        </div>
    )
}

export default DataCards;
