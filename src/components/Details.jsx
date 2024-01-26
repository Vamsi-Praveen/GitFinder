import React from 'react'
import Stats from './Stats'
import InfoCard from './infoCard'
import { useUserData } from '../context/UserContext'
import { formatDate } from '../helpers/functions.js'

const Details = () => {
  const { data } = useUserData()
  return (
    <div className='w-full'>
      <div className='rounded-md w-full bg-white shadow-md dark:bg-dark-blue md:px-[30px] px-[20px] py-[20px]'>
        <div className='w-full flex gap-6 items-center'>
          <img src={data.avatar_url != '' || data.avatar_url != null ? data.avatar_url : '/git.svg'} alt='profile' className='w-[120px] h-[120px] rounded-full object-cover' />
          <div className='w-full flex flex-col'>
            <div className='w-full flex justify-between max-sm:flex-col'>
              <div>
                <h1 className='text-2xl font-bold dark:text-white'>{data.name}</h1>
                <span className='text-primary'>@{data.login}</span>
              </div>
              <h1 className='dark:text-white text-[14px]'>Joined {formatDate(data.created_at)}</h1>
            </div>
            <p className='capitalize dark:text-white/80 my-1 hidden md:block'>{data.bio != '' ? data.bio : 'This Profile Doesn\'t contain bio.'}</p>
          </div>
        </div>
        <p className='capitalize dark:text-white/80 my-2 md:hidden'>{data.bio != '' ? data.bio : 'This Profile Doesn\'t contain bio.'}</p>
        <div className='w-full flex md:justify-end'>
          <div className='md:w-[84%] w-full flex flex-col gap-5'>
            <Stats />
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
