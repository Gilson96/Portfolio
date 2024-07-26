import React from 'react'
import Skills from './Skills'
import useScreenSize from '../components/useScreenSize'

const About = () => {
    const screenSize = useScreenSize()

  return (
    <div id='about' className='flex flex-col py-2 px-5 justify-center items-center h-auto gap-5 bg-white '> 

        <div className={`flex flex-col justify-center items-center mt-[9%] ${screenSize.width > 1000 ? 'w-[50%]' : 'w-[90%]'} gap-2`}>
            <p className='text-3xl font-bold uppercase'>About Me</p>
            <hr className='w-[10%] h-[2px] bg-sky-600'/>
            <p className={` italic ${screenSize.width > 1000 ? 'text-center' : 'text-justify'}`}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>

        <div className={`flex ${screenSize.width > 1000 ? '' : 'flex flex-col'} justify-between gap-20 px-4 mt-10`}>
            <div className={`flex flex-col ${screenSize.width > 1000 ? 'w-[40%]' : ''} gap-5 mb-[3%]`}>
                <p className='text-2xl font-bold'>Get to know me!</p>
                <p className='text-justify text-lg'>I am reaching out to introduce myself as a passionate and motivated junior full-stack developer with a strong foundation in React and Nodejs, eager to begin my professional journey in the tech industry.</p> 
                <p className='text-justify text-lg'>Although I am new to the professional world, I have spent the past 3 of years deeply immersed in coding and development through self-study, online courses, and personal projects.</p>
                <p className='text-justify text-lg'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                
            </div>
            <div className={`flex flex-col ${screenSize.width > 1000 ? 'w-[50%]' : 'mb-[9%]'} `}>
                <Skills/>
            </div>
        </div>
    </div>
  )
}

export default About