import React from 'react'
import { FaBlogger } from 'react-icons/fa'


const Footer = () => {
    return (
        <>

            <div className="footer bg-black h-32 flex flex-col p-3 w-full justify-center place-items-center gap-7  mt-full relative ">

                <div className="bloger flex gap-2">
                    <span className='flex place-items-center'><FaBlogger size={"40px"} color='#3B71CA' /></span>
                    <h1 className='text-white text-5xl'>BLOGER</h1>
                </div>
                <h2 className='text-white font-serif'>Copyright @ 2023 BLOGER</h2>
            </div>


        </>
    )
}

export default Footer