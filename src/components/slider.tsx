import React from 'react'
import Image from 'next/image'
import Button from './button'

export default function Slider() {
  return (
    <div className='relative'>
        <Image src={"/slider_banner.png"} width={1440} height={900} alt='slider_img' className='rounded-xl'></Image>
        <div className='absolute bottom-12 left-12'>
            <Button>Идэвхжүүлэх</Button>
        </div>
    </div>
  )
}
