import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    const myRef = useRef();
	const [myElement, setMyElement] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if ( (myRef.current.offsetTop + 200) <= (window.pageYOffset + window.innerHeight))
				setMyElement(true);
		}
		document.addEventListener('scroll',handleScroll);
		return () => {
		  document.removeEventListener('scroll',handleScroll);
		}
	}, [myRef])
    return (
        <div id="Experience" ref={myRef}  className={!myElement ? "opacity-0 mt-20" : 'flex flex-col w-full my-20  px-10 sm:pl-[8%]  lg:pl-[20%] 2xl:pl-[25%] space-y-6 reveal mt-40'}>
            <div className='flex  items-center mb-10 space-x-7'>
                <h1 className='text-2xl text-sky-500 text-mono font-mono '>02. <span className='text-gray-300 text-3xl  font-bold'>Where I've Worked</span></h1>
                <div className='w-[250px] h-[1px] bg-gray-500 rounded-xl '></div>
            </div>
            <div className='flex space-x-6'>
                <div className='flex items-center space-x-3 pr-3 bg-gray-800 h-10'>
                    <div className='h-10 w-[2px] rounded-lg bg-sky-500'/>
                    <h1 className='text-sm text-sky-500 font-mono'>DROPLEET</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-gray-300 whitespace-pre text-lg font-mono mt-[5px]'>Engineer <span className='text-sky-500 font-mono text-lg'>@ DROPLEET</span></h1>
                    <h1 className='text-sm font-mon text-gray-400 mt-2'>May 2021 - Present</h1>
                    <div className='flex space-x-3 mt-8  w-[480px]'>
                        <FontAwesomeIcon icon={faCaretRight} className="text-sky-500 mt-1"/>
                        <h1 className='text-gray-500'>Write modern, performant, maintainable code for a diverse array of client and internal projects.</h1>
                    </div>
                    <div className='flex space-x-3 mt-8  w-[480px]'>
                        <FontAwesomeIcon icon={faCaretRight} className="text-sky-500 mt-1"/>
                        <h1 className='text-gray-500'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Node js,  React, and Next js.</h1>
                    </div>
                    <div className='flex space-x-3 mt-8  w-[480px]'>
                        <FontAwesomeIcon icon={faCaretRight} className="text-sky-500 mt-1"/>
                        <h1 className='text-gray-500'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</h1>
                    </div>
                    <div className='flex space-x-3 mt-8  w-[480px]'>
                        <FontAwesomeIcon icon={faCaretRight} className="text-sky-500 mt-1"/>
                        <h1 className='text-gray-500'>I was responsable in my enternship for creating a web application that allows users to rent cars and see prices in all the country and get in touch with rental agences.</h1>
                    </div>
                </div>
            </div>
        </div>
        
  )
}

export default Experience