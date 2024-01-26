import React, { useState } from 'react'
import { useTheme } from '../context/Themecontext'
import Search from '../components/Search';
import Details from '../components/Details';
import { useUserData } from '../context/UserContext';
import { Toaster } from 'react-hot-toast';


const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const { data, isLoading } = useUserData()
  return (
    <>
      <Toaster position='top-center' />
      <div className='min-h-screen md:h-screen w-full dark:bg-black-dark p-[5%] md:p-[20%] bg-light flex flex-col items-center md:justify-center'>
        <div className='w-full flex justify-between'>
          <h1 className='dark:text-white text-2xl font-700'>gitFinder</h1>
          <div>
            <div className={`cursor-pointer flex gap-2 px-3 items-center ${theme === 'light' ? 'block' : 'hidden'}`} onClick={toggleTheme}>
              <img src='/icon-moon.svg' />
              <p className='text-[16px] font-medium'>Dark</p>
            </div>
            <div className={`cursor-pointer flex gap-2 px-2 items-center ${theme === 'light' ? 'hidden' : 'block'}`} onClick={toggleTheme}>
              <img src='/icon-sun.svg' />
              <p className='text-[16px] font-medium dark:text-white'>Light</p>
            </div>
          </div>
        </div>

        <Search />
        {
          isLoading ? (
            <img src='/loading.gif' alt='loader' className='h-[60px] w-[60px]'/>
          ) : (
            data && <Details />
          )
        }
      </div>
    </>
  )
}

export default Home
