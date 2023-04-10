import React from 'react'
import Head from 'next/head'

// @ts-ignore
export default function Main({ children }) {
    return (
        <>
            <Head>
                <title>ONDO proto</title>
                <link rel="icon" type="image/x-icon" href="/icon.webp" />
            </Head>
            <div className='w-screen px-[50px] lg:px-[250px] xl:px-[350px] flex flex-col gap-10'>
                {children}
            </div>
        </>

    )
}
