import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="w-full h-2/3  bg-[#b083f8] ">
                <div className="heading p-2 place-content-center place-items-center">
                    <h1 className='flex justify-center 
                font-mono text-lg mt-5 font-bold' >Hey There i am Somesh Thapliyal . I have created this full stack mern blog application where you can pretty much do everything😎⬇️</h1>
                </div>
                <div className="image h-1/2 flex justify-center p-6">
                    <img className='mt-4 border-4 border-black rounded-3xl max-h-72 h-auto w-auto' src="https://cdn.filestackcontent.com/efbSR18hT5uRKuo0zoMA" alt="" />
                </div>

            </div>
            <div className="w-full h-2/3  bg-[#ACF5C9] ">
                <div className="heading p-2 place-content-center place-items-center">
                    <h1 className='flex justify-center 
                font-mono text-3xl mt-5 font-bold' >Publish All your passion into the BLOGER</h1>
                </div>
                <div className="image h-1/2 flex justify-center p-6">
                    <img className='mt-4 border-4 border-black rounded-3xl max-h-72 h-auto w-auto' src="https://www.growthtribe.com/wp-content/uploads/2018/08/Blog-Post-Feature-Image.jpg" alt="" />
                </div>

            </div>

            <div className="w-full  bg-red-400 ">
                <div className="heading p-2 place-content-center place-items-center">
                    <h1 className='flex justify-center 
                font-mono text-4xl mt-5 font-bold' >Save All your memories</h1>
                    <p className='p-2 flex justify-center font-mono font-bold mt-4 text-xl'>Save all your memories into the bloger so you dont forget any of the moment in your Life</p>
                </div>
                <div className="image h-1/2 flex justify-center p-6">
                    <img className='mt-4 border-4 border-black  rounded-3xl max-h-72 h-auto w-auto' src="https://images.all-free-download.com/images/graphiclarge/memory_background_family_pictures_icons_cartoon_characters_6838682.jpg" alt="" />
                </div>

            </div>

            <div className="w-full  bg-blue-400 ">
                <div className="heading p-2 place-content-center place-items-center">
                    <h1 className='flex justify-center 
                font-mono text-4xl mt-5 font-bold' >Create a strong community </h1>
                    <h3 className='flex justify-center mt-4 text-xl font-mono font-bold' >Help the bloger website to reach to many other people</h3>
                </div>
                <div className="image h-1/2 flex justify-center p-6">
                    <img className='mt-4 border-4 border-black rounded-3xl max-h-72 h-auto w-auto' src="https://tryengineering.org/wp-content/uploads/bigstock-Hands-Of-Diverse-Group-Of-Peop-343671511-scaled.jpg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Banner