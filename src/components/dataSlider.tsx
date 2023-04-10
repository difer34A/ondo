import React, { useState, useEffect, useRef } from 'react'
import Button from './button';

export default function DataSlider() {
    const [value, setValue] = useState("1");
    const elements = useRef([]);
    
    useEffect(() => {
        elements.current.forEach(element => {
            element.classList.add("translate-y-4");
            setTimeout(() => {
              element.classList.remove("translate-y-4");
            }, 100);
        });
      }, [value]);
    
  return (
    <div className='w-full h-80 bg-white flex flex-col place-items-center px-20 p-12 justify-around rounded-xl'>
        <div className='w-full relative flex justify-center gap-20 overflow-visible my-6'>
            <h1 className='font-extrabold text-2xl'>/</h1>
            {value !== "1" &&
            <h2 ref={el => elements.current[1] = el} className='font-extrabold text-3xl absolute -translate-x-28 -top-10 text-slate-700 blur-sm duration-100'>{`${Number(value)-1}'000₮`}</h2>}
            
            <h2 ref={el => elements.current[0] = el} className='font-extrabold text-3xl absolute -translate-x-28 duration-100'>{`${value}'000₮`}</h2>

            {value !== "100" &&
            <h2 ref={el => elements.current[2] = el} className='font-extrabold text-3xl absolute -translate-x-28 top-10 text-slate-700 blur-sm duration-100'>{`${Number(value)+1}'000₮`}</h2>}

            <h2 ref={el => elements.current[3] = el} className='font-extrabold text-3xl text-slate-600 absolute translate-x-24 duration-100'>{`${Number(value) * 1.5}GB`}</h2>
        </div>

        <div className='w-full mt-8 overflow-visible'>
            
            <input title='slider' type="range" value={value} min={1} max={100} className='accent-Primary-500 w-full h-1 overflow-visible input' onChange={({ target: { value: radius } }) => {
            setValue(radius);}}/>

            <div className='w-full flex justify-between place-items-center mt-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900">{`1'000 ₮`}</label>
                <label className="block mb-2 text-sm font-medium text-gray-900">{`100'000 ₮`}</label>
            </div>

        </div>

        <Button>Авах</Button>

    </div>
  )
}
