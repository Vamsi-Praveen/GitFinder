import React from 'react'
import { useUserData } from '../context/UserContext'

const InfoCard = () => {
    const { data } = useUserData()
    return (
        <div className='w-[80%] px-2'>
            <div className='flex md:flex-row flex-col gap-3 md:justify-between'>
                <div className='flex flex-col md:gap-5 gap-3 justify-center'>
                    <div className='flex gap-3 dark:text-white items-center'>
                        <img src='/icon-location.svg' alt='icon' />
                        <h1 className='capitalize'>{data.location != null ? data.location : 'Not Available'}</h1>
                    </div>
                    <div className='flex gap-3 dark:text-white items-center'>
                        <img src='/icon-website.svg' alt='icon' />
                        <h1>{data.blog != "" ? data.blog : 'Not Available'}</h1>

                    </div>
                </div>
                <div className='flex flex-col md:gap-5 gap-3 justify-center'>
                    <div className='flex gap-3 dark:text-white items-center'>
                        <img src='/icon-twitter.svg' alt='icon' />
                        <h1>{data.twitter != null ? data.twitter : 'Not Available'}</h1>

                    </div>
                    <div className='flex gap-3 dark:text-white items-center'>
                        <img src='/icon-company.svg' alt='icon' />
                        <h1 className='capitalize'>{data.company != null ? data.company : 'Not Available'}</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
