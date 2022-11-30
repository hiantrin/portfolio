import React, { useEffect } from 'react'
import Avatar from '../images/hamza.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { useState } from 'react';

const AbouMe = () => {
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
	const skills = [
		"JavaScript (ES6+)",
		"Tailwindcss",
		"React",
		"Node.js",
		"Express",
		"Mysql"
	]

	const mapSkills = 
		<div className='grid grid-cols-2 gap-4'>
			{skills.map((item, id) => {
				return(
					<div key={id} className='flex items-center  space-x-2'>
						<FontAwesomeIcon icon={faCaretRight} className="text-sky-500"/>
						<h1 className='text-xs sm:text-sm text-gray-500'>{item}</h1>
					</div>
			)
			})}
		</div>

  return (
    <div id="About" ref={myRef}  className={!myElement ? "opacity-0 " : 'flex flex-col w-full py-28  px-10 sm:pl-[8%]  xl:pl-[15%] 2xl:pl-[20%] space-y-6 reveal '}>
        <div className='flex  items-center mb-10 space-x-7'>
			<div className="min-w-max">
            	<h1 className=' text-md  sm:text-xl md:text-2xl text-sky-500 text-mono font-mono '>01. <span className='text-gray-300 text-lg sm:text-2xl md:text-3xl  font-bold'>About Me</span></h1>
			</div>
            <div className=' w-full md:w-[250px] h-[1px] bg-gray-500 rounded-xl '></div>
        </div>
        <div className='flex  w-auto flex-col md:flex-row space-y-28 md:space-y-0'>
			<div className='flex flex-col w-full  md:w-[50%] lg:w-[480px] mr-20 lg:mr-10 space-y-5'>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>Hello! My name is Hamza and I enjoy creating things that live on the internet.</h1>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>My interest in web development started back in 2019 When I decided to join 1337 Coding School, turns out that I am so good at programming. </h1>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>Now, after 3 years of studies at 1337 I become a Well-qualified Full stack Web Developer.</h1>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>I have created multiple web application that you will see some of them in my portfolio.</h1>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>Also I have 6 months experience in my internship at DROPLEET between May 2021 - October 2021</h1>
				<h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>Here are some technologies that I am working with currently:</h1>
				{mapSkills}
			</div>
			<div className="flex w-full justify-center md:w-auto">
				<div className='relative w-40 h-40 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-60 md:h-60 lg:w-80 lg:h-80 image-hover'>
					<img alt="Avatar" src={Avatar} className="absolute w-full h-full rounded-lg z-10"/>
					<div className='w-full h-full absolute border-2 border-sky-500 rounded-lg top-6 left-6 my-div' />
					<div className='absolute w-full h-full bg-sky-500 z-20 rounded-lg opacity-50 my-div2' />
				</div>
			</div>
        </div>
    </div>
  )
}

export default AbouMe