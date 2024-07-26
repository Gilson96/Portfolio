import React from 'react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import useScreenSize from '../components/useScreenSize'
import { Link } from 'react-router-dom'

const Projetcs = () => {
    const screenize = useScreenSize()

    return (
        <div id='projects' className='flex flex-col py-2 px-5 justify-center items-center h-auto gap-10  bg-gray-100'>
            <div className='flex flex-col justify-center items-center w-[50%] gap-2 mb-10'>
                <p className='text-center text-3xl font-bold uppercase mt-4'>Projects<span></span></p>
                <hr className='w-[10%] h-[2px] bg-sky-600' />
            </div>

            <div className={`flex ${screenize.width > 1000 ? 'justify-between' : 'flex-col justify-center items-center'}  mx-12`}>
                <div className={`${screenize.width > 1000 ? 'w-[50%]' : 'w-[100%]'} `}>
                    <div className={`flex justify-center items-center ${screenize.width > 1000 ? 'h-[20rem] w-[25rem]' : 'h-[20rem] w-[33rem]'}  border border-slate-100 rounded-3xl bg-sky-950`}>
                        <p><RocketLaunchIcon className={`${screenize.width > 1000 ? 'h-24 w-24' : 'h-12 w-12'} text-[#F2AF29]`} /></p>
                        <p id='logoFont' className='text-4xl italic'>Rocket<span className='text-xl'>Bank</span></p>
                    </div>
                </div>
                <div className={`flex flex-col gap-5 ${screenize.width > 1000 ? 'w-[50%]' : 'justify-center items-center mt-[3%]'} `}>
                    <p className={`text-2xl font-bold ${screenize.width < 1000 && 'text-center'}`}>Rocket-bank</p>
                    <p className='text-md w-full text-justify'>Rocket Bank is an online banking platform designed to enable users to manage user accounts effectively. Built using React for the front-end, Node.js for the back-end, and Redux for state management, this project demonstrates the integration of modern web technologies to create a responsive and user-friendly interface.</p>

                    <button className={`bg-sky-500 py-3 px-2 ${screenize.width > 1000 && 'h-[3rem] w-[25%]'} w-[25%] rounded text-md font-bold text-white shadow-lg uppercase mt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300`}><a href='#/bank'>see more...</a></button>
                </div>
            </div>

            <div className={`flex ${screenize.width > 1000 ? 'justify-between' : 'flex-col justify-center items-center'}  mx-12`}>
                <div className={`${screenize.width > 1000 ? 'w-[50%]' : 'w-[100%]'} `}>
                    <div className={`flex justify-center items-center ${screenize.width > 1000 ? 'h-[20rem] w-[25rem]' : 'h-[20rem] w-[33rem]'}   border border-slate-100 rounded-3xl bg-stone-800`}>
                        <p className='text-yellow-500 text-4xl'>React Food</p>
                    </div>
                </div>
                <div className={`flex flex-col gap-5 ${screenize.width > 1000 ? 'w-[50%]' : 'justify-center items-center mt-[3%]'} `}>
                    <p className={`text-2xl font-bold ${screenize.width < 1000 && 'text-center'}`}>React-Foods</p>
                    <p className='text-md w-full text-justify'>React Foods provides a convenient platform for users to browse, select, and order food from their favorite restaurants.Built using React for the front-end, Node.js for the back-end, and Redux for state management, this project demonstrates the integration of modern web technologies to create a responsive and user-friendly interface. </p>

                    <button className={`bg-sky-500 py-3 px-2 ${screenize.width > 1000 && 'h-[3rem] w-[25%]'} w-[25%] rounded text-md font-bold text-white shadow-lg uppercase mt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300`}><a href='#/food'>see more...</a></button>
                </div>
            </div>
        </div>
    )
}

export default Projetcs