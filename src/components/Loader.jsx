import React from 'react'

const Loader = () => {
    return (
        <div className='h-screen w-full bg-light dark:bg-dark-blue flex items-center justify-center'>
            <img src='/loading.gif' alt='loader' className='h-[60px] w-[60px]' />
        </div>
    )
}

export default Loader
