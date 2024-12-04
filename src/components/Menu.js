import React from 'react'
import useScreenSize from '../components/useScreenSize'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from '@chakra-ui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import logo from '../assets/AvatarMaker-removebg-preview.png'

const Menuu = () => {
  const screenSize = useScreenSize()

  return (
    <>
      {screenSize.width > 1000 ?
        <nav className='flex justify-between items-center h-[5rem] py-2 px-4 bg-white shadow w-full'>
          <div className='flex justify-center items-center gap-3'>
            <Wrap>
              <WrapItem>
                <Avatar name='Gilson de Almeida' src={logo}/>
              </WrapItem>
            </Wrap>
            <p id='avatarFont'><a className='text-4xl' href='#/'>Gilson de Almeida</a></p>
          </div>
          <div className='flex gap-4 font-bold text-xl'>
            <p className='hover:text-sky-500'><a href='#/'>Home</a></p>
            <p className='hover:text-sky-500'><a href='#about'>About</a></p>
            <p className='hover:text-sky-500'><a href='#projects'>Projects</a></p>
          </div>
        </nav>
        :
        <Menu>
          <MenuButton className='flex justify-between h-[5rem] py-2 px-4 bg-white shadow w-full mb-10'>
            <Bars3Icon className='h-7 w-7' />
          </MenuButton>
          <MenuList className=''>
            <MenuItem as={'a'} href='#/'>Home</MenuItem>
            <Divider/>
            <MenuItem as={'a'} href='/about'>About</MenuItem>
            <Divider/>
            <MenuItem as={'a'} href='/projects'>Projects</MenuItem>
          </MenuList>
        </Menu>
      }

    </>
  )
}

export default Menuu