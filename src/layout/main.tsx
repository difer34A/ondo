import React from 'react'

// @ts-ignore
export default function Main({children}) {
  return (
    <div className='w-screen px-[420px] flex flex-col gap-10'>
        {children}
    </div>
  )
}
