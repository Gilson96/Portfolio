import React from 'react'
import Block from './Block'

const HomePage = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center p-[3%]'>

            <div className='w-full h-full flex justify-between items-center my-[2%]'>

                <div className='w-full h-full bg-gray-800 rounded-xl flex flex-col justify-center items-center p-[4%] text-2xl'>
                    <p className='text-gray-400'>
                        <span className='text-white'>Hi, I'm Gilson. </span>
                        A passionate and motivated junior full-stack developer
                    </p>
                </div>

                <div className='w-full h-full bg-black rounded-xl'></div>
            </div>

            <div className='w-full h-full bg-black'>
                <p>description</p>
            </div>

            <div className='w-full h-full bg-black felx justify-between items-center'>
                <div>
                    <p>Liverpool, UK</p>
                </div>
                <div>
                    Contact
                </div>
            </div>

        </div>
    )
}

export default HomePage