import React from 'react'
import useScreenSize from '../components/useScreenSize'

const Skills = () => {
    const screenSize = useScreenSize()

    return (
        <>
            <p className='text-2xl font-bold mb-4'>My Skills</p>
            <div className='flex flex-wrap gap-4 rouunded-md'>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Html</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>css</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Javascript</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>React</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Git</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>MongoDB</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Mongoose</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Tailwindcss</button>
                <button className='flex items-center py-4 px-6 bg-gray-200 text-gray-600 uppercase text-xs rounded-md font-bold' disabled={true}>Responsive Design</button>
            </div>
        </>
    )
}

export default Skills