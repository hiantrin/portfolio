import React from 'react'

const Presentation = () => {
  return (
    <div className='flex flex-col pt-96  w-full h-screen  px-10 sm:pl-[10%] md:pl-[15%] lg:pl-[20%] xl:pl-[25%] space-y-6 '>
        <h1 className='text-green-300 text-md whitespace-pre anime'>Hi,    my   name   is</h1>
        <h1 className='text-6xl text-gray-200 font-bold anime1'>Hamza Iantrin.</h1>
        <h1 className='text-6xl text-gray-500 font-bold anime2'>I build things for the web.</h1>
        <div className='w-[500px]'>
            <h1 className='text-gray-300 text-xl anime3'>I'm a full stack web developer specializing in building Web Application. With an emphasis on responsive web design. </h1>
        </div>
        <button className='w-56 anime4'>Check out my Resume</button>
    </div>
  )
}

export default Presentation