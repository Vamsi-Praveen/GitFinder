import React from 'react'
import { useUserData } from '../context/UserContext'

const Search = () => {
    const { setUserId, onSubmit } = useUserData()
    const handlePress = (e) => {
        if (e.key == 'Enter') {
            onSubmit()
        }
    }
    return (
        <div className='my-[30px] flex px-4 py-4 md:gap-5 gap-1 items-center rounded-xl bg-white shadow-md dark:bg-dark-blue w-full'>
            <img src='/icon-search.svg' className='w-[20px] h-[20px]' />
            <input
                type='text'
                placeholder='Search Github Username...'
                className='border-none outline-none h-full w-full bg-transparent dark:text-white max-sm:placeholder:text-[15px]'
                onChange={(e) => { setUserId(e.target.value) }}
                onKeyDown={handlePress}
                spellCheck="false"
            />
            <button
                onClick={onSubmit}
                className='bg-primary rounded-md p-2 text-white font-700'>Search</button>
        </div>
    )
}

export default Search
