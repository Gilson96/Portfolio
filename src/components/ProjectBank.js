import React from 'react'
import useScreenSize from '../components/useScreenSize'
import { Link } from 'react-router-dom'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { ListItem, UnorderedList } from '@chakra-ui/react'
const Projetcs = () => {
    const screenize = useScreenSize()

    return (
        <div className='flex flex-col w-full'>
            <div id='home' className={`flex flex-col bg-gray-100 justify-evenly items-center h-[20rem] w-full p-2 ${screenize.width > 1000 ? 'mt-[10%]' : 'mt-[5%]'}`}>
                <p className={`text-center ${screenize.width > 1000 ? 'text-6xl' : 'text-3xl'} font-bold`}>Rocket-bank</p>
                <p className={`${screenize.width > 1000 ? 'w-[40%] text-lg' : 'w-[90%] text-md'} text-center`}>Rocket Bank is an online banking platform designed to enable administrators to manage user accounts effectively.</p>
                <button className={`bg-sky-500 p-2 h-[4rem] ${screenize.width > 1000 ? 'w-[18%] text-lg' : 'w-[30%] text-md'}  rounded text-xl font-bold text-white shadow-md uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300`}><a href='https://github.com/Gilson96/React_E-bank/'>github </a></button>
            </div>

            <div className={`flex flex-col bg-white ${screenize.width > 1000 ? '' : ''} justify-center items-center px-10 pt-10`}>
                <div className='w-[50%] '>
                    <div className={`flex justify-center items-center ${screenize.width > 1000 ? 'h-[25rem] w-[35rem]' : 'h-[15rem] w-[20rem]'}  border border-slate-100 rounded-3xl bg-sky-950 mb-6`}>
                        <p><RocketLaunchIcon className={`${screenize.width > 1000 ? 'h-24 w-24' : 'h-12 w-12'} text-[#F2AF29]`} /></p>
                        <p id='logoFont' className='text-4xl italic'>Rocket<span className='text-xl'>Bank</span></p>
                    </div>
                </div>
                <div className={`flex flex-col gap-5 ${screenize.width > 1000 ? 'w-[50%]' : 'mt-[3%]'} `}>
                    <p className={`text-2xl font-bold `}>Project Overview</p>
                    <p className='text-md w-full text-justify'>This online banking web app is a modern and secure platform designed to facilitate banking activities for users. In this app i use a stack of cutting-edge technologies, including React for the front-end, Redux Toolkit for state management, MongoDB with Mongoose for the database, and Tailwind CSS for styling.</p>
                    <p className={`text-2xl font-bold `}> Features</p>
                    <UnorderedList className='text-md w-full text-justify leading-7'>
                        <ListItem>A user-friendly dashboard displaying account balances.</ListItem>
                        <ListItem>Personalized user experience with a responsive design.</ListItem>
                        <ListItem>View and manage multiple bank accounts.</ListItem>
                        <ListItem>Transfer funds between accounts with real-time balance updates.</ListItem>
                    </UnorderedList>
                    <p className={`text-2xl font-bold `}> Architecture</p>
                    <UnorderedList className='text-md w-full text-justify leading-7'>
                        <ListItem>Redux for global state management to handle user data and transactions.</ListItem>
                        <ListItem>Tailwind CSS and Chakra classes for styling components.</ListItem>
                        <ListItem>Node.js with Express for the server-side application.</ListItem>
                        <ListItem>RESTful API endpoints, account management, and transactions.</ListItem>
                        <ListItem>MongoDB collections for users, accounts, and transactions.</ListItem>
                        <ListItem>Mongoose models for interacting with the MongoDB database.</ListItem>
                        <ListItem>Git for version control with a branching strategy for feature development.
                        </ListItem>
                    </UnorderedList>

                    <div className='flex flex-col gap-4 rouunded-md my-6'>
                        <h1 className='text-md font-bold'>Tools used:</h1>
                        <div className='flex gap-2'>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-4 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>Html</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-4 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>css</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-4 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>react</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-2 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>redux toolkit</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-2 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>mongoDB</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-2 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>tailwindcss</button>
                            <button className='flex justify-center items-center h-[3rem] w-auto px-4 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold'>Git</button>
                        </div>
                    </div>

                    <div className='flex gap-2 mb-[6%]'>
                        <button className={`bg-sky-500 py-3 px-5 ${screenize.width > 1000 && 'h-[3rem] w-auto'}  rounded text-md w-auto font-bold text-white shadow-lg uppercase mt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300`}><a href='https://gilson96.github.io/React_E-bank/'>see live</a></button>
                        <Link to='/'><button className={`border border-sky-500 bg-white text-sky-500 py-3 px-5 w-auto ${screenize.width > 1000 && 'h-[3rem] w-auto'}  rounded text-md font-bold shadow-lg uppercase mt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>Go back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetcs