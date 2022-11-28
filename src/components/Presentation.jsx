import React, { useEffect, useRef, useState } from 'react'

const Presentation = () => {
  const myRef = useRef()

	const [myTail, setMyTail] = useState("") 

  useEffect(() => {
    const handleScroll = () => {
		console.log(window.innerHeight + "    " + myRef.current.clientHeight)
		if (window.innerHeight <= (myRef.current.clientHeight + 300))
			setMyTail(false)
		else
			setMyTail(true)
    }
    window.addEventListener('resize', handleScroll);
    return () => {
		  window.removeEventListener('resize', handleScroll);
		}
  }, [])
  useEffect(() => {
	const handleScroll = () => {
		if (window.innerHeight <= (myRef.current.clientHeight + 100))
			setMyTail(false)
		else
			setMyTail(true)
	}
	handleScroll();
  }, [])

  return (
	<div  className={`${myTail ? "h-screen pt-60 mt-36" : "pt-60 pb-40"}`}>
		<div ref={myRef} className={`flex flex-col   w-full  px-10 sm:pl-[8%]  xl:pl-[15%] 2xl:pl-[20%] space-y-6`}>
        <h1 className='text-sky-500 text-md whitespace-pre anime'>Hi,    my   name   is</h1>
        <h1 className='text-6xl text-gray-200 font-bold anime1'>Hamza Iantrin.</h1>
        <h1 className='text-6xl text-gray-500 font-bold anime2'>I build things for the web.</h1>
        <div className='w-[500px]'>
            <h1 className='text-gray-300 text-xl anime3'>I'm a full stack web developer specializing in building Web Application. With an emphasis on responsive web design. </h1>
        </div>
        <a href='/resume.pdf' target='_blank'><button className='w-56 anime4'>Check out my Resume</button></a>
    </div>

	</div>
     
  )
}

export default Presentation