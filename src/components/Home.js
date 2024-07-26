import React from 'react'
import useScreenSize from '../components/useScreenSize'
import github from '../assets/github-logo.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import About from './About'
import Projects from './Projetcs'

const Home = () => {
    const screenize = useScreenSize()

    return (
        <>
            <div id='home' className={`flex flex-col bg-gray-100 justify-evenly items-center h-[20rem] w-full p-2 ${screenize.width > 1000 ? 'mt-[10%]' : 'mt-[10%]'}`}>
                <p className={`text-center ${screenize.width > 1000 ? 'text-6xl' : 'text-5xl'} font-bold`}>Hey, I'm Gilson de Almeida</p>
                <p className={`${screenize.width > 1000 ? 'w-[40%] text-lg' : 'w-[60%] text-md'} text-center`}>Passionate and motivated full-stack developer with a strong foundation in React and Nodejs.</p>
                <button className={`bg-sky-500 p-2 h-[4rem] ${screenize.width > 1000 ? 'w-[18%] text-lg' : 'w-[40%] text-md'}  rounded text-xl font-bold text-white shadow-md uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-400 duration-300`}><a href='https://drive.google.com/file/d/1EP7m_mh-jZd-kABhaRU6VbC_HHyA10I6/view?usp=drive_link'>Download my cv</a></button>
            </div>
            <div className='flex gap-3 mt-[5%] ml-[2%] bg-gray-100 mb-[2%]'>
                <a href='https://github.com/Gilson96'><img src={github} alt='github' className='h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/></a>
                <a href='https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/'><img src={linkedin} alt='github' className='h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/></a>
                <a href='mailto:grafael99@gmail.com'><img src={gmail} alt='github' className='h-10 w-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'/></a>
            </div>
            <About/>
            <Projects/>
        </>
    )
}

export default Home