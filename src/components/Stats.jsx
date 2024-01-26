import React from 'react'
import { useUserData } from '../context/UserContext'

const Stats = () => {
  const {data} = useUserData()
  return (
    <div className='w-full dark:bg-black-dark rounded-md shadow-md bg-light md:px-10 px-3 py-2 flex items-center  justify-between h-[90px]'>
      <div className='flex flex-col '>
        <h1 className='text-grey dark:text-white/90'>Repos</h1>
        <p className='text-xl font-bold dark:text-white'>{data.public_repos}</p>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-grey dark:text-white/90'>Followers</h1>
        <p className='text-xl font-bold dark:text-white'>{data.followers}</p>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-grey dark:text-white/90'>Following</h1>
        <p className='text-xl font-bold dark:text-white'>{data.following}</p>
      </div>
    </div>
  )
}

export default Stats
