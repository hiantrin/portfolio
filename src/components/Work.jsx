import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import matchaa from '../images/matcha.png'
import Github from '../images/github.png'
import hypertube from '../images/hypertube.png'


const Work = () => {
    const myRef = useRef();
	const [myElement, setMyElement] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if ( (myRef.current.offsetTop  + 600) <= (window.pageYOffset + window.innerHeight))
				setMyElement(true);
		}
		document.addEventListener('scroll',handleScroll);
		return () => {
		  document.removeEventListener('scroll',handleScroll);
		}
	}, [myRef])

  return (
    <div id="Work" ref={myRef}  className={!myElement ? "opacity-0 " : 'flex flex-col w-full my-20  px-10 sm:pl-[8%]  xl:pl-[15%] 2xl:pl-[20%]  reveal mt-96 pb-20 mb-96'}>
         <div className='flex  items-center mb-10 space-x-7'>
            <h1 className='text-2xl text-sky-500 text-mono font-mono '>03. <span className='text-gray-300 text-3xl  font-bold'>Some Things I’ve Built</span></h1>
            <div className='w-[250px] h-[1px] bg-gray-500 rounded-xl '></div>
        </div>
        <div className='w-[1000px]   flex flex-col items-end relative pb-2 mb-36'>
            <h1 className='text-sm text-mono text-sky-500 mb-4 mt-10'>Featured Project</h1>
            <h1 className='text-2xl font-bold text-gray-300 font-mono mb-6'>Matchaa for dating</h1>
            <div className='flex p-5 bg-gray-800 w-[500px] z-30 rounded-md mb-3 text-right'>
                <h1 className='text-gray-400 text-lg'>This project is about creating a dating website.A user will then be able to register, connect, fill his/her profile, search and look intothe profile of other users, like them 1, chat with those that “liked” back.</h1>
            </div>
            <div className='flex space-x-3 mb-5'>
                <h1 className='text-sm text-gray-400 font-mono'>React</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Node.js</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Express</h1>
                <h1 className='text-sm text-gray-400 font-mono'>MySQL</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Tailwindcss</h1>
            </div>
            <img alt="Github" src={Github} className="w-7 h-7 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"/>
            <div className='absolute top-0 left-0 w-[600px] h-full'>
                <img alt="matchaa" src={matchaa} className="rounded-md h-full w-full"></img> 
                <div className='w-full h-full absolute top-0  z-20 bg-sky-500 opacity-50 hover:opacity-0' />
            </div>
        </div>
        <div className='w-[1000px]   flex flex-col items-start relative pb-2 '>
            <h1 className='text-sm text-mono text-sky-500 mb-4 mt-10'>Featured Project</h1>
            <h1 className='text-2xl font-bold text-gray-300 font-mono mb-6'>Hypertube for movies</h1>
            <div className='flex p-5 bg-gray-800 w-[500px] z-30 rounded-md mb-3'>
                <h1 className='text-gray-400 text-lg'>This project proposes to create a web application that allows the user to research and watch movies with multiple qualities.</h1>
            </div>
            <div className='flex space-x-3 mb-5'>
                <h1 className='text-sm text-gray-400 font-mono'>React</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Node.js</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Express</h1>
                <h1 className='text-sm text-gray-400 font-mono'>MySQL</h1>
                <h1 className='text-sm text-gray-400 font-mono'>Tailwindcss</h1>
            </div>
            <img alt="Github" src={Github} className="w-7 h-7 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"/>
            <div className='absolute top-0 right-0 w-[600px] h-full'>
                <img alt="hypertube" src={hypertube} className="rounded-md h-full w-full"></img>
                <div className='w-full h-full absolute top-0  z-20 bg-sky-500 opacity-50 hover:opacity-0' />
            </div>
        </div>
        
    </div>
  )
}

export default Work