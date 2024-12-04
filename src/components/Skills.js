import React from 'react'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/html.png'
import laravel from '../assets/laravel.png'
import css from '../assets/css.png'
import php from '../assets/php.png'
import mongo from '../assets/mongo.png'

const Skills = () => {

    const images = [
        { image: tailwind, name: 'tailwind' },
        { image: html, name: 'html' },
        { image: css, name: 'css' },
        { image: laravel, name: 'laravel' },
        { image: php, name: 'php' },
        { image: mongo, name: 'mongo' },
        { image: react, name: 'react' }
    ]

    return (
        <div className='h-[32rem] w-full flex flex-col justify-center items-center px-[3%]'>
            <div className='w-full justify-center items-center flex flex-col gap-2'>
                <p className='text-white text-4xl'>Skills</p>
                <hr className='border bg-white w-[5%]' />
            </div>
            <div className='w-[60%] flex-wrap h-full flex mt-[3%] justify-center gap-2 '>
                {images.map(image => (
                    <div className='w-[10rem] h-[10rem] border-2 rounded-md p-8 flex flex-col justify-center items-center bg-gray-950/40'>
                        <img src={image.image} className='h-[5rem] w-[5rem] ' alt='icon'/>
                        <p className='text-white font-bold text-lg'>{image.name}</p>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default Skills