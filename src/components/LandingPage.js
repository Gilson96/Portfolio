import React from 'react'
import spaceGif from '../assets/space.png'
import Skills from './Skills'
import Projects from './Projetcs'

const LandingPage = () => {
    return (
        <>
            <div className='h-full w-full flex justify-between items-center px-[3%] my-[3%]'>

                <div className='h-full w-full justify-center items-start flex flex-col text-white gap-6 '>
                    <p className='text-4xl font-bold'>Hey, I'm Gilson de Almeida</p>
                    <p className='w-full dxvtext-justify leading-8 text-lg '>I am reaching out to introduce myself as a passionate and motivated junior full-stack developer with a strong foundation in React and Nodejs, eager to begin my professional journey in the tech industry.
                        Although I am new to the professional world, I have spent the past 3 of years deeply immersed in coding and development through self-study, online courses, and personal projects.</p>
                    <a href='https://drive.google.com/file/d/1ECQIJyaozLgSvEt6Z6N0d4nqcdmhjuvM/view'><button className='w-full p-2 bg-none border border-white text-white text-nowrap rounded-md border-2 font-bold'>Download my CV</button></a>
                </div>
                <div className='flex'>
                    <img src={spaceGif} />
                </div>
            </div>
            <Skills/>
            <Projects/>
        </>
    )
}

export default LandingPage