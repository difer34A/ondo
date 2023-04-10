import React from 'react'

// @ts-ignore
export default function Main({children}) {
  return (
    <div className='w-screen px-[50px] lg:px-[250px] flex flex-col gap-10'>
        {children}
    </div>
  )
}
