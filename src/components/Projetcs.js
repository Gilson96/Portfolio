import React from 'react'
import reactMovies from '../assets/react-movies.png'
import reactFoods from '../assets/react-foods.png'
import nativeFoods from '../assets/native-foods.png'
import nativeMovies from '../assets/native-movies.jpg'
import { Divider } from '@chakra-ui/react'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from '@chakra-ui/react'
import useScreenSize from './useScreenSize'

const Projetcs = () => {
    const screenSize = useScreenSize()

    const projects = [
        {
            id: 1,
            name: 'Rocket-Movies',
            screenshot: reactMovies,
            description: 'This Platform provides a seamless experience. Whether you want to know more about your favourite movie or discover and add new movies to your watchlist.',
            liveDemoLink: 'https://gilson96.github.io/react-movies/',
            githubLink: 'https://github.com/Gilson96/react-movies'
        },
        {
            id: 2,
            name: 'React-Foods',
            screenshot: reactFoods,
            description: 'This web-app allows the user to order any food in the available menu list',
            liveDemoLink: 'https://gilson96.github.io/react-foods/',
            githubLink: 'https://github.com/Gilson96/react-foods'
        },
        {
            id: 3,
            name: 'Native-movies',
            screenshot: nativeMovies,
            description: 'This Android app is built with react-native which allows the user to see information about their favourite movie.y.',
            githubLink: 'https://github.com/Gilson96/native-movies'
        },
        {
            id: 4,
            name: 'Native-foods',
            screenshot: nativeFoods,
            description: 'This Android app is built with react-native which allows the user to order any food in the available menu list.',
            githubLink: 'https://github.com/Gilson96/native-foods'
        }
    ]



    return (
        <div className='h-full w-full flex flex-col justify-start items-start py-[5%] px-[10%] bg-neutral-950'>
            <div className='w-full flex justify-between items-center'>
                <p className='text-white text-[2rem]'>Projects</p>
                <Link to='/' className='w-full flex justify-end items-end text-white'>
                    <ArrowLeftCircleIcon className='h-10 w-10 text-white hover:text-neutral-400' />
                </Link>
            </div>
            <Divider />
            {screenSize.width < 700 ?
                <div className=' flex flex-wrap gap-2 h-full w-full'>
                    {projects.map(project => (
                        <div className='h-full w-[7.5rem] flex flex-col justify-center items-center border p-[3%] rounded-xl mt-[5%]'>

                            <img src={project.screenshot} alt='#' className='h-[8rem] w-[8rem] rounded-xl' />

                            <div className='my-[5%]'>
                                <p className='text-white text-[10px] line-clamp-3'>
                                    {project.description}...
                                </p>
                            </div>

                            <div className='flex gap-2 w-full h-[30%] justify-between items-end'>
                                <button className={`${project.liveDemoLink === '' ? 'hidden' :'bg-neutral-50 rounded-lg p-[1%] w-[3rem] h-[2rem] flex justify-center items-center' }`}>
                                    <a href={project.liveDemoLink} className='text-[10px]'>Demo</a>
                                </button>
                                <button className='bg-neutral-50 rounded-lg p-[1%] w-[3rem] h-[2rem] flex justify-center items-center'>
                                    <a href={project.githubLink} className='text-[10px]'>Github</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className='flex flex-wrap justify-evenly gap-3 my-[2%]'>
                    {projects.map(project => (
                        <Card
                            title={project.name}
                            description={project.description}
                            imgSrc={project.screenshot}
                            liveDemoLink={project.liveDemoLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            }
        </div >
    )
}

export default Projetcs


const Card = ({ imgSrc, title, description, githubLink, liveDemoLink, hidLink, screenSize }) => {
    return (
        <motion.div whileHover="hover" className={`w-[40%] h-[15rem] relative`}>
            <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
                <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm font-light text-slate-300">{description}</p>
            </div>
            <motion.div
                initial={{
                    top: "0%",
                    right: "0%",
                }}
                variants={{
                    hover: {
                        top: "50%",
                        right: "50%",
                    },
                }}
                className="absolute inset-0 bg-slate-200 z-10"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div
                href="#"
                rel="nofollow"
                className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black transition-colors"
            >
                <div className="flex w-full justify-center items-center gap-2">
                    <Tooltip label='live demo'>
                        <a href={liveDemoLink} className={`${hidLink ? 'hidden' : 'flex gap-1 items-center hover:text-sky-400'}`}>
                            <LinkIcon className='h-7 w-7' />
                        </a>
                    </Tooltip>
                    <Tooltip label='github'>
                        <a href={githubLink} className='flex gap-1 items-center hover:text-sky-400'>
                            <FaGithub className="text-[2rem]" />
                        </a>
                    </Tooltip>
                </div>

            </div>
        </motion.div>
    );
};

