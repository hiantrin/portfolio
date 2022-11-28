import React from 'react'

const Loading = ({isLoading}) => {
  return (
    <div className={isLoading ? "flex items-center justify-center w-screen h-screen " : "hidden"} >
        <div className='flex flex-col items-center justify-cente cursor-pointer animate-bounce'>
            <div className='triangle-big '></div>
            <h1 className='px-[25px]  border-logo-big text-sky-500 font-bold py-2 text-3xl'>H</h1>
            <div className='triangle2-big '></div>
        </div>
    </div>
  )
}

export default Loading