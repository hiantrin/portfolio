import React from 'react'
import Avatar from '../images/hamza.jpeg'

const AbouMe = () => {
	const skills = [
		"JavaScript (ES6+)",
		"Tailwindcss",
		"React",
		"Node.js",
		"Express",
		"Mysql"
	]

	const mapSkills = 
		<div className='grid-cols-2 gap-4'>
			{skills.map((item, id) => {
				return(
					<div className='flex items-center justify-center space-x-2'>
						
					</div>
			)
			})}
		</div>
  return (
    <div className='flex flex-col w-full my-20  px-10 sm:pl-[10%] md:pl-[15%] lg:pl-[20%] xl:pl-[25%] space-y-6'>
        <div className='flex  items-center mb-10 space-x-7'>
            <h1 className='text-2xl text-green-300 text-mono font-mono '>01. <span className='text-gray-300 text-3xl  font-bold'>About Me</span></h1>
            <div className='w-[250px] h-[1px] bg-gray-500 rounded-xl '></div>
        </div>
        <div className='flex  w-auto'>
			<div className='flex flex-col w-[480px] mr-10 space-y-5'>
				<h1 className='text-gray-500 text-lg'>Hello! My name is Hamza and I enjoy creating things that live on the internet. My interest in web development started back in 2019 When i decided to enter 1337 programmation school turns out that am so good at programmation especially in developement web.</h1>
				<h1 className='text-gray-500 text-lg'>Now after 3years of 1337 cursus i become a full stack developer having specialization in back end and front end development. </h1>
				<h1 className='text-gray-500 text-lg'>I have created multiple web application that you will see some of them in my portfolio.</h1>
				<h1 className='text-gray-500 text-lg'>Also i have 6 months experience in my internship in DROPLEET between May 2021 - October 2021</h1>
				<h1 className='text-gray-500 text-lg'>Here are technologies am working with currently:</h1>
				<div className=''>

				</div>
			</div>
			<div className='relative w-80 h-80 image-hover'>
				<img alt="Avatar" src={Avatar} className="absolute w-full h-full rounded-lg z-10"/>
				<div className='w-full h-full absolute border-2 border-green-300 rounded-lg top-6 left-6 my-div' />
				<div className='absolute w-full h-full bg-green-300 z-20 rounded-lg opacity-50 my-div2' />
			</div>
			
        </div>
    </div>
  )
}

export default AbouMe