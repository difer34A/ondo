import React from 'react'

// @ts-ignore
export default function Button({children}) {
  return (
    <button className='bg-Primary-500 flex place-items-center justify-center font-semibold text-sm w-40 h-12 text-white rounded-3xl'>
        {children}
    </button>
  )
}
