import React from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../components/useScreenSize'
import Me from '../assets/me.jpg'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/html.png'
import android from '../assets/android.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { Tooltip } from '@chakra-ui/react'

const About = () => {
    const screenSize = useScreenSize()

    const images = [
        { image: tailwind, name: 'Tailwindcss' },
        { image: html, name: 'Html' },
        { image: css, name: 'Css' },
        { image: android, name: 'React-native' },
        { image: express, name: 'Nodejs & Express' },
        { image: mongo, name: 'MongoDb & Mongoose' },
        { image: react, name: 'React' }
    ]

    return (
        <div className={`${screenSize.width < 700 ? 'h-full w-full' : 'w-screen h-screen py-[5%] px-[10%]'} flex flex-col justify-center items-center  bg-neutral-950 `}>

            <Link to='/' className={`${screenSize.width < 700 ? 'p-[3%]' : ''} w-full flex justify-end items-end text-white`}>
                <ArrowLeftCircleIcon className='h-10 w-10 text-white hover:text-neutral-400' />
            </Link>

            <div className={`${screenSize.width < 700 ? 'flex flex-col justify-center items-center' : 'h-full w-full flex justify-between'}`}>
                <div className='h-full w-full flex flex-col'>
                    <img src={Me} alt='' className={`${screenSize.width < 700 ? 'w-full h-[16rem] px-[10%] my-[2%]' : 'h-[20rem] w-[20rem]  rounded-xl justify-center'}`} />
                    <div className={`${screenSize.width < 700 ? 'mt-[2%] h-[5rem] w-full p-[3%] ' : 'mt-[2%] h-[5rem] w-[80%]'} text-white`}>
                        <p className='text-2xl font-bold text-white my-[2%]'>Technologies and skills</p>
                        <div className={`${screenSize.width < 700 ? 'flex flex-wrap gap-[5%] mb-[10rem]'  : 'flex gap-3'} w-full h-full  `}>
                            {images.map(skill => (
                                <Tooltip label={skill.name} aria-label='A tooltip'>
                                    <button className={`${screenSize.width < 700 ? 'flex justify-center items-center w-[30%] h-[5rem] p-[5%]' : 'h-[5rem] w-[6rem] p-[2%]'} rounded-[2rem] border-2 border-dashed border-white   text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-full hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}>
                                        <img src={skill.image} className='h-[3rem] w-[3rem] ' alt='icon' />
                                    </button>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`${screenSize.width < 700 ? 'w-full h-full px-[3%] mt-[80%]' : 'w-[50%] h-full' } `}>
                    <p className='text-2xl font-bold text-white'>Get to know me!</p>
                    <p className='text-justify text-lg text-neutral-400 my-[2%]'>I am reaching out to introduce myself as a passionate and motivated junior full-stack developer with a strong foundation in React and Nodejs, eager to begin my professional journey in the tech industry.</p>
                    <p className='text-justify text-lg text-neutral-400 my-[2%]'>Although I am new to the professional world, I have spent a lot of time deeply immersed in coding and development through self-study, online courses, and personal projects.</p>
                    <p className='text-justify text-lg text-neutral-400 my-[2%]'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                </div>

            </div>
        </div>
    )
}

export default About